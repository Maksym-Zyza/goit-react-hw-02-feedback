import React from 'react';
import Counter from "./components /Counter";

class App extends React.Component {
  
  render() {
    return (
    <div>

      <h1> Hello React!</h1>      
        {/* <UserList user={user} /> */}
        <Counter initialValue={10} /> 


    </div>
  );
   }
};

export default App;