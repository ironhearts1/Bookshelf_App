import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useContext } from "react";
import BookshelfPage from "./pages/Bookshelf";
import FavoritesPage from "./pages/Favorites";
import FindbooksPage from "./pages/Findbooks";
import LoginPage from "./pages/Login";
import BookFavsContext from "./store/bookshelf-fav-context";

function App() {
    const bookCountBadge = {
        backgroundColor: "blue",
        color: "white",
        borderRadius: "12px",
        padding: ".25rem .5rem",
        marginLeft: "0.5rem",
    };
    const bookFavsCtx = useContext(BookFavsContext);
    let currentUserName = bookFavsCtx.username;
    const usernameInputted = <p className="text-end">You are logged in as {currentUserName}</p>;
    const usernameNotInputted = <h2 className="mt-5 text-danger">Please Login!</h2>;
    let bookAmount = bookFavsCtx.bookshelf.length;
    let favAmount = bookFavsCtx.favorites.length;
    let bookAmountSpan = <span style={bookCountBadge}>{bookAmount}</span>;
    let favAmountSpan = <span style={bookCountBadge}>{favAmount}</span>;

    return (
        <div className="container">
            <nav className="row justify-content-center text-center mt-3 mb-3  border-bottom border-primary">
                <Link className="col-3 text-reset fs-5 text-decoration-none mb-1" to="/">
                    Login
                </Link>
                <Link className="col-3 text-reset fs-5 text-decoration-none mb-1" to="/findbooks">
                    Find Books
                </Link>
                <Link className="col-3 text-reset fs-5 text-decoration-none mb-1" to="/bookshelf">
                    Your Bookshelf
                    {bookAmount > 0 ? bookAmountSpan : null}
                </Link>
                <Link className="col-3 text-reset fs-5 text-decoration-none mb-1" to="/favorites">
                    Your Favorites
                    {favAmount > 0 ? favAmountSpan : null}
                </Link>
                {currentUserName == "" ? usernameNotInputted : null}
            </nav>
            {currentUserName != "" ? usernameInputted : null}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/findbooks" element={<FindbooksPage />} />
                <Route path="/bookshelf" element={<BookshelfPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </div>
    );
}

export default App;
