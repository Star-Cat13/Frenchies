


function Gallery() {

    return (
        <>
            <div>
                {/* <div className="container">

                    <h1 className="heading">Elemental Frenchies <span>Carbon</span></h1>

                    <div className="gallery">

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/carbon1.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/carbon2.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/carbon2b.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/carbon3.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/carbon3b.jpg?raw=true" />
                        </div>

                    </div>
                    <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui iusto doloribus quasi numquam nostrum minus necessitatibus veniam modi, velit error, aliquam magnam! Animi modi ducimus, impedit nemo rem cumque aut?</p>
                    </div>
                </div> */}
                <section className="gallery">
                    <div className="gallery__item">
                        <input type="radio" id="img-1" checked name="gallery" className="gallery__selector" />
                        <img className="gallery__img" src="https://picsum.photos/id/1015/600/400.jpg" alt="" />
                        <label htmlFor="img-1" className="gallery__thumb"><img src="https://picsum.photos/id/1015/150/100.jpg" alt="" /></label>
                    </div>
                    <div className="gallery__item">
                        <input type="radio" id="img-2" name="gallery" className="gallery__selector" />
                        <img className="gallery__img" src="https://picsum.photos/id/1039/600/400.jpg" alt="" />
                        <label htmlFor="img-2" className="gallery__thumb"><img src="https://picsum.photos/id/1039/150/100.jpg" alt="" /></label>
                    </div>
                    <div className="gallery__item">
                        <input type="radio" id="img-3" name="gallery" className="gallery__selector" />
                        <img className="gallery__img" src="https://picsum.photos/id/1057/600/400.jpg" alt="" />
                        <label htmlFor="img-3" className="gallery__thumb"><img src="https://picsum.photos/id/1057/150/100.jpg" alt="" /></label>
                    </div>
                    <div className="gallery__item">
                        <input type="radio" id="img-4" name="gallery" className="gallery__selector" />
                        <img className="gallery__img" src="https://picsum.photos/id/106/600/400.jpg" alt="" />
                        <label htmlFor="img-4" className="gallery__thumb"><img src="https://picsum.photos/id/106/150/100.jpg" alt="" /></label>
                    </div>
                </section>
                <div className="container">

                    <h1 className="heading">Elemental Frenchies <span>Copper</span></h1>

                    <div className="gallery">

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/copper1.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/copper2.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/copper2b.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/copper3.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/copper3b.jpg?raw=true" />
                        </div>


                    </div>
                    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste rerum itaque hic? Dolorem doloribus itaque, eaque consequuntur neque quisquam ullam alias nobis debitis nostrum porro sequi quia laudantium laboriosam. </p>
                    </div>

                </div>

                <div className="container">

                    <h1 className="heading">Elemental Frenchies <span>Lithium</span></h1>

                    <div className="gallery">

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/lithium1.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/lithium2.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/lithium2b.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/lithium3.jpg?raw=true" />
                        </div>

                        <div className="gallery-item">
                            <img className="gallery-image" src="https://github.com/Star-Cat13/Frenchies/blob/main/public/elepuppies/lithium3b.jpg?raw=true" />
                        </div>


                    </div>
                    <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cupiditate, magnam dolorum, odit officia delectus repellendus sequi culpa maiores voluptates quibusdam minima ad fuga, vel neque architecto iusto. Dolorum, sunt!</p></div>

                </div>
            </div>

            <div >
                <script src='../scripts/carousel.js'></script>
            </div >
        </>
    );
}

export default Gallery;