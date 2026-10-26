import fs from 'node:fs';

const htmlFile='index.html';
let html=fs.readFileSync(htmlFile,'utf8');
function exactReplace(source,target,label){
  const count=html.split(source).length-1;
  if(count!==1)throw new Error(`Unexpected ${label} occurrences: ${count}; refuse unsafe edit`);
  html=html.replace(source,target);
}
const fun=`function premiumDistrictScene(id){return id==='harbour'?'assets/scenes/harbour-cinematic.webp':id==='metro'?'assets/scenes/metro-cinematic.webp':\`assets/dioramas/\${id}.svg\`;}`;
if(html.includes('function premiumDistrictScene('))throw new Error('Unexpected premiumDistrictScene already defined; stop instead of double patching');
exactReplace('function tourArtPath(d,b){',`${fun}\nfunction tourArtPath(d,b){`,'scene resolver insertion');
exactReplace('src="assets/dioramas/\${d.id}.svg" alt="" draggable="false"','src="\${premiumDistrictScene(d.id)}" alt="" draggable="false"','Town Explorer scene');
exactReplace('src="assets/dioramas/\${map.id}.svg" alt="Scenic \${esc(map.name)} district landscape"','src="\${premiumDistrictScene(map.id)}" alt="Scenic \${esc(map.name)} district landscape"','Town scene');
exactReplace('<button class="maps-shortcut" data-action="maps">','<button class="maps-shortcut" data-action="maps" aria-label="Open the six-district world map">','Maps accessible label');
const newCss=`
/* v0.6.2: Verified cinematic scenes and accessible maps shortcut. */
.world-quick-nav .maps-shortcut{position:relative;z-index:6;min-height:44px;min-width:96px;display:inline-flex;align-items:center;justify-content:center;gap:4px;touch-action:manipulation;background:linear-gradient(140deg,#ffffff,#e1f5ff);border:1.5px solid #8ccde5;color:#175678;font-weight:1000;box-shadow:0 3px 0 #b6dbea}
.premium-town .premium-world{object-position:center 54%;filter:saturate(1.15) contrast(1.075)}
.premium-town.scene-dusk .premium-world{filter:brightness(.74) saturate(1.19) contrast(1.09)}
.premium-town .map-structure.locked img{opacity:.30;filter:grayscale(.35)}
@media(prefers-reduced-motion:reduce){.premium-town .premium-world,.world-quick-nav .maps-shortcut{transition:none!important}}
`;
exactReplace('</style>',newCss+'</style>','style injection');
exactReplace('<title>Parcel Town Preview — v0.5.8</title>','<title>Parcel Town Preview — v0.6.2</title>','document title');
exactReplace('V0.6.1 · CALM PLAY','V0.6.2 · CALM PLAY','visible version');
fs.writeFileSync(htmlFile,html);
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));
if(pkg.version!=='0.6.1')throw new Error(`Unexpected source version ${pkg.version}`);
pkg.version='0.6.2';
fs.writeFileSync('package.json',JSON.stringify(pkg,null,2)+'\n');
let sw=fs.readFileSync('sw.js','utf8');
if(!sw.includes("const CACHE='parcel-town-playtest-v0.6.1'"))throw new Error('Unexpected cache version');
const added=['harbour','metro'].filter(d=>!sw.includes('assets/scenes/'+d+'-cinematic.webp')).map(d=>'./assets/scenes/'+d+'-cinematic.webp');
if(added.length){
  const marker="'./native-back.js',";
  if(!sw.includes(marker))throw new Error('Service worker asset insertion point missing');
  sw=sw.replace(marker,marker+added.map(p=>"'"+p+"',").join(''));
}
fs.writeFileSync('sw.js',sw.replace("const CACHE='parcel-town-playtest-v0.6.1'","const CACHE='parcel-town-playtest-v0.6.2'"));
console.log('Upgraded Parcel Town to 0.6.2; Maps navigation and cinematic art resolved.');
