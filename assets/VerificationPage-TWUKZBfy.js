import{u as o,d as t,a as l,Q as m,S as x,e as g,r as b,T as f,j as e,U as u,V as v,W as h,I as k,X as j,J as y}from"./index-4A85RRuM.js";import{P as n}from"./Popover-GWvNCl9Y.js";const $="/fs-87-react-node-ServerIbraimovUa/assets/BackgroundHomeMobile--bJS4c7V.png",w="/fs-87-react-node-ServerIbraimovUa/assets/BackgroungHomeDesk-jfnsRM4P.png",I="/fs-87-react-node-ServerIbraimovUa/assets/BackgroungHomeDesk-jfnsRM4P.png",B="/fs-87-react-node-ServerIbraimovUa/assets/BottleHomeMobile-YibEMZyu.png",S="/fs-87-react-node-ServerIbraimovUa/assets/BottleHomeTablet-obPHwKf-.png",E="/fs-87-react-node-ServerIbraimovUa/assets/BottleHomeDesk-odvCWdoI.png",P=o.section`
    background-image: url("${$}");
    display: flex;
    background-position-x: 70px;
    flex-direction: column;
    justify-content: space-between;

@media ${t.tablet} {
    background-image: url("${w}"); 
}
@media ${t.desktop} {
    background-image: url("${I}"); 
  }
`,H=o.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center; 
    padding-top: 130px;
    @media ${t.tablet}{
        padding-top: 50px;
    }
    @media ${t.desktop}{
     
        padding-top: 0px;       
    }
  `,U=o.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: var(--btn-box-shadow);
@media ${t.tablet} {
  width: 400px;  
}
@media ${t.desktop} {
  width: 500px;
   
}
`,D=o.div`
    position: relative;
    display: flex;
    flex-direction: column;   
    
    justify-content: end;
    align-items: center;
    height: 450px;
    margin-bottom: 20px;
  
    .icon-mail{
      position: absolute;
      width: 40px;
      height: 40px;
      top:110px;
      left:220px;
      border-radius: 5px;
      box-shadow: var(--btn-box-shadow);
      @media ${t.tablet} {
        top:100px;
        left:45px;
      }
      @media ${t.desktop} {
        top:120px;
        left:70px;
      }
        
    }

`;o.h2`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);
    margin-bottom: 10px;
    text-align: center;

@media ${t.tablet} {
    font-size: 18px;
}
`;const M=o.button`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);  
   
    &:hover,
    &:focus{
    text-decoration: underline;
    text-decoration-color:var(--secondary-orange);
    text-decoration-thickness:2px;
    font-size: 18px;    
}
@media ${t.tablet} {
    position:absolute;
    top:280px;
    left:40px;
    font-size: 18px;
    &:hover,
    &:focus{
        font-size: 20px;
    }
  }
  @media ${t.desktop}{
    top: 370px;
    left:50px;
    font-size: 20px;
    &:hover,
    &:focus{
        font-size: 22px;
    }
  }
`,z=o.div`
   
    background-image: url("${B}");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-y: 90px;
    background-position-x: 20px;

@media ${t.tablet} {
    flex-direction: column;
    background-image: url("${S}"); 
    height:400px;
 
    background-position-y: 10px;
    background-position-x: 270px;
}
@media ${t.desktop} {
    display: flex;
    flex-direction: row;
    background-repeat:no-repeat;
    
    background-image: url("${E}");
    height:600px;
    margin-bottom: 0px;
    background-position-y: 10px;
    background-position-x: 220px;
}

`,C="/fs-87-react-node-ServerIbraimovUa/assets/garage-Tlp1eJi3.jpg",V=()=>{const{t:a}=l(),{token:i}=m(),[c]=x(),r=c.get("email"),s=g();b.useEffect(()=>{i&&s(f(i))},[i,s]);const d=p=>{p.preventDefault(),r&&s(j({email:r})).unwrap().then(()=>y.success(`${a("verifyEmail.notify")}`))};return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx("div",{className:"container header-container",children:e.jsx(v,{children:e.jsx(h,{})})})}),e.jsx(P,{className:"section",children:e.jsxs(z,{children:[e.jsxs(D,{className:"container",children:[e.jsx(n,{message:a("verifyEmail.title1")}),e.jsx(n,{message:a("verifyEmail.link"),verify:!0}),e.jsx(k,{className:"icon-mail",id:"mail"}),e.jsx(M,{onClick:d,children:a("verifyEmail.resend")})]}),e.jsxs(H,{className:"container",children:[e.jsx(n,{message:a("verifyEmail.title2"),advert:!0}),e.jsx(U,{src:C,alt:"advertisment"})]})]})})]})};export{V as default};
