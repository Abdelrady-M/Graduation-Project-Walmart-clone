import React from "react";

export default function Item({ content }) {
  console.log(content);
  return (
    <>
      <ul>
        {content.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              <a href="" className="text-sm">
                {item}
              </a>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
