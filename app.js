// ===== À MODIFIER =====
const NUMS = {main:'24177082994', second:'24166548350'}; // indicatif 241, sans le 0 initial
const REVIEWS = []; // Avis « officiels » : {nom:'Prénom', note:5, texte:'…'}
const ZONES = [{id:'libreville',name:'Libreville',fee:2000},{id:'owendo',name:'Owendo',fee:2500},{id:'akanda',name:'Akanda',fee:3000}];
const INFO = {
  by:'Cyn’net · Gabon', version:'1.2',
  updated:'2026-11-18', released:'2026-11-18', // AAAA-MM-JJ
  size:'≈ 3 Mo'
};
const SIZES = [{id:'1l',fr:'1 L',en:'1 L',price:1000},{id:'15l',fr:'1,5 L',en:'1.5 L',price:2000},{id:'5l',fr:'5 L',en:'5 L',price:6500}]; // formats et prix en FCFA
const SHOTS = ['screen1','screen2','screen3','screen4']; // img/screenN.jpg
// ======================
const SCENTS=['Citron','Fraise','Pomme','Orange','Lavande','Multifruits','Marine'];
const SCENT_EN={Citron:'Lemon',Fraise:'Strawberry',Pomme:'Apple',Orange:'Orange',Lavande:'Lavender',Multifruits:'Mixed fruits',Marine:'Ocean'};
const $=s=>document.querySelector(s);
const ls={get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* ---------- Langues ---------- */
const I18N={
fr:{nav_about:'À propos',nav_scents:'Parfums',nav_order:'Commander',nav_reviews:'Avis',nav_info:'Infos',nav_contact:'Contact',pill:'Détergent liquide multi-usages',made:'Fabriqué au Gabon',
lead:'Un seul produit pour toute la maison : il nettoie, dégraisse, fait briller et parfume vos vêtements, votre vaisselle et vos sols.',cta_wa:'Commander sur WhatsApp',cta_scents:'Voir les parfums',call:'Appeler',cta_contact:'Nous contacter',trust:'Puissance · Propreté · Éclat',
about_eye:'À propos de cette application',about_h:'Cyn’net, la propreté à portée de main',about_p1:'Cyn’net est l’application officielle du détergent liquide multi-usages fabriqué au Gabon. Découvrez les sept parfums, composez votre panier, choisissez la quantité et envoyez votre commande en un geste sur WhatsApp.',
f1:'7 parfums : citron, fraise, pomme, orange, lavande, multifruits et marine',f2:'Panier avec format (1 L, 1,5 L ou 5 L), prix en FCFA et quantité pour chaque parfum',f3:'Livraison à moto à Libreville, Owendo et Akanda, ou retrait sans livraison',f4:'Commande directe sur WhatsApp, sans inscription',f5:'Français, English et plus de 100 autres langues',shots_h:'Captures d’écran',
use_eye:'Pour toute la maison',use_h:'Trois usages, un seul produit',use1:'Vêtements propres',use2:'Vaisselle propre',use3:'Sol propre',b1:'Efficace',b2:'Dégraisse',b3:'Fait briller',b4:'Parfume',slogan:'La propreté qui respecte votre quotidien',
sc_eye:'Sept fragrances',sc_h:'Choisissez votre parfum',sc_sub:'Touchez un parfum pour le sélectionner.',
or_eye:'Commande rapide',or_h:'Commander',st1:'Parfum, format et quantité',size_h:'Format',size_lbl:'Format choisi :',chosen:'Parfum choisi :',none:'aucun',add:'Ajouter au panier',st2:'Votre panier',st3:'Livraison ou retrait',m_deliv:'Livraison à moto',m_deliv_s:'Frais selon la zone',m_pick:'Sans livraison',m_pick_s:'Retrait, 0 FCFA',st4:'Récapitulatif',s_items:'Articles',s_sub:'Sous-total',s_fee:'Frais de livraison',s_tot:'Total',wa2:'Commander via le second numéro',
note:'Prix en FCFA. Le délai de livraison est confirmé avec vous sur WhatsApp.',
rv_eye:'Ils nous font confiance',rv_h:'Évaluations et avis',rv_write:'Donner votre avis',rv_name:'Votre prénom',rv_text:'Votre avis sur Cyn’net',rv_send:'Publier mon avis',rv_note:'Votre avis est enregistré sur cet appareil.',
in_eye:'Détails',in_h:'Informations supplémentaires',choose_lang:'Choisir ma langue',ct_eye:'Parlons-en',ct_h:'Nous contacter',f_line:'La qualité et au-delà · Fabriqué au Gabon',designer:'Concepteur',tb_home:'Accueil',tb_cart:'Panier',
lang_search:'Rechercher une langue…',lang_hint:'Français et English : intégrés, même hors ligne. Les autres langues utilisent la traduction automatique (connexion Internet requise).',
/* dynamiques */
cart_empty:'Votre panier est vide. Choisissez un parfum, puis « Ajouter au panier ».',remove:'Retirer',zone_pick:'Choisissez votre zone de livraison :',
t_pickscent:'Choisissez d’abord un parfum',t_added:'Ajouté au panier',t_empty:'Ajoutez au moins un parfum au panier',t_zone:'Choisissez une zone de livraison',t_chosen:'Parfum choisi : ',
no_reviews:'Aucun avis pour le moment. Soyez le premier !',reviews:n=>n+(n>1?' avis':' avis'),t_thanks:'Merci pour votre avis !',t_rate:'Choisissez une note',star:'étoile',
i_by:'Proposé par',i_upd:'Dernière mise à jour',i_rel:'Date de sortie',i_cat:'Catégorie',i_catv:'Maison et entretien',i_size:'Taille approximative',i_lang:'Langues prises en charge',i_langv:'Français, English et plus de 100 autres langues',i_ver:'Version',i_contact:'Contact développeur',
t_lang_net:'Connexion Internet requise pour cette langue',t_lang_na:'Langue indisponible',deliv_lbl:'Livraison',pick_lbl:'Sans livraison (retrait)',
msg_hi:'Bonjour Cyn’net, je souhaite commander le détergent liquide multi-usages :',msg_fee:'Frais de livraison',msg_thx:'Merci de confirmer ma commande et le délai.',msg_sub:'Sous-total',msg_tot:'Total à payer',msg_zone:'Zone',msg_name:'Parfums :'},
en:{nav_about:'About',nav_scents:'Scents',nav_order:'Order',nav_reviews:'Reviews',nav_info:'Info',nav_contact:'Contact',pill:'Multi-purpose liquid detergent',made:'Made in Gabon',
lead:'One product for the whole home: it cleans, cuts grease, adds shine and perfumes your clothes, dishes and floors.',cta_wa:'Order on WhatsApp',cta_scents:'See the scents',call:'Call',cta_contact:'Contact us',trust:'Power · Cleanliness · Shine',
about_eye:'About this app',about_h:'Cyn’net, cleanliness at your fingertips',about_p1:'Cyn’net is the official app for the multi-purpose liquid detergent made in Gabon. Explore the seven scents, build your cart, pick the quantity and send your order in one tap on WhatsApp.',
f1:'7 scents: lemon, strawberry, apple, orange, lavender, mixed fruits and ocean',f2:'Cart with size (1 L, 1.5 L or 5 L), prices in FCFA and quantity for each scent',f3:'Motorbike delivery in Libreville, Owendo and Akanda, or pick-up with no delivery',f4:'Order directly on WhatsApp, no sign-up',f5:'French, English and 100+ other languages',shots_h:'Screenshots',
use_eye:'For the whole home',use_h:'Three uses, one product',use1:'Clean clothes',use2:'Clean dishes',use3:'Clean floors',b1:'Effective',b2:'Cuts grease',b3:'Adds shine',b4:'Perfumes',slogan:'Cleanliness that respects your daily life',
sc_eye:'Seven fragrances',sc_h:'Choose your scent',sc_sub:'Tap a scent to select it.',
or_eye:'Quick order',or_h:'Order',st1:'Scent, size and quantity',size_h:'Size',size_lbl:'Selected size:',chosen:'Selected scent:',none:'none',add:'Add to cart',st2:'Your cart',st3:'Delivery or pick-up',m_deliv:'Motorbike delivery',m_deliv_s:'Fee depends on zone',m_pick:'No delivery',m_pick_s:'Pick-up, 0 FCFA',st4:'Summary',s_items:'Items',s_sub:'Subtotal',s_fee:'Delivery fee',s_tot:'Total',wa2:'Order via the second number',
note:'Prices in FCFA. The delivery time is confirmed with you on WhatsApp.',
rv_eye:'They trust us',rv_h:'Ratings and reviews',rv_write:'Write a review',rv_name:'Your first name',rv_text:'Your review of Cyn’net',rv_send:'Post my review',rv_note:'Your review is saved on this device.',
in_eye:'Details',in_h:'Additional information',choose_lang:'Choose my language',ct_eye:'Let’s talk',ct_h:'Contact us',f_line:'Quality and beyond · Made in Gabon',designer:'Designer',tb_home:'Home',tb_cart:'Cart',
lang_search:'Search a language…',lang_hint:'French and English are built in, even offline. Other languages use automatic translation (Internet connection required).',
cart_empty:'Your cart is empty. Pick a scent, then “Add to cart”.',remove:'Remove',zone_pick:'Choose your delivery zone:',
t_pickscent:'Please choose a scent first',t_added:'Added to cart',t_empty:'Add at least one scent to the cart',t_zone:'Choose a delivery zone',t_chosen:'Selected scent: ',
no_reviews:'No reviews yet. Be the first!',reviews:n=>n+(n>1?' reviews':' review'),t_thanks:'Thank you for your review!',t_rate:'Please pick a rating',star:'star',
i_by:'Offered by',i_upd:'Last updated',i_rel:'Release date',i_cat:'Category',i_catv:'Home & household care',i_size:'Approximate size',i_lang:'Supported languages',i_langv:'French, English and 100+ other languages',i_ver:'Version',i_contact:'Developer contact',
t_lang_net:'Internet connection required for this language',t_lang_na:'Language unavailable',deliv_lbl:'Delivery',pick_lbl:'No delivery (pick-up)',
msg_hi:'Hello Cyn’net, I would like to order the multi-purpose liquid detergent:',msg_fee:'Delivery fee',msg_thx:'Please confirm my order and the lead time.',msg_sub:'Subtotal',msg_tot:'Total to pay',msg_zone:'Zone',msg_name:'Scents:'}
};
// [code, nom natif]
const LANGS=[['af','Afrikaans'],['sq','Shqip'],['am','አማርኛ'],['ar','العربية'],['hy','Հայերեն'],['az','Azərbaycan'],['eu','Euskara'],['be','Беларуская'],['bn','বাংলা'],['bs','Bosanski'],['bg','Български'],['ca','Català'],['ceb','Cebuano'],['ny','Chichewa'],['zh-CN','中文 (简体)'],['zh-TW','中文 (繁體)'],['co','Corsu'],['hr','Hrvatski'],['cs','Čeština'],['da','Dansk'],['nl','Nederlands'],['eo','Esperanto'],['et','Eesti'],['tl','Filipino'],['fi','Suomi'],['fy','Frysk'],['gl','Galego'],['ka','ქართული'],['de','Deutsch'],['el','Ελληνικά'],['gu','ગુજરાતી'],['ht','Kreyòl ayisyen'],['ha','Hausa'],['haw','ʻŌlelo Hawaiʻi'],['iw','עברית'],['hi','हिन्दी'],['hmn','Hmong'],['hu','Magyar'],['is','Íslenska'],['ig','Igbo'],['id','Bahasa Indonesia'],['ga','Gaeilge'],['it','Italiano'],['ja','日本語'],['jw','Basa Jawa'],['kn','ಕನ್ನಡ'],['kk','Қазақша'],['km','ខ្មែរ'],['rw','Kinyarwanda'],['ko','한국어'],['ku','Kurdî'],['ky','Кыргызча'],['lo','ລາວ'],['la','Latina'],['lv','Latviešu'],['lt','Lietuvių'],['lb','Lëtzebuergesch'],['mk','Македонски'],['mg','Malagasy'],['ms','Bahasa Melayu'],['ml','മലയാളം'],['mt','Malti'],['mi','Māori'],['mr','मराठी'],['mn','Монгол'],['my','မြန်မာ'],['ne','नेपाली'],['no','Norsk'],['or','ଓଡ଼ିଆ'],['ps','پښتو'],['fa','فارسی'],['pl','Polski'],['pt','Português'],['pa','ਪੰਜਾਬੀ'],['ro','Română'],['ru','Русский'],['sm','Gagana Samoa'],['gd','Gàidhlig'],['sr','Српски'],['st','Sesotho'],['sn','chiShona'],['sd','سنڌي'],['si','සිංහල'],['sk','Slovenčina'],['sl','Slovenščina'],['so','Soomaali'],['es','Español'],['su','Basa Sunda'],['sw','Kiswahili'],['sv','Svenska'],['tg','Тоҷикӣ'],['ta','தமிழ்'],['tt','Татарча'],['te','తెలుగు'],['th','ไทย'],['tr','Türkçe'],['tk','Türkmençe'],['uk','Українська'],['ur','اردو'],['ug','ئۇيغۇرچە'],['uz','Oʻzbekcha'],['vi','Tiếng Việt'],['cy','Cymraeg'],['xh','isiXhosa'],['yi','ייִדיש'],['yo','Yorùbá'],['zu','isiZulu'],['ln','Lingála'],['wo','Wolof'],['bm','Bamanankan'],['ak','Twi'],['ti','ትግርኛ'],['om','Afaan Oromoo'],['ee','Eʋegbe'],['lg','Luganda'],['ts','Xitsonga'],['tn','Setswana'],['ckb','کوردی (سۆرانی)'],['dv','ދިވެހި'],['gom','कोंकणी'],['doi','डोगरी'],['as','অসমীয়া'],['ay','Aymara'],['qu','Runasimi'],['gn','Avañe’ẽ'],['kri','Krio'],['lus','Mizo'],['mai','मैथिली'],['mni-Mtei','ꯃꯅꯤꯄꯨꯔꯤ'],['nso','Sepedi'],['sa','संस्कृतम्'],['bho','भोजपुरी'],['ilo','Ilocano']];
const NATIVE=['fr','en'], RTL=['ar','iw','fa','ur','ps','sd','ug','yi','ckb','dv'];
let lang=ls.get('lang','fr');
const base=()=>NATIVE.includes(lang)?lang:'fr';           // langue du texte généré par le script
const T=k=>{const d=I18N[base()][k];return d===undefined?I18N.fr[k]:d};
function applyText(){
  const b=base();document.documentElement.lang=lang;
  document.documentElement.dir=RTL.includes(lang)?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(e=>{const v=I18N[b][e.dataset.i18n];if(typeof v==='string')e.textContent=v});
  document.querySelectorAll('[data-i18n-ph]').forEach(e=>{const v=I18N[b][e.dataset.i18nPh];if(typeof v==='string')e.placeholder=v});
  const lb=LANGS.find(l=>l[0]===lang);
  $('#langCode').textContent=lang==='fr'?'FR':lang==='en'?'EN':lang.split('-')[0].toUpperCase();
  renderAll();
}
/* Traduction automatique pour les autres langues (Google Translate, connexion requise) */
let gtReady=false,gtLoading=false;
function gtApply(code,tries=0){
  const sel=document.querySelector('select.goog-te-combo');
  if(!sel){if(tries<40)return setTimeout(()=>gtApply(code,tries+1),250);return toast(T('t_lang_net'))}
  if(![...sel.options].some(o=>o.value===code)){return toast(T('t_lang_na'))}
  sel.value=code;sel.dispatchEvent(new Event('change'));
}
function gtLoad(code){
  if(gtReady)return gtApply(code);
  window.gtInit=()=>{new google.translate.TranslateElement({pageLanguage:'fr',autoDisplay:false},'gt');gtReady=true;gtApply(code)};
  if(gtLoading)return;gtLoading=true;
  const s=document.createElement('script');s.src='https://translate.google.com/translate_a/element.js?cb=gtInit';
  s.onerror=()=>{gtLoading=false;toast(T('t_lang_net'))};document.head.appendChild(s);
}
function setLang(code){
  const wasAuto=!NATIVE.includes(lang);
  lang=code;ls.set('lang',code);closeLang();
  if(NATIVE.includes(code)){
    if(wasAuto){location.reload();return}   // retire la traduction automatique
    applyText();
  }else{applyText();gtLoad(code)}
}
const langModal=$('#langModal');
function openLang(){langModal.hidden=false;$('#langQ').value='';renderLangs('');setTimeout(()=>$('#langQ').focus(),50)}
function closeLang(){langModal.hidden=true}
function renderLangs(q){
  q=q.trim().toLowerCase();const L=$('#langList');L.innerHTML='';
  const prio=[['fr','Français'],['en','English']];
  const rest=LANGS.filter(l=>!NATIVE.includes(l[0])).sort((a,b)=>a[1].localeCompare(b[1],'en'));
  const add=(title,arr,native)=>{
    const f=arr.filter(l=>!q||l[1].toLowerCase().includes(q)||l[0].toLowerCase().includes(q));if(!f.length)return;
    if(title){const h=document.createElement('p');h.className='lg';h.textContent=title;L.appendChild(h)}
    f.forEach(l=>{const b=document.createElement('button');b.type='button';b.className='lang'+(l[0]===lang?' on':'');b.translate=false;
      b.innerHTML=`<span>${l[1]}</span><small>${native?'✓':l[0]}</small>`;b.onclick=()=>setLang(l[0]);L.appendChild(b)})};
  add(base()==='en'?'Priority':'Prioritaires',prio,true);
  add(base()==='en'?'Other languages':'Autres langues',rest,false);
}
$('#langBtn').onclick=openLang;$('#langBtn2').onclick=openLang;$('#langX').onclick=closeLang;
langModal.addEventListener('click',e=>{if(e.target===langModal)closeLang()});
$('#langQ').addEventListener('input',e=>renderLangs(e.target.value));

/* ---------- Divers ---------- */
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2600)}
const fcfa=n=>n.toLocaleString('fr-FR').replace(/ /g,' ')+' FCFA';
const scentName=n=>base()==='en'?SCENT_EN[n]:n;

