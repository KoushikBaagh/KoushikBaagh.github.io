import React, { Component } from "react";

export default class DataScienceImg extends Component {
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

        {/* Chromium Logo - Center */}
        <circle cx="400" cy="250" r="80" fill={theme.dark} opacity="0.3" />
        <circle
          cx="400"
          cy="250"
          r="70"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        <circle cx="400" cy="250" r="35" fill={theme.dark} opacity="0.6" />
        <circle cx="400" cy="250" r="20" fill={theme.text} opacity="0.8" />
        <circle cx="400" cy="250" r="10" fill={theme.imageHighlight} />

        {/* Browser UI Elements */}
        <rect
          x="200"
          y="130"
          width="400"
          height="250"
          rx="10"
          fill={theme.dark}
          opacity="0.7"
        />
        <rect
          x="200"
          y="130"
          width="400"
          height="30"
          rx="10"
          fill={theme.imageHighlight}
        />
        <circle cx="220" cy="145" r="5" fill={theme.text} />
        <circle cx="240" cy="145" r="5" fill={theme.text} />
        <circle cx="260" cy="145" r="5" fill={theme.text} />
        <rect
          x="320"
          cy="137"
          width="200"
          height="16"
          rx="3"
          fill={theme.text}
          opacity="0.4"
        />

        {/* Browser Content */}
        <rect
          x="220"
          y="180"
          width="360"
          height="180"
          rx="5"
          fill={theme.dark}
          opacity="0.4"
        />

        {/* Code Elements */}
        <rect
          x="230"
          y="190"
          width="340"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="230"
          y="210"
          width="280"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="230"
          y="230"
          width="320"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="230"
          y="250"
          width="260"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="230"
          y="270"
          width="300"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="230"
          y="290"
          width="270"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="230"
          y="310"
          width="200"
          height="12"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="230"
          y="330"
          width="250"
          height="12"
          rx="2"
          fill={theme.jacketColor}
          opacity="0.7"
        />

        {/* Browser Window - Mobile */}
        <rect
          x="650"
          y="200"
          width="80"
          height="160"
          rx="10"
          fill={theme.dark}
          opacity="0.7"
        />
        <rect
          x="650"
          y="200"
          width="80"
          height="20"
          rx="5"
          fill={theme.imageHighlight}
        />
        <rect
          x="660"
          y="230"
          width="60"
          height="100"
          rx="3"
          fill={theme.dark}
          opacity="0.5"
        />

        {/* Gerrit Code Review Elements */}
        <rect
          x="220"
          y="400"
          width="360"
          height="120"
          rx="8"
          fill={theme.dark}
          opacity="0.7"
        />
        <rect
          x="220"
          y="400"
          width="360"
          height="30"
          rx="8"
          fill={theme.jacketColor}
          opacity="0.8"
        />
        <text
          x="400"
          y="420"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="12"
        >
          Gerrit Code Review
        </text>

        {/* Code Diff/Patch */}
        <rect
          x="240"
          y="440"
          width="320"
          height="15"
          rx="2"
          fill={theme.text}
          opacity="0.2"
        />
        <rect
          x="240"
          y="440"
          width="10"
          height="15"
          rx="2"
          fill={theme.imageHighlight}
          opacity="0.7"
        />
        <rect
          x="240"
          y="465"
          width="320"
          height="15"
          rx="2"
          fill={theme.text}
          opacity="0.2"
        />
        <rect
          x="240"
          y="465"
          width="10"
          height="15"
          rx="2"
          fill={theme.jacketColor}
          opacity="0.7"
        />
        <rect
          x="240"
          y="490"
          width="320"
          height="15"
          rx="2"
          fill={theme.text}
          opacity="0.2"
        />
        <rect
          x="240"
          y="490"
          width="10"
          height="15"
          rx="2"
          fill={theme.imageHighlight}
          opacity="0.7"
        />

        {/* Connection Lines */}
        <path
          d="M400 330L400 400"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        <path
          d="M650 280L560 280"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="5 3"
        />

        {/* Technical Floating Elements */}
        <circle
          cx="170"
          cy="180"
          r="30"
          fill={theme.jacketColor}
          opacity="0.6"
        />
        <text
          x="170"
          y="185"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="12"
        >
          C++
        </text>

        <circle
          cx="170"
          cy="260"
          r="25"
          fill={theme.jacketColor}
          opacity="0.6"
        />
        <text
          x="170"
          y="265"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="10"
        >
          WebUI
        </text>

        <circle
          cx="170"
          cy="330"
          r="20"
          fill={theme.jacketColor}
          opacity="0.6"
        />
        <text
          x="170"
          y="335"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="8"
        >
          JS
        </text>
      </svg>
    );
  }
}
