import{d as c,a as n,o as g,c as i,b as t,e as a,f as l,F as y,r as d,g as u,t as _,L as m}from"./index-505f3286.js";const p=c({id:"category",state:()=>({url:"https://dummyjson.com/products/categories",category:null}),actions:{async getCategory(){try{const e=await n.get(`${this.url}`);this.category=e.data,console.log(this.category)}catch(e){console.log("Произошла ошибка при получении категогий",e)}}},getters:{}}),h={key:0,class:"category"},k={class:"container"},C={__name:"Category",setup(e){const o=p();g(()=>o.getCategory());const s=i(()=>o.category);return(f,v)=>s.value?(t(),a("div",h,[l("div",k,[(t(!0),a(y,null,d(s.value,r=>(t(),a("div",{class:"category__item",key:r.id},_(r),1))),128))])])):(t(),u(m,{key:1}))}};export{C as default};