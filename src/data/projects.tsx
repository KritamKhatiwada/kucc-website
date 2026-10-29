export type Project = {
  id: string
  slug?: string
  name: string
  description: string
  github: string
  members: string[]
  tags: string[]
  submittedBy: string
  createdAt: string // ISO date
  votes: number
}

export const DOCS_BASE = 'https://www.kuosc.org.np/docs/student-project'

// TODO: replace with the real KUOSC submission page
export const SUBMIT_URL = 'https://www.kuosc.org.np/docs/intro'

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

export const projectUrl = (p: Pick<Project, 'name' | 'slug'>) => `${DOCS_BASE}/${p.slug || slugify(p.name)}`

// Fallback shown only when the KUOSC API is unreachable.
export const projects: Project[] = [
  {
    id: 'p1',
    name: 'Campus Navigator',
    description: 'Interactive map of Kathmandu University with live room and lab lookup.',
    github: 'https://github.com/vercel/next.js',
    members: ['Aarav Sharma', 'Sita Rai'],
    tags: ['web', 'maps', 'react'],
    submittedBy: 'Aarav Sharma',
    createdAt: '2026-10-20',
    votes: 42,
  },
  {
    id: 'p2',
    name: 'Notes Exchange',
    description: 'Peer-to-peer platform for sharing and rating semester notes.',
    github: 'https://github.com/facebook/react',
    members: ['Bikash Thapa'],
    tags: ['web', 'community'],
    submittedBy: 'Bikash Thapa',
    createdAt: '2026-09-02',
    votes: 87,
  },
]