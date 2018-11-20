const { db } = require("./db/index");

let app = require("./server");
var port = process.env.PORT || 4600;

db.sync()
  .then(() => {
    console.log("Database is synced now");
    app.listen(port, () => {
      console.log(`Server started http://localhost:${port}`);
    });
  })
  .catch(console.error);
