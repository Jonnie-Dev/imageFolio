/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
// import React from "react";

const Card = ({ url, tags, alt, index, id, moveImage }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveImage(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const opacity = isDragging ? 0.25 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className=" bg-slate-300 rounded-2xl relative md:cursor-pointer  shadow-md overflow-hidden hover:[&>img]:scale-110 h-[350px] flex justify-center items-center"
    >
      <img
        className="object-cover h-full w-full transition-all"
        src={url}
        alt={alt}
      />
      <div className=" absolute bottom-0 left-0 flex gap-2 flex-wrap px-2 py-2">
        {tags[0] &&
          tags.slice(0, 6).map((el) => (
            <p
              className="bg-opacity-60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-grey-700 bg-slate-700 "
              key={el}
            >
              {el}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Card;
