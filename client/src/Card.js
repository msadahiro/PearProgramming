import React from 'react';
import MemberList from './MemberList'
import CardControls from './CardControls'

const Card = ({project, onPassButtonClick, onAddButtonClick}) => {
  if (!project) { return <h1>Loading...</h1>}
  return (
    <div className="Card">
      <h1>{project.title}</h1>
      <h3>{project.description}</h3>
      <MemberList members={project.members}/>
      <CardControls 
        onPassButtonClick={onPassButtonClick}
        onAddButtonClick={onAddButtonClick}
        />
    </div>
  )
}

export default Card;