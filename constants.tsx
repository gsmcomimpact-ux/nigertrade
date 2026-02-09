
import React from 'react';
import { 
  Briefcase, 
  Handshake, 
  Globe, 
  ShieldCheck, 
  Building2, 
  Anchor, 
  Wheat, 
  HardHat, 
  Zap,
  BookOpen,
  FileText
} from 'lucide-react';
import { ServiceItem, SectorItem } from './types';

export const COMPANY_INFO = {
  name: "NIGER TRADE",
  location: "Niamey – Niger",
  address: "Quartier Plateau, Niamey",
  phone: "+227 91 17 96 75",
  whatsapp: "+22791179675",
  email: "contact@nigertrade.com",
};

export const TRANSLATIONS = {
  fr: {
    hero: {
      badge: "Votre Passerelle vers le Marché Nigérien",
      title: "Accélérez vos Affaires au ",
      titleSuffix: "Niger",
      desc: "NIGER TRADE facilite vos investissements et partenariats stratégiques. Nous transformons les complexités administratives en opportunités de croissance durable.",
      btnServices: "Nos Services",
      btnMore: "En savoir plus",
      check1: "Expertise B2B & B2C",
      check2: "Siège à Niamey",
      check3: "Accès International",
      statLabel: "Fiabilité & Transparence"
    },
    about: {
      badge: "À Propos de Niger Trade",
      title: "Votre Partenaire pour ",
      titleSuffix: "Réussir au Niger",
      p1: "Basée à Niamey, NIGER TRADE est l'interface privilégiée entre les investisseurs et les opportunités locales. Le Niger est un pays aux ressources immenses, mais naviguer dans son paysage commercial nécessite une expertise locale pointue.",
      p2: "Notre mission est simple : sécuriser vos investissements, faciliter vos démarches et catalyser vos partenariats stratégiques.",
      val1: "Intégrité",
      val1Desc: "Nous agissons avec transparence et éthique dans toutes nos transactions.",
      val2: "Excellence",
      val2Desc: "Un accompagnement de haut niveau pour des résultats concrets et mesurables.",
      val3: "Réseautage",
      val3Desc: "Expertise en mise en relation stratégique pour les marchés B2B et B2C au Niger."
    },
    services: {
      badge: "Nos Services",
      title: "Expertise & Valeur Ajoutée",
      desc: "Nous proposons une gamme complète de solutions stratégiques pour sécuriser vos opérations et maximiser vos chances de succès au Niger.",
      btnDiscover: "Découvrir",
      modalPerform: "Ce que nous réalisons",
      modalBenefit: "Bénéfice Stratégique",
      btnRequest: "Demander ce service",
      btnClose: "Fermer",
      ctaTitle: "Prêt à investir au Niger ?",
      ctaDesc: "Notre équipe est à votre disposition pour une analyse approfondie de votre projet et une proposition d'accompagnement personnalisée.",
      ctaBtn1: "Consulter un expert",
      ctaBtn2: "Demander un devis"
    },
    sectors: {
      badge: "Secteurs Stratégiques",
      title: "Opportunités de Croissance",
      desc: "Le Niger regorge de secteurs à fort potentiel. NIGER TRADE vous aide à naviguer dans ces écosystèmes en pleine expansion.",
      labelHighlights: "Opportunités Stratégiques",
      btnAll: "Voir toutes les opportunités"
    },
    contact: {
      badge: "Contact",
      title: "Nos Coordonnées Directes",
      desc: "Nous sommes à votre disposition pour faciliter vos projets au Niger. Contactez-nous directement par téléphone, WhatsApp ou email.",
      labelPhone: "Téléphone & WhatsApp",
      labelLoc: "Siège Social",
      labelEmail: "Email Professionnel",
      labelHours: "Horaires de Bureau",
      btnChat: "Discuter sur WhatsApp",
      opt1: "Facilitation d'Affaires",
      opt2: "Représentation Commerciale",
      opt3: "Commerce Général / Import-Export",
      opt4: "Autre",
      monFri: "Lundi - Vendredi",
      sat: "Samedi",
      sun: "Dimanche",
      closed: "Fermé"
    },
    footer: {
      desc: "Votre partenaire de confiance pour faciliter le commerce et les investissements stratégiques à Niamey et partout au Niger.",
      nav: "Navigation",
      info: "Contact",
      rights: "Tous droits réservés."
    },
    // Added info translation to resolve error in InformationCenter.tsx
    info: {
      faqBadge: "Questions Fréquentes",
      faqTitle: "Tout savoir sur le marché",
      resBadge: "Ressources & Guides",
      resTitle: "Documentation Stratégique",
      resBtn: "Accéder au document",
      statsLabel: "Niger Business Index",
      statsQuote: "Une croissance projetée de +10% en 2024"
    }
  },
  en: {
    hero: {
      badge: "Your Gateway to the Nigerien Market",
      title: "Accelerate your Business in ",
      titleSuffix: "Niger",
      desc: "NIGER TRADE facilitates your investments and strategic partnerships. We turn administrative complexities into sustainable growth opportunities.",
      btnServices: "Our Services",
      btnMore: "Learn More",
      check1: "B2B & B2C Expertise",
      check2: "Headquarters in Niamey",
      check3: "International Access",
      statLabel: "Reliability & Transparency"
    },
    about: {
      badge: "About Niger Trade",
      title: "Your Partner to ",
      titleSuffix: "Succeed in Niger",
      p1: "Based in Niamey, NIGER TRADE is the preferred interface between investors and local opportunities. Niger is a country with immense resources, but navigating its business landscape requires sharp local expertise.",
      p2: "Our mission is simple: secure your investments, facilitate your procedures, and catalyze your strategic partnerships.",
      val1: "Integrity",
      val1Desc: "We act with transparency and ethics in all our transactions.",
      val2: "Excellence",
      val2Desc: "High-level support for concrete and measurable results.",
      val3: "Networking",
      val3Desc: "Strategic networking expertise for B2B and B2C markets in Niger."
    },
    services: {
      badge: "Our Services",
      title: "Expertise & Added Value",
      desc: "We offer a full range of strategic solutions to secure your operations and maximize your chances of success in Niger.",
      btnDiscover: "Discover",
      modalPerform: "What we deliver",
      modalBenefit: "Strategic Benefit",
      btnRequest: "Request this service",
      btnClose: "Close",
      ctaTitle: "Ready to invest in Niger?",
      ctaDesc: "Our team is at your disposal for an in-depth analysis of your project and a personalized support proposal.",
      ctaBtn1: "Consult an expert",
      ctaBtn2: "Request a quote"
    },
    sectors: {
      badge: "Strategic Sectors",
      title: "Growth Opportunities",
      desc: "Niger is full of high-potential sectors. NIGER TRADE helps you navigate these rapidly expanding ecosystems.",
      labelHighlights: "Strategic Opportunities",
      btnAll: "View all opportunities"
    },
    contact: {
      badge: "Contact",
      title: "Direct Contact Information",
      desc: "We are available to facilitate your projects in Niger. Contact us directly via phone, WhatsApp, or email.",
      labelPhone: "Phone & WhatsApp",
      labelLoc: "Headquarters",
      labelEmail: "Professional Email",
      labelHours: "Office Hours",
      btnChat: "Chat on WhatsApp",
      opt1: "Business Facilitation",
      opt2: "Commercial Representation",
      opt3: "General Trade / Import-Export",
      opt4: "Other",
      monFri: "Monday - Friday",
      sat: "Saturday",
      sun: "Sunday",
      closed: "Closed"
    },
    footer: {
      desc: "Your trusted partner to facilitate trade and strategic investments in Niamey and across Niger.",
      nav: "Navigation",
      info: "Contact",
      rights: "All rights reserved."
    },
    // Added info translation to resolve error in InformationCenter.tsx
    info: {
      faqBadge: "Frequently Asked Questions",
      faqTitle: "Everything about the market",
      resBadge: "Resources & Guides",
      resTitle: "Strategic Documentation",
      resBtn: "Access document",
      statsLabel: "Niger Business Index",
      statsQuote: "Projected growth of +10% in 2024"
    }
  }
};

