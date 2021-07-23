const request = require("supertest");
// const app = require("../serverTest");
// const mongoose = require("mongoose");
const assert = require('assert');

describe("teste validate", () => {
  it("first test", () => {
    assert(1 === 1);
  });
  // it("get base route", async () => {
  //   const res =  await request(app).get("/base").send({ productName: "teste" });
  //   expect(res.body[0]).toHaveProperty("productName");
  //   // .post("/").send({ name: "aurelio", senha: "senha" });
  // });
});
