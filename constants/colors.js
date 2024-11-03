export const colors = {
  shufu_dark_text: "#1a1a1a",
  shufu_light_text: "#f6eef3",
  shufu_light_pink: "#fbd4e1",
  shufu_grey: "#f6eef3",
  shufu_blue: "#68b2d7",
  shufu_dark_pink: "#d9aac9",
  shufu_brown: "#7a6562",
  primary: "#4A6D41", // Forest Green
  primaryLight: "hsl(105, 30%, 50%)", // Slightly lighter Forest Green
  primaryLightest: "hsl(105, 15%, 25%)", // Slightly lighter Forest Green
  secondary: "#B5A566", // Khaki
  secondaryDark: "hsl(50, 50%, 40%)", // Slightly darker Khaki
  accent: "#D8C3A5", // Beige
  accentLight: "hsl(40, 70%, 80%)", // Lighter Beige
  background: "#F2E7D2", // Cream
  backgroundDark: "hsl(45, 90%, 85%)", // Slightly darker Cream
  text: "#362E21", // Dark Brown
  textLight: "hsl(30, 40%, 50%)", // Slightly lighter Dark Brown
  heading: "#9D806D", // Light Brown
  headingDark: "hsl(35, 70%, 60%)", // Slightly darker Light Brown
  highlight: "#FFD700", // Gold
  highlightDark: "hsl(50, 100%, 70%)", // Slightly darker Gold
  error100: "#fcdcbf",
  error500: "#f37c13",
  red: "#FF0000",
  orange: "#FFA500",
  yellow: "#FFFF00",
  green: "#00FF00",
  blue: "#0000FF",
  indigo: "#4B0082",
  violet: "#EE82EE",
  black: "#000000",
  white: "#FFFFFF",
  offWhite: "#FAF3E0",
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
  lateDawn: "#F3A791", // Peach
  earlyDawn: "#FFCBA4", // Light Coral
  sunrise: "#FFDAB9",
  sunrise_late: "#FFEBD6",
  earlyMorning: "#87CEEB",
  earlyMorning_late: "#44B9FF",
  lateMorning: "#007FFF",
  lateMorning_late: "#003F7F",
  noon: "#00008B",
  noon_late: "#000048",
  earlyAfternoon: "#E0FFFF",
  earlyAfternoon_late: "#80DFFF",
  lateAfternoon: "#FFD700",
  lateAfternoon_late: "#BFA500",
  sunset: "#FFA500",
  sunset_late: "#9E5400",
  earlyEvening: "#800080",
  earlyEvening_late: "#400040",
  nightfall: "#000080",
  nightfall_late: "#000040",
  lateNight: "#191970",
  lateNight_late: "#0D0C55",
  midnight: "#000000",
  midnight_late: "#000000"

};

export const themes = {
  LIGHT: {
    name: "light",
    primary: colors.shufu_light_pink,
    secondary: colors.shufu_blue,
    accent: colors.shufu_dark_pink,
    background: colors.shufu_grey,
    text: colors.shufu_dark_text,
    inverse_text: colors.shufu_light_text,
    button: colors.shufu_blue,
    header: colors.shufu_light_pink,
    icon: "#f6eef3",
    bottom_nav_background: colors.white,
    bottom_nav_icon: colors.tomato,
    bottom_nav_icon_inactive: colors.grey
  },
  DARK: {
    name: "dark",
    primary: colors.shufu_dark_pink, // This could be a highlight color
    secondary: colors.shufu_brown, // A less prominent but complementary highlight
    accent: colors.shufu_blue, // Can remain the same if it contrasts well on dark
    background: colors.shufu_dark_text, // A dark color, already defined as almost black
    text: colors.shufu_light_text,
    inverse_text: colors.shufu_dark_text, // Light pinkish color for text which is the grey from your light theme
    button: colors.shufu_light_pink, // Buttons could stand out with a lighter color
    header: colors.shufu_brown, // Headers could have a distinctive color
    icon: "#fbd4e1",
    bottom_nav_background: colors.black,
    bottom_nav_icon: colors.black,
    bottom_nav_icon_inactive: colors.grey
  },
};
