class StringBuffer {
  constructor(str) {
    this.str = str || "";
  }

  append(suffix) {
    this.str += suffix;
  }

  toString() {
    return this.str;
  }

  insert(pos, s) {
    if (pos >= 0 && pos <= this.str.length) {
      this.str = this.str.slice(0, pos) + s + this.str.slice(pos);
    }
  }
}

const sqlite3 = require("sqlite3");

class MockDatabase {
  constructor() {
    this.db = null;
  }

  async initialize() {
    this.db = new sqlite3.Database(":memory:");

    this.db.serialize(() => {
      this.db.run("CREATE TABLE Users (id INTEGER PRIMARY KEY, name TEXT)");
      this.db.run(
        "INSERT INTO Users (name) VALUES ('Alice'), ('Bob'), ('Charlie')",
      );
    });
  }

  query(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      if (this.db !== null) {
        this.db.close((err) => {
          if (err) reject(err);
          else resolve();
        });
      }
    });
  }
}

class Character {
  static isLetter(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }

  static isDigit(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
  }
}

module.exports = {
  StringBuffer,
  MockDatabase,
  Character,
};
