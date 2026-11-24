window.ORIGINAL_SF90_MODELS={"Ferrari SF90 Stradale": {"yaw": 3.141592653589793, "catalogYear": 2021, "url": "original:sf90-2021-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified2021 SF90 Stradale coupe. Slit C-shaped headlights, sculpted side intakes, four rounded-square rear lamps and high twin exhausts. Not Spider, XX or an exact replica.", "noteAr": "SF90 سترادالي2021 كوبيه مبسط: فوانيس رفيعة وفتحات جانبية و4فوانيس ورا وشكمانين عاليين. مش سبايدر أوXX ولا نسخة مطابقة."}};
window.buildOriginalSF90=function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#c8232a',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#42494c');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified SF90 Stradale2021 coupe, no imported mesh.
const tailGlow=mat('#ed2932',.15,.3),wheelGray=mat('#9b9fa3',.7,.3),discGray=mat('#33383a',.4,.5),axles=[-1.325,1.325],wr=.344,wy=.344,ar=.373;
const sections=[[-2.355,.49,.65,.83],[-2.10,.63,.82,.93],[-1.70,.70,.92,.986],[-1.325,.72,.94,.986],[-.82,.70,.77,.91],[-.15,.63,.68,.88],[.47,.69,.80,.93],[.93,.80,.93,.986],[1.325,.84,.95,.986],[1.80,.82,.88,.95],[2.13,.79,.81,.90],[2.355,.75,.75,.83]];
function interp(rows,x,i){let j=1;while(j<rows.length-1&&x>rows[j][0])j++;let a=rows[j-1],b=rows[j],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),p=rows[Math.max(0,j-2)],q=rows[Math.min(rows.length-1,j+1)],m1=(b[i]-p[i])/(b[0]-p[0]),m2=(q[i]-a[i])/(q[0]-a[0]),dx=b[0]-a[0];return (2*u*u*u-3*u*u+1)*a[i]+(u*u*u-2*u*u+u)*dx*m1+(-2*u*u*u+3*u*u)*b[i]+(u*u*u-u*u)*dx*m2}
function sample(x,i){return interp(sections,x,i)}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.15;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
function sy(x,y,o=0){let v=Math.max(0,Math.min(1,(y-.15)/(sample(x,2)-.15))),recess=(x>-.7&&x<.9)?.12*Math.sin(Math.PI*(x+.7)/1.6)*Math.sin(Math.PI*v):0;return sample(x,3)-.07*(1-v)-recess+o}
function fx(z){return -2.355+.19*(Math.abs(z)/.986)**3}function rx(z){return 2.355-.15*(Math.abs(z)/.986)**3}
function tip(x,z){let f=Math.max(0,(Math.abs(x)-1.92)/.435);return x+(x<0?.19:-.15)*(Math.abs(z)/.986)**3*f}
grid(140,38,(u,v)=>{let x=-2.355+4.71*u,z=(-1+2*v)*sample(x,3);return[tip(x,z),topY(x,z),z]},paint);
for(let side of [-1,1])grid(230,20,(u,v)=>{let x=-2.355+4.71*u,y=bottom(x)+(sample(x,2)-bottom(x))*v,z=side*sy(x,y);return[tip(x,z),y,z]},paint);
box(0,.13,0,4.24,.05,1.6,black);
// Forward cabin and flying rear buttresses, closed coupe roof.
const roof=[[-1.02,.72,.65],[-.77,.96,.62],[-.40,1.15,.57],[-.08,1.186,.55],[.25,1.16,.55],[.54,1.04,.59],[.80,.86,.62],[1.04,.79,.64]];
function cr(x,k){return interp(roof,x,k)}function cp(x,q){return[x,cr(x,1)-.028*q*q,q*cr(x,2)]}
grid(110,30,(u,v)=>cp(-1.02+2.06*u,-1+2*v),paint);
grid(40,30,(u,v)=>{let q=cp(-.97+.68*u,(-1+2*v)*.95);q[1]+=.009;return q},glass);
grid(30,24,(u,v)=>{let q=cp(.40+.57*u,(-1+2*v)*.85);q[1]+=.009;return q},glass);
for(let side of [-1,1]){
 function sp(x,u,o=0){return[x,.74+(cr(x,1)-.028-.74)*u,side*(.76+(cr(x,2)-.76)*u+o)]}
 grid(95,16,(u,v)=>sp(-1.02+2.06*u,v),paint);
 grid(55,18,(u,v)=>{let a=-.94+.12*v,b=.65-.16*v;return sp(a+(b-a)*u,.05+.88*v,.012)},glass);
 grid(20,2,(u,v)=>sp(.45+.05*v,.04+.90*u,.017),black);
 line([[-.85,.74],[.63,.74]].map(([x,y])=>[x,y,side*.773]),black,.005);
 // Tall triangular intake at rear shoulder.
 grid(42,16,(u,v)=>{let x=.49+.65*u,y=.62+.19*u+(.20-.13*u)*v;return[x,y,side*sy(x,y,.014)]},black);
 line([[.48,.61],[.80,.68],[1.12,.80]].map(([x,y])=>[x,y,side*sy(x,y,.024)]),paint,.022);
 poly([[.46,.99,side*.60],[.95,.94,side*.67],[1.56,.85,side*.55],[1.40,.83,side*.48]],paint);
 line([[-.78,.71],[-.67,.30],[-.40,.23],[.36,.23],[.49,.60]].map(([x,y])=>[x,y,side*sy(x,y,.010)]),seam,.003);
 box(.20,.65,side*sy(.20,.65,.015),.15,.023,.020,paint,.004);
 grid(75,4,(u,v)=>{let x=-.91+1.87*u,y=.14+.065*v;return[x,y,side*sy(x,y,.026)]},black);
 line([[-.71,.86,side*.70],[-.73,.93,side*.88]],black,.017);box(-.74,.96,side*.95,.20,.085,.13,paint,.015);
 // Slim slit headlights and C-shaped dark brake-air channel.
 let coords=[[.45,.66],[.85,.76],[.88,.69],[.66,.63],[.52,.53],[.44,.54]];
 poly(coords.map(([z,y])=>[fx(z)-.012,y-.06,side*z]),black);
 poly([[.48,.656],[.84,.741],[.844,.711],[.52,.629]].map(([z,y])=>[fx(z)-.020,y-.06,side*z]),lamp);
 line([[.51,.63],[.47,.58],[.48,.55]].map(([z,y])=>[fx(z)-.021,y-.06,side*z]),lamp,.006);
 for(let k=0;k<4;k++){let z=side*(.57+k*.07);box(fx(z)-.024,.603+k*.016,z,.011,.017,.024,lamp)}
 // Hood crease and fender vent.
 let pts=[];for(let i=0;i<=36;i++){let x=-2.06+1.03*i/36,z=side*(.36+.075*i/36);pts.push([x,topY(x,z)+.007,z])}line(pts,seam,.002);
 grid(26,5,(u,v)=>{let x=-1.49+.48*u,z=side*(.55+.05*v);return[x,topY(x,z)+.012,z]},black);
}
// Low wide three-part front intake with raised central bridge.
grid(30,80,(u,v)=>{let y=.15+.35*u,z=(-1+2*v)*.83;return[fx(z),y,z]},paint);
grid(20,70,(u,v)=>{let y=.19+.235*u,z=(-1+2*v)*(.77-.03*u);return[fx(z)-.015,y,z]},black);
for(let side of [-1,1])poly([[.33,.19],[.43,.19],[.37,.43],[.31,.43]].map(([z,y])=>[fx(z)-.024,y,side*z]),paint);
grid(8,70,(u,v)=>{let z=(-1+2*v)*.88;return[fx(z)-.05+.11*u,.13+.018*u,z]},black);
// Engine window and horizontal cooling slats.
grid(50,26,(u,v)=>{let x=1.03+.91*u,z=(-1+2*v)*(.38+.045*Math.sin(Math.PI*u));return[x,topY(x,z)+.016,z]},black);
grid(40,20,(u,v)=>{let x=1.10+.66*u,z=(-1+2*v)*.31;return[x,topY(x,z)+.026,z]},glass);
for(let side of [-1,1])for(let k=0;k<5;k++){let x=1.08+k*.14;grid(3,12,(u,v)=>{let xx=x+.030*u,z=side*(.45+.14*v);return[xx,topY(xx,z)+.012,z]},black)}
// Low shut-off Gurney rear lip, notXXfixedwing.
grid(9,66,(u,v)=>{let z=(-1+2*v)*.80;return[2.02+.18*u,topY(2.02+.18*u,z)+.035,z]},paint);
// Four rounded-square rear lamps and high twin exhaust outlets.
grid(40,80,(u,v)=>{let y=.15+.60*u,z=(-1+2*v)*.83;return[rx(z),y,z]},paint);
for(let side of [-1,1])for(let z0 of [.49,.72]){
 let coords=[];for(let i=0;i<=48;i++){let t=2*Math.PI*i/48,z=side*(z0+.086*Math.sign(Math.cos(t))*Math.sqrt(Math.abs(Math.cos(t)))),y=.699+.057*Math.sign(Math.sin(t))*Math.sqrt(Math.abs(Math.sin(t)));coords.push([rx(z)+.012,y,z])}line(coords,black,.012);line(coords.map(([x,y,z])=>[x+.006,y,z]),tailGlow,.006);
}
for(let side of [-1,1]){
 let z=side*.27,x=rx(z)+.023,o=mesh(new T.CylinderGeometry(.073,.073,.028,32,1,true),chrome,x,.515,z);o.rotation.z=Math.PI/2;let d=mesh(new T.CylinderGeometry(.060,.060,.009,28),black,x+.018,.515,z);d.rotation.z=Math.PI/2;
 poly([[.37,.19],[.76,.19],[.78,.38],[.42,.41]].map(([z,y])=>[rx(z)+.018,y,side*z]),black);
 for(let y of [.23,.28,.33])line([[rx(.46)+.024,y,side*.46],[rx(.72)+.024,y,side*.72]],black,.006);
}
box(2.38,.35,0,.013,.12,.34,black,.004);
grid(14,64,(u,v)=>{let z=(-1+2*v)*.73;return[rx(z)+.022,.09+.15*u,z]},black);
for(let z of [-.58,-.37,-.17,.17,.37,.58])poly([[2.12,.12,z],[2.41,.10,z],[2.32,.24,z],[2.14,.25,z]],black);
// Five split-spoke20-inch-style wheels.
for(let x of axles)for(let side of [-1,1]){
 let out=side*.989,o=mesh(new T.CylinderGeometry(wr,wr,x>0?.29:.245,48),tire,x,wy,side*.855);o.rotation.x=Math.PI/2;
 let d=mesh(new T.CylinderGeometry(.260,.260,.018,44),black,x,wy,out);d.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.258,.007,8,44),wheelGray,x,wy,out+side*.012);
 let disc=mesh(new T.CylinderGeometry(.218,.218,.009,40),discGray,x,wy,out+side*.006);disc.rotation.x=Math.PI/2;box(x+.15,wy,out+side*.013,.055,.19,.025,red,.005);
 for(let a=0;a<5;a++)for(let off of [-.065,.065]){let t=a*2*Math.PI/5;line([[x+Math.sin(t)*.040,wy+Math.cos(t)*.040,out+side*.021],[x+Math.sin(t+off)*.255,wy+Math.cos(t+off)*.255,out+side*.021]],wheelGray,.014)}
 let h=mesh(new T.CylinderGeometry(.038,.038,.025,20),chrome,x,wy,out+side*.027);h.rotation.x=Math.PI/2;
}
const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};
const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;};
