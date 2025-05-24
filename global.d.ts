// Add type declaration for module.hot (Webpack HMR)
declare const module: {
  hot?: {
    accept: () => void;
  };
};
