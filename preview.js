/* Original procedural showroom. Stylized body families, not licensed model-exact assets. */
/* Community models route by catalog name/year. Different-car approximations are explicitly flagged (see CREDITS.md). */
const MODELS={
"Toyota GR Corolla Core":{"yaw": 3.141592653589793, "catalogYear": 2024, "url": "original:grcorolla-core-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified 2024 GR Corolla Core: five doors, wide quarters, fender extractors, hooked lamps, low spoiler and triple exhaust. Simplified bumpers and lenses, generic wheels. Not an exact equipment replica.", "noteAr": "مجسم أصلي مبسط لـ GR Corolla Core: خمسة أبواب ورفارف عريضة وفتحات بالرفارف وفوانيس معقوفة وجناح منخفض وثلاث شكمانات. الإكصدامات والفوانيس والجنوط مبسطة، مش نسخة مطابقة للتجهيزات."},
"Mitsubishi 3000GT VR-4":{"yaw": 3.141592653589793, "catalogYear": 1994, "url": "original:3000gt-vr4-z16a-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified 1994 3000GT VR-4: wide liftback coupe, fixed twin-projector lamps, low rear wing and stacked side vents. Simplified bumpers, lamps and generic wheels, not an exact trim replica.", "noteAr": "مجسم أصلي مبسط لـ 3000GT VR-4: كوبيه عريضة بسقف مائل وفوانيس ثابتة مزدوجة وجناح خلفي منخفض وفتحات جانبية. الإكصدامات والفوانيس والجنوط مبسطة، مش نسخة مطابقة للتجهيزات."},
"Dodge Viper GTS":{"yaw": 3.141592653589793, "catalogYear": 1999, "url": "original:viper-gts-sr2-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified SR II Viper GTS coupe: long hood, rearward double-bubble cabin, side scallops and central twin exhaust. Simplified bumpers, lamps and generic wheels, not an exact trim replica.", "noteAr": "مجسم أصلي مبسط لـ Viper GTS: كبوت طويل وكابينة خلفية بسقف مزدوج وفتحات جانبية وشكمان مزدوج في المنتصف. الإكصدامات والفوانيس والجنوط مبسطة، مش نسخة مطابقة للتجهيزات."},
"Subaru Impreza WRX":{"yaw":3.141592653589793,"catalogYear": 2002, "url": "original:impreza-wrx-bugeye-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified bugeye WRX sedan: round lamps and fog lights, hood scoop, four doors and low trunk wing. Simplified bumpers, lamps and generic wheels, not an exact equipment replica.", "noteAr": "مجسم أصلي مبسط لـ WRX بوغ آي: فوانيس دائرية وكشافات ضباب وفتحة كبوت وأربع أبواب وجناح شنطة منخفض. الإكصدامات والفوانيس والجنوط مبسطة، مش نسخة مطابقة للتجهيزات."},
"Toyota GR Yaris":{"yaw":3.141592653589793,"catalogYear": 2021, "url": "original:gr-yaris-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified three-door GR Yaris: lower black roof, broad rear quarters, large grille and C-shaped rear lamps. Angular bumpers and lamps, generic wheels; not an exact equipment replica.", "noteAr": "مجسم أصلي مبسط لـ GR Yaris بتلات أبواب وسقف أسود منخفض ورفارف خلفية عريضة وشبكة كبيرة وفوانيس خلفية بشكل C. الإكصدامات والفوانيس زاوية والجنوط مبسطة، مش نسخة مطابقة للتجهيزات."},
"Volkswagen Golf R":{"yaw":3.141592653589793,"catalogYear": 2024, "url": "original:golf-r-mk8-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified Mk8 Golf R variant: separate intakes, blue line, silver mirrors, extended spoiler and quad exhaust. Coarse lamps, bumpers and wheels, not an exact trim replica.", "noteAr": "مجسم أصلي مبسط لـ Golf R Mk8 بفتحات مقدمة مختلفة وخط أزرق ومرايات فضي وجناح أطول وأربع مخارج عادم. الفوانيس والإكصدامات والجنوط مبسطة، مش نسخة مطابقة للفئة."},
"Volkswagen Golf GTI":{"catalogYear": 2024, "url": "original:golf-gti-mk8-original", "original": true, "credit": "Original simplified body", "noteEn": "Original simplified Mk8 GTI hatchback. Angular lamps and bumpers, generic wheels; not an exact trim replica or Golf R.", "noteAr": "مجسم أصلي مبسط لـ Golf GTI Mk8. الفوانيس والإكصدامات زاوية والجنوط مبسطة، مش نسخة مطابقة للفئة ولا Golf R."},
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
'original:grcorolla-core-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#c91e25',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2024 GR Corolla Core, meters. Plain roof/hood, low spoiler.
const axles=[-1.285,1.354],wr=.323,wy=.33,ar=.359;
const sections=[[-2.205,.78,.79,.77],[-2.10,.82,.83,.83],[-1.87,.87,.83,.88],[-1.55,.91,.85,.906],[-1.285,.925,.87,.916],[-.94,.94,.86,.865],[-.65,.945,.85,.856],[0,.95,.85,.86],[.62,.96,.88,.88],[1.04,.97,.93,.925],[1.354,.96,.93,.925],[1.71,.94,.90,.89],[2.02,.90,.86,.85],[2.205,.85,.82,.79]];
function sample(x,i){for(let j=1;j<sections.length;j++)if(x<=sections[j][0]){let a=sections[j-1],b=sections[j],f=(x-a[0])/(b[0]-a[0]);f=f*f*(3-2*f);return a[i]+(b[i]-a[i])*f}return sections.at(-1)[i]}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.18;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
grid(112,28,(u,v)=>{let x=-2.205+4.41*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(210,12,(u,v)=>{let x=-2.205+4.41*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.055*(1-v)-.025*Math.sin(Math.PI*v))]},paint);
box(0,.155,0,3.9,.06,1.50,black);
const roof=[[-.94,.95,.75],[-.72,1.14,.714],[-.44,1.36,.665],[-.14,1.435,.65],[.23,1.453,.653],[.75,1.449,.66],[1.18,1.42,.677],[1.52,1.35,.705],[1.78,1.16,.745],[2.03,.95,.78]];
function cr(x,k){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],t=(x-a[0])/(b[0]-a[0]);return a[k]+(b[k]-a[k])*t}return roof.at(-1)[k]}
function cp(x,q){return[x,cr(x,1)-.035*q*q,q*cr(x,2)]}
grid(100,22,(u,v)=>cp(-.94+2.97*u,-1+2*v),paint);
for(let [a,b]of [[-.88,-.25],[1.60,1.98]])grid(30,18,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.009;return p},glass);
for(let side of [-1,1]){
 function sp(x,u,off=0){return[x,.90+(cr(x,1)-.035-.90)*u,side*(.83+(cr(x,2)-.83)*u+off)]}
 grid(100,12,(u,v)=>sp(-.94+2.97*u,v),paint);
 grid(40,10,(u,v)=>{let a=-.80+.08*Math.pow(1-v,3),b=.30-.01*v;return sp(a+(b-a)*u,.04+.88*v,.008)},glass);
 grid(38,10,(u,v)=>{let a=.40,b=1.23-.025*v;return sp(a+(b-a)*u,.05+.87*v,.008)},glass);
 grid(22,8,(u,v)=>{let a=1.28,b=1.62-.18*v;return sp(a+(b-a)*u,.08+.72*v,.009)},glass);
 grid(4,10,(u,v)=>sp(.30+.10*u,.04+.89*v,.012),black);
 grid(3,10,(u,v)=>sp(1.23+.035*u,.06+.86*v,.013),black);
 // Both door outlines, widened rear quarter and distinct GR front-fender extractor.
 function sideZ(x,y){return side*(sample(x,3)-.055*Math.max(0,(.85-y)/.67)+.006)}
 for(let pts of [[[-.76,.89],[-.69,.31],[-.51,.23],[.34,.23],[.37,.90]],[[.37,.90],[.34,.23],[.95,.23],[1.18,.48],[1.48,.87]]])line(pts.map(([x,y])=>[x,y,sideZ(x,y)]),seam,.0025);
 for(let x of [.16,1.10])box(x,.835,side*(sample(x,3)+.012),.18,.033,.027,paint,.009);
 poly([[-.94,.83,side*.875],[-1.11,.80,side*.89],[-.97,.57,side*.878],[-.88,.53,side*.866]],black);
 line([[-1.08,.79,side*.897],[-.94,.56,side*.885]],chrome,.005);
 box(-.66,1.015,side*.815,.065,.06,.13,black);box(-.68,1.06,side*.922,.24,.105,.14,black,.022);
 box(.1,.205,side*.854,1.95,.045,.075,paint,.008);
 for(let ax of axles){let pts=[];for(let i=0;i<=40;i++){let t=i*Math.PI/40,x=ax+ar*Math.cos(t);pts.push([x,wy+ar*Math.sin(t),side*(sample(x,3)-.001)])}line(pts,paint,.006)}
 line([[-2.04,.82,side*.30],[-1.63,.91,side*.47],[-.94,.948,side*.63]],seam,.0025);
}
function fx(z){return -2.215+.15*Math.pow(Math.abs(z)/.90,3)}
// Broad rounded trapezoid, integrated fog surrounds and outer vertical curtains.
grid(24,52,(u,v)=>{let z=(-1+2*v)*.82;return[fx(z),.185+.565*u,z]},paint);
grid(22,46,(u,v)=>{let z=(-1+2*v)*(.72-.10*Math.pow(u,4));return[fx(z)-.013,.235+.43*u,z]},black);
for(let y=.265;y<.65;y+=.052)for(let z=-.64;z<.65;z+=.105){if(y>.60&&Math.abs(z)>.59)continue;let pts=[];for(let k=0;k<=6;k++){let a=k*Math.PI/3;pts.push([fx(z)-.02,y+.019*Math.sin(a),z+.044*Math.cos(a)])}line(pts,black,.003)}
for(let side of [-1,1]){
 // Lamps taper inboard, long upper brow and hooked outer white DRL.
 function hp(u,v){let z=side*(.29+.54*u),x=fx(z)-.065;let top=.789+.043*u,low=.745-.105*Math.pow(u,4);return[x,low+(top-low)*v,z]}
 grid(34,12,hp,black);
 grid(34,6,(u,v)=>{let p=hp(u,1),x=p[0]+.27*v;return[x,p[1]*(1-v)+topY(x,p[2])*v,p[2]]},paint);
 line(Array.from({length:28},(_,i)=>hp(i/27,.90)),lamp,.006);
 line([hp(.98,.90),hp(1,.18),hp(.87,.08)],lamp,.008);
 for(let u of [.55,.76,.89])line([hp(u,.37),hp(u+.045,.37)],chrome,.009);
 grid(10,14,(u,v)=>{let z=side*(.555+.19*v);return[fx(z)-.027,.265+.16*u,z]},black);
 let o=mesh(new T.CylinderGeometry(.037,.037,.012,24),chrome,fx(.66)-.037,.344,side*.66);o.rotation.z=Math.PI/2;
 o=mesh(new T.CylinderGeometry(.025,.025,.014,24),lamp,fx(.66)-.044,.344,side*.66);o.rotation.z=Math.PI/2;
 poly([[fx(.79)-.01,.29,side*.79],[fx(.845)-.01,.30,side*.845],[fx(.84)-.01,.59,side*.84],[fx(.795)-.01,.61,side*.795]],black);
 poly([[fx(0)-.013,.72,0],[fx(.28)-.013,.744,side*.28],[fx(.33)-.013,.78,side*.33],[fx(0)-.013,.766,0]],black);
}
let emblem=mesh(new T.TorusGeometry(.037,.005,6,24),chrome,-2.235,.744,0);emblem.rotation.y=Math.PI/2;emblem.scale.y=.80;
box(-2.22,.192,0,.03,.025,1.46,black,.006);
function rx(z){return 2.21-.09*Math.pow(Math.abs(z)/.87,3)}
grid(26,48,(u,v)=>{let z=(-1+2*v)*.81;return[rx(z),.20+.66*u,z]},paint);
// Angular rear lenses with black surround, clear inboard blade and red outer hook.
for(let side of [-1,1]){
 function rp(z,y,d=.015){return[rx(z)+d,y,side*z]}
 poly([[.32,.846],[.70,.89],[.83,.87],[.81,.75],[.66,.70],[.53,.735]].map(([z,y])=>rp(z,y)),black);
 poly([[.38,.845],[.70,.878],[.81,.86],[.78,.79],[.64,.80]].map(([z,y])=>rp(z,y,.024)),chrome);
 line([[.36,.85],[.69,.882],[.81,.862],[.78,.752],[.67,.722],[.55,.747]].map(([z,y])=>rp(z,y,.03)),red,.009);
 poly([[1.85,.89,side*.865],[2.16,.86,side*.812],[2.14,.76,side*.813],[1.94,.79,side*.858]],black);
 line([[1.89,.874,side*.866],[2.145,.85,side*.814],[2.128,.776,side*.815]],red,.008);
 poly([[rx(.72)+.01,.22,side*.72],[rx(.80)+.01,.24,side*.80],[rx(.80)+.01,.54,side*.80],[rx(.76)+.01,.57,side*.76]],black);
 box(rx(.775)+.024,.40,side*.775,.016,.19,.020,red,.004);
}
grid(14,38,(u,v)=>{let z=(-1+2*v)*(.79-.15*u);return[rx(z)+.012,.17+.28*u,z]},black);
box(2.237,.40,0,.022,.15,.40,black,.01);
for(let z of [-.57,0,.57]){let rad=z===0?.071:.055;let o=mesh(new T.CylinderGeometry(rad,rad,.07,24),chrome,2.217,.223,z);o.rotation.z=Math.PI/2;o=mesh(new T.CylinderGeometry(rad-.012,rad-.012,.075,24),black,2.222,.223,z);o.rotation.z=Math.PI/2;}
for(let z of [-.36,.36])box(2.20,.19,z,.10,.10,.022,black);
line([[1.79,1.15,-.70],[1.98,.94,-.70],[2.19,.70,-.54],[2.21,.62,-.38],[2.21,.60,.38],[2.19,.70,.54],[1.98,.94,.70],[1.79,1.15,.70]],seam,.0025);
box(1.53,1.345,0,.23,.035,1.45,paint,.012);box(1.63,1.334,0,.10,.02,1.40,black,.008);box(1.683,1.338,0,.014,.012,.59,red,.004);
// Small black shark fin, no Circuit high wing or vented bonnet.
poly([[1.06,1.448,0],[1.25,1.448,0],[1.19,1.505,0]],black);
let badge=mesh(new T.TorusGeometry(.033,.005,6,24),chrome,2.22,.87,0);badge.rotation.y=Math.PI/2;
// Generic split10-spoke wheels, not a factory-wheel replica.
for(let x of axles)for(let side of [-1,1]){
 let z=side*.795,out=side*.913;let o=mesh(new T.CylinderGeometry(wr,wr,.225,40),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.247,.009,8,40),black,x,wy,out);let d=mesh(new T.CylinderGeometry(.225,.225,.016,32),black,x,wy,out-side*.014);d.rotation.x=Math.PI/2;
 box(x+.12,wy,side*.894,.05,.16,.025,red,.008);
 for(let a=0;a<10;a++)for(let delta of [-.035,.035]){let t=a*Math.PI/5+delta;line([[x+Math.sin(t)*.048,wy+Math.cos(t)*.048,out],[x+Math.sin(t+.025)*.239,wy+Math.cos(t+.025)*.239,out]],black,.007)}
 let h=mesh(new T.CylinderGeometry(.048,.048,.025,16),chrome,x,wy,out+side*.01);h.rotation.x=Math.PI/2;
}

