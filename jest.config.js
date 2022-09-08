
module.exports = {
  projects: [
    "projects/weather-gauges",
    // fix later
    // "projects/weather-gauges-docs"
  ],

  reporters: [
    // for the human at the console
    "default",
    // for jenkins statistics
    ["jest-junit", {
      suiteName: "jest tests",
      outputDirectory: "coverage",
      outputName: "junit.xml",
    }]
  ],
  coverageReporters: [
    // for the human at the console
    "text-summary",
    "html",
    // for Jenkins statistics
    "cobertura",
    // for Sonarqube analysis
    "lcovonly"
  ]
};
