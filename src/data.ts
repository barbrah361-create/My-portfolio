import { Project, Poem, Book, Painting, Service, TimelineItem, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'End-to-end development of scalable, secure, and production-ready web applications from database schemas to pixel-perfect client-side states.',
    iconName: 'Layers'
  },
  {
    id: '2',
    title: 'Frontend Development',
    description: 'Crafting responsive, high-fidelity interfaces utilizing cutting-edge animations, luxurious spacing, and modern motion libraries.',
    iconName: 'Cpu'
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Architecting ultra-fast, robust server-side microservices, REST APIs, and background cron systems for complex workloads.',
    iconName: 'Server'
  },
  {
    id: '4',
    title: 'UI/UX Design',
    description: 'Translating design concepts into visual hierarchies, implementing glassmorphism, precise grid architectures, and tactile interactions.',
    iconName: 'Palette'
  },
  {
    id: '5',
    title: 'Responsive Web Development',
    description: 'Ensuring absolute layout fluidity and tactile touch responsiveness across mobile devices, tablets, and ultra-wide desktop monitors.',
    iconName: 'Smartphone'
  },
  {
    id: '6',
    title: 'REST API Development',
    description: 'Building standard, well-documented, and performant REST APIs with optimized payload distribution and rigorous security.',
    iconName: 'GitBranch'
  },
  {
    id: '7',
    title: 'Database Design',
    description: 'Modeling highly optimized relational structures (MySQL, PostgreSQL) and flexible NoSQL architectures (MongoDB, Firestore).',
    iconName: 'Database'
  },
  {
    id: '8',
    title: 'Website Optimization',
    description: 'Auditing page speed indices, optimizing asset delivery, asset caching, and lazy loading to guarantee perfect scores.',
    iconName: 'Zap'
  },
  {
    id: '9',
    title: 'Website Maintenance',
    description: 'Providing active updates, package security patches, server maintenance, continuous integration checks, and continuous uptime monitoring.',
    iconName: 'Settings'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Helena Israel Empires',
    description: 'A modern e-commerce website for Helena Israel Empires, showcasing imported beauty and cosmetic products with an elegant shopping experience.',
    image: 'https://picsum.photos/seed/beauty/800/600?blur=1',
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
    githubUrl: 'https://github.com/Barbrah78720/helena-israel-empires',
    liveUrl: 'https://helenaisraelempires.com'
  },
  {
    id: '2',
    title: 'Kenya Time Machine',
    description: "An educational interactive platform that allows users to explore Kenya's history through an engaging timeline, historical events, culture, and immersive storytelling.",
    image: 'https://picsum.photos/seed/kenya/800/600?blur=1',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'D3.js'],
    githubUrl: 'https://github.com/Barbrah78720/kenya-time-machine',
    liveUrl: 'https://kenyatimemachine.or.ke'
  },
  {
    id: '3',
    title: 'AfyaLink',
    description: 'A healthcare management platform designed to improve healthcare accessibility by connecting patients with hospitals and health services through an efficient digital system.',
    image: 'https://picsum.photos/seed/health/800/600?blur=1',
    tags: ['React', 'Firebase', 'Node.js', 'Tailwind CSS', 'Express'],
    githubUrl: 'https://github.com/Barbrah78720/afyalink',
    liveUrl: 'https://afyalink-health.org'
  },
  {
    id: '4',
    title: 'Readers',
    description: 'A reading and learning platform designed to encourage digital reading while providing users with an organized and engaging experience.',
    image: 'https://picsum.photos/seed/readers/800/600?blur=1',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Barbrah78720/readers-platform',
    liveUrl: 'https://readers-learning.net'
  }
];

export const SKILLS_DATA = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 88 },
  { name: 'Express.js', level: 85 },
  { name: 'Tailwind CSS', level: 98 },
  { name: 'MongoDB', level: 82 },
  { name: 'MySQL', level: 80 },
  { name: 'Git & Version Control', level: 92 },
  { name: 'Firebase', level: 88 },
  { name: 'Docker', level: 75 }
];

export const POEMS_DATA: Poem[] = [
  {
    id: 'p1',
    title: 'The Code in My Veins',
    date: 'February 2026',
    description: 'An introspection on the delicate boundaries where compiling variables meets human emotion.',
    themes: ['Logic', 'Humanity', 'Creation'],
    content: [
      'My hands dance on a mechanical stage,',
      'Declaring constants to quiet the void,',
      'For what is a compile but an echo of birth?',
      'A spark of logic, beautifully deployed.',
      'Yet underneath the binary lines of light,',
      'The variables pulse, a warm human trace,',
      'For we are but scripts running in the deep night,',
      'Searching for loops of love in infinite space.'
    ]
  },
  {
    id: 'p2',
    title: 'Subtle Strokes of Midnight',
    date: 'April 2026',
    description: 'A reflective poem exploring the sensory experience of painting with hot pink on black under the Nairobi stars.',
    themes: ['Art', 'Nairobi Night', 'Expression'],
    content: [
      'I take the heavy acrylic paste,',
      'Deep charcoal black, thick as Nairobi midnight,',
      'But on the rough canvas, I slice a bright line,',
      'Of hot pink neon—a cinematic fight.',
      'The pigment is heavy, resisting the knife,',
      'Yet yields to the texture, a vibrant design,',
      'Sometimes the loudest truths in our life,',
      'Are the pink glowing strokes that refuse to align.'
    ]
  },
  {
    id: 'p3',
    title: 'Whispers of the Great Rift',
    date: 'June 2026',
    description: 'A tribute to Kenyan ancestry, red clay soil, and the digital future expanding over our valleys.',
    themes: ['Kenya', 'Heritage', 'Future'],
    content: [
      'The red dust rises off the winding track,',
      'Ancestral voices humming in the clay,',
      'A silent heritage looking back,',
      'Into a sky where fiber-optic structures play.',
      'We build the bridges with a developer’s eye,',
      'But hold the soil tight in our hands,',
      'We speak in codes that traverse the high sky,',
      'But dream in Swahili across these ancient lands.'
    ]
  }
];

