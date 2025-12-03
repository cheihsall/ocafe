
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/common/SectionTitle";
import { Helmet } from "react-helmet-async";

const Presentation = () => {
  return (
    <>
      <Helmet>
        <title>Présentation de Mlomp | Histoire, Culture et Économie</title>
        <meta name="description" content="Découvrez l'histoire, la culture, la population et les activités économiques de la commune de Mlomp au Sénégal." />
        <meta name="keywords" content="Mlomp, Sénégal, Bignona, histoire, culture, population, économie" />
        <link rel="canonical" href="https://mlomp.sn/presentation" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-r from-mlomp-green to-mlomp-green-light text-white">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Présentation de Mlomp</h1>
                <p className="text-xl opacity-90">
                  Découvrez notre commune, son histoire, sa culture et sa population
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                <path fill="#fff" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,170.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
            </div>
          </section>

          {/* Nouveau: Portrait Officiel du Maire */}
          <section className="py-16 bg-white">
            <div className="container-custom">
              <SectionTitle 
                title="Le Maire de Mlomp" 
                subtitle="Ansoumana Papiss Dieme - Au service de la commune"
              />
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-8">
                <div className="relative max-w-md">
                  <div className="relative border-8 border-white shadow-xl">
                    <img
                      src="/lovable-uploads/39250762-0889-4d75-a01b-dc68e07bc421.png"
                      alt="Ansoumana Papiss Dieme - Maire de Mlomp / Bignona"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
                      <h3 className="text-white text-xl font-bold">ANSOUMANA PAPISS DIEME</h3>
                      <p className="text-white/90 text-sm">MAIRE DE LA COMMUNE DE MLOMP / BIGNONA</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-full h-12 bg-gradient-to-r from-mlomp-yellow via-mlomp-orange to-mlomp-green z-[-1]"></div>
                </div>
                
                <div className="max-w-lg mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold text-mlomp-green mb-4">Vision et leadership</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      M. Ansoumana Papiss Dieme dirige la commune de Mlomp avec engagement et détermination.
                      Élu par les citoyens de Mlomp, il porte les couleurs nationales du Sénégal et travaille
                      sans relâche pour le développement économique et social de notre commune.
                    </p>
                    <p>
                      Sa vision "Mlomp, une économie exemplaire, un niveau social élevé et une gestion transparente"
                      guide chaque projet et initiative mise en œuvre par son administration.
                    </p>
                    <p>
                      Formé en administration publique, M. Dieme apporte son expertise et son dynamisme
                      au service de tous les habitants, privilégiant l'inclusion, la concertation et la transparence
                      dans sa gouvernance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Histoire */}
          <section className="py-16">
            <div className="container-custom">
              <SectionTitle 
                title="Histoire de Mlomp" 
                subtitle="Un héritage riche et une tradition ancrée dans le temps"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    La commune de Mlomp possède une histoire riche et fascinante qui remonte à plusieurs siècles. 
                    Fondée par des peuples autochtones de la région, elle s'est développée à travers les âges 
                    en préservant ses traditions et sa culture.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Au cours de son histoire, Mlomp a connu différentes périodes importantes :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>La période précoloniale : marquée par l'organisation traditionnelle et l'économie de subsistance</li>
                    <li>L'époque coloniale : qui a introduit de nouvelles dynamiques administratives et culturelles</li>
                    <li>L'indépendance : avec la mise en place des structures modernes de gouvernance locale</li>
                    <li>La période contemporaine : caractérisée par le développement et les initiatives locales</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Aujourd'hui, Mlomp est une commune dynamique qui honore son passé tout en regardant vers l'avenir.
                  </p>
                </div>
                
                <div className="relative">
                  <img 
                    src="/lovable-uploads/f7b45c57-fb5d-49cc-86a2-5f2c170b5e07.png" 
                    alt="Histoire de Mlomp" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-mlomp-green rounded-lg z-[-1]"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-mlomp-yellow rounded-lg z-[-1]"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Culture */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <SectionTitle 
                title="Culture et Traditions" 
                subtitle="Un patrimoine culturel vivant et diversifié"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <img 
                    src="/lovable-uploads/ba162101-b545-449e-8088-8791d9b9adf1.png" 
                    alt="Culture et traditions de Mlomp" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mlomp-orange rounded-lg z-[-1]"></div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <p className="text-gray-700 mb-4">
                    La richesse culturelle de Mlomp se manifeste à travers ses traditions, ses cérémonies 
                    et ses expressions artistiques. Les habitants de la commune perpétuent un héritage 
                    culturel précieux qui fait la fierté de toute la région.
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-mlomp-orange mb-2">Cérémonies traditionnelles</h3>
                      <p className="text-gray-600">
                        Les cérémonies marquent les étapes importantes de la vie communautaire, avec des 
                        rituels spécifiques qui célèbrent les naissances, les mariages et les récoltes.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-mlomp-orange mb-2">Musique et danse</h3>
                      <p className="text-gray-600">
                        Les rythmes traditionnels et les danses folkloriques accompagnent les événements 
                        importants, transmettant l'histoire et les valeurs aux nouvelles générations.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold text-mlomp-orange mb-2">Artisanat</h3>
                      <p className="text-gray-600">
                        Le savoir-faire artisanal se manifeste à travers la vannerie, la poterie et 
                        les textiles, témoignant de la créativité et de l'ingéniosité locale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Population */}
          <section className="py-16">
            <div className="container-custom">
              <SectionTitle 
                title="Population" 
                subtitle="Une communauté diverse et dynamique"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-mlomp-green p-4 text-white">
                    <h3 className="text-xl font-semibold">Démographie</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      La population de Mlomp est estimée à environ X habitants, avec une 
                      croissance démographique stable. La structure de la population est 
                      caractérisée par sa jeunesse, avec plus de 60% des habitants ayant 
                      moins de 35 ans.
                    </p>
                    <div className="mt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">0-14 ans</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-mlomp-green h-2 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                      
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">15-34 ans</span>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-mlomp-green h-2 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                      
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">35-59 ans</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-mlomp-green h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">60+ ans</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-mlomp-green h-2 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-mlomp-blue p-4 text-white">
                    <h3 className="text-xl font-semibold">Diversité ethnique</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Mlomp est caractérisée par sa diversité ethnique qui fait sa richesse culturelle. 
                      Plusieurs groupes ethniques cohabitent harmonieusement, contribuant à la diversité 
                      linguistique et culturelle de la commune.
                    </p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-mlomp-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Diola (majoritaire)</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-mlomp-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Mandingue</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-mlomp-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Peul</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-mlomp-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Autres groupes ethniques</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-mlomp-yellow p-4 text-gray-800">
                    <h3 className="text-xl font-semibold">Éducation</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Le secteur éducatif est constitué du préscolaire, de l'élémentaire et du moyen.
                      Au sein de la commune nous notons sept (07) infrastructures éducatives répartis comme suit :
                    </p>
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Préscolaire</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Le DIPE est composé de deux (2) infrastructures préscolaires : une case des tous petits à Mlomp et une classe préscolaire à l'élémentaire (CPE). L'effectif total du préscolaire est estimé à 125 élèves dont 55% de garçons et 45% de filles.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Élémentaire</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          La commune de Mlomp totalise quatre écoles élémentaires (trois à Mlomp dont une franco-arabe et une à Ediamath). L'effectif total est estimé à 581 élèves dont 54% de garçons et 46% de filles répartie dans trente une (31) salles de classe construites et trois (3) abris provisoires.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Moyen secondaire</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          La commune de Mlomp dispose d'un collège d'enseignement moyen (CEM). Il accueille un effectif de 361 élèves dont 55% de garçons. Son taux de couverture est à 100% et se situe en dessus des taux du département de Bignona et de la région.
                        </p>
                        <div className="mt-3">
                          <div className="grid grid-cols-4 gap-2 text-xs font-medium bg-gray-100 p-2">
                            <div>Rubrique</div>
                            <div>Infrastructures</div>
                            <div>Effectifs</div>
                            <div>Ratio élèves/salles</div>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-xs p-2 border-b">
                            <div>CEM</div>
                            <div>1</div>
                            <div>361</div>
                            <div>36</div>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-xs p-2">
                            <div>Lycée</div>
                            <div>0</div>
                            <div>0</div>
                            <div>0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activités économiques */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <SectionTitle 
                title="Activités Économiques" 
                subtitle="Les moteurs du développement économique local"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-mlomp-green/10 p-3 rounded-full text-mlomp-green mr-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Agriculture</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    L'activité économique est dominée par l'agriculture. Deux types d'agricultures y sont pratiqués : l'agriculture pluviale dominée par les grandes cultures (le riz, l'arachide...) et celle irriguée (maraichage et arboriculture). Malgré ses nombreuses potentialités, l'agriculture est confrontée à plusieurs contraintes, notamment sous-équipement des producteurs, dégradation des terres, déficit de main-d'œuvre, et faible maitrise de l'eau.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Culture du riz et céréales</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Arboriculture fruitière</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Maraîchage</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-mlomp-blue/10 p-3 rounded-full text-mlomp-blue mr-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Commerce</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Le secteur du commerce se manifeste principalement par la vente au niveau des boutiques (22 dont 20 à Mlomp) et des tables. Ces boutiques fournissent généralement des denrées de premières nécessités et des biens de consommation courante. Elles sont gérées par des commerçants venant d'autres régions. Il n'y a ni marché hebdomadaire encore moins de marché quotidien où d'espace aménagé pour le commerce malgré les énormes potentialités.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-blue mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Boutiques de proximité</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-blue mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Denrées de première nécessité</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-blue mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Potentiel de développement commercial</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-mlomp-orange/10 p-3 rounded-full text-mlomp-orange mr-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Artisanat</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Le secteur de l'artisanat dans la commune englobe divers métiers, tels que les mécaniciens vélo/moto, les ébénistes, les menuisiers, les métalliques, les forgerons, les maçons, les maîtres peintres, les tailleurs, les coiffeurs, les tisserands, les exploitants de scierie, cordonnier, les électriciens, les carreleurs, les plombiers, les puisatiers etc. La plupart de ces artisans exercent leur activité de manière secondaire, avec une intensité accrue durant la saison sèche.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-orange mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Diversité des métiers artisanaux</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-orange mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Activité principalement en saison sèche</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-orange mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Besoin de structuration et d'équipement</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-mlomp-yellow/10 p-3 rounded-full text-mlomp-yellow mr-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Transport et Communication</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Le réseau de la Commune est constitué d'une route bitumée (la boucle du Blouf) et des pistes de productions. Les principaux moyens de transport utilisés sont les véhicules, les Jakartas et les tricycles. Pour la communication, l'infrastructure se résume à la seule présence d'une antenne Orange située dans le village de Mlomp, avec une couverture limitée pour les autres opérateurs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-yellow mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Route bitumée et pistes de production</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-yellow mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Couverture réseau Orange principalement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-mlomp-yellow mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Besoin d'infrastructure de transport et communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Message du Maire */}
          <section className="py-16 bg-white">
            <div className="container-custom">
              <div className="bg-gradient-to-r from-mlomp-green-light/20 to-mlomp-green/10 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/25fa12d1-5705-42a3-b9da-60f1485c9bef.png" 
                        alt="Ansoumana Papiss Dieme - Maire de Mlomp" 
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-black/5 rounded-lg"></div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-mlomp-green mb-6">Message du Maire</h3>
                    <blockquote className="relative border-l-4 border-mlomp-green pl-4 italic text-gray-700">
                      <p className="mb-4">
                        "Chers visiteurs, bienvenue sur le site officiel de la commune de Mlomp. Notre commune 
                        est riche de son histoire, de sa culture et de son dynamisme économique. Nous travaillons 
                        chaque jour à améliorer le quotidien de nos concitoyens et à préparer l'avenir."
                      </p>
                      <p className="mb-4">
                        "Ensemble, nous bâtissons une commune plus forte, plus inclusive et tournée vers l'avenir. 
                        Je vous invite à découvrir Mlomp, à contribuer à son développement et à partager notre vision 
                        d'un avenir prospère pour tous."
                      </p>
                      <footer className="font-bold text-gray-900 not-italic">
                        Ansoumana Papiss Dieme, Maire de Mlomp
                      </footer>
                    </blockquote>
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

export default Presentation;
