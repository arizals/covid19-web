class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#input-keyword").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            /* header */
            header {
                display: inline;
            }

            .jumbotron {
                font-size: 20px;
                padding: 50px;
                background-size: cover;
                text-align: center;
                color: #22272c;
            }

            .jumbotron h1 {
                font-family: 'Roboto Slab', sans-serif;
                font-weight: 700;
                font-size: 48px;
                color: #22272c;
                line-height: .9em;
            }

            .nav {
                padding: 15px 35px;
            }

            /* search bar*/
            .input-group {
                position: relative;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                align-items: stretch;
                width: 600px;
                max-width: 100%;
            }

            .input-group>.form-control {
                position: relative;
                flex: 1 1 auto;
                width: 1%;
                margin-bottom: 0;
            }

            .form-control {
                display: block;
                width: 100%;
                padding: .375rem .75rem;
                font-size: 1rem;
                line-height: 1.5;
                color: #495057;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-top-left-radius: 0.25rem;
                border-bottom-left-radius: 0.25rem;
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            }

            .input-group-append {
                margin-left: -1px;
                display: flex;
            }

            .btn {
                display: inline-block;
                font-weight: 400;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                user-select: none;
                border: 1px solid transparent;
                padding: .375rem .75rem;
                font-size: 1rem;
                line-height: 1.5;
                border-top-right-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            }

            .btn-primary {
                color: #fff;
                background-color: #2e343b;
                border-color: #2e343b;
            }
        </style>

        <header>
            <div class="jumbotron">
                <h1>COVID Info</h1>
                <p>Cek Statistik Kasus COVID-19</p>
            </div>

            <div class="nav">
                <div class="input-group" id="element-search">
                    <input type="text" class="form-control" id="input-keyword" placeholder="Search Country (in English) ...">
                    <div class="input-group-append">
                        <button class="btn btn-primary" id="search-submit">Search</button>
                    </div>
                </div>
            </div>
        </header>
        `;

        this.shadowDOM.querySelector("#search-submit").addEventListener("click", this._clickEvent);
        this.shadowDOM.querySelector("#element-search").addEventListener("submit", this._clickEvent);
    }
}

customElements.define("header-bar", HeaderBar);