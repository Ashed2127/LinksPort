/* data.js */

/* One image for all categories */
const defaultImage = "https://cdn4.telesco.pe/file/DsLzpsIqvXYPIEzbc5D1Gl-v0plEBu9QjerqTszMCG1pjK9Bs_LcU3eoaUXeBljo7B9Iul566vipgbamgniA9-l8DCUCzfpzBiM_Vq4sAJ2i5RtTVxoG-NubbvGUkcijBAc5QeQbiNtg_3OS44vkvPiVbVmfHbCDwpa6lL8X3Weq17aaWiJbY6BQs_NRC7uznR3u1Pf6OMW8K2q5RN_XwsuVExYJAgH2p3AJ_GI7mcXztTXgXxuGquBqOsckD3w6Nd_X2b4jHdjXZrwbf1IZjCatx0O6HbspVyzPPB1x0Kv5i0DelwmaODt5QaevLtyeVH5-i4Urm0UfCNSWehgFYw.jpg";

const resources = [
  /* Channels */
  {"type":"channel","category":"Anime/AC","name":"Anime World","link":"https://t.me/sample_anime_c", "image": defaultImage},
  {"type":"channel","category":"Adult","name":"Adult Central","link":"https://t.me/sample_adult_c", "image": defaultImage},
  {"type":"channel","category":"News","name":"TF Business","link":"https://t.me/true_feed", "image": "https://cdn4.telesco.pe/file/e2rbECfp71bHBwBFrzhfeqWTZErFLAUPWmC9UXAZpX8xCdwcTDF_0KumXyhBiZzL_HaRZK-aGGer6ROCf9EJyIG6gwHYT8lmPzDxuPxg084WVU_6nuWqV2TMMOav2xM7auualPtTQMJMxHtd5fc31E-xqRzh-CbkMupwDOeTQEqXQOTacYddBwiiEoXII-oSrVv4zfhfSAYyWk6zWjG-wCfakGGb91bp9witBLjpOKuL6DR_YUlORcErauqeoWGcM4yhCjyk2rxoot67MJTh1W9hwcuCz9rfVYSuoNsRmbttIHjIUq8wV6mx31DDSEiZ852GtfV90R96xS9Xlwivgg.jpg"},
  
  {"type":"channel","category":"News","name":"ASHED NEWS","link":"https://t.me/myashed", "image": defaultImage},
  
  {"type":"channel","category":"Business","name":"TF Business","link":"https://t.me/sample_local_c", "image": "https://cdn4.telesco.pe/file/e2rbECfp71bHBwBFrzhfeqWTZErFLAUPWmC9UXAZpX8xCdwcTDF_0KumXyhBiZzL_HaRZK-aGGer6ROCf9EJyIG6gwHYT8lmPzDxuPxg084WVU_6nuWqV2TMMOav2xM7auualPtTQMJMxHtd5fc31E-xqRzh-CbkMupwDOeTQEqXQOTacYddBwiiEoXII-oSrVv4zfhfSAYyWk6zWjG-wCfakGGb91bp9witBLjpOKuL6DR_YUlORcErauqeoWGcM4yhCjyk2rxoot67MJTh1W9hwcuCz9rfVYSuoNsRmbttIHjIUq8wV6mx31DDSEiZ852GtfV90R96xS9Xlwivgg.jpg"},
  {"type":"channel","category":"Music","name":"Daily Soundtracks","link":"https://t.me/sample_music_c", "image": defaultImage},
  {"type":"channel","category":"Film & TV","name":"Movie Buff Corner","link":"https://t.me/sample_film_c", "image": defaultImage},
  {"type":"channel","category":"Games","name":"Gamer Nation","link":"https://t.me/sample_games_c", "image": defaultImage},
  {"type":"channel","category":"Emotions","name":"Mindfulness Daily","link":"https://t.me/sample_emotions_c", "image": defaultImage},
  {"type":"channel","category":"Community","name":"Local Community Chat","link":"https://t.me/sample_community_c", "image": defaultImage},
  {"type":"channel","category":"Crypto","name":"Crypto Insights","link":"https://t.me/sample_crypto_c", "image": defaultImage},
  {"type":"channel","category":"Programming","name":"Code Snippets","link":"https://t.me/sample_programming_c", "image": defaultImage},
  {"type":"channel","category":"AI","name":"AI Developments","link":"https://t.me/sample_ai_c", "image": defaultImage},
  {"type":"channel","category":"Tech","name":"ASHED Techs","link":"https://t.me/myashed", "image": defaultImage},
  {"type":"channel","category":"Finance","name":"Stock Market Today","link":"https://t.me/sample_finance_c", "image": defaultImage},
  {"type":"channel","category":"Travel","name":"World Destinations","link":"https://t.me/sample_travel_c", "image": defaultImage},
  {"type":"channel","category":"Novels","name":"Book Club Reads","link":"https://t.me/sample_novels_c", "image": defaultImage},
  {"type":"channel","category":"Live","name":"Live Sports Stream","link":"https://t.me/sample_live_c", "image": defaultImage},
  {"type":"channel","category":"Design","name":"Design Inspiration","link":"https://t.me/sample_design_c", "image": defaultImage},
  {"type":"channel","category":"Education","name":"Learn Something New","link":"https://t.me/sample_education_c", "image": defaultImage},
  {"type":"channel","category":"Shopping","name":"የሚሸጡ ስሞች😍","link":"https://t.me/lineleap", "image": "https://cdn4.telesco.pe/file/LRNLLtjj2nAh5EAobnsmpcVnk3ABs-h-_idoc-zVNIUtIFpsGnA9EV8dbihq1vCD-7a6fsuBehutIKnv3ubmhhOZrs-zZ-bWTMsN_YPlOfEBMvSZjBNgHjH3mbSJppE_mFnAu6R2IgqKE_RLI9Dgawn35GRReul0f5PBm7dtka7obQ3mBtH6nxcZZqdZ_uJdxGFWXX0sNZbRxRs0LvLorXTqYtuVqJxtgsK0t4_vhJQG4WXzvysQ7J3s9OEtvjhPEfuKtu53So0Qc30xVqNQIIShs4A9gsA0ZTCs1GylMM6XV7-g-xQlXiMa5Iu7x-84AxM3rfUnVwrWzvIyWTtp9A.jpg"},

  /* Groups */
  {"type":"group","category":"Anime/AC","name":"Anime Discussion Group","link":"https://t.me/sample_anime_g", "image": defaultImage},
  {"type":"group","category":"Adult","name":"Adult Talk Group","link":"https://t.me/sample_adult_g", "image": defaultImage},
  {"type":"group","category":"News","name":"Citizen Reporter Group","link":"https://t.me/sample_news_g", "image": defaultImage},
  {"type":"group","category":"Local","name":"Neighborhood Watch","link":"https://t.me/sample_local_g", "image": defaultImage},
  {"type":"group","category":"Music","name":"EDM Fans Group","link":"https://t.me/sample_music_g", "image": defaultImage},
  {"type":"group","category":"Film & TV","name":"Series Discussion","link":"https://t.me/sample_film_g", "image": defaultImage},
  {"type":"group","category":"Games","name":"Gamer LFG","link":"https://t.me/sample_games_g", "image": defaultImage},
  {"type":"group","category":"Emotions","name":"Support Group","link":"https://t.me/sample_emotions_g", "image": defaultImage},
  {"type":"group","category":"Community","name":"Hobbyists Meetup","link":"https://t.me/sample_community_g", "image": defaultImage},
  {"type":"group","category":"Crypto","name":"Crypto Trading Chat","link":"https://t.me/sample_crypto_g", "image": defaultImage},
  {"type":"group","category":"Programming","name":"JavaScript Help","link":"https://t.me/sample_programming_g", "image": defaultImage},
  {"type":"group","category":"AI","name":"Machine Learning Group","link":"https://t.me/sample_ai_g", "image": defaultImage},
  {"type":"group","category":"Tech","name":"PC Build Advice","link":"https://t.me/sample_tech_g", "image": defaultImage},
  {"type":"group","category":"Finance","name":"Personal Finance Q&A","link":"https://t.me/sample_finance_g", "image": defaultImage},
  {"type":"group","category":"Travel","name":"Backpackers' Tips","link":"https://t.me/sample_travel_g", "image": defaultImage},
  {"type":"group","category":"Novels","name":"Fantasy Book Readers","link":"https://t.me/sample_novels_g", "image": defaultImage},
  {"type":"group","category":"Live","name":"Concert Goers","link":"https://t.me/sample_live_g", "image": defaultImage},
  {"type":"group","category":"Design","name":"UI/UX Feedback","link":"https://t.me/sample_design_g", "image": defaultImage},
  {"type":"group","category":"Education","name":"Study Buddy Group","link":"https://t.me/sample_education_g", "image": defaultImage},
  {"type":"group","category":"Shopping","name":"Coupon Sharing","link":"https://t.me/sample_shopping_g", "image": defaultImage},

  /* Bots */
  {"type":"bot","category":"Anime/AC","name":"Anime Search Bot","link":"https://t.me/sample_anime_b", "image": defaultImage},
  {"type":"bot","category":"Adult","name":"Adult Content Bot","link":"https://t.me/sample_adult_b", "image": defaultImage},
  {"type":"bot","category":"News","name":"News Aggregator Bot","link":"https://t.me/sample_news_b", "image": defaultImage},
  {"type":"bot","category":"Local","name":"Weather Forecast Bot","link":"https://t.me/sample_local_b", "image": defaultImage},
  {"type":"bot","category":"Music","name":"Song Recognition Bot","link":"https://t.me/sample_music_b", "image": defaultImage},
  {"type":"bot","category":"Film & TV","name":"IMDb Lookup Bot","link":"https://t.me/sample_film_b", "image": defaultImage},
  {"type":"bot","category":"Games","name":"Game Stats Bot","link":"https://t.me/sample_games_b", "image": defaultImage},
  {"type":"bot","category":"Emotions","name":"Mood Tracker Bot","link":"https://t.me/sample_emotions_b", "image": defaultImage},
  {"type":"bot","category":"Community","name":"Poll Creation Bot","link":"https://t.me/sample_community_b", "image": defaultImage},
  {"type":"bot","category":"Crypto","name":"Price Alert Bot","link":"https://t.me/sample_crypto_b", "image": defaultImage},
  {"type":"bot","category":"Programming","name":"Syntax Checker Bot","link":"https://t.me/sample_programming_b", "image": defaultImage},
  {"type":"bot","category":"AI","name":"ChatGPT Interface Bot","link":"https://t.me/sample_ai_b", "image": defaultImage},
  {"type":"bot","category":"Tech","name":"File Converter Bot","link":"https://t.me/sample_tech_b", "image": defaultImage},
  {"type":"bot","category":"Finance","name":"Currency Exchange Bot","link":"https://t.me/sample_finance_b", "image": defaultImage},
  {"type":"bot","category":"Travel","name":"Flight Search Bot","link":"https://t.me/sample_travel_b", "image": defaultImage},
  {"type":"bot","category":"Novels","name":"Quote of the Day Bot","link":"https://t.me/sample_novels_b", "image": defaultImage},
  {"type":"bot","category":"Live","name":"Event Reminder Bot","link":"https://t.me/sample_live_b", "image": defaultImage},
  {"type":"bot","category":"Design","name":"Color Palette Bot","link":"https://t.me/sample_design_b", "image": defaultImage},
  {"type":"bot","category":"Education","name":"Quiz Bot","link":"https://t.me/sample_education_b", "image": defaultImage},
  {"type":"bot","category":"Shopping","name":"Amazon Price Watcher","link":"https://t.me/sample_shopping_b", "image": defaultImage}
]; 
