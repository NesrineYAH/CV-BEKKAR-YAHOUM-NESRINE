import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Header: {
        jobTitle: "Frontend & Full-Stack Web Developer",
      },
      skills: {
        title: "TECHNICAL SKILLS",
        frontend: "Frontend Development:",
        frontend_Li:
          ":React.js, Next.js, Angular, JavaScript, TypeScript, HTML, CSS (Tailwind, Bootstrap, SCSS)",
        backend: "Backend Development:",
        backend_Li: "Node.js, Express.js, MongoDB",
        optimization: "Web Optimization: SEO, Performance, Responsive Design",
        Outils: "Methods & tools :",
      },

      training: {
        title: "TRAINING AND CERTIFICATIONS",
        Li1: "2022 - 2023 : Frontend Web Developer (BAC+2) – OpenClassrooms",
        Li2: "2022: WordPress Training – Certificate of Success",
        Li3: "2023: TOEIC B1 Professional English Diploma – Linguaphone",
        Li4: "2022: DELF B2 Diploma - Ministry of National Education",
        Li5: "2006 - 2011: Bachelor's Degree in Business and Financial Sciences(Marketing) - ESC Algiers.",
      },
      experience: {
        title: "WORK EXPERIENCES",
        developer:
          " 2023 - Present: Frontend / Full Stack Web Developer – Personal projects and contribution to Open Source projects (GitHub)",
        developer_LiI:
          "Development and creation of dynamic websites and mobile applications optimized with SEO",
        developer_LiII:
          "  Fixed bugs, improved the code and added new features, in collaboration with international developers (code reviews, pull requests, issues).",
        familyBusiness: "Family Business Management – Remote (2018-2022)",
        familyBusiness_LiI:
          " Digital management for visibility on social networks and online customer relationship management.",
        customerService:
          "Customer Service Representative - Top Course Algeria (2011-2013)",
        customerService_Li:
          "Management of a customer portfolio, monitoring of deliveries and improvement of the user experience.",
        callCenter:
          "Consultant in a call center - Mobilis (Telecom Operator) (2011 - 2013)",
        callCenter_Li:
          " Customer support and resolution of technical problems, complaints and disputes",
      },
      projects: {
        title: "PROJECTS COMPLETED",
        a: "GitHub Link",
        ohmyfood:
          "Integrated and Developed a mockup to create and animate a web page for OHMYFOOD",
        lapanthere:
          "Implemented SEO, accessibility, and performance optimization for the La Panthère website",
        Picante: "Built a secure API for the gastronomic review app PICANTE",
        Kanap: "Developed a JavaScript e-commerce website for KANAP ",
        KASA: "Created an apartment rental website using React.js and SASS for KASA",
        petitsPlats: "Developed a recipe website for LES PETITS PLATS ",
        Fisheye: "Built a website for freelance photographers for FISHEYES",
        SaaSRH: "Debugged and tested an HR SaaS platform",
      },
      Lang: {
        title: "LANGUAGES",
        prg: "English: B1 , Arabic: Mother Tongue ",
      },
      INTERESTS: {
        titte: "INTERESTS",
        prg: "Technology, Reading, Music, Dance, Sports, Cooking & Gastronomy, Travel, Artificial Intelligence",
      },
    },
  },
  fr: {
    translation: {
      Header: {
        jobTitle: "Développeuse Web Frontend & Full-Stack",
      },
      skills: {
        title: "COMPÉTENCES TECHNIQUES",
        frontend: "Développement Frontend: ",
        frontend_Li:
          "React.js, Next.js, Angular, JavaScript, TypeScript, HTML, CSS (Tailwind, Bootstrap, SCSS)",
        backend: "Développement Backend: ",
        backend_Li:
          "TypeScript (Node.js), JavaScript(Node.js), Express.js, MongoDB",
        optimization: "Optimisation Web: SEO, Performance, Responsive Design",
        Outils: "Outils & Méthodes",
      },
      training: {
        title: "FORMATIONS ET CERTIFICATIONS",
        Li1: "2022 - 2023 : Développeur Web Frontend (BAC+2) – OpenClassrooms",
        Li2: "2022: Formation WordPress – Attestation de Réussite ",
        Li3: "2023: Diplôme TOEIC B1 Anglais Professionnel – Linguaphone ",
        Li4: "2022: Diplôme DELF B2 - Ministère de l’Éducation Nationale ",
        Li5: "2006 - 2011 : Licence en Sciences Commerciales et Financières (Marketing) – ESC Alger.",
      },

      experience: {
        title: " EXPÉRIENCES PROFESSIONNELLES",
        developer:
          "  2023 – Présent : Développeuse Web Frontend / Full Stack – Projets personnels et contribution à des projets Open Source (GitHub)",
        developer_LiI:
          "  Développement et création de sites web dynamiques et d'applications mobiles optimisées avec SEO",
        developer_LiII:
          " Correction de bugs, amélioration du code et ajout de nouvelles fonctionnalités, en collaboration avec des développeurs internationaux (revues de code, pull requests, issues).",
        familyBusiness:
          "Gestion du commerce familial – Télétravail (2018-2022)",
        familyBusiness_LiI:
          " Gestion digitale pour la visibilité sur les réseaux sociaux et la gestion de la relation client en ligne.",
        customerService: "Chargée Clientèle - Top Course Algérie (2011-2013)",
        customerService_Li:
          "Gestion d’un portefeuille clients, suivi des livraisons et amélioration de l’expérience utilisateur.",
        callCenter:
          "Téléconseillère dans un centre d'appel – Mobilis (Opérateur Télécom) (2011 - 2013)",
        callCenter_Li:
          "Assistance clientèle et résolution des problèmes techniques, réclamations et litiges.",
      },
      projects: {
        title: "PROJETS RÉALISÉS",
        a: "Lien GitHub",
        ohmyfood: "Intégration et développement d’une maquette pour OHMYFOOD",
        lapanthere:
          "Optimisation SEO, accessibilité et performance pour La Panthère",
        Picante: "Built a secure API for the gastronomic review app PICANTE ",
        Kanap: "  Construction d’un site e-commerce en JavaScript KANAP ",
        KASA: "Création d’un site de location d’appartements avec React.js et SASS KASA",
        petitsPlats:
          "Création d’un site web de recettes de cuisine LES PETITS PLATS",
        Fisheye: "Création d’un site pour photographes indépendants FISHEYES",
        SaaSRH: "Débogage et test d’un SaaS RH",
      },
      Lang: {
        title: "LANGUES",
        prg: "Anglais ; B1, Arabe: Langue Maternelle",
      },
      INTERESTS: {
        titte: "CENTRE D’INTÉRÊTS",
        prg: "Technologies, Lecture, Musique, Dance, Sport, Cuisine & gastronomie, voyage, Intelligence Artificielle",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr", // Langue par défaut
    interpolation: { escapeValue: false },
  });

export default i18n;
