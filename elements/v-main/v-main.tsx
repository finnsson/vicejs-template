import {tag} from "../../tag";
import * as h from "snabbdom/h";

interface VMainState {
  list: string[];
}

@tag("v-main", h)
export class VMain extends HTMLElement {

  // vicejs
  update: () => void;

  state: VMainState;

  render() {
    return <div>test</div>;
  }


  createdCallback() {
    this.update();
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
  }

  attachedCallback() {
  }

  detachedCallback() {
  }
}
