class KasusAbout extends HTMLElement {
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
            .article-body {
                margin: 15px;
                border-radius: 6px;
                padding: 20px;
            }
        
            .article-title {
                font-family: Roboto Slab;
                color: #22272c;
                font-size: 1.5em;
                font-weight: 700;
                line-height: 1em;
            }
        
            .article-content {
                margin-top: 5px;
            }
        </style>
        <section class="article-body">
            <h2 class="article-title">
                Tentang COVID-19
            </h2>
            <p class="article-content"><strong>COVID-19</strong> adalah
                penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Ini merupakan virus baru
                dan penyakit yang sebelumnya tidak dikenal sebelum terjadi wabah di Wuhan, Tiongkok, bulan Desember
                2019.</p>
            <p class="article-content"><strong>Gejala-Gejala COVID-19</strong> yang paling umum adalah demam,
                rasa lelah, dan batuk
                kering. Beberapa pasien mungkin mengalami rasa nyeri dan sakit, hidung tersumbat, pilek, sakit
                tenggorokan atau diare. Gejala-gejala yang dialami biasanya bersifat ringan dan muncul secara bertahap.
            </p>
            <p class="article-content"><strong>Orang dapat tertular COVID-19 dari orang lain yang terjangkit virus ini</strong>. COVID-19
                dapat menyebar dari orang ke orang melalui percikan-percikan dari hidung atau mulut yang keluar saat
                orang yang terjangkit COVID-19 batuk atau mengeluarkan napas. Percikan-percikan ini kemudian jatuh ke
                benda-benda dan permukaan-permukaan di sekitar. Orang yang menyentuh benda atau permukaan tersebut lalu
                menyentuh mata, hidung atau mulutnya, dapat terjangkit COVID-19. Penularan COVID-19 juga dapat terjadi
                jika orang menghirup percikan yang keluar dari batuk atau napas orang yang terjangkit COVID-19. Oleh
                karena itu, penting bagi kita untuk menjaga jarak lebih dari 1 meter dari orang yang sakit.</p>
            <p class="article-content">
                Source: <a href="https://www.who.int/indonesia/news/novel-coronavirus/qa-for-public" target="_blank" style="color: #212121;text-decoration: none;">WHO</a>
            </p>
        </section>
        `;
    }
}

customElements.define("kasus-about", KasusAbout);