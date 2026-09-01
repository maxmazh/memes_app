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

    handleModelMemesChanged = (meme) => {
        this.view.render(meme);
    }

    handleViewNewMemes = (name) => {
        this.model.getMemes(name);
    }
}