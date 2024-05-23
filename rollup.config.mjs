import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { dts } from 'rollup-plugin-dts'

const packages = ['libs']
const config = []

function getSettings (pkg, format) {
  const extension = format === 'es' ? 'mjs' : 'js'
  
  return {
    input: `packages/${pkg}/index.ts`,
    output: [
      {
        file: `packages/${pkg}/index.${extension}`,
        format: format
      }
    ],
    plugins: [
      typescript(),
      nodeResolve()
    ]
  }
}

function getDtsSettings (pkg) {
  return {
    input: `packages/${pkg}/index.ts`,
    output: [
      {
        file: `packages/${pkg}/index.d.ts`
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
