"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/api/logout', (req, res) => {
    res.send({ "message": "Hello /api/logout" });
});
exports.default = router;
//# sourceMappingURL=logout.js.map