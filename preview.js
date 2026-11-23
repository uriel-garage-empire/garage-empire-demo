/* Original procedural showroom. Stylized body families, not licensed model-exact assets. */
/* Community models route by catalog name/year. Different-car approximations are explicitly flagged (see CREDITS.md). */
const MODELS={
"Nissan Z NISMO":{"catalogYear": 2024, "url": "original:z-nismo-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified Z NISMO, with extended nose, canards, red sills and three-piece spoiler. Angular lamps and generic wheels, not an exact trim replica.", "noteAr": "مجسم أصلي مبسط لـ Z NISMO بمقدمة أطول وزعانف وجوانب بحافة حمرا وجناح تلات قطع. الفوانيس والجنوط مبسطة، مش نسخة مطابقة للفئة."},
"Nissan Z Performance":{"catalogYear": 2024, "url": "original:z-original", "credit": "Original simplified body", "original": true, "noteEn": "Original simplified Z Performance body. Angular lamps, bumpers and generic wheels; not NISMO or an exact trim replica.", "noteAr": "مجسم أصلي مبسط لـ Z Performance. الفوانيس والإكصدامات زاويّة والجنوط مبسطة، مش NISMO ولا نسخة مطابقة للفئة."},
"Toyota Land Cruiser":{"catalogYear": 2024, "url": "original:landcruiser-j250-original", "credit": "Original simplified body", "original": true, "noteEn": "Original simplified J250 with round 1958-style lamps. Angular roof and simplified lamps, bumpers and wheels; not an exact trim replica.", "noteAr": "مجسم أصلي مبسط للاند كروزر J250 بفوانيس دائرية زي فئة 1958. السقف والفوانيس والإكصدامات والجنوط مبسطة، مش نسخة مطابقة للفئة."},
"BMW i4 M50":{"catalogYear": 2022, "url": "assets/models/bmw-g80-sharky.glb.b64", "parts": 2, "credit": "SharkyStudios (sharkycat109)", "approximation": true, "sourceBody": "BMW M3 G80", "noteEn": "VISUAL SUBSTITUTE: BMW M3 G80 body, NOT an i4. Roof, grille and rear differ. i4 stats are retained.", "noteAr": "بديل شكلي: هيكل BMW M3 G80، مش i4. السقف والشبكة والخلفية مختلفين. المواصفات بتاعة i4."},
"Porsche 911 Turbo S":{"catalogYear": 2021, "url": "assets/models/turbo-sk.glb.b64", "parts": 10, "credit": "S.K.", "noteEn": "Community low-poly 992 Turbo S body; exact year and equipment not certified.", "noteAr": "هيكل 992 تيربو S مبسط، السنة والتجهيزات مش مطابقة بالضبط."},
"Hyundai Excel":{"catalogYear": 1997, "url": "assets/models/excel-m3ika.glb.b64", "parts": 15, "credit": "m3ika", "noteEn": "1990-era X2 sedan body; not exact 1997 local facelift or equipment.", "noteAr": "هيكل إكسيل X2 سيدان بمرجع 1990، مش تفاصيل تحديث وتجهيزات 1997 المحلية بالضبط."},
"Nissan GT-R Premium":{"catalogYear": 2024, "url": "assets/models/r35-eihab-selected.glb.b64", "parts": 2, "credit": "Eihab_3D", "noteEn": "Stylized 2017-era R35 body, not the 2024 facelift or Premium equipment.", "noteAr": "هيكل R35 فني بشكل تحديث 2017، مش شكل تحديث 2024 ولا تجهيزات Premium."},
"Ford Mustang Dark Horse":{"catalogYear": 2024, "url": "assets/models/mustang-darkhorse-lolandpop.glb.b64", "parts": 3, "credit": "LolAndPop!", "noteEn": "Photo-textured PS1-style Dark Horse; intentionally simplified, not exact equipment.", "noteAr": "مجسم Dark Horse بأسلوب PS1 وصور كخامات، التفاصيل مبسطة ومش تجهيزات مطابقة."},
"Ford Mustang GT|2024":{"catalogName": "Ford Mustang GT", "catalogYear": 2024, "url": "assets/models/mustang2024-legend.glb.b64", "parts": 2, "credit": "Legendeniuss", "noteEn": "Blueprint-built low-poly2024S650GT; fine equipment details simplified.", "noteAr": "مجسم S650 GT سنة 2024 منخفض التفاصيل، التجهيزات الدقيقة مبسطة."},
"Toyota GR Supra 2.0":{"catalogYear": 2024, "url": "assets/models/supra-bedoya.glb.b64", "parts": 14, "credit": "BedoyaCamilo", "noteEn": "Stylized A90 body; exact2024equipment and2.0/3.0trim details differ.", "noteAr": "هيكل A90 فني، تجهيزات 2024 وتفاصيل فئتي 2.0 و3.0 مش مطابقة بالظبط."},"Toyota GR Supra 3.0":{"catalogYear": 2024, "url": "assets/models/supra-bedoya.glb.b64", "parts": 14, "credit": "BedoyaCamilo", "noteEn": "Stylized A90 body; exact2024equipment and2.0/3.0trim details differ.", "noteAr": "هيكل A90 فني، تجهيزات 2024 وتفاصيل فئتي 2.0 و3.0 مش مطابقة بالظبط."},
"Honda Civic EK":{"catalogYear": 1999, "url": "assets/models/civic-ek9-marksform.glb.b64", "parts": 3, "credit": "marksform", "noteEn": "Stylized EK9 Type R hatch body; exact 1999 facelift/trim details differ.", "noteAr": "هيكل EK9 Type R هاتشباك فني، تفاصيل تحديث وفئة 1999 مختلفة."},
"Audi RS 6 Avant performance":{"catalogYear": 2024, "url": "assets/models/rs6-yokatann.glb.b64", "parts": 3, "yaw": Math.PI, "credit": "yokatann", "noteEn": "Low-poly C8 RS6 Avant community body; not exact 2024 performance equipment.", "noteAr": "مجسم RS6 Avant جيل C8 منخفض التفاصيل، مش تفاصيل performance سنة 2024 بالضبط."},
"Mazda CX-5 2.5 S":{"catalogYear": 2024, "url": "assets/models/cx5-itsdiyor-packed1.glb.b64", "parts": 26, "credit": "ItsDiyor", "noteEn": "Shared 2020 CX-5 body; not 2024 facelift or exact trim equipment.", "noteAr": "هيكل CX-5 سنة 2020 مشترك، مش تحديث 2024 ولا تفاصيل الفئة بالضبط."},
"Mazda CX-5 2.5 Turbo":{"catalogYear": 2024, "url": "assets/models/cx5-itsdiyor-packed1.glb.b64", "parts": 26, "credit": "ItsDiyor", "noteEn": "Shared 2020 CX-5 body; not 2024 facelift or exact trim equipment.", "noteAr": "هيكل CX-5 سنة 2020 مشترك، مش تحديث 2024 ولا تفاصيل الفئة بالضبط."},

 'Bugatti Chiron':{catalogYear:2019,url:'assets/models/chiron-alieeen.glb.b64',parts:24,credit:'ALIEEEN',noteEn:'Standard Chiron community body; exact year/trim equipment not certified.',noteAr:'مجسم شيرون العادية، تفاصيل السنة والفئة مش معتمدة.'},
 'Rimac Nevera':{catalogYear:2024,url:'assets/models/nevera-3dblender-packed1.glb.b64',parts:4,credit:'3dblender_1 + Vladi',noteEn:'2022 Nevera community body; not certified exact 2024 equipment.',noteAr:'مجسم نيفيرا مجتمعي بمرجع 2022، مش تفاصيل 2024 المعتمدة.'},
 "Lamborghini Revuelto":{catalogYear:2024,url:'assets/models/revuelto-alieeen.glb.b64',parts:22,credit:"ALIEEEN",noteEn:"Revuelto community model; year/trim details are not certified.",noteAr:"\u0645\u062c\u0633\u0645 \u0631\u064a\u0641\u0648\u064a\u0644\u062a\u0648 \u0645\u062c\u062a\u0645\u0639\u064a\u060c \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0633\u0646\u0629 \u0648\u0627\u0644\u0641\u0626\u0629 \u0645\u0634 \u0645\u0639\u062a\u0645\u062f\u0629."},
 'Chevrolet Lanos':{catalogYear:2000,url:'assets/models/lanos-du-packed1.glb.b64',parts:3,credit:'D_U',yaw:Math.PI,noteEn:'Low-poly Daewoo Lanos sedan body; badge/year details differ.',noteAr:'هيكل دايو لانوس سيدان منخفض التفاصيل، الشعار وتفاصيل السنة مختلفة.'},
 'Honda S2000':{catalogYear:2000,url:'assets/models/s2000-9green.glb.b64',parts:3,credit:'9Green',yaw:Math.PI,noteEn:'Stylized low-poly S2000; not an exact year/trim replica.',noteAr:'مجسم S2000 فني منخفض التفاصيل، مش مطابق للسنة أو الفئة بالضبط.'},
 "Honda Civic Sedan LX":{catalogYear:2025,url:'assets/models/civic-ricy-packed1.glb.b64',parts:5,credit:'Ricy',noteEn:'Shared early 2022 Civic sedan body; not 2025 facelift or trim-exact.',noteAr:'هيكل سيفيك سيدان 2022 مشترك، مش تحديث 2025 ولا تفاصيل الفئة بالضبط.'},
 "Honda Civic Sedan Sport Hybrid":{catalogYear:2025,url:'assets/models/civic-ricy-packed1.glb.b64',parts:5,credit:'Ricy',noteEn:'Shared early 2022 Civic sedan body; not 2025 facelift or trim-exact.',noteAr:'هيكل سيفيك سيدان 2022 مشترك، مش تحديث 2025 ولا تفاصيل الفئة بالضبط.'},
 "Honda Civic Si":{catalogYear:2025,url:'assets/models/civic-ricy-packed1.glb.b64',parts:5,credit:'Ricy',noteEn:'Shared early 2022 Civic sedan body; not 2025 facelift or trim-exact.',noteAr:'هيكل سيفيك سيدان 2022 مشترك، مش تحديث 2025 ولا تفاصيل الفئة بالضبط.'},
 'Hyundai IONIQ 5 Standard Range':{catalogYear:2024,url:'assets/models/ioniq5-andika.glb.b64',parts:21,credit:'andikapratamaw'},
 'Hyundai IONIQ 5 Long Range RWD':{catalogYear:2024,url:'assets/models/ioniq5-andika.glb.b64',parts:21,credit:'andikapratamaw'},
 'Hyundai IONIQ 5 Long Range AWD':{catalogYear:2024,url:'assets/models/ioniq5-andika.glb.b64',parts:21,credit:'andikapratamaw'},
 'Nissan GT-R R35':{catalogYear:2017,url:'assets/models/r35-ricy.glb.b64',parts:16,credit:'Ricy',noteEn:'2008 R35 body, not the 2017 facelift.',noteAr:'هيكل R35 سنة 2008، مش شكل تحديث 2017.'},
 'Chevrolet Corvette Stingray':{catalogYear:2024,url:'assets/models/corvette-c8-thcyrax.glb.b64',parts:2,credit:'Thcyrax'},
 'BMW M4 Competition M xDrive':{catalogYear:2021,url:'assets/models/bmw-m4-g82-rosemarin-packed1.glb.b64',parts:7,credit:'Rosemarin',yaw:Math.PI},
 'Ferrari 458 Italia':{catalogYear:2010,url:'assets/models/ferrari-458-gios-packed1.glb.b64',parts:7,credit:'giosassets',yaw:Math.PI},
 'Nissan Skyline R34 GT-R':{catalogYear:1999,url:'assets/models/nissan-skyline-r34-gtr.glb',credit:'David Sirera'},
 'Chevrolet Camaro ZL1':{catalogYear:2018,url:'assets/models/chevrolet-camaro-zl1.glb',credit:'Kris Tong'},
 'Dodge Challenger SRT Hellcat':{catalogYear:2023,url:'assets/models/dodge-challenger-srt-hellcat.glb',credit:'Grzybek'},
 'Toyota Supra A80':{catalogYear:1998,url:'assets/models/toyota-supra-a80.glb',credit:'Martin Trafas (TinoD2)'},
 'Mazda MX-5 NA':{catalogYear:1992,url:'assets/models/mazda-mx5-na.glb.b64',parts:3,credit:'SPDWKS (Speedy-Works)'},
 'Nissan Silvia S15':{catalogYear:2000,url:'assets/models/nissan-silvia-s15.glb.b64',parts:2,credit:'IVA (dxmhl)',yaw:Math.PI},
 'Toyota MR2 SW20':{catalogYear:1993,url:'assets/models/toyota-mr2-sw20.glb.b64',parts:10,credit:'_shobh19 (s0h1o9b)',yaw:Math.PI},
 'BMW M3 E46':{catalogYear:2003,url:'assets/models/bmw-m3-e46.glb.b64',parts:3,credit:'BRIKKER (daniklyz)',yaw:Math.PI},
 'Nissan 350Z':{catalogYear:2003,url:'assets/models/nissan-350z.glb.b64',parts:4,credit:'Blue3D (Blueberry12)'},
 'Toyota Chaser JZX100':{catalogYear:1998,url:'assets/models/toyota-chaser-jzx100.glb.b64',parts:5,credit:'Blue3D (Blueberry12)'},
 'Ford Mustang GT':{catalogYear:2005,url:'assets/models/ford-mustang-gt-2005-imperial.glb.b64',parts:3,credit:'ImperialBlue3D'},
 'Tesla Model S Plaid':{catalogYear:2022,url:'assets/models/tesla-model-s-plaid.glb.b64',parts:5,credit:'slowpoly'},
 'BMW M3 Competition M xDrive':{catalogYear:2021,url:'assets/models/bmw-g80-sharky.glb.b64',parts:2,credit:'SharkyStudios (sharkycat109)'},
 'Pagani Huayra':{catalogYear:2013,url:'assets/models/pagani-huayra-tjk.glb.b64',parts:7,credit:'MrTjk',yaw:Math.PI},
 'Mazda MX-5 Miata Sport':{catalogYear:2024,url:'assets/models/mazda-mx5-nd-mauro.glb.b64',parts:3,credit:'Mauro3D (maurogsw)',yaw:Math.PI},
 'Lamborghini Aventador':{catalogYear:2017,url:'assets/models/lamborghini-aventador-sebbelon.glb.b64',parts:2,credit:'sebbelon',yaw:Math.PI},
 'Mitsubishi Lancer Evo IX':{catalogYear:2006,url:'assets/models/mitsubishi-evo-ix-marksform.glb.b64',parts:4,credit:'marksform'},
 'McLaren 720S':{catalogYear:2017,url:'assets/models/mclaren-720s-shobh.glb.b64',parts:8,credit:'_shobh19 (s0h1o9b)',yaw:Math.PI},
 'Honda NSX':{catalogYear:1997,url:'assets/models/honda-nsx-jasmin.glb.b64',parts:4,credit:'Jasmin Daniel (jasmin.daniel)',yaw:Math.PI},
 'Mazda RX-7 FD Veilside':{catalogYear:1999,url:'assets/models/mazda-rx7-veilside-giu-packed1.glb.b64',parts:7,credit:'giuffridamassimino',yaw:Math.PI}
};