/* ---------- Parfums, quantité, panier, livraison ---------- */
const sizeLbl=s=>s[base()==='en'?'en':'fr'];
let chosen=null,size='1l',qty=1,cart=ls.get('cart',[]).map(i=>({s:i.s,z:i.z||'1l',q:i.q})).filter(i=>SIZES.some(x=>x.id===i.z)),mode=ls.get('mode','livraison'),zone=ls.get('zone',null);
const box=$('.scents');
SCENTS.forEach(n=>{const b=document.createElement('button');b.className='scent';b.type='button';b.dataset.s=n;b.setAttribute('role','radio');b.setAttribute('aria-checked','false');
  b.innerHTML=`<img src="img/${n.toLowerCase()}.jpg" alt="" loading="lazy"><span></span>`;
  b.onclick=()=>{chosen=n;renderScents();toast(T('t_chosen')+scentName(n))};
  box.appendChild(b)});
const sbox=$('#sizes');
function renderSizes(){
  sbox.innerHTML='';
  SIZES.forEach(z=>{const b=document.createElement('button');b.type='button';b.className='size';b.setAttribute('role','radio');b.setAttribute('aria-checked',z.id===size);
    b.innerHTML=`<b translate="no">${sizeLbl(z)}</b><span translate="no">${fcfa(z.price)}</span>`;
    b.onclick=()=>{size=z.id;renderSizes()};sbox.appendChild(b)});
}
function renderScents(){
  box.querySelectorAll('.scent').forEach(x=>{x.setAttribute('aria-checked',x.dataset.s===chosen);x.querySelector('span').textContent=scentName(x.dataset.s)});
  const c=$('#chosen');c.textContent=chosen?scentName(chosen):T('none');
}
const saveCart=()=>ls.set('cart',cart);
const sizeOf=id=>SIZES.find(x=>x.id===id);
const lineTotal=i=>sizeOf(i.z).price*i.q;
const subtotal=()=>cart.reduce((a,i)=>a+lineTotal(i),0);
const count=()=>cart.reduce((a,i)=>a+i.q,0);
const fee=()=>mode==='livraison'&&zone?ZONES.find(z=>z.id===zone).fee:0;
function renderCart(){
  const C=$('#cart');C.innerHTML='';
  if(!cart.length){C.innerHTML=`<p class="empty">${T('cart_empty')}</p>`}
  cart.forEach((it,i)=>{
    const r=document.createElement('div');r.className='line';
    r.innerHTML=`<img src="img/${it.s.toLowerCase()}.jpg" alt=""><b>${scentName(it.s)}<small translate="no">${sizeLbl(sizeOf(it.z))} · ${fcfa(lineTotal(it))}</small></b>
      <div class="qty sm"><button type="button" aria-label="−">−</button><output>${it.q}</output><button type="button" aria-label="+">+</button></div>
      <button type="button" class="del" aria-label="${T('remove')}">×</button>`;
    const [m,p]=r.querySelectorAll('.qty button');
    m.onclick=()=>{it.q=Math.max(1,it.q-1);saveCart();renderCart()};
    p.onclick=()=>{it.q=Math.min(99,it.q+1);saveCart();renderCart()};
    r.querySelector('.del').onclick=()=>{cart.splice(i,1);saveCart();renderCart()};
    C.appendChild(r)});
  const n=count(),bd=$('#cartBadge');bd.textContent=n;bd.hidden=!n;
  $('#sItems').textContent=n;$('#sSub').textContent=fcfa(subtotal());$('#sFee').textContent=fcfa(fee());$('#sTot').textContent=fcfa(subtotal()+fee());
}
function renderMode(){
  document.querySelectorAll('.mode').forEach(b=>b.setAttribute('aria-checked',b.dataset.mode===mode));
  const Z=$('#zones');Z.hidden=mode!=='livraison';Z.innerHTML=`<p>${T('zone_pick')}</p>`;
  ZONES.forEach(z=>{const b=document.createElement('button');b.type='button';b.className='zone';b.setAttribute('role','radio');b.setAttribute('aria-checked',z.id===zone);
    b.innerHTML=`<svg viewBox="0 0 72 44" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="14" cy="33" r="8"/><circle cx="58" cy="33" r="8"/><path d="M14 33h12l9-14h13l10 14M48 19l3-9h7M27 19c4-9 11-9 14 0"/><circle cx="33" cy="8" r="4" fill="currentColor"/></svg><span translate="no">${z.name}</span><strong>${fcfa(z.fee)}</strong>`;
    b.onclick=()=>{zone=z.id;ls.set('zone',zone);renderMode();renderCart()};Z.appendChild(b)});
}
document.querySelectorAll('.mode').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;ls.set('mode',mode);renderMode();renderCart()});
$('#qMinus').onclick=()=>{qty=Math.max(1,qty-1);$('#qVal').textContent=qty};
$('#qPlus').onclick=()=>{qty=Math.min(99,qty+1);$('#qVal').textContent=qty};
$('#addBtn').onclick=()=>{
  if(!chosen){toast(T('t_pickscent'));$('#parfums').scrollIntoView();return}
  const ex=cart.find(i=>i.s===chosen&&i.z===size);if(ex)ex.q=Math.min(99,ex.q+qty);else cart.push({s:chosen,z:size,q:qty});
  saveCart();renderCart();toast(T('t_added'));qty=1;$('#qVal').textContent=1};
