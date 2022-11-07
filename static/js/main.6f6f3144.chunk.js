(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(62)},49:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(35),i=n.n(o),c=(n(49),n(30)),l=n(28),u=n(5),s=n(6),d=n(13),p=n(12),h=n(14),m=n(7),f=n(1),b=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,"Balance: ",this.props.accountBalance)}}]),t}(r.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://picsum.photos/200/200",alt:"bank"}),a.a.createElement("h1",null,"Ariel Tejada's Bank of React"),a.a.createElement(m.b,{to:"/userProfile"},"User Profile"),a.a.createElement("br",null),a.a.createElement(m.b,{to:"/login"},"Login"),a.a.createElement("br",null),a.a.createElement(m.b,{to:"/credits"},"Credits (to be implemented in the Assignment)"),a.a.createElement("br",null),a.a.createElement(m.b,{to:"/debits"},"Debits (to be implemented in the Assignment)"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(b,{accountBalance:this.props.accountBalance}))}}]),t}(r.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"User Profile"),a.a.createElement("div",null,"Username: ",this.props.userName),a.a.createElement("div",null,"Member Since: ",this.props.memberSince),a.a.createElement("br",null),a.a.createElement(m.b,{to:"/"},"Return to Home"))}}]),t}(r.Component),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){var t=Object(l.a)({},n.state.user);t.userName=e.target.value,n.setState({user:t})},n.handleSubmit=function(e){e.preventDefault(),n.props.mockLogIn(n.state.user),n.setState({redirect:!0})},n.state={user:{userName:n.props.user.userName,password:""},redirect:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.redirect?a.a.createElement(f.a,{to:"/userProfile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login to Ariel's Bank"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",null,a.a.createElement("label",null,"User Name"),a.a.createElement("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})),a.a.createElement("div",null,a.a.createElement("label",null,"Password"),a.a.createElement("input",{type:"password",name:"password"})),a.a.createElement("button",null,"Log In")),a.a.createElement("br",null),a.a.createElement(m.b,{to:"/"},"Return to Home"))}}]),t}(r.Component),E={title:{textAlign:"center",outline:"1px solid black"},wholePage:{marginLeft:"10%",marginRight:"10%"},categories:{display:"flex",outline:"1px solid black"}},w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleDescriptionInput=function(e){var t=n.state.creditInput;t.description=e.target.value,n.setState({creditInput:t})},n.handleAmountInput=function(e){var t=n.state.creditInput;t.amount=e.target.value,n.setState({creditInput:t})},n.handleAddCredit=function(e){n.props.addCredit(n.state.creditInput),n.setState({creditInput:{description:"",amount:0,date:(new Date).toISOString()}});var t=document.getElementById("descValue"),r=document.getElementById("amountValue");t.value="",r.value=""},n.state={accountBalance:parseFloat(n.props.balance.toFixed(2)),credits:n.props.credits,creditInput:{description:"",amount:0,date:(new Date).toISOString()},debitsTotal:n.props.debitsTotal,creditsTotal:n.props.creditsTotal},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:E.wholePage},a.a.createElement("h1",{style:E.title},"Credits"),a.a.createElement("div",{style:E.categories},a.a.createElement("h2",{style:{width:"50%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"}},"Description"),a.a.createElement("h2",{style:{width:"30%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"}},"Date"),a.a.createElement("h2",{style:{width:"20%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"}},"Amount")),a.a.createElement("div",null,this.props.credits.map(function(e,t){return a.a.createElement("div",{key:t,style:{display:"flex"}},a.a.createElement("p",{style:{width:"50%",outline:"1px solid black"}},e.description),a.a.createElement("p",{style:{width:"30%",outline:"1px solid black"}},e.date.slice(0,10)),a.a.createElement("p",{style:{width:"20%",outline:"1px solid black"}},"$",e.amount," "))}),a.a.createElement("h2",null,"Total Debits: ",this.props.debitsTotal),a.a.createElement("h2",null,"Total Credits: ",this.props.creditsTotal),a.a.createElement("h2",null,"Balance = (Debits - Credits)"),a.a.createElement("h2",null,"Your Current Balance: ",this.props.balance)),a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("h1",{style:{outline:"1px solid black",textAlign:"center"}},"Add A Credit"),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("h2",{style:{width:"50%",paddingLeft:"5%"}},"Description"),a.a.createElement("h2",{style:{width:"50%",paddingLeft:"5%"}},"amount")),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("input",{id:"descValue",type:"text",placeholder:"add description...",style:{width:"50%",marginLeft:"3%"},onChange:this.handleDescriptionInput}),a.a.createElement("input",{id:"amountValue",type:"number",placeholder:"add amount...",style:{width:"20%"},onChange:this.handleAmountInput}),a.a.createElement("button",{type:"submit",style:{width:"20%"},onClick:this.handleAddCredit},"Add Credit"))),a.a.createElement("br",null)),a.a.createElement("br",null),a.a.createElement(m.b,{to:"/",onClick:this.handleBackToHome},"Return to Home"))}}]),t}(r.Component),x=function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,"Debits"),e.debits.map(function(e){var t=e.date.slice(0,10);return a.a.createElement("li",{key:e.id},e.amount," ",e.description," ",t)}),a.a.createElement("form",{onSubmit:e.addDebit},a.a.createElement("input",{type:"text",name:"description"}),a.a.createElement("input",{type:"number",name:"amount"}),a.a.createElement("button",{type:"submit"},"Add Debit")),a.a.createElement("br",null),a.a.createElement(m.b,{to:"/"},"Return to Home"))},j=n(32);function O(){O=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(B){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new S(a||[]);return r(i,"_invoke",{value:w(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(B){return{type:"throw",arg:B}}}e.wrap=u;var d={};function p(){}function h(){}function m(){}var f={};l(f,o,function(){return this});var b=Object.getPrototypeOf,v=b&&b(b(L([])));v&&v!==t&&n.call(v,o)&&(f=v);var y=m.prototype=p.prototype=Object.create(f);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(d).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:h,configurable:!0}),h.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),l(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).mockLogIn=function(t){var n=Object(l.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.addCredit=function(t){var n=e.state.credits;n.push(t),e.setState({credits:n});var r=e.state.accountBalance;r+=t.amount,e.setState({accountBalance:r})},e.addDebit=function(){},e.sumCredits=function(){var t=0;e.state.credits.forEach(function(e){return t+=e.amount}),e.setState({creditsTotal:t}),e.setState({accountBalance:e.state.accountBalance+t})},e.sumDebits=function(){var t=0;e.state.debits.forEach(function(e){return t+=e.amount}),e.setState({debitsTotal:t}),e.setState({accountBalance:e.state.accountBalance-t})},e.state={accountBalance:0,credits:[],debits:[],creditsTotal:0,debitsTotal:0,currentUser:{userName:"Joe Smith",memberSince:"11/22/99"},date:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(O().mark(function e(){var t;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://moj-api.herokuapp.com/credits",e.prev=1,e.next=4,j.a.get("https://moj-api.herokuapp.com/credits");case 4:t=e.sent,console.log(t),this.setState({credits:t.data}),this.setState({date:(new Date).toISOString()}),this.sumCredits(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.credits_response&&(console.log(e.t0.credits_response.data),console.log(e.t0.credits_response.status));case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(O().mark(function e(){var t;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://moj-api.herokuapp.com/debits",e.prev=1,e.next=4,j.a.get("https://moj-api.herokuapp.com/debits");case 4:t=e.sent,console.log(t),this.setState({debits:t.data}),this.setState({date:(new Date).toISOString()}),this.sumDebits(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.debits_response&&(console.log(e.t0.debits_response.data),console.log(e.t0.debits_response.status));case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.a.createElement(m.a,{basename:"/bank-of-react"},a.a.createElement("div",null,a.a.createElement(f.b,{exact:!0,path:"/",render:function(){return a.a.createElement(v,{accountBalance:e.state.accountBalance})}}),a.a.createElement(f.b,{exact:!0,path:"/userProfile",render:function(){return a.a.createElement(y,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),a.a.createElement(f.b,{exact:!0,path:"/login",render:function(){return a.a.createElement(g,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),a.a.createElement(f.b,{exact:!0,path:"/credits",render:function(){return a.a.createElement(w,{credits:e.state.credits,creditsTotal:e.state.creditsTotal,debitsTotal:e.state.creditsTotal,addCredit:e.addCredit,balance:e.state.accountBalance,updateAccountBalance:e.updateAccountBalance})}}),a.a.createElement(f.b,{exact:!0,path:"/debits",render:function(){return a.a.createElement(x,{debits:e.state.debits,creditsTotal:e.state.creditsTotal,debitsTotal:e.state.creditsTotal,addDebit:e.addDebit,balance:e.state.accountBalance,updateAccountBalance:e.updateAccountBalance})}})))}}]),t}(r.Component),S=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,63)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null))),S()}},[[41,3,2]]]);
//# sourceMappingURL=main.6f6f3144.chunk.js.map