import React from 'react'
import HeroImage from '../../assets/hero-image.png'

function Banner() {
    return (
        <section className='relative'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                {/* Hero content */}
                <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
                    {/* Section header */}
                    <div className='text-center pb-12 md:pb-16'>
                        <h1
                            className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
                            data-aos='zoom-y-out'
                        >
                            Make your website{' '}
                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                                wonderful
                            </span>
                        </h1>
                        <div className='max-w-3xl mx-auto'>
                            <p
                                className='text-xl text-gray-600 mb-8'
                                data-aos='zoom-y-out'
                                data-aos-delay='150'
                            >
                                Our landing page template works on all devices,
                                so you only have to set it up once, and get
                                beautiful results forever.
                            </p>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div>
                        <div
                            className='relative flex justify-center mb-8'
                            data-aos='zoom-y-out'
                            data-aos-delay='450'
                        >
                            <div className='flex flex-col justify-center'>
                                <img
                                    className='mx-auto'
                                    src={HeroImage}
                                    width='768'
                                    height='432'
                                    alt='Hero'
                                />
                                <svg
                                    className='absolute inset-0 max-w-full mx-auto md:max-w-none h-auto'
                                    width='768'
                                    height='432'
                                    viewBox='0 0 768 432'
                                    xmlns='http://www.w3.org/2000/svg'
                                    xmlnsXlink='http://www.w3.org/1999/xlink'
                                >
                                    <defs>
                                        <linearGradient
                                            x1='50%'
                                            y1='0%'
                                            x2='50%'
                                            y2='100%'
                                            id='hero-ill-a'
                                        >
                                            <stop
                                                stopColor='#FFF'
                                                offset='0%'
                                            />
                                            <stop
                                                stopColor='#EAEAEA'
                                                offset='77.402%'
                                            />
                                            <stop
                                                stopColor='#DFDFDF'
                                                offset='100%'
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            x1='50%'
                                            y1='0%'
                                            x2='50%'
                                            y2='99.24%'
                                            id='hero-ill-b'
                                        >
                                            <stop
                                                stopColor='#FFF'
                                                offset='0%'
                                            />
                                            <stop
                                                stopColor='#EAEAEA'
                                                offset='48.57%'
                                            />
                                            <stop
                                                stopColor='#DFDFDF'
                                                stopOpacity='0'
                                                offset='100%'
                                            />
                                        </linearGradient>
                                        <radialGradient
                                            cx='21.152%'
                                            cy='86.063%'
                                            fx='21.152%'
                                            fy='86.063%'
                                            r='79.941%'
                                            id='hero-ill-e'
                                        >
                                            <stop
                                                stopColor='#4FD1C5'
                                                offset='0%'
                                            />
                                            <stop
                                                stopColor='#81E6D9'
                                                offset='25.871%'
                                            />
                                            <stop
                                                stopColor='#338CF5'
                                                offset='100%'
                                            />
                                        </radialGradient>
                                        <circle
                                            id='hero-ill-d'
                                            cx='384'
                                            cy='216'
                                            r='64'
                                        />
                                    </defs>
                                    <g fill='none' fillRule='evenodd'>
                                        <circle
                                            fillOpacity='.04'
                                            fill='url(#hero-ill-a)'
                                            cx='384'
                                            cy='216'
                                            r='128'
                                        />
                                        <circle
                                            fillOpacity='.16'
                                            fill='url(#hero-ill-b)'
                                            cx='384'
                                            cy='216'
                                            r='96'
                                        />
                                        <g fillRule='nonzero'>
                                            <use
                                                fill='#000'
                                                xlinkHref='#hero-ill-d'
                                            />
                                            <use
                                                fill='url(#hero-ill-e)'
                                                xlinkHref='#hero-ill-d'
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
