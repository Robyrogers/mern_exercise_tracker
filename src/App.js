import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './component/navbar.component'
import ExerciseList from './component/exercises-list.component'
import EditExercise from './component/edit-exercise.component'
import CreateExercise from './component/create-exercise.component'
import CreateUser from './component/create-user.component'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact component={ExerciseList}/>
          <Route path="/edit/:id" component={EditExercise}/>
          <Route path="/create" component={CreateExercise}/>
          <Route path="/user" component={CreateUser}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
