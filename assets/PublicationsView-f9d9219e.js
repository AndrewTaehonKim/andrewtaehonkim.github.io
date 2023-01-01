import{_ as h,o,c as r,a as e,t as l,F as d,r as i,b as n,d as f,e as x,p as g}from"./index-14e2dd7f.js";const y={props:["title","date","journal","publisher","DOI","image","description","firstAuthor","type","keywords"]},w=["href"],p={class:"slide hidden lg:grid grid-cols-7 grid-rows-1 h-1/4 align-middle justify-center my-10"},v={class:"flex justify-end col-start-2 col-span-2"},b=["src"],k={class:"flex-col col-start-4 col-span-3 rounded-md pl-8 place align-middle"},j={class:"grid grid-cols-5 grid-rows-6"},D={class:"hline h-full inline-flex col-start-1 row-start-1 col-span-6 row-span-2 border-b-2 border-blue w-full"},I={class:"font-bold text-xl text-left mt-auto"},O={class:"text-left text-lg col-start-1 row-start-3 col-span-6 row-span-2"},A={class:"inline-flex text-md col-start-1 row-start-5 col-span-6 row-span-1 justify-self-center my-auto"},V={class:"grid grid-cols-5 mt-2 col-start-1 row-start-6 col-span-6 row-span-1"},B={class:"font-semibold text-sm col-span-4 text-left"},J={class:"text-sm col-start-5 text-right"},N={class:"slide flex-col lg:hidden w-screen h-1/4 align-middle justify-center my-10 px-4"},P=["src"],S={class:"flex-col col-start-4 col-span-3 rounded-mdplace align-middle"},F={class:"hline inline-flex border-b-2 border-blue"},C={class:"font-bold text-xl text-left mt-auto"},E={class:"text-left text-md mt-2"},L={class:"inline-flex justify-self-center my-4"},T={class:"text-left break-normal text-xs my-auto"},q={class:"grid grid-cols-5 mt-2"},z={class:"font-semibold text-sm col-span-4 text-left"},G={class:"text-sm col-start-5 text-right"};function H(m,c,s,t,W,X){const _=x("font-awesome-icon");return o(),r("a",{href:"https://doi.org/"+s.DOI,target:"blank"},[e("div",p,[e("div",v,[e("img",{src:"/src/assets/publications/"+s.image,alt:"",class:"max-h-56 my-auto"},null,8,b)]),e("div",k,[e("div",j,[e("div",D,[e("h1",I,l(s.title),1)]),e("p",O,l(s.description),1),e("div",A,[(o(!0),r(d,null,i(s.keywords,a=>(o(),r("p",{key:a,class:"mx-2"},[n(_,{icon:"fa-regular fa-star",class:"text-green mr-1"}),f(l(a),1)]))),128))]),e("div",V,[e("p",B,l(s.journal),1),e("h2",J,l(s.date),1)])])])]),e("div",N,[e("img",{src:"/src/assets/publications/"+s.image,alt:"",class:"max-h-56 my-auto mx-auto"},null,8,P),e("div",S,[e("div",F,[e("h1",C,l(s.title),1)]),e("p",E,l(s.description),1),e("div",L,[(o(!0),r(d,null,i(s.keywords,a=>(o(),r("div",{key:a,class:"mx-2 inline-flex"},[n(_,{icon:"fa-regular fa-star",class:"text-green mr-1 my-auto"}),e("div",T,l(a),1)]))),128))]),e("div",q,[e("p",z,l(s.journal),1),e("h2",G,l(s.date),1)])])])],8,w)}const u=h(y,[["render",H],["__scopeId","data-v-62cdc60d"]]),K={class:"flex-col w-full mx-auto"},M=e("div",{class:"text-3xl font-extrabold border-b-2 border-yellow lg:border-none pb-4 lg:pb-0"},"Publications",-1),Q=e("div",{class:"w-full lg:w-1/6 border-b-2 mx-auto border-teal -my-6"},null,-1),R=e("div",{class:"w-full lg:w-1/6 border-b-2 mx-auto border-teal -my-6"},null,-1),U={data(){return{myJson:g}}},Z=Object.assign(U,{__name:"PublicationsView",setup(m){return(c,s)=>(o(),r("div",K,[M,(o(!0),r(d,null,i(c.myJson.filter(t=>t.pin==!0),t=>(o(),r("div",{key:t},[n(u,{title:t.title,date:t.date,journal:t.journal,publisher:t.publisher,DOI:t.DOI,image:t.image,description:t.description,firstAuthor:t.firstAuthor,type:t.type,keywords:t.keywords},null,8,["title","date","journal","publisher","DOI","image","description","firstAuthor","type","keywords"]),Q]))),128)),(o(!0),r(d,null,i(c.myJson.filter(t=>t.pin==!1),t=>(o(),r("div",{key:t},[n(u,{title:t.title,date:t.date,journal:t.journal,publisher:t.publisher,DOI:t.DOI,image:t.image,description:t.description,firstAuthor:t.firstAuthor,type:t.type,keywords:t.keywords},null,8,["title","date","journal","publisher","DOI","image","description","firstAuthor","type","keywords"]),R]))),128))]))}});export{Z as default};
