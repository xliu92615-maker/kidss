export type ActivityCategory = 'subject' | 'colearning' | 'team' | 'study';

export interface Activity {
  id: string;
  title: string;
  category: ActivityCategory;
  shortDesc: string;
  description: string;
  image: string;
  age: string;
  duration: string;
  price: string;
  location: string;
  fullAddress: string;
  date: string;
  spots: number;
  spotsLeft: number;
  learningGoals: string[];
  included: string[];
  isPopular?: boolean;
  isNew?: boolean;
  tags: string[];
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  childAge: string;
  avatar: string;
  activityTitle: string;
  content: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
