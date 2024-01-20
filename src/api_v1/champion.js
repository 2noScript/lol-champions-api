import { CND_VERSION } from "../const/v-api.js";
import request from "../utils/request.js";
import lodash from "lodash";

const { forEach, omit } = lodash;

const getChampion = async (req, res) => {
  const locale = req.params.locale;

  try {
    const { data } = await request({
      method: "GET",
      url: `/cdn/${CND_VERSION}/data/${locale}/champion.json`,
    });
    let dataJson = [];
    forEach(data.data, (item) => {
      dataJson.push(omit(item, "version"));
    });
    res.json({
      type: "champion",
      total: dataJson.length,
      data: dataJson,
    });
  } catch {
    res.status(500)({
      message: "server error",
    });
  }
};

export const getChampionDetail = async (req, res) => {
  const locale = req.params.locale;
  const name = req.params.name;

  try {
    const { data } = await request({
      method: "GET",
      url: `/cdn/${CND_VERSION}/data/${locale}/champion/${name}.json`,
    });
    res.json(data.data[name]);
  } catch {
    res.status(500)({
      message: "server error",
    });
  }
};

export default getChampion;
