import { LitElement, html } from 'lit-element';

export class LightDoom extends LitElement {



    render() {
        return html `
        <p>Custom rendering without shadow Dom (note, styling leaks in)</p>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('light-doom', LightDoom);