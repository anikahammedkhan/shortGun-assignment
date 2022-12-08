import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full overflow-hidden">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <img src="https://img.freepik.com/premium-photo/stock-market-forex-trading-graph-graphic-concept_73426-102.jpg?w=2000" className=" rounded-lg shadow-2xl" alt='' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className="text-5xl font-bold text-green-500"><span className='text-indigo-500'>TradeX</span><br /> Your Complete Trade Market Solutions</h1>
                                <p className="py-6 font-semibold text-slate-800 text-xl">
                                    With over 5,000 clients since it was founded in 2021, TradeX has grown to a large and well established international investment firm and has become a true industry leader.
                                </p>
                                <Link to="/products" className="btn btn-accent font-bold text-white">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <img src="https://imageio.forbes.com/specials-images/imageserve/6328d05d277b1651c2de2901/0x0.jpg?format=jpg&width=1200" alt='' className='rounded-md shadow-xl' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className="text-5xl font-bold text-green-500"><span className='text-indigo-500'>TradeX</span><br /> Your Complete Trade Market Solutions</h1>
                                <p className="py-6 font-semibold text-slate-800 text-xl">
                                    With over 5,000 clients since it was founded in 2021, TradeX has grown to a large and well established international investment firm and has become a true industry leader.
                                </p>
                                <Link to="/products" className="btn btn-accent font-bold text-white">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <img src="https://www.gannett-cdn.com/-mm-/2c66e9fa6eb290e62bf7cbc6010f40bfdafd2f07/c=0-416-7952-4889/local/-/media/2022/10/05/USATODAY/usatsports/stock-market-analytics-tablet_TlswVXo.jpg?width=2400&height=1350&fit=crop&format=pjpg&auto=webp" alt='' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className="text-5xl font-bold text-green-500"><span className='text-indigo-500'>TradeX</span><br /> Your Complete Trade Market Solutions</h1>
                                <p className="py-6 font-semibold text-slate-800 text-xl">
                                    With over 5,000 clients since it was founded in 2021, TradeX has grown to a large and well established international investment firm and has become a true industry leader.
                                </p>
                                <Link to="/products" className="btn btn-accent font-bold text-white">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <img src="https://phonoteka.org/uploads/posts/2021-04/1618477649_53-p-fon-investitsii-56.jpg" alt='' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className="text-5xl font-bold text-green-500"><span className='text-indigo-500'>TradeX</span><br /> Your Complete Trade Market Solutions</h1>
                                <p className="py-6 font-semibold text-slate-800 text-xl">
                                    With over 5,000 clients since it was founded in 2021, TradeX has grown to a large and well established international investment firm and has become a true industry leader.
                                </p>
                                <Link to="/products" className="btn btn-accent font-bold text-white">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;