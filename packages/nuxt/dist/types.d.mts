
import type { ModuleOptions } from './module.js'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['@wab-use-nuxt']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['@wab-use-nuxt']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['@wab-use-nuxt']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['@wab-use-nuxt']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module.js'