// Reviewed different-car approximations (user-approved 23 Nov 2026). Each reuses an existing body; stats, IDs and saves are unchanged.
(function(){const A=[["Chevrolet Corvette E-Ray", 2024, "Chevrolet Corvette Stingray", "Corvette C8 Stingray", "VISUAL SUBSTITUTE: Corvette C8 Stingray body, NOT a E-Ray. The E-Ray is about 3.6 in wider (Z06-style widebody) with a different front fascia. E-Ray stats are retained.", "بديل شكلي: هيكل Corvette C8 Stingray، مش E-Ray. الـE-Ray أعرض بحوالي 9 سم (بودي واسع زي الـZ06) ومقدمتها مختلفة شوية. المواصفات بتاعة E-Ray."], ["Chevrolet Corvette Z06", 2024, "Chevrolet Corvette Stingray", "Corvette C8 Stingray", "VISUAL SUBSTITUTE: Corvette C8 Stingray body, NOT a Z06. The Z06 has a wider body, different front and rear fascias and a centre-exit exhaust. Z06 stats are retained.", "بديل شكلي: هيكل Corvette C8 Stingray، مش Z06. الـZ06 بودي أعرض ومقدمة وخلفية مختلفة وعادم في النص. المواصفات بتاعة Z06."], ["Nissan GT-R NISMO", 2024, "Nissan GT-R Premium", "Nissan R35 (2017-era shape)", "VISUAL SUBSTITUTE: Nissan R35 (2017-era shape) body, NOT a GT-R NISMO. NISMO has its own carbon fascias, trunk lid and swan-neck rear spoiler; 2024 fascias were also redesigned. GT-R NISMO stats are retained.", "بديل شكلي: هيكل Nissan R35 (2017-era shape)، مش GT-R NISMO. الـNISMO ليها صدّامات وغطاء شنطة وجناح خلفي swan-neck من الكربون، وصدّامات 2024 اتغيرت عن الشكل المعروض. المواصفات بتاعة GT-R NISMO."], ["Hyundai IONIQ 5 N", 2025, "Hyundai IONIQ 5 Standard Range", "Hyundai IONIQ 5", "VISUAL SUBSTITUTE: Hyundai IONIQ 5 body, NOT a IONIQ 5 N. The N is about 50 mm wider, 20 mm lower and 80 mm longer, with a larger rear spoiler and its own front fascia. IONIQ 5 N stats are retained.", "بديل شكلي: هيكل Hyundai IONIQ 5، مش IONIQ 5 N. الـN أعرض بـ50 مم وأوطى بـ20 مم وأطول بـ80 مم، بجناح خلفي أكبر ومقدمة خاصة. المواصفات بتاعة IONIQ 5 N."], ["McLaren 750S", 2024, "McLaren 720S", "McLaren 720S", "VISUAL SUBSTITUTE: McLaren 720S body, NOT a 750S. The 750S has a lower nose with a longer splitter, narrower headlight intakes, new side intakes and a larger rear wing. 750S stats are retained.", "بديل شكلي: هيكل McLaren 720S، مش 750S. الـ750S مقدمتها أوطى بسبليتر أطول، فتحات فوانيس أضيق، فتحات هوا جانبية جديدة وجناح خلفي أكبر. المواصفات بتاعة 750S."], ["Porsche 911 Carrera S", 2020, "Porsche 911 Turbo S", "Porsche 911 (992) Turbo S", "VISUAL SUBSTITUTE: Porsche 911 (992) Turbo S body, NOT a 911 Carrera S. The Turbo S is wider at the rear with side air intakes and its own front and rear aprons. 911 Carrera S stats are retained.", "بديل شكلي: هيكل Porsche 911 (992) Turbo S، مش 911 Carrera S. الـTurbo S أعرض من ورا بفتحات هوا جانبية وصدّامات أمامية وخلفية خاصة. المواصفات بتاعة 911 Carrera S."], ["Mazda MX-5 Miata RF Club", 2024, "Mazda MX-5 Miata Sport", "Mazda MX-5 ND roadster (open top)", "VISUAL SUBSTITUTE: Mazda MX-5 ND roadster (open top) body, NOT a MX-5 Miata RF. The RF has a power-retractable fastback hardtop; this body is the open-top roadster without that roof. MX-5 Miata RF stats are retained.", "بديل شكلي: هيكل Mazda MX-5 ND roadster (open top)، مش MX-5 Miata RF. الـRF ليها سقف صلب fastback بيتفتح بالكهربا، والمجسم ده الرودستر المكشوف من غير السقف. المواصفات بتاعة MX-5 Miata RF."], ["Ford Mustang EcoBoost", 2024, "Ford Mustang GT|2024", "Ford Mustang S650 GT", "VISUAL SUBSTITUTE: Ford Mustang S650 GT body, NOT a Mustang EcoBoost. This is the GT body: the EcoBoost has a calmer front fascia, a flat hood without vents and dual exhaust tips instead of the GT's hood vents, splitter and quad tips. Mustang EcoBoost stats are retained.", "بديل شكلي: هيكل Ford Mustang S650 GT، مش Mustang EcoBoost. المجسم هو الـGT: الـEcoBoost مقدمتها أهدى وغطاؤها مسطح من غير فتحات وعادمها بخرجين، مش فتحات وسبليتر وأربع خرجات الـGT. المواصفات بتاعة Mustang EcoBoost."]];
 A.forEach(a=>{const s=MODELS[a[2]];if(!s)throw Error('missing source body '+a[2]);const m=Object.assign({},s,{catalogYear:a[1],approximation:true,sourceBody:a[3],noteEn:a[4],noteAr:a[5]});delete m.catalogName;MODELS[a[0]+(a[0]==='Ford Mustang GT'?'|'+a[1]:'')]=m;});})();
