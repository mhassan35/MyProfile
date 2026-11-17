import { Head, Link } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    Bot,
    Check,
    FileText,
    Github,
    HeartPulse,
    Linkedin,
    MapPin,
    ShoppingBag,
    Sparkles,
    Terminal,
    Workflow,
} from 'lucide-react';

const projects = [
    {
        number: '01',
        name: 'HealthAI',
        category: 'AI PRODUCT · HEALTH',
        description:
            'A personal health planner with an AI assistant for everyday questions around nutrition, fitness, and wellbeing.',
        stack: ['Next.js', 'Gemini', 'PostgreSQL'],
        repository: 'https://github.com/mhassan35/ai_assistant',
        demo: 'https://your-health-planner.vercel.app',
        visual: 'health',
        icon: HeartPulse,
        size: 'wide',
    },
    {
        number: '02',
        name: 'AI Employee',
        category: 'AUTOMATION · OPEN SOURCE',
        description:
            'A personal AI-employee system exploring practical, tiered automation and an organized workspace for intelligent workflows.',
        stack: ['Python', 'AI agents', 'Automation'],
        repository: 'https://github.com/mhassan35/AI-Employee-Gold',
        visual: 'agent',
        icon: Bot,
        size: 'narrow',
    },
    {
        number: '03',
        name: 'Furno',
        category: 'E-COMMERCE · WEB APP',
        description:
            'A furniture storefront with live product browsing, category filters, a persistent cart, and a responsive layout.',
        stack: ['Vue 3', 'Vuetify', 'Vite'],
        repository: 'https://github.com/mhassan35/Furniture-E-Commerce-store',
        demo: 'https://furniture-e-commerce-store.vercel.app',
        visual: 'furniture',
        icon: ShoppingBag,
        size: 'narrow',
    },
    {
        number: '04',
        name: 'PDF Tools',
        category: 'PRODUCTIVITY · WEB APP',
        description:
            'A set of practical PDF utilities for merging, splitting, and converting documents without the extra steps.',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        repository: 'https://github.com/mhassan35/PDF-Tools',
        demo: 'https://pdf-helper-tools.vercel.app',
        visual: 'pdf',
        icon: FileText,
        size: 'wide',
    },
] as const;

const focusAreas = [
    {
        number: '01',
        title: 'Applied AI',
        detail: 'LLMs · agents · useful workflows',
    },
    {
        number: '02',
        title: 'Full-stack',
        detail: 'Products from first sketch to ship',
    },
    {
        number: '03',
        title: 'Automation',
        detail: 'Less busywork, better systems',
    },
];

type Project = (typeof projects)[number];

