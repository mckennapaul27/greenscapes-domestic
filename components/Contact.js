import React, { Component } from 'react';
import Link from 'next/link';
// import { sendContactForm, createNewContact } from '../utils/sib.helpers';
import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css'
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
        submitted: false
    }

    
    handleInputChange = (e) => {
        const target = e.target;
        const name = e.target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const { name, email, phone, subject, message } = this.state;
    //     this.setState({
    //         submitted: true
    //     }, () => {
    //         sendContactForm(name, email, subject, phone, message)
    //         // createNewContact(name, email, subject, phone, message)
    //         toast.success(`Thanks ${name}. We have received your message and will be in contact very soon.`);
    //     })
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        let { name, email, phone, subject, message } = this.state;   
        axios.post(`/api/contact`, { name, email, phone, subject, message })
        .then((res) => {
            console.log('This is the result', res)
            if (res.data.success) {
                this.setState({
                    // buttonText: <a><span>Message sent <i className='fa fa-check'></i></span></a>,
                    submitted: true
                }, () => {
                    toast.success(`Thanks ${name}. We have received your message and will be in contact very soon.`);
                })
            }            
        })     
        .catch(error => {
            console.log(error);
        })   
    }

    render() {
        const { name, email, subject, phone, message } = this.state;
        const disabled = ( name === '' || email === '' || subject === '' || phone === '' || message === '' );
        return (
            <section id='contact' className='contact-area ptb-100 bg-f9f9f9'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>Contact Us</h2>
                        <p>Greenscapes are a Cheshire based garden maintenanace and landscaping company, that covers all South Manchester and surrounding areas.</p>
                    </div>

                    <div className='row align-items-center'>
                        <div className='col-lg-8 col-md-12' >
                            <form id='contactForm' >
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input type='text' className='form-control' required={true} data-error='Please enter your name' name={'name'} onChange={this.handleInputChange} />
                                            <div className='help-block with-errors'></div>
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input type='email' className='form-control' required={true} data-error='Please enter your email' name={'email'} onChange={this.handleInputChange} />
                                            <div className='help-block with-errors'></div>
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <div className='form-group'>
                                            <label>Subject</label>
                                            <input type='text' className='form-control' required={true} data-error='Please enter your subject' name={'subject'} onChange={this.handleInputChange} />
                                            <div className='help-block with-errors'></div>
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <div className='form-group'>
                                            <label>Phone Number</label>
                                            <input type='text' className='form-control' required={true} data-error='Please enter your number' name={'phone'} onChange={this.handleInputChange}/>
                                            <div className='help-block with-errors'></div>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 col-md-12'>
                                        <div className='form-group'>
                                            <label>Message</label>
                                            <textarea className='form-control' cols='30' rows='4' required={true} data-error='Write your message' name={'message'} onChange={this.handleInputChange} />
                                            <div className='help-block with-errors'></div>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 col-md-12'>
                                        <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Send Message</button>
                                        <div id='msgSubmit' className='h3 text-center hidden'></div>
                                        <br/>
                                        {this.state.submitted && <div className='clearfix'><span>We have received your message <i className='fa fa-check-circle'></i></span></div>}
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='col-lg-4 col-md-12'>
                            <address className='contact-info-box'>
                                <ul>
                                    <li>
                                        <i className='fas fa-map-marker-alt'></i>
                                        <span>Address:</span>
                                        Seal Rd, Bramhall, Stockport SK7 2LL, UK
                                    </li>

                                    <li>
                                        <i className='fas fa-envelope'></i>
                                        <span>Email:</span>
                                        <a href='mailto:simon@greenscapes-gardening.co.uk'>simon@greenscapes-gardening.co.uk</a>
                                    </li>

                                    <li>
                                        <i className='fas fa-phone'></i>
                                        <span>Phone:</span>
                                        
                                        <a href='tel:0161 425 0035'>0161 425 0035</a>
                                    </li>
                                    <li>
                                        <i className='fas fa-globe'></i>
                                        <span>Website:</span>
                                        <Link href='/'><a>https://www.greenscapes-gardening.co.uk/</a></Link>
                                    </li>
                                </ul>
                            </address>
                        </div>
                    </div>
                    <ToastContainer  position={'bottom-left'} autoClose={5000}/>
                </div>
            </section>
        );
    }
}

export default Contact;
