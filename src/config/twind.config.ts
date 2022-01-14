import { Configuration } from 'twind'
import * as colors from 'twind/colors'

import { withForms } from '@twind/forms'

const twindConfig: Configuration = {
  preflight: withForms({
    '@import':
      "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;700&display=swap')"
  }),
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ["'Inter'", 'sans-serif']
      }
    }
  }
}

export default twindConfig
