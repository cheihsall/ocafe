
import { Button } from "@/components/ui/button";
import SectionTitle from "../common/SectionTitle";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-section-gradient">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle 
              title="Bienvenue à Mlomp" 
              subtitle="Découvrez notre belle commune située dans la région de Bignona au Sénégal"
            />
            
            <div className="space-y-6">
              <p className="text-gray-700">
                Mlomp est une commune riche en culture et en traditions, dotée d'un paysage naturel exceptionnel. 
                Nos habitants sont connus pour leur hospitalité et leur engagement dans le développement 
                communautaire.
              </p>
              
              <p className="text-gray-700">
                Nous sommes engagés dans un processus de développement durable qui vise à améliorer 
                la qualité de vie de tous nos citoyens, tout en préservant notre patrimoine culturel 
                et environnemental.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-mlomp-green mb-2">Culture</h3>
                  <p className="text-gray-600">Riche patrimoine culturel et traditions uniques</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-mlomp-green mb-2">Économie</h3>
                  <p className="text-gray-600">Agriculture, pêche et artisanat dynamiques</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/presentation">
                  <Button variant="default" className="btn-primary group">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-float">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/51daae07-4880-44cc-8a6e-b02d0d055c81.png" 
                  alt="Village de Mlomp" 
                  className="w-full h-auto rounded-lg shadow-md animate-fade-in"
                />
                <img 
                  src="/lovable-uploads/29d63417-830f-4b0e-a9c1-00fbcdee5b9a.png" 
                  alt="Commune de Mlomp" 
                  className="w-full h-auto rounded-lg shadow-md animate-fade-in animation-delay-200"
                />
              </div>
              <div className="mt-8">
                <img 
                  src="/lovable-uploads/f7b45c57-fb5d-49cc-86a2-5f2c170b5e07.png" 
                  alt="Réunion communautaire à Mlomp" 
                  className="w-full h-auto rounded-lg shadow-md animate-fade-in animation-delay-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
