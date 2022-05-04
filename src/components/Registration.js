import React, {useState} from 'react';

function Registration(props) {

    const [name, setName] = useState("");
    const [surname, setSurame] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [biography, setBiography] = useState("");

    const[data, setData] = useState({})

    function onSubmitHandler(e){
        e.preventDefault();
        const data={
            name,
            surname,
            imageUrl,
            biography
        }
        console.log(data);
    }

    return (
        <div className={"registration"}>
            <form>
                <label>Name</label>
                <input type={"text"} onChange={(e) => {setName(e.target.value)}}/>
                <label>Surname</label>
                <input type={"text"} onChange={(e) => {setSurame(e.target.value)}}/>
                <label>Image URL</label>
                <input type={"text"} onChange={(e) => {setImageUrl(e.target.value)}}/>
                <label>Biography</label>
                <textarea rows={"6"} onChange={(e) => {setBiography(e.target.value)}}/>
                <button type={"submit"} onClick={(e) => {onSubmitHandler(e)}}>SUBMIT</button>
            </form>
        </div>
    );
}

export default Registration;