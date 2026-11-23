window.ORIGINAL_GT_MODELS={"Porsche 718 Cayman GT4": {"yaw": 3.141592653589793, "catalogYear": 2020, "url": "original:718-cayman-gt4-original", "original": true, "credit": "Original simplified body", "noteEn": "Original stylized Porsche 718 Cayman GT4: GT front intakes, hood-edge radiator outlet, extended splitter, side inlet blades and separated exhausts. Fixed rear wing with twin supports. Simplified, not an exact replica.", "noteAr": "مجسم أصلي مبسط بمقدمة GT وفتحة رادياتير وجنوط متعددة الأذرع وشكمانين منفصلين. جناح خلفي ثابت. مش نسخة مطابقة."}, "Porsche 718 Spyder": {"yaw": 3.141592653589793, "catalogYear": 2020, "url": "original:718-spyder-original", "original": true, "credit": "Original simplified body", "noteEn": "Original stylized Porsche 718 Spyder: GT front intakes, hood-edge radiator outlet, extended splitter, side inlet blades and separated exhausts. Open cockpit and double-bubble rear deck, no fixed wing. Simplified, not an exact replica.", "noteAr": "مجسم أصلي مبسط بمقدمة GT وفتحة رادياتير وجنوط متعددة الأذرع وشكمانين منفصلين. كابينة مكشوفة وحدبتين خلف المقاعد بدون جناح ثابت. مش نسخة مطابقة."}};
window.buildOriginal718GT4=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const dark=mat('#33383c',.45,.40);
const paint=mat('#d6af1c',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2020 Porsche 718 Cayman GT4. Reference-led geometry, no copied mesh or textures.
const axles=[-1.2375,1.2375],wr=.321,wy=.327,ar=.350;
const sections=[[-2.1895,.56,.59,.79],[-2.04,.59,.64,.82],[-1.80,.64,.74,.86],[-1.50,.70,.80,.894],[-1.2375,.73,.82,.9005],[-.91,.76,.79,.87],[-.64,.77,.75,.83],[0,.77,.74,.83],[.65,.79,.82,.87],[1.2375,.80,.84,.9005],[1.62,.79,.82,.89],[1.94,.77,.78,.86],[2.1895,.71,.72,.82]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q+.012*Math.exp(-Math.pow((x-2.10)/.14,2))}
function surface(v,ix,ma){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
let v=[],ix=[],nx=160,nz=36;for(let i=0;i<=nx;i++){let x=-2.1895+4.379*i/nx,w=sample(x,3);for(let j=0;j<=nz;j++){let z=(-1+2*j/nz)*w;v.push(x,topY(x,z),z)}}for(let i=0;i<nx;i++)for(let j=0;j<nz;j++){let a=i*(nz+1)+j;ix.push(a,a+1,a+nz+1,a+1,a+nz+2,a+nz+1)}surface(v,ix,paint);
function bottom(x){let b=.23;for(let a of axles){let dx=Math.abs(x-a);if(dx<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-dx*dx))}return b}
for(let side of [-1,1]){let v=[],ix=[],n=220,m=10;for(let i=0;i<=n;i++){let x=-2.1895+4.379*i/n,b=bottom(x),t=sample(x,2);for(let j=0;j<=m;j++){let u=j/m;v.push(x,b+(t-b)*u,side*(sample(x,3)-.025*Math.sin(Math.PI*u)-.035*(1-u)))}}for(let i=0;i<n;i++)for(let j=0;j<m;j++){let a=i*(m+1)+j;ix.push(a,a+1,a+m+1,a+1,a+m+2,a+m+1)}surface(v,ix,paint)}
box(0,.205,0,3.8,.07,1.42,black);
const roof=[[-.70,.79,.70],[-.48,1.03,.66],[-.22,1.23,.605],[.05,1.295,.60],[.39,1.28,.61],[.70,1.20,.64],[.98,1.05,.69],[1.29,.87,.74],[1.59,.79,.77]];
function rs(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,rs(x,1)-.065*q*q,rs(x,2)*q]}
function canopy(a,b,ma,qmax=1,off=0){let v=[],ix=[],n=64,m=24;for(let i=0;i<=n;i++){let x=a+(b-a)*i/n;for(let j=0;j<=m;j++){let p=cp(x,(-1+2*j/m)*qmax);p[1]+=off;v.push(...p)}}for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}surface(v,ix,ma)}
canopy(-.70,1.59,paint);canopy(-.66,-.18,glass,.91,.005);canopy(.70,1.48,glass,.91,.005);
for(let side of [-1,1]){
 function sideP(x,u,off=0){let low=.76,high=rs(x,1)-.065;return[x,low+(high-low)*u,side*(.79+(rs(x,2)-.79)*u+off)]}
 function sideSurf(a,b,ma,lo,hi,off){let v=[],ix=[],n=64,m=9;for(let i=0;i<=n;i++){let x=a+(b-a)*i/n;for(let j=0;j<=m;j++)v.push(...sideP(x,lo+(hi-lo)*j/m,off))}for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}surface(v,ix,ma)}
 sideSurf(-.70,1.59,paint,0,1,0);sideSurf(-.52,.56,glass,.08,.92,.007);
 // Small rear quarter glass tapers toward the roof buttress.
 let qv=[],qi=[];for(let i=0;i<=32;i++)for(let j=0;j<=10;j++){let u=j/10,x=.65+(.51-.30*u)*i/32;qv.push(...sideP(x,.09+.79*u,.008))}for(let i=0;i<32;i++)for(let j=0;j<10;j++){let k=i*11+j;qi.push(k,k+1,k+11,k+1,k+12,k+11)}surface(qv,qi,glass);
 function sz(x,y){return side*(sample(x,3)-.025*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.23)/(sample(x,2)-.23))))-.035*(1-Math.max(0,Math.min(1,(y-.23)/(sample(x,2)-.23))))+.006)}
 let duct=[[.53,.69],[.88,.75],[.85,.59],[.74,.38],[.59,.32],[.48,.37]];
 poly(duct.map(([x,y])=>[x,y,sz(x,y)+side*.004]),black);
 for(let y of [.43,.55,.66])line([[.57,y,sz(.57,y)+side*.009],[.81,y+.015,sz(.81,y+.015)+side*.009]],black,.006);
 line([[-.49,.75],[-.47,.36],[-.28,.28],[.36,.28],[.43,.39],[.43,.74]].map(([x,y])=>[x,y,sz(x,y)]),seam,.0025);
 box(.27,.715,sz(.27,.715),.16,.024,.012,paint,.006);
 box(-.44,.85,side*.82,.05,.04,.13,black);let mir=mesh(new T.SphereGeometry(1,20,12),paint,-.42,.89,side*.92);mir.scale.set(.115,.052,.075);
 // Thin hood shutline follows the top skin.
 line([[-1.99,.37],[-1.65,.48],[-.77,.58]].map(([x,z])=>[x,topY(x,z)+.005,side*z]),seam,.0025);
 // Slanted rounded headlamp lens, flush to the fender surface.
 function hp(t,r=1){let x=-1.78+.215*r*Math.cos(t),z=.65+.127*r*Math.sin(t)+.035*r*Math.cos(t);return[x,topY(x,z)+.007,side*z]}
 let vv=[hp(0,0)],ii=[];for(let k=0;k<=48;k++)vv.push(hp(k*Math.PI/24));for(let k=1;k<=48;k++)ii.push(0,k,k+1);surface(vv.flat(),ii,black);
 line(Array.from({length:49},(_,k)=>hp(k*Math.PI/24)),chrome,.003);
 for(let [dx,dz]of [[-.10,-.042],[-.10,.035],[.10,-.025],[.10,.052]]){let x=-1.78+dx,z=.65+dz;let o=mesh(new T.SphereGeometry(.022,12,8),lamp,x,topY(x,z)+.013,side*z);o.scale.y=.28;}
}
// Continuous nose skin with three surface-following openings, no detached bumper plates.
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}return surface(v,ix,ma)}
function fx(y){return -2.1895}
grid(24,48,(u,v)=>{let z=(-1+2*v)*(.755+.035*u),y=.22+(topY(-2.1895,z)-.22)*u;return[fx(y),y,z]},paint);
// GT-specific rounded outer intakes with vertical air curtain blades and broad center opening.
for(let side of [-1,1]){
 let pts=[[.38,.29],[.42,.26],[.71,.26],[.755,.31],[.755,.435],[.71,.49],[.40,.49],[.365,.44]];
 let vv=[[-2.216,.375,side*.565]],ii=[];for(let [z,y]of pts)vv.push([-2.216,y,side*z]);for(let i=1;i<=pts.length;i++)ii.push(0,i,i%pts.length+1);surface(vv.flat(),ii,black);
 grid(3,18,(u,v)=>[-2.224,.29+.15*u,side*(.42+.020*v+.035*u)],dark);
 line([[-2.225,.275,side*.73],[-2.225,.455,side*.73]],black,.009);
}
grid(12,40,(u,v)=>{let y=.245+.235*u,z=(-1+2*v)*(.305+.015*u);return[fx(y)-.024,y,z]},black);
box(-2.194,.49,0,.018,.080,.43,black,.006);
// Extended GT front spoiler lip.
grid(3,48,(u,v)=>{let z=(-1+2*v)*.755;return[-2.215-.065*u,.235+.023*u,z]},black);
// Slim radiator outlet near the front edge of the hood, not an RS-style bonnet vent.
grid(2,44,(u,v)=>{let x=-2.10+.065*u,z=(-1+2*v)*.39;return[x,topY(x,z)+.008,z]},black);
// Rounded tail fascia, inset angular 718 light housings connected by dark trim.
function rx(y){return 2.1895}
grid(28,50,(u,v)=>{let z=(-1+2*v)*(.785+.035*u),y=.23+(topY(2.1895,z)-.23)*u;return[rx(y),y,z]},paint);
for(let side of [-1,1]){
 let tail=[[.36,.64],[.43,.605],[.75,.59],[.79,.63],[.77,.70],[.40,.70]];
 grid(12,32,(u,v)=>{let z=side*(.37+.40*v),lo=.615-.025*v,hi=.697+.004*v;return[2.212,lo+(hi-lo)*u,z]},black);
 // Lens ribbons are flat strips on the housing, not tubular rings.
 function strip(a,b,w,ma){grid(2,20,(u,v)=>{let y=a[1]+(b[1]-a[1])*v+w*(u-.5),z=side*(a[0]+(b[0]-a[0])*v);return[rx(y)+.027,y,z]},ma)}
 strip([.40,.68],[.74,.68],.014,red);strip([.74,.68],[.76,.63],.014,red);strip([.76,.63],[.46,.625],.014,red);
 strip([.51,.65],[.69,.65],.010,lamp);
 box(2.185,.34,side*.61,.015,.027,.20,red,.005);
}
grid(2,32,(u,v)=>[2.213,.636+.040*u,(-1+2*v)*.39],black);
box(2.194,.465,0,.020,.13,.43,black,.009);
// GTS-specific dark lower rear apron framed by separated round black tailpipes.
grid(14,48,(u,v)=>{let z=(-1+2*v)*(.62+.13*u),y=.205+.165*u-.035*Math.pow(1-Math.abs(z)/.8,2);return[rx(y)+.015,y,z]},black);
for(let z of [-.48,.48]){let o=mesh(new T.CylinderGeometry(.068,.068,.13,28),dark,2.229,.265,z);o.rotation.z=Math.PI/2;let q=mesh(new T.CylinderGeometry(.050,.050,.135,28),black,2.234,.265,z);q.rotation.z=Math.PI/2;}
for(let z of [-.30,-.15,0,.15,.30])box(2.19,.215,z,.07,.040,.012,black,.003);
// S-specific nineteen-inch-style five-spoke silver wheels and visible red calipers.
for(let x of axles)for(let s of [-1,1]){
 let z=s*.766,out=s*.910,o=mesh(new T.CylinderGeometry(wr,wr,.24,44),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.265,.012,8,44),chrome,x,wy,out);
 let d=mesh(new T.CylinderGeometry(.212,.212,.013,36),black,x,wy,out-s*.041);d.rotation.x=Math.PI/2;
 box(x+.145,wy,s*.899,.060,.175,.021,red,.010);
 for(let a=0;a<10;a++){let th=a*Math.PI*2/10,sp=box(x+Math.sin(th)*.142,wy+Math.cos(th)*.142,out+s*.012,.026,.239,.021,chrome,.008);sp.rotation.z=-th;}
 let hub=mesh(new T.CylinderGeometry(.053,.053,.025,16),chrome,x,wy,out+s*.021);hub.rotation.x=Math.PI/2;
 for(let a=0;a<40;a++){let th=a*Math.PI/20,q=box(x+Math.sin(th)*.315,wy+Math.cos(th)*.315,z,.019,.009,.20,black);q.rotation.z=-th;}
}

