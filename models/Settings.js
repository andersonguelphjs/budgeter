export const SettingsSchema = [
    { name: "id", type: "INTEGER PRIMARY KEY AUTOINCREMENT" },
    { name: "language", type: "TEXT" },
    { name: "numberOfLogins", type: "INTEGER" },
    { name: "lastLogin", type: "TEXT" },
    { name: "creation", type: "TEXT" },
    { name: "sound", type: "BOOLEAN" },
    { name: "theme", type: "TEXT" },
    { name: "notifications", type: "BOOLEAN" },
    { name: "currency", type: "TEXT" },
    { name: "history_data", type: "TEXT" },  // JSON stringified array for simplicity
  ];
  
  export default class Settings {
      constructor(config) {
        this._id = config.id || null;
        this._language = config.language || "en"; // default to English
        this._numberOfLogins = config.numberOfLogins || 0;
        this._lastLogin = config.lastLogin || "";
        this._creation = config.creation || "";
        this._sound = config.sound !== undefined ? config.sound : true; // default to sound enabled
        this._theme = config.theme || "light"; // default to light theme
        this._notifications = config.notifications !== undefined ? config.notifications : true; // default to notifications enabled
        this._currency = config.currency || "USD"; // default to USD
        this._history_data = config.history_data || "[]";  // default to an empty array as a string
      }
  
      toJSON() {
        return JSON.stringify({
          id: this._id,
          language: this._language,
          numberOfLogins: this._numberOfLogins,
          lastLogin: this._lastLogin,
          creation: this._creation,
          sound: this._sound,
          theme: this._theme,
          notifications: this._notifications,
          currency: this._currency,
          history_data: this._history_data
        });
      }
  
      static fromJSON(jsonData) {
        const data = JSON.parse(jsonData);
        return new Settings({
          id: data.id,
          language: data.language,
          numberOfLogins: data.numberOfLogins,
          lastLogin: data.lastLogin,
          creation: data.creation,
          sound: data.sound,
          theme: data.theme,
          notifications: data.notifications,
          currency: data.currency,
          history_data: data.history_data
        });
      }
  }
  