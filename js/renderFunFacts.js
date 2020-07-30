function renderFunFacts( selector, data ) {
    const DOM = document.querySelector( selector );

    let HTML = '';
    const size = data.length;
    for ( let i=0; i<size; i++ ) {
        HTML += `<div class="fact col-12 col-md-6 col-lg-4">
                    <p class="number">${data[i].number}</p>
                    <p class="description">${data[i].description}</p>
                </div>`;
    }

    return DOM.innerHTML = HTML;
}

function animateFunFacts( maxSeconds ) {
    const allFacts = document.querySelectorAll('.fact-list > .fact > .number');
    const size = allFacts.length;

    if ( maxSeconds < 1 ) {
        throw 'ERROR: mazu maziausiai animacijai reikia 1 sekundes!';
    }

    for ( let i=0; i<size; i++ ) {
        const number = parseInt( allFacts[i].innerText ),
            totalTime = maxSeconds % 1 === 0 ? maxSeconds * 1000 : Math.round(maxSeconds) * 1000,
            fps = 30,
            timegap = 1000 / fps,                   // galimos tik sveikos sekundes
            totalFrames = (totalTime / 1000 * fps);
        let currentNumber = 0,
            currentFrame = 0;

        allFacts[i].innerText = currentNumber;
        
        const timer = setInterval( () => {
            currentFrame++;
            currentNumber += number / totalFrames;
            
            allFacts[i].innerText = Math.round( currentNumber );
            if ( currentFrame >= totalFrames ) {
                clearInterval( timer );
            }
        }, timegap );
    }

    return;
}

export { renderFunFacts, animateFunFacts };