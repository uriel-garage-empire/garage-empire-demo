window.ORIGINAL_S3_MODELS={"Audi S3": {"yaw": 3.141592653589793, "catalogYear": 2025, "url": "original:s3-sedan-2025-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2025 S3 sedan. Facelift singleframe L grille, segmented lights, silver mirror caps, paired spokes and four round exhausts. Not an exact replica.", "noteAr": "مجسم أصلي مبسط لأودي S3 سيدان2025، شبكة الفيس ليفت وفوانيس مقسمة ومرايات فضية وجنوط مزدوجة وأربع مخارج شكمان. مش نسخة مطابقة."}};
window.buildOriginalS3=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#bf3435',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2025 Audi S3 sedan, reference-led sedan.
const wheelGray=mat("#62676b",.55,.40);const axles=[-1.316,1.316],wr=.319,wy=.319,ar=.354;
const sections=[[-2.253,.78,.77,.80],[-2.08,.85,.82,.86],[-1.82,.89,.85,.90],[-1.316,.91,.87,.908],[-.94,.93,.88,.89],[-.40,.93,.88,.88],[.35,.94,.89,.89],[.90,.96,.91,.90],[1.316,.95,.90,.908],[1.72,.93,.87,.88],[2.05,.86,.81,.86],[2.253,.81,.80,.81]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
// The same rounded nose transform applies to panels and lamps.
function fx(z){return -2.253}
function rx(z){return 2.253}
grid(138,34,(u,v)=>{let x=-2.253+4.506*u,z=(-1+2*v)*sample(x,3),a=Math.pow(1-u,10),b=Math.pow(u,10);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(240,16,(u,v)=>{let x=-2.253+4.506*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.085*(1-v)+.024*Math.sin(Math.PI*v))]},paint);
box(0,.145,0,4.15,.06,1.55,black);
const roof=[[-.96,.94,.73],[-.73,1.16,.69],[-.39,1.36,.63],[-.10,1.415,.625],[.42,1.41,.63],[.67,1.35,.65],[.98,1.13,.71],[1.30,.96,.75]];
function cr(x,k){return interp(roof,x,k)}
function cp(x,q){return[x,cr(x,1)-.033*q*q,q*cr(x,2)]}
grid(100,26,(u,v)=>cp(-.96+2.26*u,-1+2*v),paint);
for(let[a,b]of [[-.87,-.29],[.77,1.19]])grid(40,22,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.007;return p},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.925+(cr(x,1)-.033-.925)*u,side*(.835+(cr(x,2)-.835)*u+o)]}
 grid(110,14,(u,v)=>sp(-.96+2.26*u,v),paint);
 grid(44,12,(u,v)=>{let a=-.81+.12*v,b=.15;return sp(a+(b-a)*u,.04+.88*v,.008)},glass);
 grid(40,12,(u,v)=>{let a=.24,b=1.16-.22*v;return sp(a+(b-a)*u,.04+.84*v,.008)},glass);
 grid(4,12,(u,v)=>sp(.14+.09*u,.03+.9*v,.011),black);
 grid(70,1,(u,v)=>sp(-.81+1.94*u,.94+.025*v,.012),chrome);
 line([[-.83,.94],[1.16,.94]].map(([x,y])=>[x,y,side*.827]),chrome,.004);
 function sz(x,y){return side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.006)}
 for(let a of [-.77,.20,1.09])line([[a,.90],[a+.03,.34],[a+.13,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 line([[-.65,.24],[1.17,.24]].map(([x,y])=>[x,y,sz(x,y)]),seam,.002);
 for(let x of [.02,.98])box(x,.87,side*.910,.18,.025,.019,paint,.006);
 line([[-1.05,.18,side*.89],[1.13,.18,side*.89]],black,.012);
 box(-.70,1.025,side*.81,.07,.045,.13,black);box(-.69,1.06,side*.91,.24,.10,.14,chrome,.018);

}
// S3 distinct low sport sills, frameless hexagonal grille and L elements.
for(let side of [-1,1]){box(.06,.205,side*.873,2.05,.065,.055,paint,.009);line([[-1.03,.76,side*.905],[.20,.77,side*.902],[1.11,.85,side*.916]],seam,.002)}
grid(36,72,(u,v)=>{let z=(-1+2*v)*(.81-.055*(1-u));return[fx(z),.16+.62*u,z]},paint);
// Flat-wide singleframe with chopped corners, separate angular side intakes.
grid(44,60,(u,v)=>{let w=u<.18?.42+.66*u:u>.82?.55-(u-.82)*.56:.55;return[fx((-1+2*v)*w)-.018,.24+.46*u,(-1+2*v)*w]},black);
for(let y=.28;y<.70;y+=.070)for(let z=-.46;z<.50;z+=.115){line([[fx(z)-.037,y,z],[fx(z+.05)-.031,y,z+.05],[fx(z+.05)-.031,y+.028,z+.05]],chrome,.003)}
for(let side of [-1,1]){
 poly([[.60,.60],[.85,.65],[.83,.28],[.60,.28]].map(([z,y])=>[fx(z)-.022,y,side*z]),black);
 line([[.61,.32],[.78,.32],[.81,.56]].map(([z,y])=>[fx(z)-.034,y,side*z]),chrome,.006);
 poly([[.48,.80],[.88,.82],[.82,.68],[.61,.66],[.48,.71]].map(([z,y])=>[fx(z)-.022,y,side*z]),black);
 line([[.51,.79],[.72,.80],[.85,.805]].map(([z,y])=>[fx(z)-.033,y,side*z]),lamp,.008);
 for(let i=0;i<5;i++){let z=.57+.047*i;line([[fx(z)-.033,.774,side*z],[fx(z+.018)-.033,.756,side*(z+.018)]],lamp,.006)}
 line([[fx(.50)-.026,.18,side*.50],[fx(.85)-.026,.18,side*.85]],black,.014);
 line([[fx(.57)-.025,.19,side*.57],[fx(.57)-.025,.28,side*.57]],black,.009);
}
box(-2.278,.41,0,.014,.10,.38,black,.003);
for(let z of [-.06,-.02,.02,.06]){let o=mesh(new T.TorusGeometry(.025,.003,6,20),chrome,-2.280,.635,z);o.rotation.y=Math.PI/2}
// Separate rear lamps with segmented bars, S-specific black apron and four round outlets.
grid(40,72,(u,v)=>{let z=(-1+2*v)*(.81-.06*(1-u));return[rx(z),.16+.64*u,z]},paint);
for(let side of [-1,1]){
 poly([[.30,.79],[.83,.81],[.81,.65],[.45,.66],[.32,.70]].map(([z,y])=>[rx(z)+.020,y,side*z]),black);
 line([[.33,.775],[.79,.79]].map(([z,y])=>[rx(z)+.030,y,side*z]),red,.012);
 for(let i=0;i<5;i++){let z=.42+.065*i;line([[rx(z)+.031,.69,side*z],[rx(z+.024)+.031,.75,side*(z+.024)]],red,.010)}
 grid(24,7,(u,v)=>{let x=1.93+.323*u,y=.68+.12*v;return[x,y,side*(sample(x,3)-.085*(1-Math.max(0,Math.min(1,(y-.16)/.70)))+.024*Math.sin(Math.PI*Math.max(0,Math.min(1,(y-.16)/.70)))+.012)]},black);
 line([[rx(.76)+.028,.35,side*.76],[rx(.76)+.028,.49,side*.76]],red,.011);
 for(let z of [.58,.71]){let o=mesh(new T.CylinderGeometry(.038,.038,.11,24),chrome,rx(z)+.026,.215,side*z);o.rotation.z=Math.PI/2;let d=mesh(new T.CylinderGeometry(.030,.030,.114,24),black,rx(z)+.033,.215,side*z);d.rotation.z=Math.PI/2;}
}
box(2.274,.57,0,.014,.14,.40,black,.003);
poly([[-.81,.15],[.81,.15],[.80,.33],[.65,.39],[-.65,.39],[-.80,.33]].map(([z,y])=>[rx(z)+.020,y,z]),black);
for(let z of [-.39,-.20,0,.20,.39])box(2.267,.205,z,.07,.10,.014,black);
grid(5,50,(u,v)=>{let z=(-1+2*v)*.76;return[rx(z)-.06+.06*u,.811+.010*Math.sin(Math.PI*u),z]},paint);
//18-inch-style five paired spokes; silver mirror caps and small roof fin.
poly([[.60,1.36,-.016],[.78,1.27,-.016],[.71,1.43,0]],paint);poly([[.60,1.36,.016],[.78,1.27,.016],[.71,1.43,0]],paint);
for(let x of axles)for(let side of [-1,1]){
 let z=side*.795,out=side*.919,o=mesh(new T.CylinderGeometry(wr,wr,.225,44),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.226,.009,8,44),chrome,x,wy,out);let d=mesh(new T.CylinderGeometry(.216,.216,.014,36),black,x,wy,out-side*.012);d.rotation.x=Math.PI/2;
 for(let a=0;a<5;a++)for(let k of [-1,1]){let t=a*Math.PI*2/5+k*.10;poly([[x+Math.sin(t-.04)*.045,wy+Math.cos(t-.04)*.045,out],[x+Math.sin(t-.055)*.223,wy+Math.cos(t-.055)*.223,out],[x+Math.sin(t+.055)*.223,wy+Math.cos(t+.055)*.223,out],[x+Math.sin(t+.04)*.045,wy+Math.cos(t+.04)*.045,out]],chrome)}
 let h=mesh(new T.CylinderGeometry(.044,.044,.024,20),chrome,x,wy,out+side*.008);h.rotation.x=Math.PI/2;
}
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);if(g.index)g=g.toNonIndexed();let old=g.attributes.position,pts=[];function sub(a,b,c,d){let ab=Math.hypot(a[0]-b[0],a[2]-b[2]),bc=Math.hypot(b[0]-c[0],b[2]-c[2]),ca=Math.hypot(c[0]-a[0],c[2]-a[2]);if(d<4&&Math.max(ab,bc,ca)>.13){let m=(a,b)=>a.map((x,i)=>(x+b[i])/2),p=m(a,b),q=m(b,c),r=m(c,a);sub(a,p,r,d+1);sub(p,b,q,d+1);sub(r,q,c,d+1);sub(p,q,r,d+1)}else pts.push(...a,...b,...c)}for(let k=0;k<old.count;k+=3)sub([old.getX(k),old.getY(k),old.getZ(k)],[old.getX(k+1),old.getY(k+1),old.getZ(k+1)],[old.getX(k+2),old.getY(k+2),old.getZ(k+2)],0);g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pts,3));let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),y=p.getY(i);let f=Math.min(1,Math.max(0,(Math.abs(x)-1.80)/.46)),d=.20*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();let ns=g.attributes.normal,avg=new Map(),keys=[];for(let k=0;k<p.count;k++){let key=[p.getX(k),p.getY(k),p.getZ(k)].map(v=>Math.round(v*10000)).join(',');keys.push(key);if(!avg.has(key))avg.set(key,[0,0,0]);let a=avg.get(key);a[0]+=ns.getX(k);a[1]+=ns.getY(k);a[2]+=ns.getZ(k)}for(let k=0;k<p.count;k++){let a=avg.get(keys[k]),l=Math.hypot(...a)||1;ns.setXYZ(k,a[0]/l,a[1]/l,a[2]/l)}o.geometry=g});
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
