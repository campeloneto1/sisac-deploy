import{C as o,Eb as a,F as s,Kb as n}from"./chunk-OWJSVT4P.js";var u={production:!0,url:"http://sisacapi.casamil.ce.gov.br",image:"http://sisacapi.casamil.ce.gov.br/"};var m=(()=>{let t=class t{constructor(e,i){this.storageService=e,this.router=i,this.user||(this.user=JSON.parse(this.storageService.getItem("user"))),this.token||(this.token=this.storageService.getItem("token")),this.subunidade||(this.subunidade=this.storageService.getItem("subunidade"))}setSession(e,i){this.user=e,this.token=i}getUser(){return this.user}getToken(){return this.token}getSubunidade(){return this.subunidade}check(){return!!this.token}redirect(){this.router.navigate(["Inicio"])}checkPermission(e){this.user.perfil[e]||this.router.navigate(["Inicio"])}logout(){this.token="",this.subunidade="",this.user={},this.storageService.clearStorage()}};t.\u0275fac=function(i){return new(i||t)(s(n),s(a))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{u as a,m as b};