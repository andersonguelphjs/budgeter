// Function to get a slightly varied color based on the input color
export const getVariedColor = (color, variation = 20) => {
  // Convert the hex color to RGB components
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  // Calculate random variations for each RGB component
  const randomR = Math.floor(Math.random() * (2 * variation + 1)) - variation;
  const randomG = Math.floor(Math.random() * (2 * variation + 1)) - variation;
  const randomB = Math.floor(Math.random() * (2 * variation + 1)) - variation;

  // Apply the variations to the RGB components
  const newR = clamp(r + randomR, 0, 255);
  const newG = clamp(g + randomG, 0, 255);
  const newB = clamp(b + randomB, 0, 255);

  // Convert the new RGB components back to a hex color
  return `#${componentToHex(newR)}${componentToHex(newG)}${componentToHex(
    newB
  )}`;
};

// Helper function to convert an RGB component to a two-digit hex value
const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

// Helper function to clamp a value between a minimum and maximum
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
export const randomRoundedBetween = (x, y, z)=> {
  // Generate a random number between x and y
  let randomNumber = x + Math.random() * (y - x);

  // Round the number to the nearest z and ensure it's an integer
  return Math.round(randomNumber / z) * z;
}

// Example Usage
console.log(randomRoundedBetween(10, 50, 5));  // This might return 15, 20, 25,... or 50

