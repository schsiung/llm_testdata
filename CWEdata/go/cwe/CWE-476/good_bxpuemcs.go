#data
<body><template>Hello</template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         "Hello"

#data
<template>Hello</template>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         "Hello"
|   <body>

#data
<template></template><div></div>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|   <body>
|     <div>

#data
<html><template>Hello</template>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         "Hello"
|   <body>

#data
<head><template><div></div></template></head>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <div>
|   <body>

#data
<div><template><div><span></template><b>
#errors
#document
| <html>
|   <head>
|   <body>
|     <div>
|       <template>
|         content
|           <div>
|             <span>
|       <b>

#data
<div><template></div>Hello
#errors
#document
| <html>
|   <head>
|   <body>
|     <div>
|       <template>
|         content
|           "Hello"

#data
<div></template></div>
#errors
#document
| <html>
|   <head>
|   <body>
|     <div>

#data
<table><template></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content

#data
<table><template></template></div>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content

#data
<table><div><template></template></div>
#errors
#document
| <html>
|   <head>
|   <body>
|     <div>
|       <template>
|         content
|     <table>

#data
<table><template></template><div></div>
#errors
#document
| <html>
|   <head>
|   <body>
|     <div>
|     <table>
|       <template>
|         content

#data
<table>   <template></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       "   "
|       <template>
|         content

#data
<table><tbody><template></template></tbody>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <tbody>
|         <template>
|           content

#data
<table><tbody><template></tbody></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <tbody>
|         <template>
|           content

#data
<table><tbody><template></template></tbody></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <tbody>
|         <template>
|           content

#data
<table><thead><template></template></thead>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <thead>
|         <template>
|           content

#data
<table><tfoot><template></template></tfoot>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <tfoot>
|         <template>
|           content

#data
<select><template></template></select>
#errors
#document
| <html>
|   <head>
|   <body>
|     <select>
|       <template>
|         content

#data
<select><template><option></option></template></select>
#errors
#document
| <html>
|   <head>
|   <body>
|     <select>
|       <template>
|         content
|           <option>

#data
<template><option></option></select><option></option></template>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <option>
|         <option>
|   <body>

#data
<select><template></template><option></select>
#errors
#document
| <html>
|   <head>
|   <body>
|     <select>
|       <template>
|         content
|       <option>

#data
<select><option><template></template></select>
#errors
#document
| <html>
|   <head>
|   <body>
|     <select>
|       <option>
|         <template>
|           content

#data
<select><template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <select>
|       <template>
|         content

#data
<select><option></option><template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <select>
|       <option>
|       <template>
|         content

#data
<select><option></option><template><option>
#errors
#document
| <html>
|   <head>
|   <body>
|     <select>
|       <option>
|       <template>
|         content
|           <option>

#data
<table><thead><template><td></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <thead>
|         <template>
|           content
|             <td>

#data
<table><template><thead></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content
|           <thead>

#data
<body><table><template><td></tr><div></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content
|           <td>
|             <div>

#data
<table><template><thead></template></thead></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content
|           <thead>

#data
<table><thead><template><tr></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <thead>
|         <template>
|           content
|             <tr>

#data
<table><template><tr></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content
|           <tr>

#data
<table><tr><template><td>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <tbody>
|         <tr>
|           <template>
|             content
|               <td>

#data
<table><template><tr><template><td></template></tr></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content
|           <tr>
|             <template>
|               content
|                 <td>

#data
<table><template><tr><template><td></td></template></tr></template></table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content
|           <tr>
|             <template>
|               content
|                 <td>

#data
<table><template><td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <template>
|         content
|           <td>

#data
<body><template><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <td>

#data
<body><template><template><tr></tr></template><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <template>
|           content
|             <tr>
|         <td>

#data
<table><colgroup><template><col>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <colgroup>
|         <template>
|           content
|             <col>

#data
<frameset><template><frame></frame></template></frameset>
#errors
#document
| <html>
|   <head>
|   <frameset>

<template><frame></frame></frameset><frame></frame></template>
#document
|     <frame>
| <html>
|   <head>
|     <template>
|       content
|   <body>

#data
<template><div><frameset><span></span></div><span></span></template>
#errors
| <html>
|     <template>
|       content
|         <div>
|           <span>
|         <span>
|   <body>

#data
<body><template><div><frameset><span></span></div><span></span></template></body>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <div>
|           <span>
|         <span>

#data
<body><template><script>var i = 1;</script><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <script>
|           "var i = 1;"
|         <td>

#data
<body><template><tr><div></div></tr></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <tr>
|         <div>

#data
<body><template><tr></tr><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <tr>
|         <tr>
|           <td>

#data
<body><template><td></td></tr><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <td>
|         <td>

