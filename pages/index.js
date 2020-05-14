import React, { Component } from 'react';
import NavbarOne from '../components/Layouts/NavbarOne';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Banner';
import Partner from '../components/Partner';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Services from '../components/ServicesLevel'

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarOne />
                <Banner />
                <Partner />
                <About />
                <Services />
                <Blog />
                <Contact />
                <Testimonials />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
