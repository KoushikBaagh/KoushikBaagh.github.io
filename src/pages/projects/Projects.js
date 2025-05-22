import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEthEffect: false,
    };
  }

  componentDidMount() {
    // Add Ethereum particles effect after component mounts
    setTimeout(() => {
      this.setState({ showEthEffect: true });
    }, 500);
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* Web3 Intro Section - Moved before the showcase for better visibility */}
        {/* <div className="web3-intro-container">
          <div className="web3-intro">
            <Fade bottom duration={1000}>
              <h2 className="web3-heading">Building the Decentralized Future</h2>
              <p className="web3-description">
                Exploring blockchain technologies and creating decentralized applications 
                using Web3.js, Ethereum, and smart contracts. From NFT marketplaces to 
                DeFi solutions, I'm passionate about the possibilities of Web3.
              </p>
            </Fade>
          </div>
        </div> */}

        {/* Enhanced MacbookScroll component at the top */}
        {/* <div className="web3-showcase">
          <MacbookScroll 
            title="Web3.js Development"
            theme={theme} 
          />
          
          {this.state.showEthEffect && 
            <div className="ethereum-particles">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="eth-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                />
              ))}
            </div>
          }
        </div> */}

        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} key={pub.id} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
