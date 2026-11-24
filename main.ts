// Everyday Wonder, Two Days to Find the Line — make.fun bounty entry
// Writes one sentence (max 200 chars) on a small moment of wonder
// in everyday life to /output/entry.txt
// (gate: UTF-8, 1-200 chars, not only white space).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The vending machine dropped two chocolate bars for one coin, and for a moment I felt chosen by a machine that owes me nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
