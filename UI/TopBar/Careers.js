import * as React from "react";

const jobs = [
  {
    id: 1,
    title: "Technology and Systems Manager",
    description: "Oversee booking systems, website, and tech infrastructure.",
    location: "Chennai, India",
    date: "20 May, 2023",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d157e8bc53bdf2a07436063a724e2bf3e027b31c761ad2002fecb238ffd83dd?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
  },
  {
    id: 2,
    title: "Sales Representative",
    description:
      "Sell travel packages, accommodations, services, work with clients, etc.",
    location: "Seattle, WA",
    date: "20 May, 2023",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e51fa1b641ee4c3f585d34bea672edfb523ce92e60a7b1d49b4a394c232c765?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    description:
      "Implement digital strategies to promote services, engage, etc.",
    location: "New Delhi, India",
    date: "20 May, 2023",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/eefd109906aa3904bca729333acf9b1dc1c7e14877eb0c7c9d94a53dee5692cf?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
  },
  {
    id: 4,
    title: "Technology and Systems Manager",
    description: "Oversee booking systems, website, and tech infrastructure.",
    location: "Chennai, India",
    date: "20 May, 2023",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d157e8bc53bdf2a07436063a724e2bf3e027b31c761ad2002fecb238ffd83dd?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
  },
  {
    id: 5,
    title: "Sales Representative",
    description:
      "Sell travel packages, accommodations, services, work with clients, etc.",
    location: "Seattle, WA",
    date: "20 May, 2023",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e51fa1b641ee4c3f585d34bea672edfb523ce92e60a7b1d49b4a394c232c765?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
  },
  {
    id: 6,
    title: "Digital Marketing Specialist",
    description:
      "Implement digital strategies to promote services, engage, etc.",
    location: "New Delhi, India",
    date: "20 May, 2023",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/eefd109906aa3904bca729333acf9b1dc1c7e14877eb0c7c9d94a53dee5692cf?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
  },
];

const Header = () => (
  <header className="flex gap-5 justify-between px-5 w-full text-lg font-medium max-w-[1271px] max-md:flex-wrap max-md:max-w-full">
    <div className="shrink-0 rounded-full bg-zinc-300 h-[46px] w-[46px]" />
    <nav className="flex gap-5 my-auto text-black max-md:flex-wrap">
      <a href="/">Home</a>
      <a href="/careers" className="font-bold">
        Careers
      </a>
      <a href="/internships" className="flex-auto">
        Internships
      </a>
      <a href="/life-at-more-travel" className="flex-auto">
        Life at More Travel
      </a>
      <a href="/hiring-tips" className="flex-auto">
        Hiring Tips
      </a>
      <a href="/testimonials" className="flex-auto">
        Testimonials
      </a>
    </nav>
    <div className="flex gap-5 justify-between self-start mt-1.5">
      <a
        href="/apply"
        className="justify-center px-7 py-3 text-white bg-sky-600 rounded-2xl max-md:px-5"
      >
        Apply Now
      </a>
      <a href="/login" className="my-auto text-sky-600">
        LOGIN
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="flex overflow-hidden relative flex-col self-stretch px-11 pb-16 mt-9 w-full min-h-[254px] max-md:px-5 max-md:max-w-full">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac9067aaa0681731702d5026fbc498542e28f5fc0f252d2d97fb6ca34bf35418?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
      alt="Careers hero background"
      className="object-cover absolute inset-0 size-full"
    />
    <div className="relative shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
    <div className="flex relative gap-5 self-center mt-32 w-full max-w-[1218px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <h1 className="flex-auto text-6xl font-semibold text-white max-md:text-4xl">
        Careers
      </h1>
      <form className="flex gap-4 self-start px-7 py-3 mt-2 text-lg bg-white rounded-[37px] text-neutral-500 max-md:px-5">
        <label htmlFor="search" className="sr-only">
          Explore Careers
        </label>
        <input
          type="text"
          id="search"
          placeholder="Explore Careers"
          aria-label="Explore Careers"
          className="bg-transparent outline-none"
        />
        <button type="submit" aria-label="Search">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff4aee3ce402ac3e3b16600c918029ff9e7ab842abbae5394ea0f260ff252ff3?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
            alt="Search icon"
            className="shrink-0 self-start border-2 border-solid aspect-square border-neutral-500 stroke-[2px] stroke-neutral-500 w-[18px]"
          />
        </button>
      </form>
    </div>
  </section>
);

const JobCard = ({ job }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <article className="flex flex-col grow pb-6 mx-auto w-full bg-gray-200 rounded-2xl shadow-sm max-md:mt-10">
      <div className="flex overflow-hidden relative flex-col px-7 pt-6 pb-11 w-full text-white aspect-[1.48] max-md:px-5">
        <img
          loading="lazy"
          src={job.image}
          alt={`${job.title} job image`}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative px-4 pt-3 pb-1.5 mr-44 text-base font-medium text-center bg-white rounded-[34px] text-zinc-800">
          {job.date}
        </div>
        <h2 className="relative mt-4 text-3xl font-semibold leading-9 max-md:mt-10">
          {job.title}
        </h2>
        <p className="relative mt-4 text-base leading-5">{job.description}</p>
      </div>
      <div className="flex gap-5 justify-between mx-9 mt-5 max-md:mx-2.5">
        <div className="flex flex-col leading-[120%]">
          <div className="text-xl font-semibold text-zinc-800">$250/hr</div>
          <div className="mt-1.5 text-base font-medium text-neutral-400">
            {job.location}
          </div>
        </div>
        <a
          href={`/apply/${job.id}`}
          className="justify-center px-9 py-2.5 my-auto text-base font-medium text-center text-white whitespace-nowrap bg-sky-600 rounded-2xl max-md:px-5"
        >
          Apply
        </a>
      </div>
    </article>
  </div>
);

const JobList = () => (
  <div className="px-5 mt-16 w-full max-w-[1253px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      {jobs.slice(0, 3).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
    <div className="flex gap-5 mt-8 max-md:flex-col max-md:gap-0">
      {jobs.slice(3).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </div>
);

function MyComponent() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <JobList />
    </div>
  );
}
