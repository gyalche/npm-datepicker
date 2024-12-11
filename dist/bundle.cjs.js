'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var Atoms = require('components/Atoms');
var styled = require('styled-components');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var _excluded = ["mt", "mr", "mb", "ml", "w", "compact", "isInvalid", "name", "value", "onChange", "input"];
var _templateObject$1;
var StyledInput = styled.input.withConfig({
  shouldForwardProp: function shouldForwardProp(prop) {
    return !['isInvalid', 'compact', 'w', 'mt', 'mr', 'mb', 'ml'].includes(prop);
  }
})(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  background: var(--rds-color-neutral-0);\n  border: ", ";\n  border-radius: 4px;\n  color: var(--rds-color-neutral-10);\n  height: ", ";\n  margin-top: ", ";\n  margin-right: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  padding: ", ";\n  width: ", ";\n\n  &::placeholder {\n    color: var(--rds-color-neutral-5);\n  }\n\n  &:hover {\n    border: 1px solid var(--rds-color-primary-1-normal);\n  }\n\n  &:disabled {\n    background-color: var(--rds-color-neutral-2);\n    border: 1px solid var(--rds-color-neutral-3);\n    color: var(--rds-color-neutral-5);\n  }\n"])), function (_ref) {
  var isInvalid = _ref.isInvalid;
  return isInvalid ? '1px solid var(--rds-color-secondary-3-normal)' : '1px solid var(--rds-color-neutral-3)';
}, function (_ref2) {
  var compact = _ref2.compact;
  return compact ? '32px' : '40px';
}, function (_ref3) {
  var mt = _ref3.mt;
  return mt;
}, function (_ref4) {
  var mr = _ref4.mr;
  return mr;
}, function (_ref5) {
  var mb = _ref5.mb;
  return mb;
}, function (_ref6) {
  var ml = _ref6.ml;
  return ml;
}, function (_ref7) {
  var compact = _ref7.compact;
  return compact ? '6px 8px' : '10px 8px';
}, function (_ref8) {
  var w = _ref8.w;
  return w;
});
var Input = /*#__PURE__*/React.forwardRef(function (_ref9, ref) {
  var mt = _ref9.mt,
    mr = _ref9.mr,
    mb = _ref9.mb,
    ml = _ref9.ml,
    w = _ref9.w,
    compact = _ref9.compact,
    isInvalid = _ref9.isInvalid,
    name = _ref9.name,
    value = _ref9.value,
    onChange = _ref9.onChange,
    input = _ref9.input,
    props = _objectWithoutProperties(_ref9, _excluded);
  return /*#__PURE__*/React.createElement(StyledInput, _extends({
    ref: ref,
    name: name !== null && name !== void 0 ? name : input === null || input === void 0 ? void 0 : input.name,
    value: value !== null && value !== void 0 ? value : input === null || input === void 0 ? void 0 : input.value,
    onChange: onChange !== null && onChange !== void 0 ? onChange : input === null || input === void 0 ? void 0 : input.onChange,
    mt: mt,
    mr: mr,
    mb: mb,
    ml: ml,
    w: w,
    compact: compact,
    isInvalid: isInvalid
  }, props));
});
Input.displayName = 'Input';
Input.propTypes = {
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  w: PropTypes.string,
  compact: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isInvalid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  input: PropTypes.object
};
Input.defaultProps = {
  mt: '0',
  mr: '0',
  mb: '0',
  ml: '0',
  w: 'auto',
  compact: false,
  isInvalid: false
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33;
var DatePickerContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  padding: 2px;\n  border-radius: 8px;\n"])));
var InputContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 3px;\n  align-items: center;\n  justify-content: center;\n"])));
var InputWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  color: var(--rds-color-neutral-5);\n  border-radius: 5px;\n  margin-left: ", ";\n"])), function (_ref) {
  var isTimeRange = _ref.isTimeRange,
    isRangePicker = _ref.isRangePicker;
  return (isTimeRange || isRangePicker) && '1px';
});
var InputFieldStyle = styled(Input)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  outline: ", ";\n  line-height: 22.4px;\n  padding-right: 1px;\n  font-size: 14px;\n\n  &:hover {\n    border: ", "\n  };\n\n  &:focus {\n    border: ", ";\n  };\n  &::placeholder {\n    color: var(--rds-color-neutral-6);\n    padding: 0;\n  };\n"])), function (_ref2) {
  var width = _ref2.width;
  return "".concat(width, "px");
}, function (_ref3) {
  var height = _ref3.height;
  return "".concat(height, "px");
}, function (_ref4) {
  var error = _ref4.error,
    activeSecondInput = _ref4.activeSecondInput;
  return error ? '1px solid red' : activeSecondInput && '1px solid var(--rds-color-primary-1-normal)';
}, function (_ref5) {
  var error = _ref5.error;
  return error && 'none';
}, function (_ref6) {
  var error = _ref6.error;
  return error && '1px solid red';
}, function (_ref7) {
  var activeSecondInput = _ref7.activeSecondInput;
  return activeSecondInput && true;
});
var IconWrapper = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  right: 4px;\n  position: absolute;\n  top: 20px;\n  transform: translateY(-50%);\n  width: 24px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var CalendarHeader = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--rds-color-neutral-8);\n  padding: 12px 12px 0 12px;\n  position: relative;\n  margin-top: -60px;\n"])));
var WeekdayHeader = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: ", ";\n  padding-bottom: 10px;\n"])), function (_ref8) {
  var isSaturday = _ref8.isSaturday,
    isSunday = _ref8.isSunday;
  return isSaturday ? 'var(--rds-color-teritary-2-dark)' : isSunday ? 'var(--rds-color-secondary-3-deep)' : 'var(--rds-color-neutral-7)';
});
var HeaderIcons = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  z-index: 9999;\n  display: flex;\n  flex-wrap: nowrap;\n  margin-left: ", ";\n"])), function (_ref9) {
  var m = _ref9.m;
  return m && m;
});
var CalendarContainer = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 340px;\n  height: 320px; \n  padding: 10px;\n  background-color: var(--rds-color-neutral-0);\n"])));
var DaysContainer = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  margin-top: ", "\n"])), function (_ref10) {
  var secondCalendar = _ref10.secondCalendar;
  return secondCalendar && '-8px';
});
var Day = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 38px;\n  text-align: center;\n  font-size: 12px;\n  border: ", ";\n  cursor: ", ";\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n  pointer-events: ", ";\n  box-shadow: ", ";\n  &:hover {\n    background-color: ", ";\n\n    border-radius: 4px;\n  };\n"])), function (_ref11) {
  var currentDate = _ref11.currentDate;
  return currentDate && '1px solid var(--rds-color-primary-1-normal)';
}, function (_ref12) {
  var isDisabled = _ref12.isDisabled;
  return isDisabled ? 'not-allowed' : 'pointer';
}, function (_ref13) {
  var isSelected = _ref13.isSelected,
    isRangePicker = _ref13.isRangePicker,
    currentDate = _ref13.currentDate,
    isEndSelect = _ref13.isEndSelect,
    isToday = _ref13.isToday,
    isKeyboardSelect = _ref13.isKeyboardSelect;
  if (!isRangePicker || isSelected && isToday || isKeyboardSelect && !isEndSelect) return '4px';
  if (currentDate && !isSelected) return '4px';
  if (isSelected && isRangePicker && !isEndSelect) return '4px 0px 0px 4px';
  if (isSelected && !isRangePicker) return '4px';
  if (isSelected && isEndSelect) return '0px 4px 4px 0px';
}, function (_ref14) {
  var isSelected = _ref14.isSelected,
    isInRange = _ref14.isInRange,
    isInHoverRange = _ref14.isInHoverRange,
    isKeyboardSelect = _ref14.isKeyboardSelect,
    isDisabled = _ref14.isDisabled,
    currentDate = _ref14.currentDate;
  if (isKeyboardSelect && isKeyboardSelect !== isSelected && !isDisabled && isKeyboardSelect !== currentDate) return 'var(--rds-color-chart-1)';
  if (isSelected) return 'var(--rds-color-primary-1-dark)';
  if (isInRange || isInHoverRange) return 'var(--rds-color-primary-1-subtle)';
  return 'transparent';
}, function (_ref15) {
  var isSaturday = _ref15.isSaturday,
    isSunday = _ref15.isSunday,
    isSelected = _ref15.isSelected,
    isDisabled = _ref15.isDisabled,
    currentDate = _ref15.currentDate,
    isKeyboardSelect = _ref15.isKeyboardSelect;
  if (isSelected) return 'var(--rds-color-neutral-0)';
  if (isDisabled) return 'var(--rds-color-neutral-4)';
  if (isSaturday && !isDisabled) return 'var(--rds-color-teritary-2-normal)';
  if (isSunday && !isDisabled) return 'var(--rds-color-secondary-3-normal)';
  if (currentDate && !isKeyboardSelect) return 'var(--rds-color-primary-1-normal)';
  if (isKeyboardSelect && !isSaturday && !isSunday && isKeyboardSelect !== currentDate) return 'var(--rds-color-neutral-0)';
}, function (_ref16) {
  var isDisabled = _ref16.isDisabled;
  return isDisabled ? 'none' : 'auto';
}, function (_ref17) {
  var isSelected = _ref17.isSelected;
  return isSelected && '0px 2px 4px 0px var(--rds-color-neutral-5)';
}, function (_ref18) {
  var isDisabled = _ref18.isDisabled,
    isSelected = _ref18.isSelected,
    isKeyboardSelect = _ref18.isKeyboardSelect;
  if (!isDisabled && !isSelected && !isKeyboardSelect) return 'var(--rds-color-primary-1-subtle)';
  if (isKeyboardSelect) return 'var(--rds-color-chart-1)';
});
var CalendarWrapper = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  border: 1px solid var(--rds-color-neutral-3);\n  box-shadow: 0px 4px 8px 0px var(--rds-color-neutral-5);\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 999;\n  margin-top: 48px;\n  margin-left: ", ";\n"])), function (_ref19) {
  var isRangePicker = _ref19.isRangePicker,
    isDoubleView = _ref19.isDoubleView;
  return !isRangePicker ? '215px' : isRangePicker && isDoubleView ? '410px' : '65px';
});
var CalendarWrapperEnd = styled(CalendarWrapper)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-left: ", ";\n"])), function (_ref20) {
  var isDoubleView = _ref20.isDoubleView;
  return isDoubleView ? '407px' : '377px';
});
var Calenders = styled.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 5px;\n  border-radius: 4px;\n"])));
var CalenderMonths = styled.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  color: var(--rds-color-neutral-9);\n  text-align: center;\n  padding-bottom: 20px;\n  font-size: 17px;\n  font-weight: 700;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n"])));
styled.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  border-radius: 8px;\n"])));
styled.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--rds-color-neutral-3);\n  border-radius: 4px;\n  width: ", ";\n  height: 40px;\n  gap: 2px;\n"])), function (_ref21) {
  var is12Hour = _ref21.is12Hour;
  return is12Hour ? '120px' : '100px';
});
styled(Input)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  background: none;\n  font-size: 14px;\n  width: ", ";\n  text-align: center;\n  outline: none;\n  border: none;\n  &:hover {\n    border: none;\n  };\n"])), function (_ref22) {
  var is12Hour = _ref22.is12Hour;
  return is12Hour ? '80px' : '60px';
});
var InputIcon = styled.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  color: var(--rds-color-neutral-5);\n  font-size: 15px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  text-align: center;\n  margin-top: 5px;\n  outline: none;\n"])));
var Dropdown = styled.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 30px;\n  left: ", ";\n  width: ", ";\n  margin-left: ", ";\n  border-radius: 4px;\n  z-index: 9999;\n  display: flex;\n  height: 260px;\n  overflow-y: hidden;\n  box-shadow: 0px 4px 8px 0px var(--rds-color-neutral-5);\n  margin-top: 18px;\n  background-color: var(--rds-color-neutral-0);\n"])), function (_ref23) {
  var is12Hour = _ref23.is12Hour;
  return !is12Hour && '-10px';
}, function (_ref24) {
  var is12Hour = _ref24.is12Hour;
  return is12Hour ? '150px' : '100px';
}, function (_ref25) {
  var is12Hour = _ref25.is12Hour,
    isTimeRange = _ref25.isTimeRange;
  if (is12Hour && !isTimeRange) return '57px';
  if (!is12Hour) return '12px';
  if (is12Hour && isTimeRange) return '-70px';
});
styled(Dropdown)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin-left: ", ";\n"])), function (_ref26) {
  var is12Hour = _ref26.is12Hour;
  if (is12Hour) return '185px';
  if (!is12Hour) return '130px';
  return '50px';
});
styled.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 7px 5px;\n  border-bottom: 1px solid var(--rds-color-neutral-2);\n"])));
styled.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
styled.ul(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 50%;\n  max-height: 260px;\n  overflow-y: auto;\n  border-right: 1px solid var(--rds-color-neutral-2);\n"])));
styled.ul(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 50%;\n"])));
styled.li(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  padding: 10px;\n  cursor: pointer;\n  text-align: center;\n  font-size: 12px;\n  color: ", ";\n  background-color: ", ";\n  &:hover {\n    background-color: var(--rds-color-neutral-1);\n    color: var(--rds-color-neutral-11);\n  }\n"])), function (_ref27) {
  var selected = _ref27.selected,
    highlighted = _ref27.highlighted;
  if (selected) return 'var(--rds-color-primary-1-dark)';
  if (highlighted) return 'var(--rds-color-neutral-1)';
}, function (_ref28) {
  var selected = _ref28.selected,
    highlighted = _ref28.highlighted;
  if (selected) return 'var(--rds-color-primary-1-subtle)';
  if (highlighted) return 'var(--rds-color-chart-1)';
});
var NextIcon = styled.img(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  font-size: 25px;\n  color: var(--rds-color-neutral-8);\n"])));
var CalendarIconBtn = styled.button(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover {\n    background-color: var(--rds-color-neutral-1);\n    color: black;\n  };\n  &:focus {\n    background-color: var(--rds-color-neutral-1);\n    color: black;\n  }\n"])));
var CalendarIcon = styled.img(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  margin-top: 5px;\n"])));
styled.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"])));
var TextAreaYearMonth = styled.span(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  cursor: ", ";\n  z-index: 9999;\n  &:hover {\n    background-color: ", ";\n    color: black;\n  };\n  padding-left: 7px;\n  padding-right: 7px;\n  border-radius: 5px;\n\n  &:focus {\n    background-color: red;\n    colo: green;\n  }\n"])), function (_ref29) {
  var openDecade = _ref29.openDecade;
  return !openDecade ? 'pointer' : 'auto';
}, function (_ref30) {
  var openDecade = _ref30.openDecade;
  return !openDecade && 'var(--rds-color-neutral-1)';
});
var DecadeGrid = styled.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 10px;\n  border-radius: 8px;\n  overflow: scroll;\n  padding: 20px 10px;\n  margin-top: -10px;\n  height: 250px;\n"])));
var DecadeButton = styled.button(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  background-color: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  width: 96.33px;\n  margin: 8px 0px;\n  padding: 9px 15px;\n  border: ", ";\n  color: ", ";\n  background-color: ", ";\n  &:hover {\n   background-color: ", "; \n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active {\n    color: var(--rds-color-primary-1-normal);\n    border: 1px solid var(--rds-color-primary-1-normal);\n  }\n"])), function (_ref31) {
  var selected = _ref31.selected;
  return selected ? '1px solid var(--rds-color-primary-1-normal)' : 'none';
}, function (_ref32) {
  var selected = _ref32.selected,
    keyboardSelect = _ref32.keyboardSelect;
  if (selected) return 'var(--rds-color-primary-1-normal)';
  if (keyboardSelect) return 'var(--rds-color-neutral-1)';
}, function (_ref33) {
  var keyboardSelect = _ref33.keyboardSelect;
  return keyboardSelect && 'var(--rds-color-chart-1)';
}, function (_ref34) {
  var keyboardSelect = _ref34.keyboardSelect;
  return !keyboardSelect && 'var(--rds-color-neutral-1)';
});

var getDaysInMonth = function getDaysInMonth(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid Date Provided');
  }
  var year = date.getFullYear();
  var month = date.getMonth();

  // Get the first day of the month
  var firstDayOfMonth = new Date(year, month, 1).getDay();

  // Get the last day of the month
  var lastDateOfMonth = new Date(year, month + 1, 0);
  var daysInMonth = lastDateOfMonth.getDate();
  var days = [];

  // Add the last few days of the previous month
  for (var i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month, -i),
      isCurrentMonth: false
    });
  }

  // Add all days in the current month
  for (var _i = 1; _i <= daysInMonth; _i++) {
    days.push({
      date: new Date(year, month, _i),
      isCurrentMonth: true
    });
  }

  // Add the first few days of the next month
  var lastDayOfMonth = lastDateOfMonth.getDay();
  for (var _i2 = 1; _i2 < 7 - lastDayOfMonth; _i2++) {
    days.push({
      date: new Date(year, month + 1, _i2),
      isCurrentMonth: false
    });
  }
  return days;
};
var normalizeDate = function normalizeDate(date) {
  return new Date(date).setHours(0, 0, 0, 0);
};
var getLocalizedMonthName = function getLocalizedMonthName(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    month: 'long'
  }).format(date);
};

