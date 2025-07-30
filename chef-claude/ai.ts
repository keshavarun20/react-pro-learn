import { InferenceClient } from "@huggingface/inference"; // Keep this import

// Directly access the environment variable
// In a Vite project, environment variables prefixed with VITE_ are exposed to the browser.
const accessToken = import.meta.env.VITE_HF_ACCESS_TOKEN;

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// IMPORTANT: This check is now crucial for the frontend
if (!accessToken) {
  // Instead of throwing, you might want to log a warning or return early
  // to avoid crashing the dev server if token is missing during development.
  console.warn("VITE_HF_ACCESS_TOKEN is missing. AI features will not work.");
  // You might also render a message in your UI if this happens.
}

// Initialize the client only if the token is available
const hf = accessToken ? new InferenceClient(accessToken) : null;

export async function getRecipeFromMistral(ingredientsArr: string[]): Promise<string | undefined> {
  // Ensure the client was successfully initialized
  if (!hf) {
    console.error("Hugging Face InferenceClient not initialized. Missing access token.");
    return undefined;
  }

  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
      // Consider adding temperature, top_p for more controlled generation
      // temperature: 0.7,
      // top_p: 0.9,
    });
    return response.choices[0].message.content;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error generating recipe:", err.message);
      // You might also return a user-friendly error message here
    } else {
      console.error("Unexpected error during recipe generation:", err);
    }
  }
  return undefined;
}