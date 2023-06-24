import React, { useState } from 'react';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState('img-1');

    const handleImageChange = (event: { target: { id: React.SetStateAction<string>; }; }) => {
        setSelectedImage(event.target.id);
    };

    return (
        <section className="gallery">
            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-1"
                    name="gallery"
                    className="gallery__selector"
                    checked={selectedImage === 'img-1'}
                    onChange={handleImageChange}
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/1015/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-1" className="gallery__thumb">
                    <img src="https://picsum.photos/id/1015/150/100.jpg" alt="" />
                </label>
            </div>

            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-2"
                    name="gallery"
                    className="gallery__selector"
                    checked={selectedImage === 'img-2'}
                    onChange={handleImageChange}
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/1039/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-2" className="gallery__thumb">
                    <img src="https://picsum.photos/id/1039/150/100.jpg" alt="" />
                </label>
            </div>

            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-3"
                    name="gallery"
                    className="gallery__selector"
                    checked={selectedImage === 'img-3'}
                    onChange={handleImageChange}
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/1057/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-3" className="gallery__thumb">
                    <img src="https://picsum.photos/id/1057/150/100.jpg" alt="" />
                </label>
            </div>

            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-4"
                    name="gallery"
                    className="gallery__selector"
                    checked={selectedImage === 'img-4'}
                    onChange={handleImageChange}
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/106/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-4" className="gallery__thumb">
                    <img src="https://picsum.photos/id/106/150/100.jpg" alt="" />
                </label>
            </div>

        </section>
    );
}

export default Gallery;