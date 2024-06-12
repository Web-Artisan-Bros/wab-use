import { defineStore } from "pinia";
import { HTMLToJSON, JSONToHTML } from "html-to-json-parser";
import { uuid } from "@wab-use/libs";
import { computed, ref } from "vue";
export const useSvgMedia = defineStore("wabSvgMedia", () => {
  const icons = ref({});
  const add = (url, svg = {}) => {
    icons.value[url] = svg;
    fetchSvg(url).then((resp) => {
      icons.value[url] = {
        ...svg,
        ...resp
      };
    });
  };
  const load = (url, data) => {
    if (has(url))
      return;
    add(url, { ...data, id: uuid() });
  };
  const has = (url) => {
    return Object.keys(icons.value).includes(url);
  };
  const get = (url) => {
    return icons.value[url];
  };
  const parseHtml = async (html) => {
    const json = await HTMLToJSON(`<content>${html}</content>`);
    if (!json || !json.content) {
      return;
    }
    const svgNode = json.content.find((node) => node.type === "svg" && node.content?.length > 0);
    const props = svgNode?.attributes ?? {};
    props.style = (props.style ?? "").split(";").reduce((acc, style) => {
      const [key, value] = style.split(":");
      if (!key) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    return { props, content: svgNode };
  };
  const generateSvgContent = async (svgNode) => {
    const svgContent = [];
    await Promise.all(svgNode.content.map(async (curr) => {
      if (typeof curr === "object") {
        const html = await JSONToHTML(curr);
        svgContent.push(html);
      }
    }));
    return svgContent;
  };
  const fetchSvg = async (url) => {
    if (!url)
      return;
    try {
      const resp = await $fetch(url, {
        responseType: "blob"
      });
      const rawHtml = await resp.text();
      const json = await parseHtml(rawHtml);
      const nodesArray = await generateSvgContent(json?.content);
      return {
        html: nodesArray.join(""),
        props: json?.props
      };
    } catch (e) {
      console.error(e);
      return {
        html: null,
        props: null,
        error: e
      };
    }
  };
  const searchForSvg = (parent) => {
    let toReturn = [];
    if (Array.isArray(parent)) {
      parent.forEach((item) => {
        const data = searchForSvg(item);
        if (Object.keys(data).length > 0) {
          toReturn.push(data);
        }
      });
      return toReturn;
    }
    Object.entries(parent).forEach(([key, value]) => {
      console.log(key);
      if (parent.mime === "image/svg+xml") {
        load(parent.url, parent);
        toReturn = parent;
        return;
      }
      if (value && typeof value === "object") {
        const data = searchForSvg(value);
        if (Object.keys(data).length > 0) {
          toReturn = data;
        }
      }
    });
    return toReturn;
  };
  return {
    icons,
    add,
    has,
    get,
    load,
    searchForSvg,
    fetchSvg,
    iconsList: computed(() => Object.values(icons.value))
  };
});
