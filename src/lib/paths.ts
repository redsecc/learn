import { SECTIONS, sectionMeta, type Section } from './learn';

export interface PathStage {
  label: string;
  sections: string[];
  note: string;
}

export interface RealWorldDomain {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  sections: string[];
  examples: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  shortTitle: string;
  role: string;
  summary: string;
  definition: string;
  bestFor: string;
  outcome: string;
  domainIds: string[];
  stages: PathStage[];
  milestones: PathStage[];
}

export const START_SECTION = 'getting-started';

export const CORE_SECTIONS = [
  'foundations',
  'tooling-workflows',
  'linux',
  'networking',
];

export const FINISH_SECTION = 'reporting-career';

export const REAL_WORLD_DOMAINS: RealWorldDomain[] = [
  {
    id: 'web-applications',
    title: 'Web applications and APIs',
    shortTitle: 'Web/App',
    summary:
      'SaaS products, REST and GraphQL APIs, browser trust boundaries, sessions, tenants, and business logic.',
    sections: [
      'web-security',
      'api-security',
      'authentication',
      'access-control',
      'injection',
      'client-side-security',
    ],
    examples: ['SaaS apps', 'REST and GraphQL APIs', 'single-page apps', 'multi-tenant products'],
  },
  {
    id: 'cloud-compute',
    title: 'Cloud compute and platform',
    shortTitle: 'Cloud',
    summary:
      'Cloud accounts, IAM, storage, metadata services, serverless, containers, Kubernetes, and workload boundaries.',
    sections: ['cloud-security', 'containers', 'linux', 'networking'],
    examples: ['AWS, Azure, and GCP', 'Kubernetes clusters', 'CI/CD runners', 'serverless workloads'],
  },
  {
    id: 'enterprise-identity',
    title: 'Enterprise identity',
    shortTitle: 'Identity',
    summary:
      'SSO, MFA, directory services, Kerberos concepts, role design, service accounts, and ownership checks.',
    sections: ['authentication', 'access-control', 'active-directory', 'networking'],
    examples: ['SSO and MFA', 'Active Directory', 'service accounts', 'role and group design'],
  },
  {
    id: 'detection-response',
    title: 'Detection and incident response',
    shortTitle: 'Detect/IR',
    summary:
      'Logs, packets, endpoint artifacts, cloud audit trails, triage, timelines, and control validation.',
    sections: ['forensics', 'networking', 'linux', 'cloud-security'],
    examples: ['SOC triage', 'packet captures', 'host artifacts', 'cloud audit logs'],
  },
  {
    id: 'low-level-systems',
    title: 'Low-level systems research',
    shortTitle: 'Bin/Rev',
    summary:
      'Compiled programs, assembly, file formats, memory corruption, mitigations, reversing, and lab exploit notes.',
    sections: ['reverse-engineering', 'binary-exploitation', 'cryptography', 'linux'],
    examples: ['ELF binaries', 'heap behavior', 'stack canaries', 'return-to-libc labs'],
  },
  {
    id: 'research-reporting',
    title: 'Research, scoping, and reporting',
    shortTitle: 'Research',
    summary:
      'Authorized research workflow: scope, notes, repeatability, evidence, severity, remediation, and writeups.',
    sections: ['bug-bounties', 'ctfs', 'finding-vulnerabilities', 'reporting-career', 'tooling-workflows'],
    examples: ['Bug bounty programs', 'CTF writeups', 'pentest reports', 'portfolio notes'],
  },
];

