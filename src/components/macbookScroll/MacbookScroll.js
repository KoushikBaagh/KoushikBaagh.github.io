import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import "./MacbookScroll.css";

const MacbookScroll = ({ src, title, theme, useCodeSnippet = false }) => {
  const ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [currentLine, setCurrentLine] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [particles, setParticles] = useState([]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [codeAnimation, setCodeAnimation] = useState({
    isActive: false,
    currentLine: 0,
  });

  // Web3 terminal commands and responses - wrapped in useMemo
  const web3Commands = useMemo(
    () => [
      {
        command: "npm install web3 ethers @openzeppelin/contracts",
        response:
          "Installing packages...\n✅ Successfully installed web3\n✅ Successfully installed ethers\n✅ Successfully installed @openzeppelin/contracts",
      },
      {
        command: "node",
        response: "> ",
      },
      {
        command: "const Web3 = require('web3')",
        response: "undefined",
      },
      {
        command:
          "const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY')",
        response: "undefined",
      },
      {
        command: "await web3.eth.getBlockNumber()",
        response: "18627420",
      },
      {
        command:
          "const balance = await web3.eth.getBalance('0x742d35Cc6634C0532925a3b844Bc454e4438f44e')",
        response: "'2824172339129857432'",
      },
      {
        command: "web3.utils.fromWei(balance, 'ether')",
        response: "'2.824172339129857432'",
      },
      {
        command: "const myContract = require('./MySmartContract.json')",
        response: "undefined",
      },
      {
        command:
          "const contract = new web3.eth.Contract(myContract.abi, '0x1234...')",
        response:
          "Contract {\n  methods: { ... },\n  events: { ... },\n  ...  \n}",
      },
    ],
    []
  );

  // Updated Solidity code based on user's request
  const web3Code = useMemo(
    () => [
      "// SPDX-License-Identifier: MIT",
      "pragma solidity ^0.8.0;",
      "",
      'import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";',
      'import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";',
      "",
      "contract KoushikCoin is ERC20, Ownable{",
      '    constructor (uint256 initialSupply, address initialOwner) ERC20("KoushikCoin", "KKK") Ownable(initialOwner){',
      "        // mint all tokens to the initialOwner i.e KOUSHIK",
      "        _mint(initialOwner, initialSupply);",
      "        // transfer ownership if you want someone else to be owner",
      "        transferOwnership(initialOwner);",
      "    }",
      "    function mint(address to, uint256 amount) ",
      "        external ",
      "        onlyOwner ",
      "    {",
      "        _mint(to, amount);",
      "    }",
      "}",
    ],
    []
  );

  const createParticles = useCallback(() => {
    const newParticles = [];
    const particleCount = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1;
      const left = Math.random() * 100;
      const delay = Math.random() * 2;
      const duration = Math.random() * 3 + 3;

      newParticles.push({
        id: Date.now() + i,
        size,
        left: `${left}%`,
        delay: `${delay}s`,
        duration: `${duration}s`,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles after they're done
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticles[0].id));
    }, 8000);
  }, []);

  // Process terminal typing and responses
  useEffect(() => {
    if (currentLine >= web3Commands.length) return;

    const command = web3Commands[currentLine].command;

    if (typingIndex < command.length) {
      const typingTimer = setTimeout(() => {
        setCurrentCommand((prev) => prev + command[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, Math.random() * 50 + 50); // Random typing speed

      return () => clearTimeout(typingTimer);
    } else {
      const commandTimer = setTimeout(() => {
        // Add command to history
        setTerminalHistory((prev) => [
          ...prev,
          { type: "input", content: currentCommand },
          { type: "output", content: web3Commands[currentLine].response },
        ]);

        // Reset and go to next command
        setCurrentCommand("");
        setTypingIndex(0);
        setCurrentLine((prev) => prev + 1);

        // Create some particles for visual effect
        createParticles();
      }, 1000); // Wait before showing response

      return () => clearTimeout(commandTimer);
    }
  }, [currentLine, typingIndex, currentCommand, web3Commands, createParticles]);

  // Start code animation after terminal commands are done
  useEffect(() => {
    if (currentLine >= web3Commands.length && !codeAnimation.isActive) {
      setCodeAnimation({ isActive: true, currentLine: 0 });
    }
  }, [currentLine, web3Commands.length, codeAnimation.isActive]);

  // Animate code snippet lines
  useEffect(() => {
    if (!codeAnimation.isActive) return;

    if (codeAnimation.currentLine < web3Code.length) {
      const codeTimer = setTimeout(() => {
        setCodeAnimation((prev) => ({
          ...prev,
          currentLine: prev.currentLine + 1,
        }));

        // Create particles occasionally
        if (Math.random() > 0.7) {
          createParticles();
        }
      }, 100); // Speed of code reveal

      return () => clearTimeout(codeTimer);
    }
  }, [codeAnimation, web3Code.length, createParticles]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const scrollPercentage = Math.min(
        Math.max(
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
          0
        ),
        1
      );

      setScrollProgress(scrollPercentage);
    };

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Create initial particles
    for (let i = 0; i < 5; i++) {
      createParticles();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [createParticles]);

  // Calculate transformations based on scroll progress
  const scaleX =
    1.2 +
    (dimensions.width < 768 ? 0 : 0.3) * Math.min(scrollProgress / 0.3, 1);
  const scaleY =
    0.6 +
    (dimensions.width < 768 ? 0.4 : 0.9) * Math.min(scrollProgress / 0.3, 1);
  const translateY = scrollProgress * 400;
  const rotate =
    scrollProgress < 0.1
      ? -28
      : scrollProgress < 0.3
      ? -28 + (scrollProgress - 0.1) * 140
      : 0;
  const textTransform = scrollProgress * 100;
  const textOpacity = Math.max(1 - scrollProgress / 0.2, 0);

  // Ethereum SVG icon
  const ethereumIcon = (
    <svg
      className="eth-icon"
      width="100%"
      height="100%"
      viewBox="0 0 256 417"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <polygon
          fill="#343434"
          points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
        ></polygon>
        <polygon
          fill="#8C8C8C"
          points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
        ></polygon>
        <polygon
          fill="#3C3C3B"
          points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
        ></polygon>
        <polygon
          fill="#8C8C8C"
          points="127.962 416.9052 127.962 312.1852 0 236.5852"
        ></polygon>
        <polygon
          fill="#141414"
          points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
        ></polygon>
        <polygon
          fill="#393939"
          points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
        ></polygon>
      </g>
    </svg>
  );

  // Web3.js SVG icon
  const web3Icon = (
    <svg
      className="web3-icon web3-animation"
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M390.9 121.1C378.3 108.5 361.9 101 344.6 100.1C327.2 99.2 310.1 105.1 296.6 116.7L261 145.6L230.2 121.8L210.2 106.3C203.2 100.7 194.7 97.6 185.9 97.4C177.1 97.1 168.5 99.7 161.2 104.7L95.2 149.7C88.5 154.3 83.2 160.8 80 168.3C76.8 175.9 75.9 184.2 77.4 192.2L101.4 322.2C102.7 329.6 106.3 336.3 111.6 341.6C116.9 346.9 123.6 350.5 131 351.8L261 375.8C264.3 376.3 267.7 376.5 271 376.5C277.9 376.5 284.7 375 290.9 372.1C298.5 368.8 305 363.4 309.7 356.7L354.7 290.7C359.7 283.3 362.4 274.7 362.1 265.9C361.8 257.1 358.8 248.7 353.2 241.7L337.7 221.7L313.9 191L342.8 168.4C350.3 162.5 359.8 159.5 369.6 160C379.3 160.5 388.4 164.5 395.1 171.2C401.8 177.9 405.7 187 406.2 196.7C406.7 206.5 403.8 216 397.9 223.5L355.9 270.5L377.7 297.7L431.4 375C436.9 382.2 444.8 387.1 453.7 388.9C462.5 390.8 471.6 389.4 479.4 384.9L496.2 375.4C505.3 370.3 511.4 361.4 512.5 351.3C513.5 341.2 509.4 331.2 501.5 324.5L390.9 121.1ZM478.8 357.2C477.1 360.8 473.9 363.3 470.1 364L453.3 373.6C451.4 374.6 449.3 375 447.2 374.8C445.1 374.5 443.2 373.6 441.7 372.1L388 294.7L366.2 267.6C364.3 265.2 363.5 262.1 364.1 259.1C364.6 256.1 366.4 253.5 369 252C371.5 250.5 374.6 250.2 377.4 251.4C380.2 252.6 382.2 255 382.9 257.9L383.1 258.7L425.2 211.6C434.1 200.9 438.1 186.7 436.4 172.6C434.7 158.5 427.3 145.9 415.8 138.1C404.3 130.3 390.1 128.1 376.6 132C363.2 135.9 352.2 145.4 346.5 158L317.6 180.6C316.5 181.5 315.2 182.1 313.8 182.5C312.4 182.9 311 183 309.6 182.9C308.2 182.8 306.9 182.4 305.6 181.8C304.4 181.2 303.3 180.4 302.4 179.3L326.2 159.8C342.9 146.1 364.2 139.3 385.6 141.2C407 143.1 426.3 153.5 439.7 170.4L550.3 373.8C553.7 376.6 555.2 380.9 554.7 385.3C554.2 389.6 551.8 393.5 548.2 395.6L531.4 405.1C529.3 406.3 527 407 524.6 407.3C522.2 407.5 519.7 407.3 517.3 406.6C514.9 406 512.7 404.8 510.8 403.3C509 401.8 507.5 399.9 506.4 397.7L452.7 320.5L430.9 293.3C429 290.9 428.2 287.8 428.8 284.8C429.3 281.8 431.1 279.2 433.7 277.7C436.2 276.2 439.3 275.9 442.1 277.1C444.9 278.3 446.9 280.7 447.6 283.6L447.8 284.4L469.3 261.1C471.2 259 473.8 257.7 476.6 257.5C479.3 257.3 482 258.2 484.1 260.1C486.3 261.9 487.6 264.5 487.8 267.3C488 270.1 487.1 272.8 485.2 274.9L461.5 300.6C459.9 302.4 457.7 303.5 455.3 303.7C453 303.9 450.6 303.2 448.8 301.6C447 300 445.9 297.8 445.7 295.4C445.5 293.1 446.2 290.7 447.8 288.9L458.2 277.6L324.4 317.5L129.4 346.3C123.8 347.3 118 345.9 113.5 342.5C109 339 106.2 333.7 105.7 328L81.7 198C80.6 192.1 81.8 186 84.9 180.9C88 175.9 92.9 172.2 98.6 170.5L164.6 125.5C169.8 122.2 176.1 121.3 182 122.8C187.9 124.4 192.8 128.3 195.8 133.5L196 133.9L220 158.9C222.4 161.3 223.3 164.7 222.5 168C221.8 171.2 219.5 173.9 216.5 175.1C213.5 176.4 210 176.1 207.2 174.2C204.4 172.3 202.7 169.2 202.5 165.8L202.5 165.6L177.7 140L133.2 170L329.8 125.7L354.7 221.7L334.7 236.7L289.7 302.7C286.3 307.6 281.5 311.4 275.9 313.7C270.3 316 264.1 316.7 258.1 315.8L128.1 291.8C122.6 290.8 117.7 287.9 114.2 283.7C110.7 279.4 108.9 274 109 268.5C109 262.9 111.1 257.6 114.7 253.4C118.4 249.3 123.4 246.8 128.9 246.3L179.5 240.4C182.9 240 186.3 241.1 188.7 243.5C191.2 246 192.4 249.4 192.1 252.8C191.8 256.2 190 259.3 187.2 261.4C184.3 263.5 180.7 264.2 177.3 263.3L177.2 263.3L129.9 268.8L129.4 271.1C129.2 274.5 130.2 277.9 132.4 280.5C134.5 283.1 137.5 284.7 140.9 284.9C141.3 284.9 141.6 284.9 142 284.9L267.4 308L311.5 243L331.3 228.2L324.4 186.6L232.8 208.8C229.4 209.5 225.9 208.7 223.2 206.6C220.5 204.5 218.9 201.2 218.9 197.8C218.9 194.4 220.5 191.1 223.2 188.9C225.9 186.8 229.4 186 232.8 186.7L327.7 163.6C329.7 163.1 331.8 163.3 333.7 164.1C335.6 164.9 337.2 166.2 338.2 168C339.3 169.8 339.8 171.8 339.7 173.9C339.6 176 338.9 178 337.7 179.7L312.5 211.4L332.9 237.1C337.1 242.2 339.2 248.6 339 255.1C338.7 261.6 336.1 267.8 331.7 272.7L286.7 338.7C283.1 343.8 278 347.8 272.2 350.1C266.3 352.4 259.9 352.9 253.8 351.5L123.8 327.5C118.3 326.5 113.4 323.6 109.9 319.4C106.4 315.1 104.6 309.7 104.7 304.2L104.6 284.9L81.7 198L81.6 198C81.5 198.2 81.4 198.4 81.3 198.7C80.4 201.1 79.9 203.6 79.9 206.1L80.6 207.6L104.6 337.6C105.6 343.2 108.5 348.2 112.7 351.6C116.9 355.1 122.4 356.9 127.9 356.8C128.7 356.8 129.5 356.7 130.3 356.7L260.3 332.7C265.1 331.8 269.4 329.4 272.7 325.7C276 322.1 278 317.6 278.5 312.8L278.6 312.2L283.5 307.1C283.8 306.7 284.2 306.3 284.7 306.1C285.2 305.8 285.7 305.6 286.2 305.5C286.8 305.4 287.3 305.5 287.8 305.6C288.3 305.8 288.7 306.1 289.1 306.5L301.1 298.8C302.2 298 303.6 297.8 304.9 298.1C306.1 298.4 307.2 299.2 307.8 300.4C308.3 301.5 308.3 302.9 307.7 304.1C307.1 305.3 306 306.2 304.7 306.5L292.7 314.2C290.7 315.7 288.2 316.3 285.8 316C283.3 315.7 281 314.4 279.4 312.4L274.5 307.3L252.3 326.5L129.3 349.5L129.2 349.5C128.1 349.7 127 349.8 125.9 349.8C120.1 349.8 114.5 347.8 110.1 344.2C105.7 340.6 102.7 335.6 101.7 330L101.4 328.7L77.4 198.7L77.3 198.1C76.4 193.3 77 188.3 79 183.9C81 179.4 84.3 175.7 88.6 173.3L154.6 128.3C159.4 124.7 165.2 122.8 171.2 122.9C177.2 123 183 125.1 187.7 128.8L213.8 149.3L291.8 99.8C301.6 93.1 313.5 91.9 324.3 96.6C335.1 101.2 342.4 110.8 344.2 122.4C346 134 341.9 146 333.2 154.2L317.8 167.2L358.9 130.5C368.7 123.8 380.5 122.6 391.3 127.2C402.1 131.8 409.5 141.4 411.3 153.1C413.1 164.7 409 176.7 400.3 184.9L385 198L480.9 337.3C482.3 339.3 483 341.7 483 344.2C482.9 346.7 482.2 349.1 480.8 351.1L478.8 357.2Z"
        fill="url(#paint0_linear_1_3)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_3"
          x1="256"
          y1="100"
          x2="256"
          y2="407.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0099FF" />
          <stop offset="1" stopColor="#6A5ACD" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div ref={ref} className="macbook-scroll-container">
      <h2
        className="macbook-title"
        style={{
          transform: `translateY(${textTransform}px)`,
          opacity: textOpacity,
        }}
      >
        {title || "Web3.js Projects"}
      </h2>

      {/* Macbook Lid */}
      <div className="macbook-lid-container">
        <div
          className="macbook-lid"
          style={{
            transform: `perspective(800px) rotateX(${rotate}deg) translateY(${translateY}px) scale(${scaleX}, ${scaleY})`,
          }}
        >
          <div className="macbook-screen">
            {/* Animated Terminal Experience */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-btn terminal-btn-red"></div>
                <div className="terminal-btn terminal-btn-yellow"></div>
                <div className="terminal-btn terminal-btn-green"></div>
                <div className="terminal-title">web3.js development</div>
              </div>

              <div className="terminal-content">
                {/* Past commands and outputs */}
                {terminalHistory.map((item, index) => (
                  <div
                    key={index}
                    className={`terminal-line line-${item.type}`}
                  >
                    {item.type === "input" ? "> " + item.content : item.content}
                  </div>
                ))}

                {/* Current command being typed */}
                {currentLine < web3Commands.length && (
                  <div className="terminal-line line-input">
                    {"> "}
                    {currentCommand}
                    <span className="cursor"></span>
                  </div>
                )}

                {/* Show code animation after commands are done */}
                {codeAnimation.isActive && (
                  <div className="animated-code">
                    {web3Code
                      .slice(0, codeAnimation.currentLine)
                      .map((line, i) => {
                        // Add syntax highlighting classes
                        if (line.includes("//")) {
                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                            >
                              <span className="comment">{line}</span>
                            </pre>
                          );
                        } else if (line.includes("import")) {
                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                            >
                              <span className="keyword">import</span>{" "}
                              {line.split("import ")[1]}
                            </pre>
                          );
                        } else if (line.includes("contract")) {
                          // Handle the contract line
                          const beforeContract = line.substring(
                            0,
                            line.indexOf("contract")
                          );
                          const afterContract = line.substring(
                            line.indexOf("contract") + "contract".length
                          );
                          const classNamePart = afterContract
                            .split("is")[0]
                            .trim();
                          const inheritance = afterContract.includes("is")
                            ? afterContract.split("is")[1]
                            : "";

                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                            >
                              {beforeContract}
                              <span className="keyword">contract</span>{" "}
                              <span className="class">{classNamePart}</span>
                              {inheritance && (
                                <>
                                  <span className="keyword"> is</span>{" "}
                                  <span className="object">{inheritance}</span>
                                </>
                              )}
                            </pre>
                          );
                        } else if (line.includes("constructor")) {
                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                            >
                              <span className="keyword">constructor</span>{" "}
                              {line.split("constructor")[1]}
                            </pre>
                          );
                        } else if (line.includes("function")) {
                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                            >
                              <span className="keyword">function</span>{" "}
                              {line.split("function")[1]}
                            </pre>
                          );
                        } else if (line.includes("pragma")) {
                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                            >
                              <span className="keyword">pragma</span>{" "}
                              {line.split("pragma")[1]}
                            </pre>
                          );
                        } else if (
                          line.includes("external") ||
                          line.includes("internal") ||
                          line.includes("public") ||
                          line.includes("private") ||
                          line.includes("onlyOwner")
                        ) {
                          // Highlight visibility modifiers and access controls
                          const modifiers = [
                            "external",
                            "internal",
                            "public",
                            "private",
                            "onlyOwner",
                          ];
                          let result = line;

                          modifiers.forEach((modifier) => {
                            if (line.includes(modifier)) {
                              result = result.replace(
                                new RegExp(`\\b${modifier}\\b`, "g"),
                                `<span class="decorator">${modifier}</span>`
                              );
                            }
                          });

                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                              dangerouslySetInnerHTML={{ __html: result }}
                            />
                          );
                        } else if (line.includes("_mint")) {
                          // Highlight internal function calls
                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                            >
                              <span className="method">_mint</span>
                              {line.split("_mint")[1]}
                            </pre>
                          );
                        } else if (line.includes("transferOwnership")) {
                          // Highlight method calls
                          return (
                            <pre
                              key={i}
                              className="code-line"
                              style={{ animationDelay: `${i * 0.03}s` }}
                            >
                              <span className="method">transferOwnership</span>
                              {line.split("transferOwnership")[1]}
                            </pre>
                          );
                        }

                        return (
                          <pre
                            key={i}
                            className="code-line"
                            style={{ animationDelay: `${i * 0.03}s` }}
                          >
                            {line}
                          </pre>
                        );
                      })}
                  </div>
                )}
              </div>

              {/* Particle effects */}
              <div className="particles">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="particle"
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      left: particle.left,
                      bottom: "0",
                      animationDelay: particle.delay,
                      animationDuration: particle.duration,
                      animation: "float 5s ease-out forwards",
                    }}
                  />
                ))}

                {/* Ethereum and Web3 icons */}
                {ethereumIcon}
                {web3Icon}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Macbook Base */}
      <div className="macbook-base">
        <div className="macbook-keyboard">
          <div className="macbook-trackpad"></div>
        </div>
      </div>
    </div>
  );
};

export default MacbookScroll;
