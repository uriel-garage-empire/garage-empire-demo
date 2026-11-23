window.ORIGINAL_CAMRY_MODELS={"Toyota Camry LE": {"yaw": 3.141592653589793, "catalogYear": 2025, "url": "original:camry-le-2025-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified 2025 Toyota Camry LE. Horizontal grille, silver16inch-style wheels and plain LE bumper. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لكامري 2025، شبكة أفقية وجنوط فضية وإكصدام LE. مش نسخة مطابقة."}, "Toyota Camry XSE AWD": {"yaw": 3.141592653589793, "catalogYear": 2025, "url": "original:camry-xse-2025-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified 2025 Toyota Camry XSE AWD. Color-matched mesh, larger dark wheels, sport skirts, lip spoiler and twin exhausts. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لكامري 2025، شبكة بلون الجسم وجنوط كبيرة وعتب رياضي وسبويلر وشكمان مزدوج. مش نسخة مطابقة."}};
window.buildOriginalCamryLE=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#e1e4e5',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2025 Toyota Camry XV80 LE, reference-led sedan.
const wheelGray=mat("#62676b",.55,.40);const axles=[-1.412,1.412],wr=.316,wy=.316,ar=.350;
const sections=[[-2.4575,.77,.73,.79],[-2.25,.84,.79,.86],[-2.0,.88,.84,.90],[-1.70,.90,.86,.9195],[-1.412,.91,.87,.9195],[-1.05,.93,.89,.90],[-.70,.95,.90,.89],[0,.96,.91,.89],[.70,.97,.92,.90],[1.10,.97,.92,.9195],[1.412,.96,.91,.9195],[1.85,.93,.88,.91],[2.20,.87,.81,.87],[2.4575,.81,.78,.81]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
// The same rounded nose transform applies to panels and lamps.
function fx(z){return -2.4575}
function rx(z){return 2.4575}
grid(138,34,(u,v)=>{let x=-2.4575+4.915*u,z=(-1+2*v)*sample(x,3),a=Math.pow(1-u,10),b=Math.pow(u,10);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(240,16,(u,v)=>{let x=-2.4575+4.915*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.085*(1-v)+.024*Math.sin(Math.PI*v))]},paint);
box(0,.145,0,4.15,.06,1.55,black);
const roof=[[-1.07,.95,.75],[-.81,1.18,.70],[-.43,1.385,.64],[-.10,1.445,.63],[.40,1.44,.63],[.70,1.38,.655],[1.06,1.20,.71],[1.49,.97,.77]];
function cr(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,cr(x,1)-.033*q*q,q*cr(x,2)]}
grid(100,26,(u,v)=>cp(-1.07+2.56*u,-1+2*v),paint);
for(let[a,b]of [[-.94,-.32],[.82,1.34]])grid(40,22,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.007;return p},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.925+(cr(x,1)-.033-.925)*u,side*(.835+(cr(x,2)-.835)*u+o)]}
 grid(110,14,(u,v)=>sp(-1.07+2.56*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.90+.13*v,b=.14;return sp(a+(b-a)*u,.04+.88*v,.008)},glass);
 grid(40,12,(u,v)=>{let a=.23,b=1.30-.24*v;return sp(a+(b-a)*u,.04+.84*v,.008)},glass);
 grid(4,12,(u,v)=>sp(.14+.09*u,.03+.9*v,.011),black);
 grid(70,1,(u,v)=>sp(-.86+2.09*u,.94+.025*v,.012),chrome);
 line([[-.94,.94],[1.30,.94]].map(([x,y])=>[x,y,side*.827]),chrome,.004);
 function sz(x,y){return side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.006)}
 for(let a of [-.83,.20,1.22])line([[a,.90],[a+.03,.34],[a+.13,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 line([[-.70,.24],[1.34,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 for(let x of [.02,1.02])box(x,.87,side*.920,.18,.025,.019,paint,.006);
 line([[-1.05,.18,side*.89],[1.13,.18,side*.89]],black,.012);
 box(-.77,1.025,side*.81,.07,.045,.13,black);box(-.76,1.06,side*.91,.24,.10,.14,paint,.018);

}
// Sculpted lower sill, plain LE body without the XSE sport skirts.
for(let side of [-1,1]){
 line([[-.90,.28,side*.88],[1.10,.28,side*.91]],seam,.002);
 line([[-1.05,.79,side*.915],[.40,.80,side*.916],[1.18,.88,side*.932]],seam,.002);
}
// Hammerhead nose, separate narrow upper opening, slit lamps and broad LE lower grille.
grid(30,64,(u,v)=>{let z=(-1+2*v)*(.81-.05*(1-u)+.025*Math.sin(Math.PI*u));return[fx(z),.16+.61*u,z]},paint);
poly([[-.75,.73],[.75,.73],[.67,.67],[-.67,.67]].map(([z,y])=>[fx(z)-.014,y,z]),black);
for(let side of [-1,1]){
 poly([[.43,.75],[.85,.80],[.83,.70],[.60,.665],[.46,.68]].map(([z,y])=>[fx(z)-.020,y,side*z]),black);
 line([[.45,.746],[.73,.78],[.83,.792]].map(([z,y])=>[fx(z)-.030,y,side*z]),lamp,.008);
 line([[.69,.73],[.81,.748]].map(([z,y])=>[fx(z)-.030,y,side*z]),lamp,.009);
 poly([[.77,.24],[.81,.23],[.75,.53],[.71,.55]].map(([z,y])=>[fx(z)-.020,y,side*z]),black);
}
poly([[-.50,.62],[.50,.62],[.70,.23],[-.70,.23]].map(([z,y])=>[fx(z)-.020,y,z]),black);
for(let y of [.26,.315,.37,.425,.48,.535,.59]){let z=.70-(y-.23)*.51;line([[fx(z)-.030,y,-z],[fx(z)-.030,y,z]],black,.006)}
box(-2.48,.41,0,.014,.10,.40,black,.004);
// XV80 C-shaped rear lamps, body-color garnish and plain LE lower bumper.
grid(32,64,(u,v)=>{let z=(-1+2*v)*(.81-.05*(1-u)+.023*Math.sin(Math.PI*u));return[rx(z),.16+.65*u,z]},paint);
for(let side of [-1,1]){
 poly([[.36,.785],[.81,.81],[.81,.65],[.40,.64],[.47,.69],[.75,.70],[.75,.755],[.37,.75]].map(([z,y])=>[rx(z)+.018,y,side*z]),red);
 line([[rx(.40)+.026,.645,side*.40],[rx(.78)+.026,.67,side*.78],[rx(.79)+.026,.79,side*.79]],red,.014);
 grid(20,6,(u,v)=>{let x=2.02+.4375*u,y=.68+.12*v;return[x,y,side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.012)]},red);
 poly([[.48,.725],[.74,.75],[.74,.69],[.48,.68]].map(([z,y])=>[rx(z)+.026,y,side*z]),lamp);
 line([[rx(.61)+.022,.29,side*.61],[rx(.76)+.022,.30,side*.76]],red,.012);
}
box(2.478,.59,0,.014,.145,.44,black,.004);
poly([[-.77,.16],[.77,.16],[.77,.28],[.61,.32],[-.61,.32],[-.77,.28]].map(([z,y])=>[rx(z)+.018,y,z]),black);
// Roof fin and 16-inch LE silver ten-spoke alloys.
poly([[.59,cr(.59,1),-.016],[.80,cr(.80,1),-.016],[.73,cr(.73,1)+.065,0]],paint);poly([[.59,cr(.59,1),.016],[.80,cr(.80,1),.016],[.73,cr(.73,1)+.065,0]],paint);
for(let x of axles)for(let side of [-1,1]){
 let z=side*.80,out=side*.929,o=mesh(new T.CylinderGeometry(wr,wr,.225,44),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.214,.010,8,44),chrome,x,wy,out);let d=mesh(new T.CylinderGeometry(.203,.203,.014,36),black,x,wy,out-side*.012);d.rotation.x=Math.PI/2;
 for(let a=0;a<10;a++){let t=a*Math.PI/5;poly([[x+Math.sin(t)*.048,wy+Math.cos(t)*.048,out],[x+Math.sin(t+.06)*.213,wy+Math.cos(t+.06)*.213,out],[x+Math.sin(t+.21)*.213,wy+Math.cos(t+.21)*.213,out],[x+Math.sin(t+.15)*.050,wy+Math.cos(t+.15)*.050,out]],chrome)}
 let h=mesh(new T.CylinderGeometry(.046,.046,.024,20),chrome,x,wy,out+side*.008);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.99)/.47)),d=.20*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
window.buildOriginalCamryXSE=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#aeb3b7',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2025 Toyota Camry XV80 LE, reference-led sedan.
const wheelGray=mat("#62676b",.55,.40);const axles=[-1.412,1.412],wr=.326,wy=.326,ar=.350;
const sections=[[-2.4575,.77,.73,.79],[-2.25,.84,.79,.86],[-2.0,.88,.84,.90],[-1.70,.90,.86,.9195],[-1.412,.91,.87,.9195],[-1.05,.93,.89,.90],[-.70,.95,.90,.89],[0,.96,.91,.89],[.70,.97,.92,.90],[1.10,.97,.92,.9195],[1.412,.96,.91,.9195],[1.85,.93,.88,.91],[2.20,.87,.81,.87],[2.4575,.81,.78,.81]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
// The same rounded nose transform applies to panels and lamps.
function fx(z){return -2.4575}
function rx(z){return 2.4575}
grid(138,34,(u,v)=>{let x=-2.4575+4.915*u,z=(-1+2*v)*sample(x,3),a=Math.pow(1-u,10),b=Math.pow(u,10);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(240,16,(u,v)=>{let x=-2.4575+4.915*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.085*(1-v)+.024*Math.sin(Math.PI*v))]},paint);
box(0,.145,0,4.15,.06,1.55,black);
const roof=[[-1.07,.95,.75],[-.81,1.18,.70],[-.43,1.385,.64],[-.10,1.445,.63],[.40,1.44,.63],[.70,1.38,.655],[1.06,1.20,.71],[1.49,.97,.77]];
function cr(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,cr(x,1)-.033*q*q,q*cr(x,2)]}
grid(100,26,(u,v)=>cp(-1.07+2.56*u,-1+2*v),paint);
for(let[a,b]of [[-.94,-.32],[.82,1.34]])grid(40,22,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.007;return p},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.925+(cr(x,1)-.033-.925)*u,side*(.835+(cr(x,2)-.835)*u+o)]}
 grid(110,14,(u,v)=>sp(-1.07+2.56*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.90+.13*v,b=.14;return sp(a+(b-a)*u,.04+.88*v,.008)},glass);
 grid(40,12,(u,v)=>{let a=.23,b=1.30-.24*v;return sp(a+(b-a)*u,.04+.84*v,.008)},glass);
 grid(4,12,(u,v)=>sp(.14+.09*u,.03+.9*v,.011),black);
 grid(70,1,(u,v)=>sp(-.86+2.09*u,.94+.025*v,.012),chrome);
 line([[-.94,.94],[1.30,.94]].map(([x,y])=>[x,y,side*.827]),chrome,.004);
 function sz(x,y){return side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.006)}
 for(let a of [-.83,.20,1.22])line([[a,.90],[a+.03,.34],[a+.13,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 line([[-.70,.24],[1.34,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 for(let x of [.02,1.02])box(x,.87,side*.920,.18,.025,.019,paint,.006);
 line([[-1.05,.18,side*.89],[1.13,.18,side*.89]],black,.012);
 box(-.77,1.025,side*.81,.07,.045,.13,black);box(-.76,1.06,side*.91,.24,.10,.14,paint,.018);

}
// XSE-specific black sport rockers and body-colored front canards.
for(let side of [-1,1]){
 poly([[-1.05,.17,side*.90],[1.14,.17,side*.925],[1.08,.25,side*.932],[-.98,.25,side*.903]],black);
 line([[-1.05,.79,side*.915],[.40,.80,side*.916],[1.18,.88,side*.932]],seam,.002);
}
// Hammerhead nose, separate narrow upper opening, slit lamps and broad LE lower grille.
grid(30,64,(u,v)=>{let z=(-1+2*v)*(.81-.05*(1-u)+.025*Math.sin(Math.PI*u));return[fx(z),.16+.61*u,z]},paint);
poly([[-.75,.73],[.75,.73],[.67,.67],[-.67,.67]].map(([z,y])=>[fx(z)-.014,y,z]),black);
for(let side of [-1,1]){
 poly([[.43,.75],[.85,.80],[.83,.70],[.60,.665],[.46,.68]].map(([z,y])=>[fx(z)-.020,y,side*z]),black);
 line([[.45,.746],[.73,.78],[.83,.792]].map(([z,y])=>[fx(z)-.030,y,side*z]),lamp,.008);
 line([[.69,.73],[.81,.748]].map(([z,y])=>[fx(z)-.030,y,side*z]),lamp,.009);
 poly([[.77,.24],[.81,.23],[.75,.53],[.71,.55]].map(([z,y])=>[fx(z)-.020,y,side*z]),black);
}
poly([[-.50,.62],[.50,.62],[.70,.23],[-.70,.23]].map(([z,y])=>[fx(z)-.020,y,z]),black);
// Color-matched XSE hex mesh across the broad lower opening.
for(let y of [.27,.34,.41,.48,.55])for(let zz=-.58;zz<.58;zz+=.105){let lim=.70-(y-.23)*.51;if(Math.abs(zz)>.9*lim)continue;line([[fx(zz)-.035,y,zz],[fx(zz+.05)-.035,y+.025,zz+.05],[fx(zz+.10)-.035,y,zz+.10]],paint,.007)}
for(let side of [-1,1]){poly([[.72,.55],[.84,.52],[.86,.25],[.77,.24]].map(([z,y])=>[fx(z)-.023,y,side*z]),black);poly([[.69,.55],[.74,.55],[.82,.23],[.77,.23]].map(([z,y])=>[fx(z)-.035,y,side*z]),paint);}

box(-2.48,.41,0,.014,.10,.40,black,.004);
// XV80 C-shaped rear lamps, body-color garnish and plain LE lower bumper.
grid(32,64,(u,v)=>{let z=(-1+2*v)*(.81-.05*(1-u)+.023*Math.sin(Math.PI*u));return[rx(z),.16+.65*u,z]},paint);
for(let side of [-1,1]){
 poly([[.36,.785],[.81,.81],[.81,.65],[.40,.64],[.47,.69],[.75,.70],[.75,.755],[.37,.75]].map(([z,y])=>[rx(z)+.018,y,side*z]),red);
 line([[rx(.40)+.026,.645,side*.40],[rx(.78)+.026,.67,side*.78],[rx(.79)+.026,.79,side*.79]],red,.014);
 grid(20,6,(u,v)=>{let x=2.02+.4375*u,y=.68+.12*v;return[x,y,side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.012)]},red);
 poly([[.48,.725],[.74,.75],[.74,.69],[.48,.68]].map(([z,y])=>[rx(z)+.026,y,side*z]),lamp);
 line([[rx(.61)+.022,.29,side*.61],[rx(.76)+.022,.30,side*.76]],red,.012);
}
box(2.478,.59,0,.014,.145,.44,black,.004);
poly([[-.77,.16],[.77,.16],[.77,.28],[.61,.32],[-.61,.32],[-.77,.28]].map(([z,y])=>[rx(z)+.018,y,z]),black);
// Black XSE trunk garnish, lip spoiler and sport rear diffuser.
poly([[-.41,.785],[.41,.785],[.40,.70],[-.40,.70]].map(([z,y])=>[rx(z)+.014,y,z]),black);
box(2.27,.861,0,.25,.045,1.54,black,.015);
poly([[-.68,.18],[.68,.18],[.57,.32],[-.57,.32]].map(([z,y])=>[rx(z)+.025,y,z]),paint);
for(let z of [-.62,-.50]){let o=mesh(new T.CylinderGeometry(.045,.045,.15,22),chrome,2.425,.21,z);o.rotation.z=Math.PI/2;let q=mesh(new T.CircleGeometry(.034,22),black,2.506,.21,z);q.rotation.y=Math.PI/2;}
// XSE black roof panel follows the cabin, and larger dark nineteen-inch wheel faces.
grid(30,20,(u,v)=>{let q=cp(-.30+.91*u,(-1+2*v)*.94);q[1]+=.01;return q},black);

poly([[.59,cr(.59,1),-.016],[.80,cr(.80,1),-.016],[.73,cr(.73,1)+.065,0]],paint);poly([[.59,cr(.59,1),.016],[.80,cr(.80,1),.016],[.73,cr(.73,1)+.065,0]],paint);
for(let x of axles)for(let side of [-1,1]){
 let z=side*.80,out=side*.929,o=mesh(new T.CylinderGeometry(wr,wr,.225,44),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.247,.010,8,44),chrome,x,wy,out);let d=mesh(new T.CylinderGeometry(.237,.237,.014,36),black,x,wy,out-side*.012);d.rotation.x=Math.PI/2;
 for(let a=0;a<10;a++){let t=a*Math.PI/5;poly([[x+Math.sin(t)*.048,wy+Math.cos(t)*.048,out],[x+Math.sin(t+.06)*.245,wy+Math.cos(t+.06)*.245,out],[x+Math.sin(t+.21)*.245,wy+Math.cos(t+.21)*.245,out],[x+Math.sin(t+.15)*.050,wy+Math.cos(t+.15)*.050,out]],wheelGray)}
 let h=mesh(new T.CylinderGeometry(.046,.046,.024,20),chrome,x,wy,out+side*.008);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.99)/.47)),d=.20*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
