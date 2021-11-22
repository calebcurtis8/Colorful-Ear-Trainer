(self.webpackChunk=self.webpackChunk||[]).push([[826],{6226:(t,e,i)=>{var n,s;void 0===(s="function"==typeof(n=function(){const t=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];class e extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.addEventListener("mousedown",(t=>{this.handleClick(t,!0),t.preventDefault()})),this.root.addEventListener("mouseup",(t=>{this.handleClick(t,!1),t.preventDefault()})),this.root.addEventListener("mouseout",(t=>{this.handleClick(t,!1),t.preventDefault()})),this.root.innerHTML=`<style>${this.getCss()}</style><div>${this.getNoteSvg()}`}static get observedAttributes(){return["key-count","keyboard-layout","read-only"]}get config(){return{keyCount:parseInt(this.getAttribute("key-count")||"88"),keyboardLayout:this.getAttribute("keyboard-layout")||"A",readOnly:this.hasAttribute("read-only")}}connectedCallback(){}attributeChangedCallback(){this.root.innerHTML=`<style>${this.getCss()}</style><div>${this.getNoteSvg()}</div>`}handleClick(t,e){if(this.config.readOnly)return;const i=t.target;if("rect"===i.tagName){const n=t.target.getAttribute("data-note"),s=parseInt(t.target.getAttribute("data-octave"));e?(this.setNoteDown(n,s),this.dispatchEvent(new CustomEvent("note-down",{detail:{note:n,octave:s}}))):i.hasAttribute("data-depressed")&&(this.setNoteUp(n,s),this.dispatchEvent(new CustomEvent("note-up",{detail:{note:n,octave:s}})))}}setNoteDown(t,e){const n=this.root.querySelector(i(t,e));n.classList.add("depressed"),n.setAttribute("data-depressed","data-depressed")}setNoteUp(t,e){const n=this.root.querySelector(i(t,e));n.classList.remove("depressed"),n.removeAttribute("data-depressed")}getNoteSvg(){const e=this.config.keyCount,i=function*(e){const i=t.indexOf(e),n=[...t.slice(i,t.length),...t.slice(0,i)];let s=0,o=!0;for(;;)for(let t=0;t<n.length;t++){const e=n[t];"C"!==e||o||(s+=1),yield{name:e,octave:s},o=!1}}(this.config.keyboardLayout),n=new Array(e).fill(1).map((()=>i.next().value));return`<svg viewBox="0 0 ${10*n.filter((t=>!t.name.includes("#"))).length+(n[n.length-1].name.includes("#")?3:0)+2} 52" version="1.1" xmlns="http://www.w3.org/2000/svg">\n            ${this.getKeysForNotes(n)}\n        </svg>`}getKeysForNotes(t){let e=-9;const i=t.map((t=>{let i=0;return t.name.includes("#")?i=e+7:(e+=10,i=e),{note:t.name,octave:t.octave,offset:i}}));return`<g>\n            ${i.filter((t=>!t.note.includes("#"))).map((t=>{return e=t.note,i=t.octave,n=t.offset,`<rect class="natural-note note" data-note="${e}" data-octave="${i}" x=${n} y=1></rect>`;var e,i,n}))}\n            ${i.filter((t=>t.note.includes("#"))).map((t=>{return e=t.note,i=t.octave,n=t.offset,`<rect class="sharp-note note" data-note="${e}" data-octave="${i}" x=${n} y=1></rect>`;var e,i,n}))}\n        </g>`}getCss(){return"\n        \n        :host {\n            --natural-key-color: #FFFFFF; \n            --natural-key-outline-color: #555555;\n            \n            --sharp-key-color: #555555;\n            --sharp-key-outline-color: #555555;\n            \n            --depressed-key-color: #808080;\n            --depressed-key-transform: scale(1, 0.95);\n        }\n        \n        :host {\n          display: block;\n        }\n        \n        .natural-note {\n          stroke: var(--natural-key-outline-color);\n          fill: var(--natural-key-color);\n          width: 10px;\n          height: 50px;\n        }\n        \n        .sharp-note {\n          stroke: var(--sharp-key-outline-color);\n          fill: var(--sharp-key-color);\n          width: 6px;\n          height: 30px;\n        }\n        \n        .depressed {\n          fill: var(--depressed-key-color);\n          transform: var(--depressed-key-transform);\n        }\n        "}}const i=(t,e)=>`[data-note="${t}"][data-octave="${e}"]`;customElements.define("piano-keys",e)})?n.call(e,i,e,t):n)||(t.exports=s)},3569:(t,e,i)=>{"use strict";i(6226);var n=i(1260);const s="EarTrainerUser";class o extends HTMLElement{constructor(){super(),this.addListeners(),this.storage=JSON.parse(localStorage.getItem(s))||{},this.inputs=this.querySelectorAll("input,select"),this.inputs.forEach((t=>{let e=t.getAttribute("name"),i=this.storage[e];i&&(t.value=i),this.set(e,t.value)}))}set(t,e){this.storage[t]=e,localStorage.setItem(s,JSON.stringify(this.storage))}get(t,e="normal"){return this.storage=JSON.parse(localStorage.getItem(s)),this[e](this.storage[t])}tempo(t){return 60/parseInt(t)}number(t){return parseInt(t)}array(t){return JSON.parse(t)}normal(t){return t}addListeners(){this.addEventListener("change",this.update.bind(this)),this.addEventListener("keyup",this.update.bind(this))}update(t){t.target.getAttribute("name")&&(this.set(t.target.getAttribute("name"),t.target.value),document.dispatchEvent(new CustomEvent("userupdate")))}}customElements.define("define-user",o);const a=document.getElementById("User"),r=document.getElementById("piano");function h(t,e){const i=new n.v2(n.WV).toDestination(),s=e?e+n.zO():n.zO();let o=0;t.forEach((t=>{t.sequence.forEach((t=>{i.triggerAttack(t,s+o)}));let e=t.duration*a.get("bpm","tempo");i.triggerRelease(t.sequence,s+e+o),o+=e}))}new class{constructor(t){this.piano=t,this.notesDown=[],this.handlePlay=this.play.bind(this),this.handleListen=this.listen.bind(this),this.piano.addEventListener("note-down",this.handlePlay),this.piano.addEventListener("note-down",this.handleListen),document.addEventListener("question:start",this.clear.bind(this))}play(t){let e=t.detail;const i=(new n.WV).toDestination();let s=this.formatNote(e.note);i.triggerAttackRelease(s,"8n")}listen(t){let e=t.detail,i=a.selected_notes||[],n=this.formatNote(e.note);i.indexOf(n)>-1&&(this.piano.removeEventListener("note-down",this.handlePlay),this.piano.setNoteDown(e.note,0),this.notesDown.push([e.note,0]),this.piano.addEventListener("note-down",this.handlePlay)),document.dispatchEvent(new CustomEvent("answer",{detail:n}))}clear(){this.notesDown.forEach((t=>{this.piano.setNoteUp(t[0],t[1])}))}formatNote(t){return`${t}${a.get("octave","number")}`}}(r);let d=a.get("octave","number"),c=()=>[{sequence:[`C${d}`,`E${d}`,`G${d}`],duration:2},{sequence:[`C${d}`,`F${d}`,`A${d}`],duration:1},{sequence:[`D${d}`,`G${d}`,`B${d}`],duration:1},{sequence:[`C${d}`,`E${d}`,`G${d}`],duration:2}];function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e,i){return e&&u(t.prototype,e),i&&u(t,i),t}function f(t){return+t.replace(/px/,"")}function m(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.random()*(e-t)+t;return Math.floor(n*Math.pow(10,i))/Math.pow(10,i)}function v(t){return t[m(0,t.length)]}var g=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function y(t){return Math.log(t)/Math.log(1920)}var b=function(){function t(e){l(this,t);var i=e.initialPosition,n=e.direction,s=e.confettiRadius,o=e.confettiColors,a=e.emojis,r=e.emojiSize,h=e.canvasWidth,d=m(.9,1.7,3)*y(h);this.confettiSpeed={x:d,y:d},this.finalConfettiSpeedX=m(.2,.6,3),this.rotationSpeed=a.length?.01:m(.03,.07,3)*y(h),this.dragForceCoefficient=m(5e-4,9e-4,6),this.radius={x:s,y:s},this.initialRadius=s,this.rotationAngle="left"===n?m(0,.2,3):m(-.2,0,3),this.emojiSize=r,this.emojiRotationAngle=m(0,2*Math.PI),this.radiusYUpdateDirection="down";var c="left"===n?m(82,15)*Math.PI/180:m(-15,-82)*Math.PI/180;this.absCos=Math.abs(Math.cos(c)),this.absSin=Math.abs(Math.sin(c));var u=m(-150,0),p={x:i.x+("left"===n?-u:u)*this.absCos,y:i.y-u*this.absSin};this.currentPosition=Object.assign({},p),this.initialPosition=Object.assign({},p),this.color=a.length?null:v(o),this.emoji=a.length?v(a):null,this.createdAt=(new Date).getTime(),this.direction=n}return p(t,[{key:"draw",value:function(t){var e=this.currentPosition,i=this.radius,n=this.color,s=this.emoji,o=this.rotationAngle,a=this.emojiRotationAngle,r=this.emojiSize,h=window.devicePixelRatio;n?(t.fillStyle=n,t.beginPath(),t.ellipse(e.x*h,e.y*h,i.x*h,i.y*h,o,0,2*Math.PI),t.fill()):s&&(t.font="".concat(r,"px serif"),t.save(),t.translate(h*e.x,h*e.y),t.rotate(a),t.textAlign="center",t.fillText(s,0,0),t.restore())}},{key:"updatePosition",value:function(t,e){var i=this.confettiSpeed,n=this.dragForceCoefficient,s=this.finalConfettiSpeedX,o=this.radiusYUpdateDirection,a=this.rotationSpeed,r=this.createdAt,h=this.direction,d=e-r;i.x>s&&(this.confettiSpeed.x-=n*t),this.currentPosition.x+=i.x*("left"===h?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-i.y*this.absSin*d+.00125*Math.pow(d,2)/2,this.rotationSpeed-=this.emoji?1e-4:1e-5*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji?this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI):"down"===o?(this.radius.y-=t*a,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*a,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+100}}]),t}();function w(){var t=document.createElement("canvas");return t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t}function k(t){var e=t.confettiRadius,i=void 0===e?6:e,n=t.confettiNumber,s=void 0===n?t.confettiesNumber||(t.emojis?40:250):n,o=t.confettiColors,a=void 0===o?g:o,r=t.emojis,h=void 0===r?t.emojies||[]:r,d=t.emojiSize,c=void 0===d?80:d;return t.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),t.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:i,confettiNumber:s,confettiColors:a,emojis:h,emojiSize:c}}const C=new(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,t),this.canvas=e.canvas||w(),this.canvasContext=this.canvas.getContext("2d"),this.shapes=[],this.lastUpdated=(new Date).getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return p(t,[{key:"loop",value:function(){var t,e,i,n,s,o=this;t=this.canvas,e=window.devicePixelRatio,n=f((i=getComputedStyle(t)).getPropertyValue("width")),s=f(i.getPropertyValue("height")),t.setAttribute("width",(n*e).toString()),t.setAttribute("height",(s*e).toString());var a=(new Date).getTime(),r=a-this.lastUpdated,h=this.canvas.offsetHeight;this.shapes.forEach((function(t){t.updatePosition(r,a),t.draw(o.canvasContext)})),this.iterationIndex%100==0&&(this.shapes=this.shapes.filter((function(t){return t.getIsVisibleOnCanvas(h)}))),this.lastUpdated=a,this.iterationIndex++,requestAnimationFrame(this.loop)}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=k(t),i=e.confettiRadius,n=e.confettiNumber,s=e.confettiColors,o=e.emojis,a=e.emojiSize,r=window.devicePixelRatio,h=this.canvas.width/r,d=this.canvas.height/r,c=5*d/7,l={x:0,y:c},u={x:h,y:c},p=0;p<n/2;p++)this.shapes.push(new b({initialPosition:l,direction:"right",confettiRadius:i,confettiColors:s,confettiNumber:n,emojis:o,emojiSize:a,canvasWidth:h})),this.shapes.push(new b({initialPosition:u,direction:"left",confettiRadius:i,confettiColors:s,confettiNumber:n,emojis:o,emojiSize:a,canvasWidth:h}))}}]),t}());class E extends HTMLElement{constructor(){super(),this.streak=0,this.correct=0,this.total=0,this.fire=10,this.elements={streak:this.querySelector("[data-streak]"),correct:this.querySelector("[data-correct]"),total:this.querySelector("[data-total]"),gradient:this.querySelector("[data-gradient"),background:document.getElementById("background")},document.addEventListener("gameify:update",this.update.bind(this))}update(){this.elements.streak.innerText=this.streak,this.elements.correct.innerText=this.correct,this.elements.total.innerText=this.total,this.elements.gradient.style.width=this.correct/this.total*100+"%",this.elements.background.style.opacity=this.streak/this.fire,this.streak>=this.fire&&C.addConfetti()}}customElements.define("game-area",E);const S=document.getElementById("Gameify");new class{constructor(){this.handleAnswer=this.registerAnswer.bind(this),document.querySelector("#Play")?.addEventListener("click",this.play.bind(this)),document.querySelector("#PlayCadence")?.addEventListener("click",this.playCadence.bind(this)),document.querySelector("#PlayNotes")?.addEventListener("click",function(){this.playNotes(0)}.bind(this))}play(){this.playCadence(),document.addEventListener("answer",this.handleAnswer),document.dispatchEvent(new CustomEvent("question:start")),a.notes=function(t=1,e=["C","D","E","F","G","A","B"]){let i=[];for(let n=0;n<t;n++){let t=Math.floor(Math.random()*e.length);i.push(e[t]),e.splice(t,1)}return i}(a.get("note_count","number"),a.get("set","array")),a.selected_notes=this.setOctaves(JSON.parse(JSON.stringify(a.notes))),a.notes=this.setOctave(a.notes),this.playNotes()}playCadence(){this.offset=(h(c()),function(t){let e=0;return t.forEach((t=>e+=t.duration*a.get("bpm","tempo"))),e}(c()))}playNotes(t=this.offset){a.selected_notes&&h([{sequence:a.selected_notes,duration:1}],t)}setOctave(t){return t.map((t=>`${t}${a.get("octave","number")}`))}setOctaves(t){return t.map((t=>`${t}${a.get("octave","number")+Math.floor(Math.random()*a.get("spread","number"))}`))}registerAnswer(t){if(-1==a.notes.indexOf(t.detail))return S.streak=0,S.total+=a.get("note_count","number"),void this.dispatchUpdateEvent();S.streak+=1,S.correct+=1,S.total+=a.get("note_count","number"),this.dispatchUpdateEvent(),a.notes.splice(a.notes.indexOf(t.detail),1),0==a.notes.length&&(document.removeEventListener("answer",this.handleAnswer),setTimeout(this.play.bind(this),350))}dispatchUpdateEvent(){document.dispatchEvent(new CustomEvent("gameify:update"))}}}},t=>{t.O(0,[675,807],(()=>(3569,t(t.s=3569)))),t.O()}]);