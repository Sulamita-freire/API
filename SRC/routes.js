// criando rota
const { Router } = require('express');

//inicializando
const routes = Router();

const posts = [];

function getPostsById(id) {
    return posts.findIndex(post => post.id === id);
}

routes.get('/posts', (request, response) =>{
    response.json(posts);
});

routes.post('/posts', (request, response) => {
    //atualizar oq foi feito no insomnia
    const newPost = request.body;

    //adicionar item no array
    posts.push(newPost);

    return response.json(newPost)

});

routes.get('/posts/:id', (request, response) => {
    const { id } = request.params;

    const postIndex = getPostsById(id);
    const post = posts[postIndex];

    response.json(post)
});

module.exports = routes;
