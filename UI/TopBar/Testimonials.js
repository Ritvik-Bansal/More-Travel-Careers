import * as React from "react";

function Header() {
  return (
    <header className="flex gap-5 justify-between px-5 w-full text-lg max-w-[1271px] max-md:flex-wrap max-md:max-w-full">
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
    </header>
  );
}

function HeroSection() {
  return (
    <section className="flex overflow-hidden relative flex-col self-stretch px-11 pb-20 mt-9 w-full text-6xl font-semibold text-white whitespace-nowrap min-h-[254px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82ca7bdbcf218406f02377016c51055821754d5486bd75731831ab45f5bd586d?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="relative shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
      <h1 className="relative self-start mt-32 ml-16 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
        Testimonials
      </h1>
    </section>
  );
}

function FounderTestimonial({ name, title, quote, image }) {
  return (
    <div className="flex flex-col grow px-9 pb-10 w-full rounded-2xl shadow-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src={image} alt={`${name}'s headshot`} className="shrink-0 max-w-full aspect-square w-[106px] max-md:mt-10" />
      <div className="mt-7 text-lg font-bold max-md:max-w-full">
        {name}
      </div>
      <div className="mt-2 text-base italic max-md:max-w-full">
        {title}
      </div>
      <blockquote className="mt-6 text-lg max-md:mr-2 max-md:max-w-full">
        {quote}
      </blockquote>
    </div>
  );
}

function ClientTestimonial({ name, title, quote, image, logo }) {
  return (
    <div className="flex flex-col px-9 pb-9 rounded-2xl shadow-xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <div className="z-10 mt-0 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={image} alt={`${name}'s headshot`} className="shrink-0 max-w-full aspect-square w-[106px] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={logo} alt={`${name}'s company logo`} className="grow shrink-0 mt-16 max-w-full aspect-[4.76] w-[168px] max-md:mt-10" />
          </div>
        </div>
      </div>
      <blockquote className="mt-6 text-lg text-zinc-800 max-md:mr-2 max-md:max-w-full">
        {quote}
      </blockquote>
      <div className="mt-8 text-lg font-bold text-zinc-800 max-md:max-w-full">
        {name}
      </div>
      <div className="mt-2 text-base italic text-zinc-800 max-md:max-w-full">
        {title}
      </div>
    </div>
  );
}

function MyComponent() {
  const founderTestimonials = [
    {
      name: "Dolly More",
      title: "Founder",
      quote: "At More Travel, we don't just explore destinations; we explore talents. Join us, where your passion for travel meets a career that soars beyond horizons. Your journey with More Travel is not just a job; it's an adventure waiting to be written.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aff4274c337d8a1748a92d4f213fa64abfa0c6409d631d17f6626153b32a7618?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      background: "bg-sky-900",
      textColor: "text-white"
    },
    {
      name: "Hemant More",
      title: "Co-Founder",
      quote: "Embark on a career with More Travel, where innovation meets exploration. We believe in not just selling tickets but creating experiences. Join us, and let's redefine the future of travel together. Your skills are the compass that guides our success",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/be44b0454bcd6a9bbc75c3ff65f0f5cea109f41700561df84b184a80226173cd?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      background: "bg-neutral-100",
      textColor: "text-zinc-800"
    }
  ];

  const clientTestimonials = [
    {
      name: "Raj Kapoor",
      title: "Adventure Enthusiast",
      quote: "My journey with More Travel was nothing short of spectacular. The attention to detail and personalized service made my trip unforgettable!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8205756ec13b889f1b8a5770b4f27c1d08d92b75d2399a5560f7b1b895ad6181?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7df2792b2e4f2106b513006dd86db97ce6adc8b702bf1f30909e4eab6a6fb797?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
    },
    {
      name: "Sneha Patel",
      title: "Family Vacationer",
      quote: "More Travel ensured our family vacation was not just a trip, but a collection of precious moments. Highly recommended!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdf48e013562014131c6c24286f2b9ccfa895fc865818ff2fcedcaf86212ff2b?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7df2792b2e4f2106b513006dd86db97ce6adc8b702bf1f30909e4eab6a6fb797?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
    },
    {
      name: "Sneha Patel",
      title: "Family Vacationer",
      quote: "More Travel ensured our family vacation was not just a trip, but a collection of precious moments. Highly recommended!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdf48e013562014131c6c24286f2b9ccfa895fc865818ff2fcedcaf86212ff2b?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      logo: null
    },
    {
      name: "Raj Kapoor",
      title: "Adventure Enthusiast", 
      quote: "My journey with More Travel was nothing short of spectacular. The attention to detail and personalized service made my trip unforgettable!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8205756ec13b889f1b8a5770b4f27c1d08d92b75d2399a5560f7b1b895ad6181?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7df2792b2e4f2106b513006dd86db97ce6adc8b702bf1f30909e4eab6a6fb797?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
    },
    {
      name: "Sneha Patel",
      title: "Family Vacationer",
      quote: "More Travel ensured our family vacation was not just a trip, but a collection of precious moments. Highly recommended!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdf48e013562014131c6c24286f2b9ccfa895fc865818ff2fcedcaf86212ff2b?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7df2792b2e4f2106b513006dd86db97ce6adc8b702bf1f30909e4eab6a6fb797?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
    },
    {
      name: "Sneha Patel",
      title: "Family Vacationer",
      quote: "More Travel ensured our family vacation was not just a trip, but a collection of precious moments. Highly recommended!",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdf48e013562014131c6c24286f2b9ccfa895fc865818ff2fcedcaf86212ff2b?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      logo: null
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <Header />
      <HeroSection />
      <main className="flex flex-col px-5 mt-20 w-full max-w-[1337px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-4xl font-medium text-zinc-800 max-md:max-w-full">
          What Our Founders Say...
        </h2>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {founderTestimonials.map((testimonial, index) => (
              <div key={index} className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full ${testimonial.background} ${testimonial.textColor}`}>
                <FounderTestimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <h2 className="flex-auto gap-5 mt-24 max-w-full text-4xl font-medium text-zinc-800 w-[750px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          What Our Clients Say...
        </h2>
        <div className="flex gap-5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          {clientTestimonials.slice(0, 3).map((testimonial, index) => (
            <ClientTestimonial key={index} {...testimonial} />
          ))}
        </div>
        <div className="flex gap-5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          {clientTestimonials.slice(3).map((testimonial, index) => (
            <ClientTestimonial key={index} {...testimonial} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default MyComponent;