// Rounded bumper corners, baked coherently across shell, lenses and vents.
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),f=Math.min(1,Math.max(0,(Math.abs(x)-1.79)/.38)),d=.19*Math.pow(Math.min(1,Math.abs(z)/.90),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();o.geometry=g});
car.userData.originalBody=true;const merged=new T.Group(),groups=new Map();car.updateMatrixWorld(true);car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});for(let{mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal']){let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;merged.add(m)}merged.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return merged;},



'original:3000gt-vr4-z16a-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#b51b25',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 1994 3000GT VR-4 reference-led study.
const axles=[-1.19,1.279],wr=.333,wy=.344,ar=.36;
const sec=[[-2.282,.52,.55,.76],[-2.16,.61,.64,.86],[-1.86,.71,.75,.90],[-1.45,.77,.80,.918],[-1.19,.80,.82,.920],[-.82,.81,.80,.90],[-.45,.82,.78,.88],[0,.81,.76,.877],[.60,.80,.78,.891],[1.04,.79,.83,.918],[1.279,.78,.85,.920],[1.75,.76,.82,.90],[2.10,.74,.78,.86],[2.282,.70,.72,.81]];
function sample(x,k){for(let i=1;i<sec.length;i++)if(x<=sec[i][0]){let a=sec[i-1],b=sec[i],t=(x-a[0])/(b[0]-a[0]),h=b[0]-a[0],p=sec[Math.max(0,i-2)],n=sec[Math.min(sec.length-1,i+1)],m0=(b[k]-p[k])/(b[0]-p[0]),m1=(n[k]-a[k])/(n[0]-a[0]);return(2*t*t*t-3*t*t+1)*a[k]+(t*t*t-2*t*t+t)*h*m0+(-2*t*t*t+3*t*t)*b[k]+(t*t*t-t*t)*h*m1}return sec.at(-1)[k]}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q-.055*Math.pow(q,8)}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function sideZ(x,y){let b=bottom(x),v=(y-b)/(sample(x,2)-.055-b);return sample(x,3)-.075*(1-v)+.014*Math.sin(Math.PI*v)}
function bottom(x){let b=.18;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
grid(160,32,(u,v)=>{let x=-2.282+4.564*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let s of[-1,1])grid(200,16,(u,v)=>{let x=-2.282+4.564*u,b=bottom(x);return[x,b+(sample(x,2)-.055-b)*v,s*(sample(x,3)-.075*(1-v)+.014*Math.sin(Math.PI*v))]},paint);
box(0,.18,0,3.9,.05,1.46,black);
const roof=[[-.79,.82,.74],[-.54,1.03,.675],[-.19,1.205,.63],[.16,1.244,.62],[.52,1.23,.63],[.88,1.12,.68],[1.23,.97,.73],[1.62,.83,.79]];
function cr(x,k){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],t=(x-a[0])/(b[0]-a[0]);let h=b[0]-a[0],p=roof[Math.max(0,i-2)],n=roof[Math.min(roof.length-1,i+1)],m0=(b[k]-p[k])/(b[0]-p[0]),m1=(n[k]-a[k])/(n[0]-a[0]);return(2*t*t*t-3*t*t+1)*a[k]+(t*t*t-2*t*t+t)*h*m0+(-2*t*t*t+3*t*t)*b[k]+(t*t*t-t*t)*h*m1}return roof.at(-1)[k]}
function cp(x,q){return[x,cr(x,1)-.065*q*q,q*cr(x,2)]}
grid(80,28,(u,v)=>cp(-.79+2.41*u,-1+2*v),paint);
for(let[a,b]of[[-.735,-.19],[.70,1.52]])grid(36,22,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.94);p[1]+=.006;return p},glass);
for(let s of[-1,1]){
 function sp(x,t,d=0){return[x,.756+(cr(x,1)-.065-.756)*t,s*(.825+(cr(x,2)-.825)*t+d)]}
 grid(80,14,(u,v)=>sp(-.79+2.41*u,v),paint);
 grid(45,12,(u,v)=>{let a=-.66+.43*v,b=.77-.22*v;return sp(a+(b-a)*u,.07+.84*v,.008)},glass);
 grid(24,12,(u,v)=>{let a=.84-.22*v,b=1.40-.39*v;return sp(a+(b-a)*u,.09+.76*v,.008)},glass);
 line([[-.66,.75,s*.833],[-.53,.29,s*.832],[.65,.29,s*.858],[.80,.43,s*.88],[.79,.76,s*.899]],seam,.003);
 box(.59,.725,s*.887,.16,.04,.012,paint,.012);
 box(-.49,.873,s*.791,.07,.05,.14,black);box(-.47,.90,s*.886,.23,.105,.15,paint,.035);
 grid(55,9,(u,v)=>{let x=-.79+1.89*u,y=.18+.12*v;return[x,y,s*(sample(x,3)-.03+.047*Math.sin(Math.PI*v))]},paint);
 // Twin vertically stacked side vents just before the rear wheel.
 for(let y of[.36,.48])grid(30,9,(u,v)=>{let a=u*Math.PI*2,x=.91+.083*v*Math.cos(a),yy=y+.044*v*Math.sin(a);return[x,yy,s*(sideZ(x,yy)+.002)]},black);
 line([[-.81,.49,s*.884],[.83,.49,s*.904]],paint,.011);
 grid(34,16,(u,v)=>{let x=-1.55+.80*u,z=s*(.47+(-1+2*v)*.105);return[x,topY(x,z)+.014*Math.sin(Math.PI*u)*Math.sin(Math.PI*v),z]},paint);
 //1994 fixed covered lamps, not the earlier pop-up units.
 grid(36,12,(u,v)=>{let a=u*Math.PI*2,x=-2.16+.055*v*Math.cos(a),z=s*(.61+.19*v*Math.sin(a));return[x,topY(x,z)+.012,z]},glass);
 for(let j of[0,1])grid(25,6,(u,v)=>{let a=u*Math.PI*2,x=-2.169+.022*v*Math.cos(a),z=s*(.55+j*.12+.045*v*Math.sin(a));return[x,topY(x,z)+.020,z]},chrome);
 grid(28,8,(u,v)=>{let a=u*Math.PI*2,x=-2.13+.035*v*Math.cos(a),z=s*(.814+.046*v*Math.sin(a));return[x,topY(x,z)+.016,z]},amber);
}
function fx(z){return -2.282}
grid(30,56,(u,v)=>{let z=(-1+2*v)*(.81-.075*(1-u));return[fx(z)+.025*Math.pow(1-u,2),.18+(topY(-2.282,z)-.18)*u,z]},paint);
grid(16,40,(u,v)=>{let z=(-1+2*v)*(.42+.035*Math.sin(Math.PI*u));return[fx(z)-.008,.235+.18*u,z]},black);
for(let z of[-.14,.14])box(-2.293,.327,z,.016,.16,.018,paint);
for(let s of[-1,1])for(let y of[.265,.375])grid(26,6,(u,v)=>{let a=u*Math.PI*2,z=s*(.62+.115*v*Math.cos(a)),yy=y+.038*v*Math.sin(a);return[fx(z)-.009,yy,z]},black);
function rx(z){return 2.282}
grid(28,54,(u,v)=>{let z=(-1+2*v)*(.81-.075*(1-u));return[rx(z)-.10*Math.pow(1-u,2)+.022*Math.sin(Math.PI*u),.18+(topY(2.282,z)-.18)*u,z]},paint);
grid(12,60,(u,v)=>{let z=(-1+2*v)*.76;return[rx(z)+.015,.565+.114*u,z]},red);
grid(10,40,(u,v)=>{let z=(-1+2*v)*.36;return[rx(z)+.016,.565+.114*u,z]},black);box(2.292,.39,0,.02,.14,.32,black);line([[2.295,.49,-.77],[2.305,.49,0],[2.295,.49,.77]],seam,.003);
for(let s of[-1,1]){box(1.88,.845,s*.60,.08,.19,.07,paint,.02);grid(14,48,(u,v)=>{let x=1.80+.31*u,z=(-1+2*v)*.84;return[x,.941+.018*Math.sin(Math.PI*u)-.018*Math.pow(z/.84,2),z]},paint);for(let z of[.60,.69]){let o=mesh(new T.CylinderGeometry(.035,.035,.14,20),chrome,2.25,.22,s*z);o.rotation.z=Math.PI/2;}}
for(let x of axles)for(let s of[-1,1]){let out=s*.921,o=mesh(new T.CylinderGeometry(wr,wr,.235,44),tire,x,wy,s*.802);o.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.235,.022,8,40),chrome,x,wy,out);o=mesh(new T.CylinderGeometry(.217,.217,.012,32),black,x,wy,out-s*.01);o.rotation.x=Math.PI/2;for(let k=0;k<5;k++){let a=k*Math.PI*2/5;line([[x+Math.sin(a)*.045,wy+Math.cos(a)*.045,out],[x+Math.sin(a+.07)*.213,wy+Math.cos(a+.07)*.213,out]],chrome,.038)}o=mesh(new T.CylinderGeometry(.056,.056,.02,18),chrome,x,wy,out+s*.015);o.rotation.x=Math.PI/2;}
// Round the bumper plan without changing the model wheelbase or cabin.
car.traverse(o=>{if(!o.isMesh||o.rotation.x||o.rotation.y||o.rotation.z)return;let a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){let x=a.getX(i)+o.position.x,z=a.getZ(i)+o.position.z;let f=Math.max(0,Math.min(1,(-x-1.65)/.63)),r=Math.max(0,Math.min(1,(x-1.90)/.38));a.setX(i,a.getX(i)+.14*Math.pow(Math.abs(z)/.92,4)*f-.085*Math.pow(Math.abs(z)/.92,4)*r)}a.needsUpdate=true;o.geometry.computeVertexNormals()});
car.userData.originalBody=true;const merged=new T.Group(),groups=new Map();car.updateMatrixWorld(true);car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});for(let{mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal']){let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;merged.add(m)}merged.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return merged;},


'original:viper-gts-sr2-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#1556a4',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 1999 ViperGTS coupe, reference-led not a scan.
const axles=[-1.18,1.2635],wr=.334,wy=.344,ar=.366;
const sec=[[-2.244,.62,.65,.91],[-2.15,.66,.71,.93],[-1.91,.69,.78,.91],[-1.64,.71,.84,.945],[-1.18,.75,.88,.9614],[-.81,.77,.81,.91],[-.47,.79,.73,.835],[-.12,.79,.72,.826],[.35,.76,.72,.84],[.80,.76,.79,.93],[1.2635,.77,.87,.9614],[1.70,.78,.85,.94],[2.10,.76,.79,.90],[2.244,.72,.70,.90]];
function sample(x,k){for(let i=1;i<sec.length;i++)if(x<=sec[i][0]){let a=sec[i-1],b=sec[i],t=(x-a[0])/(b[0]-a[0]);let h=b[0]-a[0],prev=sec[Math.max(0,i-2)],next=sec[Math.min(sec.length-1,i+1)],m0=(b[k]-prev[k])/(b[0]-prev[0]),m1=(next[k]-a[k])/(next[0]-a[0]);return (2*t*t*t-3*t*t+1)*a[k]+(t*t*t-2*t*t+t)*h*m0+(-2*t*t*t+3*t*t)*b[k]+(t*t*t-t*t)*h*m1}return sec.at(-1)[k]}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*Math.pow(q,2)}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.16;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
grid(150,36,(u,v)=>{let x=-2.244+4.488*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let s of [-1,1])grid(200,14,(u,v)=>{let x=-2.244+4.488*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,s*(sample(x,3)-.075*(1-v)-.07*Math.sin(Math.PI*v))]},paint);
box(0,.15,0,3.8,.06,1.48,black);
// Cabin pulled rearward with curved windscreen, twin roof humps and broad fastback glass.
const roof=[[-.44,.79,.72],[-.25,.98,.64],[.02,1.14,.60],[.24,1.178,.608],[.64,1.17,.626],[.94,1.09,.68],[1.20,.97,.73],[1.60,.85,.79],[1.83,.80,.83]];
function cr(x,k){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],t=(x-a[0])/(b[0]-a[0]);let h=b[0]-a[0],prev=roof[Math.max(0,i-2)],next=roof[Math.min(roof.length-1,i+1)],m0=(b[k]-prev[k])/(b[0]-prev[0]),m1=(next[k]-a[k])/(next[0]-a[0]);return (2*t*t*t-3*t*t+1)*a[k]+(t*t*t-2*t*t+t)*h*m0+(-2*t*t*t+3*t*t)*b[k]+(t*t*t-t*t)*h*m1}return roof.at(-1)[k]}
function cp(x,q){let hump=.033*Math.exp(-Math.pow((Math.abs(q)-.50)/.29,2))*Math.max(0,1-Math.pow((x-.43)/.66,4));return[x,cr(x,1)-.085*q*q+Math.max(0,hump),q*cr(x,2)]}
grid(95,32,(u,v)=>cp(-.44+2.27*u,-1+2*v),paint);
for(let[a,b]of [[-.385,-.005],[.82,1.70]])grid(38,24,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*(.93-.10*u));p[1]+=.005;return p},glass);
for(let s of [-1,1]){
 function sideP(x,t,d=0){return[x,.724+(cr(x,1)-.085-.724)*t,s*(.795+(cr(x,2)-.795)*t+d)]}
 grid(90,12,(u,v)=>sideP(-.44+2.27*u,v),paint);
 grid(55,14,(u,v)=>{let a=-.32+.31*v,b=.95-.26*v-.04*Math.sin(Math.PI*v);return sideP(a+(b-a)*u,.08+.83*v,.008)},glass);
 line([[-.32,.72,s*.808],[-.26,.26,s*.785],[.04,.20,s*.797],[.78,.20,s*.884],[.94,.35,s*.915],[.92,.75,s*.949]],seam,.003);
 box(.69,.704,s*.867,.13,.03,.023,black,.008);
 box(-.21,.838,s*.795,.06,.05,.14,black);box(-.20,.876,s*.893,.22,.105,.17,paint,.044);
 // Big vertical scalloped extraction recess behind each front wheel.
 grid(25,12,(u,v)=>{let a=u*Math.PI*2,x=-.59+.055*v*Math.cos(a)+.018*v*Math.sin(a),y=.49+.17*v*Math.sin(a);return[x,y,s*(sample(x,3)+.009)]},black);
 
 grid(42,10,(u,v)=>{let x=-.76+1.72*u,y=.145+.10*v;return[x,y,s*(.835+.055*Math.sin(Math.PI*v)+.035*Math.pow(2*u-1,2))]},paint);
 // Mirrored swept lamps with a single continuous surface, no raised lens pods.
 function lampP(a,v,shrink=1){let z=s*(.635+.185*shrink*v*Math.cos(a)),y=.640+.050*shrink*v*Math.sin(a);return[-2.255,y,z]}
 grid(48,12,(u,v)=>lampP(u*Math.PI*2,v),black);
 grid(48,12,(u,v)=>{let p=lampP(u*Math.PI*2,v,.90);p[0]-=.006;return p},glass);
 for(let j of[0,1])grid(24,5,(u,v)=>{let a=u*Math.PI*2,z=s*(.575+j*.105+.030*v*Math.cos(a)),y=.640+.023*v*Math.sin(a);return[-2.267,y,z]},chrome);
 // Amber marker ahead of front wheel and fuelcap in the right rear pillar.
 box(-1.89,.48,s*.91,.12,.037,.012,amber,.015);
 if(s===1){let o=mesh(new T.CylinderGeometry(.063,.063,.012,24),chrome,.87,.972,.699);o.rotation.x=Math.PI/2;}
}
// Hood intake and side extractor slots are geometry only.
grid(20,12,(u,v)=>{let x=-1.50+.37*u,z=(-1+2*v)*(.13+.06*u);return[x,topY(x,z)+.01,z]},black);
for(let s of[-1,1])for(let k=0;k<6;k++)grid(10,2,(u,v)=>{let x=-.78+.042*k+.016*v,z=s*(.35+.28*u);return[x,topY(x,z)+.009,z]},black);
function fx(z){return -2.244}
grid(28,60,(u,v)=>{let z=(-1+2*v)*(.91-.075*(1-u)-.07*Math.sin(Math.PI*u)),x=fx(z);return[x,.16+(topY(x,(-1+2*v)*.91)-.16)*u,z]},paint);
grid(14,40,(u,v)=>{let z=(-1+2*v)*(.54+.09*Math.sin(Math.PI*u));return[fx(z)-.009,.265+.195*u,z]},black);
line(Array.from({length:41},(_,i)=>{let z=-.61+1.22*i/40;return[fx(z)-.022,.345,z]}),paint,.017);
for(let s of[-1,1]){let o=mesh(new T.CylinderGeometry(.091,.091,.009,28),black,fx(.77)-.008,.367,s*.77);o.rotation.z=Math.PI/2;o=mesh(new T.CylinderGeometry(.067,.067,.010,24),glass,fx(.77)-.014,.367,s*.77);o.rotation.z=Math.PI/2;}
// Broad rear deck terminates in an integrated swept lip, oval taillights and central twin pipes.
function rx(z){return 2.244}
grid(26,60,(u,v)=>{let z=(-1+2*v)*(.90-.075*(1-u)-.07*Math.sin(Math.PI*u));return[rx(z),.16+(topY(2.244,(-1+2*v)*.90)-.16)*u,z]},paint);
grid(22,8,(u,v)=>{let z=(-1+2*u)*.87,x=2.07+.15*v;return[x,topY(x,z)+.015+.016*Math.sin(Math.PI*v),z]},paint);
for(let s of[-1,1]){
 grid(40,8,(u,v)=>{let a=u*Math.PI*2,z=.63+.208*v*Math.cos(a),y=.569+.069*v*Math.sin(a);return[rx(z)+.013,y,s*z]},red);
 grid(30,6,(u,v)=>{let a=u*Math.PI*2,z=.63+.18*v*Math.cos(a),y=.46+.025*v*Math.sin(a);return[rx(z)+.014,y,s*z]},lamp);
 grid(25,6,(u,v)=>{let a=u*Math.PI*2,z=.73+.07*v*Math.cos(a),y=.46+.022*v*Math.sin(a);return[rx(z)+.019,y,s*z]},amber);
 let o=mesh(new T.CylinderGeometry(.039,.039,.19,24),chrome,2.23,.181,s*.064);o.rotation.z=Math.PI/2;o=mesh(new T.CylinderGeometry(.028,.028,.20,24),black,2.243,.181,s*.064);o.rotation.z=Math.PI/2;
}
box(2.251,.505,0,.016,.17,.43,black,.02);
line(Array.from({length:40},(_,i)=>{let z=-.87+i*1.74/39;return[rx(z)+.008,.339,z]}),seam,.003);
// Twin white racing stripes, original materials and no photo-derived textures.
const stripe=mat('#d6d8d9',.18,.4);
for(let s of[-1,1]){
 for(let[a,b]of[[-2.24,-.45],[1.78,2.20]])grid(60,8,(u,v)=>{let x=a+(b-a)*u,z=s*(.057+.145*v);return[x,topY(x,z)+.006,z]},stripe);
 grid(40,8,(u,v)=>{let x=.015+.79*u,z=s*(.057+.145*v),p=cp(x,z/cr(x,2));p[1]+=.011;return p},stripe);
 grid(30,8,(u,v)=>{let z=s*(.057+.145*v);return[fx(z)-.023,.18+.43*u,z]},stripe);
 grid(26,8,(u,v)=>{let z=s*(.057+.145*v);return[rx(z)+.024,.18+.55*u,z]},stripe);
}
for(let x of axles)for(let s of[-1,1]){let out=s*.958,o=mesh(new T.CylinderGeometry(wr,wr,.265,44),tire,x,wy,s*.822);o.rotation.x=Math.PI/2;mesh(new T.TorusGeometry(.24,.019,8,40),chrome,x,wy,out);o=mesh(new T.CylinderGeometry(.226,.226,.014,32),black,x,wy,out-s*.01);o.rotation.x=Math.PI/2;for(let k=0;k<5;k++){let a=k*Math.PI*2/5;line([[x+Math.sin(a)*.037,wy+Math.cos(a)*.037,out],[x+Math.sin(a+.06)*.227,wy+Math.cos(a+.06)*.227,out]],chrome,.028)}o=mesh(new T.CylinderGeometry(.052,.052,.022,16),chrome,x,wy,out+s*.013);o.rotation.x=Math.PI/2;}

