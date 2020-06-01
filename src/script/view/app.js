import "../../components/header-bar.js";
import "../../components/kasus-item.js";
import "../../components/kasus-about.js";
import "../../components/footer-bar.js";

import KasusCorona from "../data/datasource.js";

const app = function () {

    const headerElement = document.querySelector("header-bar");
    const kasusElement = document.querySelector("kasus-item");

    const onButtonSearch = async (event) => {
        event.preventDefault();
        if (headerElement.value.length === 0) {
            kasusElement.renderError(`Loading Country ...`);
            try {
                const result = await KasusCorona.kasusIndo();
                kasusElement.kasus("Indonesia", result);
            } catch (message) {
                kasusElement.renderError(`Error: ${message}`);
            }
            return;
        }

        kasusElement.renderError(`Loading Country ...`);
        try {
            const result = await KasusCorona.kasusCountry(headerElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        kasusElement.kasus(`${headerElement.value}`, results);
    };

    const fallbackResult = message => {
        kasusElement.renderError(`Error: ${message}`);
    };

    headerElement.clickEvent = onButtonSearch;

    kasusElement.renderError(`Loading Country ...`);
    KasusCorona.kasusIndo()
        .then(result => {
            kasusElement.kasus("Indonesia", result);
        })
        .catch(message => {
            kasusElement.renderError(`Error: ${message}`);
        });
};

export default app;