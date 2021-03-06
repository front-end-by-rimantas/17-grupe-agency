function renderServices(selector, data) {
    // validation

    // logic
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;

    for (let i = 0; i < size; i++) {
        const service = data[i];
        HTML += `<div class="service">
                    ${service.icon}
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }

    return DOM.innerHTML = HTML;
}

export { renderServices };