import {Link} from 'react-router-dom'
import {search} from '../BooksAPI'
import { useState } from 'react'
import Book from '../components/Book'

const SearchPage = ({changeShelf}) => {
  const [query, setQuery] = useState('')
  const [newBook, setNewBook] = useState([])

  const handleChange = async (e) => {
    try {
      const query = e.target.value;
      setQuery(query)
      if(query.trim()){
      
      const results = await search(query)
      setNewBook(results)
    }
    } catch (error) {
      console.log('error')
    }
  }

  const print = newBook.length >= 0 && query !== ''

   return (
    <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={handleChange}
                value={query}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <li>{print ? newBook.map(book => (
                  <Book key={book.id}  book={book} changeShelf={changeShelf}/>)): (
                    ''
                  )}
              </li>
            </ol>
            <div>
            </div>
          </div>
        </div>
  )
}

export default SearchPage;