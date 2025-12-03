
import SectionTitle from "../common/SectionTitle";
import { Calendar, Users, TrendingUp, Building } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Projets et Développement" 
          subtitle="Découvrez notre plan quinquennal et les initiatives de développement en cours dans la commune de Mlomp"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Plan Quinquennal */}
          <div className="card p-6 overflow-visible relative animate-fade-in">
            <div className="absolute -top-6 left-6 bg-mlomp-green text-white rounded-full p-3 shadow-lg">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Plan Quinquennal</h3>
              <p className="text-gray-600 mb-6">
                Notre plan de développement sur cinq ans définit les objectifs et les stratégies pour 
                transformer Mlomp en une commune moderne et prospère.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-mlomp-green/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-mlomp-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Croissance économique</h4>
                    <p className="text-gray-600 text-sm">Développement des secteurs agricole et artisanal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-mlomp-green/10 p-2 rounded-full">
                    <Building className="h-5 w-5 text-mlomp-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Infrastructures modernes</h4>
                    <p className="text-gray-600 text-sm">Construction et rénovation des équipements publics</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/projets/plan-quinquennal" className="text-mlomp-green hover:underline font-medium inline-flex items-center">
                  Consulter le plan complet
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Initiatives */}
          <div className="card p-6 overflow-visible relative animate-fade-in-right">
            <div className="absolute -top-6 left-6 bg-mlomp-orange text-white rounded-full p-3 shadow-lg">
              <Users className="h-6 w-6" />
            </div>
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Initiatives Communautaires</h3>
              <p className="text-gray-600 mb-6">
                Nous soutenons de nombreuses initiatives citoyennes qui contribuent au développement 
                social et économique de notre commune.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-mlomp-orange">Innovation Agricole</h4>
                  <p className="text-gray-600 text-sm mt-2">Techniques modernes et durables</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-mlomp-orange">Autonomisation des Femmes</h4>
                  <p className="text-gray-600 text-sm mt-2">Soutien aux projets féminins</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-mlomp-orange">Jeunesse & Emploi</h4>
                  <p className="text-gray-600 text-sm mt-2">Formation et insertion professionnelle</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-mlomp-orange">Protection Environnementale</h4>
                  <p className="text-gray-600 text-sm mt-2">Préservation des ressources naturelles</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/projets/initiatives" className="text-mlomp-orange hover:underline font-medium inline-flex items-center">
                  Découvrir nos initiatives
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projets" className="btn-primary">
            Tous nos projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