var closeOpenModal = function closeOpenModal(callback) {
  React.useEffect(function () {
    var closeTheOpenModel = function closeTheOpenModel(event) {
      if (event.key === 'Escape') {
        if (typeof callback === 'function') {
          try {
            callback();
          } catch (error) {
          }
        }
      }
    };
    document.addEventListener('keydown', closeTheOpenModel);
    return function () {
      document.removeEventListener('keydown', closeTheOpenModel);
    };
  }, [callback]);
};

var DecadeSelector = function DecadeSelector(_ref) {
  var currentDecadeStart = _ref.currentDecadeStart,
    selectedDecade = _ref.selectedDecade,
    handleDecadeSelect = _ref.handleDecadeSelect;
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    focusedButton = _useState2[0],
    setFocusedButton = _useState2[1];
  var buttonRefs = React.useRef([]);
  React.useEffect(function () {
    var _buttonRefs$current$s;
    var selectedIndex = selectedDecade ? Math.max(0, Math.min((selectedDecade - currentDecadeStart) / 10 + 1, buttonRefs.current.length - 1)) : 1;
    setFocusedButton(selectedIndex);
    (_buttonRefs$current$s = buttonRefs.current[selectedIndex]) === null || _buttonRefs$current$s === void 0 || _buttonRefs$current$s.focus();
  }, [selectedDecade, currentDecadeStart]);
  var handleKeyDown = function handleKeyDown(event, index) {
    var newIndex;
    var totalButtons = buttonRefs.current.length;
    switch (event.key) {
      case 'ArrowRight':
        newIndex = (index + 1) % totalButtons;
        break;
      case 'ArrowLeft':
        newIndex = (index - 1 + totalButtons) % totalButtons;
        break;
      case 'ArrowDown':
        newIndex = index + 3 < totalButtons ? index + 3 : index;
        break;
      case 'ArrowUp':
        newIndex = index - 3 >= 0 ? index - 3 : index;
        break;
      // case 'Enter':
      //   buttonRefs.current[index].click();
      //   return;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (newIndex >= 0 && newIndex < totalButtons && buttonRefs !== null && buttonRefs !== void 0 && buttonRefs.current[newIndex]) {
      setFocusedButton(newIndex);
      buttonRefs.current[newIndex].focus();
    }
  };
  return /*#__PURE__*/React.createElement(DecadeGrid, null, /*#__PURE__*/React.createElement(DecadeButton, {
    disabled: true,
    ref: function ref(el) {
      return buttonRefs.current[0] = el;
    }
  }, currentDecadeStart - 10, " - ", currentDecadeStart - 1), Array.from({
    length: 10
  }, function (_, index) {
    var decadeStart = Math.floor(currentDecadeStart / 10) * 10 + index * 10;
    return /*#__PURE__*/React.createElement(DecadeButton, {
      selected: selectedDecade === decadeStart,
      key: decadeStart,
      ref: function ref(el) {
        return buttonRefs.current[index + 1] = el;
      },
      onClick: function onClick() {
        return handleDecadeSelect(decadeStart);
      },
      onKeyDown: function onKeyDown(event) {
        return handleKeyDown(event, index + 1);
      },
      tabIndex: 0,
      keyboardSelect: focusedButton === index + 1 && selectedDecade !== decadeStart
    }, decadeStart, " - ", decadeStart + 9);
  }), /*#__PURE__*/React.createElement(DecadeButton, {
    disabled: true,
    ref: function ref(el) {
      return buttonRefs.current[11] = el;
    }
  }, currentDecadeStart + 100, " - ", currentDecadeStart + 109));
};
DecadeSelector.propTypes = {
  currentDecadeStart: PropTypes.number.isRequired,
  selectedDecade: PropTypes.number,
  handleDecadeSelect: PropTypes.func.isRequired
};

