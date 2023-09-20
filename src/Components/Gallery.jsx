/* eslint-disable react/prop-types */
import { useCallback, Children } from "react";
import Card from "./Card";

const Gallery = ({ images, setImages, isLoggedIn }) => {
  const moveImage = useCallback(
    (dragIndex, hoverIndex) => {
      setImages((prevCards) => {
        const clonedCards = [...prevCards];
        const removedItem = clonedCards.splice(dragIndex, 1)[0];

        clonedCards.splice(hoverIndex, 0, removedItem);
        return clonedCards;
      });
    },
    [setImages]
  );

  return (
    <>
      {!isLoggedIn && (
        <p className="text-center mb-4 text-red-200 font-medium text-sm md:text-base">
          You need to be logged in to re-arragnge images in the Folio
        </p>
      )}
      <div className="custom-grid md:mx-8 mx-4">
        {Children.toArray(
          images.map((el, index) => (
            <Card
              key={el.id}
              url={el.url}
              tags={el.tags}
              alt={el.alt}
              index={index}
              moveImage={isLoggedIn && moveImage}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Gallery;
