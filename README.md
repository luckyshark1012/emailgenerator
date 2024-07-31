```markdown
# Email Dot Generator

This Node.js program generates possible email addresses by inserting dots at various positions in the local part (before the "@") of the email. The generated emails are saved to a file named `emaillist.txt`.

## Features

- Generate email combinations by adding dots step-by-step from the end of the local part.
- Control the number of generated results via command-line arguments.
- Default to generating 10 results if no number is specified.

## Prerequisites

- Node.js installed on your system.

## Installation

1. Clone the repository or download the script.
2. Navigate to the directory containing `generateEmails.js`.

## Usage

To run the program and save the generated emails to `emaillist.txt`, use the following command:

```bash
node generateEmails.js your-email@example.com [maxResults]
```

Replace `your-email@example.com` with the actual email address you want to process and `[maxResults]` with the desired number of results. If you omit `[maxResults]`, the program will generate up to 10 unique combinations by default.

### Examples

- Generate up to 10 email combinations (default):

  ```bash
  node generateEmails.js your-email@example.com
  ```

- Generate up to 50 email combinations:

  ```bash
  node generateEmails.js your-email@example.com 50
  ```

## How It Works

1. The script splits the email into the local part (before the "@") and the domain part (after the "@").
2. It recursively inserts dots into the local part, starting from the end and moving towards the beginning.
3. It ensures that the number of generated emails does not exceed the specified limit.
4. The generated emails are saved to `emaillist.txt`.

## Error Handling

- The script will display an error message and exit if the provided email address is invalid or if `maxResults` is not a positive number.

## Example Output

For an email `example@domain.com`, possible generated emails might include:

```
exa.mple@domain.com
ex.ample@domain.com
e.xample@domain.com
e.xa.mple@domain.com
```

Note: The exact output will depend on the length of the local part and the specified `maxResults`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
