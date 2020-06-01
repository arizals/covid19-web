class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            :host {
                padding: 0px;
                text-align: center;
                font-size: 13px;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
            }
        </style>
        <p>Copyright &#169; 2020 - Ahmad Rizal Samsi</p>
        `;
    }
}

customElements.define("footer-bar", FooterBar);