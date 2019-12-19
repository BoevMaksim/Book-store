import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./componets/error-boudry";

import App from "./app";
//import BookstoreService from "./services/book-service";
import {BookstoreServiceProvider} from "./componets/bookstore-service-context";
import store from "./store/store";
import ShopHeader from "./componets/shop-header";
import ShoppingCartTable from "./componets/shopping-cart-tabel";

//const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={[]}>
                <Router>
                    <ShopHeader/>
                    <App/>
                    <ShoppingCartTable/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));