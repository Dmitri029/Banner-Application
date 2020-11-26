"use strict";

(() => {
    const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];
    const WIDTH_AND_HEIGHT = 160;

    const imageChooserElement = document.querySelector(`.banner-form__image`);
    const previewElement = document.querySelector(`.banner-preview__wrap`);
    const examplePreviewElement = document.querySelector(`.banner-preview__example`);

    const onImageChooserChange = () => {
        const image = imageChooserElement.files[0];
        const imageName = image.name.toLowerCase();

        const matches = FILE_TYPES.some((type) => {
            return imageName.endsWith(type);
        });

        if (matches) {
            const reader = new FileReader();

            reader.addEventListener(`load`, () => {
                if (examplePreviewElement) {
                    examplePreviewElement.remove();
                }

                if (previewElement.firstChild.nodeType === 1) {
                    previewElement.firstChild.remove();
                }

                const previewImageElement = document.createElement(`img`);
                previewImageElement.classList.add(`banner-preview__image`);
                previewImageElement.src = reader.result;
                previewImageElement.width = WIDTH_AND_HEIGHT;
                previewImageElement.height = WIDTH_AND_HEIGHT;

                previewElement.prepend(previewImageElement);
            });

            reader.readAsDataURL(image);
        }
    };

    imageChooserElement.addEventListener(`change`, onImageChooserChange);

    const textFormElement = document.querySelector(`.banner-form__text`);
    const textPreviewElement = document.querySelector(`.banner-preview__text`);

    const onTextFormInput = () => {
        textPreviewElement.textContent = textFormElement.value;
    };

    textFormElement.addEventListener(`input`, onTextFormInput);

    const colorFormElement = document.querySelector(`.banner-form__color`);
    const colorPreviewElement = document.querySelector(`.banner-preview__wrap`);

    const onColorFormChange = () => {
        colorPreviewElement.style.backgroundColor = colorFormElement.value;
    };

    colorFormElement.addEventListener(`input`, onColorFormChange);

    const linkFormElement = document.querySelector(`.banner-form__link`);
    const linkPreviewElement = document.querySelector(`.banner-preview__link`);

    const isCorrectLink = (input) => {
        const value = input.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return value !== null;
    };

    const onLinkFormChange = () => {
        if (isCorrectLink(linkFormElement.value)) {
            linkPreviewElement.href = linkFormElement.value;
        }
    };

    linkFormElement.addEventListener(`change`, onLinkFormChange);
})();