function waLink(num){
  const lines=cart.map(i=>`• ${scentName(i.s)} – ${sizeLbl(sizeOf(i.z))} × ${i.q} = ${fcfa(lineTotal(i))}`).join('\n');
  const del=mode==='livraison'?`${T('deliv_lbl')} – ${T('msg_zone')} ${ZONES.find(z=>z.id===zone).name} : ${fcfa(fee())}`:T('pick_lbl');
  const msg=`${T('msg_hi')}\n${T('msg_name')}\n${lines}\n${T('msg_sub')} : ${fcfa(subtotal())}\n${del}\n${T('msg_tot')} : ${fcfa(subtotal()+fee())}\n${T('msg_thx')}`;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}
function order(e,num){e.preventDefault();
  if(!cart.length&&chosen){cart.push({s:chosen,z:size,q:qty});saveCart();renderCart()}
  if(!cart.length){toast(T('t_empty'));return}
  if(mode==='livraison'&&!zone){toast(T('t_zone'));$('#zones').scrollIntoView({block:'center'});return}
  window.open(waLink(num),'_blank','noopener')}
$('#orderBtn').addEventListener('click',e=>order(e,NUMS.main));
$('#wa2').addEventListener('click',e=>order(e,NUMS.second));

/* ---------- Avis ---------- */
const st=n=>[1,2,3,4,5].map(i=>`<span class="${i<=Math.round(n)?'on':''}">★</span>`).join('');
let myRev=ls.get('reviews',[]);let rate=0;
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function renderReviews(){
  const all=[...REVIEWS,...myRev],n=all.length;
  const avg=n?all.reduce((a,r)=>a+r.note,0)/n:0;
  $('#stars').innerHTML=st(avg);$('#avg').textContent=n?avg.toFixed(1):'–';$('#count').textContent=T('reviews')(n);
  $('#bars').innerHTML=[5,4,3,2,1].map(k=>{const c=all.filter(r=>r.note===k).length;return `<div><span>${k}</span><i><u style="width:${n?c/n*100:0}%"></u></i></div>`}).join('');
  const R=$('#reviews');R.innerHTML='';
  if(!n){R.innerHTML=`<p class="empty">${T('no_reviews')}</p>`;return}
  all.slice().reverse().forEach(r=>{const d=document.createElement('div');d.className='rev';
    d.innerHTML=`<div class="stars">${st(r.note)}</div><p>${esc(r.texte)}</p><small>${esc(r.nom)}</small>`;R.appendChild(d)});
}
const pick=$('#pick');
for(let i=1;i<=5;i++){const b=document.createElement('button');b.type='button';b.textContent='★';b.setAttribute('aria-label',i);
  b.onclick=()=>{rate=i;pick.querySelectorAll('button').forEach((x,j)=>x.classList.toggle('on',j<i))};pick.appendChild(b)}
