import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavbar from './Components/NewNavbar';
import Home from './Components/Home';
import ProjectTabs from './Components/ProjectTabs';
import Resume from './Components/Resume';
import Contact from './Components/Form';
import BottomBar from './Components/Bottom-Bar';

function App() {
  return (
    <div className="App">
    <NewNavbar />
    <Home />
    <ProjectTabs />
    <Resume />
    <Contact />
    <BottomBar />
    </div>
  );
}

export default App;
