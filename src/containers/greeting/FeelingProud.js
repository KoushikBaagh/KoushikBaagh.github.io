/*eslint-disable */
import React, { Component } from "react";
import myImage from "./LinkedIN Headshot.jpg"; // replace with your image path

class FeelingProud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageError: false,
    };
  }

  handleImageError = () => {
    this.setState({ imageError: true });
  };

  render() {
    const theme = this.props.theme;

    if (this.state.imageError) {
      // Fallback SVG if image fails to load
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="600"
          viewBox="0 0 800 600"
          fill="none"
        >
          {/* Background Elements */}
          <circle cx="400" cy="300" r="250" fill={theme.dark} opacity="0.05" />
          <circle cx="400" cy="300" r="200" fill={theme.dark} opacity="0.08" />

          {/* Grid Pattern */}
          <path
            d="M150 300H650"
            stroke={theme.text}
            strokeWidth="1"
            opacity="0.1"
            strokeDasharray="5 5"
          />
          <path
            d="M400 100V500"
            stroke={theme.text}
            strokeWidth="1"
            opacity="0.1"
            strokeDasharray="5 5"
          />

          {/* Stylized Person */}
          <circle cx="400" cy="180" r="60" fill={theme.dark} opacity="0.6" />
          <rect
            x="370"
            y="240"
            width="60"
            height="120"
            rx="20"
            fill={theme.dark}
            opacity="0.6"
          />

          {/* Arms */}
          <path
            d="M370 280L320 320"
            stroke={theme.dark}
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M430 280L480 320"
            stroke={theme.dark}
            strokeWidth="15"
            strokeLinecap="round"
          />

          {/* Legs */}
          <path
            d="M380 360L350 450"
            stroke={theme.dark}
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M420 360L450 450"
            stroke={theme.dark}
            strokeWidth="15"
            strokeLinecap="round"
          />

          {/* Laptop */}
          <rect
            x="300"
            y="320"
            width="200"
            height="10"
            rx="2"
            fill={theme.jacketColor}
          />
          <rect
            x="320"
            y="260"
            width="160"
            height="60"
            rx="5"
            fill={theme.jacketColor}
          />
          <rect
            x="330"
            y="270"
            width="140"
            height="40"
            rx="3"
            fill={theme.dark}
            opacity="0.4"
          />

          {/* Code Elements */}
          <rect
            x="350"
            y="280"
            width="100"
            height="5"
            rx="1"
            fill={theme.text}
            opacity="0.7"
          />
          <rect
            x="350"
            y="290"
            width="80"
            height="5"
            rx="1"
            fill={theme.text}
            opacity="0.7"
          />
          <rect
            x="350"
            y="300"
            width="90"
            height="5"
            rx="1"
            fill={theme.imageHighlight}
            opacity="0.9"
          />

          {/* Tech Symbols */}
          <circle
            cx="550"
            cy="180"
            r="30"
            fill={theme.jacketColor}
            opacity="0.6"
          />
          <text
            x="550"
            y="185"
            textAnchor="middle"
            fill={theme.text}
            fontFamily="Arial"
            fontSize="12"
          >
            Web
          </text>

          <circle
            cx="250"
            cy="200"
            r="25"
            fill={theme.jacketColor}
            opacity="0.6"
          />
          <text
            x="250"
            y="205"
            textAnchor="middle"
            fill={theme.text}
            fontFamily="Arial"
            fontSize="10"
          >
            Open
          </text>

          <circle
            cx="600"
            cy="280"
            r="35"
            fill={theme.jacketColor}
            opacity="0.6"
          />
          <text
            x="600"
            y="285"
            textAnchor="middle"
            fill={theme.text}
            fontFamily="Arial"
            fontSize="12"
          >
            Dev
          </text>
        </svg>
      );
    }

    // Original image implementation
    return (
      <img
        src={myImage}
        alt="Professional Headshot"
        className="responsive-image"
        onError={this.handleImageError}
      />
    );
  }
}

export default FeelingProud;
