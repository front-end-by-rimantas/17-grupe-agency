function ajax(callback, callbackParams) {
    const URL = 'https://front-end-by-rimantas.github.io/17-grupe-agency/data/services.json';

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(callbackParams, JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
}

export { ajax };