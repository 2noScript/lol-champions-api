import lodash from "lodash";
import { CND_TFT } from "../const/v-api.js";
const { forEach, omit } = lodash;

const getTftArena = async (req, res) => {
  const locale = req.params.locale;

  try {
    const { data } = await request({
      url: `/cdn/${CND_TFT}/data/${locale}/tft-arena.json`,
    });
    let dataJson = [];
    forEach(data.data, (item) => {
      dataJson.push(omit(item, "version"));
    });
    res.json({
      type: "tft-arena",
      total: dataJson.length,
      data: dataJson,
    });
  } catch {
    res.status(500)({
      message: "server error",
    });
  }
};

export default getTftArena;
