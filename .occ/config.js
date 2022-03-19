module.exports = {
  "httpHost": "localhost",
  "httpPort": 80,
  "httpsHost": "localhost",
  "httpsPort": 443,
  "sslKey": "config/ssl/key.pem",
  "sslCert": "config/ssl/cert.pem",
  "serverEnv": "development",
  "appName": "core-commerce-reference-store",
  "dsAssetMode": "local",
  "verbose": false,
  "live": false,
  "appContext": "development",
  "userName": "rl5549",
  "defaultCluster": "storefront",
  "backup": true,
  "baseURI": "/",
  "serverConfig": {
    "development": {
      "appServerAdmin": "http://localhost:9080",
      "appServer": "http://localhost:8080"
    },
    "test": {
      "appServerAdmin": "http://testadminserver.example.com:9080",
      "appServer": "http://testserver.example.com:9080"
    },
    "production": {
      "appServerAdmin": "http://prodadminserver.example.com:9080",
      "appServer": "http://prodserver.example.com:9080"
    }
  }
};