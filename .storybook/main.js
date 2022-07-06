module.exports = {
  stories: [
    '../pages/**/*.stories.@(js|jsx|ts|tsx)',
    '../shared/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook.addon-viewports',
    '@storybook.addon-actions',
  ],
  core: {
    builder: 'webpack5',
  },
}
