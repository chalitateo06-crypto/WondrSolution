import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  // Refactored to follow @google/genai guidelines for client initialization and response handling
  async sendMessage(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    // Guidelines: Initialize GoogleGenAI inside the method and use process.env.API_KEY directly
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      // Guidelines: Access the extracted string output using the .text property (not a method)
      return response.text || "Maaf, saya sedang tidak bisa memproses pesan Anda. Coba lagi nanti ya!";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Waduh, ada kendala koneksi nih. Coba tanya lagi ya!";
    }
  }
}

export const geminiService = new GeminiService();