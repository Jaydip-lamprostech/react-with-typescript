// import React from 'react'

type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};

function PersonList(props: PersonListProps) {
  return (
    <>
      <div>
        {props.name.map((name, key) => {
          return (
            <>
              <li>
                {name.first} {name.last}
              </li>
            </>
          );
        })}
      </div>
    </>
  );
}

export default PersonList;
