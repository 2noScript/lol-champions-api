import lodash from "lodash";
import { CND_TFT } from "../const/v-api.js";
const { omit } = lodash;

const getTftAugments = async (req, res) => {
  const locale = req.params.locale;

  try {
    const { data } = await request({
      url: `/cdn/${CND_TFT}/data/${locale}/tft-augments.json`,
    });
    res.json({
      type: "tft-arena",
      data: omit(data, "version"),
    });
  } catch {
    res.status(500)({
      message: "server error",
    });
  }
};

export default getTftAugments;
