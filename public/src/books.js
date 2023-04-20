function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let currentlyBorrowed = [];
  let returned = [];
  books.forEach((book) => {
    if (book.borrows[0].returned) {
      returned.push(book);
    } else {
      currentlyBorrowed.push(book);
    }
  });
  return [currentlyBorrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  const borrowers = [];

  for (let i = 0; i < book.borrows.length && borrowers.length < 10; i++) {
    const borrow = book.borrows[i];
    const account = accounts.find((account) => account.id === borrow.id);
    if (account) {
      account.returned = borrow.returned;
      borrowers.push(account);
    }
  }
return borrowers
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
