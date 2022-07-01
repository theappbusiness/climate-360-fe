module.exports = {
  stories: ['../pages/**/*.stories.@(js|jsx|ts|tsx)', '../shared/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  core: {
    builder: 'webpack5',
  },
};
