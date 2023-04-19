import { useState } from 'react'

import arrow from '../assets/arrow.svg'
import arrowRight from '../assets/arrow-right.svg'
import avatar from '../assets/avatar.jpg'
import dots from '../assets/dots.svg'
import dog1 from '../assets/dog-image-1.jpg'
import dog2 from '../assets/dog-image-2.jpg'
import dog3 from '../assets/dog-image-3.jpg'

export default function ChatApp() {

    return (
        <div className="app">
            <div className="app__noch">
                <div className="noch"></div>
            </div>
            <div className="app__bg">
                <header className="app__header">
                    <img
                        className='app__arrow'
                        src={arrow}
                        alt="arrow left white"
                    />
                    <div className='app__user'>
                        <img
                            className='app__user-img'
                            src={avatar}
                            alt="avatar samuel green"
                        />
                        <div className='app__user-flex'>
                            <h2 className='app__user-name'>Samuel Green</h2>
                            <p className='app__user-status'>Available to Walk</p>
                        </div>
                    </div>
                    <img
                        className='app__dots'
                        src={dots}
                        alt="three dots white"
                    />
                </header>

                <main className='app__main'>
                    <div className='block-1'>
                        <div
                            className={`msg`}
                        >
                            <p className="msg__text">
                                That sounds great. I’d be happy to discuss more.
                            </p>
                        </div>
                        <div
                            className={`msg`}
                        >
                            <p className="msg__text">
                                Could you send over some pictures of your dog, please?
                            </p>
                        </div>
                    </div>
                    <div className='block-2'>
                        <figure className='imgs'>
                            <img
                                className={`img-dog`}
                                src={dog1}
                                alt="dog, smile, golden"
                            />
                            <img
                                className={`img-dog`}
                                src={dog2}
                                alt="dog, looking to front"
                            />
                            <img
                                className={`img-dog`}
                                src={dog3}
                                alt="dog, with a stick"
                            />
                        </figure>
                        <div
                            className={`msg msg--right`}
                        >
                            <p className='msg__text msg__text--right'>
                                Here are a few pictures. She’s a happy girl!
                            </p>
                        </div>
                        <div
                            className={`msg msg--right`}
                        >
                            <p className='msg__text msg__text--right'>
                                Can you make it?
                            </p>
                        </div>
                    </div>
                    <div className='block-3'>
                        <div
                            className={`msg`}
                        >
                            <p className="msg__text">
                                She looks so happy! The time we discussed works. How long shall I take her out for?
                            </p>
                        </div>
                        <div
                            className={`price-box price-box-1`}
                        >
                            <input type="radio" name="price" id="price" />
                            <p className='price-box__text'>
                                30 minute walk
                            </p>
                            <p className='price-box__price'>$29</p>
                        </div>
                        <div
                            className={`price-box price-box-2`}
                        >
                            <input type="radio" name="price" id="price" />
                            <p className='price-box__text'>
                                1 hour walk
                            </p>
                            <p className='price-box__price'>$49</p>
                        </div>
                    </div>
                </main>

                <form className='footer'>
                    <input type="text" name="message" id="message" placeholder='Type a message…' />
                    <button className='footer__btn' type='submit'>
                        <img
                            src={arrowRight}
                            alt="arrow to right"
                        />
                    </button>
                </form>
            </div>
        </div>
    )
}
