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
import item from "./item.js";
import summoner from "./summoner.js";
import getTftArena from "./tft-arena.js";
import getTftAugments from "./tft-augments.js";
import getTftChampion from "./tft-champion.js";

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

route.get("/item", item);
route.get("/summoner", summoner);

route.get("/ft-arena", getTftArena);
route.get("/tft-augments", getTftAugments);
route.get("/tft-champion", getTftChampion);

export default route;