// The year is a catalog routing constraint, not a claim of exact asset year/trim.

// Original model-specific geometry, accepted simplified style. No generic-car relabeling.
const ORIGINAL_BUILDERS={
'original:z-nismo-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#a6a9ac',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#45494c',.55,.32),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2024 Z NISMO variant. Distinct nose, grille, canards, sills, rear aero and spoiler.
// Manufacturer overall envelope173.2x73.6x51.8in,100.4inwheelbase; details deliberately simplified.
// All surfacing original; photographic images are references, never textures.
const sections=[[-2.190,.68,.57,.76],[-2.11,.81,.67,.85],[-1.87,.88,.75,.88],[-1.50,.91,.85,.918],[-1.27,.94,.88,.922],[-.95,.96,.86,.907],[-.52,.96,.78,.874],[0,.94,.75,.866],[.55,.94,.79,.876],[1.0,.94,.86,.91],[1.28,.94,.89,.922],[1.56,.91,.88,.907],[1.88,.85,.82,.866],[2.11,.79,.76,.825],[2.190,.75,.70,.775]];
function sample(x,i){for(let j=1;j<sections.length;j++)if(x<=sections[j][0]){let a=sections[j-1],b=sections[j],f=(x-a[0])/(b[0]-a[0]);return a[i]+(b[i]-a[i])*f}return sections.at(-1)[i]}
function topY(x,z){let w=sample(x,3),q=Math.abs(z)/w;return sample(x,1)*(1-q*q)+sample(x,2)*q*q}
function topW(x){return sample(x,3)}
// Main upper body. Each strip interpolates round shoulders and wheel-arch crowns.
let vs=[],ids=[],nx=102,nz=36;
for(let i=0;i<=nx;i++){let x=-2.19+4.38*i/nx,w=topW(x);for(let j=0;j<=nz;j++){let q=-1+2*j/nz;vs.push(x,topY(x,q*w),q*w)}}
for(let i=0;i<nx;i++)for(let j=0;j<nz;j++){let a=i*(nz+1)+j;ids.push(a,a+1,a+nz+1,a+1,a+nz+2,a+nz+1)}
let upper=new T.BufferGeometry();upper.setAttribute('position',new T.Float32BufferAttribute(vs,3));upper.setIndex(ids);upper.computeVertexNormals();mesh(upper,paint);
const axles=[-1.275,1.275],wr=.341,wy=.345,ar=.38;
function bottom(x){let b=.265;for(let a of axles){let dx=Math.abs(x-a);if(dx<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-dx*dx))}return b}
// Side grids omit actual wheel openings rather than hiding tires behind a slab.
for(let s of [-1,1]){let v=[],ix=[],n=200,ny=9;for(let i=0;i<=n;i++){let x=-2.19+4.38*i/n,b=bottom(x),t=sample(x,2),w=topW(x);for(let j=0;j<=ny;j++){let u=j/ny,z=w-.042*Math.sin(u*Math.PI)-.028*(1-u);v.push(x,b+(t-b)*u,s*z)}}for(let i=0;i<n;i++)for(let j=0;j<ny;j++){let a=i*(ny+1)+j;ix.push(a,a+1,a+ny+1,a+1,a+ny+2,a+ny+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();mesh(g,paint)}
box(0,.22,0,3.8,.09,1.45,black);
// Cabin smooth cross sections from hood base over curved roof to fastback hatch.
const roof=[[-.63,.975,.73],[-.47,1.08,.702],[-.23,1.235,.652],[.02,1.300,.627],[.25,1.315,.618],[.50,1.288,.633],[.76,1.21,.669],[1.02,1.10,.708],[1.29,.975,.75],[1.52,.875,.783]];
function cabinY(x){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],u=(x-a[0])/(b[0]-a[0]);return a[1]+(b[1]-a[1])*u}return roof.at(-1)[1]}
function cabinW(x){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],u=(x-a[0])/(b[0]-a[0]);return a[2]+(b[2]-a[2])*u}return roof.at(-1)[2]}
function cabinPoint(x,q){return[x,cabinY(x)-.072*q*q,q*cabinW(x)]}
let rv=[],ri=[],rn=75,rw=22;for(let i=0;i<=rn;i++){let x=-.63+2.15*i/rn;for(let j=0;j<=rw;j++)rv.push(...cabinPoint(x,-1+2*j/rw))}for(let i=0;i<rn;i++)for(let j=0;j<rw;j++){let a=i*(rw+1)+j;ri.push(a,a+1,a+rw+1,a+1,a+rw+2,a+rw+1)}let rg=new T.BufferGeometry();rg.setAttribute('position',new T.Float32BufferAttribute(rv,3));rg.setIndex(ri);rg.computeVertexNormals();mesh(rg,black);
// Glazing overlays follow curved cabin top. No intersecting opaque windshield plane.
function canopy(a,b,ma){let v=[],ix=[],n=22,m=18;for(let i=0;i<=n;i++){let x=a+(b-a)*i/n;for(let j=0;j<=m;j++){let p=cabinPoint(x,(-1+2*j/m)*.90);p[1]+=.006;v.push(...p)}}for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();mesh(g,ma)}
canopy(-.60,-.20,glass);canopy(.63,1.40,glass);
// Specific side-window outline and triangular rear quarter glass.
for(let s of [-1,1]){
 let lower=[[-.60,.89,.825],[-.28,.88,.826],[.17,.865,.829],[.57,.855,.831],[.98,.87,.813],[1.31,.88,.795]],upperp=[[-.60,.945,.734],[-.28,1.157,.67],[.17,1.247,.622],[.57,1.195,.641],[.98,1.055,.706],[1.31,.902,.755]];
 // The pillar panels bridge rounded roof rim to the upper door shoulder.
 for(let i=1;i<lower.length;i++){let a=lower[i-1],b=lower[i],c=upperp[i],d=upperp[i-1];poly([[a[0],a[1],s*a[2]],[b[0],b[1],s*b[2]],[c[0],c[1],s*c[2]],[d[0],d[1],s*d[2]]],black)}
 poly([[-.51,.911,s*.82],[-.24,1.146,s*.674],[.14,1.218,s*.645],[.58,1.17,s*.668],[.69,.893,s*.82]],glass);
 poly([[.76,.897,s*.817],[.67,1.149,s*.68],[1.22,.916,s*.787]],glass);
 line([[-.59,.962,s*.738],[-.28,1.184,s*.673],[.17,1.265,s*.633],[.57,1.214,s*.651],[.98,1.075,s*.714],[1.34,.911,s*.773]],chrome,.012);
 line([[-.54,.874,s*.86],[-.5,.39,s*.878],[-.32,.33,s*.882],[.61,.33,s*.885],[.84,.39,s*.883],[.91,.81,s*.87]],seam,.004);
 // Vertical handle inset behind side window.
 box(.84,.80,s*.884,.036,.13,.013,black,.01);
 box(-.42,.894,s*.91,.04,.048,.14,black);box(-.42,.965,s*.976,.21,.10,.115,black,.023);
 box(.08,.28,s*.855,1.67,.055,.10,black,.015);
 for(let a of axles){let pts=[];for(let i=0;i<=34;i++){let t=Math.PI*i/34;pts.push([a+ar*Math.cos(t),wy+ar*Math.sin(t),s*(topW(a+ar*Math.cos(t))+.004)])}line(pts,paint,.014)}
 // brake caliper,visible through split spokes
 box(1.275,.36,s*.824,.085,.17,.045,red,.01);box(-1.275,.36,s*.824,.085,.17,.045,red,.01);
}
// Hood shut lines taper toward nose.
for(let s of [-1,1]){let pts=[];for(let i=0;i<=24;i++){let x=-1.99+1.37*i/24,z=s*(.56+.09*i/24);pts.push([x,topY(x,z)+.006,z])}line(pts,seam,.003)}
// Extended G-Nose with a narrow upper grille slot, trapezoid main opening and corner canards.
for(let side of [-1,1]){
 poly([[-2.19,.69,0],[-2.19,.70,side*.60],[-2.15,.62,side*.84],[-2.17,.30,side*.89],[-2.24,.28,side*.66],[-2.25,.62,side*.57]],paint);
 poly([[-2.24,.65,0],[-2.24,.65,side*.58],[-2.19,.70,side*.60],[-2.19,.69,0]],paint);
 poly([[-2.25,.31,side*.59],[-2.16,.30,side*.90],[-1.93,.35,side*.92],[-2.05,.42,side*.88]],black);
 poly([[-2.17,.44,side*.82],[-2.11,.45,side*.90],[-1.94,.51,side*.93],[-1.99,.53,side*.89]],black);
 line([[-2.27,.265,side*.63],[-2.17,.267,side*.92],[-1.90,.30,side*.95]],red,.011);
 box(.1,.27,side*.907,1.84,.055,.12,black,.012);
 line([[-.88,.244,side*.95],[.82,.244,side*.95]],red,.009);
 box(-.42,.95,side*1.037,.18,.016,.017,red);
}
poly([[-2.256,.312,-.66],[-2.256,.312,.66],[-2.256,.50,.60],[-2.256,.59,.48],[-2.256,.59,-.48],[-2.256,.50,-.60]],black);
box(-2.235,.604,0,.032,.052,1.02,paint,.006);box(-2.24,.64,0,.028,.025,1.13,black,.012);
box(-2.225,.284,0,.19,.035,1.78,black,.008);
line([[-2.32,.267,-.65],[-2.32,.267,.65]],red,.011);
for(let row=0;row<4;row++)for(let col=0;col<13;col++){
 let cy=.333+row*.064,cz=-.59+col*.094+(row%2)*.047;
 if(Math.abs(cz)<(.66-(cy-.31)*.62)){let pts=[];for(let k=0;k<=6;k++){let a=k*Math.PI/3;pts.push([-2.263,cy+Math.cos(a)*.035,cz+Math.sin(a)*.042])}line(pts,black,.003)}
}
// Teardrop lamp pockets sit on curved fender tops, with two separate light arcs.
for(let s of [-1,1]){
 let pts=[[-2.10,s*.61],[-2.00,s*.83],[-1.65,s*.87],[-1.82,s*.64]];
 poly(pts.map(([x,z])=>[x,topY(x,z)+.014,z]),black);
 let a=[[-2.066,s*.632],[-1.967,s*.806],[-1.69,s*.847]],b=[[-2.04,s*.628],[-1.89,s*.666],[-1.797,s*.738]];
 for(let p of [a,b])line(p.map(([x,z])=>[x,topY(x,z)+.028,z]),lamp,.013);
 box(-2.12,.43,s*.787,.013,.13,.025,black,.008);
}
// Rear Kamm tail with full dark panel and paired horizontal pill lamps.
box(2.145,.55,0,.10,.44,1.58,paint,.045);box(2.206,.72,0,.022,.19,1.50,black,.025);box(2.20,.31,0,.13,.19,1.55,black,.03);
for(let s of [-1,1])for(let y of [.682,.757]){box(2.232,y,s*.486,.018,.025,.48,red)}
box(2.28,.44,0,.018,.14,.34,chrome,.01);
for(let s of [-1,1]){let o=mesh(new T.CylinderGeometry(.058,.063,.14,20),chrome,2.28,.265,s*.61);o.rotation.z=Math.PI/2;let e=mesh(new T.CylinderGeometry(.045,.045,.145,20),black,2.288,.265,s*.61);e.rotation.z=Math.PI/2;}
// Three-piece taller/wider deck spoiler, with outer pieces on rear fenders.
box(2.105,.827,0,.20,.037,1.44,black,.012);
for(let side of [-1,1]){
 let wing=box(2.045,.816,side*.80,.31,.035,.20,black,.01);wing.rotation.y=side*.13;
 poly([[2.18,.30,side*.62],[2.20,.30,side*.91],[1.94,.33,side*.94],[1.97,.40,side*.86]],black);
 line([[2.24,.273,side*.64],[2.23,.273,side*.91],[1.94,.31,side*.95]],red,.01);
}
line([[2.27,.262,-.60],[2.27,.262,.60]],red,.009);
// Simplified black NISMO-style wheel treatment. Fine spoke/RAYS detail is not exact.
for(let x of axles)for(let s of [-1,1]){let z=s*.793;let o=mesh(new T.CylinderGeometry(wr,wr,.24,44),tire,x,wy,z);o.rotation.x=Math.PI/2;let out=s*.918;
mesh(new T.TorusGeometry(.264,.016,8,44),chrome,x,wy,out);
let disc=mesh(new T.CylinderGeometry(.222,.222,.015,36),chrome,x,wy,out-s*.035);disc.rotation.x=Math.PI/2;
for(let a=0;a<5;a++)for(let delta of [-.08,.08]){let th=a*Math.PI*2/5+delta,sp=box(x+Math.sin(th)*.139,wy+Math.cos(th)*.139,out+s*.013,.027,.235,.022,black,.005);sp.rotation.z=-th;}
let hub=mesh(new T.CylinderGeometry(.057,.057,.027,16),chrome,x,wy,out+s*.019);hub.rotation.x=Math.PI/2;
for(let a=0;a<40;a++){let th=a*Math.PI/20;let b=box(x+Math.sin(th)*.340,wy+Math.cos(th)*.340,z,.019,.009,.20,black);b.rotation.z=-th;}
}

