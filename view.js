class View {
    constructor({onNewMeme}) {
        this.imgMemes = document.querySelector('#img_memes');
        this.nameMemes = document.querySelector('#name_memes');
        this.inputNode = document.querySelector('#input_node');
        this.btnNode = document.querySelector('#add_btn');
        this.settingSelectNode = document.querySelector('#mem_select');

        this.onNewMeme = onNewMeme;

        this.btnNode.addEventListener('click', this._handleBtnClick);
    }

    render(oneMeme) {
        if (!oneMeme) {
            this.imgMemes.innerHTML = `<p>Мем не найден</p>`;
            return;
        }

        this.imgMemes.src = oneMeme.url;
        this.nameMemes.textContent = oneMeme.name;
    }

    renderMemesSelect(memes) {
        memes.forEach((meme, index) => {
            const optionNode = document.createElement('option');
        
            optionNode.value = meme.name;
            optionNode.textContent = meme.name;

        if (index === 0) {
            optionNode.selected = true;
        }
        
            this.settingSelectNode.appendChild(optionNode);
        });
        
    }

    _handleBtnClick = () => {
        const name = this.inputNode.value.trim();

        if (!name) {
            return;
        }

        this.onNewMeme(name);
    }
}