window.ORIGINAL_COROLLA_LE_MODELS={"Toyota Corolla LE": {"yaw": 3.141592653589793, "catalogYear": 2025, "url": "original:corolla-le-2025-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified 2025 Corolla LE. Hooked headlamps, horizontal-slat grille, plain LE bumper and silver wheel covers. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لكورولا LE موديل 2025، فوانيس معقوفة وشبكة أفقية وإكصدام LE وطاسات فضية. مش نسخة مطابقة."}};
window.buildOriginalCorollaLE=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#e1e4e5',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2025 Toyota Corolla LE E210 facelift, reference-led sedan.
const wheelGray=mat("#62676b",.55,.40);const axles=[-1.350,1.350],wr=.316,wy=.316,ar=.350;
const sections=[[-2.315,.76,.73,.77],[-2.15,.82,.78,.84],[-1.90,.86,.82,.88],[-1.55,.88,.84,.89],[-1.35,.89,.85,.89],[-1.05,.91,.87,.88],[-.70,.93,.88,.86],[0,.94,.89,.86],[.70,.95,.90,.88],[1.10,.95,.90,.89],[1.35,.94,.89,.89],[1.78,.91,.86,.88],[2.12,.86,.80,.85],[2.315,.81,.78,.80]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
// The same rounded nose transform applies to panels and lamps.
function fx(z){return -2.315}
function rx(z){return 2.315}
grid(138,34,(u,v)=>{let x=-2.315+4.63*u,z=(-1+2*v)*sample(x,3),a=Math.pow(1-u,10),b=Math.pow(u,10);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(240,16,(u,v)=>{let x=-2.315+4.63*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.085*(1-v)+.024*Math.sin(Math.PI*v))]},paint);
box(0,.145,0,4.15,.06,1.55,black);
const roof=[[-.99,.93,.72],[-.76,1.17,.68],[-.43,1.37,.62],[-.10,1.435,.605],[.40,1.43,.605],[.68,1.375,.63],[1.00,1.19,.69],[1.40,.95,.74]];
function cr(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,cr(x,1)-.033*q*q,q*cr(x,2)]}
grid(100,26,(u,v)=>cp(-.99+2.39*u,-1+2*v),paint);
for(let[a,b]of [[-.94,-.32],[.82,1.34]])grid(40,22,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.007;return p},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.925+(cr(x,1)-.033-.925)*u,side*(.835+(cr(x,2)-.835)*u+o)]}
 grid(110,14,(u,v)=>sp(-.99+2.39*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.90+.13*v,b=.14;return sp(a+(b-a)*u,.04+.88*v,.008)},glass);
 grid(40,12,(u,v)=>{let a=.23,b=1.30-.24*v;return sp(a+(b-a)*u,.04+.84*v,.008)},glass);
 grid(4,12,(u,v)=>sp(.14+.09*u,.03+.9*v,.011),black);
 grid(70,1,(u,v)=>sp(-.86+2.09*u,.94+.025*v,.012),chrome);
 line([[-.94,.94],[1.30,.94]].map(([x,y])=>[x,y,side*.827]),chrome,.004);
 function sz(x,y){return side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.006)}
 for(let a of [-.83,.20,1.22])line([[a,.90],[a+.03,.34],[a+.13,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 line([[-.70,.24],[1.34,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 for(let x of [.02,1.02])box(x,.87,side*.889,.18,.025,.019,paint,.006);
 line([[-1.05,.18,side*.89],[1.13,.18,side*.89]],black,.012);
 box(-.77,1.025,side*.81,.07,.045,.13,black);box(-.76,1.06,side*.91,.24,.10,.14,paint,.018);

}
// Plain LE sill and rounded fender openings, no sport skirts or spoiler.
for(let side of [-1,1]){
 line([[-.80,.29,side*.85],[1.03,.29,side*.87]],seam,.002);

}
// LE nose: narrow upper grille, hooked lamps and broad horizontal-slat trapezoid.
grid(30,60,(u,v)=>{let z=(-1+2*v)*(.80-.055*(1-u)+.022*Math.sin(Math.PI*u));return[fx(z),.16+.60*u,z]},paint);
poly([[-.43,.75],[.43,.75],[.39,.675],[-.39,.675]].map(([z,y])=>[fx(z)-.012,y,z]),black);
poly([[-.43,.63],[.43,.63],[.72,.225],[-.72,.225]].map(([z,y])=>[fx(z)-.017,y,z]),black);
for(let y of [.26,.305,.35,.395,.44,.485,.53,.575]){let z=.72-(y-.225)*.72;line([[fx(-z)-.026,y,-z],[fx(z)-.026,y,z]],black,.006)}
for(let side of [-1,1]){
 poly([[.37,.755],[.78,.78],[.78,.665],[.63,.54],[.57,.55],[.61,.66]].map(([z,y])=>[fx(z)-.018,y,side*z]),black);
 line([[.39,.735],[.74,.758],[.735,.675],[.63,.565],[.60,.565]].map(([z,y])=>[fx(z)-.030,y,side*z]),lamp,.009);
 poly([[.75,.757],[.79,.765],[.77,.68],[.72,.63]].map(([z,y])=>[fx(z)-.030,y,side*z]),amber);
 box(fx(.62)-.027,.70,side*.62,.018,.051,.091,lamp,.004);
 poly([[.70,.23],[.80,.23],[.78,.35]].map(([z,y])=>[fx(z)-.012,y,side*z]),black);
}
box(-2.34,.43,0,.014,.10,.40,black,.004);
// Tapered red-clear rear lamps, black trunk garnish and tall LE bumper reflectors.
grid(32,60,(u,v)=>{let z=(-1+2*v)*(.80-.05*(1-u)+.022*Math.sin(Math.PI*u));return[rx(z),.16+.65*u,z]},paint);
poly([[-.50,.75],[.50,.75],[.47,.71],[-.47,.71]].map(([z,y])=>[rx(z)+.011,y,z]),black);
for(let side of [-1,1]){
 poly([[.30,.78],[.79,.81],[.79,.65],[.49,.64],[.35,.70]].map(([z,y])=>[rx(z)+.016,y,side*z]),red);
 poly([[.39,.705],[.76,.736],[.76,.66],[.49,.66]].map(([z,y])=>[rx(z)+.024,y,side*z]),lamp);
 line([[rx(.31)+.024,.77,side*.31],[rx(.78)+.024,.79,side*.78]],red,.014);
 grid(18,5,(u,v)=>{let x=1.94+.375*u,y=.68+.12*v;return[x,y,side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.012)]},red);
 line([[rx(.73)+.024,.29,side*.73],[rx(.75)+.024,.49,side*.75]],red,.012);
}
box(2.337,.60,0,.015,.15,.45,black,.004);
poly([[-.70,.17],[.70,.17],[.71,.36],[.60,.43],[-.60,.43],[-.71,.36]].map(([z,y])=>[rx(z)+.015,y,z]),black);
// Fin antenna and 16-inch LE silver wheel covers.
poly([[.59,cr(.59,1),-.016],[.80,cr(.80,1),-.016],[.73,cr(.73,1)+.065,0]],paint);poly([[.59,cr(.59,1),.016],[.80,cr(.80,1),.016],[.73,cr(.73,1)+.065,0]],paint);
for(let x of axles)for(let side of [-1,1]){
 let z=side*.78,out=side*.905,o=mesh(new T.CylinderGeometry(wr,wr,.225,44),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.214,.010,8,44),chrome,x,wy,out);let d=mesh(new T.CylinderGeometry(.203,.203,.014,36),black,x,wy,out-side*.012);d.rotation.x=Math.PI/2;
 for(let a=0;a<8;a++){let t=a*Math.PI/4;poly([[x+Math.sin(t)*.050,wy+Math.cos(t)*.050,out],[x+Math.sin(t+.08)*.213,wy+Math.cos(t+.08)*.213,out],[x+Math.sin(t+.34)*.213,wy+Math.cos(t+.34)*.213,out],[x+Math.sin(t+.21)*.052,wy+Math.cos(t+.21)*.052,out]],chrome)}
 let h=mesh(new T.CylinderGeometry(.055,.055,.024,20),chrome,x,wy,out+side*.008);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.87)/.46)),d=.20*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
