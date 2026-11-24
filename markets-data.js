/* Garage Empire country markets. All prices are game values. Rates are fixed game rates, not live FX.
   Only items listed in facts[] with a URL are individually sourced; everything else is a game estimate. */
(function(){
const MAIN=['Toyota','Nissan','Hyundai','Kia','Chevrolet','Ford','Honda','Mazda','Volkswagen'];
const PREM=['BMW','Audi','Mercedes-AMG','Lexus','Porsche'];
const E=(en,ar,url)=>[en,ar,url];
const C={
eg:{n:['Egypt','مصر'],cur:'EGP',cl:['EGP','ج.م'],rate:50,vat:.14,vs:1,duty:[[140,.40],[250,.60],[1e9,1.0]],ship:.05,reg:70,home:[],sold:MAIN.concat(['BMW','Audi','Mercedes-AMG']),
 facts:[E('VAT 14% (restated in Egyptian Law 149/2026)','ضريبة القيمة المضافة 14% (مذكورة في القانون 149 لسنة 2026)','https://eta.gov.eg/sites/default/files/2026-08/law.no%5F.149.of%5F.2026.pdf'),
 E('Plate colour shows licence type under Interior Ministry decree 1330/2023: private light blue, taxi orange, transport red (secondary copy of the table)','لون اللوحة بيحدد نوع الترخيص حسب قرار وزير الداخلية 1330 لسنة 2023: ملاكي لبني، أجرة برتقالي، نقل أحمر (جدول من نسخة منشورة)','https://alliedforlegalandtaxadvice.com/%d9%82%d8%b1%d8%a7%d8%b1-%d8%b1%d9%82%d9%85-1330-%d9%84%d8%b3%d9%86%d8%a9-2023/'),
 E('From 1 Oct 2026 licence fees are paid as one announced fee at the traffic unit, with no other payments','من 1 أكتوبر 2026 رسوم الترخيص بتتدفع مبلغ واحد معلن في وحدة المرور من غير مبالغ تانية','https://www.moi.gov.eg/news/getdetails?newsId=e59ca651-7f58-45c2-9ffe-62481b6dd47f')]},
ae:{n:['UAE','الإمارات'],cur:'AED',cl:['AED','د.إ'],rate:3.67,vat:.05,vs:1,duty:.05,ship:.04,reg:250,home:[],sold:MAIN.concat(PREM),
 facts:[]},
sa:{n:['Saudi Arabia','السعودية'],cur:'SAR',cl:['SAR','ر.س'],rate:3.75,vat:.15,duty:.05,ds:1,ship:.04,reg:150,home:[],sold:MAIN.concat(PREM),
 facts:[E('Customs duty on cars 5% (ZATCA)','الجمارك على السيارات 5% (هيئة الزكاة والضريبة والجمارك)','https://eservices.zatca.gov.sa/sites/sc/en/CustomsGuideNew/CustomsGuideLandPorts/Pages/Page13.aspx')]},
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
const PLATES={private:{en:'Private',ar:'ملاكي',col:'#5bb8e8',m:1},taxi:{en:'Taxi',ar:'أجرة',col:'#f08a24',m:1.2},transport:{en:'Transport',ar:'نقل',col:'#d63a3a',m:1.5}};
const KEY='garage-empire-markets-v1';
const M={country:'eg',mode:'local',reg:true,plate:'private',un:[],pl:{},sm:[]};
try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(d&&C[d.country]){M.country=d.country;M.mode=d.mode==='import'?'import':'local';M.reg=d.reg!==false;M.plate=PLATES[d.plate]?d.plate:'private';M.un=Array.isArray(d.un)?d.un.filter(Number.isInteger):[];M.pl=d.pl&&typeof d.pl==='object'?d.pl:{};M.sm=Array.isArray(d.sm)?d.sm:[]}}catch(e){}
const brand=c=>c[0].split(' ')[0];
const has=(k,c)=>C[k].home.includes(brand(c))||C[k].sold.includes(brand(c));
const duty=(k,hp)=>{const d=C[k].duty;if(typeof d==='number')return d;for(const b of d)if(hp<=b[0])return b[1];return 0};
function calc(cid,baseUSD,k,fresh){const c=CARS[cid],K=C[k];
 if(has(k,c)) return fresh?{imp:false,fresh:1,base:baseUSD,vat:baseUSD*K.vat,total:baseUSD*(1+K.vat),k}:{imp:false,base:baseUSD,vat:0,total:baseUSD,k};
 const ship=baseUSD*K.ship,cif=baseUSD+ship,dr=duty(k,c[3]);let ex=K.extra||0;if(K.exemptYear&&c[1]<=K.exemptYear)ex=0;
 const du=cif*dr,xt=cif*ex,vat=(cif+du+xt)*K.vat;
 return {imp:true,base:baseUSD,ship,cif,dr,du,ex,xt,vr:K.vat,vat,total:cif+du+xt+vat,k}}
function regFee(k,id){const p=k==='eg'?PLATES[M.pl[id]||M.plate].m:1;return Math.round(C[k].reg*p)}
function save(){try{localStorage.setItem(KEY,JSON.stringify({country:M.country,mode:M.mode,reg:M.reg,plate:M.plate,un:M.un,pl:M.pl,sm:M.sm}))}catch(e){}}
window.MK={C,M,PLATES,has,calc,regFee,save,brand,rate:()=>C[M.country].rate,cl:()=>C[M.country].cl};
})();
