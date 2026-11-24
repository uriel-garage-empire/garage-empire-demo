window.ORIGINAL_CERATO_MODELS={"Kia Cerato": {"yaw": 3.141592653589793, "catalogYear": 2012, "url": "original:cerato-2012-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2012 Cerato TD four-door sedan. Swept headlights, chrome tiger-nose grille, arched four-door glass and wrapped rear lamps. Not the later YD generation or an exact replica.", "noteAr": "سيراتو2012 سيدانTD مبسطة: فوانيس مسحوبة وشبكة بإطار كروم وزجاج4أبواب مقوس وفوانيس ورا ملفوفة. مش جيلYD الأحدث ولا نسخة مطابقة."}};
window.buildOriginalCerato=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#506b9a',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original reference-led simplified Kia Cerato TD sedan2012.
const wheelGray=mat('#b2b5b8',.65,.33),discGray=mat('#414549',.4,.55),tailGlow=mat('#de2634',.15,.3),axles=[-1.325,1.325],wr=.313,wy=.313,ar=.340;
const sections=[[-2.265,.73,.78,.77],[-2.07,.80,.85,.84],[-1.67,.86,.91,.879],[-1.325,.88,.93,.8875],[-.85,.89,.93,.87],[-.15,.88,.91,.86],[.58,.88,.92,.87],[1.12,.92,.97,.8875],[1.54,.96,.98,.88],[1.93,.96,.96,.85],[2.265,.88,.88,.78]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.17;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.17)/(sample(x,2)-.17)));return sample(x,3)-.055*(1-v)+.018*Math.sin(Math.PI*v)+o}
function fx(z){return -2.265+.17*(Math.abs(z)/.8875)**3}function rx(z){return 2.265-.12*(Math.abs(z)/.8875)**3}
function tip(x,z){let f=Math.max(0,(Math.abs(x)-1.87)/.395);return x+(x<0?.17:-.12)*(Math.abs(z)/.8875)**3*f}
grid(130,34,(u,v)=>{let x=-2.265+4.53*u,z=(-1+2*v)*sample(x,3);return[tip(x,z),topY(x,z),z]},paint);
for(let side of [-1,1])grid(230,18,(u,v)=>{let x=-2.265+4.53*u,y=bottom(x)+(sample(x,2)-bottom(x))*v,z=side*sy(x,y);return[tip(x,z),y,z]},paint);
box(0,.15,0,4.18,.05,1.50,black);
// Long arching four-door sedan cabin, distinct short boot.
const roof=[[-.91,.91,.68],[-.65,1.17,.65],[-.24,1.42,.60],[.10,1.46,.595],[.52,1.44,.61],[.88,1.33,.64],[1.18,1.12,.68],[1.43,.98,.71]];
function cr(x,k){return interp(roof,x,k)}function cp(x,q){return[x,cr(x,1)-.035*q*q,q*cr(x,2)]}
grid(125,30,(u,v)=>cp(-.91+2.34*u,-1+2*v),paint);
grid(38,28,(u,v)=>{let q=cp(-.84+.63*u,(-1+2*v)*.94);q[1]+=.009;return q},glass);
grid(36,26,(u,v)=>{let q=cp(.87+.49*u,(-1+2*v)*.91);q[1]+=.009;return q},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.93+(cr(x,1)-.035-.93)*u,side*(.79+(cr(x,2)-.79)*u+o)]}
 grid(110,18,(u,v)=>sp(-.91+2.34*u,v),paint);
 grid(48,18,(u,v)=>{let a=-.82+.16*v,b=.26;return sp(a+(b-a)*u,.05+.87*v,.012)},glass);
 grid(44,18,(u,v)=>{let a=.32,b=1.18-.29*v;return sp(a+(b-a)*u,.05+.87*v,.012)},glass);
 grid(4,18,(u,v)=>sp(.26+.065*u,.03+.92*v,.016),black);
 grid(5,18,(u,v)=>sp(.90+.035*u,.05+.65*v,.017),black);
 let trim=[];for(let i=0;i<=70;i++)trim.push(sp(-.78+1.94*i/70,.94,.017));line(trim,black,.008);
 line([[-.79,.94],[1.18,.94]].map(([x,y])=>[x,y,side*.805]),chrome,.005);
 for(let a of [-.75,.30,1.05])line([[a,.91],[a+.04,.46],[a+.10,.27]].map(([x,y])=>[x,y,side*sy(x,y,.009)]),seam,.0025);
 line([[-.65,.27],[1.14,.27]].map(([x,y])=>[x,y,side*sy(x,y,.009)]),seam,.0025);
 for(let x of [.10,.90])box(x,.85,side*sy(x,.85,.017),.18,.035,.027,paint,.007);
 grid(85,3,(u,v)=>{let x=-.95+2.03*u,y=.18+.055*v;return[x,y,side*sy(x,y,.013)]},paint);
 line([[-.70,.97,side*.75],[-.65,1.02,side*.86]],black,.017);box(-.65,1.055,side*.91,.21,.10,.135,paint,.018);
 // Strong shoulder crease and clean lower door hollow.
 grid(70,2,(u,v)=>{let x=-1.02+2.28*u,y=.83+.05*u+.012*v;return[x,y,side*sy(x,y,.007)]},paint);
 let hood=[];for(let i=0;i<=36;i++){let x=-2.03+1.15*i/36,z=side*(.40+.11*i/36);hood.push([x,topY(x,z)+.008,z])}line(hood,seam,.002);
}
// Swept trapezoid headlamps joined to chrome tiger-nose grille.
for(let side of [-1,1]){
 let coords=[[.37,.57],[.77,.58],[.85,.77],[.43,.75]];
 poly(coords.map(([z,y])=>[fx(z)-.012,y,side*z]),chrome);
 poly([[.40,.593],[.75,.602],[.814,.748],[.447,.727]].map(([z,y])=>[fx(z)-.021,y,side*z]),lamp);
 for(let z0 of [.52,.69]){let z=side*z0,o=mesh(new T.SphereGeometry(.055,16,10),chrome,fx(z)-.033,.665,z);o.scale.set(.18,.9,1)}
 poly([[.74,.61],[.785,.62],[.814,.741],[.769,.736]].map(([z,y])=>[fx(z)-.031,y,side*z]),amber);
 grid(20,5,(u,v)=>{let x=-2.25+.23*u,y=.61+.14*v,z=side*sy(x,y,.007);return[tip(x,z),y,z]},lamp);
}
let grille=[[-.42,.75],[-.15,.74],[0,.71],[.15,.74],[.42,.75],[.34,.53],[.12,.51],[0,.54],[-.12,.51],[-.34,.53]];
poly(grille.map(([z,y])=>[fx(z)-.018,y,z]),black);line([...grille,grille[0]].map(([z,y])=>[fx(z)-.027,y,z]),chrome,.008);
for(let z=-.30;z<=.30;z+=.05)line([[fx(z)-.027,.555,z],[fx(z)-.027,.70,z]],black,.003);
grid(30,70,(u,v)=>{let y=.17+.36*u,z=(-1+2*v)*.78;return[fx(z),y,z]},paint);
poly([[-.46,.20],[.46,.20],[.43,.37],[-.43,.37]].map(([z,y])=>[fx(z)-.018,y,z]),black);
for(let side of [-1,1]){
 poly([[.52,.21],[.75,.23],[.75,.37],[.55,.38]].map(([z,y])=>[fx(z)-.018,y,side*z]),black);
 poly([[.58,.24],[.70,.25],[.70,.34],[.59,.34]].map(([z,y])=>[fx(z)-.025,y,side*z]),lamp);
}
box(-2.29,.435,0,.012,.125,.40,chrome,.002);
grid(5,64,(u,v)=>{let z=(-1+2*v)*.76;return[fx(z)-.018,.145+.035*u,z]},black);
// Broad wrapped red rear lamps with clear inner sections, flat boot face.
grid(38,70,(u,v)=>{let y=.17+.71*u,z=(-1+2*v)*.78;return[rx(z),y,z]},paint);
for(let side of [-1,1]){
 poly([[.35,.72],[.74,.73],[.77,.88],[.40,.86]].map(([z,y])=>[rx(z)+.015,y,side*z]),tailGlow);
 poly([[.37,.76],[.63,.77],[.66,.82],[.39,.82]].map(([z,y])=>[rx(z)+.023,y,side*z]),lamp);
 grid(24,8,(u,v)=>{let x=2.03+.235*u,y=.73+.15*v,z=side*sy(x,y,.006);return[tip(x,z),y,z]},tailGlow);
 line([[rx(.56)+.022,.31,side*.56],[rx(.73)+.022,.31,side*.73]],red,.009);
}
box(2.28,.59,0,.014,.17,.46,chrome,.003);
line([[-.40,.90],[.40,.90]].map(([z,y])=>[rx(z)+.007,y,z]),seam,.002);
for(let side of [-1,1])line([[1.48,.969,side*.56],[1.99,.936,side*.56],[2.15,.88,side*.56]],seam,.002);
grid(7,64,(u,v)=>{let z=(-1+2*v)*.75;return[rx(z)+.012,.16+.08*u,z]},black);
let ex=mesh(new T.CylinderGeometry(.035,.035,.07,20,1,true),chrome,2.24,.16,.56);ex.rotation.z=Math.PI/2;
// Seven-spoke everyday alloy wheels.
for(let x of axles)for(let side of [-1,1]){
 let out=side*.884,o=mesh(new T.CylinderGeometry(wr,wr,x>0?.215:.205,48),tire,x,wy,side*.779);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.229,.229,.016,44),black,x,wy,out);d.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.229,.007,8,44),wheelGray,x,wy,out+side*.010);
 let disc=mesh(new T.CylinderGeometry(.19,.19,.009,40),discGray,x,wy,out+side*.005);disc.rotation.x=Math.PI/2;
 for(let a=0;a<7;a++){let t=a*2*Math.PI/7;line([[x+Math.sin(t)*.035,wy+Math.cos(t)*.035,out+side*.017],[x+Math.sin(t+.045)*.224,wy+Math.cos(t+.045)*.224,out+side*.017]],wheelGray,.019)}
 let h=mesh(new T.CylinderGeometry(.043,.043,.024,24),chrome,x,wy,out+side*.020);h.rotation.x=Math.PI/2;
}
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
