import fs from 'node:fs';
let html=fs.readFileSync('index.html','utf8');
function replaceOnce(oldValue,newValue,label){
 const matches=html.split(oldValue).length-1;
 if(matches!==1)throw new Error(label+': expected 1 match, found '+matches);
 html=html.replace(oldValue,newValue);
}
replaceOnce('return `<div class="map-structure ${yes?\'owned\':\'locked\'}" style=','return `<button type="button" data-map-landmark="${b.id}" class="map-structure ${yes?\'owned\':\'locked\'}" style=','make town landmarks buttons');
replaceOnce('<span class="map-name">${yes?esc(b.name):`🔒 ${esc(b.name)}`}</span></div>`;','<span class="map-name">${yes?esc(b.name):`🔒 ${esc(b.name)}`}</span></button>`;','close map landmark buttons');
const handler=`function inspectTownLandmark(id){
 const district=selectedDistrict();
 const b=district.buildings.find(item=>item.id===id);
 if(!b)return;
 const owned=districtBuilt(district).includes(id);
 const price=b.price||0;
 const status=owned?'Built and active in your town.':save.coins>=price?'Ready to build using earned coins.':\`Earn \${format(price-save.coins)} more coins through deliveries to unlock this landmark.\`;
 const buttons=owned?[{text:'Explore town',action:()=>{closeModal();setPage('tour');}},{text:'Close',kind:'ghost',action:closeModal}]:[
   {text:save.coins>=price?\`Build for \${format(price)} coins\`:'Show landmark list',action:()=>{closeModal();if(save.coins>=price)build(id);else{if(!buildingsExpanded)toggleBuildShelf();const shelf=$('#town-building-collection');if(shelf&&shelf.scrollIntoView)shelf.scrollIntoView({block:'nearest',behavior:'smooth'});}}},
   {text:'Not yet',kind:'ghost',action:closeModal}
 ];
 modal({emoji:b.emoji||'🏠',title:b.name,body:status,buttons});
}
`;
replaceOnce('function build(id){',handler+'function build(id){','add map landmark details');
replaceOnce(" const b=e.target.closest('[data-build]');if(b){build(b.dataset.build);return;}"," const mapLandmark=e.target.closest('[data-map-landmark]');if(mapLandmark){inspectTownLandmark(mapLandmark.dataset.mapLandmark);return;}\n const b=e.target.closest('[data-build]');if(b){build(b.dataset.build);return;}",'connect marker tap');
replaceOnce('</style>',`
/* v0.6.3 landmark map integration: visible, touch-friendly interactive buildings. */
.premium-town .map-structure{cursor:pointer;border:0;background:transparent;color:inherit;padding:0;font:inherit;touch-action:manipulation}
.premium-town .map-structure:focus-visible{outline:3px solid #ffe16b;outline-offset:3px;border-radius:12px}
.premium-town .map-structure.owned:active img{transform:scale(.96)}
.premium-town .map-structure.locked .map-name{font-weight:800}
`+'</style>','style accessible markers');
replaceOnce('const VERSION = \'0.6.2\';','const VERSION = \'0.6.3\';','export metadata');
replaceOnce('V0.6.2 · CALM PLAY','V0.6.3 · CALM PLAY','home version');
replaceOnce('<title>Parcel Town Preview — v0.6.2</title>','<title>Parcel Town Preview — v0.6.3</title>','title');
fs.writeFileSync('index.html',html);
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));
if(pkg.version!=='0.6.2')throw new Error('Wrong base version: '+pkg.version);
pkg.version='0.6.3';fs.writeFileSync('package.json',JSON.stringify(pkg,null,2)+'\n');
let sw=fs.readFileSync('sw.js','utf8');
if(!sw.includes("parcel-town-playtest-v0.6.2"))throw new Error('Unknown cache version');
fs.writeFileSync('sw.js',sw.replace("parcel-town-playtest-v0.6.2","parcel-town-playtest-v0.6.3"));
console.log('v0.6.3 landmark detail interactions applied without changing saved game schema.');
