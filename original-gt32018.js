window.ORIGINAL_GT32018_MODELS={"Porsche 911 GT3": {"yaw": 3.141592653589793, "catalogYear": 2018, "url": "original:gt3-2018-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2018 Porsche911GT3 991.2. Raised oval headlights, low GT intake nose, slim separated tail lamps, central twin exhausts and conventional fixed wing. Not an exact replica.", "noteAr": "911 GT3 موديل2018 مبسط: فوانيس بيضاوية وجناح ثابت وشكمانين في النص. مش نسخة مطابقة."}};
window.buildOriginalGT32018=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#ba3034',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified2018 Porsche911GT3 991.2, no imported mesh.
const tailGlow=mat('#ef2433',.15,.3),wheelGray=mat('#55595d',.65,.36),discGray=mat('#2a2d30',.4,.5),axles=[-1.2285,1.2285],wr=.344,wy=.344,ar=.375;
const sections=[[-2.281,.63,.71,.70],[-2.06,.73,.87,.83],[-1.68,.79,.99,.89],[-1.2285,.79,.98,.90],[-.78,.78,.87,.84],[-.12,.77,.83,.825],[.60,.82,.93,.89],[1.2285,.89,1.00,.926],[1.65,.91,.96,.91],[1.98,.86,.89,.85],[2.281,.80,.80,.76]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}

