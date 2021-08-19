(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{19:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),a=c(13),s=c.n(a),r=(c(19),c(20),c(0));var d=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h1",{className:"title",children:"React Weather App"})})})},l=c(3),u=c(14),o=c.n(u);var j=function(e){var t=e.main,c=t.cityTitle,n=t.temperature,i=t.feels,a=t.clouds,s=t.image;return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)("h2",{children:c}),Object(r.jsx)("div",{className:"overcast",children:a}),Object(r.jsx)("img",{width:250,height:250,src:"img/".concat(s,".svg"),alt:"forecast"}),Object(r.jsxs)("div",{className:"temp",children:[n,"\xb0\u0421"]}),Object(r.jsxs)("div",{className:"feels",children:["Feels like ",i,"\xb0\u0421"]})]})};var b=function(e){var t=e.obj,c=t.title,n=t.value,i=t.units,a=t.icon;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{height:90,width:90,src:"img/".concat(a),alt:""}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("div",{children:c}),Object(r.jsx)("div",{className:"value",children:n}),Object(r.jsx)("div",{children:i})]})]})};var h=function(e){var t=e.inputCity,c=e.findCity,n=e.clearInput,i=e.submitCity,a=e.secondary,s=e.date;return Object(r.jsxs)("div",{className:"secondary",children:[Object(r.jsxs)("div",{className:"secondary__title",children:[Object(r.jsx)("div",{className:"secondary__date",children:s}),Object(r.jsxs)("div",{className:"search-block",children:[Object(r.jsx)("input",{onChange:function(e){t(e.target.value)},onClick:n,value:c,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),Object(r.jsx)("button",{onClick:function(){i(c)},children:"Ok"})]})]}),Object(r.jsx)("div",{className:"cards",children:a&&a.map((function(e,t){return Object(r.jsx)(b,{obj:e},"".concat(e.title,"_").concat(t))}))})]})};var m=function(){var e=Object(n.useState)("Minsk"),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)("Minsk"),s=Object(l.a)(a,2),d=s[0],u=s[1],b=Object(n.useState)({}),m=Object(l.a)(b,2),v=m[0],O=m[1],p=Object(n.useState)([]),x=Object(l.a)(p,2),y=x[0],f=x[1],g=Object(n.useState)(""),N=Object(l.a)(g,2),w=N[0],S=N[1];return Object(n.useEffect)((function(){o.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(d,"&appid=f03c11c0e90130d2d5d8db02bc4c5eb4")).then((function(e){var t,c=e.data,n=function(e){var t=new Date(1e3*e),c=t.getMinutes();return c<=9&&(c="0".concat(c)),"".concat(t.getHours(),":").concat(c)};S(function(e){var t=new Date,c=t.getUTCMinutes();return c<=9&&(c="0".concat(c)),"".concat(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][t.getUTCDay()],", ").concat(t.getUTCHours()+e/3600,":").concat(c)}(c.timezone)),O({cityTitle:"".concat(c.name,", ").concat(c.sys.country),temperature:Math.round(c.main.temp-273.15),feels:Math.round(c.main.feels_like-273.15),clouds:c.weather[0].description,image:c.weather[0].icon}),f([{title:"Humidity",value:c.main.humidity,units:"%",icon:"025-humidity.png"},{title:"Weend speed",value:c.wind.speed,units:"m/s",icon:"windspeed.png"},{title:"Weend direction",value:(t=c.wind.deg,["N","NE","E","SE","S","SW","W","NW"][Math.round(8*t/360)]),units:null,icon:"windderection.png"},{title:"Visibility",value:c.visibility,units:"m",icon:"binocular.png"},{title:"Sunrise",value:n(c.sys.sunrise),units:null,icon:"sunrise.png"},{title:"Sunset",value:n(c.sys.sunset),units:null,icon:"sunset.png"}])}))}),[d]),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("div",{className:"content__left",children:Object(r.jsx)(j,{main:v})}),Object(r.jsx)("div",{className:"content__right",children:Object(r.jsx)(h,{date:w,secondary:y,inputCity:function(e){i(e)},findCity:c,clearInput:function(){i("")},submitCity:function(e){u(e)}})})]})};var v=function(){return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(d,{}),Object(r.jsx)(m,{})]})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f96254c6.chunk.js.map