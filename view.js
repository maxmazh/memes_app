class View {
    constructor({onNewMeme}) {
        this.imgMemes = document.querySelector('#img_memes');
        this.nameMemes = document.querySelector('#name_memes');
        this.inputNode = document.querySelector('#input_node');
        this.btnNode = document.querySelector('#add_btn');

        this.onNewMeme = onNewMeme;

        this.btnNode.addEventListener('click', this._handleBtnClick);
    }

    render(oneMeme) {
        if (!oneMeme) {
            this.imgMemes.innerHTML = `<p>Мем не найден</p>`;
            return;
        }
            this.imgMemes.innerHTML = `
            <div>
                <img src="${oneMeme.url}">
                <p>${oneMeme.name}</p>
            </div>`;
    }

    _handleBtnClick = () => {
        const name = this.inputNode.value.trim();

        if (!name) {
            return;
        }

        this.onNewMeme(name);
    }
}