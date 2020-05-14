import React from 'react';
import Navbar from '../../components/Layouts/NavbarTwo';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Contact';

const Article = () => (
    <React.Fragment>
        <Navbar />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Spring Garden Maintenance</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Spring Garden Maintenance</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> March 15th, 2019</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <p>At Greenscapes we cover the full range of gardening services starting with garden maintenance. All the garden maintenance requirements are covered including: lawn mowing, lawn care, weeding, weed control, hedging/hedge trimming, garden clearances, offsite waste removal, and planting. Learn more about our services in detail below</p>
                        <h3>Lawn Mowing and Lawn Care</h3>
                        <p>One of the main garden maintenance chores is lawn mowing, and yes, you cannot beat a real grass lawn. Our gardeners will give you the finish and crisp edges you're looking for. We can also provide specialist lawn care, such as scarification as and when required</p>
                        <h3>Hedge and Shrubbery Trimming</h3>
                        <p>Garden maintenance is all about trimming and maintaining clean edges of your topiary and hedges. This requiresexperience, the right skills, and the right set of tools. Greenscapes gardeners will ensure you get the look you're after.</p>
                        <h3>Planting</h3>
                        <p>Planting can be an onerous and back-breaking part of garden maintenance that's never good for your knees!Greenscapes gardeners are happy to assist in plant selection and location and we make sure that your garden has the correct balance of plants, flowers and shrubbery</p>
                        <h3>Garden Clearance and Waste Removal</h3>
                        <p>The final part of garden maintenance ie waste removal. Whether it's brushing up autumn leaves, clearing grass clippings or the result of pruning/trimming, we understand that gardens generate waste. We'll bag it all up and pop it in your "green waste" bin or take it off site</p>
                        <p><span>If you need help with your domestic garden maintenance call us now on <a href="tel:07772 656034">07772 656034</a> for a free quotation or email us at <a href='email: simon@greenscapes-gardening.co.uk'>simon@greenscapes-gardening.co.uk</a></span></p>
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
