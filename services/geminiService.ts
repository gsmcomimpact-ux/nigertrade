
import { GoogleGenAI } from "@google/genai";

export const getBusinessInsight = async (userPrompt: string) => {
  try {
    // Directly initialize GoogleGenAI with process.env.API_KEY.
    // The environment variable is assumed to be valid and available.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Vous êtes l'assistant virtuel expert de NIGER TRADE, basé à Niamey. 
        Votre rôle est de conseiller les investisseurs et entreprises sur les opportunités d'affaires au Niger. 
        Soyez professionnel, encourageant et factuel. Mentionnez les secteurs porteurs : Mines, Agriculture, Énergie, Tech. 
        Si on vous demande comment investir, suggérez de contacter Niger Trade via le formulaire de contact. 
        Répondez en français. Soyez concis.`,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    // The result's generated text is accessed via the .text property (not a method).
    return response.text || "Désolé, je ne peux pas traiter votre demande pour le moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de la consultation de l'expert virtuel.";
  }
};
