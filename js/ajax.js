function ajax(dataFileURL, callback) {
    const URL = 'https://front-end-by-rimantas.github.io/17-grupe-agency/data/' + dataFileURL;

    const xhttp = new XMLHttpRequest();

    console.log('REQUESTING DATA:');
    console.log(URL);
    console.log(callback);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
}

export { ajax };