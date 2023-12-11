import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import { useState } from "react";

export function Gallery({ images, imageCategories }) {
    const [displayImages, setDisplayImages] = useState(images);
    const handleFilter = (categoryId) => {
        if (categoryId > 0) {
            setDisplayImages(
                images.filter(function (image) {
                    return image.categoryId === categoryId;
                })
            );
        } else {
            setDisplayImages(images);
        }
    };
    return (
        <div className="App">
            <div>
                <h2>Photo Gallary</h2>
                <span>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </span>
            </div>
            <div className="filtrs">
                <span
                    className="badge badge--info"
                    onClick={() => handleFilter("")}
                >
                    All
                </span>
                {imageCategories &&
                    imageCategories.map((category) => {
                        return (
                            <span
                                key={category.categoryId}
                                className="badge badge--info"
                                onClick={() =>
                                    handleFilter(category.categoryId)
                                }
                            >
                                {category.categoryName}
                            </span>
                        );
                    })}
            </div>

            <LightGallery download={false} speed={500} plugins={[lgThumbnail]}>
                {displayImages.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.caption} src={image.src} />
                        </a>
                    );
                })}
            </LightGallery>
        </div>
    );
}
