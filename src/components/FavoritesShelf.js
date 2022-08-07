import React from "react";
import { useContext } from "react";
import BookFavsContext from "../store/bookshelf-fav-context";
import FavoriteBook from "./FavoriteBook";
function FavoritesShelf() {
    const bookFavsCtx = useContext(BookFavsContext);

    return (
        <div className="container">
            <div className="row row-cols-auto justify-content-center">
                {bookFavsCtx.favorites.map((book) => (
                    <FavoriteBook key={book.id} id={book.id} data={book} className="col" />
                ))}
            </div>
        </div>
    );
}
export default FavoritesShelf;
