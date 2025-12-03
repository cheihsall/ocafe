import React from "react";
import { 
  School, 
  Heart, 
  Bus, 
  Lightbulb, 
  Droplets, 
  ShieldCheck,
  Users,
  Briefcase,
  Trash2,
  FileText,
  Building,
  Wifi
} from "lucide-react";
import { Service } from "@/types/service";

export const servicesData: Record<string, Service> = {
  "education": {
    id: "education",
    title: "Services Éducatifs",
    description: "Accès à des établissements scolaires de qualité pour tous les enfants de la commune.",
    metaDescription: "Services éducatifs de la commune de Mlomp : écoles, collèges, enseignement de qualité et programmes pédagogiques innovants.",
    image: "/lovable-uploads/cf98cf94-2505-4baa-bac8-18f3188184d3.png",
    longDescription: [
      "La commune de Mlomp place l'éducation au cœur de ses priorités. Nous sommes fiers de proposer des établissements scolaires de qualité, des programmes pédagogiques innovants et des infrastructures adaptées pour assurer le meilleur apprentissage possible à tous les enfants de notre commune.",
      "Le secteur éducatif est constitué du préscolaire, de l'élémentaire et du moyen. Au sein de la commune nous notons sept (07) infrastructures éducatives réparties comme suit : deux (2) structures préscolaires, quatre (4) écoles élémentaires et un (1) collège d'enseignement moyen (CEM).",
      "Notre engagement pour l'éducation se traduit par des investissements constants dans l'amélioration des infrastructures scolaires, la formation des enseignants et la mise en place de programmes adaptés aux besoins spécifiques de notre jeunesse."
    ],
    features: [
      {
        title: "Établissements scolaires modernes",
        description: "Des écoles et collèges équipés pour offrir un environnement d'apprentissage optimal.",
        icon: <School className="h-5 w-5 text-mlomp-green" />
      },
      {
        title: "Programmes pédagogiques innovants",
        description: "Des approches éducatives adaptées aux besoins des élèves de la commune.",
        icon: <FileText className="h-5 w-5 text-mlomp-green" />
      },
      {
        title: "Soutien à la réussite scolaire",
        description: "Programmes d'accompagnement et de soutien pour favoriser la réussite de tous les élèves.",
        icon: <Users className="h-5 w-5 text-mlomp-green" />
      },
      {
        title: "Accessibilité pour tous",
        description: "Des mesures pour rendre l'éducation accessible à tous les enfants de la commune.",
        icon: <Building className="h-5 w-5 text-mlomp-green" />
      }
    ],
    statistics: [
      {
        value: "7",
        label: "Établissements scolaires"
      },
      {
        value: "1000+",
        label: "Élèves"
      },
      {
        value: "40+",
        label: "Enseignants"
      },
      {
        value: "85%",
        label: "Taux de réussite"
      }
    ],
    gallery: [
      {
        image: "/lovable-uploads/cf98cf94-2505-4baa-bac8-18f3188184d3.png",
        caption: "École élémentaire de Mlomp"
      },
      {
        image: "/lovable-uploads/51daae07-4880-44cc-8a6e-b02d0d055c81.png",
        caption: "Collège d'enseignement moyen de Mlomp"
      }
    ],
    contactInfo: {
      name: "Service Éducation de la Commune de Mlomp",
      phone: "(+221) 77 XXX XX XX",
      email: "education@mlomp.sn",
      address: "Mairie de Mlomp, Bignona, Sénégal",
      hours: "Lundi au Vendredi: 8h-16h"
    },
    steps: [
      {
        title: "Inscription scolaire",
        description: "Prendre rendez-vous auprès du service d'éducation de la mairie pour inscrire votre enfant."
      },
      {
        title: "Préparation du dossier",
        description: "Fournir les documents nécessaires : certificat de naissance, certificat de résidence, etc."
      },
      {
        title: "Affectation",
        description: "Votre enfant sera affecté à un établissement en fonction de votre lieu de résidence."
      },
      {
        title: "Rentrée scolaire",
        description: "Recevoir les informations sur la date de rentrée et les fournitures nécessaires."
      }
    ],
    documents: [
      "Extrait de naissance de l'enfant",
      "Certificat de résidence ou facture de domicile",
      "Certificat médical de moins de 3 mois",
      "Photos d'identité de l'enfant",
      "Livret de famille",
      "Carnet de vaccination à jour"
    ],
    faq: [
      {
        question: "Quand ont lieu les inscriptions scolaires ?",
        answer: "Les inscriptions scolaires ont généralement lieu entre juin et août pour la rentrée de septembre. Nous vous recommandons de contacter le service d'éducation dès le mois de mai pour connaître les dates précises."
      },
      {
        question: "Comment s'inscrire au collège de Mlomp ?",
        answer: "L'inscription au collège se fait après l'obtention du Certificat de Fin d'Études Élémentaires (CFEE). Les élèves sont ensuite orientés vers le collège en fonction de leurs résultats et de leur lieu de résidence."
      },
      {
        question: "Existe-t-il des programmes de soutien scolaire ?",
        answer: "Oui, la commune met en place des programmes de soutien scolaire pour les élèves en difficulté. Ces programmes sont organisés en partenariat avec les établissements scolaires et des associations locales."
      },
      {
        question: "Les écoles sont-elles gratuites ?",
        answer: "Oui, l'enseignement dans les écoles publiques est gratuit. Cependant, les familles doivent prévoir les fournitures scolaires et les tenues réglementaires."
      }
    ],
    location: "Mairie de Mlomp et établissements scolaires",
    hours: "Lundi au Vendredi: 8h-16h",
    contact: "education@mlomp.sn | (+221) 77 XXX XX XX",
    deadline: "Inscriptions scolaires: Juin-Août",
    price: "Gratuit (écoles publiques)",
    cta: {
      text: "Contacter le service éducation",
      url: "/contact?service=education"
    },
    relatedServices: [
      {
        id: "social",
        title: "Services Sociaux",
        description: "Assistance sociale pour les personnes vulnérables et programmes d'entraide communautaire.",
        image: "/lovable-uploads/4a9f6492-acaa-4c71-b682-18b687c6de52.png"
      },
      {
        id: "sante",
        title: "Santé",
        description: "Services médicaux et programmes de santé adaptés aux besoins de la population.",
        image: "/lovable-uploads/c2a1f090-b074-4dae-9d11-22c391d48e52.png"
      },
      {
        id: "numerique",
        title: "Numérique",
        description: "Accès aux outils numériques et formation pour réduire la fracture digitale.",
        image: "/lovable-uploads/c7aeadba-106f-4b10-a7ea-606af871cd80.png"
      }
    ],
    seo: {
      keywords: ["éducation Mlomp", "écoles Mlomp", "établissements scolaires Casamance", "éducation Sénégal", "collège Mlomp", "inscription scolaire"],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "GovernmentService",
        "name": "Services Éducatifs de Mlomp",
        "description": "Services éducatifs et établissements scolaires de la commune de Mlomp au Sénégal.",
        "provider": {
          "@type": "GovernmentOrganization",
          "name": "Commune de Mlomp",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mlomp",
            "addressRegion": "Bignona",
            "addressCountry": "SN"
          }
        },
        "audience": {
          "@type": "PeopleAudience",
          "name": "Familles avec enfants scolarisés"
        },
        "serviceType": "Éducation et enseignement"
      }
    }
  },
  sante: {
    id: "sante",
    title: "Services de Santé",
    description: "Services médicaux et programmes de santé adaptés aux besoins de la population.",
    metaDescription: "Les services de santé de la commune de Mlomp offrent des soins de qualité, des programmes de prévention et des infrastructures médicales accessibles à tous.",
    image: "/lovable-uploads/f7b45c57-fb5d-49cc-86a2-5f2c170b5e07.png",
    longDescription: [
      "La santé des habitants est une priorité absolue pour la commune de Mlomp. Nous nous efforçons de fournir des soins médicaux de qualité et accessibles à tous les résidents, grâce à un réseau de centres de santé et de postes de santé répartis stratégiquement sur notre territoire.",
      "Nos services de santé comprennent des soins primaires, des consultations spécialisées, des programmes de vaccination, ainsi que des initiatives de prévention et de sensibilisation. Nous avons également mis en place des programmes spécifiques pour la santé maternelle et infantile, la lutte contre le paludisme et d'autres maladies endémiques.",
      "Notre équipe médicale, composée de médecins, d'infirmiers et d'agents de santé communautaire dévoués, travaille sans relâche pour améliorer la santé et le bien-être de notre population. Nous collaborons également avec des partenaires nationaux et internationaux pour renforcer nos capacités et améliorer la qualité de nos services."
    ],
    features: [
      {
        title: "Centre de santé",
        description: "Soins médicaux généraux et spécialisés",
        icon: <Heart className="h-5 w-5" />
      },
      {
        title: "Postes de santé",
        description: "Soins de proximité dans les villages",
        icon: <Heart className="h-5 w-5" />
      },
      {
        title: "Maternité",
        description: "Suivi de grossesse et accouchements",
        icon: <Heart className="h-5 w-5" />
      },
      {
        title: "Pharmacie",
        description: "Accès aux médicaments essentiels",
        icon: <Heart className="h-5 w-5" />
      },
      {
        title: "Campagnes de prévention",
        description: "Sensibilisation et dépistage régulier",
        icon: <Heart className="h-5 w-5" />
      }
    ],
    statistics: [
      { value: "1", label: "Centre de santé" },
      { value: "5", label: "Postes de santé" },
      { value: "15", label: "Agents de santé" },
      { value: "24h/24", label: "Disponibilité" }
    ],
    gallery: [
      {
        image: "/lovable-uploads/51daae07-4880-44cc-8a6e-b02d0d055c81.png",
        caption: "Centre de santé de Mlomp"
      },
      {
        image: "/lovable-uploads/ba162101-b545-449e-8088-8791d9b9adf1.png",
        caption: "Campagne de vaccination"
      },
      {
        image: "/lovable-uploads/29d63417-830f-4b0e-a9c1-00fbcdee5b9a.png",
        caption: "Consultation médicale"
      },
      {
        image: "/lovable-uploads/f7b45c57-fb5d-49cc-86a2-5f2c170b5e07.png",
        caption: "Sensibilisation sanitaire"
      }
    ],
    contactInfo: {
      name: "Service Santé",
      phone: "(+221) 77 XXX XX XX",
      email: "sante@mlomp.sn",
      address: "Centre de santé de Mlomp, Département de Bignona",
      hours: "Urgences: 24h/24, 7j/7 | Consultations: 8h-17h"
    }
  },
  transport: {
    id: "transport",
    title: "Services de Transport",
    description: "Solutions de mobilité pour faciliter les déplacements dans et autour de la commune.",
    metaDescription: "Découvrez les services de transport de la commune de Mlomp: transports en commun, entretien des routes et initiatives pour améliorer la mobilité des habitants.",
    image: "/lovable-uploads/29d63417-830f-4b0e-a9c1-00fbcdee5b9a.png",
    longDescription: [
      "La mobilité est essentielle au développement économique et social de notre commune. À Mlomp, nous avons mis en place diverses solutions de transport pour faciliter les déplacements des habitants, que ce soit pour se rendre au travail, à l'école, au marché ou aux centres de santé.",
      "Notre réseau de transport comprend des services de transport en commun, des taxis communautaires et des initiatives de covoiturage. Nous accordons également une grande importance à l'entretien des routes et des pistes, afin d'assurer des déplacements sûrs et confortables, même pendant la saison des pluies.",
      "Nous travaillons constamment à améliorer nos infrastructures de transport, à désenclaver les villages isolés et à faciliter les échanges commerciaux entre notre commune et les localités voisines. Notre objectif est de garantir une mobilité durable et accessible à tous les habitants de Mlomp."
    ],
    features: [
      {
        title: "Transport en commun",
        description: "Liaisons régulières entre les villages",
        icon: <Bus className="h-5 w-5" />
      },
      {
        title: "Entretien des routes",
        description: "Maintenance régulière du réseau routier",
        icon: <Bus className="h-5 w-5" />
      },
      {
        title: "Transport scolaire",
        description: "Service dédié aux élèves",
        icon: <Bus className="h-5 w-5" />
      },
      {
        title: "Taxis collectifs",
        description: "Desservent les zones reculées",
        icon: <Bus className="h-5 w-5" />
      }
    ],
    statistics: [
      { value: "120km", label: "Routes entretenues" },
      { value: "15", label: "Véhicules de transport" },
      { value: "8", label: "Lignes de transport" },
      { value: "90%", label: "Villages desservis" }
    ],
    gallery: [
      {
        image: "/lovable-uploads/29d63417-830f-4b0e-a9c1-00fbcdee5b9a.png",
        caption: "Transport collectif à Mlomp"
      },
      {
        image: "/lovable-uploads/f7b45c57-fb5d-49cc-86a2-5f2c170b5e07.png",
        caption: "Entretien des routes communales"
      },
      {
        image: "/lovable-uploads/51daae07-4880-44cc-8a6e-b02d0d055c81.png",
        caption: "Transport scolaire"
      }
    ],
    contactInfo: {
      name: "Service Transport",
      phone: "(+221) 77 XXX XX XX",
      email: "transport@mlomp.sn",
      address: "Mairie de Mlomp, Département de Bignona",
      hours: "Lundi au Vendredi: 8h-16h"
    }
  },
  energie: {
    id: "energie",
    title: "Services d'Énergie",
    description: "Initiatives pour un accès durable à l'électricité et aux énergies renouvelables.",
    metaDescription: "La commune de Mlomp s'engage pour l'accès à l'énergie durable: électrification, énergies renouvelables et initiatives écologiques pour tous les habitants.",
    image: "/lovable-uploads/ba162101-b545-449e-8088-8791d9b9adf1.png",
    longDescription: [
      "L'accès à l'énergie est un facteur clé de développement pour notre commune. À Mlomp, nous nous engageons à fournir à tous nos habitants un accès fiable et durable à l'électricité, tout en promouvant les énergies renouvelables et en réduisant notre empreinte environnementale.",
      "Notre programme d'électrification rurale a permis de connecter de nombreux villages au réseau électrique national. En parallèle, nous développons des solutions d'énergie solaire pour les zones plus isolées, permettant ainsi d'alimenter les foyers, les écoles, les centres de santé et les petites entreprises.",
      "Nous encourageons également les initiatives d'efficacité énergétique et l'utilisation de technologies propres, comme les foyers améliorés pour la cuisine, qui réduisent la consommation de bois et les émissions nocives. Notre vision est celle d'une commune énergétiquement autonome et respectueuse de l'environnement."
    ],
    features: [
      {
        title: "Électrification rurale",
        description: "Extension du réseau électrique",
        icon: <Lightbulb className="h-5 w-5" />
      },
      {
        title: "Énergie solaire",
        description: "Installations photovoltaïques communautaires",
        icon: <Lightbulb className="h-5 w-5" />
      },
      {
        title: "Éclairage public",
        description: "Lampadaires solaires dans les villages",
        icon: <Lightbulb className="h-5 w-5" />
      },
      {
        title: "Foyers améliorés",
        description: "Réduction de la consommation de bois",
        icon: <Lightbulb className="h-5 w-5" />
      }
    ],
    statistics: [
      { value: "75%", label: "Taux d'électrification" },
      { value: "20", label: "Installations solaires" },
      { value: "150", label: "Lampadaires solaires" },
      { value: "500", label: "Foyers améliorés distribués" }
    ],
    gallery: [
      {
        image: "/lovable-uploads/ba162101-b545-449e-8088-8791d9b9adf1.png",
        caption: "Panneaux solaires communautaires"
      },
      {
        image: "/lovable-uploads/f7b45c57-fb5d-49cc-86a2-5f2c170b5e07.png",
        caption: "Électrification d'un village"
      },
      {
        image: "/lovable-uploads/51daae07-4880-44cc-8a6e-b02d0d055c81.png",
        caption: "Lampadaires solaires"
      }
    ],
    contactInfo: {
      name: "Service Énergie",
      phone: "(+221) 77 XXX XX XX",
      email: "energie@mlomp.sn",
      address: "Mairie de Mlomp, Département de Bignona",
      hours: "Lundi au Vendredi: 8h-16h"
    }
  },
  eau: {
    id: "eau",
    title: "Services d'Eau Potable",
    description: "Infrastructures pour garantir l'accès à l'eau potable à tous les habitants.",
    metaDescription: "Les services d'eau potable de Mlomp assurent l'accès à une eau de qualité pour tous les habitants grâce à des infrastructures modernes et durables.",
    image: "/lovable-uploads/51daae07-4880-44cc-8a6e-b02d0d055c81.png",
    longDescription: [
      "L'accès à l'eau potable est un droit fondamental et une priorité pour la commune de Mlomp. Nous œuvrons sans relâche pour garantir à tous nos habitants un approvisionnement en eau de qualité, sûre et accessible.",
      "Notre réseau de distribution d'eau comprend des forages équipés de pompes, des châteaux d'eau et des bornes-fontaines réparties stratégiquement dans les différents villages. Nous veillons à l'entretien régulier de ces infrastructures et au contrôle de la qualité de l'eau distribuée.",
      "En plus de l'approvisionnement en eau, nous menons des campagnes de sensibilisation sur l'importance de l'hygiène, de l'assainissement et de la préservation de cette ressource précieuse. Notre objectif est de garantir un accès durable à l'eau potable, tout en préservant les ressources hydriques locales pour les générations futures."
    ],
    features: [
      {
        title: "Forages et pompes",
        description: "Points d'eau dans chaque village",
        icon: <Droplets className="h-5 w-5" />
      },
      {
        title: "Châteaux d'eau",
        description: "Stockage et distribution",
        icon: <Droplets className="h-5 w-5" />
      },
      {
        title: "Bornes-fontaines",
        description: "Points d'eau communautaires",
        icon: <Droplets className="h-5 w-5" />
      },
      {
        title: "Contrôle qualité",
        description: "Analyses régulières de l'eau",
        icon: <Droplets className="h-5 w-5" />
      }
    ],
    statistics: [
      { value: "25", label: "Forages fonctionnels" },
      { value: "5", label: "Châteaux d'eau" },
      { value: "85%", label: "Population desservie" },
      { value: "100%", label: "Taux de conformité de l'eau" }
    ],
    gallery: [
      {
        image: "/lovable-uploads/29d63417-830f-4b0e-a9c1-00fbcdee5b9a.png",
        caption: "Château d'eau de Mlomp"
      },
      {
        image: "/lovable-uploads/51daae07-4880-44cc-8a6e-b02d0d055c81.png",
        caption: "Borne-fontaine communautaire"
      },
      {
        image: "/lovable-uploads/f7b45c57-fb5d-49cc-86a2-5f2c170b5e07.png",
        caption: "Installation d'une pompe à eau"
      }
    ],
    contactInfo: {
      name: "Service Eau et Assainissement",
      phone: "(+221) 77 XXX XX XX",
      email: "eau@mlomp.sn",
      address: "Mairie de Mlomp, Département de Bignona",
      hours: "Lundi au Vendredi: 8h-16h"
    }
  },
  securite: {
    id: "securite",
    title: "Services de Sécurité",
    description: "Mesures pour assurer la sécurité et le bien-être de tous les citoyens.",
    metaDescription: "La commune de Mlomp assure la sécurité de ses habitants grâce à des services de protection civile, de surveillance et de prévention des risques.",
    image: "/lovable-uploads/ba162101-b545-449e-8088-8791d9b9adf1.png",
    longDescription: [
      "La sécurité des habitants est une condition essentielle à la qualité de vie et au développement harmonieux de notre commune. À Mlomp, nous mettons en œuvre diverses mesures pour garantir la tranquillité, la sûreté et le bien-être de tous nos citoyens.",
      "Notre approche de la sécurité repose sur la prévention, la vigilance communautaire et la collaboration étroite avec les forces de l'ordre nationales. Nous avons mis en place un système de surveillance de quartier, des patrouilles régulières et des points de contrôle stratégiques pour prévenir les actes de délinquance et assurer une intervention rapide en cas de besoin.",
      "Au-delà de la sécurité des personnes et des biens, nous nous préoccupons également de la prévention des risques naturels, tels que les inondations et les feux de brousse, qui peuvent affecter notre commune. Des équipes de protection civile sont formées et équipées pour intervenir en cas d'urgence et des campagnes de sensibilisation sont régulièrement organisées pour informer la population sur les comportements à adopter face à ces risques."
    ],
    features: [
      {
        title: "Police municipale",
        description: "Présence et patrouilles régulières",
        icon: <ShieldCheck className="h-5 w-5" />
      },
      {
        title: "Surveillance communautaire",
        description: "Implication des habitants",
        icon: <ShieldCheck className="h-5 w-5" />
      },
      {
        title: "Protection civile",
        description: "Équipes formées aux interventions d'urgence",
        icon: <ShieldCheck className="h-5 w-5" />
      },
      {
        title: "Prévention des risques",
        description: "Sensibilisation et formation",
        icon: <ShieldCheck className="h-5 w-5" />
      }
    ],
    statistics: [
      { value: "15", label: "Agents de sécurité" },
      { value: "24h/24", label: "Surveillance" },
      { value: "10", label: "Comités villageois" },
      { value: "98%", label: "Satisfaction des habitants" }
    ],
    gallery: [
      {
        image: "/lovable-uploads/ba162101-b545-449e-8088-8791d9b9adf1.png",
        caption: "Équipe de protection civile"
      },
      {
        image: "/lovable-uploads/f7b45c57-fb5d-49cc-86a2-5f2c170b5e07.png",
        caption: "Sensibilisation sur la sécurité"
      },
      {
        image: "/lovable-uploads/51daae07-4880-44cc-8a6e-b02d0d055c81.png",
        caption: "Patrouille de surveillance"
      }
    ],
    contactInfo: {
      name: "Service Sécurité",
      phone: "(+221) 77 XXX XX XX",
      email: "securite@mlomp.sn",
      address: "Mairie de Mlomp, Département de Bignona",
      hours: "Urgences: 24h/24, 7j/7 | Bureau: 8h-18h"
    }
  }
};