var YearSelector = function YearSelector(_ref) {
  var selectedDecade = _ref.selectedDecade,
    yearsInDecade = _ref.yearsInDecade,
    setCurrentMonth = _ref.setCurrentMonth,
    setOpenDecade = _ref.setOpenDecade,
    setShowYears = _ref.setShowYears,
    currentMonth = _ref.currentMonth,
    showYears = _ref.showYears,
    setYearSelected = _ref.setYearSelected;
  var _useState = React.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectedYearIndex = _useState2[0],
    setSelectedYearIndex = _useState2[1];
  var buttonRefs = React.useRef([]);
  React.useEffect(function () {
    var currentYear = new Date().getFullYear();
    var currentYearIndex = yearsInDecade.indexOf(currentYear);
    setSelectedYearIndex(currentYearIndex !== -1 ? currentYearIndex : -1);
  }, [yearsInDecade]);
  var handleKeyDown = function handleKeyDown(event) {
    var _buttonRefs$current$n;
    var newIndex = selectedYearIndex;
    var totalButtons = buttonRefs.current.length;
    switch (event.key) {
      case 'ArrowRight':
        newIndex = (selectedYearIndex + 1) % totalButtons;
        break;
      case 'ArrowLeft':
        newIndex = (selectedYearIndex - 1 + totalButtons) % totalButtons;
        break;
      case 'ArrowDown':
        newIndex = selectedYearIndex + 3 < totalButtons ? selectedYearIndex + 3 : selectedYearIndex;
        break;
      case 'ArrowUp':
        newIndex = selectedYearIndex - 3 >= 0 ? selectedYearIndex - 3 : selectedYearIndex;
        break;
      case 'Enter':
        buttonRefs.current[selectedYearIndex].click();
        return;
      default:
        return;
    }
    event.preventDefault();
    setSelectedYearIndex(newIndex);
    (_buttonRefs$current$n = buttonRefs.current[newIndex]) === null || _buttonRefs$current$n === void 0 || _buttonRefs$current$n.focus();
  };
  React.useEffect(function () {
    if (showYears) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedYearIndex, showYears]);
  var handleYearSelection = function handleYearSelection(year, event) {
    if (typeof year !== 'number' && year.toString().length !== 4) return;
    event.preventDefault();
    setCurrentMonth(new Date(year, currentMonth.getMonth(), 1));
    setOpenDecade(false);
    setShowYears(false);
    setYearSelected(true);
  };
  return /*#__PURE__*/React.createElement(DecadeGrid, null, /*#__PURE__*/React.createElement(DecadeButton, {
    disabled: true
  }, selectedDecade - 1), yearsInDecade.map(function (year, index) {
    return /*#__PURE__*/React.createElement(DecadeButton, {
      key: year,
      ref: function ref(el) {
        return buttonRefs.current[index] = el;
      },
      onClick: function onClick(event) {
        return handleYearSelection(year, event);
      },
      tabIndex: 0
      // selected={selectedYearIndex === index}
      ,
      keyboardSelect: selectedYearIndex === index
    }, year);
  }), /*#__PURE__*/React.createElement(DecadeButton, {
    disabled: true
  }, selectedDecade + 10));
};
YearSelector.propTypes = {
  selectedDecade: PropTypes.number.isRequired,
  yearsInDecade: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCurrentMonth: PropTypes.func.isRequired,
  setOpenDecade: PropTypes.func.isRequired,
  setShowYears: PropTypes.func,
  currentMonth: PropTypes.instanceOf(Date),
  showYears: PropTypes.bool,
  setYearSelected: PropTypes.bool
};

