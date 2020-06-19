import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavbar from './Components/NewNavbar';
import Home from './Components/Home';
import ProjectTabs from './Components/ProjectTabs';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
    <NewNavbar />
    <Home />
    <ProjectTabs />
    <Resume />
    </div>
  );
}

export default App;
