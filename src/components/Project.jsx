import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Project = ({ name, cover, desc, tech, github, website }) => {
  const imgSrc = cover;

  return (
    <>
      <img src={imgSrc} alt="Project demo" />
      <div>
        <h3>{name}</h3>
        <div>
          <p>{desc}</p>
        </div>
        <ul>
          {tech.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <a href={github} target="_blank">
          <AiOutlineGithub />
        </a>
        <a href={website} target="_blank">
          <HiOutlineExternalLink />
        </a>
      </div>
    </>
  );
};

export default Project;
