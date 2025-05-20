import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="600"
        viewBox="0 0 800 600"
        fill="none"
      >
        {/* Background elements */}
        <circle cx="400" cy="300" r="280" fill={theme.dark} opacity="0.05" />
        <circle cx="400" cy="300" r="230" fill={theme.dark} opacity="0.08" />

        {/* Grid lines */}
        <path
          d="M100 300H700"
          stroke={theme.text}
          opacity="0.1"
          strokeWidth="1"
        />
        <path
          d="M400 100V500"
          stroke={theme.text}
          opacity="0.1"
          strokeWidth="1"
        />
        <path
          d="M150 150L650 450"
          stroke={theme.text}
          opacity="0.1"
          strokeWidth="1"
        />
        <path
          d="M150 450L650 150"
          stroke={theme.text}
          opacity="0.1"
          strokeWidth="1"
        />

        {/* Frontend - Browser Window */}
        <rect
          x="220"
          y="160"
          width="360"
          height="220"
          rx="8"
          fill={theme.dark}
          opacity="0.8"
        />
        <rect
          x="220"
          y="160"
          width="360"
          height="30"
          rx="8"
          fill={theme.imageHighlight}
        />
        <circle cx="240" cy="175" r="6" fill={theme.text} />
        <circle cx="260" cy="175" r="6" fill={theme.text} />
        <circle cx="280" cy="175" r="6" fill={theme.text} />

        {/* Browser content - Code elements */}
        <rect
          x="240"
          y="210"
          width="150"
          height="15"
          rx="2"
          fill={theme.text}
          opacity="0.7"
        />
        <rect
          x="240"
          y="235"
          width="200"
          height="15"
          rx="2"
          fill={theme.text}
          opacity="0.5"
        />
        <rect
          x="240"
          y="260"
          width="120"
          height="15"
          rx="2"
          fill={theme.text}
          opacity="0.7"
        />

        <rect
          x="440"
          y="210"
          width="120"
          height="140"
          rx="4"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        <rect
          x="450"
          y="220"
          width="100"
          height="80"
          rx="2"
          fill={theme.imageHighlight}
          opacity="0.5"
        />
        <rect
          x="450"
          y="310"
          width="100"
          height="30"
          rx="15"
          fill={theme.imageHighlight}
        />

        {/* Backend - Server and Database */}
        <rect
          x="300"
          y="400"
          width="200"
          height="80"
          rx="6"
          fill={theme.dark}
          opacity="0.8"
        />
        <rect
          x="300"
          y="400"
          width="200"
          height="20"
          rx="6"
          fill={theme.imageHighlight}
        />
        <rect
          x="320"
          y="430"
          width="160"
          height="10"
          rx="2"
          fill={theme.text}
          opacity="0.5"
        />
        <rect
          x="320"
          y="450"
          width="160"
          height="10"
          rx="2"
          fill={theme.text}
          opacity="0.7"
        />

        {/* Database */}
        <ellipse
          cx="180"
          cy="420"
          rx="60"
          ry="20"
          fill={theme.jacketColor}
          opacity="0.8"
        />
        <rect
          x="120"
          y="420"
          width="120"
          height="40"
          fill={theme.jacketColor}
          opacity="0.8"
        />
        <ellipse
          cx="180"
          cy="460"
          rx="60"
          ry="20"
          fill={theme.jacketColor}
          opacity="0.9"
        />

        {/* Connection lines */}
        <path
          d="M400 380V400"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeDasharray="5 5"
        />
        <path
          d="M250 440H300"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeDasharray="5 5"
        />

        {/* API/Endpoints */}
        <circle cx="620" cy="300" r="50" fill={theme.dark} opacity="0.8" />
        <path d="M600 300H640" stroke={theme.text} strokeWidth="4" />
        <path d="M620 280V320" stroke={theme.text} strokeWidth="4" />
        <path
          d="M500 300H570"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeDasharray="5 5"
        />

        {/* Decorative Elements - Code symbols */}
        <text
          x="140"
          y="280"
          fill={theme.text}
          fontSize="24"
          fontFamily="'Courier New', monospace"
        >
          {"</>"}
        </text>
        <text
          x="650"
          y="380"
          fill={theme.text}
          fontSize="20"
          fontFamily="'Courier New', monospace"
        >
          {"{}"}
        </text>
        <text
          x="100"
          y="180"
          fill={theme.text}
          fontSize="26"
          fontFamily="'Courier New', monospace"
        >
          {"/* */"}
        </text>

        {/* Modern floating tech icons */}
        <circle
          cx="160"
          cy="350"
          r="30"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <circle
          cx="600"
          cy="200"
          r="25"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <circle
          cx="500"
          cy="480"
          r="35"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
      </svg>
    );
  }
}
