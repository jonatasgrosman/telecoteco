import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.orange,
            secondary: colors.amber.lighten4,
            tertiary: colors.grey.darken3,
            anchor: colors.grey,
            background: colors.amber.lighten5,
          },
        },
      },
});
