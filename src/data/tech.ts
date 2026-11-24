import * as si from 'simple-icons';

export type Tech = { name: string; icon?: { path: string; hex: string }; text?: string };
const i = (name: string, icon: si.SimpleIcon): Tech => ({ name, icon: { path: icon.path, hex: icon.hex } });
const txt = (name: string, text: string): Tech => ({ name, text });

/** What I reach for most days. */
export const daily: Tech[] = [
  i('TypeScript', si.siTypescript),
  i('React', si.siReact),
  i('Node.js', si.siNodedotjs),
  i('Express', si.siExpress),
  txt('SQL', 'SQL'),
  i('Docker', si.siDocker),
  i('Git', si.siGit),
  i('Claude Code', si.siClaude),
];

export const groups: { id: 'languages' | 'front' | 'back' | 'data' | 'tools'; items: Tech[] }[] = [
  { id: 'languages', items: [i('TypeScript', si.siTypescript), i('JavaScript', si.siJavascript), i('Java', si.siOpenjdk), i('Python', si.siPython), txt('SQL', 'SQL')] },
  { id: 'front', items: [i('React', si.siReact), i('React Native', si.siReact), i('Expo', si.siExpo), i('Astro', si.siAstro)] },
  { id: 'back', items: [i('Node.js', si.siNodedotjs), i('Express', si.siExpress), i('Socket.io', si.siSocketdotio), i('Flask', si.siFlask), txt('JavaFX', 'FX')] },
  { id: 'data', items: [i('PostgreSQL', si.siPostgresql), i('SQLite', si.siSqlite), i('MongoDB', si.siMongodb), i('Neo4j', si.siNeo4j), i('Docker', si.siDocker), i('Kubernetes', si.siKubernetes), i('Linux', si.siLinux), i('Proxmox', si.siProxmox)] },
  { id: 'tools', items: [i('Git', si.siGit), i('Vercel', si.siVercel), i('Jira', si.siJira), i('Jest', si.siJest), i('Swagger', si.siSwagger), i('Claude Code', si.siClaude)] },
];
