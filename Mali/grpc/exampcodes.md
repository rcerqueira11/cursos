## server.js

- examp1
    ```js
    const path = require('path');
    const requireMany = require('require-many');
    const Mali = require('mali');

    const modules = requireMany(path.join(__dirname, './lib'), { asArray: true });
    const serverConfig = require('./config/server.json');

    const PROTO_PATH = path.join(__dirname, '..', 'protos', 'main.proto');

    const { env } = process;

    class Server {
    constructor() {
        this.server = new Mali(PROTO_PATH);
        this.host = env.DN_HOST || serverConfig.host;
        this.port = env.DN_PORT || serverConfig.port;
    }

    setupPipelines() {
        // This block of code transforms the array of methods into an object
        // that GRPC understands.
        const methods = modules.reduce((result, item) => {
        Object.keys(item).forEach((key) => {
            result[key] = item[key];
        });
        return result;
        }, {});

        this.server.use({ DriverNavigator: methods });
    }

    start() {
        const route = [this.host, this.port].join(':');
        this.setupPipelines();
        this.server.start(route);
        console.log(`Driver Navigator server started at ${route}`);
    }
    }

    const driverNavigatorService = new Server();
    driverNavigatorService.start();
    ```

- examp2

    ```js
    import path from 'path';
    import Mali from 'mali';
    import logger from 'mali-logger';
    import { InternalMessages } from './resources/internal';

    import { AppSettings } from './modules/appConfiguration/app-settings-handler';
    import { DriverSettings } from './modules/driverConfiguration/driver-settings-handler';

    require('dotenv').config();

    const PROTO_PATH = path.join(__dirname, '..', process.env.PROTO_PATH, process.env.MAIN_PROTO);

    class Server {
    constructor() {
        this.server = null;
        this.host = process.env.APP_HOST;
        this.port = process.env.APP_PORT;
    }

    setupHandler() {
        try {
        this.server.name = 'Driver Management Server';
        this.server.use(logger());
        this.server.use({
            AppSettingsService: {
            getAppSettingsByLocation: AppSettings.GetAppSettingsByLocation,
            getAppSettingsByIp: AppSettings.GetAppSettingsByIp,
            verifyDriverPhoneNumber: DriverSettings.VerifyDriverPhoneNumber,
            },
        });
        } catch (err) {
        throw new Error(err);
        }
    }

    async start() {
        this.server = new Mali(PROTO_PATH);
        await this.setupHandler();
        await this.server.start([this.host, this.port].join(':'));
    }

    stop(err) {
        console.log(InternalMessages.SERVER_SHUTDOWN, err);
        this.server.close();
    }
    }

    const server = new Server();

    server.start()
    .catch((err) => {
        server.stop(err);
    });

    console.log(`\n\n*-*- Server started at: ${server.host}:${server.port} -*-*\n\n`);

    module.exports = server;
    ```

## gulp.js

```js
const gulp = require('gulp');
const zip = require('gulp-zip');
const clean = require('gulp-clean');
const deployer = require('nexus-deployer');
const git = require('git-rev');

const PROTO_PATH_TO_ZIP = `protos/*`;
const PROTO_ZIP_PATH = 'build/';
const PROTO_ZIP_NAME = 'protos.zip';

/**
 * Create zip file that will contain the .proto files
 */
gulp.task('zip-proto', () => {
  gulp.src(PROTO_PATH_TO_ZIP)
    .pipe(zip(PROTO_ZIP_NAME))
    .pipe(gulp.dest(PROTO_ZIP_PATH));
});

gulp.task('clean-proto-paths', () => {
  gulp.src(PROTO_ZIP_PATH, { read: false })
    .pipe(clean())
});

