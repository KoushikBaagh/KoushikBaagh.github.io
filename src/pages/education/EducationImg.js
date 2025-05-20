import React, { Component } from "react";

export default class EducationImg extends Component {
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

        {/* Graduation Cap */}
        <rect
          x="300"
          y="200"
          width="200"
          height="20"
          fill={theme.dark}
          opacity="0.8"
        />
        <polygon
          points="400,180 330,200 470,200"
          fill={theme.dark}
          opacity="0.8"
        />
        <circle cx="400" cy="180" r="10" fill={theme.imageHighlight} />
        <rect
          x="395"
          y="180"
          width="10"
          height="80"
          fill={theme.dark}
          opacity="0.8"
        />
        <circle cx="400" cy="270" r="15" fill={theme.dark} opacity="0.8" />

        {/* Diploma/Certificate */}
        <rect
          x="280"
          y="320"
          width="240"
          height="160"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        <rect
          x="280"
          y="320"
          width="240"
          height="160"
          rx="5"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="2"
        />
        <rect
          x="300"
          y="340"
          width="200"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="300"
          y="360"
          width="200"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="300"
          y="380"
          width="200"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="300"
          y="400"
          width="150"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="300"
          y="420"
          width="200"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />

        {/* University Seal */}
        <circle
          cx="400"
          cy="460"
          r="15"
          fill={theme.imageHighlight}
          opacity="0.7"
        />
        <circle cx="400" cy="460" r="10" fill={theme.dark} opacity="0.7" />

        {/* Books */}
        <rect
          x="150"
          y="380"
          width="80"
          height="120"
          rx="5"
          fill={theme.jacketColor}
          opacity="0.8"
        />
        <rect
          x="155"
          y="390"
          width="70"
          height="10"
          rx="2"
          fill={theme.dark}
          opacity="0.6"
        />
        <rect
          x="155"
          y="405"
          width="70"
          height="10"
          rx="2"
          fill={theme.dark}
          opacity="0.6"
        />
        <rect
          x="155"
          y="420"
          width="70"
          height="10"
          rx="2"
          fill={theme.dark}
          opacity="0.6"
        />

        <rect
          x="170"
          y="365"
          width="70"
          height="120"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <rect
          x="175"
          y="375"
          width="60"
          height="10"
          rx="2"
          fill={theme.dark}
          opacity="0.6"
        />
        <rect
          x="175"
          y="390"
          width="60"
          height="10"
          rx="2"
          fill={theme.dark}
          opacity="0.6"
        />
        <rect
          x="175"
          y="405"
          width="60"
          height="10"
          rx="2"
          fill={theme.dark}
          opacity="0.6"
        />

        {/* Computer/Laptop */}
        <rect
          x="570"
          y="370"
          width="120"
          height="80"
          rx="5"
          fill={theme.dark}
          opacity="0.8"
        />
        <rect
          x="570"
          y="450"
          width="120"
          height="10"
          rx="2"
          fill={theme.dark}
        />
        <rect
          x="580"
          y="380"
          width="100"
          height="60"
          rx="3"
          fill={theme.text}
          opacity="0.2"
        />
        <rect
          x="595"
          y="390"
          width="70"
          height="5"
          rx="1"
          fill={theme.text}
          opacity="0.5"
        />
        <rect
          x="595"
          y="400"
          width="70"
          height="5"
          rx="1"
          fill={theme.text}
          opacity="0.5"
        />
        <rect
          x="595"
          y="410"
          width="40"
          height="5"
          rx="1"
          fill={theme.text}
          opacity="0.5"
        />

        {/* Code Symbol */}
        <text
          x="600"
          y="430"
          fontFamily="monospace"
          fontSize="18"
          fill={theme.imageHighlight}
          opacity="0.9"
        >
          {"</>"}
        </text>

        {/* Lines connecting elements */}
        <path
          d="M400 290L400 320"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        <path
          d="M250 430L280 430"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        <path
          d="M520 430L570 430"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="5 3"
        />
      </svg>
    );
  }
}
