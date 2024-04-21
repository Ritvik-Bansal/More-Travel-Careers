import * as React from "react";

const NavItem = ({ children }) => (
  <div className="flex-auto">{children}</div>
);

const NavItems = [
  { label: "Home", isBold: true },
  { label: "Careers", isBold: false },
  { label: "Internships", isBold: false },
  { label: "Life at More Travel", isBold: false },
  { label: "Hiring Tips", isBold: false },
  { label: "Testimonials", isBold: false },
];

const ExploreItem = ({ imageSrc, title }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow justify-center text-3xl font-semibold leading-9 text-white shadow-sm max-md:mt-6">
      <div className="overflow-hidden relative flex-col justify-center items-start px-10 pt-52 pb-16 w-full aspect-[0.9] max-md:px-5 max-md:pt-10">
        <img src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
        {title}
      </div>
    </div>
  </div>
);

const ExploreItems = [
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/72737693ad81841d40d3dd351cad8ca04f28409d10e68757fb9b0d241bff7a6a?apiKey=ce6a525162fa4c1692f4c477ef34b183&", title: "Job Openings" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9e452b73c096774497b90b662a89abc617e14d997992a44f757f5f5a4bda81d?apiKey=ce6a525162fa4c1692f4c477ef34b183&", title: "Internship Opportunities" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a27151f4771126766beee1ae4711628522b70ad74085158d0b5d445552603ba?apiKey=ce6a525162fa4c1692f4c477ef34b183&", title: "Benefits" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b76b097f0f6d39753c70c017f902649bcf96d2c906fc3923de70fe1b51185ec?apiKey=ce6a525162fa4c1692f4c477ef34b183&", title: "Culture" },
];

function MyComponent() {
  return (
    <>
      <header>
        <nav className="flex gap-5 justify-between self-center px-5 w-full text-lg font-medium max-w-[1271px] max-md:flex-wrap max-md:max-w-full">
          <div className="shrink-0 rounded-full bg-zinc-300 h-[46px] w-[46px]" />
          <div className="flex gap-5 my-auto text-black max-md:flex-wrap">
            {NavItems.map((item, index) => (
              <NavItem key={index}>
                <div className={item.isBold ? "font-bold" : ""}>{item.label}</div>
              </NavItem>
            ))}
          </div>
          <div className="flex gap-5 justify-between self-start mt-1.5">
            <button className="justify-center px-7 py-3 text-white bg-sky-600 rounded-2xl max-md:px-5">
              Apply Now
            </button>
            <div className="my-auto text-sky-600">LOGIN</div>
          </div>
        </nav>
      </header>
      <hr className="mt-9 w-full bg-black border border-black border-solid min-h-[1px] max-md:max-w-full" />
      <main className="flex flex-col px-9 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <section className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-7 text-7xl font-semibold text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                <div className="flex flex-col items-start pt-3.5 mt-5 mr-10 bg-orange-400 rounded-2xl max-md:pr-5 max-md:max-w-full max-md:text-4xl">
                  <div className="items-start px-6 pt-14 pb-7 mt-px ml-3.5 max-w-full italic bg-amber-300 rounded-2xl w-[486px] max-md:pl-5 max-md:max-w-full max-md:text-4xl">
                    Welcome to <br /> More Travel <span className="italic">Careers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74321c4b0dbd2b82abff1ce9ff3b0e5d68ed31dee13af60c31514cdf20b4d2dd?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
                alt="More Travel careers"
                loading="lazy"
                className="grow -mr-0.5 -mb-1 -ml-px w-full aspect-[1.28] max-w-[465px] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </section>
        <h2 className="text-4xl font-medium text-zinc-800 max-md:max-w-full">
          Explore the Endless Possibilities...
        </h2>
        <section className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {ExploreItems.map((item, index) => (
              <ExploreItem key={index} imageSrc={item.imageSrc} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default MyComponent;
