import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import BookFavsContext from "../store/bookshelf-fav-context";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const usernameInputRef = useRef();
    const bookFavsCtx = useContext(BookFavsContext);

    function submitHandler(event) {
        event.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        bookFavsCtx.inputUserName(enteredUsername);
        navigate("/bookshelf");
    }

    return (
        <div className="container">
            <h1 className="text-center">Login here!</h1>
            <form className="text-center my-5" onSubmit={submitHandler}>
                <label htmlFor="username-input"></label>
                <input className="mx-3" type="text" id="username-input" ref={usernameInputRef}></input>
                <button type="submit" className="btn btn-sm btn-primary">
                    Login with chosen username!
                </button>
            </form>
        </div>
    );
}
export default Login;
