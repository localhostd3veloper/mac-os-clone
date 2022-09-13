export const systemDropDownoptions = [
  {
    id: 1,
    name: "About this Mac",
    action: () => {},
  },
  {
    id: 2,
    name: "System Preferences",
    action: () => {},
  },

  {
    id: 3,
    name: "App Store",
    action: () => {},
  },
  {
    id: 4,
    name: "Recent Items",
    action: () => {},
  },
  {
    id: 5,
    name: "Force Quit...",
    action: () => {},
  },
  {
    id: 6,
    name: "Sleep",
    action: () => {
      window.location.assign("/sleep");
    },
  },
  {
    id: 7,
    name: "Restart...",
    action: () => window.location.reload(),
  },
  {
    id: 8,
    name: "Shut Down...",
    action: () => window.close(),
  },
  {
    id: 9,
    name: "Lock Screen",
    action: () => window.location.assign("/lockscreen"),
  },
];
