(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[631],{1393:function(e,t,s){s(6573),s(8100),s(7936),s(7467),s(4732),s(9577),s(4979),s(4603),s(7566),s(8721),function(t,s){e.exports=s()}(0,(function(){return function(e){var t={};function s(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(i,o,function(t){return e[t]}.bind(null,o));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";var i;function o(e){return["image/png","image/jpeg","image/gif"].some((t=>t===e))}s.r(t),s.d(t,"canvastoDataURL",(function(){return a})),s.d(t,"canvastoFile",(function(){return n})),s.d(t,"dataURLtoFile",(function(){return u})),s.d(t,"dataURLtoImage",(function(){return d})),s.d(t,"downloadFile",(function(){return c})),s.d(t,"filetoDataURL",(function(){return p})),s.d(t,"imagetoCanvas",(function(){return h})),s.d(t,"urltoBlob",(function(){return f})),s.d(t,"urltoImage",(function(){return g})),s.d(t,"compress",(function(){return y})),s.d(t,"compressAccurately",(function(){return k})),s.d(t,"EImageType",(function(){return i})),function(e){e.PNG="image/png",e.JPEG="image/jpeg",e.GIF="image/gif"}(i||(i={}));var l=function(e,t,s,i){return new(s||(s=Promise))((function(o,l){function a(e){try{r(i.next(e))}catch(e){l(e)}}function n(e){try{r(i.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,n)}r((i=i.apply(e,t||[])).next())}))};function a(e,t=.92,s=i.JPEG){return l(this,void 0,void 0,(function*(){return o(s)||(s=i.JPEG),e.toDataURL(s,t)}))}function n(e,t=.92,s=i.JPEG){return new Promise((i=>e.toBlob((e=>i(e)),s,t)))}var r=function(e,t,s,i){return new(s||(s=Promise))((function(o,l){function a(e){try{r(i.next(e))}catch(e){l(e)}}function n(e){try{r(i.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,n)}r((i=i.apply(e,t||[])).next())}))};function u(e,t){return r(this,void 0,void 0,(function*(){const s=e.split(",");let i=s[0].match(/:(.*?);/)[1];const l=atob(s[1]);let a=l.length;const n=new Uint8Array(a);for(;a--;)n[a]=l.charCodeAt(a);return o(t)&&(i=t),new Blob([n],{type:i})}))}function d(e){return new Promise(((t,s)=>{const i=new Image;i.onload=()=>t(i),i.onerror=()=>s(new Error("dataURLtoImage(): dataURL is illegal")),i.src=e}))}function c(e,t){const s=document.createElement("a");s.href=window.URL.createObjectURL(e),s.download=t||Date.now().toString(36),document.body.appendChild(s);const i=document.createEvent("MouseEvents");i.initEvent("click",!1,!1),s.dispatchEvent(i),document.body.removeChild(s)}function p(e){return new Promise((t=>{const s=new FileReader;s.onloadend=e=>t(e.target.result),s.readAsDataURL(e)}))}var m=function(e,t,s,i){return new(s||(s=Promise))((function(o,l){function a(e){try{r(i.next(e))}catch(e){l(e)}}function n(e){try{r(i.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,n)}r((i=i.apply(e,t||[])).next())}))};function h(e,t={}){return m(this,void 0,void 0,(function*(){const s=Object.assign({},t),i=document.createElement("canvas"),o=i.getContext("2d");let l,a;for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&(s[e]=Number(s[e]));if(s.scale){const t=s.scale>0&&s.scale<10?s.scale:1;a=e.width*t,l=e.height*t}else a=s.width||s.height*e.width/e.height||e.width,l=s.height||s.width*e.height/e.width||e.height;switch([5,6,7,8].some((e=>e===s.orientation))?(i.height=a,i.width=l):(i.height=l,i.width=a),s.orientation){case 3:o.rotate(180*Math.PI/180),o.drawImage(e,-i.width,-i.height,i.width,i.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(e,0,-i.width,i.height,i.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(e,-i.height,0,i.height,i.width);break;case 2:o.translate(i.width,0),o.scale(-1,1),o.drawImage(e,0,0,i.width,i.height);break;case 4:o.translate(i.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(e,-i.width,-i.height,i.width,i.height);break;case 5:o.translate(i.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(e,0,-i.width,i.height,i.width);break;case 7:o.translate(i.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(e,-i.height,0,i.height,i.width);break;default:o.drawImage(e,0,0,i.width,i.height)}return i}))}function f(e){return fetch(e).then((e=>e.blob()))}function g(e){return new Promise(((t,s)=>{const i=new Image;i.onload=()=>t(i),i.onerror=()=>s(new Error("urltoImage(): Image failed to load, please check the image URL")),i.src=e}))}var b=function(e,t,s,i){return new(s||(s=Promise))((function(o,l){function a(e){try{r(i.next(e))}catch(e){l(e)}}function n(e){try{r(i.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,n)}r((i=i.apply(e,t||[])).next())}))};function y(e,t={}){return b(this,void 0,void 0,(function*(){if(!(e instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if("object"!=typeof t&&(t=Object.assign({quality:t})),t.quality=Number(t.quality),Number.isNaN(t.quality))return e;const s=yield p(e);let l=s.split(",")[0].match(/:(.*?);/)[1],n=i.JPEG;o(t.type)&&(n=t.type,l=t.type);const r=yield d(s),c=yield h(r,Object.assign({},t)),m=yield a(c,t.quality,n),f=yield u(m,l);return f.size>e.size?e:f}))}function k(e,t={}){return b(this,void 0,void 0,(function*(){if(!(e instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if("object"!=typeof t&&(t=Object.assign({size:t})),t.size=Number(t.size),Number.isNaN(t.size))return e;if(1024*t.size>e.size)return e;t.accuracy=Number(t.accuracy),(!t.accuracy||t.accuracy<.8||t.accuracy>.99)&&(t.accuracy=.95);const s=t.size*(2-t.accuracy)*1024,l=1024*t.size,n=t.size*t.accuracy*1024,r=yield p(e);let c=r.split(",")[0].match(/:(.*?);/)[1],m=i.JPEG;o(t.type)&&(m=t.type,c=t.type);const f=yield d(r),g=yield h(f,Object.assign({},t));let b,y=.5;const k=[null,null];for(let e=1;e<=7;e++){b=yield a(g,y,m);const t=.75*b.length;if(7===e){(s<t||n>t)&&(b=[b,...k].filter((e=>e)).sort(((e,t)=>Math.abs(.75*e.length-l)-Math.abs(.75*t.length-l)))[0]);break}if(s<t)k[1]=b,y-=Math.pow(.5,e+1);else{if(!(n>t))break;k[0]=b,y+=Math.pow(.5,e+1)}}const C=yield u(b,c);return C.size>e.size?e:C}))}}])}))},6334:function(e,t,s){e.exports=s(1393)},9631:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return re}});var i=s(6768);const o={class:"page-footer"},l=["href"];function a(e,t,s,a,n,r){const u=(0,i.g2)("font-awesome-icon");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("p",null,[t[0]||(t[0]=(0,i.eW)("© 2024 Designed by ")),t[1]||(t[1]=(0,i.Lk)("a",{class:"footer-name",href:"https://github.com/MarSeventh",target:"_blank"},"SanyueQi",-1)),t[2]||(t[2]=(0,i.eW)(" for You! ")),(0,i.Lk)("a",{href:r.footerLink,target:"_blank"},[(0,i.bF)(u,{icon:"paper-plane",class:"footer-link-icon"})],8,l)])])}var n=s(782),r={name:"Footer",computed:{...(0,n.L8)(["userConfig"]),footerLink(){return this.userConfig?.footerLink||"https://sanyue.site"}}},u=s(1241);const d=(0,u.A)(r,[["render",a],["__scopeId","data-v-7e2cb514"]]);var c=d,p=s(4757),m=(s(5331),s(9092),s(213),s(5558)),h=(s(456),s(7377)),f=(s(5616),s(2006)),g=s(2105),b=s(6810),y=s(683),k=(s(5385),s(2657)),C=(s(5970),s(9655)),w=s(47),L=(s(8050),s(9017)),U=(s(6055),s(8830),s(3597),s(1450)),v=(s(9648),s(4253)),F=s(7358),x=s(813),_=s(4232);const P={class:"upload-form"},R={class:"upload-list-dashboard-action"},I=["href"],W={key:0,style:{width:"10vw","border-radius":"12px"},autoplay:"",muted:"",playsinline:"",loop:""},T=["src"],S=["src","onError"],$={class:"upload-list-item-content"},V={key:0,class:"upload-list-item-url"},E={class:"upload-list-item-url-row"},z={class:"upload-list-item-url-row"},B={key:1,class:"upload-list-item-progress"},D={class:"upload-list-item-action"};function j(e,t,o,l,a,n){const r=(0,i.g2)("CameraFilled"),u=x.tk,d=F.j5,c=(0,i.g2)("List"),p=(0,i.g2)("Checked"),m=(0,i.g2)("Failed"),h=v.$g,f=(0,i.g2)("font-awesome-icon"),b=w.S2,j=U.R7,N=L.c6,M=L.Iy,A=L.dW,O=w.fg,Q=g.WK,q=C.ve,X=(0,i.g2)("Link"),G=(0,i.g2)("Delete"),J=k.kA,H=y.Ik;return(0,i.uX)(),(0,i.CE)("div",P,[(0,i.bF)(d,{class:(0,_.C4)(["upload-card",{"is-uploading":a.uploading,"upload-card-busy":a.fileList.length}]),drag:"",multiple:"","http-request":n.uploadFile,onSuccess:n.handleSuccess,"on-error":n.handleError,"before-upload":n.beforeUpload,"on-progress":n.handleProgress,"file-list":a.fileList,"show-file-list":!1},{tip:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.Lk)("div",{class:"el-upload__tip"},"支持多文件上传，支持所有常见文件格式，Telegram渠道不支持超过20MB",-1)]))),default:(0,i.k6)((()=>[(0,i.bF)(u,{class:"el-icon--upload",size:100},{default:(0,i.k6)((()=>[(0,i.bF)(r,{color:"blanchedalmond"})])),_:1}),t[1]||(t[1]=(0,i.Lk)("div",{class:"el-upload__text"},[(0,i.Lk)("em",null,"拖拽"),(0,i.eW)(),(0,i.Lk)("em",null,"点击"),(0,i.eW)(" 或 "),(0,i.Lk)("em",null,"Ctrl + V"),(0,i.eW)(" 粘贴上传")],-1))])),_:1},8,["class","http-request","onSuccess","on-error","before-upload","on-progress","file-list"]),(0,i.bF)(H,{class:(0,_.C4)(["upload-list-card",{"upload-list-busy":a.fileList.length}])},{default:(0,i.k6)((()=>[(0,i.Lk)("div",{class:(0,_.C4)(["upload-list-container",{"upload-list-busy":a.fileList.length}])},[(0,i.bF)(J,{onScroll:n.handleScroll,ref:"scrollContainer"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",{class:(0,_.C4)(["upload-list-dashboard",{"list-scrolled":a.listScrolled}])},[(0,i.bF)(h,{class:"upload-list-dashboard-title"},{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(c)])),_:1}),(0,i.eW)((0,_.v_)(n.uploadingCount+n.waitingCount)+" ",1),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(p)])),_:1}),(0,i.eW)((0,_.v_)(n.uploadSuccessCount)+" ",1),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(m)])),_:1}),(0,i.eW)((0,_.v_)(n.uploadErrorCount),1)])),_:1}),(0,i.Lk)("div",R,[(0,i.bF)(O,null,{default:(0,i.k6)((()=>[(0,i.bF)(j,{disabled:n.disableTooltip,content:"整体复制",placement:"top"},{default:(0,i.k6)((()=>[(0,i.bF)(b,{type:"primary",round:"",onClick:n.copyAll,alt:"整体复制"},{default:(0,i.k6)((()=>[(0,i.bF)(f,{icon:"copy"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,i.bF)(j,{disabled:n.disableTooltip,content:"失败重试",placement:"top"},{default:(0,i.k6)((()=>[(0,i.bF)(b,{type:"primary",onClick:n.retryError},{default:(0,i.k6)((()=>[(0,i.bF)(f,{icon:"redo"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,i.bF)(j,{disabled:n.disableTooltip,content:"清空列表",placement:"top",style:{border:"none"}},{default:(0,i.k6)((()=>[(0,i.bF)(A,null,{dropdown:(0,i.k6)((()=>[(0,i.bF)(M,{slot:"dropdown"},{default:(0,i.k6)((()=>[(0,i.bF)(N,{onClick:n.clearFileList},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.eW)("清空全部")]))),_:1},8,["onClick"]),(0,i.bF)(N,{onClick:n.clearSuccessList},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.eW)("清空已上传")]))),_:1},8,["onClick"])])),_:1})])),default:(0,i.k6)((()=>[(0,i.bF)(b,{type:"primary",round:"",style:{outline:"none","border-right":"none"}},{default:(0,i.k6)((()=>[(0,i.bF)(f,{icon:"trash-alt"})])),_:1})])),_:1})])),_:1},8,["disabled"])])),_:1})])],2),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.fileList.slice().reverse(),(e=>((0,i.uX)(),(0,i.CE)("div",{class:"upload-list-item",key:e.name,span:8},[(0,i.Lk)("a",{href:e.url,target:"_blank"},[n.isVideo(e.name)?((0,i.uX)(),(0,i.CE)("video",W,[(0,i.Lk)("source",{src:e.url,type:"video/mp4"},null,8,T),t[4]||(t[4]=(0,i.eW)(" Your browser does not support the video tag. "))])):((0,i.uX)(),(0,i.CE)("img",{key:1,style:{width:"10vw","border-radius":"12px"},src:e.url,onError:t=>e.url=s(6682)},null,40,S))],8,I),(0,i.Lk)("div",$,[(0,i.bF)(h,{class:"upload-list-item-name",truncated:""},{default:(0,i.k6)((()=>[(0,i.eW)((0,_.v_)(e.name),1)])),_:2},1024),"done"===e.status?((0,i.uX)(),(0,i.CE)("div",V,[(0,i.Lk)("div",E,[(0,i.bF)(Q,{modelValue:e.finalURL,"onUpdate:modelValue":t=>e.finalURL=t,readonly:"",onClick:n.selectAllText,size:n.urlSize},{prepend:(0,i.k6)((()=>t[5]||(t[5]=[(0,i.eW)("URL")]))),_:2},1032,["modelValue","onUpdate:modelValue","onClick","size"]),(0,i.bF)(Q,{modelValue:e.mdURL,"onUpdate:modelValue":t=>e.mdURL=t,readonly:"",onClick:n.selectAllText,size:n.urlSize},{prepend:(0,i.k6)((()=>t[6]||(t[6]=[(0,i.eW)("MarkDown")]))),_:2},1032,["modelValue","onUpdate:modelValue","onClick","size"])]),(0,i.Lk)("div",z,[(0,i.bF)(Q,{modelValue:e.htmlURL,"onUpdate:modelValue":t=>e.htmlURL=t,readonly:"",onClick:n.selectAllText,size:n.urlSize},{prepend:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("HTML")]))),_:2},1032,["modelValue","onUpdate:modelValue","onClick","size"]),(0,i.bF)(Q,{modelValue:e.ubbURL,"onUpdate:modelValue":t=>e.ubbURL=t,readonly:"",onClick:n.selectAllText,size:n.urlSize},{prepend:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.eW)("BBCode")]))),_:2},1032,["modelValue","onUpdate:modelValue","onClick","size"])])])):((0,i.uX)(),(0,i.CE)("div",B,[(0,i.bF)(q,{percentage:e.progreess,status:e.status,"show-text":!1},null,8,["percentage","status"])]))]),(0,i.Lk)("div",D,[(0,i.bF)(b,{type:"primary",circle:"",class:"upload-list-item-action-button",onClick:t=>n.handleCopy(e)},{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(X)])),_:1})])),_:2},1032,["onClick"]),(0,i.bF)(b,{type:"danger",circle:"",class:"upload-list-item-action-button",onClick:t=>n.handleRemove(e)},{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(G)])),_:1})])),_:2},1032,["onClick"])])])))),128))])),_:1},8,["onScroll"])],2)])),_:1},8,["class"])])}s(4114),s(4603),s(7566),s(8721);var N=s(4373),M=s(4570),A=s.n(M),O=s(6334),Q={name:"UploadForm",props:{selectedUrlForm:{type:String,default:"url",required:!1},customerCompress:{type:Boolean,default:!0,required:!1},compressQuality:{type:Number,default:4,required:!1},compressBar:{type:Number,default:5,required:!1},serverCompress:{type:Boolean,default:!0,required:!1},uploadChannel:{type:String,default:"telegram",required:!1},uploadNameType:{type:String,default:"default",required:!1},useCustomUrl:{type:String,default:"false",required:!1},customUrlPrefix:{type:String,default:"",required:!1},autoRetry:{type:Boolean,default:!0,required:!1}},data(){return{fileList:[],uploading:!1,maxUploading:6,waitingList:[],exceptionList:[],listScrolled:!1,fileListLength:0,uploadCount:0}},watch:{fileList:{handler(){this.fileList.length>this.fileListLength&&this.$nextTick((()=>{setTimeout((()=>{this.$refs.scrollContainer.setScrollTop(0)}),100)})),this.fileListLength=this.fileList.length},deep:!0},useCustomUrl:{handler(){if("true"===this.useCustomUrl)this.fileList.forEach((e=>{e.finalURL=this.customUrlPrefix+e.srcID,e.mdURL=`![${e.name}](${this.customUrlPrefix+e.srcID})`,e.htmlURL=`<img src="${this.customUrlPrefix+e.srcID}" alt="${e.name}" width=100% />`,e.ubbURL=`[img]${this.customUrlPrefix+e.srcID}[/img]`}));else{const e=`${window.location.protocol}//${window.location.host}/file/`;this.fileList.forEach((t=>{t.finalURL=e+t.srcID,t.mdURL=`![${t.name}](${e+t.srcID})`,t.htmlURL=`<img src="${e+t.srcID}" alt="${t.name}" width=100% />`,t.ubbURL=`[img]${e+t.srcID}[/img]`}))}},immediate:!0},customUrlPrefix:{handler(){"true"===this.useCustomUrl&&this.fileList.forEach((e=>{e.finalURL=this.customUrlPrefix+e.srcID,e.mdURL=`![${e.name}](${this.customUrlPrefix+e.srcID})`,e.htmlURL=`<img src="${this.customUrlPrefix+e.srcID}" alt="${e.name}" width=100% />`,e.ubbURL=`[img]${this.customUrlPrefix+e.srcID}[/img]`}))},immediate:!0}},computed:{uploadSuccessCount(){return this.fileList.filter((e=>"done"===e.status||"success"===e.status)).length},uploadErrorCount(){return this.fileList.filter((e=>"exception"===e.status)).length},uploadingCount(){return this.fileList.filter((e=>"uploading"===e.status)).length},waitingCount(){return this.waitingList.length},urlSize(){return window.innerWidth<768?"small":"default"},disableTooltip(){return window.innerWidth<768}},mounted(){document.addEventListener("paste",this.handlePaste)},beforeUnmount(){document.removeEventListener("paste",this.handlePaste)},methods:{uploadFile(e){if(!this.fileList.find((t=>t.uid===e.file.uid)))return;if(this.uploadingCount>this.maxUploading)return this.waitingList.push(e),void(this.fileList.find((t=>t.uid===e.file.uid)).status="waiting");this.fileList.find((t=>t.uid===e.file.uid)).status="uploading";const t=new FormData;t.append("file",e.file);const s=this.fileList.find((t=>t.uid===e.file.uid)).serverCompress;(0,N.A)({url:"/upload?authCode="+A().get("authCode")+"&serverCompress="+s+"&uploadChannel="+this.uploadChannel+"&uploadNameType="+this.uploadNameType+"&autoRetry="+this.autoRetry,method:"post",data:t,onUploadProgress:t=>{const s=Math.round(t.loaded/t.total*100);e.onProgress({percent:s,file:e.file})}}).then((t=>{e.onSuccess(t,e.file)})).catch((t=>{t.response&&401===t.response.status?(this.waitingList=[],this.fileList=[],this.$message.error("认证状态错误！"),this.$router.push("/login")):(this.exceptionList.push(e),e.onError(t,e.file))})).finally((()=>{this.uploadingCount+this.waitingCount===0&&(this.uploading=!1)}))},handleRemove(e){this.fileList=this.fileList.filter((t=>t.uid!==e.uid)),this.$message({type:"info",message:e.name+"已删除"})},handleSuccess(e,t){try{const s="true"===this.useCustomUrl?this.customUrlPrefix:`${window.location.protocol}//${window.location.host}/file/`,i=e.data[0].src.replace("/file/","");this.fileList.find((e=>e.uid===t.uid)).url=`${window.location.protocol}//${window.location.host}/file/`+i,this.fileList.find((e=>e.uid===t.uid)).finalURL=s+i,this.fileList.find((e=>e.uid===t.uid)).mdURL=`![${t.name}](${s+i})`,this.fileList.find((e=>e.uid===t.uid)).htmlURL=`<img src="${s+i}" alt="${t.name}" width=100% />`,this.fileList.find((e=>e.uid===t.uid)).ubbURL=`[img]${s+i}[/img]`,this.fileList.find((e=>e.uid===t.uid)).srcID=i,this.fileList.find((e=>e.uid===t.uid)).progreess=100,this.fileList.find((e=>e.uid===t.uid)).status="success",this.$message({type:"success",message:t.name+"上传成功"}),setTimeout((()=>{this.fileList.find((e=>e.uid===t.uid)).status="done"}),1e3)}catch(s){this.$message.error(t.name+"上传失败"),this.fileList.find((e=>e.uid===t.uid)).status="exception"}finally{if(this.uploadingCount+this.waitingCount===0&&(this.uploading=!1),this.waitingList.length){const e=this.waitingList.shift();this.uploadFile(e)}}},handleError(e,t){if(this.$message.error(t.name+"上传失败"),this.fileList.find((e=>e.uid===t.uid)).status="exception",this.waitingList.length){const e=this.waitingList.shift();this.uploadFile(e)}this.uploadingCount+this.waitingCount===0&&(this.uploading=!1)},handleCopy(e){const t=this.fileList.find((t=>t.uid===e.uid)).status;"done"===t||"success"===t?("url"===this.selectedUrlForm?navigator.clipboard.writeText(e.finalURL):"md"===this.selectedUrlForm?navigator.clipboard.writeText(e.mdURL):"html"===this.selectedUrlForm?navigator.clipboard.writeText(e.htmlURL):"ubb"===this.selectedUrlForm?navigator.clipboard.writeText(e.ubbURL):navigator.clipboard.writeText(e.finalURL),this.$message({type:"success",message:"复制成功"})):this.$message({type:"warning",message:"文件未上传成功，无法复制链接"})},beforeUpload(e){return new Promise(((t,s)=>{const i=e.type.includes("image")&&(this.customerCompress&&e.size/1024/1024>this.compressBar||"telegram"===this.uploadChannel&&e.size/1024/1024>20),o=e.size/1024/1024<20||"telegram"!==this.uploadChannel,l=(e,s)=>{const i=URL.createObjectURL(e);this.fileList.push({uid:e.uid,name:e.name,url:i,finalURL:"",mdURL:"",htmlURL:"",ubbURL:"",srcID:"",status:"uploading",progreess:0,serverCompress:s}),t(e)};if(i)O.compressAccurately(e,1024*this.compressQuality).then((t=>{t.size/1024/1024>20&&"telegram"===this.uploadChannel&&(this.$message.error(e.name+"压缩后文件过大，无法上传!"),s("文件过大")),this.uploading=!0;const i=new File([t],e.name,{type:t.type});i.uid=e.uid;const o=this.uploadCount++,a=this.serverCompress&&i.size/1024/1024<10&&"telegram"===this.uploadChannel;0===o?l(i,a):setTimeout((()=>{l(i,a),this.uploadCount--}),300*o)})).catch((t=>{this.$message.error(e.name+"压缩失败，无法上传!"),s(t)}));else if(o){this.uploading=!0;const t=this.uploadCount++,s="telegram"===this.uploadChannel&&this.serverCompress&&(!e.type.includes("image")||e.size/1024/1024<10);0===t?l(e,s):setTimeout((()=>{l(e,s),this.uploadCount--}),300*t)}else this.$message.error(e.name+"文件过大，无法上传!"),s("文件过大")}))},handleProgress(e){this.fileList.find((t=>t.uid===e.file.uid)).progreess=e.percent},copyAll(){if("url"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.finalURL})).join("\n");navigator.clipboard.writeText(e)}else if("md"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.mdURL})).join("\n");navigator.clipboard.writeText(e)}else if("html"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.htmlURL})).join("\n");navigator.clipboard.writeText(e)}else if("ubb"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.ubbURL})).join("\n");navigator.clipboard.writeText(e)}else{const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.finalURL})).join("\n");navigator.clipboard.writeText(e)}this.$message({type:"success",message:"整体复制成功"})},clearFileList(){this.fileList.length>0?(this.fileList=[],this.$message({type:"success",message:"文件列表已清空"})):this.$message({type:"info",message:"文件列表为空"})},clearSuccessList(){this.uploadSuccessCount>0?(this.fileList=this.fileList.filter((e=>"done"!==e.status&&"success"!==e.status)),this.$message({type:"success",message:"成功上传文件已清空"})):this.$message({type:"info",message:"成功上传文件为空"})},handlePaste(e){if("INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return;const t=e.clipboardData.items;for(let s=0;s<t.length;s++)if("file"===t[s].kind){const e=t[s].getAsFile();if(e.type.includes("image")||e.type.includes("video")){e.uid=Date.now()+s,e.file=e;const t=this.beforeUpload(e);t instanceof Promise&&t.then((e=>{e instanceof File&&this.uploadFile({file:e,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})).catch((e=>{console.log(e)}))}else this.$message({type:"warning",message:"粘贴板中的文件不是图片或视频"})}else"string"===t[s].kind&&t[s].getAsString((e=>{const t=/^(https?:\/\/[^\s$.?#].[^\s]*)$/;let i="";t.test(e)&&fetch("/api/fetchRes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((t=>{const o=t.headers.get("content-type");if(200==t.status&&(o.includes("image")||o.includes("video"))){const o=t.headers.get("Content-Disposition");if(o){const e=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/,t=/filename\*\s*=\s*UTF-8''([^;\n]*)/;let s=e.exec(o);if(null!=s&&s[1]){i=s[1].replace(/['"]/g,"");try{i=decodeURIComponent(i)}catch(l){i=""}}""===i&&(s=t.exec(o),null!=s&&s[1]&&(i=decodeURIComponent(s[1])))}if(""===i){const t=new URL(e);i=t.pathname.split("/").pop()}if(""===i){const t=new URL(e);let o=t.pathname.split(".").pop();["jpg","jpeg","png","gif","bmp","webp","mp4","webm","ogg","mkv"].includes(o)||(o="jpeg"),i="PastedFile"+Date.now()+s+"."+o}return t.blob()}throw new Error("URL地址的内容不是图片或视频")})).then((e=>{const t=new File([e],i,{type:e.type});t.uid=Date.now()+s,t.file=t;const o=this.beforeUpload(t);o instanceof Promise&&o.then((e=>{e instanceof File&&this.uploadFile({file:e,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})).catch((e=>{console.log(e)}))})).catch((e=>{this.$message({type:"warning",message:"粘贴板中的URL地址的内容不是图片或视频"})}))}))},selectAllText(e){navigator.clipboard.writeText(e.target.value).then((()=>{this.$message({type:"success",message:"复制成功"})})).catch((()=>{this.$message({type:"error",message:"复制失败"})}))},isImage(e){const t=["jpg","jpeg","png","gif","bmp","webp"],s=e.split(".").pop().toLowerCase();return t.includes(s)},isVideo(e){const t=["mp4","webm","ogg","mkv"],s=e.split(".").pop().toLowerCase();return t.includes(s)},handleScroll(e){this.listScrolled=e.scrollTop>0&&this.fileList.length>0},retryError(){this.exceptionList.length>0?(this.exceptionList.forEach((e=>{this.uploadFile({file:e.file,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})),this.exceptionList=[]):this.$message({type:"info",message:"无上传失败文件"})}}};const q=(0,u.A)(Q,[["render",j],["__scopeId","data-v-61c42560"]]);var X=q;const G={class:"upload-home"},J={class:"toolbar"},H={class:"header"},K={href:"https://github.com/MarSeventh/CloudFlare-ImgBed"},Y=["src"],Z={class:"title"},ee={class:"main-title",href:"https://github.com/MarSeventh/CloudFlare-ImgBed",target:"_blank"},te={class:"dialog-action"},se={key:2,style:{"font-size":"medium","font-weight":"bold"}},ie={class:"dialog-action"};function oe(e,t,s,o,l,a){const n=(0,i.g2)("font-awesome-icon"),r=w.S2,u=U.R7,d=X,y=b.ll,k=b.MQ,C=f.xE,L=g.WK,v=f.US,F=h.kZ,x=m.qi,P=p.B8,R=c;return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("div",G,[t[35]||(t[35]=(0,i.Lk)("img",{id:"bg1",class:"background-image1",alt:"Background Image"},null,-1)),t[36]||(t[36]=(0,i.Lk)("img",{id:"bg2",class:"background-image2",alt:"Background Image"},null,-1)),(0,i.Lk)("div",J,[(0,i.bF)(u,{disabled:a.disableTooltip,content:"上传设置",placement:"left"},{default:(0,i.k6)((()=>[(0,i.bF)(r,{class:"toolbar-button",size:"large",onClick:a.openCompressDialog,circle:""},{default:(0,i.k6)((()=>[(0,i.bF)(n,{icon:"cloud-upload",class:"compress-icon",size:"lg"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,i.bF)(u,{disabled:a.disableTooltip,content:"链接格式",placement:"left"},{default:(0,i.k6)((()=>[(0,i.bF)(r,{class:"toolbar-button",size:"large",onClick:a.openUrlDialog,circle:""},{default:(0,i.k6)((()=>[(0,i.bF)(n,{icon:"link",class:"link-icon",size:"lg"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,i.bF)(u,{disabled:a.disableTooltip,content:"管理页面",placement:"left"},{default:(0,i.k6)((()=>[(0,i.bF)(r,{class:"toolbar-button",size:"large",onClick:a.handleManage,circle:""},{default:(0,i.k6)((()=>[(0,i.bF)(n,{icon:"cog",class:"config-icon",size:"lg"})])),_:1},8,["onClick"])])),_:1},8,["disabled"]),(0,i.bF)(u,{disabled:a.disableTooltip,content:"退出登录",placement:"left"},{default:(0,i.k6)((()=>[(0,i.bF)(r,{class:"toolbar-button",size:"large",onClick:a.handleLogout,circle:""},{default:(0,i.k6)((()=>[(0,i.bF)(n,{icon:"sign-out-alt",class:"sign-out-icon",size:"lg"})])),_:1},8,["onClick"])])),_:1},8,["disabled"])]),(0,i.Lk)("div",H,[(0,i.Lk)("a",K,[(0,i.Lk)("img",{class:"logo",alt:"Sanyue logo",src:a.logoUrl},null,8,Y)]),(0,i.Lk)("h1",Z,[(0,i.Lk)("a",ee,(0,_.v_)(a.ownerName),1),t[14]||(t[14]=(0,i.eW)(" ImgHub"))])]),(0,i.bF)(d,{selectedUrlForm:l.selectedUrlForm,customerCompress:l.customerCompress,compressQuality:l.compressQuality,compressBar:l.compressBar,serverCompress:l.serverCompress,uploadChannel:l.uploadChannel,uploadNameType:l.uploadNameType,useCustomUrl:l.useCustomUrl,customUrlPrefix:l.customUrlPrefix,autoRetry:l.autoRetry,class:"upload"},null,8,["selectedUrlForm","customerCompress","compressQuality","compressBar","serverCompress","uploadChannel","uploadNameType","useCustomUrl","customUrlPrefix","autoRetry"]),(0,i.bF)(F,{title:"链接格式设置",modelValue:l.showUrlDialog,"onUpdate:modelValue":t[4]||(t[4]=e=>l.showUrlDialog=e),width:a.dialogWidth,"show-close":!1},{default:(0,i.k6)((()=>[t[23]||(t[23]=(0,i.Lk)("p",{style:{"font-size":"medium","font-weight":"bold"}},"默认复制链接",-1)),(0,i.bF)(k,{modelValue:l.selectedUrlForm,"onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedUrlForm=e),onChange:a.changeUrlForm},{default:(0,i.k6)((()=>[(0,i.bF)(y,{value:"url"},{default:(0,i.k6)((()=>t[15]||(t[15]=[(0,i.eW)("原始链接")]))),_:1}),(0,i.bF)(y,{value:"md"},{default:(0,i.k6)((()=>t[16]||(t[16]=[(0,i.eW)("MarkDown")]))),_:1}),(0,i.bF)(y,{value:"html"},{default:(0,i.k6)((()=>t[17]||(t[17]=[(0,i.eW)("HTML")]))),_:1}),(0,i.bF)(y,{value:"ubb"},{default:(0,i.k6)((()=>t[18]||(t[18]=[(0,i.eW)("BBCode")]))),_:1})])),_:1},8,["modelValue","onChange"]),t[24]||(t[24]=(0,i.Lk)("p",{style:{"font-size":"medium","font-weight":"bold"}},"自定义链接格式",-1)),(0,i.bF)(v,{"label-width":"25%"},{default:(0,i.k6)((()=>[(0,i.bF)(C,{label:"启用自定义"},{default:(0,i.k6)((()=>[(0,i.bF)(k,{modelValue:l.useCustomUrl,"onUpdate:modelValue":t[1]||(t[1]=e=>l.useCustomUrl=e)},{default:(0,i.k6)((()=>[(0,i.bF)(y,{value:"true"},{default:(0,i.k6)((()=>t[19]||(t[19]=[(0,i.eW)("是")]))),_:1}),(0,i.bF)(y,{value:"false"},{default:(0,i.k6)((()=>t[20]||(t[20]=[(0,i.eW)("否")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),"true"===l.useCustomUrl?((0,i.uX)(),(0,i.Wv)(C,{key:0,label:"自定义前缀"},{default:(0,i.k6)((()=>[(0,i.bF)(L,{modelValue:l.customUrlPrefix,"onUpdate:modelValue":t[2]||(t[2]=e=>l.customUrlPrefix=e),placeholder:"请输入自定义链接前缀"},null,8,["modelValue"])])),_:1})):(0,i.Q3)("",!0),t[21]||(t[21]=(0,i.Lk)("p",{style:{"text-align":"left","font-size":"small"}},[(0,i.Lk)("br"),(0,i.eW)("*Tips: 默认链接为https://your.domain/file/xxx.jpg，如果启用自定义链接格式，只保留xxx.jpg部分，其他部分请自行输入 ")],-1))])),_:1}),(0,i.Lk)("div",te,[(0,i.bF)(r,{type:"primary",onClick:t[3]||(t[3]=e=>l.showUrlDialog=!1)},{default:(0,i.k6)((()=>t[22]||(t[22]=[(0,i.eW)("确定")]))),_:1})])])),_:1},8,["modelValue","width"]),(0,i.bF)(F,{title:"上传设置",modelValue:l.showCompressDialog,"onUpdate:modelValue":t[13]||(t[13]=e=>l.showCompressDialog=e),width:a.dialogWidth,"show-close":!1},{default:(0,i.k6)((()=>[(0,i.bF)(v,{"label-width":"25%"},{default:(0,i.k6)((()=>[t[31]||(t[31]=(0,i.Lk)("p",{style:{"font-size":"medium","font-weight":"bold"}},"上传渠道",-1)),(0,i.bF)(C,{label:"上传渠道"},{default:(0,i.k6)((()=>[(0,i.bF)(k,{modelValue:l.uploadChannel,"onUpdate:modelValue":t[5]||(t[5]=e=>l.uploadChannel=e)},{default:(0,i.k6)((()=>[(0,i.bF)(y,{label:"telegram"},{default:(0,i.k6)((()=>t[25]||(t[25]=[(0,i.eW)("Telegram")]))),_:1}),(0,i.bF)(y,{label:"cfr2"},{default:(0,i.k6)((()=>t[26]||(t[26]=[(0,i.eW)("Cloudflare R2")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,i.bF)(C,{label:"失败自动切换"},{default:(0,i.k6)((()=>[(0,i.bF)(x,{modelValue:l.autoRetry,"onUpdate:modelValue":t[6]||(t[6]=e=>l.autoRetry=e),"active-text":"开启","inactive-text":"关闭","active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),t[32]||(t[32]=(0,i.Lk)("p",{style:{"font-size":"medium","font-weight":"bold"}},"文件命名方式",-1)),(0,i.bF)(C,{label:"命名方式"},{default:(0,i.k6)((()=>[(0,i.bF)(k,{modelValue:l.uploadNameType,"onUpdate:modelValue":t[7]||(t[7]=e=>l.uploadNameType=e)},{default:(0,i.k6)((()=>[(0,i.bF)(y,{label:"default"},{default:(0,i.k6)((()=>t[27]||(t[27]=[(0,i.eW)("默认")]))),_:1}),(0,i.bF)(y,{label:"index"},{default:(0,i.k6)((()=>t[28]||(t[28]=[(0,i.eW)("仅前缀")]))),_:1}),(0,i.bF)(y,{label:"origin"},{default:(0,i.k6)((()=>t[29]||(t[29]=[(0,i.eW)("仅原名")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),t[33]||(t[33]=(0,i.Lk)("p",{style:{"font-size":"medium","font-weight":"bold"}},"客户端压缩",-1)),(0,i.bF)(C,{label:"开启压缩"},{default:(0,i.k6)((()=>[(0,i.bF)(x,{modelValue:l.customerCompress,"onUpdate:modelValue":t[8]||(t[8]=e=>l.customerCompress=e),"active-text":"开启","inactive-text":"关闭","active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),l.customerCompress?((0,i.uX)(),(0,i.Wv)(C,{key:0,label:"压缩阈值"},{default:(0,i.k6)((()=>[(0,i.bF)(P,{modelValue:l.compressBar,"onUpdate:modelValue":t[9]||(t[9]=e=>l.compressBar=e),min:1,max:20,"show-input":""},null,8,["modelValue"])])),_:1})):(0,i.Q3)("",!0),l.customerCompress?((0,i.uX)(),(0,i.Wv)(C,{key:1,label:"压缩后大小"},{default:(0,i.k6)((()=>[(0,i.bF)(P,{modelValue:l.compressQuality,"onUpdate:modelValue":t[10]||(t[10]=e=>l.compressQuality=e),min:1,max:l.compressBar,"show-input":""},null,8,["modelValue","max"])])),_:1})):(0,i.Q3)("",!0),"telegram"===l.uploadChannel?((0,i.uX)(),(0,i.CE)("p",se,"服务端压缩")):(0,i.Q3)("",!0),"telegram"===l.uploadChannel?((0,i.uX)(),(0,i.Wv)(C,{key:3,label:"开启压缩"},{default:(0,i.k6)((()=>[(0,i.bF)(x,{modelValue:l.serverCompress,"onUpdate:modelValue":t[11]||(t[11]=e=>l.serverCompress=e),"active-text":"开启","inactive-text":"关闭","active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1})):(0,i.Q3)("",!0),t[34]||(t[34]=(0,i.Lk)("p",{style:{"text-align":"left","font-size":"small"}},[(0,i.Lk)("br"),(0,i.eW)("*Tips: "),(0,i.Lk)("br"),(0,i.eW)("1.Telegram渠道和CloudFlare R2渠道配置方式不同，请根据文档分别配置后使用 "),(0,i.Lk)("br"),(0,i.eW)("2.压缩设置仅针对图片文件，单位为MB "),(0,i.Lk)("br"),(0,i.eW)("3.客户端压缩指上传前压缩，服务端压缩仅作用于Telegram渠道 "),(0,i.Lk)("br"),(0,i.eW)("4.若图片大小>10MB，或压缩后图片大小>10MB，服务端压缩将自动失效 "),(0,i.Lk)("br"),(0,i.eW)("5.若图片大小>20MB，将自动进行客户端压缩 "),(0,i.Lk)("br"),(0,i.eW)("6.若想要存储的图片和原图完全一致，可以将两个压缩设置均设置为关闭 "),(0,i.Lk)("br"),(0,i.eW)("7.若上传分辨率过大、透明背景等图片，建议关闭服务端压缩，否则可能出现未知问题 ")],-1)),(0,i.Lk)("div",ie,[(0,i.bF)(r,{type:"primary",onClick:t[12]||(t[12]=e=>l.showCompressDialog=!1)},{default:(0,i.k6)((()=>t[30]||(t[30]=[(0,i.eW)("确定")]))),_:1})])])),_:1})])),_:1},8,["modelValue","width"])]),(0,i.bF)(R,{class:"footer"})])}var le=s(144),ae={name:"UploadHome",data(){return{selectedUrlForm:(0,le.KR)(""),showUrlDialog:!1,bingWallPaperIndex:0,customWallPaperIndex:0,showCompressDialog:!1,customerCompress:!0,compressQuality:4,compressBar:5,serverCompress:!0,uploadChannel:"telegram",uploadNameType:"default",customUrlPrefix:"",useCustomUrl:"false",autoRetry:!0}},watch:{customerCompress(e){this.updateCompressConfig("customerCompress",e)},compressQuality(e){this.updateCompressConfig("compressQuality",e)},compressBar(e){this.updateCompressConfig("compressBar",e)},serverCompress(e){this.updateCompressConfig("serverCompress",e)},uploadChannel(e){this.updateStoreUploadChannel(e)},uploadNameType(e){this.updateStoreUploadNameType(e)},customUrlPrefix(e){this.$store.commit("setCustomUrlSettings",{key:"customUrlPrefix",value:e})},useCustomUrl(e){this.$store.commit("setCustomUrlSettings",{key:"useCustomUrl",value:e})},autoRetry(e){this.$store.commit("setStoreAutoRetry",e)}},computed:{...(0,n.L8)(["userConfig","bingWallPapers","uploadCopyUrlForm","compressConfig","storeUploadChannel","storeUploadNameType","customUrlSettings","storeAutoRetry"]),ownerName(){return this.userConfig?.ownerName||"Sanyue"},logoUrl(){return this.userConfig?.logoUrl||s(3153)},bkInterval(){return this.userConfig?.bkInterval||3e3},bkOpacity(){return this.userConfig?.bkOpacity||1},dialogWidth(){return window.innerWidth>768?"40%":"80%"},disableTooltip(){return window.innerWidth<768}},mounted(){const e=document.getElementById("bg1"),t=document.getElementById("bg2");"bing"===this.userConfig?.uploadBkImg?this.$store.dispatch("fetchBingWallPapers").then((()=>{e.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,e.onload=()=>{e.style.opacity=this.bkOpacity},setInterval((()=>{let s=0!=e.style.opacity?e:t,i=0!=e.style.opacity?t:e;s.style.opacity=0,this.bingWallPaperIndex=(this.bingWallPaperIndex+1)%this.bingWallPapers.length,i.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,i.onload=()=>{i.style.opacity=this.bkOpacity}}),this.bkInterval)})):this.userConfig?.uploadBkImg instanceof Array&&this.userConfig?.uploadBkImg?.length>1?(e.src=this.userConfig.uploadBkImg[this.customWallPaperIndex],e.onload=()=>{e.style.opacity=this.bkOpacity},setInterval((()=>{let s=0!=e.style.opacity?e:t,i=0!=e.style.opacity?t:e;s.style.opacity=0,this.customWallPaperIndex=(this.customWallPaperIndex+1)%this.userConfig.uploadBkImg.length,i.src=this.userConfig.uploadBkImg[this.customWallPaperIndex],i.onload=()=>{i.style.opacity=this.bkOpacity}}),this.bkInterval)):this.userConfig?.uploadBkImg instanceof Array&&1==this.userConfig?.uploadBkImg.length?(e.src=this.userConfig.uploadBkImg[0],e.onload=()=>{e.style.opacity=this.bkOpacity}):(e.src=s(732),e.onload=()=>{e.style.opacity=this.bkOpacity}),this.selectedUrlForm=this.uploadCopyUrlForm||"url",this.customerCompress=this.compressConfig.customerCompress,this.compressQuality=this.compressConfig.compressQuality,this.compressBar=this.compressConfig.compressBar,this.serverCompress=this.compressConfig.serverCompress,this.uploadChannel=this.storeUploadChannel,this.autoRetry=this.storeAutoRetry,this.uploadNameType=this.storeUploadNameType,this.customUrlPrefix=this.customUrlSettings.customUrlPrefix,this.useCustomUrl=this.customUrlSettings.useCustomUrl},components:{UploadForm:X,Footer:c},methods:{handleManage(){this.$router.push("/dashboard")},openUrlDialog(){this.showUrlDialog=!0},handleLogout(){A().remove("authCode"),this.$router.push("/login"),this.$message.success("已退出登录~")},changeUrlForm(){this.$store.commit("setUploadCopyUrlForm",this.selectedUrlForm)},openCompressDialog(){this.showCompressDialog=!0},updateCompressConfig(e,t){this.$store.commit("setCompressConfig",{key:e,value:t})},updateStoreUploadChannel(e){this.$store.commit("setStoreUploadChannel",e)},updateStoreUploadNameType(e){this.$store.commit("setStoreUploadNameType",e)}}};const ne=(0,u.A)(ae,[["render",oe],["__scopeId","data-v-deb7af82"]]);var re=ne},6682:function(e,t,s){"use strict";e.exports=s.p+"img/404.8ed11fb3.png"},732:function(e,t,s){"use strict";e.exports=s.p+"img/background.ea1b7ee7.jpg"},3153:function(e,t,s){"use strict";e.exports=s.p+"img/logo.e8dbfa27.png"},8050:function(e,t,s){"use strict";s(5331)},5385:function(e,t,s){"use strict";s(5331)},5616:function(e,t,s){"use strict";s(5331),s(7197)},3597:function(e,t,s){"use strict";s(5331)},8830:function(e,t,s){"use strict";s(5331)},6055:function(e,t,s){"use strict";s(5331),s(9648),s(8050),s(9104),s(5970)},9104:function(e,t,s){"use strict";s(5331)},5970:function(e,t,s){"use strict";s(5331)},456:function(e,t,s){"use strict";s(5331)},213:function(e,t,s){"use strict";s(5331),s(9104)}}]);
//# sourceMappingURL=631.b0059111.js.map