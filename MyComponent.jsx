import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "lightgreen";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "lightgreen";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "lightgreen";
    inputRef2.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me!</button>
      <br />
      <input type="text" ref={inputRef1} />
      <br />
      <br />
      <button onClick={handleClick2}>Click me!</button>
      <br />
      <input type="text" ref={inputRef2} />
      <br />
      <br />
      <button onClick={handleClick3}>Click me!</button>
      <br />
      <input type="text" ref={inputRef3} />
    </div>
  );
}
export default MyComponent;
