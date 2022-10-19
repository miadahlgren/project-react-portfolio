/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React from 'react';
import Indent from 'icons/indent.png'

const Intro = () => {
  return (
    <p lang="en"><img src={Indent} alt="start symbol" className="indent" />Hello! Welcome to my portfolio.
            My name is Mia Dahlgren and I am currently a student at <a href="https://www.technigo.io/" alt="link to technigo website">Technigo Web Development Bootcamp</a>
            (Class of fall 2022). Take a look further down to see what I have accomplished during the last weeks.
            Please dont hesitate to reach out if you are curious to know more!
    </p>
  );
}
export default Intro