$('#rvForm').addEventListener('submit',e=>{e.preventDefault();
  if(!rate){toast(T('t_rate'));return}
  myRev.push({nom:$('#rvName').value.trim(),note:rate,texte:$('#rvText').value.trim()});ls.set('reviews',myRev);
  e.target.reset();rate=0;pick.querySelectorAll('button').forEach(x=>x.classList.remove('on'));renderReviews();toast(T('t_thanks'))});

/* ---------- Informations supplémentaires ---------- */
function renderInfo(){
  const loc=base()==='en'?'en-GB':'fr-FR',fd=d=>new Date(d+'T12:00:00').toLocaleDateString(loc,{day:'numeric',month:'long',year:'numeric'});
  const rows=[[T('i_by'),INFO.by],[T('i_upd'),fd(INFO.updated)],[T('i_rel'),fd(INFO.released)],[T('i_ver'),INFO.version],[T('i_cat'),T('i_catv')],[T('i_size'),INFO.size],[T('i_lang'),T('i_langv')],[T('i_contact'),'doletboussambarolf@gmail.com']];
  $('#info').innerHTML=rows.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('');
}

/* ---------- Captures d’écran ---------- */
const S=$('#shots');
SHOTS.forEach((n,i)=>{const b=document.createElement('button');b.type='button';b.className='shot';b.innerHTML=`<img src="img/${n}.jpg" alt="Capture ${i+1}" loading="lazy">`;
  b.onclick=()=>{$('#lbImg').src=`img/${n}.jpg`;$('#lightbox').hidden=false};S.appendChild(b)});
$('#lbX').onclick=()=>$('#lightbox').hidden=true;$('#lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')e.target.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLang();$('#lightbox').hidden=true}});

function renderAll(){renderScents();renderSizes();renderCart();renderMode();renderReviews();renderInfo()}
applyText();
if(!NATIVE.includes(lang))gtLoad(lang);
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js');