var MonthSelector = function MonthSelector(_ref) {
  var locale = _ref.locale,
    setCurrentMonth = _ref.setCurrentMonth,
    setOpenMonth = _ref.setOpenMonth,
    date = _ref.date,
    currentMonth = _ref.currentMonth;
  var _useState = React.useState(currentMonth || 0),
    _useState2 = _slicedToArray(_useState, 2),
    focusedButton = _useState2[0],
    setFocusedButton = _useState2[1];
  var buttonRefs = React.useRef([]);
  React.useEffect(function () {
    var _buttonRefs$current$f;
    (_buttonRefs$current$f = buttonRefs.current[focusedButton]) === null || _buttonRefs$current$f === void 0 || _buttonRefs$current$f.focus();
  }, [focusedButton]);
  var handleMonthSelect = function handleMonthSelect(monthIndex) {
    if (!(date instanceof Date) || isNaN(date)) {
      return;
    }
    setCurrentMonth(new Date(date.getFullYear(), monthIndex, 1));
    setOpenMonth(false);
  };
  var handleKeyDown = function handleKeyDown(event, index) {
    var newIndex;
    var totalButtons = buttonRefs.current.length;
    switch (event.key) {
      case 'ArrowRight':
        newIndex = (index + 1) % totalButtons;
        break;
      case 'ArrowLeft':
        newIndex = (index - 1 + totalButtons) % totalButtons;
        break;
      case 'ArrowDown':
        newIndex = index + 3 < totalButtons ? index + 3 : index;
        break;
      case 'ArrowUp':
        newIndex = index - 3 >= 0 ? index - 3 : index;
        break;
      case 'Enter':
        buttonRefs.current[index].click();
        return;
      default:
        return;
    }
    event.preventDefault();
    setFocusedButton(newIndex);
  };
  return /*#__PURE__*/React.createElement(DecadeGrid, null, Array.from({
    length: 12
  }, function (_, index) {
    return /*#__PURE__*/React.createElement(DecadeButton, {
      selected: currentMonth === index,
      key: index,
      ref: function ref(el) {
        return buttonRefs.current[index] = el;
      },
      onClick: function onClick() {
        return handleMonthSelect(index);
      },
      onKeyDown: function onKeyDown(event) {
        return handleKeyDown(event, index);
      },
      tabIndex: 0,
      keyboardSelect: focusedButton === index && currentMonth !== index
    }, getLocalizedMonthName(new Date(0, index), locale));
  }));
};
MonthSelector.propTypes = {
  locale: PropTypes.string.isRequired,
  setCurrentMonth: PropTypes.func.isRequired,
  setOpenMonth: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  currentMonth: PropTypes.number
};

