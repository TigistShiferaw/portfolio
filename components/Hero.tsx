import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x" style={{ display: 'flex', alignItems: 'center', marginLeft: 100 }}>
        <h1 className="hero__title ml-4" style={{ fontSize: "30px", color: "black" }}>
          <strong>
            <span style={{ color: "#42446E" }}> Hi &#128075;</span>,
            <br />
            <span style={{ color: "#42446E" }}>My name is</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-pink-400 inline-block bg-clip-text text-transparent">
              Tigist Shiferaw Yitayew
            </span>
            <br />
            <span style={{ color: "#42446E" }}>I am a full stack developer</span>
          </strong>
        </h1>

        <div style={{ width: "400px", height: "400px", borderRadius: "50%", overflow: "hidden", marginLeft: "200px", border: "5px solid #4294E6" }}>
          <img src="/tg.jpg" alt="Your Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
