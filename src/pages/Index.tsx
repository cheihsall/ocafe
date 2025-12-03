
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import NewsSection from "@/components/home/NewsSection";
import CitizenSection from "@/components/home/CitizenSection";
import InvestmentSection from "@/components/home/InvestmentSection";
import ContactSection from "@/components/home/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Index = () => {
  // Add debugging to check if component renders
  useEffect(() => {
    console.log("Index component mounted");
    // This will help us see if the component is mounting
  }, []);

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Commune de Mlomp | Accueil - Une économie exemplaire, un niveau social élevé</title>
        <meta name="description" content="Site officiel de la commune de Mlomp au Sénégal. Découvrez notre belle commune, son économie exemplaire, son niveau social élevé et sa gestion transparente." />
        <meta name="keywords" content="Mlomp, commune, Sénégal, Bignona, Casamance, développement local, économie, Ansoumana Papiss Dieme, tourisme Mlomp, services municipaux" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Commune de Mlomp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mlomp.sn/" />
        <meta property="og:title" content="Commune de Mlomp | Accueil" />
        <meta property="og:description" content="Site officiel de la commune de Mlomp au Sénégal. Découvrez notre belle commune, son économie exemplaire, son niveau social élevé et sa gestion transparente." />
        <meta property="og:image" content="https://mlomp.sn/images/og-image.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Commune de Mlomp" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mlomp.sn/" />
        <meta property="twitter:title" content="Commune de Mlomp | Accueil" />
        <meta property="twitter:description" content="Site officiel de la commune de Mlomp au Sénégal. Découvrez notre belle commune, son économie exemplaire, son niveau social élevé et sa gestion transparente." />
        <meta property="twitter:image" content="https://mlomp.sn/images/og-image.jpg" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://mlomp.sn/" />
        {/* Structured data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "Commune de Mlomp",
            "url": "https://mlomp.sn",
            "logo": "https://mlomp.sn/images/logo.png",
            "description": "Site officiel de la commune de Mlomp au Sénégal",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mlomp",
              "addressRegion": "Bignona",
              "addressCountry": "SN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+221-XX-XXX-XX-XX",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://facebook.com/communemlomp",
              "https://twitter.com/mlomp_commune"
            ]
          })}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <NewsSection />
          <CitizenSection />
          <InvestmentSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
