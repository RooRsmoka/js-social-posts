// MILESTONE 1
// Creo un array di oggetti che rappresentano i post, ogni oggetto avrà le informazioni 
// necessarie per la stampa del relativo post.
const posts = [
    {
        authorName: 'Phil mangione',
        authorImg: 'Profile-Pic-1.jpg',
        postImg: 'Post-Image-1.jpg',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postId: 1,
        date: '05-19-2021',
        likes: 183,
    },
    {
        authorName: 'John Wayne',
        authorImg: 'Profile-Pic-2.jpg',
        postImg: 'Post-Image-2.jpg',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postId: 2,
        date: '12-09-2017',
        likes: 49,
    },
    {
        authorName: 'Mark Philips',
        authorImg: 'Profile-Pic-3.jpg',
        postImg: 'Post-Image-3.jpg',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postId: 3,
        date: '06-22-2018',
        likes: 68,
    },
    {
        authorName: 'Sarah Connor',
        authorImg: 'Profile-Pic-4.jpg',
        postImg: 'Post-Image-4.jpg',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postId: 4,
        date: '01-01-2019',
        likes: 132,
    },
    {
        authorName: 'Steve Jobless',
        authorImg: 'Profile-Pic-5.jpg',
        postImg: 'Post-Image-5.jpg',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postId: 5,
        date: '08-15-2020',   
        likes: 530,
    },
];

// MILESTONE 2
// Seleziono il container html dove stampare i post.
const postContainer = document.getElementById('container');
// Creo una funzione che utilizzo per la creazione della card dei post. 
function printPost(container, postList) {
    // Ciclo for per iterare nel array di oggetti e inserire le informazioni dei vari post nel html.   
    for (let i = 0; i < postList.length; i++) {
        const post = postList[i];
        container.innerHTML += `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="img/${posts[i].authorImg}" alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${posts[i].authorName}</div>
                            <div class="post-meta__time">${posts[i].date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${posts[i].postText}</div>
                <div class="post__image">
                    <img src="img/${posts[i].postImg}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>`;
    }
}
// Richiamo la funzione per stampare in pagina tutti i post.
printPost(postContainer, posts);