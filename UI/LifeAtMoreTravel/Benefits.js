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
        <a href="#" className="justify-center items-center px-16 py-5 text-white whitespace-nowrap bg-black rounded-[100px] max-md:px-5">
          Benefits
        </a>
        <a href="#" className="justify-center items-center px-16 py-6 whitespace-nowrap border-solid border-[3px] border-slate-600 border-opacity-10 rounded-[100px] max-md:px-5">
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

function BenefitCard({ title, imageSrc }) {
  return (
    <div className="overflow-hidden relative flex-col justify-center px-10 pt-48 pb-16 aspect-[0.89] max-md:px-5 max-md:pt-10">
      <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
      {title}
    </div>
  );
}

function Benefits() {
  const benefits = [
    {
      title: "Opportunities for Professional Growth",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bef9a7d0014d54d10e92c75107881045adce763a9a1ba4676cbf3f237f0f9509?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
    },
    {
      title: "Inclusive and Supportive Culture",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f09da7d9c1bdd1aee1e6245aeb6e60a7092aeee3d4fa09dd4d803b9095e91815?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
    },
    {
      title: "Employee Well-Being",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a84495d949a2127d576e49e5f2136887ecbad021c5567da9fc07485f7d10ee68?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
    },
    {
      title: "Passionate Team & Collaborative Environment",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/656e91aab568f2cf871e8125a240b7e9df5791f6214a527d9e145787e33080ab?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
    },
  ];

  return (
    <section className="flex flex-col items-start py-20 pl-20 mt-16 w-full bg-stone-100 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="mt-1 ml-4 text-4xl italic font-semibold text-lime-700 max-md:max-w-full">Benefits</h2>
      <div className="flex gap-5 justify-between px-0.5 mt-9 ml-4 text-2xl font-semibold leading-8 text-white max-md:flex-wrap max-md:max-w-full">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} title={benefit.title} imageSrc={benefit.imageSrc} />
        ))}
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed8bb1ab59bbf9cc649969e4ab17c365fcb2fc0eb64aa11d6a0681dc942a0ee?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="" className="shrink-0 aspect-[0.07] w-[25px] max-md:hidden" />
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-start self-center mt-14 mb-4 max-w-full border-8 border-solid border-neutral-200 min-h-[8px] stroke-[8px] stroke-neutral-200 w-[1248px] max-md:pr-5 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4f770912403c7cf543f2aea8d36bd4e4fc0a18495a4d1d45117cae623198824?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91959a5a83f2ee772ca863d8df711307272be7762bbeccd66ba3d52343a51881?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="" className="max-w-full border-8 border-solid aspect-[100] border-stone-300 stroke-[8px] stroke-stone-300 w-[923px]" />
      </div>
    </section>
  );
}

function MyComponent() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Benefits />
      </main>
    </>
  );
}

export default MyComponent;
