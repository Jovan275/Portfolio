import React, {useState} from 'react';
import "./Contact.scss";

function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        console.log("Kliknuto dugme posalji");
        console.log(e);
        e.preventDefault(); // da kada kliknemo da dugme submit da se nista ne desava
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt=""></img>
            </div>
            <div className="right">
                <h2>Kontakt</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="E-mail"></input>
                    <textarea placeholder="Poruka"></textarea>
                    <button type="submit">Posalji</button>
                    {message && <span>Hvala, odgovoricu u najbrzem mogucem roku :)</span>}
                </form>
            </div>
            
        </div>
    )
}

export default Contact
