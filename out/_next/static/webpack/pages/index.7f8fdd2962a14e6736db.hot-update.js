self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "TypedText": function() { return /* binding */ TypedText; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px 0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px 0";
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:600;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,#ffffff 18.77%,rgba(255,255,255,0.86) 60.15% );background:white;-webkit-background-clip:text;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? "65px" : "56px";
}, function (props) {
  return props.main ? "72px" : "56px";
}, function (props) {
  return props.main ? "58px 0 16px" : "0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "40px 0 12px" : "0";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? "28px" : "32px";
}, function (props) {
  return props.main ? "32px" : "40px";
}, function (props) {
  return props.main ? "16px 0 8px" : "0";
});
var TypedText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__TypedText",
  componentId: "sc-6qzy6y-2"
})(["font-weight:600;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,#ffffff 18.77%,rgba(255,255,255,0.86) 60.15% );background:white;-webkit-background-clip:text;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? "52px" : "46px";
}, function (props) {
  return props.main ? "52px" : "46px";
}, function (props) {
  return props.main ? "58px 0 16px" : "0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? "46px" : "38px";
}, function (props) {
  return props.main ? "46px" : "38px";
}, function (props) {
  return props.main ? "40px 0 12px" : "0";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? "28px" : "32px";
}, function (props) {
  return props.main ? "32px" : "40px";
}, function (props) {
  return props.main ? "16px 0 8px" : "0";
});
var SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-3"
})(["max-width:900px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.6);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:30px;}@media ", "{max-width:670px;font-size:16px;line-height:24px;padding-bottom:30px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-4"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.colorAlt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-5"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-6"
})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-7"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? "150px" : "262px";
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? "52px" : "64px";
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? "20px" : "24px";
}, function (_ref4) {
  var alt = _ref4.alt,
      form = _ref4.form;
  return alt || form ? "0" : "0 0 80px";
}, function (_ref5) {
  var alt = _ref5.alt;
  return alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)";
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? ".5" : "1";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref7) {
  var alt = _ref7.alt;
  return alt ? "150px" : "184px";
}, function (_ref8) {
  var alt = _ref8.alt;
  return alt ? "52px" : "48px";
}, function (_ref9) {
  var alt = _ref9.alt;
  return alt ? "20px" : "16px";
}, function (_ref10) {
  var alt = _ref10.alt;
  return alt ? "0" : "64px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref11) {
  var alt = _ref11.alt;
  return alt ? "0" : "32px";
});
var ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-8"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:0.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], function (_ref12) {
  var alt = _ref12.alt;
  return alt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? ".5" : "1";
}, function (_ref14) {
  var alt = _ref14.alt;
  return alt ? "20px" : "24px";
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref16) {
  var alt = _ref16.alt;
  return alt ? "20px" : "16px";
}, function (props) {
  return props.theme.breakpoints.sm;
});
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-9"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], function (_ref17) {
  var large = _ref17.large;
  return large ? "24px" : "16px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref18) {
  var large = _ref18.large;
  return large ? "16px" : "8px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref19) {
  var large = _ref19.large;
  return large ? "0" : "8px";
});
var LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-10"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], function (_ref20) {
  var large = _ref20.large;
  return large ? "32px" : "24px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref21) {
  var nav = _ref21.nav;
  return nav ? "16px" : "24px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref22) {
  var large = _ref22.large;
  return large ? "32px" : "16px";
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJUeXBlZFRleHQiLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsT0FBTyxHQUFHQyx5RUFBSDtBQUFBO0FBQUE7QUFBQSw2U0FDUCxVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFsQztBQUFBLENBRE8sRUFFQSxVQUFDRCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDRSxHQUFOLEdBQVksS0FBWixHQUFvQixRQUFoQztBQUFBLENBRkEsRUFHUCxVQUFDRixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDRyxTQUFOLEdBQWtCLEdBQWxCLEdBQXdCLGFBQXBDO0FBQUEsQ0FITyxFQVdULFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVhTLEVBZ0JULFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQWhCUyxFQWlCTCxVQUFDUCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDRyxTQUFO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QSxNQUFHZ0IsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZ0JBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBakM7QUFBQSxDQVRVLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmOGZkZDI5NjJhMTRlNjczNmRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmdyaWQgPyBcImdyaWRcIiA6IFwiZmxleFwiKX07XG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gKHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwiKX07XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjMycHggNDhweCAwXCIpfTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMTZweCAxNnB4IDBcIil9O1xuXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNjVweFwiIDogXCI1NnB4XCIpfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNzJweFwiIDogXCI1NnB4XCIpfTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMjEuNTdkZWcsXG4gICAgI2ZmZmZmZiAxOC43NyUsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2KSA2MC4xNSVcbiAgKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAvLyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNThweCAwIDE2cHhcIiA6IFwiMFwiKX07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1NnB4XCIgOiBcIjQ4cHhcIil9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjU2cHhcIiA6IFwiNDhweFwiKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjQwcHggMCAxMnB4XCIgOiBcIjBcIil9O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMjhweFwiIDogXCIzMnB4XCIpfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCIzMnB4XCIgOiBcIjQwcHhcIil9O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjE2cHggMCA4cHhcIiA6IFwiMFwiKX07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVHlwZWRUZXh0ID0gc3R5bGVkLmgyYFxuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNTJweFwiIDogXCI0NnB4XCIpfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNTJweFwiIDogXCI0NnB4XCIpfTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMjEuNTdkZWcsXG4gICAgI2ZmZmZmZiAxOC43NyUsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2KSA2MC4xNSVcbiAgKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAvLyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNThweCAwIDE2cHhcIiA6IFwiMFwiKX07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI0NnB4XCIgOiBcIjM4cHhcIil9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjQ2cHhcIiA6IFwiMzhweFwiKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjQwcHggMCAxMnB4XCIgOiBcIjBcIil9O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMjhweFwiIDogXCIzMnB4XCIpfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCIzMnB4XCIgOiBcIjQwcHhcIil9O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjE2cHggMCA4cHhcIiA6IFwiMFwiKX07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1ib3R0b206IDMuNnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA2NzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWF4LXdpZHRoOiA2NzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuY29sb3JBbHRcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpXCJ9O1xuXG4gIG1hcmdpbjogJHsocHJvcHMpID0+IChwcm9wcy5kaXZpZGVyID8gXCI0cmVtIDBcIiA6IFwiXCIpfTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgU2VjdGlvblN1YlRleHQgPSBzdHlsZWQucGBcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogNjcycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMzKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjMGYxNjI0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDQxNjk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSxcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkJhY2sgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMTUwcHhcIiA6IFwiMjYycHhcIil9O1xuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjUycHhcIiA6IFwiNjRweFwiKX07XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIyNHB4XCIpfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogJHsoeyBhbHQsIGZvcm0gfSkgPT4gKGFsdCB8fCBmb3JtID8gXCIwXCIgOiBcIjAgMCA4MHB4XCIpfTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+XG4gICAgYWx0XG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZmNjIyZSAwJSwgI0IxMzNGRiAxMDAlKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKVwifTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiAoZGlzYWJsZWQgPyBcIi41XCIgOiBcIjFcIil9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMTUwcHhcIiA6IFwiMTg0cHhcIil9O1xuICAgIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiNTJweFwiIDogXCI0OHB4XCIpfTtcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMTZweFwiKX07XG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMFwiIDogXCI2NHB4XCIpfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjBcIiA6IFwiMzJweFwiKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PlxuICAgIGFsdFxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSlcIn07XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gKGRpc2FibGVkID8gXCIuNVwiIDogXCIxXCIpfTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMjRweFwiKX07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT5cbiAgICBkaXNhYmxlZFxuICAgICAgPyBcImluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKVwiXG4gICAgICA6IFwibm9uZVwifTtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSxcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMGRiZDggMCUsICNiMTMzZmYgMTAwJSk7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXG4gICAgICBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIyMHB4XCIgOiBcIjE2cHhcIil9O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyBcIjI0cHhcIiA6IFwiMTZweFwiKX07XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIxNnB4XCIgOiBcIjhweFwiKX07XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMFwiIDogXCI4cHhcIil9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua0ljb25JbWcgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIzMnB4XCIgOiBcIjI0cHhcIil9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBoZWlnaHQ6ICR7KHsgbmF2IH0pID0+IChuYXYgPyBcIjE2cHhcIiA6IFwiMjRweFwiKX07XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMzJweFwiIDogXCIxNnB4XCIpfTtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=