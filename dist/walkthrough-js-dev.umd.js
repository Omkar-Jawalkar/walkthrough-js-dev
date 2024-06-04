(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["walkthrough-js-dev"] = factory());
})(this, (function () { 'use strict';

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
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /* 

  This function finds all the elements with data-intro attribute and
  formats it properly to start the transition


      This is the format
      {
          
      steps: [{
          title: 'Welcome',
          intro: 'Hello World! 👋'
      },
      {
          element: document.querySelector('.card-demo'),
          intro: 'This step focuses on an image'
      },
      {
          title: 'Farewell!',
          element: document.querySelector('.card__image'),
          intro: 'And this is our final step!'
      }]

      }    

  */

  var getFormatBeforeStaring = function getFormatBeforeStaring() {
    var elementsWithDataIntroAttribute = document.querySelectorAll("[data-intro]");

    // data-intro, data-step, data-title data-position
    var positionArray = ["top", "left", "right", "bottom"];
    var stepsArrayWithSteps = new Array();
    var stepsArrayWithNoSteps = new Array();
    var _iterator = _createForOfIteratorHelper(elementsWithDataIntroAttribute),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        var title = element.getAttribute("data-title");
        var intro = element.getAttribute("data-intro");
        var position = element.getAttribute("data-position");
        var step = element.getAttribute("data-step");
        var objectToBeAdded = {};

        // adding the title
        if (title && title.length > 0) {
          objectToBeAdded["title"] = title;
        }

        // adding the intro attribute
        if (intro && intro.length > 0) {
          objectToBeAdded["intro"] = intro;
        }

        // setting the default position attribute if not specified
        if (position && positionArray.includes(position)) {
          objectToBeAdded["position"] = position;
        } else {
          objectToBeAdded["position"] = "bottom";
        }

        // setting the step attribute if not specified
        step = parseInt(step);
        if (step !== NaN && step > 0) {
          objectToBeAdded["step"] = step;
        }

        // setting the element
        objectToBeAdded["element"] = element;

        // adding that object into stepsArray

        if (objectToBeAdded["step"]) {
          stepsArrayWithSteps.push(objectToBeAdded);
        } else {
          stepsArrayWithNoSteps.push(objectToBeAdded);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    stepsArrayWithSteps = stepsArrayWithSteps.sort(function (a, b) {
      return (a === null || a === void 0 ? void 0 : a.step) - (b === null || b === void 0 ? void 0 : b.step);
    });
    var finalStepsArray = [].concat(_toConsumableArray(stepsArrayWithSteps), stepsArrayWithNoSteps);
    console.log("finalStepsArray - " + finalStepsArray);
    return {
      steps: finalStepsArray
    };
  };

  var setForwardButtonText = function setForwardButtonText() {
    var forwardButton = document.getElementById("forwardButton");
    forwardButton.textContent = "Done";
  };

  /* 
      function removeOverlayAndAddBorder
      @param {domElement} domElement , position
      @return {x, y} Coordinates to add the Display box to
  */
  var removeOverlayAndAddBorder = function removeOverlayAndAddBorder(domElement) {
    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "bottom";
    // check if domElement is actually a dom element
    if (domElement instanceof Element) {
      // returning the position
      //  To find the position if any display box is getting out of view port
      var getPositionThatGivesExactCoordinates = function getPositionThatGivesExactCoordinates(position) {
        switch (position) {
          case "left":
            var _positionObject$left = _slicedToArray(positionObject["left"], 2),
              leftX = _positionObject$left[0],
              leftY = _positionObject$left[1];
            if (leftX < 0 || leftY < 0) {
              return "bottom";
            } else {
              return "left";
            }
          case "right":
            var _positionObject$right = _slicedToArray(positionObject["right"], 2),
              rightX = _positionObject$right[0],
              rightY = _positionObject$right[1];
            if (rightX > window.innerWidth || rightY < 0) {
              return "bottom";
            } else {
              return "right";
            }
          case "top":
            var _positionObject$top = _slicedToArray(positionObject["top"], 2),
              topX = _positionObject$top[0],
              topY = _positionObject$top[1];
            if (topX < 0 || topY < 0) {
              return "bottom";
            } else {
              return "top";
            }
          default:
            return "bottom";
        }
      };
      // add the transparent element with appropriate styles
      var rect = domElement.getBoundingClientRect();
      var left = rect.left + window.pageXOffset;
      var right = rect.right + window.pageXOffset;
      var top = rect.top + window.pageYOffset;
      var bottom = rect.bottom + window.pageYOffset;
      var transparentElement = document.createElement("div");
      transparentElement.style.position = "absolute";
      transparentElement.style.left = left - 20 + "px";
      transparentElement.style.top = top - 20 + "px";
      transparentElement.style.width = right - left + 20 + "px";
      transparentElement.style.height = bottom - top + 20 + "px";
      transparentElement.classList.add("transparent-element");
      domElement.classList.add("removeOverlayOnDomElement");

      // appent the transparent element to the Dom Element
      document.body.appendChild(transparentElement);

      // calculate the position to add the display box

      var positionObject = {
        left: [right - rect.width - 270 - 30, top],
        right: [right + 10, top],
        bottom: [left, bottom + 10],
        top: [left, bottom - rect.height - 250 - 30]
      };
      if (positionObject[position]) {
        var myPosition = getPositionThatGivesExactCoordinates(position);
        return positionObject[myPosition];
      } else {
        return positionObject["bottom"];
      }
    } else {
      throw new Error("Invalid DOM element");
    }
  };

  /* 

      This function removed the Transparent Element, and box element from the dom
      also removes the css class "removeOverlayOnDomElement" from the dom element provided.

      @method removeOverlayOnDomElement
      @param {DOMElement} 
      @param {Boolean} return true removed everything or throw an error

  */
  var removeAllAppendedElements = function removeAllAppendedElements(domElement) {
    try {
      var transparentElement = document.getElementsByClassName("transparent-element")[0];
      var boxElement = document.getElementsByClassName("box")[0];
      domElement.classList.remove("removeOverlayOnDomElement");
      transparentElement.remove();
      boxElement.remove();
      return true;
    } catch (error) {
      throw new Error("Cant remove elememt");
    }
  };

  /* 
      This function sets the arrow with appropriate position
      
      @param {arrowElememt , position} 
      @return {arrowElememt}

  */
  var setArrowAccordingToPosition = function setArrowAccordingToPosition(arrowElement) {
    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "bottom";
    try {
      switch (position) {
        case "top":
          arrowElement.classList.add("down-arrow");
          break;
        case "left":
          arrowElement.classList.add("right-arrow");
          break;
        case "right":
          arrowElement.classList.add("left-arrow");
          arrowElement.style.top = 20 + "px";
          arrowElement.style.left = -7 + "px";
          break;
        default:
          arrowElement.classList.add("up-arrow");
          arrowElement.style.top = -7 + "px";
          arrowElement.style.left = "20px";
      }
      return arrowElement;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  var CreateDisplayBox = function CreateDisplayBox(totalStepsLength, currentStep, format) {
    // extracting the info from the format

    var formattedItem = format[currentStep];
    var domElement = formattedItem["element"];
    var title = formattedItem === null || formattedItem === void 0 ? void 0 : formattedItem.title;
    var intro = formattedItem === null || formattedItem === void 0 ? void 0 : formattedItem.intro;
    var position = formattedItem === null || formattedItem === void 0 ? void 0 : formattedItem.position;

    // removeOverlayAndAddBorder which return x and y coordinates
    var _removeOverlayAndAddB = removeOverlayAndAddBorder(domElement, position),
      _removeOverlayAndAddB2 = _slicedToArray(_removeOverlayAndAddB, 2),
      left = _removeOverlayAndAddB2[0],
      top = _removeOverlayAndAddB2[1];

    // creating elements
    var box = document.createElement("div");
    var boxHeader = document.createElement("div");
    var boxBody = document.createElement("div");
    var boxFooter = document.createElement("div");
    var backButton = document.createElement("button");
    var forwardButton = document.createElement("button");
    var arrowElement = document.createElement("span");
    backButton.id = "backButton";
    forwardButton.id = "forwardButton";

    // setting styles
    box.style.left = left + "px";
    box.style.top = top + "px";
    box.classList.add("box");
    boxHeader.classList.add("box-header");
    boxBody.classList.add("box-body");
    boxFooter.classList.add("box-footer");
    arrowElement.style.position = "absolute";

    // small arrow
    arrowElement = setArrowAccordingToPosition(arrowElement, position);
    backButton.addEventListener("click", function (e) {
      if (currentStep > 0) {
        currentStep--;
        var isRemoved = removeAllAppendedElements(domElement);
        if (isRemoved) {
          CreateDisplayBox(totalStepsLength, currentStep, format);
        }
      }
    });
    forwardButton.addEventListener("click", function (event) {
      if (currentStep === totalStepsLength - 2) {
        setForwardButtonText();
      }
      if (currentStep < totalStepsLength) {
        currentStep++;
        if (currentStep < totalStepsLength) {
          var isRemoved = removeAllAppendedElements(domElement);
          if (isRemoved) {
            CreateDisplayBox(totalStepsLength, currentStep, format);
          }
        } else {
          document.body.classList.remove("overlay");
          removeAllAppendedElements(domElement);
        }
      }
    });

    // setting Text content
    backButton.textContent = "Back";
    forwardButton.textContent = "Next";
    boxHeader.textContent = title;
    boxBody.innerHTML = intro;

    // appending child

    boxFooter.appendChild(backButton);
    boxFooter.appendChild(forwardButton);
    box.appendChild(arrowElement);
    box.appendChild(boxHeader);
    box.appendChild(boxBody);
    box.appendChild(boxFooter);
    document.body.appendChild(box);
  };

  var startIntro = function startIntro(totalStepsLength, currentStep, format) {
    document.body.classList.add("overlay");
    CreateDisplayBox(totalStepsLength, currentStep, format);
  };

  function Walkthrough() {
    var _this = this;
    this.start = function () {
      if (!_this.isFormattedDataPresent()) {
        var _format = getFormatBeforeStaring();
        _this.format = _format;
      }
      if (_this.validateFormattedDataAndSetStepsLength()) {
        var _this$format;
        // start the intro
        startIntro(_this.steps, _this.currentStep, (_this$format = _this.format) === null || _this$format === void 0 ? void 0 : _this$format.steps);
      } else {
        console.log(_this.format);
        throw new Error("Data not available or invalid");
      }
    };
    this.setOptions = function (format) {
      _this.format = format;
      if (_this.validateFormattedDataAndSetStepsLength()) {
        return _this;
      } else {
        throw new Error("Data not available or invalid");
      }
    };
    this.addHints = function () {};
    this.isFormattedDataPresent = function () {
      if (_this.format && Object.keys(_this.format).length > 0) {
        return true;
      }
      return false;
    };

    /*  setStepsLength function also validates weither
         data is present in formattedData or not
    */
    this.validateFormattedDataAndSetStepsLength = function () {
      if (_this.isFormattedDataPresent()) {
        var stepsFromFormattedData = _this.format["steps"];
        if (stepsFromFormattedData && stepsFromFormattedData.length > 0) {
          _this.steps = stepsFromFormattedData.length;
        }
        _this.currentStep = 0;
        return true;
      }
      return false;
    };
  }
  var walkthroughObj = new Walkthrough();

  return walkthroughObj;

}));
