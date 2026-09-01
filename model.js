class Model {
    constructor({onMemesChanged}) {
        this.memes = [];
        this.oneMeme = null;
        // this.isError = true;
        this.onMemesChanged = onMemesChanged;
    }

    addMemes(url, name) {
        this.memes.push({
            url,
            name
        });
        // this.onMemesChanged(this.memes);
    }

    setMemes(memes) {
        this.memes = memes;
        // this.onMemesChanged(this.memes);
    }

    getMemes(name) {
        const meme = this.memes.find(m => 
            m.name.toLowerCase() === name.toLowerCase()
        );

        this.oneMeme = meme;
        
        this.onMemesChanged(this.oneMeme);

        return meme;
    }

    // _isMemesValid() {

    // }
}