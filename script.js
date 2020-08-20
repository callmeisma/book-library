let myLibrary = [
    {
        title:'The Hobbit',
        author: 'J.R.R.Tolkien',
        pages: 295,
        read: false,
    },
    {
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        pages: 336,
        read: true,
    },{
        title: 'Money, Master the Game',
        author: 'Tony Robbins',
        pages: 688,
        read: true,
    }];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     if (this.read === 'Yes') {
    //         return `${title} by ${author}, ${pages} pages, read.`;
    //     } else {
    //         return `${title} by ${author}, ${pages} pages, not read yet.`;
    //     }
    // }
}

function addBooktoLibrary() {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").checked;

    switch (true) {
        case (title === ''):
            alert('Please add a Title');
            break;
        case (author === ''):
            alert('Please add an Author');
            break;
        case (pages === ''):
            alert('Please add amount of pages');
            break;
        default:
            myLibrary.push(new Book(title, author, pages, read));
            cardMaker();
            clearFields();
            document.getElementById('collap').style.display = 'none';
    }
}

function clearFields() {
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("read").checked = '';
}

function readToogle(item, status) {
    myLibrary[item].read = status;
}

function rmvBookfromLibrary(id) {
    book = document.getElementById(id);
    shelf = document.getElementById('shelf');
    shelf.removeChild(book);
}

function cardMaker () {
    length = myLibrary.length - 1;
    
    bookContainer = document.getElementById('shelf');
    bookItem = document.createElement('div');

    bookItem.setAttribute('class', 'bookItem');
    bookItem.setAttribute('id', length);

    bookTitle = document.createElement('h3');
    bookTitle.innerHTML = myLibrary[length].title;
    bookItem.appendChild(bookTitle);

    bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = myLibrary[length].author;
    bookItem.appendChild(bookAuthor);

    bookPages = document.createElement('p');
    bookPages.innerHTML = myLibrary[length].pages;
    bookItem.appendChild(bookPages);

    bookRead = document.createElement('p');
    bookRead.innerHTML = 'Read';
    bookItem.appendChild(bookRead);

    bookReadStat = document.createElement('input');
    bookReadStat.setAttribute('type', 'checkbox');
    bookReadStat.setAttribute('id', 'checkbox');
    if (myLibrary[length].read === true) {
        bookRead.setAttribute('checked','');
        bookItem.appendChild(bookReadStat);
    } else {
        bookItem.appendChild(bookReadStat);
    }

    bookRmv = document.createElement('button');
    bookRmv.setAttribute('id', 'rmv');
    bookRmv.innerHTML = 'Remove';
    bookItem.appendChild(bookRmv);


    bookContainer.appendChild(bookItem);
}

function render() {
    if (myLibrary.length > 0) {
        for (i = 0; i < myLibrary.length; i++) {
            bookContainer = document.getElementById('shelf');
            bookItem = document.createElement('div');

            bookItem.setAttribute('class', 'bookItem');
            bookItem.setAttribute('id', i);

            bookTitle = document.createElement('h3');
            bookTitle.innerHTML = myLibrary[i].title;
            bookItem.appendChild(bookTitle);

            bookAuthor = document.createElement('p');
            bookAuthor.innerHTML = myLibrary[i].author;
            bookItem.appendChild(bookAuthor);

            bookPages = document.createElement('p');
            bookPages.innerHTML = myLibrary[i].pages;
            bookItem.appendChild(bookPages);

            bookRead = document.createElement('p');
            bookRead.innerHTML = 'Read';
            bookItem.appendChild(bookRead);

            bookReadStat = document.createElement('input');
            bookReadStat.setAttribute('type', 'checkbox');
            bookReadStat.setAttribute('id', 'checkbox');
            if (myLibrary[i].read === true) {
                bookReadStat.setAttribute('checked','');
                bookItem.appendChild(bookReadStat);
            } else {
                bookItem.appendChild(bookReadStat);
            }
            
            bookRmv = document.createElement('button');
            bookRmv.setAttribute('id', 'rmv');
            bookRmv.innerHTML = 'Remove';
            bookItem.appendChild(bookRmv);

            bookContainer.appendChild(bookItem);
        }
    }
}   

function collapse() {
    form = document.getElementById('collap');
    if (form.style.display === 'none') {
        form.setAttribute('style', 'display: block')
    } else if (form.style.display === 'block') {
        form.setAttribute('style', 'display: none')
    }
}

render();

document.addEventListener('click', function(e) {
    if (e.target.id === 'add') {
        collapse();
    } else if (e.target.id === 'rmv') {
        rmvBookfromLibrary(e.path[1].id);
    } else if (e.target.checked != undefined && e.target.id === 'checkbox') {
        readToogle(e.target.parentNode.id, e.target.checked);
    }
})