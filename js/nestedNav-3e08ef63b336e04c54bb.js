!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="32e0cd29-6611-4e2e-adb2-67fc0bc15554",e._sentryDebugIdIdentifier="sentry-dbid-32e0cd29-6611-4e2e-adb2-67fc0bc15554")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"6c3657df6e8fb6ab84dbd9de3f00eb97b0e92770"},(window.webpackJsonp=window.webpackJsonp||[]).push([[129,95],{"5a1q":function(e,n,t){"use strict";t.r(n),t.d(n,"esData",(function(){return o})),t.d(n,"EsDataProvider",(function(){return r}));var a=t("q1tI"),i=t.n(a),o=[{url:"https://www.nytimes.com/es/section/mundo",name:"Mundo"},{url:"https://www.nytimes.com/es/section/estados-unidos",name:"Estados Unidos"},{url:"https://www.nytimes.com/es/section/america-latina",name:"América Latina"},{url:"https://www.nytimes.com/es/section/negocios",name:"Negocios"},{url:"https://www.nytimes.com/es/section/ciencia-y-tecnologia",name:"Ciencia y Tecnología"},{url:"https://www.nytimes.com/es/section/cultura",name:"Cultura"},{url:"https://www.nytimes.com/es/section/estilos-de-vida",name:"Estilos de Vida"},{url:"https://www.nytimes.com/es/section/opinion",name:"Opinión"},{url:"https://www.nytimes.com/es/section/deportes",name:"Deportes"},{url:"https://www.nytimes.com",name:"Read in English"}],r=function(e){var n=e.children;return i.a.Children.only(i.a.cloneElement(n,{data:o}))}},OpWY:function(e,n,t){"use strict";t.r(n);var a=t("gcR/"),i=t.n(a),o=t("lSNA"),r=t.n(o),c=t("J4zp"),s=t.n(c),l=t("q1tI"),d=t.n(l),u=t("Jqp9"),m=t("QS0n"),p=t("X6oL"),f=t("rWB7"),g=t("XnIf"),b=t("rI8Z"),h=t("PgO9"),v=t("HUmG"),y=t("kPjT"),w=t("wXC7"),k=t.n(w),O=t("3sMT"),N=Object(u.css)("h3{color:",O.color.content.primary,";font-family:",k.a.font.karnakBase,";font-weight:",k.a.font.weight.book,";font-size:",k.a.font.size(20),";line-height:",k.a.font.size(24),";margin:-0.3125rem 0 0.4375rem 0;}p{color:",O.color.content.secondary,";max-width:11rem;}a:hover h3,a:hover p{color:",O.color.content.tertiary,";}"),j=Object(u.css)("margin-left:0;margin-top:1rem;"),D=function(e){var n=e.columnId,t=e.description,a=e.footer,o=e.handleNestedLinkClick,r=e.link,c=e.parentName,s=e.title;return i()("div",{id:n,className:N},void 0,i()("a",{href:r,onClick:function(e){return o(e,r,c,s,s)}},void 0,i()("h3",{},void 0,s),i()("p",{},void 0,t)),i()(y.a,{className:j,footer:a,handleNestedLinkClick:o,heading:c,parentName:c}))};D.displayName="BrandColumn",D.defaultProps={handleNestedLinkClick:function(){},footer:{}};var x=D,E=t("pYsa"),C=t("cMFZ"),T=t("coi8"),P=t("Gfev");function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var W="https://www.nytimes.com/subscription/all-access",S=function(e){var n=e.className,t=e.dropdownData,a=e.isFloatingNav,o=e.isFullWidth,c=e.item,s=e.setVisibleNestedNav,l=e.visibleNestedNav,d=e.regionForTracking,m=e.pagetype,f=Object(h.a)().user,g=Object(v.c)(f),b=Object(p.useTracking)({eventData:{pagetype:m},module:{context:"standard",region:"masthead"}}),y=function(e){return e.toLowerCase().split(" ").join("-")},w={event:"moduleInteraction",eventData:{trigger:"module",type:"click"},module:{name:"nested-navigation",label:"masthead-navigation",region:d}},k=function(e){window.location.assign(e)},O=function(e,n,t,a,i){e.preventDefault();var o=w;o.module.element={name:y("go-to-".concat(t,"-").concat(a,"-").concat(i)),label:y("clicked-".concat(t,"-").concat(a,"-").concat(i)),url:n},b.trackEvent(L(L({},o),{},{eventCallback:k(n)}))},N=function(e,n,t){var a=n?"".concat(y(n),"-column"):t;return"".concat(e,"-").concat(a)};return i()("div",{"aria-hidden":l!==c.name,"aria-label":"".concat(c.name," submenu"),className:Object(u.cx)(P.r,r()(r()(r()({},P.t,l===c.name),P.n,a),P.a,o),n),"data-testid":"nav-dropdown-".concat(c.name),onKeyDown:function(e){return function(e){"Escape"===e.key&&(e.currentTarget.parentElement.getElementsByTagName("a")[0].focus(),s(null))}(e)}},void 0,i()("div",{className:Object(u.cx)(P.o,r()({},P.a,!o))},void 0,t.map((function(e,n){var t;return i()("div",{className:Object(u.cx)(P.m,(t={},r()(r()(r()(r()(r()(r()(r()(r()(r()(r()(t,P.b,0===e.columnWidth),P.d,1===e.columnWidth),P.e,2===e.columnWidth),P.f,3===e.columnWidth),P.g,4===e.columnWidth),P.h,5===e.columnWidth),P.i,6===e.columnWidth),P.j,7===e.columnWidth),P.k,8===e.columnWidth),P.l,9===e.columnWidth),r()(t,P.c,10===e.columnWidth)))},"".concat(c.name," ").concat(e.heading||"column ".concat(n)).concat(e.hideHeading?" hide heading":""),"brand"===e.type&&i()(x,{title:e.heading,description:e.description,link:e.link,columnId:N(c.name,e.name,"brand-column"),parentName:c.name,handleNestedLinkClick:O,footer:e.footer}),"links"===e.type&&i()(C.a,{footer:e.footer,heading:e.heading,hideHeading:e.hideHeading,innerColumnCount:e.innerGridColumnCount||1,columns:e.columns||[],links:e.links||[],columnId:N(c.name,e.name,"links-column"),parentName:c.name,handleNestedLinkClick:O,style:e.style}),"linksWithIcons"===e.type&&i()(T.a,{heading:e.heading,hideHeading:e.hideHeading,links:e.links||[],columnId:N(c.name,e.name,"links-icons-column"),parentName:c.name,handleNestedLinkClick:O}),"thumbnailContent"===e.type&&i()(E.a,{heading:e.heading,hideHeading:e.hideHeading,footer:e.footer,items:e.items,columnId:N(c.name,e.name,"thumbnail-column"),parentName:c.name,handleNestedLinkClick:O}))}))),"standalone"===c.productType&&!g&&i()("div",{className:P.s},void 0,c.name," is included in an All Access subscription."," ",i()("a",{href:W,onClick:function(e){return function(e,n,t){e.preventDefault();var a=w;a.module.element={name:y("go-to-".concat(t,"-learn-more")),label:y("clicked-".concat(t,"-learn-more")),url:n},b.trackEvent(L(L({},a),{},{eventCallback:k(n)}))}(e,W,c.name)}},void 0,"Learn more.")),"standalone"===c.productType&&g&&i()("div",{className:P.s},void 0,c.name," is included in your All Access subscription."))};S.displayName="DropDownPanel",S.defaultProps={className:void 0,isFloatingNav:!1,visibleNestedNav:null,regionForTracking:"masthead",pagetype:"home",isFullWidth:!1};var A=S,F=t("XMyW"),z=t("5a1q"),M=t("kBkf"),R=t("KRMk"),B=Object(u.css)("width:8px;"),H=Object(u.css)("background:",k.a.color.white,";display:inline-block;text-transform:uppercase;transition:none;z-index:",k.a.zIndex.navigation,";margin-top:-5px;cursor:default;"),_=Object(u.css)("@media (min-width:","1277px","){position:static;}"),q=Object(u.css)("display:flex;align-items:center;justify-content:center;padding:0;@media (min-width:","1277px","){position:relative;}"),J=Object(u.css)("font-family:",k.a.font.franklinBase,";font-weight:",k.a.font.weight.medium,";font-size:",k.a.font.size(14),";line-height:",k.a.font.size(14),";padding:1rem 12px;:hover > a{text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px;}"),K=Object(u.css)(J,";&:nth-child(7){padding-left:12px;&::before{content:'';height:20px;margin-right:20px;margin-left:-4px;border-left:1px solid ",O.color.stroke.quaternary,";}}"),X=Object(u.css)("padding:0 6px 0 0;display:inline-block;color:",O.color.content.primary,";letter-spacing:0.1px;");function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y=function(e){var n=e.isFloatingNav,t=e.isSpanishLang,a=Object(m.useLocation)(),o=Object(b.b)(a),c=Object(f.b)(),h=Object(l.useState)(null),v=s()(h,2),y=v[0],w=v[1],k=Object(l.useRef)(null),O=Object(l.useRef)(null),N=Object(l.useRef)({}),j=Object(p.useTracking)({eventData:{pagetype:"home"},module:{context:"standard",region:"masthead"}}),D=c&&window.matchMedia("(min-width: 1024px)").matches,x=t?z.esData.filter((function(e){return"Read in English"!==e.name})):"CANADA"===o?F.caData:"INTL"===o?M.internationalData:R.usData;Object(l.useEffect)((function(){D&&!n&&j.trackEvent({event:"impression",module:{name:"nested-navigation",label:"masthead-nested-navigation"}})}),[c,D,n,j]);var E=function(e){return e.toLowerCase().split(" ").join("-")},C={event:"moduleInteraction",eventData:{trigger:"module",type:"click"},module:{name:"nested-navigation",label:"masthead-navigation",region:"masthead"}},T=function(e){window.location.assign(e)},P=function(e){k.current&&(clearTimeout(k.current),k.current=null);var n=e.currentTarget.dataset.navid,t=setTimeout((function(){w(n),N.current[n]||(N.current[n]=!0,j.trackEvent({event:"impression",module:{name:E("".concat(n,"-nested-navigation")),label:E("".concat(n,"-masthead-nested-navigation"))}}))}),200);O.current=t},I=function(e){if("ArrowDown"===e.key||" "===e.key){e.preventDefault(),P(e);var n=e.currentTarget.nextSibling.getElementsByTagName("a")[0];setTimeout((function(){return n.focus()}),200)}else if("Enter"===e.key||"Control"===e.key||"Alt"===e.key||"Shift"===e.key){P(e);var t=e.currentTarget.nextSibling.getElementsByTagName("a")[0];setTimeout((function(){return t.focus()}),200)}};return i()("nav",{"aria-label":"Main","data-testid":n?"floating-desktop-nested-nav":"desktop-nested-nav"},void 0,i()("ul",{className:Object(u.cx)(q,r()({},_,n))},void 0,x.map((function(e){var a;return i()("li",{className:t?J:K,"data-testid":"nav-item-".concat(e.name),"data-navid":e.name,onMouseEnter:function(e){return P(e)},onMouseLeave:function(e){return function(){O.current&&(clearTimeout(O.current),O.current=null);var e=setTimeout((function(){w(null)}),400);k.current=e}()}},e.name,i()("a",{href:e.url,className:X,"data-navid":e.name,onClick:function(n){return function(e,n,t){e.preventDefault();var a=C;a.module.element={name:E("go-to-".concat(t)),label:E("clicked-".concat(t)),url:n},j.trackEvent(V(V({},a),{},{eventCallback:T(n)}))}(n,e.url,e.name)},onKeyDown:function(n){return I(n,e.url,e.name)},onFocus:function(){return w(null)}},void 0,e.name),(null===(a=e.dropdown)||void 0===a?void 0:a.length)&&d.a.createElement(d.a.Fragment,null,i()("button",{type:"button","aria-label":"open ".concat(e.name," submenu"),"data-navid":e.name,className:H,onClick:function(e){return P(e)},onKeyDown:function(e){return I(e)}},void 0,i()(g.a,{className:B,fill:"#979797"})),i()(A,{dropdownData:e.dropdown,isFloatingNav:n,item:e,setVisibleNestedNav:w,visibleNestedNav:y})))}))))};Y.displayName="NestedNav",Y.defaultProps={isFloatingNav:!1,isSpanishLang:!1};n.default=Y}}]);
//# sourceMappingURL=nestedNav-3e08ef63b336e04c54bb.js.map