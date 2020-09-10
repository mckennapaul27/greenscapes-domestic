import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment';

class Footer extends Component {
    render() {
        return (
            <footer className='footer-area bg-fffcf4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='single-footer-widget'>
                                <div className='logo'>
                                    <Link href='/'>
                                        <a>
                                            <img src={require('../../images/gardening-logo-transparent.png')} style={{ maxWidth: '150px' }} />
                                        </a>
                                    </Link>
                                    <div>
                                    <a href='https://www.greenscapes-commercial.co.uk/'>
                                        <img src={require('../../images/green-trans.png')} style={{ maxWidth: '125px' }} />
                                    </a>
                                    </div>
                                </div>
        
                                <ul className='contact-info'>
                                    <li>Seal Rd, Bramhall, Stockport</li>
                                    <li>
                                        
                                        <a href='tel:0161 425 0035'>0161 425 0035</a>
                                    </li>
                                    <li>
                                        <Link href='mailto: simon@greenscapes-gardening.co.uk'>
                                            <a>simon@greenscapes-gardening.co.uk</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/'>
                                            <a>https://www.greenscapes-gardening.co.uk</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6'></div>

                        <div className='col-lg-3 col-md-6'>
                            <div className='single-footer-widget pl-3'>
                                <h3>Quick Links</h3>
        
                                <ul className='list'>
                                    <li>
                                        <Link href='/'>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/services'>
                                            <a>Projects</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/blog'>
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/#testimonials'>
                                            <a>Testimonial</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/#contact'>
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6'>
                            <div className='single-footer-widget pl-3'>
                                <h3>Follow Us</h3>

                                <ul className='list'>
                                    <li>
                                        <a href='https://www.facebook.com/greenscapesgardeners'>
                                            <img src={require('../../images/icon-facebook.png')} style={{ maxWidth: '150px' }} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className='copyright-area'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-7 col-md-7'>
                                <p><i className='far fa-copyright'></i> {moment().format('YYYY')} <a href='/'>Greenscapes</a>. All Rights Reserved</p>
                            </div>

                            <div className='col-lg-5 col-md-5'>
                                <ul>
                                    <li>
                                        <Link href='#'>
                                            <a><i className='fab fa-facebook-f'></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='#'>
                                            <a><i className='fab fa-twitter'></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='#'>
                                            <a><i className='fab fa-instagram'></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='#'>
                                            <a><i className='fab fa-linkedin-in'></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='map2'>
                    <img src={require('../../images/map2.png')} alt='map' />
                </div>
            </footer>
        );
    }
}

export default Footer;
