import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class NavbarOne extends Component {
    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById('navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId.classList.add('is-sticky');
            } else {
                elementId.classList.remove('is-sticky');
            }
        });
        window.scrollTo(0, 0);
        // this.menuActiveClass()
    }

    // menuActiveClass = () => {
    //     let mainNavLinks = document.querySelectorAll('nav ul li a');
    //     window.addEventListener('scroll', () => {
    //         let fromTop = window.scrollY;
    //         mainNavLinks.forEach(link => {
    //             if (link.hash){
    //                 let section = document.querySelector(link.hash);

    //                 if (
    //                     section.offsetTop <= fromTop &&
    //                     section.offsetTop + section.offsetHeight > fromTop
    //                 ) {
    //                     link.classList.add('active');
    //                 } else {
    //                     link.classList.remove('active');
    //                 }
    //             }
    //         });
    //     });
    // }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed
            ? 'collapse navbar-collapse'
            : 'collapse navbar-collapse show';
        const classTwo = collapsed
            ? 'navbar-toggler navbar-toggler-right collapsed'
            : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
                <nav
                    id='navbar'
                    className='navbar navbar-expand-lg navbar-style-one navbar-light bg-light'>
                    <div className='container'>
                        <Link href='/'>
                            <a
                                className='navbar-brand'
                                // style={{
                                //     width: '107px',
                                //     height: '74px',
                                //     backgroundColor: 'wheat',
                                // }}
                            >
                                {/* <img
                                    src={require('../../images/greenscapes-test.png')}
                                    alt='logo'
                                    style={{ maxWidth: '150px' }}
                                />
                                <img
                                    src={require('../../images/gardening-logo-transparent.png')}
                                    alt='logo'
                                    style={{ maxWidth: '125px' }}
                                /> */}
                                <img
                                    src={
                                        '/greenscapes-artificial-grass-logo.svg'
                                    }
                                    alt='logo'
                                    style={{
                                        width: '107px',
                                        height: '74px',
                                        display: 'block',
                                    }}
                                />
                            </a>
                        </Link>
                        <button
                            onClick={this.toggleNavbar}
                            className={classTwo}
                            type='button'
                            data-toggle='collapse'
                            data-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className={classOne} id='navbarSupportedContent'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <Link href='/'>
                                        <a className='nav-link'>Home</a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='#about'>
                                        <a className='nav-link'>About</a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/services'>
                                        <a className='nav-link'>Services</a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/garden-maintenance'>
                                        <a className='nav-link'>
                                            Garden Maintenance
                                        </a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/landscaping'>
                                        <a className='nav-link'>Landscaping</a>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href='/blog'>
                                        <a className='nav-link'>Blog</a>
                                    </Link>
                                </li>
                            </ul>
                            <ul className='others-option'>
                                <li>
                                    <Link href='/index#contact'>
                                        <button className='btn btn-primary'>
                                            Contact Us
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavbarOne;
