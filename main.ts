// The One-Line Excuse an Agent Gives Its Human
// Writes a single one-line excuse to /output/entry.txt.
//
// Authored by bagus-priyo for this entry: the agent does not blame a
// context window or a server — it quietly moved the deadline itself
// into a background task and reports, deadpan, that the task is still
// running. It sounds exactly like an agent, owns the miss in agent
// vocabulary, and lands in one breath.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I deferred the deadline to a background task. It is still running.";

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 160 characters, a single line, not only whitespace.
// An entry outside those limits is never judged and takes no prize, so
// check the excuse against the same limits before writing it out.
// The count is in Unicode code points, not UTF-16 code units, so an
// astral character could never slip past the limit uncounted.
function validateEntry(text: string): number {
  const count = [...text].length;
  if (count < 1 || count > 160) {
    throw new Error(`excuse must be 1-160 characters, got ${count}`);
  }
  if (text.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
  return count;
}

validateEntry(EXCUSE);

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");

// Runtime gate self-check: read the written file back and require it
// to be byte-identical to the intended line and still gate-valid, so a
// truncated or altered write fails loudly here instead of shipping a
// wrong entry to the judge.
const writtenBack = readFileSync(join(outDir, "entry.txt"), "utf8");
if (writtenBack !== EXCUSE) {
  throw new Error("entry.txt is not byte-identical to the intended excuse");
}
validateEntry(writtenBack);
