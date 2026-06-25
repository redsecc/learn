import { SECTIONS, sectionMeta, type Section } from './learn';

export interface PathStage {
  label: string;
  sections: string[];
  note: string;
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
  stages: PathStage[];
}

export const START_SECTION = 'getting-started';

export const CORE_SECTIONS = [
  'foundations',
  'tooling-workflows',
  'linux',
  'networking',
];

export const FINISH_SECTION = 'reporting-career';

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
  },
];

export function getSections(slugs: string[]): Section[] {
  return slugs
    .map((slug) => sectionMeta(slug))
    .filter((section): section is Section => Boolean(section));
}

export function sectionHref(slug: string): string {
  return `/${slug}`;
}

export const ALL_PATH_SECTION_SLUGS = [
  START_SECTION,
  ...CORE_SECTIONS,
  ...new Set(PATHS.flatMap((path) => path.stages.flatMap((stage) => stage.sections))),
].filter((slug, index, all) => all.indexOf(slug) === index);

export const UNUSED_SECTIONS = SECTIONS.filter(
  (section) => !ALL_PATH_SECTION_SLUGS.includes(section.slug),
);
