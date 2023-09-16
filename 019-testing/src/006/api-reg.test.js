// npm install express body-parser jest supertest --save-dev

const request = require("supertest");
const app = require("./api-reg.js");

describe("POST /register", () => {
  it("registers a new user", async () => {
    const response = await request(app).post("/register").send({
      username: "JohnDoe",
      email: "john.doe@example.com",
      password: "password123",
    });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
  });

  it("returns 400 if any field is missing", async () => {
    const response = await request(app).post("/register").send({
      username: "JohnDoe",
      password: "password123",
    });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("All fields are required");
  });

  it("returns 400 if email already exists", async () => {
    await request(app).post("/register").send({
      username: "JohnDoe",
      email: "john.doe@example.com",
      password: "password123",
    });
    const response = await request(app).post("/register").send({
      username: "JaneDoe",
      email: "john.doe@example.com",
      password: "password123",
    });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email already exists");
  });
});
