"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
function initRestApi(app) {
    app.use(routes_1.default);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map