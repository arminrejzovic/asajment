import React, {useRef} from 'react';

function RegistrationII(props) {

    const nameRef = useRef();
    const surnameRef = useRef();
    const imageURLRef = useRef();
    const biographyRef = useRef();


    function onSubmitHandler(e){
        e.preventDefault();
        const data={
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            imageURL: imageURLRef.current.value,
            biography: biographyRef.current.value
        }
        console.log(data);
    }

    return (
        <div className={"registration"}>
            <form>
                <label>Name</label>
                <input type={"text"} ref={nameRef}/>
                <label>Surname</label>
                <input type={"text"} ref={surnameRef}/>
                <label>Image URL</label>
                <input type={"text"} ref={imageURLRef}/>
                <label>Biography</label>
                <textarea rows={"6"} ref={biographyRef}/>
                <button type={"submit"} onClick={(e) => {onSubmitHandler(e)}}>SUBMIT</button>
            </form>
        </div>
    );
}

export default RegistrationII;