(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[389],{9009:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(7294)),r=l(a(8384)),c=l(a(4030)),m=a(7791),s=function(e){return n.default.useContext(m.OptionsContext).useAutoGen?n.default.createElement(r.default,e):n.default.createElement(c.default,e)};t.default=s},8384:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(7154)),r=l(a(7316)),c=l(a(7294)),m=l(a(5697)),s=a(5444),u=function(e){var t=e.title,a=e.crumbs,l=e.crumbLabel,m=e.crumbSeparator,u=e.disableLinks,i=e.hiddenCrumbs,o=(0,r.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return i.includes(e.pathname)?null:c.default.createElement(c.default.Fragment,{key:t+"-"+e.pathname},!u.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement(s.Link,(0,n.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},o),l&&t===a.length-1?l:e.crumbLabel)),u.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement("span",(0,n.default)({className:"breadcrumb__link__disabled"},o),l&&t===a.length-1?l:e.crumbLabel)),t===a.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},m))})))))};u.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},u.propTypes={title:m.default.string,crumbSeparator:m.default.string,crumbs:m.default.arrayOf(m.default.shape({location:m.default.shape(),pathname:m.default.string.isRequired})).isRequired,crumbLabel:m.default.string,disableLinks:m.default.arrayOf(m.default.string),hiddenCrumbs:m.default.arrayOf(m.default.string)};var i=u;t.default=i},4030:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(7154)),r=l(a(7316)),c=l(a(7294)),m=l(a(5697)),s=a(5444),u=a(7791),i=l(a(5893)),o=function(e){var t=e.title,a=e.location,l=e.crumbLabel,m=e.crumbSeparator,o=(0,r.default)(e,["title","location","crumbLabel","crumbSeparator"]),d=c.default.useContext(u.OptionsContext).usePathPrefix,b=(0,i.default)({location:(0,n.default)({},a,{pathname:d?a.pathname.replace(new RegExp("^"+d),""):a.pathname}),crumbLabel:l,crumbSeparator:m}).crumbs,E=void 0===b?[]:b;return c.default.createElement(c.default.Fragment,null,t&&c.default.createElement("span",{className:"breadcrumb__title"},t),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},E.map((function(e,t){return c.default.createElement("li",{className:"breadcrumb__item",key:t},c.default.createElement(s.Link,(0,n.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===E.length-1?"page":null},o),e.crumbLabel),t===E.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};o.defaultProps={title:"",crumbSeparator:" / "},o.propTypes={location:m.default.shape().isRequired,crumbLabel:m.default.string.isRequired,title:m.default.string,crumbSeparator:m.default.string};var d=o;t.default=d},7935:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0;var n=l(a(9009));t.Breadcrumb=n.default;var r=l(a(8384));t.AutoGenCrumb=r.default;var c=a(1492);t.BreadcrumbContext=c.BreadcrumbContext,t.BreadcrumbConsumer=c.BreadcrumbConsumer,t.BreadcrumbProvider=c.BreadcrumbProvider;var m=l(a(5893));t.useBreadcrumb=m.default},5893:function(e,t,a){"use strict";var l=a(5318);t.__esModule=!0,t.default=void 0;var n=l(a(7294)),r=a(1492),c=function(e){var t=e.location,a=e.crumbLabel,l=e.crumbSeparator,c=n.default.useContext(r.BreadcrumbContext),m=c.crumbs,s=c.updateCrumbs;return n.default.useEffect((function(){s({location:t,crumbLabel:a,crumbSeparator:l})}),[t,a,l,s]),{crumbs:m}};t.default=c},5231:function(e,t,a){"use strict";var l=a(7935);l.Breadcrumb,l.BreadcrumbContext,l.BreadcrumbConsumer,l.BreadcrumbProvider,t.fb=l.useBreadcrumb,l.AutoGenCrumb},2181:function(e,t,a){"use strict";var l=a(7294),n=a(5444);t.Z=function(e){var t=e.crumbs;return l.createElement("nav",{role:"navigation",id:"wb-bc",property:"breadcrumb"},l.createElement("div",null,t.map((function(e){return l.createElement("div",{className:"container",style:{display:"inline"}},l.createElement("ol",{className:"breadcrumb"},l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en.html"},"Canada.ca")),l.createElement("li",null,l.createElement(n.Link,{to:"/"},"OpenDRR")),l.createElement("li",null,l.createElement(n.Link,{to:e.pathname},e.crumbLabel))))}))))}},7910:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var l=a(7294),n=a(3552),r=a(5959),c=a(5444),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return l.createElement("header",{className:"header-styles"},l.createElement("div",{className:"row"},l.createElement("div",{id:"wb-bnr",className:"container"},l.createElement("section",{id:"wb-lang",className:"text-right"},l.createElement("h2",{className:"wb-inv"},"Language Selection"),l.createElement("div",{className:"brand col-xs-5 col-md-4",property:"publisher",typeof:"GovernmentOrganization"},l.createElement("a",{href:"https://www.canada.ca/en.html"},l.createElement("img",{className:"",src:r.Z,alt:"logo"}))),l.createElement("ul",{className:"list-inline margin-bottom-none"},l.createElement("li",{id:"#wb-lng"},l.createElement(c.Link,{to:"/fr/"},"Français")))))))},t}(l.Component),s=function(){return l.createElement("footer",{id:"wb-info"},l.createElement("div",{className:"landscape"},l.createElement("nav",{className:"container wb-navcurr"},l.createElement("h2",{className:"wb-inv"},l.createElement("ul",{className:"list-unstyled colcount-sm-2 colcount-md-3"},l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/contact.html"},"Contact us")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/government/dept.html"},"Departments and agencies")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/government/publicservice.html"},"Public service and military")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/news.html"},"News")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/government/system/laws.html"},"Treaties, laws and regulations")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/transparency/reporting.html"},"Government-wide reporting")),l.createElement("li",null,l.createElement("a",{href:"https://pm.gc.ca/eng"},"Prime Minister")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/government/system.html"},"How government works")),l.createElement("li",null,l.createElement("a",{href:"https://open.canada.ca/en/"},"Open government")))))),l.createElement("div",{className:"brand"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row "},l.createElement("nav",{className:"col-md-9 col-lg-10 ftr-urlt-lnk"},l.createElement("h2",{className:"wb-inv"},"About this site"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/social.html"},"Social media")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/mobile.html"},"Mobile applications")),l.createElement("li",null,l.createElement("a",{href:"https://www1.canada.ca/en/newsite.html"},"About Canada.ca")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/transparency/terms.html"},"Terms and conditions")),l.createElement("li",null,l.createElement("a",{href:"https://www.canada.ca/en/transparency/privacy.html"},"Privacy")))),l.createElement("div",{className:"col-xs-6 visible-sm visible-xs tofpg"},l.createElement("a",{href:"#wb-cont"},"Top of Page"," ",l.createElement("span",{className:"glyphicon glyphicon-chevron-up"}))),l.createElement("div",{className:"col-xs-6 col-md-3 col-lg-2 text-right"},l.createElement("img",{src:"https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg",alt:"Symbol of the Government of Canada"}))))))},u=function(e){var t=e.children;return l.createElement(l.Fragment,null,l.createElement(m,null),l.createElement("div",{className:"mt-1"},l.createElement("main",null,t)),l.createElement(s,null))}},6935:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var l=a(7294),n=a(7910),r=JSON.parse('{"PX":{"u2":"Hastings, Nicky","FK":"Project Manager","Lk":"1500 - 605 Robson Street","WF":"British Columbia","Od":"V6B 5J3","V2":"Canada","m7":"+01-604-666-0529","k6":"+01-604-666-1124","Do":"nicky.hastings@canada.ca","HQ":"https://www.nrcan.gc.ca/","i4":"Mo-Fr 08:30-16:30","NE":"During hours of service. Off on weekends."}}'),c=a(2181),m=a(5231),s=function(e){var t=e.pageContext,a=e.location,s=t.details,u=t.name,i=(0,m.fb)({location:a,crumbLabel:"Dataset Details"}).crumbs;return l.createElement(n.Z,null,l.createElement("div",{className:"container"},l.createElement(c.Z,{crumbs:i}),l.createElement("div",null,u.map((function(e,t){return l.createElement("h1",{key:"name_title_"+t},e.title)}))),l.createElement("div",{className:""},l.createElement("div",{className:"col-md-7",id:"resource-desc"},s.map((function(e,t){return l.createElement("p",{key:"details_description_"+t},e.description)})))),l.createElement("div",{className:"col-md-5 pull-right"},l.createElement("h2",{id:"wb-cont"},"Additional Information"),l.createElement("b",{className:"keywords"},"Keywords: "),l.createElement("span",{className:"label label-default"},"Natural Disasters"),l.createElement("p",{className:"publisher"},l.createElement("b",null,"Publisher:")," Natural Resources Canada"," "),l.createElement("div",{className:"license-col"},l.createElement("b",{className:"licence"},"Licence: "),l.createElement("a",{href:"https:open.canada.ca/en/open-government-licence-canada"},"Open Government Licence - Canada")),l.createElement("div",null,l.createElement("div",null,l.createElement("h2",{id:"wb-cont"},"Contact")),l.createElement("ul",{className:"list-group"},l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Name:")," ",r.PX.u2),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"position:")," ",r.PX.FK),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Address:")," ",r.PX.Lk),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Province:")," ",r.PX.WF),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Postal Code: "),r.PX.Od),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Country:")," ",r.PX.V2),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Phone:")," ",r.PX.m7),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Fax:")," ",r.PX.k6),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Email: ")," ",l.createElement("a",{href:r.PX.Do}," ",r.PX.Do)),l.createElement("li",{className:"list-group-item"},l.createElement("a",{href:r.PX.HQ},r.PX.HQ)),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Hours:")," ",r.PX.i4),l.createElement("li",{className:"list-group-item"},l.createElement("b",null,"Instructions:")," ",r.PX.NE)))),l.createElement("section",{div:!0,className:"container"},l.createElement("table",{className:"table table-hover container"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Format"),l.createElement("th",null,"Language"),l.createElement("th",null,"Links")))))))}},5959:function(e,t,a){"use strict";t.Z=a.p+"static/sig-blk-en-d3868130ff988f7f34a80bf5f56d9b2b.svg"}}]);
//# sourceMappingURL=component---src-templates-dataset-details-js-8881153d3f8889d2f62e.js.map