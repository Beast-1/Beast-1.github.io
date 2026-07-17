// ==== PLACEHOLDERS — confirm/replace before publishing ====
export const GITHUB_USERNAME = 'Beast-1';
export const PHONE_NUMBER = ''; // digits only, intl format (e.g. "9779800000000"), fill in for WhatsApp link
export const CONTACT_EMAIL = 'darpandahal111@gmail.com';
export const YEARS_EXPERIENCE = '2+';
export const RESUME_PATH = '/resume.pdf';
export const HERO_PHOTO = '/images/darpan.png';
export const HERO_WORDMARK = 'PORTFOLIO';

export const profile = {
  name: 'Darpan Dahal',
  roles: ['AI Engineer', 'React Developer', 'ML Researcher'],
  location: 'Sikkim, India',
  email: CONTACT_EMAIL,
  linkedin: 'https://www.linkedin.com/in/darpan-dahal-pbl/',
  github: `https://github.com/${GITHUB_USERNAME}`,
  whatsapp: PHONE_NUMBER ? `https://wa.me/${PHONE_NUMBER}` : '',
  tagline: 'I build AI-driven systems and web products, from the model to the interface.',
}

export const stats = [
  { label: 'Flagship Projects', value: 4 },
  { label: 'Years Building', value: YEARS_EXPERIENCE },
  { label: 'Certifications', value: 2 },
]

export const skills = {
  Languages: ['Python', 'JavaScript'],
  'AI / ML': ['Machine Learning', 'OpenCV', 'XGBoost'],
  Tools: ['React', 'Git', 'Blender'],
}

export const certifications = [
  { title: 'CyberShiksha Fundamentals', issuer: 'NIELIT × Microsoft' },
  { title: 'Machine Learning in Python', issuer: 'NIELIT' },
]

export const projects = [
  {
    id: 'argus',
    number: '01',
    title: 'ARGUS',
    description:
      'AI-powered text-to-3D generation system combining Blender, LLMs, and Python. Turns natural-language prompts into finished 3D models.',
    tech: ['Python', 'Blender', 'LLM'],
    link: '',
    status: 'Flagship',
  },
  {
    id: 'neva',
    number: '02',
    title: 'Project N.E.V.A',
    description:
      'A modular Python AI assistant with dedicated brain, memory, intent-recognition, and LLM-routing subsystems.',
    tech: ['Python', 'LLM Routing'],
    link: '',
    status: 'In Progress',
  },
  {
    id: 'ocr',
    number: '03',
    title: 'OCR System',
    description:
      'Machine-learning OCR pipeline combining classical algorithms with OpenCV for handwritten and printed text recognition.',
    tech: ['Python', 'OpenCV', 'ML'],
    link: '',
    status: 'Complete',
  },
  {
    id: 'bike-inventory',
    number: '04',
    title: 'Bike Inventory Website',
    description:
      'Dynamic inventory management system built for a used-motorcycle dealership, with live stock, listings, and admin tools.',
    tech: ['React', 'Inventory Mgmt'],
    link: '',
    status: 'Live',
  },
]

export const otherWork = [
  { title: 'Client website & hosting delivery', note: 'Ongoing' },
  { title: 'Google Maps lead-gen scraper', note: 'Utility project' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    icon: 'Search',
    description: 'Clarify the real problem before writing a line of code.',
  },
  {
    number: '02',
    title: 'Prototype',
    icon: 'FlaskConical',
    description: 'Fast, disposable proofs of concept to test the idea.',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    icon: 'Hammer',
    description: 'Turn the prototype into something solid, refined in loops.',
  },
  {
    number: '04',
    title: 'Test',
    icon: 'CheckCircle2',
    description: 'Break it on purpose before someone else does.',
  },
  {
    number: '05',
    title: 'Ship',
    icon: 'Rocket',
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
