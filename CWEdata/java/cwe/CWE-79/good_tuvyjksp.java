.#--------------------------------------------------------------------------------
.input|xwiki/2.0
.# Verify that a sub list can have its own params
.#--------------------------------------------------------------------------------
(%param=value%)
* item 1
(%param2=value2%)
** item 1.1
*** item 1.1.1
.#-----------------------------------------------------
.expect|event/1.0
.#-----------------------------------------------------
beginDocument
beginList [BULLETED] [[param]=[value]]
beginListItem
onWord [item]
onSpace
onWord [1]
beginList [BULLETED] [[param2]=[value2]]
beginListItem
onWord [item]
onSpace
onWord [1]
onSpecialSymbol [.]
onWord [1]
beginList [BULLETED]
beginListItem
onWord [item]
onSpace
onWord [1]
onSpecialSymbol [.]
onWord [1]
onSpecialSymbol [.]
onWord [1]
endListItem
endList [BULLETED]
endListItem
endList [BULLETED] [[param2]=[value2]]
endListItem
endList [BULLETED] [[param]=[value]]
endDocument
.#-----------------------------------------------------
.expect|xhtml/1.0
.#-----------------------------------------------------
.#-----------------------------------------------------
<ul data-xwiki-translated-attribute-param="value"><li>item 1<ul data-xwiki-translated-attribute-param2="value2"><li>item 1.1<ul><li>item 1.1.1</li></ul></li></ul></li></ul>
.expect|xwiki/2.0
.#-----------------------------------------------------
(% param="value" %)
* item 1
(% param2="value2" %)
** item 1.1
*** item 1.1.1
.#-----------------------------------------------------
.input|xhtml/1.0
.#-----------------------------------------------------
<ul data-xwiki-translated-attribute-param="value"><li>item 1<ul data-xwiki-translated-attribute-param2="value2"><li>item 1.1<ul><li>item 1.1.1</li></ul></li></ul></li></ul>
<ul data-xwiki-translated-attribute-param="value"><li>item 1<ul data-xwiki-translated-attribute-param2="value2"><li>item 1.1<ul><li>item 1.1.1</li></ul></li></ul></li></ul>