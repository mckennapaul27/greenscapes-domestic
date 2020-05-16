import React from 'react';
import Navbar from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
import Contact from '../components/Contact';
import Carousel from '../components/Carousel';
import { domesticImages } from '../data/data';
import SeoSection from '../components/Layouts/SeoSection';

 const GardenMaintenance = () => (
    <React.Fragment>
        <Navbar />
        <SeoSection 
            title='Garden Maintenance | Greenscapes Gardening'
            desc='We look after all sizes of domestic gardens from small gardens to managing large estates and offer an all year round service throughout the stockport and cheshire areas'
            url='https://greenscapes-gardening.co.uk/garden-maintenance'
        />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Gardening Maintenance</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Domestic Gardening Maintenance</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                            <p>Greenscapes gardening services operate throughout the stockport and cheshire areas. We are proud of our professional service and the reputation we have built for reliable and honest gardening and landscaping.</p>
                            <p>We look after all sizes of domestic gardens from small gardens to managing large estates and offer an all year round service.</p>
                            <p>We can assist you with helpful advice from garden design ideas, planting schemes, plant, shrub and tree selection and maintenance tips.</p>
                            <p>We have a professional, reliable and trustworthy team who will discuss your requirements with you to ensure our service meets what you need</p>
                            <blockquote className='blockquote'>
                                <p>Covering the whole South Manchester and Cheshire from Didsbury over to Bramhall, Wilmslow, Heald Green, Cheadle, Cheadle Hulme and surrounding areas. No job is too big or too small.</p>
                            </blockquote>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12'>
                                <h3>Domestic Gardening Project Gallery</h3>
                                <br/>
                                <Carousel images={domesticImages} />
                            </div>
                        </div>
                        <div className='post-tag-media'>
                            <div className='row h-100 align-items-center'>
                                <div className='col-lg-6 col-md-7'>
                                    <ul className='tag'>
                                        <li><span>Tags:</span></li>
                                        <li><a>Gardening,</a></li>
                                        <li><a>Garden Maintenance</a></li>
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

export default GardenMaintenance;
