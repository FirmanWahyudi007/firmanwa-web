import { ProjectItemProps } from '@/common/types/projects';

export const PROJECT_ITEMS: ProjectItemProps[] = [
  {
    title: 'Personal Portfolio Website',
    slug: 'personal-portfolio-website',
    description:
      'A personal portfolio website to showcase my projects, skills, and experiences as a developer.',
    image: '/images/projects/personal-web.png',
    link_demo: 'https://firmanwa.soulution-it.cloud/',
    link_github: 'https://github.com/FirmanWahyudi007/firmanwa-web',
    stacks: 'Next.js, TypeScript, TailwindCSS',
    content:
      'Built with Next.js and Tailwind CSS for a fast, responsive experience. Highlights projects, skills, and contact info with a clean design.',
    is_show: true,
    is_featured: true,
  },
  {
    title: 'Absensi v2 — Attendance & Payroll App',
    slug: 'absensi-v2-attendance-payroll',
    description:
      'A modern attendance and payroll app that streamlines time tracking, approvals, and monthly payroll—improving accuracy, transparency, and audit readiness.',
    image: '/images/projects/absensi-v2.png',
    link_demo: undefined,
    link_github: undefined,
    stacks: 'Laravel, PHP, MySQL, Bootstrap',
    content:
      'Built for day-to-day operations with reliable time logs, clear approval flows, and exportable summaries. Focused on clean UX, consistent records, and faster monthly close with audit-friendly reports.',
    is_show: true,
    is_featured: false,
  },
  {
    title: 'Transfer Academy — English Course',
    slug: 'transfer-academy-english-course',
    description:
      'An English course institution established in 2023 under PT Pratama Transsoftware Inti Bahasa, providing structured programs with a focus on clear outcomes and learner progress.',
    image: '/images/projects/transferakademi.png',
    link_demo: 'https://www.transferakademi.id',
    link_github: undefined,
    stacks: 'Laravel, PHP, MySQL, Bootstrap',
    content:
      'Positioned as a modern English course brand founded in 2023, emphasizing practical communication, clear curriculum levels, and measurable learning progress.',
    is_show: true,
    is_featured: false,
  },
  {
    title: 'SIPERANG — Budget Planning System',
    slug: 'siperang-budget-planning',
    description:
      'Transparent budget planning with clear workflows, approvals, and auditable records for academic units.',
    image: '/images/projects/siperang.png',
    link_demo: 'https://siperang.politanikoe.ac.id',
    link_github: undefined,
    stacks: 'Laravel, PHP, MySQL, TailwindCSS',
    content:
      'Streamlines proposal submission, review, and approval while keeping records consistent and exportable. Built to improve transparency and reduce revision cycles.',
    is_show: true,
    is_featured: false,
  },
  {
    title: 'AGROS Frontend Mini Test',
    slug: 'agros-frontend-mini-test',
    description:
      'Role-based web app with  UI slicing from provided designs: users register as Super Admin or Customer',
    image: '/images/projects/agros.png',
    link_demo: 'https://agros.soulution-it.cloud',
    link_github: 'https://github.com/FirmanWahyudi007/agros-fs-mini-test-fe',
    stacks: 'Next.js, TypeScript, Redux, TailwindCSS, Laravel, MySQL',
    content:
      'Focused on clean, consistent UI implementation and responsive layout across breakpoints. The app demonstrates clear access scopes—full CRUD for Super Admins and limited updates for Customers—optimized for quick review and testing.',
    is_show: true,
    is_featured: true,
  },
  {
    title: 'SPAKET — Official Letter Dispatch Management',
    slug: 'spaket-official-letter-dispatch',
    description:
      'Web-based management for dispatching physical official letters at the Tax Service Office.',
    image: '/images/projects/5.png',
    link_demo: undefined,
    link_github: undefined,
    stacks: 'Laravel, PHP, MySQL, Bootstrap',
    content:
      'Focused on preventing data redundancy through normalized schema and streamlining daily dispatch workflows. The UI is implemented in Laravel Blade by slicing existing templates, resulting in a consistent, responsive interface and maintainable codebase.',
    is_show: true,
    is_featured: false,
  },
  {
    title: 'Mimi Kost — Boarding House Web Profile & Management',
    slug: 'mimi-kost-boarding-house',
    description:
      'Responsive web profile and lightweight management for boarding house owners—organizing property.',
    image: '/images/projects/mimi-kost.png',
    link_demo: undefined,
    link_github: 'https://github.com/FirmanWahyudi007/MimiKost',
    stacks: 'Laravel, PHP, MySQL, TailwindCSS',
    content:
      'Built to help kost owners present their place professionally while keeping basic management tidy. Emphasis on clean UI, straightforward navigation, and responsive layout for everyday updates.',
    is_show: true,
    is_featured: true,
  },
  {
    title: 'School Inventory Lending System',
    slug: 'school-inventory-lending-system',
    description:
      'A school inventory lending app that streamlines item requests, approvals, and returns.',
    image: '/images/projects/4.png',
    link_demo: undefined,
    link_github:
      'https://github.com/FirmanWahyudi007/Aplikasi-Simpan-Pinjam-Inventaris-Sekolah',
    stacks: 'PHP, MySQL, Bootstrap',
    content:
      'Designed for school operations to track borrow/return flows with clear roles and record history. Focus on clarity, simple UX, and reliable data.',
    is_show: true,
    is_featured: true,
  },
];
