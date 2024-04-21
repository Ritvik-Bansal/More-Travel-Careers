import * as React from "react";

function Header() {
  return (
    <header className="flex gap-5 justify-between w-full max-w-[1271px] max-md:flex-wrap max-md:max-w-full">
      <div className="shrink-0 rounded-full bg-zinc-300 h-[46px] w-[46px]" />
      <nav className="flex gap-5 my-auto text-black max-md:flex-wrap">
        <div className="font-bold">Home</div>
        <div>Careers</div>
        <div className="flex-auto">Internships</div>
        <div className="flex-auto">Life at More Travel</div>
        <div className="flex-auto">Hiring Tips</div>
        <div className="flex-auto">Testimonials</div>
      </nav>
      <div className="flex gap-5 justify-between self-start mt-1.5">
        <button className="justify-center px-7 py-3 text-white bg-sky-600 rounded-2xl max-md:px-5">
          Apply Now
        </button>
        <div className="my-auto text-sky-600">LOGIN</div>
      </div>
    </header>
  );
}

function HeroImage() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/354ab7aa755fd60ccd1cb5cb1ca7562a4c9f3df57df812c78a019e5904e3c497?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
      alt="Hero image"
      className="mt-16 w-full max-w-screen-xl aspect-[1.72] rounded-[32px] max-md:mt-10 max-md:max-w-full"
    />
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-11 pt-10 pb-20 text-lg font-medium bg-black max-md:px-5">
      <Header />
      <div className="shrink-0 self-stretch mt-9 h-px bg-black border border-black border-solid max-md:max-w-full" />
      <HeroImage />
    </div>
  );
}

export default MyComponent;
