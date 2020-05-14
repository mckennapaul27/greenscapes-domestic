import React from 'react';
import Navbar from '../../components/Layouts/NavbarTwo';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Contact';

const Article = () => (
    <React.Fragment>
        <Navbar />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Garden Maintenance Advice</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Garden Maintenance Advice</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> February 5th, 2018</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <p>Garden maintenance is a more or less constant task, whether you are just keeping it tidy or planning major changes. We will soon be feeling the first frosts to let us know winter is on it's way but from a garden design and maintenance point of view however there’s plenty to be done.</p>
                        <h3>Garden Pruning</h3>
                        <p>Pruning is a classic garden maintenance taskand a good prune will really benefit your garden at this time, it gives your plants a good start in the spring/summer next year</p>
                        <h3>Garden Wood Cuttings</h3>
                        <p>An important garden maintenance job between now and December (if all the leaves have fallen) is to take hard wood cuttings from your existing shrubs. If you do this and get them planted most will be ready to plant up in summer from giving them chance to root through the spring.</p>
                        <h3>Garden Plant Care and Maintenance</h3>
                        <p>Part of the maintenance of your garden is to prepare your plants for winter.If you have got some more jungle-looking exotic plants in your garden they will need protecting. Most people wrap trunks in straw or bubble-wrap with hessian. It would be a shame to lose them when they are such a big investment for your garden. Make this a regular part of your garden maintenance routine.</p>
                        <h3>Leaves Maintenance </h3>
                        <p>Leaves are a major part of garden maintenance in Autumn and winter, it’s a good idea not to leave them piled up and sitting on your lawn or they can kill your grass underneath. However you can let nature take its course in the beds and let the worms mulch the leaves into your soil (if they are not too deep).Try and keep the plants themselves free of large piles of leaves to give them air and keep them dry.</p>
                        <h3>Lawn Maintenance</h3>
                        <p>Part of the task of maintaining your garden is to make sure that the lawn is in tip top condition. So in winter try to rest the lawn as much as possible.It’s a good idea to keep off when wet or frosty, as the grass plants are not actively growing and will not repair themselves if damaged until the spring. For all you mowing fanatics only mow the lawn if necessary; this will depend upon weather conditions and temperatures at the time. Avoid mowing if lengthy frosts are expected or if the ground is sodden with rain</p>
                        <p>Greenscapes Gardening is an established and trusted garden maintenance business, committed to delivering excellent, professional and reliable garden services to homes in Bramhall, Wilmslow, Alderley Edge, Stockport and throughout Cheshire</p>
                        <p>We provide a wide range of gardening services, from garden maintenance, to soft landscaping bespoke to each and every individual’s requirements, to allow you to gain more quality time for yourself. If you are a busy executive, a pensioner or disabled in any way or simply require some assistance in your garden, we can help by maintaining your garden or undertaking one-off projects – from lawn mowing, pruning and planting to hedge trimming, lawn treatments and garden clearances.</p>
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
