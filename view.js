class View {
    constructor({onNewMeme}) {
        this.imgMemes = document.querySelector('#img_memes');
        this.nameMemes = document.querySelector('#name_memes');

        this.onNewMeme = onNewMeme;
    }

    render(memes) {
        memes.forEach(memes => {
            this.imgMemes.innerHTML += `
            <div>
                <img src="${memes.url}">
                <p>${memes.name}</p>
            </div>`
        });
    }
}