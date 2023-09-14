import React, { useState } from 'react'
import phone from "../assets/images/Phone.svg"
import Gmail from "../assets/images/Gmail.svg"
import linkin from "../assets/images/linkedfd.svg"
import Whatsapp from "../assets/images/WhatsApp.svg"
import { Form, Tooltip } from 'react-bootstrap'

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className="ContactMain">
            <div className="headerContact">
                <div className="backGroundHeading" id='ContactUs'>
                    CONTACT
                </div>
                <div className="mainHeading">
                    Get In Touch
                    <span className='BottomBorderAbout'>

                    </span>
                </div>
            </div>
            <div className="ContactBody">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="addressMain">
                                <div className="headingAdd">ADDRESS</div>
                                <p className="AddressDis">
                                    Tipu Sultan Rd, Hyder Bagh, Dashmesh Nagar, Harsh Nagar, Nanded, Nanded-Waghala, Maharashtra 431601
                                </p>
                                <div className="ConnectionList">
                                    <img src={phone} alt="" />
                                    <a href="tel:+917875773079">+91 7875773079</a>
                                </div>
                                <div className="ConnectionList">
                                    <img src={Whatsapp} alt="" />
                                    <a href="https://wa.me/919607151525">+91 9607151525</a>
                                </div>
                                <div className="ConnectionList">
                                    <img src={Gmail} alt="" />
                                    <a href="mailto:usamamusab16@gmail.com">usamamusab16@gmail.com</a>
                                </div>
                                <div className="ConnectionList">
                                    <img src={linkin} alt="" />
                                    <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/usama-musab-326766231?trk=profile-badge">Usama Musab
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ContactBoxMain">
                                <div className="headingContact">
                                    SEND US A NOTE
                                </div>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="formSingleFild">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Name"
                                                    defaultValue=""
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Your Good Name.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="formSingleFild">
                                                <Form.Control
                                                    required
                                                    type="email"
                                                    placeholder="Email"
                                                    defaultValue=""
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Your Email ID.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="formSingleFild">
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder='Tell Us more about your needs...'
                                                    rows="5"
                                                    required
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Your Needs.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className='cx-btn-1'>
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact