
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock, MapPin, Users, CheckCircle, FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '@/types/service';
import SectionTitle from '@/components/common/SectionTitle';
import { motion } from 'framer-motion';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceLayoutProps {
  service: Service;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ service }) => {
  return (
    <>
      <Helmet>
        <title>{service.title} | Services - Commune de Mlomp</title>
        <meta name="description" content={service.metaDescription || service.description} />
        <link rel="canonical" href={`https://mlomp.sn/services/${service.id}`} />
        {service.seo && (
          <>
            <meta name="keywords" content={service.seo.keywords.join(', ')} />
            {service.seo.structuredData && (
              <script type="application/ld+json">
                {JSON.stringify(service.seo.structuredData)}
              </script>
            )}
          </>
        )}
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="relative py-24 bg-gradient-to-r from-mlomp-green to-mlomp-green-light text-white overflow-hidden">
            <div className="container-custom relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.title}
                </motion.h1>
                <motion.p 
                  className="text-xl opacity-90 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {service.description}
                </motion.p>
                
                {service.statistics && (
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {service.statistics.map((stat, index) => (
                      <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                <path fill="#fff" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,170.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
            </div>
          </section>

          {/* Service Details */}
          <section className="py-16">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <motion.div 
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h2 className="text-2xl font-bold">{service.title}</h2>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h2 className="text-2xl font-bold mb-6 text-mlomp-green">À propos de ce service</h2>
                      <div className="prose max-w-none">
                        {service.longDescription.map((paragraph, index) => (
                          <p key={index} className="mb-6 text-gray-700 leading-relaxed">{paragraph}</p>
                        ))}
                      </div>

                      {service.features && service.features.length > 0 && (
                        <div className="mt-12">
                          <h3 className="text-xl font-semibold mb-6 text-mlomp-green">Ce que nous proposons</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.features.map((feature, index) => (
                              <Card key={index} className="border-l-4 border-l-mlomp-green/60 hover:shadow-md transition-shadow">
                                <CardHeader>
                                  <div className="flex items-start gap-3">
                                    <div className="bg-mlomp-green/10 p-2 rounded-full">
                                      {feature.icon}
                                    </div>
                                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-gray-600">{feature.description}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.steps && service.steps.length > 0 && (
                        <div className="mt-12">
                          <h3 className="text-xl font-semibold mb-6 text-mlomp-green">Comment utiliser ce service</h3>
                          <div className="space-y-6">
                            {service.steps.map((step, index) => (
                              <motion.div 
                                key={index} 
                                className="flex gap-4 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-mlomp-green flex items-center justify-center text-white font-bold">
                                  {index + 1}
                                </div>
                                <div>
                                  <h4 className="text-lg font-medium">{step.title}</h4>
                                  <p className="text-gray-600 mt-1">{step.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.documents && service.documents.length > 0 && (
                        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                          <h3 className="text-xl font-semibold mb-6 flex items-center text-mlomp-green">
                            <FileText className="h-5 w-5 mr-2" />
                            Documents requis
                          </h3>
                          <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.documents.map((document, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-mlomp-green mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{document}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {service.gallery && service.gallery.length > 0 && (
                    <motion.div 
                      className="mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-mlomp-green">Galerie</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.gallery.map((item, index) => (
                          <div key={index} className="relative rounded-lg overflow-hidden group h-60">
                            <img 
                              src={item.image} 
                              alt={item.caption} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                              <p className="p-4 text-white text-sm">{item.caption}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {service.faq && service.faq.length > 0 && (
                    <motion.div 
                      className="mt-8 bg-white rounded-xl shadow-md p-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold mb-6 text-mlomp-green flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Questions fréquentes
                      </h2>
                      <div className="space-y-6 mt-6">
                        {service.faq.map((item, index) => (
                          <motion.div 
                            key={index}
                            className="border-b border-gray-100 pb-6 last:border-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <h3 className="text-lg font-semibold text-mlomp-green mb-3">{item.question}</h3>
                            <p className="text-gray-700">{item.answer}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    <motion.div 
                      className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold mb-6 text-mlomp-green flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Informations pratiques
                      </h3>
                      
                      <div className="space-y-4">
                        {service.location && (
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-mlomp-green mt-1 mr-3" />
                            <div>
                              <h4 className="font-medium">Lieu</h4>
                              <p className="text-gray-600">{service.location}</p>
                            </div>
                          </div>
                        )}
                        
                        {service.hours && (
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 text-mlomp-green mt-1 mr-3" />
                            <div>
                              <h4 className="font-medium">Horaires</h4>
                              <p className="text-gray-600">{service.hours}</p>
                            </div>
                          </div>
                        )}
                        
                        {service.contact && (
                          <div className="flex items-start">
                            <Users className="h-5 w-5 text-mlomp-green mt-1 mr-3" />
                            <div>
                              <h4 className="font-medium">Contact</h4>
                              <p className="text-gray-600">{service.contact}</p>
                            </div>
                          </div>
                        )}
                        
                        {service.deadline && (
                          <div className="flex items-start">
                            <Calendar className="h-5 w-5 text-mlomp-green mt-1 mr-3" />
                            <div>
                              <h4 className="font-medium">Délai</h4>
                              <p className="text-gray-600">{service.deadline}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {service.price && (
                        <div className="mt-6 p-4 bg-mlomp-green/5 rounded-lg">
                          <h4 className="font-medium mb-1">Coût du service</h4>
                          <p className="text-xl font-bold text-mlomp-green">{service.price}</p>
                        </div>
                      )}

                      {service.contactInfo && (
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-3">Service en charge</h4>
                          <ul className="space-y-2 text-sm">
                            <li><span className="font-medium">Nom:</span> {service.contactInfo.name}</li>
                            <li><span className="font-medium">Téléphone:</span> {service.contactInfo.phone}</li>
                            <li><span className="font-medium">Email:</span> {service.contactInfo.email}</li>
                            <li><span className="font-medium">Adresse:</span> {service.contactInfo.address}</li>
                            <li><span className="font-medium">Horaires:</span> {service.contactInfo.hours}</li>
                          </ul>
                        </div>
                      )}
                      
                      {service.cta && (
                        <div className="mt-6">
                          <a 
                            href={service.cta.url} 
                            className="btn-primary w-full flex items-center justify-center"
                          >
                            {service.cta.text}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services */}
          {service.relatedServices && service.relatedServices.length > 0 && (
            <section className="py-16 bg-gray-50">
              <div className="container-custom">
                <SectionTitle 
                  title="Services associés" 
                  subtitle="Découvrez d'autres services qui pourraient vous intéresser"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  {service.relatedServices.map((relatedService, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="relative h-48">
                        <img 
                          src={relatedService.image} 
                          alt={relatedService.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                        <p className="text-gray-600 mb-4">{relatedService.description}</p>
                        <Link 
                          to={`/services/${relatedService.id}`}
                          className="text-mlomp-green hover:text-mlomp-green-dark font-medium flex items-center"
                        >
                          En savoir plus
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServiceLayout;
