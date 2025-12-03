
import SectionTitle from "../common/SectionTitle";
import { School, Heart, Bus, Lightbulb, Droplets, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: string;
};

const ServiceCard = ({ icon, title, description, link, delay }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className={`card p-6 group hover:border-l-4 hover:border-l-mlomp-green transition-all duration-300 animate-fade-in ${delay}`}
    >
      <div className="bg-mlomp-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-mlomp-green group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-mlomp-green transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </Link>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <School className="h-7 w-7" />,
      title: "Éducation",
      description: "Accès à des établissements scolaires de qualité pour tous les enfants de la commune.",
      link: "/services/education"
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Santé",
      description: "Services médicaux et programmes de santé adaptés aux besoins de la population.",
      link: "/services/sante"
    },
    {
      icon: <Bus className="h-7 w-7" />,
      title: "Transport",
      description: "Solutions de mobilité pour faciliter les déplacements dans et autour de la commune.",
      link: "/services/transport"
    },
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: "Énergie",
      description: "Initiatives pour un accès durable à l'électricité et aux énergies renouvelables.",
      link: "/services/energie"
    },
    {
      icon: <Droplets className="h-7 w-7" />,
      title: "Eau Potable",
      description: "Infrastructures pour garantir l'accès à l'eau potable à tous les habitants.",
      link: "/services/eau"
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Sécurité",
      description: "Mesures pour assurer la sécurité et le bien-être de tous les citoyens.",
      link: "/services/securite"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Nos Services et Infrastructures" 
          subtitle="Découvrez les services municipaux et les infrastructures que nous développons pour améliorer la qualité de vie à Mlomp"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={`delay-${index * 100}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            Tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
