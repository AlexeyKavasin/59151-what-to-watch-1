module.exports = {
    "transform": {
      "^.+\\.tsx?$": `ts-jest`,
      "^.+\\.js?$": `babel-jest`,
    },
    "testRegex": `.test.(js?|jsx?|tsx?)$`,
    "moduleFileExtensions": [
      `ts`,
      `tsx`,
      `js`,
      `jsx`,
      `json`,
      `node`
    ],
    "globals": {
      "BASE_URL": "https://es31-server.appspot.com/wtw"
    }
};