function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.16)/(sample(x,2)-.16)));return sample(x,3)-.07*(1-v)+.024*Math.sin(Math.PI*v)+o}
function fx(z){return -2.281}function rx(z){return 2.281}
grid(140,34,(u,v)=>{let x=-2.281+4.562*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(230,16,(u,v)=>{let x=-2.281+4.562*u,y=bottom(x)+(sample(x,2)-bottom(x))*v;return[x,y,side*sy(x,y)]},paint);
box(0,.145,0,4.2,.06,1.55,black);

const roof=[[-.83,.82,.62],[-.57,1.04,.60],[-.19,1.24,.57],[.16,1.27,.565],[.51,1.245,.58],[.86,1.13,.61],[1.23,.94,.66],[1.50,.91,.70]];
function cr(x,k){return interp(roof,x,k)}function cp(x,q){return[x,cr(x,1)-.033*q*q,q*cr(x,2)]}
grid(130,30,(u,v)=>cp(-.83+2.33*u,-1+2*v),paint);
for(let[a,b]of [[-.77,-.14],[.74,1.32]])grid(48,28,(u,v)=>{let q=cp(a+(b-a)*u,(-1+2*v)*.94);q[1]+=.008;return q},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.84+(cr(x,1)-.033-.84)*u,side*(.76+(cr(x,2)-.76)*u+o)]}
 grid(120,16,(u,v)=>sp(-.83+2.33*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.75+.14*v,b=.33;return sp(a+(b-a)*u,.05+.88*v,.012)},glass);
 grid(38,12,(u,v)=>{let a=.39,b=1.15-.31*v;return sp(a+(b-a)*u,.06+.86*v,.012)},glass);
 grid(3,14,(u,v)=>sp(.33+.06*u,.03+.93*v,.016),black);
 grid(80,1,(u,v)=>sp(-.73+1.85*u,.95+.024*v,.016),black);
 line([[-.72,.847],[1.14,.847]].map(([x,y])=>[x,y,side*.773]),black,.004);
 for(let a of [-.70,.61])line([[a,.83],[a+.04,.33],[a+.11,.23]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 line([[-.58,.23],[.73,.23]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 box(.44,.78,side*sy(.44,.78,.015),.18,.026,.025,paint,.006);
 grid(70,3,(u,v)=>{let x=-.85+1.86*u,y=.15+.07*v;return[x,y,side*sy(x,y,.014)]},black);
 box(-.59,.91,side*.76,.065,.036,.15,black);box(-.57,.96,side*.87,.23,.095,.14,paint,.018);
 grid(46,3,(u,v)=>{let x=-2.02+1.12*u,z=side*(.27+.09*u+.016*v);return[x,topY(x,z)+.008*Math.sin(Math.PI*v),z]},paint);
}
// Raised oval headlamps on rounded front fenders, noRSbonnetvents.
for(let side of [-1,1]){
 grid(32,40,(u,v)=>{let t=2*Math.PI*v,r=u,x=-1.96+.215*r*Math.cos(t),z=side*(.66+.145*r*Math.sin(t));return[x,topY(x,z)+.012,z]},black);
 let ring=[];for(let i=0;i<=60;i++){let t=i*Math.PI/30,x=-1.96+.205*Math.cos(t),z=side*(.66+.136*Math.sin(t));ring.push([x,topY(x,z)+.019,z])}line(ring,chrome,.007);
 for(let t of [.65,2.5,3.8,5.65]){let x=-1.96+.10*Math.cos(t),z=side*(.66+.065*Math.sin(t));let o=mesh(new T.SphereGeometry(.024,12,8),lamp,x,topY(x,z)+.028,z);o.scale.y=.4;}
}
grid(50,80,(u,v)=>{let y=.14+.50*u,z=(-1+2*v)*sy(-2.281,y);return[fx(z),y,z]},paint);
poly([[-.42,.20],[.42,.20],[.38,.46],[-.38,.46]].map(([z,y])=>[fx(z)-.017,y,z]),black);
for(let side of [-1,1]){
 poly([[.46,.22],[.77,.24],[.78,.49],[.52,.52]].map(([z,y])=>[fx(z)-.019,y,side*z]),black);
 line([[.50,.50],[.74,.49]].map(([z,y])=>[fx(z)-.026,y,side*z]),lamp,.007);
 line([[.50,.22],[.46,.47]].map(([z,y])=>[fx(z)-.026,y,side*z]),paint,.020);
 for(let y of [.29,.36,.43])line([[fx(.57)-.024,y,side*.57],[fx(.74)-.024,y,side*.74]],black,.007);
}
box(-2.30,.485,0,.014,.075,.40,chrome,.002);
grid(4,70,(u,v)=>{let z=(-1+2*v)*.77;return[fx(z)-.040,.10+.045*u,z]},black);
grid(5,42,(u,v)=>{let x=-2.10+.05*u,z=(-1+2*v)*.38;return[x,topY(x,z)+.012,z]},black);
//991.2slim separated rear lamps and twin central exhausts.
grid(50,80,(u,v)=>{let y=.14+.66*u,z=(-1+2*v)*sy(2.281,y);return[rx(z),y,z]},paint);
for(let side of [-1,1]){
 poly([[.28,.70],[.70,.77],[.78,.69],[.39,.64]].map(([z,y])=>[rx(z)+.015,y,side*z]),black);
 poly([[.31,.704],[.69,.748],[.746,.698],[.40,.661]].map(([z,y])=>[rx(z)+.023,y,side*z]),tailGlow);
 grid(28,7,(u,v)=>{let x=1.96+.29*u,y=.71+.05*v;return[x,y,side*sy(x,y,.012)]},tailGlow);
 poly([[.46,.32],[.78,.32],[.80,.56],[.55,.56]].map(([z,y])=>[rx(z)+.016,y,side*z]),black);
 for(let y of [.35,.40,.45,.50])line([[rx(.58)+.025,y,side*.58],[rx(.75)+.025,y,side*.75]],black,.008);
 line([[rx(.59)+.023,.30,side*.59],[rx(.76)+.023,.30,side*.76]],red,.007);
 let z=side*.08,o=mesh(new T.CylinderGeometry(.052,.052,.045,28,1,true),chrome,rx(z)+.03,.20,z);o.rotation.z=Math.PI/2;let d=mesh(new T.CylinderGeometry(.044,.044,.009,28),black,rx(z)+.057,.20,z);d.rotation.z=Math.PI/2;
}
box(2.30,.485,0,.013,.12,.41,chrome,.002);grid(12,62,(u,v)=>{let z=(-1+2*v)*(.75+.02*u);return[rx(z)+.012,.12+.16*u,z]},black);
for(let z of [-.37,-.22,.22,.37])box(2.27,.135,z,.18,.09,.016,black);
for(let i=0;i<10;i++){let x=1.43+.055*i;grid(3,40,(u,v)=>{let z=(-1+2*v)*.56;return[x+.025*u,topY(x+.025*u,z)+.016,z]},black)}
//Conventional twin-underwing supports, not992swanneck.
for(let z of [-.48,.48])poly([[1.70,.91,z-.025],[1.83,1.15,z-.025],[1.94,1.15,z-.025],[1.82,.91,z-.025]],paint);
grid(18,72,(u,v)=>{let z=(-1+2*v)*.85;return[1.73+.38*u,1.17+.035*u-.025*(z/.85)**2,z]},paint);
for(let side of [-1,1])poly([[1.71,1.135],[2.12,1.16],[2.12,1.25],[1.77,1.23]].map(([x,y])=>[x,y,side*.85]),paint);
//20-inch-style centerlock wheels.
for(let x of axles)for(let side of [-1,1]){
 let out=side*(x>0?.928:.902),o=mesh(new T.CylinderGeometry(wr,wr,x>0?.27:.235,48),tire,x,wy,side*(x>0?.79:.78));o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.253,.253,.016,44),black,x,wy,out);d.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.253,.006,8,44),wheelGray,x,wy,out+side*.009);
 let disc=mesh(new T.CylinderGeometry(.215,.215,.009,40),discGray,x,wy,out+side*.006);disc.rotation.x=Math.PI/2;box(x+.135,wy,out+side*.012,.055,.17,.022,red,.006);
 for(let a=0;a<10;a++){let t=a*Math.PI/5;line([[x+Math.sin(t)*.044,wy+Math.cos(t)*.044,out+side*.018],[x+Math.sin(t+.075)*.248,wy+Math.cos(t+.075)*.248,out+side*.018]],wheelGray,.013)}
 let h=mesh(new T.CylinderGeometry(.038,.038,.025,20),chrome,x,wy,out+side*.026);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.80)/.481)),d=.21*Math.pow(Math.min(1,Math.abs(z)/.97),3)*f;p.setX(i,x+(x<0?d:-d)+(x<-1.9?.10*Math.max(0,(.65-y)/.5)*Math.min(1,(-x-1.9)/.381):x>1.9?-.08*Math.max(0,(.75-y)/.6)*Math.min(1,(x-1.9)/.381):0))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
