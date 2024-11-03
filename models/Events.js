export const EventSchema = [
    { name: "id", type: "INTEGER PRIMARY KEY AUTOINCREMENT" },
    { name: "date", type: "TEXT" },
    { name: "event_type_key", type: "TEXT" },
    { name: "timestamp", type: "INTEGER" },
    { name: "type", type: "TEXT" },
    { name: "amount", type: "REAL" },
    { name: "note", type: "TEXT" },
    { name: "hourly_income_id", type: "INTEGER" },
    { name: "interval_id", type: "INTEGER" },
    { name: "one_time_income_id", type: "INTEGER" },
    { name: "one_time_expense_id", type: "INTEGER" },
    { name: "startTime", type: "TEXT" }, 
    { name: "endTime", type: "TEXT" },  
  ];
  
  export default class Event {
    constructor(config) {
      this._id = config.id || null;
      this._date = config.date || "";
      this._timestamp = config.timestamp || 0;
      this._type = config.type || "";
      this._amount = config.amount || 0;
      this._note = config.note || "";
      this._hourly_income_id = config.hourly_income_id || null;
      this._interval_id = config.interval_id || null;
      this._one_time_income_id = config.one_time_income_id || null;
      this._one_time_expense_id = config.one_time_expense_id || null;
      this._event_type_key = config.event_type_key || "";
    }
  
    // Simple getters
    get id() {
      return this._id;
    }
  
    get date() {
      return this._date;
    }
  
    get timestamp() {
      return this._timestamp;
    }
  
    get type() {
      return this._type;
    }
  
    get amount() {
      return this._amount;
    }
  
    get note() {
      return this._note;
    }
  
    get hourly_income_id() {
      return this._hourly_income_id;
    }
    get one_time_income_id() {
      return this._one_time_income_id;
    }
    get one_time_expense_id(){
      return this._one_time_expense_id
    }
    get interval_id() {
      return this._interval_id;
    }
    get event_type_key() {
    return this._event_type_key;
  }
    // Convert instance to JSON for storage or transmission
    toJSON() {
      return JSON.stringify({
        id: this._id,
        date: this._date,
        timestamp: this._timestamp,
        type: this._type,
        amount: this._amount,
        note: this._note,
        hourly_income_id: this._hourly_income_id,
        interval_id: this._interval_id,
        one_time_income_id: this._one_time_income_id,
        one_time_expense_id: this._one_time_expense_id,
        event_type_key: this._event_type_key
      });
    }
  
    // Create an instance from JSON (e.g., from the database or a server response)
    static fromJSON(jsonData) {
      const data = JSON.parse(jsonData);
      return new Event({
        id: data.id,
        date: data.date,
        timestamp: data.timestamp,
        type: data.type,
        amount: data.amount,
        note: data.note, 
        hourly_income_id: data.hourly_income_id,
        one_time_income_id: data.one_time_income_id,
        one_time_expense_id : data.one_time_expense_id,
        interval_id: data.interval_id,
        event_type_key: data.event_type_key
      });
    }
  }
  