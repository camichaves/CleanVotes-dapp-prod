"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[899],{90899:(f,u,r)=>{r.r(u),r.d(u,{VotersLoginPageModule:()=>p});var g=r(69808),d=r(34182),e=r(65649),a=r(99800),s=r(70655),t=r(72096);const m=[{path:"",component:(()=>{class o{constructor(n,c,l){this.router=n,this.route=c,this.toastController=l}ngOnInit(){return(0,s.mG)(this,void 0,void 0,function*(){this.addrVoting=this.route.snapshot.paramMap.get("addrr"),this.error=this.route.snapshot.paramMap.get("error"),this.error&&(yield this.presentToast())})}presentToast(){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"Ocurrio un error al obtener codigo de Votacion. El ingresado no es un email valido.",duration:4e3})).present()})}abrirGmailAuth(){return(0,s.mG)(this,void 0,void 0,function*(){window.location.href="http://18.229.204.101/auth/google"})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(e.SH),t.Y36(a.gz),t.Y36(e.yF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-voters-login"]],decls:26,vars:0,consts:[["color","primary"],["id","container",2,"margin-left","10%","margin-right","10%"],["type","submit","color","dark",2,"margin","0 auto",3,"click"],["target","_blank","href","https://testnet.bscscan.com/address/0x42787b8254d66a862806f2536f129e3c0861192a"]],template:function(n,c){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Iniciar sesi\xf3n"),t.qZA()()(),t.TgZ(4,"ion-content",0),t._UZ(5,"br"),t.TgZ(6,"div",1)(7,"ion-card")(8,"ion-card-header")(9,"ion-card-title"),t._uU(10,"Clean Votes"),t.qZA(),t.TgZ(11,"ion-card-subtitle"),t._uU(12,"Inicia Sesion para "),t._UZ(13,"br"),t._uU(14," recibir tu link unico de votacion"),t.qZA()(),t.TgZ(15,"ion-card-content")(16,"ion-item")(17,"ion-button",2),t.NdJ("click",function(){return c.abrirGmailAuth()}),t._uU(18,"Iniciar Sesion con Gmail"),t.qZA()(),t._UZ(19,"br"),t.TgZ(20,"ion-card-subtitle"),t._uU(21,"Puedes auditar el contrato de votaci\xf3n en el siguente"),t.qZA(),t.TgZ(22,"a",3),t._uU(23,"LINK"),t.qZA()()(),t._UZ(24,"br")(25,"br"),t.qZA()())},directives:[e.Gu,e.sr,e.wd,e.W2,e.PM,e.Zi,e.Dq,e.tO,e.FN,e.Ie,e.YG],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;margin-top:15%}.margenes[_ngcontent-%COMP%]{top:4%;left:4%}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),o})(),p=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,d.u5,e.Pc,h]]}),o})()}}]);