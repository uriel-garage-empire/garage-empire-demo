window.ORIGINAL_MAZDA3TURBO_MODELS={"Mazda Mazda3 2.5 Turbo": {"yaw": 3.141592653589793, "catalogYear": 2024, "url": "original:mazda3turbo-2024-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2024 Mazda3 Turbo hatchback. Long bonnet, thick rear pillars, shield grille, paired ring tail lamps, black wheels and roof spoiler. Not an exact replica.", "noteAr": "Mazda3 Turbo موديل2024 مبسط: شبك عريض وفوانيس خلفية دائرية وسقف هاتش. مش نسخة مطابقة."}};
window.buildOriginalMazda3Turbo=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#565a60',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified2024 Mazda3 Turbo hatch study, no imported mesh.
const wheelGray=mat('#45484d',.6,.4),discGray=mat('#35383a',.4,.5),axles=[-1.363,1.363],wr=.328,wy=.328,ar=.36;
const sections=[[-2.2295,.80,.77,.74],[-1.98,.87,.86,.83],[-1.68,.92,.91,.89],[-1.363,.955,.94,.8985],[-.85,.96,.93,.88],[-.10,.91,.89,.845],[.65,.94,.91,.88],[1.15,.99,.94,.8985],[1.363,1.00,.945,.8985],[1.75,.99,.93,.88],[2.05,.96,.89,.83],[2.2295,.93,.86,.78]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}

