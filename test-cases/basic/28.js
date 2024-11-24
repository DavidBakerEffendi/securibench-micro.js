const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const b = new Array(3);
  let writer = res;

  if (b[0]) {
    if (b[0]) {
      if (b[0]) {
        if (b[0]) {
          if (b[0]) {
            if (b[0]) {
              if (b[0]) {
                if (b[0]) {
                  if (b[0]) {
                  }
                } else {
                }
              } else {
              }
              if (b[0]) {
              }
            } else {
            }
          } else {
            if (b[0]) {
              if (b[0]) {
                if (b[0]) {
                }
              } else {
              }
            } else {
            }
          }
        } else {
          if (b[0]) {
            if (b[0]) {
              if (b[0]) {
              }
              writer.write(name); // BAD
            } else {
            }
          } else {
          }
        }
      } else {
        if (b[0]) {
          if (b[0]) {
            if (b[0]) {
            }
          } else {
          }
        } else {
        }
      }
    } else {
      if (b[0]) {
        if (b[0]) {
          if (b[0]) {
            if (b[0]) {
              if (b[0]) {
              }
            } else {
            }
          } else {
            if (b[0]) {
              if (b[0]) {
                if (b[0]) {
                }
              } else {
              }
            } else {
            }
          }
        } else {
          if (b[0]) {
            if (b[0]) {
              if (b[0]) {
              }
            } else {
            }
          } else {
          }
        }
      } else {
        if (b[0]) {
          if (b[0]) {
            if (b[0]) {
            }
          } else {
          }
        } else {
          if (b[0]) {
            if (b[0]) {
              if (b[0]) {
              }
            } else {
            }
          } else {
          }
        }
      }
    }
  } else {
    if (b[0]) {
      if (b[0]) {
        if (b[0]) {
          writer.write(name); // BAD
        }
      } else {
      }
    } else {
    }
  }

  writer.end();
};

const getDescription = () => {
  return "complicated control flow";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
