import * as React from "react";

const NavLink = ({ children }) => (
  <button className="flex-auto">{children}</button>
);

const NavLinks = () => (
  <div className="flex gap-5 self-stretch my-auto font-medium text-black max-md:flex-wrap">
    <button>Home</button>
    <button>Careers</button>
    <NavLink>Internships</NavLink>
    <NavLink>Life at More Travel</NavLink>
    <NavLink>Hiring Tips</NavLink>
    <NavLink>Testimonials</NavLink>
  </div>
);

// const Header = () => (
//   // <header className="flex flex-col items-center">
//   //   <div className="flex gap-5 justify-between items-start px-5 w-full text-lg max-w-[1283px] max-md:flex-wrap max-md:max-w-full">
//   //     <div className="shrink-0 rounded-full bg-zinc-300 h-[46px] w-[46px]" />
//   //     <NavLinks />
//   //     <div className="flex gap-5 justify-between">
//   //       <button className="justify-center px-7 py-3 my-auto font-medium text-white bg-sky-600 rounded-2xl max-md:px-5">
//   //         Apply Now
//   //       </button>
//   //       <div className="justify-center items-center px-2.5 font-bold text-black whitespace-nowrap rounded-full bg-zinc-300 h-[46px] w-[46px]">
//   //         AK
//   //       </div>
//   //     </div>
//   //   </div>
//   //   <div className="flex overflow-hidden relative flex-col self-stretch px-11 pb-16 mt-8 w-full text-6xl font-semibold text-white whitespace-nowrap min-h-[254px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
//   //     <img
//   //       loading="lazy"
//   //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d26fe4dabf646103af2cc9a8c4072545775567b6861702659136df163fe93b6?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
//   //       className="object-cover absolute inset-0 size-full"
//   //       alt=""
//   //     />
//   //     <div className="relative shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
//   //     <h1 className="relative self-start mt-32 ml-16 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
//   //       Application
//   //     </h1>
//   //   </div>
//   // </header>
// );

const InputField = ({ label, placeholder = "Enter", value, onChange }) => (
  <>
    <div className="mt-7 font-semibold text-zinc-800 max-md:max-w-full">
      {label}
    </div>
    <input
      className="justify-center self-start px-6 py-3 mt-5 bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:pl-5 max-md:max-w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </>
);

const TextareaField = ({
  label,
  placeholder = "Enter",
  value,
  onChange,
}) => (
  <>
    <div className="mt-7 font-semibold text-zinc-800 max-md:max-w-full">
      {label}
    </div>
    <textarea
      className="justify-center items-start px-6 py-3 mt-3.5 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </>
);

const EducationSection = () => {
  const [degree, setDegree] = React.useState("");
  const [institution, setInstitution] = React.useState("");
  const [graduationDate, setGraduationDate] = React.useState("");
  const [relevantCoursework, setRelevantCoursework] = React.useState("");

  return (
    <>
      <div className="mt-16 text-3xl font-semibold text-zinc-800 max-md:mt-10 max-md:max-w-full">
        Education
      </div>
      <div className="mt-9 font-semibold text-zinc-800 max-md:max-w-full">
        Which option best describes you?{" "}
      </div>
      <div className="flex gap-2.5 justify-between px-6 py-3 mt-3.5 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-slate-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="justify-center py-2 max-md:max-w-full">Student</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/de8709bfeb35d94766843865c7108b809d50c2be4b48e6d66abf493c468c0a19?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
          className="shrink-0 my-auto w-6 aspect-square"
          alt=""
        />
      </div>
      <div className="mt-8 font-semibold text-zinc-800 max-md:max-w-full">
        Degree earned in education
      </div>
      <input
        className="justify-center items-start px-6 py-3 mt-3.5 bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Your Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <div className="mt-8 font-semibold text-zinc-800 max-md:max-w-full">
        Institution
      </div>
      <input
        className="justify-center items-start px-6 py-3 mt-5 bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Your College"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
      />
      <div className="mt-8 font-semibold text-zinc-800 max-md:max-w-full">
        Graduation Date
      </div>
      <input
        className="justify-center items-start px-6 py-3 mt-5 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Enter"
        value={graduationDate}
        onChange={(e) => setGraduationDate(e.target.value)}
      />
      <div className="mt-7 font-semibold text-zinc-800 max-md:max-w-full">
        Relevant Coursework (if applicable)
      </div>
      <input
        className="justify-center items-start px-6 py-3 mt-3.5 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Enter"
        value={relevantCoursework}
        onChange={(e) => setRelevantCoursework(e.target.value)}
      />
    </>
  );
};

