
import { GoogleGenAI } from "@google/genai";

/**
 * Service de consultation business utilisant Gemini 3 Flash.
 * Crée une instance unique par appel pour garantir l'actualisation de la clé API.
 */
export const getBusinessInsight = async (userPrompt: string) => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      throw new Error("API_KEY_MISSING");
    }

    // Toujours créer une nouvelle instance avant l'appel
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Vous êtes l'assistant virtuel expert de NIGER TRADE, basé à Niamey. 
        Votre rôle est de conseiller les investisseurs sur les opportunités d'affaires au Niger. 
        Secteurs prioritaires : Mines (Uranium, Or), Agriculture, Énergie Solaire, Infrastructures. 
        Soyez formel, précis et orienté business. 
        Répondez toujours dans la langue utilisée par l'utilisateur.`,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message === "API_KEY_MISSING") return "CONFIG_REQUIRED";
    if (error.message?.includes("entity was not found")) return "KEY_RESET_REQUIRED";
    return "Désolé, une erreur technique est survenue. Veuillez réessayer.";
  }
};
