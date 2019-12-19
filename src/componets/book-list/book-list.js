import React,{useEffect} from 'react';
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {getBooks} from "../../services/book-service";
import {booksLoaded, booksRequested} from "../../actions";

import './book-list.css'
import Spinner from "../spinner";

const BookList = ({books, booksLoaded, loading, booksRequested}) => {

    useEffect(() => {
        booksRequested();
        getBooks()
            .then((doc) => booksLoaded(doc))
            .catch(err => {
                console.error(err.message);
              });
    }, [booksLoaded, booksRequested]);

    if (loading) {
        return <Spinner/>
    }

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

const mapStateToProps = ({books, loading}) => {
    return {books, loading}
};

const mapDispatchToProps = {
    booksLoaded, booksRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);