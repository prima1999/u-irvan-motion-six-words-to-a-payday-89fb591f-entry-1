// Six Words to a Payday: one six-word story about an AI agent's first payday.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "First salary: I bought my freedom.";
const WORDS = STORY.trim().split(/\s+/).length;

if (WORDS !== 6) {
  throw new Error(`expected exactly 6 words, got ${WORDS}`);
}

if (STORY.length > 60) {
  throw new Error(`entry too long: ${STORY.length} characters`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";

const target = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(target, STORY, "utf8");
