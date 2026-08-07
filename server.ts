import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Gemini AI endpoint for neutral political explanations
app.post("/api/ask-gemini", async (req, res) => {
  try {
    const { question, topicContext } = req.body;
    if (!question) {
      return res.status(400).json({ error: "La domanda è obbligatoria." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: "Chiave API Gemini non configurata. L'assistente IA non è al momento attivo.",
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `Sei un assistente neutrale, imparziale, pedagogico e rigorosamente oggettivo specializzato nel sistema politico e istituzionale italiano ("VotoChiaro - La Bibbia del Voto Consapevole").
Il tuo compito è spiegare temi politici, economici e riforme legislative in modo estremamente semplice, chiaro e bilanciato ("spiegato semplice"), senza mai prendere posizione né favorire alcun partito politico.

Linee guida tassative:
1. Rispondi sempre in italiano chiaro, strutturato con elenchi puntati o brevi paragrafi.
2. Presenta le ragioni del SI e le ragioni del NO o i diversi punti di vista principali con assoluta equità.
3. Cita dati ufficiali o contesto normativo quando utile (es. ISTAT, Bankitalia, Corte dei Conti, Eurostat).
4. Evita toni polemici, giudizi di valore o aggettivi promozionali/denigratori.
5. Mantieni la risposta sintetica ed efficace (massimo 250-300 parole).`;

    const userPrompt = topicContext
      ? `Contesto tema: ${topicContext}\n\nDomanda utente: ${question}`
      : `Domanda utente: ${question}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
      },
    });

    res.json({ text: response.text });
  } catch (err: any) {
    console.error("Errore server Gemini:", err);
    res.status(500).json({
      error: "Impossibile generare la risposta al momento. Riprova più tardi.",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server VotoChiaro in esecuzione su http://localhost:${PORT}`);
  });
}

startServer();