#data
<body><template><td></td><tbody><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <td>
|         <td>

#data
<body><template><td></td><caption></caption><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <td>
|         <td>

#data
<body><template><td></td><colgroup></caption><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <td>
|         <td>

#data
<body><template><td></td></table><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <td>
|         <td>

#data
<body><template><tr></tr><tbody><tr></tr></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <tr>
|         <tr>

#data
<body><template><tr></tr><caption><tr></tr></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <tr>
|         <tr>

#data
<body><template><tr></tr></table><tr></tr></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <tr>
|         <tr>

#data
<body><template><thead></thead><caption></caption><tbody></tbody></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <thead>
|         <caption>
|         <tbody>

#data
<body><template><thead></thead></table><tbody></tbody></template></body>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <thead>
|         <tbody>

#data
<body><template><div><tr></tr></div></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <div>

#data
<body><template><em>Hello</em></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <em>
|           "Hello"

#data
<body><template><!--comment--></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <!-- comment -->

#data
<body><template><style></style><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <style>
|         <td>

#data
<body><template><meta><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <meta>
|         <td>

#data
<body><template><link><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <link>
|         <td>

#data
<body><template><template><tr></tr></template><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <template>
|           content
|             <tr>
|         <td>

#data
<body><table><colgroup><template><col></col></template></colgroup></table></body>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <colgroup>
|         <template>
|           content
|             <col>

#data
<body a=b><template><div></div><body c=d><div></div></body></template></body>
#errors
#document
| <html>
|   <head>
|   <body>
|     a="b"
|     <template>
|       content
|         <div>
|         <div>

#data
<html a=b><template><div><html b=c><span></template>
#errors
#document
| <html>
|   a="b"
|   <head>
|     <template>
|       content
|         <div>
|           <span>
|   <body>

#data
<html a=b><template><col></col><html b=c><col></col></template>
#errors
#document
| <html>
|   a="b"
|   <head>
|     <template>
|       content
|         <col>
|         <col>
|   <body>

#data
<html a=b><template><frame></frame><html b=c><frame></frame></template>
#errors
#document
| <html>
|   a="b"
|   <head>
|     <template>
|       content
|   <body>

#data
<body><template><tr></tr><template></template><td></td></template>
#errors
#document
| <html>
|   <head>
|   <body>
|       content
|         <template>
|           content
|         <tr>
|           <td>

#data
<body><template><thead></thead><template><tr></tr></template><tr></tr><tfoot></tfoot></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <thead>
|         <template>
|           content
|             <tr>
|         <tbody>
|           <tr>
|         <tfoot>

#data
<body><template><template><b><template></template></template>text</template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <template>
|           content
|             <b>
|               <template>
|                 content
|         "text"

#data
<body><template><col><colgroup>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <col>

#data
<body><template><col></colgroup>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <col>

#data
<body><template><col><colgroup></template></body>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <col>

#data
<body><template><col><div>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <col>

#data
<body><template><col></div>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <col>

#data
<body><template><col>Hello
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <col>

#data
<body><template><i><menu>Foo</i>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <i>
|         <menu>
|           <i>
|             "Foo"

#data
<body><template></div><div>Foo</div><template></template><tr></tr>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content
|         <div>
|           "Foo"
|         <template>
|           content

#data
<body><div><template></div><tr><td>Foo</td></tr></template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <div>
|       <template>
|         content
|           <tr>
|             <td>
|               "Foo"

#data
<template></figcaption><sub><table></table>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <sub>
|           <table>
|   <body>

#data
<template><template>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <template>
|           content
|   <body>

#data
<template><div>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <div>
|   <body>

#data
<template><template><div>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <template>
|           content
|             <div>
|   <body>

#data
<template><template><script>var i
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <template>
|           content
|             <script>
|               "var i"
|   <body>

#data
<template><template><style>var i
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <template>
|           content
|             <style>
|               "var i"
|   <body>

#data
<template><svg><template>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         <svg svg>
|           <svg template>
|   <body>

#data
<dummy><template><span></dummy>
#errors
#document
| <html>
|   <head>
|   <body>
|     <dummy>
|       <template>
|         content
|           <span>

#data
<body><table><tr><td><select><template>Foo</template><caption>A</table>
#errors
#document
| <html>
|   <head>
|   <body>
|     <table>
|       <tbody>
|         <tr>
|           <td>
|             <select>
|               <template>
|                 content
|                   "Foo"
|       <caption>
|         "A"

#data
<body></body><template>
#errors
#document
| <html>
|   <head>
|   <body>
|     <template>
|       content

#data
<head></head><template>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|   <body>

#data
<head></head><template>Foo</template>
#errors
#document
| <html>
|   <head>
|     <template>
|       content
|         "Foo"
|   <body>