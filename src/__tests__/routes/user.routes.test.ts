import server from "../../server";
import request from "supertest";

describe("GET /api/users", () => {
  test("shoud validate id is valid", async () => {
    const response = await request(server).get("/api/users/not-valid-id");

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body).not.toHaveProperty("user");
  });

  test("should receive A 404 with a message if user doesn't exist", async () => {
    const response = await request(server).get("/api/users/999999");

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
    expect(response.body).not.toHaveProperty("user");
  });

  test("should receive an JSON with user", async () => {
    const response = await request(server).get("/api/users/1");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
    expect(response.body).not.toHaveProperty("errors");
  });
});

describe("PUT /api/users", () => {
  test("shoud validate id is valid", async () => {
    const response = await request(server)
      .put("/api/users/not-valid-id")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body).not.toHaveProperty("user");
  });

  test("should receive A 404 with a message if user doesn't exist", async () => {
    const response = await request(server).put("/api/users/99999").send({});

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
    expect(response.body).not.toHaveProperty("user");
  });

  test("should update the user", async () => {
    const user = {
      id: 1,
      name: "Brandon",
      username: "BrandonGC_506",
      email: "brangmz20@gmail.com",
      password: "root",
    };
    const response = await request(server).put("/api/users/1").send(user);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
    expect(response.body).toHaveProperty("message");
    expect(response.body.user).toMatchObject(user);
    expect(response.body).not.toHaveProperty("errors");
  });
});
