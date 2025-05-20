import React, { Component } from "react";

export default class BlockchainImg extends Component {
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
        {/* Background hexagon grid pattern */}
        <g opacity="0.1">
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              {[...Array(8)].map((_, j) => {
                const x = 100 + i * 70;
                const y = 100 + j * 60 + (i % 2 === 0 ? 30 : 0);
                return (
                  <polygon
                    key={`${i}-${j}`}
                    points={`${x},${y} ${x + 35},${y - 20} ${x + 70},${y} ${
                      x + 70
                    },${y + 40} ${x + 35},${y + 60} ${x},${y + 40}`}
                    stroke={theme.text}
                    strokeWidth="1"
                    fill="none"
                  />
                );
              })}
            </g>
          ))}
        </g>

        {/* Bitcoin logo */}
        <g transform="translate(150, 100) scale(0.7)">
          <circle cx="150" cy="150" r="120" fill={theme.dark} opacity="0.2" />
          <circle cx="150" cy="150" r="100" fill="#F7931A" opacity="0.9" />
          <path
            d="M170 100 C 210 105, 210 145, 180 150 C 215 155, 215 195, 170 200 L 170 220 L 150 220 L 150 200 L 130 200 L 130 220 L 110 220 L 110 200 L 90 200 L 90 180 L 110 180 L 110 120 L 90 120 L 90 100 L 110 100 L 110 80 L 130 80 L 130 100 L 150 100 L 150 80 L 170 80 L 170 100"
            fill="white"
          />
          <path
            d="M130 120 L 130 180 L 160 180 C 180 180, 185 160, 165 150 C 185 140, 180 120, 160 120 L 130 120"
            fill="#F7931A"
          />
          <path
            d="M150 120 L 160 120 C 170 120, 175 130, 160 140 L 150 140 Z"
            fill="white"
          />
          <path
            d="M150 160 L 160 160 C 175 160, 175 170, 160 180 L 150 180 Z"
            fill="white"
          />
        </g>

        {/* Ethereum logo */}
        <g transform="translate(500, 100) scale(0.7)">
          <circle cx="100" cy="100" r="90" fill={theme.dark} opacity="0.2" />
          <path
            d="M100 30 L160 130 L100 170 L40 130 Z"
            fill="#627EEA"
            opacity="0.9"
          />
          <path d="M100 30 L100 170 L40 130 Z" fill="#627EEA" opacity="0.6" />
          <path d="M100 30 L100 170 L160 130 Z" fill="#627EEA" opacity="0.8" />
          <path
            d="M100 180 L160 140 L100 240 L40 140 Z"
            fill="#627EEA"
            opacity="0.9"
          />
          <path d="M100 180 L100 240 L40 140 Z" fill="#627EEA" opacity="0.6" />
          <path d="M100 180 L100 240 L160 140 Z" fill="#627EEA" opacity="0.8" />
        </g>

        {/* Smart Contract visual */}
        <g transform="translate(130, 300)">
          <rect
            x="0"
            y="0"
            width="180"
            height="200"
            rx="10"
            fill={theme.dark}
            opacity="0.7"
          />
          <rect
            x="20"
            y="20"
            width="140"
            height="20"
            rx="5"
            fill={theme.imageHighlight}
            opacity="0.8"
          />
          <rect
            x="20"
            y="50"
            width="100"
            height="10"
            rx="5"
            fill={theme.text}
            opacity="0.5"
          />
          <rect
            x="20"
            y="70"
            width="140"
            height="10"
            rx="5"
            fill={theme.text}
            opacity="0.5"
          />
          <rect
            x="20"
            y="90"
            width="80"
            height="10"
            rx="5"
            fill={theme.text}
            opacity="0.5"
          />

          <rect
            x="20"
            y="120"
            width="60"
            height="20"
            rx="5"
            fill="#627EEA"
            opacity="0.8"
          />
          <text
            x="50"
            y="134"
            textAnchor="middle"
            fill="white"
            fontFamily="Arial"
            fontSize="10"
          >
            function
          </text>

          <rect
            x="20"
            y="150"
            width="140"
            height="10"
            rx="5"
            fill={theme.text}
            opacity="0.5"
          />
          <rect
            x="20"
            y="170"
            width="120"
            height="10"
            rx="5"
            fill={theme.text}
            opacity="0.5"
          />

          <text
            x="90"
            y="225"
            textAnchor="middle"
            fill={theme.text}
            fontFamily="Arial"
            fontSize="14"
          >
            Smart Contract
          </text>
        </g>

        {/* Blockchain visualization */}
        <g transform="translate(450, 300)">
          <rect
            x="0"
            y="0"
            width="180"
            height="200"
            rx="10"
            fill={theme.dark}
            opacity="0.7"
          />

          {/* Block 1 */}
          <rect
            x="20"
            y="30"
            width="60"
            height="40"
            rx="5"
            fill={theme.imageHighlight}
            opacity="0.8"
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fill={theme.dark}
            fontFamily="Arial"
            fontSize="12"
          >
            Block
          </text>
          <path d="M80 50 L110 50" stroke={theme.text} strokeWidth="2" />

          {/* Block 2 */}
          <rect
            x="110"
            y="30"
            width="60"
            height="40"
            rx="5"
            fill={theme.imageHighlight}
            opacity="0.8"
          />
          <text
            x="140"
            y="55"
            textAnchor="middle"
            fill={theme.dark}
            fontFamily="Arial"
            fontSize="12"
          >
            Block
          </text>
          <path d="M140 70 L140 100" stroke={theme.text} strokeWidth="2" />

          {/* Block 3 */}
          <rect
            x="110"
            y="100"
            width="60"
            height="40"
            rx="5"
            fill={theme.imageHighlight}
            opacity="0.8"
          />
          <text
            x="140"
            y="125"
            textAnchor="middle"
            fill={theme.dark}
            fontFamily="Arial"
            fontSize="12"
          >
            Block
          </text>
          <path d="M110 120 L80 120" stroke={theme.text} strokeWidth="2" />

          {/* Block 4 */}
          <rect
            x="20"
            y="100"
            width="60"
            height="40"
            rx="5"
            fill={theme.imageHighlight}
            opacity="0.8"
          />
          <text
            x="50"
            y="125"
            textAnchor="middle"
            fill={theme.dark}
            fontFamily="Arial"
            fontSize="12"
          >
            Block
          </text>
          <path d="M50 100 L50 70" stroke={theme.text} strokeWidth="2" />

          {/* Hash visualization */}
          <rect
            x="30"
            y="160"
            width="140"
            height="20"
            rx="5"
            fill="#F7931A"
            opacity="0.6"
          />
          <text
            x="100"
            y="174"
            textAnchor="middle"
            fill={theme.dark}
            fontFamily="Arial"
            fontSize="10"
          >
            0x7d8f...3e2a
          </text>

          <text
            x="90"
            y="225"
            textAnchor="middle"
            fill={theme.text}
            fontFamily="Arial"
            fontSize="14"
          >
            KoushikCoin
          </text>
        </g>

        {/* Web3 connection */}
        <path
          d="M310 390 C 350 390, 390 390, 450 390"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />

        {/* Bottom labels */}
        <g transform="translate(-25, 30)">
          <rect
            x="165"
            y="520"
            width="110"
            height="25"
            rx="5"
            fill={theme.imageHighlight}
            opacity="0.6"
          />
          <text
            x="220"
            y="537"
            textAnchor="middle"
            fill={theme.body}
            fontFamily="Arial"
            fontSize="12"
          >
            Solidity
          </text>

          <rect
            x="330"
            y="520"
            width="150"
            height="25"
            rx="5"
            fill={theme.imageHighlight}
            opacity="0.6"
          />
          <text
            x="405"
            y="537"
            textAnchor="middle"
            fill={theme.body}
            fontFamily="Arial"
            fontSize="12"
          >
            Ethereum Network
          </text>

          <rect
            x="535"
            y="520"
            width="110"
            height="25"
            rx="5"
            fill={theme.imageHighlight}
            opacity="0.6"
          />
          <text
            x="590"
            y="537"
            textAnchor="middle"
            fill={theme.body}
            fontFamily="Arial"
            fontSize="12"
          >
            Web3.js
          </text>
        </g>
      </svg>
    );
  }
}
