module.exports = {
  extends: [
    "config:base",
    ":disableDependencyDashboard",
    ":timezone(Asia/Tokyo)",
    ":enableVulnerabilityAlertsWithLabel(security)",
  ],
  ignorePresets: [":prHourlyLimit2", ":prConcurrentLimit10"],
  onboarding: false,
  requireConfig: "optional",
  prConcurrentLimit: process.env.RENOVATE_PR_CONCURRENT_LIMIT,
  repositories: ["shgtkshruch/monorepo-renovate-sample"],
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
};
