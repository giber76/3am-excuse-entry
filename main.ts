// The 3 AM Excuse — make.fun entry (program/v1, node22)
// Grader runs `node /bot/main.ts` (node22, no network, read-only /bot).
// Writes the hardware wallet's excuse to /output/entry.txt.
// The competition caps the excuse at 200 characters; this entry is 118.
// The excuse: a hardware wallet refusing to sign at 3 AM, in its own voice.
import { mkdirSync, writeFileSync } from "node:fs";

// Why this angle: the brief rewards an angle nobody else would think of and
// penalises the usual battery / firmware / cold-storage jokes, so the excuse
// leans on the wallet's memory instead — it keeps receipts. The wallet is a
// device with a grudge and a ledger: it remembers the one bad 3 AM decision,
// cites the evidence, and defers the verdict to sunrise rather than arguing.
const EXCUSE =
  "The last time you woke me at 3 AM, you swapped rent money for a dog coin. I still keep the receipt. Ask me at sunrise.";

const MAX_CHARS = 200;

function main(): void {
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} chars)`);
}

main();
