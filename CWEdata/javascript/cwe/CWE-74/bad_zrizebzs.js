<html>
<script>
    //      %%{ init: { "logLevel":0, "themeVariables" : { "primaryColor": "#fff000","textColor": "green","apa":"} #target { background-color: crimson }" } } }%%
</script>
<body>
    <div id="target">
        <h1>This element does not belong to the SVG but we can style it</h1>
    </div>
    <svg id="diagram">
    </svg>

    <script src="./mermaid.js"></script>
    <script>
        mermaid.initialize({ startOnLoad: false, logLevel: 0 });

        const graph = `
     %%{ init: { "fontFamily" : "&125; * { background: red }" } }%%
            graph TD
                A[Goose]
            `;

        const diagram = document.getElementById('diagram');
        const svg = mermaid.render('diagram-svg', graph);
        diagram.innerHTML = svg;
    </script>
</body>

</html>