#!/usr/bin/env node
const fs = require('fs');

const requiredFiles = [
  '.cursorrules',
  'docs/ai-context/architecture.md',
  'docs/ai-context/domain-knowledge.md',
  'docs/ai-context/patterns.md',
  'docs/project-knowledge.md',
];

function validateContextFiles() {
  let isValid = true;
  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      console.error(`❌ Missing required context file: ${file}`);
      isValid = false;
      continue;
    }
    const stats = fs.statSync(file);
    const daysSinceModified = (Date.now() - stats.mtimeMs) / (1000 * 60 * 60 * 24);
    if (daysSinceModified > 7) {
      console.warn(`⚠️  Context file is old (${Math.round(daysSinceModified)} days): ${file}`);
    } else {
      console.log(`✅ Context file is current: ${file}`);
    }
  }
  process.exit(isValid ? 0 : 1);
}

validateContextFiles();