var Calendar = function Calendar(_ref) {
  var date = _ref.date,
    locale = _ref.locale,
    startDate = _ref.startDate,
    endDate = _ref.endDate,
    weekdays = _ref.weekdays,
    handleSingleDate = _ref.handleSingleDate,
    handleDateRangeClick = _ref.handleDateRangeClick,
    isRangePicker = _ref.isRangePicker,
    isInRange = _ref.isInRange,
    isInHoverRange = _ref.isInHoverRange,
    setHoveredDate = _ref.setHoveredDate,
    isSelected = _ref.isSelected,
    enableKeyboard = _ref.enableKeyboard,
    disableKeyboard = _ref.disableKeyboard,
    handlePrevYear = _ref.handlePrevYear,
    handleNextYear = _ref.handleNextYear,
    handlePrevMonth = _ref.handlePrevMonth,
    handleNextMonth = _ref.handleNextMonth,
    setDates = _ref.setDates,
    isDoubleView = _ref.isDoubleView,
    disableHeader = _ref.disableHeader,
    openCalender = _ref.openCalender,
    openCalenderEnd = _ref.openCalenderEnd;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    openDecade = _useState2[0],
    setOpenDecade = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openMonth = _useState4[0],
    setOpenMonth = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showYears = _useState6[0],
    setShowYears = _useState6[1];
  var _useState7 = React.useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedDecade = _useState8[0],
    setSelectedDecade = _useState8[1];
  var _useState9 = React.useState(date),
    _useState10 = _slicedToArray(_useState9, 2),
    currentMonth = _useState10[0],
    setCurrentMonth = _useState10[1];
  var _useState11 = React.useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    yearSelected = _useState12[0],
    setYearSelected = _useState12[1];
  var _useState13 = React.useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    tabCount = _useState14[0],
    setTabCount = _useState14[1];
  var doublePrevYearRef = React.useRef(null);
  var doublePrevMonthRef = React.useRef(null);
  var doubleNextYearRef = React.useRef(null);
  var doubleNextMonthRef = React.useRef(null);
  var doubleViewRefs = {
    1: doublePrevYearRef,
    2: doublePrevMonthRef,
    3: doubleNextMonthRef,
    4: doubleNextYearRef
  };
  var days = getDaysInMonth(currentMonth);
  var currentYear = new Date(Date.now()).getFullYear();
  var currentDecadeStart = Math.floor(currentYear / 10) * 10;

  // const displayYear = new Date(currentMonth).getFullYear() !== currentYear && currentMonth.getFullYear();
  var displayYear = currentMonth.getFullYear();
  var yearsInDecade = Array.from({
    length: 10
  }, function (_, index) {
    return selectedDecade + index;
  });
  var handleMouseEnter = React.useCallback(function (day) {
    if (isRangePicker && startDate && !endDate && day instanceof Date) {
      setHoveredDate(day);
    }
  }, [startDate, endDate, isRangePicker, setHoveredDate]);
  var handleMouseLeave = function handleMouseLeave() {
    setHoveredDate(null);
  };
  var openSelectDecade = function openSelectDecade() {
    setOpenDecade(true);
    setShowYears(false);
    setOpenMonth(false);
    disableKeyboard();
  };
  var openSelectMonth = function openSelectMonth() {
    setOpenMonth(true);
    setOpenDecade(false);
    disableKeyboard();
  };
  var handleDecadeSelect = function handleDecadeSelect(decadeStart) {
    if (typeof decadeStart !== 'number' || decadeStart < 1000 || decadeStart > 9999) return;
    setSelectedDecade(decadeStart);
    setShowYears(true);
    disableKeyboard();
  };
  closeOpenModal(function () {
    return setOpenDecade(false), setShowYears(false);
  });
  var goToNextDecade = function goToNextDecade() {
    setSelectedDecade(function (currentDecade) {
      var nextDecade = currentDecade + 10;
      return nextDecade;
    });
  };
  var goToPreviousDecade = function goToPreviousDecade() {
    setSelectedDecade(function (currentDecade) {
      var previousDecade = currentDecade - 10;
      return previousDecade;
    });
  };
  React.useEffect(function () {
    setSelectedDecade(currentDecadeStart);
  }, []);
  React.useEffect(function () {
    if (currentMonth.getTime() !== date.getTime()) {
      setCurrentMonth(date);
    }
  }, [date]);
  React.useEffect(function () {
    if (!openDecade && !showYears) {
      enableKeyboard();
    }
  }, [showYears, openDecade]);
  React.useEffect(function () {
    setDates(currentMonth);
  }, [setDates]);
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(e) {
      if (openCalender || openCalenderEnd) {
        if (e.key === 'Tab') {
          var _buttons$nextIndex;
          e.preventDefault();
          disableKeyboard();
          if (e.shiftKey) {
            setTabCount(function (prevTabCount) {
              return prevTabCount === 1 ? 4 : prevTabCount - 1;
            });
          } else {
            setTabCount(function (prevTabCount) {
              return prevTabCount === 4 ? 1 : prevTabCount + 1;
            });
          }
          var selector = '[data-calendar-btn]';
          var buttons = document.querySelectorAll(selector);
          var focusedIndex = Array.from(buttons).findIndex(function (button) {
            return button === document.activeElement;
          });
          var nextIndex = e.shiftKey ? (focusedIndex - 1 + buttons.length) % buttons.length : (focusedIndex + 1) % buttons.length;
          (_buttons$nextIndex = buttons[nextIndex]) === null || _buttons$nextIndex === void 0 || _buttons$nextIndex.focus();
        }
      }
    };
    if (openCalender || openCalenderEnd) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openCalender, openCalenderEnd, tabCount, isDoubleView]);
  React.useEffect(function () {
    if (yearSelected) disableKeyboard();
    // enableKeyboard();
  }, [yearSelected]);
  React.useEffect(function () {
    if (isDoubleView) {
      var _doubleViewRefs$tabCo;
      (_doubleViewRefs$tabCo = doubleViewRefs[tabCount]) === null || _doubleViewRefs$tabCo === void 0 || (_doubleViewRefs$tabCo = _doubleViewRefs$tabCo.current) === null || _doubleViewRefs$tabCo === void 0 || _doubleViewRefs$tabCo.focus();
    }
  }, [tabCount, isDoubleView]);
  return /*#__PURE__*/React.createElement(CalendarContainer, {
    "data-testid": "calender-container"
  }, /*#__PURE__*/React.createElement(CalenderMonths, null, /*#__PURE__*/React.createElement(TextAreaYearMonth, {
    onClick: !showYears && openSelectDecade,
    openDecade: openDecade
  }, selectedDecade && openDecade ? "".concat(selectedDecade, " - ").concat(selectedDecade + 9) : displayYear), !openDecade && !openMonth && /*#__PURE__*/React.createElement(TextAreaYearMonth, {
    onClick: openSelectMonth
  }, getLocalizedMonthName(currentMonth, locale))), isDoubleView ? /*#__PURE__*/React.createElement(React.Fragment, null, disableHeader ? /*#__PURE__*/React.createElement(React.Fragment, null) : /*#__PURE__*/React.createElement(CalendarHeader, null, /*#__PURE__*/React.createElement(HeaderIcons, null, /*#__PURE__*/React.createElement(CalendarIconBtn, {
    ref: doublePrevYearRef,
    onClick: function onClick() {
      return handlePrevYear();
    }
  }, /*#__PURE__*/React.createElement(CalendarIcon, {
    name: "Interface-chevron-double-left"
  })), !openDecade && !openMonth && /*#__PURE__*/React.createElement(CalendarIconBtn, {
    ref: doublePrevMonthRef,
    onClick: function onClick() {
      return handlePrevMonth();
    }
  }, /*#__PURE__*/React.createElement(CalendarIcon, {
    name: "Interface-chevron-left"
  }))), /*#__PURE__*/React.createElement(HeaderIcons, {
    m: openDecade || openMonth ? '585px' : isRangePicker && isDoubleView && '520px'
  }, !openDecade && !openMonth && /*#__PURE__*/React.createElement(CalendarIconBtn, {
    ref: doubleNextMonthRef,
    onClick: function onClick() {
      return handleNextMonth();
    }
  }, /*#__PURE__*/React.createElement(CalendarIcon, {
    name: "Interface-chevron-right"
  })), /*#__PURE__*/React.createElement(CalendarIconBtn, {
    ref: doubleNextYearRef,
    onClick: function onClick() {
      return handleNextYear();
    }
  }, /*#__PURE__*/React.createElement(CalendarIcon, {
    name: "Interface-chevron-double-right"
  }))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CalendarHeader, null, /*#__PURE__*/React.createElement(HeaderIcons, null, /*#__PURE__*/React.createElement(CalendarIconBtn, {
    "data-calendar-btn": true,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      !openDecade ? handlePrevYear() : goToPreviousDecade();
    }
  }, /*#__PURE__*/React.createElement(CalendarIcon, {
    name: "Interface-chevron-double-left"
  })), !openDecade && !openMonth && /*#__PURE__*/React.createElement(CalendarIconBtn, {
    "data-calendar-btn": true,
    onClick: function onClick() {
      return handlePrevMonth();
    }
  }, /*#__PURE__*/React.createElement(CalendarIcon, {
    name: "Interface-chevron-left"
  }))), /*#__PURE__*/React.createElement(HeaderIcons, null, !openDecade && !openMonth && /*#__PURE__*/React.createElement(CalendarIconBtn, {
    "data-calendar-btn": true,
    onClick: function onClick() {
      return handleNextMonth();
    }
  }, /*#__PURE__*/React.createElement(CalendarIcon, {
    name: "Interface-chevron-right"
  })), /*#__PURE__*/React.createElement(CalendarIconBtn, {
    "data-calendar-btn": true,
    onClick: function onClick() {
      return !openDecade ? handleNextYear() : goToNextDecade();
    }
  }, /*#__PURE__*/React.createElement(CalendarIcon, {
    name: "Interface-chevron-double-right"
  }))))), !openDecade && !openMonth && /*#__PURE__*/React.createElement(DaysContainer, {
    secondCalendar: disableHeader
  }, weekdays.map(function (_ref2, index) {
    var day = _ref2.day,
      dayIndex = _ref2.dayIndex;
    return /*#__PURE__*/React.createElement(WeekdayHeader, {
      key: index,
      isSaturday: dayIndex === 6,
      isSunday: dayIndex === 0
    }, day);
  }), days.map(function (day, index) {
    var dayDate = day === null || day === void 0 ? void 0 : day.date;
    var isValidDate = dayDate instanceof Date && !isNaN(dayDate);
    if (!isValidDate) return null;
    var notCurrent = !(day !== null && day !== void 0 && day.isCurrentMonth);
    var dayOfWeek = dayDate === null || dayDate === void 0 ? void 0 : dayDate.getDay();
    return /*#__PURE__*/React.createElement(Day, {
      key: "".concat(day === null || day === void 0 ? void 0 : day.date, "-").concat(index),
      currentDate: normalizeDate(new Date()) === normalizeDate(dayDate),
      isSelected: normalizeDate(dayDate) === normalizeDate(startDate) || normalizeDate(dayDate) === normalizeDate(endDate),
      isEndSelect: normalizeDate(dayDate) !== normalizeDate(startDate),
      isKeyboardSelect: normalizeDate(dayDate) === normalizeDate(isSelected) && normalizeDate(dayDate) !== normalizeDate(startDate),
      isInRange: isInRange && isInRange(dayDate),
      isDisabled: normalizeDate(dayDate) < normalizeDate(new Date()) || notCurrent,
      isSaturday: dayOfWeek === 5,
      isSunday: dayOfWeek === 6,
      onClick: !isRangePicker ? function () {
        return handleSingleDate(dayDate);
      } : function () {
        return handleDateRangeClick(dayDate), enableKeyboard();
      },
      isInHoverRange: isInHoverRange && isInHoverRange(dayDate),
      onMouseEnter: function onMouseEnter() {
        return handleMouseEnter(dayDate);
      },
      onMouseLeave: handleMouseLeave,
      "data-testid": "day-".concat(dayDate.getDate()),
      isRangePicker: isRangePicker,
      isToday: normalizeDate(startDate) == normalizeDate(endDate)
    }, dayDate.getDate());
  })), openDecade && (!showYears ? /*#__PURE__*/React.createElement(DecadeSelector, {
    currentDecadeStart: currentDecadeStart,
    selectedDecade: selectedDecade,
    handleDecadeSelect: handleDecadeSelect
  }) : /*#__PURE__*/React.createElement(YearSelector, {
    selectedDecade: selectedDecade,
    yearsInDecade: yearsInDecade,
    currentMonth: currentMonth,
    setCurrentMonth: setDates,
    setOpenDecade: setOpenDecade,
    setShowYears: setShowYears,
    disableKeyboard: disableKeyboard,
    showYears: showYears,
    setYearSelected: setYearSelected
  })), openMonth && /*#__PURE__*/React.createElement(MonthSelector, {
    locale: locale,
    setCurrentMonth: setDates,
    setOpenMonth: setOpenMonth,
    date: date,
    currentMonth: currentMonth.getMonth()
  }));
};
Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  locale: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  weekdays: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSingleDate: PropTypes.func.isRequired,
  handleDateRangeClick: PropTypes.func.isRequired,
  isRangePicker: PropTypes.bool,
  isInRange: PropTypes.func,
  isInHoverRange: PropTypes.func,
  hoveredDate: PropTypes.instanceOf(Date),
  setHoveredDate: PropTypes.instanceOf(Date),
  isSelected: PropTypes.instanceOf(Date),
  enableKeyboard: PropTypes.func,
  disableKeyboard: PropTypes.func,
  handlePrevYear: PropTypes.func,
  handleNextYear: PropTypes.func,
  handlePrevMonth: PropTypes.func,
  handleNextMonth: PropTypes.func,
  setDates: PropTypes.any,
  isDoubleView: PropTypes.bool,
  disableHeader: PropTypes.bool,
  enabledKeyboardFunc: PropTypes.func,
  openCalender: PropTypes.func,
  openCalenderEnd: PropTypes.func
};

