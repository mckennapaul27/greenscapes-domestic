import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import { services } from '../data/data';
import Link from 'next/link';

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>'
    ],
    responsive: {
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}

class ServicesLevel extends Component {

    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {

        return (
            <section id='services' className='services-area ptb-100 bg-f9f9f9'>
                <div className='container'>
                    <div className='lead-generation-section-title'>
                        <span>Services</span>
                        <h2>We Offer Many Services to Our Great Customers</h2>
                        <div className='bar'></div>
                        <p>We ensure all our staff are reliable, well presented in uniform and polite at all times. We offer no obligation quotes and would be happy to discuss your garden requirements. Please see our range of services that we offer and the testimonials that show the high service we provide.</p>
                    </div>

                    <div className='row'>
                        {this.state.display ? <OwlCarousel 
                            className='services-slides owl-carousel owl-theme'
                            {...options}>{services.map(s => <div key={s.title} className='col-lg-12 col-md-12'>
                                <div className='services-box'>
                                    <img src={require(`../images/${s.src}`)} />
                                    <div className='services-content'>
                                        <h3>{s.title}</h3>
                                        <p>{s.desc}</p>

                                        <ul>
                                            <Link href={`/services#${s.id}`}><li className='bg-cdf1d8' style={{ cursor: 'pointer' }}>Read more</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>)}
                            
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesLevel;
