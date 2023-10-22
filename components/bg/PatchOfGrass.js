import React from 'react';
import { Svg, Path } from 'react-native-svg';

const PatchOfGrass = ({ width = 64, height = 64, color }) => {
  // Generate a random shade of green for the color
  const randomGreen = Math.floor(Math.random() * 56) + 160;
  const randomColor = `rgb(0, ${randomGreen}, 0)`;

  const numBlades = 10; // Number of grass blades in the tuft

  const blades = [];

  for (let i = 0; i < numBlades; i++) {
    // Generate random width and height between 20 and 50
    const randomWidth = Math.floor(Math.random() * 31) + 20;
    const randomHeight = Math.floor(Math.random() * 31) + 20;

    // Randomly shift the grass blade horizontally and vertically
    const randomShiftX = Math.floor(Math.random() * 21) - 10;
    const randomShiftY = Math.floor(Math.random() * 21) - 10;

    blades.push(
      <Path
        key={i}
        d={`M50 90L${50 + randomShiftX} ${90 - randomShiftY}L${50 - randomShiftX} ${90 - randomShiftY}Z`}
        fill={color || randomColor}
        opacity="0.8"
      />
    );
  }

  return (
    <Svg width={width} height={height} viewBox="0 0 100 100">
      {blades}
      <Path
        d="M77 75C74.2386 77.7614 71.2386 79 68 79C64.7614 79 61.7614 77.7614 59 75C56.2386 77.7614 53.2386 79 50 79C46.7614 79 43.7614 77.7614 41 75C38.2386 77.7614 35.2386 79 32 79C28.7614 79 25.7614 77.7614 23 75H77Z"
        fill="#5DA75F"
      />
    </Svg>
  );
};

export default PatchOfGrass;
