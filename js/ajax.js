function ajax(dataFileURL) {
    return new Promise(function (resolve, reject) {
        const URL = 'https://front-end-by-rimantas.github.io/17-grupe-agency/data/' + dataFileURL;

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", URL, true);

        xhttp.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.responseText));
            } else {
                reject({
                    status: this.status,
                    statusText: xhttp.statusText
                });
            }
        };

        xhttp.onerror = function () {
            reject({
                status: this.status,
                statusText: xhttp.statusText
            });
        };

        xhttp.send();
    });
}

export { ajax };