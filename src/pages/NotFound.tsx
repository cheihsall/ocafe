
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HomeIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page non trouvée | Commune de Mlomp</title>
        <meta 
          name="description" 
          content="Cette page n'existe pas sur le site officiel de la commune de Mlomp. Retournez à l'accueil pour découvrir notre belle commune au Sénégal." 
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="relative mb-8 mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-mlomp-green to-mlomp-yellow bg-clip-text text-transparent"
            >
              404
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 -right-4 bg-mlomp-orange text-white text-xs px-2 py-1 rounded-full"
            >
              Page introuvable
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800"
          >
            Oups ! Cette page n'existe pas
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-8"
          >
            La page que vous recherchez n'est pas disponible ou a été déplacée. 
            Revenez à la page d'accueil pour continuer votre visite de la commune de Mlomp.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild variant="default" className="flex items-center gap-2 bg-mlomp-green hover:bg-mlomp-green-light">
              <Link to="/">
                <HomeIcon className="w-4 h-4" />
                <span>Retour à l'accueil</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link to={-1 as any}>
                <ArrowLeft className="w-4 h-4" />
                <span>Page précédente</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>Commune de Mlomp &copy; {new Date().getFullYear()} - Tous droits réservés</p>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
