import express from 'express';

const app = express();

/** 
 * GET
 * POST 
 * PUT
 * DELETE
 * PATCH
*/

app.get("/", (request, response) => {
  return response.json({message:"hello"});
});

app.post("/", (request, response) => {
  return response.json({message: "Ok"})
})

app.listen(3333, () => console.log("server is up and running on port 33333"))