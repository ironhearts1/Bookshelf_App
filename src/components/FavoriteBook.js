import React from "react";
import { useContext } from "react";
import BookFavsContext from "../store/bookshelf-fav-context";

function FavoriteBook(props) {
    const bookFavsCtx = useContext(BookFavsContext);

    //handlers

    function removeFavoriteHandler() {
        bookFavsCtx.removeFavorite(props.data.id);
    }

    //inline styles

    const cardWidthHeight = {
        maxWidth: "540px",
    };
    const fontSize = {
        fontSize: ".6em",
    };

    //editing data

    let newAuthors;
    if (props.data.authors === undefined) {
        newAuthors = "N/A";
    } else if (props.data.authors.length === 1) {
        newAuthors = props.data.authors[0];
    } else if (props.data.authors.length > 1) {
        newAuthors = props.data.authors.join(" & ");
    }

    let newDescription;
    if (props.data.description === undefined) {
        newDescription = "N/A";
    } else {
        newDescription = props.data.description;
    }

    let newGenres;
    if (props.data.genres === undefined) {
        newGenres = "N/A";
    } else if (props.data.genres.length === 1) {
        newGenres = props.data.genres[0];
    } else if (props.data.genres.length > 1) {
        newGenres = props.data.genres.join(" & ");
    }

    return (
        <div>
            <div className="card mb-3 mt-3 shadow border border-info" style={cardWidthHeight}>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={props.data.coverImage} className="img-fluid rounded-start mb-3" alt={props.data.title} />
                        <a className="ms-3" rel="noopener noreferrer" target="_blank" href={props.data.storeLink}>
                            Link to buy
                        </a>
                        <p className="card-text m-1">Page count: {props.data.pageCount === undefined ? "N/A" : props.data.pageCount}</p>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h4 className="card-title">
                                <strong>{props.data.title.length < 85 ? props.data.title : props.data.title.substring(0, 85) + "..."}</strong> <br />
                                <p style={fontSize}>{props.data.subtitle}</p>
                            </h4>
                            <p className="card-text">
                                <strong>Author: {newAuthors}</strong>
                            </p>
                            <p className="card-text">Description: {newDescription.length < 135 ? newDescription : newDescription.substring(0, 135) + "..."}</p>
                            <p className="card-text">Genres: {newGenres}</p>
                            <button className="btn btn-sm btn-primary me-2" onClick={removeFavoriteHandler}>
                                Remove From Favorites
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FavoriteBook;
