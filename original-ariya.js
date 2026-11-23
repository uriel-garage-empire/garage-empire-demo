window.ORIGINAL_ARIYA_MODELS={"Nissan Ariya e-4ORCE": {"yaw": 3.141592653589793, "catalogYear": 2024, "url": "original:ariya-e4orce-2024-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2024 Ariya e-4ORCE. Black V shield, bent running lights, floating roof, rear light blade and19inch-style aero wheels. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لأريا e-4ORCE 2024، واجهة سوداء وفوانيس رفيعة وسقف عائم وشريط إضاءة خلفي وجنوط إيرو. مش نسخة مطابقة."}};
window.buildOriginalAriya=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#ba9272',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified2024 Nissan Ariya e-4ORCE crossover. No imported mesh.
const axles=[-1.388,1.388],wr=.361,wy=.361,ar=.391;
const trim=mat('#13191c',.15,.47),aero=mat('#a6a9a6',.6,.35);
const sections=[[-2.323,1.02,1.02,.88],[-2.17,1.02,.97,.87],[-1.87,1.09,1.03,.93],[-1.388,1.13,1.06,.950],[-1.0,1.14,1.075,.935],[0,1.14,1.08,.93],[.80,1.16,1.10,.94],[1.388,1.19,1.13,.950],[1.95,1.18,1.12,.94],[2.18,1.12,1.04,.91],[2.323,1.06,1.06,.90]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bot(x,r=ar){let b=.18;for(let a of axles){let d=Math.abs(x-a);if(d<r)b=Math.max(b,wy+Math.sqrt(r*r-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.18)/(sample(x,2)-.18)));return sample(x,3)-.075*(1-v)+.028*Math.sin(Math.PI*v)+o}
function fx(z){return -2.323}
function rx(z){return 2.323}
grid(140,32,(u,v)=>{let x=-2.323+4.646*u,z=(-1+2*v)*sample(x,3);return[x,sample(x,1)+(sample(x,2)-sample(x,1))*Math.pow(Math.abs(z)/sample(x,3),2),z]},paint);
for(let side of [-1,1]){
 grid(220,16,(u,v)=>{let x=-2.323+4.646*u,b=bot(x),y=b+(sample(x,2)-b)*v;return[x,y,side*sy(x,y)]},paint);
 // Crossover black rocker and substantial wheel arch lips follow body contours.
 grid(130,3,(u,v)=>{let x=-1.01+2.02*u;return[x,.18+.14*v,side*sy(x,.18+.14*v,.012)]},trim);
 for(let a of axles){grid(80,4,(u,v)=>{let t=Math.PI*u,y=wy+Math.sin(t)*(ar+.048*v),x=a+Math.cos(t)*(ar+.048*v);return[x,y,side*sy(x,y,.010)]},trim)}
}
box(0,.17,0,4.12,.08,1.64,trim);
const roof=[[-1.13,1.14,.79],[-.86,1.37,.75],[-.45,1.60,.69],[-.05,1.66,.68],[.55,1.66,.69],[1.10,1.59,.72],[1.55,1.43,.77],[1.97,1.13,.82]];
function cr(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,cr(x,1)-.035*q*q,q*cr(x,2)]}
grid(120,28,(u,v)=>cp(-1.13+3.10*u,-1+2*v),trim);
for(let [a,b]of [[-1.05,-.38],[1.30,1.88]])grid(48,26,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.008;return p},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){let y0=1.08+.025*Math.max(0,x);return[x,y0+(cr(x,1)-.035-y0)*u,side*(.848+(cr(x,2)-.848)*u+o)]}
 grid(120,16,(u,v)=>sp(-1.13+3.10*u,v),paint);
 grid(48,14,(u,v)=>{let a=-.98+.12*v,b=.12;return sp(a+(b-a)*u,.07+.88*v,.010)},glass);
 grid(48,14,(u,v)=>{let a=.23,b=1.60-.24*v;return sp(a+(b-a)*u,.08+.85*v,.010)},glass);
 grid(5,16,(u,v)=>sp(.12+.11*u,.04+.92*v,.015),trim);
 // Black C pillar and bright upper window arch create the floating roof.
 grid(20,16,(u,v)=>sp(1.43+.45*u,.05+.86*v,.012),trim);
 grid(90,1,(u,v)=>sp(-.96+2.58*u,.94+.025*v,.019),chrome);
 for(let a of [-.89,.18,1.38])line([[a,1.09],[a+.04,.51],[a+.10,.34]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 line([[-.80,.34],[1.48,.34]].map(([x,y])=>[x,y,side*sy(x,y,.009)]),seam,.002);
 for(let x of [-.02,1.17])box(x,1.02,side*sy(x,1.02,.018),.18,.027,.023,chrome,.006);
 box(-.87,1.19,side*.87,.075,.06,.14,trim);box(-.81,1.23,side*.975,.25,.11,.16,trim,.016);
 // Charge door ahead of front passenger door.
 if(side===1)line([[-1.09,.86],[-.84,.86],[-.84,1.05],[-1.09,1.05],[-1.09,.86]].map(([x,y])=>[x,y,side*sy(x,y,.010)]),seam,.002);
}
// Smooth shield nose. V-shaped black mask with thin blade lamps and bent DRLs.
grid(50,80,(u,v)=>{let z=(-1+2*v)*(.88-.055*(1-u));return[fx(z),.18+.83*u,z]},paint);
grid(44,64,(u,v)=>{let y=.44+.58*u,w=u<.22?.49+u: .71+(u-.22)*.128,z=(-1+2*v)*w;return[fx(z)-.020,y,z]},trim);
for(let side of [-1,1]){
 grid(32,3,(u,v)=>{let z=side*(.42+.41*u),y=1.015+.015*u+.018*v;return[fx(z)-.027,y,z]},lamp);
 line([[.83,1.035],[.76,.88],[.71,.63],[.63,.54],[.49,.49]].map(([z,y])=>[fx(z)-.028,y,side*z]),lamp,.009);
 poly([[.77,.39],[.86,.43],[.83,.58],[.77,.54]].map(([z,y])=>[fx(z)-.020,y,side*z]),trim);
}
grid(12,60,(u,v)=>{let z=(-1+2*v)*(.75-.04*u);return[fx(z)-.022,.18+.16*u,z]},trim);
line([[-.64,.31],[.64,.31]].map(([z,y])=>[fx(z)-.029,y,z]),black,.008);
box(-2.346,.35,0,.014,.11,.42,trim,.003);
let emblem=mesh(new T.TorusGeometry(.040,.004,6,24),chrome,-2.346,.78,0);emblem.rotation.y=Math.PI/2;
// Tapered hatch, full-width black garnish with red blade light and rear spoiler.
grid(60,72,(u,v)=>{let z=(-1+2*v)*(.90-.07*(1-u));return[rx(z),.18+.88*u,z]},paint);
grid(12,70,(u,v)=>{let z=(-1+2*v)*(.87-.01*u);return[rx(z)+.020,.89+.15*u,z]},trim);
grid(2,80,(u,v)=>{let z=-.85+1.70*v;return[rx(z)+.030,.988+.016*u,z]},red);
for(let side of [-1,1]){
 grid(22,4,(u,v)=>{let x=1.91+.40*u,y=.94+.09*v;return[x,y,side*sy(x,y,.014)]},trim);
 line([[1.91,.996,side*sy(1.91,.996,.023)],[2.28,.996,side*sy(2.28,.996,.025)]],red,.009);
 line([[1.89,.98],[1.88,.65],[2.00,.45],[2.10,.42]].map(([x,y])=>[x,y,side*sy(x,y,.014)]),seam,.003);
 line([[rx(.59)+.018,.38,side*.59],[rx(.78)+.018,.39,side*.78]],red,.010);
}
box(2.342,.78,0,.018,.15,.44,trim,.004);
grid(18,60,(u,v)=>{let w=u<.75?.77+.067*u:.82-(u-.75)*.64,z=(-1+2*v)*w;return[rx(z)+.022,.18+.24*u,z]},trim);
grid(8,50,(u,v)=>{let z=(-1+2*v)*(.73+.03*u);return[1.26+.23*u,1.57-.08*u-.025*Math.pow(z/.76,2),z]},trim);
// Roof fin.
poly([[.79,1.65,-.02],[1.02,1.61,-.02],[.93,1.72,0]],trim);poly([[.79,1.65,.02],[1.02,1.61,.02],[.93,1.72,0]],trim);
// Standard19-inch-style five broad aero blades, not NISMO sport wheels.
for(let x of axles)for(let side of [-1,1]){
 let z=side*.82,out=side*.953,o=mesh(new T.CylinderGeometry(wr,wr,.235,48),tire,x,wy,z);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.244,.244,.018,48),trim,x,wy,out);d.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.247,.009,8,48),chrome,x,wy,out+side*.011);
 for(let a=0;a<5;a++){let t=a*Math.PI*2/5;poly([[x+Math.sin(t)*.055,wy+Math.cos(t)*.055,out+side*.013],[x+Math.sin(t+.11)*.238,wy+Math.cos(t+.11)*.238,out+side*.013],[x+Math.sin(t+.72)*.238,wy+Math.cos(t+.72)*.238,out+side*.013],[x+Math.sin(t+.40)*.055,wy+Math.cos(t+.40)*.055,out+side*.013]],aero)}
 let h=mesh(new T.CylinderGeometry(.052,.052,.025,24),chrome,x,wy,out+side*.020);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.88)/.45)),d=.20*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
