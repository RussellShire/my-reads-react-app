import React from 'react';

function ShelfChanger({bookId, onSelect}) {
    
    const handleChange = (e) => {
        const target = e.target.value
        onSelect(target, bookId)
    }
    
    return (
        <div className="book-shelf-changer">
            <select onChange={handleChange} value='move'>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                {/* <option value="none">None</option> */}
            </select>
        </div>
    )
}

export default ShelfChanger;
