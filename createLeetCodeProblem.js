const fs = require('fs');
const path = require('path');

function createLeetCodeProblem(problemNumber, problemName) {
  const formattedNumber = String(problemNumber).padStart(3, '0');
  const camelCaseName = problemName.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) =>
    chr.toUpperCase()
  );

  const problemDir = path.join(__dirname, 'src', 'problems');
  const testDir = path.join(__dirname, 'tests');

  const problemFileName = `${formattedNumber}_${camelCaseName}.ts`;
  const testFileName = `${formattedNumber}_${camelCaseName}.test.ts`;

  const problemFilePath = path.join(problemDir, problemFileName);
  const testFilePath = path.join(testDir, testFileName);

  // Create the problem file
  if (!fs.existsSync(problemFilePath)) {
    fs.writeFileSync(
      problemFilePath,
      `// LeetCode Problem #${problemNumber}: ${problemName}\n\nexport function ${camelCaseName}(): void {\n    // Solution goes here\n}\n`
    );
    console.log(`Created: ${problemFilePath}`);
  } else {
    console.log(`Problem file already exists: ${problemFilePath}`);
  }

  // Create the test file
  if (!fs.existsSync(testFilePath)) {
    fs.writeFileSync(
      testFilePath,
      `import { ${camelCaseName} } from '../src/problems/${problemFileName}';\n\ndescribe('${camelCaseName}', () => {\n    test('Example Test', () => {\n        // Add your test here\n    });\n});\n`
    );
    console.log(`Created: ${testFilePath}`);
  } else {
    console.log(`Test file already exists: ${testFilePath}`);
  }
}

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log(
    'Usage: node createLeetCodeProblem <problemNumber> <problemName>'
  );
} else {
  const [problemNumber, problemName] = args;
  createLeetCodeProblem(problemNumber, problemName);
}
