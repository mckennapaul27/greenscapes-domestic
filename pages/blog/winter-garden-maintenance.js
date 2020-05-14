import React from 'react';
import Navbar from '../../components/Layouts/NavbarTwo';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Contact';

const Article = () => (
    <React.Fragment>
        <Navbar />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Winter Garden Maintenance Tips</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Winter Garden Maintenance Tips</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> November 18th, 2018</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <p>Winter is the ideal time for domestic garden maintenance chores to be done in preparation for Spring.</p>
                        <h3>Winter Domestic Garden Maintenance Tip 1 </h3>
                        <h6>Trimming </h6>
                        <p>All your hedges need regular trimming and pruning. Hedge regeneration involves either trimming the old stems and/or pruning back all branches to help and encourage fresh shoots in early spring. How much you prune will depend on how it has been trimmed in the past</p>
                        <h3>Winter Domestic Garden Maintenance Tip 2 </h3>
                        <h6>Clear Up</h6>
                        <p>Now that the leaves are on the floor, it is the perfect time to remove unwanted growth and plants or even have a big garden makeover. There is less greenage to get rid of and you can see what you are cutting.</p>
                        <p>If you garden has an Ivy or brambles problem, Winter can be a great time to remove them as they are easier to locateamong branches that have lost their leaves.</p>
                        <h3>Winter Domestic Garden Maintenance Tip 3</h3>
                        <h6>Winter Pruning</h6>
                        <p>Winter pruning more often than not includes plants that need to be pruned very late in the autumn, during winter and some very early in spring. Trees, shrubs and the many myriad of plants all have different needs and at different times of the year:</p>
                        <ul>
                            <li>Potential wind damage means that some plants need to be pruned in late Autumn/Winter.</li>
                            <li>Many plants need to be pruned when they are sleeping or dormant to reduce stress and or to avoid sprouting young shoots under harsh winter conditions</li>
                            <li>Its can be difficult to prune properly especially whenleaves are covering the plants</li>
                        </ul>
                        <p>Winter pruning often involves and therefore takes longerbecause of woody growth and often results in large amounts of waste. However, by doing these more work intensive tasks in winter, your can concentrate on low levelregular garden maintenance during the growing season.</p>
                        <h3>Winter Domestic Garden Maintenance Tip 4</h3>
                        <h6>Tidy Up after Windy/Inclement Weather</h6>
                        <p>Your garden will need to have the leaves cleared during winter. Good garden upkeep also helps to reduce diseases. Rotting leaves and other debris can supply enough nutrients for weeds to self seed in cracks, grow and then spread. They can also lead to slippery paths</p>
                        <p>Weeds will can and will continue to grow especially during mild winters. You need to keep borders weed-free during winter mainly, because when your spring flowering bulbs and border plants start to flower, the borders will be much more difficult (more time consuming) to weed. Also, people don’t realize that many weeds are seasonal. Weeds grow more weeds. Regular weeding means less weeding.</p>
                        <h3>Winter Domestic Garden Maintenance Tip 5</h3>
                        <h6>Winter Planting</h6>
                        <p>Many plants are dormant during the winter months so they can be supplied as bare root plants (with no soil). Roses canoften bought this way. If you make sure that the soil is not frozen or waterlogged, these so called dormant plants can be planted before the spring.</p>
                        <p>Lawn seed can be put down in the winter. Grass grows above 5 degrees</p>
                        <h3>Winter Domestic Garden Maintenance Tip 6</h3>
                        <h6>Soil Preparation</h6>
                        <p>Winter is a great time to dig and build a new border. Leave the soil in clumpy if you can because The cold winter rain and frost will help to break it down. This can also expose any pests to natural predators and the inclement weather.</p>
                        <p>Tending vegetable plots or creating new ones in the above manner can also be done during winter.</p>
                        <p>If you have a bumpy lawn then winter is a good time to remove sections of turf, add/remove soil and flatten it out</p>
                        <h3>Winter Domestic Garden Maintenance Tip 7</h3>
                        <h6>Landscaping Repairs</h6>
                        <p>Now that you can see your garden in its bare bones, what needs repairing? Good to plan ahead, what plants will need supporting as they grow? Add them now.</p>
                        <p>Leaky shed roofs, compost bins, blown down fences , loose paving all need to repaired now to save time in Spring summer when you should be enjoying your garden</p>
                        <p>Greenscapes Gardening can help maintain your domestic garden so you can spend more time enjoying the space rather than trying to do it all yourself. We can help make you time rich instead of time poor</p>
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