export const BOOKS_DATA: Book[] = [
  {
    id: 'b1',
    title: 'The Syntactic Canvas: Where Logic Meets Creative Soul',
    status: 'Upcoming',
    description: 'A ground-breaking collection of tech-philosophical essays, poetry, and acrylic illustrations exploring the symbiotic relationship between compiling code and painting canvases.',
    releaseYear: 'Late 2026',
    genres: ['Essays', 'Poetry', 'Creative Tech']
  },
  {
    id: 'b2',
    title: 'Echoes of the Savannah: Modern Rhythms',
    status: 'Upcoming',
    description: 'A poignant poetry anthology focusing on youth, female empowerment, technological evolution, and deep-seated African ancestry in Kenya.',
    releaseYear: 'Early 2027',
    genres: ['Poetry', 'Contemporary Literature']
  }
];

export const PAINTINGS_DATA: Painting[] = [
  {
    id: 'art1',
    title: 'Kenyan Savannah Sunset',
    imageUrl: '/acrylic_sunset.jpg',
    description: 'A dramatic, sunset over the acacia trees, stylized in thick impasto palette knife strokes. The hot pink and soft coral hues slice through deep black silhouettes to create a majestic, high-contrast glow.',
    year: '2025',
    size: '30" x 40"',
    medium: 'Acrylic with Palette Knife on Heavy Duty Canvas'
  },
  {
    id: 'art2',
    title: 'The Infinite Circuit',
    imageUrl: '/acrylic_technologist.jpg',
    description: 'A conceptual fusion of technology and fine art. Liquid, organic hot pink acrylic swirls are integrated with sharp geometric lines reminiscent of modern semiconductor architectures and complex microprocessors.',
    year: '2026',
    size: '24" x 36"',
    medium: 'Fluid Acrylic & Silver Leaf on Birch Wood Board'
  },
  {
    id: 'art3',
    title: 'Poetic Chaos',
    imageUrl: '/acrylic_chaos.jpg',
    description: 'A raw visual display of emotional release. Thick splatters of soft pink and neon magenta acrylic are set against a heavily modeled, texturized pitch-black void representing the birth of a poem.',
    year: '2026',
    size: '36" x 48"',
    medium: 'Heavy-body Acrylic & Mixed Media on Gallery Wrap Canvas'
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 't1',
    year: '2025 - Present',
    title: 'Full Stack Engineer & Creative Technologist',
    institution: 'Freelance & Creative Agency Projects',
    type: 'experience',
    description: 'Designing and building luxury web platforms, high-fashion e-commerce platforms like Helena Israel Empires, and medical systems like AfyaLink. Specializing in highly interactive UI, responsive databases, and clean systems architecture.'
  },
  {
    id: 't2',
    year: '2026',
    title: 'Published Poet & Visual Artist',
    institution: 'Nairobi Fine Art Collective',
    type: 'achievement',
    description: 'Exhibited "The Infinite Circuit" and other acrylic paintings in local avant-garde galleries, bridging the gap between developers and traditional oil/acrylic visual fine artists.'
  },
  {
    id: 't3',
    year: '2023 - 2025',
    title: 'Software Development Specialist',
    institution: 'Nairobi Tech Hubs',
    type: 'education',
    description: 'Completed comprehensive rigorous training and practical internships in Full Stack development, REST API design, system integration, and mobile layouts.'
  },
  {
    id: 't4',
    year: 'Late 2026',
    title: 'Launch "The Syntactic Canvas" Book',
    institution: 'Author Endeavors',
    type: 'goal',
    description: 'Publish first print book combining interactive software repositories, physical acrylic paintings, and compiled poetry.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'm1',
    name: 'Helena Israel',
    role: 'Founder & CEO',
    company: 'Helena Israel Empires',
    text: "Barbrah is a rare gem in tech. She didn't just write clean code for our beauty empire; she designed an immersive luxury shopping experience that skyrocketed our online presence. Her artistic sensibility coupled with solid backend architecture is truly world-class.",
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5
  },
  {
    id: 'm2',
    name: 'Dr. Joseph Kilonzo',
    role: 'Director of Healthcare Systems',
    company: 'AfyaLink Initiative',
    text: "Working with Barbrah to build AfyaLink was an outstanding experience. She solved incredibly complex portal integrations and doctor-patient scheduling flows, keeping performance fast and the mobile interface easy for anyone to use. Highly professional and dependable.",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5
  },
  {
    id: 'm3',
    name: 'Wanjiku Kamau',
    role: 'Creative Lead',
    company: 'Kenyan Cultural Archives',
    text: "For Kenya Time Machine, Barbrah designed animations and interactive timeline visualizers that took our history stories and turned them into stunning experiences. Her identity as a poet shines through in the storytelling flow of her code.",
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5
  }
];
