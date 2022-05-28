import { data } from '../../pages/sections/portfolio/portfolio.data';

function ImageGallery() {
  return (
    <div className="grid-parent">
      {data.map(({ id, image, overlayText }) => (
        <>
          {overlayText ? (
            <div className={`item-${id}`} key={id}>
              <div className="picture-overlay-text">
                <h4>{overlayText.title}</h4>
                <p>{overlayText.text}</p>
              </div>
              <img src={image} alt="" />
            </div>
          ) : (
            <div className={`item-${id}`} key={id}>
              <img src={image} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
export default ImageGallery;
