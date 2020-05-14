import React from 'react';
import Navbar from '../../components/Layouts/NavbarTwo';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Contact';

const Article = () => (
    <React.Fragment>
        <Navbar />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Garden Maintenance</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Garden Maintenance</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> April 8th 2019</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <p>Garden maintenance can be a chore at the best of times and often you can spend more time actually working on garden maintenance than sitting back and enjoying your work</p>
                        <p>Greenscapes Gardeners, your gardening maintenance specialists, take care of all your gardening requirements.With all modern equipment and necessary tools at your their disposal, they will surely achieve the desired look and feel that you are looking for and finally you will have time to relax and enjoy your green space</p>
                        <p>Garden maintenance means keeping your garden healthy and lovely, this can be an onerous and often difficult task,but here Greenscapes gardeners we have the technicians who can clean up your patios and driveways, removing any algae, moss and dirt build ups and more importantly further improve your house curb appeal.</p>
                        <h3>Our Services</h3>
                        <ul>
                            <li>Garden Maintenance - your personal team of trained and skilled gardeners can perform any number of tasks for your, such as weed removal and hedge trimming</li>
                            <li>Garden Clearance - get rid of fallen leaves, unwanted flowers, plants and more; reveal your perfect garden once again</li>
                            <li>Lawn Care - keep your lawn in a healthy condition; use this service on a regular basis; take advantage of special equipment, like aerators, to feed and protect your garden</li>
                            <li>Planting – We can help plant new plants, flowers, shrubbery and other foliage to provide colour and variety in your garden</li>
                            <li>Hedge Trimming – Untrimmed hedges can be a real eye sore so part of our garden maintenance service include hedge and shrubbery trimming</li>
                            <li>Trained and experienced gardeners - all technicians are especially skilled in any task at hand</li>
                            <li>Specialised equipment - ranging from basic tools like mowers, to high-end gear like chainsaws and aerators</li>
                            <li>Personalised service - your gardening teams follow your requirements and closely consult you throughout the process</li>
                        </ul>
                        <p>All our garden maintenance engineers have years of experience and all the modern tools required to make sure that the garden maintenance services that they provide make your garden a pleasurable place for you to relax and enjoy.</p>
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
        <style jsx>{`
            .fa-check-circle {
                color: #339935;
            }
        `}</style>
        <Contact />
        <Footer />
    </React.Fragment>
)   

export default Article;
