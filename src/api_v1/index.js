import { Router } from "express";
import languages from "./languages.js";
import champions, { getChampionDetail } from "./champion.js";

const route = Router();

route.get("/languages", languages);

route.get("/:locale/champions", champions);
route.get("/:locale/champion/:name", getChampionDetail);

export default route;
