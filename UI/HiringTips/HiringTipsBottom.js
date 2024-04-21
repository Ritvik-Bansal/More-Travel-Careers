import * as React from "react";

function FlexColumn({ children }) {
  return <div className="flex flex-col">{children}</div>;
}

function FlexRow({ children }) {
  return <div className="flex gap-5">{children}</div>;
}

function TextColumn({ title, text, imageUrl, imageAlt, titleClassName }) {
  return (
    <FlexColumn>
      <FlexRow>
        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
          <div className={`flex gap-5 justify-between mt-16 text-7xl font-semibold whitespace-nowrap text-slate-500 max-md:mt-10 max-md:text-4xl ${titleClassName}`}>
            <img src={imageUrl} alt={imageAlt} className="shrink-0 self-start aspect-square w-[51px]" />
            <div className="max-md:text-4xl">{title}</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
          <img src={imageUrl} alt={imageAlt} className="grow w-full aspect-[2.86] max-md:mt-10" />
        </div>
      </FlexRow>
      <div className="self-start mt-6 ml-24 text-4xl font-semibold leading-10 text-zinc-800 max-md:ml-2.5">{text}</div>
    </FlexColumn>
  );
}

function TextColumnReverse({ title, text, imageUrl, imageAlt }) {
  return (
    <FlexColumn>
      <FlexRow>
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-11 font-semibold text-right max-md:mt-10">
            <div className="flex gap-5 justify-between self-end text-7xl whitespace-nowrap text-slate-500 max-md:text-4xl">
              <div className="max-md:text-4xl">{title}</div>
              <img src={imageUrl} alt={imageAlt} className="shrink-0 my-auto aspect-square w-[51px]" />
            </div>
            <div className="mt-8 text-4xl leading-10 text-zinc-800">{text}</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="text-lg text-zinc-800 max-md:mt-10 max-md:max-w-full">{text}</div>
        </div>
      </FlexRow>
    </FlexColumn>
  );
}

function MyComponent() {
  const textColumnData = [
    {
      title: "06",
      text: "Practice Your Knowledge",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ce37dbd31d6403542d473b1ffd3cb6b593bd5a0c72861fd0fb02a7c588b3b3?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      imageAlt: "Image 0",
      titleClassName: "",
    },
    {
      title: "08",
      text: "Relax",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ce37dbd31d6403542d473b1ffd3cb6b593bd5a0c72861fd0fb02a7c588b3b3?apiKey=ce6a525162fa4c1692f4c477ef34b183&",
      imageAlt: "Image 3",
      titleClassName: "self-end",
    },
  ];

  return (
    <div className="flex flex-col px-5 pt-20">
      <div className="flex z-10 flex-col self-end max-w-full mt-[1027px] w-[743px] max-md:mt-10">
        <div className="max-md:max-w-full">
          {textColumnData.map((data, index) => (
            <TextColumn key={index} {...data} />
          ))}
        </div>
        <div className="mt-0 ml-20 text-lg text-right text-zinc-800 w-[552px] max-md:mt-0 max-md:max-w-full">
          Highlight your flexibility and adaptability in dynamic environments. Show experiences where you successfully navigated changes with a positive attitude. Emphasize your willingness to embrace new opportunities for growth. Discuss how you've handled unexpected challenges and changes in previous roles.
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4e53e399f87b122231a75880867c2d2b6d282bbc444f488551c0aa412520d5?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="Image 2" className="z-10 mt-9 max-w-full aspect-[1.27] w-[234px]" />
        <div className="self-end mt-0 mr-20 max-w-full w-[921px] max-md:mr-2.5">
          <TextColumnReverse
            title="07"
            text="Ask for Help"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/10ce37dbd31d6403542d473b1ffd3cb6b593bd5a0c72861fd0fb02a7c588b3b3?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
            imageAlt="Image 3"
          />
        </div>
        <div className="flex flex-col mt-9 w-full max-md:max-w-full">
          <div className="flex gap-5 justify-between self-center w-full max-w-[1340px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 items-start max-md:flex-wrap">
              <div className="flex-auto self-start text-lg text-right text-zinc-800 max-md:max-w-full">
                Don't hesitate to seek assistance if you have questions. Reach out to the More Travel team for clarification or guidance. Embrace questions and mistakes as opportunities for personal and professional growth. Express a proactive attitude toward learning and improving.
              </div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/10ce37dbd31d6403542d473b1ffd3cb6b593bd5a0c72861fd0fb02a7c588b3b3?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="Image 4" className="shrink-0 my-auto aspect-square w-[51px]" />
              <div className="flex flex-col self-end mt-10 font-semibold whitespace-nowrap">
                <div className="text-7xl text-slate-500 max-md:text-4xl">08</div>
                <div className="mt-8 text-4xl leading-10 text-zinc-800">Relax</div>
              </div>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/29932a0f7264605ee16ff7617ea668a0697822bbc2ff7d4d93414c51f716a12b?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="Image 5" className="shrink-0 self-start mt-2.5 max-w-full aspect-[2.33] w-[276px]" />
          </div>
          <div className="flex gap-5 items-start mt-8 w-full text-lg text-zinc-800 max-md:flex-wrap max-md:max-w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c321e684bfec609c85123911164a5c1da64d06cbb8c3d7c4f37df300e7d0be7f?apiKey=ce6a525162fa4c1692f4c477ef34b183&" alt="Image 6" className="mt-3 w-full aspect-[1.67]" />
            <div className="flex-auto max-md:max-w-full">
              Stressing excessively can negatively impact your performance. Take a deep breath and approach the process with a clear mind. Be your authentic self, showcasing your true abilities and personality. Remember that the interview is an opportunity for both parties to learn about each other.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent