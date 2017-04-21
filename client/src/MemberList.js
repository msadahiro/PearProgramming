import React from 'react';

const MemberList = ({members}) => {
  const memberList = members.map((member) => {
    return <li key={member}>{member}</li>
  })
  return (
    <div className="MemberList">
      <h4>Members</h4>
      <ul>
        { memberList }
      </ul>
    </div>
  )
}

export default MemberList;