class Slider {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.renderPosition = params.renderPosition;

        this.DOM = null;

        console.log(this);
        this.init();
    }

    init() {
        // TODO: patikrina ar egzistuoja nurodytas selector
        if (!this.isValidSelector()) {
            return;
        }
        this.willItOverwriteContent();

        // TODO: jei taip, tai generuoja turini
        this.render();

        // TODO: prideda eventListener
    }

    willItOverwriteContent() {
        if (this.renderPosition === undefined) {
            if (this.DOM.innerHTML) {
                console.warn('Rendering Slider overwritten your content.');
            }
        } else {
            switch (this.renderPosition) {
                case 'beforebegin':
                case 'afterbegin':
                case 'beforeend':
                case 'afterend':
                    // gera verte
                    break;

                default:
                    // bloga verte
                    console.warn('Possible options for "renderPosition" is: beforebegin, afterbegin, beforeend, afterend.\n\nMore info: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML');
                    break;
            }
        }
    }

    isValidSelector() {
        if (this.selector === undefined) {
            console.error('Slider has to have a privided selector (where to render it).');
            return false;
        }
        if (typeof this.selector !== 'string') {
            console.error('Slider selector have to be a string type.');
            return false;
        }
        if (this.selector.length === 0) {
            console.error('Slider selector is empty string');
            return false;
        }
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('Cound not find HTML element by given selector.');
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        const HTML = `<div class="slider">
                            <div class="list">SLIDER ITEM LIST</div>
                            <div class="controls">......</div>
                        </div>`;
        if (this.renderPosition === undefined) {
            this.DOM.innerHTML = HTML;
        } else {
            this.DOM.insertAdjacentHTML(this.renderPosition, HTML);
        }
    }
}

export { Slider };