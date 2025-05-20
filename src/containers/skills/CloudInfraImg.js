import React, { Component } from "react";

export default class CloudInfraImg extends Component {
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

        {/* Chromium/Browser Illustration - Top Left */}
        <rect
          x="160"
          y="150"
          width="180"
          height="120"
          rx="8"
          fill={theme.dark}
          opacity="0.8"
        />
        <rect
          x="160"
          y="150"
          width="180"
          height="25"
          rx="8"
          fill={theme.imageHighlight}
        />
        <circle cx="175" cy="162" r="5" fill={theme.text} />
        <circle cx="190" cy="162" r="5" fill={theme.text} />
        <circle cx="205" cy="162" r="5" fill={theme.text} />

        {/* Browser Content */}
        <rect
          x="170"
          y="185"
          width="160"
          height="75"
          rx="2"
          fill={theme.dark}
        />
        <rect
          x="180"
          y="195"
          width="70"
          height="10"
          rx="2"
          fill={theme.text}
          opacity="0.5"
        />
        <rect
          x="180"
          y="215"
          width="140"
          height="5"
          rx="1"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="180"
          y="225"
          width="140"
          height="5"
          rx="1"
          fill={theme.text}
          opacity="0.3"
        />
        <rect
          x="180"
          y="235"
          width="140"
          height="5"
          rx="1"
          fill={theme.text}
          opacity="0.3"
        />

        {/* React Logo - Center */}
        <circle cx="400" cy="200" r="60" fill={theme.dark} opacity="0.2" />
        <circle cx="400" cy="200" r="10" fill={theme.imageHighlight} />
        <ellipse
          cx="400"
          cy="200"
          rx="40"
          ry="15"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
        />
        <ellipse
          cx="400"
          cy="200"
          rx="40"
          ry="15"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          transform="rotate(60 400 200)"
        />
        <ellipse
          cx="400"
          cy="200"
          rx="40"
          ry="15"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          transform="rotate(120 400 200)"
        />

        {/* Node.js Symbol - Bottom Left */}
        <path
          d="M200 350L250 320V380L200 410L150 380V320L200 350Z"
          fill={theme.jacketColor}
          opacity="0.8"
        />
        <path
          d="M200 350L250 320V380L200 410V350Z"
          fill={theme.jacketColor}
          opacity="0.9"
        />
        <path d="M200 350L150 320V380L200 410V350Z" fill={theme.jacketColor} />
        <circle cx="200" cy="365" r="10" fill={theme.dark} />

        {/* GitHub/Open Source - Right */}
        <circle cx="550" cy="250" r="50" fill={theme.dark} opacity="0.7" />
        <circle cx="550" cy="235" r="20" fill={theme.dark} />
        <path
          d="M520 260C520 260 535 290 550 290C565 290 580 260 580 260"
          fill="none"
          stroke={theme.text}
          strokeWidth="3"
        />

        {/* Code Branches */}
        <rect
          x="480"
          y="320"
          width="150"
          height="5"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <rect
          x="540"
          y="320"
          width="5"
          height="30"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <rect
          x="540"
          y="350"
          width="50"
          height="5"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.8"
        />

        <rect
          x="480"
          y="380"
          width="150"
          height="5"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <rect
          x="520"
          y="380"
          width="5"
          height="30"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <rect
          x="520"
          y="410"
          width="40"
          height="5"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.6"
        />

        <rect
          x="480"
          y="440"
          width="150"
          height="5"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
        <rect
          x="600"
          y="440"
          width="5"
          height="30"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
        <rect
          x="580"
          y="470"
          width="25"
          height="5"
          rx="2.5"
          fill={theme.imageHighlight}
          opacity="0.4"
        />

        {/* Web Stack Elements */}
        <rect
          x="280"
          y="400"
          width="240"
          height="100"
          rx="8"
          fill={theme.dark}
          opacity="0.7"
        />
        <rect
          x="290"
          y="410"
          width="220"
          height="20"
          rx="4"
          fill={theme.text}
          opacity="0.3"
        />
        <text
          x="400"
          y="425"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="12"
        >
          Full-Stack Development
        </text>

        <rect
          x="300"
          y="440"
          width="60"
          height="50"
          rx="4"
          fill={theme.imageHighlight}
          opacity="0.7"
        />
        <text
          x="330"
          y="470"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="10"
        >
          React
        </text>

        <rect
          x="370"
          y="440"
          width="60"
          height="50"
          rx="4"
          fill={theme.imageHighlight}
          opacity="0.7"
        />
        <text
          x="400"
          y="470"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="10"
        >
          Node.js
        </text>

        <rect
          x="440"
          y="440"
          width="60"
          height="50"
          rx="4"
          fill={theme.imageHighlight}
          opacity="0.7"
        />
        <text
          x="470"
          y="470"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="10"
        >
          MongoDB
        </text>

        {/* Connection Lines */}
        <path
          d="M400 260L400 400"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        <path
          d="M250 350L280 400"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        <path
          d="M550 300L520 400"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="5 3"
        />
      </svg>
    );
  }
}
