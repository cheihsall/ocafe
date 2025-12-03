import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/common/SectionTitle";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, PieChart, Lightbulb, Droplets, Leaf, GraduationCap, Building, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projets et Développement | Commune de Mlomp</title>
        <meta name="description" content="Découvrez les projets de développement et le plan quinquennal de la commune de Mlomp au Sénégal" />
        <meta name="keywords" content="Mlomp, projets, développement, plan quinquennal, investissements, Sénégal" />
        <link rel="canonical" href="https://mlomp.sn/projets" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-r from-mlomp-blue to-mlomp-blue-light text-white">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Projets et Développement</h1>
                <p className="text-xl opacity-90">
                  Construire ensemble l'avenir de Mlomp
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                <path fill="#fff" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,170.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
            </div>
          </section>

          {/* Tabs Section */}
          <section className="py-16">
            <div className="container-custom">
              <SectionTitle 
                title="Notre Vision de Développement" 
                subtitle="Des projets innovants pour construire une commune prospère et durable"
                centered={true}
              />
              
              <Tabs defaultValue="overview" className="w-full mt-8">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8">
                  <TabsTrigger value="overview" className="py-3">Vue d'ensemble</TabsTrigger>
                  <TabsTrigger value="current" className="py-3">Projets en cours</TabsTrigger>
                  <TabsTrigger value="future" className="py-3">Plan Quinquennal</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="pt-4 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-mlomp-blue">La stratégie de développement de Mlomp</h3>
                      <p className="text-gray-700 mb-6">
                        La commune de Mlomp s'est engagée dans une démarche de développement ambitieuse et inclusive, 
                        qui vise à améliorer les conditions de vie des habitants tout en préservant 
                        l'environnement et en valorisant le patrimoine culturel local.
                      </p>
                      <p className="text-gray-700 mb-6">
                        Notre stratégie de développement s'articule autour de 5 axes prioritaires, définis 
                        à l'issue d'un processus participatif impliquant l'ensemble des acteurs du territoire.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-mlomp-green/10 p-2 rounded-full text-mlomp-green">
                            <LineChart size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Gouvernance locale</h4>
                            <p className="text-gray-600 text-sm">Renforcement des capacités institutionnelles et amélioration de la participation citoyenne</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-mlomp-blue/10 p-2 rounded-full text-mlomp-blue">
                            <Building size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Infrastructures et services de base</h4>
                            <p className="text-gray-600 text-sm">Développement des infrastructures essentielles et amélioration de l'accès aux services</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-mlomp-orange/10 p-2 rounded-full text-mlomp-orange">
                            <PieChart size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Développement économique local</h4>
                            <p className="text-gray-600 text-sm">Promotion des activités génératrices de revenus et création d'emplois</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-mlomp-yellow/10 p-2 rounded-full text-mlomp-yellow">
                            <GraduationCap size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Éducation et développement social</h4>
                            <p className="text-gray-600 text-sm">Renforcement du système éducatif et promotion de l'inclusion sociale</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600">
                            <Leaf size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Environnement et développement durable</h4>
                            <p className="text-gray-600 text-sm">Protection des ressources naturelles et adaptation aux changements climatiques</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/fc012e5d-71f0-4b17-9228-a30095f78a90.png" 
                        alt="Stratégie de développement de Mlomp" 
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mlomp-blue rounded-lg z-[-1]"></div>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Current Projects Tab */}
                <TabsContent value="current" className="pt-4 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="transition-all hover:shadow-md">
                      <CardHeader className="bg-mlomp-green/10">
                        <CardTitle className="flex items-center gap-2">
                          <Droplets className="text-mlomp-blue" />
                          Accès à l'eau potable
                        </CardTitle>
                        <CardDescription>2023-2024</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-gray-700 mb-4">
                          Construction de 5 nouveaux forages et réhabilitation du réseau d'adduction 
                          d'eau dans les villages de la commune pour garantir un accès équitable à 
                          l'eau potable.
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <Badge className="bg-mlomp-green">En cours</Badge>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">Détails</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Projet d'accès à l'eau potable</DialogTitle>
                                <DialogDescription>
                                  Amélioration de l'accès à l'eau potable dans la commune de Mlomp
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                <p>
                                  Ce projet vise à améliorer significativement l'accès à l'eau potable pour les 
                                  habitants de Mlomp, avec un objectif de couverture de 95% de la population.
                                </p>
                                <div>
                                  <h4 className="font-semibold mb-2">Principales réalisations prévues :</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Construction de 5 forages équipés de pompes solaires</li>
                                    <li>Réhabilitation de 3 châteaux d'eau existants</li>
                                    <li>Extension du réseau de distribution sur 15 km</li>
                                    <li>Installation de 20 bornes-fontaines dans les zones éloignées</li>
                                    <li>Formation de 10 comités de gestion de l'eau</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Budget et financement :</h4>
                                  <p className="text-sm">
                                    Budget total : 120 millions FCFA<br />
                                    Partenaires : État du Sénégal (40%), Coopération internationale (50%), Commune (10%)
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">État d'avancement :</h4>
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-mlomp-green h-2.5 rounded-full" style={{ width: "65%" }}></div>
                                  </div>
                                  <p className="text-right text-sm mt-1">65% complété</p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="transition-all hover:shadow-md">
                      <CardHeader className="bg-mlomp-blue/10">
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="text-mlomp-yellow" />
                          Électrification rurale
                        </CardTitle>
                        <CardDescription>2023-2025</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-gray-700 mb-4">
                          Extension du réseau électrique et installation de lampadaires solaires 
                          dans 12 villages pour améliorer le cadre de vie et favoriser le développement 
                          économique local.
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <Badge className="bg-mlomp-blue">En cours</Badge>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">Détails</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Projet d'électrification rurale</DialogTitle>
                                <DialogDescription>
                                  Extension du réseau électrique et éclairage public solaire
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                <p>
                                  Ce projet ambitieux vise à porter le taux d'électrification de la commune 
                                  de 45% actuellement à 80% d'ici 2025, en privilégiant les énergies renouvelables.
                                </p>
                                <div>
                                  <h4 className="font-semibold mb-2">Principales réalisations prévues :</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Extension du réseau électrique sur 25 km</li>
                                    <li>Installation de 200 lampadaires solaires</li>
                                    <li>Électrification de 8 écoles et 4 centres de santé</li>
                                    <li>Création d'une mini-centrale solaire de 50 kW</li>
                                    <li>Formation de 15 techniciens locaux en maintenance solaire</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Budget et financement :</h4>
                                  <p className="text-sm">
                                    Budget total : 280 millions FCFA<br />
                                    Partenaires : État du Sénégal (35%), Banque Africaine de Développement (45%), Commune (10%), Autres partenaires (10%)
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">État d'avancement :</h4>
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-mlomp-blue h-2.5 rounded-full" style={{ width: "40%" }}></div>
                                  </div>
                                  <p className="text-right text-sm mt-1">40% complété</p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="transition-all hover:shadow-md">
                      <CardHeader className="bg-mlomp-orange/10">
                        <CardTitle className="flex items-center gap-2">
                          <Truck className="text-mlomp-orange" />
                          Désenclavement routier
                        </CardTitle>
                        <CardDescription>2022-2024</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-gray-700 mb-4">
                          Réhabilitation de 35 km de pistes rurales et construction d'un pont pour 
                          désenclaver les zones isolées et faciliter l'accès aux marchés et aux 
                          services de base.
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <Badge className="bg-mlomp-orange">En cours</Badge>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">Détails</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Projet de désenclavement routier</DialogTitle>
                                <DialogDescription>
                                  Amélioration du réseau routier et des infrastructures de transport
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                <p>
                                  Ce projet vise à améliorer la mobilité au sein de la commune et à faciliter 
                                  les échanges économiques avec les territoires voisins.
                                </p>
                                <div>
                                  <h4 className="font-semibold mb-2">Principales réalisations prévues :</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Réhabilitation de 35 km de pistes rurales</li>
                                    <li>Construction d'un pont de 120 mètres sur le fleuve Casamance</li>
                                    <li>Aménagement de 5 ouvrages de franchissement</li>
                                    <li>Création d'une gare routière moderne</li>
                                    <li>Installation de signalisation routière</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Budget et financement :</h4>
                                  <p className="text-sm">
                                    Budget total : 450 millions FCFA<br />
                                    Partenaires : État du Sénégal (60%), Union Européenne (30%), Commune (10%)
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">État d'avancement :</h4>
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-mlomp-orange h-2.5 rounded-full" style={{ width: "75%" }}></div>
                                  </div>
                                  <p className="text-right text-sm mt-1">75% complété</p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center mt-10">
                    <Button className="bg-mlomp-blue hover:bg-mlomp-blue-dark">
                      Voir tous les projets en cours
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Future Projects - Plan Quinquennal Tab */}
                <TabsContent value="future" className="pt-4 pb-8">
                  <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 text-mlomp-blue">Plan de Développement Quinquennal 2023-2028</h3>
                    <p className="text-gray-700 mb-6">
                      La commune de Mlomp s'est dotée d'un Plan de Développement Quinquennal (PDQ) 
                      pour la période 2023-2028. Ce document stratégique, élaboré de manière participative, 
                      définit la vision et les priorités de développement pour les cinq prochaines années.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <span className="bg-mlomp-green text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">1</span>
                          Vision du PDQ
                        </h4>
                        <p className="text-gray-600 ml-9">
                          "Faire de Mlomp, d'ici 2028, une commune exemplaire sur le plan économique, 
                          avec un niveau social élevé et une gestion transparente, où chaque citoyen 
                          trouve les conditions de son épanouissement."
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <span className="bg-mlomp-orange text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">2</span>
                          Objectifs généraux
                        </h4>
                        <ul className="space-y-2 text-gray-600 ml-9">
                          <li className="flex items-start gap-2">
                            <span className="text-mlomp-orange">•</span>
                            Améliorer les conditions de vie des populations
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-mlomp-orange">•</span>
                            Renforcer les capacités économiques locales
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-mlomp-orange">•</span>
                            Préserver l'environnement et le patrimoine culturel
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-mlomp-orange">•</span>
                            Améliorer la gouvernance locale
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Projets structurants prévus (2023-2028)</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h4 className="text-lg font-semibold text-mlomp-blue">Construction d'un centre multifonctionnel</h4>
                        <Badge className="bg-mlomp-green-light text-mlomp-green-dark">Priorité haute</Badge>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Ce centre regroupera plusieurs services administratifs, une salle polyvalente 
                        pour les événements culturels, un espace de co-working et un incubateur pour 
                        les jeunes entrepreneurs.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Budget estimé: 350M FCFA</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Début prévu: 2024</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Durée: 24 mois</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h4 className="text-lg font-semibold text-mlomp-blue">Projet d'appui à l'agriculture durable</h4>
                        <Badge className="bg-mlomp-green-light text-mlomp-green-dark">Priorité haute</Badge>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Ce programme vise à moderniser les techniques agricoles tout en préservant 
                        l'environnement, avec la création de périmètres maraîchers, l'introduction 
                        de systèmes d'irrigation goutte-à-goutte, et la formation aux pratiques agroécologiques.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Budget estimé: 280M FCFA</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Début prévu: 2023</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Durée: 48 mois</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h4 className="text-lg font-semibold text-mlomp-blue">Programme de santé communautaire</h4>
                        <Badge className="bg-mlomp-yellow-light text-mlomp-yellow-dark">Priorité moyenne</Badge>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Construction d'un centre de santé moderne, équipement des postes de santé existants, 
                        formation d'agents de santé communautaire et mise en place d'un système de référence 
                        médicale efficace.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Budget estimé: 320M FCFA</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Début prévu: 2025</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Durée: 36 mois</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h4 className="text-lg font-semibold text-mlomp-blue">Valorisation du patrimoine culturel</h4>
                        <Badge className="bg-mlomp-yellow-light text-mlomp-yellow-dark">Priorité moyenne</Badge>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Création d'un musée local, restauration des sites historiques, 
                        organisation d'un festival annuel de culture, et développement d'un 
                        programme de tourisme culturel responsable.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Budget estimé: 180M FCFA</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Début prévu: 2024</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Durée: 36 mois</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Télécharger le PDQ complet</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Téléchargement du Plan de Développement Quinquennal</DialogTitle>
                          <DialogDescription>
                            Le document sera bientôt disponible pour téléchargement.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-center text-gray-600">
                            Le Plan de Développement Quinquennal complet est en cours de finalisation et sera 
                            disponible au téléchargement prochainement. Veuillez revenir ultérieurement 
                            ou contacter la mairie pour plus d'informations.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Community Involvement Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <SectionTitle 
                title="Participation Citoyenne" 
                subtitle="Impliquez-vous dans le développement de notre commune"
                centered={true}
              />
              
              <div className="bg-white rounded-lg shadow-md p-8 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-mlomp-green">Ensemble, construisons l'avenir de Mlomp</h3>
                    <p className="text-gray-700 mb-6">
                      La participation active des citoyens est essentielle pour le succès des 
                      projets de développement. La commune de Mlomp a mis en place plusieurs 
                      mécanismes pour impliquer la population dans le processus de décision 
                      et de mise en œuvre des projets.
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="bg-mlomp-green/10 p-3 rounded-full text-mlomp-green shrink-0">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Comités de développement villageois</h4>
                          <p className="text-gray-600 text-sm">
                            Structures locales qui permettent aux habitants de s'impliquer dans 
                            l'identification des besoins et le suivi des projets.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="bg-mlomp-blue/10 p-3 rounded-full text-mlomp-blue shrink-0">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Budget participatif</h4>
                          <p className="text-gray-600 text-sm">
                            Une partie du budget communal est allouée à des projets proposés 
                            et sélectionnés directement par les citoyens.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="bg-mlomp-orange/10 p-3 rounded-full text-mlomp-orange shrink-0">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Forums citoyens</h4>
                          <p className="text-gray-600 text-sm">
                            Réunions publiques régulières où les habitants peuvent exprimer 
                            leurs préoccupations et suggérer des solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button className="bg-mlomp-green hover:bg-mlomp-green-dark">
                        Comment participer
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/29d63417-830f-4b0e-a9c1-00fbcdee5b9a.png" 
                      alt="Participation citoyenne à Mlomp" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-mlomp-yellow rounded-lg z-[-1]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
