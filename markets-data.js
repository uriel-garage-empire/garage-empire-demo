/* Garage Empire country markets. All prices are game values. Rates are fixed game rates, not live FX.
   Only items listed in facts[] with a URL are individually sourced; everything else is a game estimate. */
(function(){
const MAIN=['Toyota','Nissan','Hyundai','Kia','Chevrolet','Ford','Honda','Mazda','Volkswagen'];
const PREM=['BMW','Audi','Mercedes-AMG','Lexus','Porsche'];
const E=(en,ar,url)=>[en,ar,url];
const C={
eg:{n:['Egypt','مصر'],cur:'EGP',cl:['EGP','ج.م'],rate:50,vat:.14,vs:1,duty:[[140,.40],[250,.60],[1e9,1.0]],ship:.05,reg:70,home:[],sold:MAIN.concat(['BMW','Audi','Mercedes-AMG']),
 facts:[E('Egyptian Law 149/2026 (ETA PDF) states the general VAT rate is 14% (from FY 2017/18)','القانون 149 لسنة 2026 (ملف مصلحة الضرائب) بينص إن سعر الضريبة العام 14% (من السنة المالية 2017/18)','https://eta.gov.eg/sites/default/files/2026-08/law.no%5F.149.of%5F.2026.pdf'),
 E('Plate colour shows licence type under Interior Ministry decree 1330/2023: private light blue, taxi orange, transport red (table from a secondary copy, not the Gazette)','لون اللوحة بيحدد نوع الترخيص حسب قرار وزير الداخلية 1330 لسنة 2023: ملاكي لبني، أجرة برتقالي، نقل أحمر (جدول من نسخة منشورة مش الوقائع)','https://alliedforlegalandtaxadvice.com/%d9%82%d8%b1%d8%a7%d8%b1-%d8%b1%d9%82%d9%85-1330-%d9%84%d8%b3%d9%86%d8%a9-2023/')]},
ae:{n:['UAE','الإمارات'],cur:'AED',cl:['AED','د.إ'],rate:3.67,vat:.05,vs:1,duty:.05,ship:.04,reg:250,home:[],sold:MAIN.concat(PREM),
 facts:[]},
sa:{n:['Saudi Arabia','السعودية'],cur:'SAR',cl:['SAR','ر.س'],rate:3.75,vat:.15,duty:.05,ds:1,ship:.04,reg:150,home:[],sold:MAIN.concat(PREM),
 facts:[]},
de:{n:['Germany','ألمانيا'],cur:'EUR',cl:['EUR','يورو'],rate:.92,vat:.19,vs:1,duty:.10,ship:.04,reg:60,home:['BMW','Porsche','Volkswagen','Audi','Mercedes-AMG'],sold:MAIN,
 facts:[]},
us:{n:['USA','أمريكا'],cur:'USD',cl:['USD','دولار'],rate:1,vat:0,duty:.025,ds:1,extra:.25,exemptYear:2001,ship:.04,reg:90,home:['Chevrolet','Ford','Dodge','Tesla'],sold:MAIN,
 facts:[E('General duty on cars 2.5% (US tariff schedule, chapter 87)','الجمارك العامة على السيارات 2.5% (التعريفة الأمريكية فصل 87)','https://hts.usitc.gov/reststop/file?filename=Chapter+87&release=2025HTSRev29'),
 E('CBP lists a 25% Section 232 duty on cars since 3 Apr 2025, with an exemption for 25-year-old cars. The current rate is not verified, so the game rate is an estimate.','هيئة الجمارك الأمريكية بتذكر رسم 25% (المادة 232) من 3 أبريل 2025 مع استثناء للعربيات فوق 25 سنة. السعر الحالي مش متأكد منه فالرقم في اللعبة تقديري.','https://www.cbp.gov/trade/programs-administration/entry-summary/section-232-additional-faqs-autos')]},
jp:{n:['Japan','اليابان'],cur:'JPY',cl:['JPY','ين'],rate:150,vat:.10,vs:1,duty:0,ds:1,ship:.04,reg:150,home:['Toyota','Nissan','Honda','Mazda','Subaru','Mitsubishi','Lexus'],sold:['Hyundai','Kia','Chevrolet','Ford','Volkswagen'],
 facts:[E('Car import duty is free in the 2026 Japan Customs tariff, chapter 87','جمارك استيراد العربيات صفر في تعريفة الجمارك اليابانية 2026 فصل 87','https://www.customs.go.jp/english/tariff/2026_10_31/data/e_87.htm'),E('Consumption tax 10%','ضريبة الاستهلاك 10%','https://www.customs.go.jp/english/c-answer_e/imtsukan/1111_e.htm')]},
gb:{n:['United Kingdom','بريطانيا'],cur:'GBP',cl:['GBP','جنيه إسترليني'],rate:.79,vat:.20,duty:.10,ship:.04,reg:120,home:['McLaren'],sold:MAIN,facts:[]},
it:{n:['Italy','إيطاليا'],cur:'EUR',cl:['EUR','يورو'],rate:.92,vat:.22,duty:.10,ship:.04,reg:100,home:['Ferrari','Lamborghini','Pagani'],sold:MAIN,facts:[]},
fr:{n:['France','فرنسا'],cur:'EUR',cl:['EUR','يورو'],rate:.92,vat:.20,vs:1,duty:.10,ship:.04,reg:90,home:[],sold:MAIN,
 facts:[E('VAT 20% (French economy ministry)','ضريبة القيمة المضافة 20% (وزارة الاقتصاد الفرنسية)','https://www.economie.gouv.fr/cedef/taux-tva-france-et-union-europeenne')]},
kr:{n:['South Korea','كوريا الجنوبية'],cur:'KRW',cl:['KRW','وون'],rate:1350,vat:.10,vs:1,duty:.08,ship:.04,reg:80,home:['Hyundai','Kia'],sold:['Toyota','Nissan','Chevrolet','Ford','Honda','Mazda','Volkswagen'].concat(PREM),
 facts:[E('VAT 10% (US trade.gov guide)','ضريبة القيمة المضافة 10% (دليل trade.gov الأمريكي)','https://www.trade.gov/country-commercial-guides/south-korea-import-tariffs')]},
cn:{n:['China','الصين'],cur:'CNY',cl:['CNY','يوان'],rate:7.2,vat:.13,duty:[[150,.15],[1e9,.25]],ship:.05,reg:100,home:[],sold:MAIN,facts:[]}
};
const PLATES={private:{en:'Private (light blue plate)',ar:'ملاكي (لوحة لبني)',col:'#5bb8e8',m:1}};
const KEY='garage-empire-markets-v1';
const M={country:'eg',mode:'local',reg:true,plate:'private',un:[],pl:{},sm:[]};
try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(d&&C[d.country]){M.country=d.country;M.mode=d.mode==='import'?'import':'local';M.reg=d.reg!==false;M.plate='private';M.un=Array.isArray(d.un)?d.un.filter(Number.isInteger):[];M.pl=d.pl&&typeof d.pl==='object'?d.pl:{};M.sm=Array.isArray(d.sm)?d.sm:[]}}catch(e){}
const H='https://eg.hatla2ee.com/en/car/used-prices/';
const ANCH=[
 {n:'Hyundai Excel',y:1997,k:'eg',amt:131000,basis:'used',exact:1,url:H+'hyundai/excel/1997',d:['Hatla2ee Egypt, Hyundai Excel 1997, average used listing Sep 2026: 131,000 EGP','هتلاتي مصر، هيونداي إكسل 1997، متوسط إعلانات المستعمل سبتمبر 2026: 131,000 جنيه']},
 {n:'Chevrolet Lanos',y:2000,k:'eg',amt:216000,basis:'used',exact:0,url:H+'daewoo/lanos/2000',d:['Hatla2ee Egypt, Daewoo Lanos 2000 (badge differs from Chevrolet, equivalence not verified), average used listing Sep 2026: 216,000 EGP','هتلاتي مصر، دايو لانوس 2000 (الاسم التجاري مختلف، التطابق مش متأكد منه)، متوسط إعلانات المستعمل سبتمبر 2026: 216,000 جنيه']},
 {n:'Kia Cerato',y:2012,k:'eg',amt:581000,basis:'used',exact:1,url:H+'kia/cerato/2012',d:['Hatla2ee Egypt, Kia Cerato 2012, average used listing Sep 2026: 581,000 EGP','هتلاتي مصر، كيا سيراتو 2012، متوسط إعلانات المستعمل سبتمبر 2026: 581,000 جنيه']},
 {n:'Toyota Corolla LE',y:2025,k:'eg',amt:1487000,basis:'used',exact:0,url:H+'toyota/corolla/2025',d:['Hatla2ee Egypt, Toyota Corolla 2025 (all trims, so the LE trim is not matched), average used listing Oct 2026: 1,487,000 EGP','هتلاتي مصر، تويوتا كورولا 2025 (كل الفئات، فمش مطابق لفئة LE)، متوسط إعلانات المستعمل أكتوبر 2026: 1,487,000 جنيه']},
 {n:'Land Cruiser',y:2024,k:'de',amt:71218,basis:'new',exact:0,url:'https://www.toyota.de/content/dam/toyota/nmsc/germany/broschueren-preislisten/preislisten/preisliste_land-cruiser.pdf',d:['Toyota Germany price list, 2.8 D-4D mild hybrid entry price EUR 84,750 incl. 19% VAT = 71,218 EUR before VAT, excl. delivery (publication date not shown, engine and trim differ from the US car)','قائمة أسعار تويوتا ألمانيا، فئة 2.8 D-4D هايبرد 84,750 يورو شامل 19% ضريبة = 71,218 يورو قبل الضريبة، من غير التوصيل (تاريخ النشر مش ظاهر، المحرك والفئة مختلفين عن الأمريكي)']},
 {n:'Honda NSX',y:1997,k:'us',amt:129000,basis:'used',exact:0,url:'https://ferrisexotics.com/notes/model-acura-nsx-t-2026-10-12',d:['Ferris Exotics, Acura NSX-T (sold in the US as Acura), median of 9 sales, Oct 2026: $129,000 (range $89,888 to $160,000, model years not limited to 1997)','Ferris Exotics، أكيورا NSX-T (بتتباع في أمريكا باسم أكيورا)، متوسط 9 عمليات بيع، أكتوبر 2026: 129,000 دولار (من 89,888 لـ160,000، مش مقتصر على موديل 1997)']},
 {n:'Mazda MX-5 NA',y:1992,k:'de',amt:9900,basis:'used',exact:0,url:'https://cetiritocka.com/market/cars?generation=mx-5-na&make=mazda&model=mx-5',d:['cetiritocka, Germany median advertised price for the MX-5 NA generation (all years 1989-1997 combined), Nov 2026: 9,900 EUR','cetiritocka، متوسط السعر المعلن في ألمانيا لجيل MX-5 NA (كل السنين مجمعة)، نوفمبر 2026: 9,900 يورو']},
 {n:'Land Cruiser',y:2024,k:'us',amt:58180,basis:'new',exact:0,url:'https://www.toyota.com/landcruiser/',d:['toyota.com Land Cruiser page, starting MSRP excl. destination and tax, fetched 24 Nov 2026: $58,180 (current model, not checked against 2024)','صفحة toyota.com للاند كروزر، أقل سعر مبدئي من غير الشحن والضريبة، 24 نوفمبر 2026: 58,180 دولار (الموديل الحالي، مش متأكد إنه نفس 2024)']}];
function anchor(cid,k){const c=CARS[cid];for(const a of ANCH)if(a.k===k&&c[0].includes(a.n)&&c[1]===a.y)return {usd:a.amt/C[k].rate,url:a.url,d:a.d,basis:a.basis,exact:a.exact};return null}
const brand=c=>c[0].split(' ')[0];
const has=(k,c)=>C[k].home.includes(brand(c))||C[k].sold.includes(brand(c));
const duty=(k,hp)=>{const d=C[k].duty;if(typeof d==='number')return d;for(const b of d)if(hp<=b[0])return b[1];return 0};
function calc(cid,baseUSD,k,fresh){const c=CARS[cid],K=C[k],base=Math.round(baseUSD);
 if(has(k,c)){if(!fresh)return {imp:false,base,vat:0,total:base,k};const vat=Math.round(base*K.vat);return {imp:false,fresh:1,base,vat,total:base+vat,k}}
 const ship=Math.round(base*K.ship),cif=base+ship,dr=duty(k,c[3]);let ex=K.extra||0;if(K.exemptYear&&c[1]<=K.exemptYear)ex=0;
 const du=Math.round(cif*dr),xt=Math.round(cif*ex),vat=Math.round((cif+du+xt)*K.vat);
 return {imp:true,base,ship,cif,dr,du,ex,xt,vr:K.vat,vat,total:cif+du+xt+vat,k}}
function regFee(k,id){return C[k].reg}
function save(){try{localStorage.setItem(KEY,JSON.stringify({country:M.country,mode:M.mode,reg:M.reg,plate:M.plate,un:M.un,pl:M.pl,sm:M.sm}))}catch(e){}}
window.MK={anchor,C,M,PLATES,has,calc,regFee,save,brand,rate:()=>C[M.country].rate,cl:()=>C[M.country].cl};
})();
