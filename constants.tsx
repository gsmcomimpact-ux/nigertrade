
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
  FileText,
  Map,
  Scale,
  PieChart
} from 'lucide-react';
import { ServiceItem, SectorItem } from './types';

export const COMPANY_INFO = {
  name: "NIGER TRADE",
  location: "Niamey – Niger",
  phone: "+227 91 17 96 75",
  whatsapp: "+22791179675",
  email: "nigertradeproton.me@proton.me",
};

export const FAQ_DATA = {
  fr: [
    {
      question: "Pourquoi investir au Niger maintenant ?",
      answer: "Le Niger connaît une transformation économique majeure avec l'ouverture de nouveaux corridors pétroliers, une stabilité politique croissante et des réformes audacieuses du climat des affaires (Code des Investissements attractif)."
    },
    {
      question: "Quels sont les services prioritaires de Niger Trade ?",
      answer: "Nous excellons dans la facilitation B2G (Business-to-Government), la représentation commerciale locale et l'accompagnement juridique et fiscal pour l'implantation d'entreprises étrangères."
    },
    {
      question: "Comment Niger Trade assure-t-il la sécurité des transactions ?",
      answer: "Nous opérons avec une transparence totale, en conformité avec les normes OHADA et les régulations locales, tout en effectuant des audits de conformité rigoureux pour chaque projet."
    }
  ],
  en: [
    {
      question: "Why invest in Niger now?",
      answer: "Niger is undergoing a major economic transformation with the opening of new oil corridors, growing political stability, and bold business climate reforms (attractive Investment Code)."
    },
    {
      question: "What are Niger Trade's priority services?",
      answer: "We excel in B2G (Business-to-Government) facilitation, local commercial representation, and legal/tax support for setting up foreign companies."
    },
    {
      question: "How does Niger Trade ensure transaction security?",
      answer: "We operate with full transparency, in compliance with OHADA standards and local regulations, while conducting rigorous compliance audits for each project."
    }
  ]
};

export const RESOURCE_CARDS = {
  fr: [
    { 
      title: "Guide de l'Investisseur", 
      desc: "Tout savoir sur les régimes fiscaux et avantages douaniers.", 
      icon: <FileText className="w-6 h-6" />, 
      color: "bg-blue-50 text-blue-600" 
    },
    { 
      title: "Carte des Ressources", 
      desc: "Localisation stratégique des gisements miniers et zones agricoles.", 
      icon: <Map className="w-6 h-6" />, 
      color: "bg-green-50 text-green-600" 
    },
    { 
      title: "Code des Investissements", 
      desc: "Le cadre légal complet pour sécuriser vos actifs au Niger.", 
      icon: <Scale className="w-6 h-6" />, 
      color: "bg-orange-50 text-orange-600" 
    },
    { 
      title: "Analyses Sectorielles", 
      desc: "Études de marché récentes sur les télécoms et l'énergie.", 
      icon: <PieChart className="w-6 h-6" />, 
      color: "bg-purple-50 text-purple-600" 
    }
  ],
  en: [
    { 
      title: "Investor Guide", 
      desc: "Everything about tax regimes and customs advantages.", 
      icon: <FileText className="w-6 h-6" />, 
      color: "bg-blue-50 text-blue-600" 
    },
    { 
      title: "Resource Map", 
      desc: "Strategic location of mining deposits and agricultural zones.", 
      icon: <Map className="w-6 h-6" />, 
      color: "bg-green-50 text-green-600" 
    },
    { 
      title: "Investment Code", 
      desc: "The complete legal framework to secure your assets in Niger.", 
      icon: <Scale className="w-6 h-6" />, 
      color: "bg-orange-50 text-orange-600" 
    },
    { 
      title: "Sectoral Analyses", 
      desc: "Recent market studies on telecoms and energy.", 
      icon: <PieChart className="w-6 h-6" />, 
      color: "bg-purple-50 text-purple-600" 
    }
  ]
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
      val3Desc: "Accès privilégié aux décideurs publics (B2G) et aux leaders du privé (B2B)."
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
    info: {
      faqBadge: "FAQ",
      faqTitle: "Questions Fréquentes",
      resBadge: "Ressources",
      resTitle: "Guides & Documents",
      resBtn: "Consulter",
      statsLabel: "Potentiel de Croissance",
      statsQuote: "Le Niger, futur hub énergétique régional."
    },
    footer: {
      desc: "Votre partenaire de confiance pour faciliter le commerce et les investissements stratégiques à Niamey et partout au Niger.",
      nav: "Navigation",
      info: "Informations",
      news: "Newsletter",
      newsDesc: "Recevez les opportunités d'affaires exclusives directement par email.",
      newsBtn: "S'inscrire",
      rights: "Tous droits réservés."
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
      val3Desc: "Privileged access to public decision-makers (B2G) and private sector leaders (B2B)."
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
    info: {
      faqBadge: "FAQ",
      faqTitle: "Frequently Asked Questions",
      resBadge: "Resources",
      resTitle: "Guides & Documents",
      resBtn: "Consult",
      statsLabel: "Growth Potential",
      statsQuote: "Niger, future regional energy hub."
    },
    footer: {
      desc: "Your trusted partner to facilitate trade and strategic investments in Niamey and across Niger.",
      nav: "Navigation",
      info: "Information",
      news: "Newsletter",
      newsDesc: "Receive exclusive business opportunities directly by email.",
      newsBtn: "Subscribe",
      rights: "All rights reserved."
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
      details: ["Mise en relation B2B/B2G", "Soutien Appels d'offres", "Négociation contractuelle", "Missions d'affaires", "Lobbying"],
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
      details: ["B2B/B2G networking", "Tender support", "Contract negotiation", "Business missions", "Lobbying"],
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
