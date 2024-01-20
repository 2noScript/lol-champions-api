import lodash from "lodash";

const { omit } = lodash;

const getItem = async (req, res) => {
  const locale = req.params.locale;

  try {
    const { data } = await request({
      url: `/cdn/${CND_VERSION}/data/${locale}/item.json`,
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

export default getItem;
