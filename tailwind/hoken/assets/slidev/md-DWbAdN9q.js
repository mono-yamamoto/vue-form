import{d as u,z as p,o as c,b as _,e as i,f,h as m,c as v,k as $,q as h,s as k,B as a}from"../modules/vue-Dq3NkS3l.js";import{u as l,f as g}from"./context-DmzpKkVU.js";import"../index-Dd7tYGnx.js";import"../modules/shiki-VAsrE-Eo.js";function n(e){return e.startsWith("/")?"/"+e.slice(1):e}function x(e,o=!1){const s=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${n(e)})`:`url("${n(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const C={class:"my-auto w-full"},y=u({__name:"cover",props:{background:{default:""}},setup(e){l();const o=e,s=p(()=>x(o.background,!0));return(t,r)=>(c(),_("div",{class:"slidev-layout cover",style:m(s.value)},[i("div",C,[f(t.$slots,"default")])],4))}}),B=i("h1",null,"Tailwind CSS",-1),S={__name:"slides.md__slidev_1",setup(e){const{$slidev:o,$nav:s,$clicksContext:t,$clicks:r,$page:b,$renderContext:w,$frontmatter:d}=l();return t.setup(),(z,P)=>(c(),v(y,h(k(a(g)(a(d),0))),{default:$(()=>[B]),_:1},16))}},E=S;export{E as default};
