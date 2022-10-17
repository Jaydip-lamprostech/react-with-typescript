// import React from "react";
type StatusProps = {
  status: "loading" | "success" | "error";
};

function Status(props: StatusProps) {
  let message = "";
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error in fetching data";
  }
  return (
    <>
      <h2>status - {message}</h2>
    </>
  );
}

export default Status;
