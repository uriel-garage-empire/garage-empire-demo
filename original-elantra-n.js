window.ORIGINAL_ELANTRA_N_MODELS={"Hyundai Elantra N": {"yaw": 3.141592653589793, "catalogYear": 2024, "url": "original:elantra-n-2024-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified 2024 Elantra N facelift. Thin front lamps, angular N bumper, red skirt trim, rear light bar and spoiler. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لإلنترا N موديل 2024، فوانيس رفيعة وإكصدام N وخط أحمر وجناح خلفي. مش نسخة مطابقة."}};
window.buildOriginalElantraN=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const dark=mat('#33383c',.3,.48);
const paint=mat('#9bcbdc',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2024 Hyundai Elantra N CN7 facelift, reference-led sedan.
const wheelGray=mat("#62676b",.55,.40);const axles=[-1.36,1.36],wr=.326,wy=.327,ar=.357;
const sections=[[-2.338,.70,.72,.84],[-2.14,.77,.77,.89],[-1.88,.82,.81,.91],[-1.60,.84,.83,.9125],[-1.36,.85,.84,.9125],[-1.0,.87,.85,.89],[-.65,.88,.86,.88],[0,.89,.87,.88],[.65,.90,.88,.89],[1.36,.90,.89,.9125],[1.70,.89,.88,.91],[2.0,.87,.85,.89],[2.338,.80,.80,.85]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
// The same rounded nose transform applies to panels and lamps.
function fx(z){return -2.338}
function rx(z){return 2.338}
grid(138,34,(u,v)=>{let x=-2.338+4.676*u,z=(-1+2*v)*sample(x,3),a=Math.pow(1-u,10),b=Math.pow(u,10);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(240,16,(u,v)=>{let x=-2.338+4.676*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.085*(1-v)+.024*Math.sin(Math.PI*v))]},paint);
box(0,.145,0,4.15,.06,1.55,black);
const roof=[[-1.04,.88,.74],[-.80,1.12,.70],[-.44,1.35,.63],[-.12,1.415,.62],[.40,1.40,.625],[.70,1.33,.65],[1.04,1.14,.70],[1.55,.91,.77]];
function cr(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,cr(x,1)-.033*q*q,q*cr(x,2)]}
grid(100,26,(u,v)=>cp(-1.04+2.59*u,-1+2*v),paint);
for(let[a,b]of [[-.99,-.32],[.78,1.50]])grid(40,22,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.007;return p},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.875+(cr(x,1)-.033-.875)*u,side*(.835+(cr(x,2)-.835)*u+o)]}
 grid(110,14,(u,v)=>sp(-1.04+2.59*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.90+.13*v,b=.14;return sp(a+(b-a)*u,.04+.88*v,.008)},glass);
 grid(40,12,(u,v)=>{let a=.23,b=1.30-.24*v;return sp(a+(b-a)*u,.04+.84*v,.008)},glass);
 grid(4,12,(u,v)=>sp(.14+.09*u,.03+.9*v,.011),black);
 grid(70,1,(u,v)=>sp(-.86+2.09*u,.94+.025*v,.012),chrome);
 line([[-.94,.94],[1.30,.94]].map(([x,y])=>[x,y,side*.842]),chrome,.004);
 function sz(x,y){return side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.006)}
 for(let a of [-.83,.20,1.22])line([[a,.90],[a+.03,.34],[a+.13,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 line([[-.70,.24],[1.34,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 for(let x of [.02,1.02])box(x,.87,side*.919,.18,.025,.019,paint,.006);
 line([[-1.05,.18,side*.89],[1.13,.18,side*.89]],black,.012);
 box(-.77,1.025,side*.81,.07,.045,.13,black);box(-.76,1.06,side*.91,.24,.10,.14,paint,.018);

}
// Angular CN7 door creases and N red lower side skirts, no WRX arch cladding or hood scoop.
for(let side of [-1,1]){
 poly([[-.99,.245,side*.884],[1.09,.245,side*.906],[1.19,.165,side*.89],[-1.10,.165,side*.88]],black);
 line([[-1.02,.182,side*.892],[1.10,.182,side*.910]],red,.009);
 line([[-1.02,.77,side*.916],[.14,.45,side*.901],[1.06,.82,side*.922]],seam,.0025);
 line([[-.85,.36,side*.901],[.14,.45,side*.903],[.99,.38,side*.916]],seam,.0025);
}
// Low wide facelift nose, thin horizontal lamps and angular silver N bumper accents.
grid(30,64,(u,v)=>{let z=(-1+2*v)*(.84+.035*Math.sin(Math.PI*u));return[fx(z),.17+.54*u,z]},paint);
poly([[-.82,.68],[.82,.68],[.82,.25],[.70,.18],[-.70,.18],[-.82,.25]].map(([z,y])=>[fx(z)-.012,y,z]),black);
for(let side of [-1,1]){
 poly([[.40,.705],[.82,.72],[.83,.66],[.43,.65]].map(([z,y])=>[fx(z)-.018,y,side*z]),black);
 line([[.41,.704],[.80,.716],[.835,.68]].map(([z,y])=>[fx(z)-.027,y,side*z]),lamp,.007);
 poly([[.41,.53],[.48,.53],[.75,.25],[.67,.25]].map(([z,y])=>[fx(z)-.025,y,side*z]),chrome);
 poly([[.44,.55],[.78,.55],[.80,.50],[.49,.50]].map(([z,y])=>[fx(z)-.025,y,side*z]),paint);
 poly([[.78,.26],[.825,.29],[.825,.53],[.79,.50]].map(([z,y])=>[fx(z)-.022,y,side*z]),dark);
}
line([[-2.355,.61,-.78],[-2.355,.61,.78]],dark,.011);
for(let y of [.29,.35,.41,.47])line([[-2.359,y,-.61],[-2.359,y,.61]],dark,.005);
box(-2.362,.56,0,.016,.080,.42,black,.006);
line([[-2.35,.195,-.77],[-2.38,.185,0],[-2.35,.195,.77]],red,.010);
// Continuous thin rear lamps with downturned ends, black lower bumper and twin large exhausts.
grid(30,64,(u,v)=>{let z=(-1+2*v)*(.85+.025*Math.sin(Math.PI*u));return[rx(z),.17+.63*u,z]},paint);
poly([[-.82,.76],[.82,.76],[.76,.60],[-.76,.60]].map(([z,y])=>[rx(z)+.012,y,z]),black);
line([[2.36,.741,-.80],[2.36,.735,0],[2.36,.741,.80]],red,.009);
for(let side of [-1,1]){
 line([[2.36,.741,side*.80],[2.36,.635,side*.70],[2.36,.65,side*.40]],red,.009);
 poly([[1.93,.78,side*.91],[2.338,.76,side*.862],[2.338,.62,side*.862],[2.0,.70,side*.909]],black);
 line([[1.94,.76,side*.917],[2.338,.744,side*.869]],red,.009);
 let o=mesh(new T.CylinderGeometry(.068,.068,.13,28),chrome,2.33,.23,side*.64);o.rotation.z=Math.PI/2;let q=mesh(new T.CircleGeometry(.051,28),black,2.40,.23,side*.64);q.rotation.y=Math.PI/2;
}
box(2.36,.53,0,.018,.13,.44,black,.006);
poly([[-.81,.17],[.81,.17],[.82,.44],[.55,.40],[-.55,.40],[-.82,.44]].map(([z,y])=>[rx(z)+.014,y,z]),black);
line([[2.35,.20,-.49],[2.365,.205,.49]],red,.009);
poly([[2.375,.37,-.047],[2.375,.37,.047],[2.375,.315,0]],red);
// Trunk-mounted N rear spoiler, with low twin pedestals.
for(let z of [-.51,.51])box(1.95,.91,z,.075,.18,.045,black,.008);
grid(8,48,(u,v)=>[1.79+.27*u,1.00+.012*Math.sin(Math.PI*u),(-1+2*v)*.79],black);
for(let z of [-.79,.79])poly([[1.79,.995,z],[2.06,.995,z],[2.04,1.055,z],[1.81,1.045,z]],black);
// Forged-style multi-spoke dark wheels with N red calipers.
for(let x of axles)for(let side of [-1,1]){
 let z=side*.80,out=side*.94,o=mesh(new T.CylinderGeometry(wr,wr,.24,44),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.255,.010,8,44),wheelGray,x,wy,out);
 box(x+.14,wy,side*.928,.05,.17,.018,red,.008);
 for(let a=0;a<10;a++){let t=a*Math.PI/5,sp=box(x+Math.sin(t)*.14,wy+Math.cos(t)*.14,out+side*.009,.027,.235,.018,wheelGray,.005);sp.rotation.z=-t;}
 let h=mesh(new T.CylinderGeometry(.046,.046,.024,20),wheelGray,x,wy,out+side*.014);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.87)/.46)),d=.18*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
