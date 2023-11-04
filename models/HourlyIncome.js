export const HourlyIncomeSchema = [
  { name: "id", type: "INTEGER PRIMARY KEY AUTOINCREMENT" },
  { name: "type", type: "TEXT" }, 
  { name: "color", type: "TEXT" }, 
  { name: "description", type: "TEXT" }, 
  { name: "rate", type: "INTEGER" },
  { name: "amount", type: "INTEGER" },
  { name: "translation_key", type: "TEXT" },
];

export default class HourlyIncome {
    constructor(config) {
      this._id = config.id || null;
      this._type = config.type || "income"; // income or expense
      this._color = config.color || "";
      this._description = config.description || "";
      this._rate = config.rate || 0;
      this._amount = config.amount || "";
      this._translation_key = config.translation_key || "";
  
    }
  
    toJSON() {
      return JSON.stringify({
        id: this.id || "",
        type: this.type || "i",
        color: this.color || "",
        description: this.description || "",
        rate: this.rate,
        amount: this.amount,
        translation_key : this.translation_key

      });
    }
  
    static fromJSON(jsonData) {
      const data = JSON.parse(jsonData);
      return new HourlyIncome(data.id, data.type, data.color, data.description, date.rate, date.amount, data.translation_key);
    }
  }
  
  // Usage example
// import UserData from './UserData';

// // Usage example
// const user = new UserData('John Doe', 25, 'johndoe@example.com');
// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
//   // Convert UserData to JSON string
// const json = user.toJSON();
// console.log(json);

// // Convert JSON string back to UserData object
// const retrievedUser = UserData.fromJSON(json);
// console.log(retrievedUser.name);
// console.log(retrievedUser.age);
// console.log(retrievedUser.email);
  