import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id='about' className='about-area ptb-100'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='about-image'>
                                <img src={require('../images/gardening-services1.jpeg')} alt='image' />
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <div className='about-content'>
                                <h2>About Greenscapes Gardening</h2>
                                <p>Greenscapes are a Cheshire based garden maintenanace and landscaping company, that covers all South Manchester and surrounding areas.</p>

                                <div className='row'>
                                    <div className='col-lg-6 col-md-6'>
                                        <div className='single-inner-content'>
                                            <div className='title'>
                                                <div className='icon'>
                                                    <i className='fas fa-pound-sign'></i>
                                                </div>
                                                <h3>Competitive Prices</h3>
                                            </div>
                                            <p>Greenscapes gives FREE quotations, no job is too big or too small, we offer very competitive prices along with high standards of work.</p>
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <div className='single-inner-content'>
                                            <div className='title'>
                                                <div className='icon'>
                                                    <i className='fas fa-comments'></i>
                                                </div>
                                                <h3>Fulfil Your Dream</h3>
                                            </div>
                                            <p>Whether it's keeping it presentable all year round or planting some bright colours for the summer, imagine a garden you will never have to worry about.</p>
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <div className='single-inner-content'>
                                            <div className='title'>
                                                <div className='icon'>
                                                    <i className='fas fa-tree'></i>
                                                </div>

                                                <h3>High Quality Work</h3>
                                            </div>
                                            <p>Whether you just want your hedges pruned or a larger project, Greenscapes always provides a high standard quality of work and offer a full range of services to choose from..</p>
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <div className='single-inner-content'>
                                            <div className='title'>
                                                <div className='icon'>
                                                    <i className='fas fa-thumbs-up'></i>
                                                </div>

                                                <h3>Best result</h3>
                                            </div>
                                            <p>We always offer you the best by being able to meet any demand needed, which shows with the repeat customers who love the end result and reliability of Greenscapes.</p>
                                        </div>
                                    </div>
                                </div>
                                <a href='#contact' className='btn btn-primary'>Call Greenscapes Today</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='circle'><img src={require('../images/circle.png')} alt='cricle' /></div>
            </section>
        );
    }
}

export default About;
