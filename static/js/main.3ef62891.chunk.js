(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo-white.b5995211.jpg"},function(e,a,t){e.exports=t.p+"static/media/authpymes.5f311ad4.jpg"},function(e,a,t){e.exports=t.p+"static/media/airbnb.abed55e2.JPG"},function(e,a,t){e.exports=t.p+"static/media/landing-curved.14c8a939.JPG"},function(e,a,t){e.exports=t.p+"static/media/simple-shell.2cf8bd01.png"},,,,,function(e,a,t){e.exports=t.p+"static/media/Ricardo.b5995211.jpg"},,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/earth.67af05e1.jpg"},function(e,a,t){e.exports=t(50)},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),r=t.n(c),o=(t(35),t(36),t(37),t(38),t(39),t(40),t(41),t(42),t(43),t(1)),s=t.n(o);s.a.easing.jswing=s.a.easing.swing,s.a.extend(s.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,l){return s.a.easing[s.a.easing.def](e,a,t,n,l)},easeInQuad:function(e,a,t,n,l){return n*(a/=l)*a+t},easeOutQuad:function(e,a,t,n,l){return-n*(a/=l)*(a-2)+t},easeInOutQuad:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,l){return n*(a/=l)*a*a+t},easeOutCubic:function(e,a,t,n,l){return n*((a=a/l-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,l){return n*(a/=l)*a*a*a+t},easeOutQuart:function(e,a,t,n,l){return-n*((a=a/l-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,l){return n*(a/=l)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,l){return n*((a=a/l-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,l){return-n*Math.cos(a/l*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,l){return n*Math.sin(a/l*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,l){return-n/2*(Math.cos(Math.PI*a/l)-1)+t},easeInExpo:function(e,a,t,n,l){return 0===a?t:n*Math.pow(2,10*(a/l-1))+t},easeOutExpo:function(e,a,t,n,l){return a===l?t+n:n*(1-Math.pow(2,-10*a/l))+t},easeInOutExpo:function(e,a,t,n,l){return 0===a?t:a===l?t+n:(a/=l/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,l){return-n*(Math.sqrt(1-(a/=l)*a)-1)+t},easeOutCirc:function(e,a,t,n,l){return n*Math.sqrt(1-(a=a/l-1)*a)+t},easeInOutCirc:function(e,a,t,n,l){return(a/=l/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,l){var c=1.70158,r=0,o=n;if(0===a)return t;if(1===(a/=l))return t+n;if(r||(r=.3*l),o<Math.abs(n)){o=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/o);return-o*Math.pow(2,10*(a-=1))*Math.sin((a*l-c)*(2*Math.PI)/r)+t},easeOutElastic:function(e,a,t,n,l){var c=1.70158,r=0,o=n;if(0===a)return t;if(1===(a/=l))return t+n;if(r||(r=.3*l),o<Math.abs(n)){o=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/o);return o*Math.pow(2,-10*a)*Math.sin((a*l-c)*(2*Math.PI)/r)+n+t},easeInOutElastic:function(e,a,t,n,l){var c=1.70158,r=0,o=n;if(0===a)return t;if(2===(a/=l/2))return t+n;if(r||(r=l*(.3*1.5)),o<Math.abs(n)){o=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/o);return a<1?o*Math.pow(2,10*(a-=1))*Math.sin((a*l-c)*(2*Math.PI)/r)*-.5+t:o*Math.pow(2,-10*(a-=1))*Math.sin((a*l-c)*(2*Math.PI)/r)*.5+n+t},easeInBack:function(e,a,t,n,l,c){return void 0===c&&(c=1.70158),n*(a/=l)*a*((c+1)*a-c)+t},easeOutBack:function(e,a,t,n,l,c){return void 0===c&&(c=1.70158),n*((a=a/l-1)*a*((c+1)*a+c)+1)+t},easeInOutBack:function(e,a,t,n,l,c){return void 0===c&&(c=1.70158),(a/=l/2)<1?n/2*(a*a*((1+(c*=1.525))*a-c))+t:n/2*((a-=2)*a*((1+(c*=1.525))*a+c)+2)+t},easeInBounce:function(e,a,t,n,l){return n-s.a.easing.easeOutBounce(e,l-a,0,n,l)+t},easeOutBounce:function(e,a,t,n,l){return(a/=l)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,l){return a<l/2?.5*s.a.easing.easeInBounce(e,2*a,0,n,l)+t:.5*s.a.easing.easeOutBounce(e,2*a-l,0,n,l)+.5*n+t}});t(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(2),m=t(3),u=t(5),d=t(4),p=t(6),h=t(9),E=t.n(h),f=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(u.a)(this,Object(d.a)(a).call(this))).state={logo:E.a},e}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=s()("nav").outerHeight();s()(".navbar-toggler").on("click",function(){s()("#mainNav").hasClass("navbar-reduce")||s()("#mainNav").addClass("navbar-reduce")}),s()("body").scrollspy({target:"#mainNav",offset:a}),s()(".js-scroll").on("click",function(){s()(".navbar-collapse").collapse("hide")}),window.addEventListener("scroll",function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:E.a})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:E.a}))}),s()('a.js-scroll[href*="#"]:not([href="#"])').on("click",function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=s()(this.hash);if((e=e.length?e:s()("[name="+this.hash.slice(1)+"]")).length)return s()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}}),s()(".js-scroll").on("click",function(){s()(".navbar-collapse").collapse("hide")})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},l.a.createElement("img",{className:"logo-img",src:this.state.logo,alt:"logo",style:{maxWidth:"50px"}})),l.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),a}(l.a.Component),v=(t(47),t(17)),b=t.n(v),g=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"intro route bg-image background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I'm Ricardo Arqu\xedmedes"),l.a.createElement("p",{className:"intro-subtitle"},l.a.createElement("span",{className:"text-slider-items"}),l.a.createElement("strong",{className:"text-slider"},l.a.createElement(b.a,{strings:["FullStack Developer","Creating amazing things!"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),l.a.createElement("p",{className:"pt-3"},l.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#about",role:"button"},"View My Work"))))))}}]),a}(l.a.Component),N=t(18),w=t.n(N),k=t(7),y=t(19),O=t(20),j=t(21),I=t(22),M=t(23),x=t(24),S=t(25),C=t(26),P=t(27),q=t(28),_=t.n(q),B=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(u.a)(this,Object(d.a)(a).call(this))).state={skills:[{id:"HTML5_skill",content:"HTML5"},{id:"CSS3_skill",content:"CSS3",porcentage:"75%",value:"75"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"90%",value:"90"},{id:"PHP_skill",content:"PHP",porcentage:"70%",value:"70"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"80%",value:"80"},{id:"Python_skill",content:"Python",porcentage:"75%",value:"75"},{id:"VanillaJS_skill",content:"VanillaJS",porcentage:"85%",value:"85"},{id:"Wordpress_skill",content:"Wordpress",porcentage:"80%",value:"80"}],about_me:[{id:"first-p-about",content:"Fullstack Software Developer with more than five years of experience in Information and Communications Technology, Digital Social Media, Customer Service, and Administrative Process."},{id:"second-p-about",content:"Great ability to create, propose, solve problems and work in a team, open to learn and share new knowledge, trending programming languages, and technologies."},{id:"third-p-about",content:" "}]},e}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},l.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},l.a.createElement("img",{src:w.a,className:"img-fluid rounded b-shadow-a",alt:""})),l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"About Me"))),this.state.about_me.map(function(e){return l.a.createElement("p",{className:"lead",key:e.id},e.content)})),l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},l.a.createElement("a",{href:"https://drive.google.com/file/d/1yqR-5GphzktIz4NFwPRf9epYHDMP8u89/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}," Download my resume")),l.a.createElement("div",{className:"technical",id:"resume"},l.a.createElement("a",{href:"https://drive.google.com/file/d/1yqR-5GphzktIz4NFwPRf9epYHDMP8u89/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:_.a,className:"icon-react"}))))))),l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"Technical Skills")),l.a.createElement("div",{className:"technical"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:S.a,className:"icon-react"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:P.a,className:"icon-react"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:O.a,className:"icon-react"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:C.a,className:"icon-react"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:y.a,className:"icon-react"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:M.a,className:"icon-react"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:j.a,className:"icon-react"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:I.a,className:"icon-react"}))),l.a.createElement("li",null,l.a.createElement("span",{className:"ico-circle"},l.a.createElement(k.Icon,{icon:x.a,className:"icon-react"}))))))))))}}]),a}(l.a.Component),D=t(10),L=t.n(D),T=t(11),A=t.n(T),R=t(12),H=t.n(R),J=t(13),W=t.n(J),Q=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Portfolio"),l.a.createElement("p",{className:"subtitle-a"},"Check Out My Latest Projects."),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:L.a,"data-lightbox":"gallery-vmarine"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:L.a,alt:"",className:"img-fluid"})),"      "),l.a.createElement("div",{className:"work-content"},l.a.createElement("h2",{className:"w-title"},"AUTHPYMES"),l.a.createElement("div",{className:"w-more"},l.a.createElement("p",null," This is a web application for authentication of natural person and legal representative by means of facial Recognition. With an intuitive interface and easy to use. Deployed on a secure SSL certificate to protected the data of our users."),l.a.createElement("h6",null,l.a.createElement("a",{href:"https://authpymes.vercel.app/",target:"_blank",rel:"noopener noreferrer"},"Demo Project")),l.a.createElement("span",{className:"w-ctegory"},"Technologies: Python ReactJS Django CSS Styled-Component")," ")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:A.a,"data-lightbox":"gallery-aguadeluz"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:A.a,alt:"",className:"img-fluid"}))," "),l.a.createElement("div",{className:"work-content"},l.a.createElement("h2",{className:"w-title"},"AirBnB Clone"),l.a.createElement("div",{className:"w-more"},l.a.createElement("p",null,"Clone of the Website AirBnB, composed by a command interpreter to manipulate data, website static and dynamic, database, and API that provides a communication interface between the front-end and the data. "),l.a.createElement("h6",null,l.a.createElement("a",{href:"https://ricardoarquimedes.github.io/AirBnB-clone/",target:"_blank",rel:"noopener noreferrer"},"Demo Project")),l.a.createElement("span",{className:"w-ctegory"},"Technologies: Python Flask HTML5 CSS MySql")," ")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:H.a,"data-lightbox":"gallery-todo"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:H.a,alt:"",className:"img-fluid"}))," "),l.a.createElement("div",{className:"work-content"},l.a.createElement("h2",{className:"w-title"},"Landing Page with curved sections"),l.a.createElement("div",{className:"w-more"},l.a.createElement("p",null," Frontend Mentor Challenge to Build out a landing page and get it looking as close to the original huddle design. With optimal layout for the site depending on their device's screen size and hover states for all interactive elements on the page."),l.a.createElement("h6",null,l.a.createElement("a",{href:"https://ricardoarquimedes.github.io/landing-page-curved-sections/",target:"_blank",rel:"noopener noreferrer"},"Demo Project")),l.a.createElement("span",{className:"w-ctegory"},"Technologies: HTML5 CSS3 "))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:W.a,"data-lightbox":"gallery-medlingos"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:W.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("h2",{className:"w-title"},"Simple Shell"),l.a.createElement("div",{className:"w-more"},l.a.createElement("p",null,"Creating a simple UNIX command interpreter in C programming language."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h6",null,l.a.createElement("a",{href:"https://github.com/RicardoArquimedes/simple_shell",target:"_blank",rel:"noopener noreferrer"},"Demo Project")),l.a.createElement("span",{className:"w-ctegory"},"Technologies: C Bash/Shell")))))))))}}]),a}(l.a.Component),z=t(29),F=t.n(z),G=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+F.a+")"}},l.a.createElement("div",{className:"overlay-mf"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{id:"contact",className:"box-shadow-full"},l.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},l.a.createElement("h5",{className:"title-left"},"Get in Touch")),l.a.createElement("div",{className:"more-info"},l.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",l.a.createElement("br",null)),l.a.createElement("ul",{class:"list-ico"},l.a.createElement("li",null,l.a.createElement("span",{class:"ion-ios-location"})," Medell\xedn, Colombia "),l.a.createElement("li",null,l.a.createElement("span",{class:"ion-ios-telephone"})," +57 317 339 2744"),l.a.createElement("li",null,l.a.createElement("span",{class:"ion-email"})," ",l.a.createElement("a",{href:"mailto:richardcqt28@gmail.com?Subject=Contact%Me",target:"_blank",rel:"noopener noreferrer"},"richardcqt28@gmail.com")))),l.a.createElement("div",{className:"socials"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/RicardoArquimedes",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-github"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/ricardoarquimedes/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-linkedin"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/arquimedescq/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-twitter"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://wa.me/+573173392744",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-whatsapp"})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",null))))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"copyright-box"},l.a.createElement("p",{className:"copyright"}," ",l.a.createElement("strong",null," \xa9 Ricardo Arqu\xedmedes -  2021  "))))))))}}]),a}(l.a.Component),Y=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){s()(".back-to-top").click(function(){return s()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),window.addEventListener("scroll",function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))})}},{key:"render",value:function(){return l.a.createElement("a",{href:"#",className:"back-to-top animated"},l.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),a}(l.a.Component),U=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){s()(window).on("load",function(){s()("#preloader").length&&s()("#preloader").delay(100).fadeOut("slow",function(){s()(this).remove()})})}},{key:"render",value:function(){return l.a.createElement("div",{id:"preloader"})}}]),a}(l.a.Component),V=t(14);V.a.initialize("UA-133322079-01"),V.a.pageview(window.location.pathname+window.location.search),r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement(B,null),l.a.createElement(Q,null),l.a.createElement(G,null),l.a.createElement(Y,null),l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[30,1,2]]]);
//# sourceMappingURL=main.3ef62891.chunk.js.map