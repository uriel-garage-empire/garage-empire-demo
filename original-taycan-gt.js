window.ORIGINAL_TAYCAN_GT_MODELS={"Porsche Taycan Turbo GT": {"yaw": 3.141592653589793, "catalogYear": 2024, "url": "original:taycan-gt-2024-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2024 launch Taycan Turbo GT. Low fastback, four-point lamps, full-width rear light, forged-style wheels and adaptive spoiler. Not an exact replica.", "noteAr": "Taycan GT موديل2024 مبسط: فوانيس أربع نقط وشريط خلفي وجناح متحرك. مش نسخة مطابقة."}};
window.buildOriginalTaycanGT=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#77608e',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified2024 launch TaycanTurboGT, standard adaptive-spoiler body.
const wheelGray=mat('#91908c',.7,.32),discGray=mat('#3e4244',.45,.5),gold=mat('#b09a60',.4,.4),axles=[-1.45,1.45],wr=.354,wy=.354,ar=.39;
const sections=[[-2.484,.69,.75,.80],[-2.24,.77,.85,.94],[-1.80,.83,.98,.99],[-1.45,.84,1.005,.999],[-1.00,.85,.99,.98],[-.40,.82,.90,.91],[.45,.82,.91,.93],[1.10,.86,.98,.99],[1.45,.89,1.02,.998],[1.90,.88,.98,.97],[2.24,.86,.92,.91],[2.484,.81,.84,.82]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}

