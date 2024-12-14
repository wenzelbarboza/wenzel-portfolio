import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between m-2 p-3 border-black border-y-[1px] border-solid ">
      <div>logo</div>
      <div className="flex">
        <div>title 1</div>
        <div>title 2</div>
        <div>title 3</div>
      </div>
    </nav>
  );
};

export default Nav;