// Side intake blades, separate from the inlet panel.
for(let s of [-1,1]){poly([[.69,.42,s*.858],[.94,.78,s*.869],[.99,.78,s*.852],[.76,.42,s*.839]],paint);}
// GT4 fixed rear wing, twin uprights and integrated tip plates. Not a swan-neck GT4 RS wing.
for(let z of [-.49,.49]){let o=box(1.74,.965,z,.075,.35,.038,black,.008);o.rotation.z=-.38;}
grid(12,48,(u,v)=>{let z=(-1+2*v)*.855,x=1.67+.34*u;return[x,1.14+.018*Math.sin(Math.PI*u)+.020*Math.pow(Math.abs(z)/.855,6),z]},paint);
grid(8,48,(u,v)=>[1.68+.32*u,1.121+.018*Math.sin(Math.PI*u),(-1+2*v)*.855],paint);
for(let z of [-.855,.855])poly([[1.68,1.14,z],[2.01,1.14,z],[2.00,1.22,z],[1.70,1.20,z]],paint);
// Gently wrap bumper corners into plan-view rounded ends across every matching surface.
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);let a=g.attributes.position;for(let i=0;i<a.count;i++){let x=a.getX(i),z=a.getZ(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.64)/.38));let d=(.21*Math.pow(Math.min(1,Math.abs(z)/.90),3)+.065*Math.pow(Math.max(0,(.64-a.getY(i))/.44),2))*f;if(x<0)a.setX(i,a.getX(i)+d);else a.setX(i,a.getX(i)-d);a.setZ(i,z*(1-.055*f*Math.pow(Math.max(0,(.62-a.getY(i))/.42),2)))}g.computeVertexNormals();o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
window.buildOriginal718Spyder=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const dark=mat('#33383c',.45,.40);
const paint=mat('#afb3b3',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2020 Porsche 718 Boxster Spyder. Reference-led geometry, no copied mesh or textures.
const axles=[-1.2375,1.2375],wr=.321,wy=.327,ar=.350;
const sections=[[-2.1895,.56,.59,.79],[-2.04,.59,.64,.82],[-1.80,.64,.74,.86],[-1.50,.70,.80,.894],[-1.2375,.73,.82,.9005],[-.91,.76,.79,.87],[-.64,.77,.75,.83],[0,.77,.74,.83],[.65,.79,.82,.87],[1.2375,.80,.84,.9005],[1.62,.79,.82,.89],[1.94,.77,.78,.86],[2.1895,.71,.72,.82]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q+.012*Math.exp(-Math.pow((x-2.10)/.14,2))}
function surface(v,ix,ma){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
let v=[],ix=[],nx=160,nz=36;for(let i=0;i<=nx;i++){let x=-2.1895+4.379*i/nx,w=sample(x,3);for(let j=0;j<=nz;j++){let z=(-1+2*j/nz)*w;v.push(x,topY(x,z),z)}}for(let i=0;i<nx;i++)for(let j=0;j<nz;j++){let xx=-2.1895+4.379*(i+.5)/nx,zz=(-1+2*(j+.5)/nz)*sample(xx,3);if(xx>-.56&&xx<.88&&Math.abs(zz)<.70)continue;let a=i*(nz+1)+j;ix.push(a,a+1,a+nz+1,a+1,a+nz+2,a+nz+1)}surface(v,ix,paint);
function bottom(x){let b=.23;for(let a of axles){let dx=Math.abs(x-a);if(dx<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-dx*dx))}return b}
for(let side of [-1,1]){let v=[],ix=[],n=220,m=10;for(let i=0;i<=n;i++){let x=-2.1895+4.379*i/n,b=bottom(x),t=sample(x,2);for(let j=0;j<=m;j++){let u=j/m;v.push(x,b+(t-b)*u,side*(sample(x,3)-.025*Math.sin(Math.PI*u)-.035*(1-u)))}}for(let i=0;i<n;i++)for(let j=0;j<m;j++){let a=i*(m+1)+j;ix.push(a,a+1,a+m+1,a+1,a+m+2,a+m+1)}surface(v,ix,paint)}
box(0,.205,0,3.8,.07,1.42,black);
// Open cockpit, separate raked windshield and low roadster rear deck.
function patch(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}return surface(v,ix,ma)}
function wind(u,v){let z=(-1+2*v)*(.72-.10*u),x=-.69+.40*u+.055*Math.pow(-1+2*v,2);return[x,.80+.43*u-.045*Math.pow(-1+2*v,2),z]}

