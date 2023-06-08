import '../assets/carousel.css'


function Carousel1() {
    return (
        <div>

            <div id="drag-container">
            
                <div id="spin-container">
                    {/* <!-- Add your images (or video) here --> */}
                    <img src="../public/pictures/elepuppies/carbon1.jpg" alt="" />
                    <img src="../public/pictures/elepuppies/carbon2.jpg" alt="" />
                    <img src="../public/pictures/elepuppies/carbon2b.jpg" alt="" />
                    <img src="../public/pictures/elepuppies/carbon3.jpg" alt="" />
                    <img src="../public/pictures/elepuppies/carbon3b.jpg" alt="" />
                    <img src="../public/pictures/elepuppies/carbon1.jpg" alt="" />

                


                    {/* <!-- Example image with link -->
                                                <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">
                                                    <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                                                </a>

                                                <!-- Example add video  -->
                                                <video controls autoplay="autoplay" loop>
                                                    <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4">
                                                </video> */}

                    {/* <!-- Text at center of ground --> */}
                    <p>Treasure State Frenchies</p>
                </div>
                <div id="ground"></div>
            </div>

        </div>
    );
};

export default Carousel1;

