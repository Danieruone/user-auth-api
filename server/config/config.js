const { mongoURL, tokenSeed } = require("../constants");

// port
process.env.PORT = process.env.PORT || 3000;
// database
process.env.MONGO_URL = process.env.MONGO_URL || mongoURL;
// token
process.env.TOKEN_EXPIRATION = 60 * 60 * 24 * 30;
process.env.TOKEN_SEED = process.env.TOKEN_SEED || tokenSeed;
