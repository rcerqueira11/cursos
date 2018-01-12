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