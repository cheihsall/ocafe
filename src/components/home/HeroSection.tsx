
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('/lovable-uploads/c7524787-0fd9-49e5-8823-b9b491849da7.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-white font-bold leading-tight mb-6 text-shadow">
              Commune de Mlomp
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium mb-8 text-shadow max-w-xl">
              "Mlomp, une économie exemplaire, un niveau social élevé et une gestion transparente"
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/presentation" className="btn-primary">
                Découvrir Mlomp
              </Link>
              <Link to="/espace-citoyen" className="btn-secondary">
                Espace Citoyen
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="relative">
                <img 
                  src="/lovable-uploads/25fa12d1-5705-42a3-b9da-60f1485c9bef.png" 
                  alt="Ansoumana Papiss Dieme - Maire de Mlomp" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                  <h3 className="text-white text-xl font-bold">Ansoumana Papiss Dieme</h3>
                  <p className="text-white/90 text-sm">Maire de la Commune de Mlomp</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white/90 italic">
                  "Ensemble, construisons un avenir prospère pour notre commune et offrons à chaque citoyen les moyens de s'épanouir."
                </p>
                <Link to="/presentation" className="flex items-center mt-3 text-mlomp-yellow hover:text-white transition-colors group">
                  <span>Message du maire</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
