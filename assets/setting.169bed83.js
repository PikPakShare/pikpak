import{d as O,r as E,a3 as J,p as H,o as j,b as C,s as w,e,f as u,aF as $,w as a,aG as p,aH as z,I as A,R as d,Q as _,aI as V,av as r,aJ as B,aK as R,aL as G,aM as L,aN as M,at as Q,ax as b,aO as K,aP as y,V as q,aQ as W,T as X,D as Y,aR as Z,am as uu,y as o,F as n}from"./vendor.122526bd.js";import{s as g,j as eu,i as au}from"./index.0da125a9.js";const lu={class:"list-page"},tu=o("\u7ED1\u5B9A Telegram\u4E28"),ou=n("p",null,null,-1),su=o("\u7ED1\u5B9A"),nu=o("\xA0\xA0\xA0\xA0 "),ru=n("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram \u673A\u5668\u4EBA\u5730\u5740",-1),iu=o("Aria2 \u8BBE\u7F6E\u4E28"),du=o("\u5F00\u542F - \u907F\u514D\u8BF7\u6C42\u9891\u7E41"),Fu=o("\u4E0D\u5F00\u542F - Aria2 \u9ED8\u8BA4\u63A7\u5236"),Eu=n("br",null,null,-1),pu=n("br",null,null,-1),vu=n("br",null,null,-1),Du=n("br",null,null,-1),cu=o("\u5E8F\u5217\u5FAA\u574F"),Au=n("br",null,null,-1),_u=o("\u63A8\u9001\u4E0B\u8F7D\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),fu=o("\u63A8\u9001\u4E0B\u8F7D\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),mu=o("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),Bu=o("\xA0\xA0\xA0\xA0\xA0\xA0 "),bu=n("br",null,null,-1),gu=o("\u4E0B\u8F7D\u8BBE\u7F6E\u4E28"),hu=n("br",null,null,-1),ku=n("br",null,null,-1),Cu=o("\u4FDD\u5B58"),wu=o("\u64AD\u653E\u8BBE\u7F6E\u4E28"),yu=n("br",null,null,-1),Nu=n("br",null,null,-1),xu=n("br",null,null,-1),Su=o("\u4FDD\u5B58"),Pu=o("\u81EA\u52A8\u767B\u5F55\u4E28"),Iu=o("\u4FDD\u5B58"),Uu=o("\u4EE3\u7406\u8BBE\u7F6E\u4E28"),Tu=n("p",null,null,-1),Ou=o("\u4FDD\u5B58\u8BBE\u7F6E"),Ju=n("a",{href:"https://t.me/PikPakGroup",target:"_blank",class:"n-button"},"PikPak \u5206\u4EAB\u7FA4",-1),Hu=o(" \u2022 "),ju=n("a",{href:"https://t.me/PikPakShare",target:"_blank",class:"n-button"},"PikPak \u5206\u4EAB\u9891\u9053",-1),$u=o(" \u2022 "),zu=n("a",{href:"https://t.me/PikPakChannel",target:"_blank",class:"n-button"},"PikPak \u901A\u77E5\u9891\u9053",-1),Vu=o(" \u2022 "),Ru=n("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),Gu=o(" \u2022 "),Lu=n("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),Mu=o(" \u2022 "),Qu=n("a",{href:"https://github.com/northsea4/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),Ku=n("br",null,null,-1),Yu=O({setup(qu){const v=E({serverNumber:"",reverseHost:""}),N=()=>{window.localStorage.setItem("pikpakDownload",JSON.stringify(v.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F")},F=E({serverNumber:"",reverseHost:"",applyToImage:!1}),x=()=>{window.localStorage.setItem("pikpakPlay",JSON.stringify(F.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F")},s=E({host:"http://localhost:6800/jsonrpc",token:"",dir:!0,restrictConnections:!1,batchUrlNum:5,serverNumbers:g,batchStrategy:"series",reverseHost:""});J(()=>s.value.host&&eu(s.value.host));const S=()=>{let i={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};s.value.token&&i.params.splice(0,0,"token:"+s.value.token),fetch(s.value.host,{method:"POST",body:JSON.stringify(i),headers:new Headers({"Content-Type":"application/json"})}).then(l=>l.json()).then(l=>{l.error&&l.error.message?window.$message.error(l.error.message):l.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(s.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(l=>console.error("Error:",l))},f=E(!1),D=E({username:"",password:""}),P=H(),I=()=>{f.value?P.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(D.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},m=E(""),U=()=>{let i=m.value.split(`
`).filter(l=>l!="");window.localStorage.setItem("proxy",JSON.stringify(i)),window.localStorage.setItem("isSettingProxy","true")};j(()=>{let i=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");i.dir===void 0&&(i.dir=!0),i.serverNumbers===void 0&&(i.serverNumbers=g),i.host&&(s.value=i);let l=JSON.parse(window.localStorage.getItem("pikpakDownload")||"{}");v.value=l;let t=JSON.parse(window.localStorage.getItem("pikpakPlay")||"{}");F.value=t;let h=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");h.username&&h.password&&(D.value=h,f.value=!0);let k=JSON.parse(window.localStorage.getItem("proxy")||"[]");k.length&&(m.value=k.join(`
`))});const c=E(),T=()=>{let i=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!i&&!i.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let l=c.value&&decodeURIComponent(c.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(l),!l||!l.length||l.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;au.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:i.access_token,thirdType:"TG",thirdToken:l[2]}).then(t=>{c.value="",t.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(i,l)=>(C(),w("div",lu,[e(u($),{"default-expanded-names":["6"]},{default:a(()=>[e(u(p),{name:"0"},{header:a(()=>[tu,e(u(A),{style:{"vertical-align":"middle"},size:"20",color:"#ff4500"},{default:a(()=>[e(u(z))]),_:1})]),default:a(()=>[e(u(d),{value:c.value,"onUpdate:value":l[0]||(l[0]=t=>c.value=t),placeholder:"\u586B\u5165 Telegram \u7ED1\u5B9A\u94FE\u63A5"},null,8,["value"]),ou,e(u(_),{disabled:!c.value,type:"primary",onClick:T},{default:a(()=>[su]),_:1},8,["disabled"]),nu,ru]),_:1}),e(u(p),{name:"1",title:"Aria2 \u8BBE\u7F6E\u4E28"},{header:a(()=>[iu,e(u(A),{style:{"vertical-align":"middle"},size:"20",color:"#ff4500"},{default:a(()=>[e(u(V))]),_:1})]),default:a(()=>[e(u(b),{"label-width":"120px","label-align":"left","label-placement":"left",autocomplete:"off"},{default:a(()=>[e(u(r),{label:"Aria2 RPC\uFF1A"},{default:a(()=>[e(u(d),{value:s.value.host,"onUpdate:value":l[1]||(l[1]=t=>s.value.host=t),placeholder:"\u4F8B\u5982 http://localhost:6800/jsonrpc",clearable:""},null,8,["value"])]),_:1}),e(u(r),{label:"Aria2 Token\uFF1A"},{default:a(()=>[e(u(d),{value:s.value.token,"onUpdate:value":l[2]||(l[2]=t=>s.value.token=t),type:"password","show-password-on":"mousedown",clearable:""},null,8,["value"])]),_:1}),e(u(r),{label:"\u9650\u5236\u8FDE\u63A5\u6570\uFF1A",feedback:"\u9650\u5236\u8FDE\u63A5\u6570 - \u4E00\u4E2A\u4E0B\u8F7D\u94FE\u63A5\u53EA\u4F7F\u7528\u4E00\u4E2A\u7F51\u7EDC\u8FDE\u63A5/\u7EBF\u7A0B"},{default:a(()=>[e(u(B),{value:s.value.restrictConnections,"onUpdate:value":l[3]||(l[3]=t=>s.value.restrictConnections=t)},{checked:a(()=>[du]),unchecked:a(()=>[Fu]),_:1},8,["value"])]),_:1}),Eu,e(u(r),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u53CD\u4EE3\u57DF\u540D - \u5BF9 Aria2 \u4E0B\u8F7D\u751F\u6548"},{default:a(()=>[e(u(d),{value:s.value.reverseHost,"onUpdate:value":l[4]||(l[4]=t=>s.value.reverseHost=t),placeholder:"\u4F8B\u5982 http://pcdn.xx.com",clearable:""},null,8,["value"])]),_:1}),pu,e(u(r),{label:"\u670D\u52A1\u5668\u5217\u8868\uFF1A"},{default:a(()=>[e(u(R),{value:s.value.serverNumbers,"onUpdate:value":l[5]||(l[5]=t=>s.value.serverNumbers=t)},null,8,["value"])]),_:1}),vu,e(u(r),{label:"\u53E0\u52A0\u6570\u91CF\uFF1A",feedback:"\u53E0\u52A0\u6570\u91CF - \u5BF9\u5E94\u529F\u80FD\u300C\u63A8\u9001\u5230Aria2\u300D\uFF0C\u4F7F\u7528\u591A\u4E2A\u94FE\u63A5\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6"},{default:a(()=>[e(u(G),{value:s.value.batchUrlNum,"onUpdate:value":l[6]||(l[6]=t=>s.value.batchUrlNum=t),placeholder:"\u9700\u8981\u63A8\u9001\u591A\u5C11\u4E2A\u94FE\u63A5\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6",min:0,max:64},null,8,["value"])]),_:1}),Du,e(u(r),{label:"\u53E0\u52A0\u7B56\u7565\uFF1A",feedback:"\u53E0\u52A0\u7B56\u7565 -\u300C\u5E8F\u5217\u5FAA\u574F\u300D\uFF1A\u4ECE\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D\u4E2D\u4ECE\u5934\u5230\u5C3E\u9009\u53D6"},{default:a(()=>[e(u(L),{value:s.value.batchStrategy,"onUpdate:value":l[7]||(l[7]=t=>s.value.batchStrategy=t)},{default:a(()=>[e(u(M),{value:"series",label:"\u5E8F\u5217\u5FAA\u574F"},{default:a(()=>[cu]),_:1})]),_:1},8,["value"])]),_:1}),Au,e(u(r),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:a(()=>[e(u(B),{value:s.value.dir,"onUpdate:value":l[8]||(l[8]=t=>s.value.dir=t)},{checked:a(()=>[_u]),unchecked:a(()=>[fu]),_:1},8,["value"])]),_:1}),e(u(r),null,{default:a(()=>[e(u(_),{type:"primary",onClick:S},{default:a(()=>[mu]),_:1}),Bu,bu,e(u(Q),{type:"warning",title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u6700\u524D\u9762\u7684\u300C\u{1F512}\u300D\u6309\u94AE\u300C\u7F51\u7AD9\u8BBE\u7F6E\u300D\u9009\u9879\u4E2D\uFF0C\u5C06\u300C\u4E0D\u5B89\u5168\u5185\u5BB9\u300D\u8BBE\u7F6E\u4E3A\u300C\u5141\u8BB8\u300D"})]),_:1})]),_:1})]),_:1}),e(u(p),{name:"2",title:"\u4E0B\u8F7D\u8BBE\u7F6E\u4E28"},{header:a(()=>[gu,e(u(A),{style:{"vertical-align":"middle"},size:"20",color:"#ff4500"},{default:a(()=>[e(u(K))]),_:1})]),default:a(()=>[e(u(b),{"label-width":"120px","label-align":"left","label-placement":"left"},{default:a(()=>[e(u(r),{label:"\u670D\u52A1\u5668\u5E8F\u53F7\uFF1A",feedback:"\u670D\u52A1\u5668\u5E8F\u53F7 - \u66FF\u6362\u4E0B\u8F7D\u94FE\u63A5\u57DF\u540D\u4E2D\u7684\u670D\u52A1\u5668\u5E8F\u53F7\uFF0C\u5E8F\u53F7\u8BF7\u53C2\u8003\u4E0A\u9762\u300CAria2 \u8BBE\u7F6E\u300D\u91CC\u7684\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D"},{default:a(()=>[e(u(y),{value:v.value.serverNumber,"onUpdate:value":l[9]||(l[9]=t=>v.value.serverNumber=t),options:u(g),placeholder:"\u4E0B\u8F7D\u670D\u52A1\u5668\u5E8F\u53F7",clearable:""},null,8,["value","options"])]),_:1}),hu,e(u(r),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u53CD\u4EE3\u57DF\u540D - \u81EA\u52A8\u5728\u4E0B\u8F7D\u94FE\u63A5\u524D\u52A0\u4E0A\u8BE5\u53CD\u4EE3\u57DF\u540D"},{default:a(()=>[e(u(d),{value:v.value.reverseHost,"onUpdate:value":l[10]||(l[10]=t=>v.value.reverseHost=t),placeholder:"\u53CD\u4EE3\u57DF\u540D",clearable:""},null,8,["value"])]),_:1}),ku,e(u(r),null,{default:a(()=>[e(u(_),{type:"primary",onClick:N},{default:a(()=>[Cu]),_:1})]),_:1})]),_:1})]),_:1}),e(u(p),{name:"3",title:"\u64AD\u653E\u8BBE\u7F6E\u4E28"},{header:a(()=>[wu,e(u(A),{style:{"vertical-align":"middle"},size:"20",color:"#ff4500"},{default:a(()=>[e(u(q))]),_:1})]),default:a(()=>[e(u(b),{"label-width":"120px","label-align":"left","label-placement":"left"},{default:a(()=>[e(u(r),{label:"\u670D\u52A1\u5668\u5E8F\u53F7\uFF1A",feedback:"\u670D\u52A1\u5668\u5E8F\u53F7 - \u66FF\u6362\u64AD\u653E\u94FE\u63A5\u57DF\u540D\u4E2D\u7684\u670D\u52A1\u5668\u5E8F\u53F7\uFF0C\u5E8F\u53F7\u8BF7\u53C2\u8003\u4E0A\u9762\u300CAria2\u8BBE\u7F6E\u300D\u91CC\u7684\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D"},{default:a(()=>[e(u(y),{value:F.value.serverNumber,"onUpdate:value":l[11]||(l[11]=t=>F.value.serverNumber=t),options:u(g),placeholder:"\u670D\u52A1\u5668\u5E8F\u53F7",clearable:""},null,8,["value","options"])]),_:1}),yu,e(u(r),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u53CD\u4EE3\u57DF\u540D - \u81EA\u52A8\u5728\u64AD\u653E\u94FE\u63A5\u524D\u52A0\u4E0A\u8BE5\u53CD\u4EE3\u57DF\u540D"},{default:a(()=>[e(u(d),{value:F.value.reverseHost,"onUpdate:value":l[12]||(l[12]=t=>F.value.reverseHost=t),placeholder:"\u53CD\u4EE3\u57DF\u540D",clearable:""},null,8,["value"])]),_:1}),Nu,e(u(r),{label:"\u5E94\u7528\u5230\u56FE\u7247\u67E5\u770B\uFF1A",feedback:"\u5E94\u7528\u5230\u56FE\u7247\u67E5\u770B - \u67E5\u770B\u56FE\u7247\u65F6\u4E5F\u4F7F\u7528\u6307\u5B9A\u5E8F\u53F7\u548C\u53CD\u4EE3\u57DF\u540D"},{default:a(()=>[e(u(B),{value:F.value.applyToImage,"onUpdate:value":l[13]||(l[13]=t=>F.value.applyToImage=t)},null,8,["value"])]),_:1}),xu,e(u(r),null,{default:a(()=>[e(u(_),{type:"primary",onClick:x},{default:a(()=>[Su]),_:1})]),_:1})]),_:1})]),_:1}),e(u(p),{name:"4",title:"\u81EA\u52A8\u767B\u5F55\u4E28"},{header:a(()=>[Pu,e(u(A),{style:{"vertical-align":"middle"},size:"20",color:"#ff4500"},{default:a(()=>[e(u(W))]),_:1})]),default:a(()=>[e(u(b),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[e(u(r),{label:"\u662F\u5426\u5F00\u542F"},{default:a(()=>[e(u(B),{value:f.value,"onUpdate:value":l[14]||(l[14]=t=>f.value=t)},null,8,["value"])]),_:1}),f.value?(C(),w(X,{key:0},[e(u(r),{label:"\u7528\u6237\u540D"},{default:a(()=>[e(u(d),{value:D.value.username,"onUpdate:value":l[15]||(l[15]=t=>D.value.username=t),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),e(u(r),{label:"\u5BC6\u7801"},{default:a(()=>[e(u(d),{value:D.value.password,"onUpdate:value":l[16]||(l[16]=t=>D.value.password=t),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):Y("",!0),e(u(r),null,{default:a(()=>[e(u(_),{type:"primary",onClick:I},{default:a(()=>[Iu]),_:1})]),_:1})]),_:1})]),_:1}),e(u(p),{name:"5"},{header:a(()=>[Uu,e(u(A),{style:{"vertical-align":"middle"},size:"20",color:"#ff4500"},{default:a(()=>[e(u(Z))]),_:1})]),default:a(()=>[e(u(d),{type:"textarea",value:m.value,"onUpdate:value":l[17]||(l[17]=t=>m.value=t),rows:"4",placeholder:"\u652F\u6301\u591A\u4E2A\u968F\u673A\uFF0C\u4E00\u884C\u4E00\u4E2A\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u4EE3\u7406"},null,8,["value"]),Tu,e(u(_),{type:"primary",onClick:U},{default:a(()=>[Ou]),_:1})]),_:1}),e(u(p),{title:"\u5173\u4E8E",name:"6"},{default:a(()=>[e(u(uu),null,{default:a(()=>[Ju,Hu,ju,$u,zu,Vu,Ru,Gu,Lu,Mu,Qu]),_:1}),Ku]),_:1})]),_:1})]))}});export{Yu as default};