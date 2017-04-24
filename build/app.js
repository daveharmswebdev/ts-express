"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_1 = require("./api/api");
const app = express();
const PORT = process.env.PORT || 8080;
api_1.initRestApi(app);
app.listen(PORT, function () {
    console.log(`Now listening on port ${PORT}`);
});
//# sourceMappingURL=app.js.map