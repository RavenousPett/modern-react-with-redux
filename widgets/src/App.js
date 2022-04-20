import React from "react";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";

const items = [
  { title: 'What is React', content: 'React is a javascript framework'},
  { title: 'Why use React', content: 'React is a favourite JS library among engineers'},
  { title: 'How do you use use React', content: 'You use React by creating components'}
];

export default () => {
 return (
   <div>
     <Counter />
     <Accordion items={items} />
   </div>
 );
};
