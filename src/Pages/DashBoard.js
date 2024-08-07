import React, { useEffect, useState } from 'react'
import bgimg from "../assets/images/backGround.jpeg";
import Smimg from "../assets/images/responsive_Bg_Img.jpeg";
import About from './About';
import Services from './Services';
import Summary from './Summary';
import TopScroller from './TopScroller';
import Mywork from './Mywork';
import Contact from './Contact';


const DashBoard = () => {
  const selfData = [
    "I'm a Frontend Developer",
    "I have Encompass Wide range of React js",
    "Provide In-Depth Information For UX",
    "I create Device Friendly website",
    "Providing Best User Interface ( UI )"
  ];
  
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLineIndex < selfData.length) {
        const line = selfData[currentLineIndex];
        if (currentLetterIndex < line.length) {
          setCurrentText(prevText => prevText + line[currentLetterIndex]);
          setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
          clearInterval(interval); // Stop the interval temporarily
  
          setTimeout(() => {
            setCurrentLetterIndex(0);
            setCurrentLineIndex(currentLineIndex + 1);
            setCurrentText('');
          }, 1000); // Wait for 3 seconds before displaying the next line
  
          // If all lines have been displayed, reset to the first line
          if (currentLineIndex === selfData.length - 1) {
            setCurrentLineIndex(0);
          }
        }
      }
    }, 100); // Adjust the interval as needed
  
    return () => clearInterval(interval);
  }, [currentLineIndex, currentLetterIndex]);
  

  return (
    <div id='cx-main'>
      <div className="dashboard_wrapper" id='dashBoardMe'>
        <img src={bgimg} alt="" className='BGImg' />
        <img src={Smimg} alt="" className='SMImg' />
        <div className="bdopacity"></div>
        <div className="contain">
          <p className="Welcome">Welcome</p>
          <p className="Details">{currentText}</p>
          <p className="location">Based in Nanded , Maharashtra</p>
        </div>
      </div>
      <About />
      <Services />
      <Summary />
      <Mywork />
      <TopScroller />
      <Contact />
    </div>
  )
}

export default DashBoard