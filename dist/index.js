var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  test: () => test
});

// src/test.d.ts
var TestEnum;
(function(TestEnum2) {
  TestEnum2[TestEnum2["A"] = 0] = "A";
  TestEnum2[TestEnum2["B"] = 1] = "B";
  TestEnum2[TestEnum2["C"] = 2] = "C";
  TestEnum2[TestEnum2["D"] = 3] = "D";
})(TestEnum || (TestEnum = {}));

// src/test.ts
var test = /* @__PURE__ */ __name(() => {
  const type = TestEnum[2];
}, "test");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  test
});
