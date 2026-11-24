// makefun-commuter-forecast-city-01
// Writes one line of weather forecast (<=140 chars) for a city that does
// not exist to $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22, stdlib only,
// deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Drizzle in Plippton all day, 12°C. The bus shelter leaks exactly where you stand, as tradition demands.";

const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (/[\r\n]/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
