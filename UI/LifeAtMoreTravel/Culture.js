import * as React from "react";

function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex gap-5 justify-between self-center px-5 w-full text-lg max-w-[1271px] max-md:flex-wrap max-md:max-w-full">
        <div className="shrink-0 rounded-full bg-zinc-300 h-[46px] w-[46px]" />
        <nav className="flex gap-5 my-auto text-black max-md:flex-wrap">
          <a href="#">Home</a>
          <a href="#">Careers</a>
          <a href="#">Internships</a>
          <a href="#" className="flex-auto font-medium">Life at More Travel</a>
          <a href="#" className="flex-auto font-medium">Hiring Tips</a>
          <a href="#" className="flex-auto font-bold">Testimonials</a>
        </nav>
        <div className="flex gap-5 justify-between self-start mt-1.5 font-medium">
          <a href="#" className="justify-center px-7 py-3 text-white bg-sky-600 rounded-2xl max-md:px-5">
            Apply Now
          </a>
          <a href="#" className="my-auto text-sky-600">LOGIN</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="flex overflow-hidden relative flex-col px-11 pb-20 mt-9 w-full text-6xl font-semibold text-white min-h-[254px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80dd1bdf3ff42abc5c22063d7cb420e8094ef6818ad38e1553205632f08c27fe?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="relative shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
      <h1 className="relative self-start mt-32 ml-16 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Life at More Travel
      </h1>
    </section>
  );
}

function Intro() {
  return (
    <section className="flex flex-col self-center px-5 mt-20 w-full max-w-[1216px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-medium text-zinc-800 max-md:max-w-full max-md:text-4xl">
        Explore what we have to offer...
      </h2>
      <div className="flex gap-5 justify-between self-start mt-6 text-2xl leading-8 text-center text-black max-md:flex-wrap max-md:max-w-full">
        <a href="#" className="justify-center items-center px-16 py-5 whitespace-nowrap border-solid border-[3px] border-slate-600 border-opacity-10 rounded-[100px] max-md:px-5">
          Benefits
        </a>
        <a href="#" className="justify-center items-center px-16 py-6 text-white whitespace-nowrap bg-black rounded-[100px] max-md:px-5">
          Culture
        </a>
        <a href="#" className="justify-center items-center px-16 py-5 whitespace-nowrap border-solid border-[3px] border-slate-600 border-opacity-10 rounded-[100px] max-md:px-5">
          Diversity
        </a>
        <a href="#" className="justify-center px-16 py-5 border-solid border-[3px] border-slate-600 border-opacity-10 rounded-[100px] max-md:pr-5 max-md:pl-6">
          Flexible Work
        </a>
      </div>
    </section>
  );
}

function CultureItem({ title, imageUrl }) {
  return (
    <div className="overflow-hidden relative flex-col justify-center items-start px-10 pt-60 pb-16 whitespace-nowrap aspect-[0.89] max-md:px-5 max-md:pt-10">
      <img loading="lazy" src={imageUrl} alt="" className="object-cover absolute inset-0 size-full" />
      {title}
    </div>
  );
}

function Culture() {
  const cultureItems = [
    { title: "Inclusiveness", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/240c7e0e96f9d396a4f7f33a5e28f3ae57215a1013cfbd6181b21ccbfa6e1fe3?apiKey=ce6a525162fa4c1692f4c477ef34b183&" },
    { title: "Togetherness", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/74a38eff54dcce64ac52932741bb96b734ce13e7172f23bdd70fcafe219b451a?apiKey=ce6a525162fa4c1692f4c477ef34b183&" },
    { title: "Collaboration", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa0592dcd47c142f4eaa1e37612077fe70294a97189b2919fef6850930a4b2d0?apiKey=ce6a525162fa4c1692f4c477ef34b183&" },
    { title: "Supportive Environment", imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e298f6d9a3fbd3d500d612691b2d3bcd7574f9c20a5b6cf5ea1e29075fbeb8a?apiKey=ce6a525162fa4c1692f4c477ef34b183&" },
  ];

  return (
    <section className="flex flex-col items-start py-20 pl-20 mt-16 w-full bg-slate-400 bg-opacity-10 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="mt-1.5 ml-4 text-4xl italic font-semibold text-slate-400 max-md:max-w-full">Culture</h2>
      <div className="flex gap-5 justify-between px-0.5 mt-9 ml-4 text-2xl font-semibold leading-8 text-white max-md:flex-wrap max-md:max-w-full">
        {cultureItems.map((item, index) => (
          <CultureItem key={index} title={item.title} imageUrl={item.imageUrl} />
        ))}
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9554e23f049c233cbeb725796b1b8e2809f6f127d4bad6e905088d6c6b4ff055?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="" className="shrink-0 aspect-[0.07] w-[25px] max-md:hidden" />
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-start self-center mt-14 mb-4 max-w-full border-8 border-solid border-zinc-200 min-h-[8px] stroke-[8px] stroke-zinc-200 w-[1248px] max-md:pr-5 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d76ff3065482f1d1bdc30361bfb172579d200c417644ac494c33a0ea16d1b02?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ecc37ef4ac799f3ec3fa52f0122ecf90a621b1a9180879ac878323364108199?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="" className="max-w-full border-8 border-solid aspect-[100] border-neutral-300 stroke-[8px] stroke-neutral-300 w-[923px]" />
      </div>
    </section>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Intro />
      <Culture />
    </div>
  );
}

export default MyComponent;
