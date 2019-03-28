import React from 'react'

import DATA from '../../data/projects.json'

import { StyledCategoryUl, StyledProjectsUl } from './Projects.styled'

const Projects = () => {
  const projectsByCategory = []
  for (const category in DATA) {
    projectsByCategory.push(renderProjectsPerCategory(category, DATA[category]))
  }
  return (
    <>
      <h2>Projects</h2>
      <hr className="--short" />
      <StyledCategoryUl>{projectsByCategory}</StyledCategoryUl>
      <p>
        For a full list, checkout{' '}
        <a href="https://github.com/seanmcp?tab=repositories">
          my GitHub account
        </a>
        .
      </p>
    </>
  )
}

const renderProjectsPerCategory = (category, projects) => {
  return (
    <li key={category}>
      <h3>{category}</h3>
      <StyledProjectsUl>
        {projects.map(({ live, name, description, repo }) => (
          <li key={name}>
            <b>{name}</b>: {description}{' '}
            {repo && (
              <span>
                <a href={`https://github.com/${repo}`}>(source code)</a>
              </span>
            )}
          </li>
        ))}
      </StyledProjectsUl>
    </li>
  )
}

export default Projects
