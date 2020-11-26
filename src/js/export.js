"use strict";

(() => {
    const exportPngButtonElement = document.querySelector(`.banner-export__png`);
    const exportHtmlButtonElement = document.querySelector(`.banner-export__html`);
    const exportJsonButtonElement = document.querySelector(`.banner-export__json`);
    const bannerPreviewElement = document.querySelector(`.banner-preview__wrap`);
    const bannerPreviewLinkElement = document.querySelector(`.banner-preview`);

    const onPngButtonPress = () => {
        domtoimage.toBlob(bannerPreviewElement).then((blob) => {
            window.saveAs(blob, `preview.png`)
        })
    };

    exportPngButtonElement.addEventListener(`click`, onPngButtonPress);

    new ClipboardJS(exportHtmlButtonElement, {
        text: () => {
            return bannerPreviewLinkElement.innerHTML;
        }
    });


    const createJson = () => {
        const formElements = document.querySelectorAll(`.form-item`);
        const jsonObject = {};

        for (let i = 0; i < formElements.length; i++) {
            let currentElement = formElements[i];
            if (currentElement.type === `file`) {
                (currentElement.files[0]) ?
                    jsonObject[currentElement.name] = currentElement.files[0].name :
                    jsonObject[currentElement.name] = ``;
            } else {
                jsonObject[currentElement.name] = currentElement.value;
            }
        }
        return JSON.stringify(jsonObject);
    };

    new ClipboardJS(exportJsonButtonElement, {
        text: () => {
            return createJson();
        }
    });
})();
