import * as fs from "fs";

// Read the raw text file
const raw = fs.readFileSync("academictest.txt", "utf-8");

const questionBlocks = raw
  .split(/\n(?=\d+\.\s)/)
  .filter((block) => block.trim());

const questions = questionBlocks
  .map((block) => {
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const questionMatch = lines[0].match(/^(\d+)\.\s*(.*)$/);
    if (!questionMatch) return null;

    const questionNumber = questionMatch[1];
    const question = questionMatch[2];

    const options: string[] = [];
    for (let i = 1; i < lines.length; i++) {
      const optMatch = lines[i].match(/^[A-E]\.\s*(.*)$/);
      if (optMatch) options.push(optMatch[1]);
    }

    const answerLine = lines.find((l) => l.startsWith("Answer:"));
    const answer = answerLine ? answerLine.replace("Answer:", "").trim() : "";

    return {
      questionNumber,
      question,
      options,
      id: `q${questionNumber}`,
      answer,
    };
  })
  .filter(Boolean);

fs.writeFileSync(
  "academicQuestions.json",
  JSON.stringify({ data: questions }, null, 2)
);
