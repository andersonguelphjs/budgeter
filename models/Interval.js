export const IntervalSchema = [
    { name: "id", type: "INTEGER PRIMARY KEY AUTOINCREMENT" },
    { name: "startTime", type: "TEXT" }, // storing time as text in 'HH:mm' format
    { name: "endTime", type: "TEXT" },   // same as above
    // ... you can expand this schema with more fields if necessary
  ];

  export default class Interval {
    constructor(config) {
      this._id = config.id || null;
      this._startTime = config.startTime || "";
      this._endTime = config.endTime || "";
    }
  
    // Simple getters
    get id() {
      return this._id;
    }
  
    get startTime() {
      return this._startTime;
    }
  
    get endTime() {
      return this._endTime;
    }
  
    // Convert instance to JSON
    toJSON() {
      return JSON.stringify({
        id: this._id, // we keep id null if it doesn't exist
        startTime: this._startTime,
        endTime: this._endTime,
      });
    }
  
    // Create an instance from JSON
    static fromJSON(jsonData) {
      const data = JSON.parse(jsonData);
      return new Interval({
        id: data.id,
        startTime: data.startTime,
        endTime: data.endTime,
      });
    }
  }
  