import Book from './Book'

const Shelf = ({section, books, category, changeShelf}) => {
  const booksCategory = books.filter((book) => book.shelf === category)

  const error = booksCategory.length > 0

  return (
    <div className="bookshelf">
                <h2 className="bookshelf-title">{section}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {error ? booksCategory.map(book => (
                  <Book key={book.id}  book={book} changeShelf={changeShelf}/>)): (
                    <h4>There are no books on this shelf</h4>
                  )}
                    </ol>
              </div>
    </div>
  )
}

export default Shelf