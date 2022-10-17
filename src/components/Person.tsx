// import React from 'react'
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

function Person(props: PersonProps) {
  return (
    <>
      <h2>
        {props.name.first} {props.name.last}
      </h2>
    </>
  );
}

export default Person;
