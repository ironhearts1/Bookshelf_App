import React from "react";
import SearchedBook from "./SearchedBook";

function SearchedBookList(props) {
    if (props.searchData !== undefined) {
        console.log(props.searchData);
    }
    if (props.searchData) {
        return (
            <div className="container">
                <div className="row row-cols-auto justify-content-center">
                    {props.searchData.map((book) => (
                        <SearchedBook key={book.id} id={book.id} data={book} className="col" />
                    ))}
                </div>
            </div>
        );
    }
}
export default SearchedBookList;
