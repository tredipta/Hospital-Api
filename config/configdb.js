const mongoose = require("mongoose");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Hospital-Api");
  // 'mongodb+srv://hospital:z2swpgr4Ken6sdGz@cluster1.c3wrh.mongodb.net/hospitalApi?retryWrites=true&w=majority'
  console.log("Connection SuccessFull !!");
}
main().catch((error) => {
  console.log("Connection Not Success Full !!");
});
