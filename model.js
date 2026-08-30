class Model {
    constructor({onMemesChanged}) {
        this.memes = [];
        // this.isError = true;
        this.onMemesChanged = onMemesChanged;
    }

    addMemes(url, name) {
        this.memes.push({
            url,
            name
        });
        
        this.onMemesChanged(this.memes);
    }

    setMemes(memes) {
        this.memes = memes;

        this.onMemesChanged(this.memes);
    }

    // _isMemesValid() {

    // }
}