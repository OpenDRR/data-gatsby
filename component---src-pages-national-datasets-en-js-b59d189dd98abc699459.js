(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[944],{9009:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(7294)),r=l(a(8384)),c=l(a(4030)),m=a(7791),u=function(e){return n.default.useContext(m.OptionsContext).useAutoGen?n.default.createElement(r.default,e):n.default.createElement(c.default,e)};t.default=u},8384:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(7154)),r=l(a(7316)),c=l(a(7294)),m=l(a(5697)),u=a(5444),s=function(e){var t=e.title,a=e.crumbs,l=e.crumbLabel,m=e.crumbSeparator,s=e.disableLinks,i=e.hiddenCrumbs,o=(0,r.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return i.includes(e.pathname)?null:c.default.createElement(c.default.Fragment,{key:t+"-"+e.pathname},!s.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement(u.Link,(0,n.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},o),l&&t===a.length-1?l:e.crumbLabel)),s.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement("span",(0,n.default)({className:"breadcrumb__link__disabled"},o),l&&t===a.length-1?l:e.crumbLabel)),t===a.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},m))})))))};s.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},s.propTypes={title:m.default.string,crumbSeparator:m.default.string,crumbs:m.default.arrayOf(m.default.shape({location:m.default.shape(),pathname:m.default.string.isRequired})).isRequired,crumbLabel:m.default.string,disableLinks:m.default.arrayOf(m.default.string),hiddenCrumbs:m.default.arrayOf(m.default.string)};var i=s;t.default=i},4030:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(7154)),r=l(a(7316)),c=l(a(7294)),m=l(a(5697)),u=a(5444),s=a(7791),i=l(a(5893)),o=function(e){var t=e.title,a=e.location,l=e.crumbLabel,m=e.crumbSeparator,o=(0,r.default)(e,["title","location","crumbLabel","crumbSeparator"]),d=c.default.useContext(s.OptionsContext).usePathPrefix,b=(0,i.default)({location:(0,n.default)({},a,{pathname:d?a.pathname.replace(new RegExp("^"+d),""):a.pathname}),crumbLabel:l,crumbSeparator:m}).crumbs,f=void 0===b?[]:b;return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return c.default.createElement("li",{className:"breadcrumb__item",key:t},c.default.createElement(u.Link,(0,n.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},o),e.crumbLabel),t===f.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};o.defaultProps={title:"",crumbSeparator:" / "},o.propTypes={location:m.default.shape().isRequired,crumbLabel:m.default.string.isRequired,title:m.default.string,crumbSeparator:m.default.string};var d=o;t.default=d},7935:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0;var n=l(a(9009));t.Breadcrumb=n.default;var r=l(a(8384));t.AutoGenCrumb=r.default;var c=a(1492);t.BreadcrumbContext=c.BreadcrumbContext,t.BreadcrumbConsumer=c.BreadcrumbConsumer,t.BreadcrumbProvider=c.BreadcrumbProvider;var m=l(a(5893));t.useBreadcrumb=m.default},5893:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(7294)),r=a(1492),c=function(e){var t=e.location,a=e.crumbLabel,l=e.crumbSeparator,c=n.default.useContext(r.BreadcrumbContext),m=c.crumbs,u=c.updateCrumbs;return n.default.useEffect((function(){u({location:t,crumbLabel:a,crumbSeparator:l})}),[t,a,l,u]),{crumbs:m}};t.default=c},5231:function(e,t,a){"use strict";var l=a(7935);l.Breadcrumb,l.BreadcrumbContext,l.BreadcrumbConsumer,l.BreadcrumbProvider,t.fb=l.useBreadcrumb,l.AutoGenCrumb},2181:function(e,t,a){"use strict";var l=a(7294),n=a(5444);t.Z=function(e){var t=e.crumbs;return l.createElement("nav",{role:"navigation",id:"wb-bc",property:"breadcrumb"},l.createElement("div",null,t.map((function(e){return l.createElement("div",{className:"container",style:{display:"inline"}},l.createElement("ol",{className:"breadcrumb"},l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en.html"},"Canada.ca")),l.createElement("li",null,l.createElement(n.Link,{to:"/"},"OpenDRR")),l.createElement("li",null,l.createElement(n.Link,{to:e.pathname},e.crumbLabel))))}))))}},7910:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var l=a(7294),n=a(3552),r=a(5959),c=a(5444),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return l.createElement("header",{className:"header-styles"},l.createElement("div",{className:"row"},l.createElement("div",{id:"wb-bnr",className:"container"},l.createElement("section",{id:"wb-lang",className:"text-right"},l.createElement("h2",{className:"wb-inv"},"Language Selection"),l.createElement("div",{className:"brand col-xs-5 col-md-4",property:"publisher",typeof:"GovernmentOrganization"},l.createElement("a",{href:"https://www.canada.ca/en.html"},l.createElement("img",{className:"",src:r.Z,alt:"logo"}))),l.createElement("ul",{className:"list-inline margin-bottom-none"},l.createElement("li",{id:"#wb-lng"},l.createElement(c.Link,{to:"/fr/"},"Français")))))))},t}(l.Component),u=function(){return l.createElement("footer",{id:"wb-info"},l.createElement("div",{className:"landscape"},l.createElement("nav",{className:"container wb-navcurr"},l.createElement("h2",{className:"wb-inv"},l.createElement("ul",{className:"list-unstyled colcount-sm-2 colcount-md-3"},l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/contact.html"},"Contact us")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/government/dept.html"},"Departments and agencies")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/government/publicservice.html"},"Public service and military")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/news.html"},"News")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/government/system/laws.html"},"Treaties, laws and regulations")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/transparency/reporting.html"},"Government-wide reporting")),l.createElement("li",null,l.createElement("a",{href:"https://pm.gc.ca/eng"},"Prime Minister")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/government/system.html"},"How government works")),l.createElement("li",null,l.createElement("a",{href:"https://open.canada.ca/en/"},"Open government")))))),l.createElement("div",{className:"brand"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row "},l.createElement("nav",{className:"col-md-9 col-lg-10 ftr-urlt-lnk"},l.createElement("h2",{className:"wb-inv"},"About this site"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/social.html"},"Social media")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/mobile.html"},"Mobile applications")),l.createElement("li",null,l.createElement("a",{href:"https://www1.canada.ca/en/newsite.html"},"About Canada.ca")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/transparency/terms.html"},"Terms and conditions")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/transparency/privacy.html"},"Privacy")))),l.createElement("div",{className:"col-xs-6 visible-sm visible-xs tofpg"},l.createElement("a",{href:"#wb-cont"},"Top of Page"," ",l.createElement("span",{className:"glyphicon glyphicon-chevron-up"}))),l.createElement("div",{className:"col-xs-6 col-md-3 col-lg-2 text-right"},l.createElement("img",{src:"https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg",alt:"Symbol of the Government of Canada"}))))))},s=function(e){var t=e.children;return l.createElement(l.Fragment,null,l.createElement(m,null),l.createElement("div",{className:"mt-1"},l.createElement("main",null,t)),l.createElement(u,null))}},9216:function(e,t,a){"use strict";a.r(t);var l=a(7294),n=a(5444),r=a(7910),c=a(5231),m=a(2181);t.default=function(e){var t=e.location,a=(0,c.fb)({location:t,crumbLabel:"National Datasets"}).crumbs;return l.createElement(r.Z,null,l.createElement("div",{className:"container"},l.createElement(m.Z,{crumbs:a}),l.createElement("h1",{id:"wb-cont"},"National Datasets"),l.createElement("section",{style:{marginTop:"20vh",marginBottom:"20vh"},id:"NHSL"},l.createElement("h2",null,"National Human Settlement Layer"),l.createElement("hr",null),l.createElement("p",null,"The National Human Settlement Layer (NHSL) is a collection of thematic datasets that describe the physical, social and economic characteristics of urban centres and rural/remote communities across Canada, and their vulnerability to natural hazards of concern."),l.createElement(n.Link,{to:"/en/nhsl"},"Explore")),l.createElement("section",{style:{marginTop:"20vh",marginBottom:"20vh"},id:"SR"},l.createElement("h2",null,"Seismic Risk"),l.createElement("hr",null),l.createElement("table",{className:"table table-hover"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Last Updated"),l.createElement("th",null,"Format"))),l.createElement("tbody",null)),l.createElement("p",null,"Coming Soon")),l.createElement("section",{style:{marginTop:"20vh",marginBottom:"20vh"},id:"ES"},l.createElement("h2",null,"Earthquake Scenarios"),l.createElement("hr",null),l.createElement("table",{className:"table table-hover"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Last Updated"),l.createElement("th",null,"Format"))),l.createElement("tbody",null)),l.createElement("p",null,"Coming Soon"))))}},5959:function(e,t,a){"use strict";t.Z=a.p+"static/sig-blk-en-d3868130ff988f7f34a80bf5f56d9b2b.svg"}}]);
//# sourceMappingURL=component---src-pages-national-datasets-en-js-b59d189dd98abc699459.js.map