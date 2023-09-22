import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div>
      <h1>Welcome to Mini Project</h1>
      <div>
        <Link to="/login">Login</Link> {}
      </div>
      <div>
        <Link to="/signup">Sign Up</Link> {}
      </div>
    </div>
  );
}

export default Home;
