import React from 'react';
import { Icon } from '@iconify/react';

const skillsets = [
  {
    title: 'Frontend',
    color: '#E0F7FA',
    skills: [
      { name: 'React', icon: 'logos:react' },
      { name: 'Angular', icon: 'logos:angular-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'HTML/CSS', icon: 'vscode-icons:file-type-html' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
    ]
  },
  {
    title: 'Backend',
    color: '#FFF3E0',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'NestJs', icon: 'logos:nestjs' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
      { name: 'REST APIs', icon: 'mdi:api' },
    ]
  },
  {
    title: 'Tools & Others',
    color: '#E8F5E9',
    skills: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'AWS', icon: 'logos:aws' },
      { name: 'Azure', icon: 'logos:azure' },
    ]
  },
  {
    title: 'Blockchain',
    color: '#F3E5F5',
    skills: [
      { name: 'Ethereum', icon: 'logos:ethereum' },
      { name: 'Solidity', icon: 'logos:solidity' },
      { name: 'Web3.js', icon: 'logos:web3js' },
      { name: 'Smart Contracts', icon: 'mdi:contract' },
      { name: 'Truffle', icon: 'logos:truffle-icon' },
    ]
  }
];

export const Skills = () => {
  return (
    <div className="skills-section">
      {skillsets.map(({ title, skills, color }) => (
        <div key={title} className="skill-card" style={{ backgroundColor: color }}>
          <h3 className="skill-title">{title}</h3>
          <ul className="skill-list">
            {skills.map(({ name, icon }) => (
              <li key={name} className="skill-item">
                <Icon icon={icon} width="20" height="20" style={{ marginRight: '8px' }} />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
