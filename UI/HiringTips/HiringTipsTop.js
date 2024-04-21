import * as React from "react";

function HeroSection() {
  return (
    <section className="flex overflow-hidden relative flex-col px-11 pb-16 mt-9 w-full text-6xl font-semibold text-white min-h-[254px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13897b2ec344a396794e795a3eaded4bab38adcd40a31c89e0dba2444bd8b53d?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
      <h1 className="relative self-start mt-32 ml-16 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
        Hiring Tips
      </h1>
    </section>
  );
}

function TipCard({ index, title, description, imageSrc, imageAlt }) {
  return (
    <article className="flex gap-5 justify-between items-start px-5 max-md:flex-wrap">
      <div className="flex overflow-hidden relative flex-col justify-center self-start aspect-[1.59]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="w-full aspect-[1.59]"
        />
      </div>
      <div className="flex flex-col self-end mt-9 font-semibold text-right">
        <div className="self-end text-7xl text-slate-500 max-md:text-4xl">
          {index.toString().padStart(2, "0")}
        </div>
        <h2 className="mt-9 text-4xl leading-10 text-zinc-800">{title}</h2>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10ce37dbd31d6403542d473b1ffd3cb6b593bd5a0c72861fd0fb02a7c588b3b3?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
        alt="Decorative element"
        className="shrink-0 my-auto aspect-square w-[51px]"
      />
    </article>
  );
}

function TipDescription({ description, imageSrc }) {
  return (
    <div className="flex gap-5 items-start self-end px-5 mt-3 text-lg text-right text-zinc-800 max-md:flex-wrap">
      <p className="flex-auto self-end mt-6 max-md:max-w-full">{description}</p>
      <img
        loading="lazy"
        src={imageSrc}
        alt="Decorative element"
        className="shrink-0 self-start aspect-square w-[51px]"
      />
    </div>
  );
}

function App() {
  const tips = [
    {
      index: 1,
      title: "Know More Travel's Values",
      description:
        "Research and understand the core values of More Travel. Align your personal values with those of the company. Emphasize your alignment in your application and interviews. Provide specific examples of how you've demonstrated these values in previous roles.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ec984eb01578898ec6893436621709b18fefe4773b33d82403d18239854a7c2?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      imageAlt: "Tip 1 image",
    },
    {
      index: 2,
      title: "Showcase your Travel Experience",
      description:
        "Share compelling stories from your personal and professional travel experiences. Highlight how your travels have broadened your perspective and cultural awareness. Provide specific examples of how your travel background adds value to More Travel. Discuss challenges faced during travels and how you overcame them.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/673c56cba30288dc3434e4488b3e1fabf1827f68b1a281deeff37fe0719c43fd?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      imageAlt: "Tip 2 image",
    },
    {
      index: 3,
      title: "Demonstrate Customer Service Skills",
      description:
        "Share examples of situations where you provided exceptional customer service. Illustrate your communication skills and problem-solving abilities. Show willingness to go above and beyond for customer satisfaction. Discuss specific feedback or recognition received for outstanding service.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/19d8218ccf5925c1cc6575eabea4a1db89939e572a1e6a539c4c7e1093d1c824?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      imageAlt: "Tip 3 image",
    },
    {
      index: 4,
      title: "Showcase your Travel Experience",
      description:
        "Stay up-to-date with the latest trends and developments in the travel industry. Discuss recent industry changes, emerging technologies, or new travel destinations. Showcase your commitment to continuous learning and staying relevant. Mention any relevant certifications, courses, or industry events you've attended.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d23dbda8981bd0add71f2a85d21dd4e8c23b6b47b1de89a933dedafbd88e5b9a?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      imageAlt: "Tip 4 image",
    },
    {
      index: 5,
      title: "Be Adaptable and Flexible",
      description: "",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c58e801a564851409451e3e70300c05a27fc855cae8e7340bc90546d25e0a194?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      imageAlt: "Tip 5 image",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* <header className="flex gap-5 justify-between self-center px-5 w-full text-lg max-w-[1271px] max-md:flex-wrap max-md:max-w-full">
        <div className="shrink-0 rounded-full bg-zinc-300 h-[46px] w-[46px]" />
        <nav className="flex gap-5 my-auto text-black max-md:flex-wrap">
          <a href="#">Home</a>
          <a href="#">Careers</a>
          <a href="#">Internships</a>
          <a href="#" className="flex-auto font-medium">
            Life at More Travel
          </a>
          <a href="#" className="flex-auto font-bold">
            Hiring Tips
          </a>
          <a href="#" className="flex-auto">
            Testimonials
          </a>
        </nav>
        <div className="flex gap-5 justify-between self-start mt-1.5 font-medium">
          <a
            href="#"
            className="justify-center px-7 py-3 text-white bg-sky-600 rounded-2xl max-md:px-5"
          >
            Apply Now
          </a>
          <a href="#" className="my-auto text-sky-600">
            LOGIN
          </a>
        </div>
      </header> */}
      <HeroSection />
      <main className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            {tips.slice(0, 3).map((tip) => (
              <div
                key={tip.index}
                className="flex flex-col grow max-md:mt-10 max-md:max-w-full"
              >
                <TipCard {...tip} />
                {tip.description && (
                  <TipDescription
                    description={tip.description}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/10ce37dbd31d6403542d473b1ffd3cb6b593bd5a0c72861fd0fb02a7c588b3b3?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            {tips.slice(3).map((tip) => (
              <div
                key={tip.index}
                className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full"
              >
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="mt-44 text-7xl font-semibold text-slate-500 max-md:mt-10 max-md:text-4xl">
                        {tip.index.toString().padStart(2, "0")}
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src={tip.imageSrc}
                        alt={tip.imageAlt}
                        className="w-full aspect-[2.17] max-md:mt-10 max-md:max-w-full"
                      />
                    </div>
                  </div>
                </div>
                <h2 className="mt-8 text-4xl font-semibold leading-10 text-zinc-800 max-md:max-w-full">
                  {tip.title}
                </h2>
                {tip.description && (
                  <p className="mt-7 text-lg text-zinc-800 max-md:max-w-full">
                    {tip.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
