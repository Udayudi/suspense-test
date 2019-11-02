import React from "react";

export const Person = ({ resource }) => {
  const person = resource.person.read();

  return (
    <div>
      <p>{person.name.title}</p>
      <p>{person.name.first}</p>
      <p> {person.name.last}</p>
    </div>
  );
};
