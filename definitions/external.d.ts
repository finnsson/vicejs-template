declare module "vicejs" {
  export function vice<K extends typeof HTMLElement>(klass: K, patch: any, tagName?: string): K;
}

declare module "snabbdom" {
  let o: any;
  export = o;
}

declare module "snabbdom/h" {
  let h: any;
  export = h;
}


declare module "document-register-element" {
  let o: any;
  export = o;
}

declare module "snabbdom/modules/attributes" {
  let o: any;
  export = o;
}

declare module "snabbdom/modules/class" {
  let o: any;
  export = o;
}

declare module "snabbdom/modules/eventlisteners" {
  let o: any;
  export = o;
}

declare module "snabbdom/modules/style" {
  let o: any;
  export = o;
}
