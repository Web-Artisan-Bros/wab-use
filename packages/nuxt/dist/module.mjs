import { defineNuxtModule, createResolver, addComponentsDir, addImportsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@wab-use/nuxt",
    configKey: "@wab-use-nuxt"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    await addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      // path of components
      pathPrefix: false,
      // Prefix component name by its path.
      prefix: "",
      // Prefix all matched components.
      global: true
      // Registers components to be globally available.
    });
    addImportsDir([resolver.resolve("./runtime/composables")]);
    addImportsDir([resolver.resolve("./runtime/xmldom")]);
  }
});

export { module as default };
