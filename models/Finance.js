import Category from "./Category"; // assuming DayData is relevant to your finance app
export const FinanceSchema = [
  { name: "id", type: "INTEGER PRIMARY KEY AUTOINCREMENT" },
  { name: "date", type: "TEXT" },
  { name: "type", type: "TEXT" }, // income or expense
  { name: "category", type: "TEXT" }, // e.g., salary, bonus, food, transport, etc.
  { name: "amount", type: "REAL" }, // for the sake of simplicity, we store money as a float
  { name: "currency", type: "TEXT" },
  { name: "description", type: "TEXT" }, // additional details about the expense or income
  // ... you can expand this schema with more fields if necessary
];

export default class FinanceData {
  constructor(config = {}) {
    this._id = config.id || null;
    this._date = config.date || "";
    this._type = config.type || ""; // income or expense
    this._category = config.category || "";
    this._amount = config.amount || 0.0;
    this._currency = config.currency || "";
    this._description = config.description || "";
    this._history_data = config.history_data || [new Category()];
  }

  // ... getter and setter methods for each property

  toJSON() {
    return JSON.stringify({
      id: this.id,
      date: this.date,
      type: this.type,
      category: this.category,
      amount: this.amount,
      currency: this.currency,
      description: this.description,
      history_data: this.history_data,
    });
  }

  static fromJSON(jsonData) {
    const data = JSON.parse(jsonData);
    return new FinanceData({
      id: data.id,
      date: data.date,
      type: data.type,
      category: data.category,
      amount: data.amount,
      currency: data.currency,
      description: data.description,
      history_data: data.history_data,
    });
  }
}

// Usage example
// import FinanceData from './FinanceData';

// const financeEntry = new FinanceData({...});
// console.log(financeEntry.category);
// console.log(financeEntry.amount);
// ...
//   // Convert FinanceData to JSON string
//   const json = financeEntry.toJSON();
//   console.log(json);

//   // Convert JSON string back to FinanceData object
//   const retrievedEntry = FinanceData.fromJSON(json);
//   console.log(retrievedEntry.category);
//   console.log(retrievedEntry.amount);
// ...
