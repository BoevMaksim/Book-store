import React,{useEffect} from 'react';
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {getBooks} from "../../services/book-service";
import {booksLoaded, booksRequested, booksError} from "../../actions";

import './book-list.css'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, booksLoaded,
                    loading, booksRequested,
                    booksError, error }) => {

    useEffect(() => {
        booksRequested();
        getBooks()
            .then((doc) => booksLoaded(doc))
            .catch(err => {
                booksError(err.message);
              });
    }, [booksLoaded, booksRequested, booksError]);

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <ErrorIndicator/>
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

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);