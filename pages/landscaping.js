import React from 'react';
import Navbar from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
import Contact from '../components/Contact';
import Carousel from '../components/Carousel';
import { landscapingImages } from '../data/data';
import SeoSection from '../components/Layouts/SeoSection';

 const Landscaping = () => (
    <React.Fragment>
        <Navbar />
        <SeoSection 
            title='Landscaping | Greenscapes Gardening'
            desc='Greenscapes specialises in driveways, patios, decking, composite decking, walling, fencing and any other landscaping needs you may have. '
            url='https://www.greenscapes-gardening.co.uk/landscaping'
        />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Landscaping</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Hard &amp; Soft Landscaping</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> May 13th, 2019</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                            
                            <p>Here at Greenscapes we specialise in driveways, patios, walling, fencing and any other landscaping needs you may have. Our landscaping teams and contractors we work closely with will deliver the garden you have dreamed about.</p>
                            <p>Covering the whole South Manchester and Cheshire from Didsbury over to Bramhall, Wilmslow, Heald Green, Cheadle, Cheadle Hulme and surrounding areas. No job is too big or too small.</p>
                            <blockquote className='blockquote'>
                                <p>Covering the whole South Manchester and Cheshire from Didsbury over to Bramhall, Wilmslow, Heald Green, Cheadle, Cheadle Hulme and surrounding areas. No job is too big or too small.</p>
                            </blockquote>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <h3>Soft Landscaping</h3>
                                    <p><span><i className='fa fa-check-circle'></i> Flowers, planting schemes &amp; border design</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Turf laying and lawn care</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Hedges planted and trimmed</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Hanging baskets, pots &amp; tubs</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Bulbs supplied and planted</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Trees supplied and planted</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Weed control &amp; advice</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Pathways and driveways laid</span></p>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <h3>Hard Landscaping</h3>
                                    <p><span><i className='fa fa-check-circle'></i> Patios</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Fencing supplied &amp; fitted</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Decking</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Walls &amp; raised borders</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Bespoke outdoor storage areas &amp; sheds</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Water features &amp; ponds</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Outdoor seating</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Pathways and driveways laid</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Outdoor learning zones &amp; mud kitchens</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Shelters, summerhouses &amp; tree houses</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Wildlife gardens &amp; wildlife ponds</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Terrace gardens &amp; roof terraces</span></p>
                                    <p><span><i className='fa fa-check-circle'></i> Artificial lawns</span></p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12'>
                                <h3>Landscaping Project Gallery</h3>
                                <br/>
                                <Carousel images={landscapingImages} />
                            </div>
                        </div>
                        <div className='post-tag-media'>
                            <div className='row h-100 align-items-center'>
                                <div className='col-lg-6 col-md-7'>
                                    <ul className='tag'>
                                        <li><span>Tags:</span></li>
                                        <li><a>Soft Landscaping</a></li>
                                        <li><a>Hard Landscaping</a></li>
                                    </ul>
                                </div>
                                {/* <div className='col-lg-6 col-md-5'>
                                    <ul className='social-share'>
                                        <li><span>Share on:</span></li>
                                        <li><a href='#'><i className='fab fa-facebook-f'></i></a></li>
                                        <li><a href='#'><i className='fab fa-twitter'></i></a></li>
                                        <li><a href='#'><i className='fab fa-instagram'></i></a></li>
                                        <li><a href='#'><i className='fab fa-linkedin'></i></a></li>
                                    </ul>
                                </div> */}
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

export default Landscaping;