export const PATHS: LearningPath[] = [
  {
    id: 'red-teamer',
    title: 'Red teamer',
    shortTitle: 'Red team',
    role: 'Simulate real attacker paths across people, apps, identity, cloud, and infrastructure.',
    summary:
      'A broad operator path for chaining recon, exploitation, identity abuse, cloud exposure, and reporting into full-scope exercises.',
    definition:
      'Red teaming is goal-driven adversary simulation. The work is less about one bug class and more about planning a realistic path, testing detection, and explaining business impact.',
    bestFor: 'Learners who want broad offensive depth across enterprise environments.',
    outcome:
      'You can plan scoped campaigns, chain findings responsibly, and communicate attack paths clearly.',
    domainIds: [
      'web-applications',
      'enterprise-identity',
      'cloud-compute',
      'detection-response',
      'research-reporting',
    ],
    stages: [
      {
        label: 'Operate',
        sections: ['web-security', 'api-security', 'authentication', 'access-control', 'injection'],
        note: 'Build application and identity attack-surface depth.',
      },
      {
        label: 'Expand',
        sections: ['cloud-security', 'containers', 'active-directory'],
        note: 'Move into infrastructure, cloud, and enterprise identity concepts.',
      },
      {
        label: 'Prove',
        sections: ['finding-vulnerabilities', 'reporting-career'],
        note: 'Turn chains into evidence, impact, and defensive recommendations.',
      },
    ],
    milestones: [
      {
        label: 'Scope objectives',
        sections: ['getting-started', 'foundations', 'tooling-workflows'],
        note: 'Define goals, rules of engagement, evidence standards, and a repeatable workspace.',
      },
      {
        label: 'Map web and API exposure',
        sections: ['web-security', 'api-security', 'finding-vulnerabilities'],
        note: 'Find reachable products, trust boundaries, data flows, and likely bug classes.',
      },
      {
        label: 'Chain identity and platform paths',
        sections: ['authentication', 'access-control', 'active-directory', 'cloud-security', 'containers'],
        note: 'Connect application access, enterprise identity, and cloud or workload privileges.',
      },
      {
        label: 'Validate detection and impact',
        sections: ['forensics', 'networking', 'reporting-career'],
        note: 'Explain what defenders should see, what controls failed, and how to reduce repeat risk.',
      },
    ],
  },
  {
    id: 'pentester',
    title: 'Penetration tester',
    shortTitle: 'Pentest',
    role: 'Assess scoped systems, validate risks, and write reproducible findings.',
    summary:
      'A practical assessment path for web apps, APIs, auth, access control, injection, Linux, and clear reporting.',
    definition:
      'Penetration testing is a scoped security assessment. The goal is to find and validate issues, avoid unnecessary risk, and produce useful remediation guidance.',
    bestFor: 'Learners aiming for consulting, internal assessments, or junior pentest roles.',
    outcome:
      'You can run a scoped review from setup to evidence, severity, and remediation.',
    domainIds: ['web-applications', 'cloud-compute', 'enterprise-identity', 'research-reporting'],
    stages: [
      {
        label: 'Assess',
        sections: ['web-security', 'api-security', 'authentication', 'access-control'],
        note: 'Focus on common application and authorization failures.',
      },
      {
        label: 'Deepen',
        sections: ['injection', 'client-side-security', 'linux', 'networking'],
        note: 'Add input-handling, browser, host, and network testing skills.',
      },
      {
        label: 'Report',
        sections: ['finding-vulnerabilities', 'reporting-career'],
        note: 'Convert observations into reproducible reports.',
      },
    ],
    milestones: [
      {
        label: 'Scope the assessment',
        sections: ['getting-started', 'tooling-workflows', 'foundations'],
        note: 'Translate the statement of work into test boundaries, accounts, notes, and evidence rules.',
      },
      {
        label: 'Assess apps and APIs',
        sections: ['web-security', 'api-security', 'authentication', 'access-control', 'injection'],
        note: 'Test request flows, identity, object ownership, input handling, and business logic.',
      },
      {
        label: 'Add host and cloud context',
        sections: ['linux', 'networking', 'cloud-security', 'containers'],
        note: 'Understand where the system runs and which platform controls affect exploitability.',
      },
      {
        label: 'Package findings',
        sections: ['finding-vulnerabilities', 'reporting-career'],
        note: 'Write reproduction steps, severity, impact, remediation, and retest notes.',
      },
    ],
  },
  {
    id: 'blue-teamer',
    title: 'Blue teamer',
    shortTitle: 'Blue team',
    role: 'Defend systems by understanding signals, logs, controls, and attacker behavior.',
    summary:
      'A defender path centered on evidence, logs, forensics, network behavior, cloud controls, containers, and Active Directory.',
    definition:
      'Blue teaming is defensive security operations. It focuses on hardening, monitoring, triage, detection, and response using concrete evidence.',
    bestFor: 'Learners interested in SOC, detection, incident response, or defensive engineering.',
    outcome:
      'You can explain what happened, where evidence lives, and which controls reduce repeat risk.',
    domainIds: ['detection-response', 'cloud-compute', 'enterprise-identity'],
    stages: [
      {
        label: 'Observe',
        sections: ['networking', 'linux', 'forensics'],
        note: 'Learn where evidence lives and how systems behave normally.',
      },
      {
        label: 'Harden',
        sections: ['cloud-security', 'containers', 'active-directory'],
        note: 'Understand the platforms defenders must configure and monitor.',
      },
      {
        label: 'Explain',
        sections: ['reporting-career', 'foundations'],
        note: 'Write timelines, control gaps, and remediation clearly.',
      },
    ],
    milestones: [
      {
        label: 'Build a signal baseline',
        sections: ['networking', 'linux', 'forensics'],
        note: 'Know normal traffic, host behavior, log locations, and evidence quality.',
      },
      {
        label: 'Protect identity',
        sections: ['authentication', 'access-control', 'active-directory'],
        note: 'Review account lifecycles, privilege boundaries, delegation, and authentication controls.',
      },
      {
        label: 'Monitor cloud and workloads',
        sections: ['cloud-security', 'containers'],
        note: 'Connect platform logs, workload boundaries, image hygiene, and runtime behavior.',
      },
      {
        label: 'Investigate and improve',
        sections: ['forensics', 'reporting-career'],
        note: 'Turn evidence into timelines, lessons learned, and hardening work.',
      },
    ],
  },
  {
    id: 'defensive-engineer',
    title: 'Defensive engineer',
    shortTitle: 'Defense',
    role: 'Design safer systems, reduce bug classes, and build controls into delivery.',
    summary:
      'A secure engineering path for threat models, auth, authorization, APIs, cloud, containers, and secure defaults.',
    definition:
      'Defensive security engineering turns security knowledge into designs, guardrails, reviews, tests, and defaults that prevent repeat classes of issues.',
    bestFor: 'Developers, platform engineers, and security engineers who want prevention-first skills.',
    outcome:
      'You can review designs, catch risky assumptions early, and recommend durable controls.',
    domainIds: ['web-applications', 'cloud-compute', 'enterprise-identity', 'detection-response'],
    stages: [
      {
        label: 'Design',
        sections: ['foundations', 'authentication', 'access-control', 'api-security'],
        note: 'Work from trust boundaries, identity, ownership, and schemas.',
      },
      {
        label: 'Build',
        sections: ['web-security', 'client-side-security', 'cloud-security', 'containers'],
        note: 'Apply controls where software and platforms actually fail.',
      },
      {
        label: 'Maintain',
        sections: ['reporting-career', 'finding-vulnerabilities'],
        note: 'Turn reviews into trackable fixes and repeatable checklists.',
      },
    ],
    milestones: [
      {
        label: 'Threat model systems',
        sections: ['foundations', 'tooling-workflows'],
        note: 'Document assets, actors, trust boundaries, abuse cases, and review checkpoints.',
      },
      {
        label: 'Secure app contracts',
        sections: ['api-security', 'authentication', 'access-control', 'web-security'],
        note: 'Design identity, authorization, schemas, sessions, and browser controls deliberately.',
      },
      {
        label: 'Harden platform defaults',
        sections: ['cloud-security', 'containers', 'linux'],
        note: 'Reduce insecure defaults across workloads, build systems, secrets, and runtime permissions.',
      },
      {
        label: 'Feed lessons into controls',
        sections: ['finding-vulnerabilities', 'reporting-career'],
        note: 'Turn reviews and incidents into tests, guardrails, and engineering guidance.',
      },
    ],
  },
  {
    id: 'bug-bounty-hunter',
    title: 'Bug bounty hunter',
    shortTitle: 'Bounty',
    role: 'Find valid issues on authorized programs and communicate impact to triage.',
    summary:
      'A hunting path for recon, web and API review, auth, access control, business logic, and high-signal reports.',
    definition:
      'Bug bounty hunting is authorized vulnerability research against program scopes. It rewards impact, clear evidence, and respectful testing habits.',
    bestFor: 'Learners who want public-program practice and portfolio-ready reports.',
    outcome:
      'You can choose scope, test safely, avoid duplicates, and write reports triage can act on.',
    domainIds: ['web-applications', 'research-reporting', 'cloud-compute'],
    stages: [
      {
        label: 'Scope',
        sections: ['bug-bounties', 'tooling-workflows', 'networking'],
        note: 'Build target notes, recon habits, and repeatable workspaces.',
      },
      {
        label: 'Hunt',
        sections: ['web-security', 'api-security', 'access-control', 'finding-vulnerabilities'],
        note: 'Focus on bug classes with practical program impact.',
      },
      {
        label: 'Submit',
        sections: ['reporting-career'],
        note: 'Make evidence, impact, and remediation easy to validate.',
      },
    ],
    milestones: [
      {
        label: 'Pick programs and scope',
        sections: ['bug-bounties', 'tooling-workflows', 'networking'],
        note: 'Read policy, identify in-scope assets, set rate limits, and keep clean notes.',
      },
      {
        label: 'Test app and API logic',
        sections: ['web-security', 'api-security', 'authentication', 'access-control'],
        note: 'Focus on account, tenant, workflow, and object ownership failures.',
      },
      {
        label: 'Chase impact classes',
        sections: ['injection', 'client-side-security', 'finding-vulnerabilities'],
        note: 'Prioritize issues that show clear user, data, or platform impact.',
      },
      {
        label: 'Submit clean reports',
        sections: ['reporting-career'],
        note: 'Make triage easy with exact steps, expected impact, screenshots, and remediation ideas.',
      },
    ],
  },
  {
    id: 'appsec-specialist',
    title: 'Application security specialist',
    shortTitle: 'AppSec',
    role: 'Review application behavior, APIs, browser boundaries, auth, and authorization design.',
    summary:
      'A web and product-security path covering app architecture, APIs, auth flows, access control, injection, and client-side risk.',
    definition:
      'Application security focuses on how software enforces trust. It blends code review, design review, dynamic testing, and developer guidance.',
    bestFor: 'Learners who want to specialize in product, web, and API security.',
    outcome:
      'You can map app trust boundaries, test them, and explain fixes to engineering teams.',
    domainIds: ['web-applications', 'enterprise-identity', 'research-reporting'],
    stages: [
      {
        label: 'Map',
        sections: ['web-security', 'api-security', 'authentication', 'access-control'],
        note: 'Understand how requests, objects, users, and sessions fit together.',
      },
      {
        label: 'Probe',
        sections: ['injection', 'client-side-security', 'finding-vulnerabilities'],
        note: 'Test interpreters, browsers, and product logic safely.',
      },
      {
        label: 'Guide',
        sections: ['reporting-career', 'bug-bounties'],
        note: 'Write fixes and communicate with developers or triage teams.',
      },
    ],
    milestones: [
      {
        label: 'Map product surfaces',
        sections: ['web-security', 'api-security', 'authentication', 'access-control'],
        note: 'Identify users, objects, request flows, permissions, and data boundaries.',
      },
      {
        label: 'Review code and data boundaries',
        sections: ['injection', 'client-side-security', 'foundations'],
        note: 'Connect source, runtime behavior, browser trust, and interpreter boundaries.',
      },
      {
        label: 'Partner on fixes',
        sections: ['finding-vulnerabilities', 'reporting-career'],
        note: 'Translate findings into developer-friendly fixes, tests, and rollout guidance.',
      },
      {
        label: 'Scale review patterns',
        sections: ['tooling-workflows', 'bug-bounties'],
        note: 'Build checklists and research habits that make reviews repeatable.',
      },
    ],
  },
  {
    id: 'ctf-player',
    title: 'CTF player',
    shortTitle: 'CTF',
    role: 'Practice isolated challenge solving across web, pwn, crypto, reversing, forensics, and OSINT.',
    summary:
      'A challenge path for learning categories, solve habits, writeups, and safe lab-only exploitation concepts.',
    definition:
      'Capture the flag practice uses intentionally vulnerable puzzles to build pattern recognition and problem-solving without touching real systems.',
    bestFor: 'Learners who want hands-on reps and a safe place to build instincts.',
    outcome:
      'You can classify challenges, build solve notes, and move from hints to independent solving.',
    domainIds: ['research-reporting', 'web-applications', 'low-level-systems', 'detection-response'],
    stages: [
      {
        label: 'Classify',
        sections: ['ctfs', 'tooling-workflows'],
        note: 'Learn challenge categories and clean solve organization.',
      },
      {
        label: 'Solve',
        sections: ['web-security', 'cryptography', 'forensics', 'reverse-engineering', 'binary-exploitation'],
        note: 'Branch into the core CTF skill families.',
      },
      {
        label: 'Write up',
        sections: ['reporting-career'],
        note: 'Convert solves into reusable notes and public-safe writeups.',
      },
    ],
    milestones: [
      {
        label: 'Build a solve system',
        sections: ['ctfs', 'tooling-workflows', 'getting-started'],
        note: 'Set up notes, files, hints, tooling, and writeup templates before chasing flags.',
      },
      {
        label: 'Practice web, crypto, and forensics',
        sections: ['web-security', 'cryptography', 'forensics'],
        note: 'Learn challenge patterns for requests, encodings, files, packets, and evidence.',
      },
      {
        label: 'Practice pwn and reversing',
        sections: ['reverse-engineering', 'binary-exploitation', 'linux'],
        note: 'Work through binaries, memory layout, mitigations, crashes, and disassembly.',
      },
      {
        label: 'Write up and transfer',
        sections: ['reporting-career', 'finding-vulnerabilities'],
        note: 'Turn solves into durable notes and connect lab patterns back to real-world categories.',
      },
    ],
  },
  {
    id: 'binary-reverser',
    title: 'Binary exploitation and reversing specialist',
    shortTitle: 'Bin/Rev',
    role: 'Understand binaries, memory corruption, mitigations, reverse engineering, and lab exploit notes.',
    summary:
      'A low-level path for assembly, disassembly, file formats, crashes, mitigations, heap concepts, and CTF-style practice.',
    definition:
      'Binary exploitation and reverse engineering focus on compiled programs: how they behave, how they fail, and how to explain those failures safely.',
    bestFor: 'Learners who want deep pwn, reversing, malware-analysis, or vulnerability-research foundations.',
    outcome:
      'You can analyze toy binaries, reason about mitigations, and document root cause and fix paths.',
    domainIds: ['low-level-systems', 'research-reporting'],
    stages: [
      {
        label: 'Read',
        sections: ['reverse-engineering', 'linux', 'tooling-workflows'],
        note: 'Build static and dynamic analysis habits.',
      },
      {
        label: 'Break down',
        sections: ['binary-exploitation', 'cryptography'],
        note: 'Study memory behavior, mitigations, and low-level challenge patterns.',
      },
      {
        label: 'Practice',
        sections: ['ctfs', 'reporting-career'],
        note: 'Use labs and writeups to keep the work safe and reproducible.',
      },
    ],
    milestones: [
      {
        label: 'Read binaries',
        sections: ['reverse-engineering', 'linux', 'tooling-workflows'],
        note: 'Use static and dynamic analysis to understand control flow, imports, strings, and formats.',
      },
      {
        label: 'Reason about memory',
        sections: ['binary-exploitation', 'foundations'],
        note: 'Study stack frames, heap layout, crashes, input length, and corrupted state in labs.',
      },
      {
        label: 'Study mitigations',
        sections: ['binary-exploitation', 'cryptography'],
        note: 'Understand stack canaries, NX, ASLR, PIE, RELRO, heap checks, and return-to-libc concepts.',
      },
      {
        label: 'Document lab findings',
        sections: ['ctfs', 'reporting-career'],
        note: 'Write reproducible notes that explain root cause, constraints, mitigations, and fixes.',
      },
    ],
  },
  {
    id: 'cloud-container-security',
    title: 'Cloud and container security specialist',
    shortTitle: 'Cloud/Container',
    role: 'Review cloud identity, storage, build systems, containers, Kubernetes, and runtime boundaries.',
    summary:
      'A platform path for IAM, cloud storage, metadata services, serverless, Docker, Kubernetes, APIs, and Linux fundamentals.',
    definition:
      'Cloud and container security focuses on modern platform boundaries: identity, network exposure, workloads, images, secrets, and logs.',
    bestFor: 'Learners working near DevOps, platform engineering, or cloud security reviews.',
    outcome:
      'You can inventory cloud assets, reason about trust relationships, and identify platform control gaps.',
    domainIds: ['cloud-compute', 'enterprise-identity', 'web-applications', 'detection-response'],
    stages: [
      {
        label: 'Platform',
        sections: ['cloud-security', 'containers', 'linux'],
        note: 'Understand where workloads run and how permissions attach to them.',
      },
      {
        label: 'Connect',
        sections: ['api-security', 'networking', 'authentication'],
        note: 'Trace identity, traffic, APIs, and service boundaries.',
      },
      {
        label: 'Document',
        sections: ['reporting-career', 'finding-vulnerabilities'],
        note: 'Turn platform evidence into practical remediations.',
      },
    ],
    milestones: [
      {
        label: 'Inventory the platform',
        sections: ['cloud-security', 'containers', 'linux'],
        note: 'Map accounts, projects, workloads, images, storage, secrets, and where code runs.',
      },
      {
        label: 'Trace identity and APIs',
        sections: ['authentication', 'access-control', 'api-security'],
        note: 'Follow IAM, service accounts, role assumptions, API exposure, and permission boundaries.',
      },
      {
        label: 'Review workload boundaries',
        sections: ['networking', 'cloud-security', 'containers'],
        note: 'Check network paths, metadata access, runtime permissions, image trust, and cluster posture.',
      },
      {
        label: 'Log and remediate',
        sections: ['forensics', 'finding-vulnerabilities', 'reporting-career'],
        note: 'Tie control gaps to logs, blast radius, remediation, and prevention work.',
      },
    ],
  },
  {
    id: 'forensics-incident-response',
    title: 'Forensics and incident response analyst',
    shortTitle: 'Forensics/IR',
    role: 'Collect evidence, build timelines, analyze artifacts, and explain what changed.',
    summary:
      'An investigation path for file, log, memory, packet, cloud, Linux, Active Directory, and reporting workflows.',
    definition:
      'Forensics and incident response reconstruct events from evidence. The work depends on careful handling, repeatable analysis, and clear timelines.',
    bestFor: 'Learners interested in investigations, SOC escalation, or incident response.',
    outcome:
      'You can preserve artifacts, build timelines, and communicate defensible findings.',
    domainIds: ['detection-response', 'cloud-compute', 'enterprise-identity', 'research-reporting'],
    stages: [
      {
        label: 'Collect',
        sections: ['forensics', 'networking', 'linux'],
        note: 'Work from artifacts, logs, packets, and host behavior.',
      },
      {
        label: 'Correlate',
        sections: ['cloud-security', 'active-directory', 'containers'],
        note: 'Connect evidence across platforms and identity systems.',
      },
      {
        label: 'Explain',
        sections: ['reporting-career', 'foundations'],
        note: 'Write timelines, impact, and next controls clearly.',
      },
    ],
    milestones: [
      {
        label: 'Preserve evidence',
        sections: ['forensics', 'tooling-workflows', 'linux'],
        note: 'Collect artifacts, logs, images, hashes, and notes without damaging the investigation trail.',
      },
      {
        label: 'Rebuild the timeline',
        sections: ['networking', 'forensics', 'active-directory'],
        note: 'Correlate packets, host artifacts, authentication events, and directory activity.',
      },
      {
        label: 'Correlate cloud and workloads',
        sections: ['cloud-security', 'containers', 'authentication'],
        note: 'Connect cloud audit logs, workload events, identities, and container activity.',
      },
      {
        label: 'Explain impact and controls',
        sections: ['reporting-career', 'foundations'],
        note: 'Write defensible findings, likely impact, control gaps, and prioritized next actions.',
      },
    ],
  },
];

export function getSections(slugs: string[]): Section[] {
  return slugs
    .map((slug) => sectionMeta(slug))
    .filter((section): section is Section => Boolean(section));
}

export function getDomain(id: string): RealWorldDomain | undefined {
  return REAL_WORLD_DOMAINS.find((domain) => domain.id === id);
}

export function getDomains(ids: string[]): RealWorldDomain[] {
  return ids
    .map((id) => getDomain(id))
    .filter((domain): domain is RealWorldDomain => Boolean(domain));
}

export function sectionHref(slug: string): string {
  return `/${slug}`;
}

export const ALL_PATH_SECTION_SLUGS = [
  START_SECTION,
  ...CORE_SECTIONS,
  FINISH_SECTION,
  ...REAL_WORLD_DOMAINS.flatMap((domain) => domain.sections),
  ...PATHS.flatMap((path) => [
    ...path.stages.flatMap((stage) => stage.sections),
    ...path.milestones.flatMap((stage) => stage.sections),
  ]),
].filter((slug, index, all) => all.indexOf(slug) === index);

export const UNUSED_SECTIONS = SECTIONS.filter(
  (section) => !ALL_PATH_SECTION_SLUGS.includes(section.slug),
);
