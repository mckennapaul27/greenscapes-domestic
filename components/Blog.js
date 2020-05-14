import React, { Component } from 'react';
import Link from 'next/link';
import { blogs } from '../data/data';

class Blog extends Component {
    render() {
        return (
            <section id='blog' className='blog-area blog-section ptb-100' >
                <div className='container'>
                    <div className='section-title'>
                        <h2>Latest News</h2>
                    </div>
                    <div className='row'>
                    {blogs.slice(0, 3).map(b => (
                        <div className='col-lg-4 col-md-6' key={b.link}>
                            <div className='single-blog-post'>
                                <div className='image'>
                                    <img src={require(`../images/${b.img}`)} alt='image' />
                                </div>

                                <div className='blog-post-content'>
                                    <h3><a href='#'>{b.title}</a></h3>
                                    <p>{b.intro}</p>

                                    <Link href={`/blog/${b.link}`}>
                                        <a className='read-more-btn'>Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
