import React from 'react';
import Navbar from '../../components/Layouts/NavbarTwo';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Contact';

const Article = () => (
    <React.Fragment>
        <Navbar />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Domestic Garden Maintenance Tips</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Domestic Garden Maintenance Tips</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> January 19th, 2019</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <p>We all love gardening but domestic garden maintenance can often be tedious and backbreaking work. Unfortunately, due to our modern 24/7 lifestyles, we don't always have the time to do the garden maintenance that our gardens deserve. At Greenscapes Gardening we take the weight of your shoulders and provide all the garden maintenance services you need so you can enjoy your garden rather than toil in it.</p>
                        <p>In this post you can learn how we maintain all our gardens concentrating on watering, lawn maintenance and weeding.</p>
                        <h3>Garden Maintenance - Watering</h3>
                        <p>Flowering beds need to be watered regularly and kept evenly moist. Water just 1-2 times per week.</p>
                        <p>Make sure to water plants in the evening or early in the morning, when the earth is cooler, as less of the water will dissipate than during the warmth of the day.</p>
                        <p>Avoid at all costs watering leaves or plant heads to discourage mould creation and be gentle with the water to avoid damage.</p>
                        <p>If you are away a lot then it is really important that you have an irrigation system in place. Controlling the release of water will regulate the amount of moisture in the soil</p>
                        <h3>Garden Maintenance – Lawn</h3>
                        <p>It is very important to protect your lawn from hot weather – Did you know that temperatures of up to 26°C will encourage growth but anything above 30°C will hindergrowth. When it does get warm, do not cut the grass too short and instead leave it standing at about five centimetres, which will in turn protect from the heat and prevent the soil from becoming dry</p>
                        <p>The ideal time to water the grass is 4-8am; If you can get a water computer control system to water your garden during these early hours.</p>
                        <p>When adding the water to the lawn, use 10-15 litres of water per sq.m as a guide and understand that over-watering can lead to mould formation.</p>
                        <h3>Garden Maintenance – Weeds</h3>
                        <p>Weeds are the bain of every gardeners life so to prevent the growth of weeds plant beds densely to reduce the space available for weeds to grow.</p>
                        <p>Did you know that the use of mulch stops weeds from sprouting?</p>
                        <p>If you really want to attack your existing weeds, dig deep and remove the source. Use a weeding trowel to aggressively attack the roots.</p>
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
