/** How well I know each tool, said as a sentence I can defend in an interview. */
export const skills: { group: string; items: [string, string][] }[] = [
  { group: 'Method & AI', items: [
    ['Design documents', 'Use cases, activity and sequence diagrams, data models (MCD/MLD), API specs — written for every SAE.'],
    ['Maintainable, tested code', 'Layered routes → services → repositories, written decision records, a refusal test for every access rule (144 tests on the tournament API).'],
    ['AI-assisted development', 'Claude Code with project rules (CLAUDE.md), a read-only reviewer sub-agent and parallel sessions; every diff reviewed before commit.'],
  ]},
  { group: 'Programming languages', items: [
    ['TypeScript · JavaScript', 'Front and back: React, Express, React Native.'],
    ['Java', 'The Cabinet Phénix tool and a 2D game, both in JavaFX.'],
    ['Python', 'Flask APIs and scripting in TouchDesigner.'],
    ['SQL', 'Hand-written queries and schemas, without an ORM, in the tournament platform.'],
  ]},
  { group: 'Frameworks & libraries', items: [
    ['React', 'Used in shipped projects (tournament platform, open-days app).'],
    ['React Native · Expo', 'Building Climat Fitness with it now.'],
    ['Node.js · Express · Socket.io', 'The tournament API and its real-time layer.'],
    ['Flask', 'The open-days app API.'],
    ['JavaFX · Apache POI', 'Desktop apps and Excel processing.'],
  ]},
  { group: 'Databases', items: [
    ['PostgreSQL · SQLite', 'SQLite in the tournament platform; PostgreSQL in course work.'],
    ['MongoDB', 'Used in shipped projects.'],
    ['Neo4j', 'Course labs.'],
  ]},
  { group: 'Tools & infra', items: [
    ['Git · Linux · SSH', 'Daily use, tmux sessions on remote machines.'],
    ['Docker', 'In my homelab and in IUT labs.'],
    ['Vercel · Caddy · Proxmox', 'Vercel for deploys; Caddy and Proxmox in my homelab.'],
    ['Kubernetes', 'Learning it at school.'],
  ]},
];
