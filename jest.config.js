const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./"
});
const customJestConfig = {
  moduleDirectories: ["node_modules", __dirname],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "@components/(.*)":"<rootDir>/src/common/components/$1",
    "@utils/(.*)":"<rootDir>/src/common/utils/$1",
    "@modules/(.*)": "<rootDir>/src/modules/$1",
    "@customTypes/(.*)":"<rootDir>/src/types/$*"
  }
};
module.exports = createJestConfig(customJestConfig);




