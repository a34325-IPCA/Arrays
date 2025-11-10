## Purpose

This repository is a tiny static front-end exercise (no build system). Primary files:

- `index.html` — simple HTML page with inline `calcular()` and form fields.
- `notas.js` — script that intends to manage grades; contains `let notas = []; let disciplinass = [];` and two placeholders: `adicionarNota()` and `listar()`.

AI agents should treat this as a small DOM-driven single-page static site. Changes will typically be edits to `notas.js` and small, additive edits to `index.html` (adding IDs or containers for rendering).

## Big picture / architecture

- Front-end only. No server, no package.json, no tests. Local dev: open `index.html` in a browser or serve the folder with a static server (see Testing below).
- Data is currently represented as two parallel arrays: `notas` (numbers) and `disciplinass` (strings). This is the existing pattern — preserve it unless instructed otherwise. Example: `notas[0]` corresponds to `disciplinass[0]`.
- UI interactions use inline event handlers in `index.html` (e.g., `onclick="calcular()"` and `onmouseover="calcular()"`). New additions may either continue this style or attach listeners from `notas.js` — prefer the pattern already present unless the user asks for a refactor.

## Project-specific conventions

- Variable/function names are in Portuguese: `notas`, `disciplinass`, `adicionarNota`, `listar`. Maintain Portuguese names for consistency.
- Keep data shapes simple and predictable: `notas` should be numeric values (Number), `disciplinass` strings.
- The repository currently uses parallel arrays (not objects). When adding helpers, document them in comments and keep code minimal.

## Key files & DOM hooks (examples from repo)

- `index.html` has a paragraph with id `resultado` used by `calcular()`:
  - `<p id = "resultado">SSS</p>` — `calcular()` writes to `document.getElementById('resultado').innerHTML`.
- `index.html` form inputs currently lack `id` attributes. When implementing `adicionarNota()` expect to either:
  1) add `id="disciplina"` and `id="nota"` to the inputs in `index.html`, or
  2) use `prompt()` (as `calcular()` does) if the user prefers interactive prompts.

## How to implement common tasks (concrete, repo-specific guidance)

- Implementing `adicionarNota()` (follow existing patterns):
  - Read discipline and note either from inputs with ids `disciplina` and `nota`, or via `prompt()`.
  - Convert the note to Number before pushing into notas.
  - Push discipline string into disciplinass.
  - Update the UI by calling listar() (or updating an element like #resultado).

- Implementing `listar()`:
  - Render the current arrays into the DOM. If you add a container such as <ul id="lista-notas"></ul> in index.html, use that to append list items.
  - Keep output simple: discipline + `:` + note (e.g., `Matemática: 8`).

Example (conceptual, keep style consistent with repo):

 - Data shape: `notas = [8, 7.5]; disciplinass = ['Matemática','História']`
 - UI: add `<ul id="lista-notas"></ul>` to `index.html` and have `listar()` populate it.

## Testing / dev workflow

- No build step. Quick checks:
  - Open `index.html` directly in a browser (double-click) for manual testing.
  - Or run a simple static server from the project folder for a better dev loop:

    ```powershell
    cd "c:\Users\HP\OneDrive\Estudo\CTESP\Programação Web I\Arrays"
    python -m http.server 8000
    ```

  Then browse to `http://localhost:8000`.

## Edge cases & pitfalls to watch for (repo-specific)

- Parallel arrays: keep indices aligned. When removing or inserting, update both arrays together.
- Input validation: convert notes to Number and guard against NaN.
- DOM hooks: `index.html` currently uses inline handlers and missing ids; prefer minimal, non-invasive edits (add ids) unless refactor is requested.

## When merging or updating this file

- If a `.github/copilot-instructions.md` already exists, preserve any custom workflow notes and merge these short repo-specific items into the top-level summary.

## Next steps for AI agents

- If asked to implement functionality, prefer the non-breaking approach: add IDs to inputs, implement adicionarNota() to push into notas and disciplinass, implement listar() to render into a small container like #lista-notas and call listar() after adding.
- After making edits, test by opening `index.html` (or via the static server above) and verify UI updates.

---
Please tell me if you want me to implement the `adicionarNota()` and `listar()` functions now (I can modify `notas.js` and minimally update `index.html` to add required IDs/containers). Also let me know if you prefer prompts instead of form inputs.
