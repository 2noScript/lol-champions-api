import lodash from "lodash";
import { CND_TFT } from "../const/v-api.js";
const { omit } = lodash;

const getTftChampion = async (req, res) => {
  const locale = req.params.locale;

  try {
    const { data } = await request({
      url: `/cdn/${CND_TFT}/data/${locale}/tft-champion.json`,
    });
    let dataJson = [];
    forEach(data.data, (item) => {
      dataJson.push(omit(item, "version"));
    });
    res.json({
      type: "tft-champion",
      total: dataJson.length,
      data: dataJson,
    });
  } catch {
    res.status(500)({
      message: "server error",
    });
  }
};

export default getTftChampion;
