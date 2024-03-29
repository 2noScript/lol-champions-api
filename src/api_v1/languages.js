import lodash from "lodash";

const LANGUAGES = {
  cs_CZ: "Czech (Czech Republic)",
  el_GR: "Greek (Greece)",
  pl_PL: "Polish (Poland)",
  ro_RO: "Romanian (Romania)",
  hu_HU: "Hungarian (Hungary)",
  en_GB: "English (United Kingdom)",
  de_DE: "German (Germany)",
  es_ES: "Spanish (Spain)",
  it_IT: "Italian (Italy)",
  fr_FR: "French (France)",
  ja_JP: "Japanese (Japan)",
  ko_KR: "Korean (Korea)",
  es_MX: "Spanish (Mexico)",
  es_AR: "Spanish (Argentina)",
  pt_BR: "Portuguese (Brazil)",
  en_US: "English (United States)",
  en_AU: "English (Australia)",
  ru_RU: "Russian (Russia)",
  tr_TR: "Turkish (Turkey)",
  ms_MY: "Malay (Malaysia)",
  en_PH: "English (Republic of the Philippines)",
  en_SG: "English (Singapore)",
  th_TH: "Thai (Thailand)",
  vi_VN: "Vietnamese (Viet Nam)",
  id_ID: "Indonesian (Indonesia)",
  zh_MY: "Chinese (Malaysia)",
  zh_CN: "Chinese (China)",
  zh_TW: "Chinese (Taiwan)",
};

const getLanguages = (req, res) => {
  res.json({
    LANGUAGES,
    total: lodash.keys(LANGUAGES).length,
    support: "mapping by 2noscript",
  });
};

export default getLanguages;
