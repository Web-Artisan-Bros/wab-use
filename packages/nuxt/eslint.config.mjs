// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: false
  },
  dirs: {
    src: [
      './playground'
    ]
  }
})
  .append(
    {
      rules: {
        // ...Override rules, for example:
        '@stylistic/no-trailing-spaces': 'off',
        'vue/first-attribute-linebreak': 'off',
        '@stylistic/comma-dangle': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@stylistic/brace-style': 'off',
        'vue/no-v-html': 'off',
        "@typescript-eslint/ban-ts-comment": "off",
      }
    }
  )
