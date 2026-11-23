window.ORIGINAL_C43_MODELS={"Mercedes-AMG C 43": {"yaw": 3.141592653589793, "catalogYear": 2023, "url": "original:c43-2023-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2023 C43. Vertical-strut grille, W206 sedan silhouette, wedge rear lamps, multi-spoke wheels and adjacent round quad tailpipes. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لمرسيدس AMG C43 موديل2023، شبكة رأسية وفوانيس خلفية مدببة وأربع مخارج عادم دائرية. مش نسخة مطابقة."}};
window.buildOriginalC43=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#737b7e',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified2024 AMG C43 W206, no imported mesh.
const wheelGray=mat('#969b9c',.68,.32),axles=[-1.4325,1.4325],wr=.338,wy=.338,ar=.372;
const sections=[[-2.3955,.835,.83,.79],[-2.12,.92,.89,.855],[-1.80,.98,.93,.90],[-1.4325,1.015,.95,.912],[-.95,1.015,.955,.895],[-.30,.95,.91,.885],[.50,.96,.92,.885],[1.05,.99,.94,.905],[1.4325,1.005,.955,.912],[1.80,.96,.91,.88],[2.10,.92,.875,.85],[2.3955,.89,.85,.79]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}

function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.16)/(sample(x,2)-.16)));return sample(x,3)-.07*(1-v)+.024*Math.sin(Math.PI*v)+o}
function fx(z){return -2.3955}function rx(z){return 2.3955}
grid(140,34,(u,v)=>{let x=-2.3955+4.791*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(230,16,(u,v)=>{let x=-2.3955+4.791*u,y=bottom(x)+(sample(x,2)-bottom(x))*v;return[x,y,side*sy(x,y)]},paint);
box(0,.145,0,4.2,.06,1.55,black);
const roof=[[-.85,1.005,.73],[-.61,1.225,.675],[-.20,1.425,.63],[.18,1.45,.63],[.64,1.425,.65],[.93,1.30,.68],[1.20,1.06,.73],[1.37,.98,.76]];
function cr(x,k){return interp(roof,x,k)}function cp(x,q){return[x,cr(x,1)-.034*q*q,q*cr(x,2)]}
grid(110,28,(u,v)=>cp(-.85+2.22*u,-1+2*v),paint);
for(let[a,b]of [[-.79,-.13],[.97,1.29]])grid(42,24,(u,v)=>{let q=cp(a+(b-a)*u,(-1+2*v)*.94);q[1]+=.007;return q},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.98+(cr(x,1)-.034-.98)*u,side*(.824+(cr(x,2)-.824)*u+o)]}
 grid(110,14,(u,v)=>sp(-.85+2.22*u,v),paint);
 grid(42,12,(u,v)=>{let a=-.78+.14*v,b=.24;return sp(a+(b-a)*u,.05+.88*v,.01)},glass);
 grid(42,12,(u,v)=>{let a=.34,b=1.23-.22*v;return sp(a+(b-a)*u,.05+.87*v,.01)},glass);
 grid(4,14,(u,v)=>sp(.24+.10*u,.03+.93*v,.014),black);
 grid(80,1,(u,v)=>sp(-.77+1.97*u,.95+.022*v,.016),chrome);
 line([[-.79,.985],[1.23,.985]].map(([x,y])=>[x,y,side*.833]),chrome,.005);
 for(let a of [-.73,.30,1.17])line([[a,.94],[a+.03,.35],[a+.14,.24]].map(([x,y])=>[x,y,side*sy(x,y,.007)]),seam,.002);
 line([[-.60,.24],[1.28,.24]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 for(let x of [.10,1.10])box(x,.90,side*sy(x,.90,.012),.18,.026,.024,chrome,.006);
 grid(75,2,(u,v)=>{let x=-1.04+2.25*u,y=.17+.06*v;return[x,y,side*sy(x,y,.014)]},black);
 line([[-1.03,.205],[1.18,.205]].map(([x,y])=>[x,y,side*sy(x,y,.021)]),chrome,.007);
 box(-.66,1.075,side*.81,.065,.04,.13,black);box(-.64,1.115,side*.93,.24,.10,.15,paint,.018);
 // Longitudinal power domes are shallow surface-following hood ridges.
 grid(42,3,(u,v)=>{let x=-2.08+1.10*u,z=side*(.26+.07*u+.018*v);return[x,topY(x,z)+.008+.010*Math.sin(Math.PI*v),z]},paint);
}
// Rounded trapezoid grille with vertical chrome struts and star.
grid(50,70,(u,v)=>{let y=.16+.68*u,z=(-1+2*v)*sy(-2.3955,y);return[fx(z),y,z]},paint);
function grw(v){return .47+.14*Math.sin(Math.PI*v/1.3)}
grid(28,50,(u,v)=>{let y=.49+.30*u,z=(-1+2*v)*grw(u);return[fx(z)-.017,y,z]},black);
let outline=[];for(let i=0;i<=24;i++){let t=i/24;outline.push([fx(0)-.024,.49+.30*t,grw(t)])}for(let i=24;i>=0;i--){let t=i/24;outline.push([fx(0)-.024,.49+.30*t,-grw(t)])}outline.push(outline[0]);line(outline,chrome,.008);
for(let z=-.51;z<=.52;z+=.065)line([[fx(z)-.025,.51,z],[fx(z)-.025,.77,z]],chrome,.006);
let badge=mesh(new T.TorusGeometry(.081,.006,8,40),chrome,-2.427,.64,0);badge.rotation.y=Math.PI/2;for(let t of [0,2.094,4.189])line([[-2.433,.64,0],[-2.433,.64+Math.cos(t)*.075,Math.sin(t)*.075]],chrome,.005);
for(let side of [-1,1]){
 poly([[.48,.79],[.78,.815],[.80,.73],[.61,.71]].map(([z,y])=>[fx(z)-.022,y,side*z]),black);
 line([[.49,.780],[.76,.801],[.79,.776]].map(([z,y])=>[fx(z)-.028,y,side*z]),lamp,.010);
 for(let z of [.61,.73]){let o=mesh(new T.CylinderGeometry(.028,.028,.013,18),lamp,fx(z)-.03,.775,side*z);o.rotation.z=Math.PI/2;}
 poly([[.52,.29],[.78,.29],[.80,.46],[.55,.45]].map(([z,y])=>[fx(z)-.02,y,side*z]),black);
 for(let y of [.33,.40])line([[fx(.55)-.028,y,side*.55],[fx(.77)-.028,y,side*.77]],black,.012);
 line([[.16,.20],[.40,.21],[.56,.26],[.78,.26],[.80,.46]].map(([z,y])=>[fx(z)-.026,y,side*z]),chrome,.011);
}
poly([[-.47,.18],[.47,.18],[.43,.38],[-.43,.38]].map(([z,y])=>[fx(z)-.022,y,z]),black);box(-2.428,.455,0,.016,.10,.46,chrome,.003);
// Tapered two-piece wedge lamps and round twin tailpipe pairs.
grid(50,70,(u,v)=>{let y=.16+.73*u,z=(-1+2*v)*sy(2.3955,y);return[rx(z),y,z]},paint);
for(let side of [-1,1]){
 poly([[.20,.79],[.70,.87],[.79,.78],[.64,.66],[.37,.72]].map(([z,y])=>[rx(z)+.017,y,side*z]),black);
 poly([[.25,.782],[.69,.842],[.755,.781],[.63,.688],[.39,.737]].map(([z,y])=>[rx(z)+.024,y,side*z]),red);
 for(let i=0;i<6;i++){let z=.30+.065*i;poly([[z,.754],[z+.047,.760],[z+.057,.795],[z+.01,.790]].map(([z,y])=>[rx(z)+.027,y,side*z]),lamp)}
 grid(26,8,(u,v)=>{let x=2.07+.30*u,y=.76+(.075-.04*u)*v;return[x,y,side*sy(x,y,.01)]},red);
 line([[rx(.55)+.02,.42,side*.55],[rx(.75)+.02,.42,side*.75]],red,.008);
 for(let z of [.58,.73]){let o=mesh(new T.CylinderGeometry(.05,.05,.065,28),black,rx(z)+.018,.22,side*z);o.rotation.z=Math.PI/2;let r=mesh(new T.TorusGeometry(.05,.007,8,28),chrome,rx(z)+.055,.22,side*z);r.rotation.y=Math.PI/2;}
}
grid(12,60,(u,v)=>{let z=(-1+2*v)*(.73+.04*u);return[rx(z)+.012,.16+.18*u,z]},black);box(2.423,.57,0,.015,.14,.44,black,.003);
for(let z of [-.32,-.16,0,.16,.32])box(2.41,.18,z,.08,.08,.018,black);
grid(3,60,(u,v)=>{let z=(-1+2*v)*.73;return[2.23+.10*u,topY(2.28,z)+.015+.012*u,z]},paint);
// Panoramic dark glazing, low roof fin and19-inch-style multi-spoke wheels.
grid(35,26,(u,v)=>{let q=cp(-.02+.75*u,(-1+2*v)*.80);q[1]+=.007;return q},glass);
poly([[.67,1.40,-.01],[.86,1.36,-.01],[.77,1.465,0]],black);poly([[.67,1.40,.01],[.86,1.36,.01],[.77,1.465,0]],black);
for(let x of axles)for(let side of [-1,1]){
 let out=side*.928,o=mesh(new T.CylinderGeometry(wr,wr,.225,44),tire,x,wy,side*.81);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.24,.24,.015,40),black,x,wy,out);d.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.244,.007,8,44),wheelGray,x,wy,out+side*.01);
 for(let a=0;a<10;a++)for(let k of [-1,1]){let t=a*Math.PI/5;line([[x+Math.sin(t)*.045,wy+Math.cos(t)*.045,out+side*.014],[x+Math.sin(t+k*.06)*.24,wy+Math.cos(t+k*.06)*.24,out+side*.014]],wheelGray,.006)}
 let h=mesh(new T.CylinderGeometry(.04,.04,.025,20),chrome,x,wy,out+side*.022);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.92)/.4755)),d=.18*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