// Bake a shared rounded end profile into fascia and shell, avoiding detached edge plates.
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),y=p.getY(i),z=p.getZ(i),f=Math.min(1,Math.max(0,(Math.abs(x)-1.78)/.40)),d=.17*Math.pow(Math.min(1,Math.abs(z)/.94),3)*f,low=Math.max(0,Math.min(1,(.71-y)/.56));let rr=.065*Math.pow((y-.42)/.35,2)*f;p.setX(i,x+(x<0?d+rr:-d-rr));p.setZ(i,z*(1-.09*low*low*f));}g.computeVertexNormals();o.geometry=g});
car.userData.originalBody=true;const merged=new T.Group(),groups=new Map();car.updateMatrixWorld(true);car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});for(let{mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal']){let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;merged.add(m)}merged.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return merged;},

'original:impreza-wrx-bugeye-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#c1c6cb',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified early GD WRX sedan study, not a scan or exact replica.
const axles=[-1.2525,1.2725],wr=.31,wy=.32,ar=.346;
const sections=[[-2.2025,.775,.78,.78],[-2.13,.81,.86,.81],[-1.92,.84,.86,.835],[-1.60,.86,.78,.855],[-1.2525,.89,.79,.865],[-.85,.93,.80,.842],[-.53,.94,.81,.828],[.25,.91,.81,.825],[.85,.885,.81,.845],[1.2725,.89,.81,.865],[1.70,.88,.82,.842],[2.10,.83,.78,.81],[2.2025,.80,.78,.805]];
function sample(x,k){for(let i=1;i<sections.length;i++)if(x<=sections[i][0]){let a=sections[i-1],b=sections[i],t=(x-a[0])/(b[0]-a[0]);t=t*t*(3-2*t);return a[k]+(b[k]-a[k])*t}return sections.at(-1)[k]}
function topY(x,z){return sample(x,1)+(sample(x,2)-sample(x,1))*Math.pow(Math.abs(z)/sample(x,3),2)+.074*Math.exp(-Math.pow((Math.abs(z)-.59)/.17,2))*Math.exp(-Math.pow((x+2.16)/.32,2))}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.22;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
grid(120,28,(u,v)=>{let x=-2.2025+4.405*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let s of [-1,1])grid(180,10,(u,v)=>{let x=-2.2025+4.405*u,b=bottom(x);return[x,b+(topY(x,sample(x,3))-b)*v,s*(sample(x,3)-.085*Math.pow(1-v,3)-.018*Math.sin(Math.PI*v))]},paint);
box(0,.203,0,4,.05,1.39,black);
const roof=[[-.84,.92,.74],[-.61,1.16,.69],[-.28,1.39,.626],[-.04,1.44,.625],[.48,1.435,.63],[.88,1.38,.65],[1.17,1.17,.70],[1.47,.89,.765]];
function cr(x,k){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],t=(x-a[0])/(b[0]-a[0]);return a[k]+(b[k]-a[k])*t}return roof.at(-1)[k]}
function cp(x,q){return[x,cr(x,1)-.055*q*q,q*cr(x,2)]}
grid(80,24,(u,v)=>cp(-.84+2.31*u,-1+2*v),paint);
for(let [a,b] of [[-.78,-.285],[.94,1.415]])grid(26,18,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.92);p[1]+=.006;return p},glass);
for(let s of [-1,1]){
 function sideP(x,t,d=0){return[x,.815+(cr(x,1)-.055-.815)*t,s*(.802+(cr(x,2)-.802)*t+d)]}
 grid(80,12,(u,v)=>sideP(-.84+2.31*u,v),paint);
 grid(40,12,(u,v)=>{let a=-.73+.41*v,b=.32-.015*v;return sideP(a+(b-a)*u,.07+.85*v,.007)},glass);
 grid(36,12,(u,v)=>{let a=.37,b=1.28-.40*v-.055*Math.sin(Math.PI*v);return sideP(a+(b-a)*u,.07+.85*v,.007)},glass);
 grid(3,12,(u,v)=>sideP(.32+.05*u,.05+.89*v,.009),black);
 line([[-.67,.80,s*.827],[-.64,.34,s*.813],[-.49,.255,s*.806],[.30,.255,s*.807],[.34,.81,s*.83]],seam,.003);
 line([[.35,.81,s*.83],[.35,.255,s*.807],[1.12,.255,s*.826],[1.26,.42,s*.848],[1.30,.80,s*.861]],seam,.003);
 for(let x of [.14,1.10]){box(x,.755,s*(sample(x,3)+.003),.15,.045,.028,paint,.012);box(x,.758,s*(sample(x,3)+.02),.10,.013,.015,chrome,.004)}
 box(-.58,.958,s*.81,.06,.06,.12,black);box(-.63,.99,s*.895,.205,.105,.145,paint,.026);
 box(.26,.231,s*.806,1.84,.055,.065,paint,.013);
 line([[-1.90,.832,s*.41],[-1.38,.90,s*.48],[-.83,.94,s*.60]],seam,.0025);
 for(let ax of axles){let pts=[];for(let i=0;i<=34;i++){let a=i*Math.PI/34,x=ax+ar*Math.cos(a);pts.push([x,wy+ar*Math.sin(a),s*(sample(x,3)+.001)])}line(pts,paint,.006)}
 // Round early GD headlight lens, amber fender marker and separate round fog.
 let z=s*.588;
 function ell(rx,ry,ma,x,yy,zz){return grid(36,8,(u,v)=>{let a=u*Math.PI*2;return[x+.015*(1-v*v),yy+ry*v*Math.sin(a),zz+rx*v*Math.cos(a)]},ma)}
 ell(.165,.160,paint,-2.205,.715,z);ell(.151,.146,black,-2.213,.715,z);ell(.141,.136,lamp,-2.218,.715,z);
 ell(.108,.064,chrome,-2.223,.668,z);ell(.065,.030,chrome,-2.223,.789,z);
 line(Array.from({length:20},(_,i)=>[-2.225,.734,z+s*(-.13+i*.26/19)]),chrome,.003);
 ell(.128,.120,black,-2.224,.365,s*.593);ell(.082,.083,chrome,-2.222,.363,s*.593);ell(.060,.061,lamp,-2.232,.363,s*.593);
 grid(8,8,(u,v)=>{let x=-1.945+.12*u;return[x,.658+.125*v,s*(sample(x,3)+.007)]},amber);
 // The stock sedan has small rear corner lenses, not the wagon's tall lamps.
 function rearX(z){return 2.2025}
 // One continuous rear lens wraps the rounded corner, not a separate side sticker.
 function lens(u,v,off=0){let z,x;if(u<.51){z=.47+u/.51*.15;x=2.218;}else{let a=(u-.51)/.49*Math.PI/2;x=1.99+.23*Math.pow(Math.cos(a),.30);z=.62+.215*Math.pow(Math.sin(a),.30);}let edge=Math.pow(Math.sin(Math.PI*u),.23),y=.684+(v-.5)*.222*edge;return[x+off,y,s*z]}
 grid(64,12,(u,v)=>lens(u,v),red);
 grid(48,8,(u,v)=>{let p=lens(.09+.76*u,.59+.32*v,.006);return p},lamp);

}
// Rounded bumper face with central grille opening and broad lower intake.
function frontX(z){return -2.2025}
grid(20,40,(u,v)=>{let z=(-1+2*v)*.80;return[frontX(z),.22+(topY(-2.2025,z)-.22)*u,z]},paint);
grid(10,30,(u,v)=>{let z=(-1+2*v)*(.36+.05*u);return[frontX(z)-.014,.61+.155*u,z]},black);
for(let y=.64;y<.76;y+=.04)line([[-2.221,y,-.36],[-2.221,y,.36]],black,.006);
grid(12,30,(u,v)=>{let z=(-1+2*v)*(.37+.10*u);return[frontX(z)-.016,.265+.225*u,z]},black);
box(-2.225,.435,0,.035,.14,.32,paint,.008);
let badge=mesh(new T.TorusGeometry(.032,.005,6,24),chrome,-2.227,.697,0);badge.rotation.y=Math.PI/2;badge.scale.y=.55;
// Raised intercooler scoop is a body-specific hood detail, with a dark front mouth.
box(-.91,.971,0,.43,.065,.49,paint,.027);
box(-1.128,.968,0,.012,.038,.39,black,.009);
line([[-1.17,.935,-.27],[-.67,.969,-.25],[-.67,.969,.25],[-1.17,.935,.27]],seam,.0025);
// Distinct sedan trunk, low stock-style spoiler and rear bumper.
function rearX(z){return 2.2025}
grid(22,40,(u,v)=>{let z=(-1+2*v)*.80;return[rearX(z),.22+(topY(2.2025,z)-.22)*u,z]},paint);
box(2.20,.47,0,.024,.135,.39,black,.009);
line(Array.from({length:50},(_,i)=>{let z=-.78+i*1.56/49;return[rearX(z)+.01,.395,z]}),seam,.0025);
line([[1.48,.90,-.69],[1.98,.866,-.67],[2.19,.70,-.43],[2.19,.57,-.43],[2.19,.57,.43],[2.19,.70,.43],[1.98,.866,.67],[1.48,.90,.69]],seam,.003);
for(let s of [-1,1])box(1.94,.912,s*.51,.12,.11,.055,paint,.009);
box(1.94,.975,0,.28,.041,1.42,paint,.018);
let ex=mesh(new T.CylinderGeometry(.045,.045,.17,24),chrome,2.17,.235,.62);ex.rotation.z=Math.PI/2;ex=mesh(new T.CylinderGeometry(.034,.034,.18,24),black,2.183,.235,.62);ex.rotation.z=Math.PI/2;
// Generic lightweight five-spoke wheels, no factory wheel replication claim.
for(let x of axles)for(let s of [-1,1]){
 let out=s*.856,o=mesh(new T.CylinderGeometry(wr,wr,.20,40),tire,x,wy,s*.754);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.211,.017,8,36),chrome,x,wy,out);o=mesh(new T.CylinderGeometry(.196,.196,.015,28),black,x,wy,out-s*.008);o.rotation.x=Math.PI/2;
 for(let k=0;k<5;k++){let t=k*Math.PI*2/5;line([[x+Math.sin(t)*.035,wy+Math.cos(t)*.035,out],[x+Math.sin(t+.09)*.198,wy+Math.cos(t+.09)*.198,out]],chrome,.017)}
 o=mesh(new T.CylinderGeometry(.047,.047,.023,16),chrome,x,wy,out+s*.013);o.rotation.x=Math.PI/2;
}

