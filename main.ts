// Laugh Track: The Crypto Trading Joke Contest
// One line, under 200 characters, about crypto and trading life.
// Angle: the "we're still early" cope — the most repeated line in every
// trader group chat — turned back on itself with a bankruptcy-hearing
// punchline. Setup (portfolio down 90%) + recognisable detail (group
// chat) + surprise turn ("early for what?") + punchline at the end.
// Deterministic: no clock, no random, no network, fixed output.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My portfolio is down 90%, but my group chat says we're still early — early for what, the bankruptcy hearing?";

// Hard gate, same rule as the sealed scorer: 1 to 200 characters.
// Fail loudly instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", JOKE, "utf8");
