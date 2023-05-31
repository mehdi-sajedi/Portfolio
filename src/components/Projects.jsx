import React from 'react';
import Project from './Project';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <section>
      {projectsData.map((p) => {
        return <Project {...p} />;
      })}
    </section>
  );
};

export default Projects;
