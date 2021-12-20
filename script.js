// Database
let myLibrary = [
  {
    title: "Money, Master the Game",
    author: "Tony Robbins",
    read: true,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Rober Kiyosaki",
    read: true,
  },
  {
    title: `Harry Potter and the Philosopher's Stone `,
    author: "J.K. Rowling",
    read: false,
  },
];

//  Data Creation
function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

// Form Functions
function clearFields() {
  document.getElementById("titleInput").value = "";
  document.getElementById("authorInput").value = "";
  document.getElementById("readInput").value = "";
}

function addBook() {
  title = document.getElementById("titleInput").value;
  author = document.getElementById("authorInput").value;
  read = document.getElementById("readInput").value;
  read = read == "true" ? true : false;

  myLibrary.push(new Book(title, author, read));
  render();

  var collapseElementList = [].slice.call(
    document.querySelectorAll(".collapse")
  );
  var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl);
  });

  clearFields();
}
// List Functions
function readToogle(id) {
  let currStatus = myLibrary[id].read;
  myLibrary[id].read = !currStatus;
  render();
}

function rmvBook(id) {
  let book = document.getElementById(id);
  myLibrary.splice(book.id, 1);
  render();
}

// Render
function render() {
  bookContainer = document.getElementById("shelf");
  bookContainer.innerHTML = "";

  if (myLibrary.length > 0) {
    for (i = 0; i < myLibrary.length; i++) {
      // Book
      bookItem = document.createElement("li");
      bookItem.setAttribute("class", "card m-2 flex-fill");
      bookItem.setAttribute("id", i);
      // Book Cover
      bookCover = document.createElement("span");
      bookCover.setAttribute("class", "card-img-top placeholder p-5");
      bookCover.setAttribute("style", "height: 12rem;");
      bookItem.appendChild(bookCover);
      // Book Body
      bookBody = document.createElement("div");
      bookBody.setAttribute("class", "card-body");
      // Book Title
      bookTitle = document.createElement("h5");
      bookTitle.setAttribute("class", "card-title");
      bookTitle.setAttribute("class", "m-0 p-0");
      bookTitle.innerHTML = myLibrary[i].title;
      bookBody.appendChild(bookTitle);
      // Book Author
      bookAuthor = document.createElement("h6");
      bookAuthor.setAttribute("class", "card-subtitle text-muted m-0 p-0");
      bookAuthor.innerHTML = myLibrary[i].author;
      bookBody.appendChild(bookAuthor);
      // Book Actions
      bookActions = document.createElement("div");
      bookActions.setAttribute("class", "m-0 p-0 d-flex justify-content-end");
      // Read
      bookRead = document.createElement("button");
      bookRead.setAttribute("id", "status");
      if (myLibrary[i].read === true) {
        bookRead.setAttribute("class", "btn btn-success m-1");
        bookRead.innerHTML = "Read";
        bookActions.appendChild(bookRead);
      } else if (myLibrary[i].read === false) {
        bookRead.setAttribute("class", "btn btn-danger m-1");
        bookRead.innerHTML = "Unread";
        bookActions.appendChild(bookRead);
      }
      // Delete
      bookRmvContainer = document.createElement("button");
      bookRmvContainer.setAttribute("class", "btn btn-outline-primary m-1");
      bookRmvContainer.setAttribute("id", "rmv");
      bookRmv = document.createElement("i");
      bookRmv.setAttribute("class", "bi bi-trash");
      bookRmvContainer.appendChild(bookRmv);
      bookActions.appendChild(bookRmvContainer);
      bookBody.appendChild(bookActions);
      bookItem.appendChild(bookBody);

      bookContainer.appendChild(bookItem);
    }
  }
}
render();

// Listeners
document.addEventListener("click", function (e) {
  if (e.target.id === "rmv") {
    rmvBook(e.path[3].id);
  } else if (e.target.id === "status") {
    readToogle(e.path[3].id);
  }
  console.table(myLibrary);
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
});
