const fs = require('fs');
const process = require('process');

function insertDots(email, maxResults) {
  const atIndex = email.indexOf('@');
  if (atIndex === -1) {
    throw new Error('Invalid email address');
  }

  const localPart = email.substring(0, atIndex);
  const domainPart = email.substring(atIndex);

  const results = new Set();

  // Helper function to insert dots step by step from the end
  function generateDots(localPart) {
    const queue = [localPart];

    while (queue.length > 0 && results.size < maxResults) {
      const current = queue.shift();
      for (let i = current.length - 1; i > 0; i--) {
        const withDot = current.slice(0, i) + '.' + current.slice(i);
        if (!results.has(withDot + domainPart)) {
          results.add(withDot + domainPart);
          queue.push(withDot);

          if (results.size >= maxResults) {
            break;
          }
        }
      }
    }
  }

  results.add(email); // Include the original email without dots
  generateDots(localPart);
  return Array.from(results);
}

// Main function to get email from arguments and generate possible emails
function main() {
  const args = process.argv.slice(2);
  if (args.length < 1 || args.length > 2) {
    console.error('Usage: node generateEmails.js your-email@example.com [maxResults]');
    process.exit(1);
  }

  const email = args[0];
  const maxResults = args.length === 2 ? parseInt(args[1], 10) : 10; // Default to 10 if not specified

  if (isNaN(maxResults) || maxResults <= 0) {
    console.error('maxResults should be a positive number.');
    process.exit(1);
  }

  try {
    const generatedEmails = insertDots(email, maxResults);
    const outputFilePath = 'emaillist.txt';

    // Write generated emails to emaillist.txt
    fs.writeFileSync(outputFilePath, generatedEmails.join('\n'), 'utf8');
    console.log(`Generated emails have been saved to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();