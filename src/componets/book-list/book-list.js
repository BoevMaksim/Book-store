import React,{useEffect} from 'react';
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {getBooks} from "../../services/book-service";
import {booksLoaded} from "../../actions";

import './book-list.css'

const BookList = ({books, booksLoaded}) => {

    useEffect(() => {
        getBooks()
            .then((doc) => booksLoaded(doc))
            .catch(err => {
                console.error(err.message);
              });
    }, [booksLoaded]);

return (
        <ul>
            {
                books.map((book) => {
                    return (
                        <BookListItem book={book} key={book.id}/>
                    )
                })
            }
        </ul>
    );
};

const mapStateToProps = ({books}) => {
    return {books}
};

const mapDispatchToProps = {
    booksLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);