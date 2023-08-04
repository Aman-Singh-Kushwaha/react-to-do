import React from 'react'

const Footer = (props) => {
  return (
    <p className="tasks">
      {props.length} {length===1 ? "task" : "tasks" } remaining
    </p>  
  );
}

export default Footer