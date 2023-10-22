export const CategorySchema = [
  { name: "id", type: "INTEGER PRIMARY KEY AUTOINCREMENT" },
  { name: "type", type: "TEXT" }, // income or expense
  { name: "color", type: "TEXT" }, // for the sake of simplicity, we store money as a float
  { name: "description", type: "TEXT" }, // additional details about the expense or income
  // ... you can expand this schema with more fields if necessary
];

export default class Category {
    constructor(config) {
      this._id = config.id || null;
      this._type = config.type || ""; // income or expense
      this._color = config.color || "";
      this._description = config.description || "";
    }
  
    toJSON() {
      return JSON.stringify({
        id: this.id || "",
        type: this.type || "",
        color: this.color || "",
        description: this.description || "",
      });
    }
  
    static fromJSON(jsonData) {
      const data = JSON.parse(jsonData);
      return new Category(data.id, data.type, data.color, data.description);
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
  