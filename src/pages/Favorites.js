import React from "react";
import FavoritesShelf from "../components/FavoritesShelf";
import { useContext } from "react";
import BookFavsContext from "../store/bookshelf-fav-context";

function FavoritesPage() {
    const booksFavsCtx = useContext(BookFavsContext);
    let favAmount = booksFavsCtx.favorites.length;
    let noFavsMessage = <h2 className="mt-5 text-center text-decoration-underline">You have no favorites selected! Try adding some!</h2>;
    const headingStyle = {
        textShadow: ".5px .5px 1px black",
    };
    return (
        <div>
            <h1 style={headingStyle}>Your selected favorites</h1>
            {favAmount === 0 ? noFavsMessage : null}
            <FavoritesShelf />
        </div>
    );
}

export default FavoritesPage;