patch(20,28,wind,glass);
for(let s of [-1,1])line(Array.from({length:21},(_,i)=>wind(i/20,s===1?1:0)),paint,.019);
line(Array.from({length:29},(_,i)=>wind(1,i/28)),black,.016);line(Array.from({length:29},(_,i)=>wind(0,i/28)),paint,.018);
// Low cabin tub and rear tonneau, no fixed coupe roof or quarter glass.
box(.25,.49,0,1.62,.035,1.37,black,.018);
box(.25,.515,0,1.57,.028,1.27,tire,.015);
patch(28,30,(u,v)=>{let x=.82+.79*u,z=(-1+2*v)*(.77+.02*u);return[x,.805+.018*Math.sin(Math.PI*u),z]},paint);
const seatmat=mat('#26282a',0,.78);
for(let s of [-1,1]){
 let z=s*.35;
 box(.20,.58,z,.54,.10,.43,seatmat,.035);
 let back=box(.52,.79,z,.11,.42,.43,seatmat,.030);back.rotation.z=.12;
 box(.52,1.015,z,.12,.14,.28,seatmat,.025);
 // Distinct twin rollover hoops behind the headrests.
 line([[.72,.85,z-.15],[.72,1.06,z-.15],[.72,1.12,z-.09],[.72,1.12,z+.09],[.72,1.06,z+.15],[.72,.85,z+.15]],black,.023);
 box(.18,.64,0,.90,.12,.13,black,.025);
}
box(-.37,.785,0,.20,.10,1.23,black,.025);
let steer=mesh(new T.TorusGeometry(.105,.013,8,28),black,-.24,.96,.34);steer.rotation.y=Math.PI/2;
for(let s of [-1,1]){
 line([[-.64,.79,s*.78],[.80,.79,s*.79],[1.03,.81,s*.78]],paint,.012);
 patch(30,8,(u,v)=>[-.55+1.43*u,.52+.25*v,s*(.685+.055*v)],black);
 box(.08,.725,s*.69,.65,.04,.05,seatmat,.010);
}
box(.79,.65,0,.05,.26,1.33,black,.015);
for(let side of [-1,1]){
 function sz(x,y){return side*(sample(x,3)-.025*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.23)/(sample(x,2)-.23))))-.035*(1-Math.max(0,Math.min(1,(y-.23)/(sample(x,2)-.23))))+.006)}
 let duct=[[.53,.69],[.88,.75],[.85,.59],[.74,.38],[.59,.32],[.48,.37]];
 poly(duct.map(([x,y])=>[x,y,sz(x,y)+side*.004]),black);
 for(let y of [.43,.55,.66])line([[.57,y,sz(.57,y)+side*.009],[.81,y+.015,sz(.81,y+.015)+side*.009]],black,.006);
 line([[-.49,.75],[-.47,.36],[-.28,.28],[.36,.28],[.43,.39],[.43,.74]].map(([x,y])=>[x,y,sz(x,y)]),seam,.0025);
 box(.27,.715,sz(.27,.715),.16,.024,.012,paint,.006);
 box(-.44,.85,side*.82,.05,.04,.13,black);let mir=mesh(new T.SphereGeometry(1,20,12),paint,-.42,.89,side*.92);mir.scale.set(.115,.052,.075);
 // Thin hood shutline follows the top skin.
 line([[-1.99,.37],[-1.65,.48],[-.77,.58]].map(([x,z])=>[x,topY(x,z)+.005,side*z]),seam,.0025);
 // Slanted rounded headlamp lens, flush to the fender surface.
 function hp(t,r=1){let x=-1.78+.215*r*Math.cos(t),z=.65+.127*r*Math.sin(t)+.035*r*Math.cos(t);return[x,topY(x,z)+.007,side*z]}
 let vv=[hp(0,0)],ii=[];for(let k=0;k<=48;k++)vv.push(hp(k*Math.PI/24));for(let k=1;k<=48;k++)ii.push(0,k,k+1);surface(vv.flat(),ii,black);
 line(Array.from({length:49},(_,k)=>hp(k*Math.PI/24)),chrome,.003);
 for(let [dx,dz]of [[-.10,-.042],[-.10,.035],[.10,-.025],[.10,.052]]){let x=-1.78+dx,z=.65+dz;let o=mesh(new T.SphereGeometry(.022,12,8),lamp,x,topY(x,z)+.013,side*z);o.scale.y=.28;}
}
// Continuous nose skin with three surface-following openings, no detached bumper plates.
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}return surface(v,ix,ma)}
function fx(y){return -2.1895}
grid(24,48,(u,v)=>{let z=(-1+2*v)*(.755+.035*u),y=.22+(topY(-2.1895,z)-.22)*u;return[fx(y),y,z]},paint);
// GT-specific rounded outer intakes with vertical air curtain blades and broad center opening.
for(let side of [-1,1]){
 let pts=[[.38,.29],[.42,.26],[.71,.26],[.755,.31],[.755,.435],[.71,.49],[.40,.49],[.365,.44]];
 let vv=[[-2.216,.375,side*.565]],ii=[];for(let [z,y]of pts)vv.push([-2.216,y,side*z]);for(let i=1;i<=pts.length;i++)ii.push(0,i,i%pts.length+1);surface(vv.flat(),ii,black);
 grid(3,18,(u,v)=>[-2.224,.29+.15*u,side*(.42+.020*v+.035*u)],dark);
 line([[-2.225,.275,side*.73],[-2.225,.455,side*.73]],black,.009);
}
grid(12,40,(u,v)=>{let y=.245+.235*u,z=(-1+2*v)*(.305+.015*u);return[fx(y)-.024,y,z]},black);
box(-2.194,.49,0,.018,.080,.43,black,.006);
// Extended GT front spoiler lip.
grid(3,48,(u,v)=>{let z=(-1+2*v)*.755;return[-2.215-.065*u,.235+.023*u,z]},black);
// Slim radiator outlet near the front edge of the hood, not an RS-style bonnet vent.
grid(2,44,(u,v)=>{let x=-2.10+.065*u,z=(-1+2*v)*.39;return[x,topY(x,z)+.008,z]},black);
// Rounded tail fascia, inset angular 718 light housings connected by dark trim.
function rx(y){return 2.1895}
grid(28,50,(u,v)=>{let z=(-1+2*v)*(.785+.035*u),y=.23+(topY(2.1895,z)-.23)*u;return[rx(y),y,z]},paint);
for(let side of [-1,1]){
 let tail=[[.36,.64],[.43,.605],[.75,.59],[.79,.63],[.77,.70],[.40,.70]];
 grid(12,32,(u,v)=>{let z=side*(.37+.40*v),lo=.615-.025*v,hi=.697+.004*v;return[2.212,lo+(hi-lo)*u,z]},black);
 // Lens ribbons are flat strips on the housing, not tubular rings.
 function strip(a,b,w,ma){grid(2,20,(u,v)=>{let y=a[1]+(b[1]-a[1])*v+w*(u-.5),z=side*(a[0]+(b[0]-a[0])*v);return[rx(y)+.027,y,z]},ma)}
 strip([.40,.68],[.74,.68],.014,red);strip([.74,.68],[.76,.63],.014,red);strip([.76,.63],[.46,.625],.014,red);
 strip([.51,.65],[.69,.65],.010,lamp);
 box(2.185,.34,side*.61,.015,.027,.20,red,.005);
}
grid(2,32,(u,v)=>[2.213,.636+.040*u,(-1+2*v)*.39],black);
box(2.194,.465,0,.020,.13,.43,black,.009);
// GTS-specific dark lower rear apron framed by separated round black tailpipes.
grid(14,48,(u,v)=>{let z=(-1+2*v)*(.62+.13*u),y=.205+.165*u-.035*Math.pow(1-Math.abs(z)/.8,2);return[rx(y)+.015,y,z]},black);
for(let z of [-.48,.48]){let o=mesh(new T.CylinderGeometry(.068,.068,.13,28),dark,2.229,.265,z);o.rotation.z=Math.PI/2;let q=mesh(new T.CylinderGeometry(.050,.050,.135,28),black,2.234,.265,z);q.rotation.z=Math.PI/2;}
for(let z of [-.30,-.15,0,.15,.30])box(2.19,.215,z,.07,.040,.012,black,.003);
// S-specific nineteen-inch-style five-spoke silver wheels and visible red calipers.
for(let x of axles)for(let s of [-1,1]){
 let z=s*.766,out=s*.910,o=mesh(new T.CylinderGeometry(wr,wr,.24,44),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.265,.012,8,44),chrome,x,wy,out);
 let d=mesh(new T.CylinderGeometry(.212,.212,.013,36),black,x,wy,out-s*.041);d.rotation.x=Math.PI/2;
 box(x+.145,wy,s*.899,.060,.175,.021,red,.010);
 for(let a=0;a<10;a++){let th=a*Math.PI*2/10,sp=box(x+Math.sin(th)*.142,wy+Math.cos(th)*.142,out+s*.012,.026,.239,.021,chrome,.008);sp.rotation.z=-th;}
 let hub=mesh(new T.CylinderGeometry(.053,.053,.025,16),chrome,x,wy,out+s*.021);hub.rotation.x=Math.PI/2;
 for(let a=0;a<40;a++){let th=a*Math.PI/20,q=box(x+Math.sin(th)*.315,wy+Math.cos(th)*.315,z,.019,.009,.20,black);q.rotation.z=-th;}
}