const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;},

'original:landcruiser-j250-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#b3a58b',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Measured envelope 4.925m x1.98m x1.935m. Axles separated 2.85m.
let sh=new T.Shape();sh.moveTo(-2.45,.62);sh.lineTo(-2.45,1.12);sh.quadraticCurveTo(-2.4,1.24,-2.25,1.25);sh.lineTo(-.92,1.31);sh.lineTo(-.6,1.34);sh.lineTo(2.25,1.34);sh.quadraticCurveTo(2.44,1.3,2.45,1.14);sh.lineTo(2.45,.62);sh.lineTo(2.07,.62);
for(let cx of [1.425,-1.425]){sh.lineTo(cx+.58,.62);sh.lineTo(cx+.55,.68);sh.lineTo(cx+.38,.91);sh.lineTo(cx-.36,.91);sh.lineTo(cx-.56,.68);sh.lineTo(cx-.59,.62)}sh.lineTo(-2.45,.62);
mesh(new T.ExtrudeGeometry(sh,{depth:1.84,bevelEnabled:true,bevelSize:.045,bevelThickness:.035,bevelSegments:3,steps:1,curveSegments:10}),paint,0,0,-.92);
box(0,.42,0,4.0,.18,1.35,black);box(-1.65,1.275,0,1.43,.06,1.76,paint,.035);
// Cabin planes form explicit sloped sides and windshield, rather than intersecting boxes.
const sections=[[-.94,1.32,1.34,.9],[-.43,1.32,1.90,.82],[2.12,1.32,1.90,.82],[2.34,1.30,1.46,.88]];
for(let i=0;i<sections.length-1;i++){let[a,b]=[sections[i],sections[i+1]];for(let s of [-1,1])poly([[a[0],a[1],s*.92],[a[0],a[2],s*a[3]],[b[0],b[2],s*b[3]],[b[0],b[1],s*.92]],paint);poly([[a[0],a[2],-a[3]],[a[0],a[2],a[3]],[b[0],b[2],b[3]],[b[0],b[2],-b[3]]],paint)}
box(.84,1.906,0,2.52,.055,1.64,paint,.035);
poly([[-.94,1.365,-.804],[-.94,1.365,.804],[-.489,1.86,.757],[-.489,1.86,-.757]],glass);
poly([[2.38,1.435,-.79],[2.38,1.435,.79],[2.17,1.84,.75],[2.17,1.84,-.75]],glass);
for(let s of [-1,1]){
 // side window belt rises behind second door, characteristic J250 notch
 const win=(pts)=>poly(pts.map(([x,y])=>[x,y,s*(.926-(y-1.32)*.172)]),glass);
 win([[-.79,1.37],[-.39,1.843],[.24,1.843],[.24,1.366]]);
 win([[.31,1.366],[.31,1.843],[1.21,1.843],[1.24,1.46],[1.02,1.385]]);
 win([[1.33,1.46],[1.30,1.843],[2.00,1.843],[2.19,1.48]]);
 line([[-.8,1.36,s*.93],[.25,1.36,s*.93],[1.03,1.38,s*.927],[1.3,1.46,s*.91],[2.16,1.47,s*.9]],black,.014);
 for(let xx of [-.8,.28,1.3])line([[xx,1.33,s*.96],[xx,.66,s*.963]],seam,.004);
 box(-.06,1.25,s*.979,.19,.038,.035,black,.01);box(1.12,1.25,s*.979,.19,.038,.035,black,.01);
 box(-.75,1.34,s*1.01,.08,.09,.18,black,.02);box(-.72,1.48,s*1.09,.22,.21,.15,black,.025);
 box(0,.48,s*.98,2.06,.065,.21,black,.02);
 line([[1.81,1.24,s*.971],[2.08,1.24,s*.971],[2.08,1.05,s*.971],[1.81,1.05,s*.971],[1.81,1.24,s*.971]],seam,.004);
 // trapezoidal wheel arch cladding as segmented strips, with real empty wheel holes
 for(let cx of [-1.425,1.425]){let inner=[[cx-.59,.59],[cx-.59,.72],[cx-.38,.94],[cx+.38,.94],[cx+.59,.72],[cx+.59,.59]],outer=[[cx-.68,.59],[cx-.68,.77],[cx-.43,1.035],[cx+.43,1.035],[cx+.68,.77],[cx+.68,.59]];for(let i=1;i<inner.length;i++)poly([[...inner[i-1],s*1.005],[...outer[i-1],s*1.005],[...outer[i],s*1.005],[...inner[i],s*1.005]].map(([x,y,z])=>[x,y,z]),black)}
 line([[-.78,.59,s*.96],[.78,.59,s*.96]],black,.045);
}
// Lamps and squared grille, front faces x=-2.47
box(-2.47,.91,0,.08,.50,1.87,black,.035);box(-2.45,.61,0,.16,.17,1.88,black,.035);box(-2.52,.51,0,.07,.11,.9,chrome,.018);
box(-2.49,1.112,0,.045,.28,1.0,black,.025);
for(let y of [1.02,1.07,1.12,1.17,1.22])box(-2.518,y,0,.014,.008,.96,seam);
for(let z=-.45;z<=.46;z+=.075)box(-2.526,1.12,z,.014,.22,.008,seam);
function textPlane(text,x,y,z,w,h,ry){let c=document.createElement('canvas');c.width=512;c.height=128;let ctx=c.getContext('2d');ctx.fillStyle='#aeb4ae';ctx.textAlign='center';ctx.font='bold 66px Arial';ctx.fillText(text,256,86);let tx=new T.CanvasTexture(c);let o=mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:tx,transparent:true,side:T.DoubleSide}),x,y,z);o.rotation.y=ry;return o}
textPlane('TOYOTA',-2.54,1.12,0,.49,.12,-Math.PI/2);
for(let s of [-1,1]){box(-2.48,1.12,s*.71,.065,.32,.36,black,.02);let o=mesh(new T.TorusGeometry(.119,.015,7,36),lamp,-2.524,1.125,s*.70);o.rotation.y=Math.PI/2;let c=mesh(new T.CylinderGeometry(.092,.092,.012,32),glass,-2.525,1.125,s*.70);c.rotation.z=Math.PI/2;box(-2.527,1.12,s*.904,.015,.19,.036,amber);box(-2.54,.78,s*.7,.015,.06,.10,lamp,.01);}
box(-2.55,.83,0,.025,.15,.32,chrome,.01);
// Tailgate and lamps. No foreign rear branding.
box(2.45,.72,0,.13,.24,1.86,black,.035);box(2.49,.52,0,.12,.13,1.12,chrome,.02);
box(2.50,1.39,0,.045,.065,1.42,black,.012);textPlane('TOYOTA',2.53,1.39,0,.36,.058,Math.PI/2);
box(2.51,1.13,0,.04,.21,.59,black,.02);box(2.54,1.13,0,.01,.14,.38,chrome,.008);
for(let s of [-1,1]){box(2.51,1.16,s*.825,.11,.40,.225,black,.025);box(2.575,1.26,s*.825,.015,.13,.17,red,.018);box(2.575,1.15,s*.825,.015,.035,.17,chrome);box(2.575,1.045,s*.825,.015,.13,.17,red,.018)}
line([[2.54,.89,-.67],[2.54,1.4,-.67],[2.54,1.4,.67],[2.54,.89,.67]],seam,.005);
box(2.15,1.925,0,.3,.047,1.71,paint,.025);box(2.16,1.89,0,.014,.024,.32,red);line([[2.28,1.48,0],[2.29,1.53,.44]],black,.012);
// Wheels, recessed alloys and off-road tread.
for(let x of [-1.425,1.425])for(let s of [-1,1]){let z=s*.865;let o=mesh(new T.CylinderGeometry(.405,.405,.25,40,1),tire,x,.405,z);o.rotation.x=Math.PI/2;let out=s*1.003;
let ring=mesh(new T.TorusGeometry(.30,.07,8,40),tire,x,.405,out);let rim=mesh(new T.CylinderGeometry(.255,.255,.024,32),black,x,.405,out);rim.rotation.x=Math.PI/2;
for(let a=0;a<10;a++){let th=a*Math.PI/5;let sp=box(x+Math.sin(th)*.148,.405+Math.cos(th)*.148,out+s*.018,.042,.22,.018,chrome,.005);sp.rotation.z=-th;}
let hub=mesh(new T.CylinderGeometry(.076,.076,.035,20),black,x,.405,out+s*.03);hub.rotation.x=Math.PI/2;
for(let a=0;a<36;a++){let th=a*Math.PI/18;for(let zz of [-.075,.075]){let b=box(x+Math.sin(th)*.401,.405+Math.cos(th)*.401,z+zz,.045,.025,.085,black);b.rotation.z=-th;}}
}

