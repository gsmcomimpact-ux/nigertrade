
import { GoogleGenAI } from "@google/genai";

export const getBusinessInsight = async (userPrompt: string) => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.warn("API_KEY is missing. Please configure it in your environment variables.");
      return "Le service de consultation virtuel est temporairement indisponible (Clé API manquante).";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Vous êtes l'assistant virtuel expert de NIGER TRADE, basé à Niamey. 
        Votre rôle est de conseiller les investisseurs et entreprises sur les opportunités d'affaires au Niger. 
        Soyez professionnel, encourageant et factuel. Mentionnez les secteurs porteurs : Mines, Agriculture, Énergie, Tech. 
        Si on vous demande comment investir, suggérez de contacter Niger Trade via le formulaire de contact. 
        Répondez dans la langue de l'utilisateur. Soyez concis.`,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    return response.text || "Désolé, je ne peux pas traiter votre demande pour le moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de la consultation de l'expert virtuel.";
  }
};
