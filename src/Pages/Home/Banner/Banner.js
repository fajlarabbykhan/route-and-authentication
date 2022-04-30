import React from 'react';
import img1 from '.././../../Images/womens-fitness-news.jpg'
import img2 from '.././../../Images/nj-com-news.jpg'
const Banner = () => {
    return (
        <div className='m-4'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-lg-2 g-2 g-lg-3'>
                    <div className="col">
                        <div className="p-3 h-100 " >
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active bg-secondary.bg-gradient">
                                        <h3>THANKS FOR EVERYTHING</h3>
                                        <p>I have used Ken Aita for a couple traffic issues in the past and recently was having an ongoing issue with my neighbors that were accusing me of something that I am not... I reached out to Ken for advice and he said he would handle it. It wound up going to court and Ken...</p>
                                        <p>-Rob</p>
                                    </div>
                                    <div className="carousel-item">
                                        <h3>EXCELLENT EXPERIENCE</h3>
                                        <p>I have heard great things about Kenneth Aita. I decided I was going to reach out for Kenneth and find out for myself, when I needed him. Kenneth was extremely helpful and was always very quick to respond when needed. I was also very impressed with his experience and knowledge within his profession. He definitely...
                                        </p>
                                        <p>- Nick</p>
                                    </div>
                                    <div className="carousel-item">
                                        <h3>NO WORDS CAN EVER DESCRIBE HOW I FEEL</h3>
                                        <p>No words can ever describe how I feel. I am honored to have worked with Mr. Kenneth he is a God sent. I admire his professionalism, his hard work, and dedication. he's the type of person that will go the extra mile to get you results. Thank you so much for giving me back my...
                                        </p>
                                        <p>- Aldalberto Prince</p>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3  bg-light">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img1} className="d-block w-100 img-fluid" alt="..." />

                                    </div>
                                    <div className="carousel-item">
                                        <img src={img2} className="d-block w-100 img-fluid" alt="..." />

                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;