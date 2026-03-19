# Testai

A VSCode workspace scaffolded for Python and TypeScript development.

## Structure

```
.
├── .vscode/                  # VSCode workspace settings and launch configs
│   ├── extensions.json       # Recommended extensions
│   ├── launch.json           # Debug configurations
│   └── settings.json         # Editor and language settings
├── python/                   # Python project
│   ├── src/
│   │   └── main.py
│   ├── tests/
│   │   └── test_main.py
│   └── pyproject.toml
├── typescript/               # TypeScript project
│   ├── src/
│   │   └── index.ts
│   ├── tests/
│   │   └── index.test.ts
│   ├── eslint.config.mjs
│   ├── jest.config.js
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
└── Testai.code-workspace     # Open this file in VSCode
```

## Getting Started

Open the workspace in VSCode:

```sh
code Testai.code-workspace
```

### Python

```sh
cd python
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -e ".[dev]"
pytest                          # run tests
```

### TypeScript

```sh
cd typescript
npm install
npm test                        # run tests
npm run build                   # compile to dist/
npm run lint                    # lint source
```