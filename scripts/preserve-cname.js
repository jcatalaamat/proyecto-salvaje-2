import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure CNAME file exists in dist directory
const distPath = path.join(__dirname, '../dist');
const cnamePath = path.join(distPath, 'CNAME');
const source404Path = path.join(__dirname, '../404.html');
const dest404Path = path.join(distPath, '404.html');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Write CNAME file
fs.writeFileSync(cnamePath, 'mazunteconnect.com\n');

// Copy 404.html to dist directory for GitHub Pages SPA routing
if (fs.existsSync(source404Path)) {
  fs.copyFileSync(source404Path, dest404Path);
  console.log('404.html copied to dist directory');
} else {
  console.warn('404.html not found in project root');
}

console.log('CNAME file preserved in dist directory');
