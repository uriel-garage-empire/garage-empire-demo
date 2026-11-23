window.ORIGINAL_MODEL3_MODELS={"Tesla Model 3 Performance": {"yaw": 3.141592653589793, "catalogYear": 2024, "url": "original:model3-performance-2024-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2024 Model3 Performance Highland. Closed nose, slim lamps, glass roof, C-shaped rear lamps, Performance splitter, diffuser and lip spoiler. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لتسلا Model3 Performance2024، واجهة هايلاند وفوانيس رفيعة وسقف زجاج وسبويلر وديفيوزر. مش نسخة مطابقة."}};
window.buildOriginalModel3=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#a92528',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#5f2428');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2024 Tesla Model3 Performance Highland.
const wheelGray=mat('#74787b',.55,.4),roofBlack=mat('#17262d',.4,.18);
const axles=[-1.4375,1.4375],wr=.333,wy=.333,ar=.365;
const sections=[[-2.36,.735,.735,.86],[-2.20,.78,.77,.84],[-1.85,.84,.83,.91],[-1.4375,.865,.85,.924],[-1.04,.885,.86,.90],[-.55,.89,.87,.90],[.20,.90,.87,.90],[.90,.92,.89,.92],[1.4375,.95,.90,.924],[1.90,.94,.91,.89],[2.20,.89,.86,.84],[2.36,.845,.845,.84]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}

