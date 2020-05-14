import React from 'react';
import Navbar from '../../components/Layouts/NavbarTwo';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Contact';

const Article = () => (
    <React.Fragment>
        <Navbar />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Love your garden with our Garden Maintenance service</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Love your garden with our Garden Maintenance service</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> May 13th, 2019</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <p>Do you like your garden and are desperate to spend time enjoying it rather than working on it? Then our garden maintenance contract could be perfect for you. We will come and maintain your garden on a weekly, fortnightly or monthly service, whatever suits your requirements best. Our bespoke Garden maintenance service encompasses all your gardening needs and therefore freeing up your time to sit and enjoy your outdoor space.</p>
                        <p>Our garden maintenance programme allows us to fulfill your garden needs through all year round as it is your garden after all, we are here to help and maintain it.</p>
                        <p>We look to manage the entire space of your property. This includes but is not limited to:</p>
                        <ul>
                            <li>Weed removal and control on patio’s, pathways and driveways</li>
                            <li>Aeriation of the lawned areas</li>
                            <li>Mowed lawns striped or in any other design</li>
                            <li>Weed-free borders</li>
                            <li>Trimming your shrubs</li>
                            <li>We will feed your lawn twice a year with organic lawnfeed</li>
                            <li>Neat and tidy cut hedges</li>
                        </ul>
                        <p>The sole aim of our garden maintenance services is to provide you with a garden that you can enjoy all year long without all the hard work.</p>
                        <p>Our Garden Maintenance service ensures you have an affordable, practical and beautiful garden at great value.</p>
                        <p>Create a new green space with our Garden Clearing service</p>
                        <p>If you have just moved into a new property and realised the garden is a mess or have you not had the time and neglected your garden so it has got out of control and you just don’t know how to start tackling it?</p>
                        <p>Then maybe you need our one off Garden Clearing Service which will get your garden back in order in no time! Greenscapes Gardeners will get your garden back looking neat and tidy as a one-off job and we even remove all of the rubbish leaving you free to plan your garden from a blank space.</p>
                        <p>Some of the jobs that the Garden Clearance service can include are:</p>
                        <ul>
                            <li>Cut back all of the under growth</li>
                            <li>Cut down self-seeding trees</li>
                            <li>Clear all stumps with a stump grinder</li>
                            <li>Remove the top off the whole plot to remove unwanted roots</li>
                            <li>Add in new top soil</li>
                            <li>Clear all the waste</li>
                        </ul>
                        
                        <div className='post-tag-media'>
                            <div className='row h-100 align-items-center'>
                                <div className='col-lg-6 col-md-7'>
                                    <ul className='tag'>
                                        <li><span>Tags:</span></li>
                                        <li><a>Gardening Tips,</a></li>
                                        <li><a>Services</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Contact />
        <Footer />
    </React.Fragment>
)   

export default Article;
