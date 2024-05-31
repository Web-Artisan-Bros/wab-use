import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { dts } from 'rollup-plugin-dts'

const packages = ['libs', 'nuxt']
const config = []

function getSettings (pkg, format) {
  let extension

  switch (format) {
    case 'es':
      extension = 'mjs'
      break
    case 'cjs':
      extension = 'cjs'
      break
    default:
      extension = 'js'
  }

  return {
    input: `packages/${pkg}/index.ts`,
    output: [
      {
        file: `packages/${pkg}/dist/index.${extension}`,
        format: format,
      }
    ],
    plugins: [
      typescript(),
      nodeResolve(),
      copy({
        targets: [
          // { src: 'src/index.html', dest: 'dist/public' },
          // { src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
          // { src: 'assets/images/**/*', dest: 'dist/public/images' }
        ]
      })
    ]
  }
}

function getDtsSettings (pkg) {
  return {
    input: `packages/${pkg}/index.ts`,
    output: [
      {
        file: `packages/${pkg}/dist/index.d.ts`
      }
    ],
    plugins: [
      dts()
    ]
  }
}

for (const pkg of packages) {
  config.push(getSettings(pkg, 'es'))
  config.push(getSettings(pkg, 'cjs'))
  config.push(getDtsSettings(pkg))
}

export default config
