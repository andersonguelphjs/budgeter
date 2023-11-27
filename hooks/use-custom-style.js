import { useContext } from 'react';
import { AppContext } from '../store/app-context';

export const useCustomStyles = () => {
  const ctx = useContext(AppContext);
  const { dispatch, playSoundFile, state, translation, tables } = ctx;
  const { intervals, events, categories, themes, settings } = ctx.state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;
  const currentTheme = themes[theme] || themes["LIGHT"];

  const styles = {
     RNPickerSelectStyle:{
      inputIOS: {
        backgroundColor: currentTheme.background || "white",
        color: currentTheme.text || "black",
        margin: 10,
        padding :5,
        textAlign: 'center',
      },
      inputAndroid: {
        backgroundColor: currentTheme.background || "white",
        color: currentTheme.text || "black",
        margin: 10,
        padding :5,
        textAlign: 'center',
      },
    },
    bTable:{
    tableColors : {
      headerBackground: currentTheme.accent || '#333',
      headerColor: currentTheme.text || '#FFF',
      rowBackground: currentTheme.background || '#FFF',
      rowColor: currentTheme.text || '#000',
      borderColor: currentTheme.inverse_text || '#CCC',
    },
    tableContainer: {
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    header: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: 'black',
    },
    headerItem: {
      width: 100, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
    },
    cell: {
      padding: 8,
      // Adjust the width of the cells depending on the number of columns and the desired layout
      width: 100, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    cellText: {
      fontSize: 14,
    },
  },
    button: {
      backgroundColor: currentTheme.buttonBackground || "#007bff",
      color: currentTheme.buttonText || "white",
      padding: 10,
      borderRadius: 5,
    },
    text: {
      color: currentTheme.text || "black",
      fontSize: 16,
    },
    card: {
      backgroundColor: currentTheme.cardBackground || "white",
      padding: 15,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    // Add more component styles as needed
  };

  return styles;
};
