"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showForm = (req, res) => {
    res.send({ message: "Hello /api/login" });
};
exports.passCredentials = (req, res) => {
    console.log('We posted');
    res.send({ message: "Posted to /api/login" });
};
//# sourceMappingURL=ctrlLogin.js.map