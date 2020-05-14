import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };
    
    render() {
        return (
            <React.Fragment>
                <div id='home' className='main-banner jarallax' data-jarallax="{'speed': 0.2}">
                    <div className='d-table'>
                        <div className='d-table-cell'>
                            <div className='container'>
                                <div className='main-banner-content'>
                                    <h1>Greenscapes Gardening Services North West Cheshire &amp; South Manchester</h1>
                                    <p>Reliable Cheshire gardneners. We are making your outdoor dreams come true. Experienced domestic garden maintenance.</p>=
                                    <div className='btn-box'>
                                        <AnchorLink 
                                            onClick={this.toggleNavbar} 
                                            offset={() => -10} 
                                            // className='nav-link' 
                                            href='#contact'>
                                            <button className='btn btn-primary'>Contact Us Today</button>
                                        </AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                /> */}
            </React.Fragment>
        );
    }
}

export default Banner;
