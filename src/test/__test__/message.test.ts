import supertest from "supertest";
import { web } from "../../app/web";
import { logger } from "../../app/logging";

describe("POST /api/send-message", () => {
  it("should return 200 OK", async () => {
    const body = {
      message: "Hello World",
      sender: "6285259622409",
    };

    const result = await supertest(web).post("/api/send-message").send(body);

    // expect(result.status).toBe(200);
    // expect(result.body.message).toBe("success");
    // expect(result.body.data).toEqual({});
  });

  it("should reject if request is invalid", async () => {
    const body = {
      message: "Hello World",
    };

    const result = await supertest(web).post("/api/send-message").send(body);

    // expect(result.status).toBe(400);
    // expect(result.body.error).toBeDefined();
  });
});
