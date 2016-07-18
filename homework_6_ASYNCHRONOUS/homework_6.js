/*Rewrite using fetch API*/

function getBookById(id) {
  document.getElementById('book').textContent = 'Please wait. Book is loading';
  fetch('api/books/' + id)
    .then(function(response) { document.getElementById('book').textContent = response.name; })
    .catch(function() { document.getElementById('book').textContent = 'Error. Please refresh your browser'; })
}

function loadPage(bookId) {
  var book = document.getElementById('book');
  var author = document.getElementById('author');
  var similar = document.getElementById('similar');

  book.textContent = 'Please wait. Book is loading';
  author.textContent = 'Please wait. Author details are loading';
  similar.textContent = 'Please wait. Similar books are loading';

  fetch('api/books/' + id)
    .then(function(book){
      book.textContent = book.name;
      return fetch('api/autors' + book.authorId);
    })
    .then(function(author) {
      author.textContent = author.name;
      return Promise.all(author.books.map(function(book) {
        return fetch('api/bestsellers/similar/' + book.id);
      }))
    })
    .then(function(similarBook) {
      var similarBooksLoad = 0;
      var similarBooksAmount = similarBook.length;

      similarBooks.forEach(function(similar){
        similar.appendChild(document.createElement('p')).textContent = similar;
        similarBooksLoaded += 1;
      });
      return similarBooksLoaded === similarBooksAmount;
    })
    .then(function () { alert('Horray everything loaded'); })
    .catch(function () { alert( 'Error. Please refresh your browser'); })
}