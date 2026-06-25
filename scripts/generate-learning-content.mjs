import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const contentRoot = join(root, 'src/content/learn');
const marker = '{/* generated-learning-content */}';

const sections = [
  {
    slug: 'getting-started',
    title: 'Getting started',
    lab: 'Use your notes app and a local intentionally vulnerable target. Keep every action inside your own lab or an authorized training platform.',
    outcomes: ['choose a safe practice target', 'set up a repeatable study loop', 'know when to move from reading to testing'],
    topics: [
      'Learning roadmap for offensive security',
      'Choosing a safe practice lab',
      'Setting up notes that scale',
      'Reading technical writeups',
      'Building a weekly study routine',
      'Using CTFs without getting stuck',
      'Understanding authorization and scope',
      'Creating a personal lab checklist',
      'Measuring progress without vanity metrics',
      'Moving from tutorials to independent testing',
    ],
  },
  {
    slug: 'foundations',
    title: 'Security foundations',
    lab: 'Draw a tiny web app on paper with a user, browser, API, database, and admin panel. Mark every trust boundary before thinking about bugs.',
    outcomes: ['describe the security goal', 'separate impact from technique', 'explain the trust boundary in plain language'],
    topics: [
      'Security goals and tradeoffs',
      'Assets, threats, and controls',
      'Trust boundaries in applications',
      'HTTP request and response anatomy',
      'Same-origin policy fundamentals',
      'Threat modeling a small web app',
      'Risk, likelihood, and impact',
      'Input validation vs output encoding',
      'Authentication vs authorization',
      'Reading security advisories',
    ],
  },
  {
    slug: 'tooling-workflows',
    title: 'Tools and workflows',
    lab: 'Create one workspace folder per target with notes, screenshots, requests, and a short daily log. The goal is repeatability, not tool volume.',
    outcomes: ['capture evidence cleanly', 'compare responses without guessing', 'keep commands and scope decisions reproducible'],
    topics: [
      'Terminal workflow for security labs',
      'Proxy setup with browser profiles',
      'Wordlist selection and tuning',
      'Screenshot and evidence workflow',
      'Keeping reproducible command logs',
      'Building small helper scripts',
      'Organizing Burp or ZAP projects',
      'Comparing responses safely',
      'Rate limits and respectful testing',
      'Turning notes into reports',
    ],
  },
  {
    slug: 'linux',
    title: 'Linux',
    lab: 'Use a disposable Linux VM or container. Make one change at a time, record it, then revert or rebuild when the system becomes messy.',
    outcomes: ['read permissions confidently', 'trace process and service behavior', 'recognize risky configuration in a lab'],
    topics: [
      'Linux filesystem navigation',
      'Users, groups, and permissions',
      'Processes and services',
      'Environment variables and PATH',
      'File capabilities overview',
      'Cron and scheduled jobs',
      'Logs and audit trails',
      'Package managers and installed software',
      'SUID and SGID review',
      'Hardening a practice VM',
    ],
  },
  {
    slug: 'networking',
    title: 'Networking',
    lab: 'Capture traffic between your browser and a local service. Label source, destination, protocol, and purpose before drawing conclusions.',
    outcomes: ['map traffic flow', 'identify service boundaries', 'read packet evidence without overclaiming'],
    topics: [
      'TCP and UDP fundamentals',
      'DNS records and resolution',
      'TLS certificate inspection',
      'HTTP over the wire',
      'Routing and subnets',
      'Common service ports',
      'Packet capture with tcpdump',
      'Reading Wireshark conversations',
      'Firewall rule basics',
      'Safe network scanning',
    ],
  },
  {
    slug: 'web-security',
    title: 'Web security',
    lab: 'Use a local training app and proxy only your own browser traffic. Write down each request, input, state change, and expected authorization rule.',
    outcomes: ['map user-controlled input', 'separate client behavior from server enforcement', 'spot security assumptions in common web flows'],
    topics: [
      'Browser to server request flow',
      'Forms and server-side validation',
      'Cookies, sessions, and attributes',
      'File upload review',
      'Server-side request forgery concepts',
      'Open redirects and URL parsing',
      'Template rendering risks',
      'Caching and sensitive data',
      'Error handling and information leaks',
      'Web app attack surface mapping',
    ],
  },
  {
    slug: 'api-security',
    title: 'API security',
    lab: 'Import a toy API into a client, create two test users, and compare requests without touching real user data or third-party systems.',
    outcomes: ['inventory endpoints', 'test authorization intentionally', 'explain API impact with concrete object and user boundaries'],
    topics: [
      'REST endpoint inventory',
      'GraphQL schema reading',
      'API versioning and shadow endpoints',
      'Mass assignment review',
      'Pagination and object enumeration',
      'Rate limiting and abuse cases',
      'Webhook security basics',
      'API token handling',
      'Schema validation patterns',
      'Testing API authorization',
    ],
  },
  {
    slug: 'authentication',
    title: 'Authentication',
    lab: 'Use a local demo app with throwaway accounts. Record the intended identity proof, session issue, recovery path, and failure behavior.',
    outcomes: ['trace login state', 'separate identity proof from authorization', 'review recovery flows without harming real accounts'],
    topics: [
      'Password reset flow review',
      'Session fixation concepts',
      'MFA enrollment and recovery',
      'OAuth authorization code flow',
      'OpenID Connect token basics',
      'Account enumeration signals',
      'Login throttling and lockouts',
      'Remember-me token risks',
      'Device trust and session management',
      'SSO misconfiguration review',
    ],
  },
  {
    slug: 'access-control',
    title: 'Access control',
    lab: 'Create at least two lab users with different roles. For every request, write who owns the object and who should be allowed to act on it.',
    outcomes: ['identify ownership checks', 'compare horizontal and vertical access', 'document missing authorization with minimal data exposure'],
    topics: [
      'Ownership checks and IDORs',
      'Role-based access control review',
      'Multi-tenant data boundaries',
      'Horizontal vs vertical privilege',
      'Method confusion in authorization',
      'Object references in APIs',
      'Admin UI boundary testing',
      'Shared resource permissions',
      'Approval workflow bypasses',
      'Centralized authorization patterns',
    ],
  },
  {
    slug: 'injection',
    title: 'Injection',
    lab: 'Practice only against toy inputs that you control. Compare safe, expected behavior against malformed input without running destructive payloads.',
    outcomes: ['recognize interpreter boundaries', 'prefer read-only proof', 'explain the defensive pattern that removes the bug class'],
    topics: [
      'SQL injection mental model',
      'Command injection guardrails',
      'Server-side template injection concepts',
      'LDAP injection basics',
      'NoSQL query injection',
      'XML external entity review',
      'Deserialization risk overview',
      'Header injection and response splitting',
      'Path traversal fundamentals',
      'Parameterized query patterns',
    ],
  },
  {
    slug: 'client-side-security',
    title: 'Client-side security',
    lab: 'Use a local page and browser devtools. Treat client-side checks as hints and verify which protections are enforced by the server.',
    outcomes: ['identify browser-enforced boundaries', 'review JavaScript behavior safely', 'connect client bugs to server-side impact'],
    topics: [
      'DOM XSS source and sink review',
      'Content Security Policy basics',
      'CORS configuration review',
      'postMessage validation',
      'Browser storage decisions',
      'Client-side route guards',
      'CSRF prevention patterns',
      'Clickjacking defenses',
      'JavaScript bundle review',
      'Dependency risk in frontend apps',
    ],
  },
  {
    slug: 'cloud-security',
    title: 'Cloud security',
    lab: 'Use a personal sandbox account with billing alerts and least privilege. Prefer read-only review tasks until you understand the blast radius.',
    outcomes: ['inventory cloud assets', 'read identity policy intent', 'describe exposure without changing production resources'],
    topics: [
      'Cloud identity fundamentals',
      'IAM policy reading',
      'Public storage exposure review',
      'Metadata service concepts',
      'Serverless function boundaries',
      'Cloud logging for investigators',
      'Secrets in build systems',
      'Network security groups',
      'Least privilege for service accounts',
      'Cloud asset inventory',
    ],
  },
  {
    slug: 'containers',
    title: 'Containers',
    lab: 'Use local containers and disposable clusters. Keep images small, avoid privileged mode, and write down which boundary you are testing.',
    outcomes: ['read image and runtime configuration', 'separate container risk from host risk', 'spot common deployment mistakes'],
    topics: [
      'Docker image layers',
      'Dockerfile security review',
      'Container runtime boundaries',
      'Secrets in container builds',
      'Compose lab networking',
      'Kubernetes object model',
      'Kubernetes RBAC basics',
      'Pod security contexts',
      'Image scanning triage',
      'Container escape concepts in labs',
    ],
  },
  {
    slug: 'active-directory',
    title: 'Active Directory',
    lab: 'Build a private Windows domain lab or use a training range. Do not point enumeration tools at networks you do not administer or have permission to assess.',
    outcomes: ['explain domain identity flow', 'recognize high-value relationships', 'collect evidence in a lab without disrupting services'],
    topics: [
      'Domain concepts and terminology',
      'Kerberos ticket flow',
      'LDAP directory basics',
      'Group Policy overview',
      'Service accounts and SPNs',
      'Delegation concepts',
      'Local admin exposure',
      'Password policy review',
      'Windows event logs for labs',
      'Building a safe AD lab',
    ],
  },
  {
    slug: 'cryptography',
    title: 'Cryptography',
    lab: 'Use toy messages and known test vectors. Never experiment on production secrets, private keys, or data you are not allowed to handle.',
    outcomes: ['name the primitive and its job', 'recognize common misuse patterns', 'recommend simple, standard defenses'],
    topics: [
      'Encoding vs encryption',
      'Hashing and password storage',
      'Randomness and token entropy',
      'Symmetric encryption modes',
      'Public key basics',
      'TLS handshake concepts',
      'JWT signing mistakes',
      'Replay protection and nonces',
      'Key rotation planning',
      'Crypto challenge workflow',
    ],
  },
  {
    slug: 'forensics',
    title: 'Forensics',
    lab: 'Work from copies, preserve originals, and record each transformation. The value of evidence depends on repeatability.',
    outcomes: ['preserve evidence context', 'build a defensible timeline', 'write findings without unsupported claims'],
    topics: [
      'Evidence handling basics',
      'File metadata triage',
      'Timeline building',
      'Log source inventory',
      'Packet capture triage',
      'Memory image orientation',
      'Browser artifact review',
      'Email header analysis',
      'Hashing evidence files',
      'Writing a forensic summary',
    ],
  },
  {
    slug: 'reverse-engineering',
    title: 'Reverse engineering',
    lab: 'Analyze only software you own, open-source samples, or training binaries. Use an isolated VM for dynamic analysis.',
    outcomes: ['triage an unknown file', 'compare static and dynamic evidence', 'document assumptions while reading code or assembly'],
    topics: [
      'Static analysis workflow',
      'Strings and basic triage',
      'File format identification',
      'Control flow reading',
      'Dynamic analysis in a sandbox',
      'Debugger breakpoints',
      'Patching a toy binary',
      'Recognizing packing indicators',
      'Decompilers and assumptions',
      'Documenting reverse engineering notes',
    ],
  },
  {
    slug: 'binary-exploitation',
    title: 'Binary exploitation',
    lab: 'Use small training binaries in an isolated VM. Keep the goal educational: understand the crash, the mitigation, and the fix.',
    outcomes: ['describe memory behavior', 'triage a crash safely', 'connect exploitability to mitigations and remediation'],
    topics: [
      'Process memory layout',
      'Stack frames and calling conventions',
      'Crash triage workflow',
      'Fuzzing a toy parser',
      'Mitigations overview',
      'Integer bug concepts',
      'Format string concepts',
      'Return-oriented programming overview',
      'Shellcode ethics and lab boundaries',
      'Writing safe binary exploit notes',
    ],
  },
  {
    slug: 'ctfs',
    title: 'CTFs',
    lab: 'Pick a retired or always-on challenge and stop the timer. The objective is to learn the method, not to rush.',
    outcomes: ['choose a useful challenge', 'organize solve artifacts', 'turn failed attempts into reusable notes'],
    topics: [
      'Picking the right CTF for practice',
      'Reading challenge descriptions',
      'Creating a challenge workspace',
      'Web CTF first pass',
      'Crypto CTF first pass',
      'Forensics CTF first pass',
      'Reverse CTF first pass',
      'Pwn CTF first pass',
      'Writing a CTF solution',
      'Learning from failed solves',
    ],
  },
  {
    slug: 'bug-bounties',
    title: 'Bug bounties',
    lab: 'Work only inside published scope and rules. Prefer test accounts and non-destructive evidence, and stop immediately if impact could harm real users.',
    outcomes: ['read scope precisely', 'hunt for impact rather than noise', 'communicate clearly with triage'],
    topics: [
      'Choosing a beginner program',
      'Scope reading checklist',
      'Passive recon workflow',
      'Target note model',
      'Duplicate avoidance',
      'Impact-first testing',
      'Safe proof of concept design',
      'Communicating with triage',
      'Handling informative closures',
      'Building a hunting routine',
    ],
  },
  {
    slug: 'finding-vulnerabilities',
    title: 'Finding vulnerabilities',
    lab: 'Use a single authorized target at a time. Build a test matrix of roles, endpoints, inputs, and expected outcomes before trying edge cases.',
    outcomes: ['turn observations into hypotheses', 'test one assumption at a time', 'chain small issues into realistic impact'],
    topics: [
      'Attack surface mapping',
      'Hypothesis-driven testing',
      'Input inventory techniques',
      'State change testing',
      'Business logic review',
      'Chaining low severity issues',
      'Comparing user roles',
      'Finding hidden assumptions',
      'Writing test matrices',
      'Ending a target review',
    ],
  },
  {
    slug: 'reporting-career',
    title: 'Reporting and career',
    lab: 'Rewrite one old note into a clean report. Focus on clarity, evidence, impact, and what a maintainer should do next.',
    outcomes: ['write concise technical evidence', 'reason about severity honestly', 'turn learning into a portfolio without exposing sensitive data'],
    topics: [
      'Report title patterns',
      'Minimal reproduction steps',
      'Evidence redaction',
      'Severity reasoning',
      'Remediation writing',
      'Disclosure timeline basics',
      'Building a public portfolio',
      'Interview story preparation',
      'Choosing certifications wisely',
      'Maintaining a learning backlog',
    ],
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function levelFor(index) {
  if (index < 4) return 'intro';
  if (index < 8) return 'core';
  return 'advanced';
}

function kindFor(index) {
  if (index === 3 || index === 7) return 'lab';
  if (index === 5) return 'reference';
  return 'tutorial';
}

function durationFor(level, kind) {
  if (kind === 'reference') return '12 min';
  if (kind === 'lab') return level === 'advanced' ? '45 min' : '30 min';
  return level === 'advanced' ? '35 min' : '20 min';
}

function bodyFor(section, title, index) {
  const level = levelFor(index);
  const kind = kindFor(index);
  const duration = durationFor(level, kind);
  const tags = [section.slug, slugify(title).split('-')[0], level, kind];
  const summary = `Learn ${title} through a safe, repeatable ${section.title.toLowerCase()} workflow.`;
  const outcomes = section.outcomes.map((item) => `- ${item}`).join('\n');

  return `---\ntitle: ${JSON.stringify(title)}\norder: ${10 + index}\nsummary: ${JSON.stringify(summary)}\ntags: ${JSON.stringify(tags)}\nlevel: ${level}\nkind: ${kind}\nduration: ${JSON.stringify(duration)}\n---\n\nimport Callout from '../../../components/Callout.astro';\n\n${marker}\n\nThis ${kind} is part of the **${section.title}** track. It focuses on **${title}** as a practical skill you can apply in labs, CTFs, and authorized assessments.\n\n<Callout type=\"warning\" title=\"Practice only where authorized\">\n  Use this material only in your own lab, a CTF, or an environment where you have explicit permission. Keep proofs minimal, reversible, and respectful of real users.\n</Callout>\n\n## What you will learn\n\n${outcomes}\n\n## The core idea\n\n${title} is useful when you can explain the system in front of you before you touch it. Start by naming the asset, the user, the trust boundary, and the expected control. Then compare the expected behavior with what the system actually does.\n\nFor this topic, write a one-sentence claim before testing: \"I expect this control to stop this user from doing this action.\" If the evidence contradicts the claim, you have something worth investigating. If it matches, record the result and move on.\n\n## Safe practice workflow\n\n1. Define the target and confirm it is allowed.\n2. Create or choose test data that belongs to you.\n3. Record the normal behavior before changing inputs or state.\n4. Change one variable at a time and compare the response.\n5. Save only the evidence needed to explain the behavior.\n6. Write the likely fix or defensive control in plain language.\n\n<Callout type=\"tip\" title=\"Lab exercise\">\n  ${section.lab}\n</Callout>\n\n## Checklist\n\n- Can you describe the security boundary without naming a tool?\n- Do you have a clean baseline request, file, log entry, or screenshot?\n- Did you avoid destructive actions and real user data?\n- Can another learner reproduce your observation from your notes?\n- Can you state the impact and the fix in one paragraph?\n\n## Checkpoint\n\nBefore moving on, write three lines in your notes: what you expected, what you observed, and what you would test next. That habit matters more than memorizing a payload because it scales across targets and technologies.\n`;
}

let written = 0;
let skipped = 0;

for (const section of sections) {
  for (const [index, title] of section.topics.entries()) {
    const file = join(contentRoot, section.slug, `${slugify(title)}.mdx`);
    const content = bodyFor(section, title, index);

    mkdirSync(dirname(file), { recursive: true });
    if (existsSync(file)) {
      const existing = readFileSync(file, 'utf8');
      if (!existing.includes(marker)) {
        skipped += 1;
        continue;
      }
    }

    writeFileSync(file, content, 'utf8');
    written += 1;
  }
}

console.log(`Generated ${written} learning pages. Skipped ${skipped} hand-written pages.`);
