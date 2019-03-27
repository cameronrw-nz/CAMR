(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(19),i=t.n(o),c=(t(55),t(1)),s=t(39),l=t(40),d=t(47),u=t(41),m=t(48),h=t(11),p=t(12),f=(t(56),t(8)),g=t(2);function b(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n"]);return b=function(){return e},e}function v(e){var n=e.children;return r.a.createElement(x,null,n)}var x=g.a.div(b());function w(){var e=Object(c.a)(["\n    margin: 0;\n    padding: 0;\n"]);return w=function(){return e},e}function y(){var e=Object(c.a)(["\n    margin: 0;\n    padding: 0;\n    font-weight:bold;\n"]);return y=function(){return e},e}function E(){var e=Object(c.a)(["\n    object-fit: cover;\n    max-width:100%;\n    max-height:100%;\n    height: 100%;\n"]);return E=function(){return e},e}function j(){var e=Object(c.a)(["\n    height: 260px;\n    width: 260px;\n"]);return j=function(){return e},e}function k(){var e=Object(c.a)(["\n    width: 260px;\n    height: 280px;\n    padding: 20px 20px 0px 20px;\n\n    :hover {\n        \n        > div {\n            box-shadow: 0px 3px 8px grey;\n\n        }\n    }\n"]);return k=function(){return e},e}function O(e){var n,t=e.createdDate,a=e.defaultImgColour,o=e.id,i=e.item,c=e.imageUrl,s=e.title;return c&&(n=r.a.createElement(A,{src:c})),r.a.createElement(h.b,{to:"".concat(i).concat(o?"/"+o:""),style:{textDecoration:"none",color:"black"}},r.a.createElement(I,null,r.a.createElement(M,{style:{backgroundColor:a||"grey"}},n),r.a.createElement(C,null,s),r.a.createElement(T,null,t&&t.toDateString())))}var S,I=g.a.div(k()),M=g.a.div(j()),A=g.a.img(E()),C=g.a.p(y()),T=g.a.p(w());function D(){var e=Object(c.a)(["\n    background-position: center;\n    background-color: white;\n    height: fit-content;\n    min-height: calc(100% - 20px);\n    width: calc(45% - ","px);\n    padding: 0px ","px;\n    padding-bottom: 20px;\n\n    @media only screen and (max-width: 768px) {\n        min-height: calc(100% - 20px);\n        width: calc(90% - ","px);\n        max-width: calc(300px - ","px);\n        padding: 0px ","px;\n        padding-bottom: 20px;\n        height: fit-content;\n    }\n"]);return D=function(){return e},e}function R(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    height: calc(100% - 74px);\n    min-height: 0;\n    overflow-y: auto;\n    padding-bottom: 20px;\n    -webkit-overflow-scrolling: touch;\n"]);return R=function(){return e},e}function B(e){var n=e.children,t=e.isStoryPage,a=void 0!==t&&t;return r.a.createElement(H,null,r.a.createElement(P,{isStoryPage:a},n))}!function(e){e.Coding="/coding",e.Adventure="/adventure",e.Models="/models",e.Reading="/reading"}(S||(S={}));var H=g.a.div(R()),P=g.a.div(D(),function(e){return e.isStoryPage?-80:80},function(e){return e.isStoryPage?0:80},function(e){return e.isStoryPage?-20:20},function(e){return e.isStoryPage?-20:20},function(e){return e.isStoryPage?0:20});var N=function(e){e.match;var n=Object(a.useState)(void 0),o=Object(f.a)(n,2),i=o[0],c=o[1];Object(a.useEffect)(function(){c([{title:"Coding",item:S.Coding,imageUrl:t(65)},{title:"Adventures",item:S.Adventure,imageUrl:t(66)},{title:"Models",item:S.Models,imageUrl:t(67)},{title:"Reading",item:S.Reading,imageUrl:t(68)}])},[]);var s=i&&i.map(function(e,n){return r.a.createElement(O,Object.assign({key:n},e))});return r.a.createElement(B,{isStoryPage:!0},r.a.createElement(v,null,s))},U=t(46),z=t.n(U);function F(){var e=Object(c.a)(["\n    fill: white;\n    height: 40px;\n    margin-top: 4px;\n    margin-right: 26px;\n    justify-self: flex-end;\n"]);return F=function(){return e},e}function W(){var e=Object(c.a)(["\n    justify-content: flex-end;\n    flex: 1 1 auto;\n    display: flex;\n    \n    @media only screen and (min-width: 768px) {\n        display: none;\n    }\n"]);return W=function(){return e},e}function L(){var e=Object(c.a)(["\n    text-decoration: none;\n    border-radius: 4px;\n    display: inline;\n    margin: 0px 4px;\n    padding: 4px 16px;\n"]);return L=function(){return e},e}function q(){var e=Object(c.a)(["\n    justify-self: flex-start;\n    text-decoration: none;\n    border-radius: 4px;\n    display: inline;\n    margin: 4px 4px 4px 22px;\n    font-size: 30px;\n    \n    a {\n        text-decoration: none;\n        color: #EEEEEE;\n        border-radius: 4px;\n        padding: 0px 4px;\n\n        :hover {\n            background-color: #444444;\n        }\n    }\n"]);return q=function(){return e},e}function J(){var e=Object(c.a)(["\n    margin-bottom: 4px;\n    margin-top: 4px;\n    margin-right: 118px;\n    list-style-type: none;\n    padding-inline-start: 0px;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n\n    a {\n        text-decoration: none;\n        color: #EEEEEE;\n        border-radius: 4px;\n\n        :hover {\n            background-color: #444444;\n        }\n    }\n    \n    @media only screen and (max-width: 768px) {\n        display: none;\n    }\n"]);return J=function(){return e},e}function G(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n"]);return G=function(){return e},e}function V(e){var n=[];for(var t in S)n.push(r.a.createElement(h.b,{to:S[t]},r.a.createElement(Q,{key:t},t)));return r.a.createElement(X,null,r.a.createElement(K,null,r.a.createElement(h.b,{to:"/"},"CAMR")),r.a.createElement(Y,null,r.a.createElement(Z,{onClick:e.onMenuClick,src:z.a,alt:"Switch Search Provider"})),r.a.createElement($,null,n))}var X=g.a.nav(G()),$=g.a.ul(J()),K=g.a.div(q()),Q=g.a.li(L()),Y=g.a.div(W()),Z=g.a.img(F()),_=t(10),ee=t.n(_),ne=[];var te=function(e){var n=e.match,t=Object(a.useState)(void 0),o=Object(f.a)(t,2),i=o[0],c=o[1];Object(a.useEffect)(function(){c(ne)},[]);var s,l=i&&i.map(function(e,n){return r.a.createElement(O,Object.assign({key:n},e))});if(n.params.id){var d=i&&i.find(function(e){return e.id===n.params.id});void 0!==d&&(s=r.a.createElement(ee.a,{escapeHtml:!1,source:d.markDown}))}else s=r.a.createElement(v,null,l);return r.a.createElement(B,{isStoryPage:void 0===n.params.id},s)},ae=[];var re=function(e){var n=e.match,t=Object(a.useState)(void 0),o=Object(f.a)(t,2),i=o[0],c=o[1];Object(a.useEffect)(function(){c(ae)},[]);var s,l=i&&i.map(function(e,n){return r.a.createElement(O,Object.assign({key:n},e))});if(n.params.id){var d=i&&i.find(function(e){return e.id===n.params.id});void 0!==d&&(s=r.a.createElement(ee.a,{escapeHtml:!1,source:d.markDown}))}else s=r.a.createElement(v,null,l);return r.a.createElement(B,{isStoryPage:void 0===n.params.id},s)},oe=[{title:"My First Rubric",id:"firstRubric",markDown:'\nMy First Rubric\n============\n\nThese series of Model posts are going to follow my journey in creating Warhammer 40k armies and any other gaming figure related topics.\n\nAs of the title of the post I have completed 1 whole squad of Thousand Sons Rubrics and I plan on build a few more squads of paint them. In the immediate future expect to see Scarab Occult Terminators, more Rubrics, Abaddon and some CSM.\n\n<img class="embedded-images" alt="rubric" src="'.concat("/CAMR",'/Images/TS-Marine.jpg"/>\n\nIt took me a while to decide on a colour scheme as the classic blue and gold is too prominent and I wanted to set my Thousands sons apart. I also wanted to create a custom warband so it\'s possible to ally in CSM without any lore troubles or without it seeming too much like Chaos Soup. \n\nI think the paint scheme has turned out well, the red was inspired from the old thousands sons scheme of red and gold. But I decided to dull it down as the candied affect is too much. Next was the trim colour, I wanted to something Tizcan/Egyptian themed that was non-metallic, the bone effect works really well I think. The only thing that\'s not too great is the base colours imo. It could do with some additional contrast from the other model colour, so perhaps some industrial ruin colouring would have been better, but at this stage I am committed to it :D.\n\nThe new release of Vigilus ablaze is on its way along with Abaddon the Despoiler!\n\n<img alt="abaddon" class="embedded-images" src="https://whc-cdn.games-workshop.com/wp-content/uploads/2019/02/40kAbaddon-Mar5-Abaddon7tyerhvfsh.jpg" />\n'),item:S.Models,imageUrl:"".concat("/CAMR","/Images/TS-Marine.jpg"),createdDate:new Date(2019,2,24)}];var ie=function(e){var n=e.match,t=Object(a.useState)(void 0),o=Object(f.a)(t,2),i=o[0],c=o[1];Object(a.useEffect)(function(){c(oe)},[]);var s,l=i&&i.map(function(e,n){return r.a.createElement(O,Object.assign({key:n},e))});if(n.params.id){var d=i&&i.find(function(e){return e.id===n.params.id});void 0!==d&&(s=r.a.createElement(ee.a,{escapeHtml:!1,source:d.markDown}))}else s=r.a.createElement(v,null,l);return r.a.createElement(B,{isStoryPage:void 0===n.params.id},s)},ce='\nThe Book Shelf\n============\n\nBeing the massive nerd that I am I have started reading the Warhammer 40k lore series by the Black Library.\n\n<img class="embedded-images" alt="rubric" src="'.concat("/CAMR",'/Images/BookShelf.jpg"/>\n\nA few years ago I first started on the book Night lords by Aaron Dembski-Bowden. This trilogy was amazing and furthered my love for the Warhammer 40k universe. Then again I discovered the universe again via Helsreach, Talon of Horus and Black Legion all by Aaron Dembski-Bowden.\n\nFrom this point I was addicted and started on the Horus Heresy series, which starts with Horus Rising and onto False gods of which I just finished both of these. As I keep reading more and more it just deepens my love for the series and addiction.\n\nBoth of these books are pre-heresy during the Great Crusade of the Imperium of Man. They set the scene for who the main Antagonists are of the Heresy and shows a great deal how the Imperium treats Xenos races and even other lost Human civilisations from the Dark Age of Technology.\n\nSome of the greatest moments for me in these books were following the character of Loken when he was interacting with a Human of one of the lost worlds. It was interesting to see how similar the characters were and how even though they are worlds apart the thinking is still the same with the same sense of duty and learning.\n\nHowever as to not burn myself out on the Horus Heresy series I am currently reading the Devastation of Baal. This is focused on the Blood Angels of the 41st Millennium and their struggle in their war against the menance that is the Tyranids of the splinter fleet Leviathan.\n'),se=[{createdDate:new Date(2019,2,26),title:"The Book Shelf",id:"bookShelf",markDown:ce,item:S.Reading,imageUrl:"".concat("/CAMR","/Images/BookShelf.jpg")}];var le=function(e){var n=e.match,t=Object(a.useState)(void 0),o=Object(f.a)(t,2),i=o[0],c=o[1];Object(a.useEffect)(function(){c(se)},[]);var s,l=i&&i.map(function(e,n){return r.a.createElement(O,Object.assign({key:n},e))});if(n.params.id){var d=i&&i.find(function(e){return e.id===n.params.id});void 0!==d&&(s=r.a.createElement(ee.a,{escapeHtml:!1,source:d.markDown}))}else s=r.a.createElement(v,null,l);return r.a.createElement(B,{isStoryPage:void 0===n.params.id},s)};function de(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    z-index: 3;\n    position: absolute;\n    background-color: #282c34;;\n    height: 100%;\n    width: 75%;\n    margin-top: 53px;\n    padding-top: 30px;\n    transition: 0.5s;\n\n\n    a {\n        text-decoration: none;\n        color: #EEEEEE;\n        border-radius: 6px;\n        display: inline;\n        margin: 4px 16px;\n        font-size: 25px;\n        padding: 8px 8px;\n        background-color: #444444;\n\n    }\n\n    @media only screen and (min-width: 768px) {\n        display: none;\n    }\n"]);return de=function(){return e},e}var ue=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={isNavigationExpanded:!1},t.onMenuClick=function(){t.setState({isNavigationExpanded:!t.state.isNavigationExpanded})},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){console.log("/CAMR");var e=[];for(var n in S)e.push(r.a.createElement(h.b,{to:S[n],onClick:this.onMenuClick},r.a.createElement(Q,{key:n},n)));return r.a.createElement(h.a,{basename:"/CAMR"},r.a.createElement("div",{className:"background-image"}),r.a.createElement("div",{className:"App"},r.a.createElement(me,{style:{display:this.state.isNavigationExpanded?"flex":"none"}},e),r.a.createElement("header",{className:"App-header"},r.a.createElement(V,{onMenuClick:this.onMenuClick})),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:Object(p.e)(N)}),r.a.createElement(p.a,{path:S.Coding,exact:!0,component:Object(p.e)(re)}),r.a.createElement(p.a,{path:"".concat(S.Coding,"/:id"),exact:!0,component:Object(p.e)(re)}),r.a.createElement(p.a,{path:S.Adventure,exact:!0,component:Object(p.e)(te)}),r.a.createElement(p.a,{path:"".concat(S.Adventure,"/:id"),exact:!0,component:Object(p.e)(te)}),r.a.createElement(p.a,{path:S.Models,exact:!0,component:Object(p.e)(ie)}),r.a.createElement(p.a,{path:"".concat(S.Models,"/:id"),exact:!0,component:Object(p.e)(ie)}),r.a.createElement(p.a,{path:S.Reading,exact:!0,component:Object(p.e)(le)}),r.a.createElement(p.a,{path:"".concat(S.Reading,"/:id"),exact:!0,component:Object(p.e)(le)}))))}}]),n}(a.Component),me=g.a.div(de()),he=ue;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,n,t){e.exports=t.p+"static/media/Menu.fed2d0e0.svg"},50:function(e,n,t){e.exports=t(148)},55:function(e,n,t){},56:function(e,n,t){},65:function(e,n,t){e.exports=t.p+"static/media/Coding.db59110f.jpg"},66:function(e,n,t){e.exports=t.p+"static/media/Fushimi-Inari-Taisha.bf73888e.jpg"},67:function(e,n,t){e.exports=t.p+"static/media/TS-Marine.b5a6660b.jpg"},68:function(e,n,t){e.exports=t.p+"static/media/BookShelf.18e5aa26.jpg"}},[[50,1,2]]]);
//# sourceMappingURL=main.421f0feb.chunk.js.map