import { OpenAI } from "langchain/llms/openai";

export const run = async () => {
  // temperature controls how random/creative the response is. It ranges from 0(deterministic) to 1(max creativity)
  const model = new OpenAI({ temperature: 0.9, verbose: true,  });
  console.log(model);
  const res = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
  console.log(res);
};