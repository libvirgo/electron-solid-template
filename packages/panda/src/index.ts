import { type Preset, definePreset } from '@pandacss/dev';

const createPreset = (): Preset => {
  return definePreset({
    conditions: {
      light: '[data-color-mode=light] &',
      dark: '[data-color-mode=dark] &',
    },
    theme: {
      extend: {
        semanticTokens: {
          colors: {
            bg: {
              value: {
                _dark: 'black',
                _light: 'white',
              },
            },
            text: {
              value: {
                _dark: 'white',
                _light: 'black',
              },
            },
          },
        },
      },
    },
  });
};

const defaultPreset = createPreset();

export default defaultPreset;
