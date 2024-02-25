import React, { useState } from 'react';
import Group from './Group';
import './GroupsContainer.css';

const GroupsContainer = () => {
  const [groups, setGroups] = useState([{ id: 1 }, { id: 2 }]); // Initial two groups

  const addGroup = () => {
    const newGroupId = groups.length + 1;
    setGroups([...groups, { id: newGroupId }]);
  };

  return (
    <>
    <button onClick={addGroup} className="add-group-button">Add Group</button>
    <div className="groups-container">
      {groups.map((group) => (
        <Group key={group.id} />
      ))}

    </div>
    </>
  );
};

export default GroupsContainer;