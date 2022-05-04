import React from 'react';
import {Link} from "react-router-dom";

function Main(props) {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to={"/register"}>REGISTER</Link>
        </div>
    );
}

export default Main;