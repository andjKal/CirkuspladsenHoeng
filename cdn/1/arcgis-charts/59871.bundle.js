"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[59871],{59871:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Xe});var i=r(36663),s=r(6865),o=r(81739),n=r(70375),l=r(67134),a=r(63592),p=r(13802),y=r(15842),d=r(78668),u=r(3466),c=r(81977),h=r(7283),b=r(34248),g=r(40266),f=r(14685),v=r(38481),_=r(80085),m=r(80020),w=(r(86004),r(45510),r(16192),r(71297),r(878),r(22836),r(50172),r(72043),r(72506),r(54021)),S=r(66341),C=r(25709),j=r(68309),x=r(64189),O=(r(7753),r(39994),r(79438)),I=r(91772),F=r(12926),L=r(86618),T=r(51599);let q=class extends((0,L.IG)(y.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,i._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],q.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["alias","name"])],q.prototype,"readTitle",null),(0,i._)([(0,c.Cb)()],q.prototype,"layer",void 0),(0,i._)([(0,c.Cb)({type:h.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],q.prototype,"id",void 0),(0,i._)([(0,b.r)("service","id")],q.prototype,"readIdOnlyOnce",null),(0,i._)([(0,c.Cb)((0,T.Lx)(String))],q.prototype,"modelName",void 0),(0,i._)([(0,c.Cb)((0,T.Lx)(Boolean))],q.prototype,"isEmpty",void 0),(0,i._)([(0,c.Cb)({type:Boolean,nonNullable:!0})],q.prototype,"legendEnabled",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],q.prototype,"visible",void 0),(0,i._)([(0,c.Cb)({type:Number,json:{write:!0}})],q.prototype,"opacity",void 0),q=(0,i._)([(0,g.j)("esri.layers.buildingSublayers.BuildingSublayer")],q);const B=q;var E=r(31484),A=r(89076),Z=r(28790),N=r(14845),R=r(40909),k=r(97304),P=r(14626),M=r(10171),U=r(74710),Q=r(11530),V=r(59439);const D="esri.layers.buildingSublayers.BuildingComponentSublayer",K=p.Z.getLogger(D),J=(0,A.v)();let G=class extends(j.Z.LoadableMixin((0,x.v)(B))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new Z.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return null!=r&&"number"==typeof i?new F.default({portalItem:r,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,R.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,K,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,M.eZ)(this,e)}async _fetchService(e){const t=(await(0,S.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:E.C,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}createQuery(){const e=new P.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,N.Lk)(this.fieldsIndex,await(0,V.e7)(this,(0,V.V5)(this)));return(0,Q.xe)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new n.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new _.Z;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"parsedUrl",null),(0,i._)([(0,c.Cb)({type:k.U4,readOnly:!0})],G.prototype,"nodePages",void 0),(0,i._)([(0,c.Cb)({type:[k.QI],readOnly:!0})],G.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[k.Yh],readOnly:!0})],G.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[k.H3],readOnly:!0})],G.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"store",void 0),(0,i._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],G.prototype,"rootNode",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,c.Cb)(J.fields)],G.prototype,"fields",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"fieldsIndex",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:F.default})],G.prototype,"associatedLayer",void 0),(0,i._)([(0,b.r)("service","associatedLayer",["associatedLayerID"])],G.prototype,"readAssociatedLayer",null),(0,i._)([(0,c.Cb)(J.outFields)],G.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)({type:String,readOnly:!0})],G.prototype,"objectIdField",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,json:{read:!1}})],G.prototype,"displayField",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:String})],G.prototype,"apiKey",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:I.Z})],G.prototype,"fullExtent",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:f.Z})],G.prototype,"spatialReference",null),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"version",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:U.Z})],G.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],G.prototype,"minScale",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],G.prototype,"maxScale",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],G.prototype,"effectiveScaleRange",null),(0,i._)([(0,c.Cb)({type:["hide","show"],json:{write:!0}})],G.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({types:w.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],G.prototype,"renderer",void 0),(0,i._)([(0,c.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],G.prototype,"definitionExpression",void 0),(0,i._)([(0,c.Cb)(T.C_)],G.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)({type:m.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],G.prototype,"popupTemplate",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],G.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"defaultPopupTemplate",null),(0,i._)([(0,c.Cb)()],G.prototype,"types",null),(0,i._)([(0,c.Cb)()],G.prototype,"typeIdField",null),(0,i._)([(0,c.Cb)({json:{write:!1}}),(0,O.J)(new C.X({"3DObject":"3d-object",Point:"point"}))],G.prototype,"layerType",void 0),(0,i._)([(0,c.Cb)()],G.prototype,"geometryType",null),(0,i._)([(0,c.Cb)()],G.prototype,"profile",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"capabilities",null),G=(0,i._)([(0,g.j)(D)],G);const H=G;var z,W=r(96863);const X={type:s.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:Y}}},read:!1}};function Y(e,t,r){if(e&&Array.isArray(e))return new s.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?$:H}(e);if(t){const i=new t;return i.read(e,r),i}return r&&r.messages&&e&&r.messages.push(new W.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let $=z=class extends B{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,a.w)(this,(e=>z.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var ee;(0,i._)([(0,c.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],$.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)(X)],$.prototype,"sublayers",void 0),$=z=(0,i._)([(0,g.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],$),(ee=$||($={})).sublayersProperty=X,ee.readSublayers=Y,ee.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const te=$;var re=r(91223),ie=r(87232),se=r(43330),oe=r(18241),ne=r(95874),le=r(69724),ae=r(82064),pe=r(12173);let ye=class extends ae.wq{constructor(){super(...arguments),this.type=null}};(0,i._)([(0,c.Cb)({type:String,readOnly:!0,json:{write:!0}})],ye.prototype,"type",void 0),ye=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterAuthoringInfo")],ye);const de=ye;var ue;let ce=ue=class extends ae.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new ue({filterType:this.filterType,filterValues:(0,l.d9)(this.filterValues)})}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],ce.prototype,"filterType",void 0),(0,i._)([(0,c.Cb)({type:[String],json:{write:!0}})],ce.prototype,"filterValues",void 0),ce=ue=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],ce);const he=ce;var be;const ge=s.Z.ofType(he);let fe=be=class extends ae.wq{clone(){return new be({filterTypes:(0,l.d9)(this.filterTypes)})}};(0,i._)([(0,c.Cb)({type:ge,json:{write:!0}})],fe.prototype,"filterTypes",void 0),fe=be=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],fe);const ve=fe;var _e;const me=s.Z.ofType(ve);let we=_e=class extends de{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _e({filterBlocks:(0,l.d9)(this.filterBlocks)})}};(0,i._)([(0,c.Cb)({type:["checkbox"]})],we.prototype,"type",void 0),(0,i._)([(0,c.Cb)({type:me,json:{write:!0}})],we.prototype,"filterBlocks",void 0),we=_e=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],we);const Se=we;let Ce=class extends ae.wq{};(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"type",void 0),Ce=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterMode")],Ce);const je=Ce;var xe;let Oe=xe=class extends je{constructor(){super(...arguments),this.type="solid"}clone(){return new xe}};(0,i._)([(0,c.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],Oe.prototype,"type",void 0),Oe=xe=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterModeSolid")],Oe);const Ie=Oe;var Fe,Le=r(64372);let Te=Fe=class extends je{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Fe({edges:(0,l.d9)(this.edges)})}};(0,i._)([(0,O.J)({wireFrame:"wire-frame"})],Te.prototype,"type",void 0),(0,i._)([(0,c.Cb)(Le.Z)],Te.prototype,"edges",void 0),Te=Fe=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterModeWireFrame")],Te);const qe=Te;var Be;let Ee=Be=class extends je{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Be}};(0,i._)([(0,c.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Ee.prototype,"type",void 0),Ee=Be=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterModeXRay")],Ee);const Ae=Ee;var Ze;const Ne={nonNullable:!0,types:{key:"type",base:je,typeMap:{solid:Ie,"wire-frame":qe,"x-ray":Ae}},json:{read:e=>{switch(e&&e.type){case"solid":return Ie.fromJSON(e);case"wireFrame":return qe.fromJSON(e);case"x-ray":return Ae.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Re=Ze=class extends ae.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Ie,this.title=""}clone(){return new Ze({filterExpression:this.filterExpression,filterMode:(0,l.d9)(this.filterMode),title:this.title})}};(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Re.prototype,"filterExpression",void 0),(0,i._)([(0,c.Cb)(Ne)],Re.prototype,"filterMode",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Re.prototype,"title",void 0),Re=Ze=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterBlock")],Re);const ke=Re;var Pe;const Me=s.Z.ofType(ke);let Ue=Pe=class extends ae.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,pe.D)(),this.name=null}clone(){return new Pe({description:this.description,filterBlocks:(0,l.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,l.d9)(this.filterAuthoringInfo)})}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],Ue.prototype,"description",void 0),(0,i._)([(0,c.Cb)({type:Me,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"filterBlocks",void 0),(0,i._)([(0,c.Cb)({types:{key:"type",base:de,typeMap:{checkbox:Se}},json:{read:e=>"checkbox"===(e&&e.type)?Se.fromJSON(e):null,write:!0}})],Ue.prototype,"filterAuthoringInfo",void 0),(0,i._)([(0,c.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"id",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"name",void 0),Ue=Pe=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilter")],Ue);const Qe=Ue;let Ve=class extends ae.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,i._)([(0,c.Cb)({type:String})],Ve.prototype,"fieldName",void 0),(0,i._)([(0,c.Cb)({type:String})],Ve.prototype,"modelName",void 0),(0,i._)([(0,c.Cb)({type:String})],Ve.prototype,"label",void 0),(0,i._)([(0,c.Cb)({type:Number})],Ve.prototype,"min",void 0),(0,i._)([(0,c.Cb)({type:Number})],Ve.prototype,"max",void 0),(0,i._)([(0,c.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ve.prototype,"mostFrequentValues",void 0),(0,i._)([(0,c.Cb)({type:[Number]})],Ve.prototype,"subLayerIds",void 0),Ve=(0,i._)([(0,g.j)("esri.layers.support.BuildingFieldStatistics")],Ve);let De=class extends(j.Z.LoadableMixin((0,x.v)(ae.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(p.Z.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,S.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,i._)([(0,c.Cb)({constructOnly:!0,type:String})],De.prototype,"url",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:[Ve],json:{read:{source:"summary"}}})],De.prototype,"fields",null),De=(0,i._)([(0,g.j)("esri.layers.support.BuildingSummaryStatistics")],De);const Ke=De;var Je=r(31906);const Ge=s.Z.ofType(Qe),He=(0,l.d9)(te.sublayersProperty),ze=He.json?.origins;ze&&(ze["web-scene"]={type:[H],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},ze["portal-item"]={type:[H],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let We=class extends((0,le.Vt)((0,ie.Y)((0,se.q)((0,oe.I)((0,ne.M)((0,y.R)((0,re.V)(v.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new Ge,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const i=te.readSublayers(e,t,r);return te.forEachSublayer(i,(e=>e.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(i,this._sublayerOverrides),this._sublayerOverrides=null),i}applySublayerOverrides(e,{overrides:t,context:r}){te.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?r.set(i.id,i):t.messages?.push(new n.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const i=[];te.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,l.d9)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this._sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,u.v_)(this.parsedUrl?.path,t.statisticsHRef);return new Ke({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,a.G)(this,(e=>{te.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(le.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(le.xp.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new n.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&p.Z.getLogger(this).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&p.Z.getLogger(this).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new Je.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){p.Z.getLogger(this).warn("Associated feature service item could not be loaded",e)}}};(0,i._)([(0,c.Cb)({type:["BuildingSceneLayer"]})],We.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],We.prototype,"allSublayers",void 0),(0,i._)([(0,c.Cb)(He)],We.prototype,"sublayers",void 0),(0,i._)([(0,b.r)("service","sublayers")],We.prototype,"readSublayers",null),(0,i._)([(0,c.Cb)({type:Ge,nonNullable:!0,json:{write:!0}})],We.prototype,"filters",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],We.prototype,"activeFilterId",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:Ke})],We.prototype,"summaryStatistics",void 0),(0,i._)([(0,b.r)("summaryStatistics",["statisticsHRef"])],We.prototype,"readSummaryStatistics",null),(0,i._)([(0,c.Cb)({type:[String],json:{read:!1}})],We.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)(T.vg)],We.prototype,"fullExtent",void 0),(0,i._)([(0,c.Cb)(T.rn)],We.prototype,"legendEnabled",void 0),(0,i._)([(0,c.Cb)({type:["show","hide","hide-children"]})],We.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)((0,T.Lx)(f.Z))],We.prototype,"spatialReference",void 0),(0,i._)([(0,c.Cb)(T.PV)],We.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],We.prototype,"type",void 0),(0,i._)([(0,c.Cb)()],We.prototype,"associatedFeatureServiceItem",void 0),We=(0,i._)([(0,g.j)("esri.layers.BuildingSceneLayer")],We);const Xe=We}}]);