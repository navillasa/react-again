// step 1
/* <main>
  <h1>Bookstore</h1>
  <ul>
    <li>Books are coming soon!</li>
  </ul>
  <footer>copyright 2018</footer>
</main> */

// let element = document.createElement('h1');
// element.textContent = 'Bookstore';

// let title = React.createElement('h1', null, 'Bookstore');
// let copyright = React.createElement('footer', null, 'copyright 2018');
// let bookRow = React.createElement('li', null, 'books are coming true');
// let bookList = React.createElement('ul', null, { className: 'book-list' }, bookRow);
// let container = React.createElement('div', null, [
//   title,
//   bookList,
//   copyright,
// ]);

// ReactDOM.render(
//   container,
//   document.querySelector('.react-root')
// );

const books = [
  { title: 'talo to seedies', author: 'chardles ickens' },
  { title: 'warm piece', author: 'leto stoy' },
  { title: 'accounta mona krista', author: 'xander ma' },
];

let bookRows = books;

let h = React.createElement;

let container = h('div', null, [
  h('h1', null, 'Bookstore'),
  h('ul', { className: 'book-list' },
    books.map(book =>
      h('li', null, book.title + ' by ' + book.author)
    ),
    h('li', null, 'books coming spoon')
  ),
  h('footer', null, 'copyright 2018'),
]);

// let title = React.createElement('h1', null, 'Bookstore');
// let copyright = React.createElement('footer', null, 'Copyright 2018');
// let bookRow = React.createElement('li', null, 'Books are coming soon!');
// let bookList = React.createElement('ul', { className: 'book-list' }, bookRow);
// let container = React.createElement('div', null, [
//   title,
//   bookList,
//   copyright,
// ]);

ReactDOM.render(
  container,
  document.querySelector('.react-root')
);