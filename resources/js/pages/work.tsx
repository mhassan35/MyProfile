import { Head, Link } from '@inertiajs/react';
import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    Bot,
    FileText,
    Github,
    HeartPulse,
    Images,
    Linkedin,
    Orbit,
    ShoppingBag,
} from 'lucide-react';

const projects = [
    {
        name: 'HealthAI',
        type: 'AI PRODUCT · HEALTH',
        description:
            'A personal health planner with an AI assistant for everyday questions around nutrition, fitness, sleep, and wellbeing.',
        stack: ['Next.js', 'Gemini', 'PostgreSQL'],
        repository: 'https://github.com/mhassan35/ai_assistant',
        demo: 'https://your-health-planner.vercel.app',
        theme: 'health',
        mark: 'HEALTH, IN CONTEXT.',
        icon: HeartPulse,
    },
    {
        name: 'AI Employee',
        type: 'AI AGENTS · AUTOMATION',
        description:
            'A personal AI-employee system exploring tiered automation and an organized workspace for intelligent workflows.',
        stack: ['Python', 'AI agents', 'Automation'],
        repository: 'https://github.com/mhassan35/AI-Employee-Gold',
        theme: 'agent',
        mark: 'LET THE SYSTEM WORK.',
        icon: Bot,
    },
    {
        name: 'Furno',
        type: 'E-COMMERCE · STOREFRONT',
        description:
            'A furniture store with live product browsing, category filters, a persistent cart, and a responsive layout.',
        stack: ['Vue 3', 'Vuetify', 'Vite'],
        repository: 'https://github.com/mhassan35/Furniture-E-Commerce-store',
        demo: 'https://furniture-e-commerce-store.vercel.app',
        theme: 'furniture',
        mark: 'ROOM TO LIVE.',
        icon: ShoppingBag,
    },
    {
        name: 'PDF Tools',
        type: 'PRODUCTIVITY · WEB APP',
        description:
            'A set of practical PDF utilities for merging, splitting, and converting documents without the extra steps.',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        repository: 'https://github.com/mhassan35/PDF-Tools',
        demo: 'https://pdf-helper-tools.vercel.app',
        theme: 'pdf',
        mark: 'FILES → FINISHED.',
        icon: FileText,
    },
    {
        name: 'Photo Library',
        type: 'SEARCH · PHOTO DISCOVERY',
        description:
            'A responsive photo discovery app with live search, filters, favorites, a lightbox, and an Unsplash-powered feed.',
        stack: ['Vue 3', 'Vuetify', 'Unsplash API'],
        repository: 'https://github.com/mhassan35/Photo-Library',
        demo: 'https://photo-library-uhd.vercel.app',
        theme: 'photos',
        mark: 'FIND YOUR FRAME.',
        icon: Images,
    },
    {
        name: 'Health Info',
        type: 'HEALTH · INFORMATION',
        description:
            'A health education guide to the heart, liver, kidneys, lungs, and brain, with organ guides and common conditions.',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        repository: 'https://github.com/mhassan35/Health-info',
        demo: 'https://health-info-gold.vercel.app',
        theme: 'organs',
        mark: 'KNOW YOUR BODY.',
        icon: HeartPulse,
    },
    {
        name: 'AI Book',
        type: 'LEARNING · PHYSICAL AI',
        description:
            'A learning hub for Physical AI and humanoid robotics, covering robotics foundations, ROS 2, and simulation.',
        stack: ['Docusaurus', 'TypeScript', 'Robotics'],
        repository: 'https://github.com/mhassan35/ai-book',
        demo: 'https://ai-book-ebon.vercel.app',
        theme: 'robotics',
        mark: 'A NEW KIND OF INTELLIGENCE.',
        icon: Orbit,
    },
] as const;

type Project = (typeof projects)[number];

