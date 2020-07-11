import React from 'react'

const Toast = () => (
  <div className="container">
    <h4>This is the message of the toast component</h4>
    {styles()}
  </div>
)

const styles = () => (
  <style jsx="true">{`
    .container {
      display: inline-block;
      padding: 0 1rem;
      background-color: #2b2b2b;
      color: white;
      border-radius: .5rem;
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 1rem;
      -webkit-box-shadow: 0px 4px 8px 4px rgba(0,0,0,0.2); 
      box-shadow: 0px 4px 8px 4px rgba(0,0,0,0.2);
    }
  `}
  </style>
)

export default Toast
