import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please Provide a Prompt!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please Provide a Valid Chat ID!" });
    return;
  }

  //CHAT JIBITI QUEREY
  const response = await query(prompt, chatId, model);
  
  res.status(200).json({ answer: "John Doe" });
}
