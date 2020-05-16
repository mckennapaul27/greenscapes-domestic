import React, { Component } from 'react';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/NavbarTwo';
import Contact from '../components/Contact';
import { blogs } from '../data/data';
import Link from 'next/link';
import SeoSection from '../components/Layouts/SeoSection';

class Blog extends Component {
   
    render() {
        
        return (
            <React.Fragment>
                <Navbar />
                <SeoSection 
                    title='Blog | Greenscapes Gardening'
                    desc='Follow the Greenscapes Blog to keep up-to-date with all the latest news from Greenscapes, along with helpful gardening tips'
                    url='https://greenscapes-gardening.co.uk/blog'
                />
                <section className='page-title-area jarallax' data-jarallax="{'speed': 0.2}">
                    <div className='container'>
                        <h2>Blog</h2>
                    </div>
                </section>

                <section className='blog-area ptb-100'>
                    <div className='container'>
                        <div className='row'>
                            {blogs.map(b => (
                                <div className='col-lg-4 col-md-6' key={b.link}>
                                    <div className='single-blog-item'>
                                        <div className='blog-image'>
                                            <Link href={`/blog/${b.link}`}>
                                                <a>
                                                <img src={require(`../images/${b.img}`)} alt='imblogage' />
                                                </a>
                                            </Link>

                                            <div className='post-tag'>
                                                <a>{b.tag}</a>
                                            </div>
                                        </div>
                                        <div className='blog-post-content'>
                                            <span className='date'>{b.date}</span>
                                            <h3><a>{b.title}</a></h3>
                                            <p>{b.intro}</p>
                                            <Link href={`/blog/${b.link}`}>
                                                <a className='read-more-btn'>Read More <i className='icofont-double-right'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {/* <div className='col-lg-12 col-md-12'>
                                <div className='pagination-area'>
                                    <nav aria-label='Page navigation'>
                                        <ul className='pagination justify-content-center'>
                                            <li className='page-item'><a className='page-link' href='#'><i className='fas fa-angle-double-left'></i></a></li>
                                            <li className='page-item'><a className='page-link active' href='#'>1</a></li>
                                            <li className='page-item'><a className='page-link' href='#'>2</a></li>
                                            <li className='page-item'><a className='page-link' href='#'>3</a></li>
                                            <li className='page-item'><a className='page-link' href='#'><i className='fas fa-angle-double-right'></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;
