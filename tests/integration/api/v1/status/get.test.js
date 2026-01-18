test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data).toHaveProperty("update_at");
  expect(new Date(data.update_at).toISOString()).toBe(data.update_at);
  console.log(data.dependencies);
  expect(data.dependencies).toEqual({
    database: {
      status: "healthy",
      version: "17.5",
      max_connections: "100",
      opened_connections: "1",
    },
  });

  const updateAtResponse = new Date(data.update_at).toISOString();
  expect(data.update_at).toEqual(updateAtResponse);
});
