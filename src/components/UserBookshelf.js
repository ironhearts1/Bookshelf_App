import React from "react";
import { useContext } from "react";
import BookFavsContext from "../store/bookshelf-fav-context";
import BookshelfBook from "./BookshelfBook";

function UserBookshelf(props) {
    const bookFavsCtx = useContext(BookFavsContext);

    return (
        <div className="container">
            <div className="row row-cols-auto justify-content-center">
                {bookFavsCtx.bookshelf.map((book) => (
                    <BookshelfBook key={book.id} id={book.id} data={book} className="col" />
                ))}
            </div>
        </div>
    );
}
export default UserBookshelf;