export const SERVICES_DATA = {
  fr: [
    {
      id: "rep-com",
      title: "Représentation Commerciale",
      description: "Nous agissons en tant que votre bras droit local pour introduire et développer vos produits ou services.",
      icon: <Handshake className="w-8 h-8 text-niger-blue" />,
      details: ["Prospection active", "Gestion de force de vente", "Veille concurrentielle", "Organisation showrooms", "Suivi CRM"],
      benefits: "Réduisez vos coûts fixes tout en bénéficiant d'une présence commerciale immédiate."
    },
    {
      id: "bus-fac",
      title: "Facilitation d'Affaires",
      description: "Accélérez vos projets grâce à notre réseau étendu et notre connaissance du cadre légal.",
      icon: <Briefcase className="w-8 h-8 text-niger-green" />,
      details: ["Mise en relation B2B/B2C", "Soutien Appels d'offres", "Négociation contractuelle", "Missions d'affaires", "Lobbying"],
      benefits: "Gagnez un temps précieux en accédant directement aux bons interlocuteurs."
    },
    {
      id: "adm-strat",
      title: "Accompagnement Stratégique",
      description: "De l'immatriculation d'entreprise aux études de marché, nous vous accompagnons partout.",
      icon: <ShieldCheck className="w-8 h-8 text-niger-blue" />,
      details: ["Création d'entreprise", "Conseils fiscaux", "Business plans", "Recrutement local", "Audit conformité"],
      benefits: "Sécurisez vos investissements grâce à une expertise ancrée localement."
    },
    {
      id: "com-gen",
      title: "Commerce Général",
      description: "Expertise en import-export, approvisionnement et logistique pour vos flux.",
      icon: <Globe className="w-8 h-8 text-niger-green" />,
      details: ["Sourcing produits", "Supply Chain", "Procédures douanières", "Entreposage", "Contrôle qualité"],
      benefits: "Optimisez vos marges et délais grâce à une maîtrise complète des flux."
    }
  ],
  en: [
    {
      id: "rep-com",
      title: "Commercial Representation",
      description: "We act as your local right hand to introduce and develop your products or services.",
      icon: <Handshake className="w-8 h-8 text-niger-blue" />,
      details: ["Active prospecting", "Sales force management", "Competitive intelligence", "Showroom organization", "CRM tracking"],
      benefits: "Reduce your fixed costs while benefiting from an immediate commercial presence."
    },
    {
      id: "bus-fac",
      title: "Business Facilitation",
      description: "Accelerate your projects thanks to our extensive network and legal framework knowledge.",
      icon: <Briefcase className="w-8 h-8 text-niger-green" />,
      details: ["B2B/B2C networking", "Tender support", "Contract negotiation", "Business missions", "Lobbying"],
      benefits: "Save precious time by directly accessing the right contacts."
    },
    {
      id: "adm-strat",
      title: "Strategic Support",
      description: "From company registration to market research, we accompany you everywhere.",
      icon: <ShieldCheck className="w-8 h-8 text-niger-blue" />,
      details: ["Company creation", "Tax advice", "Business plans", "Local recruitment", "Compliance audit"],
      benefits: "Secure your investments thanks to locally anchored expertise."
    },
    {
      id: "com-gen",
      title: "General Trade",
      description: "Export-import expertise, sourcing, and logistics for your commercial flows.",
      icon: <Globe className="w-8 h-8 text-niger-green" />,
      details: ["Product sourcing", "Supply Chain", "Customs procedures", "Warehousing", "Quality control"],
      benefits: "Optimize your margins and lead times through complete flow management."
    }
  ]
};

