import React from "react";
import UserBookshelf from "../components/UserBookshelf";
import { useContext } from "react";
import BookFavsContext from "../store/bookshelf-fav-context";

function BookshelfPage() {
    const booksFavsCtx = useContext(BookFavsContext);
    let bookAmount = booksFavsCtx.favorites.length;
    let noBooksMessage = <h2 className="mt-5 text-center text-decoration-underline">You have no books added to your shelf! Go search for some books to add!</h2>;

    const headingStyle = {
        textShadow: ".5px .5px 1px black",
    };
    return (
        <div>
            <h1 style={headingStyle}>Your Bookshelf</h1>
            {bookAmount === 0 ? noBooksMessage : null}
            <UserBookshelf />
        </div>
    );
}

export default BookshelfPage;