const SkillsSection = () => {
  const [skills, setSkills] = React.useState("");
  const [certifications, setCertifications] = React.useState("");
  const [awards, setAwards] = React.useState("");

  return (
    <>
      <div className="mt-16 text-3xl font-semibold text-zinc-800 max-md:mt-10 max-md:max-w-full">
        Skills, Certifications, Awards, Achievements
      </div>
      <div className="mt-8 font-semibold text-zinc-800 max-md:max-w-full">
        Relevant Skills (if applicable)
      </div>
      <input
        className="justify-center items-start px-6 py-3 mt-3.5 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Enter"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <div className="mt-7 font-semibold text-zinc-800 max-md:max-w-full">
        Relevant Certifications (if applicable)
      </div>
      <input
        className="justify-center items-start px-6 py-3 mt-3.5 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Enter"
        value={certifications}
        onChange={(e) => setCertifications(e.target.value)}
      />
      <div className="mt-7 font-semibold text-zinc-800 max-md:max-w-full">
        Relevant Awards and Achievements (if applicable)
      </div>
      <input
        className="justify-center items-start px-6 py-3 mt-3.5 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Enter"
        value={awards}
        onChange={(e) => setAwards(e.target.value)}
      />
    </>
  );
};

const PersonalInterestsSection = () => {
  const [interests, setInterests] = React.useState("");
  const [coverLetter, setCoverLetter] = React.useState("");

  return (
    <>
      <div className="mt-20 text-3xl font-semibold text-zinc-800 max-md:mt-10 max-md:max-w-full">
        Personal Interests, Cover Letter
      </div>
      <div className="mt-9 font-semibold text-zinc-800 max-md:max-w-full">
        Personal Interests
      </div>
      <input
        className="justify-center items-start px-6 py-3 mt-5 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Enter"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
      />
      <div className="mt-8 font-semibold text-zinc-800 max-md:max-w-full">
        Please attach a Cover Letter
      </div>
      <div className="flex gap-5 mt-7 max-w-full w-[298px]">
        <div className="justify-center items-start px-6 py-3 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-300 text-slate-950">
          Archini_CV
        </div>
        <button className="flex-auto my-auto font-semibold text-sky-600">
          Upload New
        </button>
      </div>
    </>
  );
};

const PositionApplyingFor = () => {
  const positions = [
    "Travel Consultant",
    "Customer Service Representative",
    "Sales Representative",
    "Travel Coordinator",
    "Digital Marketing Specialist",
    "Technology and Systems Manager",
    "Corporate Travel Consultant",
  ];

  const [selectedPosition, setSelectedPosition] = React.useState("");

  return (
    <>
      <div className="mt-16 text-3xl font-semibold text-zinc-800 max-md:mt-10 max-md:max-w-full">
        What position are you applying for?{" "}
      </div>
      {positions.map((position, index) => (
        <div
          key={index}
          className="flex gap-3.5 self-start mt-6 font-medium text-zinc-800"
        >
          <input
            type="radio"
            className="shrink-0 w-4 h-4 rounded-full border-2 border-solid border-zinc-800 stroke-[1.5px]"
            checked={selectedPosition === position}
            onChange={() => setSelectedPosition(position)}
          />
          <div className="flex-auto">{position}</div>
        </div>
      ))}
    </>
  );
};

const QuestionsConcerns = () => {
  const [questionsConcerns, setQuestionsConcerns] = React.useState("");

  return (
    <>
      <div className="mt-14 text-3xl font-semibold text-zinc-800 max-md:mt-10 max-md:max-w-full">
        Questions/Concerns?
      </div>
      <textarea
        className="justify-center items-start self-center px-6 py-3 mt-6 bg-white rounded-lg border-2 border-solid border-zinc-300 text-zinc-400 max-md:px-5 max-md:max-w-full"
        placeholder="Enter"
        value={questionsConcerns}
        onChange={(e) => setQuestionsConcerns(e.target.value)}
      />
    </>
  );
};

const SubmitButton = ({ onSubmit }) => (
  <div className="flex flex-col justify-center py-3 mt-12 max-w-full font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-lg w-[156px] max-md:mt-10">
    <button
      type="submit"
      className="justify-center px-11 py-2 max-md:px-5"
      onClick={onSubmit}
    >
      Submit
    </button>
  </div>
);

function MyComponent() {
  const [name, setName] = React.useState("Archini Koushik");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [objectiveStatement, setObjectiveStatement] = React.useState("");
  const [professionalSummary, setProfessionalSummary] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col items-center">
      <main className="flex flex-col px-5 mt-20 w-full text-xl max-w-[1231px] max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl font-semibold text-zinc-800 max-md:max-w-full">
          Upload Resume
        </div>xf
        <div className="flex gap-5 mt-1 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto font-medium text-zinc-800 max-md:max-w-full">
            Uploading resume will automatically fill in information!
          </div>
          <button className="flex-auto my-auto font-semibold text-sky-600">
            Upload
          </button>
        </div>

        <InputField label="Name" value={name} onChange={e => setName(e.target.value)} />
        <InputField label="Address" value={address} onChange={e => setAddress(e.target.value)} />
        <InputField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <InputField label="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <TextareaField label="Objective Statement" value={objectiveStatement} onChange={e => setObjectiveStatement(e.target.value)} />
        <TextareaField label="Professional Summary" value={professionalSummary} onChange={e => setProfessionalSummary(e.target.value)} />
        <EducationSection />
        <SkillsSection />
        <PersonalInterestsSection />
        <PositionApplyingFor />
        <QuestionsConcerns />
        <SubmitButton onSubmit={handleSubmit} />

      </main>
    </div>
  );
}

export default MyComponent;