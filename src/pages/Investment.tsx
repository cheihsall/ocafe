
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/common/SectionTitle";
import { TrendingUp, ShoppingBag, Building2, GraduationCap, Leaf, Handshake, Check, Users, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type SectorCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SectorCard = ({ icon, title, description }: SectorCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-transparent hover:border-l-mlomp-green">
      <div className="flex items-start">
        <div className="bg-mlomp-green/10 p-3 rounded-full text-mlomp-green mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Investment = () => {
  const sectors = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Agriculture",
      description: "Développement de projets agricoles durables et innovants"
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Commerce",
      description: "Opportunités dans le secteur commercial et la distribution"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Infrastructures",
      description: "Projets de construction et d'aménagement urbain"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Éducation",
      description: "Investissements dans les établissements scolaires et de formation"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Énergie verte",
      description: "Initiatives pour les énergies renouvelables et durables"
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Tourisme",
      description: "Valorisation du potentiel touristique et culturel"
    }
  ];

  const projects = [
    {
      title: "Extension du port de pêche",
      description: "Modernisation et extension des infrastructures portuaires pour soutenir la filière pêche locale.",
      investment: "350 millions FCFA",
      status: "En recherche de partenaires",
      sector: "Infrastructures",
      timeline: "2023-2025"
    },
    {
      title: "Complexe agro-industriel",
      description: "Création d'un complexe de transformation des produits agricoles locaux pour la création de valeur ajoutée.",
      investment: "500 millions FCFA",
      status: "Études préliminaires",
      sector: "Agriculture",
      timeline: "2024-2026"
    },
    {
      title: "Éco-lodge touristique",
      description: "Développement d'un complexe touristique écologique mettant en valeur les ressources naturelles et culturelles.",
      investment: "250 millions FCFA",
      status: "Recherche d'investisseurs",
      sector: "Tourisme",
      timeline: "2023-2024"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Investissements et Partenariats | Commune de Mlomp</title>
        <meta 
          name="description" 
          content="Découvrez les opportunités d'investissement et de partenariat dans la commune de Mlomp, une région dynamique et en plein développement au Sénégal." 
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-mlomp-green/10 to-mlomp-yellow/10 py-16 md:py-24">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
                Investir à Mlomp
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Découvrez les opportunités d'investissement et de partenariat dans une région dynamique et en plein développement
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-mlomp-green hover:bg-mlomp-green-dark">
                  Projets prioritaires
                </Button>
                <Button variant="outline">
                  Contacter notre équipe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pourquoi investir */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Pourquoi investir à Mlomp ?</h2>
                <p className="text-gray-600 mb-8">
                  La commune de Mlomp offre un environnement favorable aux investissements avec ses ressources naturelles, 
                  sa position stratégique et son dynamisme économique croissant.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-mlomp-green/10 p-2 rounded-full text-mlomp-green mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Cadre favorable aux investissements</h3>
                      <p className="text-sm text-gray-600">Un climat des affaires en constante amélioration avec des procédures administratives simplifiées</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-mlomp-green/10 p-2 rounded-full text-mlomp-green mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ressources naturelles abondantes</h3>
                      <p className="text-sm text-gray-600">Terres fertiles, ressources halieutiques, potentiel touristique inexploité</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-mlomp-green/10 p-2 rounded-full text-mlomp-green mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Population jeune et dynamique</h3>
                      <p className="text-sm text-gray-600">Une main-d'œuvre disponible, motivée et de plus en plus qualifiée</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-mlomp-green/10 p-2 rounded-full text-mlomp-green mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Stabilité politique et soutien administratif</h3>
                      <p className="text-sm text-gray-600">Un accompagnement personnalisé des investisseurs et une politique de développement cohérente</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-6">Contactez notre service de développement économique</h3>
                <p className="text-gray-600 mb-6">
                  Notre équipe dédiée est prête à vous accompagner dans votre projet d'investissement
                  et à répondre à toutes vos questions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="font-medium w-24">Email:</span>
                    <span className="text-mlomp-green">investir@mlomp.sn</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-24">Téléphone:</span>
                    <span>+221 XX XXX XX XX</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-24">Bureau:</span>
                    <span>Mairie de Mlomp, Service Économique</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="bg-mlomp-green hover:bg-mlomp-green-dark">
                    Prendre rendez-vous
                  </Button>
                  <Button variant="outline">
                    Télécharger la brochure
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Secteurs d'investissement */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionTitle 
              title="Secteurs d'investissement prioritaires" 
              subtitle="Découvrez les différents secteurs offrant des opportunités d'investissement dans la commune de Mlomp"
              centered
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            >
              {sectors.map((sector, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SectorCard {...sector} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projets à financer */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              title="Projets à la recherche de financement" 
              subtitle="Des projets structurants qui contribueront au développement économique et social de Mlomp"
              centered
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
            >
              {projects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.sector}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">{project.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Investissement:</span>
                          <span className="font-medium">{project.investment}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Calendrier:</span>
                          <span>{project.timeline}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Statut:</span>
                          <span className="bg-mlomp-blue/10 text-mlomp-blue text-xs px-2 py-1 rounded">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-mlomp-green hover:bg-mlomp-green-dark">
                        En savoir plus
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-12 text-center">
              <Button variant="outline">
                Voir tous les projets
              </Button>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 bg-gradient-to-br from-mlomp-green/5 to-mlomp-blue/5">
          <div className="container-custom">
            <SectionTitle 
              title="Nos avantages compétitifs" 
              subtitle="Les points forts qui font de Mlomp une destination attractive pour les investisseurs"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-mlomp-green/10 p-4 rounded-full text-mlomp-green">
                    <Globe className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">Position stratégique</h3>
                <p className="text-gray-600 text-center">
                  Située dans une région en plein développement avec un accès aux marchés locaux et internationaux.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-mlomp-green/10 p-4 rounded-full text-mlomp-green">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">Accompagnement personnalisé</h3>
                <p className="text-gray-600 text-center">
                  Une équipe dédiée pour faciliter vos démarches administratives et vous conseiller à chaque étape.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-mlomp-green/10 p-4 rounded-full text-mlomp-green">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">Incitations fiscales</h3>
                <p className="text-gray-600 text-center">
                  Des avantages fiscaux attractifs pour les nouveaux investissements dans les secteurs prioritaires.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl">
            <SectionTitle 
              title="Questions fréquentes" 
              subtitle="Réponses aux questions les plus courantes des investisseurs potentiels"
              centered
            />

            <div className="mt-12 space-y-6">
              {[
                {
                  question: "Quelles sont les démarches pour investir à Mlomp ?",
                  answer: "Pour investir à Mlomp, vous devez d'abord prendre contact avec notre service de développement économique qui vous guidera dans les démarches administratives nécessaires, notamment la constitution d'un dossier d'investissement, l'enregistrement de votre entreprise et l'obtention des autorisations requises selon votre secteur d'activité."
                },
                {
                  question: "Existe-t-il des incitations fiscales pour les investisseurs ?",
                  answer: "Oui, la commune de Mlomp, en accord avec la législation nationale, offre diverses incitations fiscales pour les nouveaux investissements, particulièrement dans les secteurs prioritaires. Ces avantages peuvent inclure des exonérations temporaires d'impôts locaux, des réductions fiscales et des facilités d'accès au foncier."
                },
                {
                  question: "Comment la commune accompagne-t-elle les investisseurs ?",
                  answer: "Notre commune a mis en place un guichet unique pour les investisseurs qui offre un accompagnement personnalisé : aide aux démarches administratives, mise en relation avec les partenaires locaux, conseil sur les opportunités d'investissement, et suivi de votre projet après son lancement. Nous organisons également des visites de site et des rencontres avec les acteurs économiques locaux."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 cursor-pointer bg-white">
                      <h3 className="font-medium text-gray-900">{item.question}</h3>
                      <ChevronDown className="w-5 h-5 text-mlomp-green transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-4 pb-4 pt-2 text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Vous avez d'autres questions sur l'investissement à Mlomp ?
              </p>
              <Button className="bg-mlomp-green hover:bg-mlomp-green-dark">
                Contactez-nous
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Investment;