export const getRandomNumber = (min = 0, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//produce an array of x numbers between 0 and y without duplicates
export const uniqueRandomNumbers = (num, max) => {
  const set = new Set();

  while (set.size < num) {
    set.add(Math.floor(Math.random() * max));
  }

  return [...set];
};

export const getRandomColorVariation = (colorName = null, variation = 20) => {
  const colors = {
    red: "#FF0000",
    orange: "#FFA500",
    yellow: "#FFFF00",
    green: "#00FF00",
    blue: "#0000FF",
    indigo: "#4B0082",
    violet: "#EE82EE",
    black: "#000000",
    white: "#FFFFFF",
    grey: "#808080",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    gold: "#FFD700",
    silver: "#C0C0C0",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    lavender: "#E6E6FA",
    turquoise: "#40E0D0",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    coral: "#FF7F50",
    plum: "#DDA0DD",
    teal: "#008080",
    peach: "#FFE5B4",
    salmon: "#FA8072",
    mint: "#98FB98",
    periwinkle: "#CCCCFF",
    slate: "#708090",
    tomato: "#FF6347",
    khaki: "#F0E68C",
    orchid: "#DA70D6",
    steel: "#4682B4",
    ivory: "#FFFFF0",
    chocolate: "#D2691E",
    turquoise: "#40E0D0",
    thistle: "#D8BFD8",
    sienna: "#A0522D",
    skyblue: "#87CEEB",
    lavenderblush: "#FFF0F5",
    palegreen: "#98FB98",
    rosybrown: "#BC8F8F",
    lawn: "#7CFC00", // Lawn green
    bark: "#8B4513", // Saddle brown
    ocean: "#1E90FF", // Dodger blue
    stream: "#1E90FF", // Also Dodger blue, but you can choose a different shade if needed
    sun: "#FFD700", // Gold
    cloud: "#F5F5F5", // White smoke
    foliage: "#228B22", // Forest green
    sunrise: "#FFDAB9", // Light Pink
    earlyMorning: "#87CEEB", // Sky Blue
    lateMorning: "#007FFF", // Azure
    noon: "#00008B", // Deep Blue
    earlyAfternoon: "#E0FFFF", // Light Cyan
    lateAfternoon: "#FFD700", // Golden Yellow
    sunset: "#FFA500", // Orange
    earlyEvening: "#800080", // Deep Purple
    nightfall: "#000080", // Navy Blue
    lateNight: "#191970", // Midnight Blue
    midnight: "#000000", // Black
    earlyMorning2: "#00008B", // Dark Blue (2:00 AM)
  };

  const getRandomColorName = () => {
    const colorKeys = Object.keys(colors);
    return colorKeys[Math.floor(Math.random() * colorKeys.length)];
  };

  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const getAdjustedComponent = (colorValue) => {
    const randomVariation = getRandomNumber(-variation, variation);
    let adjustedValue = colorValue + randomVariation;

    // Clamp the value to stay within valid RGB range (0 to 255)
    adjustedValue = Math.max(0, Math.min(255, adjustedValue));

    return adjustedValue;
  };

  const hexToRGB = (hex) => {
    const parsedHex = hex.replace("#", "");
    const r = parseInt(parsedHex.substring(0, 2), 16);
    const g = parseInt(parsedHex.substring(2, 4), 16);
    const b = parseInt(parsedHex.substring(4, 6), 16);
    return { r, g, b };
  };

  const rgbToHex = ({ r, g, b }) => {
    console.log("rgb", r, g, b);
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  if (!colorName) {
    colorName = getRandomColorName();
  }

  const baseColor = colors[colorName.toLowerCase()] || "#000000"; // Default to black if colorName is not recognized

  const baseColorRGB = hexToRGB(baseColor);
  const adjustedColorRGB = {
    r: Math.floor(getAdjustedComponent(baseColorRGB.r)),
    g: Math.floor(getAdjustedComponent(baseColorRGB.g)),
    b: Math.floor(getAdjustedComponent(baseColorRGB.b)),
  };

  return rgbToHex(adjustedColorRGB);
  // Usage example
  //const randomColor = getRandomColorVariation(); // If colorName is not provided, it will generate a random color variation
  //console.log(randomColor); // Example output: "#FF9800" (Example result will vary as it's random)
};

export function getTint(hexColor, variation = 70) {
  const hexToRGB = (hex) => {
    const parsedHex = hex.replace("#", "");
    const r = parseInt(parsedHex.substring(0, 2), 16);
    const g = parseInt(parsedHex.substring(2, 4), 16);
    const b = parseInt(parsedHex.substring(4, 6), 16);
    return { r, g, b };
  };

  const rgbToHex = ({ r, g, b }) => {
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const baseColorRGB = hexToRGB(hexColor);

  const getAdjustedComponent = (colorValue) => {
    const randomVariation = getRandomNumber(0, variation);
    let adjustedValue = colorValue + randomVariation;

    // Clamp the value to stay within valid RGB range (0 to 255)
    adjustedValue = Math.min(255, adjustedValue);

    return Math.round(adjustedValue);
  };

  const tintedColorRGB = {
    r: getAdjustedComponent(baseColorRGB.r),
    g: getAdjustedComponent(baseColorRGB.g),
    b: getAdjustedComponent(baseColorRGB.b),
  };

  return rgbToHex(tintedColorRGB);
}

export function getShade(hexColor, variation = 20) {
  const hexToRGB = (hex) => {
    const parsedHex = hex.replace("#", "");
    const r = parseInt(parsedHex.substring(0, 2), 16);
    const g = parseInt(parsedHex.substring(2, 4), 16);
    const b = parseInt(parsedHex.substring(4, 6), 16);
    return { r, g, b };
  };

  const rgbToHex = ({ r, g, b }) => {
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const baseColorRGB = hexToRGB(hexColor);

  const getAdjustedComponent = (colorValue) => {
    const randomVariation = getRandomNumber(0, variation);
    let adjustedValue = colorValue - randomVariation;

    // Clamp the value to stay within valid RGB range (0 to 255)
    adjustedValue = Math.max(0, adjustedValue);

    return Math.round(adjustedValue);
  };

  const shadedColorRGB = {
    r: getAdjustedComponent(baseColorRGB.r),
    g: getAdjustedComponent(baseColorRGB.g),
    b: getAdjustedComponent(baseColorRGB.b),
  };

  return rgbToHex(shadedColorRGB);
}

// Usage example
const baseColor = "#FFA500"; // Orange color
const tintedColor = getTint(baseColor); // Get a tinted color with default variation
const shadedColor = getShade(baseColor, 10); // Get a shaded color with custom variation
console.log(tintedColor); // Example output: "#FFD21F" (Example result will vary as it's random)
console.log(shadedColor); // Example output: "#FF6F00" (Example result will vary as it's random)

// Usage example
