import React from "react";

function Main() {
  return (
    <section id="mOCff" className="bg-[#445566] h-[75vh] grid grid-cols-2 gap-[5rem] place-content-center p-32 ">
      {/* image container  */}
      <div className="main-div-img transition-all duration-500 hover:scale-105 cursor-pointer">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>

      {/* text container  */}
      <div className="main-div-text w-96 flex flex-col items-center">
        <p className="text-[#9AB] font-bold cursor-pointer text-xl hover:underline hover:text-[#cdd0d3]">
          Life in Film
        </p>
        <p className="text-white font-bold text-4xl hover:underline">
          Adam Family Values.
        </p>
        <p className="text-[#9AB] font-semibold text-2xl text-center">
          The Adams family discuss their spooky new DIY occult horror
          <em>Hellbender</em>, being scarred by
          <em>Phantasm</em>, rocking out to Courtney Barnett, and why maggots
          make great actors.
        </p>
        <p className="mt-3 text-[#9AB] text-xs font-bold cursor-pointer hover:underline hover:text-[#cdd0d3]">
          AARON YAP
        </p>
      </div>
    </section>
  );
}

export default Main;
