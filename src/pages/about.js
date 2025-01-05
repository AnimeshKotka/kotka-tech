import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../css/about.css';
import { Profile } from '../components/about/Profile';
import { Bio } from '../components/about/Bio';
import { Skills } from '../components/about/Skills';
// import Main from '../components/Portfolio/Main/Main';
// import Expertise from '../components/Portfolio/Expertices/Expertise';

export default function About() {
  // need to copy from: https://github.com/yujisatojr/react-portfolio-template
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="This is the about page" />
      </Head>

    <div className="about-container">
      <Profile/>
      <Bio/>
      <Skills/>
    </div>
      {/* <Main/>
      <Expertise/> */}
      
    </Layout>
  );
}