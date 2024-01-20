import express from "express";
import "dotenv/config";

const port = process.env.PORT || 3000;
const app = express();

// import axios from "axios";

// axios
//   .get(
//     "https://universe-meeps.leagueoflegends.com/v1/vn_vn/champion-browse/index.json"
//   )
//   .then((res) => {
//     console.log(res.data.champions);
//     const champions = res.data.champions;
//     let data = [];
//     for (const champ of champions) {
//       data.push({
//         name: champ.name,
//         slug: champ.slug,
//       });
//     }
//   });

app.get("/", (req, res) => {
  res.send(`serve on ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
