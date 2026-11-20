
import { useState } from 'react';
import './Gallery.css';

function Gallery({
  images = [],
  width = '100%',
  height = '400px',
  radius = '4px',
  showThumbs = false,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const selectedImage = images[currentIndex];

  const galleryStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: radius,
  };

  function previousImage() {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  function nextImage() {
    setCurrentIndex((index) =>
      Math.min(index + 1, images.length - 1)
    );
  }

  return (
    <div className={`gallery ${className}`}>
      <div className="gallery-main" style={galleryStyle}>
        <img
          src={selectedImage.src}
          alt={selectedImage.alt || 'Imagem do produto'}
        />

        <button
          className="gallery-arrow gallery-arrow-left"
          type="button"
          onClick={previousImage}
          disabled={currentIndex === 0}
          aria-label="Imagem anterior"
        >
          &#10094;
        </button>

        <button
          className="gallery-arrow gallery-arrow-right"
          type="button"
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
          aria-label="Próxima imagem"
        >
          &#10095;
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className={`gallery-thumbnail ${
                currentIndex === index ? 'selected' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Selecionar imagem ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt || `Miniatura ${index + 1}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
