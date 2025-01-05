import React from 'react';

export const Skills = () => {
  const skillsets = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'SQL', 'REST APIs']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Agile']
    }
  ];

  return (
    <div className="skills-section">
      {skillsets.map((skillset) => (
        <div key={skillset.title} className="skill-card">
          <h3 className="skill-title">{skillset.title}</h3>
          <ul className="skill-list">
            {skillset.skills.map((skill) => (
              <li key={skill} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};