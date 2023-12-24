import OpenAI from "openai";
import { envConfig } from "../../envConfig";

const openAI = new OpenAI({
  apiKey: envConfig.OPEN_AI_API_SECRET,
});

export default openAI;
