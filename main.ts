// Warning Label for Humans — make.fun entry
// Line (92 bytes): printed-label rhythm, true about people in general,
// laugh lands in the last few words — reading about sleep at 3 a.m.
// Criteria order: warning label for humans, laugh in one read, true
// about people, sounds like a real label, tight.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Humans require 8 hours of sleep, yet will stay up until 3 a.m. reading about sleep.";

// Gate: entry must be 1–160 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
