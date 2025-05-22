import React from "react";
import "./BackgroundLines.css";

const BackgroundLines = ({
  theme,
  className = "",
  children,
  lineColor = "rgba(255, 255, 255, 0.1)",
}) => {
  // Adjust line color based on theme
  const adjustedLineColor =
    theme?.body?.startsWith("#000") || theme?.body?.startsWith("#0")
      ? "rgba(255, 255, 255, 0.1)" // light lines for dark backgrounds
      : "rgba(0, 0, 0, 0.05)"; // dark lines for light backgrounds

  const finalLineColor = lineColor || adjustedLineColor;

  return (
    <div className={`background-lines-container ${className}`}>
      <div className="background-lines" style={{ color: finalLineColor }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="background-lines-svg"
        >
          <defs>
            <pattern
              id="pattern-lines"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(135)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                strokeWidth="1"
                stroke="currentColor"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#pattern-lines)" />

          {/* Animated wave lines */}
          <path
            className="bg-line-1"
            d="M0,50 Q250,150 500,50 T1000,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
          />

          <path
            className="bg-line-2"
            d="M0,100 Q250,200 500,100 T1000,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
          />

          <path
            className="bg-line-3"
            d="M0,150 Q250,250 500,150 T1000,150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="background-lines-content">{children}</div>
    </div>
  );
};

export default BackgroundLines;
