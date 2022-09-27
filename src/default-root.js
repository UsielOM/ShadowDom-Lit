import { LitElement, html } from 'lit-element';

export class DefaultRoot extends LitElement {


    render() {
        return html `
        <p>By default template renders into shadow DOM</p>
        `;
    }
}
customElements.define('default-root', DefaultRoot);