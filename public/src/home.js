function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  borrowed = []
  books.forEach((book) => {
    borrows = book.borrows
    if (borrows[0].returned == false) {
      borrowed.push(book)
    }
  });
  return borrowed.length
}

function sortByCountDescending(a, b) {
  return b.count - a.count;
}

function getMostCommonGenres(books) {
  const genreCounts = {};
  books.forEach((book) => {
    if (genreCounts[book.genre]) {
      genreCounts[book.genre]++;
    } else {
      genreCounts[book.genre] = 1;
    }
  });
  const genreArray = [];
  for (const name in genreCounts) {
    genreArray.push({name, count: genreCounts[name] });
  }
  genreArray.sort(sortByCountDescending);
  const sortedGenres = genreArray.slice(0, 5);
  return sortedGenres
}

function getMostPopularBooks(books) {
  const popularBooks = {};
  books.forEach((book) => {
    popularBooks[book.title] = book.borrows.length;
  });
  const popularArray = [];
  for (const name in popularBooks) {
    popularArray.push({name, count: popularBooks[name] });
  }
  popularArray.sort(sortByCountDescending);
  const sortedPopular = popularArray.slice(0, 5);
  return sortedPopular
}

function getMostPopularAuthors(books, authors) {
  const authorPopularity = authors.map((author) => {
    const authorBooks = books.filter((book) => book.authorId === author.id);
    const totalBorrows = authorBooks.reduce((acc, book) => acc + book.borrows.length, 0);
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: totalBorrows,
    };
  });

  const sortedPopularAuthors = authorPopularity
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return sortedPopularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