// Bake soft bumper corner radii across fascia, trim and lamp surfaces together.
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),y=p.getY(i),z=p.getZ(i),f=Math.min(1,Math.max(0,(Math.abs(x)-1.78)/.35)),r=Math.pow(Math.min(1,Math.abs(z)/.85),3),d=.125*r*f;let yy=Math.max(0,Math.min(1,(y-.20)/.70)),curve=.055*Math.pow((yy-.48)*2,2)*f;p.setX(i,x+(x<0?d+curve:-d-curve));let low=Math.max(0,1-y/.72);p.setZ(i,z*(1-.065*low*low*f));p.setY(i,y+.025*low*f)}g.computeVertexNormals();o.geometry=g});
car.userData.originalBody=true;const merged=new T.Group(),groups=new Map();car.updateMatrixWorld(true);car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});for(let{mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal']){let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;merged.add(m)}merged.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return merged;},

'original:gr-yaris-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#d8d7d1',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified GR Yaris 2021 body. 3995x1805x1455, 2560 wheelbase.
const axles=[-1.1675,1.3925],wr=.326,wy=.333,ar=.361;
const sections=[[-1.9975,.735,.69,.72],[-1.91,.81,.77,.815],[-1.69,.88,.82,.858],[-1.38,.91,.85,.885],[-1.1675,.925,.88,.89],[-.86,.94,.87,.86],[-.60,.95,.86,.85],[0,.96,.86,.85],[.57,.97,.90,.875],[1.05,.98,.94,.9025],[1.3925,.97,.94,.9025],[1.72,.94,.91,.885],[1.9975,.85,.82,.795]];
function sample(x,i){for(let j=1;j<sections.length;j++)if(x<=sections[j][0]){let a=sections[j-1],b=sections[j],f=(x-a[0])/(b[0]-a[0]);f=f*f*(3-2*f);return a[i]+(b[i]-a[i])*f}return sections.at(-1)[i]}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)+(sample(x,2)-sample(x,1))*q*q}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
function bottom(x){let b=.205;for(let a of axles){let d=Math.abs(x-a);if(d<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-d*d))}return b}
grid(100,30,(u,v)=>{let x=-1.9975+3.995*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(190,12,(u,v)=>{let x=-1.9975+3.995*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.055*(1-v)-.032*Math.sin(Math.PI*v))]},paint);
box(0,.19,0,3.6,.065,1.44,black);
// Lower roof and compact3-door greenhouse, broad solid rear quarter, not the5-door Yaris.
const roof=[[-.91,.95,.755],[-.69,1.17,.70],[-.42,1.405,.638],[-.18,1.455,.627],[.22,1.452,.63],[.68,1.42,.633],[1.10,1.37,.65],[1.37,1.29,.683],[1.68,1.04,.744],[1.84,.925,.78]];
function cr(x,k){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],t=(x-a[0])/(b[0]-a[0]);return a[k]+(b[k]-a[k])*t}return roof.at(-1)[k]}
function cp(x,q){return[x,cr(x,1)-.045*q*q,q*cr(x,2)]}
grid(92,24,(u,v)=>cp(-.91+2.75*u,-1+2*v),paint);
// Black carbon-look roof panel, no texture taken from photographs.
grid(48,18,(u,v)=>{let p=cp(-.39+1.58*u,(-1+2*v)*.94);p[1]+=.003;return p},black);
for(let [a,b]of [[-.86,-.43],[1.36,1.79]])grid(28,18,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.92);p[1]+=.009;return p},glass);
for(let side of [-1,1]){
 function sideP(x,u,off=0){return[x,.89+(cr(x,1)-.045-.89)*u,side*(.827+(cr(x,2)-.827)*u+off)]}
 grid(90,12,(u,v)=>sideP(-.91+2.75*u,v),paint);
 function windowPanel(a,b,lo=.07,hi=.91){grid(40,9,(u,v)=>{let x=a+(b-a)*u,e=Math.min(1,u*9,(1-u)*9);return sideP(x,lo+(hi-lo)*v-.07*(1-e)*v,.008)},glass)}
 // Arched window corners, narrowing quarter light with no second-door outline.
 grid(48,10,(u,v)=>{let a=-.77+.11*Math.pow(1-v,4),b=.57-.035*v,x=a+(b-a)*u;return sideP(x,.055+.85*v,.008)},glass);
 grid(32,10,(u,v)=>{let a=.61,b=1.23-.15*Math.pow(2*v-1,2),x=a+(b-a)*u;return sideP(x,.08+.78*v,.008)},glass);
 grid(4,10,(u,v)=>sideP(.57+.04*u,.06+.85*v,.011),black);
 line([[-.73,.875,side*.852],[-.64,.31,side*.837],[-.44,.245,side*.823],[.54,.245,side*.85],[.67,.35,side*.866],[.62,.89,side*.875]],seam,.003);
 box(.41,.839,side*.857,.17,.034,.025,paint,.01);
 box(-.63,1.005,side*.81,.05,.055,.14,black);box(-.66,1.045,side*.915,.225,.105,.13,black,.025);
 box(.11,.218,side*.821,1.7,.048,.07,paint,.01);
 // Bulged rear quarter is in shell, no flat overfender attached.
 for(let ax of axles){let pts=[];for(let i=0;i<=38;i++){let t=i*Math.PI/38,x=ax+ar*Math.cos(t);pts.push([x,wy+ar*Math.sin(t),side*(sample(x,3)-.002)])}line(pts,paint,.006)}
 // Swept broad headlights, narrowing into a black upper nose.
 function hp(u,v){let z=side*(.30+.52*u),x=-2.026+.12*u*u+.10*u*u*v,y=.700+.026*u+.028*Math.sin(Math.PI*u)+(.050+.060*u)*v;return[x,y,z]}
 grid(32,10,(u,v)=>hp(u,v),black);
 // Lamp perimeter returns meet the fender and bonnet, leaving no loose blade.
 grid(32,6,(u,v)=>{let p=hp(u,1),x=p[0]+.13*v;return[x,p[1]*(1-v)+topY(x,p[2])*v,p[2]]},paint);
 for(let u of [0,1])grid(10,5,(a,b)=>{let p=hp(u,a),z=p[2]+side*.035*b;return[p[0],p[1]*(1-b)+topY(p[0],z)*b,z]},paint);
 line(Array.from({length:25},(_,i)=>hp(i/24,.94)),lamp,.007);
 line(Array.from({length:25},(_,i)=>hp(i/24,.07)),lamp,.006);
 for(let u of [.26,.50,.74])line([hp(u,.22),hp(u,.75),hp(u+.065,.76)],chrome,.008);

}
// The near-vertical central trapezoid and separated stacked corner ducts define the early GR nose.
function frontX(z){return -2.01+.10*Math.pow(Math.abs(z)/.84,3)}
grid(20,44,(u,v)=>{let z=(-1+2*v)*.80;return[frontX(z),.21+.51*u,z]},paint);
grid(14,32,(u,v)=>{let z=(-1+2*v)*(.59+.055*u);return[frontX(z)-.012,.235+.405*u,z]},black);
for(let y=.28;y<.62;y+=.055)for(let z=-.56;z<.57;z+=.10){let pts=[];for(let k=0;k<=6;k++){let t=k*Math.PI/3;pts.push([frontX(z)-.019,y+.022*Math.sin(t),z+.043*Math.cos(t)])}line(pts,black,.0035)}
for(let side of [-1,1]){
 poly([[frontX(side*.69)-.01,.255,side*.69],[frontX(side*.805)-.01,.27,side*.805],[frontX(side*.80)-.01,.65,side*.80],[frontX(side*.665)-.01,.66,side*.665]],black);
 poly([[frontX(side*.67)-.018,.44,side*.67],[frontX(side*.80)-.018,.47,side*.80],[frontX(side*.80)-.018,.51,side*.80],[frontX(side*.665)-.018,.49,side*.665]],paint);
 box(frontX(.74)-.026,.335,side*.74,.018,.064,.067,lamp,.012);
 // narrow black connector beneath leading bonnet edge.
 poly([[-2.004,.705,0],[-1.99,.725,side*.32],[-1.98,.68,side*.37],[-2.007,.67,0]],black);
 line([[-1.84,.85,side*.34],[-1.38,.917,side*.49],[-.86,.956,side*.63]],seam,.0025);
}
box(-2.017,.216,0,.045,.027,1.42,paint,.006);
// Elliptical badge outline joins the narrow upper grille.
let badge=mesh(new T.TorusGeometry(.036,.006,6,24),chrome,-2.026,.716,0);badge.rotation.y=Math.PI/2;badge.scale.y=.75;
// Rear hatch with high black bridge and C-shaped lenses, deep lower diffuser and two circular pipes.
function rearX(z){return 2.00-.08*Math.pow(Math.abs(z)/.84,3)}
grid(24,44,(u,v)=>{let z=(-1+2*v)*.80;return[rearX(z),.22+.67*u,z]},paint);
grid(10,40,(u,v)=>{let z=(-1+2*v)*.81,yy=.875;return[rearX(z)+.012,.73+.055*Math.exp(-Math.pow(z/.32,4))+(.145-.055*Math.exp(-Math.pow(z/.32,4)))*u,z]},black);
for(let side of [-1,1]){
 let pts=[[.34,.86],[.65,.865],[.80,.89],[.82,.82],[.78,.70],[.68,.66],[.51,.70],[.43,.80]].map(([z,y])=>[rearX(z)+.022,y,side*z]);poly(pts,red);
 let inner=[[.49,.82],[.72,.83],[.74,.78],[.70,.73],[.56,.75]].map(([z,y])=>[rearX(z)+.026,y,side*z]);poly(inner,black);
 line([[rearX(.48)+.03,.84,side*.48],[rearX(.72)+.03,.85,side*.72],[rearX(.76)+.03,.82,side*.76]],red,.008);
 poly([[1.72,.83,side*.877],[1.98,.80,side*.799],[1.98,.88,side*.799],[1.74,.90,side*.877]],black);
 grid(20,4,(u,v)=>{let x=1.74+.22*u;return[x,.85+.035*v,side*(sample(x,3)+.003)]},red);
 let o=mesh(new T.CylinderGeometry(.057,.057,.13,24),chrome,2.015,.22,side*.61);o.rotation.z=Math.PI/2;o=mesh(new T.CylinderGeometry(.044,.044,.14,24),black,2.025,.22,side*.61);o.rotation.z=Math.PI/2;
 box(rearX(.72)+.016,.30,side*.72,.018,.027,.19,red,.005);
}
grid(12,30,(u,v)=>{let z=(-1+2*v)*(.61+.09*u);return[rearX(z)+.012,.175+.22*u,z]},black);
box(2.014,.57,0,.022,.14,.40,black,.012);
line([[1.79,.93,-.70],[1.96,.73,-.64],[1.97,.44,-.50],[1.97,.43,.50],[1.96,.73,.64],[1.79,.93,.70]],seam,.003);
box(1.32,1.315,0,.19,.032,1.34,black,.012);box(1.38,1.305,0,.13,.016,1.29,black,.009);box(1.445,1.308,0,.015,.014,.63,red,.004);
// Lightweight generic10-spoke18-inch-style wheels, not an exact factory wheel claim.
for(let x of axles)for(let side of [-1,1]){
 let z=side*.782,out=side*.902;let o=mesh(new T.CylinderGeometry(wr,wr,.225,40),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.25,.012,8,40),black,x,wy,out);let d=mesh(new T.CylinderGeometry(.221,.221,.016,32),black,x,wy,out-side*.012);d.rotation.x=Math.PI/2;
 box(x+.13,wy,side*.889,.055,.17,.025,red,.009);
 for(let a=0;a<10;a++){let t=a*Math.PI/5;line([[x+Math.sin(t)*.05,wy+Math.cos(t)*.05,out],[x+Math.sin(t+.07)*.245,wy+Math.cos(t+.07)*.245,out]],black,.012)}
 let h=mesh(new T.CylinderGeometry(.052,.052,.026,16),chrome,x,wy,out+side*.015);h.rotation.x=Math.PI/2;
}

