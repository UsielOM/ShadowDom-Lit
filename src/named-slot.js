import { LitElement, html } from 'lit-element';

export class NamedSlot extends LitElement {

    render() {
        return html `
        <p>
            <slot name="one"></slot>
            <slot name="two"></slot>
        </p>
        `;
    }
}
customElements.define('named-slot', NamedSlot);