class StringBuffer {
  constructor(str) {
    this.str = str || "";
    this.append = function (string) {
      this.str += string;
    };
    this.toString = function () {
      return this.str;
    };
    this.insert = function (pos, s) {
      if (pos >= 0 && pos <= this.str.length) {
        this.str = this.str.slice(0, pos) + s + this.str.slice(pos);
      }
    };
  }
}

module.exports = {
  StringBuffer,
};
