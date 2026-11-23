window.ORIGINAL_IS500_MODELS={"Lexus IS 500 F SPORT Performance": {"yaw": 3.141592653589793, "catalogYear": 2024, "url": "original:is500-2024-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2024 IS500 F SPORT Performance. Raised hood, spindle grille, L-shaped lamps, rear light bar, diagonal-stacked quad exhausts and moonroof. Not an exact replica.", "noteAr": "مجسم أصلي مبسط للكسز IS500 موديل2024، كبوت بارز وشبكة مغزلية وفوانيس L وأربع فتحات عادم مائلة. مش نسخة مطابقة."}};
window.buildOriginalIS500=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#737b7e',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified2024 Lexus IS500.
const wheelGray=mat("#62676b",.55,.40);const axles=[-1.3995,1.3995],wr=.327,wy=.327,ar=.362;
const sections=[[-2.3785,.84,.82,.80],[-2.10,.90,.87,.87],[-1.82,.97,.89,.91],[-1.3995,1.005,.91,.920],[-.94,1.005,.92,.90],[-.40,.93,.88,.88],[.35,.94,.89,.89],[.90,.96,.91,.90],[1.3995,.99,.92,.920],[1.72,.93,.87,.88],[2.05,.86,.81,.86],[2.3785,.90,.88,.82]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
// The same rounded nose transform applies to panels and lamps.
function fx(z){return -2.3785}
function rx(z){return 2.3785}
grid(138,34,(u,v)=>{let x=-2.3785+4.757*u,z=(-1+2*v)*sample(x,3),a=Math.pow(1-u,10),b=Math.pow(u,10);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(240,16,(u,v)=>{let x=-2.3785+4.757*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.085*(1-v)+.024*Math.sin(Math.PI*v))]},paint);
box(0,.145,0,4.15,.06,1.55,black);
const roof=[[-.87,1.005,.73],[-.66,1.21,.68],[-.29,1.405,.625],[.06,1.435,.625],[.48,1.41,.63],[.77,1.31,.66],[1.08,1.08,.72],[1.32,.99,.76]];
function cr(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,cr(x,1)-.033*q*q,q*cr(x,2)]}
grid(100,26,(u,v)=>cp(-.87+2.19*u,-1+2*v),paint);
for(let[a,b]of [[-.80,-.20],[.82,1.24]])grid(40,22,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.007;return p},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.98+(cr(x,1)-.033-.98)*u,side*(.835+(cr(x,2)-.835)*u+o)]}
 grid(110,14,(u,v)=>sp(-.87+2.19*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.81+.12*v,b=.15;return sp(a+(b-a)*u,.04+.88*v,.008)},glass);
 grid(40,12,(u,v)=>{let a=.24,b=1.16-.22*v;return sp(a+(b-a)*u,.04+.84*v,.008)},glass);
 grid(4,12,(u,v)=>sp(.14+.09*u,.03+.9*v,.011),black);
 grid(70,1,(u,v)=>sp(-.81+1.94*u,.94+.025*v,.012),chrome);
 line([[-.83,.94],[1.16,.94]].map(([x,y])=>[x,y,side*.827]),chrome,.004);
 function sz(x,y){return side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.006)}
 for(let a of [-.77,.20,1.09])line([[a,.90],[a+.03,.34],[a+.13,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 line([[-.65,.24],[1.17,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 for(let x of [.02,.98])box(x,.87,side*.932,.18,.025,.019,paint,.006);
 line([[-1.05,.18,side*.89],[1.13,.18,side*.89]],black,.012);
 box(-.70,1.025,side*.81,.07,.045,.13,black);box(-.69,1.06,side*.94,.24,.10,.14,black,.018);

}
// IS500 spindle, L lamps, raised hood and diagonal-stacked quad outlets.
grid(44,80,(u,v)=>{let z=(-1+2*v)*(.80-.085*(1-u)+.024*Math.sin(Math.PI*u));return[fx(z),.16+.68*u,z]},paint);
grid(52,84,(u,v)=>{let w=u<.47?.66-.53*u:.411+.25*(u-.47);return[fx(0)-.018,.18+.64*u,(-1+2*v)*w]},black);
for(let y=.22;y<.80;y+=.045)for(let z=-.58;z<.60;z+=.075){let w=(y-.18)/.64,wid=w<.47?.66-.53*w:.411+.25*(w-.47);if(Math.abs(z)>.96*wid)continue;line([[fx(z)-.03,y,z],[fx(z)-.03,y+.021,z+.025],[fx(z)-.03,y,z+.05]],seam,.0025)}
for(let side of [-1,1]){
 line([[.65,.18],[.41,.48],[.54,.82]].map(([z,y])=>[fx(z)-.022,y,side*z]),wheelGray,.007);
 poly([[.43,.81],[.83,.84],[.81,.75],[.60,.73],[.47,.72]].map(([z,y])=>[fx(z)-.014,y,side*z]),black);
 line([[.49,.742],[.58,.785],[.81,.815]].map(([z,y])=>[fx(z)-.027,y,side*z]),lamp,.012);
 poly([[.60,.765],[.80,.800],[.79,.767],[.62,.750]].map(([z,y])=>[fx(z)-.029,y,side*z]),lamp);
 poly([[.67,.26],[.85,.27],[.82,.51],[.74,.55]].map(([z,y])=>[fx(z)-.015,y,side*z]),black);
 for(let y=.29;y<.50;y+=.04)line([[fx(.70)-.026,y,side*.70],[fx(.82)-.026,y,side*.82]],seam,.003);
 line([[-1.06,.18,side*.88],[.55,.18,side*.895],[1.12,.30,side*.92]],black,.012);
 line([[-2.05,.52],[-1.40,.58],[-.90,.57]].map(([x,z])=>[x,topY(x,z)+.01,side*z]),seam,.003);
}
let badge=mesh(new T.TorusGeometry(.052,.006,8,28),chrome,-2.418,.65,0);badge.rotation.y=Math.PI/2;
line([[-2.425,.67,.015],[-2.425,.62,-.025],[-2.425,.62,.024]],chrome,.006);
grid(42,80,(u,v)=>{let z=(-1+2*v)*(.82-.085*(1-u)+.024*Math.sin(Math.PI*u));return[rx(z),.16+.72*u,z]},paint);
for(let side of [-1,1]){
 poly([[.25,.86],[.82,.87],[.83,.74],[.62,.70],[.54,.73]].map(([z,y])=>[rx(z)+.010,y,side*z]),black);
 line([[.81,.85],[.79,.745],[.60,.72],[.53,.79],[0,.79]].map(([z,y])=>[rx(z)+.022,y,side*z]),red,.012);
 grid(24,10,(u,v)=>{let x=2.04+.32*u,y=.74+.075*v;return[x,y,side*(sample(x,3)+.01)]},black);
 line([[2.08,.795,side*.876],[2.31,.795,side*.837]],red,.011);
 line([[.73,.36],[.81,.48]].map(([z,y])=>[rx(z)+.025,y,side*z]),red,.012);
 for(let [z,y]of [[.60,.245],[.72,.18]]){let o=mesh(new T.CylinderGeometry(.047,.047,.06,28),black,rx(z)+.018,y,side*z);o.rotation.z=Math.PI/2;let r=mesh(new T.TorusGeometry(.047,.007,8,28),chrome,rx(z)+.050,y,side*z);r.rotation.y=Math.PI/2;}
}
poly([[-.81,.14],[.81,.14],[.78,.35],[-.78,.35]].map(([z,y])=>[rx(z)+.014,y,z]),black);
for(let z of [-.38,-.18,0,.18,.38])box(2.40,.19,z,.09,.11,.016,black);
box(2.405,.57,0,.017,.16,.42,black,.003);
grid(6,58,(u,v)=>{let z=(-1+2*v)*.77;return[rx(z)-.09+.09*u,topY(2.3785,z)+.008+.016*Math.sin(Math.PI*u/2),z]},black);
// Moonroof, small fin and dark split10-spoke Enkei-style wheels.
grid(26,26,(u,v)=>{let p=cp(-.12+.65*u,(-1+2*v)*.73);p[1]+=.008;return p},glass);
poly([[.64,1.34,-.015],[.82,1.26,-.015],[.75,1.43,0]],black);poly([[.64,1.34,.015],[.82,1.26,.015],[.75,1.43,0]],black);
for(let x of axles)for(let side of [-1,1]){
 let out=side*.932,o=mesh(new T.CylinderGeometry(wr,wr,.225,44),tire,x,wy,side*.814);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.230,.230,.015,36),black,x,wy,out);d.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.237,.007,8,44),wheelGray,x,wy,out+side*.011);
 for(let a=0;a<10;a++)for(let k of [-1,1]){let t=a*Math.PI/5;line([[x+Math.sin(t)*.045,wy+Math.cos(t)*.045,out+side*.015],[x+Math.sin(t+k*.10)*.23,wy+Math.cos(t+k*.10)*.23,out+side*.015]],wheelGray,.007)}
 let h=mesh(new T.CylinderGeometry(.041,.041,.025,20),wheelGray,x,wy,out+side*.022);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.90)/.47)),d=.20*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