gulp.task('deploy:artifacts', (callback) => {
  return git.tag((version) => {
    const snapshot = {
      groupId: 'com.blanclabs.neksosh.driver',
      artifactId: 'contracts',
      version,
      packaging: 'zip',
      auth: {
        username: 'nekso',
        password: 'n3ks0_l4bs',
      },
      pomDir: 'pom',
      url: 'http://nexus.blanclabs.com/nexus/content/sites/neksosh-contracts/',
      artifact: 'build/protos.zip',
      cwd: '',
      quiet: true,
      insecure: true,
    };

    return deployer.deploy(snapshot, callback);
  });
});
```

- `package.json`
    ```js
    {
    "name": "neksosh-ms-driver-contracts",
    "version": "0.0.3",
    "description": "Driver contracts",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "deploy": "rm -rf build && ./node_modules/gulp/bin/gulp.js zip-proto && ./node_modules/gulp/bin/gulp.js deploy:artifacts"
    },
    "keywords": [
        "driver",
        "contracts"
    ],
    "author": "Nekso Development team",
    "license": "ISC",
    "devDependencies": {
        "git-rev": "^0.2.1",
        "gulp": "~3.9.1",
        "gulp-clean": "^0.3.2",
        "gulp-zip": "^4.0.0",
        "nexus-deployer": "^0.1.8"
    }
    }
    ```

## Other gulpfile

```js

const gulp = require('gulp');
const unzip = require('gulp-unzip');
const download = require('gulp-download');

require('dotenv').config();

const PROTO_DIST_PATH = 'contracts/';
const PROTO_UNZIP_PATH = `${PROTO_DIST_PATH}/driver`;

/**
 * Download and unzip .proto files from country-ms
 */
gulp.task('setup-ms-countries-proto', () => {
  download('http://nexus.blanclabs.com/nexus/content/sites/neksosh-contracts/com/blanclabs/neksosh/countries/contracts/0.0.01-2-gaddf630.dirty/contracts-0.0.01-2-gaddf630.dirty.zip')
    .pipe(unzip())
    .pipe(gulp.dest(`${PROTO_DIST_PATH}/countries`));
});

/**
 * Download and unzip .proto files from driver-ms
 */
gulp.task('setup-ms-driver-proto', () => {
  download('http://nexus.blanclabs.com/nexus/content/sites/neksosh-contracts/com/blanclabs/neksosh/driver/contracts/v0.0.3/contracts-v0.0.3.zip')
    .pipe(unzip())
    .pipe(gulp.dest(PROTO_UNZIP_PATH));
});

gulp.task('deploy-protos', ['setup-ms-countries-proto', 'setup-ms-driver-proto']);
```

- `package.json`
    ```js
    "scripts": {
    "test": "./node_modules/mocha/bin/mocha src/specs/*.js --require babel-polyfill --require babel-register",
    "prestart": "./node_modules/gulp/bin/gulp.js deploy-protos && ./node_modules/eslint/bin/eslint.js src",
    "start": "./node_modules/babel-cli/bin/babel.js src --out-dir dist && node dist/server.js"
    },
    "repository": {
        "type": "git",
        "url": "git+ssh://git@bitbucket.org/.git"
    },
    "keywords": [
        "driver",
        "taxi"
    ],
    "author": "Nekso Dev Team",
    "license": "ISC",
    "homepage": "https://bitbucket.org/#readme",
    "dependencies": {
        "aws-sdk": "^2.165.0",
        "dotenv": "^4.0.0",
        "grpc": "^1.7.2",
        "mali": "^0.4.0",
        "mali-logger": "^0.2.1"
    },
    "devDependencies": {
        "babel-cli": "^6.26.0",
        "babel-polyfill": "^6.26.0",
        "babel-preset-airbnb": "^2.4.0",
        "babel-register": "^6.26.0",
        "casual": "^1.5.17",
        "chai": "^4.1.2",
        "eslint": "^4.11.0",
        "eslint-config-airbnb": "^16.1.0",
        "eslint-plugin-import": "^2.8.0",
        "eslint-plugin-jsx-a11y": "^6.0.2",
        "eslint-plugin-react": "^7.4.0",
        "grpc-inspect": "^0.4.0",
        "gulp": "~3.9.1",
        "gulp-download": "0.0.1",
        "gulp-unzip": "^0.2.0",
        "mocha": "^4.0.1"
    }
    }
    ```

## Module

### app-setting-handler

```js
import grpc from 'grpc';
import path from 'path';
import { SUPPORTED_COUNTRIES } from '../../resources/internal';

require('dotenv').config();

function splitIp(stringip) {
  const arrIp = stringip.split(':');
  return arrIp[1];
}

