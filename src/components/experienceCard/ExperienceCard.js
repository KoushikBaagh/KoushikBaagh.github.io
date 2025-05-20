import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

// Logo URL constants
const LOGO_URLS = {
  chromium:
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Chromium_Logo.png",
  amazon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokBW8NNNPFDXuwJKtJ3TA_N7xlWxvBdygmg&s",
  wootzapp:
    "https://pbs.twimg.com/profile_images/1606670232839688197/_Y_n5MCb_400x400.jpg",
};

// Function to get logo based on path
const LogoComponent = ({ logoPath }) => {
  switch (logoPath) {
    case "chromium_logo.png":
      return (
        <img
          className="experience-card-logo"
          src={LOGO_URLS.chromium}
          alt="Chromium"
        />
      );
    case "amazon_logo.png":
      return (
        <img
          className="experience-card-logo"
          src={LOGO_URLS.amazon}
          alt="Amazon"
        />
      );
    case "wootzapp_logo.png":
      return (
        <img
          className="experience-card-logo"
          src={LOGO_URLS.wootzapp}
          alt="WootzApp"
        />
      );
    default:
      try {
        return (
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${logoPath}`)}
            alt=""
          />
        );
      } catch (error) {
        console.log(`Error loading image: ${logoPath}`, error);
        return (
          <div className="experience-card-logo-fallback">
            {logoPath.split(".")[0]}
          </div>
        );
      }
  }
};

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 50 }}
      >
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <LogoComponent logoPath={experience["logo_path"]} />
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: 50,
              zIndex: 100,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 190,
                width: 2,
                backgroundColor: `${theme.headerColor}`,
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div>
        <Fade right duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="experience-card"
              style={{ background: `${theme.body}` }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.text }}
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 20,
                }}
              >
                <div
                  className="repo-description"
                  style={{ color: theme.text }}
                />
                <div style={{ color: theme.text }}>
                  {experience["description"]}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
