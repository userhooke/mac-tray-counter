module.exports = {
  packagerConfig: {
    extraResources: ["icons/**/*"],
    icon: "app.icns",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
  ],
};
