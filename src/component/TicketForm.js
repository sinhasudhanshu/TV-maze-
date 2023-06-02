import { useState } from "react";
import { Link } from "react-router-dom";
import './TicketForm.css';

function TicketForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const clickHandler = (event) => {
        event.preventDefault();
        console.log("clicked");
        console.log(event.target.value);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <center>
            <div className="ticket-form-container">
                <h1>TicketBooking</h1>
                <form method="post" onSubmit={clickHandler}>
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <br />
                    <button type="submit">BookTicket</button>
                </form>

                <Link to="/" className="back-home-btn">Go Back to Home</Link>
            </div>
        </center>
    );
}
export default TicketForm;