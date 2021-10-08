const moment = require("moment");

class DateFormat {
  index(data = [], format, ...key) {
    return data.map((row) => {
      let res = {};
      for (let a of key.values()) {
        res[a] = row[a] ? moment.utc(row[a]).format(format).toLowerCase() : "-";
      }
      return { ...row, ...res };
    });
  }
}

module.exports = new DateFormat();
