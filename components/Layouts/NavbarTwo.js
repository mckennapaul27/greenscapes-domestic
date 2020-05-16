import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class NavbarTwo extends Component {

    state = {
        collapsed: true,
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
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
            <nav id='navbar' className='navbar navbar-expand-lg navbar-style-one navbar-light bg-light'>
                <div className='container'>
                    <Link href='/'>
                        <a className='navbar-brand'>
                            <img src={require('../../images/greenscapes-test.png')} alt='logo' style={{ maxWidth: '150px' }} />
                            <img src={require('../../images/gardening-logo-transparent.png')} alt='logo' style={{ maxWidth: '150px' }} />
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
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className={classOne} id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link href='/'><a className='nav-link'>Home</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/#about'><a className='nav-link'>About</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/services'><a className='nav-link'>Services</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/garden-maintenance'><a className='nav-link'>Garden Maintenance</a></Link>
                            </li>
                            <li className='nav-item'>                                
                                <Link href='/landscaping'><a className='nav-link'>Landscaping</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/blog'><a className='nav-link'>Blog</a></Link>
                            </li>
                        </ul>
                        <ul className='others-option'>
                            <li>
                                 <AnchorLink 
                                    onClick={this.toggleNavbar} 
                                    href='#contact'>
                                    <button className='btn btn-primary'>Contact Us</button>
                                </AnchorLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}

export default NavbarTwo;
