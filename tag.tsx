import * as snabbdom from "snabbdom";

import * as h from "snabbdom/h";
import * as snabbdomAttributes from "snabbdom/modules/attributes";
import * as snabbdomEvent from "snabbdom/modules/eventlisteners";
import * as snabbdomClass from "snabbdom/modules/class";
import * as snabbdomStyle from "snabbdom/modules/style";

import snabbdomCustomElement from "vicejs/modules/customElement";
import snabbdomState from "vicejs/modules/state";

import "document-register-element";

import {vice} from "vicejs";

// h is included as a no-op since tsx/jsx needs it
export function tag(tagName: string, h) {
  let snabbdomPatch = snabbdom.init([h, snabbdomAttributes, snabbdomEvent, snabbdomClass, snabbdomStyle, snabbdomState, snabbdomCustomElement]);
  return function<K extends typeof HTMLElement>(klass: K): K {
    return vice(klass, snabbdomPatch, tagName);
  };
}