export const SECTORS_DATA = {
  fr: [
    { 
      id: "mines", 
      name: "Mines & Énergie", 
      icon: <HardHat className="w-8 h-8" />, 
      description: "Le Niger est un acteur mondial majeur de l'uranium et possède d'importantes réserves d'or et de pétrole. Le nouveau pipeline Niger-Bénin ouvre des perspectives d'exportation sans précédent.",
      highlights: ["Uranium (4ème producteur mondial)", "Nouveau pipeline pétrolier export", "Potentiel Solaire immense", "Code Pétrolier attractif"]
    },
    { 
      id: "agri", 
      name: "Agrobusiness", 
      icon: <Wheat className="w-8 h-8" />, 
      description: "Premier exportateur d'oignons en Afrique de l'Ouest, le Niger offre des opportunités massives dans la transformation agro-industrielle et l'irrigation moderne.",
      highlights: ["Filière Oignon & Niébé", "Élevage (Cuir & Peaux)", "Transformation locale", "Aménagements hydro-agricoles"]
    },
    { 
      id: "infra", 
      name: "Infrastructures & BTP", 
      icon: <Building2 className="w-8 h-8" />, 
      description: "L'urbanisation galopante et les projets de modernisation (Niamey Nyala) créent une demande constante en logements, routes et infrastructures énergétiques.",
      highlights: ["Logements sociaux", "Infrastructures routières", "Partenariats Public-Privé (PPP)", "Électrification rurale"]
    },
    { 
      id: "log", 
      name: "Logistique & Transit", 
      icon: <Anchor className="w-8 h-8" />, 
      description: "En tant que carrefour entre le Maghreb et l'Afrique subsaharienne, le Niger est un hub stratégique pour le transit de marchandises vers les pays enclavés.",
      highlights: ["Ports secs (Dosso/Gaya)", "Zones de Libre-Échange (ZLECAf)", "Transport de fret international", "Entreposage pétrolier"]
    },
    { 
      id: "tech", 
      name: "Technologies & Digital", 
      icon: <Zap className="w-8 h-8" />, 
      description: "La digitalisation de l'administration et l'essor de la Fintech ouvrent de nouveaux marchés pour les solutions de paiement et les services numériques.",
      highlights: ["Mobile Money & Fintech", "Digitalisation administrative", "Startups technologiques", "Déploiement fibre optique"]
    }
  ],
  en: [
    { 
      id: "mines", 
      name: "Mining & Energy", 
      icon: <HardHat className="w-8 h-8" />, 
      description: "Niger is a major global uranium player and possesses significant gold and oil reserves. The new Niger-Benin pipeline opens unprecedented export prospects.",
      highlights: ["Uranium (4th global producer)", "New oil export pipeline", "Immense solar potential", "Attractive Petroleum Code"]
    },
    { 
      id: "agri", 
      name: "Agrobusiness", 
      icon: <Wheat className="w-8 h-8" />, 
      description: "Leading onion exporter in West Africa, Niger offers massive opportunities in agro-industrial processing and modern irrigation.",
      highlights: ["Onion & Cowpea value chain", "Livestock (Leather & Skins)", "Local processing", "Hydro-agricultural projects"]
    },
    { 
      id: "infra", 
      name: "Infrastructure & BTP", 
      icon: <Building2 className="w-8 h-8" />, 
      description: "Rapid urbanization and modernization projects (Niamey Nyala) create constant demand for housing, roads, and energy infrastructure.",
      highlights: ["Social housing", "Road infrastructure", "Public-Private Partnerships (PPP)", "Rural electrification"]
    },
    { 
      id: "log", 
      name: "Logistics & Transit", 
      icon: <Anchor className="w-8 h-8" />, 
      description: "As a crossroads between the Maghreb and Sub-Saharan Africa, Niger is a strategic hub for goods transit to landlocked countries.",
      highlights: ["Dry ports (Dosso/Gaya)", "Free Trade Zones (AfCFTA)", "International freight", "Oil storage"]
    },
    { 
      id: "tech", 
      name: "Tech & Digital", 
      icon: <Zap className="w-8 h-8" />, 
      description: "Government digitalization and the rise of Fintech open new markets for payment solutions and digital services.",
      highlights: ["Mobile Money & Fintech", "Administrative digitalization", "Tech startups", "Fiber optic deployment"]
    }
  ]
};