var InputField = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/React.createElement(InputFieldStyle, _extends({
    ref: ref
  }, props));
});
InputField.displayName = 'InputField';

var useClickOutside = function useClickOutside(ref, callback) {
  React.useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (typeof callback === 'function') {
          callback(event);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

var DatePicker = function DatePicker(_ref) {
  var isDoubleView = _ref.isDoubleView,
    isRangePicker = _ref.isRangePicker,
    initialValue = _ref.initialValue,
    locale = _ref.locale,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    error = _ref.error,
    placeholder = _ref.placeholder,
    isDateTimeStart = _ref.isDateTimeStart,
    isDateTimeEnd = _ref.isDateTimeEnd,
    setIsDateTimeStart = _ref.setIsDateTimeStart,
    setIsDateTimeEnd = _ref.setIsDateTimeEnd;
  var _useState = React.useState(new Date(Date.now())),
    _useState2 = _slicedToArray(_useState, 2),
    startDate = _useState2[0],
    setStartDate = _useState2[1];
  var _useState3 = React.useState(new Date(Date.now())),
    _useState4 = _slicedToArray(_useState3, 2),
    endDate = _useState4[0],
    setEndDate = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openCalender = _useState6[0],
    setOpenCalender = _useState6[1];
  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openCalenderEnd = _useState8[0],
    setOpenCalenderEnd = _useState8[1];
  var _useState9 = React.useState(new Date()),
    _useState10 = _slicedToArray(_useState9, 2),
    currentMonth = _useState10[0],
    setCurrentMonth = _useState10[1];
  var _useState11 = React.useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    dateRange = _useState12[0],
    setDateRange = _useState12[1];
  var _useState13 = React.useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    hoveredDate = _useState14[0],
    setHoveredDate = _useState14[1];
  var _useState15 = React.useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    weekdays = _useState16[0],
    setWeekdays = _useState16[1];
  var _useState17 = React.useState(new Date()),
    _useState18 = _slicedToArray(_useState17, 2),
    currentDate = _useState18[0],
    setCurrentDate = _useState18[1];
  var _useState19 = React.useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    firstInputFocus = _useState20[0],
    setFirstInputFocus = _useState20[1];
  var _useState21 = React.useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    secondInputFocus = _useState22[0],
    setSecondInputFocus = _useState22[1];
  var _useState23 = React.useState(true),
    _useState24 = _slicedToArray(_useState23, 2),
    enableKeyboard = _useState24[0],
    setEnableKeyboard = _useState24[1];
  var datePickerRef = React.useRef(null);
  var inputRefEnd = React.useRef(null);
  var inputRefStart = React.useRef(null);
  var handleDateRangeClick = React.useCallback(function (date) {
    var normalizedDate = normalizeDate(date);
    var today = normalizeDate(new Date());
    if (normalizedDate < today) return;
    if (!startDate || startDate && endDate) {
      setStartDate(date);
      setEndDate('');
      setDateRange([date, endDate]);
      onChange([date, endDate]);
    } else if (normalizedDate < normalizeDate(startDate)) {
      setStartDate(date);
      onChange([date, endDate]);
    } else {
      setEndDate(date);
      setDateRange([startDate, date]);
      onChange([startDate, date]);
      setOpenCalender(false);
      setOpenCalenderEnd(false);
    }
  }, [startDate, endDate]);
  var handleSingleDate = React.useCallback(function (date) {
    var normalizedDate = normalizeDate(date);
    var today = normalizeDate(new Date());
    if (normalizedDate < today) return;
    setStartDate(date);
    onChange(date);
  }, [setStartDate]);
  var isInRange = React.useCallback(function (day) {
    var normalizedDay = normalizeDate(day);
    var normalizedStartDate = normalizeDate(startDate);
    var normalizedEndDate = normalizeDate(endDate);
    return normalizedStartDate && normalizedEndDate && normalizedDay > normalizedStartDate && normalizedDay < normalizedEndDate;
  }, [startDate, endDate]);
  var handlePrevYear = React.useCallback(function () {
    setCurrentMonth(function (prevMonth) {
      return new Date(prevMonth.getFullYear() - 1, prevMonth.getMonth(), 1);
    });
  }, [setCurrentMonth]);
  var handleNextYear = React.useCallback(function () {
    setCurrentMonth(function (prevMonth) {
      return new Date(prevMonth.getFullYear() + 1, prevMonth.getMonth(), 1);
    });
  }, [setCurrentMonth]);
  var handlePrevMonth = React.useCallback(function () {
    setCurrentMonth(function (prevMonth) {
      return new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1);
    });
  }, [setCurrentMonth]);
  var handleNextMonth = React.useCallback(function () {
    setCurrentMonth(function (prevMonth) {
      return new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1);
    });
  }, [setCurrentMonth]);
  var isInHoverRange = React.useCallback(function (day) {
    if (!startDate || !hoveredDate) return false;
    var normalizedDay = normalizeDate(day);
    var normalizedStartDate = normalizeDate(startDate);
    var normalizedHoveredDate = normalizeDate(hoveredDate);
    return normalizedDay >= normalizedStartDate && normalizedDay <= normalizedHoveredDate || normalizedDay <= normalizedStartDate && normalizedDay >= normalizedHoveredDate;
  }, [startDate, hoveredDate]);
  var onChangeCurrent = React.useCallback(function (val) {
    if (!(val instanceof Date)) return;
    setCurrentMonth(val);
  }, [setCurrentMonth]);

  //custom hook to close the model
  useClickOutside(datePickerRef, function () {
    return setOpenCalender(false), setOpenCalenderEnd(false);
  });
  closeOpenModal(function () {
    return setOpenCalender(false), setOpenCalenderEnd(false);
  });
  var nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
  React.useEffect(function () {
    if (Array.isArray(initialValue) && isRangePicker) {
      setStartDate(initialValue[0]);
      setEndDate(initialValue[1]);
      setDateRange(initialValue);
    } else if (!isRangePicker) {
      setStartDate(initialValue);
      setEndDate(null);
    }
  }, [initialValue, isRangePicker]);
  React.useEffect(function () {
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDay + 1);
    var calculatedWeekdays = _toConsumableArray(Array(7).keys()).map(function (index) {
      var date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + index);
      return {
        day: new Intl.DateTimeFormat(locale, {
          weekday: 'short'
        }).format(date),
        dayIndex: date.getDay()
      };
    });
    setWeekdays(calculatedWeekdays);
  }, [locale]);
  var handleKeyDown = function handleKeyDown(e) {
    var today = new Date();
    var todayNormalized = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (!(currentDate instanceof Date)) return;
    var updateDate = function updateDate(changeFn) {
      setCurrentDate(function (prev) {
        var newDate = changeFn(prev);
        var newYear = newDate.getFullYear();
        var currentYear = currentMonth.getFullYear();
        var isNextMonth = newDate.getMonth() > currentMonth.getMonth();
        var isPrevMonth = newDate.getMonth() < currentMonth.getMonth();
        if (isNextMonth && newYear === currentYear) handleNextMonth();
        if (isPrevMonth && newYear === currentYear) handlePrevMonth();
        if (newYear > currentYear) handleNextMonth();
        if (newYear < currentYear) handlePrevMonth();
        return newDate < todayNormalized ? todayNormalized : newDate;
      });
    };
    var handleEnter = function handleEnter(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!isRangePicker) {
        handleSingleDate(currentDate);
      } else if (openCalender) {
        if ((startDate || endDate) && currentDate >= todayNormalized) {
          var _inputRefEnd$current;
          setStartDate(currentDate);
          setOpenCalender(false);
          setOpenCalenderEnd(true);
          inputRefEnd === null || inputRefEnd === void 0 || (_inputRefEnd$current = inputRefEnd.current) === null || _inputRefEnd$current === void 0 || _inputRefEnd$current.focus();
        } else if (!startDate && currentDate >= todayNormalized) {
          var _inputRefEnd$current2;
          setStartDate(currentDate);
          setOpenCalender(false);
          setOpenCalenderEnd(true);
          inputRefEnd === null || inputRefEnd === void 0 || (_inputRefEnd$current2 = inputRefEnd.current) === null || _inputRefEnd$current2 === void 0 || _inputRefEnd$current2.focus();
        }
      } else if (startDate) {
        setEndDate(currentDate);
        setHoveredDate(currentDate);
        setOpenCalenderEnd(false);
      } else if (openCalenderEnd && currentDate >= startDate) {
        setEndDate(currentDate);
        setHoveredDate(currentDate);
        setOpenCalenderEnd(false);
      }
    };
    switch (e.key) {
      case 'ArrowLeft':
        updateDate(function (prev) {
          return new Date(prev.setDate(prev.getDate() - 1));
        });
        break;
      case 'ArrowRight':
        updateDate(function (prev) {
          return new Date(prev.setDate(prev.getDate() + 1));
        });
        break;
      case 'ArrowUp':
        updateDate(function (prev) {
          return new Date(prev.setDate(prev.getDate() - 7));
        });
        break;
      case 'ArrowDown':
        updateDate(function (prev) {
          return new Date(prev.setDate(prev.getDate() + 7));
        });
        break;
      case 'Enter':
        handleEnter(e);
        break;
    }
  };
  var disableKeyboardFunc = function disableKeyboardFunc() {
    setEnableKeyboard(false);
  };
  var enabledKeyboardFunc = function enabledKeyboardFunc() {
    setEnableKeyboard(true);
  };
  React.useEffect(function () {
    if ((openCalender || openCalenderEnd) && enableKeyboard && !disabled) {
      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [currentDate, openCalender, openCalenderEnd, enableKeyboard, hoveredDate, startDate, endDate]);
  React.useEffect(function () {
    var fallbackDate = new Date();
    if (openCalender) {
      var initialDate = startDate && !isNaN(new Date(startDate)) ? new Date(startDate) : fallbackDate;
      setCurrentDate(initialDate);
      setCurrentMonth(initialDate);
    }
    if (openCalenderEnd) {
      var endDateValid = endDate && !isNaN(new Date(endDate));
      var startDateValid = startDate && !isNaN(new Date(startDate));
      var initialEndDate = endDateValid ? new Date(endDate) : startDateValid ? new Date(startDate) : fallbackDate;
      setCurrentDate(initialEndDate);
      setCurrentMonth(initialEndDate);
    }
  }, [startDate, openCalender, openCalenderEnd]);
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(e) {
      if (e.key === 'Enter') {
        if (firstInputFocus) {
          setOpenCalenderEnd(false);
          setOpenCalender(true);
        } else if (secondInputFocus) {
          setOpenCalender(false);
          setOpenCalenderEnd(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [firstInputFocus, secondInputFocus]);
  React.useEffect(function () {
    if (Array.isArray(initialValue) && initialValue) {
      setStartDate(new Date(initialValue[0]));
      setEndDate(new Date(initialValue[1]));
    } else if (initialValue && !isRangePicker) {
      setStartDate(initialValue);
    } else if (!initialValue && isRangePicker) {
      setStartDate(new Date(Date.now()));
      setEndDate(new Date(Date.now()));
    }
  }, [initialValue]);
  return /*#__PURE__*/React.createElement(DatePickerContainer, null, /*#__PURE__*/React.createElement(InputContainer, null, /*#__PURE__*/React.createElement(InputWrapper, null, /*#__PURE__*/React.createElement(InputField, {
    "data-testid": "first-input",
    readOnly: true,
    value: startDate && startDate.toLocaleDateString(locale),
    onClick: function onClick() {
      return setOpenCalenderEnd(false), setOpenCalender(!openCalender);
    },
    disabled: disabled,
    width: 124,
    height: 40,
    error: error,
    placeholder: placeholder,
    ref: inputRefStart,
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Tab' && !e.shiftKey && isRangePicker && !openCalender) {
        var _inputRefEnd$current3;
        e.preventDefault();
        (_inputRefEnd$current3 = inputRefEnd.current) === null || _inputRefEnd$current3 === void 0 || _inputRefEnd$current3.focus();
        setFirstInputFocus(false);
        setSecondInputFocus(true);
      }
    }
  }), /*#__PURE__*/React.createElement(IconWrapper, null, startDate || isDateTimeStart || isDateTimeEnd ? /*#__PURE__*/React.createElement(InputIcon, {
    onClick: disabled ? function () {} : function () {
      setStartDate('');
      if (Array.isArray(dateRange) && dateRange.length > 0) {
        dateRange.shift();
      }
      if (isDateTimeStart) {
        setIsDateTimeStart(false);
      } else if (isDateTimeEnd) {
        setIsDateTimeEnd(false);
      }
    },
    "data-testid": "icon-click"
  }, /*#__PURE__*/React.createElement(Atoms.Icon, {
    name: "alert-circle-solid-cross"
  })) : /*#__PURE__*/React.createElement(InputIcon, {
    onClick: function onClick() {
      return setOpenCalender(!openCalender);
    }
  }, /*#__PURE__*/React.createElement(Atoms.Icon, {
    name: "Interface-calendar-dot"
  })))), isRangePicker && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NextIcon, {
    name: "Interface-arrow-right"
  }), /*#__PURE__*/React.createElement(InputWrapper, {
    isRangePicker: isRangePicker
  }, /*#__PURE__*/React.createElement(InputField, {
    "data-testid": "second-input",
    className: "secondInput",
    readOnly: true,
    value: endDate && endDate.toLocaleDateString(locale),
    onClick: function onClick() {
      return setOpenCalender(false), setOpenCalenderEnd(!openCalenderEnd);
    },
    disabled: disabled,
    width: 124,
    height: 40,
    placeholder: placeholder,
    activeSecondInput: startDate && !endDate || openCalenderEnd,
    error: error,
    ref: inputRefEnd,
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Tab' && e.shiftKey) {
        var _inputRefStart$curren;
        e.preventDefault();
        (_inputRefStart$curren = inputRefStart.current) === null || _inputRefStart$curren === void 0 || _inputRefStart$curren.focus();
        setSecondInputFocus(false);
        setFirstInputFocus(true);
      }
    }
  }), /*#__PURE__*/React.createElement(IconWrapper, null, endDate ? /*#__PURE__*/React.createElement(InputIcon, {
    onClick: disabled ? function () {} : function () {
      setEndDate('');
      dateRange.pop();
      setHoveredDate(startDate);
      setIsDateTimeStart(false);
    },
    "data-testid": "icon-button"
  }, /*#__PURE__*/React.createElement(Atoms.Icon, {
    name: "alert-circle-solid-cross"
  })) : /*#__PURE__*/React.createElement(InputIcon, {
    onClick: function onClick() {
      return setOpenCalenderEnd(!openCalenderEnd);
    }
  }, /*#__PURE__*/React.createElement(Atoms.Icon, {
    name: "Interface-calendar-dot"
  })))))), openCalender && !disabled && /*#__PURE__*/React.createElement(CalendarWrapper, {
    ref: datePickerRef,
    "data-testid": "calender-id",
    isRangePicker: isRangePicker,
    isDoubleView: isDoubleView
  }, /*#__PURE__*/React.createElement(Calenders, {
    "data-testid": "container-id"
  }, /*#__PURE__*/React.createElement(Calendar, {
    date: currentMonth,
    locale: locale,
    startDate: startDate,
    endDate: endDate,
    weekdays: weekdays,
    handleSingleDate: handleSingleDate,
    handleDateRangeClick: handleDateRangeClick,
    isRangePicker: isRangePicker,
    isInRange: isInRange,
    isInHoverRange: isInHoverRange,
    hoveredDate: hoveredDate,
    setHoveredDate: setHoveredDate,
    isSelected: currentDate,
    enableKeyboard: enabledKeyboardFunc,
    disableKeyboard: disableKeyboardFunc,
    handlePrevYear: handlePrevYear,
    handleNextYear: handleNextYear,
    handlePrevMonth: handlePrevMonth,
    handleNextMonth: handleNextMonth,
    setDates: onChangeCurrent,
    isDoubleView: isDoubleView,
    openCalender: openCalender,
    openCalenderEnd: openCalenderEnd
  }), isDoubleView && isRangePicker && /*#__PURE__*/React.createElement(Calendar, {
    date: nextMonth,
    locale: locale,
    startDate: startDate,
    endDate: endDate,
    weekdays: weekdays,
    handleSingleDate: handleSingleDate,
    handleDateRangeClick: handleDateRangeClick,
    isRangePicker: isRangePicker,
    isInRange: isInRange,
    isInHoverRange: isInHoverRange,
    hoveredDate: hoveredDate,
    setHoveredDate: setHoveredDate,
    isSelected: currentDate,
    enableKeyboard: enabledKeyboardFunc,
    disableKeyboard: disableKeyboardFunc,
    handlePrevYear: handlePrevYear,
    handleNextYear: handleNextYear,
    handlePrevMonth: handlePrevMonth,
    handleNextMonth: handleNextMonth,
    setDates: onChangeCurrent,
    isDoubleView: isDoubleView,
    disableHeader: true,
    openCalender: openCalender,
    openCalenderEnd: openCalenderEnd
  }))), openCalenderEnd && !disabled && /*#__PURE__*/React.createElement(CalendarWrapperEnd, {
    ref: datePickerRef,
    "data-testid": "calender-id",
    isRangePicker: isRangePicker,
    isDoubleView: isDoubleView
  }, /*#__PURE__*/React.createElement(Calenders, {
    "data-testid": "container-id"
  }, /*#__PURE__*/React.createElement(Calendar, {
    date: currentMonth,
    locale: locale,
    startDate: startDate,
    endDate: endDate,
    weekdays: weekdays,
    handleSingleDate: handleSingleDate,
    handleDateRangeClick: handleDateRangeClick,
    isRangePicker: isRangePicker,
    isInRange: isInRange,
    isInHoverRange: isInHoverRange,
    hoveredDate: hoveredDate,
    setHoveredDate: setHoveredDate,
    isSelected: currentDate,
    enableKeyboard: enabledKeyboardFunc,
    disableKeyboard: disableKeyboardFunc,
    handlePrevYear: handlePrevYear,
    handleNextYear: handleNextYear,
    handlePrevMonth: handlePrevMonth,
    handleNextMonth: handleNextMonth,
    setDates: onChangeCurrent,
    isDoubleView: isDoubleView,
    openCalender: openCalender,
    openCalenderEnd: openCalenderEnd
  }), isDoubleView && isRangePicker && /*#__PURE__*/React.createElement(Calendar, {
    date: nextMonth,
    locale: locale,
    startDate: startDate,
    endDate: endDate,
    weekdays: weekdays,
    handleSingleDate: handleSingleDate,
    handleDateRangeClick: handleDateRangeClick,
    isRangePicker: isRangePicker,
    isInRange: isInRange,
    isInHoverRange: isInHoverRange,
    hoveredDate: hoveredDate,
    setHoveredDate: setHoveredDate,
    isSelected: currentDate,
    enableKeyboard: enabledKeyboardFunc,
    disableKeyboard: disableKeyboardFunc,
    handlePrevYear: handlePrevYear,
    handleNextYear: handleNextYear,
    handlePrevMonth: handlePrevMonth,
    handleNextMonth: handleNextMonth,
    setDates: onChangeCurrent,
    isDoubleView: isDoubleView,
    disableHeader: true,
    openCalender: openCalender,
    openCalenderEnd: openCalenderEnd
  }))));
};
DatePicker.propTypes = {
  isDoubleView: PropTypes.bool,
  isRangePicker: PropTypes.bool,
  initialValue: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.instanceOf(Date)), PropTypes.instanceOf(Date)]),
  locale: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  isDateTimeStart: PropTypes.bool,
  isDateTimeEnd: PropTypes.bool,
  setIsDateTimeStart: PropTypes.bool,
  setIsDateTimeEnd: PropTypes.bool
};
DatePicker.defaultProps = {
  isDoubleView: true,
  isRangePicker: false,
  initialValue: null,
  locale: 'en-US',
  onChange: function onChange() {},
  disabled: false,
  error: false,
  placeholder: 'yyyy/mm/dd'
};

exports.DatePicker = DatePicker;