// Side intake blades, separate from the inlet panel.
for(let s of [-1,1]){poly([[.69,.42,s*.858],[.94,.78,s*.869],[.99,.78,s*.852],[.76,.42,s*.839]],paint);}
// Spyder double-bubble speedster rear deck, one flowing fairing behind each seat.
for(let side of [-1,1]){
 grid(48,28,(u,v)=>{let x=.64+1.16*u,z=side*.355+(-1+2*v)*(.24-.07*u),base=topY(x,z)+.008,h=.255*Math.pow(Math.sin(Math.PI*Math.min(1,u*1.2+.15)),1.15)*Math.pow(Math.cos((v-.5)*Math.PI),2);return[x,base+h,z]},paint);
}
// Spyder low rear spoiler in its stowed position, no fixed GT4 wing.
grid(2,36,(u,v)=>[1.94+.12*u,topY(2.01,(-1+2*v)*.62)+.018,(-1+2*v)*.62],paint);
// Gently wrap bumper corners into plan-view rounded ends across every matching surface.
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);let a=g.attributes.position;for(let i=0;i<a.count;i++){let x=a.getX(i),z=a.getZ(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.64)/.38));let d=(.21*Math.pow(Math.min(1,Math.abs(z)/.90),3)+.065*Math.pow(Math.max(0,(.64-a.getY(i))/.44),2))*f;if(x<0)a.setX(i,a.getX(i)+d);else a.setX(i,a.getX(i)-d);a.setZ(i,z*(1-.055*f*Math.pow(Math.max(0,(.62-a.getY(i))/.42),2)))}g.computeVertexNormals();o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
