(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53a6f12d"],{1315:function(a,e,i){"use strict";var t=i("e718"),s=i.n(t);s.a},"281d":function(a,e,i){"use strict";i.r(e);var t=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"brew-ring-series",attrs:{fluid:""}},[i("b-row",[i("b-col",{staticClass:"brew-ring-series__header",attrs:{cols:"12"}},[i("div",{staticClass:"brew-ring-series__header-content"},[i("div",{staticClass:"brew-ring-series__subject"},[i("h1",[a._v("精選求婚戒｜私釀求婚戒")])]),i("div",{staticClass:"brew-ring-series__description"},[i("p",[a._v("獨家設計精選，運用不同工藝技法製作，讓婚戒擁有各種光亮面和磨砂面混合交織的獨特美感，各款式皆各有亮點。")]),a._v("私釀婚戒訂製，可依新人們的喜好調整：戒指寬度，鑽石數量，及金屬成色等，讓婚戒充滿個人風格及質感，也是分享給新人的婚戒新選擇")])])])],1),i("b-row",{attrs:{"no-gutters":!0}},a._l(a.images,function(e,t){return i("b-col",{key:e.alias,staticClass:"brew-ring-series__image-wrapper",attrs:{cols:"12",md:"4"},on:{click:function(e){return a.clickHandler(t)}}},[i("img",{staticClass:"brew-ring-series__image-item",attrs:{src:e.path[0],alt:e.alias}})])}),1),a.isModalOpened?i("div",{staticClass:"brew-ring-series__modal"},[i("div",{staticClass:"brew-ring-series__modal-wrapper"},[i("div",{staticClass:"brew-ring-series__modal-close",on:{click:function(e){a.isModalOpened=!1}}}),i("carousel",{staticClass:"carousell",attrs:{"per-page":1,"mouse-drag":!0,autoplay:!0,centerMode:!0,loop:!0,autoplayTimeout:3e3,paginationPosition:"bottom-overlay"}},a._l(a.images[a.modalRingIndex].path,function(e,t){return i("slide",{key:t},[i("img",{attrs:{src:e},on:{click:function(e){return e.stopPropagation(),a.modalClickHandler(e)}}})])}),1)],1)]):a._e()],1)},s=[],l=i("b700"),n=i("0a63"),r={data:function(){return{isModalOpened:!1,modalRingIndex:0}},name:"brewRingSeries",components:{Carousel:n["Carousel"],Slide:n["Slide"]},methods:{modalClickHandler:function(){console.log("click on image")},clickHandler:function(a){this.modalRingIndex=a,this.isModalOpened=!0}},computed:{brewRingSeries:function(){return l["a"].engage},type:function(){return this.$route.params.type?"brew-ring-series__banner--".concat(this.$route.params.type):""},title:function(){return this.brewRingSeries.title},images:function(){return this.brewRingSeries.images},description:function(){return this.brewRingSeries.description}},deactivated:function(){this.isModalOpened=!1}},c=r,o=(i("1315"),i("2877")),d=Object(o["a"])(c,t,s,!1,null,"01eda84c",null);e["default"]=d.exports},b700:function(a,e,i){"use strict";e["a"]={scratch:{title:"Scratch ｜ 永痕",description:"精緻刮金痕紋交織，象徵兩人難忘的經歷及珍貴回憶，刻劃成心中的永恆。",images:[{path:i("f133"),alias:"Eternity",linkId:"scratch-eternity"},{path:i("079c"),alias:"Classic",linkId:"scratch-classic"},{path:i("4886"),alias:"Dome",linkId:"scratch-dome"},{path:i("1ca5"),alias:"Brilliant",linkId:"scratch-brilliant"},{path:i("0529"),alias:"Flat(Black)",linkId:"scratch-flat-black"},{path:i("c4c6"),alias:"Flat(BlackWhite)",linkId:"scratch-flat-black-white"},{path:i("d5cc"),alias:"Flat(BlackYellow)",linkId:"scratch-flat-black-yellow"},{path:i("7396"),alias:"Flat(Rose)",linkId:"scratch-flat-rose"},{path:i("1791"),alias:"Flat(White)",linkId:"scratch-flat-white"}]},lava:{title:"Lava ｜ 熔岩",description:"以大地藴育萬物前的岩漿噴發，象徵愛情裡的兩人經歷磨合後擁有了幸福。",images:[{path:i("0c43"),alias:"Dome",linkId:"lava-dome"},{path:i("8f0a"),alias:"Flat(Black&Gold)",linkId:"lava-flat-black-and-gold"},{path:i("d17b"),alias:"Flat(Black)",linkId:"lava-flat-black"}]},engraving:{title:"Engraving ｜ 金雕",description:"融入了博物館藏品與限量鐘錶的金屬微雕（Hand Engraving）工藝，運用翻刀（Flare Cutting）技術雕刻設計紋飾於婚戒，讓戒指轉動時呈現如鑽閃爍的光斑。",images:[{path:i("a32c"),alias:"Cloud",linkId:"engraving-cloud"},{path:i("46cb"),alias:"Cupid",linkId:"engraving-cupid"},{path:i("7b3c"),alias:"FairyTale",linkId:"engraving-fairy-tale"},{path:i("75f3"),alias:"Flow",linkId:"engraving-flow"},{path:i("9c7c"),alias:"Laurel",linkId:"engraving-laurel"},{path:i("9683"),alias:"Ripple",linkId:"engraving-ripple"},{path:i("16b0"),alias:"Soulmate",linkId:"engraving-soulmate"}]},tassel:{title:"Tassel ｜ 流穗",description:"重新詮釋的經典編織，以 3D 技術呈現細緻穗紋，霧感處理的戒面加上金雕的工藝點綴，讓戒指質感簡約又時尚。",images:[{path:i("9367"),alias:"Evening",linkId:"tassel-evening"},{path:i("5f96"),alias:"Morning",linkId:"tassel-morning"},{path:i("b1ed"),alias:"Night",linkId:"tassel-night"},{path:i("09e6"),alias:"Noon",linkId:"tassel-noon"}]},engage:{images:[{path:[i("8c62"),i("959c"),i("5cc4")],alias:"engage-1"},{path:[i("b1c5"),i("2b98"),i("9e9f")],alias:"engage-2"},{path:[i("67b8"),i("4452"),i("dfe9")],alias:"engage-3"},{path:[i("f53d"),i("986d"),i("d62b")],alias:"engage-4"},{path:[i("5c7a"),i("de44"),i("6829")],alias:"engage-5"},{path:[i("389e"),i("4248"),i("dc4c")],alias:"engage-6"},{path:[i("ba47"),i("ac4b"),i("10e5")],alias:"engage-7"},{path:[i("0aca"),i("749f"),i("488e")],alias:"engage-8"},{path:[i("a4d0"),i("31c6"),i("bb3d")],alias:"engage-9"},{path:[i("a879"),i("a820"),i("8ce3")],alias:"engage-10"},{path:[i("89a7"),i("d7b0"),i("5f00")],alias:"engage-11"},{path:[i("779f"),i("0f2e"),i("4209")],alias:"engage-12"},{path:[i("a58b"),i("03a2"),i("bcf1")],alias:"engage-13"},{path:[i("c60a"),i("609b"),i("e538")],alias:"engage-14"},{path:[i("7e2f"),i("fb09"),i("b6b2")],alias:"engage-15"}]}}},e718:function(a,e,i){}}]);
//# sourceMappingURL=chunk-53a6f12d.5ad4c365.js.map