import React from 'react';
import Navbar from '../../components/Layouts/NavbarTwo';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Contact';

const Article = () => (
    <React.Fragment>
        <Navbar />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>How to Deadhead an Astilbe</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>How to Deadhead an Astilbe</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> September 11th 2018</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <p>Astilbes are one of those garden plants that are just so easy to love. Originating in Asia, there are now a number of hybrids available worldwide, providing gardeners with a wide range of choice in size, color, and growth characteristics. There are so many different species and presentations -- from short to tall, rigid to droopy, and even wispy to bushy.</p>
                        <p>Their striking good looks complement just about any garden, especially when planted with variegated hostas, grasses, and a variety of ferns. Astilbes in general are gorgeous when they are in flower and the blossom can last for quite some time. Once done flowering, their seed heads also can last a long time, adding texture and visual interest to many gardens with their vertical, bottle-brush, feathery shape. Colors range from white to pink to reds. Astilbes do well in shade to partial sun but they need moisture, so the more sun you offer, the more important it is to have a moist soil profile that enables them to handle it.  </p>
                        <p>Depending on the type of astilbe you have, the seed heads can be sturdy and upright or they can flop over. Sometimes they look great and other times, not so much. Because of the seed heads’ longevity, you’ll need to decide if they add or detract from the overall look of your garden and whether you’ll want to deadhead them or just leave them alone.</p>
                        <h3>Start by making a visual assessment of the seed heads</h3>
                        <ol>
                            <li>Are they standing up tall or flopping over?</li>
                            <li>Does the seed head color work nicely with the other foliage and blossom in your garden or is it distracting?</li>
                            <li>Do you like them or not?</li>
                        </ol>
                        <p>Once you go through this short and easy assessment you can decide whether to deadhead or not. The good news is, if you decide not to deadhead and take a little time to figure out if you really do like how the seed heads look, you can always go back and deadhead later in the season.  </p>
                        <h5>Astilbes add year-round visual interest to any garden</h5>
                        <p>Personally, I love the seed heads of Astilbe chinensis ‘Pumila’. This is an amazing astilbe with low groundcover-like foliage that will spread beautifully to cover large areas. The flowers are sturdy and low as well as prolific. When they bloom there is a flurry of pink covering the plant. They bloom in August and sometimes right into September, so it’s a great late season plant. </p>
                        <p>The seed heads are rigid and upright and stand up beautifully to the changing fall season. If you’re lucky, they’ll hold up right through the first snow and provide an interesting visual feature until they are finally buried by higher drifts. </p>
                        <p>So while I prefer to forego deadheading Pumila astilbes, I’ll assess all other varieties and decide on deadheading them based on their performance and location in the garden. After scrutinizing them using my quick-and-easy assessment mentioned above, I’ll make the call on deadheading. If I decide to leave them alone, I can always change my mind later.</p>
                        <h3>The right way to deadhead astilbes</h3>
                        <p>Because there are so many varieties of astilbes, you may need a couple of different tools to deadhead them. For the thicker-stemmed varieties, a pair of pruning shears will work well. For the thinner, more delicate stalks, a pair of snips will do just fine.</p>
                        <p>To start, follow the long seed head down the stalk to the first leaf and snip the stalk just above that intersection. This minimal cut will allow you to see how the plant looks after the initial deadheading while leaving yourself some room to cut further, if necessary. Some plants will look better cut farther down the stalk at the next leaf intersection, especially if the first cut looks a little too “stubby” and obvious.</p>
                        <p>It’s important to remember that your garden is always a work-in-progress. What works today, may not tomorrow. What was dazzling in your garden this year, may be just ho-hum next year. The point is, your garden is not static – it’s always evolving and changing, so as a garden owner or Fine Gardener, you need to be constantly assessing. We have some clients who hate the seed heads and we just deadhead without much fanfare. Most, however, are like me and like to see how their gardens evolve over the seasons and the years. They trust that we are making decisions about things such as deadheading based on overall landscape aesthetics and structural plant performance.</p>
                        <p>When it comes to astilbes, there is no hard and fast rule for this workhorse perennial. They come in so many sizes, shapes, and colors that there are sure to be more than just one variety that will fit beautifully into your gardening strategy. Everyone can – and should – have several varieties in their garden. They’re just so lovely and easy to grow.</p>
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