const COUNTRY_PROTO_PATH = path.join(
  __dirname,
  '../../..',
  'contracts',
  'countries/contracts-0.0.01-2-gaddf630.dirty/CountryService.proto',
);

const CountryGrpc = grpc.load(COUNTRY_PROTO_PATH);
const client = new CountryGrpc.com.blanclabs.neksosh.countries.contract.CountriesService(
  `${process.env.COUNTRY_MS_HOST}:${process.env.COUNTRY_MS_PORT}`,
  grpc.credentials.createInsecure(),
);

const GetAppSettingsByLocation = async (context) => {
  // eslint-disable-next-line
  context.res = await getCountryInformation(context.req.longitude, context.req.latitude);
};

const GetAppSettingsByIp = async (context) => {
  // eslint-disable-next-line
  context.req.byIp = splitIp(context.request.call.getPeer());
  // eslint-disable-next-line
  context.res = await getCountryInformationByIp(context.req.byIp);
};

async function getCountryInformationByIp(ip) {
  return new Promise((resolve, reject) => {
    client.getByIp(
      { ip },
      (err, response) => {
        if (err) {
          resolve({
            errors: {
              message: err,
              code: 100,
            },
          });
        } else {
          try {
            resolve({
              result: {
                supportedCountryIsoCode: SUPPORTED_COUNTRIES,
                defaultCountryIsoCode: response.country.iso.substr(0, 2),
                currentCountryIsoCode: response.country.iso.substr(0, 2),
              },
            });
          } catch (error) {
            reject(error);
          }
        }
      },
    );
  });
}

async function getCountryInformation(lng, lat) {
  return new Promise((resolve) => {
    client.getByCoordinates(
      { lng, lat },
      (err, response) => {
        if (err) {
          resolve({
            errors: {
              message: err,
              code: 100,
            },
          });
        } else {
          resolve({
            result: {
              supportedCountryIsoCode: SUPPORTED_COUNTRIES,
              defaultCountryIsoCode: response.country.iso.substr(0, 2),
              currentCountryIsoCode: response.country.iso.substr(0, 2),
            },
          });
        }
      },
    );
  });
}

module.exports = {
  AppSettings: {
    GetAppSettingsByLocation,
    GetAppSettingsByIp,
  },
};

```

### driver-setting-handler

```js
import grpc from 'grpc';
import path from 'path';
// import DynamoDB from '../../database/database';

require('dotenv').config();

const DRIVER_PROTO_PATH = path.join(
  __dirname,
  '../../..',
  'contracts',
  'driver/Driver.proto',
);

const DriverGrcp = grpc.load(DRIVER_PROTO_PATH);

const VerifyDriverPhoneNumber = async (context) => {
  // eslint-disable-next-line
  context.res = await existPhoneNumber(context.req.phone_number);
};

async function existPhoneNumber(phoneNumber) {
  //here goes the code 
  //to connect to the database 
  //and check if the phone number exist
  console.log(DRIVER_PROTO_PATH);
  console.log(phoneNumber);
  return {
    response: {
      statusCode: 101,
      message: 'unmensaje',
    },
  };
}

module.exports = {
  DriverSettings: {
    VerifyDriverPhoneNumber,
  },
};
```

## dynamodb config

```js
const aws = require('aws-sdk');

require('dotenv').config();

class DynamoDB {
  constructor(config) {
    this.configuration = {
      apiVersion: (config && config.apiVersion) ||
        process.env.DYNAMODB_AWS_API_VERSION,
      accessKeyId: (config && config.accessKeyId) ||
        process.env.DYNAMODB_AWS_ACCESS_KEY_ID,
      secretAccessKey: (config && config.secretAccessKey) ||
        process.env.DYNAMODB_AWS_SECRET_ACCESS_KEY,
      region: (config && config.region) ||
        process.env.DYNAMODB_AWS_REGION,
      endpoint: (config && config.endpoint) ||
        `${process.env.DYNAMODB_AWS_HOST}:${process.env.DYNAMODB_AWS_PORT}`,
    };

    return new aws.DynamoDB(this.configuration);
  }
}
module.exports.DynamoDB = new DynamoDB();
```