import React, { Component } from "react";

export default class ProjectsImg extends Component {
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

        {/* Blockchain/KoushikCoin Project - Top */}
        <rect
          x="250"
          y="120"
          width="300"
          height="140"
          rx="10"
          fill={theme.dark}
          opacity="0.7"
        />

        {/* Blockchain */}
        <rect
          x="270"
          y="140"
          width="60"
          height="40"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <rect
          x="340"
          y="140"
          width="60"
          height="40"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <rect
          x="410"
          y="140"
          width="60"
          height="40"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <rect
          x="480"
          y="140"
          width="60"
          height="40"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.8"
        />

        {/* Chain connections */}
        <path d="M330 160H340" stroke={theme.text} strokeWidth="2" />
        <path d="M400 160H410" stroke={theme.text} strokeWidth="2" />
        <path d="M470 160H480" stroke={theme.text} strokeWidth="2" />

        {/* Ethereum symbol */}
        <polygon points="400,190 410,205 400,220 390,205" fill={theme.text} />
        <text
          x="400"
          y="240"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="12"
        >
          KoushikCoin (ERC20)
        </text>

        {/* React App Project - Bottom Left */}
        <rect
          x="150"
          y="300"
          width="220"
          height="180"
          rx="10"
          fill={theme.dark}
          opacity="0.7"
        />
        <rect
          x="150"
          y="300"
          width="220"
          height="30"
          rx="10"
          fill={theme.imageHighlight}
        />
        <circle cx="165" cy="315" r="5" fill={theme.text} />
        <circle cx="180" cy="315" r="5" fill={theme.text} />
        <circle cx="195" cy="315" r="5" fill={theme.text} />

        {/* React Logo */}
        <circle cx="260" cy="390" r="40" fill={theme.dark} opacity="0.2" />
        <circle cx="260" cy="390" r="7" fill={theme.imageHighlight} />
        <ellipse
          cx="260"
          cy="390"
          rx="25"
          ry="10"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="2"
        />
        <ellipse
          cx="260"
          cy="390"
          rx="25"
          ry="10"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          transform="rotate(60 260 390)"
        />
        <ellipse
          cx="260"
          cy="390"
          rx="25"
          ry="10"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          transform="rotate(120 260 390)"
        />

        <text
          x="260"
          y="450"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="12"
        >
          Residential Society App
        </text>

        {/* Chat Platform Project - Bottom Right */}
        <rect
          x="430"
          y="300"
          width="220"
          height="180"
          rx="10"
          fill={theme.dark}
          opacity="0.7"
        />
        <rect
          x="430"
          y="300"
          width="220"
          height="30"
          rx="10"
          fill={theme.imageHighlight}
        />
        <circle cx="445" cy="315" r="5" fill={theme.text} />
        <circle cx="460" cy="315" r="5" fill={theme.text} />
        <circle cx="475" cy="315" r="5" fill={theme.text} />

        {/* Chat Bubbles */}
        <rect
          x="450"
          y="350"
          width="80"
          height="40"
          rx="15"
          fill={theme.jacketColor}
          opacity="0.7"
        />
        <rect
          x="550"
          y="400"
          width="80"
          height="40"
          rx="15"
          fill={theme.imageHighlight}
          opacity="0.7"
        />

        {/* Connection indicators */}
        <circle cx="540" cy="370" r="5" fill={theme.imageHighlight} />
        <circle cx="540" cy="385" r="5" fill={theme.imageHighlight} />
        <circle cx="540" cy="400" r="5" fill={theme.imageHighlight} />

        <text
          x="540"
          y="450"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="12"
        >
          Konversify (Real-time Chat)
        </text>

        {/* Technical Specifications */}
        <rect
          x="480"
          y="500"
          width="120"
          height="20"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <text
          x="540"
          y="514"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="10"
        >
          Socket.IO
        </text>

        <rect
          x="610"
          y="500"
          width="40"
          height="20"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <text
          x="630"
          y="514"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="10"
        >
          JWT
        </text>

        <rect
          x="480"
          y="530"
          width="60"
          height="20"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <text
          x="510"
          y="544"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="10"
        >
          MongoDB
        </text>

        <rect
          x="550"
          y="530"
          width="100"
          height="20"
          rx="5"
          fill={theme.imageHighlight}
          opacity="0.6"
        />
        <text
          x="600"
          y="544"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="10"
        >
          70+ Concurrent Users
        </text>

        {/* Stats */}
        <rect
          x="320"
          y="520"
          width="100"
          height="40"
          rx="5"
          fill={theme.dark}
          opacity="0.6"
        />
        <text
          x="370"
          y="545"
          textAnchor="middle"
          fill={theme.text}
          fontFamily="Arial"
          fontSize="11"
        >
          Engagement +40%
        </text>
      </svg>
    );
  }
}
