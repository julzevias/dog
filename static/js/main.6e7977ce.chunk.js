(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(15),r=n.n(c),a=(n(23),n(10)),o=n(2),d=n(18),l=n(7),j=[{name:"Saul",id:1,breed:"Lab",image:"assets/Saul.jpeg",owner:"Dave",size:"LG",description:"An energetic lab that loves to play"},{name:"Goldie",id:2,breed:"Lab",image:"assets/Goldie.jpg",owner:"Dave",size:"LG",description:"Office mommy dog"},{name:"Gio",id:3,breed:"Terrier",image:"/assets/Gio.jpg",owner:"Dan",size:"SM",description:"A fluffy terrier mix who runs on treats"},{name:"Sophie",id:4,breed:"Pit Bull",image:"/assets/Sophie.jpg",owner:"Christina",size:"MD",description:"A brindled pitbull princess"},{name:"Taro",id:5,breed:"Great Pyrenees",image:"/assets/Taro.jpg",owner:"Sara",size:"XL",description:"A great pyrenees mix often confused with a horse"},{name:"Gabby",id:6,breed:"Pit Bull",image:"/assets/Gabby.jpg",owner:"Dan",size:"MD",description:"A tutu-flaunting American bulldog/pitbull mix"},{name:"Percy",id:7,breed:"Husky",image:"/assets/Percy.jpg",owner:"Monica",size:"LG",description:"A wolf-sized pup with piercing blue eyes"},{name:"Benny",id:8,breed:"Hound",image:"/assets/Benny.jpg",owner:"Brandon",size:"MD",description:"A belly-rub loving hound-mix"},{name:"Baxter",id:9,breed:"Chihuahua",image:"/assets/Baxter.jpg",owner:"Skip",size:"XS",description:"The eldest, wisest, and tiniest dog of the office"},{name:"Vyla",id:10,breed:"Poodle",image:"/assets/Vyla.jpg",owner:"Skip",size:"SM",description:"The resident toy and bone hoarder"}],b=n(0),m=s.a.createContext(),u={name:"",breed:"",owner:"",size:"",description:""},g=function(e){var t=e.children,n=Object(i.useState)(!0),s=Object(l.a)(n,2),c=s[0],r=s[1],a=Object(i.useState)("a"),o=Object(l.a)(a,2),d=o[0],g=o[1],O=Object(i.useState)([]),h=Object(l.a)(O,2),p=h[0],x=h[1],f=Object(i.useState)(u),v=Object(l.a)(f,2),w=v[0],y=v[1],N=Object(i.useState)(!1),D=Object(l.a)(N,2),z=D[0],S=D[1],C=Object(i.useState)(!1),A=Object(l.a)(C,2),k=A[0],L=A[1],E=Object(i.useState)(!1),F=Object(l.a)(E,2),G=F[0],B=F[1],T=Object(i.useState)(""),M=Object(l.a)(T,2),P=M[0],q=M[1],I=Object(i.useCallback)((function(){r(!1);var e=j.filter((function(e){return""===d?(x([]),r(!1),[]):e.name.toLowerCase().includes(d.toLowerCase())?(r(!1),x(e),e):void 0})).map((function(e){return{id:e.id,name:e.name,breed:e.breed,image:e.image,owner:e.owner,size:e.size,description:e.description}}));x(e)}),[d]);return Object(i.useEffect)((function(){!function(){if(G){for(var e=0;e<p.length;e++)p[e].id===P&&x(p.splice(e,1));var t=p.map((function(e){return{id:e.id,name:e.name,breed:e.breed,image:e.image,owner:e.owner,size:e.size,description:e.description}}));x(t)}q(""),B(!1)}()}),[G]),Object(i.useEffect)((function(){!function(){if(z)w.id=p.length+1,void 0!==w.image&&""!==w.image||(w.image="assets/question_dog.jpg"),p.push(w);else if(k){console.log(z);for(var e=0;e<p.length;e++)p[e].id===P&&(p[e].name=w.name,p[e].breed=w.breed,p[e].owner=w.owner,p[e].size=w.size,p[e].description=w.description,p[e].image=w.image)}var t=p.map((function(e){return{id:e.id,name:e.name,breed:e.breed,image:e.image,owner:e.owner,size:e.size,description:e.description}}));x(t),S(!1)}()}),[z,k]),Object(i.useEffect)((function(){I()}),[I,d,z]),Object(i.useEffect)((function(){r(!1),x(j),p.map((function(e){return{id:e.id,name:e.name,breed:e.breed,image:e.image,owner:e.owner,size:e.size,description:e.description}}))}),[]),Object(b.jsx)(m.Provider,{value:{loading:c,dogs:p,setSearchTerm:g,setForm:y,setNewDogCalled:S,setEditDogCalled:L,setDeleteDogCalled:B,setDetermineDog:q},children:t})},O=function(){return Object(i.useContext)(m)},h=function(e){var t=e.id,n=O(),i=n.setDetermineDog,s=n.setDeleteDogCalled;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"button",className:"btn-primary",onClick:function(e){e.preventDefault(),s(!0),i(t)},children:"Delete Dog"})})},p=function(e){var t=e.label,n=e.type,i=void 0===n?"text":n,s=e.name,c=e.value;return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:t}),Object(b.jsx)("input",{type:i,name:s,value:c,required:!0})]})},x=function(e){var t=e.isAddCalled,n=e.id,s=Object(i.useState)(!1),c=Object(l.a)(s,2),r=c[0],a=c[1],o=O(),d=o.setForm,j=o.setNewDogCalled,m=o.setEditDogCalled,u=o.setDetermineDog,g=function(){a(!r)};return r?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",className:"btn-primary",onClick:g,children:t?"Add dog":"Edit dog"}),r&&Object(b.jsx)("div",{className:"modal",children:Object(b.jsx)("div",{className:"overlay",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("h2",{children:t?"Add dog":"Edit dog"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var i=new FormData(document.querySelector("#addForm")),s={};s.name=i.get("name"),s.breed=i.get("breed"),s.owner=i.get("owner"),s.size=i.get("size"),s.description=i.get("description"),s.image=i.get("image"),d(s),t?j(!0):(m(!0),u(n)),a(!r)},id:"addForm",className:"form-control",children:[Object(b.jsx)(p,{label:"Name",name:"name"}),Object(b.jsx)(p,{label:"Breed",name:"breed"}),Object(b.jsx)(p,{label:"Owner",name:"owner"}),Object(b.jsx)(p,{label:"Size",name:"size"}),Object(b.jsx)(p,{label:"Description",name:"description"}),Object(b.jsx)(p,{label:"Image Link",name:"image"}),Object(b.jsx)("button",{className:"btn-primary",type:"submit",children:"Submit"})]}),Object(b.jsx)("button",{className:"close-modal",onClick:g,children:"X"})]})})})]})},f=function(e){var t=e.id;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(x,{isAddCalled:!1,id:t})})},v=(n(25),function(e){var t=e.name,n=e.id,i=e.breed,s=e.image,c=e.owner,r=e.size,a=e.description;return Object(b.jsxs)("article",{className:"dog",children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{src:s,alt:t,onError:function(e){var t=e.currentTarget;t.onerror=null,t.src="assets/question_dog.jpg"}})}),Object(b.jsxs)("div",{className:"dog-footer",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("h2",{children:i}),Object(b.jsxs)("h4",{children:["Owner: ",c]}),Object(b.jsxs)("h4",{className:"right",children:["Size: ",r]}),Object(b.jsx)("h5",{className:"letter-spacing",children:a})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"padding-left",children:Object(b.jsx)(h,{id:n})}),Object(b.jsx)("span",{className:"right padding-right",children:Object(b.jsx)(f,{id:n})})]})]})}),w=function(){return Object(b.jsx)("div",{className:"loader"})},y=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(x,{isAddCalled:!0})})},N=function(){var e=O(),t=e.dogs;return e.loading?Object(b.jsx)(w,{}):t.length<1?Object(b.jsxs)("section",{className:"section",children:[Object(b.jsx)("div",{className:"dog-section",children:Object(b.jsx)(y,{})}),Object(b.jsx)("h2",{className:"section-title",children:"no dogs match your search criteria"})]}):(console.log(t),Object(b.jsxs)("section",{className:"section",children:[Object(b.jsx)("div",{className:"dog-section",children:Object(b.jsx)(y,{})}),Object(b.jsx)("h2",{className:"section-title",children:"Dogs of Voyant"}),Object(b.jsx)("div",{className:"dogs-center",children:t.map((function(e){return Object(b.jsx)(v,Object(d.a)({},e),e.id)}))})]}))},D=function(){var e=O().setSearchTerm,t=Object(i.useRef)("");return Object(b.jsx)("section",{className:"section search",children:Object(b.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{htmlFor:"name",children:"search dog"}),Object(b.jsx)("input",{type:"text",id:"name",ref:t,onChange:function(n){e(t.current.value)}})]})})})},z=function(){return Object(b.jsxs)("main",{children:[Object(b.jsx)(D,{}),Object(b.jsx)(N,{})]})},S=function(){return Object(b.jsx)("section",{className:"error-page section",children:Object(b.jsxs)("div",{className:"error-container",children:[Object(b.jsx)("h1",{children:"oops! It's a dead end"}),Object(b.jsx)(a.b,{to:"/",className:"btn btn-primary",children:"back home"})]})})};var C=function(){return Object(b.jsx)(a.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/dog",children:Object(b.jsx)(z,{})}),Object(b.jsx)(o.a,{path:"*",children:Object(b.jsx)(S,{})})]})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{children:Object(b.jsx)(C,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.6e7977ce.chunk.js.map