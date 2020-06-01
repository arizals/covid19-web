import moment from 'moment';

class KasusItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    kasus(title, country) {
        console.log(country);
        this._confirmed = country.confirmed.value;
        this._recovered = country.recovered.value;
        this._deaths = country.deaths.value;
        this._lastUpdate = country.lastUpdate;
        this._title = title;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .article-body {
                margin: 15px;
                border-radius: 6px;
                padding: 20px;
            }
        
            .article-title {
                font-family: 'Roboto Slab', sans-serif;
                color: #22272c;
                font-size: 1.5em;
                font-weight: 700;
                line-height: 1em;
            }
        
            /* item */
            .container-box {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
            }
        
            .box-item {
                background: #22272c;
                border-radius: 6px;
                margin-bottom: 15px;
                text-align: right;
                flex-basis: 100%;
                color: #fff;
            }
        
            .box-item p {
                padding-right: 20px;
            }
        
            .box-item .angka {
                font-size: 30px;
                margin: 15px 0px;
                line-height: .9em;
            }
        
            .box-kuning {
                border-right: 5px solid #f2c94c
            }
        
            .box-merah {
                border-right: 5px solid #d8232a
            }
        
            .box-hijau {
                border-right: 5px solid #219653
            }
        
            @media screen and (min-width: 600px) {
                .box-item {
                    flex-basis: 30%;
                }
            }
        </style>
        <section class="article-body">
            <h2 class="article-title">
                Statistik ${this._title.toUpperCase()}
            </h2>
            <div class="container-box">
                <div class="box-item box-kuning">
                    <p class="angka">${this._confirmed.toLocaleString('id-ID')}</p>
                    <p>Kasus Positif</p>
                </div>
                <div class="box-item box-merah">
                    <p class="angka">${this._deaths.toLocaleString('id-ID')}</p>
                    <p>Meninggal</p>
                </div>
                <div class="box-item box-hijau">
                    <p class="angka">${this._recovered.toLocaleString('id-ID')}</p>
                    <p>Sembuh</p>
                </div>
            </div>
            <p style="font-size:13px"><b>Update Terakhir:</b> ${moment(this._lastUpdate).locale("id").format('Do MMMM YYYY, h:mm:ss [WIB]')}</p>
        </section>
        `;
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .article-body {
                margin: 15px;
                border-radius: 6px;
                padding: 20px;
            }
        </style>
        <section class="article-body">
            <p>${message}</p>
        </section>
        `;
    }
}

customElements.define("kasus-item", KasusItem);