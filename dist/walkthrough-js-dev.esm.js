function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],s=!0,d=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);s=!0);}catch(t){d=!0,o=t}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(d)throw o}}return l}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o=function(){var t,r=document.querySelectorAll("[data-intro]"),o=["top","left","right","bottom"],a=new Array,i=new Array,l=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=n(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){s=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw i}}}}(r);try{for(l.s();!(t=l.n()).done;){var s=t.value,d=s.getAttribute("data-title"),u=s.getAttribute("data-intro"),c=s.getAttribute("data-position"),f=s.getAttribute("data-step"),m={};d&&d.length>0&&(m.title=d),u&&u.length>0&&(m.intro=u),c&&o.includes(c)?m.position=c:m.position="bottom",NaN!==(f=parseInt(f))&&f>0&&(m.step=f),m.element=s,m.step?a.push(m):i.push(m)}}catch(t){l.e(t)}finally{l.f()}a=a.sort((function(t,e){return(null==t?void 0:t.step)-(null==e?void 0:e.step)}));var p=[].concat(e(a),i);return console.log("finalStepsArray - "+p),{steps:p}},a=function(t){try{var e=document.getElementsByClassName("transparent-element")[0],n=document.getElementsByClassName("box")[0];return t.classList.remove("removeOverlayOnDomElement"),e.remove(),n.remove(),!0}catch(t){throw new Error("Cant remove elememt")}},i=function e(n,r,o){var i=o[r],l=i.element,s=null==i?void 0:i.title,d=null==i?void 0:i.intro,u=null==i?void 0:i.position,c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom";if(e instanceof Element){var r=e.getBoundingClientRect(),o=r.left+window.pageXOffset,a=r.right+window.pageXOffset,i=r.top+window.pageYOffset,l=r.bottom+window.pageYOffset,s=document.createElement("div");s.style.position="absolute",s.style.left=o-10+"px",s.style.top=i-10+"px",s.style.width=a-o+20+"px",s.style.height=l-i+20+"px",s.style.opacity="1",s.classList.add("transparent-element"),document.body.appendChild(s);var d={left:[a-r.width-270-30,i],right:[a+10,i],bottom:[o,l+10],top:[o,l-r.height-250-30]};if(d[n]){var u=function(e){switch(e){case"left":var n=t(d.left,2),r=n[0],o=n[1];return r<0||o<0?"bottom":"left";case"right":var a=t(d.right,2),i=a[0],l=a[1];return i>window.innerWidth||l<0?"bottom":"right";case"top":var s=t(d.top,2),u=s[0],c=s[1];return u<0||c<0?"bottom":"top";default:return"bottom"}}(n);return d[u]}return d.bottom}throw new Error("Invalid DOM element")}(l,u),f=t(c,2),m=f[0],p=f[1],y=document.createElement("div"),h=document.createElement("div"),v=document.createElement("div"),b=document.createElement("div"),g=document.createElement("button"),w=document.createElement("button"),x=document.createElement("span");g.id="backButton",w.id="forwardButton",y.style.left=m+"px",y.style.top=p+"px",y.style.opacity="1",y.style.display="block",y.classList.add("box"),h.classList.add("box-header"),v.classList.add("box-body"),b.classList.add("box-footer"),x.style.position="absolute",x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom";try{switch(e){case"top":t.classList.add("down-arrow");break;case"left":t.classList.add("right-arrow");break;case"right":t.classList.add("left-arrow"),t.style.top="20px",t.style.left="-7px";break;default:t.classList.add("up-arrow"),t.style.top="-7px",t.style.left="20px"}return t}catch(t){throw new Error(t.message)}}(x,u),g.addEventListener("click",(function(t){r>0&&(r--,a(l)&&e(n,r,o))})),w.addEventListener("click",(function(t){(r===n-2&&(document.getElementById("forwardButton").textContent="Done"),r<n)&&(++r<n?a(l)&&e(n,r,o):(document.body.classList.remove("overlay"),a(l)))})),g.textContent="Back",w.textContent="Next",h.textContent=s,v.innerHTML=d,b.appendChild(g),b.appendChild(w),y.appendChild(x),y.appendChild(h),y.appendChild(v),y.appendChild(b),document.body.appendChild(y)};var l=new function(){var t=this;this.start=function(){if(!t.isFormattedDataPresent()){var e=o();t.format=e}if(!t.validateFormattedDataAndSetStepsLength())throw console.log(t.format),new Error("Data not available or invalid");var n,r,a,l,s;r=t.steps,a=t.currentStep,l=null===(n=t.format)||void 0===n?void 0:n.steps,(s=document.createElement("div")).style.inset="0px",s.style.position="fixed",s.style.cursor="pointer",s.classList.add("overlay"),i(r,a,l)},this.setOptions=function(e){if(t.format=e,t.validateFormattedDataAndSetStepsLength())return t;throw new Error("Data not available or invalid")},this.addHints=function(){},this.isFormattedDataPresent=function(){return!!(t.format&&Object.keys(t.format).length>0)},this.validateFormattedDataAndSetStepsLength=function(){if(t.isFormattedDataPresent()){var e=t.format.steps;return e&&e.length>0&&(t.steps=e.length),t.currentStep=0,!0}return!1}};export{l as default};
