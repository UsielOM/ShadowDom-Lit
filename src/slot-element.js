import { LitElement, html } from 'lit-element';

export class SlotElement extends LitElement {


    render() {
        return html `
        <p>
            <slot></slot>
        </p>
        
        `;
    }
}
customElements.define('slot-element', SlotElement);