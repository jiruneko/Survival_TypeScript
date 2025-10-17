function printLength(obj) {
    var _a;
    console.log((_a = obj.a) === null || _a === void 0 ? void 0 : _a.length);
}
printLength({ a: "Hello" });
printLength({});
