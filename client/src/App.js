import React, { Component } from 'react';
import './App.css'
import Card from './Card';
import { connect } from 'react-redux';
import { fetchAllProjects, addMemberToProject } from './api';

class App extends Component {
  componentDidMount(){
    fetchAllProjects()
      .then((projects) => {
        this.props.dispatch({
          type: 'PROJECTS_RECEIVED',
          payload: projects
        })
      })
  }

  addMember = () => {
    const projId = this.props.projects[this.props.currentProjIndex].id;
    addMemberToProject(projId)
      .then((updatedProj) => {
        this.props.dispatch({
          type: 'ADD_MEMBER'
        })
      });
  }

  nextProject = () => {
    this.props.dispatch({
      type: 'PASS'
    })
  }
  render() {
    const {projects, currentProjIndex} = this.props; 
    return (
      <div className="App">
        <h1>Pair Programming Tinder!</h1>
        <Card 
          project={projects[currentProjIndex]}
          onPassButtonClick={this.nextProject}
          onAddButtonClick={this.addMember}
          />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
