
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import { CalendarDays } from "lucide-react";

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Inauguration du nouveau centre de santé de Mlomp",
    excerpt: "Le Maire Ansoumana Papiss Dieme a inauguré le nouveau centre de santé qui améliorera l'accès aux soins pour les habitants.",
    date: "15 Juin 2023",
    image: "/lovable-uploads/7da0caaf-815f-40f0-a79f-8ae98789853a.png",
    category: "Santé"
  },
  {
    id: 2,
    title: "Lancement du programme de soutien aux agriculteurs locaux",
    excerpt: "Une nouvelle initiative pour aider les agriculteurs de Mlomp à améliorer leurs techniques et leur productivité.",
    date: "3 Mai 2023",
    image: "/lovable-uploads/fc012e5d-71f0-4b17-9228-a30095f78a90.png",
    category: "Agriculture"
  },
  {
    id: 3,
    title: "Réunion du conseil municipal pour le budget 2024",
    excerpt: "Les élus se sont réunis pour discuter et approuver le budget prévisionnel de l'année 2024.",
    date: "22 Avril 2023",
    image: "/lovable-uploads/b0e38c51-cfbe-4da2-9b6f-3cccf9b0025f.png",
    category: "Administration"
  }
];

const NewsCard = ({ news }: { news: NewsItem }) => {
  return (
    <article className="card overflow-hidden h-full flex flex-col animate-fade-in">
      <div className="relative overflow-hidden h-48">
        <img
          src={news.image}
          alt={news.title}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 bg-mlomp-green text-white text-xs font-bold px-3 py-1">
          {news.category}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <CalendarDays className="h-4 w-4 mr-2" />
          <span>{news.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 hover:text-mlomp-green transition-colors">
          <Link to={`/actualites/${news.id}`}>
            {news.title}
          </Link>
        </h3>
        <p className="text-gray-600 flex-grow">{news.excerpt}</p>
        <Link
          to={`/actualites/${news.id}`}
          className="mt-4 inline-flex items-center text-mlomp-green hover:text-mlomp-green-light font-medium"
        >
          Lire la suite
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

const NewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Actualités et Événements"
          subtitle="Restez informé des dernières nouvelles et événements dans la commune de Mlomp"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {newsItems.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/actualites" className="btn-primary">
            Toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
