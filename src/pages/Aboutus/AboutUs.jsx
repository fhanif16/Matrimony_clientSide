import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./AboutUs.css";
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Chart Data
  const data = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Growth Over Time",
        data: [200, 500, 800, 1200, 1800],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200,
        },
      },
    },
  };

  return (
    <div className="about-us">
      <div className="section fade-in">
        <h1>Who We Are</h1>
        <p>
          Welcome to MatrimonyConnect, your trusted partner in finding lifelong
          happiness. With years of experience and a proven track record, we
          help you find your perfect match.
        </p>
      </div>

      <div className="section slide-in">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make matchmaking seamless, personalized, and
          enjoyable. We aim to foster meaningful connections and lifelong
          relationships while ensuring a safe and reliable platform.
        </p>
      </div>

      <div className="section grow-chart">
        <h2>Our Success Story</h2>
        <p>Here’s how we’ve grown over the years:</p>
        <div className="chart-container">
          <Bar data={data} options={options} height={300} />
        </div>
      </div>

      <button
        className="show-more-btn"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Show Less" : "Show More"}
      </button>

      {isVisible && (
        <div className="section fade-in">
          <h2>Why Choose Us?</h2>
          <p>
            We’ve successfully matched thousands of couples and are dedicated to
            creating a platform where love can blossom for everyone. Join us to
            experience the difference.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
