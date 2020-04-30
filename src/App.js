import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 11,
      name: "billy",
      job: "developer",
    },
    {
      img: 2,
      name: "cliff",
      job: "designer",
    },
    {
      img: 12,
      name: "rich",
      job: "graphics",
    },
  ];

  return (
    <section>
      <Person person={people[0]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ?
      </Person>
      <Person person={people[1]}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, placeat
        .
      </Person>
      <Person person={people[2]}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quod .
      </Person>
    </section>
  );
};

const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name} </h4>
        <h4>{job} </h4>
        {children}
      </div>
    </div>
  );
};

export default App;
