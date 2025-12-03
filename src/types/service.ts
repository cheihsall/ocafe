
export interface Service {
  id: string;
  title: string;
  description: string;
  metaDescription?: string;
  image: string;
  longDescription: string[];
  features?: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  statistics?: {
    value: string;
    label: string;
  }[];
  gallery?: {
    image: string;
    caption: string;
  }[];
  contactInfo?: {
    name: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  steps?: {
    title: string;
    description: string;
  }[];
  documents?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
  location?: string;
  hours?: string;
  contact?: string;
  deadline?: string;
  price?: string;
  cta?: {
    text: string;
    url: string;
  };
  relatedServices?: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
  seo?: {
    keywords: string[];
    canonicalUrl?: string;
    structuredData?: Record<string, any>;
  };
}
