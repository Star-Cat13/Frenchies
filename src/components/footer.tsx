function Footer() {
    return (
        <div>
            <div className="contactpage">
                <div className="contactcontainer">
                    <h1>Contact</h1>
                    <div className="buttons-container">
                        <div className="button facebook">
                            <a href="#"><i className="fab fa-facebook-f fa-2x"></i></a>
                        </div>
                        <div className="button instagram">
                            <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        Mr. French <br />
                        Address: 1234 French Bulldog Street, Paris, France<br />
                        Phone: +1 (555) 123-4567<br />
                        Email: info@elementalfrenchies.com<br />
                    </div>
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" id="email" pattern=".+@.com" required />

                </div>
            </div>

            <footer className="footer-section footer">
                <img src="https://github.com/Star-Cat13/Frenchies/blob/main/public/diamonddog.png?raw=true" alt="Logo" />
                <h2>Elemental Frenchies</h2>
                <img src="https://github.com/Star-Cat13/Frenchies/blob/main/public/diamonddog.png?raw=true" alt="Logo" />
            </footer>
        </div>
    );
}

export default Footer;