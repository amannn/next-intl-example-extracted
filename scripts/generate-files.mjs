import fs from 'fs';
import path from 'path';
import gettextParser from 'gettext-parser';

const poFilePath = 'template/en.po';
const outputDir = 'src';

const poContent = fs.readFileSync(poFilePath, 'utf-8');
const parsed = gettextParser.po.parse(poContent);

const translations = parsed.translations[''];

const fileMessagesMap = new Map();

for (const [msgid, entry] of Object.entries(translations)) {
  if (!msgid || !entry.msgstr[0]) continue;

  const msgstr = entry.msgstr[0];
  const references = entry.comments?.reference || '';

  const files = references.split('\n').filter(Boolean);

  for (const filePath of files) {
    if (!fileMessagesMap.has(filePath)) {
      fileMessagesMap.set(filePath, []);
    }
    fileMessagesMap.get(filePath).push(msgstr);
  }
}

for (const [filePath, messages] of fileMessagesMap) {
  const fullPath = path.join(outputDir, filePath);
  const dir = path.dirname(fullPath);

  fs.mkdirSync(dir, {recursive: true});

  const tCalls = messages
    .map((msg) => `  t('${msg.replace(/'/g, "\\'")}');`)
    .join('\n');

  const content = `import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
${tCalls}
}
`;

  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Created: ${fullPath}`);
}

console.log(`\nGenerated ${fileMessagesMap.size} files in ${outputDir}/`);
