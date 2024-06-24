/// <reference lib="dom" />

const DOMParser: DOMParserStatic
const XMLSerializer: XMLSerializerStatic
const DOMImplementation: DOMImplementationStatic

interface DOMImplementationStatic {
  new (): DOMImplementation;
}

interface DOMParserStatic {
  new (): DOMParser;
  
  new (options: Options): DOMParser;
}

interface XMLSerializerStatic {
  new (): XMLSerializer;
}

export interface DOMParser {
  parseFromString (xmlsource: string, mimeType?: string): Document;
}

interface XMLSerializer {
  serializeToString (node: Node): string;
}

interface Options {
  locator?: any;
  errorHandler?: ErrorHandlerFunction | ErrorHandlerObject | undefined;
}

interface ErrorHandlerFunction {
  (level: string, msg: any): any;
}

interface ErrorHandlerObject {
  warning?: ((msg: any) => any) | undefined;
  error?: ((msg: any) => any) | undefined;
  fatalError?: ((msg: any) => any) | undefined;
}
