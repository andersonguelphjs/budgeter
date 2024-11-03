import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";

const MyPieChart = ({ aggregatedArray =[], totalSum=0 , translation}) => {
  const chartData = aggregatedArray.map((item) => {
    const value = totalSum === 0 ? 1 : item.total; // if total is 0, each slice is of equal size

    return {
      name: item.category_description,
      total: value,
      color: item.category_color,
      legendFontColor: "#7F7F7F", // Adjust legend font color as needed
      legendFontSize: 15,
    };
  });

  // Define chart configuration
  const chartConfig = {
    backgroundGradientFrom: "#ffffff", // Color for the background gradient start
    backgroundGradientTo: "#ffffff", // Color for the background gradient end (you can have the same color for a solid color)
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color for the text and icons in the chart (black used here)
    strokeWidth: 2, // The stroke width for a line (if applicable)
    barPercentage: 0.5, // Defines how much of the width of a bar will be shown, 1 means no gaps, and 0.5 means 50% of the bar is a gap between bars
    useShadowColorFromDataset: false, // Indicates if the shadow color should be taken from the dataset (useful for multiple datasets scenarios)
    decimalPlaces: 2, // The number of decimal places for numbers in the chart, 0 means integers only

    // You can add more specific styling depending on what's supported for each chart type
    propsForDots: {
      r: "4", // radius of the dot (if you have dots on lines, for example)
      strokeWidth: "2",
      stroke: "#ffa726",
    },

    // Customization for the labels, legend, and more
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Similar to above, for labels
    style: {
      borderRadius: 16, // For round-edged bars, if applicable
    },
  };

  // Screen dimensions for responsive layout
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>{translation["Total"]} {totalSum}</Text>

      <PieChart
        data={chartData}
        width={screenWidth}
        height={225}
        chartConfig={chartConfig}
        accessor={"total"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 0]} // Adjust the positioning as needed
        absolute // Display absolute values in the chart
      />
    </View>
  );
};
const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    justifyContent: "center",
    // You might want to add some padding or margin here
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10, // Or any other value for the space between the title and chart
    textAlign: "center",
    // Add any other styling you want for the title
  },
});
export default MyPieChart;
