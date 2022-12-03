import {useState} from 'react'
import Modal from './Modal'

const Book = ({book, changeShelf}) => {
    const [toggle, setToggle] = useState("")

    const updateShelf = (e) => {
        changeShelf(book, e.target.value)
    }

    return (
        <div className="book">
             <div className="book-top">
                <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${book.imageLinks ? book.imageLinks.smallThumbnail : ""})`,
                }}></div>
                <div className="book-shelf-changer" value={book.shelf}>
                    <select onChange={updateShelf}>
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