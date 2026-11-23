window.ORIGINAL_EV6_MODELS={"Kia EV6 GT": {"yaw": 3.141592653589793, "catalogYear": 2024, "url": "original:ev6-gt-2024-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2024 EV6 GT. Swept lamps, sloping hatch, boomerang rear light blade, angular GT wheels and neon calipers. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لكيا EV6 GT موديل2024، سقف مائل وفوانيس خلفية منحنية وجنوط GT وفرامل خضراء. مش نسخة مطابقة."}};
window.buildOriginalEV6=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#737b7e',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified2024 Kia EV6 GT, independently formed crossover body.
const axles=[-1.45,1.45],wr=.367,wy=.367,ar=.400;
const trim=mat('#161c20',.15,.48),aero=mat('#adb3b6',.65,.29),neon=mat('#b4db23',.1,.4);
const sections=[[-2.347,.87,.88,.81],[-2.13,.97,.94,.88],[-1.82,1.045,.985,.92],[-1.45,1.075,1.015,.945],[-.92,1.09,1.03,.922],[-.15,1.07,1.02,.915],[.65,1.10,1.06,.93],[1.45,1.17,1.10,.945],[1.89,1.19,1.10,.91],[2.12,1.19,1.10,.865],[2.347,1.13,1.13,.82]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}

