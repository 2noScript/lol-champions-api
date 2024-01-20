import { Router } from "express";
import languages from "./languages.js";
import champions, { getChampionDetail } from "./champion.js";
import {
  getImgChampionLoading,
  getImgChampionSplash,
  getImgChampion,
  getImgChampionPassive,
  getImgSpell,
  getImgMiniMap,
  getImgSprite,
  getImgScoreboardIcon,
} from "./image.js";

const route = Router();

route.get("/languages", languages);

route.get("/:locale/champions", champions);
route.get("/:locale/champion/:name", getChampionDetail);

route.get("/img/champion/splash/:image", getImgChampionSplash);
route.get("/img/champion/loading/:image", getImgChampionLoading);
route.get("/img/champion/mg/:image", getImgChampion);
route.get("/img/passive/:image", getImgChampionPassive);
route.get("/img/spell/:image", getImgSpell);
route.get("/img/map/:image", getImgMiniMap);
route.get("/img/sprite/:image", getImgSprite);
route.get("/img/scoreboard/icon/:image", getImgScoreboardIcon);

export default route;
