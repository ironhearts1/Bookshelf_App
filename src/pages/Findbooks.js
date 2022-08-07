import React from "react";
import { useRef, useState } from "react";
import SearchedBookList from "../components/SearchedBookList";

function FindbooksPage() {
    const bookInputRef = useRef();

    // states
    const [radio, setRadio] = useState("title");
    const [isLoading, setIsLoading] = useState(false);
    const [searchReturns, setSearchReturns] = useState();
    // || data.items[i].saleInfo.saleability === "NOT_FOR_SALE"
    function submitHandler(event) {
        setIsLoading(true);
        event.preventDefault();
        const enteredBook = bookInputRef.current.value;
        let url;
        if (radio === "title") {
            url = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${enteredBook}&printType=books&langRestrict=en&maxResults=40&key=AIzaSyCLisZljxlaUHdXHDYBHxyFdrBexqLGfJg`;
        } else if (radio === "author") {
            url = `https://www.googleapis.com/books/v1/volumes?q=+inauthor:${enteredBook}&printType=books&langRestrict=en&maxResults=40&key=AIzaSyCLisZljxlaUHdXHDYBHxyFdrBexqLGfJg`;
        }
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                console.log(data);
                const bookReturns = [];
                for (let i = 0; i < data.items.length; i++) {
                    if (data.items[i].volumeInfo.hasOwnProperty("imageLinks") === false) {
                        continue;
                    }
                    const singleReturn = {
                        id: data.items[i].id,
                        title: data.items[i].volumeInfo.title,
                        subtitle: data.items[i].volumeInfo.subtitle,
                        authors: data.items[i].volumeInfo.authors,
                        genres: data.items[i].volumeInfo.categories,
                        description: data.items[i].volumeInfo.description,
                        coverImage: data.items[i].volumeInfo.imageLinks.thumbnail,
                        storeLink: data.items[i].volumeInfo.infoLink,
                        pageCount: data.items[i].volumeInfo.pageCount,
                    };
                    bookReturns.push(singleReturn);
                }
                setSearchReturns(bookReturns);
            });
    }
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div>
            <h1 className="text-center my-4">Search for books to add to your bookshelf!</h1>
            <form className="text-center mb-5" onSubmit={submitHandler}>
                <input className="mr-4" type="text" required id="book-input" ref={bookInputRef}></input>
                <input
                    className="mx-2"
                    type="radio"
                    id="title"
                    name="search-type"
                    value="title"
                    checked={radio === "title"}
                    onChange={(e) => {
                        setRadio(e.target.value);
                    }}
                />
                <label className="me-2" htmlFor="title">
                    Search title
                </label>
                <input
                    className="mx-2"
                    type="radio"
                    id="author"
                    name="search-type"
                    value="author"
                    checked={radio === "author"}
                    onChange={(e) => {
                        setRadio(e.target.value);
                    }}
                />
                <label className="me-2" htmlFor="author">
                    Search author
                </label>
                <button type="submit" className="btn btn-sm btn-primary">
                    Find book!
                </button>
            </form>

            <SearchedBookList searchData={searchReturns} />
        </div>
    );
}

export default FindbooksPage;