function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.16)/(sample(x,2)-.16)));return sample(x,3)-.07*(1-v)+.024*Math.sin(Math.PI*v)+o}
function fx(z){return -2.2295}function rx(z){return 2.2295}
grid(140,34,(u,v)=>{let x=-2.2295+4.459*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(230,16,(u,v)=>{let x=-2.2295+4.459*u,y=bottom(x)+(sample(x,2)-bottom(x))*v;return[x,y,side*sy(x,y)]},paint);
box(0,.145,0,4.2,.06,1.55,black);

const roof=[[-.88,.96,.71],[-.61,1.20,.665],[-.20,1.405,.64],[.26,1.44,.65],[.76,1.43,.66],[1.20,1.37,.68],[1.50,1.22,.71],[1.86,1.01,.75]];
function cr(x,k){return interp(roof,x,k)}function cp(x,q){return[x,cr(x,1)-.035*q*q,q*cr(x,2)]}
grid(130,28,(u,v)=>cp(-.88+2.74*u,-1+2*v),paint);
for(let[a,b]of [[-.81,-.14],[1.30,1.80]])grid(45,26,(u,v)=>{let q=cp(a+(b-a)*u,(-1+2*v)*.94);q[1]+=.008;return q},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.965+(cr(x,1)-.035-.965)*u,side*(.795+(cr(x,2)-.795)*u+o)]}
 grid(125,16,(u,v)=>sp(-.88+2.74*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.78+.15*v,b=.23;return sp(a+(b-a)*u,.055+.88*v,.012)},glass);
 grid(44,12,(u,v)=>{let a=.34,b=1.17-.18*v;return sp(a+(b-a)*u,.055+.87*v,.012)},glass);
 grid(4,14,(u,v)=>sp(.23+.11*u,.02+.95*v,.016),black);
 grid(70,1,(u,v)=>sp(-.76+1.90*u,.95+.022*v,.016),black);
 line([[-.77,.972],[1.16,.972]].map(([x,y])=>[x,y,side*.808]),chrome,.004);
 for(let a of [-.74,.27,1.26])line([[a,.95],[a+.04,.35],[a+.12,.25]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 line([[-.61,.25],[1.38,.25]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 for(let x of [.09,1.12])box(x,.89,side*sy(x,.89,.018),.17,.030,.034,paint,.008);
 grid(80,3,(u,v)=>{let x=-.98+2.14*u,y=.16+.07*v;return[x,y,side*sy(x,y,.012)]},black);
 box(-.67,1.045,side*.80,.065,.04,.13,black);box(-.65,1.09,side*.89,.24,.10,.15,black,.018);
 grid(40,3,(u,v)=>{let x=-1.98+1.06*u,z=side*(.30+.14*u+.015*v);return[x,topY(x,z)+.007*Math.sin(Math.PI*v),z]},paint);
 // Round fuel flap on left rear quarter.
 let flap=[];for(let i=0;i<=40;i++){let t=i*Math.PI/20,x=1.49+.104*Math.cos(t),y=.92+.104*Math.sin(t);flap.push([x,y,side*sy(x,y,.008)])}if(side===1)line(flap,seam,.002);
}
// Deep shield grille, slim eyes and black Turbo front surround.
grid(50,80,(u,v)=>{let y=.16+.65*u,z=(-1+2*v)*sy(-2.2295,y);return[fx(z),y,z]},paint);
function gw(v){return .39+.20*Math.sin(Math.PI*(.15+.70*v))}
grid(40,60,(u,v)=>{let y=.29+.46*u,z=(-1+2*v)*gw(u);return[fx(z)-.018,y,z]},black);
let outline=[];for(let i=0;i<=25;i++){let t=i/25;outline.push([fx(0)-.025,.29+.46*t,gw(t)])}for(let i=25;i>=0;i--){let t=i/25;outline.push([fx(0)-.025,.29+.46*t,-gw(t)])}outline.push(outline[0]);line(outline,black,.012);
for(let y=.34;y<.73;y+=.05)for(let z=-.49;z<=.49;z+=.065){if(Math.abs(z)<gw((y-.29)/.46)-.025){line([[fx(z)-.023,y,z-.018],[fx(z)-.023,y+.014,z],[fx(z)-.023,y,z+.018]],wheelGray,.0025)}}
for(let side of [-1,1]){
 poly([[.47,.74],[.79,.82],[.80,.745],[.65,.69]].map(([z,y])=>[fx(z)-.020,y,side*z]),black);
 line([[.49,.742],[.66,.719],[.785,.772]].map(([z,y])=>[fx(z)-.028,y,side*z]),lamp,.007);
 let o=mesh(new T.TorusGeometry(.029,.006,8,28),lamp,fx(.65)-.031,.754,side*.65);o.rotation.y=Math.PI/2;
 
 line([[.57,.29],[.74,.29],[.79,.32]].map(([z,y])=>[fx(z)-.022,y,side*z]),black,.012);
}
poly([[-.53,.17],[.53,.17],[.42,.235],[-.42,.235]].map(([z,y])=>[fx(z)-.024,y,z]),black);
grid(4,60,(u,v)=>{let z=(-1+2*v)*.76;return[fx(z)-.030,.125+.035*u,z]},black);
let badge=mesh(new T.TorusGeometry(.055,.005,8,36),chrome,-2.263,.60,0);badge.rotation.y=Math.PI/2;line([[-2.268,.62,-.04],[-2.268,.60,0],[-2.268,.62,.04]],chrome,.004);
// Large C pillars, rounded rear shoulders and paired ring tail lamps.
grid(50,80,(u,v)=>{let y=.16+.77*u,z=(-1+2*v)*sy(2.2295,y);return[rx(z),y,z]},paint);
for(let side of [-1,1]){
 poly([[.29,.85],[.77,.89],[.78,.78],[.57,.76],[.36,.78]].map(([z,y])=>[rx(z)+.015,y,side*z]),black);
 for(let[z,rr]of [[.43,.052],[.65,.065]]){let o=mesh(new T.TorusGeometry(rr,.009,8,36),red,rx(z)+.026,.818,side*z);o.rotation.y=Math.PI/2;}
 grid(25,7,(u,v)=>{let x=1.92+.28*u,y=.81+.06*v;return[x,y,side*sy(x,y,.011)]},red);
 line([[rx(.59)+.02,.36,side*.59],[rx(.76)+.02,.36,side*.76]],red,.009);
 let o=mesh(new T.CylinderGeometry(.052,.052,.035,24,1,true),chrome,rx(.64)+.027,.23,side*.64);o.rotation.z=Math.PI/2;let d=mesh(new T.CylinderGeometry(.043,.043,.008,24),black,rx(.64)+.048,.23,side*.64);d.rotation.z=Math.PI/2;
}
grid(12,60,(u,v)=>{let z=(-1+2*v)*(.74+.02*u);return[rx(z)+.012,.15+.18*u,z]},black);box(2.25,.49,0,.012,.14,.42,black,.003);
let rb=mesh(new T.TorusGeometry(.045,.004,8,32),chrome,2.25,.78,0);rb.rotation.y=Math.PI/2;
line([[1.45,1.30,.15],[1.70,1.15,0]],black,.008);
grid(14,60,(u,v)=>{let z=(-1+2*v)*.70;return[1.26+.34*u,cr(1.26+.34*u,1)+.025-.035*(z/.70)**2,z]},black);

poly([[.75,1.405,-.01],[.93,1.39,-.01],[.83,1.48,0]],black);poly([[.75,1.405,.01],[.93,1.39,.01],[.83,1.48,0]],black);
// Black18-inch-style multi-spoke wheels.
for(let x of axles)for(let side of [-1,1]){
 let out=side*.90,o=mesh(new T.CylinderGeometry(wr,wr,.215,44),tire,x,wy,side*.79);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.228,.228,.015,40),black,x,wy,out);d.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.229,.006,8,44),wheelGray,x,wy,out+side*.01);
 let disc=mesh(new T.CylinderGeometry(.19,.19,.009,36),discGray,x,wy,out+side*.006);disc.rotation.x=Math.PI/2;
 for(let a=0;a<10;a++){let t=a*Math.PI/5;line([[x+Math.sin(t)*.043,wy+Math.cos(t)*.043,out+side*.016],[x+Math.sin(t+.08)*.224,wy+Math.cos(t+.08)*.224,out+side*.016]],wheelGray,.014)}
 let h=mesh(new T.CylinderGeometry(.035,.035,.022,20),chrome,x,wy,out+side*.022);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.76)/.4695)),d=.18*Math.pow(Math.min(1,Math.abs(z)/.97),3)*f;p.setX(i,x+(x<0?d:-d)+(x>1.90?-.10*Math.max(0,(.85-y)/.70)*Math.min(1,(x-1.90)/.3295):0))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
