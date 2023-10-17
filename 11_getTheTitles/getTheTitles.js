const getTheTitles = function(books) {
    let booksTitle = [];
    for(let i = 0; i < books.length; i++) {
        booksTitle.push(books[i].title);
    }
    return booksTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
