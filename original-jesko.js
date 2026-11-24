window.ORIGINAL_JESKO_MODELS={"Koenigsegg Jesko": {"yaw": 3.141592653589793, "catalogYear": 2022, "url": "original:jesko-2022-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified winged Jesko for the2022 catalog entry, based on the2019-22 launch-era design. Wraparound glass, tall double wing, slim lamps and sculpted side intakes. Not an exact replica.", "noteAr": "جيسكو مبسط بتصميم الإطلاق2019-22 للمدخل2022: زجاج ملفوف وجناح مزدوج وفتحات جانبية. مش نسخة مطابقة."}};
window.buildOriginalJesko=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#d5d7d4',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original reference-led simplified winged Jesko. No imported geometry.
const green=mat('#8ca745',.2,.4),wheelGray=mat('#5b6266',.65,.3),tailGlow=mat('#ed2932',.15,.3),axles=[-1.35,1.35],wr=.35,wy=.35,ar=.38;
const sections=[[-2.313,.46,.62,.86],[-2.12,.54,.75,.95],[-1.75,.62,.88,.99],[-1.35,.65,.92,1.015],[-.85,.66,.76,.93],[-.25,.61,.67,.90],[.40,.63,.76,.93],[.90,.72,.90,1.015],[1.35,.80,.94,1.015],[1.80,.84,.88,.98],[2.12,.78,.77,.91],[2.313,.69,.68,.84]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.14;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.14)/(sample(x,2)-.14)));let recess=(x>-.82&&x<.84)?.17*Math.sin(Math.PI*(x+.82)/1.66)*Math.sin(Math.PI*v):0;return sample(x,3)-.09*(1-v)-recess+o}
function fx(z,y=.4){return -2.313+.20*(Math.abs(z)/1.01)**3+.08*Math.max(0,(.4-y)/.3)}
function rx(z){return 2.313-.17*(Math.abs(z)/1.015)**3}
grid(130,38,(u,v)=>{let x=-2.313+4.626*u,z=(-1+2*v)*sample(x,3);let f=Math.max(0,(Math.abs(x)-1.90)/.413),d=(x<0?.20:-.17)*(Math.abs(z)/1.015)**3*f;return[x+d,topY(x,z),z]},paint);
for(let side of [-1,1])grid(230,22,(u,v)=>{let x=-2.313+4.626*u,y=bottom(x)+(sample(x,2)-bottom(x))*v;let z=side*sy(x,y),f=Math.max(0,(Math.abs(x)-1.90)/.413),d=(x<0?.20:-.17)*(Math.abs(z)/1.015)**3*f;return[x+d,y,z]},paint);
box(0,.12,0,4.22,.05,1.65,black);
// Teardrop cabin with black wraparound screen and floating roof.
const roof=[[-.98,.69,.66],[-.69,.97,.64],[-.28,1.16,.57],[.09,1.21,.55],[.40,1.19,.55],[.68,1.09,.57],[.94,.90,.60],[1.19,.79,.61]];
function cr(x,k){return interp(roof,x,k)}function cp(x,q){return[x,cr(x,1)-.038*q*q,q*cr(x,2)]}
grid(110,32,(u,v)=>cp(-.98+2.17*u,-1+2*v),black);
grid(36,30,(u,v)=>{let q=cp(-.93+.69*u,(-1+2*v)*.98);q[1]+=.01;return q},glass);
grid(34,26,(u,v)=>{let q=cp(-.23+.85*u,(-1+2*v)*.97);q[1]+=.012;return q},paint);
grid(30,22,(u,v)=>{let q=cp(.70+.43*u,(-1+2*v)*.86);q[1]+=.01;return q},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.72+(cr(x,1)-.038-.72)*u,side*(.77+(cr(x,2)-.77)*u+o)]}
 grid(90,16,(u,v)=>sp(-.98+2.17*u,v),paint);
 grid(64,20,(u,v)=>{let a=-.92+.15*v,b=.94-.27*v;return sp(a+(b-a)*u,.06+.88*v,.012)},glass);
 grid(20,2,(u,v)=>sp(.50+.055*v,.02+.94*u,.018),black);
 line([[-.82,.72],[.91,.72]].map(([x,y])=>[x,y,side*.78]),black,.006);
 // Large sculpted side intake behind door, black recessed scallop.
 grid(50,20,(u,v)=>{let x=.33+.72*u,lo=.24+.20*u,hi=.52+.29*u,y=lo+(hi-lo)*v;return[x,y,side*sy(x,y,.014)]},black);
 line([[.33,.24],[.59,.26],[.94,.41],[1.04,.76]].map(([x,y])=>[x,y,side*sy(x,y,.024)]),paint,.027);
 line([[-.77,.67],[-.69,.30],[-.43,.23],[.22,.23],[.37,.58]].map(([x,y])=>[x,y,side*sy(x,y,.011)]),seam,.003);
 box(.22,.64,side*sy(.22,.64,.018),.15,.023,.022,black,.004);
 grid(70,4,(u,v)=>{let x=-.93+1.91*u,y=.12+.075*v;return[x,y,side*(sy(x,y,.055))]},black);
 line([[-.95,.15],[.86,.15]].map(([x,y])=>[x,y,side*sy(x,y,.067)]),green,.009);
 line([[-.77,.81,side*.70],[-.78,.93,side*.91]],black,.018);box(-.79,.97,side*.98,.19,.075,.12,black,.016);
 // Slim vertical fender headlights, multiple white elements.
 grid(38,32,(u,v)=>{let t=2*Math.PI*v,r=u,x=-1.89+.28*r*Math.cos(t),z=side*(.75+.083*r*Math.sin(t));return[x,topY(x,z)+.013,z]},black);
 let rim=[];for(let i=0;i<=60;i++){let t=i*Math.PI/30,x=-1.89+.272*Math.cos(t),z=side*(.75+.078*Math.sin(t));rim.push([x,topY(x,z)+.019,z])}line(rim,chrome,.004);
 for(let k=0;k<5;k++){let x=-2.07+k*.09;line([[x,topY(x,side*.713)+.023,side*.713],[x+.025,topY(x+.025,side*.78)+.023,side*.78]],lamp,.009)}
 // Front hood side vents and green edge of front aero.
 grid(28,6,(u,v)=>{let x=-1.67+.65*u,z=side*(.52+.052*v);return[x,topY(x,z)+.014,z]},black);
}
// Hood horseshoe pressure dam and lower intake.
let hood=[];for(let i=0;i<=48;i++){let t=Math.PI*i/48,x=-.99-.16*Math.sin(t),z=.50*Math.cos(t);hood.push([x,topY(x,z)+.020,z])}line(hood,black,.025);line(hood.map(([x,y,z])=>[x-.021,y+.001,z]),green,.010);
for(let side of [-1,1])line([[-2.05,.47,side*.34],[-1.82,.58,side*.39],[-1.42,.65,side*.43],[-1.17,.65,side*.45]],seam,.002);
grid(38,80,(u,v)=>{let y=.14+.34*u,z=(-1+2*v)*.86;return[fx(z,y),y,z]},paint);
grid(20,70,(u,v)=>{let z=(-1+2*v)*(.78-.035*u),y=.18+.24*u;return[fx(z,y)-.015,y,z]},black);
for(let side of [-1,1])poly([[fx(.66,.2)-.025,.18,side*.66],[fx(.77,.4)-.025,.41,side*.77],[fx(.83,.41)-.025,.41,side*.83],[fx(.76,.2)-.025,.18,side*.76]],paint);
line([[fx(0,.14)-.026,.14,0],[fx(0,.43)-.026,.43,0]],green,.017);
grid(10,80,(u,v)=>{let z=(-1+2*v)*1.015;return[fx(z,.13)-.13+.20*u,.10+.025*Math.sin(Math.PI*u),z]},black);
for(let side of [-1,1]){poly([[-2.12,.31,side*.92],[-1.89,.35,side*1.015],[-1.76,.37,side*1.01],[-1.91,.29,side*.94]],black);poly([[-2.00,.43,side*.94],[-1.80,.45,side*1.00],[-1.72,.47,side*.99],[-1.88,.41,side*.95]],black)}
// Rear oval opening, slim boomerang tail lamps, single broad exhaust.
grid(36,80,(u,v)=>{let y=.14+.55*u,z=(-1+2*v)*.84;return[rx(z),y,z]},paint);
grid(22,70,(u,v)=>{let z=(-1+2*v)*(.76-.05*Math.abs(2*u-1)),y=.23+.36*u;return[rx(z)+.018,y,z]},black);
let grill=[];for(let i=0;i<=80;i++){let t=i*Math.PI/40,z=.76*Math.cos(t),y=.41+.19*Math.sin(t);grill.push([rx(z)+.025,y,z])}line(grill,black,.010);
for(let side of [-1,1]){
 poly([[.40,.67],[.78,.76],[.87,.71],[.72,.63]].map(([z,y])=>[rx(z)+.060,y,side*z]),black);
 poly([[.43,.687],[.69,.672],[.835,.731],[.829,.707],[.69,.647],[.44,.667]].map(([z,y])=>[rx(z)+.062,y,side*z]),tailGlow);
 grid(28,4,(u,v)=>{let x=1.98+.25*u,y=.72+.035*v;return[x,y,side*sy(x,y,.012)]},tailGlow);
}
box(2.34,.52,0,.045,.12,.29,chrome,.018);box(2.367,.52,0,.006,.080,.24,black,.014);
grid(16,60,(u,v)=>{let z=(-1+2*v)*.75;return[rx(z)+.018,.09+.16*u,z]},black);
for(let z of [-.64,-.42,-.21,.21,.42,.64])poly([[2.05,.11,z],[2.40,.10,z],[2.31,.23,z],[2.08,.24,z]],black);
for(let side of [-1,1])line([[2.30,.13,side*.57],[2.29,.24,side*.57]],green,.015);
// Black engine deck spine and high double-profile boomerang rear wing.
grid(48,20,(u,v)=>{let x=1.12+.88*u,z=(-1+2*v)*(.27+.06*u);return[x,topY(x,z)+.016,z]},black);
for(let side of [-1,1])line([[1.13,.80,side*.27],[1.98,.82,side*.32]],green,.009);
for(let z of [-.26,.26])poly([[1.52,.83,z],[1.70,1.18,z],[1.83,1.21,z],[1.65,.83,z]],black);
for(let k=0;k<2;k++)grid(16,80,(u,v)=>{let z=(-1+2*v)*1.025;return[1.73+.34*u+.19*(1-Math.abs(z)/1.025)+k*.04,1.14+k*.10+.028*u,z]},black);
for(let side of [-1,1])poly([[1.68,1.12],[2.12,1.15],[2.12,1.30],[1.73,1.29]].map(([x,y])=>[x,y,side*1.025]),black);
// Differing front20/rear21-inch-style wheels, five split spokes.
for(let x of axles)for(let side of [-1,1]){
 let rad=x>0?.365:.35,cy=rad,out=side*(x>0?1.02:1.015),o=mesh(new T.CylinderGeometry(rad,rad,x>0?.29:.25,48),tire,x,cy,side*.88);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(rad*.76,rad*.76,.018,44),black,x,cy,out);d.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(rad*.76,.008,8,44),wheelGray,x,cy,out+side*.012);
 let disc=mesh(new T.CylinderGeometry(rad*.64,rad*.64,.009,40),black,x,cy,out+side*.006);disc.rotation.x=Math.PI/2;box(x+.16,cy,out+side*.013,.055,.19,.025,green,.005);
 for(let a=0;a<5;a++)for(let off of [-.05,.05]){let t=a*2*Math.PI/5;line([[x+Math.sin(t)*.045,cy+Math.cos(t)*.045,out+side*.021],[x+Math.sin(t+off)*rad*.75,cy+Math.cos(t+off)*rad*.75,out+side*.021]],wheelGray,.016)}
 let h=mesh(new T.CylinderGeometry(.038,.038,.025,20),chrome,x,cy,out+side*.027);h.rotation.x=Math.PI/2;
}
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
