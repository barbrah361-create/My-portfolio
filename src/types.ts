export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Poem {
  id: string;
  title: string;
  content: string[];
  date: string;
  description: string;
  themes: string[];
}

export interface Book {
  id: string;
  title: string;
  status: 'Published' | 'Upcoming' | 'In Progress';
  description: string;
  releaseYear: string;
  genres: string[];
}

export interface Painting {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  year: string;
  size: string;
  medium: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  type: 'education' | 'experience' | 'achievement' | 'goal';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
  rating: number;
}
