
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { 
  School, 
  Heart, 
  Bus, 
  Lightbulb, 
  Droplets, 
  ShieldCheck 
} from "lucide-react";

const categories = [
  {
    icon: <School className="h-12 w-12" />,
    title: "Éducation",
    description: "Établissements scolaires et formations",
    color: "bg-blue-50 text-blue-600",
    iconColor: "text-blue-600"
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Santé",
    description: "Services médicaux et soins",
    color: "bg-red-50 text-red-600",
    iconColor: "text-red-600"
  },
  {
    icon: <Bus className="h-12 w-12" />,
    title: "Transport",
    description: "Mobilité et déplacements",
    color: "bg-orange-50 text-orange-600",
    iconColor: "text-orange-600"
  },
  {
    icon: <Lightbulb className="h-12 w-12" />,
    title: "Énergie",
    description: "Électricité et énergies renouvelables",
    color: "bg-yellow-50 text-yellow-600",
    iconColor: "text-yellow-600"
  },
  {
    icon: <Droplets className="h-12 w-12" />,
    title: "Eau",
    description: "Accès à l'eau potable",
    color: "bg-cyan-50 text-cyan-600",
    iconColor: "text-cyan-600"
  },
  {
    icon: <ShieldCheck className="h-12 w-12" />,
    title: "Sécurité",
    description: "Protection des citoyens",
    color: "bg-purple-50 text-purple-600",
    iconColor: "text-purple-600"
  }
];

const ServiceCategories = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services">
      <SectionTitle 
        title="Catégories de Services" 
        subtitle="Explorez nos différentes catégories de services disponibles pour les citoyens"
        centered
      />

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {categories.map((category, index) => (
          <motion.div 
            key={index}
            className={`rounded-xl p-6 ${category.color} transition-all duration-300 hover:shadow-lg`}
            variants={itemVariants}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`${category.iconColor} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceCategories;
