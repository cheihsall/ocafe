
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import { FileText, UserCheck, MessageSquare, ClipboardList } from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
    >
      <div className="bg-mlomp-blue/10 p-4 rounded-full mb-4 text-mlomp-blue group-hover:bg-mlomp-blue group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
};

const CitizenSection = () => {
  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documents Administratifs",
      description: "Accédez aux formulaires et soumettez vos demandes en ligne",
      link: "/espace-citoyen/documents"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Démarches Administratives",
      description: "Guide pour effectuer vos démarches auprès de la commune",
      link: "/espace-citoyen/demarches"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Contacter la Mairie",
      description: "Adressez vos questions et préoccupations directement à nos services",
      link: "/espace-citoyen/contact"
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Décisions Municipales",
      description: "Consultez les délibérations et arrêtés du conseil municipal",
      link: "/espace-citoyen/decisions"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-mlomp-blue/5 to-mlomp-green/5">
      <div className="container-custom">
        <SectionTitle
          title="Espace Citoyen"
          subtitle="Un portail dédié aux services administratifs pour les habitants de Mlomp"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Participez à la vie démocratique locale</h3>
              <p className="text-gray-600 mb-6">
                La commune de Mlomp encourage la participation citoyenne active. Partagez vos idées, 
                exprimez vos besoins et contribuez à l'amélioration de votre commune.
              </p>
              <Link to="/espace-citoyen/participation" className="btn-primary">
                Comment participer ?
              </Link>
            </div>
            
            <div className="bg-section-gradient p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Prochaine réunion publique</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-medium w-24">Date:</span>
                  <span>15 Juillet 2023</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Heure:</span>
                  <span>14h00</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Lieu:</span>
                  <span>Salle du Conseil Municipal</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Thème:</span>
                  <span>Budget participatif 2023-2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenSection;
