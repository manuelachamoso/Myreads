import {useState, useEffect} from 'react'
import Modal from './Modal'
import {get} from '../BooksAPI'

const Book = ({book, changeShelf, currentShelf, isSearch}) => {
    currentShelf = currentShelf === undefined ? 'none' : currentShelf
    const [shelf, setShelf] = useState(currentShelf); 
    const [toggle, setToggle] = useState("")

    const updateShelf = (e) => {
        setShelf(e.target.value)
        changeShelf(book, e.target.value)
    }

    useEffect(()=> {
        get(book.id).then(book => setShelf(book.shelf))
    })

    const icon = shelf !== 'none' && isSearch;

    return (
        <div className="book">
              {icon && <div className="check-icon">
                          <img
                            src={require("../icons/check.png")}
                            alt="check-error"
                          />
                        </div>}
             <div className="book-top">
                
                <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${book.imageLinks ? book.imageLinks.smallThumbnail : ""})`,
                }}></div>
                <div className="book-shelf-changer">
                    <select onChange={updateShelf}  value={shelf}>
                    <option value="" hidden>Move to</option>
                    <option value="currentlyReading">
                    Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
            <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors !== undefined ? book.authors.join(', ') : ''}</div> 
            <button className='read-more'onClick={() => setToggle(book.id)}> 
            Read more</button>
            <div>
            {toggle === book.id ? (
              <>
                <Modal setToggle={setToggle} description={book.description} title={book.title} image={book.imageLinks.smallThumbnail}/>
                
              </>
            ) : null}
        </div>
    </div>
    )}

export default Book