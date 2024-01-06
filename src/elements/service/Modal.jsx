import React from 'react';

const Modal = ({ isOpen, onClose, service, selectedIndex, selectMedia }) => {
  if (!isOpen || !service) return null;

  const allMedia = [...service.images, service.video].filter(Boolean); // Combines images and videos, filters out any undefined (if no video)
  const currentItem = allMedia[selectedIndex];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h4>{service.title}</h4> {/* Displaying the title */}
        <div className="main-display">
          {currentItem && currentItem.endsWith('.mp4') ? (
            <video key={selectedIndex} controls muted>
              <source src={currentItem} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img key={selectedIndex} src={currentItem} alt={`Service ${selectedIndex}`} />
          )}
        </div>
        <div className="thumbnails">
          {allMedia.map((item, index) => {
            const isVideo = item.endsWith('.mp4');
            const thumbnailSrc = isVideo ? service.videoThumbnail : item; // use video thumbnail if video

            return (
              <img
                key={index}
                src={thumbnailSrc}
                alt={`Thumbnail ${index}`}
                onClick={() => selectMedia(index)}
                className={index === selectedIndex ? "active" : ""}
              />
            );
          })}
        </div>
       
      </div>
    </div>
  );
};

export default Modal;
