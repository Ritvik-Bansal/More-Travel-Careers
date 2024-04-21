import * as React from "react";

function LogoutButton() {
  return (
    <button className="flex gap-2.5 px-7 py-2.5 mt-3 text-xs leading-5 text-center text-white bg-sky-600 rounded-[67px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ed2e0bc2ad597cc0de3337d7e0cab325a0427f5d2f0e0589cac09dc86d37bb1?apiKey=ce6a525162fa4c1692f4c477ef34b183&"
        alt="Logout icon"
        className="shrink-0 border-2 border-white border-solid aspect-[0.87] stroke-[2px] stroke-white w-[13px]"
      />
      <span>Log Out</span>
    </button>
  );
}

function UserInfo({ name, role, email }) {
  return (
    <>
      <div className="text-base italic text-black">
        {name} - <span className="italic text-black">{role}</span>
      </div>
      <div className="mt-3 text-sm text-neutral-600">{email}</div>
    </>
  );
}

function MyComponent() {
  const userData = {
    name: "Archini Koushik",
    role: "User",
    email: "akoushik@gmail.com",
  };

  return (
    <section className="flex flex-col px-6 py-5 font-medium rounded-2xl bg-zinc-300 max-w-[215px]">
      <UserInfo
        name={userData.name}
        role={userData.role}
        email={userData.email}
      />
      <LogoutButton />
    </section>
  );
}

export default MyComponent;
