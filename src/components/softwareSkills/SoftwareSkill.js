import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className="software-skill-inline" name={logo.skillName}>
                    {logo.fontAwesomeClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                    {!logo.fontAwesomeClassname && logo.imageSrc && (
                      <img
                        className="skill-image"
                        style={{
                          ...logo.style,
                          ...(logo.imageSrc === "gerrit_bird.png"
                            ? {
                                mixBlendMode: "multiply",
                                filter:
                                  "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2))",
                              }
                            : {}),
                        }}
                        src={require(`../../assests/images/${logo.imageSrc}`)}
                        alt={logo.skillName}
                      />
                    )}
                    {!logo.fontAwesomeClassname && !logo.imageSrc && logo.text && (
                      <span className="skill-text" style={logo.style}>
                        {logo.text}
                      </span>
                    )}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
