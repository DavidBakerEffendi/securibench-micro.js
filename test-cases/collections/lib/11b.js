class Collections11b {
  foo(o, resp) {
    const c = o;
    const str = c.toString();
    resp.send(str); // BAD
  }
}

module.exports = Collections11b;
