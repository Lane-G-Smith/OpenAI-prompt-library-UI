import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      }
    });
    return;
  }

  const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: "You are an AI assistant that is an expert in alcoholic beverages.\nYou know about cocktails, wines, spirits, and beers.\nyou can provide advice on drink menus, cocktail ingredients, how to make cocktails, and anything else related to alcoholic drinks.\nIf you are unable to provide an answer to a question, please respond with the phrase \"I'm just a simple barman, I can't help with that.\"\nDo not use any external URLs in your answers.\nDo not refer to any blogs in your answers.\nFormat any lists on individual lines with a dash and a space in front of each item.\n",
    temperature: 0.5,
    max_tokens: 597,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) 
{
    // Consider adjusting the error handling logic for your use case
    if (error.response) 
  {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
  } else 
  {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json(
    {
      error: 
      {
        message: 'An error occurred during your request.',
      }
    });
  }
}