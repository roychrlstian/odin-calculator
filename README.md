**Odin Calculator**

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A simple, responsive browser-based calculator built for The Odin Project. Demonstrates DOM manipulation, event handling, and clean JavaScript logic.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Edge Cases](#edge-cases)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Features

- Basic arithmetic: addition, subtraction, multiplication, division
- Chained operations and operator precedence
- Keyboard support and on-screen buttons
- Clear (`C`) and delete (`⌫`) controls
- Responsive layout for desktop and mobile
- Graceful error handling (e.g. division by zero)

---

## Installation

1. Clone the repository.
2. Open `index.html` in your browser or serve the folder with a static server.

```bash
git clone <your-repo-url>
cd odin-calculator
# open index.html or run a local server
```

---

## Project Structure

```plaintext
calculator/
├── index.html
├── style.css
└── script.js
```

---

## How It Works

1. Button and keyboard events update an internal input string.
2. Input is validated/normalized and edge cases are checked.
3. The expression is evaluated using a safe parsing/evaluation routine.
4. Results and errors are displayed to the user in real-time.

---

## Edge Cases

- Division by zero is handled and reported to the user.
- Prevents multiple consecutive operators.
- Handles leading zeros and malformed input gracefully.

---

## Contributing

Contributions are welcome. Please open an issue or submit a pull request with a clear description and, if applicable, screenshots or code samples.

---

## License

This project is licensed under the MIT License — see the `LICENSE` file for details.

---

## Author

**Roy Christian Cruz** — Aspiring Web Developer (Frontend & UI/UX)

---

Built as part of The Odin Project Foundations Course.