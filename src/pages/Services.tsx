
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCategories from "@/components/services/ServiceCategories";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Nos Services | Commune de Mlomp</title>
        <meta
          name="description"
          content="Découvrez les services municipaux et infrastructures disponibles dans la commune de Mlomp."
        />
      </Helmet>

      <Navbar />

      <main>
        <ServiceHero />
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <ServiceCategories />
            
            <div className="mt-20">
              <SectionTitle 
                title="Tous nos services" 
                subtitle="Explorez l'ensemble des services municipaux que nous proposons aux habitants de Mlomp"
                centered
              />
              
              <ServiceCard.Grid />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
