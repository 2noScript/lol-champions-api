import lodash from "lodash";

const { omit } = lodash;

const getSummoner = async (req, res) => {
  const locale = req.params.locale;

  try {
    const { data } = await request({
      url: `/cdn/${CND_VERSION}/data/${locale}/summoner.json`,
    });
    res.json({
      type: "item",
      data: omit(data, "version"),
    });
  } catch {
    res.status(500)({
      message: "server error",
    });
  }
};

export default getSummoner;
