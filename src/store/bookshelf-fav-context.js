import React, { useEffect } from "react";
import { createContext, useState } from "react";

const BookFavsContext = createContext({
    username: "",
    bookshelf: [],
    favorites: [],
    addBookToShelf: (newBook) => {},
    removeBookFromShelf: (bookId) => {},
    bookIsOnShelf: (bookId) => {},
    addFavorite: (newFav) => {},
    removeFavorite: (bookId) => {},
    bookIsFavorite: (bookId) => {},
    inputUserName: (name) => {},
});

export function BookFavContextProvider(props) {
    const [userBookshelf, setUserBookshelf] = useState([]);
    const [userFavorites, setUserFavorites] = useState([]);
    const [userName, setUserName] = useState([]);

    useEffect(() => {
        const postData = {
            username: userName,
            bookshelf: userBookshelf,
            favorites: userFavorites,
        };

        fetch(`https://joshs-bookshelf-project-default-rtdb.firebaseio.com/${userName}.json`, {
            method: "PATCH",
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json",
            },
        });
    }, [userBookshelf, userFavorites]);
    useEffect(() => {
        console.log(userName);
        if (userName.length > 0) {
            fetch(`https://joshs-bookshelf-project-default-rtdb.firebaseio.com/${userName}.json`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    console.log(userName);
                    if (data !== null) {
                        setUserBookshelf(data.bookshelf);
                        setUserFavorites(data.favorites);
                    }
                });
        }
    }, [userName]);

    function inputUserNameHandler(name) {
        setUserName((prevUsername) => {
            return name;
        });
    }

    function addBookHandler(newBook) {
        setUserBookshelf((prevUserBookshelf) => {
            return prevUserBookshelf.concat(newBook);
        });
    }

    function removeBookHandler(bookId) {
        setUserBookshelf((prevUserBookshelf) => {
            return prevUserBookshelf.filter((book) => book.id !== bookId);
        });
    }

    function bookIsOnShelfHandler(bookId) {
        return userBookshelf.some((book) => book.id === bookId);
    }

    function addfavoriteHandler(newFav) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(newFav);
        });
    }

    function removefavoriteHandler(bookId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((book) => book.id !== bookId);
        });
    }

    function bookIsFavoriteHandler(bookId) {
        return userFavorites.some((book) => book.id === bookId);
    }

    const context = {
        username: userName,
        bookshelf: userBookshelf,
        favorites: userFavorites,
        addBookToShelf: addBookHandler,
        removeBookFromShelf: removeBookHandler,
        bookIsOnShelf: bookIsOnShelfHandler,
        addFavorite: addfavoriteHandler,
        removeFavorite: removefavoriteHandler,
        bookIsFavorite: bookIsFavoriteHandler,
        inputUserName: inputUserNameHandler,
    };

    return <BookFavsContext.Provider value={context}>{props.children}</BookFavsContext.Provider>;
}

export default BookFavsContext;