function ProjectPreview({ project }: { project: Project }) {
    if (project.visual === 'health') {
        return (
            <div className="work-preview work-preview--health">
                <div className="preview-health-top">
                    <span className="preview-brand">
                        <HeartPulse size={15} /> healthAI
                    </span>
                    <span className="preview-avatar">H</span>
                </div>
                <div className="preview-health-layout">
                    <div className="preview-health-copy">
                        <span className="preview-kicker">
                            YOUR DAILY CHECK-IN
                        </span>
                        <strong>
                            Better health,
                            <br />
                            one small step.
                        </strong>
                        <span className="preview-health-link">
                            Your plan <ArrowRight size={12} />
                        </span>
                    </div>
                    <div className="preview-score-card">
                        <div className="preview-score-ring">
                            <span>78</span>
                        </div>
                        <small>
                            WEEKLY
                            <br />
                            WELLNESS
                        </small>
                    </div>
                </div>
                <div className="preview-chat">
                    <Sparkles size={14} />
                    <span>Ask your AI health guide anything…</span>
                    <ArrowUpRight size={13} />
                </div>
            </div>
        );
    }

    if (project.visual === 'agent') {
        return (
            <div className="work-preview work-preview--agent">
                <div className="preview-agent-top">
                    <span className="preview-terminal-icon">
                        <Terminal size={14} />
                    </span>
                    <span>MY WORKSPACE</span>
                    <span className="preview-live">
                        <i /> ACTIVE
                    </span>
                </div>
                <div className="preview-agent-title">
                    <small>MONDAY, 09:41 AM</small>
                    <strong>
                        Good morning.
                        <br />
                        Here’s your focus.
                    </strong>
                </div>
                <div className="preview-agent-task">
                    <span className="preview-task-check">
                        <Check size={12} />
                    </span>
                    <span>Sort new requests</span>
                    <small>DONE</small>
                </div>
                <div className="preview-agent-task">
                    <span className="preview-task-pending">
                        <Workflow size={12} />
                    </span>
                    <span>Draft daily briefing</span>
                    <small>RUNNING</small>
                </div>
            </div>
        );
    }

    if (project.visual === 'furniture') {
        return (
            <div className="work-preview work-preview--furniture">
                <div className="preview-furniture-heading">
                    <span>
                        furno<span className="preview-dot">.</span>
                    </span>
                    <small>ROOM TO LIVE</small>
                </div>
                <div className="preview-furniture-room">
                    <div className="furniture-sun" />
                    <div className="furniture-art" />
                    <div className="furniture-chair">
                        <span />
                        <i />
                    </div>
                    <div className="furniture-plant">
                        <i />
                        <i />
                        <i />
                        <span />
                    </div>
                    <div className="furniture-floor" />
                </div>
                <div className="preview-furniture-footer">
                    <span>Objects for slower living</span>
                    <span>01 — 04</span>
                </div>
            </div>
        );
    }

    return (
        <div className="work-preview work-preview--pdf">
            <div className="preview-pdf-orbit preview-pdf-orbit--one" />
            <div className="preview-pdf-orbit preview-pdf-orbit--two" />
            <div className="preview-pdf-heading">
                <span>FILE / TOOLS</span>
                <span>01 — 04</span>
            </div>
            <div className="preview-pdf-stack">
                <div className="preview-pdf-file preview-pdf-file--back">
                    <span>PDF</span>
                    <i />
                    <i />
                    <i />
                </div>
                <div className="preview-pdf-file preview-pdf-file--front">
                    <span>PDF</span>
                    <i />
                    <i />
                    <i />
                    <i />
                    <small>READY TO MERGE</small>
                </div>
                <div className="preview-pdf-action">
                    <ArrowDown size={17} />
                </div>
            </div>
            <div className="preview-pdf-footer">
                <span>GOODBYE, BUSYWORK.</span>
                <span>YOUR FILES STAY YOURS.</span>
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const Icon = project.icon;

    return (
        <article className={`project-card project-card--${project.size}`}>
            <ProjectPreview project={project} />
            <div className="project-card-content">
                <div className="project-card-meta">
                    <span>{project.category}</span>
                    <span>{project.number} / 04</span>
                </div>
                <div className="project-card-title-row">
                    <h3>{project.name}</h3>
                    <span className="project-card-icon">
                        <Icon size={17} />
                    </span>
                </div>
                <p>{project.description}</p>
                <div className="project-stack">
                    {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
                <div className="project-card-links">
                    {'demo' in project && project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                            Open live project <ArrowUpRight size={14} />
                        </a>
                    )}
                    <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View source <Github size={14} />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function Welcome() {
    return (
        <>
            <Head title="Portfolio">
                <meta
                    name="description"
                    content="Muhammad Hassan builds modern web applications and AI-powered systems."
                />
                <meta
                    property="og:title"
                    content="Muhammad Hassan — AI & Full-stack Developer"
                />
                <meta
                    property="og:description"
                    content="I make ideas work harder. AI and web products by Muhammad Hassan."
                />
            </Head>
            <div className="portfolio-page">
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
                        <Link href="/work">
                            Work <span>07</span>
                        </Link>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                    </nav>
                    <a className="header-contact" href="#contact">
                        Let’s talk <ArrowUpRight size={15} />
                    </a>
                </header>

                <main>
                    <section className="hero-section" id="home">
                        <div className="hero-grid">
                            <div className="hero-copy">
                                <div className="hero-eyebrow">
                                    <span className="eyebrow-pulse" />
                                    AI ENGINEER <span>/</span> FULL-STACK
                                    DEVELOPER
                                </div>
                                <h1>
                                    I make ideas
                                    <br />
                                    <span className="hero-headline-accent">
                                        work harder.
                                    </span>
                                </h1>
                                <p className="hero-intro">
                                    I’m Muhammad Hassan. I turn ambitious ideas
                                    into useful web products, thoughtful AI, and
                                    tools people actually want to use.
                                </p>
                                <div className="hero-actions">
                                    <a className="button-primary" href="#work">
                                        See what I build{' '}
                                        <ArrowDownRight size={17} />
                                    </a>
                                    <a
                                        className="button-quiet"
                                        href="mailto:mhassan909234@gmail.com"
                                    >
                                        Get in touch <ArrowUpRight size={15} />
                                    </a>
                                </div>
                                <div className="hero-socials">
                                    <span>
                                        <MapPin size={14} /> LAHORE, PAKISTAN
                                    </span>
                                    <a
                                        href="https://github.com/mhassan35"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Github size={14} /> GITHUB
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/mhassan35/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Linkedin size={14} /> LINKEDIN
                                    </a>
                                </div>
                            </div>

                            <div
                                className="hero-art"
                                aria-label="A code idea becoming a product"
                            >
                                <div className="hero-art-index">
                                    CREATIVE ENGINEERING <span>— 2026</span>
                                </div>
                                <div className="hero-art-glow" />
                                <div className="hero-art-cross hero-art-cross--one" />
                                <div className="hero-art-cross hero-art-cross--two" />
                                <div className="hero-code-card">
                                    <div className="hero-code-top">
                                        <span className="code-dots">
                                            <i />
                                            <i />
                                            <i />
                                        </span>
                                        <span>good-ideas.ts</span>
                                        <span className="code-lang">TS</span>
                                    </div>
                                    <pre>
                                        <span className="code-purple">
                                            const
                                        </span>{' '}
                                        idea ={' '}
                                        <span className="code-lime">
                                            "what if?"
                                        </span>
                                        ;{'\n\n'}
                                        <span className="code-purple">
                                            const
                                        </span>{' '}
                                        product ={' '}
                                        <span className="code-cyan">await</span>{' '}
                                        build(idea);
                                        {'\n\n'}
                                        <span className="code-muted">
                                            // make it matter
                                        </span>
                                        {'\n'}
                                        ship(product);
                                    </pre>
                                    <div className="hero-code-footer">
                                        <span>
                                            <i /> READY TO SHIP
                                        </span>
                                        <span>MH / 001</span>
                                    </div>
                                </div>
                                <div className="hero-art-sticker">
                                    <Sparkles size={16} />
                                    <span>
                                        CURIOUS
                                        <br />
                                        BY DEFAULT
                                    </span>
                                </div>
                                <div className="hero-art-caption">
                                    <span>FROM A QUESTION</span>
                                    <span className="caption-line" />
                                    <span>TO SOMETHING REAL</span>
                                </div>
                                <span className="hero-art-side-note">
                                    BUILT WITH INTENTION
                                </span>
                            </div>
                        </div>
                        <a href="#work" className="hero-scroll">
                            <span>SCROLL TO EXPLORE</span>
                            <ArrowDown size={14} />
                        </a>
                    </section>

                    <div className="ticker" aria-label="Areas of focus">
                        <div className="ticker-track">
                            {Array.from({ length: 2 }).map((_, index) => (
                                <span
                                    className="ticker-group"
                                    key={index}
                                    aria-hidden={index > 0}
                                >
                                    <b>AI SYSTEMS</b>
                                    <i>✳</i>
                                    <b>WEB PRODUCTS</b>
                                    <i>✳</i>
                                    <b>SMART AUTOMATION</b>
                                    <i>✳</i>
                                    <b>IDEAS INTO REALITY</b>
                                    <i>✳</i>
                                </span>
                            ))}
                        </div>
                    </div>

                    <section className="work-section" id="work">
                        <div className="section-wrap">
                            <div className="section-heading">
                                <div>
                                    <span className="section-kicker">
                                        SELECTED PROJECTS <i>— 2024 / 26</i>
                                    </span>
                                    <h2>
                                        Built to be <em>useful.</em>
                                    </h2>
                                </div>
                                <a className="all-projects-link" href="/work">
                                    VIEW ALL 7 PROJECTS{' '}
                                    <ArrowUpRight size={15} />
                                </a>
                            </div>
                            <div className="projects-grid">
                                {projects.map((project) => (
                                    <ProjectCard
                                        key={project.number}
                                        project={project}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="about-section" id="about">
                        <div className="about-wrap">
                            <div className="about-intro">
                                <span className="section-kicker">
                                    A LITTLE ABOUT HOW I WORK
                                </span>
                                <h2>
                                    Curiosity is
                                    <br />a <em>feature.</em>
                                </h2>
                                <p>
                                    The best technology solves a real problem
                                    and feels effortless to use. I bring a
                                    builder’s mindset to the whole journey —
                                    from figuring out what matters to making the
                                    details feel right.
                                </p>
                            </div>
                            <div className="focus-list">
                                {focusAreas.map((item) => (
                                    <div
                                        className="focus-row"
                                        key={item.number}
                                    >
                                        <span className="focus-number">
                                            {item.number}
                                        </span>
                                        <h3>{item.title}</h3>
                                        <p>{item.detail}</p>
                                        <ArrowUpRight size={16} />
                                    </div>
                                ))}
                                <div className="about-quote">
                                    <span>“</span>
                                    <p>
                                        Make the complicated feel simple. That’s
                                        the craft.
                                    </p>
                                    <small>MY NORTH STAR</small>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="experience-section" id="experience">
                        <div className="experience-wrap">
                            <div>
                                <span className="section-kicker">
                                    EXPERIENCE & COLLABORATION
                                </span>
                                <h2>
                                    Good work
                                    <br />
                                    takes <em>good people.</em>
                                </h2>
                                <p className="experience-intro">
                                    I value clear thinking, thoughtful
                                    collaboration, and building things that make
                                    a difference. See my LinkedIn for role
                                    details and work history.
                                </p>
                            </div>
                            <div className="experience-card">
                                <div className="experience-card-top">
                                    <span>PROFILE / 01</span>
                                    <ArrowUpRight size={16} />
                                </div>
                                <div className="experience-monogram">
                                    E<span>.</span>
                                </div>
                                <h3>Enigmatix</h3>
                                <p>Organization listed on my GitHub profile</p>
                                <a
                                    href="https://www.linkedin.com/in/mhassan35/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    SEE LINKEDIN PROFILE{' '}
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="contact-section" id="contact">
                        <div className="contact-orb contact-orb--one" />
                        <div className="contact-orb contact-orb--two" />
                        <div className="contact-content">
                            <span className="section-kicker">
                                YOUR IDEA LOOKS INTERESTING
                            </span>
                            <h2>
                                Let’s make
                                <br />
                                <em>something matter.</em>
                            </h2>
                            <a
                                className="contact-button"
                                href="mailto:mhassan909234@gmail.com"
                            >
                                Start a conversation <ArrowUpRight size={17} />
                            </a>
                            <a
                                className="contact-email"
                                href="mailto:mhassan909234@gmail.com"
                            >
                                mhassan909234@gmail.com
                            </a>
                        </div>
                        <span className="contact-aside">
                            GOOD IDEAS
                            <br />
                            WELCOME HERE ↗
                        </span>
                    </section>
                </main>

                <footer className="portfolio-footer">
                    <a className="footer-mark" href="#home">
                        mh<span>.</span>
                    </a>
                    <p>Made with curiosity in Lahore, Pakistan.</p>
                    <a href="#home">BACK TO TOP ↑</a>
                    <small>© MUHAMMAD HASSAN</small>
                </footer>
            </div>
        </>
    );
}
