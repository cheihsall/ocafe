
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  School, 
  Heart, 
  Bus, 
  Lightbulb, 
  Droplets, 
  ShieldCheck,
  Users,
  Briefcase,
  Trash2,
  FileText,
  Building,
  Wifi
} from "lucide-react";

const servicesList = [
  {
    icon: <School className="h-7 w-7" />,
    title: "Éducation",
    description: "Accès à des établissements scolaires de qualité pour tous les enfants de la commune.",
    link: "/services/education",
    category: "Éducation"
  },
  {
    icon: <Heart className="h-7 w-7" />,
    title: "Santé",
    description: "Services médicaux et programmes de santé adaptés aux besoins de la population.",
    link: "/services/sante",
    category: "Santé"
  },
  {
    icon: <Bus className="h-7 w-7" />,
    title: "Transport",
    description: "Solutions de mobilité pour faciliter les déplacements dans et autour de la commune.",
    link: "/services/transport",
    category: "Transport"
  },
  {
    icon: <Lightbulb className="h-7 w-7" />,
    title: "Énergie",
    description: "Initiatives pour un accès durable à l'électricité et aux énergies renouvelables.",
    link: "/services/energie",
    category: "Énergie"
  },
  {
    icon: <Droplets className="h-7 w-7" />,
    title: "Eau Potable",
    description: "Infrastructures pour garantir l'accès à l'eau potable à tous les habitants.",
    link: "/services/eau",
    category: "Eau"
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Sécurité",
    description: "Mesures pour assurer la sécurité et le bien-être de tous les citoyens.",
    link: "/services/securite",
    category: "Sécurité"
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Services Sociaux",
    description: "Assistance sociale pour les personnes vulnérables et programmes d'entraide communautaire.",
    link: "/services/social",
    category: "Social"
  },
  {
    icon: <Briefcase className="h-7 w-7" />,
    title: "Emploi",
    description: "Accompagnement professionnel et initiatives pour l'insertion dans le marché du travail.",
    link: "/services/emploi",
    category: "Emploi"
  },
  {
    icon: <Trash2 className="h-7 w-7" />,
    title: "Gestion des déchets",
    description: "Collecte et traitement des déchets pour une commune propre et respectueuse de l'environnement.",
    link: "/services/dechets",
    category: "Environnement"
  },
  {
    icon: <FileText className="h-7 w-7" />,
    title: "Services Administratifs",
    description: "Démarches administratives et documents officiels pour les habitants de la commune.",
    link: "/services/administratif",
    category: "Administration"
  },
  {
    icon: <Building className="h-7 w-7" />,
    title: "Logement",
    description: "Programmes de logement et assistance pour l'amélioration de l'habitat dans la commune.",
    link: "/services/logement",
    category: "Logement"
  },
  {
    icon: <Wifi className="h-7 w-7" />,
    title: "Numérique",
    description: "Accès aux outils numériques et formation pour réduire la fracture digitale.",
    link: "/services/numerique",
    category: "Numérique"
  }
];

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  category: string;
};

const ServiceCard: React.FC<ServiceCardProps> & {
  Grid: React.FC;
} = ({ icon, title, description, link, category }) => {
  return (
    <motion.div
      className="card group hover:border-l-4 hover:border-l-mlomp-green transition-all duration-300"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-mlomp-green/10 text-mlomp-green text-xs font-semibold rounded-full mb-4">
          {category}
        </span>
        <div className="bg-mlomp-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-mlomp-green group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-mlomp-green transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Link 
          to={link} 
          className="inline-flex items-center text-mlomp-green font-medium hover:underline"
        >
          En savoir plus
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServiceGrid: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {servicesList.map((service, index) => (
        <ServiceCard 
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          link={service.link}
          category={service.category}
        />
      ))}
    </motion.div>
  );
};

ServiceCard.Grid = ServiceGrid;

export default ServiceCard;
