/* Garage Empire markets UI layer: country, local/import, optional road registration. */
(function(){
const ar=()=>S.lang==='ar',W=(e,a)=>ar()?a:e,K=()=>MK.M.country,M=MK.M;
const nm=k=>MK.C[k].n[ar()?1:0];
const usd=x=>fmt(x);
const rng=(a,b)=>a+Math.random()*(b-a);
function mkStock(){const pool=CARS.map((c,i)=>i).filter(i=>MK.has(K(),CARS[i])===(M.mode==='local'));
 const list=pool.length?pool:CARS.map((c,i)=>i);const out=[],sm=[];
 for(let n=0;n<6;n++){const cid=list[Math.min(list.length-1,Math.floor(Math.pow(Math.random(),1.7)*list.length))],cond=Math.round(rng(35,100));
  const base=Math.round(CARS[cid][5]*(.5+.5*cond/100)*rng(.95,1.2));const q=MK.calc(cid,base,K());
  out.push({cid,cond,price:Math.round(q.total)});sm.push(q)}
 M.sm=sm;MK.save();return out}
window.stock=mkStock;
function ensure(){if(!Array.isArray(M.sm)||M.sm.length!==S.stock.length||M.sm.some(q=>!q||q.k!==K())){S.stock=mkStock()}}
function breakdown(q){const K0=MK.C[q.k];if(!q.imp)return`${W('Local purchase, no import duty. Used price has no added tax','شراء محلي، من غير جمارك. سعر المستعمل من غير ضريبة مضافة')}${q.fresh?` · ${W('VAT','ضريبة')} ${Math.round(K0.vat*100)}% ${usd(q.vat)} (${W('catalog new price','سعر جديد من الكتالوج')})`:''}`;
 return[`${W('Import breakdown','تفاصيل الاستيراد')}:`,`${W('Car','العربية')}: ${usd(q.base)}`,`${W('Shipping (estimate)','الشحن (تقديري)')}: ${usd(q.ship)}`,`${W('Duty','الجمارك')} ${Math.round(q.dr*100)}%: ${usd(q.du)}`].concat(q.xt?[`${W('Extra duty','رسم إضافي')} ${Math.round(q.ex*100)}%: ${usd(q.xt)}`]:[],[`${W('VAT','الضريبة')} ${Math.round(q.vr*100)}%: ${usd(q.vat)}`,`<b>${W('Total','الإجمالي')}: ${usd(q.total)}</b>`]).join('<br>')}
function quote(cid){return MK.calc(cid,CARS[cid][5],K(),1)}
MK.quoteHtml=cid=>{const q=quote(cid);return`<p class="mut" style="font-size:12px">${W('Market','سوق')}: ${nm(K())} · ${breakdown(q)}<br>${W('Game estimate, not official tax advice.','تقدير للعبة، مش استشارة ضريبية رسمية.')}</p>`};
MK.quote=quote;
function buyCatalogN(cid){if(racing)return toast(W('Finish the race first','استنى السباق يخلص'));if(S.own.length>=8)return toast(t('full'));const q=quote(cid),fee=M.reg?MK.regFee(K(),0):0;
 if(S.usd<Math.round(q.total)+fee)return toast(t('poor'));
 S.stock.push({cid,cond:100,price:Math.round(q.total)});M.sm.push(q);const n0=S.own.length;buy(S.stock.length-1);
 if(S.own.length>n0){S.own[S.own.length-1].w=[100,100,100]}S.tab='garage';render()}
window.buyCatalog=buyCatalogN;
const _buy=window.buy;
window.buy=function(i){const s=S.stock[i];if(!s)return;const fee=M.reg?MK.regFee(K(),0):0;
 if(S.own.length<8&&S.usd<s.price+fee)return toast(t('poor'));
 const n0=S.own.length,len0=S.stock.length;_buy(i);
 if(S.own.length>n0){if(S.stock.length<len0)M.sm.splice(i,1);const o=S.own[S.own.length-1];
  if(M.reg){S.usd-=fee;if(K()==='eg')M.pl[o.id]=M.plate}else if(!M.un.includes(o.id))M.un.push(o.id);MK.save();render()}};
const _sell=window.sell;window.sell=function(id){_sell(id);if(!S.own.find(o=>o.id===id)){M.un=M.un.filter(x=>x!==id);delete M.pl[id];MK.save()}};
const _apply=window.applyState;window.applyState=function(d){_apply(d);M.un=[];M.pl={};M.sm=[];MK.save()};
window.regCar=function(id){const o=S.own.find(x=>x.id===id);if(!o||!M.un.includes(id))return;if(racing)return toast(W('Finish the race first','استنى السباق يخلص'));
 const fee=MK.regFee(K(),0);if(S.usd<fee)return toast(t('poor'));S.usd-=fee;M.un=M.un.filter(x=>x!==id);if(K()==='eg')M.pl[id]=M.plate;MK.save();toast(W('Registered for the road','اتسجلت للطريق'));render()};
window.setCountry=function(k){if(!MK.C[k])return;M.country=k;M.sm=[];S.stock=mkStock();render()};
window.setMode=function(m){M.mode=m==='import'?'import':'local';S.stock=mkStock();render()};
window.setPlate=function(p){if(MK.PLATES[p]){M.plate=p;MK.save();render()}};
window.setReg=function(v){M.reg=!!v;MK.save();render()};
const _race=window.race;window.race=function(){const o=cur();if(o&&M.un.includes(o.id))return toast(W('This car is not road-registered. Register it in the Garage to enter races.','العربية دي مش مسجلة للطريق. سجلها من الجراج عشان تدخل سباقات.'));return _race()};
function plateBadge(id){const p=M.pl[id];if(!p)return'';const P=MK.PLATES[p];return`<span style="background:${P.col};color:#000;border-radius:4px;padding:1px 6px;font-size:12px">${W(P.en,P.ar)}</span>`}
function facts(){const F=MK.C[K()].facts;return`<details><summary>${W('Sourced facts and game estimates','معلومات موثّقة وتقديرات اللعبة')}</summary><p class="mut" style="font-size:12px">${F.length?F.map(f=>`• <a href="${f[2]}" target="_blank" rel="noopener">${f[ar()?1:0]}</a>`).join('<br>'):W('No individually verified facts for this country yet.','مفيش معلومات متأكد منها لبلد دي لسه.')}<br>• ${W('Everything else here (shipping, other duties and taxes, registration fees, plate fee factors, exchange rates, which cars are sold locally) is a game estimate or game design, not law or official tax advice. Egypt rules are not applied to other countries.','أي حاجة تانية هنا (الشحن، الجمارك والضرايب التانية، رسوم التسجيل، معاملات اللوحات، أسعار الصرف، العربيات المتاحة محليا) تقدير أو تصميم للعبة مش قانون ولا استشارة ضريبية. قواعد مصر مش بتتطبق على باقي البلاد.')}</p></details>`}
const _vM=window.vMarket;
window.vMarket=function(){ensure();const opts=Object.keys(MK.C).map(k=>`<option value="${k}" ${k===K()?'selected':''}>${nm(k)}</option>`).join('');
 const fee=MK.regFee(K(),0),cl=MK.cl()[ar()?1:0];
 const pl=K()==='eg'?`<label>${W('Plate type','نوع اللوحة')} <select onchange="setPlate(this.value)">${Object.entries(MK.PLATES).map(([k,p])=>`<option value="${k}" ${k===M.plate?'selected':''}>${W(p.en,p.ar)}</option>`).join('')}</select></label>`:'';
 const head=`<div class="card"><div class="row"><label>${W('Country','الدولة')} <select onchange="setCountry(this.value)">${opts}</select></label><span class="mut">1 USD = ${MK.rate()} ${cl} (${W('game rate','سعر اللعبة')})</span></div>
 <div class="row" style="margin-top:6px"><button class="${M.mode==='local'?'pri':''}" onclick="setMode('local')">${W('Local cars','عربيات محلية')}</button><button class="${M.mode==='import'?'pri':''}" onclick="setMode('import')">${W('Import from abroad','استيراد من برة')}</button></div>
 <div class="row" style="margin-top:6px"><label><input type="checkbox" ${M.reg?'checked':''} onchange="setReg(this.checked)"> ${W('Register for the road on purchase','سجّلها للطريق عند الشراء')} (${usd(fee)})</label>${pl}</div>
 <p class="mut" style="font-size:12px">${M.reg?'':W('Unregistered cars can be bought and tuned but cannot start races until registered. No fines, no resale penalty.','العربيات غير المسجلة تتشرى وتتعدل بس مش بتدخل سباقات لحد ما تتسجل. من غير غرامات ولا خصم عند البيع.')}${K()==='eg'?' '+W('Egypt: plate colour follows licence type. Fees are game estimates.','مصر: لون اللوحة حسب نوع الترخيص. الرسوم تقديرية للعبة.'):''}</p>${facts()}</div>`;
 return head+`<button onclick="S.stock=stock();render()" style="margin-bottom:10px">${t('refresh')}</button>`+S.stock.map((s,i)=>{const c=CARS[s.cid],q=M.sm[i];return`<div class="card"><div class="row"><b>${c[0]} <span class="mut">${c[1]}</span></b>${tag(c[2])}</div>${infoButton(s.cid)}
 <div class="row"><span class="mut">${t('hp')}: ${c[3]} · ${W('Mass','الوزن')}: ${c[4]} ${t('kg')} · ${t('cond')}: ${s.cond}%</span><button class="pri" onclick="buy(${i})">${t('buy')} ${fmt(s.price)}</button></div>${q?`<div class="mut" style="font-size:12px">${breakdown(q)}</div>`:''}</div>`}).join('')};
const _vG=window.vGarage;
window.vGarage=function(){const o=cur();let top='';
 if(o){const un=M.un.includes(o.id),fee=MK.regFee(K(),0);top=`<div class="card"><div class="row"><b>${W('Road registration','تسجيل الطريق')}: ${CARS[o.cid][0]}</b>${un?`<span class="mut">${W('Not registered','مش مسجلة')}</span>`:(M.pl[o.id]?plateBadge(o.id):`<span class="mut">${W('Registered','مسجلة')}</span>`)}</div>
 ${un?`<div class="row"><span class="mut" style="font-size:12px">${W('Cannot start races until registered. Fee is a game estimate.','مش هتدخل سباقات لحد ما تتسجل. الرسوم تقديرية للعبة.')}</span><button class="pri" onclick="regCar(${o.id})">${W('Register','سجّل')} ${usd(fee)}</button></div>`:''}</div>`}
 return top+_vG()};
const _vR=window.vRace;
window.vRace=function(){const o=cur();const w=o&&M.un.includes(o.id)?`<div class="card" style="border-color:#ffb454">${W('This car is not road-registered. Register it in the Garage to start races.','العربية دي مش مسجلة للطريق. سجلها من الجراج عشان تبدأ سباقات.')}</div>`:'';return w+_vR()};
ensure();render();
})();