const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;},
'original:z-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#c42a38',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Z Performance envelope:172.4x72.6x51.8in,100.4inwheelbase. Metres calculated at.0254/in.
// All surfacing original; photographic images are references, never textures.
const sections=[[-2.190,.68,.57,.76],[-2.11,.81,.67,.85],[-1.87,.88,.75,.88],[-1.50,.91,.85,.918],[-1.27,.94,.88,.922],[-.95,.96,.86,.907],[-.52,.96,.78,.874],[0,.94,.75,.866],[.55,.94,.79,.876],[1.0,.94,.86,.91],[1.28,.94,.89,.922],[1.56,.91,.88,.907],[1.88,.85,.82,.866],[2.11,.79,.76,.825],[2.190,.75,.70,.775]];
function sample(x,i){for(let j=1;j<sections.length;j++)if(x<=sections[j][0]){let a=sections[j-1],b=sections[j],f=(x-a[0])/(b[0]-a[0]);return a[i]+(b[i]-a[i])*f}return sections.at(-1)[i]}
function topY(x,z){let w=sample(x,3),q=Math.abs(z)/w;return sample(x,1)*(1-q*q)+sample(x,2)*q*q}
function topW(x){return sample(x,3)}
// Main upper body. Each strip interpolates round shoulders and wheel-arch crowns.
let vs=[],ids=[],nx=102,nz=36;
for(let i=0;i<=nx;i++){let x=-2.19+4.38*i/nx,w=topW(x);for(let j=0;j<=nz;j++){let q=-1+2*j/nz;vs.push(x,topY(x,q*w),q*w)}}
for(let i=0;i<nx;i++)for(let j=0;j<nz;j++){let a=i*(nz+1)+j;ids.push(a,a+1,a+nz+1,a+1,a+nz+2,a+nz+1)}
let upper=new T.BufferGeometry();upper.setAttribute('position',new T.Float32BufferAttribute(vs,3));upper.setIndex(ids);upper.computeVertexNormals();mesh(upper,paint);
const axles=[-1.275,1.275],wr=.341,wy=.345,ar=.38;
function bottom(x){let b=.265;for(let a of axles){let dx=Math.abs(x-a);if(dx<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-dx*dx))}return b}
// Side grids omit actual wheel openings rather than hiding tires behind a slab.
for(let s of [-1,1]){let v=[],ix=[],n=200,ny=9;for(let i=0;i<=n;i++){let x=-2.19+4.38*i/n,b=bottom(x),t=sample(x,2),w=topW(x);for(let j=0;j<=ny;j++){let u=j/ny,z=w-.042*Math.sin(u*Math.PI)-.028*(1-u);v.push(x,b+(t-b)*u,s*z)}}for(let i=0;i<n;i++)for(let j=0;j<ny;j++){let a=i*(ny+1)+j;ix.push(a,a+1,a+ny+1,a+1,a+ny+2,a+ny+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();mesh(g,paint)}
box(0,.22,0,3.8,.09,1.45,black);
// Cabin smooth cross sections from hood base over curved roof to fastback hatch.
const roof=[[-.63,.975,.73],[-.47,1.08,.702],[-.23,1.235,.652],[.02,1.300,.627],[.25,1.315,.618],[.50,1.288,.633],[.76,1.21,.669],[1.02,1.10,.708],[1.29,.975,.75],[1.52,.875,.783]];
function cabinY(x){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],u=(x-a[0])/(b[0]-a[0]);return a[1]+(b[1]-a[1])*u}return roof.at(-1)[1]}
function cabinW(x){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],u=(x-a[0])/(b[0]-a[0]);return a[2]+(b[2]-a[2])*u}return roof.at(-1)[2]}
function cabinPoint(x,q){return[x,cabinY(x)-.072*q*q,q*cabinW(x)]}
let rv=[],ri=[],rn=75,rw=22;for(let i=0;i<=rn;i++){let x=-.63+2.15*i/rn;for(let j=0;j<=rw;j++)rv.push(...cabinPoint(x,-1+2*j/rw))}for(let i=0;i<rn;i++)for(let j=0;j<rw;j++){let a=i*(rw+1)+j;ri.push(a,a+1,a+rw+1,a+1,a+rw+2,a+rw+1)}let rg=new T.BufferGeometry();rg.setAttribute('position',new T.Float32BufferAttribute(rv,3));rg.setIndex(ri);rg.computeVertexNormals();mesh(rg,black);
// Glazing overlays follow curved cabin top. No intersecting opaque windshield plane.
function canopy(a,b,ma){let v=[],ix=[],n=22,m=18;for(let i=0;i<=n;i++){let x=a+(b-a)*i/n;for(let j=0;j<=m;j++){let p=cabinPoint(x,(-1+2*j/m)*.90);p[1]+=.006;v.push(...p)}}for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();mesh(g,ma)}
canopy(-.60,-.20,glass);canopy(.63,1.40,glass);
// Specific side-window outline and triangular rear quarter glass.
for(let s of [-1,1]){
 let lower=[[-.60,.89,.825],[-.28,.88,.826],[.17,.865,.829],[.57,.855,.831],[.98,.87,.813],[1.31,.88,.795]],upperp=[[-.60,.945,.734],[-.28,1.157,.67],[.17,1.247,.622],[.57,1.195,.641],[.98,1.055,.706],[1.31,.902,.755]];
 // The pillar panels bridge rounded roof rim to the upper door shoulder.
 for(let i=1;i<lower.length;i++){let a=lower[i-1],b=lower[i],c=upperp[i],d=upperp[i-1];poly([[a[0],a[1],s*a[2]],[b[0],b[1],s*b[2]],[c[0],c[1],s*c[2]],[d[0],d[1],s*d[2]]],black)}
 poly([[-.51,.911,s*.82],[-.24,1.146,s*.674],[.14,1.218,s*.645],[.58,1.17,s*.668],[.69,.893,s*.82]],glass);
 poly([[.76,.897,s*.817],[.67,1.149,s*.68],[1.22,.916,s*.787]],glass);
 line([[-.59,.962,s*.738],[-.28,1.184,s*.673],[.17,1.265,s*.633],[.57,1.214,s*.651],[.98,1.075,s*.714],[1.34,.911,s*.773]],chrome,.012);
 line([[-.54,.874,s*.86],[-.5,.39,s*.878],[-.32,.33,s*.882],[.61,.33,s*.885],[.84,.39,s*.883],[.91,.81,s*.87]],seam,.004);
 // Vertical handle inset behind side window.
 box(.84,.80,s*.884,.036,.13,.013,black,.01);
 box(-.42,.894,s*.91,.04,.048,.14,black);box(-.42,.965,s*.976,.21,.10,.115,black,.023);
 box(.08,.28,s*.855,1.67,.055,.10,black,.015);
 for(let a of axles){let pts=[];for(let i=0;i<=34;i++){let t=Math.PI*i/34;pts.push([a+ar*Math.cos(t),wy+ar*Math.sin(t),s*(topW(a+ar*Math.cos(t))+.004)])}line(pts,paint,.014)}
 // brake caliper,visible through split spokes
 box(1.275,.36,s*.824,.085,.17,.045,red,.01);box(-1.275,.36,s*.824,.085,.17,.045,red,.01);
}
// Hood shut lines taper toward nose.
for(let s of [-1,1]){let pts=[];for(let i=0;i<=24;i++){let x=-1.99+1.37*i/24,z=s*(.56+.09*i/24);pts.push([x,topY(x,z)+.006,z])}line(pts,seam,.003)}
// Front fascia is contoured, dark rectangular central mouth below long hood.
for(let s of [-1,1])poly([[-2.19,.69,0],[-2.16,.74,s*.63],[-2.12,.62,s*.83],[-2.15,.32,s*.84],[-2.19,.29,s*.57],[-2.205,.67,s*.57]],paint);
box(-2.20,.465,0,.04,.34,1.18,black,.014);box(-2.18,.278,0,.17,.05,1.65,black,.012);
for(let y=.34;y<.63;y+=.052)box(-2.228,y,0,.014,.013,1.09,seam,.004);
for(let z=-.51;z<.53;z+=.13)box(-2.234,.468,z,.014,.29,.008,black);
// Teardrop lamp pockets sit on curved fender tops, with two separate light arcs.
for(let s of [-1,1]){
 let pts=[[-2.10,s*.61],[-2.00,s*.83],[-1.65,s*.87],[-1.82,s*.64]];
 poly(pts.map(([x,z])=>[x,topY(x,z)+.014,z]),black);
 let a=[[-2.066,s*.632],[-1.967,s*.806],[-1.69,s*.847]],b=[[-2.04,s*.628],[-1.89,s*.666],[-1.797,s*.738]];
 for(let p of [a,b])line(p.map(([x,z])=>[x,topY(x,z)+.028,z]),lamp,.013);
 box(-2.12,.43,s*.787,.013,.13,.025,black,.008);
}
// Rear Kamm tail with full dark panel and paired horizontal pill lamps.
box(2.145,.55,0,.10,.44,1.58,paint,.045);box(2.206,.72,0,.022,.19,1.50,black,.025);box(2.20,.31,0,.13,.19,1.55,black,.03);
for(let s of [-1,1])for(let y of [.682,.757]){box(2.232,y,s*.486,.018,.025,.48,red)}
box(2.28,.44,0,.018,.14,.34,chrome,.01);
for(let s of [-1,1]){let o=mesh(new T.CylinderGeometry(.058,.063,.14,20),chrome,2.28,.265,s*.61);o.rotation.z=Math.PI/2;let e=mesh(new T.CylinderGeometry(.045,.045,.145,20),black,2.288,.265,s*.61);e.rotation.z=Math.PI/2;}
box(2.11,.81,0,.14,.027,1.46,paint,.01);
// Nineteen-inch Performance-style wheels, not NISMO aero or wheels.
for(let x of axles)for(let s of [-1,1]){let z=s*.793;let o=mesh(new T.CylinderGeometry(wr,wr,.24,44),tire,x,wy,z);o.rotation.x=Math.PI/2;let out=s*.918;
mesh(new T.TorusGeometry(.264,.016,8,44),chrome,x,wy,out);
let disc=mesh(new T.CylinderGeometry(.222,.222,.015,36),chrome,x,wy,out-s*.035);disc.rotation.x=Math.PI/2;
for(let a=0;a<5;a++)for(let delta of [-.08,.08]){let th=a*Math.PI*2/5+delta,sp=box(x+Math.sin(th)*.139,wy+Math.cos(th)*.139,out+s*.013,.027,.235,.022,black,.005);sp.rotation.z=-th;}
let hub=mesh(new T.CylinderGeometry(.057,.057,.027,16),chrome,x,wy,out+s*.019);hub.rotation.x=Math.PI/2;
for(let a=0;a<40;a++){let th=a*Math.PI/20;let b=box(x+Math.sin(th)*.340,wy+Math.cos(th)*.340,z,.019,.009,.20,black);b.rotation.z=-th;}
}

