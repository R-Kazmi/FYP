import React from "react";
import Card from "./Card";

function SecondSe() {
  return (
    <section id="jtRWN" className="second-section my-[-3rem] mx-auto w-[75vw]">
      {/* content container */}
      <div className="content-container relative grid grid-cols-3 gap-[3.5rem]">
        {/* card */}
        <Card
          img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          category="Community"
          title="HIL: Darren Carver-Balsiger."
          date="20 Feb 2022"
          author="JACK MOULTON"
        />
        <Card
          img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          category="Interview"
          title="Seeing Faces."
          date="17 Feb 2022"
          author="ELLA KEMP"
        />
        <Card
          img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          category="Interview"
          title="Fighting Spirit."
          date="14 Feb 2022"
          author="GEMMA GRACEWOOD"
        />
        <Card
          img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          category="Community"
          title="HIL: Darren Carver-Balsiger."
          date="20 Feb 2022"
          author="JACK MOULTON"
        />
        <Card
          img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          category="Interview"
          title="Seeing Faces."
          date="17 Feb 2022"
          author="ELLA KEMP"
        />
        <Card
          img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          category="Interview"
          title="Fighting Spirit."
          date="14 Feb 2022"
          author="GEMMA GRACEWOOD"
        />

        <hr className="w-[75vw] m-2 " />
        <span className="absolute bottom-3 right-0 text-[#9AB] text-xs cursor-pointer hover:text-[#445566]">
          older Articles
        </span>
      </div>
    </section>
  );
}

export default SecondSe;