function bot(x){let b=.18;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.18)/(sample(x,2)-.18)));return sample(x,3)-.06*(1-v)+.026*Math.sin(Math.PI*v)+o}
function topY(x,z){return sample(x,1)+(sample(x,2)-sample(x,1))*Math.pow(Math.abs(z)/sample(x,3),2)}
function fx(z){return -2.347}function rx(z){return 2.347}
grid(140,34,(u,v)=>{let x=-2.347+4.694*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1]){
 grid(230,18,(u,v)=>{let x=-2.347+4.694*u,y=bot(x)+(sample(x,2)-bot(x))*v;return[x,y,side*sy(x,y)]},paint);
 grid(100,3,(u,v)=>{let x=-1.05+2.10*u,y=.18+.10*v;return[x,y,side*sy(x,y,.013)]},trim);
 line([[-1.03,.205],[.72,.23],[1.13,.40]].map(([x,y])=>[x,y,side*sy(x,y,.021)]),aero,.009);
 for(let a of axles)grid(70,3,(u,v)=>{let t=Math.PI*u,r=ar+.021*v,x=a+Math.cos(t)*r,y=wy+Math.sin(t)*r;return[x,y,side*sy(x,y,.006)]},paint);
}
box(0,.17,0,4.10,.07,1.62,trim);
const roof=[[-1.10,1.09,.78],[-.80,1.30,.73],[-.34,1.51,.67],[.10,1.545,.665],[.69,1.51,.68],[1.17,1.40,.72],[1.63,1.16,.78],[1.84,1.12,.80]];
function cr(x,k){return interp(roof,x,k)}function cp(x,q){return[x,cr(x,1)-.030*q*q,q*cr(x,2)]}
grid(110,28,(u,v)=>cp(-1.1+2.94*u,-1+2*v),paint);
for(let[a,b]of [[-1.04,-.27],[1.18,1.73]])grid(45,24,(u,v)=>{let q=cp(a+(b-a)*u,(-1+2*v)*.94);q[1]+=.006;return q},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){let y0=1.045+.038*Math.max(0,x);return[x,y0+(cr(x,1)-.03-y0)*u,side*(.837+(cr(x,2)-.837)*u+o)]}
 grid(100,14,(u,v)=>sp(-1.10+2.94*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.98+.16*v,b=.12;return sp(a+(b-a)*u,.06+.88*v,.009)},glass);
 grid(44,12,(u,v)=>{let a=.23,b=1.70-.44*v;return sp(a+(b-a)*u,.06+.88*v,.009)},glass);
 grid(4,14,(u,v)=>sp(.12+.11*u,.04+.92*v,.015),trim);
 grid(3,14,(u,v)=>sp(1.12+.025*u,.06+.86*v,.014),trim);
 grid(80,1,(u,v)=>sp(-.96+2.38*u,.95+.021*v,.015),aero);
 for(let a of [-.88,.20,1.23])line([[a,1.01],[a+.02,.48],[a+.10,.29]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 line([[-.76,.29],[1.28,.29]].map(([x,y])=>[x,y,side*sy(x,y,.008)]),seam,.002);
 for(let x of [-.03,1.07])box(x,1.01,side*sy(x,1.01,.01),.17,.025,.013,paint,.004);
 box(-.82,1.14,side*.84,.065,.04,.13,trim);box(-.79,1.175,side*.952,.23,.10,.15,trim,.016);
}
// Low swept nose and angular EV6 GT headlamp signature.
grid(48,70,(u,v)=>{let y=.18+.70*u,z=(-1+2*v)*sy(-2.347,y);return[fx(z),y,z]},paint);
grid(10,60,(u,v)=>{let z=(-1+2*v)*(.66+.08*u);return[fx(z)-.013,.77+.10*u,z]},trim);
for(let side of [-1,1]){
 poly([[.35,.80],[.77,.91],[.80,.76],[.53,.72]].map(([z,y])=>[fx(z)-.025,y,side*z]),trim);
 line([[.36,.795],[.72,.884],[.78,.88],[.75,.765],[.52,.743],[.40,.77]].map(([z,y])=>[fx(z)-.029,y,side*z]),lamp,.009);
 for(let i=0;i<3;i++){let z=.49+.08*i;poly([[z,.773],[z+.055,.788],[z+.048,.83],[z-.005,.82]].map(([z,y])=>[fx(z)-.030,y,side*z]),lamp)}
 poly([[.51,.37],[.79,.41],[.78,.62],[.54,.59]].map(([z,y])=>[fx(z)-.025,y,side*z]),trim);
 line([[.77,.43],[.76,.60],[.54,.57]].map(([z,y])=>[fx(z)-.030,y,side*z]),aero,.008);
}
poly([[-.51,.31],[.51,.31],[.53,.53],[-.53,.53]].map(([z,y])=>[fx(z)-.020,y,z]),trim);
for(let z=-.46;z<.49;z+=.055)line([[fx(z)-.026,.33,z],[fx(z)-.026,.51,z]],black,.008);
box(-2.37,.20,0,.06,.045,1.55,trim,.005);box(-2.374,.59,0,.013,.10,.40,trim,.003);
// Distinct raised boomerang rear blade and descending bright lower garnish.
grid(60,70,(u,v)=>{let y=.18+.95*u,z=(-1+2*v)*sy(2.347,y);return[rx(z),y,z]},paint);
for(let side of [-1,1]){
 let path=[[0,1.125],[.32,1.12],[.61,1.08],[.79,.94],[.67,.78],[.44,.72]];
 for(let i=1;i<path.length;i++){let a=path[i-1],b=path[i];poly([[rx(a[0])+.012,a[1]+.025,side*a[0]],[rx(b[0])+.012,b[1]+.025,side*b[0]],[rx(b[0])+.012,b[1]-.025,side*b[0]],[rx(a[0])+.012,a[1]-.025,side*a[0]]],trim)}
 line(path.slice(0,4).map(([z,y])=>[rx(z)+.021,y,side*z]),red,.014);
 line(path.slice(3).map(([z,y])=>[rx(z)+.022,y,side*z]),aero,.014);
 grid(26,2,(u,v)=>{let x=1.83+.50*u,y=1.10-.13*u+.018*v;return[x,y,side*sy(x,y,.012)]},red);
 line([[rx(.68)+.02,.29,side*.68],[rx(.68)+.02,.48,side*.68]],red,.010);
 line([[rx(.73)+.02,.29,side*.73],[rx(.73)+.02,.48,side*.73]],red,.010);
}
grid(12,60,(u,v)=>{let z=(-1+2*v)*(.73+.03*u);return[rx(z)+.018,.18+.33*u,z]},trim);
box(2.37,.59,0,.018,.14,.42,trim,.003);
grid(16,60,(u,v)=>{let z=(-1+2*v)*(.70+.02*u);let x=1.10+.27*u;return[x,cr(x,1)+.009-.025*(z/.72)**2,z]},trim);
poly([[.87,1.46,-.012],[1.03,1.42,-.012],[.96,1.53,0]],trim);poly([[.87,1.46,.012],[1.03,1.42,.012],[.96,1.53,0]],trim);
// GT21-inch-style five angular split spokes and neon brake calipers.
for(let x of axles)for(let side of [-1,1]){
 let out=side*.952,o=mesh(new T.CylinderGeometry(wr,wr,.235,48),tire,x,wy,side*.827);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.269,.269,.015,44),trim,x,wy,out);d.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.271,.008,8,44),aero,x,wy,out+side*.01);
 box(x+.13,wy+.035,out+side*.014,.07,.22,.025,neon,.012);
 for(let a=0;a<5;a++){let t=a*Math.PI*2/5;for(let k of [-1,1]){let pts=[[.045,t],[.18,t+k*.15],[.265,t+k*.28]];line(pts.map(([r,q])=>[x+Math.sin(q)*r,wy+Math.cos(q)*r,out+side*.027]),aero,.012)}}
 let h=mesh(new T.CylinderGeometry(.046,.046,.026,24),trim,x,wy,out+side*.03);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.90)/.447)),d=.18*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
