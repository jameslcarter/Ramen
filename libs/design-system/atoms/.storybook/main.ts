import type { StorybookConfig } from '@storybook/core-common';
// eslint-disable-next-line import/no-relative-packages
import rootMain from '../../../../.storybook/main';

export default {
  ...rootMain,
  core: {
    builder: 'webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
} as StorybookConfig;
