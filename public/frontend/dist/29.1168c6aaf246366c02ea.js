(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"1LZE":function(t,l,e){"use strict";e.d(l,"a",function(){return n});var n=function(){function t(t,l){this.el=t,this.router=l,this.colorbutton=!0,this.editbutton=!0,this.togglebutton=!0,this.deletebutton=!0,this.fullscreenbutton=!0,this.custombutton=!1,this.collapsed=!1,this.sortable=!0,this.hidden=!1,this.load=!1,this.refresh=!1}return t.prototype.ngOnInit=function(){var t=this;this.widgetId=this.genId();var l=this.el.nativeElement;l.className+=" jarviswidget",this.sortable&&(l.className+=" jarviswidget-sortable"),this.color&&(l.className+=" jarviswidget-color-"+this.color),["colorbutton","editbutton","togglebutton","deletebutton","fullscreenbutton","custombutton","sortable"].forEach(function(e){t[e]||l.setAttribute("data-widget-"+e,"false")}),["hidden","collapsed"].forEach(function(e){t[e]&&l.setAttribute("data-widget-"+e,"true")})},t.prototype.genId=function(){if(this.name)return this.name;var l=this.el.nativeElement.querySelector("header h2"),e=l?l.textContent.trim():"jarviswidget-"+t.counter++;return e=e.toLowerCase().replace(/\W+/gm,"-"),this.router.url.substr(1).replace(/\//g,"-")+"--"+e},t.prototype.ngAfterViewInit=function(){var t=$(this.el.nativeElement);this.editbutton&&t.find(".widget-body").prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>')},t.counter=0,t}()},kHXp:function(t,l,e){"use strict";e.d(l,"a",function(){return o}),e.d(l,"b",function(){return a});var n=e("CcnG"),o=(e("1LZE"),e("ZYCi"),n["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function a(t){return n["\u0275vid"](0,[n["\u0275ncd"](null,0)],null,null)}},ptN7:function(t,l,e){"use strict";e.r(l);var n=e("CcnG"),o=function(){},a=e("pMnS"),i=e("49Xn"),r=e("RyNP"),u=e("kHXp"),d=e("1LZE"),s=e("ZYCi"),c=e("ojxP"),p=function(){function t(){}return t.prototype.ngOnInit=function(){c("https://cdn.ckeditor.com/4.5.11/standard/ckeditor.js",function(t){window.CKEDITOR.replace("ckeditor-showcase")})},t}(),h=n["\u0275crt"]({encapsulation:2,styles:[],data:{}});function m(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,21,"div",[["id","content"]],null,null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,20,"sa-widgets-grid",[],null,null,null,i.b,i.a)),n["\u0275did"](2,4243456,null,0,r.a,[n.ElementRef],null,null),(t()(),n["\u0275eld"](3,0,null,0,18,"div",[["class","row"]],null,null,null,null,null)),(t()(),n["\u0275eld"](4,0,null,null,17,"article",[["class","col-xs-12 col-sm-12 col-md-12 col-lg-12"]],null,null,null,null,null)),(t()(),n["\u0275eld"](5,0,null,null,5,"div",[["class","alert alert-danger alert-block"]],null,null,null,null,null)),(t()(),n["\u0275eld"](6,0,null,null,1,"a",[["class","close"],["data-dismiss","alert"],["href","#"]],null,null,null,null,null)),(t()(),n["\u0275ted"](-1,null,["\xd7"])),(t()(),n["\u0275eld"](8,0,null,null,1,"h4",[["class","alert-heading"]],null,null,null,null,null)),(t()(),n["\u0275ted"](-1,null,["CKEditor Warning!"])),(t()(),n["\u0275ted"](-1,null,[" If you plan to use CKEditor in your project for this theme, please be sure to read full documentation of its use on their website. It is important to note that CKEditor may conflict with other editors and textareas. You must destroy the CKeditor instance before pulling it into another object. "])),(t()(),n["\u0275eld"](11,0,null,null,10,"div",[["color","darken"],["sa-widget",""]],[[1,"id",0]],null,null,u.b,u.a)),n["\u0275did"](12,4308992,null,0,d.a,[n.ElementRef,s.n],{colorbutton:[0,"colorbutton"],editbutton:[1,"editbutton"],togglebutton:[2,"togglebutton"],fullscreenbutton:[3,"fullscreenbutton"],sortable:[4,"sortable"],color:[5,"color"]},null),(t()(),n["\u0275eld"](13,0,null,0,4,"header",[],null,null,null,null,null)),(t()(),n["\u0275eld"](14,0,null,null,1,"span",[["class","widget-icon"]],null,null,null,null,null)),(t()(),n["\u0275eld"](15,0,null,null,0,"i",[["class","fa fa-pencil"]],null,null,null,null,null)),(t()(),n["\u0275eld"](16,0,null,null,1,"h2",[],null,null,null,null,null)),(t()(),n["\u0275ted"](-1,null,["CK Editor (Full version) "])),(t()(),n["\u0275eld"](18,0,null,0,3,"div",[],null,null,null,null,null)),(t()(),n["\u0275eld"](19,0,null,null,2,"div",[["class","widget-body no-padding"]],null,null,null,null,null)),(t()(),n["\u0275eld"](20,0,null,null,1,"textarea",[["name","ckeditor-showcase"]],null,null,null,null,null)),(t()(),n["\u0275ted"](-1,null,['\t\t\t\t\t\t\t\t\t\t\t\t<h1><img alt="Saturn V carrying Apollo 11" class="right" src="/assets/img/demo/sample.jpg"/> Apollo 11</h1> <p><b>Apollo 11</b> was the spaceflight that landed the first humans, Americans <a href="http://en.wikipedia.org/wiki/Neil_Armstrong" title="Neil Armstrong">Neil Armstrong</a> and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin" title="Buzz Aldrin">Buzz Aldrin</a>, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.</p> <p>Armstrong spent about <strike>three and a half</strike> two and a half hours outside the spacecraft, Aldrin slightly less; and together they collected 47.5 pounds (21.5&nbsp;kg) of lunar material for return to Earth. A third member of the mission, <a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)" title="Michael Collins (astronaut)">Michael Collins</a>, piloted the <a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module" title="Apollo Command/Service Module">command</a> spacecraft alone in lunar orbit until Armstrong and Aldrin returned to it for the trip back to Earth.</p> <h2>Broadcasting and <em>quotes</em> <a id="quotes" name="quotes"></a></h2> <p>Broadcast on live TV to a world-wide audience, Armstrong stepped onto the lunar surface and described the event as:</p> <blockquote><p>One small step for [a] man, one giant leap for mankind.</p></blockquote> <p>Apollo 11 effectively ended the <a href="http://en.wikipedia.org/wiki/Space_Race" title="Space Race">Space Race</a> and fulfilled a national goal proposed in 1961 by the late U.S. President <a href="http://en.wikipedia.org/wiki/John_F._Kennedy" title="John F. Kennedy">John F. Kennedy</a> in a speech before the United States Congress:</p> <blockquote><p>[...] before this decade is out, of landing a man on the Moon and returning him safely to the Earth.</p></blockquote> <h2>Technical details <a id="tech-details" name="tech-details"></a></h2> <table align="right" border="1" bordercolor="#ccc" cellpadding="5" cellspacing="0" style="border-collapse:collapse;margin:10px 0 10px 15px;"> <caption><strong>Mission crew</strong></caption> <thead> <tr> <th scope="col">Position</th> <th scope="col">Astronaut</th> </tr> </thead> <tbody> <tr> <td>Commander</td> <td>Neil A. Armstrong</td> </tr> <tr> <td>Command Module Pilot</td> <td>Michael Collins</td> </tr> <tr> <td>Lunar Module Pilot</td> <td>Edwin &quot;Buzz&quot; E. Aldrin, Jr.</td> </tr> </tbody> </table> <p>Launched by a <strong>Saturn V</strong> rocket from <a href="http://en.wikipedia.org/wiki/Kennedy_Space_Center" title="Kennedy Space Center">Kennedy Space Center</a> in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of <a href="http://en.wikipedia.org/wiki/NASA" title="NASA">NASA</a>&#39;s Apollo program. The Apollo spacecraft had three parts:</p> <ol> <li><strong>Command Module</strong> with a cabin for the three astronauts which was the only part which landed back on Earth</li> <li><strong>Service Module</strong> which supported the Command Module with propulsion, electrical power, oxygen and water</li> <li><strong>Lunar Module</strong> for landing on the Moon.</li> </ol> <p>After being sent to the Moon by the Saturn V&#39;s upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the <a href="http://en.wikipedia.org/wiki/Mare_Tranquillitatis" title="Mare Tranquillitatis">Sea of Tranquility</a>. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the <a href="http://en.wikipedia.org/wiki/Pacific_Ocean" title="Pacific Ocean">Pacific Ocean</a> on July 24.</p> <hr/> <p style="text-align: right;"><small>Source: <a href="http://en.wikipedia.org/wiki/Apollo_11">Wikipedia.org</a></small></p>\n                      ']))],function(t,l){t(l,12,0,!1,!1,!1,!1,!1,"darken")},function(t,l){t(l,11,0,n["\u0275nov"](l,12).widgetId)})}var f=n["\u0275ccf"]("app-ckeditor",p,function(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"app-ckeditor",[],null,null,null,m,h)),n["\u0275did"](1,114688,null,0,p,[],null,null)],function(t,l){t(l,1,0)},null)},{},{},[]),g=e("ueff"),b=e("lOTE"),w=e("9TUW"),k=e("WmtN"),y=e("RChO"),v=e("Ip0R"),A=e("gIcY"),C=e("aAiY"),M=e("tyBe"),E=function(){},S=e("Fq6B"),q=e("urxg"),_=e("6iS2"),x=e("qina"),N=e("MQax"),I=e("9Xeq"),R=e("xfRZ"),L=e("weob"),P=e("Xkvx"),K=e("n2tS"),T=e("RtVY"),j=e("Iu/P"),J=e("Jg5P"),z=e("pV/B"),F=e("E5q3"),O=e("ErdI");e.d(l,"CkeditorModuleNgFactory",function(){return B});var B=n["\u0275cmf"](o,[],function(t){return n["\u0275mod"]([n["\u0275mpd"](512,n.ComponentFactoryResolver,n["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,f,g.a,b.a,w.a,k.a,y.a]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[n.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),n["\u0275mpd"](4608,A.t,A.t,[]),n["\u0275mpd"](4608,C.a,C.a,[M.a,n.ApplicationRef]),n["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),n["\u0275mpd"](1073742336,s.r,s.r,[[2,s.x],[2,s.n]]),n["\u0275mpd"](1073742336,E,E,[]),n["\u0275mpd"](1073742336,A.q,A.q,[]),n["\u0275mpd"](1073742336,A.e,A.e,[]),n["\u0275mpd"](1073742336,S.a,S.a,[]),n["\u0275mpd"](1073742336,q.PopoverModule,q.PopoverModule,[]),n["\u0275mpd"](1073742336,_.a,_.a,[]),n["\u0275mpd"](1073742336,x.a,x.a,[]),n["\u0275mpd"](1073742336,N.a,N.a,[]),n["\u0275mpd"](1073742336,I.a,I.a,[]),n["\u0275mpd"](1073742336,R.a,R.a,[]),n["\u0275mpd"](1073742336,L.a,L.a,[]),n["\u0275mpd"](1073742336,P.a,P.a,[]),n["\u0275mpd"](1073742336,K.a,K.a,[]),n["\u0275mpd"](1073742336,T.a,T.a,[]),n["\u0275mpd"](1073742336,j.a,j.a,[]),n["\u0275mpd"](1073742336,J.a,J.a,[]),n["\u0275mpd"](1073742336,z.a,z.a,[]),n["\u0275mpd"](1073742336,F.a,F.a,[]),n["\u0275mpd"](1073742336,O.a,O.a,[]),n["\u0275mpd"](1073742336,o,o,[]),n["\u0275mpd"](1024,s.l,function(){return[[{path:"",component:p}]]},[])])})}}]);