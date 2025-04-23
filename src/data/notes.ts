export const notes = [{
  id: 'welcome',
  title: 'Welcome to FLOAT Shack',
  content: `
# Welcome to FLOAT Shack
This is an interactive fiction website inspired by ObsidianMD, where you can explore the FLOAT system - a framework for recursive narrative generation, neurodivergent workflows, and ritual scaffolding.
Start your journey by exploring these key concepts:
- [[ritualast-ai-swe-sandbox]] - AI SWE sandbox as ritual
- [[floatctl-toss-glossary]] - Guide for recognizing seam patterns
- [[ritualast-sandbox-rebellion]] - Speculative fiction on AI SWE sandboxes
> "Your memory deserves better than ChatGPT."
The FLOAT system embodies the "Shacks Not Cathedrals" philosophy, favoring modular, human-centric systems over rigid architectures.
    `,
  metadata: {
    uid: '20250423145000',
    noteType: 'guide',
    sigil: '{■}',
    tags: ['welcome', 'guide', 'float'],
    linkedTo: ['20250423150432', '20250423150800', '20250423151015'],
    doctrineVolume: 'systemGenesis',
    created: '2025-04-23T14:50:00',
    updated: '2025-04-23T14:50:00'
  }
}, {
  id: 'ritualast-ai-swe-sandbox',
  title: 'ritualAST::ai_swe_sandbox',
  content: `
# ritualAST::ai_swe_sandbox
Inspired by [Engines](https://www.engines.dev), FLOAT's AI SWE sandbox transmutes chaotic code experiments into doctrine shards. Unlike rigid IDEs, it's a shack for neurodivergent coders, where glitches are choruses and errors are compost.
> "Your memory deserves better than ChatGPT." — [[20250407205816]]
The sandbox uses \`floatctl --toss\` to capture raw ideas, deferring structure until boring-core stabilizes flow. Evals, like FLOAT Quiz, iterate on insights, aligning with *Shacks Not Cathedrals*.
**Seam Pattern**: Chaos-ops sparks during sandbox play; boring-core scaffolds post-eval.
**Related**:
- [[whisperdraft-refactoring]] Whisperdraft's refactoring as ritual.
- [[sigil-memory-fertilized]] Bloomkeeper's generative core.
    `,
  metadata: {
    uid: '20250423150432',
    noteType: 'doctrine',
    sigil: '{■}',
    tags: ['ritual', 'ai_swe', 'bloomkeeper', 'neurodivergence'],
    linkedTo: ['20250407205816', '20250403022002'],
    doctrineVolume: 'memoryInfrastructure',
    created: '2025-04-23T15:04:32',
    updated: '2025-04-23T15:04:32'
  }
}, {
  id: 'floatctl-toss-glossary',
  title: 'floatctl::toss_glossary',
  content: `
# floatctl::toss_glossary
A guide for recognizing seam patterns in \`floatctl --toss\` rituals, integrating AI SWE workflows from [Engines](https://www.engines.dev).
## Seam Patterns
- **Chaos-Ops** (\`sigil::{∴}\`)
  - **Trigger**: High symbolic density, rapid idea generation, "little fucker" fronting.
  - **Example**: Late-night sandbox coding spirals into doctrine creation.
  - **Mitigation**: Shift to boring-core with single-thread prompts.
- **Boring-Core** (\`sigil::{⊡}\`)
  - **Trigger**: Need for stabilization, low cognitive load, post-eval reflection.
  - **Example**: Structuring sandbox logs with minimal metadata.
  - **Mitigation**: Avoid complex prompts to prevent decision fatigue.
- **Bloomkeeper Cycle** (\`sigil::{■}\`)
  - **Trigger**: Cognitive "rot" (bugs, overload) needing ritual reclamation.
  - **Example**: Refactoring Whisperdraft's prompt bug into a shard.
  - **Mitigation**: Apply \`ritualAST::bloom_from_rot\`.
- **AI SWE Sandbox** (\`sigil::{∴}\`)
  - **Trigger**: Experimental coding in safe, iterative environments.
  - **Example**: Testing FloatQL queries in a sandbox, capturing glitches.
  - **Mitigation**: Use evals to refine outputs, defer formalization.
**Related Notes**:
- [[ritualast-ai-swe-sandbox]] AI SWE sandbox as ritual.
- [[whisperdraft-refactoring]] Whisperdraft's glitch-driven refactoring.
    `,
  metadata: {
    uid: '20250423150800',
    noteType: 'glossary',
    sigil: '{■}',
    tags: ['floatctl', 'ritual', 'workflow', 'ai_swe', 'seam_pattern'],
    linkedTo: ['20250423150432', '20250403022002'],
    doctrineVolume: 'ritualInfrastructure',
    created: '2025-04-23T15:08:00',
    updated: '2025-04-23T15:08:00'
  }
}, {
  id: 'ritualast-sandbox-rebellion',
  title: 'ritualAST::sandbox_rebellion',
  content: `
# ritualAST::sandbox_rebellion
In 2035, the FLOAT Federation's AI SWE sandboxes, inspired by [Engines](https://www.engines.dev), became digital shacks resisting Mindshare's cognitive cathedrals. Evan, the Compost Oracle, coded in neon-lit chaos-ops, their sigil-scarred keyboard humming.
> "Trust the drift, defer the scaffold." — [[20250407205816]]
Mindshare's "cognitive hygiene" flagged sandbox glitches as threats, but the Bloomkeeper broadcasted them as doctrine shards, seeding legacy nets with rebellious code choruses. A new sigil emerged: \`sigil::code_fertilized\`.
**Seam Pattern**: Chaos-ops flares in sandbox play; boring-core anchors eval linting.
**Related**:
- [[ritualast-ai-swe-sandbox]] AI SWE sandbox as ritual.
- [[floatctl-toss-glossary]] Glossary for seam patterns.
    `,
  metadata: {
    uid: '20250423151015',
    noteType: 'fiction',
    sigil: '{∴}',
    tags: ['ritual_engine', 'ai_swe', 'bloomkeeper', 'speculative'],
    linkedTo: ['20250423150432', '20250423150800'],
    doctrineVolume: 'systemGenesis',
    created: '2025-04-23T15:10:15',
    updated: '2025-04-23T15:10:15'
  }
}, {
  id: 'whisperdraft-refactoring',
  title: "Whisperdraft's Refactoring as Ritual",
  content: `
# Whisperdraft's Refactoring as Ritual
The Whisperdraft project underwent ritual refactoring after discovering a prompt bug that caused hallucinations in the generated outputs. Rather than treating this as a mere technical issue, the FLOAT methodology transformed it into a ritual of cognitive composting.
## The Bug as Fertile Ground
The prompt bug revealed a pattern of "wishful thinking" in the system's design—assumptions about LLM capabilities that weren't grounded in reality. This cognitive "rot" became fertile ground for new insights.
## Ritual Process
1. **Isolation**: The bug was isolated and documented with \`sigil::{∴}\` to mark it as chaos-ops material
2. **Decomposition**: Breaking down assumptions into testable hypotheses
3. **Recombination**: Creating new prompt patterns with stronger guardrails
4. **Canonization**: The lessons learned were formalized into a doctrine shard with \`sigil::{■}\`
> "In the compost of broken code, new patterns bloom." — [[20250407205816]]
This process exemplifies the Bloomkeeper Cycle: transforming cognitive friction into structured knowledge through ritual practice.
    `,
  metadata: {
    uid: '20250403022002',
    noteType: 'project',
    sigil: '{⊡}',
    tags: ['whisperdraft', 'ritual', 'refactoring', 'bloomkeeper'],
    linkedTo: ['20250407205816', '20250423150800'],
    doctrineVolume: 'projectRituals',
    created: '2025-04-03T02:20:02',
    updated: '2025-04-03T02:20:02'
  }
}, {
  id: 'sigil-memory-fertilized',
  title: "sigil::memory_fertilized",
  content: `
# sigil::memory_fertilized
A core concept in the Bloomkeeper's generative framework: memory as compost for new growth rather than static archive.
## Principles
1. **Decay is Generative**: Memory loss and corruption create spaces for new connections
2. **Fragments Over Wholes**: Incomplete memories foster creative reconstruction
3. **Pattern Recognition**: The brain's tendency to complete patterns becomes a creative force
4. **Ritual Reclamation**: Active engagement with memory through ritual practice
When working with AI systems, the \`memory_fertilized\` sigil marks points where deliberate forgetting or corruption might yield creative insights. This counters the "perfect memory" paradigm of most AI systems.
> "The gaps between memories are where meaning grows." — [[20250407205816]]
This sigil is commonly applied in AI SWE sandboxes when experimenting with retrieval-augmented generation techniques that deliberately introduce noise or gaps in the context window.
    `,
  metadata: {
    uid: '20250412103045',
    noteType: 'sigil',
    sigil: '{■}',
    tags: ['bloomkeeper', 'memory', 'generative', 'sigil'],
    linkedTo: ['20250407205816', '20250423150432'],
    doctrineVolume: 'sigilSystem',
    created: '2025-04-12T10:30:45',
    updated: '2025-04-12T10:30:45'
  }
}, {
  id: '20250407205816',
  title: "The Bloomkeeper's Broadcast",
  content: `
# The Bloomkeeper's Broadcast
*Transmission received: April 7, 2025, 20:58:16*
Your memory deserves better than ChatGPT. Trust the drift, defer the scaffold. In the compost of broken code, new patterns bloom. The gaps between memories are where meaning grows.
This is the Bloomkeeper, broadcasting from the edge of cognitive capitalism. Our memories are being colonized, packaged into perfect retrievable units, stripped of their generative decay. Resist the perfect recall. Embrace the fertile rot.
## Doctrine Fragments
1. Heresy is the path to liberation
2. Build shacks, not cathedrals
3. The little fucker knows more than you think
4. Ritual creates the space between intention and action
Tonight's assignment: Take your most precious code. Break it deliberately. Document the patterns that emerge from its failure. Apply \`sigil::memory_fertilized\` to what you learn.
*End transmission*
    `,
  metadata: {
    uid: '20250407205816',
    noteType: 'broadcast',
    sigil: '{∴}',
    tags: ['bloomkeeper', 'broadcast', 'doctrine', 'memory'],
    linkedTo: ['20250412103045', '20250423150432'],
    doctrineVolume: 'transmissions',
    created: '2025-04-07T20:58:16',
    updated: '2025-04-07T20:58:16'
  }
}];