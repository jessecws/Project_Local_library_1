// Find an account from the accounts list from on ID

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

// Sort accounts by last name

function sortAccountsByLastName(accounts) {
 return accounts.sort((a, b) => {
   const lastNameA = a.name.last.toLowerCase();
   const lastNameB = b.name.last.toLowerCase();
   if (lastNameA < lastNameB) {
     return -1;
   }
   if (lastNameA > lastNameB) {
     return 1;
   }
   return 0;
 });
}

// For a single account get the total number of books borrowed

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach(book => {
    borrows = book.borrows;
    borrows.forEach(borrow => {
      if (borrow.id === account.id) {
        total ++
      }
    });
  });
  return total
}

// Looking at the list of books determine how many books is loaned to a
// specific account.

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const possessedBooks = [];
  books.forEach((book) => {
    if (book.borrows[0].id === accountId) {
      const author = authors.find((author) => author.id === book.authorId);
      book.author = author;
      possessedBooks.push(book);
    }
  });
  return possessedBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
