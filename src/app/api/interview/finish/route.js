import { NextResponse } from 'next/server';

// In-memory storage for the latest interview result
// Note: In a production serverless environment, this should be replaced with Redis or a database
// because global variables may not persist across function invocations or may be shared/split unpredictably.
if (!global.interviewData) {
  global.interviewData = null;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { agentId, agentName, systemMessage } = body;

    console.log('[API] Received Interview Finish Webhook:', { agentId, agentName });

    // Validate payload
    if (!agentName) {
      return NextResponse.json(
        { error: 'Missing agentName in payload' },
        { status: 400 }
      );
    }

    // Store data globally
    global.interviewData = {
      agentId,
      agentName,
      systemMessage,
      timestamp: Date.now(),
    };

    return NextResponse.json({ success: true, message: 'Data received' });
  } catch (error) {
    console.error('[API] Webhook Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return the latest data (polling endpoint)
  // Logic: Client polls this. If non-null, client transitions.
  // Optional: We can implement "consumption" logic (clear after read) if needed,
  // but for now we just return the current state.
  return NextResponse.json({ 
    data: global.interviewData 
  });
}
