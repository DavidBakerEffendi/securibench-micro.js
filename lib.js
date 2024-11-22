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

  execute(sql) {
    return this.query(sql);
  }

  executeUpdate(sql, params) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  executeQuery(sql) {
    return this.execute(sql);
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

class Collection {
  iterator() {
    throw new Error("Method 'iterator' must be implemented.");
  }

  addAll() {
    throw new Error("Method 'addAll' must be implemented.");
  }

  retainAll() {
    throw new Error("Method 'retainAll' must be implemented.");
  }

  toArray() {
    throw new Error("Method 'toArray' must be implemented.");
  }
}

class LinkedList extends Collection {
  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  get(index) {
    return this.toArray()[index];
  }

  addFirst(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  addLast(value) {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  add(value) {
    this.addLast(value);
  }

  getLast() {
    if (!this.tail) {
      return null;
    } else {
      return this.tail.value;
    }
  }

  addAll(collection) {
    const iter = collection.iterator();
    while (iter.hasNext()) {
      const o = iter.next();
      this.addLast(o);
    }
  }

  retainAll(collection) {
    const set = new Set();
    if (collection.iterator) {
      const iter = collection.iterator();
      while (iter.hasNext()) {
        set.add(iter.next());
      }
    } else {
      for (const item of collection) {
        set.add(item);
      }
    }

    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (!set.has(current.value)) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = prev;
        }
      } else {
        prev = current;
      }
      current = current.next;
    }
  }

  iterator() {
    let current = this.head;

    return {
      hasNext() {
        return current !== null;
      },
      next() {
        if (!this.hasNext()) {
          return null;
        } else {
          const value = current.value;
          current = current.next;
          return value;
        }
      },
    };
  }

  toArray() {
    const elements = [];
    let current = this.head;

    while (current !== null) {
      elements.push(current.value);
      current = current.next;
    }

    return elements;
  }

  toString() {
    const elements = this.toArray();
    return `[${elements.join(", ")}]`;
  }
}

class ArrayList extends Collection {
  constructor() {
    super();
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  get(i) {
    return this.items[i];
  }

  addAll(collection) {
    const iter = collection.iterator();
    while (iter.hasNext()) {
      const o = iter.next();
      this.add(o);
    }
  }

  retainAll(collection) {
    const set = new Set();
    if (collection.iterator) {
      const iter = collection.iterator();
      while (iter.hasNext()) {
        set.add(iter.next());
      }
    } else {
      for (const item of collection) {
        set.add(item);
      }
    }

    this.items = this.items.filter((item) => set.has(item));
  }

  iterator() {
    let index = 0;
    const items = this.items;

    return {
      hasNext() {
        return index < items.length;
      },
      next() {
        if (!this.hasNext()) {
          return null;
        } else {
          return items[index++];
        }
      },
    };
  }

  toArray() {
    return this.items;
  }

  toString() {
    return `[${this.items.join(", ")}]`;
  }
}

class Arrays {
  static asList(array) {
    const list = new LinkedList();
    for (let x of array) {
      list.addLast(x);
    }
    return list;
  }
}

module.exports = {
  StringBuffer,
  MockDatabase,
  Character,
  LinkedList,
  ArrayList,
  Arrays,
};
