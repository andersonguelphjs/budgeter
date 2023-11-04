export const getProperty = (config) => {
  const { items, id, property, default_return } = config;
  if (items && items.length && id && property)
    return items.find((item) => item.id === id)[property];
  return default_return || "";
};

export const getTypeArrayKey = (event_type_key) => {
  if (event_type_key === "hourly_income_id") {
    return "hourlyIncomes";
  }
  if (event_type_key === "one_time_income_id") {
    return "oneTimeIncomes";
  }
  if (event_type_key === "one_time_expense_id") {
    return "oneTimeExpenses";
  }
};

export const getFilteredMarkedDates = (markedDates = {}, selectedType) => {
  const filteredMarkedDates = {};
  console.log("getFilteredMarkedDates ", Object.keys(markedDates).length)

  Object.keys(markedDates).forEach((date) => {
    const eventsForDay = markedDates[date].dots || [];
    const filteredEvents = eventsForDay.filter(
      (dot) => dot.type === selectedType
    ); // filter by type

    if (filteredEvents.length > 0 || markedDates[date].selected) {
      filteredMarkedDates[date] = {
        ...markedDates[date], // preserve other properties
        dots: filteredEvents,
      };
    }
  });
  console.log("filteredMarkedDates", filteredMarkedDates);
  return filteredMarkedDates;
};
