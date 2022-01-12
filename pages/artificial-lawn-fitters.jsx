import styles from './Artificial.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/NavBarThree';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = ({}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src='/grass-before.png' alt='' />
                <p
                    style={{
                        backgroundColor: '#ffffff',
                        marginTop: '16px',
                        textAlign: 'center',
                        width: 'fit-content',
                        padding: '10px 16px',
                        margin: '16px auto',
                        borderRadius: '8px',
                    }}>
                    BEFORE
                </p>
            </div>
            <div>
                <img src='/grass-after.png' alt='' />
                <p
                    style={{
                        backgroundColor: '#ffffff',
                        marginTop: '16px',
                        textAlign: 'center',
                        width: 'fit-content',
                        padding: '10px 16px',
                        margin: '16px auto',
                        borderRadius: '8px',
                    }}>
                    AFTER
                </p>
            </div>
        </Slider>
    );
};

const Page = ({}) => {
    return (
        <>
            <Navbar />
            <div className='ag-hero'>
                <Container>
                    <div className='ag-header'>
                        <div className='ag-title'>
                            <div className='ag-overline'>
                                <p>artificial lawn specialists</p>
                                <div className='ag-line'></div>
                            </div>
                            <h1>
                                welcome to greenscapes{' '}
                                <span>artifical lawn </span>
                                specialists
                            </h1>
                            <p className='ag-subtitle'>
                                Our teams have transformed external and internal
                                areas in gardens, offices, and schools into
                                stunning spaces that stay in perfect condition
                                throughout every season.
                            </p>
                            <button className='ag-btn'>
                                <a
                                    href='tel:+441614250035'
                                    className='ag-btn-text'>
                                    call us for a free no obligation quote
                                </a>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='ag-features'>
                <Container>
                    <div className='row'>
                        <div className='ag-features-content col-12 col-lg-6'>
                            <h2>
                                Your local artificial{' '}
                                <span>lawn specialists</span>
                            </h2>
                            <p>
                                From initial consultation through to
                                installation and aftercare, our brilliant range
                                of grass offers something for everybody,
                                whatever your needs or vision. With products
                                ideal for families, pets, commercial venues,
                                offices, and tradesmen. We have got all bases
                                covered when it comes to your artificial grass
                                project.
                            </p>
                            <p>
                                We pride ourselves on working only with the very
                                best products on the market, offering high
                                quality and super durable grasses that will
                                never let you down, or break the bank! Our
                                friendly team of grass experts can help you to
                                pick out the perfect products for your space,
                                offering tailored advice and guidance along the
                                way to ensure complete customer satisfaction.
                            </p>
                        </div>
                        <div className='ag-features-image col'>
                            <img
                                src='/grass-portrait.png'
                                alt='fake grass'
                                width={'480px'}
                                height={'480px'}
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='ag-features ag-features-2'>
                <Container>
                    <div className='row'>
                        <div
                            className={classNames(
                                'ag-features-carousel',
                                'col-12 col-lg-6'
                            )}>
                            <Carousel />
                        </div>
                        <div className='ag-features-content col'>
                            <div>
                                <h2>
                                    <span>Installation service</span> in
                                    Cheshire &amp; South Manchester
                                </h2>
                                <p>
                                    Greenscapes have experienced teams that have
                                    fitted hundreds of different artificial
                                    grass. This means we can typically fit your
                                    grass far more quickly than usual
                                </p>
                                <div className='ag-feature-container'>
                                    {[
                                        'child friendly',
                                        'water resistant',
                                        'colourfast',
                                        'flame retardant',
                                        'UV resistant',
                                        'pet friendly',
                                    ].map((item, index) => (
                                        <div
                                            className='ag-feature-item'
                                            key={index}>
                                            <img
                                                src='/icon-check-square.svg'
                                                alt='check square icon'
                                                width='40'
                                                height={40}
                                            />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='ag-banner'>
                <div className='ag-banner-content'>
                    <h2>
                        Your local artificial{' '}
                        <span>grass fitting specialists</span>
                    </h2>
                    <div className='ag-btn-container'>
                        <button className='ag-btn'>
                            <a href='tel:+441614250035' className='ag-btn-text'>
                                call us for a free no obligation quote
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <FAQ />

            <Footer />
        </>
    );
};

const Nav = ({}) => (
    <div style={{ height: '100px' }}>
        <Container>
            <div
                style={{
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <img src='/greenscapes-artificial-grass-logo.svg' />
                <div className='ag-contact'>
                    <span>
                        <img
                            className='ag-icon'
                            src='/icon-mobile.svg'
                            alt='mobile'
                        />

                        <a href='tel:+447772656034'>07772 656034</a>
                    </span>
                    <span>
                        <img
                            className='ag-icon'
                            src='/icon-phone.svg'
                            alt='phone'
                        />

                        <a href='tel:+441614250035'>0161 425 0035</a>
                    </span>
                    <span>
                        <img
                            className='ag-icon'
                            src='/icon-envelope.svg'
                            alt='email'
                        />

                        <a href='mailto:info@greenscapes-artificalgrass.co.uk'>
                            info@greenscapes-artificalgrass.co.uk
                        </a>
                    </span>
                </div>
            </div>
        </Container>
    </div>
);

const Container = ({ children }) => <div className='container'>{children}</div>;

const FAQ = () => {
    const [activeId, setActiveId] = useState(0);

    return (
        <div className={'faq-section'}>
            <Container>
                <div className='row'>
                    <div className='col'>
                        <h2 className='title'>Frequently asked questions</h2>
                        <div className='question-container'>
                            {questions &&
                                questions.map((q, i) => (
                                    <div key={i}>
                                        <Question
                                            active={
                                                i === activeId ? true : false
                                            }
                                            id={i}
                                            setActiveId={setActiveId}
                                            q={q.question}
                                        />
                                        <div
                                            className={classNames(
                                                'answer-container',
                                                activeId === i && 'is-active'
                                            )}>
                                            <div className={'answer'}>
                                                <h3>{q.question}</h3>
                                                <p>{q.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const Question = ({ active, q, id, setActiveId }) => (
    <div
        className={classNames('question', active && 'is-active')}
        onClick={() => setActiveId(id)}>
        <img
            src={'/faq-full.svg'}
            width='24px'
            height='24px'
            alt='icon circle right active'
            className={classNames('circle-image', active && 'is-active')}
        />
        <img
            src={'/faq-null.svg'}
            width='24px'
            height='24px'
            alt='icon circle right inactive'
            className={classNames('circle-image', !active && 'is-active')}
        />
        <img
            src={'/icon-angle-right-full.svg'}
            width='8px'
            height='16px'
            alt='icon angle right active'
            className={classNames('angle-image', active && 'is-active')}
        />
        <img
            src={'/icon-angle-right-null.svg'}
            width='8px'
            height='16px'
            alt='icon angle right inactive'
            className={classNames('angle-image', !active && 'is-active')}
        />
        <p>{q}</p>
    </div>
);

const questions = [
    {
        question: 'Is Artificial Lawn Suitable For Both Children And Dogs?',
        answer: 'Yes. Our grasses are at their best when they are in well-used gardens. There is artificial grasses ideal for dogs, for children’s play and for multiple uses.',
    },
    {
        question: 'Is Artificial Lawn Abrasive To Skin?',
        answer: 'No. Unlike older artificial grasses, our range of synthetic lawns has soft polyethene fibres that will not graze young skin.',
    },
    {
        question: 'Can Water Travel Through Artificial Lawn?',
        answer: 'Yes. Artificial grass is porous, with holes in the specially-designed backing allowing free drainage',
    },
    {
        question: 'Does GREENSCAPES Offer An Installation Service?',
        answer: 'Yes. We have a team of experienced installation experts who are well-versed in our products and deliver quality installations every time.',
    },
    {
        question: 'Does Artificial Lawn Require Maintenance?',
        answer: 'Yes. While an artificial lawn will require much less maintenance than your traditional lawn, it does still need some basic care. To keep the grass looking at its best, leaves and debris should be removed on a fairly regular basis. Your lawn will benefit from occasional brushing with a stiff brush and, for more extreme soiling, may need a quick hose wash.',
    },
    {
        question: 'Is Artificial Lawn Environmentally Friendly?',
        answer: 'Yes. Artificial lawns do not need to be watered like real grass. Additionally, chemical fertilisers and harmful weed killers are not necessary. Another bonus is that you don’t need to mow the lawn every weekend, so you can even reduce your carbon footprint.',
    },
    {
        question: 'Can Artificial Grass Be Laid on Decking?',
        answer: 'Our artificial grasses can absolutely be laid on decking. However, it’s important to make sure that your decking is in good condition with a gap of less than 1cm between decking boards.',
    },
    {
        question: 'What can Artificial Grass Be Used for?',
        answer: 'Artificial grass surfaces can be used for much more than just residential gardens. Whether you want to invest in an all-weather artificial sports surface, are looking for a unique way to make your exhibition stand out or simply want to give your garden a new lease of life, artificial grass can be used.',
    },
    {
        question: 'Can You Put a Trampoline on Artificial Grass?',
        answer: 'In short - yes, you can. This is because as long as the legs of the trampoline – or, indeed, any other heavy object – are not sharp, then the artificial grass will remain in a healthy condition. You should ensure, though, that the sub-base below the artificial grass surface has been properly installed to ensure there is no lasting indentation from where the trampoline has been sat over a prolonged period. A deeper subbase and thorough compaction will prevent this even for things that are very heavy!',
    },
];

export default Page;