function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.16)/(sample(x,2)-.16)));return sample(x,3)-.07*(1-v)+.024*Math.sin(Math.PI*v)+o}
function fx(z){return -2.484}function rx(z){return 2.484}
grid(140,34,(u,v)=>{let x=-2.484+4.968*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(230,16,(u,v)=>{let x=-2.484+4.968*u,y=bottom(x)+(sample(x,2)-bottom(x))*v;return[x,y,side*sy(x,y)]},paint);
box(0,.145,0,4.2,.06,1.55,black);

const roof=[[-.96,.86,.69],[-.68,1.095,.64],[-.25,1.32,.615],[.12,1.375,.615],[.58,1.355,.63],[1.01,1.24,.66],[1.35,1.06,.72],[1.75,.925,.77]];
function cr(x,k){return interp(roof,x,k)}function cp(x,q){return[x,cr(x,1)-.032*q*q,q*cr(x,2)]}
grid(130,30,(u,v)=>cp(-.96+2.71*u,-1+2*v),paint);
for(let[a,b]of [[-.87,-.20],[.98,1.66]])grid(50,26,(u,v)=>{let q=cp(a+(b-a)*u,(-1+2*v)*.95);q[1]+=.008;return q},glass);
grid(42,26,(u,v)=>{let q=cp(-.12+1.00*u,(-1+2*v)*.89);q[1]+=.008;return q},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.875+(cr(x,1)-.032-.875)*u,side*(.825+(cr(x,2)-.825)*u+o)]}
 grid(130,16,(u,v)=>sp(-.96+2.71*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.84+.19*v,b=.18;return sp(a+(b-a)*u,.055+.87*v,.01)},glass);
 grid(44,12,(u,v)=>{let a=.28,b=1.57-.42*v;return sp(a+(b-a)*u,.055+.87*v,.01)},glass);
 grid(4,14,(u,v)=>sp(.18+.10*u,.03+.93*v,.015),black);
 grid(75,1,(u,v)=>sp(-.81+2.33*u,.95+.024*v,.015),black);
 line([[-.83,.883],[1.56,.883]].map(([x,y])=>[x,y,side*.837]),black,.005);
 for(let a of [-.80,.25,1.25])line([[a,.86],[a+.03,.36],[a+.12,.25]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 line([[-.67,.25],[1.33,.25]].map(([x,y])=>[x,y,side*sy(x,y,.009)]),seam,.002);
 for(let x of [.03,1.03])box(x,.83,side*sy(x,.83,.012),.17,.024,.018,black,.004);
 grid(80,3,(u,v)=>{let x=-1.04+2.26*u,y=.17+.07*v;return[x,y,side*sy(x,y,.015)]},black);
 box(-.65,.98,side*.84,.07,.036,.15,black);box(-.64,1.025,side*.96,.25,.095,.15,paint,.018);
 // Front charging flap, distinct front shoulder and hood creases.
 line([[-1.02,.85],[-.76,.85],[-.76,.68],[-1.02,.68],[-1.02,.85]].map(([x,y])=>[x,y,side*sy(x,y,.01)]),seam,.002);
 grid(48,3,(u,v)=>{let x=-2.08+1.05*u,z=side*(.32+.13*u+.018*v);return[x,topY(x,z)+.008*Math.sin(Math.PI*v),z]},paint);
}
// Rounded low EV nose; facelift four-point headlamps inset on raised shoulders.
grid(45,80,(u,v)=>{let y=.15+.56*u,z=(-1+2*v)*sy(-2.484,y);return[fx(z),y,z]},paint);
for(let side of [-1,1]){
 grid(28,22,(u,v)=>{let x=-2.275+.30*u,z=side*(.59+.24*v-.025*u);return[x,topY(x,z)+.008,z]},black);
 for(let row of [0,1])for(let col of [0,1])grid(6,6,(u,v)=>{let x=-2.24+.17*row+.028*u,z=side*(.625+.14*col+.052*v);return[x,topY(x,z)+.014,z]},lamp);
 poly([[.60,.24],[.85,.28],[.88,.54],[.74,.56]].map(([z,y])=>[fx(z)-.014,y,side*z]),black);
 line([[.67,.30],[.79,.50]].map(([z,y])=>[fx(z)-.021,y,side*z]),black,.017);
 grid(5,20,(u,v)=>{let z=side*(.48+.35*v);return[fx(z)-.025,.16+.045*u,z]},black);
}
poly([[-.57,.18],[.57,.18],[.52,.37],[-.52,.37]].map(([z,y])=>[fx(z)-.018,y,z]),black);
for(let y of [.22,.29])line([[-2.509,y,-.48],[-2.509,y,.48]],black,.007);
box(-2.51,.445,0,.014,.09,.43,chrome,.003);
grid(4,60,(u,v)=>{let z=(-1+2*v)*(.77+.03*u);return[fx(z)-.04,.115+.04*u,z]},black);
// Continuous narrow rear light blade and raised adaptive spoiler, not a Weissach fixed wing.
grid(48,80,(u,v)=>{let y=.15+.66*u,z=(-1+2*v)*sy(2.484,y);return[rx(z),y,z]},paint);
for(let side of [-1,1]){
 grid(28,6,(u,v)=>{let x=2.05+.39*u,y=.795+.035*v;return[x,y,side*sy(x,y,.010)]},red);
 line([[rx(.57)+.02,.37,side*.57],[rx(.77)+.02,.37,side*.77]],red,.007);
}
poly([[-.79,.75],[.79,.75],[.78,.805],[-.78,.805]].map(([z,y])=>[rx(z)+.015,y,z]),black);
line([[rx(-.77)+.025,.777,-.77],[rx(.77)+.025,.777,.77]],red,.011);
box(2.499,.55,0,.014,.13,.43,black,.002);
grid(14,65,(u,v)=>{let z=(-1+2*v)*(.76+.07*u);return[rx(z)+.012,.15+.18*u,z]},black);
for(let z of [-.40,-.20,0,.20,.40])box(2.48,.16,z,.16,.10,.016,black);
for(let z of [-.50,.50])box(2.11,.93,z,.08,.06,.055,black);
grid(15,70,(u,v)=>{let z=(-1+2*v)*.78;return[2.05+.32*u, .97+.045*u-.03*(z/.78)**2,z]},paint);
line([[2.37,1.015,-.78],[2.37,1.015,.78]],black,.012);
//21-inch-style10-spoke forged wheels and VictoryGold calipers.
for(let x of axles)for(let side of [-1,1]){
 let out=side*1.00,o=mesh(new T.CylinderGeometry(wr,wr,.24,48),tire,x,wy,side*.88);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.267,.267,.016,44),black,x,wy,out);d.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.264,.006,8,48),wheelGray,x,wy,out+side*.01);
 let disc=mesh(new T.CylinderGeometry(.222,.222,.009,40),discGray,x,wy,out+side*.007);disc.rotation.x=Math.PI/2;
 box(x+.14,wy,side*1.012,.06,.18,.022,gold,.008);
 for(let a=0;a<10;a++){let t=a*Math.PI/5;line([[x+Math.sin(t)*.048,wy+Math.cos(t)*.048,out+side*.017],[x+Math.sin(t+.10)*.258,wy+Math.cos(t+.10)*.258,out+side*.017]],wheelGray,.016)}
 let h=mesh(new T.CylinderGeometry(.038,.038,.022,20),black,x,wy,out+side*.025);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.98)/.504)),d=.22*Math.pow(Math.min(1,Math.abs(z)/.97),3)*f;p.setX(i,x+(x<0?d:-d)+(x<-2.0?.14*Math.max(0,(.75-y)/.60)*Math.min(1,(-x-2.0)/.48):x>2.0?-.10*Math.max(0,(.8-y)/.65)*Math.min(1,(x-2)/.48):0))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