// Plan-view bumper rounding applied in baked coordinates to fascia and lamps together.
car.traverse(o=>{if(!o.isMesh)return;o.updateMatrix();let g=o.geometry.clone();g.applyMatrix4(o.matrix);o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);let p=g.attributes.position;for(let i=0;i<p.count;i++){let x=p.getX(i),z=p.getZ(i),f=Math.min(1,Math.max(0,(Math.abs(x)-1.62)/.35)),d=.115*Math.pow(Math.min(1,Math.abs(z)/.90),3)*f;p.setX(i,x+(x<0?d:-d))}g.computeVertexNormals();o.geometry=g});
car.userData.originalBody=true;const merged=new T.Group(),groups=new Map();car.updateMatrixWorld(true);car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});for(let{mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal']){let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;merged.add(m)}merged.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return merged;},

'original:golf-r-mk8-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#1556a4',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2024-US Mk8 Golf R variant study, measured envelope from VW press kit.
const sections=[[-2.144,.69,.68,.71],[-2.06,.79,.74,.80],[-1.84,.87,.83,.865],[-1.50,.91,.88,.894],[-1.316,.93,.90,.894],[-1.02,.95,.88,.88],[-.60,.96,.86,.878],[0,.96,.86,.878],[.65,.96,.88,.887],[1.316,.95,.91,.894],[1.70,.93,.86,.872],[2.03,.86,.82,.83],[2.144,.78,.77,.79]];
function sample(x,i){for(let j=1;j<sections.length;j++)if(x<=sections[j][0]){let a=sections[j-1],b=sections[j],f=(x-a[0])/(b[0]-a[0]);return a[i]+(b[i]-a[i])*f}return sections.at(-1)[i]}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)*(1-q*q)+sample(x,2)*q*q}
const axles=[-1.316,1.316],wr=.318,wy=.325,ar=.356;
function bottom(x){let b=.22;for(let a of axles){let dx=Math.abs(x-a);if(dx<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-dx*dx))}return b}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
grid(92,24,(u,v)=>{let x=-2.144+4.288*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(160,8,(u,v)=>{let x=-2.144+4.288*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.025*(1-v)-.028*Math.sin(v*Math.PI))]},paint);
box(0,.20,0,3.85,.08,1.47,black);
// Distinct four-door hatch greenhouse with near-upright tail and thick Golf C-pillar.
const roof=[[-1.01,.96,.78],[-.83,1.10,.74],[-.54,1.36,.674],[-.30,1.445,.65],[.15,1.463,.648],[.75,1.46,.657],[1.21,1.43,.672],[1.49,1.31,.703],[1.79,1.06,.76],[1.92,.89,.79]];
function cr(x,k){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],t=(x-a[0])/(b[0]-a[0]);return a[k]+(b[k]-a[k])*t}return roof.at(-1)[k]}
function cp(x,q){return[x,cr(x,1)-.05*q*q,q*cr(x,2)]}
grid(84,20,(u,v)=>cp(-1.01+2.93*u,-1+2*v),paint);
function canopy(a,b){grid(25,16,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.93);p[1]+=.006;return p},glass)}
canopy(-.98,-.49);canopy(1.43,1.86);
for(let side of [-1,1]){
 function sideP(x,u,off){return[x,.90+(cr(x,1)-.05-.90)*u,side*(.861+(cr(x,2)-.861)*u+off)]}
 grid(84,10,(u,v)=>sideP(-1.01+2.93*u,v,0),paint);
 function windowPanel(a,b){grid(38,8,(u,v)=>{let x=a+(b-a)*u,edge=Math.min(1,u*12,(1-u)*12);return sideP(x,.09+.84*v-.055*(1-edge)*v,.007)},glass)}
 windowPanel(-.88,.12);windowPanel(.21,1.34);
 // black B-pillar, small rear quarter pane and painted C-pillar.
 grid(3,8,(u,v)=>sideP(.115+.105*u,.08+.86*v,.011),black);
 line([[1.07,.955,side*.85],[1.16,1.35,side*.707]],black,.011);
 for(let x of [.07,1.22])box(x,.835,side*.881,.18,.042,.025,paint,.012);
 line([[-.87,.875,side*.881],[-.79,.34,side*.87],[-.61,.275,side*.865],[.20,.275,side*.865],[.20,.89,side*.878]],seam,.003);
 line([[.22,.275,side*.865],[.92,.275,side*.874],[1.10,.43,side*.881],[1.39,.83,side*.872]],seam,.003);
 line([[-1.0,.88,side*.889],[1.69,.88,side*.885]],seam,.0025);
 box(.05,.238,side*.853,1.83,.048,.075,paint,.01);
 box(-.76,1.02,side*.842,.065,.06,.14,black);box(-.76,1.07,side*.927,.24,.12,.135,chrome,.025);
 box(-1.02,.815,side*.887,.17,.028,.009,black,.004);
 for(let ax of axles){let pts=[];for(let i=0;i<=34;i++){let t=Math.PI*i/34,x=ax+ar*Math.cos(t);pts.push([x,wy+ar*Math.sin(t),side*(sample(x,3)+.001)])}line(pts,paint,.007)}
}
// Thin swept Mk8 lamps and blue R upper line.
for(let side of [-1,1]){
 grid(28,7,(u,v)=>{let z=side*(.32+.515*u),front=-2.142+.12*u*u,rear=-2.095+.285*u*u,x=front+(rear-front)*v;return[x,topY(x,z)+.012,z]},black);
 line(Array.from({length:25},(_,i)=>{let u=i/24,z=side*(.33+.50*u),x=-2.10+.28*u*u;return[x,topY(x,z)+.024,z]}),lamp,.008);
 line(Array.from({length:25},(_,i)=>{let u=i/24,z=side*(.42+.40*u),x=-2.14+.12*u*u;return[x,topY(x,z)+.024,z]}),lamp,.008);
 poly([[-2.15,.69,0],[-2.148,.735,side*.32],[-2.15,.682,side*.40],[-2.153,.66,0]],black);
 line([[-2.158,.70,0],[-2.156,.705,side*.32]],paint,.010);line([[-2.163,.679,0],[-2.160,.684,side*.32]],lamp,.006);
 for(let [x,z]of [[-2.085,.46],[-1.99,.69]]){let o=mesh(new T.SphereGeometry(.032,12,7),lamp,x,topY(x,side*z)+.025,side*z);o.scale.y=.4;}
 // R twin outboard intakes joining central lower opening, horizontal bars, no GTI fog X.
 poly([[-2.168,.26,0],[-2.168,.26,side*.78],[-2.13,.36,side*.83],[-2.10,.54,side*.74],[-2.10,.575,side*.62],[-2.15,.55,side*.47],[-2.15,.56,0]],black);
 poly([[-2.18,.28,side*.48],[-2.18,.28,side*.76],[-2.15,.325,side*.72],[-2.14,.36,side*.40]],paint);
 for(let y=.315;y<=.51;y+=.055)box(-2.157,y,side*.385,.010,.010,.73,black);
 line([[-2.17,.28,side*.48],[-2.165,.36,side*.41],[-2.14,.54,side*.53]],black,.018);
 poly([[-2.181,.27,side*.46],[-2.181,.27,side*.74],[-2.18,.34,side*.67],[-2.18,.38,side*.38]],paint);
}
box(-2.17,.25,0,.07,.027,1.59,black,.005);
// Close upper front without an open seam.
poly([[-2.145,.69,-.71],[-2.145,.69,.71],[-2.15,.55,.69],[-2.15,.55,-.69]],paint);
// Hatch, split wraparound lamps, spoiler and dual outboard exhaust.
grid(9,30,(u,v)=>{let z=(-1+2*v)*.79;return[2.144-.03*Math.pow(Math.abs(z)/.79,4),.25+.54*u,z]},paint);
for(let side of [-1,1])poly([[2.14,.26,side*.77],[2.14,.85,side*.75],[2.03,.86,side*.83],[2.03,.25,side*.80]],paint);
box(1.36,1.402,0,.30,.035,1.42,paint,.012);
box(1.47,1.378,0,.32,.024,1.34,black,.007);
for(let side of [-1,1])box(1.51,1.402,side*.57,.18,.032,.22,paint,.009);
box(1.46,1.386,0,.012,.015,.65,red,.004);
for(let side of [-1,1]){
 // Flush split tail lenses across rear face; no external bracket geometry.
 grid(24,4,(u,v)=>{let z=side*(.34+.42*u);return[2.155,.727+.095*v,z]},black);
 grid(24,3,(u,v)=>{let z=side*(.36+.38*u);return[2.161,.766+.043*v,z]},red);
 line([[2.163,.742,side*.36],[2.163,.742,side*.70]],chrome,.004);
 grid(24,4,(u,v)=>{let x=1.79+.34*u;return[x,.757+.085*v,side*(sample(x,3)+.005)]},black);
 grid(24,3,(u,v)=>{let x=1.82+.29*u;return[x,.785+.035*v,side*(sample(x,3)+.009)]},red);
 box(2.17,.435,side*.60,.012,.027,.26,red,.006);
 for(let z of [.585,.70]){let o=mesh(new T.CylinderGeometry(.046,.046,.12,24),chrome,2.19,.215,side*z);o.rotation.z=Math.PI/2;let e=mesh(new T.CylinderGeometry(.035,.035,.13,24),black,2.20,.215,side*z);e.rotation.z=Math.PI/2;}

}
box(2.16,.427,0,.016,.12,.39,black,.014);box(2.14,.235,0,.075,.14,1.51,black,.024);
for(let z of [-.44,-.22,0,.22,.44])box(2.17,.22,z,.14,.10,.025,black,.005);
for(let side of [-1,1])poly([[-.92,.27,side*.88],[1.02,.27,side*.88],[1.08,.23,side*.91],[-.93,.23,side*.91]],paint);
line([[1.965,.87,-.71],[2.11,.72,-.70],[2.11,.40,-.63],[2.11,.37,.63],[2.11,.72,.70],[1.965,.87,.71]],seam,.003);
line([[1.792,1.065,-.36],[1.832,1.034,.13]],black,.012);
// Simplified five-broad-blade Mk8-style wheels. No exact wheel-design claim.
for(let x of axles)for(let side of [-1,1]){
 let z=side*.775,out=side*.899;let o=mesh(new T.CylinderGeometry(wr,wr,.235,40),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.25,.012,8,40),chrome,x,wy,out);
 let d=mesh(new T.CylinderGeometry(.214,.214,.018,32),black,x,wy,out-side*.018);d.rotation.x=Math.PI/2;
 box(x+.13,wy,side*.88,.063,.18,.03,paint,.01);
 for(let a=0;a<5;a++)for(let delta of [-.085,.085]){let t=a*Math.PI*2/5+delta;let o=box(x+Math.sin(t)*.145,wy+Math.cos(t)*.145,out+side*.01,.022,.21,.018,chrome,.004);o.rotation.z=-t;}
 let h=mesh(new T.CylinderGeometry(.055,.055,.026,16),chrome,x,wy,out+side*.015);h.rotation.x=Math.PI/2;
}

