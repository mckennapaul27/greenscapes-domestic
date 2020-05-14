import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
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

class Testimonials extends Component {

    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        const testimonials = [
            { name: 'Andrew', content: 'GreenScapes have just re-turfed all my garden and generally tidied. I was so pleased with my finished garden! It looks totally transformed! Simon and his colleague have done a fantastic job!', area: 'Bramhall' },
            { name: 'Sylvia', content: 'Reliable, considerate and knowledgeable, Simon and his team always know what to do in the garden and when. Thanks for all your help and advice.', area: 'Pott Shrigley' },
            { name: 'Erica', content: 'Greenscapes regularly cuts almost an acre of undulating lawn and trims a mature laylandii hedge for us. They are very trustworthy, efficient and tidy.', area: 'Marple' },
            { name: 'John', content: 'We have used Simon for the last 12 months and he has transformed the look of our garden. He is totally reliable, always tidy ,knowledgable and has a well structure system for payments. ', area: 'Poynton' },
        ]
        return (
            <section id='testimonials' className='feedback-area ptb-100'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>Our customer feedback</h2>
                        <p>Please see our range of services that we offer and the testimonials that show the high service we provide.</p>
                    </div>

                    <div className='row'>
                        {this.state.display ? <OwlCarousel 
                            className='feedback-slides owl-carousel owl-theme'
                            {...options}
                            >{testimonials.map(t =>  <div key={t.name} className='col-lg-12 col-md-12'>
                                <div className='feedback-item'>
                                    <p>{t.content}</p>
                                    <div className='client-info'>
                                        <h3>{t.name}</h3>
                                        <span>{t.area}</span>
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

export default Testimonials;
