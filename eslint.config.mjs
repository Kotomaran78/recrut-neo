import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  { ignores: ['node_modules/', 'build/', '.vscode/'] },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];


// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import pluginReact from 'eslint-plugin-react';
// import { fixupConfigRules } from '@eslint/compat';

// export default [
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     languageOptions: {
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true
//         }
//       },
//       globals: globals.browser,
//     },
//     plugins: ['react'],
//     extends: [
//       pluginJs.configs.recommended,
//       ...fixupConfigRules(pluginReact.configs.recommended),
//       'plugin:react/recommended',
//       'plugin:@typescript-eslint/recommended'
//     ],
//     settings: {
//       react: {
//         version: 'detect'
//       }
//     },
//     ignorePatterns: ['node_modules/', 'build/', '.vscode/']
//   }
// ];
