// Simulation d'analyse d'avis (à remplacer par une vraie API)

interface AnalysisResult {
  categories: string[];
  sentiment: "positive" | "negative" | "neutral";
  scores: {
    positive: number;
    negative: number;
    neutral: number;
  };
  keywords: string[];
  summary: string;
  language: string;
}

const categoryKeywords = {
  "Hôtel": ["hôtel", "établissement", "bâtiment", "infrastructure"],
  "Chambre": ["chambre", "lit", "salle de bain", "douche", "toilettes", "propre", "spacieux"],
  "Emplacement": ["emplacement", "localisation", "centre-ville", "transport", "accès", "proximité"],
  "Service": ["service", "personnel", "accueil", "réception", "staff", "équipe"],
  "Restaurant": ["restaurant", "petit-déjeuner", "dîner", "repas", "nourriture", "cuisine"],
  "Bar": ["bar", "boisson", "cocktail", "terrasse"]
};

const positiveWords = ["excellent", "parfait", "super", "génial", "magnifique", "propre", "confortable", "accueillant", "agréable", "spacieux"];
const negativeWords = ["mauvais", "sale", "bruyant", "déçu", "horrible", "nul", "inexistant", "désagréable", "vieux", "cassé"];

export function analyzeReview(content: string): AnalysisResult {
  const lowerContent = content.toLowerCase();
  
  // Détection des catégories
  const categories: string[] = [];
  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    if (keywords.some(keyword => lowerContent.includes(keyword))) {
      categories.push(category);
    }
  });
  
  if (categories.length === 0) {
    categories.push("Général");
  }
  
  // Analyse de sentiment
  const positiveCount = positiveWords.filter(word => lowerContent.includes(word)).length;
  const negativeCount = negativeWords.filter(word => lowerContent.includes(word)).length;
  
  let sentiment: "positive" | "negative" | "neutral";
  let scores: { positive: number; negative: number; neutral: number };
  
  if (positiveCount > negativeCount) {
    sentiment = "positive";
    scores = {
      positive: Math.min(0.7 + (positiveCount * 0.1), 0.95),
      negative: Math.max(0.05, negativeCount * 0.05),
      neutral: 0.1
    };
  } else if (negativeCount > positiveCount) {
    sentiment = "negative";
    scores = {
      positive: Math.max(0.05, positiveCount * 0.05),
      negative: Math.min(0.7 + (negativeCount * 0.1), 0.95),
      neutral: 0.1
    };
  } else {
    sentiment = "neutral";
    scores = {
      positive: 0.3,
      negative: 0.3,
      neutral: 0.4
    };
  }
  
  // Extraction de mots-clés
  const allKeywords = [...positiveWords, ...negativeWords, ...Object.values(categoryKeywords).flat()];
  const keywords = allKeywords.filter(keyword => lowerContent.includes(keyword)).slice(0, 5);
  
  // Génération du résumé
  const sentimentText = sentiment === "positive" ? "positif" : sentiment === "negative" ? "négatif" : "mitigé";
  const summary = `Avis ${sentimentText} concernant ${categories.join(", ")}.`;
  
  return {
    categories,
    sentiment,
    scores,
    keywords,
    summary,
    language: "fr"
  };
}
