// ============================================================
// HACKSPHERE 2.0 — Event Configuration
// Edit timeline dates/descriptions, rewards, organizers,
// contact info and gallery images here.
// ============================================================

// Rewards — replace prize text with actual amounts when announced.
export const rewards = [
  {
    rank: 'Winner',
    icon: 'Trophy',
    prize: 'Prize TBA',
    tagline: 'Champion of HACKSPHERE 2.0',
    perks: ['Trophy & Certificate', 'Mentorship Kit', 'Priority Mentoring'],
  },
  {
    rank: 'First Runner-Up',
    icon: 'Medal',
    prize: 'Prize TBA',
    tagline: 'Outstanding Innovation',
    perks: ['Medal & Certificate', 'Swag Kit'],
  },
  {
    rank: 'Second Runner-Up',
    icon: 'Award',
    prize: 'Prize TBA',
    tagline: 'Rising Innovator',
    perks: ['Medal & Certificate', 'Swag Kit'],
  },
];

// Contact details — SITYOG University, Aurangabad (Bihar)
export const contactInfo = {
  collegeName: 'SITYOG University',
  department: 'Computer Science & Engineering — Faculty of Engineering & Technology',
  address: 'SITYOG University, Aurangabad, Bihar, India',
  email: 'hackspherecsesityog@gmail.com',
  phones: ['+91 8920174526', '+91 8340289155', '+91 7717768570'],
  eventDates: '30th November – 1st December 2026',
  venue: 'SITYOG University, Aurangabad, Bihar',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=SITYOG+University+Aurangabad+Bihar',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
};

// Convenors (from official poster)
export const convenors = [
  { name: 'Dr. S. K. Jha', designation: 'Director, SITYOG University' },
  { name: 'Prof. S. K. Ojha', designation: 'Associate Dean, SITYOG University' },
];

// Gallery — replace placeholder SVGs with real event photos.
// Recommended size: 800x600+. Drop files into public/images/ and update paths here.
export const galleryImages = [
  { src: '/images/poster.jpg', alt: 'HACKSPHERE 2.0 official event poster', category: 'Event Poster' },
  { src: '/images/coding.svg', alt: 'Students coding during the hackathon', category: 'Coding' },
  { src: '/images/teamwork.svg', alt: 'Team collaboration in action', category: 'Teamwork' },
  { src: '/images/presentation.svg', alt: 'Final project presentations', category: 'Presentations' },
  { src: '/images/tech.svg', alt: 'Technology showcase and demos', category: 'Technology' },
  { src: '/images/workshop.svg', alt: 'Workshop and learning sessions', category: 'Workshops' },
  { src: '/images/awards.svg', alt: 'Awards ceremony celebration', category: 'Celebration' },
];

export const participationRewards = {
  title: 'Participation & Recognition',
  items: [
    'Participation Certificates for all teams',
    'Digital badges for every participant',
    'Top teams featured on official channels',
    'Special category awards & mentor shout-outs',
  ],
};

export const timelineStages = [
  {
    icon: 'Flag',
    title: 'Registration',
    description: 'Register your team and secure your spot at HACKSPHERE 2.0.',
    date: 'TBA',
  },
  {
    icon: 'Compass',
    title: 'Challenge Exploration',
    description: 'Explore problem statements and pick the challenge that excites your team.',
    date: 'TBA',
  },
  {
    icon: 'Lightbulb',
    title: 'Idea Development',
    description: 'Brainstorm, research, and shape your innovative solution.',
    date: 'TBA',
  },
  {
    icon: 'Code2',
    title: 'Prototype Building',
    description: 'Build, code, and iterate on your prototype with mentor support.',
    date: 'TBA',
  },
  {
    icon: 'Presentation',
    title: 'Final Presentation',
    description: 'Pitch your solution to the judges and showcase your innovation.',
    date: 'TBA',
  },
  {
    icon: 'Trophy',
    title: 'Results & Awards',
    description: 'Watch the results unfold and celebrate the winners.',
    date: 'TBA',
  },
];
