import { pipeSourceImage } from "../utils/request.js";
import { CND_VERSION } from "../const/v-api.js";

export const getImgChampionSplash = async (req, res) => {
  const url = `cdn/img/champion/splash/${req.params.image}`;
  await pipeSourceImage(res, url);
};

export const getImgChampionLoading = async (req, res) => {
  const url = `cdn/img/champion/loading/${req.params.image}`;
  await pipeSourceImage(res, url);
};

export const getImgChampion = async (req, res) => {
  const url = `cdn/${CND_VERSION}/img/champion/${req.params.image}`;
  await pipeSourceImage(res, url);
};

export const getImgChampionPassive = async (req, res) => {
  const url = `cdn/${CND_VERSION}/img/passive/${req.params.image}`;
  await pipeSourceImage(res, url);
};

export const getImgSpell = async (req, res) => {
  const url = `cdn/${CND_VERSION}/img/spell/${req.params.image}`;
  await pipeSourceImage(res, url);
};

export const getImgMiniMap = async (req, res) => {
  const url = `cdn/6.8.1/img/map/${req.params.image}`;
  await pipeSourceImage(res, url);
};

export const getImgSprite = async (req, res) => {
  const url = `cdn/${CND_VERSION}/img/sprite/${req.params.image}`;
  await pipeSourceImage(res, url);
};

export const getImgScoreboardIcon = async (req, res) => {
  const url = `cdn/5.5.1/img/ui/${req.params.image}`;
  await pipeSourceImage(res, url);
};
