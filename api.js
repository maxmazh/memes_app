class API {
    constructor() {
        this.baseURL = 'https://api.imgflip.com/';
    }

    fetchMemes() {
        return fetch(`${this.baseURL}/get_memes`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    return data.data.memes;
                } else {
                    throw new Error('API ошибка');
                }
            })
            
            .catch (error => {
                console.error('Ошибка загрузки мемов', error);
                return [];
            });
    }
}