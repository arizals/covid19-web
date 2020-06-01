import axios from 'axios';

class KasusCorona {
    static kasusIndo() {
        return axios.get(`https://covid19.mathdro.id/api/countries/IDN`)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    return Promise.reject(error.status);
                } else if (error.request) {
                    return Promise.reject("Request error");
                } else {
                    return Promise.reject(error.message);
                }
            });
    }

    static kasusCountry(keyword) {
        return axios.get(`https://covid19.mathdro.id/api/countries/${keyword}`)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    return Promise.reject(error.status);
                } else if (error.request) {
                    return Promise.reject("Request error");
                } else {
                    return Promise.reject(error.message);
                }
            });
    }
}

export default KasusCorona;