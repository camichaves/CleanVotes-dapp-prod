"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3787],{23787:(C,l,s)=>{s.r(l),s.d(l,{VoteStatusPageModule:()=>y});var u=s(69808),h=s(34182),i=s(65649),c=s(99800),r=s(70655),t=s(72096),g=s(48266);function m(o,a){if(1&o&&(t.TgZ(0,"ion-card",2)(1,"ion-card-header")(2,"ion-row",3)(3,"ion-col",4)(4,"ion-badge",5),t._uU(5),t.qZA()(),t.TgZ(6,"ion-col",6)(7,"ion-card-title",7),t._uU(8),t.qZA()()()(),t.TgZ(9,"ion-card-content"),t._UZ(10,"ion-img"),t.TgZ(11,"ion-row")(12,"ion-col",4)(13,"ion-card-title"),t._uU(14),t.qZA()(),t._UZ(15,"ion-col",6),t.qZA()()()),2&o){const e=a.$implicit,n=a.index,d=t.oxw();t.xp6(5),t.hij(" ",n+1," "),t.xp6(3),t.hij("Votos ",d.votos[n],""),t.xp6(6),t.Oqu(e)}}const p=[{path:"",component:(()=>{class o{constructor(e,n,d,f,V){this.authService=e,this.alertController=n,this.toastController=d,this.loadingController=f,this.route=V,this.codigoVotacion="",this.nameCandidatosVotacion=[],this.votos=[],this.addrr=""}ngOnInit(){return(0,r.mG)(this,void 0,void 0,function*(){yield this.presentLoading(),this.addrr=this.route.snapshot.paramMap.get("addr"),(yield this.authService.checkMetaMask())?(yield this.presentToastMetaConnected(),this.vote=yield this.authService.getVoteByVoter(this.addrr),this.vote?(this.votos=yield this.authService.getCantVotos(this.vote.candidatecount,this.addrr),this.nameCandidatosVotacion=yield this.authService.getCandidates(this.vote.candidatecount,this.addrr),this.loading.dismiss()):this.loading.dismiss()):(this.loading.dismiss(),yield this.presentNoMetaAlert())})}presentLoading(){return(0,r.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({cssClass:"my-custom-class",message:"Conectando con la Blockchain..."}),yield this.loading.present()})}presentToastMetaConnected(){return(0,r.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"\xa1Metamask Conectado!",duration:2e3})).present()})}presentNoMetaAlert(){return(0,r.mG)(this,void 0,void 0,function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Necesitas Metamask para utilizar CleanVote",subHeader:"Por favor, instala metamask y recarga la pagina",backdropDismiss:!1});yield e.present();const{role:n}=yield e.onDidDismiss();console.log("onDidDismiss resolved with role",n)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.X),t.Y36(i.Br),t.Y36(i.yF),t.Y36(i.HT),t.Y36(c.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-vote-status"]],decls:7,vars:2,consts:[["color","tertiary"],["class","card-establecimiento",4,"ngFor","ngForOf"],[1,"card-establecimiento"],[1,"ion-align-items-center"],["size","6"],["color","warning","mode","ios"],["size","6",1,"ion-text-right"],["color","success"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),t._uU(3),t.qZA()()(),t.TgZ(4,"ion-content"),t._UZ(5,"br"),t.YNc(6,m,16,3,"ion-card",1),t.qZA()),2&e&&(t.xp6(3),t.hij("Estado de la Votacion ",n.codigoVotacion,""),t.xp6(3),t.Q6J("ngForOf",n.nameCandidatosVotacion))},directives:[i.Gu,i.sr,i.wd,i.W2,u.sg,i.PM,i.Zi,i.Nd,i.wI,i.yp,i.Dq,i.FN,i.Xz],styles:[""]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,h.u5,i.Pc,v]]}),o})()}}]);