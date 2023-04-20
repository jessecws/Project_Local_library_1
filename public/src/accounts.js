function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

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

// function getBooksPossessedByAccount(account, books, authors) {
//   let booksBorrowed = [];
//   let extendedBooksBorrowed = [];
//   books.forEach(book => {
//     const borrowers = book.borrows
//     borrowers.forEach(borrower => {
//       if (borrower.id === account.id) {
//         booksBorrowed.push(book)
//       }
//     });
//   });
//   booksBorrowed.forEach(borrowedBook => {
//     let bookAuthor = authors.find((author) => author.id === borrowedBook.authorId);
//     let template = {
//     id: borrowedBook.id,
//     title: borrowedBook.title,
//     genre: borrowedBook.genre,
//     authorId: borrowedBook.authorId,
//     author: bookAuthor,
//     borrows: borrowedBook.borrows,
//     };
//     extendedBooksBorrowed.push(template);
//   });
//   // console.log(extendedBooksBorrowed)
//   return extendedBooksBorrowed
// }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
