
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import MlompLogo from "../common/MlompLogo";

type NavLink = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

const navLinks: NavLink[] = [
  { name: "Accueil", href: "/" },
  { name: "Présentation", href: "/presentation" },
  { 
    name: "Projets", 
    href: "/projets",
    submenu: [
      { name: "Plan quinquennal", href: "/projets/plan-quinquennal" },
      { name: "Initiatives", href: "/projets/initiatives" }
    ] 
  },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Éducation", href: "/services/education" },
      { name: "Santé", href: "/services/sante" },
      { name: "Infrastructures", href: "/services/infrastructures" }
    ] 
  },
  { name: "Actualités", href: "/actualites" },
  { name: "Espace Citoyen", href: "/espace-citoyen" },
  { name: "Investissements", href: "/investissements" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (name: string) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(name);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <MlompLogo className="h-10 w-auto" />
          <span className="text-xl font-bold font-montserrat text-mlomp-green">
            Mlomp
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.submenu ? (
                <button 
                  className="flex items-center space-x-1 font-medium hover:text-mlomp-green transition-colors"
                  onClick={() => toggleSubmenu(link.name)}
                >
                  <span>{link.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link 
                  to={link.href} 
                  className="font-medium hover:text-mlomp-green transition-colors"
                >
                  {link.name}
                </Link>
              )}

              {link.submenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                  <div className="py-2">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-mlomp-green hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-600 hover:text-mlomp-green"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg absolute w-full transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container-custom py-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name} className="py-2">
              {link.submenu ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full text-left font-medium"
                    onClick={() => toggleSubmenu(link.name)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform ${
                      openSubmenu === link.name ? "rotate-180" : ""
                    }`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSubmenu === link.name ? "mt-2 max-h-48" : "max-h-0"
                    }`}
                  >
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block py-2 pl-4 text-sm hover:text-mlomp-green"
                        onClick={toggleMobileMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className="block font-medium hover:text-mlomp-green"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
