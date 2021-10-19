import { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className='preloader'>
                <div className='spinner'>
                    <div className='double-bounce1'></div>
                    <div className='double-bounce2'></div>
                </div>
            </div>
        );
    }
}

export default Loader;