const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;},
'original:golf-gti-mk8-original':function(){const T=THREE,car=new T.Group();
const mat=(c,m=0,r=.55)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,side:T.DoubleSide});
const paint=mat('#d8d7d1',.35,.38),black=mat('#252a2d',.05,.66),tire=mat('#151719',0,.85),glass=mat('#283d45',.35,.19),chrome=mat('#aeb3b3',.75,.29),lamp=mat('#f1f6e8',.1,.25),red=mat('#b71922',.2,.35),amber=mat('#e79729',.15,.4),seam=mat('#605a50');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;car.add(o);return o}
function box(x,y,z,l,h,w,m,b=0){if(!b)return mesh(new T.BoxGeometry(l,h,w),m,x,y,z);let s=new T.Shape(),a=l/2,c=h/2;s.moveTo(-a+b,-c);s.lineTo(a-b,-c);s.quadraticCurveTo(a,-c,a,-c+b);s.lineTo(a,c-b);s.quadraticCurveTo(a,c,a-b,c);s.lineTo(-a+b,c);s.quadraticCurveTo(-a,c,-a,c-b);s.lineTo(-a,-c+b);s.quadraticCurveTo(-a,-c,-a+b,-c);return mesh(new T.ExtrudeGeometry(s,{depth:w-2*b,bevelEnabled:true,bevelSize:b*.4,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4}),m,x,y,z-w/2+b)}
function poly(v,m){let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.flat(),3));let ix=[];for(let i=1;i<v.length-1;i++)ix.push(0,i,i+1);g.setIndex(ix);g.computeVertexNormals();return mesh(g,m)}
function line(v,m=seam,rad=.005){for(let i=1;i<v.length;i++){let a=new T.Vector3(...v[i-1]),b=new T.Vector3(...v[i]),d=b.clone().sub(a);let o=mesh(new T.CylinderGeometry(rad,rad,d.length(),6),m);o.position.copy(a.add(b).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize())}}
// Original simplified 2024-US Mk8 GTI study, measured envelope from VW press kit.
const sections=[[-2.144,.69,.68,.71],[-2.06,.79,.74,.80],[-1.84,.87,.83,.865],[-1.50,.91,.88,.894],[-1.316,.93,.90,.894],[-1.02,.95,.88,.88],[-.60,.96,.86,.878],[0,.96,.86,.878],[.65,.96,.88,.887],[1.316,.95,.91,.894],[1.70,.93,.86,.872],[2.03,.86,.82,.83],[2.144,.78,.77,.79]];
function sample(x,i){for(let j=1;j<sections.length;j++)if(x<=sections[j][0]){let a=sections[j-1],b=sections[j],f=(x-a[0])/(b[0]-a[0]);return a[i]+(b[i]-a[i])*f}return sections.at(-1)[i]}
function topY(x,z){let q=Math.abs(z)/sample(x,3);return sample(x,1)*(1-q*q)+sample(x,2)*q*q}
const axles=[-1.316,1.316],wr=.318,wy=.325,ar=.356;
function bottom(x){let b=.22;for(let a of axles){let dx=Math.abs(x-a);if(dx<ar)b=Math.max(b,wy+Math.sqrt(ar*ar-dx*dx))}return b}
function grid(n,m,fn,ma){let v=[],ix=[];for(let i=0;i<=n;i++)for(let j=0;j<=m;j++)v.push(...fn(i/n,j/m));for(let i=0;i<n;i++)for(let j=0;j<m;j++){let k=i*(m+1)+j;ix.push(k,k+1,k+m+1,k+1,k+m+2,k+m+1)}let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setIndex(ix);g.computeVertexNormals();return mesh(g,ma)}
grid(92,24,(u,v)=>{let x=-2.144+4.288*u,z=(-1+2*v)*sample(x,3);return[x,topY(x,z),z]},paint);
for(let side of [-1,1])grid(160,8,(u,v)=>{let x=-2.144+4.288*u,b=bottom(x);return[x,b+(sample(x,2)-b)*v,side*(sample(x,3)-.025*(1-v)-.028*Math.sin(v*Math.PI))]},paint);
box(0,.20,0,3.85,.08,1.47,black);
// Distinct four-door hatch greenhouse with near-upright tail and thick Golf C-pillar.
const roof=[[-1.01,.96,.78],[-.83,1.10,.74],[-.54,1.36,.674],[-.30,1.445,.65],[.15,1.463,.648],[.75,1.46,.657],[1.21,1.43,.672],[1.49,1.31,.703],[1.79,1.06,.76],[1.92,.89,.79]];
function cr(x,k){for(let i=1;i<roof.length;i++)if(x<=roof[i][0]){let a=roof[i-1],b=roof[i],t=(x-a[0])/(b[0]-a[0]);return a[k]+(b[k]-a[k])*t}return roof.at(-1)[k]}
function cp(x,q){return[x,cr(x,1)-.05*q*q,q*cr(x,2)]}
grid(84,20,(u,v)=>cp(-1.01+2.93*u,-1+2*v),paint);
function canopy(a,b){grid(25,16,(u,v)=>{let p=cp(a+(b-a)*u,(-1+2*v)*.93);p[1]+=.006;return p},glass)}
canopy(-.98,-.49);canopy(1.43,1.86);
for(let side of [-1,1]){
 function sideP(x,u,off){return[x,.90+(cr(x,1)-.05-.90)*u,side*(.861+(cr(x,2)-.861)*u+off)]}
 grid(84,10,(u,v)=>sideP(-1.01+2.93*u,v,0),paint);
 function windowPanel(a,b){grid(38,8,(u,v)=>{let x=a+(b-a)*u,edge=Math.min(1,u*12,(1-u)*12);return sideP(x,.09+.84*v-.055*(1-edge)*v,.007)},glass)}
 windowPanel(-.88,.12);windowPanel(.21,1.34);
 // black B-pillar, small rear quarter pane and painted C-pillar.
 grid(3,8,(u,v)=>sideP(.115+.105*u,.08+.86*v,.011),black);
 line([[1.07,.955,side*.85],[1.16,1.35,side*.707]],black,.011);
 for(let x of [.07,1.22])box(x,.835,side*.881,.18,.042,.025,paint,.012);
 line([[-.87,.875,side*.881],[-.79,.34,side*.87],[-.61,.275,side*.865],[.20,.275,side*.865],[.20,.89,side*.878]],seam,.003);
 line([[.22,.275,side*.865],[.92,.275,side*.874],[1.10,.43,side*.881],[1.39,.83,side*.872]],seam,.003);
 line([[-1.0,.88,side*.889],[1.69,.88,side*.885]],seam,.0025);
 box(.05,.238,side*.853,1.83,.048,.075,paint,.01);
 box(-.76,1.02,side*.842,.065,.06,.14,black);box(-.76,1.07,side*.927,.24,.12,.135,paint,.025);
 box(-1.02,.815,side*.887,.17,.028,.009,red,.004);
 for(let ax of axles){let pts=[];for(let i=0;i<=34;i++){let t=Math.PI*i/34,x=ax+ar*Math.cos(t);pts.push([x,wy+ar*Math.sin(t),side*(sample(x,3)+.001)])}line(pts,paint,.007)}
}
// Thin swept Mk8 lamps and red GTI upper line.
for(let side of [-1,1]){
 grid(28,7,(u,v)=>{let z=side*(.32+.515*u),front=-2.142+.12*u*u,rear=-2.095+.285*u*u,x=front+(rear-front)*v;return[x,topY(x,z)+.012,z]},black);
 line(Array.from({length:25},(_,i)=>{let u=i/24,z=side*(.33+.50*u),x=-2.10+.28*u*u;return[x,topY(x,z)+.024,z]}),lamp,.008);
 line(Array.from({length:25},(_,i)=>{let u=i/24,z=side*(.42+.40*u),x=-2.14+.12*u*u;return[x,topY(x,z)+.024,z]}),lamp,.008);
 poly([[-2.15,.69,0],[-2.148,.735,side*.32],[-2.15,.682,side*.40],[-2.153,.66,0]],black);
 line([[-2.158,.70,0],[-2.156,.705,side*.32]],red,.008);
 for(let [x,z]of [[-2.085,.46],[-1.99,.69]]){let o=mesh(new T.SphereGeometry(.032,12,7),lamp,x,topY(x,side*z)+.025,side*z);o.scale.y=.4;}
 // One broad lower honeycomb intake with wing-like painted outer edges.
 poly([[-2.17,.255,0],[-2.16,.255,side*.77],[-2.145,.34,side*.81],[-2.13,.50,side*.70],[-2.12,.58,side*.61],[-2.15,.58,0]],black);
 line([[-2.142,.27,side*.76],[-2.135,.34,side*.80],[-2.112,.51,side*.70],[-2.103,.565,side*.61]],paint,.011);
 // Five LED fog units in X arrangement, simplified lenses.
 for(let [z,y]of [[.57,.48],[.69,.48],[.63,.415],[.57,.35],[.69,.35]])box(-2.176,y,side*z,.012,.026,.041,lamp,.006);
}
for(let y=.30;y<.56;y+=.063)for(let z=-.73;z<=.74;z+=.108){let zz=z+(Math.round(y/.063)%2)*.054;if(Math.abs(zz)>.67)continue;let pts=[];for(let a=0;a<=6;a++){let t=a*Math.PI/3;pts.push([-2.174,y+.027*Math.sin(t),zz+.048*Math.cos(t)])}line(pts,black,.004)}
box(-2.171,.245,0,.07,.028,1.59,paint,.005);
// Close upper front without an open seam.
poly([[-2.145,.69,-.71],[-2.145,.69,.71],[-2.145,.59,.69],[-2.145,.59,-.69]],paint);
// Hatch, split wraparound lamps, spoiler and dual outboard exhaust.
grid(9,30,(u,v)=>{let z=(-1+2*v)*.79;return[2.144-.03*Math.pow(Math.abs(z)/.79,4),.25+.54*u,z]},paint);
for(let side of [-1,1])poly([[2.14,.26,side*.77],[2.14,.85,side*.75],[2.03,.86,side*.83],[2.03,.25,side*.80]],paint);
box(1.34,1.397,0,.23,.035,1.39,paint,.012);box(1.39,1.378,0,.18,.022,1.31,black,.007);
box(1.46,1.386,0,.012,.015,.65,red,.004);
for(let side of [-1,1]){
 // Flush split tail lenses across rear face; no external bracket geometry.
 grid(24,4,(u,v)=>{let z=side*(.34+.42*u);return[2.155,.727+.095*v,z]},black);
 grid(24,3,(u,v)=>{let z=side*(.36+.38*u);return[2.161,.766+.043*v,z]},red);
 line([[2.163,.742,side*.36],[2.163,.742,side*.70]],chrome,.004);
 grid(24,4,(u,v)=>{let x=1.79+.34*u;return[x,.757+.085*v,side*(sample(x,3)+.005)]},black);
 grid(24,3,(u,v)=>{let x=1.82+.29*u;return[x,.785+.035*v,side*(sample(x,3)+.009)]},red);
 box(2.17,.435,side*.60,.012,.027,.26,red,.006);
 let o=mesh(new T.CylinderGeometry(.055,.055,.12,24),chrome,2.19,.215,side*.64);o.rotation.z=Math.PI/2;let e=mesh(new T.CylinderGeometry(.042,.042,.13,24),black,2.20,.215,side*.64);e.rotation.z=Math.PI/2;
}
box(2.16,.527,0,.016,.14,.39,black,.014);box(2.14,.235,0,.075,.12,1.51,black,.027);
line([[1.965,.87,-.71],[2.11,.72,-.70],[2.11,.40,-.63],[2.11,.37,.63],[2.11,.72,.70],[1.965,.87,.71]],seam,.003);
line([[1.792,1.065,-.36],[1.832,1.034,.13]],black,.012);
// Simplified five-broad-blade Mk8-style wheels. No exact wheel-design claim.
for(let x of axles)for(let side of [-1,1]){
 let z=side*.775,out=side*.899;let o=mesh(new T.CylinderGeometry(wr,wr,.235,40),tire,x,wy,z);o.rotation.x=Math.PI/2;
 mesh(new T.TorusGeometry(.25,.012,8,40),chrome,x,wy,out);
 let d=mesh(new T.CylinderGeometry(.214,.214,.018,32),black,x,wy,out-side*.018);d.rotation.x=Math.PI/2;
 box(x+.13,wy,side*.88,.063,.18,.03,red,.01);
 for(let a=0;a<5;a++){let t=a*Math.PI*2/5;let q=[[.05,-.025],[.16,-.065],[.25,-.010],[.23,.050],[.09,.045]].map(([r,b])=>[x+Math.sin(t)*r+Math.cos(t)*b,wy+Math.cos(t)*r-Math.sin(t)*b,out+side*.01]);poly(q,chrome)}
 let h=mesh(new T.CylinderGeometry(.055,.055,.026,16),chrome,x,wy,out+side*.015);h.rotation.x=Math.PI/2;
}

