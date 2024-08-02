import server from "./server";

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});