// Added FAQ_DATA to resolve error in InformationCenter.tsx
export const FAQ_DATA = {
  fr: [
    {
      question: "Quelles sont les formalités pour créer une entreprise au Niger ?",
      answer: "Les formalités incluent l'immatriculation au Registre du Commerce (RCCM), l'obtention d'un NIF et l'inscription à la Chambre de Commerce. NIGER TRADE vous accompagne de bout en bout."
    },
    {
      question: "Quels sont les avantages du Code des Investissements ?",
      answer: "Le code offre des exonérations fiscales et douanières importantes (jusqu'à 15 ans selon la zone) et garantit le libre transfert des capitaux."
    },
    {
      question: "Peut-on rapatrier ses bénéfices ?",
      answer: "Oui, la législation nigérienne garantit le libre transfert des dividendes et capitaux pour les investisseurs étrangers."
    }
  ],
  en: [
    {
      question: "What are the formalities to start a business in Niger?",
      answer: "Formalities include registration in the Trade Register (RCCM), obtaining a NIF, and registering with the Chamber of Commerce. NIGER TRADE assists you from start to finish."
    },
    {
      question: "What are the benefits of the Investment Code?",
      answer: "The code offers significant tax and customs exemptions (up to 15 years depending on the area) and guarantees the free transfer of capital."
    },
    {
      question: "Can profits be repatriated?",
      answer: "Yes, Nigerien legislation guarantees the free transfer of dividends and capital for foreign investors."
    }
  ]
};

// Added RESOURCE_CARDS to resolve error in InformationCenter.tsx
export const RESOURCE_CARDS = {
  fr: [
    {
      title: "Guide de l'Investisseur",
      desc: "Analyse complète du cadre juridique et des opportunités.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Code des Investissements",
      desc: "Le document officiel sur les incitations fiscales.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Indicateurs Macro",
      desc: "Dernières données économiques sur le Niger.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Secteur Minier",
      desc: "Focus sur l'uranium, l'or et le pétrole.",
      icon: <HardHat className="w-6 h-6" />,
      color: "bg-yellow-500/10 text-yellow-600"
    }
  ],
  en: [
    {
      title: "Investor Guide",
      desc: "Complete analysis of the legal framework and opportunities.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Investment Code",
      desc: "The official document on tax incentives.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Macro Indicators",
      desc: "Latest economic data on Niger.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Mining Sector",
      desc: "Focus on uranium, gold, and oil.",
      icon: <HardHat className="w-6 h-6" />,
      color: "bg-yellow-500/10 text-yellow-600"
    }
  ]
};