const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;}
};

function modelForCar(cid){
 const c=CARS[cid];if(!c)return null;
 const m=MODELS[c[0]+"|"+c[1]]||MODELS[c[0]];return m&&m.catalogYear===c[1]?m:null;
}
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
 // Keep three recently used models resident. Clones share their GPU resources.
 const modelCache=new Map(),cachedGeometries=new WeakSet(),CACHE_LIMIT=3;
 let activeModelUrl=null,buildVersion=0;
 function disposeModel(scene){
  const geometries=new Set(),materials=new Set(),textures=new Set();
  scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m))});
  geometries.forEach(x=>{cachedGeometries.delete(x);x.dispose()});
  materials.forEach(m=>{Object.values(m).forEach(v=>{if(v&&v.isTexture)textures.add(v)});m.dispose()});textures.forEach(t=>t.dispose());
 }
 function trimModels(){
  while(modelCache.size>CACHE_LIMIT){
   const oldest=Array.from(modelCache).find(([url,e])=>url!==activeModelUrl&&e.scene);
   if(!oldest)break;modelCache.delete(oldest[0]);disposeModel(oldest[1].scene);
  }
 }
 function cancelOtherDownloads(url){
  for(const [key,e] of modelCache)if(key!==url&&e.phase==='fetch'){modelCache.delete(key);e.controller.abort()}
 }
 function clearStage(){
  const geometries=new Set();g.traverse(o=>{if(o.geometry&&!(o instanceof THREE.Sprite)&&!cachedGeometries.has(o.geometry))geometries.add(o.geometry)});
  while(g.children.length)g.remove(g.children[0]);geometries.forEach(x=>x.dispose());
 }
 function loadGlb(url,parts=0,onProgress=()=>{}){
  if(modelCache.has(url)){const e=modelCache.get(url);modelCache.delete(url);modelCache.set(url,e);return e.promise}
  const entry={controller:new AbortController(),phase:'fetch',scene:null};
  entry.promise=new Promise((res,rej)=>{
   const loader=new THREE.GLTFLoader();if(typeof MeshoptDecoder!=='undefined')loader.setMeshoptDecoder(MeshoptDecoder);
   const done=x=>{entry.scene=x.scene;entry.phase='ready';x.scene.traverse(o=>{if(o.geometry)cachedGeometries.add(o.geometry)});trimModels();res(x.scene)};
   if(ORIGINAL_BUILDERS[url]){try{done({scene:ORIGINAL_BUILDERS[url]()})}catch(e){rej(e)}return}
   const signal=entry.controller.signal;
   const fetchPart=async path=>{const r=await fetch(path,{signal});if(!r.ok)throw Error('Model asset unavailable');return r};
   let completed=0;
   const data=parts?Promise.all(Array.from({length:parts},(_,i)=>fetchPart(url+'.'+i).then(r=>r.text()).then(text=>{onProgress(++completed,parts);return text}))).then(chunks=>{
    const binary=atob(chunks.join('')),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);return bytes.buffer;
   }):fetchPart(url).then(r=>r.arrayBuffer());
   data.then(buffer=>{entry.phase='parse';onProgress(parts||1,parts||1,true);loader.parse(buffer,'',done,rej)}).catch(rej);
  }).catch(error=>{if(modelCache.get(url)===entry)modelCache.delete(url);throw error});
  modelCache.set(url,entry);trimModels();return entry.promise;
 }
 // Real-shape path: licensed GLB, normalized to the turntable. Procedural path stays the fallback.
 function build(cid,spoiler){
  const ticket=++buildVersion;
  const name=CARS[cid][0],mdef=modelForCar(cid);
  activeModelUrl=mdef?mdef.url:null;cancelOtherDownloads(activeModelUrl);car3d.loading=null;
  if(!mdef||!THREE.GLTFLoader){buildProcedural(cid,spoiler);return}
  clearStage();
  const sp=new THREE.Group();sp.visible=false;g.add(sp);
  oldCid=cid;oldSp=spoiler;car3d.sp=sp;car3d.usingModel=false;car3d.profile='glb';
  car3d.loading={cid,done:0,total:mdef.parts||1,preparing:false};
  loadGlb(mdef.url,mdef.parts,(done,total,preparing=false)=>{if(ticket!==buildVersion)return;car3d.loading={cid,done,total,preparing};updateCar()}).then(scene0=>{
   if(ticket!==buildVersion||oldCid!==cid)return;
   car3d.loading=null;
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
  }).catch(()=>{if(ticket===buildVersion&&oldCid===cid){car3d.loading=null;buildProcedural(cid,spoiler);updateCar()}});
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
 car3d={g,body,sp:null,rd,sc,cam,build,usingModel:false,loading:null,set:(cid,color,sp)=>{if(cid!==oldCid||sp!==oldSp)build(cid,sp);if(!car3d.usingModel)body.color.set(color)},zoom:n=>{distance=Math.max(6.6,Math.min(12,distance+n));camera()},reset:()=>{yaw=.65;pitch=.30;distance=8.6;camera()},toggle:()=>{auto=!auto;return auto},isAuto:()=>auto};
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
 if(car3d.loading&&car3d.loading.cid===cid){
  const load=car3d.loading;caption.textContent=load.preparing?(S.lang==='ar'?'جاري تجهيز المجسم بنفس تفاصيله…':'Preparing the full-detail model…'):(S.lang==='ar'?'جاري تحميل مجسم العربية… '+Math.round(100*load.done/load.total)+'%':'Loading car model… '+Math.round(100*load.done/load.total)+'%');return;
 }
 const mdef=car3d.usingModel&&modelForCar(cid);
 if(name&&mdef?.approximation)name.textContent=CARS[cid][0]+' · '+CARS[cid][1]+(S.lang==='ar'?' | مجسم بديل: ':' | substitute body: ')+mdef.sourceBody.replace('BMW M3 G80','M3 G80');
 caption.textContent=mdef?(S.lang==='ar'?'مجسم مجتمعي من نفس جيل الموديل · '+mdef.credit+' · CC BY · مش نسخة مطابقة للسنة أو الفئة بالظبط. اسحب للتدوير.':'Same-generation community model by '+mdef.credit+' (CC BY), not an exact year/trim replica. Drag to orbit.'):(S.lang==='ar'?'مجسم فني مبسّط، مش نسخة مطابقة للموديل. اسحب للتدوير.':'Stylized body, not a model-exact replica. Drag to orbit.');
 if(mdef&&mdef.noteEn)caption.textContent=(S.lang==='ar'?mdef.noteAr+' · '+mdef.credit+' · CC BY · اسحب للتدوير.':mdef.noteEn+' Community model by '+mdef.credit+' · CC BY. Drag to orbit.');
 if(mdef&&mdef.approximation)caption.textContent=(S.lang==='ar'?'بديل شكلي: هيكل '+mdef.sourceBody+' · '+mdef.credit+' · CC BY · الفروق في الملاحظة مع المواصفات · اسحب للتدوير.':'Visual substitute: '+mdef.sourceBody+' body by '+mdef.credit+' (CC BY). Differences are in the note with the specifications. Drag to orbit.');
 if(mdef&&mdef.original)caption.textContent=S.lang==='ar'?mdef.noteAr+' · اسحب للتدوير.':mdef.noteEn+' Drag to orbit.';
                                         }
