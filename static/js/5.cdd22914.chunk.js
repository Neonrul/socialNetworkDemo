(this["webpackJsonpkabzda-1"]=this["webpackJsonpkabzda-1"]||[]).push([[5],{298:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__9qPS6",dialog:"Dialogs_dialog__1DeYB",dialogsItems:"Dialogs_dialogsItems__hYoaA",avatar:"Dialogs_avatar__38bm0",messages:"Dialogs_messages__1VvCe",message:"Dialogs_message__2ftph"}},300:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}a.d(t,"a",(function(){return d}));var l=a(0),f=a.n(l),m=a(10),p=a(13),g=function(e){return{isAuth:e.authentication.isAuth}},d=function(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(d,t);var a,c,l,p,g=(a=d,function(){var e,t=s(a);if(i()){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function d(){return n(this,d),g.apply(this,arguments)}return c=d,(l=[{key:"render",value:function(){return this.props.isAuth?f.a.createElement(e,this.props):f.a.createElement(m.a,{to:"/login/"})}}])&&r(c.prototype,l),p&&r(c,p),d}(f.a.Component);return Object(p.b)(g)(t)}},304:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(130),s=a(298),i=a.n(s),c=a(15),u=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:i.a.dialog},r.a.createElement("img",{className:i.a.avatar,src:"https://www.digitalvertigo.co.uk/forum/uploads//monthly_05_2016/post-3489-0-19929300-1462982286.jpg"}),r.a.createElement(c.b,{to:t},e.name))},l=function(e){return r.a.createElement("div",{className:i.a.message},r.a.createElement("img",{className:i.a.avatar,src:"https://playjoor.com/assets/avatar/steve.jpg"}),r.a.createElement("text",null,e.message))},f=a(129),m=a(131),p=function(e){var t=e.dialogs.map((function(e){return r.a.createElement(u,{name:e.name,id:e.id})})),a=e.messages.map((function(e){return r.a.createElement(l,{message:e.message})})),n=Object(m.a)({form:"messageText"})(f.a);return r.a.createElement("div",{className:i.a.dialogs},r.a.createElement("div",{className:i.a.dialogsItems},t),r.a.createElement("div",null,r.a.createElement("div",{className:i.a.messages},a),r.a.createElement("div",{className:i.a.dialogsItems},r.a.createElement(n,{onSubmit:function(t){return e.addMessage(t.textArea)},btnText:"Send",placeholderText:"Enter your message"}))))},g=a(13),d=a(300),b=a(9),y={addMessage:o.a};t.default=Object(b.d)(Object(g.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),y),d.a)(p)}}]);
//# sourceMappingURL=5.cdd22914.chunk.js.map