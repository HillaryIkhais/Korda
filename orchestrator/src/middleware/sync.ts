import { ingestMemoryCapability } from '../capabilities/memory';

/**
 * Mutual Agentic Reasoning (MAR) Synchronization Middleware.
 * 
 * In a multi-agent system, an agent's novel conclusion must be synchronized 
 * back into the Cognee graph before the next agent begins execution. 
 * This ensures that subsequent agents don't just receive text strings, 
 * but receive the full topological relationships (Theory of Mind).
 */
export async function synchronizeAgentState(
  agentName: string, 
  projectName: string, 
  taskConclusion: string
) {
  console.log(`[MAR Sync] Synchronizing state for ${agentName} into Cognee graph...`);
  
  // Format the agent's conclusion as a formal artifact for the graph
  const content = `
    Source Agent: ${agentName}
    Timestamp: ${new Date().toISOString()}
    Conclusion:
    ${taskConclusion}
  `;

  try {
    const result = await ingestMemoryCapability.run({
      project_name: projectName,
      artifact_type: 'Documentation', // Ontological mapping
      content: content
    });
    
    console.log(`[MAR Sync] State synchronization successful:`, result);
    return true;
  } catch (error) {
    console.error(`[MAR Sync] Failed to synchronize state for ${agentName}:`, error);
    // In a production Level 3 scenario, this might trigger a Human Assistance Request
    return false;
  }
}
