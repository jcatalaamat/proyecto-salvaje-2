import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure CNAME file exists in dist directory
const distPath = path.join(__dirname, '../dist');
const cnamePath = path.join(distPath, 'CNAME');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Write CNAME file
fs.writeFileSync(cnamePath, 'mazunteconnect.com\n');

console.log('CNAME file preserved in dist directory');
