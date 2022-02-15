import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProjectListItem from '../components/ProjectListItem';

 const ProjectPopup = () => (
  <Popup trigger={<button className="project-thumbnail"> Trigger</button>} >
    <div>
      <ProjectListItem />
    </div>
  </Popup>
);

export default ProjectPopup;