import supertest from "supertest";
import { web } from "../../app/web";
import { logger } from "../../app/logging";

describe("POST /api/wa/connect", () => {
  it("should return 200 OK", async () => {
    const body = {
      user_id: "6285259622409",
      client_id: "aji",
    };

    const result = await supertest(web).post("/api/wa/connect").send(body);

    expect(result.status).toBe(200);
    expect(result.body.message).toBe("success");
    expect(result.body.data.user_id).toEqual(body.user_id);
    expect(result.body.data.client_id).toEqual(body.client_id);
    expect(result.body.data.qr).toBeDefined();
    expect(result.body.data.status).toBeDefined();

    logger.info("result", result.body.data);
  });

  it("should reject if request is invalid", async () => {
    const body = {
      user_id: "6285259622409",
    };

    const result = await supertest(web).post("/api/wa/connect").send(body);

    expect(result.status).toBe(400);
    expect(result.body.error).toBeDefined();
  });

  it("should return all session from user", async () => {
    const body1 = {
      user_id: "123456",
      client_id: "aji",
    };

    const body2 = {
      user_id: "123456",
      client_id: "bayu",
    };

    await supertest(web).post("/api/wa/connect").send(body1);
    await supertest(web).post("/api/wa/connect").send(body2);

    const result = await supertest(web).get("/api/wa/session?user_id=123456");

    expect(result.status).toBe(200);
    expect(result.body.message).toBe("success");
    expect(result.body.data.length).toBe(2);
  });

  it("should client not found", async () => {
    const body = {
      user_id: "123456",
      client_id: "aji",
    };

    await supertest(web).post("/api/wa/connect").send(body);

    const body2 = {
      user_id: "123456",
      client_id: "zizi",
    };

    const result = await supertest(web).get(
      `/api/wa/status?user_id=${body2.user_id}&client_id=${body2.client_id}`
    );

    expect(result.status).toBe(404);
    expect(result.body.error).toBeDefined();
    expect(result.body.error).toBe("Client not found");
  });
});
