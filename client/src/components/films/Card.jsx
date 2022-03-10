import React from "react";

function Card({ img, category, date, title, author }) {
  return (
    <div id="FyyXm">
      <img
        className="transition-all duration-500 hover:scale-105 cursor-pointer"
        src={img}
        alt=""
      />
      <div className="card-content my-4 flex flex-col items-center">
        <p className="text-sm text-[#9AB]">
          <span className="font-black cursor-pointer hover:underline">
            {category}
          </span>{" "}
          • {date}
        </p>
        <h3 className="mt-1 text-[#445566] font-extrabold text-xl hover:underline">
          {title}
        </h3>
        <p className="text-[#9AB] text-center text-xl">
          List maestro Darren Carver-Balsiger on arthouse cinema, enduring
          <em>The Room</em>, obscure essential horror films from around the
          world and tips for how to conduct a Letterboxd community poll.
        </p>
        <p className="mt-1 text-[#9AB] text-sm font-semibold cursor-pointer hover:underline hover:text-[#445566]">
          {author}
        </p>
      </div>
    </div>
  );
}

export default Card;
