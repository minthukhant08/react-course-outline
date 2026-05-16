# Project Mandates: JavaScript Documentation

This file defines the foundational architecture, coding standards, and documentation style for this project. Adherence to these rules is mandatory for all contributions.

## 🏗 Architectural Conventions

### Directory Naming
- All documentation resides under `app/javascript/`.
- Category directories **MUST** be pluralized (e.g., `arrays`, `objects`, `operators`, `loops`).
- Every sub-topic requires a dedicated subdirectory containing a `page.mdx` file.

### Metadata Management
- Each directory must contain a `_meta.ts` file to define sidebar order and labels.
- Sidebar labels should be concise and capitalized (e.g., `index: "Basic"`, `map: "Array.map()"`).

## ✍️ MDX Documentation Standards

To ensure a uniform learning experience, every documentation page **MUST** follow this exact structure:

1.  **Main Heading (`#`)**: Clear English name of the topic.
2.  **Introduction**: A brief, technical overview written in **Burmese (Myanmar)**.
3.  **Section Separator**: A horizontal rule (`---`).
4.  **Numbered Sections (`## 1. ...`)**: Discrete sub-topics explaining specific features or use cases.
5.  **Code Examples**:
    *   Use `js` syntax highlighting.
    *   Provide realistic, high-signal examples (e.g., data manipulation, real-world scenarios).
6.  **Validation Blocks**:
    *   Every code example must be followed by a `### Output` header.
    *   The expected result must be in a `txt` code block.
7.  **Footer Tip**: End every page with a single-line tip starting with the 👉 emoji.

## 🌐 Language & Tone
- **Explanations**: Always in Burmese (Myanmar).
- **Code & Technical Terms**: Always in English.
- **Tone**: Professional, direct, and pedagogical. Avoid conversational filler.
