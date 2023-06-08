// import React from 'react'
// import MainLayout from '../layout/MainLayout'

function Contact() {

    return (
        <div className='contactpage' >

            <div className="contactcontainer"><h1>Contact</h1>

                <div className='buttons-container'>
                    <div className='button facebook'>
                        <a href='https://www.facebook.com/treasurestatefrenchies'><i className="fab fa-facebook-f fa-2x"></i></a>
                    </div>

                    <div className='button instagram'>
                        <a href='https://instagram.com/treasure_state_frenchies'><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                </div>
            </div>

            <div><img src="\pictures\family1.jpg" style={{ height: '400px' }} /></div>

        </div>

    );
}

export default Contact;

