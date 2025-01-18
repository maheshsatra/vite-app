import React from 'react';

const Title = ({ name, tag = "h3", align = "left" }) => {
  const alignmentClass = align === "center" ? "text-center" : align === "left" ? "text-left" : "text-right";

  return (
    <>
      {tag === "h1" ? (
        <h1 className={`text-4xl font-bold text-green-700 ${alignmentClass}`}>{name}</h1>
      ) : tag === "h2" ? (
        <h2 className={`text-3xl font-semibold text-green-700 ${alignmentClass}`}>{name}</h2>
      ) : (
        <h3 className={`text-2xl font-medium text-green-700 ${alignmentClass}`}>{name}</h3>
      )}
    </>
  );
};

export default Title;
