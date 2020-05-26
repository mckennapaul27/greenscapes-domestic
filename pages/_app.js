import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    render () {

        const { Component, pageProps } = this.props

        return (
            <>
                <DefaultSeo
                    openGraph={{
                        type: 'website',
                        locale: 'en_GB',
                        url: 'https://www.greenscapes-gardening.co.uk',
                        site_name: 'Greenscapes Gardening | Call Us Today',
                    }}
                />

                <Preloader>
                    <Component {...pageProps} />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                    <Placeholder>
                        <Loader />
                    </Placeholder>
                </Preloader>
            </>
        );
    }
}