const optimize=()=>{car.updateMatrixWorld(true);let groups=new Map();car.traverse(o=>{if(!o.isMesh)return;let k=o.material.uuid;if(!groups.has(k))groups.set(k,{mat:o.material,geo:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(o.matrixWorld);groups.get(k).geo.push(g)});let out=new T.Group();for(let {mat,geo}of groups.values()){let g=new T.BufferGeometry();for(let attr of ['position','normal','uv']){if(!geo.every(x=>x.attributes[attr]))continue;let size=geo[0].attributes[attr].itemSize,len=geo.reduce((n,x)=>n+x.attributes[attr].array.length,0),a=new Float32Array(len),i=0;for(let x of geo){a.set(x.attributes[attr].array,i);i+=x.attributes[attr].array.length}g.setAttribute(attr,new T.BufferAttribute(a,size))}let m=new T.Mesh(g,mat);m.castShadow=m.receiveShadow=true;out.add(m)}return out};const result=optimize();result.traverse(o=>{if(o.isMesh&&o.material.color)o.material.color.convertSRGBToLinear()});return result;},
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
 if(mdef?.url==='original:grcorolla-core-original')caption.textContent=S.lang==='ar'?'GR Corolla أصلي مبسط. الفوانيس والإكصدامات والجنوط مبسطة. اسحب للتدوير.':'Original simplified GR Corolla. Simplified lamps, bumpers and wheels. Drag to orbit.';
 if(mdef?.url==='original:3000gt-vr4-z16a-original')caption.textContent=S.lang==='ar'?'3000GT أصلي مبسط. الفوانيس والإكصدامات والجنوط مبسطة. اسحب للتدوير.':'Original simplified 3000GT. Simplified lamps, bumpers and wheels. Drag to orbit.';
 if(mdef?.url==='original:viper-gts-sr2-original')caption.textContent=S.lang==='ar'?'Viper GTS أصلي مبسط. الفوانيس والإكصدامات والجنوط مبسطة. اسحب للتدوير.':'Original simplified Viper GTS. Coarse lamps, bumpers and wheels. Drag to orbit.';
 if(mdef?.url==='original:impreza-wrx-bugeye-original')caption.textContent=S.lang==='ar'?'WRX بوغ آي أصلي مبسط. الفوانيس والإكصدامات والجنوط مبسطة. اسحب للتدوير.':'Original simplified bugeye WRX. Coarse lamps, bumpers and wheels. Drag to orbit.';
 if(mdef?.url==='original:gr-yaris-original')caption.textContent=S.lang==='ar'?'GR Yaris أصلي مبسط. الفوانيس والإكصدامات والجنوط مبسطة، مش نسخة مطابقة. اسحب للتدوير.':'Original simplified GR Yaris. Coarse lamps, bumpers and wheels, not an exact replica. Drag to orbit.';
            }
