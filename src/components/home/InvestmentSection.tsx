
import SectionTitle from "../common/SectionTitle";
import { TrendingUp, ShoppingBag, Building2, GraduationCap, Leaf, Handshake, Truck, Zap, Radio } from "lucide-react";
import { Link } from "react-router-dom";

type SectorCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SectorCard = ({ icon, title, description }: SectorCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-transparent hover:border-l-mlomp-green animate-fade-in">
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

const DetailedSectorCard = ({ 
  icon, 
  title, 
  description, 
  items,
  bgColor = "bg-mlomp-green/10", 
  textColor = "text-mlomp-green" 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  items: string[];
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className={`${bgColor} p-3 rounded-full ${textColor} mr-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className={`h-5 w-5 ${textColor} mt-1 mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const InvestmentSection = () => {
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

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Investissements et Partenariats"
          subtitle="Découvrez les opportunités d'investissement et de partenariat dans la commune de Mlomp"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sectors.map((sector, index) => (
            <SectorCard key={index} {...sector} />
          ))}
        </div>

        <div className="mt-16">
          <SectionTitle 
            title="Activités Économiques" 
            subtitle="Les moteurs du développement économique local"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <DetailedSectorCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Agriculture"
              description="L'activité économique est dominée par l'agriculture. Deux types d'agricultures y sont pratiqués : l'agriculture pluviale dominée par les grandes cultures (le riz, l'arachide...) et celle irriguée (maraichage et arboriculture). Malgré ses nombreuses potentialités (disponibilité des terres, la pluviométrie abondante etc.), l'agriculture est confrontée à plusieurs contraintes, notamment sous-équipement des producteurs, dégradation des terres, déficit de main-d'œuvre, faible maitrise de l'eau, etc."
              items={[
                "Culture du riz et céréales",
                "Arboriculture fruitière",
                "Maraîchage"
              ]}
              bgColor="bg-mlomp-green/10"
              textColor="text-mlomp-green"
            />
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/4a9f6492-acaa-4c71-b682-18b687c6de52.png" 
                alt="Vallée rizicole à Mlomp" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-mlomp-green/5">
                <h4 className="text-lg font-semibold text-mlomp-green">Vallée rizicole à Mlomp</h4>
              </div>
            </div>

            <DetailedSectorCard
              icon={<ShoppingBag className="h-6 w-6" />}
              title="Commerce"
              description="Le secteur du commerce se manifeste principalement par la vente au niveau des boutiques (22 dont 20 à Mlomp) et des tables. Ces boutiques fournissent généralement des denrées de premières nécessités et des biens de consommation courante. Elles sont gérées par des commerçants venant d'autres régions. Il n'y a ni marché hebdomadaire encore moins de marché quotidien où d'espace aménagé pour le commerce malgré les énormes potentialités. L'écoulement des produits agricoles est assuré par les intermédiaires dénommés « banabanas »."
              items={[
                "Boutiques de proximité",
                "Commerce de denrées de première nécessité",
                "Potentiel de développement commercial important"
              ]}
              bgColor="bg-mlomp-blue/10"
              textColor="text-mlomp-blue"
            />
            
            <DetailedSectorCard
              icon={<Truck className="h-6 w-6" />}
              title="Transport"
              description="Le réseau de la Commune est constitué d'une route bitumée (la boucle du Blouf) et des pistes de productions. Les principaux moyens de transport utilisés sont les véhicules, les Jakartas et les tricycles. Du point de vue infrastructurel, la commune ne dispose pas de gare routière moderne."
              items={[
                "Route bitumée (boucle du Blouf)",
                "Pistes de production rurales",
                "Véhicules, Jakartas et tricycles comme moyens de transport"
              ]}
              bgColor="bg-mlomp-yellow/10"
              textColor="text-mlomp-yellow"
            />
            
            <DetailedSectorCard
              icon={<Handshake className="h-6 w-6" />}
              title="Élevage"
              description="L'élevage est une activité non négligeable dans la commune. Cette activité est pratiquée par les agro-pasteurs et est essentiellement traditionnel et extensif. Le cheptel se compose principalement de volailles (4500), suivi de bovins (400), de caprins (300), d'ovins (180), de porcins (25) et d'asins. Malgré son importance, ce sous-secteur souffre d'un manque d'infrastructures, constituées de quelques abreuvoirs et puits pastoraux."
              items={[
                "Élevage de volailles (4500 têtes)",
                "Élevage de bovins (400 têtes)",
                "Élevage de caprins, ovins et porcins"
              ]}
              bgColor="bg-mlomp-orange/10"
              textColor="text-mlomp-orange"
            />
            
            <DetailedSectorCard
              icon={<Radio className="h-6 w-6" />}
              title="Communication"
              description="L'infrastructure de communication téléphonique de la commune se résume à la seule présence d'une antenne Orange située dans le village de Mlomp. Cependant, la couverture téléphonique est limitée, notamment pour les services d'Expresso et de Free de même que l'accès à Internet. Il faut noter l'inexistence de radio communautaire dans la Commune."
              items={[
                "Couverture réseau Orange",
                "Couverture limitée pour Expresso et Free",
                "Accès internet limité"
              ]}
              bgColor="bg-mlomp-blue/10"
              textColor="text-mlomp-blue"
            />
            
            <DetailedSectorCard
              icon={<Zap className="h-6 w-6" />}
              title="Énergie"
              description="L'accès à l'électricité est un facteur catalyseur pour le développement d'activités génératrices de revenus et créatrices de richesses. Dans la commune de Mlomp, le niveau d'électrification est assez élevé car les deux grands villages sont électrifiés. Toutefois, des efforts d'extension restent à faire pour desservir l'ensemble des ménages. Par ailleurs, le bois de chauffe demeure de loin la source d'énergie la plus utilisée pour la cuisson."
              items={[
                "Électrification des principaux villages",
                "Potentiel de développement d'énergies renouvelables",
                "Besoin d'extension du réseau électrique"
              ]}
              bgColor="bg-mlomp-yellow/10"
              textColor="text-mlomp-yellow"
            />
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-mlomp-green/10 to-mlomp-yellow/10 p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pourquoi investir à Mlomp ?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mlomp-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cadre favorable aux investissements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mlomp-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ressources naturelles abondantes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mlomp-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Population jeune et dynamique</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-mlomp-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stabilité politique et soutien administratif</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/investissements" className="btn-primary">
                  Explorer les opportunités
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Contactez notre service de développement économique</h4>
              <p className="text-gray-600 mb-4">
                Notre équipe dédiée est prête à vous accompagner dans votre projet d'investissement
                et à répondre à toutes vos questions.
              </p>
              <div className="space-y-3">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
