module.exports = {
  packagerConfig: {
    extraResources: ["icons/**/*"],
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
  ],
};
