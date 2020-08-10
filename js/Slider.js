import { ajax } from './ajax.js';

class Slider {
    constructor(params) {
        this.selector = params.selector;
        this.dataURL = params.dataURL;
        this.renderPosition = params.renderPosition;
        this.imgPath = params.imgPath;
        this.maxItemsOnMobile = 9;

        this.data = null;
        this.DOM = null;
        this.cardList = null;
        this.controls = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.willItOverwriteContent();

        const getData = async () => {
            this.data = await ajax(this.dataURL, this.render);
            this.render();
        }

        getData();

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
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('Cound not find HTML element by given selector.');
            return false;
        }
        return true;
    }

    render() {
        this.cardList = new CardList({
            data: this.data,
            imgPath: this.imgPath
        });
        this.controls = new Controls();

        const HTML = `<div class="slider" style="--items-count: ${this.data.length};">
                            ${this.cardList.render()}
                            ${this.controls.render()}
                        </div>`;
        if (this.renderPosition === undefined) {
            this.DOM.innerHTML = HTML;
        } else {
            this.DOM.insertAdjacentHTML(this.renderPosition, HTML);
        }
    }
}

class CardList {
    constructor(params) {
        this.data = params.data;
        this.imgPath = params.imgPath;
    }

    render() {
        let HTML = '';
        for (const item of this.data) {
            HTML += `<div class="item">
                        <img src="${this.imgPath + item.photo}" alt="${item.title} list image">
                        <div class="details">
                            <div class="category">${item.category}</div>
                            <h3 class="title">${item.title}</h3>
                            <a href="${item.link}" class="btn read-more">Read more</a>
                        </div>
                    </div>`;
        }
        return `<div class="list">
                    ${HTML}
                </div>`;
    }
}

class Controls {
    constructor(params) {
        this.currentlyActive = 0;
        // console.log(params);
    }

    render() {
        return '<div class="controls">......</div>';
    }

    showNext(step = 1) {
        this.currentlyActive += step;
    }

    showPrevious(step = 1) {
        this.currentlyActive -= step;
    }
}

export { Slider };