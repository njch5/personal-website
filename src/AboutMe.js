import React from "react";
import Portrait from "../src/chibi-portrait.png";
// https://stackoverflow.com/questions/54934604/why-does-my-br-tag-show-as-an-object-object-when-my-javascript-is-rendered
const aboutMe = (
  <>
    I'm a Software Engineer based in Seattle.
    <br />
    <img src={Portrait} alt="portrait" className="portrait-img" />
    <br />
    Recent graduate from{" "}
    <a href="https://adadevelopersacademy.org/" className="ada-tag">
      Ada Developers Academy
    </a>
    .
    <br />
    <br />I transitioned into tech back in August 2019 when I got accepted to
    Ada Developers Academy.
  </>
);

export default aboutMe;
