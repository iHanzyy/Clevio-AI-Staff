"use client";

import { apiService } from "./api";
import GOOGLE_SCOPE_MAP from "@/data/google_scope_tools.json";

const FALLBACK_GOOGLE_SCOPE = "https://www.googleapis.com/auth/gmail.readonly";

/**
 * Collect Google OAuth scopes from tool IDs using the scope map.
 * @param {string[]} toolIds - Array of Google tool IDs
 * @returns {string[]} - Array of OAuth scopes
 */
const collectScopesFromMap = (toolIds = []) => {
  const scopes = new Set();
  (toolIds || []).forEach((toolId) => {
    const normalized =
      typeof toolId === "string" ? toolId.trim().toLowerCase() : "";
    if (!normalized) return;
    const mapped = GOOGLE_SCOPE_MAP?.[normalized];
    if (Array.isArray(mapped)) {
      mapped.forEach((scope) => scope && scopes.add(scope));
    }
  });
  return Array.from(scopes);
};

/**
 * Trigger Google OAuth for an agent with Google tools.
 * This is used after agent creation to initiate the OAuth flow.
 * 
 * @param {Object} options
 * @param {string} options.agentId - The ID of the created agent
 * @param {string[]} options.googleTools - Array of Google tool IDs selected for the agent
 * @returns {Promise<{authUrl: string|null, authState: string|null}>}
 */
export async function triggerGoogleOAuth({ agentId, googleTools }) {
  if (!agentId) {
    console.warn("[triggerGoogleOAuth] No agent ID provided");
    return { authUrl: null, authState: null };
  }

  const tools = Array.isArray(googleTools) ? googleTools : [];
  
  // Filter to only include actual Google tools
  const actualGoogleTools = tools.filter(
    (t) => typeof t === "string" && (t.startsWith("google_") || t.startsWith("gmail"))
  );

  if (actualGoogleTools.length === 0) {
    console.log("[triggerGoogleOAuth] No Google tools found, skipping OAuth");
    return { authUrl: null, authState: null };
  }

  // Store pending agent for OAuth completion tracking
  if (typeof window !== "undefined") {
    try {
      window.sessionStorage.setItem(
        "pendingGoogleConnectAgent",
        agentId.toString()
      );
    } catch (error) {
      console.warn("[triggerGoogleOAuth] Failed to persist pending agent context", error);
    }
  }

  // Collect scopes from the scope map
  let scopes = collectScopesFromMap(actualGoogleTools);

  // Fallback: try to fetch scopes from API if map returned empty
  if (scopes.length === 0) {
    try {
      const scopesResp = await apiService.getRequiredToolScopes(actualGoogleTools);
      if (Array.isArray(scopesResp?.scopes) && scopesResp.scopes.length > 0) {
        scopes = scopesResp.scopes;
      }
    } catch (error) {
      console.warn("[triggerGoogleOAuth] Failed to fetch required scopes from API", error);
    }
  }

  // Ultimate fallback: use a default Gmail scope
  if (scopes.length === 0) {
    scopes = [FALLBACK_GOOGLE_SCOPE];
  }

  try {
    console.log("[triggerGoogleOAuth] Starting Google OAuth for agent:", agentId, "with scopes:", scopes);
    const googleAuth = await apiService.startGoogleAuth(scopes, agentId);
    const authUrl = googleAuth?.auth_url || googleAuth?.authUrl || null;
    const authState = googleAuth?.auth_state || googleAuth?.authState || null;
    
    console.log("[triggerGoogleOAuth] OAuth initiated:", { authUrl: !!authUrl, authState: !!authState });
    return { authUrl, authState };
  } catch (error) {
    console.error("[triggerGoogleOAuth] Failed to initiate Google OAuth", error);
    return { authUrl: null, authState: null };
  }
}

/**
 * Check if a payload contains Google tools that require OAuth.
 * @param {Object} payload - Agent payload
 * @returns {boolean}
 */
export function hasGoogleToolsRequiringOAuth(payload) {
  const tools = Array.isArray(payload?.google_tools) ? payload.google_tools : [];
  return tools.some(
    (t) => typeof t === "string" && (t.startsWith("google_") || t.startsWith("gmail"))
  );
}

export default triggerGoogleOAuth;
