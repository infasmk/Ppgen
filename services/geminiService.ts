
import { GoogleGenAI } from "@google/genai";

export const improveText = async (text: string, context: string): Promise<string> => {
  if (!text.trim()) return text;
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Enhance the following text for a professional portfolio or resume. 
      Make it more impactful, concise, and professional. 
      Context: ${context}
      
      Original Text: "${text}"
      
      Return ONLY the improved text.`,
    });
    
    return response.text?.trim() || text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return text;
  }
};
