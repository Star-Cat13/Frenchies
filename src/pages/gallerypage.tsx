// import React from 'react'
// import MainLayout from '../layout/MainLayout'
import GridPix from '../components/gridpix'


function Gallery() {

    return (
        <div>
            <div>
                <h1>Gallery</h1>
                
                <div className="gallery">
                    <GridPix />
                </div>
            </div>
            <script src='../scripts/carousel.js'></script>
        </div>
    );
}

export default Gallery;
