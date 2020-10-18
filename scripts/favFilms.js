"use strict";

let collection = [
    'https://store.steampowered.com/app/105600/', // TERRARIA' // BECAUSE TERRARIA DESERVES DOUBLE THE CHANCE
    'https://www.imdb.com/title/tt0133093/', // MATRIX
    'https://www.imdb.com/title/tt0110912/', // PULP FICTION
    'https://www.imdb.com/title/tt0072684/', // BARRY LYNDON
    'https://store.steampowered.com/app/105600/', // TERRARIA
    'https://www.imdb.com/title/tt0083658/', // BLADE RUNNER
    'https://www.imdb.com/title/tt4508902/', // OP MAN
    'https://www.imdb.com/title/tt0903747/', // BREAKING BAD
    'https://www.imdb.com/title/tt2861424/', // RICK AND MORTY
    'https://www.imdb.com/title/tt0500092/', // SEL
    'https://store.steampowered.com/app/620/', // PORTAL 2
    'https://store.steampowered.com/app/253230/' // A HAT IN TIME
    'https://www.imdb.com/title/tt0213338/' // COWBOY BEBOP
    'https://www.imdb.com/title/tt0259711/' // VANILLA SKY
    'https://www.imdb.com/title/tt0139809/' // The 13. Floor

]

export default function openFavFilm() {
    let randomId = Math.floor(Math.random() * collection.length);

    window.open(collection[randomId], '_blank');
}