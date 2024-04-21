import * as React from "react";

const internshipData = [
  {
    title: "Skill Development",
    description: (
      <>
        Interns at More Travel have the opportunity to{" "}
        <span className="font-bold">develop</span> and{" "}
        <span className="font-bold">enhance</span> their skills through
        hands-on experiences and <span className="font-bold">exposure</span>{" "}
        to various aspects of the travel industry.
        <br />
        <br />
        We provide <span className="font-bold"> mentorship </span> and{" "}
        <span className="font-bold">guidance</span> to help interns achieve
        their professional goals. Interns are not expected to know everything
        on day one.
      </>
    ),
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/65df84714c9f3cf31d458f8e19127fffc09b8549dc5a6cf699c3c8115a3f6b86?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
    imageAlt: "Skill Development",
  },
  {
    title: "Equal Opportunities",
    description: (
      <>
        More Travel is dedicated to providing{" "}
        <span className="font-bold">equal opportunities </span>for interns to
        contribute meaningfully to our projects.
        <br />
        <br />
        We believe in a <span className="font-bold">merit-based approac</span>
        h, ensuring that each intern is evaluated and recognized based on their{" "}
        <span className="font-bold">unique skills</span> and{" "}
        <span className="font-bold">contributions</span>.
        <br />
        <br />
        Every intern has the same <span className="font-bold">opportunities</span>{" "}
        and resources. We provide{" "}
        <span className="font-bold">state of the art facilities</span> to our
        interns.
      </>
    ),
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8facb742675102dfa8792ccb95ac52402bc1146999dc99429767187fc45fc249?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
    imageAlt: "Equal Opportunities",
  },
  {
    title: "Networking and Collaboration",
    description: (
      <>
        Interns have the chance to{" "}
        <span className="font-bold">collaborate</span> with experienced
        professionals and <span className="font-bold">build a network</span>{" "}
        within the travel industry.
        <br />
        <br />
        More Travel encourages interns to actively{" "}
        <span className="font-bold">engage</span> in cross-functional projects,
        fostering <span className="font-bold">collaboration</span> and{" "}
        <span className="font-bold">teamwork</span>.
      </>
    ),
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5754ce0d0a6ef6825b218d4ac8104bdc29c949ca9f254b4223208bc86dcc9fc?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
    imageAlt: "Networking and Collaboration",
  },
  {
    title: "Community Engagement",
    description: (
      <>
        Our internship program includes{" "}
        <span className="font-bold">opportunities</span> for community
        engagement, allowing interns to participate in{" "}
        <span className="font-bold">initiatives</span> that contribute to the
        broader community.
        <br />
        <br />
        Projects include designing{" "}
        <span className="font-bold">infrastructure</span> to emit the least
        possible <span className="font-bold">emissions</span> for our customers,
        initiating community projects to reduce their carbon foot-print through{" "}
        <span className="font-bold">travel</span>, and a lot more.
      </>
    ),
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/54b27ec30e3f0a4561240d11add5b47af595a2d0e9ce170f41caaed5e4e5d953?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
    imageAlt: "Community Engagement",
  },
];

const Header = () => (
  <header className="flex gap-5 justify-between self-center px-5 w-full text-lg font-medium max-w-[1271px] max-md:flex-wrap max-md:max-w-full">
    <div className="shrink-0 rounded-full bg-zinc-300 h-[46px] w-[46px]" />
    <nav className="flex gap-5 my-auto text-black max-md:flex-wrap">
      <a href="#">Home</a>
      <a href="#">Careers</a>
      <a href="#" className="flex-auto font-bold">
        Internships
      </a>
      <a href="#" className="flex-auto">
        Life at More Travel
      </a>
      <a href="#" className="flex-auto">
        Hiring Tips
      </a>
      <a href="#" className="flex-auto">
        Testimonials
      </a>
    </nav>
    <div className="flex gap-5 justify-between self-start mt-1.5">
      <button className="justify-center px-7 py-3 text-white bg-sky-600 rounded-2xl max-md:px-5">
        Apply Now
      </button>
      <a href="#" className="my-auto text-sky-600">
        LOGIN
      </a>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="flex overflow-hidden relative flex-col px-11 pb-16 mt-9 w-full text-6xl font-semibold text-white whitespace-nowrap min-h-[254px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd8b3b70def0fb106f1e640f9871571dadcadf80f5293f50cbe0cc05c8db3cf9?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
      alt="Internships hero image"
      className="object-cover absolute inset-0 size-full"
    />
    <div className="relative shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
    <h1 className="relative self-start mt-32 ml-16 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
      Internships
    </h1>
  </section>
);

const InternshipSection = ({ title, description, imageUrl, imageAlt }) => (
  <section className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="grow w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch px-5 my-auto text-zinc-800 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
            {title}
          </h2>
          <div className="mt-11 text-xl max-md:mt-10 max-md:max-w-full">
            {description}
          </div>
        </div>
      </div>
    </div>
  </section>
);

function MyComponent() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <HeroSection />
        {internshipData.map((data, index) => (
          <InternshipSection key={index} {...data} />
        ))}
      </main>
    </div>
  );
}

export default MyComponent;
