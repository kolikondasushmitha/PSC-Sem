import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
//import CourseCreationPage from './Components/CourseCreation';

import CourseCatalog from './Components/Pages/CourseCatalog';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/course-catalog" component={CourseCatalog} />
        {/* Add more routes as needed */}
      </div>
    </Router>
  );
}

export default App;