function bottom(x){let b=.14;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function fx(z){return -2.36}
function rx(z){return 2.36}
grid(150,40,(u,v)=>{let x=-2.36+4.72*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(240,20,(u,v)=>{let x=-2.36+4.72*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.075*(1-v)+.022*Math.sin(Math.PI*v))]},paint);
box(0,.12,0,4.15,.05,1.57,black);
const roof=[[-1.13,.89,.73],[-.84,1.15,.67],[-.40,1.38,.62],[0,1.431,.615],[.43,1.405,.63],[.80,1.29,.67],[1.18,1.08,.73],[1.62,.95,.77]];
function cr(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,cr(x,1)-.035*q*q,q*cr(x,2)]}
grid(120,32,(u,v)=>cp(-1.13+2.75*u,-1+2*v),paint);
grid(54,24,(u,v)=>{let p=cp(-1.05+.78*u,(-1+2*v)*.96);p[1]+=.007;return p},glass);
grid(95,28,(u,v)=>{let p=cp(-.26+1.79*u,(-1+2*v)*.955);p[1]+=.006;return p},roofBlack);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.895+(cr(x,1)-.035-.895)*u,side*(.835+(cr(x,2)-.835)*u+o)]}
 grid(120,16,(u,v)=>sp(-1.13+2.75*u,v),paint);
 grid(50,16,(u,v)=>{let a=-.98+.16*v,b=.11;return sp(a+(b-a)*u,.04+.89*v,.009)},glass);
 grid(55,14,(u,v)=>{let a=.20,b=1.47-.30*v;return sp(a+(b-a)*u,.04+.86*v,.009)},glass);
 grid(4,12,(u,v)=>sp(.10+.09*u,.03+.91*v,.013),black);
 line([[-.97,.906],[1.47,.906]].map(([x,y])=>[x,y,side*.84]),black,.005);
 for(let x of [-.79,.17,1.26])line([[x,.89],[x+.02,.31],[x+.13,.22]].map(([x,y])=>[x,y,side*(sample(x,3)-.018)]),seam,.002);
 for(let x of [-.17,1.06])box(x,.86,side*.927,.17,.022,.012,black,.004);
 box(-.83,1.015,side*.80,.075,.045,.15,black);box(-.81,1.045,side*.98,.23,.095,.14,paint,.018);
 poly([[-1.02,.84,side*.925],[-.90,.87,side*.925],[-.90,.81,side*.925]],black);
 line([[-1.05,.16,side*.875],[1.15,.16,side*.895]],black,.018);
}
// Smooth closed EV nose, slim lamps, black splitter and Performance corner slots.
grid(55,80,(u,v)=>{let z=(-1+2*v)*(.86-.075*(1-u)+.022*Math.sin(Math.PI*u));return[fx(z),.15+.59*u,z]},paint);
poly([[-.66,.16],[.66,.16],[.61,.30],[-.61,.30]].map(([z,y])=>[fx(z)-.012,y,z]),black);
for(let side of [-1,1]){
 poly([[.43,.725],[.81,.725],[.80,.675],[.57,.68]].map(([z,y])=>[fx(z)-.006,y,side*z]),black);
 line([[.45,.716],[.57,.693],[.79,.694]].map(([z,y])=>[fx(z)-.012,y,side*z]),lamp,.010);
 poly([[.69,.31],[.79,.35],[.85,.53],[.81,.55]].map(([z,y])=>[fx(z)-.021,y,side*z]),black);
 line([[.58,.175],[.82,.17],[.84,.22]].map(([z,y])=>[fx(z)-.010,y,side*z]),black,.014);
}
// Hood seams follow the long, grille-free nose.
for(let side of [-1,1])line([[-2.10,.52],[-1.65,.61],[-1.08,.66]].map(([x,z])=>[x,topY(x,z)+.008,side*z]),seam,.002);
// C-shaped Highland rear lamps, small lip spoiler and exhaust-free diffuser.
grid(50,78,(u,v)=>{let z=(-1+2*v)*(.84-.075*(1-u)+.022*Math.sin(Math.PI*u));return[rx(z),.15+.70*u,z]},paint);
for(let side of [-1,1]){
 poly([[.30,.84],[.77,.84],[.80,.80],[.80,.67],[.34,.67],[.35,.73],[.69,.73],[.70,.78],[.32,.78]].map(([z,y])=>[rx(z)+.006,y,side*z]),black);
 line([[.33,.825],[.70,.825],[.76,.805],[.78,.77],[.78,.705],[.75,.685],[.36,.685]].map(([z,y])=>[rx(z)+.012,y,side*z]),red,.013);
 grid(24,10,(u,v)=>{let x=1.97+.32*u,y=.70+.17*v;return[x,y,side*(sample(x,3)+.006)]},black);
 line([[1.99,.84,side*.90],[2.20,.84,side*.85]],red,.012);
 line([[.73,.33],[.80,.34]].map(([z,y])=>[rx(z)+.026,y,side*z]),red,.009);
}
poly([[-.79,.17],[.79,.17],[.75,.40],[-.75,.40]].map(([z,y])=>[rx(z)+.019,y,z]),black);
box(2.382,.56,0,.016,.16,.42,black,.003);
for(let z of [-.40,0,.40])box(2.35,.19,z,.10,.10,.016,black);
grid(6,60,(u,v)=>{let z=(-1+2*v)*.76;return[rx(z)-.10+.10*u,.861+.035*Math.sin(u*Math.PI/2),z]},black);
for(let x of axles)for(let side of [-1,1]){
 let z=side*.807,out=side*.931,o=mesh(new T.CylinderGeometry(wr,wr,.235,48),tire,x,wy,z);o.rotation.x=Math.PI/2;
 let disc=mesh(new T.CylinderGeometry(.244,.244,.013,48),black,x,wy,out);disc.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.248,.007,8,48),wheelGray,x,wy,out+side*.009);
 for(let k=0;k<10;k++){let a=k*Math.PI/5,v=[];for(let [r,t]of [[.05,a-.11],[.23,a+.04],[.247,a+.17],[.14,a+.16]])v.push([x+r*Math.sin(t),wy+r*Math.cos(t),out+side*.014]);poly(v,wheelGray)}
 box(x-.10,wy+.04,out-side*.021,.075,.19,.025,red,.015);
 let h=mesh(new T.CylinderGeometry(.043,.043,.028,20),wheelGray,x,wy,out+side*.018);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.85)/.50)),d=(x<0?.20:.13)*Math.pow(Math.min(1,Math.abs(z)/.93),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});

const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
