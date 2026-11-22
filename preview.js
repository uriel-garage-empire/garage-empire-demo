/* Original procedural showroom. Stylized body families, not licensed model-exact assets. */
/* Real-shape community models, loaded as GLB for exact catalog names only (see CREDITS.md). */
const MODELS={
 'Nissan Skyline R34 GT-R':{url:'assets/models/nissan-skyline-r34-gtr.glb',credit:'David Sirera'},
 'Chevrolet Camaro ZL1':{url:'assets/models/chevrolet-camaro-zl1.glb',credit:'Kris Tong'},
 'Dodge Challenger SRT Hellcat':{url:'assets/models/dodge-challenger-srt-hellcat.glb',credit:'Grzybek'},
 'Toyota Supra A80':{url:'assets/models/toyota-supra-a80.glb',credit:'Martin Trafas (TinoD2)'},
 'Mazda MX-5 NA':{url:'assets/models/mazda-mx5-na.glb.b64',parts:3,credit:'SPDWKS (Speedy-Works)'},
 'Nissan Silvia S15':{url:'assets/models/nissan-silvia-s15.glb.b64',parts:2,credit:'IVA (dxmhl)',yaw:Math.PI},
 'Toyota MR2 SW20':{url:'assets/models/toyota-mr2-sw20.glb.b64',parts:10,credit:'_shobh19 (s0h1o9b)',yaw:Math.PI},
 'BMW M3 E46':{url:'assets/models/bmw-m3-e46.glb.b64',parts:3,credit:'BRIKKER (daniklyz)',yaw:Math.PI},
 'Nissan 350Z':{url:'assets/models/nissan-350z.glb.b64',parts:4,credit:'Blue3D (Blueberry12)'},
 'Toyota Chaser JZX100':{url:'assets/models/toyota-chaser-jzx100.glb.b64',parts:5,credit:'Blue3D (Blueberry12)'}
};
function init3d(){
 const el=document.getElementById('stage'),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(36,1,.1,80);
 const rd=new THREE.WebGLRenderer({antialias:true,alpha:true});rd.setPixelRatio(Math.min(devicePixelRatio,1.7));rd.outputEncoding=THREE.sRGBEncoding;rd.toneMapping=THREE.ACESFilmicToneMapping;rd.toneMappingExposure=1.0;rd.shadowMap.enabled=true;rd.shadowMap.type=THREE.PCFSoftShadowMap;el.prepend(rd.domElement);
 sc.fog=new THREE.Fog(0x05070d,15,30);
 // Procedural studio environment: soft colored light strips reflected in the paint.
 try{
  const env=new THREE.Scene();env.background=new THREE.Color(0x04050a);
  const strip=(color,w,h,x,y,z,rx,ry)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide}));m.position.set(x,y,z);m.rotation.set(rx,ry,0);env.add(m)};
  strip(new THREE.Color(1.6,1.6,1.7),10,4,0,8,0,Math.PI/2,0);
  strip(new THREE.Color(.3,.8,1.15),7,2.4,-8,3.5,0,0,Math.PI/2);
  strip(new THREE.Color(1.1,.45,.65),7,2.4,8,3.5,0,0,-Math.PI/2);
  strip(new THREE.Color(1.2,1,.75),9,1.8,0,2.6,9,0,Math.PI);
  const pm=new THREE.PMREMGenerator(rd);sc.environment=pm.fromScene(env,.06).texture;pm.dispose();
 }catch(e){console.warn('env reflections unavailable',e)}
 sc.add(new THREE.HemisphereLight(0xb7d8ff,0x272036,.32));
 const light=(color,intensity,x,y,z)=>{const d=new THREE.DirectionalLight(color,intensity);d.position.set(x,y,z);sc.add(d);return d};
 const key=light(0xfff4df,1.0,3,7,4);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-5;key.shadow.camera.right=5;key.shadow.camera.top=5;key.shadow.camera.bottom=-5;key.shadow.normalBias=.03;
 light(0x58bdff,.75,-4,3,-3);light(0xff7092,.4,0,2,5);
 // Turntable floor with a subtle radial sheen, neon ring and wide view grid.
 const fc=document.createElement('canvas');fc.width=fc.height=512;const fx=fc.getContext('2d');
 const fg=fx.createRadialGradient(256,256,20,256,256,256);fg.addColorStop(0,'#0c1322');fg.addColorStop(.55,'#05080f');fg.addColorStop(1,'#020409');fx.fillStyle=fg;fx.fillRect(0,0,512,512);
 fx.strokeStyle='rgba(60,110,150,.28)';fx.lineWidth=2;for(let rr=70;rr<=240;rr+=42){fx.beginPath();fx.arc(256,256,rr,0,Math.PI*2);fx.stroke()}
 const floorTex=new THREE.CanvasTexture(fc);floorTex.encoding=THREE.sRGBEncoding;
 const floor=new THREE.Mesh(new THREE.CylinderGeometry(3.6,3.8,.18,80),new THREE.MeshStandardMaterial({map:floorTex,metalness:.85,roughness:.25,envMapIntensity:.15}));floor.position.y=-.11;floor.receiveShadow=true;sc.add(floor);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(3.58,.018,8,100),new THREE.MeshBasicMaterial({color:0x27d7ed}));ring.rotation.x=Math.PI/2;ring.position.y=.006;sc.add(ring);
 const ring2=new THREE.Mesh(new THREE.TorusGeometry(3.3,.008,6,90),new THREE.MeshBasicMaterial({color:0x1a6d80,transparent:true,opacity:.6}));ring2.rotation.x=Math.PI/2;ring2.position.y=.004;sc.add(ring2);
 const grid=new THREE.GridHelper(18,36,0x253848,0x101a2a);grid.position.y=-.21;sc.add(grid);
 // Soft radial texture shared by the contact shadow and the neon underglow.
 const rc=document.createElement('canvas');rc.width=256;rc.height=128;const rx=rc.getContext('2d');
 const rg=rx.createRadialGradient(128,64,6,128,64,120);rg.addColorStop(0,'rgba(255,255,255,.95)');rg.addColorStop(.5,'rgba(255,255,255,.38)');rg.addColorStop(1,'rgba(255,255,255,0)');rx.fillStyle=rg;rx.save();rx.translate(128,64);rx.scale(1,.5);rx.translate(-128,-64);rx.fillRect(0,-64,256,256);rx.restore();
 const radialTex=new THREE.CanvasTexture(rc);
 const contact=new THREE.Mesh(new THREE.PlaneGeometry(5.6,3),new THREE.MeshBasicMaterial({map:radialTex,color:0x000000,transparent:true,opacity:.6,depthWrite:false}));contact.rotation.x=-Math.PI/2;contact.position.y=.012;sc.add(contact);
 const underMat=new THREE.MeshBasicMaterial({map:radialTex,color:0x27d7ed,transparent:true,opacity:.38,blending:THREE.AdditiveBlending,depthWrite:false});
 const under=new THREE.Mesh(new THREE.PlaneGeometry(5.4,2.7),underMat);under.rotation.x=-Math.PI/2;under.position.y=.02;sc.add(under);
 // Radial glow texture for headlight and taillight flares.
 const gc=document.createElement('canvas');gc.width=gc.height=128;const gx=gc.getContext('2d');
 const gg=gx.createRadialGradient(64,64,2,64,64,64);gg.addColorStop(0,'rgba(255,255,255,1)');gg.addColorStop(.35,'rgba(255,255,255,.4)');gg.addColorStop(1,'rgba(255,255,255,0)');gx.fillStyle=gg;gx.fillRect(0,0,128,128);
 const glowTex=new THREE.CanvasTexture(gc);
 const g=new THREE.Group();sc.add(g);
 const body=new THREE.MeshPhysicalMaterial({color:0xf0f2f6,metalness:.35,roughness:.28,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:.2});
 const dark=new THREE.MeshStandardMaterial({color:0x0b0e13,roughness:.78,envMapIntensity:.5}),glass=new THREE.MeshPhysicalMaterial({color:0x081521,metalness:.6,roughness:.1,clearcoat:1,side:THREE.DoubleSide,envMapIntensity:.8});
 const chrome=new THREE.MeshStandardMaterial({color:0xbac4d2,metalness:.9,roughness:.22,envMapIntensity:.8}),red=new THREE.MeshStandardMaterial({color:0xc72235,roughness:.4});
 const plateMat=new THREE.MeshStandardMaterial({color:0xe8ecf2,roughness:.5,metalness:.1});
 const head=new THREE.MeshStandardMaterial({color:0xe7fbff,emissive:0xbce8ff,emissiveIntensity:2.1}),tail=new THREE.MeshStandardMaterial({color:0xff153c,emissive:0xef0532,emissiveIntensity:1.6});
 const drl=new THREE.MeshBasicMaterial({color:0xd9f4ff}),tailBar=new THREE.MeshBasicMaterial({color:0xff2048});
 let oldCid=-1,oldSp=-1,yaw=.65,pitch=.30,distance=8.6,auto=!matchMedia('(prefers-reduced-motion:reduce)').matches,drag=false,px=0,py=0,phase=0;
 const add=(geo,mat,x,y,z,parent=g)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m};
 const box=(x,y,z,w,h,d,mat,parent=g)=>add(new THREE.BoxGeometry(w,h,d),mat,x,y,z,parent);
 const flare=(x,y,z,color,scale,opacity=.5)=>{const m=new THREE.SpriteMaterial({map:glowTex,color,transparent:true,opacity,blending:THREE.AdditiveBlending,depthWrite:false});const s=new THREE.Sprite(m);s.position.set(x,y,z);s.scale.set(scale,scale,1);g.add(s);return s};
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
 super:{l:4.6,w:1.05,h:1.14,front:1.43,rear:-1.42,roofF:.8,roofR:-.7,hood:.72,deck:.88},
 hyper:{l:4.85,w:1.08,h:1.02,front:1.52,rear:-1.5,roofF:.48,roofR:-.52,hood:.68,deck:.84},
 gtr:{l:4.68,w:1,h:1.37,front:1.43,rear:-1.4,roofF:.43,roofR:-.85,hood:1.03,deck:1.01}
 };
 const modelCache={};
 function clearStage(){const geometries=new Set();g.traverse(o=>{if(o.geometry&&!(o instanceof THREE.Sprite))geometries.add(o.geometry)});while(g.children.length)g.remove(g.children[0]);geometries.forEach(x=>x.dispose())}
 function loadGlb(url,parts=0){
  modelCache[url]=modelCache[url]||new Promise((res,rej)=>{
   const loader=new THREE.GLTFLoader(),done=x=>res(x.scene);
   if(!parts){loader.load(url,done,undefined,rej);return}
   // Lossless text transport for assets published through the repository text editor.
   Promise.all(Array.from({length:parts},(_,i)=>fetch(url+'.'+i).then(r=>{if(!r.ok)throw Error('Model asset unavailable');return r.text()})))
    .then(chunks=>{const binary=atob(chunks.join('')),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);loader.parse(bytes.buffer,'',done,rej)})
    .catch(rej);
  });return modelCache[url];
 }
 // Real-shape path: licensed GLB, normalized to the turntable. Procedural path stays the fallback.
 function build(cid,spoiler){
  const name=CARS[cid][0],mdef=MODELS[name];
  if(!mdef||!THREE.GLTFLoader){buildProcedural(cid,spoiler);return}
  clearStage();
  const sp=new THREE.Group();sp.visible=false;g.add(sp);
  oldCid=cid;oldSp=spoiler;car3d.sp=sp;car3d.usingModel=false;car3d.profile='glb';
  loadGlb(mdef.url,mdef.parts).then(scene0=>{
   if(oldCid!==cid)return;
   const root=scene0.clone(true);
   const bb=new THREE.Box3().setFromObject(root),size=bb.getSize(new THREE.Vector3());
   if(size.z>size.x)root.rotation.y=Math.PI/2;
   if(mdef.yaw)root.rotation.y+=mdef.yaw;
   root.scale.setScalar(4.5/Math.max(size.x,size.z));
   bb.setFromObject(root);const c=bb.getCenter(new THREE.Vector3());
   root.position.x-=c.x;root.position.z-=c.z;root.position.y-=bb.min.y;
   root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});
   g.add(root);car3d.usingModel=true;
   if(typeof updateCar==='function')updateCar();
  }).catch(()=>{if(oldCid===cid)buildProcedural(cid,spoiler)});
 }
 function buildProcedural(cid,spoiler){
  clearStage();
  const name=CARS[cid][0],f=shapeOf(cid),p={...(profiles[f]||profiles.coupe)},seed=Array.from(name).reduce((a,c)=>a+c.charCodeAt(0),0);
  // Small original proportion variations within each family. Never claim exact dimensions.
  p.l+=(seed%7-3)*.025;p.w+=(seed%5-2)*.007;
  const half=p.l/2,r=f==='suv'?.43:.36,wy=r+.025;
  const outline=new THREE.Shape();const edge=.34,archR=r+.055;
  outline.moveTo(-half,edge);outline.lineTo(-half,p.deck*.85);outline.quadraticCurveTo(-half+.12,p.deck,-half+.35,p.deck);outline.lineTo(p.rear,p.deck);outline.quadraticCurveTo(0,(p.deck+p.hood)/2+.025,p.front,p.hood);outline.quadraticCurveTo(half-.13,p.hood*.96,half,p.hood*.76);outline.quadraticCurveTo(half+.02,(p.hood*.76+edge)/2,half,edge);
  [p.front,p.rear].forEach(x=>{outline.lineTo(x+archR,edge);outline.lineTo(x+archR,wy);outline.absarc(x,wy,archR,0,Math.PI,false);outline.lineTo(x-archR,edge)});outline.closePath();
  const shell=new THREE.ExtrudeGeometry(outline,{depth:p.w*2-.12,bevelEnabled:true,bevelThickness:.06,bevelSize:.055,bevelSegments:4,curveSegments:24,steps:1});
  const shellMesh=add(shell,body,0,0,-p.w+.06);
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
   // Shark-fin antenna on everyday roofs.
   if(!['super','hyper'].includes(f))box(rr+.16,p.h+.055,0,.2,.1,.045,dark);
  }else{
   box(-.23,.88,0,1.15,.14,1.3,dark);[-.35,.35].forEach(z=>{const seat=box(-.5,.99,z,.21,.38,.32,dark);seat.rotation.z=.15});
   panel([[rf,p.h,-roofW],[rf,p.h,roofW],[frontBase-.04,p.hood+.02,baseW],[frontBase-.04,p.hood+.02,-baseW]],glass);
   box(rf,p.h,0,.06,.05,roofW*2,chrome);
  }
  // Sills, beltline trim, door handles, mirrors, seams and aero add-ons.
  [-1,1].forEach(s=>{
   box(0,.4,s*(p.w+.015),p.l*.56,.12,.07,dark);
   box(0,(p.deck+p.h)/2-.04,s*(p.w+.008),p.l*.5,.02,.02,chrome);
   box(-.43,p.hood+.015,s*(p.w*.98),.17,.035,.025,chrome);
   box(frontBase-.08,p.hood+.13,s*(p.w+.11),.22,.11,.23,body);
   const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-.9,.49,s*(p.w+.013)),new THREE.Vector3(-.9,p.deck-.03,s*(p.w*.95))]),new THREE.LineBasicMaterial({color:0x202935}));g.add(line);
  });
  if(['super','hyper','gtr','muscle','sports','coupe'].includes(f))box(half-.06,.32,0,.34,.05,p.w*1.56,dark);
  if(['super','hyper','gtr'].includes(f)){box(-half-.04,.3,0,.26,.09,p.w*1.5,dark);for(let j=-2;j<=2;j++)box(-half-.08,.24,j*p.w*.27,.2,.16,.03,dark)}
  // Four tires, rim barrels, brake rotors, red calipers and ten-spoke alloys.
  [p.front,p.rear].forEach(x=>[-1,1].forEach(s=>{
   let z=s*(p.w+.075),t=add(new THREE.CylinderGeometry(r,r,.28,40),dark,x,wy,z);t.rotation.x=Math.PI/2;
   let zface=z+s*.15,disc=add(new THREE.CylinderGeometry(r*.68,r*.68,.025,32),chrome,x,wy,zface);disc.rotation.x=Math.PI/2;
   let rim=add(new THREE.TorusGeometry(r*.75,.026,8,40),chrome,x,wy,zface+s*.025);
   let tireRim=add(new THREE.TorusGeometry(r*.94,.016,6,40),dark,x,wy,zface);
   box(x-.16,wy+.01,zface+s*.012,.08,.21,.05,red);
   for(let j=0;j<10;j++){let angle=j*Math.PI/5;let spoke=box(x+Math.sin(angle)*r*.4,wy+Math.cos(angle)*r*.4,zface+s*.04,.04,r*.7,.04,chrome);spoke.rotation.z=-angle}
   const hub=add(new THREE.CylinderGeometry(.065,.065,.05,16),dark,x,wy,zface+s*.07);hub.rotation.x=Math.PI/2;
   // Shallow body-colored wheel brows give the silhouette a fender line.
   let arch=add(new THREE.TorusGeometry(r+.065,.037,8,32,Math.PI),body,x,wy,z);arch.rotation.z=0;
  }));
  // Fascias. Front is +X. The preview stays original rather than using badges/logos.
  box(half+.07,.57,0,.035,.16,p.w*1.19,dark);
  box(half+.035,.38,0,.22,.07,p.w*1.73,dark);
  box(half+.11,.49,0,.014,.12,.4,plateMat);
  box(-half-.1,.56,0,.014,.13,.42,plateMat);
  [-1,1].forEach(s=>{
   const z=s*p.w*.62;
   if(/Porsche|MX-5 NA|NSX/.test(name)){
    box(half+.06,p.hood*.86,z,.08,.16,.3,dark);
    let lamp=add(new THREE.SphereGeometry(.115,20,12),head,half+.095,p.hood*.86,z);lamp.scale.set(.25,.74,1.3);
    flare(half+.16,p.hood*.86,z,0xcfefff,.55,.55);
   }else if(f==='ev'){
    box(half+.06,.89,0,.07,.12,p.w*1.35,dark);
    box(half+.1,.96,0,.02,.03,p.w*1.28,drl);
    for(let j=0;j<4;j++)box(half+.095,.89,z+(j-1.5)*.085,.04,.06,.06,head);
    flare(half+.15,.89,z,0xcfefff,.6,.5);
   }else{
    box(half+.06,p.hood*.85,z,.07,.11,p.w*.52,dark);
    box(half+.09,p.hood*.9,z,.03,.025,p.w*.46,drl);
    box(half+.09,p.hood*.83,z,.035,.055,p.w*.44,head);
    flare(half+.15,p.hood*.84,z,0xcfefff,.6,.5);
   }
   if(/Skyline|GT-R|Ferrari/.test(name)){
    box(-half-.06,p.deck*.8,0,.07,.2,p.w*1.3,dark);
    for(let j=0;j<2;j++){const lamp=add(new THREE.CylinderGeometry(.085,.085,.03,20),tail,-half-.095,p.deck*.8,z+(j-.5)*.22);lamp.rotation.z=Math.PI/2}
    flare(-half-.15,p.deck*.8,z,0xff3050,.6,.5);
   }else if(['ev','super','hyper'].includes(f)){
    box(-half-.06,p.deck*.82,0,.07,.12,p.w*1.35,dark);
    box(-half-.1,p.deck*.82,0,.02,.045,p.w*1.3,tailBar);
    flare(-half-.14,p.deck*.82,z,0xff3050,.55,.45);
   }else{
    box(-half-.06,p.deck*.8,z,.07,.11,p.w*.5,dark);
    box(-half-.09,p.deck*.8,z,.035,.065,p.w*.46,tail);
    flare(-half-.14,p.deck*.8,z,0xff3050,.55,.45);
   }
   const pipe=add(new THREE.CylinderGeometry(.06,.06,.16,16),chrome,-half-.04,.4,s*.62);pipe.rotation.z=Math.PI/2;
  });
  if(name.startsWith('BMW'))[-.16,.16].forEach(z=>box(half+.095,.68,z,.025,.23,.22,dark));
  if(f==='muscle')for(let j=0;j<7;j++)box(half+.095,.59,(j-3)*.16,.025,.09,.025,chrome);
  if(['super','hyper'].includes(f))[-1,1].forEach(s=>box(-.6,.66,s*(p.w+.01),.6,.2,.02,dark));
  const sp=new THREE.Group();g.add(sp);[-.65,.65].forEach(z=>box(-half+.25,p.deck+.2,z,.08,.36,.07,dark,sp));box(-half+.22,p.deck+.4,0,.48,.065,p.w*2.05,body,sp);
  sp.visible=!!spoiler||/NISMO|GT4|GT3|Jesko|Veilside/.test(name);car3d.sp=sp;
  oldCid=cid;oldSp=spoiler;car3d.profile=f;car3d.usingModel=false;
 }
 function camera(){cam.position.set(Math.sin(yaw)*Math.cos(pitch)*distance,Math.sin(pitch)*distance+.75,Math.cos(yaw)*Math.cos(pitch)*distance);cam.lookAt(0,.72,0)}
 car3d={g,body,sp:null,rd,sc,cam,build,usingModel:false,set:(cid,color,sp)=>{if(cid!==oldCid||sp!==oldSp)build(cid,sp);if(!car3d.usingModel)body.color.set(color)},zoom:n=>{distance=Math.max(6.6,Math.min(12,distance+n));camera()},reset:()=>{yaw=.65;pitch=.30;distance=8.6;camera()},toggle:()=>{auto=!auto;return auto},isAuto:()=>auto};
 el.addEventListener('pointerdown',e=>{if(e.target!==rd.domElement)return;drag=true;px=e.clientX;py=e.clientY;rd.domElement.setPointerCapture(e.pointerId)});
 el.addEventListener('pointerup',()=>drag=false);el.addEventListener('pointercancel',()=>drag=false);
 el.addEventListener('pointermove',e=>{if(drag){yaw-=(e.clientX-px)*.012;if(e.pointerType!=='touch')pitch=Math.max(.08,Math.min(.8,pitch+(e.clientY-py)*.006));px=e.clientX;py=e.clientY;camera()}});
 el.addEventListener('keydown',e=>{if(e.target!==el)return;const keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-'];if(!keys.includes(e.key))return;e.preventDefault();if(e.key==='ArrowLeft')yaw-=.15;if(e.key==='ArrowRight')yaw+=.15;if(e.key==='ArrowUp')pitch=Math.min(.8,pitch+.07);if(e.key==='ArrowDown')pitch=Math.max(.08,pitch-.07);if(e.key==='+')car3d.zoom(-.5);if(e.key==='-')car3d.zoom(.5);camera()});
 const rs=()=>{if(!el.clientWidth||!el.clientHeight)return;rd.setSize(el.clientWidth,el.clientHeight);cam.aspect=el.clientWidth/el.clientHeight;cam.updateProjectionMatrix()};new ResizeObserver(rs).observe(el);rs();camera();
 let last=0;(function loop(now){requestAnimationFrame(loop);if(document.hidden||!el.clientHeight||document.querySelector('main').hidden||now-last<32)return;const dt=Math.min(.05,(now-last)/1000);last=now;phase+=dt;underMat.opacity=.34+.08*Math.sin(phase*1.7);under.visible=contact.visible=g.visible&&g.children.length>0;if(auto&&!drag){yaw+=dt*.16;camera()}rd.render(sc,cam)})(0);
}
function updateCar(){
 const o=cur(),cid=S.tab==='catalog'&&previewCid!==null?previewCid:o?.cid;
 const caption=document.getElementById('cap'),name=document.getElementById('previewName');
 if(name)name.textContent=cid===undefined?'GARAGE EMPIRE':CARS[cid][0]+' · '+CARS[cid][1];
 if(!car3d){caption.textContent=S.lang==='ar'?'معاينة 3D مش متاحة. باقي اللعبة شغال.':'3D unavailable. The rest of the game still works.';return}
 car3d.g.visible=cid!==undefined;if(cid===undefined)return;
 const catalog=S.tab==='catalog'&&previewCid!==null;car3d.set(cid,catalog?previewColor:o.col,catalog?0:o.sp);
 const mdef=car3d.usingModel&&MODELS[CARS[cid][0]];
 caption.textContent=mdef?(S.lang==='ar'?'مجسم مجتمعي من نفس جيل الموديل · '+mdef.credit+' · CC BY · مش نسخة مطابقة للسنة أو الفئة بالظبط. اسحب للتدوير.':'Same-generation community model by '+mdef.credit+' (CC BY), not an exact year/trim replica. Drag to orbit.'):(S.lang==='ar'?'مجسم فني مبسّط، مش نسخة مطابقة للموديل. اسحب للتدوير.':'Stylized body, not a model-exact replica. Drag to orbit.');
  }
