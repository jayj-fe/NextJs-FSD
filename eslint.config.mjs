import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // 코드 스타일
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'arrow-parens': ['error', 'always'],

      // 코드 안정성
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      curly: ['error', 'all'],

      // React/Next.js 관련
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // 콘솔
      'no-console': 'warn',

      // 선택적: Next.js에서 <img> 직접 사용할 수 있게 허용
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
