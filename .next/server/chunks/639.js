exports.id=639,exports.ids=[639],exports.modules={70797:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,26840,23)),Promise.resolve().then(s.t.bind(s,38771,23)),Promise.resolve().then(s.t.bind(s,13225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,43982,23))},93418:(e,t,s)=>{Promise.resolve().then(s.bind(s,94046)),Promise.resolve().then(s.bind(s,79683))},22599:(e,t,s)=>{"use strict";s.d(t,{db:()=>a});var l=s(76041),r=s(48414);let n=(0,l.ZF)({apiKey:"AIzaSyB3WKjNyCQ0l35PB3gmCO4RMlw6XN4smjM",authDomain:"virtual-event-space-27375.firebaseapp.com",projectId:"virtual-event-space-27375",storageBucket:"virtual-event-space-27375.appspot.com",messagingSenderId:"1098716865490",appId:"1:1098716865490:web:cc67e0d2b2ed9fc8315e0b",measurementId:"G-CZBZYEG4TX"}),a=(0,r.ad)(n)},94046:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AuthContext:()=>i,default:()=>o});var l=s(95344),r=s(3729),n=s(33913),a=s(22599);let i=(0,r.createContext)(void 0),d=(0,n.v0)(a.default),o=({children:e})=>{let t=new n.hJ,[s,a]=(0,r.useState)(null),[o,c]=(0,r.useState)(!0),[h,x]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=(0,n.Aj)(d,e=>{a(e),c(!1),x(!0)});return()=>{e()}},[]),l.jsx(i.Provider,{value:{user:s,signIn:(e,t)=>(0,n.e5)(d,e,t),updateUser:(e,t,s)=>(0,n.ck)(e,{displayName:t,photoURL:s}),logOut:()=>(0,n.w7)(d),loading:o||!h,createUser:(e,t)=>(0,n.Xb)(d,e,t),googleLogin:()=>(0,n.rh)(d,t)},children:e})}},79683:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var l=s(95344),r=s(56506),n=s(3729),a=s(94046);function i(){let{user:e,logOut:t}=(0,n.useContext)(a.AuthContext),[s,i]=(0,n.useState)(!1);return l.jsx("div",{className:"max-w-[1500px] mx-auto",children:(0,l.jsxs)("div",{className:"navbar  bg-base-100",children:[(0,l.jsxs)("div",{className:"navbar-start",children:[(0,l.jsxs)("div",{className:"dropdown",children:[l.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),(0,l.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[l.jsx("li",{children:l.jsx(r.default,{href:"/",className:"font-semibold text-lg text-purple-500",children:"Home"})}),(0,l.jsxs)("li",{children:[" ",l.jsx(r.default,{href:"/eventspage",className:"font-semibold text-lg text-purple-500",children:"Events"})," "]}),l.jsx("li",{})]})]}),l.jsx(r.default,{href:"/",className:"btn btn-ghost text-xl",children:"Virtual Event"})]}),l.jsx("div",{className:"navbar-center hidden lg:flex",children:(0,l.jsxs)("ul",{className:"menu menu-horizontal px-1",children:[l.jsx("li",{children:l.jsx(r.default,{href:"/",className:"font-semibold text-lg text-purple-500",children:"Home"})}),(0,l.jsxs)("li",{children:[" ",l.jsx(r.default,{href:"/eventspage",className:"font-semibold text-lg text-purple-500",children:"Events"})," "]}),e?(0,l.jsxs)("li",{children:[" ",l.jsx(r.default,{href:"/addevent",className:"font-semibold text-lg text-purple-500",children:"Add Event"})]}):l.jsx("li",{})]})}),l.jsx("div",{className:"navbar-end me-3",children:l.jsx("div",{className:"flex items-center space-x-4",children:e?(0,l.jsxs)("div",{className:"dropdown dropdown-end",children:[l.jsx("button",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle avatar",children:l.jsx("div",{className:"w-10   rounded-full overflow-hidden",children:l.jsx("img",{src:e?.photoURL||"https://i.ibb.co/Sv7N6ky/Screenshot-9.jpg",alt:"User Avatar",className:"w-full h-full object-cover"})})}),l.jsx("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box ",children:l.jsx("li",{children:l.jsx("button",{onClick:()=>{t().then(()=>{}).catch(e=>console.log(e))},children:"Logout"})})})]}):l.jsx(r.default,{href:"/login",className:"btn bg-purple-500 text-white",children:"Login"})})})]})})}},99206:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,metadata:()=>v});var l=s(25036);s(5023);var r=s(86843);let n=(0,r.createProxy)(String.raw`C:\Ritu\virtual-event\src\components\Navbar\Navbar.tsx`),{__esModule:a,$$typeof:i}=n,d=n.default,o=(0,r.createProxy)(String.raw`C:\Ritu\virtual-event\src\components\Auth\AuthProvider.tsx`),{__esModule:c,$$typeof:h}=o,x=o.default;function u(){return l.jsx("div",{children:(0,l.jsxs)("footer",{className:"footer footer-center lg:p-10 p-5 bg-gray-100 text-black",children:[(0,l.jsxs)("aside",{children:[l.jsx("svg",{width:"50",height:"50",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",className:"inline-block fill-current",children:l.jsx("path",{d:"M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"})}),l.jsx("p",{className:"font-bold",children:"Virtual Event Space"}),l.jsx("p",{children:"Copyright \xa9 2024 - All right reserved"})]}),l.jsx("nav",{children:(0,l.jsxs)("div",{className:"grid grid-flow-col gap-4",children:[l.jsx("a",{children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:l.jsx("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),l.jsx("a",{children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:l.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),l.jsx("a",{children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:l.jsx("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]})})]})})}(0,r.createProxy)(String.raw`C:\Ritu\virtual-event\src\components\Auth\AuthProvider.tsx#AuthContext`),s(40002);let v={title:"Virtual Event Space",description:"Created by Habiba Ferdausi Ritu"};function m({children:e}){return l.jsx("html",{lang:"en",children:l.jsx("body",{children:l.jsx("main",{children:(0,l.jsxs)(x,{children:[l.jsx(d,{}),e,l.jsx(u,{})]})})})})}},5023:()=>{}};