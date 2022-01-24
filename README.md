# RIPE Config API for Javascript

Simple Javascript API client for RIPE Config.

## Example

```javascript
import { API as ConfigAPI } from "ripe-config";
await ConfigAPI.load();
const api = new ConfigAPI({ username: "YOUR_USERNAME", password: "YOUR_PASSWORD" });
console.info(await api.getResource("info.json"));
```

## Configuration

| Name                     | Type  | Default                         | Description                                             |
| ------------------------ | ----- | ------------------------------- | ------------------------------------------------------- |
| **RIPE_CONFIG_BASE_URL** | `str` | `https://config.platforme.com/` | The base URL to the RIPE ID server instance to be used. |
| **RIPE_CONFIG_USERNAME** | `str` | `null`                          | The username to be used for authentication.             |
| **RIPE_CONFIG_PASSWORD** | `str` | `null`                          | The password to be used for authentication.             |

## License

RIPE Config API Javascript is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).

## Build Automation

[![Build Status](https://github.com/ripe-tech/ripe-config-api-js/workflows/Main%20Workflow/badge.svg)](https://github.com/ripe-tech/ripe-config-api-js/actions)
[![npm Status](https://img.shields.io/npm/v/ripe-config-api.svg)](https://www.npmjs.com/package/ripe-config-api)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/)
