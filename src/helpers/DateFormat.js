const moment = require("moment");

class DateFormat {
  index(data = [], format, ...key) {
    let res = {};
    if (Array.isArray(data))
      return data.map((row) => {
        for (let a of key.values()) {
          res[a] = row[a]
            ? moment.utc(row[a]).format(format).toLowerCase()
            : "-";
        }
        return { ...row, ...res };
      });

    for (let a of key.values()) {
      res[a] = data[a] ? moment.utc(data[a]).format(format).toLowerCase() : "-";
    }
    return { ...data, ...res };
  }
}

module.exports = new DateFormat();
