class Controller {
    constructor() {
        this.model = new Model({
            onMemesChanged: this.handleModelMemesChanged
        });
        this.view = new View({
            onNewMeme: this.handleViewNewMemes
        });
        this.api = new API();
    }

    init() {
        this.api.fetchMemes()
            .then(memes => {
                this.model.setMemes(memes);
            })
    }

    handleModelMemesChanged = (memes) => {
        this.view.render(memes);
    }

    handleViewNewMemes = (url, name) => {
        this.model.addMemes(url, name);
    }
}