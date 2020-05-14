import React from 'react';
import Navbar from '../../components/Layouts/NavbarTwo';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Contact';
const Article = () => (
    <React.Fragment>
        <Navbar />
        <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
            <div className='container'>
                <h2>Domestic Gardening - The legalities</h2>
            </div>
        </section>
        <section className='blog-details-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-details'>
                            <h2>Domestic Gardening - The legalities</h2>
                            <div className='blog-meta'>
                                <ul>
                                    <li><i className='fas fa-user'></i> <a>Admin</a></li>
                                    <li><i className='far fa-clock'></i> March 6th, 2019</li>
                                    <li><i className='fas fa-folder-open'></i> <a>Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <h3>Careful with the trimmers!</h3>
                        <p>Keeping your garden maintained, looking neat and tidy is a must and you probably think you’re doing your next door neighbours a real big favour by chopping back overhanging bushes and tree branches which impinge on your airspace, but did you know that, whereas by law you are can trim any overhanging leaves and branches up to the boundary line, in actual fact, the debris remains in the ownership of your neighbour, and you can’t get rid of it without their agreement? And if, in the course, of your weekly garden maintenance chores you return said debris all well and good but careful as you may not throw them back over the fence because this could qualify as fly-tipping.</p>
                        <h3>Low Hanging fruit</h3>
                        <p>Gardening and garden maintenance can be a wonderful thing especially when fruit can be grown. The legalitiesreferring to dangling fruit are seemingly clear: what hangson your side of the line is yours; what hangs over the fenceon the other hand from your neighbour’s side is still his or hers. If you’d like to cut those pears or apples hanging overfrom next door, you will probably need to ask permission first because according to the law they’re actually not yours. In the course of maintaining your garden, it is probably best to return all the fallen fruit from whence it came</p>
                        <h3>Light and the lack of it</h3>
                        <p>Sometimes all the garden maintenance in the world cannot help when the tree your neighbour recently planted in his garden impinges on the light through your windows. However in this case the law is on your side. If your windows have had continuous light during the past twenty years or more before the new tree was planted, you do have the right for it to be felled or moved. Peace of mind when you are going through your garden maintenance jobs</p>
                        <h3>Fallen Branches and other debris</h3>
                        <p>Did you know that you are legally responsible for any treescausing a possible danger growing on your land, so if, for example rotting branches fall on next door’s greenhouse, be ready to pay for repairs. Probably best though to give thelocal tree surgeon a call and get the problem fixed before someone gets hurt. Clearing fallen branches and associated debris is a key element of garden maintenance.</p>
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