function ArchiveProject({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const Icon = project.icon;

    return (
        <article className="archive-project">
            <div
                className={`archive-art archive-art--${project.theme}`}
                aria-hidden="true"
            >
                <div className="archive-art-topline">
                    <span>MH / PROJECT FILE</span>
                    <span>0{index + 1} — 07</span>
                </div>
                <div className="archive-art-center">
                    <span className="archive-art-icon">
                        <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="archive-art-mark">{project.mark}</span>
                </div>
                <span className="archive-art-ghost">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <div className="archive-art-bottom">
                    <span>IDEA → INTERFACE</span>
                    <span className="archive-art-rule" />
                    <span>BUILT WITH INTENT</span>
                </div>
            </div>
            <div className="archive-project-content">
                <div className="archive-project-meta">
                    <span>{project.type}</span>
                    <span>0{index + 1}</span>
                </div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="archive-project-stack">
                    {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
                <div className="archive-project-links">
                    {'demo' in project && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                            Live project <ArrowUpRight size={14} />
                        </a>
                    )}
                    <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub source <Github size={14} />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function Work() {
    return (
        <>
            <Head title="Selected Work">
                <meta
                    name="description"
                    content="Selected AI, web, and automation projects by Muhammad Hassan."
                />
            </Head>
            <div className="portfolio-page work-page">
                <header className="portfolio-header">
                    <Link
                        className="portfolio-wordmark"
                        href="/"
                        aria-label="Muhammad Hassan, home"
                    >
                        <span>
                            mh<span>.</span>
                        </span>
                        <small>INDEPENDENT DEVELOPER</small>
                    </Link>
                    <nav aria-label="Main navigation">
                        <Link className="nav-active" href="/work">
                            Work <span>07</span>
                        </Link>
                        <a href="/#about">About</a>
                        <a href="/#experience">Experience</a>
                    </nav>
                    <a className="header-contact" href="/#contact">
                        Let’s talk <ArrowUpRight size={15} />
                    </a>
                </header>

                <main>
                    <section className="work-archive-hero">
                        <div className="work-archive-hero-inner">
                            <div>
                                <span className="hero-eyebrow">
                                    <span className="eyebrow-pulse" />
                                    A SELECTION OF THINGS I’VE BUILT
                                </span>
                                <h1>
                                    Small ideas.
                                    <br />
                                    <em>Real impact.</em>
                                </h1>
                                <p>
                                    AI experiments, useful web products, and the
                                    details that make them feel like more than
                                    just code.
                                </p>
                            </div>
                            <div className="work-archive-count">
                                <strong>07</strong>
                                <span>
                                    PROJECTS
                                    <br />
                                    AND COUNTING
                                </span>
                                <span className="archive-count-orbit">
                                    <Orbit size={25} />
                                </span>
                            </div>
                        </div>
                        <div className="work-archive-divider">
                            <span>SCROLL THE WORK</span>
                            <ArrowDownRight size={15} />
                            <span>AI · WEB · AUTOMATION</span>
                        </div>
                    </section>

                    <section
                        className="work-archive-list"
                        aria-label="Selected projects"
                    >
                        <div className="work-archive-grid">
                            {projects.map((project, index) => (
                                <ArchiveProject
                                    key={project.name}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                        <div className="work-archive-footer">
                            <span>
                                MORE EXPERIMENTS, OPEN SOURCE, AND IDEAS
                            </span>
                            <a
                                href="https://github.com/mhassan35?tab=repositories"
                                target="_blank"
                                rel="noreferrer"
                            >
                                EXPLORE ALL REPOSITORIES{' '}
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </section>

                    <section className="work-archive-contact">
                        <div>
                            <span className="section-kicker">
                                HAVE A GOOD PROBLEM?
                            </span>
                            <h2>
                                Let’s build
                                <br />
                                <em>the next one.</em>
                            </h2>
                        </div>
                        <a
                            className="button-primary"
                            href="mailto:mhassan909234@gmail.com"
                        >
                            Get in touch <ArrowUpRight size={16} />
                        </a>
                    </section>
                </main>

                <footer className="portfolio-footer">
                    <Link className="footer-mark" href="/">
                        mh<span>.</span>
                    </Link>
                    <p>Made with curiosity in Lahore, Pakistan.</p>
                    <a
                        href="https://www.linkedin.com/in/mhassan35/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LINKEDIN <Linkedin size={13} />
                    </a>
                    <small>© MUHAMMAD HASSAN</small>
                </footer>
            </div>
        </>
    );
}
