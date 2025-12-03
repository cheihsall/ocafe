
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import MlompLogo from "../common/MlompLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MlompLogo className="h-10 w-auto" />
              <span className="text-xl font-bold font-montserrat">Mlomp</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Mlomp, une économie exemplaire, un niveau social élevé et une gestion transparente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-mlomp-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-mlomp-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-mlomp-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/presentation" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Présentation
                </Link>
              </li>
              <li>
                <Link to="/projets" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/education" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Éducation
                </Link>
              </li>
              <li>
                <Link to="/services/sante" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Santé
                </Link>
              </li>
              <li>
                <Link to="/services/transport" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Transport
                </Link>
              </li>
              <li>
                <Link to="/services/energie" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Énergie
                </Link>
              </li>
              <li>
                <Link to="/services/eau" className="text-gray-300 hover:text-mlomp-green transition-colors">
                  Eau Potable
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-mlomp-green shrink-0 mt-0.5" />
                <span className="text-gray-300">Commune de Mlomp, Bignona, Sénégal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-mlomp-green shrink-0" />
                <span className="text-gray-300">+221 XX XXX XX XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-mlomp-green shrink-0" />
                <span className="text-gray-300">contact@mlomp.sn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Commune de Mlomp. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
