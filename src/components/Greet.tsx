// import React from "react";

type GreetProps = {
  name: string;
  msgcount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { msgcount = 0 } = props;
  return (
    <>
      <div>
        <h2>
          {props.isLoggedIn
            ? `Welcome ${props.name}! You have ${msgcount} unread messages`
            : `Welcome Guest`}
        </h2>
      </div>
    </>
  );
}

export default Greet;
