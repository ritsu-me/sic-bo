"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const die1 = function () {
    const num = [1, 2, 3, 4, 5, 6];
    let rolled = num[~~(Math.random() * num.length)];
    return rolled;
};
const die2 = function () {
    const num = [1, 2, 3, 4, 5, 6];
    let rolled = num[~~(Math.random() * num.length)];
    return rolled;
};
const die3 = function () {
    const num = [1, 2, 3, 4, 5, 6];
    let rolled = num[~~(Math.random() * num.length)];
    return rolled;
};
const rolledDice = [die1(), die2(), die3()];
exports.default = rolledDice;
//# sourceMappingURL=dice.js.map