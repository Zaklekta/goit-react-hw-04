import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.list}>
      {pictures !== null &&
        Array.isArray(pictures.results) &&
        pictures.results.length === 0 && (
          <p>Sorry, there are no results for your query</p>
        )}
      {pictures !== null &&
        Array.isArray(pictures.results) &&
        pictures.results.map((picture) => {
          return (
            <li key={picture.id} className={css.item}>
              <ImageCard
                src={picture.urls.small}
                alt={picture.alt_description}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
