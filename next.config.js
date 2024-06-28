const { withNextVideo } = require("next-video/process");

const nextConfig = {}; // Your current Next Config object

module.exports = withNextVideo(nextConfig, {
  folder: "video",
});
