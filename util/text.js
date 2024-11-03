// Function to convert HSL to HEX
// ... [Include the hslToHex function here]

// This function converts an RGB color value to its luminance.
// It's used inside the 'isLightColor' function.
function hslToHex(h, s, l) {
    // Must range between 0 to 1, so we need to convert these percentages
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;
    
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, we convert them to the [0, 255] range and to HEX.
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Ensuring 2 digits by concatenating a '0' ahead of single-digit numbers
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
  
    return "#" + r + g + b;
  }
  
  // Example usage: 
  // The input should be without the 'hsl' string, just the numeric values.
  // console.log(hslToHex(281, 100, 50));  // Output: #8000ff
  
function getLuminanceFromRGB(color) {
    const luminance = (0.299 * color[0] + 0.587 * color[1] + 0.114 * color[2]) / 255;
    return luminance;
  }
  
  // This function determines if a color (in HEX) is "light" or "dark" by calculating the luminance.
  function isLightColor(hexColor) {
    //console.log("isLightColor ", hexColor)
    
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let fullHexColor = hexColor.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    // Convert HEX color to RGB
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHexColor);
    const rgbColor = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;

    if (!rgbColor) {
        throw new Error('Invalid color format. Expected HEX.');
    }

    // Calculate the luminance of the color
    const luminance = (0.299 * rgbColor.r + 0.587 * rgbColor.g + 0.114 * rgbColor.b) / 255;

    return luminance > 0.5; // Return if it's a light color
}

  
  // Function to get appropriate text color based on the background
  function getTextColorBasedOnBg(backgroundColor) {
    // Check if the color is in HSL format and convert it to HEX
    if (backgroundColor.startsWith('hsl')) {
      const colorInHsl = backgroundColor.match(/\d+/g); // extract numbers
      backgroundColor = hslToHex(...colorInHsl.map(num => +num));
    }
  
    // Decide text color based on the background color's lightness
    return isLightColor(backgroundColor) ? 'black' : 'white';
  }
  
  // Now, use the function to set the style
  export const dynamicStyle = (backgroundColor) => ({
    backgroundColor: backgroundColor, // this can be HEX or HSL
    color: getTextColorBasedOnBg(backgroundColor),
    // other styles like fontSize, fontFamily, etc.
  });
  
  // Usage in your component's render method, assuming 'bgColor' is your dynamic background color (HEX or HSL).
  // <Text style={dynamicStyle(bgColor)}>This is a text</Text>
  