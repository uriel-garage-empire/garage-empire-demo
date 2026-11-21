/* Original procedural showroom. Stylized body families, not licensed model-exact assets. */
function init3d(){
 const el=document.getElementById('stage'),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(36,1,.1,80);
 const rd=new THREE.WebGLRenderer({antialias:true,alpha:true});rd.setPixelRatio(Math.min(devicePixelRatio,1.7));rd.outputEncoding=THREE.sRGBEncoding;rd.toneMapping=THREE.ACESFilmicToneMapping;rd.toneMappingExposure=1.2;rd.shadowMap.enabled=true;rd.shadowMap.type=THREE.PCFSoftShadowMap;el.prepend(rd.domElement);
 sc.add(new THREE.HemisphereLight(0xb7d8ff,0x272036,.9));
 const light=(color,intensity,x,y,z)=>{const d=new THREE.DirectionalLight(color,intensity);d.position.set(x,y,z);sc.add(d);return d};
 const key=light(0xfff4df,1.5,3,7,4);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-5;key.shadow.camera.right=5;key.shadow.camera.top=5;key.shadow.camera.bottom=-5;key.shadow.normalBias=.03;
 light(0x58bdff,1.4,-4,3,-3);light(0xff7092,.7,0,2,5);
 const floor=new THREE.Mesh(new THREE.CylinderGeometry(3.6,3.8,.18,80),new THREE.MeshStandardMaterial({color:0x040609,metalness:.08,roughness:.85}));floor.position.y=-.11;floor.receiveShadow=true;sc.add(floor);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(3.58,.018,8,100),new THREE.MeshBasicMaterial({color:0x27d7ed}));ring.rotation.x=Math.PI/2;ring.position.y=.006;sc.add(ring);
 const grid=new THREE.GridHelper(18,36,0x253848,0x101a2a);grid.position.y=-.21;sc.add(grid);
 const g=new THREE.Group();sc.add(g);
 const body=new THREE.MeshPhysicalMaterial({color:0xf0f2f6,metalness:.4,roughness:.28,clearcoat:1,clearcoatRoughness:.15});
 const dark=new THREE.MeshStandardMaterial({color:0x10151c,roughness:.78}),glass=new THREE.MeshPhysicalMaterial({color:0x173040,metalness:.5,roughness:.12,clearcoat:1,side:THREE.DoubleSide});
 const chrome=new THREE.MeshStandardMaterial({color:0xbac4d2,metalness:.82,roughness:.28}),red=new THREE.MeshStandardMaterial({color:0xc72235,roughness:.4});
 const head=new THREE.MeshStandardMaterial({color:0xe7fbff,emissive:0xbce8ff,emissiveIntensity:1.7}),tail=new THREE.MeshStandardMaterial({color:0xff153c,emissive:0xef0532,emissiveIntensity:1.3});
 let oldCid=-1,oldSp=-1,yaw=.65,pitch=.30,distance=8.9,auto=!matchMedia('(prefers-reduced-motion:reduce)').matches,drag=false,px=0,py=0,phase=0;
 const add=(geo,mat,x,y,z,parent=g)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m};
 const box=(x,y,z,w,h,d,mat,parent=g)=>add(new THREE.BoxGeometry(w,h,d),mat,x,y,z,parent);
 const panel=(points,mat)=>{const geo=new THREE.BufferGeometry();const vertices=[];for(let i=1;i<points.length-1;i++)vertices.push(...points[0],...points[i],...points[i+1]);geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.computeVertexNormals();return add(geo,mat,0,0,0)};
 function loft(sections,mat){const v=[],idx=[];sections.forEach(([x,b,t,w])=>{const bevel=Math.min(.08,(t-b)/3);v.push(x,b,-w*.83,x,b,w*.83,x,b+bevel,w,x,t-bevel,w,x,t,w*.85,x,t,-w*.85,x,t-bevel,-w,x,b+bevel,-w)});for(let i=0;i<sections.length-1;i++)for(let j=0;j<8;j++){let a=i*8+j,b=i*8+(j+1)%8,c=(i+1)*8+(j+1)%8,d=(i+1)*8+j;idx.push(a,c,b,a,d,c)}for(let j=1;j<7;j++)idx.push(0,j,j+1);let k=(sections.length-1)*8;for(let j=1;j<7;j++)idx.push(k,k+j+1,k+j);let geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(v,3));geo.setIndex(idx);geo.computeVertexNormals();return add(geo,mat,0,0,0)}
 const profiles={
 sedan:{l:4.65,w:.93,h:1.44,front:1.45,rear:-1.4,roofF:.48,roofR:-.85,hood:1.04,deck:.98},
 coupe:{l:4.45,w:.94,h:1.29,front:1.4,rear:-1.35,roofF:.38,roofR:-.72,hood:.96,deck:.9},
 sports:{l:4.32,w:.98,h:1.17,front:1.34,rear:-1.31,roofF:.4,roofR:-.65,hood:.85,deck:.91},
 roadster:{l:4.05,w:.89,h:1.12,front:1.28,rear:-1.22,roofF:.3,roofR:-.68,hood:.85,deck:.85,open:true},
 targa:{l:4.05,w:.9,h:1.17,front:1.28,rear:-1.22,roofF:.3,roofR:-.7,hood:.85,deck:.85,targa:true},
 hatch:{l:4.18,w:.93,h:1.48,front:1.28,rear:-1.25,roofF:.52,roofR:-1.24,hood:1.02,deck:1.05},
 ev:{l:4.6,w:1,h:1.55,front:1.47,rear:-1.4,roofF:.65,roofR:-1.3,hood:1.1,deck:1.14},
 suv:{l:4.6,w:1,h:1.76,front:1.43,rear:-1.39,roofF:.63,roofR:-1.32,hood:1.22,deck:1.21},
 muscle:{l:4.82,w:1,h:1.32,front:1.45,rear:-1.44,roofF:.2,roofR:-.92,hood:1.02,deck:.97},
 super:{l:4.6,w:1.05,h:1.12,front:1.43,rear:-1.42,roofF:.76,roofR:-.5,hood:.77,deck:.87},
 hyper:{l:4.72,w:1.08,h:1.08,front:1.49,rear:-1.47,roofF:.65,roofR:-.6,hood:.75,deck:.83},
 gtr:{l:4.68,w:1,h:1.37,front:1.43,rear:-1.4,roofF:.43,roofR:-.85,hood:1.03,deck:1.01}
 };
 function build(cid,spoiler){
  const geometries=new Set();g.traverse(o=>{if(o.geometry)geometries.add(o.geometry)});while(g.children.length)g.remove(g.children[0]);geometries.forEach(x=>x.dispose());
  const name=CARS[cid][0],f=shapeOf(cid),p={...(profiles[f]||profiles.coupe)},seed=Array.from(name).reduce((a,c)=>a+c.charCodeAt(0),0);
  // Small original proportion variations within each family. Never claim exact dimensions.
  p.l+=(seed%7-3)*.025;p.w+=(seed%5-2)*.007;
  const half=p.l/2,r=f==='suv'?.43:.36,wy=r+.025;
  const outline=new THREE.Shape();const edge=.34,archR=r+.055;
  outline.moveTo(-half,edge);outline.lineTo(-half,p.deck*.85);outline.quadraticCurveTo(-half+.12,p.deck, -half+.35,p.deck);outline.lineTo(p.rear,p.deck);outline.quadraticCurveTo(0,(p.deck+p.hood)/2+.025,p.front,p.hood);outline.quadraticCurveTo(half-.13,p.hood*.96,half,p.hood*.76);outline.lineTo(half,edge);
  [p.front,p.rear].forEach(x=>{outline.lineTo(x+archR,edge);outline.lineTo(x+archR,wy);outline.absarc(x,wy,archR,0,Math.PI,false);outline.lineTo(x-archR,edge)});outline.closePath();
  const shell=new THREE.ExtrudeGeometry(outline,{depth:p.w*2-.12,bevelEnabled:true,bevelThickness:.06,bevelSize:.055,bevelSegments:3,curveSegments:20,steps:1});const shellMesh=add(shell,body,0,0,-p.w+.06);
  // Floor pan is narrow so it does not close the visible wheel arches.
  box(0,.32,0,p.l-.5,.09,p.w*1.35,dark);
  const roofW=p.w*.75,baseW=p.w*.89,rf=p.roofF,rr=p.roofR,frontBase=rf+.57,rearBase=rr-.52;
  if(!p.open){
   loft([[rearBase,p.deck-.02,p.deck,baseW],[rr,p.deck,p.h,roofW],[rf,p.hood,p.h,roofW],[frontBase,p.hood-.02,p.hood,baseW]],body);
   // Glazing follows the roof slopes rather than floating rectangular boxes.
   panel([[rf+.025,p.h+.012,-roofW*.92],[rf+.025,p.h+.012,roofW*.92],[frontBase-.06,p.hood+.025,baseW*.91],[frontBase-.06,p.hood+.025,-baseW*.91]],glass);
   panel([[rearBase+.05,p.deck+.028,-baseW*.9],[rearBase+.05,p.deck+.028,baseW*.9],[rr-.015,p.h+.013,roofW*.91],[rr-.015,p.h+.013,-roofW*.91]],glass);
   [-1,1].forEach(s=>{
    panel([[rearBase+.12,p.deck+.045,s*(baseW+.012)],[rr+.05,p.h-.055,s*(roofW+.015)],[rf-.05,p.h-.055,s*(roofW+.015)],[frontBase-.1,p.hood+.05,s*(baseW+.012)]],glass);
    if(['sedan','hatch','suv','ev'].includes(f))box((rf+rr)/2,p.h-.2,s*(roofW+.03),.065,.38,.045,dark);
   });
   if(p.targa)box(-.52,p.h+.025,0,.19,.045,p.w*1.53,dark);
  }else{
   box(-.23,.88,0,1.15,.14,1.3,dark);[-.35,.35].forEach(z=>{const seat=box(-.5,.99,z,.21,.38,.32,dark);seat.rotation.z=.15});
   panel([[rf,p.h,-roofW],[rf,p.h,roofW],[frontBase-.04,p.hood+.02,baseW],[frontBase-.04,p.hood+.02,-baseW]],glass);
   box(rf,p.h,0,.06,.05,roofW*2,chrome);
  }
  // Sills, door handles, mirrors, seams and splitters.
  [-1,1].forEach(s=>{
   box(0,.4,s*(p.w+.015),p.l*.56,.12,.07,dark);
   box(-.43,p.hood+.015,s*(p.w*.98),.17,.035,.025,chrome);
   box(frontBase-.08,p.hood+.13,s*(p.w+.11),.22,.11,.23,body);
   const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-.9,.49,s*(p.w+.013)),new THREE.Vector3(-.9,p.deck-.03,s*(p.w*.95))]),new THREE.LineBasicMaterial({color:0x202935}));g.add(line);
  });
  // Four tires, rim barrels, brake rotors, red calipers and ten-spoke alloys.
  [p.front,p.rear].forEach(x=>[-1,1].forEach(s=>{
   let z=s*(p.w+.075),t=add(new THREE.CylinderGeometry(r,r,.28,40),dark,x,wy,z);t.rotation.x=Math.PI/2;
   let zface=z+s*.15,disc=add(new THREE.CylinderGeometry(r*.68,r*.68,.025,32),chrome,x,wy,zface);disc.rotation.x=Math.PI/2;
   let rim=add(new THREE.TorusGeometry(r*.75,.026,8,40),chrome,x,wy,zface+s*.025);
   let tireRim=add(new THREE.TorusGeometry(r*.94,.016,6,40),dark,x,wy,zface);
   box(x-.16,wy+.01,zface+s*.012,.08,.21,.05,red);
   for(let j=0;j<10;j++){let angle=j*Math.PI/5;let spoke=box(x+Math.sin(angle)*r*.4,wy+Math.cos(angle)*r*.4,zface+s*.04,.035,r*.7,.035,chrome);spoke.rotation.z=-angle}
   const hub=add(new THREE.CylinderGeometry(.065,.065,.05,16),dark,x,wy,zface+s*.07);hub.rotation.x=Math.PI/2;
   // Shallow body-colored wheel brows give the silhouette a fender line.
   let arch=add(new THREE.TorusGeometry(r+.065,.037,8,32,Math.PI),body,x,wy,z);arch.rotation.z=0;
  }));
  // Fascias. Front is +X. The preview stays original rather than using badges/logos.
  box(half+.07,.57,0,.035,.16,p.w*1.19,dark);
  box(half+.035,.38,0,.22,.07,p.w*1.73,dark);
  [-1,1].forEach(s=>{
   const z=s*p.w*.62;
   if(/Porsche|MX-5 NA|NSX/.test(name)){
    let lamp=add(new THREE.SphereGeometry(.115,20,12),head,half+.075,p.hood*.86,z);lamp.scale.set(.25,.74,1.3);
   }else if(f==='ev'){
    for(let j=0;j<4;j++)box(half+.075,.89,z+(j-1.5)*.085,.04,.06,.06,head);
   }else box(half+.075,p.hood*.83,z,.045,.07,p.w*.49,head);
   if(/Skyline|GT-R|Ferrari/.test(name)){
    for(let j=0;j<2;j++){const lamp=add(new THREE.CylinderGeometry(.085,.085,.025,20),tail,-half-.075,p.deck*.8,z+(j-.5)*.22);lamp.rotation.z=Math.PI/2}
   }else box(-half-.075,p.deck*.8,z,.035,.065,p.w*.48,tail);
   const pipe=add(new THREE.CylinderGeometry(.06,.06,.16,16),chrome,-half-.04,.4,s*.62);pipe.rotation.z=Math.PI/2;
  });
  if(name.startsWith('BMW'))[-.16,.16].forEach(z=>box(half+.095,.68,z,.025,.23,.22,dark));
  if(f==='muscle')for(let j=0;j<7;j++)box(half+.095,.59,(j-3)*.16,.025,.09,.025,chrome);
  if(['super','hyper'].includes(f))[-1,1].forEach(s=>box(-.6,.66,s*(p.w+.01),.6,.2,.02,dark));
  const sp=new THREE.Group();g.add(sp);[-.65,.65].forEach(z=>box(-half+.25,p.deck+.2,z,.08,.36,.07,dark,sp));box(-half+.22,p.deck+.4,0,.48,.065,p.w*2.05,body,sp);
  sp.visible=!!spoiler||/NISMO|GT4|GT3|Jesko|Veilside/.test(name);car3d.sp=sp;
  oldCid=cid;oldSp=spoiler;car3d.profile=f;
 }
 function camera(){cam.position.set(Math.sin(yaw)*Math.cos(pitch)*distance,Math.sin(pitch)*distance+.75,Math.cos(yaw)*Math.cos(pitch)*distance);cam.lookAt(0,.72,0)}
 car3d={g,body,sp:null,rd,sc,cam,build,set:(cid,color,sp)=>{if(cid!==oldCid||sp!==oldSp)build(cid,sp);body.color.set(color)},zoom:n=>{distance=Math.max(6.8,Math.min(12,distance+n));camera()},reset:()=>{yaw=.65;pitch=.30;distance=8.9;camera()},toggle:()=>{auto=!auto;return auto},isAuto:()=>auto};
 el.addEventListener('pointerdown',e=>{if(e.target!==rd.domElement)return;drag=true;px=e.clientX;py=e.clientY;rd.domElement.setPointerCapture(e.pointerId)});
 el.addEventListener('pointerup',()=>drag=false);el.addEventListener('pointercancel',()=>drag=false);
 el.addEventListener('pointermove',e=>{if(drag){yaw-=(e.clientX-px)*.012;if(e.pointerType!=='touch')pitch=Math.max(.08,Math.min(.8,pitch+(e.clientY-py)*.006));px=e.clientX;py=e.clientY;camera()}});
 el.addEventListener('keydown',e=>{if(e.target!==el)return;const keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-'];if(!keys.includes(e.key))return;e.preventDefault();if(e.key==='ArrowLeft')yaw-=.15;if(e.key==='ArrowRight')yaw+=.15;if(e.key==='ArrowUp')pitch=Math.min(.8,pitch+.07);if(e.key==='ArrowDown')pitch=Math.max(.08,pitch-.07);if(e.key==='+')car3d.zoom(-.5);if(e.key==='-')car3d.zoom(.5);camera()});
 const rs=()=>{if(!el.clientWidth||!el.clientHeight)return;rd.setSize(el.clientWidth,el.clientHeight);cam.aspect=el.clientWidth/el.clientHeight;cam.updateProjectionMatrix()};new ResizeObserver(rs).observe(el);rs();camera();
 let last=0;(function loop(now){requestAnimationFrame(loop);if(document.hidden||!el.clientHeight||document.querySelector('main').hidden||now-last<32)return;const dt=Math.min(.05,(now-last)/1000);last=now;if(auto&&!drag){yaw+=dt*.16;camera()}rd.render(sc,cam)})(0);
}
function updateCar(){
 const o=cur(),cid=S.tab==='catalog'&&previewCid!==null?previewCid:o?.cid;
 const caption=document.getElementById('cap'),name=document.getElementById('previewName');
 if(name)name.textContent=cid===undefined?'GARAGE EMPIRE':CARS[cid][0]+' · '+CARS[cid][1];
 if(!car3d){caption.textContent=S.lang==='ar'?'معاينة 3D مش متاحة. باقي اللعبة شغال.':'3D unavailable. The rest of the game still works.';return}
 car3d.g.visible=cid!==undefined;if(cid===undefined)return;
 const catalog=S.tab==='catalog'&&previewCid!==null;car3d.set(cid,catalog?previewColor:o.col,catalog?0:o.sp);
 caption.textContent=S.lang==='ar'?'مجسم فني مبسّط، مش نسخة مطابقة للموديل. اسحب للتدوير.':'Stylized body, not a model-exact replica. Drag to orbit.';
    }
