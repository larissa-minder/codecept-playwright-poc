import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './e2e/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true
    },
    REST: {
      endpoint: 'https://pokeapi.co/api/v2/pokemon',
    },
    JSONResponse: {
      requestHelper: 'REST'
    }
  },
  Mochawesome: {
    "uniqueScreenshotNames": true
  },
  include: {
    I: './support/steps_file',
    loginPage: './pages/login.ts',
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  name: 'codecept',

}