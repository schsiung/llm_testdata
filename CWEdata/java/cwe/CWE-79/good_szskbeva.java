.runTransformations
.#-----------------------------------------------------
.input|xwiki/2.0
.#-----------------------------------------------------
{{testrss feed="file://feed1.xml" content="true" count="2" image="true"/}}
.#-----------------------------------------------------
.expect|event/1.0
.#-----------------------------------------------------
beginDocument
beginMacroMarkerStandalone [testrss] [feed=file://feed1.xml|content=true|count=2|image=true]
beginGroup [[class]=[box rssfeed]]
onImage [Typed = [true] Type = [url] Reference = [http://www.w3schools.com/images/logo.gif]] [true]
onNewLine
beginParagraph [[class]=[rsschanneltitle]]
beginLink [Typed = [true] Type = [url] Reference = [http://liftoff.msfc.nasa.gov/]] [true]
onWord [Lift]
onSpace
onWord [Off]
onSpace
onWord [News]
endLink [Typed = [true] Type = [url] Reference = [http://liftoff.msfc.nasa.gov/]] [true]
beginLink [Typed = [true] Type = [url] Reference = [http://liftoff.msfc.nasa.gov/]] [true]
onImage [Typed = [true] Type = [url] Reference = [/xwiki/resources/icons/silk/feed.png]] [false]
endLink [Typed = [true] Type = [url] Reference = [http://liftoff.msfc.nasa.gov/]] [true]
endParagraph [[class]=[rsschanneltitle]]
beginParagraph [[class]=[rssitemtitle]]
beginLink [Typed = [true] Type = [url] Reference = [http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp]] [true]
onWord [Star]
onSpace
onWord [City]
endLink [Typed = [true] Type = [url] Reference = [http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp]] [true]
endParagraph [[class]=[rssitemtitle]]
beginGroup [[class]=[rssitemdescription]]
endGroup [[class]=[rssitemdescription]]
onRawText [<p>How do Americans get ready to work with Russians aboard the International Space Station?</p>] [html/5.0]
beginParagraph [[class]=[rssitemtitle]]
beginLink [Typed = [true] Type = [url] Reference = [http://liftoff.msfc.nasa.gov/]] [true]
onWord [Space]
onSpace
onWord [Exploration]
endLink [Typed = [true] Type = [url] Reference = [http://liftoff.msfc.nasa.gov/]] [true]
endParagraph [[class]=[rssitemtitle]]
beginGroup [[class]=[rssitemdescription]]
onRawText [<p>Sky watchers in Europe, Asia, and parts of Alaska and Canada.</p>] [html/5.0]
endGroup [[class]=[box rssfeed]]
onRawText [<p>Sky watchers in Europe, Asia, and parts of Alaska and Canada.</p>] [html/5.0]
endMacroMarkerStandalone [testrss] [feed=file://feed1.xml|content=true|count=2|image=true]
endDocument
.#-----------------------------------------------------
.expect|xhtml/1.0
.#-----------------------------------------------------
<div class="box rssfeed"><img src="http://www.w3schools.com/images/logo.gif" class="wikimodel-freestanding" alt="http://www.w3schools.com/images/logo.gif"/><br/><p class="rsschanneltitle"><span class="wikiexternallink"><a class="wikimodel-freestanding" href="http://liftoff.msfc.nasa.gov/">Lift Off News</a></span><span class="wikiexternallink"><a class="wikimodel-freestanding" href="http://liftoff.msfc.nasa.gov/"><img src="/xwiki/resources/icons/silk/feed.png" alt="/xwiki/resources/icons/silk/feed.png"/></a></span></p><p class="rssitemtitle"><span class="wikiexternallink"><a class="wikimodel-freestanding" href="http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp">Star City</a></span></p><div class="rssitemdescription"><p>How do Americans get ready to work with Russians aboard the International Space Station?</p></div><p class="rssitemtitle"><span class="wikiexternallink"><a class="wikimodel-freestanding" href="http://liftoff.msfc.nasa.gov/">Space Exploration</a></span></p><div class="rssitemdescription"><p>Sky watchers in Europe, Asia, and parts of Alaska and Canada.</p></div></div>
<div class="box rssfeed"><img src="http://www.w3schools.com/images/logo.gif" class="wikimodel-freestanding" alt="http://www.w3schools.com/images/logo.gif"/><br/><p class="rsschanneltitle"><span class="wikiexternallink"><a class="wikimodel-freestanding" href="http://liftoff.msfc.nasa.gov/">Lift Off News</a></span><span class="wikiexternallink"><a class="wikimodel-freestanding" href="http://liftoff.msfc.nasa.gov/"><img src="/xwiki/resources/icons/silk/feed.png" alt="/xwiki/resources/icons/silk/feed.png"/></a></span></p><p class="rssitemtitle"><span class="wikiexternallink"><a class="wikimodel-freestanding" href="http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp">Star City</a></span></p><div class="rssitemdescription"><p>How do Americans get ready to work with Russians aboard the International Space Station?</p></div><p class="rssitemtitle"><span class="wikiexternallink"><a class="wikimodel-freestanding" href="http://liftoff.msfc.nasa.gov/">Space Exploration</a></span></p><div class="rssitemdescription"><p>Sky watchers in Europe, Asia, and parts of Alaska and Canada.</p></div></div>