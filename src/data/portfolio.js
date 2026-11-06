// ==== PLACEHOLDERS — confirm/replace before publishing ====
export const GITHUB_USERNAME = 'Beast-1'
export const PHONE_NUMBER = '' // digits only, intl format (e.g. "9779800000000"), fill in for WhatsApp link
export const CONTACT_EMAIL = 'darpandahal111@gmail.com'
export const RESUME_PATH = '/resume.pdf'
export const HERO_PHOTO = '/images/darpan.webp'

export const profile = {
  name: 'Darpan Dahal',
  roles: ['AI Engineer', 'Full-Stack Developer'],
  location: 'Sikkim, India',
  email: CONTACT_EMAIL,
  linkedin: 'https://www.linkedin.com/in/darpan-dahal-pbl/',
  github: `https://github.com/${GITHUB_USERNAME}`,
  whatsapp: PHONE_NUMBER ? `https://wa.me/${PHONE_NUMBER}` : '',
  tagline:
    'I build the systems between a spec and a shipped product — AI pipelines that turn a prompt into a finished asset, and marketplaces that turn an idea into something people actually use.',
}

export const skills = {
  Languages: ['Python', 'JavaScript', 'C++'],
  'AI / ML': ['LLM pipelines', 'Computer vision (OpenCV)', 'XGBoost', 'Blender scripting'],
  'Web & Product': ['React', 'TanStack Start', 'Supabase', 'Cloudflare Workers', 'Flutter'],
  Tools: ['Git', 'Direct3D 12', 'WhatsApp / Twilio APIs'],
}

export const certifications = [
  { title: 'CyberShiksha Fundamentals', issuer: 'NIELIT × Microsoft' },
  { title: 'Machine Learning in Python', issuer: 'NIELIT' },
]

export const projectCategories = ['All', 'AI / ML', 'Product', 'Systems']

export const projects = [
  {
    id: 'argus',
    year: '2026',
    title: 'ARGUS',
    category: 'AI / ML',
    description:
      'A deterministic compiler turns a written spec straight into a Blender scene — geometry, materials, lighting, camera. An LLM fallback (Gemini) covers whatever the compiler can’t, and an automated visual-QA loop catches and fixes bad renders before they ship.',
    tech: ['Python', 'Blender', 'Gemini', 'Scene-graph compiler'],
    link: '',
    status: 'Flagship',
  },
  {
    id: 'rentire',
    year: '2026',
    title: 'Rentire',
    category: 'Product',
    description:
      'A property marketplace for Namchi, Sikkim — real backend, real auth, real listings, with a flat commission on every booking. Deployed on Cloudflare Workers; WhatsApp-OTP delivery is wired up and pending a funded Twilio account.',
    tech: ['Cloudflare Workers', 'Supabase', 'WhatsApp OTP'],
    link: 'https://rentire.casuall.workers.dev',
    image: '/images/projects/rentire.webp',
    status: 'In Progress',
  },
  {
    id: 'himalayan-properties',
    year: '2026',
    title: 'Himalayan Properties',
    category: 'Product',
    description:
      'A real-estate platform for Kalimpong with a full SEO pass and its own staff system — admins and assistants invited by phone through a Telegram bot, with approval gates on new listings.',
    tech: ['React', 'SEO', 'Telegram bot'],
    link: 'https://himalayanproperties.co.in',
    image: '/images/projects/himalayan-properties.webp',
    status: 'Live',
  },
  {
    id: 'jpani',
    year: '2026',
    title: 'JPani',
    category: 'Product',
    description:
      'A local delivery and concierge marketplace for Namchi — food, groceries, pharmacy, household essentials, and a WhatsApp-deep-link "Genie" line for custom errands. Built on TanStack Start, deployed on Cloudflare Workers.',
    tech: ['TanStack Start', 'Supabase', 'Cloudflare Workers'],
    link: 'https://jpani.sikkim-rentire.workers.dev',
    image: '/images/projects/jpani.webp',
    status: 'In Progress',
  },
  {
    id: 'neva',
    year: '2026',
    title: 'Project N.E.V.A',
    category: 'AI / ML',
    description:
      'A modular AI assistant with its own brain, memory, intent-recognition, and LLM-routing subsystems — built to pick the right model and the right tool per request instead of hardcoding one.',
    tech: ['Python', 'LLM routing'],
    link: '',
    status: 'In Progress',
  },
  {
    id: 'ultimascale',
    year: '2026',
    title: 'UltimaScale',
    category: 'Systems',
    description:
      'A C++ / Direct3D 12 frame-generation tool for GPUs too weak to run modern frame-gen natively. Milestone 1 — a viability benchmark proving the approach holds up — is done.',
    tech: ['C++', 'Direct3D 12'],
    link: '',
    status: 'In Progress',
  },
  {
    id: 'ayra-connect',
    year: '2026',
    title: 'AYRA Connect',
    category: 'Product',
    description:
      'A Flutter marketplace for pay-per-minute video calls, with the pricing and payout economics locked down before a line of UI was written.',
    tech: ['Flutter', 'Payments'],
    link: '',
    status: 'In Progress',
  },
  {
    id: 'ocr',
    year: '2025',
    title: 'OCR System',
    category: 'AI / ML',
    description:
      'A handwriting and print OCR pipeline pairing classical computer-vision preprocessing with OpenCV for recognition — built from the ground up rather than wrapped around an existing API.',
    tech: ['Python', 'OpenCV', 'ML'],
    link: '',
    status: 'Complete',
  },
]

export const otherWork = [
  { title: 'Bike inventory system for a used-motorcycle dealership', note: 'Client project' },
  { title: 'Website & hosting delivery for small businesses', note: 'Ongoing' },
  { title: 'Google Maps lead-gen scraper', note: 'Internal tool' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Clarify the real problem before writing a line of code.',
  },
  {
    number: '02',
    title: 'Prototype',
    description: 'Fast, disposable proofs of concept to test the idea.',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'Turn the prototype into something solid, refined in loops.',
  },
  {
    number: '04',
    title: 'Test',
    description: 'Break it on purpose before someone else does.',
  },
  {
    number: '05',
    title: 'Ship',
    description: 'Deploy, monitor, and keep improving in production.',
  },
]

export const philosophy = {
  text: 'I like building things that actually work, not just demos. If it does not survive real use, it is not done yet.',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]
