import { NextSeo } from 'next-seo';

export default ({ title, desc, url }) => (

    <NextSeo
        title={title}
        description={desc}
        canonical={url}
        openGraph={{
            url: url,
            title: title,
            description: desc
        }}
    />

);