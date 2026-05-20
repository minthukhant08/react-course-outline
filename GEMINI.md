# Project Mandates: JavaScript Documentation

This file defines the foundational architecture, coding standards, and documentation style for this project. Adherence to these rules is mandatory for all contributions.

## 🏗 Architectural Conventions

### Directory Naming
- Documentation resides under `app/javascript/`, `app/react/`, `app/typescript/`, `app/zod/`, `app/zustand/`, and `app/nextjs/`.
- JavaScript category directories **MUST** be pluralized (e.g., `arrays`, `objects`).
- React category directories should follow functional naming (e.g., `components`, `state-hook`).
- Zod category directories should follow schema naming (e.g., `basic-types`, `objects`).
- Zustand category directories should follow store naming (e.g., `basic-store`, `middleware`).
- Next.js category directories should follow feature naming (e.g., `basics`, `routing`, `data-fetching`).
- Every sub-topic requires a dedicated subdirectory containing a `page.mdx` file.

### Metadata Management
- Each directory must contain a `_meta.ts` file to define sidebar order and labels.
- Sidebar labels should be concise and capitalized (e.g., `index: "Basic"`, `map: "Array.map()"`).

### React & TypeScript Standards
- **Interactivity**: Use `sandpack-react` with the `react-ts` template for all code examples.
- **Console Visibility**: If an example relies on `console.log`, include `options={{ showConsole: true, showConsoleButton: true }}` in the `Sandpack` component.
- **Extensions**: Use `.tsx` for all React component files.
- **Typing**: Prefer TypeScript. Use inferred return types for components (omit `: JSX.Element`) but explicitly define props using `interface`.

### Next.js Specifics
- **Breaking Changes**: This version of Next.js has significant breaking changes in APIs, conventions, and file structure compared to standard versions.
- **Internal Guides**: ALWAYS read the relevant internal guide in `node_modules/next/dist/docs/` before writing code or documentation for Next.js.
- **Deprecations**: Strictly heed all deprecation notices found in the internal documentation.

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
