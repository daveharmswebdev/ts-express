"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const ctrlLogin_1 = require("../controllers/ctrlLogin");
router.get('/api/login', ctrlLogin_1.showForm);
router.post('/api/login', ctrlLogin_1.passCredentials);
exports.default = router;
//# sourceMappingURL=login.js.map