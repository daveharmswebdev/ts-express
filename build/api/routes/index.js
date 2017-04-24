"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// routes
const login_1 = require("./login");
const logout_1 = require("./logout");
router.use(login_1.default);
router.use(logout_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map