import React from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
import Contact from '../components/Contact';
import Carousel from '../components/Carousel';
import { 
    domesticImages, 
    turfingImages, 
    landscapingImages,
    plantingImages,
    hedgePlantingImages,
    hedgePruningImages 
} from '../data/data';

const Services = () => (
    <React.Fragment>
        <NavbarTwo />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Services</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Services &amp; Project Gallery</h2>
                            {/* <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> May 13th, 2019</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div> */}
                            <p>Here at Greenscapes Gardening we provide a complete range of Gardening Services to meet your requirements and to suit all budgets.</p>
                            <p>Do you long for a beautifully designed garden, but just do not have the time? We offer a fully managed garden design and maintenance service</p>
                            <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                            <p>Here at Greenscapes we specialise in driveways, patios, decking, composite decking, walling, fencing and any other landscaping needs you may have. Our landscaping teams and contractors we work closely with will deliver the garden you have dreamed about.</p>
                            <p>Whatever your requirement, we will visit you and provide an estimate with no hidden charges or surprise costs.</p>
                            <br/>
                            <hr/>
                            <div className='row align-items-center' id='domestic-garden-maintenance'>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <h3>Domestic Garden Maintenance</h3>
                                    <p>Greenscapes gardening services operate throughout the stockport and cheshire areas. We are proud of our professional service and the reputation we have built for reliable and honest gardening and landscaping</p>
                                    <p>We look after all sizes of domestic gardens from small gardens to managing large estates and offer an all year round service</p>
                                    <p>We can assist you with helpful advice from garden design ideas, planting schemes, plant, shrub and tree selection and maintenance tips</p>
                                    <p>We have a professional, reliable and trustworthy team who will discuss your requirements with you to ensure our service meets what you need</p>
                                    <br/>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <Carousel images={domesticImages} showThumbnails={false} />
                                    <br/>
                                </div>
                            </div>
                            <hr/>
                            <div className='row align-items-center' id='turfing'>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <Carousel images={turfingImages} showThumbnails={false} />
                                    <br/>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <h3>Turfing</h3>
                                    <p>At Greenscapes we can lift existing lawns, level areas and re-turf using locally sourced quality Cheshire turf.</p>
                                    <p>We can provide  instant results to make your lawn look green and attractive immediately. We can re-seed an area if needed.</p>
                                    <br/>
                                </div>
                            </div>
                            <hr/>
                            <div className='row align-items-center' id='landscaping'>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <h3>Landscaping</h3>
                                    <p>Here at Greenscapes we specialise in driveways, patios, decking, composite decking, walling, fencing and any other landscaping needs you may have.</p>
                                    <p>Our landscaping teams and contractors we work closely with will deliver the garden you have dreamed about. </p>
                                    <br/>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <Carousel images={landscapingImages} showThumbnails={false} />
                                    <br/>
                                </div>
                            </div>
                            <hr/>
                            <div className='row align-items-center' id='planting'>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <Carousel images={plantingImages} showThumbnails={false} />
                                    <br/>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <h3>Planting &amp; Plant Care</h3>
                                    <p>We provide a full planting service, where we can provide the plants you require or you can provide them if you prefer.</p>
                                    <p>We can offer advice and help you select the right plants for your garden that will give you ongoing enjoyment.</p>
                                    <br/>
                                </div>
                            </div>
                            <hr/>
                            <div className='row align-items-center' id='hedge-pruning'>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <h3>Hedge &amp; Tree Pruning</h3>
                                    <p>Greenscapes can provide a trimming and lowering of all types of hedges.</p>
                                    <p>We can prune and fell all types of trees to a high standard.  We can also arrange stump removal.</p>
                                    <p>We will leave your garden looking tidy removing all waste.</p>
                                    <br/>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <Carousel images={hedgePruningImages} showThumbnails={false} />
                                    <br/>
                                </div>
                            </div>
                            <hr/>
                            <div className='row align-items-center' id='hedge-planting'>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <Carousel images={hedgePlantingImages} showThumbnails={false} />
                                    <br/>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <br/>
                                    <h3>Hedge Planting</h3>
                                    <p>We provide a full hedge planting service, where we can provide the hedging you require or you can provide them if you prefer. </p>
                                    <p>We can offer advise on how to maintain your hedge after planting or we can maintain it for you and help it form in to a strong hedge.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className='post-tag-media'>
                            <div className='row h-100 align-items-center'>
                                <div className='col-lg-6 col-md-7'>
                                    <ul className='tag'>
                                        <li><span>Tags:</span></li>
                                        <li><a>Projects,</a></li>
                                        <li><a>Services,</a></li>
                                        <li><a>Gallery</a></li>
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

export default Services;
