01-SEP-2022: 20.2.8

- Fixes importing plain SVG images by drag and drop [DS-902]
- Adds createToolbarButton helper function [3007]
- Sets current stroke color and width independently [DS-903]
- Fixes layout for CSV import in lightbox mode [DS-904]
- Fixes repeated set default style not working [DS-905]
- [conf cloud] Catches errors in diagram text extraction to not break re-indexing process [DS-908]
- Applies fillColor=strokeColor for shapes where appropriate [DS-903]
- Makes format window closable in min ui [DS-906]
- Fixes file pattern for workbox [2977]
- Smaller stencils.min, uses built-in base64 encoder [DS-907]
- Allows for close icon in minimized format window [DS-906]
- Adds support for stroke and fill color in stencils [DS-903]
- Restricts proxy servlet, java disabled by default, all errors are 500 (not distinguishable), allow ports only by config [CSP-633]
- Conf Cloud: Fixed error of renaming/changing view settings not published if no modification done to the diagram [DID-6141]
- Adds custom starting unit number to Rack Cabinet shape [2967]

22-AUG-2022: 20.2.7

- Reduces cursor update frequency to reduce DO request count [DS-899]
- Creates Github app specific to confluence cloud [DS-900]
- Adds enumeration state in image export [2900]
- Updates freehand library to fix security dependency issue
- Fixes highlight for drag over AWS subnet [2966]

21-AUG-2022: 20.2.6

- Updates to latest GCP icon set [DS-898]
- Changes language menu icon to SVG [DS-897]
- Use relative URL for service worker [2740]

18-AUG-2022: 20.2.5

- [conf cloud] Adds support for anon users by using display name instead of email [DS-895]
- [conf cloud] Adds private repository support to embed diagram github option  [DID-5931]
- [conf cloud] Fixes hi res preview setting in viewer [DID-5978]

15-AUG-2022: 20.2.4

- [conf cloud] Adds support for legacy diagramly macros [DID-5823]

03-AUG-2022: 20.2.3

- [conf cloud] Fixes adding diagrams to unsaved global templates [DID-5761]

26-JUL-2022: 20.2.2

- Uses proxy for loading from template URL [DND-629]
- [conf cloud] Fixes issue in page update of pageIDs import [DID-5641]

26-JUL-2022: 20.2.1

- Adds statistics to realtime CF worker
- Adds checksums for merge(File) error logging

22-JUL-2022: 20.2.0

- Changes real-time collaboration CF worker to use the same DO for multiple files

21-JUL-2022: 20.1.4

- Fixes dark mode switch overlaps embed buttons
- Fixes embed button styles in dark mode
- Uses proxy for CSV descriptor URL if CSP is used

20-JUL-2022: 20.1.3

- Fixes curved/rounded checkbox in diagram style tab
- Restores update of default curved/rounded style
- Adds border width and type for color scheme [2924]
- Fixes ignored expand style for image change [2921]

19-JUL-2022: 20.1.2

- Update mermaid to v9.1.3
- Removes Advanced PDF export when printPdfExport is true
- Adds A/S/D/F/X/C, moves Ctrl+(Shift)+K/X shortcuts
- Fixes page background if ui URL parameter is used
- Adds label in dialog/tooltip if diagram translated
- Uses default browser language for online app

12-JUL-2022: 20.1.1

- Closes secret manager resources

11-JUL-2022: 20.1.0

- [conf cloud] Trial to add archived spaces support to Gliffy mass import
- Improves performance for CSV parsing (RFC 4180)
- Uses gcloud secret manager
- [conf cloud] Changed page IDs export name to draw.io Export
- [conf cloud] Using Page IDs import/export in cloud/server
- [conf cloud] Added archived spaces support to Gliffy mass import
- Changes  pusher.properties to pusher_properties

29-JUN-2022: 20.0.4

- [conf cloud] Adds tags to viewer/lightbox toolbar
- Adds initial miro import (non-production)
- Disables math typesetting for plain text [2899]

22-JUN-2022: 20.0.3

- Fixes ignored error codes for loading templates
- Fixes new tab for insert from template URL [2891]
- Validates dialog size after window resize [2883]
- Fixes page tabs overflow after format panel toggle
- Adds Lithuanian and Latvian translations

21-JUN-2022: 20.0.2

- Fixes autosize and text editor with spacing [2732]
- Fixes embed mode with math typesetting [2879]
- Fixes math rendering in embed code for html files

12-JUN-2022: 20.0.1

- Fixes bold math in print output for Chrome [2873]
- Disables MathJax for Internet Explorer
- Adds MathJax callback, fixes math in PDF export
- Fixes style changes override default style [2164]

11-JUN-2022: 20.0.0

- Fixes font style button state before typing [2398]
- Fixes overwritten style for new cell in CSV import
- Updates to MathJax 3

08-JUN-2022: 19.0.3

- Adds allowlist for allowed constructors in mxCodec
- Fixes possible NPE with no local storage [2850]
- Handles service worker permission error in promise
- Adds fixedWidth to limit autosize to height [2732]

07-JUN-2022: 19.0.2

- Fixes isNode check, handling of HTML in node names
- Fixes cell value Element type check in mxCellCodec
- Changes mxStylesheetCodec.allowEval to false

06-JUN-2022: 19.0.1

- Fixes handling of cell ID in CSV import [DID-5225]

03-JUN-2022: 19.0.0

- Removes IE 11 support
- Updates mermaid.js to 9.1.1
- Fixes updating existing cells in CSV import [2796]

02-JUN-2022: 18.2.1

- Updates JSZip to 3.10.0
- Ignores only cells with hidden state in layouts
- Fixes reset of document overflow in viewer [2822]
- Adds support for orgchart layouts in CSV import
- Updates AWS

31-MAY-2022: 18.2.0

- Fixes inconsistent menus in sketch theme
- Fixes ignored XML data for importing embedded SVG
- Fixes ignored double arrow marker selection [2839]
- Fixes NPE with regex in find/replace dialog [2833]
- Fixes link icons in dark mode
- Fixes main button hover state in conf sketch macro

26-MAY-2022: 18.1.3

- Adds spacing dialog for parallels layout
- Adds allowlist for layout constructor names
- Adds JSON values for childLayout styles
- Adds size check for fetched connection data
- Allows custom protocols in links

23-MAY-2022: 18.1.2

- Limits export proxy URL

20-MAY-2022: 18.1.1

- [VSDX import] Fixes case when theme index is incorrect
- Checks stencil name parameter in embed servlet
- Adds DOM_PURIFY_CONFIG global variable
- Check env var is set in ExportProxy

19-MAY-2022: 18.0.8

- Deletes unused ExportProxyServlet

17-MAY-2022: 18.0.7

- Sets setInstanceFollowRedirects(false) in proxyservlet
- Fixes issue in state redirect of AbsAuth
- Changes regex for CORS check

16-MAY-2022: 18.0.6

- Moves sanitize URL to Utils, adds extra IPv6 check
- Adds additional checks for hyperlinks

15-MAY-2022: 18.0.5

- Adds isLinkLocalAddress() to address checks
- Limits well known servlet to serving single file

14-MAY-2022: 18.0.4

- Fixes type error for diffsync with overlays [2808]
- Handles possible error 400 in OneDrive auth flow
- Fixes update of cell metadata in CSV import [2796]
- Applies URL filtering checks to location header in java proxy
- Resolves URL parameters in java proxy before filtering

11-MAY-2022: 18.0.3

- Removes remote cursor options from context menu
- Fixes patch checking for entry with no secret
- Updates closure compiler to v20220502
- Fixes check for text/plain transfer data
- Fixes replace all ignoring the first match

07-MAY-2022: 18.0.2

- Handles Element fields in object cloning [DND-477]
- Fixes lost changes for preview while editing
- Forbids use of form tags in labels
- Fixes CSS issues in print dialog for lightbox

05-MAY-2022: 18.0.1

- Adds support for windows line break in CSV files
- [conf cloud] Fixes trailing space in diagram name during page IDs import
- FIxes timestamp check in watchFile [819] [DND-487]
- Hides menus and dropdowns if clicked again [2745]
- Fixes cursor handling for composite cells [2756]
- [desktop] Adds strict CSP after loading plugins (disabling unsafe-inline scripts)

04-MAY-2022: 18.0.0

- Replaces sanitizer with DOMpurify

04-MAY-2022: 17.5.1

- [conf cloud] Adds saving delay for specific timing case [DID-4851]
- Adds "shareCursorPosition": true/false configuration
- [conf cloud] Prevent publishing without changes creating new version
- Fixes alt+shift for floating connection [DID-4550]
- Changes default for shareCursorPosition to true
- Hides non-applicable sketch options for edges
- Fixes handling of invalid background page images
- Adds showRemoteCursors option
- Fixes LocalFile ctor arguments
- Fixes lazy shadow pages, stale local draft files
- Fixes conflict handling for writing electron files

28-APR-2022: 17.5.0

- Refactors GCP2 shapes
- [conf cloud] Improves page IDs import

20-APR-2022: 17.4.6

- Internal release testing whiteboard app changes

11-APR-2022: 17.4.5

- Internal release testing whiteboard app changes

11-APR-2022: 17.4.4

- Internal release testing whiteboard app changes

11-APR-2022: 17.4.3

- Avoids null string in unused token key

09-APR-2022: 17.4.2

- Fixes height of zero height groups in vsdx import
- Adds connection points support in vsdx import
- Adds isolation for caches, logs reading non-latest

06-APR-2022: 17.4.1

- Fixes OneDrive inline picker in Link dialog and show all files
- Extracts text from selection if cells selected
- Returns indexable text in model cell order
- Fixes minimum stroke width for image export https://github.com/jgraph/drawio/issues/2723
- Fixes PDF printing of background images
- [conf cloud] Fixes NPE in viewer
- [jira cloud] Adds delete button for cases of removed embed diagrams

31-MAR-2022: 17.4.0

- Disables text selection in OneDrive inline picker
- [jira cloud] Fixes re-indexing of old diagrams
- Fixes NPE for OneDrive file in LinkDialog https://github.com/jgraph/drawio/issues/2721
- Fixes modal sync status in embed with sketch theme
- GAE API SDK update to 1.9.95

30-MAR-2022: 17.3.0

- [conf cloud] Enables RT on all domains
- [jira cloud] Fixes conf auth when multiple sites are allowed
- Adds enableHtmlEditOption in EditorUi [DID-4610]

30-MAR-2022: 17.2.6

- [jira cloud] Adds Configuration page with re-indexing functionality

29-MAR-2022: 17.2.5

- Adds lazy parsing of file data for shadow pages
- Adds selection option in print dialog for one page
- Changes token generation to use SecureRandom
- [conf cloud] Increases timeout after successful write to next write

25-MAR-2022: 17.2.4

- Fixes replace is not a function
- Fixes Sharepoint saving to site root drives in new picker

25-MAR-2022: 17.2.3

- Fixes custom links in duplicated page for realtime
- Uses same domain for realtime in production

24-MAR-2022: 17.2.2

- Adds Shift+Alt for floating connections [DID-4550]

23-MAR-2022: 17.2.1

- Fixes realtime for optimistic sync in OneDrive

23-MAR-2022: 17.2.0

- Improves performance issues on real time mechanism

22-MAR-2022: 17.1.5

- [conf cloud] Gliffy import case, containerId wrong, but diagram on current page

22-MAR-2022: 17.1.4

- [conf cloud] Fixed gliffy mass import, incorrect macro type imported

15-MAR-2022: 17.1.3

- Adds image clipPath support to mxLabel and mxSwimlane
- [jira Cloud] Updates embed conf scopes

11-MAR-2022: 17.1.2

- Skips sort and merge in RT for single receive data
- Reduces flickering, simplified RT code

10-MAR-2022: 17.1.1

- Uses tab key for nesting in list elements https://github.com/jgraph/drawio/issues/2673
- Adds protocol and editor version to p2p message
- Replaces consensus with improved consistency check
- Fixes Gliffy DnD import

09-MAR-2022: 17.1.0

- Changes freehand drawing to filled path
- Ignores pageNotFound in background image dialog
- Fixes handling of default colors in style targets
- Adds selection only option to print output
- Fixes background image offset in print output
- Fixes dark mode and background pages in print output

08-MAR-2022: 17.0.0

- Enables real time collaborative editing

08-MAR-2022: 16.6.8

- [conf cloud] Fixes toolbar showing in page editor in FF

07-MAR-2022: 16.6.7

- Adds MathJax Safe-mode to fix XSS vulnerability when viewer is used with CSP

04-MAR-2022: 16.6.6

- Fixed cropped images of sub shapes not showing

02-MAR-2022: 16.6.5

- Handles drag and drop of .drawio.png image files
- Improves error handling when loading files
- Adds i18n for realtime collaboration

24-FEB-2022: 16.6.4

- Make consistency check independent of return value
- Fixes cropping in background image dialog
- Adds click handler for status error message
- [conf cloud] Adds clean draft files to draw.io re-indexing
- Disables fast sync by default in OneDrive

23-FEB-2022: 16.6.3

- Enables Google Drive on PC in Office addon
- Enables fast RT for OneDrive
- Selects URL input after drag and drop

21-FEB-2022: 16.6.2

- Fixes snap to terminal tolerance
- Fixes import of bitmap images into blank diagrams
- Fixes dialog title for checksum error [DID-4314]
- Handles remote page name changes in sketch theme

17-FEB-2022: 16.6.1

- Adds P2PCollab to build

17-FEB-2022: 16.6.0

- Mode URL parameter forces splash
- Adds pass-through arguments
- Disables auth check for external editing
- Fixes parsing of keywords in SQL plugin https://github.com/jgraph/drawio/issues/2631

10-FEB-2022: 16.5.6

- Opens file after drag and drop on blank diagram
- Shift+drop forces open file in new tab
- Fixes pinch to zoom in lightbox
- Moves multitouch event filtering to mxGraph

09-FEB-2022: 16.5.5

- Updates AWS stencils

08-FEB-2022: 16.5.4

- Removes font CSS links with embedded fonts
- Adds Cmd+Shift+Alt+Drag
- Allow connection points for vertices only excluding groups
- Fixed export to pdf error of empty pages
- Fixes ctrl+resize for groups

02-FEB-2022: 16.5.3

- Fixes sketch font path
- [conf cloud] Adds linkAdjustment configuration to viewer
- [Conf Cloud] Fixes issue in linkAdjustment of tooltips
- Adds shift+drag to swap shapes
- Adds missing background for SVG files in dark mode

28-JAN-2022: 16.5.2

- Disables iOS scroll workaround in viewer

28-JAN-2022: 16.5.1

- Adds isExternalDataComms flag

28-JAN-2022: 16.5.0

- Keeps windows in viewport for inline embed mode
- Sets default scrollbars to true
- [desktop] Removes setting offline to true

27-JAN-2022: 16.4.11

- Fixes build process to deploy teams.html

27-JAN-2022: 16.4.8

- [desktop] Fixes draft files removal when auto-save is enabled
- Edit connection points dialog can now only be closed via the dialog button
- [conf cloud] Disables editing if confluence page is opened inside another service (e.g, Jira project pages)
- Shows label in edit connection points dialog https://github.com/jgraph/drawio/issues/864
- Fixes touch event handling on Android https://github.com/jgraph/drawio/issues/2579
- [desktop] Sets offline and offlineApp true
- [desktop] Display meaningful error when content is imported that requires server
	https://github.com/jgraph/drawio/issues/2117
- Fixes drag from picker for Chrome on touch devices

25-JAN-2022: 16.4.7

- Improves output validation of AbsAuthServlet [DND-371]
- Improves redirect url validation [DND-370]
- Changes child-src from none to self
- Fixes two windows with disabled start screen https://github.com/jgraph/drawio-desktop/issues/883
- Fixes handling of hidden stroke in RoughCanvas
- Fixes order and start point for circle layout
- Removes tags and layers icon in sketch footer
- [conf cloud] Replaces deprecated dialog.on('close', ...)
- [conf cloud] Forces sketch mode even when config sets ui
- Improves connection points dialog

24-JAN-2022: 16.4.6

- Fixes border for waypoint shape with sketch style
- [conf cloud] Added support for "new line" in page name in PageIds Export
- Fixes configurations not saving https://github.com/jgraph/drawio-desktop/issues/873

21-JAN-2022: 16.4.5

- Corrects SHA for bootstrap

21-JAN-2022: 16.4.4

- Fixes undeclared variable idx
- Adds a confirmation step to public Github deployment
- Enables reverse action for edges https://github.com/jgraph/drawio/issues/2569
- Switches to dev branch of i18n submodule
- [conf cloud] Uses content.id instead of the deprecated page.id
- [conf cloud] Fixes errors of spaces in diagram name and NPE in GraphViewer

20-JAN-2022: 16.4.3

- [jira cloud] Adds refresh button to diagram search page
- Fixes duplicate flipEdge function
- Adds unknownStyle option for CSV import
- Uses new app path in Dropbox

19-JAN-2022: 16.4.2

- Fixes NPE on destroyParentHighlight

19-JAN-2022: 16.4.1

- Fixes NPE in CropImageDialog
- Expands format window on large screens in sketch
- Fixes parent highlight after change of parent

19-JAN-2022: 16.4.0

- Adds helper function for tree layouts
- Fixes inkscape svg export size
- Adds support for special characters and html entities in string properties
- Adds sketch default font to PWA cache
- Fixes crop button state
- Adds insert menu in sketch sidepanel
- Bypasses proxy for Google fonts, adds font mapping
- Fixes local folder for Google font in cell style
- Adds mapping from font CSS URLs to font-face CSS

18-JAN-2022: 16.3.0

- Fixes hardcoded textarea dialog size
- Adds snapToGrid action
- Adds flip for groups and edges https://github.com/jgraph/drawio/issues/1895 /1139
- Fixes copySize enabled state for edges
- Embeds sketch default font (Architects Daughter)
- Clears background image with background color
- Fixes mouse wheel zoom in Brave for Windows https://github.com/jgraph/drawio/issues/2528
- Adds support for enumerating edges

14-JAN-2022: 16.2.7

- Adds enumerateValue property
- Adds peristent scratchpad and search in sketch
- Updated for modified inline CSS
- Fixes realtime zoom on iPad with sketch https://github.com/jgraph/drawio/issues/2545

12-JAN-2022: 16.2.6

- Fixes NPE

12-JAN-2022: 16.2.5

- Fixes reset of grid color
- Adds File submenu, windows=0 test URL parameter
- Adds enumerate property to replace number plugin
- Adds non-destructive image cropping https://github.com/jgraph/drawio/issues/73
- Adds Advanced submenu in Import from
- Adds mailto for short text sharing
- Adds ellipsis for Comments menu item
- Fixes broken background page links after import

07-JAN-2022: 16.2.4

- Fixes duplicate edges in CVS import
- Adds Convert labels to SVG option to SVG export

07-JAN-2022: 16.2.3

- Uses tableRow in ERD shapes
- Handles special title sizes in table
- Adds labels checkbox in More Shapes dialog

05-JAN-2022: 16.2.2

- Disables merging for merged cells
- [conf cloud] Adds support for anchor importing from server + support for adding links to anchors in old editor
- Adds precedence for alt on mouse down
- Adds Shift+Click for table range selection
- Fixes insertRow/Column for selected cell range

04-JAN-2022: 16.2.1

- Fixes cell divider event handling

04-JAN-2022: 16.2.0

- Fixes MathJax anti-aliasing in CLI export https://github.com/jgraph/drawio/issues/2253

03-JAN-2022: 16.1.4

- Fixes possible NPE

03-JAN-2022: 16.1.3

- Fixes highlight for table shapes

30-DEC-2021: 16.1.2

- Adds fillStyle dropdown for image background

29-DEC-2021: 16.1.1

- Avoids creating Blob for parseFile
- Fixes dimension shape with large stroke size https://github.com/jgraph/drawio/issues/271
- Hides foreign object warnings in background pages
- Fixes overflows in minimal and sketch theme https://github.com/jgraph/drawio/issues/2509
- Fixes freehand mode for Apple pencil on iOS https://github.com/jgraph/drawio/issues/2510
- Adds tableRow shape, fixes events for merged cells
- Uses clip path attribute for SVG image clipping
- Fixes default label background for imported images
- Fits image to clipPath bounding box
- Fixes collapsed table foreground https://github.com/jgraph/drawio/issues/2512
- Fixes overflow in LinkDialog
- Disables child layout for collapsed cells

23-DEC-2021: 16.1.0

- Fixes inconsistent event cursors on table lines
- Fixes default lanecolor for UML frame
- [conf cloud] Reduces number of comments requests
- Refactor structure of WEB-INF folder

21-DEC-2021: 16.0.3

- Adds Share and Comments in sketch File menu
- Fixes no stroke in Roughjs, adds swimlaneHead/Body
- Uses persisted default grid color
- Fixes rendering and tooltips for special colors
- Fixes initial placement of shapes window
- Uses Pusher 7.0.3 to fix NPE

21-DEC-2021: 16.0.2

- Re-build

21-DEC-2021: 16.0.1

- Fixes possible NPE

17-DEC-2021: 16.0.0

The reason for going to version 16 is there is a breaking change in the docker image. The 
default base image used has been changed because the previous image was not supported. There 
is no breaking change in the editor codebase, but the docker images follow the same numbering.

- Fixes clipping on initial arrow drop down https://github.com/jgraph/drawio/issues/2482
- Fixes table and template icon in sketch mode
- Restores sync problem icon
- Hides Cmd+R keyboard shortcut in Safari https://github.com/jgraph/drawio/issues/1757
- Moves selection state to EditorUi
- Added scrollbar to layersDialog in GraphViewer https://github.com/jgraph/drawio/issues/1347
- Added dark mode support for Mermaid https://github.com/jgraph/drawio-desktop/issues/785
- [conf cloud] Added minorEdit for page changes just in case it is effective

13-DEC-2021: 15.9.6

- Fixes NPE for wheel event in outline window

13-DEC-2021: 15.9.5

- Ctrl disables copy if enabled by default
- Uses action state for (un)group buttons
- Altered AWS group styles for better usability
- Fixes no pointerEvents for no (fill)opacity
- Fixes for AWS container usability
- Uses lazyZoom and adds trackpad in outline window
- Fixes dark mode support in browser picker
- Fixes ignored stroke option in SVG getBBox https://github.com/jgraph/drawio/issues/2484
- 

08-DEC-2021: 15.9.4

- Adds mxShape.intersectsRectangle
- Shows row-/colspan property for table cells
- Fixes style processing issues https://github.com/jgraph/drawio-desktop/issues/843

08-DEC-2021: 15.9.3

- Adds commons-lang3 3.12.0 for commons text dependency

08-DEC-2021: 15.9.2

- Keeps only window title inside viewrect
- Fixes handling of defaults in copy/paste style
- Removes GoogleGadgetServlet
- Improves handling of special style values
- Uses map in signature of Graph.updateCellStyles
- Fixes possible unresolved values in default style
- Fixes unresolved colors in style thumbnail
- Fixes background page for PDF export in dark mode
- Fixes line cap for partial rectangle https://github.com/jgraph/drawio-desktop/issues/813
- Fixes ignored model for change of cells in event

03-DEC-2021: 15.9.1

- Fixes build error

03-DEC-2021: 15.9.0

- Fixes possible hidden tool windows in sketch
- [conf cloud] Fixes page ids export error log
- [conf cloud] Adds fallback for the viewer when a file returns 403 for a specific version
- Fixes in-app help search query
- Improves pinch to zoom on trackpad https://github.com/jgraph/drawio/issues/2469
- Updates GCP icons

02-DEC-2021: 15.8.9

- Adds Shift+Click on Zoom in Sketch theme
- Add table divider handles with col/rowspan
- Fixes text selection with inline OneDrive picker https://github.com/jgraph/drawio/issues/2444

30-NOV-2021: 15.8.8

- Hides xml extension in library title https://github.com/jgraph/drawio/issues/2448
- [vsdx] Improves font-size and line height and links to internal pages
- Fixes file exists check in GitHub

29-NOV-2021: 15.8.7

- Fixed string replace when label has a new line https://github.com/jgraph/drawio/issues/2015
- Removes dots fill pattern https://github.com/jgraph/drawio/issues/2443
- Fixes parsing of base64 PNG with XML and no prefix
- Hides empty table section in Arrange panel
- Ignores cached style in table background
- Shows error if popup is blocked in Google Drive
- Adds 2px between scrollbar and elements
- Uses rgb for default colors in output https://github.com/jgraph/drawio/issues/2445
- Fixes rgb values in SVG gradient IDs [DID-3797]

24-NOV-2021: 15.8.6

- Adds support for refresh token to github
- Adds authorize, refresh and help buttons in GitHub
- [conf cloud] Fixes NPE in page ids import/export

24-NOV-2021: 15.8.5

- Removes alignment from current style
- Handles combined row- and colspans
- Adds Ctrl+Enter in text and data dialog https://github.com/jgraph/drawio/issues/2438
- Removes last row and column line
- Conf Cloud: Added custom templates preview https://github.com/jgraph/drawio/issues/2436
- Handles resource not accessible in GitHub
- Fixes reset of configuration, adds tooltip

22-NOV-2021: 15.8.4

- Fixes move of edge labels after ungroup https://github.com/jgraph/drawio/issues/2433
- [conf cloud] Added space filtering to page collection to avoid CONFCLOUD-73202
- Fixes default color and other possible rgba colors in vsdx export
- [conf cloud] Added revision history to Board macro

19-NOV-2021: 15.8.3

- Removes whitespace in resource values
- Uses SVG for folding icons https://github.com/jgraph/drawio/issues/2359
- Matches folding icon gradient colors
- Ignores icon search response with error code
- Fixes broken check for supported domain https://github.com/jgraph/drawio/issues/2426
- Adds check for enabledLibraries
- Moves page setup and scale to preferences in sketch
- Ignores disabled libraries in search https://github.com/jgraph/drawio/issues/1838
- Moves page setup to file menu

17-NOV-2021: 15.8.2

- [conf cloud] Fixes diagrams with non-English characters in name

17-NOV-2021: 15.8.1

- Changes Trello API key
- Adds drawiolib files in OneDrive inline picker
- Fixes preview for libraries in OneDrive picker
- Fixes connectable for multiple vertices https://github.com/jgraph/drawio/issues/2383
- Update to kr translations, thanks to Hochul cho

17-NOV-2021: 15.8.0

- Switches to command line deployment script
- Uses API for inline styles
- Fixes chrome extension link color
- Replaces inline CSS styles with DOM API
- Uses larger handles for line end https://github.com/jgraph/drawio/issues/1683
- [conf cloud] Allows page ids import to continue when Confluence fails to list all pages
- Fixes event handling for Chrome on Linux https://github.com/jgraph/drawio/issues/2392
- Fixes clear waypoints keyboard shortcut https://github.com/jgraph/drawio/issues/2420
- Fixes handling of PNG data URL with charset

15-NOV-2021: 15.7.4

- Adds titlebar to desktop sketch mode
- Adds styles config type check
- Adds rowspan for row line rendering

10-NOV-2021: 15.7.3

- [teams] Fixes shapes rendering in picker

10-NOV-2021: 15.7.2

- Fixes pointer events in sketch mode https://github.com/jgraph/drawio-desktop/issues/760
- Fixes undo history after table insert
- Fixes delayed style change in table shape

08-NOV-2021: 15.7.1

- Makes all C4 shapes attributes editable
- Enables transparent default page background color
- Separate cell style for dark mode no longer needed
- Applies AWS stencil colors for light background

05-NOV-2021: 15.7.0

- Add missing GCP3 file to build

05-NOV-2021: 15.6.9

- Adds new GCP icons
- Limits Google and disabled editing in mobile apps (webview) to MS Teams only
- Fixes line visible in ERzeroToMany marker https://github.com/jgraph/drawio/issues/22386
- Adds additional SVG sanitizing
- Fixes zero to one/many marker fill color https://github.com/jgraph/drawio/issues/2386

03-NOV-2021: 15.6.8

- Fixes handling of transparent default colors

03-NOV-2021: 15.6.7

- Fixes overridden colors in UI update callback

02-NOV-2021: 15.6.6

- Fixes scrolling with css transforms [DID-3588]
- Fixes hardcoded default colors

01-NOV-2021: 15.6.5

- Fixes change of default style

01-NOV-2021: 15.6.4

- Moves resolve default colors to cell style https://github.com/jgraph/drawio/issues/2370
- Adds default text border color
- FIxes handling of Atlas mode and default colors
- Updates default color via prototype
- Fixes sticky scrollbar in FF on Windows [DID-3588]
- Restores previous Notion embed menu

31-OCT-2021: 15.6.3

- Hides dragHandle while editing diagram
- Fixes inline embed resize moves format panel
- Fixes handling of default colors in SVG output
- Notion extension improvements

28-OCT-2021: 15.6.2

- Fixes bounding box scale for SVG clipping https://github.com/jgraph/drawio/issues/2257
- Uses default style for thumbnails
- Improves handling for background colors in Notion
- Fixes remove rounded diagram style for line https://github.com/jgraph/drawio/issues/2066
- Adds sidebarTitles, sidebarTitleSize config https://github.com/jgraph/drawio/issues/1893
- Adds drag and drop to swap UML lifelines https://github.com/jgraph/drawio/issues/982
- Adds exit point for inline embed protocol
- Hides dragHandle while editing diagram
- Fixes inline embed resize moves format panel

27-OCT-2021: 15.6.1

- Handles of dark mode change for diagram styles
- Uses waypoint shapes, removes hardcoded colors
- Ignores some edge styles when inserting templates
- [jira cloud] Hide draw.io button when no diagrams are in the issue
- Uses default not current style for import
- [conf cloud] Log viewer xml errors
- Fixes OneDrive inlinePicker config error
- [conf cloud] Added simpleViewer global config

26-OCT-2021: 15.6.0

- First release of Notion Chrome extension
- Add trigger of release on push of VERSION to release branch
- Adds embed viewport
- [conf cloud] Stops unnecessary viewer refreshes
- Keeps windows inside embed viewport

22-OCT-2021: 15.5.9

- Fixes stroke and font color in dark mode https://github.com/jgraph/drawio/issues/2338

21-OCT-2021: 15.5.8

- Fixes NPE in OneDrive inline picker
- [conf cloud] Fixes JSON validation CSP no-eval restriction
- Improves error handling for inline embed mode
- Fixes ignored configured styles in sketch mode

20-OCT-2021: 15.5.7

- Fixes rendering of row lines https://github.com/jgraph/drawio/issues/2332
- Fixes hardcoded dark mode colors
- Adds oneDriveInlinePicker switch https://github.com/jgraph/drawio/issues/2330
- Adds settingsName config
- Fixes color override for non-formatted text
- Changes for conf server to use sketch mode
- Fixes in-place editor default color
- Adds Graph.defaultForegroundColor
- Fixes background page default foreground

19-OCT-2021: 15.5.6

- [conf Cloud] Adds Config JSON Schema validation and error check in viewer
- Minor fix for inline embed mode

18-OCT_2021: 15.5.5

- Adds support for "primary key (PK)" SQL syntax #DID-3505
- Fixes crop to selection in export https://github.com/jgraph/drawio/issues/2324

15-OCT-2021: 15.5.4

- Fixes NPE in TableShape.paintForeground

15-OCT-2021: 15.5.3

- Fixes background clipping, in-place bounds changes
- Fixes clipping in EmbedDialog
- Updates C4 shapes
- Fixes new page defaults, adds stepper shift+click
- Fixes possible getAttribute is not a function
- Fixes export to GitLab https://github.com/jgraph/drawio/issues/1784
- Removes save and import servlet
- Fixes ignored edge source for metadata [DID-3512]

12-OCT-2021: 15.5.2

- Disables plugins, shows sketch for inline embed
- Adds fullscreenExitImage
- Adds Editor.enableExportUrl
- Updates current style for fillStyle change
- Uses shift+click for stroke, alt+click for fill
- Fixes logic for alt and shift click
- Adds defaultGridEnabled/-PageVisible config https://github.com/jgraph/drawio/issues/2306
- Stops editing on exit inline embed mode

11-OCT-2021: 15.5.1

- Adds embedInline URL parameter
- Uses system dark mode for default
- Fixes library depends on current edge style https://github.com/jgraph/drawio/issues/2308
- Fixes handling of inlineFullscreen iframe

08-OCT-2021: 15.5.0

- Adds inches and meters as units
- Fixes date formatted labels on vsdx import
- Fixes possible NPE in Gitlab client
- Fires CELLS_ADDED for duplicating cells https://github.com/jgraph/drawio/issues/2298
- Adds embed fonts option in SVG export
- Fixes fonts for embedded SVG files with callback
- Ports resource generation to JS (Node)
- Fixes clipping for longer button labels
- Fixes possible clipping in download PDF dialog
- Fixes pointer events with no fill color in sketch
- Adds numbered property, fixed for sketch theme
- Fixes math output in JSON protocol export
- i18n update Lambda function
- Adds i18n resources as a submodule in internal repo

05-OCT-2021: 15.4.3

- Tides NPEs from logging

05-OCT-2021: 15.4.2

- [conf/jira cloud] Changes theme to Kennedy
- Adds grid URL parameter https://github.com/jgraph/drawio/issues/1882
- Adds table actions for child cells in stacks
- Fixes PDF export with background page in dark mode
- Adds preview for moved cells with arrow key https://github.com/jgraph/drawio/issues/1146
- [conf cloud] Adds embed from GitHub
- Improves CSV import for groups, values and sizing
- Fixes ignored zoom for arrows keys

01-OCT-2021: 15.4.1

- [gliffy] Hides shapes fully in -ve coord
- Fixes lineheight and regex https://github.com/jgraph/drawio/issues/2280, adds rowspan
- Fixes possible getAttribute is not a function
- Fixes update of current style for label editing https://github.com/jgraph/drawio-desktop/issues/727
- Fixes update of color button, handling of rgba

30-SEP-2021: 15.4.0

- Adds pages switch for sketch mode
- Fixes format panel styling in sketch mode
- Fixes stroke tolerance for disabled pointer events
- Adds Double Block arrow end style
- [lucidchart]  Improves freehand stencil import
- Fixes connection point contrast https://github.com/jgraph/drawio/issues/712
- Fixes text shape size
- Fixes ignored current styles
- Fixes autosize for groups https://github.com/jgraph/drawio/issues/509
- Fixes clipping in Safari in chromeles mode https://github.com/jgraph/drawio/issues/2277
- Adds Alt+Drag to select intersection https://github.com/jgraph/drawio/issues/297
- Uses shadowModified for saving storage files
- Changes active page tab text color

29-SEP-2021: 15.3.8

- Fixes width for list dropdown on the arrow heads
- Switches search to use www.diagrams.net
- Improves error handling of invalid config values
- Fixes text inconsistencies in sketch mode
- Adds dark mode and fullscreen to preferences menu

28-SEP-2021: 15.3.7

- Ignores floating terminal points for snapping
- Improved lollipop notation https://github.com/jgraph/drawio/issues/2270
- Fixes for sketch toggle
- Fixes sketch mode used in non-sketch themes

28-SEP-2021: 15.3.6

- Replaces cssText with DOM API
- Replaces cssText and innerHTML with DOM API
-[conf cloud] Fixes duplicate name of copied diagrams

27-SEP-2021: 15.3.5

- Fixes inconsistent styling in format panel
- Fixes scrollbar dependency for some format options
- Fixes NPE of localStorage.setItem

26-SEP-2021: 15.3.4

- Moves sketch option to preferences menu
- Fixes mxSetting NPE

25-SEP-2021: 15.3.3

- Fixes update of zoom label
- Invokes cellsInserted for table rows and cells
- Fixes user panel styles
- Uses Alt+Wheel for zoom in sketch theme
- Fixes update of background page image
- Adds sketch toggle, moves options to context menu
- Fixes zIndex for user panel over format window
- Fixes for Teams app
- Uses sketch theme on small screens
- Fixes encoding of tags URL parameter

24-SEP-2021: 15.3.2

- Fixes NPE in ODPicker
- Fixes NPE in notifications

23-SEP-2021: 15.3.1

- Improves extra pages in PDF export
- Self-host JQuery for Trello and removing its CDN from CSP header
- Adds table controls for stacks https://github.com/jgraph/drawio/issues/2260
- Fixes inconsistent event handling with no stroke
- Fixes default font size and vertical alignment
- Adds insert table option in sketch toolbar
- Fixes shift+drag for column handle in table https://github.com/jgraph/drawio/issues/2262

22-SEP-2021: 15.3.0

- Fixes handling folder error while loading preview
- Fixes svg/png with dark theme, background pages
- Escapes HTML entities in file titles
- Escaped innerHTML when mxResources is used in ODPicker
- Fixes cellToClone is not defined
- Adds electrical shapes
- Updates pt-br translation. Thanks to Marcelo Filho.

16-SEP-2021: 15.2.9

- Fixes OneDrive inline picker script not loaded

16-SEP-2021: 15.2.8

- Moves enableWebFonts switch to Editor
- Fixes inconsistent naming for shadowOptionEnabled
- Adds more label flexibility to C4 Database shape
- Uses SVG for spinner in sketch and min theme
- Hides title and container option for HTML table
- Adds colspan in test mode
- Fixes duplicate rounded style for flexArrow
- [gliffy import] Fixes svg image clipping (#DID-1443 and #DID-3137)
- Adds comment for embedded SVG files
- Using OneDrive inline picker by default

14-SEP-2021: 15.2.7

- Fixes possible use of undefined FontDialog

14-SEP-2021: 15.2.6

- Fixes SVG export in IE, adds more status hashes
- Removes inline styles for status messages
- Adds FontDialog.enableWebFonts switch
- Removes unsafe-inline style-src for se CSP outputs
- [electron] Fixes issue using old remote in Init.js (disabled localStorage)

13-SEP-2021: 15.2.5

- Uses DOM API for SVG gradients
- Uses unsafe-inline style-src for se in production
- Fixes possible NPE on cssText

13-SEP-2021: 15.2.4

- Internal build

13-SEP-2021: 15.2.3

- Fixes background color issues for some shapes

13-SEP-2021: 15.2.2

- Fixes possible NPE due to getAllTags scope
- Fixes drop target detection with live preview and guides
- Adds safe-style-src URL parameter

12-SEP-2021: 15.2.1

- Uses icon to toggle layer visibility
- Hides tooltip when entering chromeless toolbar
- Handles default color in dialogs
- Improves handling of default colors for dark mode
- Fixes inconsistent modifier keys for connections

10-SEP-2021: 15.2.0

- Consolidates icons
- Fixes scrollbars in dialog for iOS
- Fixes CSS selector for chromeless toolbar controls
- Fixes default label background color for vertices https://github.com/jgraph/drawio/issues/2238
- Adds default, fixes lane color in dark mode https://github.com/jgraph/drawio/issues/2239
- Uses OS font for application user interface https://github.com/jgraph/drawio-desktop/issues/514
- Enables tags in all viewers, removes unused images
- Disables dark mode in IE
- [lucid import] Fixes issues with group ordering and freehand stencils
- Removes double click handling in tags dialog

09-SEP-2021: 15.1.4

- Fixes spacing and sizes in tags dialog
- Adds tags to viewer, SVG icons to layers dialog
- [vsdx import] Fixes invalid attribute error when input data is not suitable for html
- Fixes text overflow in dialogs
- Uses static viewer with no dynamic loading

08-SEP-2021: 15.1.3

- Internal release

08-SEP-2021: 15.1.2

- Adds tags option for export to lightbox
- Adds SVG icons for some markers
- Ignores ghosted waypoints in context menu
- Fixes edge context menu on some devices DID-3284
- Adds tags in view menu
- Makes tags case-sensitive
- Moves tag click handler to table cell
- Moves tag double click handler to table cell
- Shows all tags after double click or shift click
- Fixes initial dialog size
- Fixes scrollbar in dialog

07-SEP-2021: 15.1.1

- Uses SVG for large toolbar icons
- Adds createTagsDialog and double click handler
- Uses dbl click for selection or highlight
- Adds tags URL parameter for lightbox (beta)
- Disables sketch style for specific shapes by default
- Adds support for tags in lightbox
- [o365] Updates Office.ui.messageParent with targetOrigin
- Fixes possible duplicate cells, event names
- Fixes tags in custom actions https://github.com/jgraph/drawio/issues/2228

06-SEP-2021: 15.1.0

- Fixes link handling in viewer https://github.com/jgraph/drawio/issues/2220
- Improvements to tags dialog https://github.com/jgraph/drawio/issues/2208
- Fixes missing background page dropdown
- Removes link if graph disabled or no cells selected
- Highlights selection cells in disabled graphs
- Fixes placeholders in PDF export
- Fixes background pages and clipping https://github.com/jgraph/drawio/issues/2223
- Adds tags custom action
- Adds checks for valid tags
- Fixes ignored background image bounds in lightbox

02-SEP-2021: 15.0.6

- Fixes NPE for PDF export with single page https://github.com/jgraph/drawio/issues/2221
- Fixes padding for buttons in CustomDialog
- Adds zoomWheel config option https://github.com/jgraph/drawio-desktop/issues/175

01-SEP-2021: 15.0.5

- Adds hover handler for blue arrows
- Fixes PDF export with background pages
- Adds page range for PDF export
- Fixes possible charAt is not a function

31-AUG-2021: 15.0.4

- Fixes offset for background pages
- Fixes dash color for sketch theme in dark mode
- Adds .drawio.xyz extension to embedded files
- Adds includeDiagram config option
- Adds app icon click handler, removes debug output
- Adds support for background pages in PDF export

27-AUG-2021: 15.0.3

- Fixes missing background images in thumbnails
- [conf cloud] Adds page edit comment when a diagram is saved from direct edit
- Fixes issue with application of constraints
- Updates background image after relevant events

26-AUG-2021: 15.0.2

- Fixes special cases for default page format https://github.com/jgraph/drawio/issues/2202
- Adds type check to avoid charAt is not a function in format panel color
- [teams] Fixes auth error and upgraded manifest and JS sdk
- [teams] disable EditorUi.nativeFileSupport in teams

26-AUG-2021: 15.0.1

- Adds configuration for page format https://github.com/jgraph/drawio/issues/2202
- Fixes background page image offset

26-AUG-2021: 15.0.0

- Adds file properties dialog to sketch mode
- Adds Shift+Click for color button
- Adds ability to include page(s) as background to other pages on diagrams 

24-AUG-2021: 14.9.9

- Updates AWS stencils to latest set
- Reports curved edges as not fully supported in Lucidchart import
- Updates ru translations. Thanks to Ash Ed.

18-AUG-2021: 14.9.8

- Fixes preview domain in trello powerup
- [conf cloud] Undo check name fix to consider 404 error as success

16-AUG-2021: 14.9.7

- Prevents NPE in style format dialog
- Fixes new attachment download auth errors in Trello power up
- [conf cloud] Fixes an error when checkName api returns 404 when list of attachments are requested

10-AUG-2021: 14.9.6

- [jira cloud] Adds Metrics publish API to log app load time or failure
- [conf cloud] Adds Metrics publish API to log app load time or failure
- Fixes possible NPE in StyleFormatPanel (colorset.title)

06-AUG-2021: 14.9.5

- Adds shift/alt to extract data on copy data button
- Adds barrier for parallel async custom actions
- Adds background page support
- Fixes ignored background image size for image export
- Adds colorNames and titles for color schemes
- Adds edit geometry in sketch theme context menu
- Fixes inconsistent cut and delete actions https://github.com/jgraph/drawio/issues/1978
- Uses shift+click to paste data with label
- Adds edit submenu in min and sketch themes
- Adds popup for additonal color models https://github.com/jgraph/drawio/issues/2150
- Handles page links in background image dialog

03-AUG-2021: 14.9.4

- Executes actions in sequence, adds animation custom actions https://github.com/jgraph/drawio/issues/1861
- Fixes update of cell IDs in style actions
- Adds stopping for custom action sequences
- Fixes naming for parallel animations
- [conf cloud] Adds timeout config
- Updates it translations. Thanks to Vincenzo Reale
- Fixes cloning for actions, final animation state
- [jira cloud] Adds back Confluence embed using new API
- Fixes update of custom actions for copy, duplicate and recursion
- Hides tooltip if mouse enters link hint
- Fixes loading SVG from OneDrive https://github.com/jgraph/drawio/issues/2161
- Adds data extraction to props plugin

28-JUL-2021: 14.9.3

- Fixes pointer events for table cells in sketch theme
- Adds title and container option for insert table drop down
- Fixes possible cropping in SVG export https://github.com/jgraph/drawio/issues/1216
- Fixes e.data.indexOf is not a function in OneDrive client
- Adds edit tooltip in context menu for sketch mode
- Adds dash line jump style https://github.com/jgraph/drawio/issues/1852
- Fixes rough URL parameter, possible missing sidebar preview
- [conf cloud] Fixes multiple embedded diagrams with the same name editing issue
- Disables plugins action for plugins=0 https://github.com/jgraph/drawio/issues/2148
- [conf cloud] Adds a fallback for AP is undefined error
- Updates it tranlsations. Thanks to Vincenzo Reale
- Updates el tranlsations. Thanks to Io Papadimitriou

22-JUL-2021: 14.9.2

- [conf cloud] Fixes scroll bars with hidden toolbar
- [conf cloud] Fixes incorrect height of simple viewer
- Adds DRAWIO_LIGHTBOX_URL https://github.com/jgraph/drawio/issues/2149
- Creates draft while saving local file to fix possible data loss
- Adds support for radial gradients https://github.com/jgraph/drawio/issues/1472

21-JUL-2021: 14.9.1

- [conf cloud] Fixes pending updates of embedded macros
- Fixes autosize for wrapped text, ignored aspect

16-JUL-2021: 14.9.0

- Adds support for se.diagrams.net domain
- Fixes clipping in viewer with initial hidden layers https://github.com/jgraph/drawio/issues/DID-2617
- Adds autoOrigin option https://github.com/jgraph/drawio/issues/DID-2617
- Updates cs translations. Thanks to Pavel Borecki
- Updates el tranlsations. Thanks to Io Papadimitriou
- [conf cloud] Improves viewer load time

12-JUL-2021: 14.8.6

- Disables pointerEvents style for images https://github.com/jgraph/drawio/issues/2121
- [jira cloud] Disables Confluence embed option due to changes in auth token valdation
- Improvements to Lucidchart import

07-JUL-2021: 14.8.5

- Fixes XSS attack on GoogleGadgetServlet. Thanks to Alfred Berg for report.
- Updates to cs translations

02-JUL-2021: 14.8.4

- Fixes drag and drop for edge labels with selected parents
- [conf cloud] Fixes recent and search in embed diagrams

30-JUN-2021: 14.8.3

- [conf cloud] Fixes save settings with current viewer status
- Adds function for image export in viewer
- Fixes possible NPE https://github.com/jgraph/drawio/issues/2115


25-JUN-2021: 14.8.2

- [conf cloud] Adds lightbox to simple viewer
- [conf+jira cloud] Fixes export downloads https://github.com/jgraph/drawio/issues/2107
- [conf cloud] Updates self import to support data:confluence/id and links

24-JUN-2021: 14.8.1

- Clones existing SVG for outline rendering
- Fixes possible ignored gesture end in outline
- Fixes unconnected edges z-index order in vsdx import
- Fixes line jump handling in vsdx import
- Improves locking https://github.com/jgraph/drawio/issues/2069
- Fixes action states and cursors for locked cells
- Fixes selection in locked layers
- Updates French translations

17-JUN-2021: 14.8.0

- Adds bringForward and sendBackward actions
- Fixes GraphViewer toolbar and border hiding in FF

16-JUN-2021: 14.7.10

- [jira cloud] Adds support for uploading zipped format diagrams
- Fixes ignored locked layers, hover icons, shape picker clipping

15-JUN-2021: 14.7.9

- Adds minimize to shape picker in sketch theme
- Fixes unicode char to HTML entity on some JVMs from Gliffy

14-JUN-2021: 14.7.8

- [conf cloud] Adds custom templates to sketch macro add template dialog
- [conf cloud] Fixes minor issues with templates dialog
- Prevents showing an empty viewer when configured layers are incorrect
- [conf cloud] Fixes template and new dialog bugs and added no file type option
- [conf cloud] Fixes Link dialog attachment links
- [conf cloud] Fixes centering with hidden toolbar or simple viewer
- Adds preview button in templates dialog
- Adds pinch to zoom CSS preview for iOS (beta)
- Prevents scrollbars on PDF and Image Export
- [conf cloud] Fixes settings dialog hidden buttons with certain diagram height

09-JUN-2021: 14.7.7

- Fixes event handling for template previews
- Adds modified check for open browser file in standalone mode
- Adds select edges option in context menu
- Adds delay for double tap edit trigger before context menu
- Hides template preview when dialog is closed
- Adds padding for touch events on window controls
- Fixes status bar partially visible behind buttons
- Fixes fit icon in minimal theme
- Fixes window position constraints in sketch theme
- Fixes ghost cells after resume in outline
- Fixes event timing after freehand insert
- Fixes initial stroke width and folding for outline
- Adds context menu options for sketch theme on touch devices
- Reduces use of formatted text in swimlane titles
- Fixes background page and dark mode toggle in outline
- Fixes zOrder after dialog click in sketch theme
- Fixes order of graph relative to dialogs
- Fixes in-place editor width after markup toggle
- Fixes panning with freehand on touch in minimal theme

04-JUN-2021: 14.7.6

- Adds delete button in sketch theme

03-JUN-2021: 14.7.5

- Removes padding in outline
- Enables decimal stokewidths
- Fixes delayed preview issue
- Adds outline option in sketch theme
- Hides tooltip on scroll wheel events
- Shift+tab stops editing with no selection
- Fixes inconsistent mouse down handling for template preview
- Fixes inconsistent gesture start for blank template entry
- Fixes minor style issues for sketch theme
- Adds previews for templates
- Fixes picker toolbar overlap on small screens for sketch theme
- Adds padding for window controls in sketch and minimal theme
- Uses tab key to insert tabs in labels
- Handles tab key based on text selection while editing

02-JUN-2021: 14.7.4

- Sets fonts color for note shape in sketch theme
- Consistent freehand defaults for all themes
- Escape stops freehand drawing
- Fixes timeout error when UI fonts are overwritten in PDF export
- Fixes overridden indent keystroke, uses alt+tab for tab
- Fixes tab to stop editing

29-MAY-2021: 14.7.3

- Updates layer dot after model changes
- Adds 4 spaces for shift+tab while editing labels
- Adds shift+tab to insert tab
- Fixes for sketch and dark theme
- Adds support for additional OrgChart type in Lucidchart import
- Adds dot to layer for selected cells [2027]
- Fixes issues with live preview [2257]
- Fixes rounding errors in segment connector [2257]
- Updates ja translations

26-MAY-2021: 14.7.2

- [conf cloud] Enables sketch macro

25-MAY-2021: 14.7.1

- Fixes edges with zero height/width src/trg cell in vsdx import

20-MAY-2021: 14.7.0

- Updates RoughJS to 4.4.1 with preserveVertices option
- Sets template backgrounds to transparent, except where it is set to an explicit non-white color
- Adds support for Lucidchart OrgBlock
- [conf cloud] Adds support for attached images in label (in page Ids import)
- Fixes NPE in Lucidchart import
- Fixes default user picture
- [conf cloud] Removes draft check error of zero byte files
- Updates Mermaid to 8.10.1
- Updates es translations

13-MAY-2021: 14.6.13

- Updates to latest Azure stencils
- [conf cloud] Improves error handling around draft load failing
- [conf cloud] Fixes lib import without config space

11-MAY-2021: 14.6.12

- Fixes sidebar preview for sketch theme
- Disables handwritten fonts in sketch theme with rough=0
- Fixes inconsistent pointer event handling
- Fixes ignored comic style for rectangle shape
- Adds modifier keys for wheel scrolling in sketch theme
- Disables page view after page format change with sketch theme
- Updates ar and ru translations

07-MAY-2021: 14.6.11

- Fixes Dropbox client in dev mode
- Adds iconsearch CF worker
- Updates Gliffy translations for BPMN 2.0
- Removes JSON2 usage. Required for IE7- which doesn't work since VML support removed.
- Reverts parameters for sidebar so default style is not applied.
- Adds gitflow examples
- Additional Spanish translations

04-MAY-2021: 14.6.10

- Adds zoomFactor config option
- Fixes links on custom shapes in Lucid import
- Adds ctrl/cmd+dblclick to change cell ID
- Adds containers to general sidebar
- Fixes pointer events for text shapes
- Fixes selected style in dark mode
- Moves Dropbox auth from implicit grant to server-side flow
- Adds XML option to import menu in minimal and sketch theme
- Adds Shift+Click on clear waypoints button to clear fixed anchor points
- Fixes overridden default font in sidebar thumbnails
- Fixes ignored default styles for shapes dialog and inserted templates
- Fixes NPE for sketch UI in embed mode
- Adds enabledChanged event to graph
- Separates clear waypoints and clear anchor points
- Disables file API in Opera
- Fixes anchor points behavior for Choreography shapes in BPMN

29-APR-2021: 14.6.9

- Corrects GitHub app ID

29-APR-2021: 14.6.8

- Refactors GitHub paths

28-APR-2021: 14.6.7

- Switches to server flow for GitHub and Gitlab auth

22-APR-2021: 14.6.6

- Adds dark mode for minimal theme

21-APR-2021: 14.6.5

- Versions shapes minified JS

21-APR-2021: 14.6.4

- Restores BPMN 2.0 shapes

19-APR-2021: 14.6.3

- Fixes for dark mode and sketch theme

19-APR-2021: 14.6.2

- Fixes private Gitlab instance URL parsing

15-APR-2021: 14.6.1

- Improvements to sketch theme

13-APR-2021: 14.6.0

- Updates to workbox 6.1.2

09-APR-2021: 14.5.10

- Internal release

09-APR-2021: 14.5.9

- Improvement to sketch theme

06-APR-2021: 14.5.8

- Fixes Confluence Cloud saving issue

03-APR-2021: 14.5.7

- Add various shapes

02-APR-2021: 14.5.6

- Removes BPMN 2 changes

01-APR-2021: 14.5.5

- Improves BPMN symbols to 2.0 spec

31-MAR-2021: 14.5.4

- Fixes for vsdx export
- Adds re-tries on cache write failures

26-MAR-2021: 14.5.3

- Internal release

26-MAR-2021: 14.5.2

- Disables copy as image in iframes
- Fixes find/replace dialog in minimal theme https://github.com/jgraph/drawio/issues/1896
- Fixes ignored grid for polygon shapes https://github.com/jgraph/drawio/issues/1891

23-MAR-2021: 14.5.1

- Fixes for Electron 12

22-MAR-2021: 14.5.0

- Improves Lucidchart import

17-MAR-2021: 14.4.9

- Adds copy as image option
- Makes find and replace dialog the default

12-MAR-2021: 14.4.8

- Fixes segment router removing control hints at specific zooms

10-MAR-2021: 14.4.7

- Adds upload option back in embed conf cloud

09-MAR-2021: 14.4.6

- Adds support for linkTarget property

08-MAR-2021: 14.4.5

- Changes find dialog to replace and find

03-MAR-2021: 14.4.4

- Improves Lucidchart import

24-FEB-2021: 14.4.3

- Adds notifications

18-FEB-2021: 14.4.2

- More fixes for aj.draw.io and ac.draw.io lightbox

18-FEB-2021: 14.4.1

- Fixes lightbox for aj.draw.io and ac.draw.io

17-FEB-2021: 14.4.0

- Removes VML support
- Adds Persian language
- Forces ac.draw.io and aj.draw.io to embed mode

15-FEB-2021: 14.3.2

- Adds flow animation style
- Makes grid steps configurable
- Adds ctrl+drop to insert dropped content as new page
- Uses app.diagrams.net for editing [DID-1717]
- Fixes drag and drop for SVG+XML files

11-FEB-2021: 14.3.1

- Adds support for regional direction to back-ends
- Adds grid option to export dialog

08-FEB-2021: 14.3.0

- Fixes external fonts in PDF export
- Fixes drag and drop for shapes with shadow
- Renames page for import into blank diagram
- Fixes export triggers autosave in embed mode

29-JAN-2021: 14.2.9

- Fixes NPE in minimal mode

29-JAN-2021: 14.2.8

- Adds data governance config

22-JAN-2021: 14.2.7

- Improves Lucidchart import

20-JAN-2021: 14.2.6

- Fixes for OneDrive client flow

19-JAN-2021: 14.2.5

- Add client-side clipping of SVG

15-JAN-2021: 14.2.4

- Improves Lucidchart import

14-JAN-2021: 14.2.3

- Fixes pako encoding issues

13-JAN-2021: 14.2.2

- Fixes decoding of compressed shape files

13-JAN-2021: 14.2.1

- Fixes UInt8Array call stack size exception

13-JAN-2021: 14.2.0

- Disables Trello by default
- Updates pako to 2.0.3

09-JAN-2021: 14.1.9

- AWS stencil update

02-JAN-2021: 14.1.8

- Internal release

01-JAN-2021: 14.1.7

- Fixes NPE for single point edges

31-DEC-2020: 14.1.6

- Internal release for conf/jira cloud changes

31-DEC-2020: 14.1.5

- Desktop fixes for File API clash

30-DEC-2020: 14.1.4

- Fixes marker rounding errors

28-DEC-2020: 14.1.3

- Internal release

23-DEC-2020: 14.1.2

- Adds UML 2.5 library

18-DEC-2020: 14.1.1

- Fixes Math config

18-DEC-2020: 14.1.0

- Fixes multiple Math initialization

17-DEC-2020: 14.0.5

- Fixes ignored hidden toolbar [1627], settings icon
- Uses combined configuration file for MathJax

16-DEC-2020: 14.0.4

- Fixes images paths

15-DEC-2020: 14.0.3

- Fixes NPE

15-DEC-2020: 14.0.2

- Improves Lucidchart import

10-DEC-2020: 14.0.1

- Uses minimal UI on iPad Mini and smaller
- Adds clear.html for clearing caches

09-DEC-2020: 14.0.0

- Internal refactoring of source code

07-DEC-2020: 13.11.0

- Fixes for Confluence Cloud

04-DEC-2020: 13.10.9

- Hardens servlets

03-DEC-2020: 13.10.8

- Reverts UML 2.5 release

03-DEC-2020: 13.10.7

- Improves Lucidchart import

02-DEC-2020: 13.10.6

- Adds auto-crop, origin for visible layers [688]
- Improves Lucidchart import

01-DEC-2020: 13.10.5

- Uses mxGraph 4.2.3 beta 6
- Adds page size export option

26-NOV-2020: 13.10.4

- Adds compare button in revision history dialog

25-NOV-2020: 13.10.3

- Uses mxGraph 4.2.3 beta 5

24-NOV-2020: 13.10.2

- Fixes specific synchronize operations

22-NOV-2020: 13.10.1

- Adds File, Embed, Notion

18-NOV-2020: 13.10.0

- Internal release for Github actions testing
- Conf Cloud: Viewer settings direct from the viewer
- Conf Cloud: Adds custom libraries to more shapes dialog

15-NOV-2020: 13.9.9

- Improves Lucidchart import

13-NOV-2020: 13.9.8

- Improves Lucidchart import

12-NOV-2020: 13.9.7

- Allows null in init load message

11-NOV-2020: 13.9.6

- Uses GitHub for help and FAQ

11-NOV-2020: 13.9.5

- Fixes license check in Confluence Cloud

11-NOV-2020: 13.9.4

- Adds descriptor to JSON load message
- Uses mxGraph 4.2.3 beta 4

10-NOV-2020: 13.9.3

- Internal release to update conf cloud manifest

04-NOV-2020: 13.9.2

- Improves Lucidchart import
- Uses mxGraph 4.2.3 beta 3

04-NOV-2020: 13.9.1

- Improves Lucidchart import

04-NOV-2020: 13.9.0

- Disables Trello in IE11
- Uses mxGraph 4.2.3 beta 2

03-NOV-2020: 13.8.9

- Adds block overflow cell style
- Uses mxGraph 4.2.3 beta 1

30-OCT-2020: 13.8.8

- Fixes for teams integration
- Fixes conf cloud caching issue when 3rd party cookies are disabled

29-OCT-2020: 13.8.7

- Fixes hideDialog order issue on pressing OK
- Fixes native files in Chrome 86

28-OCT-2020: 13.8.6

- Uses mxGraph 4.2.2
- Performance improvements for Jira Cloud
- MS teams integration

27-OCT-2020: 13.8.5

- Fixes possible NPE in Confluence Cloud

27-OCT-2020: 13.8.4

- Performance improvements for Confluence Cloud

26-OCT-2020: 13.8.3

- Gliffy import improvements
- Updates Spanish translations

24-OCT-2020: 13.8.2

- Lucidchart import improvements
- Fixes ungrouping action
- Uses mxGraph 4.2.1 beta 22

20-OCT-2020: 13.8.1

- Lucidchart import improvements
- Gliffy import improvements
- Uses mxGraph 4.2.1 beta 21

14-OCT-2020: 13.8.0

- App Engine configuration changes
- Uses mxGraph 4.2.1 beta 20

08-OCT-2020: 13.7.9

- Fixes script load order for electron

07-OCT-2020: 13.7.8

- Uses mxGraph 4.2.1 beta 19
- Uses MathJax 2.7.9

30-SEP-2020: 13.7.7

- Updates Finnish translations, credit Arttu Ylhävuori, github.com/areee
- Updates native File API tokens
- Lucidchart import improvements
- Fixes gradient issues in FF
- Uses mxGraph 4.2.1 beta 18

28-SEP-2020: 13.7.6

- Updates Azure icons

23-SEP-2020: 13.7.5

- Removes document.write for modern browsers

22-SEP-2020: 13.7.4

- Appends splash dialog libs to configured libs

17-SEP-2020: 13.7.3

- Moves viewer to viewer.diagrams.net
- Improves shape picker position
- Uses mxGraph 4.2.1 beta 17

16-SEP-2020: 13.7.2

- Removes PWA on draw.io domains

14-SEP-2020: 13.7.1

- Improves Gliffy import

14-SEP-2020: 13.7.0

- Adds conf cloud change notifications for collab
- Adds Cmd+Click for blue arrow on macOS
- Uses mxGraph 4.2.1 beta 17

11-SEP-2020: 13.6.10

- Adds Shift+Delete/Backsapce to clear labels
- Uses mxGraph 4.2.1 beta 16

08-SEP-2020: 13.6.9

- Fixes inline images in cell styles

08-SEP-2020: 13.6.8

- Fixes use of unsupported function in IE

08-SEP-2020: 13.6.7

- Normalizes spaces in uncompressed XML output
- Adds context menu for shape search results
- Minor fixes for custom fonts
- Uses mxGraph 4.2.1 beta 15

31-AUG-2020: 13.6.6

- Removes PWA for www.draw.io
- Improves Gliffy import

24-AUG-2020: 13.6.5

- Corrects classpath for CacheFacade

20-AUG-2020: 13.6.4

- Adds Shift/Ctrl+Cursor to move/select pages
- Fixes orientation of screen page formats
- Adds allowZoomOut switch in GraphViewer

18-AUG-2020: 13.6.3

- Handles extra HTML content on Sharepoint
- Fixes origin after folding in viewer

08-AUG-2020: 13.6.2

- Fixes origin for online PDF export

07-AUG-2020: 13.6.1

- Improves Lucidchart importer
- GAE stub fixes

05-AUG-2020: 13.6.0

- Uses mxGraph 4.2.1 beta 14
- Fixes mouse zoom bug

03-AUG-2020: 13.5.9

- Adds pinch to zoom on Windows and Android
- Uses mxGraph 4.2.1 beta 13

31-JUL-2020: 13.5.8

- Fixes tooltip for rotation handle
- Fixes edit as blank in lightbox
- Lucidchart import improvements
- Uses mxGraph 4.2.1 beta 12
- Improves shape picker

30-JUL-2020: 13.5.7

- Faster autosave in Google Drive

30-JUL-2020: 13.5.6

- Uses mxGraph 4.2.1 beta 11
- Performance improvements

29-JUL-2020: 13.5.5

- Uses mxGraph 4.2.1 beta 10
- Enables links in tooltips
- Adds layout JSON action

28-JUL-2020: 13.5.4

- Adds handle for cube and cylinder shape
- Adds metadata to C4 shapes
- Uses mxGraph 4.2.1 beta 9

24-JUL-2020: 13.5.3

- Fixes print in static viewer

24-JUL-2020: 13.5.2

- Fixes viewer links
- Uses mxGraph 4.2.1 beta 8

22-JUL-2020: 13.5.1

- Removes official Azure icons for licensing reasons

22-JUL-2020: 13.5.0

- Restores cloning of rows with blue arrows
- Fixes ungroup for multiple groups
- Uses mxGraph 4.2.1 beta 7

20-JUL-2020: 13.4.9

- Fixes handling of built-in plugins
- Uses mxGraph 4.2.1 beta 6

19-JUL-2020: 13.4.8

- Fixes SHA for inline script

19-JUL-2020: 13.4.7

- Improves target detection for blue arrows
- Improves shape selection on touch devices
- Uses mxGraph 4.2.1 beta 5

17-JUL-2020: 13.4.6

- Simplified Start Screen

16-JUL-2020: 13.4.5

- Fixes ignored right meta key on macOS

15-JUL-2020: 13.4.4

- Fixes shape picker container insert
- Adds diagram styles

14-JUL-2020: 13.4.3

- Adds shape selection on blue arrow click

10-JUL-2020: 13.4.2

- Adds shape selection on double click
- Fixes browser storage dialog

09-JUL-2020: 13.4.1

- Disables eval in HTML embed code

08-JUL-2020: 13.4.0

- Adds border for lightbox export
- Uses mxGraph 4.2.1 beta 4
- Adds Diagram Style panel

04-JUL-2020: 13.3.9

- Fixes ignored autosave for native files

03-JUL-2020: 13.3.8

- Adds experimental file system support

02-JUL-2020: 13.3.7

- Fixes image export with sketch style
- Uses mxGraph 4.2.1 beta 3

01-JUL-2020: 13.3.6

- Fixes transparent background event handling for sketch style
- Moves row for dragging selected table cell
- Fixes inconsistent cursors for tables
- Adds drag and drop for tables
- Uses mxGraph 4.2.1 beta 2
- Adds new basic templates
- Adds rows in ER sidebar
- Adds edit dialog style

25-JUN-2020: 13.3.5

- Fixes minor bugs

24-JUN-2020: 13.3.4

- Fixes minor bugs

24-JUN-2020: 13.3.3

- Fixes move for tables with selected rows
- Fixes flex arrow custom handle preview
- Fixes ignored zoom for step perimeter
- Uses mxGraph 4.2.1 beta 1

24-JUN-2020: 13.3.2

- Fixes sketch style for partial rectangles
- No longer replaces comic style

23-JUN-2020: 13.3.1

- Adds rough style and URL parameter
- Adds support for viewbox in link actions
- Adds hide-pages, viewbox URL parameters
- Uses mxGraph 4.2.1

19-JUN-2020: 13.3.0

- Adds ok for prompt JSON message
- Adds prompt-cancel JSON event
- Uses mxGraph 4.2.0

17-JUN-2020: 13.2.6

- Fixes caching issues for Confluence Cloud

17-JUN-2020: 13.2.5

- Adds embed.diagrams.net for embed mode
- Adds Alt+Shift to toggle child cells
- Fixes toggle selection for groups
- Uses mxGraph 4.2.0 beta 10

13-JUN-2020: 13.2.4

- Uses tables in Misc and ER sidebar
- Adds table size in Arrange panel
- Uses mxGraph 4.2.0 beta 9

11-JUN-2020: 13.2.3

- Uses base for fonts in SVG export
- Fixes font URL trimming

11-JUN-2020: 13.2.2

- Fixes relative fonts in SVG export
- Uses mxGraph 4.2.0 beta 8
- Parsing improvements
- Adds table shape

09-JUN-2020: 13.2.1

- Fixes bug when pasting HTML
- Parsing improvements

09-JUN-2020: 13.2.0

- Fixes WebKitBlobResource on iOS
- Parsing improvements

03-JUN-2020: 13.1.14

- Fixes math font weight for PDF export
- Stability improvements

02-JUN-2020: 13.1.13

- Fixes caching for HTML embed code
- Fixes copy paste from other apps
- Fixes math client-side printing
- Adds math-output URL parameter
- Adds custom table properties
- Uses mxGraph 4.2.0 beta 7

01-JUN-2020: 13.1.12

- Uses mxGraph 4.2.0 beta 6
- Adds tables to Misc sidebar
- Fixes OS clipboard in Firefox

31-MAY-2020: 13.1.11

- Stability improvements and bug fixes

31-MAY-2020: 13.1.10

- Fixes minor bugs for tables

30-MAY-2020: 13.1.9

- Fixes insert tables on touch devices
- Adds Feature-Policy header

29-MAY-2020: 13.1.8

- Removes CSP from GAE config

29-MAY-2020: 13.1.7

- Adds multiple edge labels in CSV import
- Adds experimental support for tables
- Adds Content-Security-Policy header
- Adds link button in library dialog
- Uses mxGraph 4.2.0 beta 5

27-MAY-2020: 13.1.6

- Fixes Gliffy popup issue

27-MAY-2020: 13.1.5

- Adds CSP restrictions

27-MAY-2020: 13.1.4

- Adds dark export option in dark mode
- Adds Euskadi translations
- Uses mxGraph 4.2.0 beta 4
- Adds openLink JSON event
- Adds %id% placeholder

19-MAY-2020: 13.1.3

- Adds merge JSON message

15-MAY-2020: 13.1.2

- Fixes ignored compressXml for empty embed data
- Fixes encoded XML in export JSON event
- Adds XML in JSON load event
- Uses mxGraph 4.2.0 beta 3

12-MAY-2020: 13.1.1

- Adds noExitBtn option for embed mode
- Fixes group selection model
- Uses mxGraph 4.2.0 beta 2

11-MAY-2020: 13.1.0

- Adds support for pointer events in swimlanes
- Adds message in export/template response
- Adds grid to certain custom handles
- Changes to the selection model
- Uses mxGraph 4.2.0 beta 1

07-MAY-2020: 13.0.9

- Adds patch chain validation for real time

05-MAY-2020: 13.0.8

- Adds ctrl+enter for table cells

05-MAY-2020: 13.0.7

- Uses mxGraph 4.1.2 beta 6

03-MAY-2020: 13.0.6

- Disables deltas for OneDrive real time
- Adds token for Google Drive real time

01-MAY-2020: 13.0.5

- Import Extension code updated

30-APR-2020: 13.0.4

- Adds support for vss(x) via clibs parameter
- Fixes inserting file to empty GitLab repo
- Fixes drop vss file into library dialog
- Fixes event handling for iPadOS 13.4.1
- Uses mxGraph 4.1.2 beta 5

29-APR-2020: 13.0.3

- Lucidchart import improvements

27-APR-2020: 13.0.2

- Fixes print output in dark mode
- Preserves pasted text colors
- Adds math-font URL parameter

21-APR-2020: 13.0.1

- Replaces HTML-CSS MathJax output files
- Forces loading MathJS locally in export server/Desktop

21-APR-2020: 13.0.0

- Redirects old desktop versions
- Fixes Edit menu in Chrome app
- Uses SVG for math typesetting
- Uses mxGraph 4.1.2 beta 4

16-APR-2020: 12.9.14

- Renamed jscolor to mxJSColor to avoid clash

15-APR-2020: 12.9.13

- Adds file properties dialog

14-APR-2020: 12.9.12

- Adds edit style to context menu
- Fixes moving cells in stacks

11-APR-2020: 12.9.11

- Fixes edge label default style
- Improves Lucidchart import

08-APR-2020: 12.9.10

- Fixes toggle selection for cells in containers
- Fixes copy paste of cells in Firefox
- Improvements for Lucidchart import
- Uses mxGraph 4.1.2 beta 3

07-APR-2020: 12.9.9

- Uses mxGraph 4.1.2 beta 2
- Removes Google image search
- Removes photos URL parameter
- Fixes pasting links and data URIs
- Fixes Sharepoint sites in OneDrive picker
- Workaround for lightbox in Jira Service desk
- Adds center option for Confluence Cloud viewer
- Replaces Home with Shift+Home, Ctrl+H with Home

05-APR-2020: 12.9.8

- Fixes formatting for pasted text
- Uses mxGraph 4.1.2 beta 1

03-APR-2020: 12.9.7

- Optional size, position and angle panels
- Improvements for Lucidchart import
- Adds combo box for extensions
- Uses mxGraph 4.1.2 beta 1

31-MAR-2020: 12.9.6

- Improvements for Lucidchart import
- Fixes CORS errors for some icons
- Fixes ER shapes for dark mode
- Uses mxGraph 4.1.1

30-MAR-2020: 12.9.5

- Uses mxGraph 4.1.1 beta 16
- Fixes some shapes

29-MAR-2020: 12.9.4

- Adds delegating connector and half circle markers
- Improvements for Lucidchart import
- Enables cloud storage in PWA
- Uses mxGraph 4.1.1 beta 15

25-MAR-2020: 12.9.3

- Fixes update of filename placeholder
- Improvements for Lucidchart import
- Fixes minor issues with layouts

24-MAR-2020: 12.9.2

- Adds filename placeholder
- Fixes Gliffy import

24-MAR-2020: 12.9.1

- Fixes insert HTML table from text panel

23-MAR-2020: 12.9.0

- Fixes encoding errors in stencils.min.js
- Moves resize live preview to front
- Adds Threat Modeling shapes
- Uses mxGraph 4.1.1 beta 14

23-MAR-2020: 12.8.9

- Adds Lucidchart import feedback
- Adds search for all pages
- Adds new polygon shapes

18-MAR-2020: 12.8.8

- Improvements to localStorage migration
- Improvements to AWS shapes

17-MAR-2020: 12.8.7

- Improvements to localStorage migration
- Fixes align and distribute buttons in Arrange panel
- Improvements for Lucidchart import

17-MAR-2020: 12.8.6

- Migrates localStorage from draw.io to diagrams.net
- Fixes XML embedding within PDFs

14-MAR-2020: 12.8.5

- Fixes drag and drop of images to containers in Firefox
- Adds (Alt+)Shift+Tab for outdent/indent while editing
- No longer selects moved cells after undo/redo
- Reduces number of automatic layout runs
- Merges PWA into online app
- Uses mxGraph 4.1.1 beta 13

11-MAR-2020: 12.8.4

- Changes canonical URL to app.diagrams.net

11-MAR-2020: 12.8.3

- Switches to PlantUML build 1.2020.2
- Adds app.diagrams.net support for onedrive and cache responses
- Fixes infinite resizing of viewer in conf cloud
- Uses all layers for drop target selection
- Uses mxGraph 4.1.1 beta 12

09-MAR-2020: 12.8.2

- Fixes Confluence Cloud lightbox and Jira Cloud editor iFrame resize

05-MAR-2020: 12.8.1

- Fixes Confluence Cloud editor iFrame resize

05-MAR-2020: 12.8.0

- Fixes PDF export for multiple page formats
- Fixes PDF export page variable placeholder
- Disables drop shadow in Safari browser
- Changes name to diagrams.net

27-FEB-2020: 12.7.9

- Fixes update of indicator shapes
- Uses mxGraph 4.1.1 beta 11
- Adds diagrams.net banner

26-FEB-2020: 12.7.8

- Adds logging for Confluence cloud errors
- Adds global error dialog

26-FEB-2020: 12.7.7

- Adds error logging for Confluence and Jira cloud

25-FEB-2020: 12.7.6

- Fixes NPE in viewer

25-FEB-2020: 12.7.5

- Fixes removed contentID macro parameter in Confluence cloud
- Adds recursive resize for size change in Arrange panel
- Disables drop target for composite BPMN/UML shapes
- Fixes missing tree move icon

21-FEB-2020: 12.7.4

- Changes Google picker to support team drives
- Fixes crop for imported files

21-FEB-2020: 12.7.3

- Fixes caching of Google fonts

19-FEB-2020: 12.7.2

- Removes HTML 5 application cache
- Adds Alt+Click for sidebar items
- Fixes rounding for page guides
- Adds language support for PWA
- Uses mxGraph 4.1.1 beta 10

17-FEB-2020: 12.7.1

- DropTarget style has precedence over container
- Replaces UML module shape
- Uses mxGraph 4.1.1 beta 9

13-FEB-2020: 12.7.0

- Adds dropTarget style property
- Adds Insert, Advanced, Mermaid

12-FEB-2020: 12.6.8

- Ignores drafts with mode parameter
- Adds Arrange, Layout, Org Chart
- Fixes GitLab authentication
- Uses mxGraph 4.1.1 beta 8

10-FEB-2020: 12.6.7

- Fixes clipping for edge labels in PDF output
- Uses mxGraph 4.1.1 beta 7
- Adds draft states

07-FEB-2020: 12.6.6

- Searches collapsed custom libraries
- Fixes configured default libraries
- Adds tags to configured libraries
- Uses auth header for Google Drive
- Uses mxGraph 4.1.1 beta 6

04-FEB-2020: 12.6.5

- Adds expand style for containers
- Adds warning for fallback labels
- Improvements for CSV import
- Uses mxGraph 4.1.1 beta 5
- Adds new AWS 19 shapes

02-FEB-2020: 12.6.4

- Uses mxGraph 4.1.1 beta 4
- Fixes possible NPE

02-FEB-2020: 12.6.3

- Updates move preview after key events
- Fixes rounding errors for routing
- Uses mxGraph 4.1.1 beta 3

30-JAN-2020: 12.6.2

- Fixes WebKitBlobResource error on iOS
- Adds layers for VSDX export
- Uses mxGraph 4.1.1 beta 2

28-JAN-2020: 12.6.1

- Adds new Veeam shapes

28-JAN-2020: 12.6.0

- Fixes aspect dialog incorrect layers

25-JAN-2020: 12.5.8

- Fixes possible NPE in OneDrive client

25-JAN-2020: 12.5.7

- Fixes access to OneDrive Sharepoint folders
- Creates fewer revisions in Google Drive
- Uses mxGraph 4.1.1 beta 1
- Uses PlantUML 2019.7

22-JAN-2020: 12.5.6

- Fixes offline download for mobile Safari
- Fixes newlines in custom shape editor
- Uses mxGraph 4.1.0 pre 6
- Adds movableLabel style

16-JAN-2020: 12.5.5

- Fixes inconsistent label wrapping
- Uses mxGraph 4.1.0 pre 5

15-JAN-2020: 12.5.4

- Adds PWA install prompt handler

14-JAN-2020: 12.5.3

- Fixes line height in labels
- Uses mxGraph 4.1.0 pre 4

14-JAN-2020: 12.5.2

- Adds option to include XML in PDF
- Replaces app cache with PWA
- Uses mxGraph 4.1.0 pre 3

09-JAN-2020: 12.5.1

- Fixes label offsets in viewer
- Uses mxGraph 4.1.0 pre 2

07-JAN-2020: 12.5.0

- Enables reflow in HTML output
- Fixes text rendering issues
- Uses mxGraph 4.1.0 pre 1
- Adds Galician language

06-JAN-2020: 12.4.9

- Adds support for multiple redirect URLs in token-based-auth 

31-DEC-2019: 12.4.8

- Adds referrer policy header
- Uses mxGraph 4.0.6 beta 16

27-DEC-2019: 12.4.7

- Fixes bug for loading viewer in Confluence Cloud

27-DEC-2019: 12.4.6

- Fixes mobile Safari in desktop mode
- Uses mxGraph 4.0.6 beta 15

27-DEC-2019: 12.4.5

- Uses mxGraph 4.0.6 beta 14
- Fixes possible NPE

27-DEC-2019: 12.4.4

- Fixes proxy URL for Confluence Cloud lightbox
- Fixes possible text wrapping for SVG export
- Adds custom fonts for embedded SVG files
- Pass-through OTF fonts in proxy servlet
- Adds basic diagram templates
- Uses mxGraph 4.0.6 beta 13

17-DEC-2019: 12.4.3

- Uses fast zoom preview on iOS
- Uses mxGraph 4.0.6 beta 12

14-DEC-2019: 12.4.2

- Improves move/resize preview and guides
- Adds pinch to zoom for macOS trackpad
- Disables drop style for swimlanes
- Adds anchor points for corners
- Fixes edge label move preview
- Uses mxGraph 4.0.6 beta 11

12-DEC-2019: 12.4.1

- Fixes initial key state for cloning
- Uses mxGraph 4.0.6 beta 11

12-DEC-2019: 12.4.0

- Adds Catalan translations, credit Pere Orga pere@orga.cat
- Fixes drag cells to library, subtree moving live preview
- Fixes conf cloud gliffy mass import paging bug
- Uses mxGraph 4.0.6 beta 10

09-DEC-2019: 12.3.9

- Fixes NPE in Lucidchart import
- Adds check for empty layerID array in GraphViewer

06-DEC-2019: 12.3.8

- Improves Gliffy import of nested links
- Adds pageID target export selection in Confluence Cloud

05-DEC-2019: 12.3.7

- Fixes handling of clipboard data
- Uses mxGraph 4.0.6 beta 9

03-DEC-2019: 12.3.6

- Moves rotation handle to top right corner
- Adds faster mouse wheel zoom
- Uses mxGraph 4.0.6 beta 8

02-DEC-2019: 12.3.5

- Fixes deletion bugs causing search incorrect results in Jira Cloud
- Fixes text alignment for block elements

02-DEC-2019: 12.3.4

- Fixes Gliffy global text size setting on import
- Fixes settings override with configuration
- Adds custom fonts in print output

28-NOV-2019: 12.3.3

- Adds more ERD shapes

27-NOV-2019: 12.3.2

- Fixes moving and resizing on iOS 13
- Uses mxGraph 4.0.6 beta 8

26-NOV-2019: 12.3.1

- Fixes PDF export with math typesetting

25-NOV-2019: 12.3.0

- Fixes client-side math export in Firefox
- Uses mxGraph 4.0.6 beta 7

21-NOV-2019: 12.2.9

- Fixes autosize for font size and style changes
- Adds PDF extension check in save dialog
- Fixes callback error in embed mode
- Uses mxGraph 4.0.6 beta 6

21-NOV-2019: 12.2.8

- Removes state URL parameter

19-NOV-2019: 12.2.7

- Adds #_CONFIG_ hash property for configuration via URL
- Fixes for external font support
- Adds Extras, draw.io Configuration menu
- Adds Link item in page context menu

13-NOV-2019: 12.2.6

- Reverts Google auth change in 12.2.5

13-NOV-2019: 12.2.5

- Add external font support
- Adds configuration option in local storage

12-NOV-2019: 12.2.4

- Updates IBM stencils
- Fixes Lucidchart import NPE
- Adds pools and lanes in BPMN General library
- Adds client-side SVG and PNG export for math

08-NOV-2019: 12.2.3

- Improves stencils in dark mode
- Removes electron useragent check
- Fixes shifted text labels in PDF with math
- Adds clipping for print output
- Uses mxGraph 4.0.6 beta 5

06-NOV-2019: 12.2.2

- Fixes NPE in pasteCells

06-NOV-2019: 12.2.1

- Fixes slow paste from clipboard in modern browsers
- Improves handling of timeouts in Google Drive
- Fixes event handling on iOS
- Uses mxGraph 4.0.6 beta 4

04-NOV-2019: 12.2.0

- Fixes Google auth after hibernate on Windows
- Fixes print in lightbox for some file types
- Fixes extension for command line export
- Open file asks for new or same window
- Handles trashed state in Google Drive
- Fixes links in labels for SVG export
- Appends tab name for image export

30-OCT-2019: 12.1.9

- Fixes anchor points for certain shape styles
- Adds connection points for document shape
- Fixes handling of SVG with relative size
- Adds custom data import for Lucidchart
- Fixes timing issue in tooltips plugin
- Uses mxGraph 4.0.6 beta 3

28-OCT-2019: 12.1.8

- Fixes ignored height in viewer

25-OCT-2019: 12.1.7

- Minor fix for graph viewer

25-OCT-2019: 12.1.6

- Fixes missing center guides for certain cases
- Fixes lightbox in Trello
- Adds moveCells style
- Uses mxGraph 4.0.6 beta 2

24-OCT-2019: 12.1.5

- Fixes scopes for Google Drive Connector for Confluence Cloud
- Fixes opening libraries from GitLab

23-OCT-2019: 12.1.4

- Fixes scrollbars in Confluence Diagram Viewer
- Fixes embed dialog for Google Shared Drives
- Fixes snap to grid while panning
- Adds paging for GitLab picker
- Uses mxGraph 4.0.6 beta 1

17-OCT-2019: 12.1.3

- Fixes Google Drive auth in Office plugin
- Uses mxGraph 4.0.5

16-OCT-2019: 12.1.2

- Fixes scrollbars in Confluence Cloud and Jira Cloud
- Fixes export of uncompressed XML files to PDF
- Uses mxGraph 4.0.3 beta 7

14-OCT-2019: 12.1.1

- Uses uncompressed XML files in GitLab and GitHub
- Fixes background color for cropped PDF export
- Improves logic for hiding cell moving guides
- Fixes token override in Google Drive viewer
- Adds roundtrip editing for PlantUML images
- Uses mxGraph 4.0.3 beta 6

09-OCT-2019: 12.1.0

- Escape no longer starts editing in Safari and IE 11
- Uses revision IDs for realtime in Google Drive
- Fixes ignored alignment for autosize cells
- Switches to manual sync on cache timeout
- Disables resize live preview for groups
- Fixes test URL parameter for logging
- Adds live preview for moving cells
- Uses mxGraph 4.0.3 beta 5
- Uses quirks mode in IE 9

08-OCT-2019: 12.0.3

- Fixes vertical label position of Data shape
- Handles changed etag in Google Drive after save
- Fixes page reorder for Chrome on Windows 10 in embed mode

02-OCT-2019: 12.0.2

- Updates pako to 1.0.10
- Fixes VSS naming problem
- Restores folder support to Confluence Cloud diagram viewer

01-OCT-2019: 12.0.1

- Adds testing for new pako version

27-SEP-2019: 12.0.0

- Fixes Google auth for multiple users
- Fixes default grid color in dark mode

26-SEP-2019: 11.3.2

- Updates Dell rack server stencils
- Docker image build process improvements

24-SEP-2019: 11.3.1

- Fixes uncompressed XML in SVG
- Fixes offset for ruler

20-SEP-2019: 11.3.0

- Updates Google Cloud Platform stencils
- Gliffy import improvements
- Uses uncompressed XML to fix search in Confluence Cloud
- Adds global compressXml switch
- Fixes print output in dark mode

18-SEP-2019: 11.2.9

- Adds pre and post config JS files
- Fixes page numbers in PDF export
- Adds globalVars to configuration
- Adds DRAWIO_CONFIG variable

08-SEP-2019: 11.2.8

- Fixes bugs in PlantUML for Confluence Cloud

07-SEP-2019: 11.2.7

- Fixes minor bugs

06-SEP-2019: 11.2.6

- Enables ruler by default
- Fixes clipart export in Chrome app
- Adds File, Embed, Google Sheets
- Updated CSS styles

03-SEP-2019: 11.2.5

- Updates MSCAE stencils

29-AUG-2019: 11.2.4

- Fixes segment connector rounding issue
- Updates AWS icons
- Fixes partial concentric ellipse
- Fixes search for custom libraries
- Adds pagecount placeholder

26-AUG-2019: 11.2.3

- Fit window zoom no longer ignores selection
- Updates page IDs in custom links on import
- Updates link hint after selection change
- Updates cell IDs in custom links

23-AUG-2019: 11.2.2

- Add support for loading zipped draw.io and Gliffy formats

20-AUG-2019: 11.2.1

- Fixes possible NPEs

20-AUG-2019: 11.2.0

- Adds ruler and units

19-AUG-2019: 11.1.5

- Fixes ignored background for multipage PDF export
- Adds Lollipop Notation shape in UML section
- Fixes export for global placeholders
- Adds XML declaration for SVG export
- Enables block alignment for text
- Adds allowArrows style

08-AUG-2019: 11.1.4

- Fixes grid NPE in export dialog

08-AUG-2019: 11.1.3

- Adds export option to include grid
- Fixes last Gitlab project used in group
- Adds custom Gitlab parameters
- Fixes compressed XML export option

05-AUG-2019: 11.1.2

- Fixes encoding of embedded PNG data
- Adds custom Gitlab URL option

02-AUG-2019: 11.1.1

- Forces in-place electron users to upgrade page

02-AUG-2019: 11.1.0

- Fixes for Electron 6
- Uses dark theme on desktop by default in dark mode
- Changes Conf Cloud to leave draft attachments empty

01-AUG-2019: 11.0.9

- Fixes window.app undefined check
- Adds desktop command line vsdx export
- Fixes Confluence Cloud custom content direct edit macro replacment

30-JUL-2019: 11.0.8

- Fixes for dialogs when no services available
- Fixes comment window refresh error

26-JUL-2019: 11.0.7

- Fixes for MS Office Add-in

26-JUL-2019: 11.0.6

- Improves error handling for exportToCanvas

24-JUL-2019: 11.0.5

- Adds timeout for Office Add-in server fallback
- Fixes incorrect zTXt header for PNG+XML files
- Fixes rounding of ellipse positions in SVG
- Fixes rounding for fixed connection points
- Uses mxGraph 4.0.3 beta 4

23-JUL-2019: 11.0.4

- Adds timeout handler for Google Drive thumb generation

23-JUL-2019: 11.0.3

- Fixes handling of repository paths in GitLab
- Ignores hidden cells for selectAll
- Uses mxGraph 4.0.3 beta 3

22-JUL-2019: 11.0.2

- Replaces alt+click with shift+click in ChromeOS
- Uses draw.io Viewer app for lightbox mode
- Uses mxGraph 4.0.3 beta 2

20-JUL-2019: 11.0.1

- Fixes math typesetting in legacy embed script
- Fixes encoding issues for GitHub and GitLab
- Fixes file handling issues for GitLab

19-JUL-2019: 11.0.0

- Adds Show more option in splash screen
- Adds uncompressed XML support (beta)
- Adds support for GitLab (beta)
- Uses mxGraph 4.0.3 beta 1

16-JUL-2019: 10.9.8

- Adds Extras, Insert, Freehand
- Moves create shape to insert menu
- Adds named labels for CSV import

15-JUL-2019: 10.9.7

- Adds validation for label border and background colors
- Uses mxGraph 4.0.2

12-JUL-2019: 10.9.6

- Adds local files, Google Drive in Office Add-in

11-JUL-2019: 10.9.5

- Improves error handling for saving files
- Fixes desktop startup

11-JUL-2019: 10.9.4

- Adds named styles for CSV import

10-JUL-2019: 10.9.3

- Fixes trailing newline in plain text labels
- Allows inserting multiple lists from text
- Adds treeMoving style for moving subtrees
- Fixes table cell align and color editing
- Uses mxGraph 4.0.2 beta 4

09-JUL-2019: 10.9.2

- Fixes reset of handles after remote style changes
- Fixes background color for rotated text editing
- Improves command line export in Electron
- Uses mxGraph 4.0.2 beta 3

09-JUL-2019: 10.9.1

- Fixes NPE in Electron and ChromeOS apps

08-JUL-2019: 10.9.0

- Fixes custom link execution for visibility changes
- Fixes format panel CSS in Firefox for Linux
- Fixes inconsistent text editing alignment
- Uses mxGraph 4.0.2 beta 2

04-JUL-2019: 10.8.9

- Uses mxGraph 4.0.2 beta 1
- Adds fill-/strokealpha for stencils
- Setting autosave to true triggers save

03-JUL-2019: 10.8.8

- Adds timer to check for unsaved changes
- Fixes lightbox height for Confluence Cloud viewer

02-JUL-2019: 10.8.7

- Fixes PlantUML connect add attachment call

02-JUL-2019: 10.8.6

- Fixes ignored properties for child cells in CSV
- Logs file idle states
- Uses mxGraph 4.0.1

02-JUL-2019: 10.8.5

- Removed RPC calls in Confluence Connect
- Adds support for digrams in Confluence Cloud comments
- Fixes handling of move in rounded paths
- Uses mxGraph 4.0.1 beta 11

29-JUN-2019: 10.8.4

- No longer selects parent after delete of child
- Updates in-place editor after window resize
- Uses mxGraph 4.0.1 beta 10

28-JUN-2019: 10.8.3

- Embed diagrams from URL in Jira Cloud
- Makes custom fonts persistent
- Uses mxGraph 4.0.1 beta 9

27-JUN-2019: 10.8.2

- Fixes handling of special font names
- Shows warning if file copy is loaded
- Smaller sidebar entries
- Adds tags plugin

26-JUN-2019: 10.8.1

- Fixed preview image aspect ratio in Confluence Cloud
- Increases preview image export quality in Confluence Cloud
- Uses default picker for loading files in IE11

21-JUN-2019: 10.8.0

- Removes unsafe-eval CSP for desktop app
- Fixes plugins in desktop app

19-JUN-2019: 10.7.9

- Ignores refs and manage columns in CSV example

19-JUN-2019: 10.7.8

- Fixes double click handling with pen and touch on Windows
- Fixes ignored transparent background in viewer
- Adds optional custom labels for IC pins
- Uses mxGraph 4.0.1 beta 8
- Fixes UI inconsistencies

12-JUN-2019: 10.7.7

- Adds validation of color picker input to fix XSS vulnerability

11-JUN-2019: 10.7.6

- Removes fallback to print dialog if offline in Electron
- Fixes broken link if Google Drive is not loading

04-JUN-2019: 10.7.5

- Fixes Math rendering in graph viewer

03-JUN-2019: 10.7.4

- Adds MathJax codebase

31-MAY-2019: 10.7.3

- Enabling saving diagrams when the associated custom content is deleted or not found

31-MAY-2019: 10.7.2

- Fixes loading custom plugins in embed mode with configure URL parameter
- Fixes math rendering with no scrollbars

29-MAY-2019: 10.7.1

- Adds JSON string for layouts in CSV import
- Fixes zoomed position for data store label
- Fixes changing of link colors in Firefox
- Fixes limitations for Google docs add-on

28-MAY-2019: 10.7.0

- Replaces octet-stream with vnd.jgraph.mxfile in Drive
- Fixes opaque background for server-side PNG export
- Fixes line jump rendering with child edge labels
- Fixes loading of large images via Insert dialog
- Adds support to show/hide layers via tags
- Adds edge flow to animation plugin
- Fixes saving of OneDrive libraries

25-MAY-2019: 10.6.9

- Fixes missing VSDX import in stealth mode

22-MAY-2019: 10.6.8

- Add VMware stencils
- VSDX import improvements

07-MAY-2019: 10.6.7

- Fixes first input element not firing change event

02-MAY-2019: 10.6.6

- Adds MS Active Directory stencils
- Improvements to GCP stencils
- Adds Confluence Cloud translations

24-APR-2019: 10.6.5

- Fixes style variation logic in VSDX import

24-APR-2019: 10.6.4

- Adds VSDX import improvements
- Adds new IBM stencils and template
- Add Cumulus stencils

16-APR-2019: 10.6.3

- Fixes handling of Infinity in geometries and points
- Uses mxGraph 4.0.1 beta 7

15-APR-2019: 10.6.2

- Adds generic layout menu item

10-APR-2019: 10.6.1

- Fixes issues with CSV import
- Adds pointerEvents style for stencils and AWS groups
- Uses new language locale API in Confluence cloud
- Uses mxGraph 4.0.1 beta 6

01-APR-2019: 10.6.0

- Adds configuration section for Confluence for cloud
- Free GDrive/OneDrive connector for Confluence cloud
- Adds show with draw.io option in OneDrive connector
- Improves handling of files with no extensions in GDrive connector

27-MAR-2019: 10.5.9

- Change to connection points and arrows trigger autosave
- Adds style options for edge labels in Arrange panel
- Fixes scroll during Alt+mouse wheel in Chrome
- Uses mxGraph 4.0.1 beta 5

26-MAR-2019: 10.5.8

- Hides icon in Confluence cloud for resolved comments
- Uses mxGraph 4.0.1 beta 4

26-MAR-2019: 10.5.7

- Adds comments in Confluence cloud viewer
- Improves Google file not found dialog

25-MAR-2019: 10.5.6

- Adds file ID and mime type in GDriveConnector macro editor
- Removes convert warning, cache alive check in lightbox
- Improves handling of redirects and invalid responses
- Removes connection arrows for edge labels

25-MAR-2019: 10.5.5

- Improvements for Gliffy import
- Uses mxGraph 4.0.1 beta 3

22-MAR-2019: 10.5.4

- Adds custom libraries for Confluence cloud

21-MAR-2019: 10.5.3

- Fixes timing issue in graph viewer
- Fixes date formats in VSDX import
- Fixes possible cropping for PDF export

20-MAR-2019: 10.5.2

- Fixes bug for comments in Confluence cloud

19-MAR-2019: 10.5.1

- Adds comments for Confluence cloud

18-MAR-2019: 10.5.0

- Uses .drawio extension in desktop app
- Removes spacers for rack layouts
- Uses mxGraph 4.0.1 beta 2

17-MAR-2019: 10.4.9

- Adds comments for Google Drive (beta)

15-MAR-2019: 10.4.8

- Adds autosaveDelay and defaultEdgeLength to drawio-config

15-MAR-2019: 10.4.7

- Realtime warning can be permanently closed
- Ignores read-only files in auto conversion
- Adds new issue viewer for Jira cloud
- Fixes Atlas theme in Safari

14-MAR-2019: 10.4.6

- Adds warning dialog for failed autosave after 10 minutes
- Improves error logging in Google Drive client
- Improves error handling for auto conversion
- Fixes shadow for PNG export in dark mode

13-MAR-2019: 10.4.5

- Fixes bug in Confluence cloud
- Fixes error handling
- Improves logging

12-MAR-2019: 10.4.4

- Adds blob.core.windows.net to known CORS urls
- Fixes loading of Visio templates via proxy

12-MAR-2019: 10.4.3

- Uses mxGraph 4.0.1 beta 1

11-MAR-2019: 10.4.2

- Adds logging

09-MAR-2019: 10.4.1

- Uses mxGraph 3.9.13 beta 18

09-MAR-2019: 10.4.0

- Handles timeouts in realtime convert tool
- Fixes bugs for older versions of IE

08-MAR-2019: 10.3.9

- Adds warning for Google Drive legacy files
- Adds language menu in Atlas theme

08-MAR-2019: 10.3.8

- Fixes possible NPEs
- Fixes possible clipping bugs
- Uses mxGraph 3.9.13 beta 17

08-MAR-2019: 10.3.7

- Creates revision for every autosave in Google Drive
- Fixes new Confluence editor issues

07-MAR-2019: 10.3.6

- Improves error handling for Google Drive
- Adds realtime file conversion tool

05-MAR-2019: 10.3.5

- Reduces possible number 403 errors in Drive

05-MAR-2019: 10.3.4

- Fixes possible NPE in plugin error handler

05-MAR-2019: 10.3.3

- Changes default extension to .drawio
- Updated UI styles

04-MAR-2019: 10.3.2

- Fixes Confluence Cloud Direct Edit Saving

02-MAR-2019: 10.3.1

- Fixes loading spinner for Trello
- Uses magic numbers for templates

01-MAR-2019: 10.3.0

- Adds validation step for Google file saving
- Adds last saved delay to status bar
- Adds page-id URL parameter

28-FEB-2019: 10.2.9

- Moves Confluence Cloud viewer settings to format panel
- Allows all content from docs.google.com via proxy
- Adds menu for moving selection to other layers
- Adds simple viewer option for Confluence Cloud
- Fixes bad CRC in PNG exports

25-FEB-2019: 10.2.8

- Fixes import of multiple pages into empty file
- Fixes macro shortcut handling in Confluence cloud

25-FEB-2019: 10.2.7

- Adds orthogonal loop, no jump property for edges
- Fixes default stylesheet for export in dark mode
- Fixes events for transparent swimlane titles
- Uses mxGraph 3.9.13 beta 16

22-FEB-2019: 10.2.6

- Adds page ID export for Confluence Cloud
- Fixes colored AWS19 icons library ID

20-FEB-2019: 10.2.5

- Adds fallback for unavailable sharing in Google Drive
- Fixes possible timing issues with open URL parameter
- Fixes link handling in legacy embedded diagrams

18-FEB-2019: 10.2.4

- Adds Microsoft Office add-ins
- Adds open URL parameter

15-FEB-2019: 10.2.3

- Adds interactive help for file name input fields
- Fixes handling of revisions for PNG files in Drive
- Adds shift click for Drive file details on app icon
- Adds Embed, Live image for public PNG files on Drive and GitHub
- Uses mxGraph 3.9.13 beta 15

11-FEB-2019: 10.2.2

- Adds refresh, new window in Confluence Cloud connector toolbars
- App icon links to file preview for Google Drive

09-FEB-2019: 10.2.1

- Fixes loading of configuration for confluence cloud
- Adds template-filename URL parameter for binary templates
- Fixes browser refresh for converted lightbox files

08-FEB-2019: 10.2.0

- Adds vsd(x) and gliffy support in GDrive Connector

07-FEB-2019: 10.1.9

- Renames load event for configuration to configure

05-FEB-2019: 10.1.8

- Fixes property focus after save
- Updated AWS 2019 icon colors

04-FEB-2019: 10.1.7

- Adds auto-resolution for Google add-ons
- Fixes minimum height for empty viewer
- Fixes shadow in SVG export/embed
- Fixes possible 404 in GitHub

29-JAN-2019: 10.1.6

- Removes alert for link errors
- Removes sync button

28-JAN-2019: 10.1.5

- Uses mxGraph 3.9.13 beta 14

25-JAN-2019: 10.1.4

- Adds download button in save dialog
- Adds shift to ignore current style
- Uses mxGraph 3.9.13 beta 13

21-JAN-2019: 10.1.3

- Fixes possible NPEs
- Uses mxGraph 3.9.13 beta 12

18-JAN-2019: 10.1.2

- Adds debug output

18-JAN-2019: 10.1.1

- Fixes possible NPEs

17-JAN-2019: 10.1.0

- Adds auth token refresh for OneDrive

16-JAN-2019: 10.0.43

- Fixes possible NPE in hashValue

16-JAN-2019: 10.0.42

- Fixes handling of invalid files
- Uses mxGraph 3.9.13 beta 11

15-JAN-2019: 10.0.41

- Adds ignored page size in checksum

15-JAN-2019: 10.0.40

- Fixes possible use of undefined variable

15-JAN-2019: 10.0.39

- Fixes shadow change check

15-JAN-2019: 10.0.38

- Fixes inconsistency in collaborative editing
- Handles possible call stack errors
- Uses mxGraph 3.9.13 beta 10
- Adds IC shapes

14-JAN-2019: 10.0.37

- Improves error logging

14-JAN-2019: 10.0.36

- Uses mxGraph 3.9.13 beta 9
- Adds debug output

13-JAN-2019: 10.0.35

- Fixes device option in splash
- Adds Insert Template

12-JAN-2019: 10.0.34

- Fixes save dialog icon CSS flow

12-JAN-2019: 10.0.33

- Adds support for strikeThrough style (beta)
- Adds dark opacity styles for note and cube
- Enables device storage on iOS

11-JAN-2019: 10.0.32

- Adds page view in format panel for read-only files
- Minor fixes for collaborative editing
- Uses mxGraph 3.9.13 beta 8

11-JAN-2019: 10.0.31

- Fixes critical bug for cell lookups
- Ignores page size in checksum
- Uses mxGraph 3.9.13 beta 7

10-JAN-2019: 10.0.30

- Ignores page width in checksum
- Uses mxGraph 3.9.13 beta 6

10-JAN-2019: 10.0.29

- Improved error handling for CSV import
- Uses mxGraph 3.9.13 beta 5

10-JAN-2019: 10.0.28

- Uses mxGraph 3.9.13 beta 4
- Fixes root folder dialog

10-JAN-2019: 10.0.27

- Ignores mxObjectId in diffsync

09-JAN-2019: 10.0.26

- Uses mxGraph 3.9.13 beta 3

08-JAN-2019: 10.0.25

- Ignores previous attribute in checksum

08-JAN-2019: 10.0.24

- Fixes critical bug with collaborative editing

08-JAN-2019: 10.0.23

- Adds debug output for checksum errors
- Adds custom properties in diffsync
- Fixes possible ReferenceError
- Fixes for Jira cloud plugin

05-JAN-2019: 10.0.22

- Adds initial change check in sync protocol
- Ignores numeric JS errors in checksum
- Fixes pending sync on inactive window

04-JAN-2019: 10.0.21

- Adds debug output for checksum errors

04-JAN-2019: 10.0.20

- Adds debug output for checksum errors

04-JAN-2019: 10.0.19

- Adds debug output for checksum errors

04-JAN-2019: 10.0.18

- Fixes checksum errors in lightbox mode

03-JAN-2019: 10.0.17

- Fixes sync for PNG files in desktop app
- Fixes handling of auth error in Drive
- Uses main app ID for Drive viewer
- Fixes clipping in Google add-ons
- Uses mxGraph 3.9.13 beta 2
- Fixes redo button state
- Removes debug output

02-JAN-2019: 10.0.16

- Handles shadow change during catchup

01-JAN-2019: 10.0.15

- Fixes error logging

01-JAN-2019: 10.0.14

- Fixes possible timing issue

29-DEC-2018: 10.0.13

- Improved error handling for collaborative editing

28-DEC-2018: 10.0.12

- Fixes possible select of deleted page

28-DEC-2018: 10.0.11

- Adds parameter check for connect apps

28-DEC-2018: 10.0.10

- Fixes for error logging

27-DEC-2018: 10.0.9

- Fixes sync for unsaved files in Desktop
- Adds Google Slides to Embed menu
- Ignores page names in checksum
- Fixes handling of lost pages

21-DEC-2018: 10.0.8

- Ignores undefined page names in diffsync

21-DEC-2018: 10.0.7

- Fixes checksum handling in desktop
- Uses mxGraph 3.9.13 beta 1

20-DEC-2018: 10.0.6

- Performance fixes for collaborative editing
- Fixes collaboration conflict errors

19-DEC-2018: 10.0.5

- Fixes for collaborative editing

19-DEC-2018: 10.0.4

- Fixes for night mode and responsive UI

18-DEC-2018: 10.0.3

- Disables sync in Chrome OS
- Fixes CSS issues

17-DEC-2018: 10.0.2

- Adds inactivity timeout for collaborative editing

17-DEC-2018: 10.0.1

- Fixes Google auth for OneDrive files

17-DEC-2018: 10.0.0

- Enables collaborative editing
- Hides footer

16-DEC-2018: 9.6.6

- Adds darker stroke colors for metro palettes

15-DEC-2018: 9.6.5

- Fixes for collaborative editing (beta)

14-DEC-2018: 9.6.4

- Uses mxGraph 3.9.12

13-DEC-2018: 9.6.3

- Uses mxGraph 3.9.11 beta 10

12-DEC-2018: 9.6.2

- Uses mxGraph 3.9.11 beta 9

11-DEC-2018: 9.6.1

- Adds source-/targetPerimeterSpacing to default style
- Fixes font style button states in Edge, FF and IE
- Removes Google realtime API
- Fixes focus handling on iOS

10-DEC-2018: 9.6.0

- Fixes for collaborative editing (beta)
- Fixes minor bugs

06-DEC-2018: 9.5.9

- Uses PlantUML build 4

04-DEC-2018: 9.5.8

- Fixes focus handling in format panel

04-DEC-2018: 9.5.7

- Removes dummy href attributes

04-DEC-2018: 9.5.6

- Uses mxGraph 3.9.11 beta 8

03-DEC-2018: 9.5.5

- Adds unsaved status for new files in Desktop
- Fixes minor CSS issues

03-DEC-2018: 9.5.4

- Fixes possible NPE in Desktop

03-DEC-2018: 9.5.3

- Uses mxGraph 3.9.11 beta 7

02-DEC-2018: 9.5.2

- Fixes caching issue with GitHub file sync

30-NOV-2018: 9.5.1

- Fixes Gliffy import alignment issue
- Fixes properties panel focus issue

30-NOV-2018: 9.5.0

- Fixes tolerance for distance guides
- Adds collaborative editing (beta)
- Restores libraries after login
- Uses mxGraph 3.9.11 beta 6

28-NOV-2018: 9.4.7

- Adds multiple page PDF export option
- GraphML import improvements
- Adds addition IBM cloud stencils
- Adds Data Flow Diagram stencils

21-NOV-2018: 9.4.6

- Fixes corrupted chars in XML from JSON backup import

20-NOV-2018: 9.4.5

- Adds 2018 AWS icons
- Uses mxGraph 3.9.11 beta 5

16-NOV-2018: 9.4.4

- Adds GraphML import

15-NOV-2018: 9.4.3

- Internal release

12-NOV-2018: 9.4.2

- Fixes undoable edit when expanding Advanced sidebar
- Fixes handling of initial default background color
- Fixes shadow in client-side image and SVG export
- Adds realtime import and export in test mode
- Adds refresh menu item for all file types
- Removes static page text in lightbox mode
- Fixes keyboard shortcut for refresh file
- Restores view state after refresh file
- Adds distance guides

09-NOV-2018: 9.4.1

- Fixes links to revision history from status
- Hides static page text in embed mode
- Enables import from device on iOS

08-NOV-2018: 9.4.0

- Disables Google realtime on 11/12/2018 at 9:00am (UTC)

06-NOV-2018: 9.3.4

- Improves sanity check for Google Drive files
- Uses mxGraph 3.9.11 beta 4

02-NOV-2018: 9.3.2

- Adds sanity check for Google Drive files

26-OCT-2018: 9.3.1

- Adds current page index to JSON protocol
- Adds viewBox, target _top for SVG export
- Fixes selectDescendants keystroke
- Minor fixes for dark mode styles
- Uses mxGraph 3.9.11 beta 2

22-OCT-2018: 9.3.0

- Adds write permission in OneDrive client
- Adds link option in SVG export dialog
- Adds link to save status message

19-OCT-2018: 9.2.9

- Adds OneDrive for Business and Sharepoint integration

19-OCT-2018: 9.2.8

- Improves various Gliffy import issues
- Fixes inverted MovePage state after decoding

15-OCT-2018: 9.2.7

- Fixes local templates path

14-OCT-2018: 9.2.6

- Fixes possible NPE during delayed loading of plugins

14-OCT-2018: 9.2.5

- Adds customPresetColors, override config option
- Adds enabledLibraries, libraries config option
- Adds templateFile config option
- Uses mxGraph 3.9.11 beta 1

11-OCT-2018: 9.2.4

- Adds font, customFonts and -ColorSchemes config options
- Adds open page in Confluence Cloud lightbox toolbar
- Fixes property editing in minimal UI

08-OCT-2018: 9.2.3

- Adds shape properties panel (beta)
- Uses mxGraph 3.9.10

05-OCT-2018: 9.2.2

- Embed mode loads all supported formats
- Uses mxGraph 3.9.10 beta 2
- Adds vars URL parameter

03-OCT-2018: 9.2.1

- Ignores mode in Google Drive fallback

03-OCT-2018: 9.2.0

- Configurable ui and plugins for Confluence Cloud 
- Fixes fallback for public Google Drive URLs
- Adds configure=1 URL parameter and protocol
- Ctrl+Shift connect sets source constraint
- Removes #C configuration switch

21-SEP-2018: 9.1.8

- Fixes minor constraint check bug for new connections
- Uses mxGraph 3.9.10 beta 1

21-SEP-2018: 9.1.7

- Adds flow plugin
- Uses mxGraph 3.9.9
- Adds metro color palette
- Fixes VSDX export in IE11
- Adds plugins menu in embed mode

18-SEP-2018: 9.1.6

- Updates connection arrows and handle colors

17-SEP-2018: 9.1.5

- Fixes folder picker callback

17-SEP-2018: 9.1.4

- Adds root option before Google folder dialog
- Adds arrows=new URL parameter for feedback
- Adds data-attributes in svgdata plugin

12-SEP-2018: 9.1.3

- Improvements to GCP stencils
- Fixes Gliffy import of UML frames

31-AUG-2018: 9.1.2

- Allows empty referer for proxy requests

30-AUG-2018: 9.1.1

- Simpler provided/required interface shapes
- Fixes comic style for filled swimlanes
- Fixes preview for general sidebar
- Uses mxGraph 3.9.9 beta 9

29-AUG-2018: 9.1.0

- Adds content inspection in proxy server
- Uses minimal UI for small screens

27-AUG-2018: 9.0.9

- Uses mxGraph 3.9.9 beta 8
- Adds new color palette
- GCP stencil updates

23-AUG-2018: 9.0.8

- Fixes XSS vulnerability in Trello Power-Up
- Fixes GCP service cards icon set

22-AUG-2018: 9.0.7

- Add expanded product and service cards to GCP icon set

17-AUG-2018: 9.0.6

- Changes to GCP icon set

14-AUG-2018: 9.0.5

- Fixes NPE in VSDX export
- Improves vsdx import layer support
- Improves GraphML import support

10-AUG-2018: 9.0.4

- Add filter to proxy servlet

01-AUG-2018: 9.0.2

- Adds missing rounded format option
- Fixes tolerance for connect arrows
- Uses mxGraph 3.9.9 beta 7
- Fixes docker build

31-JUL-2018: 9.0.1

- Fixes insert to GitHub with URL parameter

28-JUL-2018: 9.0.0

- Disables persisted default styles
- Fixes inserting files to GitHub

26-JUL-2018: 8.9.9

- Adds support for hierarchies in CSV import
- Updates colors for Atlas theme
- Uses mxGraph 3.9.9 beta 6

23-JUL-2018: 8.9.8

- Changes PlantUML autosize parameter to default to true
- Improves error handling, imports
- Uses mxGraph 3.9.9 beta 5

18-JUL-2018: 8.9.7

- Uses new PlantUML version

18-JUL-2018: 8.9.6

- Fixes vertical offset for text editing with small fonts
- Fixes repaint of placeholders in text for custom shapes
- Fixes lost cursor after certain keyboard shortcuts
- Fixes clipboard state after cut keyboard shortcut
- Fixes minor issues for Confluence Cloud
- Adds draft state for Trello attachments
- Uses mxGraph 3.9.9 beta 4

13-JUL-2018: 8.9.5

- Fixes clipping for MathJax print preview in Safari
- Uses mxGraph 3.9.9 beta 3
- Fixes minor memory leak

11-JUL-2018: 8.9.4

- Removes foreignObjects for MathJax
- Fixes adding rows to tables
- Uses mxGraph 3.9.9 beta 2

09-JUL-2018: 8.9.3

- Fixes rounded style option for containers
- Moves webcola plugin to layout menu
- Fixes minor errors in print preview
- Uses mxGraph 3.9.9 beta 1

06-JUL-2018: 8.9.2

- Enables tags dialog in read-only files
- Fixes cell detection in fast preview
- Fixes improved shape search index
- Fixes undo for webcola plugin

04-JUL-2018: 8.9.1

- Fixes initial scroll offset in minimal UI
- Fixes possible invalid height for viewer

04-JUL-2018: 8.9.0

- Faster preview in Chrome, Firefox and Edge (beta)
- Adds responsive menubar in minimal UI
- Add tickets and webcola plugins
- Adds #C configuration switch
- Uses mxGraph 3.9.8 beta 1

26-JUN-2018: 8.8.7

- Fixes custom content view in Confluence Cloud
- Disables click sidebar collapse
- Uses inline window for text plugin
- Adds showStartScreen in Chrome App
- Disables plantUML when offline

21-JUN-2018: 8.8.6

- Improves detection of gliffy macro in conf cloud
- Fixes inconsistent menus

21-JUN-2018: 8.8.5

- Fixes delete property in data dialog
- Improvements for Lucidchart import
- Improvements for minimal UI
- Uses mxGraph 3.9.7 beta 4

20-JUN-2018: 8.8.4

- Fixes plugins for minimal UI
- Fixes relative links in Confluence Cloud

19-JUN-2018: 8.8.3

- Fixes typo for Allied Telesis

19-JUN-2018: 8.8.2

- Adds Allied Telesys sidebar
- Removes clipart from default cache
- Adds copy/paste size in Arrange panel
- Adds support for tags in link actions
- Adds support for custom link actions

14-JUN-2018: 8.8.1

- Adds detection of object type in link action

14-JUN-2018: 8.8.0

- Fixes label link detection cases in Firefox

13-JUN-2018: 8.7.10

- Fixes possible NPE in Electron

13-JUN-2018: 8.7.9

- Fixes possible NPE

13-JUN-2018: 8.7.8

- Fixes scroll wheel zoom while panning
- Fixes print of white text in Chrome
- Adds cell ID in metadata dialog
- Adds support for custom links
- Uses mxGraph 3.9.7 beta 3

11-JUN-2018: 8.7.7

- Fixes editing nested links in Firefox after Gliffy import [7098]

06-JUN-2018: 8.7.6

- Fixes proxy servlet response headers
- Ignores invalid Iconfinder response
- Adds email in Google user info

05-JUN-2018: 8.7.5

- Uses mxGraph 3.9.7 beta 2
- Uses mxgraph-core 3.9.6

03-JUN-2018: 8.7.4

- Fixes possible SSRF in proxy servlet

02-JUN-2018: 8.7.3

- Fixes overridden layout menu
- Uses mxGraph 3.9.7 beta 1

01-JUN-2018: 8.7.2

- Changes to Confluence Cloud image servlet

01-JUN-2018: 8.7.1

- Moves import CSV to insert menu

31-MAY-2018: 8.7.0

- Adds editableCssRules style
- Uses mxGraph 3.9.6

29-MAY-2018: 8.6.9

- Adds enableCustomLibraries switch
- Fixes math rendering timing bug
- Uses mxGraph 3.9.6 beta 1
- Uses MathJax 2.7.4

24-MAY-2018: 8.6.8

- Fixes math typesetting in PDF export
- Fixes NPE in minimal UI
- Uses mxGraph 3.9.5

23-MAY-2018: 8.6.7

- Adds #S parameter for loading from CSV source
- Adds support for VSD files in cloud storage
- Adds Lucidchart support for #U parameter

22-MAY-2018: 8.6.6

- Fixes enabled state for some menu items
- Moves SQL and PlantUML to insert menu
- Fixes loading libraries from OneDrive
- Adds reverse edge to context menu

17-MAY-2018: 8.6.5

- Fixes timing error for export in Safari
- Fixes change UI font size bug
- Uses mxGraph 3.9.4
- Fixes minor bugs

14-MAY-2018: 8.6.4

- Improvements to electron build

11-MAY-2018: 8.6.3

- Adds F5 icons plugin

09-MAY-2018: 8.6.2

- Replaces domain apex redirect

08-MAY-2018: 8.6.1

- Fixes links for transparent groups in viewer
- Fixes minimal UI for small screens
- Uses mxGraph 3.9.4 beta 6

06-MAY-2018: 8.6.0

- Fixes outline connect for BPMN shapes
- Adds opacity to default style
- Uses mxGraph 3.9.4 beta 5
- Adds minimal UI

01-MAY-2018: 8.5.15

- Fixes showing device when no other storage options available
- Fixes indexing with multiple diagrams on page in Confluence Cloud

30-APR-2018: 8.5.14

- Fixes XSS vulnerability in Trello Power-Up

27-APR-2018: 8.5.13

- Adds infographic library
- Adds device option in export dialogs

20-APR-2018: 8.5.12

- Adds test case for Google auth errors

20-APR-2018: 8.5.11

- Fixes plantuml insert
- Fixes PDF export size
- Uses mxGraph 3.9.4 beta 4

17-APR-2018: 8.5.10

- Disables autosave for realtime connect errors
- Fixes format panel background in dark theme
- Adds click on export option labels
- Adds namespace for CSV import
- Changes help links in dialogs

10-APR-2018: 8.5.9

- Reverts macro inconsistency check for Confluence Cloud

08-APR-2018: 8.5.8

- Adds logging for disconnect error

07-APR-2018: 8.5.7

- Improved handling for Google disconnect error

05-APR-2018: 8.5.6

- Revert export server for Desktop version to phantom until full fix found

05-APR-2018: 8.5.5

- Changes Plant export URL
- Adds JS redirect from http to https

05-APR-2018: 8.5.4

- Works around Chrome 65 bug with echo downloads

04-APR-2018: 8.5.3

- Gliffy import improvement
- Fix for anchor download issue in Chrome 65

31-MAR-2018: 8.5.2

- Add mass gliffy import in Confluence Cloud
- Fixes importing Gliffy sitemap stencils
- Adds workaround for Confluence Cloud saveMacro problem

28-MAR-2018: 8.5.1

- Confluence Cloud integration improvements

23-MAR-2018: 8.5.0

- Adds shapes in Basic sidebar

21-MAR-2018: 8.4.8

- Gliffy import improvements
- Adds Cisco Safe Stencils
- Adds top, left for CSV import
- Uses mxGraph 3.9.4 beta 3

15-MAR-2018: 8.4.7

- Improves Gliffy import

13-MAR-2018: 8.4.6

- Fixes adding of clones with new index

13-MAR-2018: 8.4.5

- Fixes Confluence Cloud page includes
- Removes default empty layer in Gliffy import

12-MAR-2018: 8.4.4

- Uses mxGraph 3.9.4 beta 2

11-MAR-2018: 8.4.3

- Adds Alt+Shift+L keyboard shortcut to edit links

09-MAR-2018: 8.4.2

- Fixes checkboxes in format panel
- Uses mxGraph 3.9.4 beta 1
- Enables links and tooltips in locked layers

09-MAR-2018: 8.4.1

- Adds Alt+Shift+T keyboard shortcut to edit tooltips
- Minor improvements for Gliffy import

08-MAR-2018: 8.4.0

- Uses mxGraph 3.9.2 beta 11

07-MAR-2018: 8.3.7

- Improvements for Gliffy import

05-MAR-2018: 8.3.6

- Use mxGraph 3.9.3 for post is not a function fix

01-MAR-2018: 8.3.5

- Adds recent and search to Confluence Cloud splash dialog
- Adds iconfinder to URLs with CORS
- Adds support for cross-origin images
- Fixes bug for vssx shapes with double quotes in labels
- Add line-height CSS to simulate quirks box sizing [5289]

27-FEB-2018: 8.3.4

- Fixes license debug in Confluence Cloud

27-FEB-2108: 8.3.3

- Fixes iconfinder 451 return

25-FEB-2018: 8.3.2

- Remove Google Drive login response checks, caused issues

20-FEB-2018: 8.3.1

- Internal revert to 8.2.3 minus Confluence Cloud changes

19-FEB-2018: 8.3.0

- Internal revert to 8.2.2 minus Confluence Cloud changes

18-FEB-2018: 8.2.3

- Adds optional parameter

17-FEB-2018: 8.2.2

- Fixes inconsistency in child change codec
- Allows for 0.5px steps when moving cells
- Uses mxGraph 3.9.2 beta 10

16-FEB-2018: 8.2.1

- Adds shape group in Misc section, outline connect
- Fixes line wrapping, hides icons while editing
- Preserves library order for clibs parameter
- Uses mxGraph 3.9.2 beta 9

16-FEB-2018: 8.2.0

- Confluence Cloud attachment fixes

16-FEB-2018: 8.1.9

- Fixes Google API load timing issues
- Fixes attachment write calls for IE and Edge in Confluence Cloud

14-FEB-2018: 8.1.8

- Fixes saving diagram to Confluence Cloud draft pages

14-FEB-2018: 8.1.7

- Fixes custom style path for atlas.css

14-FEB-2018: 8.1.6

- Fixes block resize in graph viewer
- Disables fix for block alignment
- Uses mxGraph 3.9.2 beta 8

13-FEB-2018: 8.1.5

- Uses mxGraph 3.9.2 beta 7

12-FEB-2018: 8.1.4

- Fixes sidebar tooltip

12-FEB-2018: 8.1.3

- Fixes dynamic loading for VSDX export
- Fixes possible NPEs in VSDX export

12-FEB-2018: 8.1.2

- Adds resize option in image dialog
- Uses mxGraph 3.9.2 beta 6

11-FEB-2018: 8.1.1

- Handles markup is invalid XML

11-FEB-2018: 8.1.0

- Adds VSDX/VSSX import/export for Electron
- Fixes access denied for Dropbox import
- Fixes escaping in SVG alternate text
- Uses mxGraph 3.9.2 beta 5

09-FEB-2018: 8.0.9

- Fixes block alignment for in-place editor
- Uses mxGraph 3.9.2 beta 4

08-FEB-2018: 8.0.8

- Fixes plantUML SVG insert in IE11
- Adds cors URL parameter

06-FEB-2018: 8.0.7

- Adds recent/search in Confluence connect
- Fixes various bugs

02-FEB-2018: 8.0.6

- Fixes Ctrl+connect of orthogonal edges
- Fixes CSS for metadata dialog
- Uses mxGraph 3.9.2 beta 3

01-FEB-2018: 8.0.5

- Fixes possible NPE for cache invalidation
- Fixes in-place change of graph model
- Uses mxGraph 3.9.2 beta 2

31-JAN-2018: 8.0.4

- Reverts to using headless mxgraph
- Fixes swap icon for shapes with fill color
- Adds gradient and background in UML frame
- Adds edge labels in text, CSV import

30-JAN-2018: 8.0.3

- Reverts to using previously GAE blacklisted classes
- Uses mxGraph 3.9.2 beta 1

23-JAN-2018: 8.0.2

- Fixes constrained size change in arrange panel
- Removes Dropbox and GitHub from splash screen
- Handles empty string for image style
- Adds workaround for dialog clipping
- Uses mxGraph 3.9.1 beta 1

19-JAN-2018: 8.0.1

- Fixes ChangePageSetup
- Uses mxGraph 3.9.0

17-JAN-2018: 8.0.0

- New Google repository structure
- Uses Java 1.8

16-JAN-2018: 7.9.8

- Adds dark theme (beta)
- Uses mxGraph 3.8.1 beta 11

12-JAN-2018: 7.9.7

- Disables http/https redirects

12-JAN-2018: 7.9.6

- Gliffy import improvements
- Adds fontCss configuration to SVG export
- Uses mxGraph 3.8.1 beta 10

04-JAN-2018: 7.9.5

- Fixes bug with current desktop app launcher

04-JAN-2018: 7.9.4

- Adds Extras, Plugins in desktop app
- Adds command line arguments in desktop app
- Fixes images in SVG export preview
- Uses mxGraph 3.8.1 beta 8
- Adds table option in insert text dialog
- Fixes text formatting for input selection

02-JAN-2018: 7.9.3

- Workaround for null variable in Jira Connect
- Uses mxGraph 3.8.1 beta 6

31-DEC-2017: 7.9.2

- Improves app icons for Android

31-DEC-2017: 7.9.1

- Uses round app icon for Android
- Applies editing value before selecting page

29-DEC-2017: 7.9.0

- Removes search.xml from offline manifest

29-DEC-2017: 7.8.9

- Replaces search.xml with inline data

21-DEC-2017: 7.8.8

- Deletes transparent groups with no remaining cells
- Fixes refresh of straight edge handles
- Adds terminal points in Arrange tab
- Uses mxGraph 3.8.1 beta 5

19-DEC-2017: 7.8.7

- Uses mxGraph 3.8.1 beta 4

15-DEC-2017: 7.8.6

- Internal translation update

14-DEC-2017: 7.8.5

- Uses mxGraph 3.8.1 beta 3
- Uses relative path for templates
- Adds configVersion to force reset of configuration

05-DEC-2017: 7.8.4

- Fixes font rendering in library dialog
- Adds move subtree handle for tree containers
- Fixes special cases for font size changes
- Adds fixes for older versions of IE

04-DEC-2017: 7.8.3

- Improves handling of fontsize in format panel
- Hides link hint for edges while moving points
- Improves loop routing with control points
- Adds remove option for links
- Uses mxGraph 3.8.1 beta 2

03-DEC-2017: 7.8.2

- Adds select descendants for cells with outgoing edges
- Adds defaults for insert from custom library
- Adds search of metadata in find dialog
- Enables export URL for external domains
- Adds custom libraries to shape search index
- Uses mxGraph 3.8.1 beta 1

01-DEC-2017: 7.8.1

- Fixes Confluence Cloud revision history diagram display

30-NOV-2017: 7.8.0

- Uses mxGraph 3.8.0

29-NOV-2017: 7.7.8

- Removes dashed borders for editing paragraphs

28-NOV-2017: 7.7.7

- Adds Sitemap sidebar
- Moves double border shapes to Misc sidebar
- Enables custom libraries in Trello Power-Up
- Fixes resize vertex with touch events
- Uses mxGraph 3.7.7 beta 2

27-NOV-2017: 7.7.6

- Removes Trello option from splash screen (use Power-Up)
- Fixes import of SVG with no width, height and viewbox
- Adds undo for global shadow switch
- Uses mxGraph 3.7.7 beta 1
- Fixes select after paste

24-NOV-2017: 7.7.5

- Even faster startup time for offline app
- Fixes cache manifest for offline app

24-NOV-2017: 7.7.4

- Uses mxGraph 3.7.6
- Checks existing filename in Trello Power-Up
- Adds root dialog for cancel in Google picker
- Faster startup time for offline app
- Validates page format input

22-NOV-2017: 7.7.3

- Improves Gliffy importer

20-NOV-2017: 7.7.2

- Fixes stack layout and adds styles
- Uses mxGraph 3.7.6 beta 10

16-NOV-2017: 7.7.1

- Adds switches for SVG shadow
- Fixes tags dialog size
- Fixes action states

15-NOV-2017: 7.7.0

- Fixes alt+mousewheel in lightbox mode

15-NOV-2017: 7.6.9

- Adds predefined filters for Trello picker
- Fixes picker for GDriveConnector and Google Docs Add-on
- Fixes UTF8 strings in imported SVG images
- Adds context menu for links in hints

13-NOV-2017: 7.6.8

- Updates to latest AWS stencils

30-OCT-2017: 7.6.7

- Ignores invalid sources in embed mode
- Fixes auth flow in Trello Power-Up

30-OCT-2017: 7.6.6

- Uses mxGraph 3.7.6 beta 9
- Always shows Google folder dialog

28-OCT-2017: 7.6.5

- Fixes possible NPE in legacy embed mode

28-OCT-2017: 7.6.4

- Adds vector handles
- Fixes text style combo in Firefox
- Fixes text flow after word wrap change
- Uses mxGraph 3.7.6 beta 8

26-OCT-2017: 7.6.3

- Adds current style to CSV and text
- Uses mxGraph 3.7.6 beta 7

25-OCT-2017: 7.6.2

- Adds optional arguments for subclassers

25-OCT-2017: 7.6.1

- Fixes Google picker for certain file types
- Fixes text entries in general sidebar
- Uses mxGraph 3.7.6 beta 6

24-OCT-2017: 7.6.0

- Uses mxGraph 3.7.6 beta 5

24-OCT-2017: 7.5.9

- Uses mxGraph 3.7.6 beta 4

23-OCT-2017: 7.5.8

- Adds Team Drives support in GDriveConnector
- Fixes bug in mockups sidebar

22-OCT-2017: 7.5.7

- Adds support for team drives in google picker
- Removes image export after closing lightbox

16-OCT-2017: 7.5.6

- Adds IBM icons
- Disables Confluence Cloud revision checks due to saveMacro bug

10-OCT-2017: 7.5.5

- Hides tooltips for page links
- Fixes scrollwheel zooming with no scrollbars in chromeless mode
- Uses mxGraph 3.7.6 beta 3

09-OCT-2017: 7.5.4

- Adds missing page option in insert link dialog
- Fixes viewer event handling for links in labels

06-OCT-2017: 7.5.3

- Fixes Trello integration
- Fixes image cropping dialog

05-OCT-2017: 7.5.2

- Ready for new Trello integration
- Fixes for embed mode

04-OCT-2017: 7.5.1

- Updates Atlassian icons

03-OCT-2017: 7.5.0

- Updates Atlassian icons
- Improvements for Lucidchart import
- Adds toolbar and border URL parameter for chromeless mode

29-SEP-2017: 7.4.9

- Fixes ignored current page in window lightbox
- Fixes cross-origin frame access in fallback

28-SEP-2017: 7.4.8

- Adds #P for URL parameters (beta)
- Bypasses caches for proxy servlet
- Uses mxGraph 3.7.6 beta 2
- Checks existing storage file before rename

26-SEP-2017: 7.4.7

- Adds components for Trello Power-Up

25-SEP-2017: 7.4.6

- Improves Gliffy import
- Removes drag and drop handlers in lightbox
- Fixes selection state in Chrome after closing dialogs

25-SEP-2017: 7.4.5

- Improves Gliffy import

22-SEP-2017: 7.4.4

- Restores latest Dropbox SDK
- Improves CORS headers configuration
- Fixes ignored nav, highlight and page in tabbed lightbox for viewer

19-SEP-2017: 7.4.3

- Improvements for Trello integration

19-SEP-2017: 7.4.2

- Hard codes Dropbox SDK version to work around their bug

18-SEP-2017: 7.4.1

- Hides footer in embed mode
- Restores feedback form in help menu

18-SEP-2017: 7.4.0

- Removes feedback form in help menu
- Adds client-side image export in lightbox

13-SEP-2017: 7.3.9

- Fixes missing insert page tab

12-SEP-2017: 7.3.8

- Improvements to Gliffy import

08-SEP-2017: 7.3.7

- Uses mxGraph 3.7.6 beta 1
- Fixes links on shapes in print output

07-SEP-2017: 7.3.6

- Fixes overridden paths for folding icons
- Fixes subtree folding in viewer
- Fixes disabled state for edit data action
- Fixes footer plugin in chromeless mode
- Adds CSS style for read-only status
- Fixes possible editing for read-only files

01-SEP-2017: 7.3.5

- Improvements for Lucidchart import
- Hides move icon in tree and flow layouts
- Fixes collapsible action for multiple selection cells

31-AUG-2017: 7.3.4

- Adds event handling for tree and flow layouts

31-AUG-2017: 7.3.3

- Removes footer in Chrome App
- Improvements for Lucidchart import
- Fixes timing issue in number plugin

31-AUG-2017: 7.3.2

- Fixes special cases for line jumps

30-AUG-2017: 7.3.1

- Fixes folder dialog for inserting new Google Drive files
- Adds support for PNG+XML files in Chrome, Firefox and Edge
- Fixes tolerance for connection arrows on touch devices

28-AUG-2017: 7.3.0

- Fixes event handling for page links in labels
- Fixes label for page links on shapes
- Fixes folding in tree containers
- Uses mxGraph 3.7.5

25-AUG-2017: 7.2.9

- Moves clickable label links to tooltip in edit mode

25-AUG-2017: 7.2.8

- Fixes open in new window for local exports
- Fixes collapse/expand for containers
- Uses mxGraph 3.7.5 beta 14

24-AUG-2017: 7.2.7

- Fixes file usage stats

24-AUG-2017: 7.2.6

- Improvements for Lucidchart import
- Fixes possible NPEs

24-AUG-2017: 7.2.5

- Fixes possible NPE

24-AUG-2017: 7.2.4

- Adds mindmaps and orgcharts in Advanced sidebar (beta)
- Fixes page ID after import in Confluence Cloud add-on

24-AUG-2017: 7.2.3

- Fixes reset of current styles

24-AUG-2017: 7.2.2

- Adds autosave for Trello files

23-AUG-2017: 7.2.1

- Adds support for Trello attachments

23-AUG-2017: 7.2.0

- Adds support for line jumps (beta)
- Improvements for Lucidchart import
- Adds usage stats for actions
- Uses mxGraph 3.7.5 beta 13

22-AUG-2017: 7.1.10

- Fixes transistor icon set

21-AUG-2017: 7.1.9

- Adds persistent autosave setting in Electron App
- Adds File, Page Setup and Publish in Electron/Chrome App
- Fixes keyboard shortcut labels on Mac
- Changes keyboard shortcuts for connection points/arrows

18-AUG-2017: 7.1.8

- Fixes bounding box margins for vertical labels
- Uses mxGraph 3.7.5 beta 12

18-AUG-2017: 7.1.7

- Webapp opens local files in new window
- Fixes flipped, non-projected anchors
- Uses mxGraph 3.7.5 beta 11
- Changes download links

17-AUG-2017: 7.1.6

- Improvements for Lucidchart import
- Uses mxGraph 3.7.5 beta 11
- Fixes possible NPE in custom handles

17-AUG-2017: 7.1.5

- Uses mxGraph 3.7.5 beta 10
- Fixes custom handle positions for turned shapes
- Fixes image export for clipart in Electron App
- Adds close in file menu for Electron/Chrome App
- Repositions inline dialogs if window is resized
- Removes indirection for saving PDF in Electron App
- Adds export in library dialog for Chrome App

16-AUG-2017: 7.1.4

- Adds footer for Desktop Apps Facebook post

16-AUG-2017: 7.1.3

- Uses mxGraph 3.7.5 beta 9
- Uses retina icons for social media footers

16-AUG-2017: 7.1.2

- Fixes possible NPE in mxShapeBasicRectCallout shape

16-AUG-2017: 7.1.1

- Disables drafts in Confluence Cloud add-on
- Uses mxGraph 3.7.5 beta 9
- Fixes label positions, adds callout shape in general sidebar

14-AUG-2017: 7.1.0

- Improves Lucidchart import
- Improves Gliffy import
- Uses mxGraph 3.7.5 beta 8
- Fixes ignored horizontal/vertical flip for connection points

11-AUG-2017: 7.0.9

- Fixes path to clipart images for SVG export in Chrome App
- Adds perimeter for parallelogram, trapezoid, step and hexagon

11-AUG-2017: 7.0.8

- Fixes error handling in Confluence Cloud add-on

10-AUG-2017: 7.0.7

- Adds anonymize plugin (p=anon)

09-AUG-2017: 7.0.6

- Conf Cloud license changes
- Fixes for Perimeters

09-AUG-2017: 7.0.5

- Uses mxGraph 3.7.5 beta 7
- Fixes pen events for Chrome on Windows
- Adds preview for clipboard in save image dialog
- Enables drafts in Confluence Cloud add-on

08-AUG-2017: 7.0.4

- Improvements to Gliffy import
- Fixes remember option for image resize dialog

07-AUG-2017: 7.0.3

- Adds cropping for data URIs in edit image dialog
- Uses mxGraph 3.7.5 beta 6
- Adds filled edge shape in basic sidebar
- Fixes possible NPE, undefined function in Lucidchart Import
- Fixes error handling in PlantUML add-on

06-AUG-2017: 7.0.2

- Improvements to Gliffy import
- Uses filename for print preview title

04-AUG-2017: 7.0.1

- Improvements to Gliffy import
- Improvements to Lucidchart import
- Fixes PlantUML macro dialog

03-AUG-2017: 7.0.0

- Improvements to Gliffy import
- Improvements to Lucidchart import 
- Sent semantic versioning on holiday

02-AUG-2017: 6.9.9

- Fixes paste from Lucidchart

31-JUL-2017: 6.9.8

- Gliffy import improvements

27-JUL-2017: 6.9.7

- Adds links to reviews in free add-ons
- Fixes preview in PlantUML add-on

26-JUL-2017: 6.9.6

- Switches to Google Cloud SDK
- Adds fishbone diagram templates in business section

24-JUL-2017: 6.9.5

- Fixes anchor links in lightbox for viewer
- Fixes event state for page links in labels

24-JUL-2017: 6.9.4

- Fixes hyperlinks in viewer

24-JUL-2017: 6.9.3

- Uses mxGraph 3.7.5 beta 5
- Add experimental support for bridges in dev mode only

24-JUL-2017: 6.9.2

- Add experimental support for bridges
- Adds fixes to VSDX export
- Minor UI fixes

19-JUL-2017: 6.9.1

- Adds open button for spreadsheets, videos, photos, maps in GDriveConnector
- Fixes import of multiple pages in Lucidchart files

18-JUL-2017: 6.9.0

- Adds import tile in splash screen
- Adds social media sharing in footer
- Uses mxGraph 3.7.5 beta 4
- Fixes Extras, Tags and Autosave in Embed mode

18-JUL-2017: 6.8.18

- Ctrl+drop for images shows size dialog to reset default
- Adds dialog before unloading modified page in embed mode

17-JUL-2017: 6.8.17

- Adds dialog for importing large images
- Fixes sorting of properties in metadata dialog for IE 11
- Fixes handling of lineHeight in IE 11

16-JUL-2017: 6.8.16

- Makes ref optional in value dialog for GitHub
- Adds undoable background color, image and page format changes
- Uses mxGraph 3.7.5 beta 3

12-JUL-2017: 6.8.15

- Fixes deleted transparent labels with spaces
- Enables resize of containers with stack layout
- Adds links option in Confluence Cloud add-on

11-JUL-2017: 6.8.14

- Fixes VSDX export for non-numeric IDs
- Fixes drag and drop to splash screen

10-JUL-2017: 6.8.13

- Adds Alt+Click to select cells behind cells
- Uses mxGraph 3.7.5 beta 2

07-JUL-2017: 6.8.12

- Updated translations
- Fixes minor bugs in Connect add-ons

06-JUL-2017: 6.8.11

- Changes initial footer link to video

03-JUL-2017: 6.8.10

- Uses mxGraph 3.7.5 beta 1

29-JUN-2017: 6.8.9

- Fixes execution order and ignored state parameter

29-JUN-2017: 6.8.8

- Updates translations
- Disables VSDX export in IE11-
- Fixes VSDX export in Safari
- Adds larger thumbnails for Google Drive
- Adds VSDX export (beta) in Chrome App

28-JUN-2017: 6.8.7

- Updates translations
- Uses mxGraph 3.7.4

26-JUN-2017: 6.8.6

- Fixes save servlet, local file save in MS Edge
- Removes echo request for save of local data to cloud

21-JUN-2017: 6.8.5

- Removes max-height for Confluence Cloud viewer

20-JUN-2017: 6.8.4

- Adds crossbar shape
- Adds edit button configuration
- Uses new quick start video
- Fixes print dialog for lightbox in scrolled document
- Uses mxGraph 3.7.3 beta 13

16-JUN-2017: 6.8.3

- Minor VSDX export menu change

15-JUN-2017: 6.8.2

- Fixes VSDX export to cloud

15-JUN-2017: 6.8.1

- Adds page formats, uses inch units
- Fixes logout for OneDrive picker
- Uses mxGraph 3.7.3 beta 12

14-JUN-2017: 6.8.0

- Adds support for OneDrive for Business

13-JUN-2017: 6.7.11

- Fixes possible NPE in DriveFile
- Fixes Document Read-Only error in Google Drive
- Fixes OneDrive button in LinkDialog
- Adds more UML relation notations
- Inserts custom libraries after scratchpad

12-JUN-2017: 6.7.10

- Fixes Java compliance issue in Gliffy import

12-JUN-2017: 6.7.9

- Adds css, default styles, libraries to Editor.configure
- Moves persistent settings to EditorUi.init
- Fixes image export for (var)phi in ASCIIMathML

08-JUN-2017: 6.7.8

- Fixes saving local files in MS Edge
- Fixes binary after text export in Safari
- Fixes title for offline iOS homescreen app

06-JUN-2017: 6.7.7

- Fixes broken links in cache.manifest

06-JUN-2017: 6.7.6

- Adds VSDX export in online webapp

06-JUN-2017: 6.7.5

- Fixes links in labels for lightbox on touch devices
- Adds links to pages
- Adds zoom option for viewer in Confluence Connect

05-JUN-2017: 6.7.4

- Fixes overridden rounded style for non-rounded shapes
- Adds defaultVertexStyle/defaultEdgeStyle in Editor.configure
- Adds replay plugin

03-JUN-2017: 6.7.3

- Updates Gliffy translations to add Flowchart v2 library
- Adds edge group support to vsdx export
- Updates Google Cloud Platform icons

31-MAY-2017: 6.7.2

- Adds Atlassian shapes

30-MAY-2017: 6.7.1

- Adds viewer lightbox option in Confluence Connect
- Uses mxGraph 3.7.3 beta 9

29-MAY-2017: 6.7.0

- Adds viewer toolbar config for Confluence Connect
- Enables video and source tags in labels and tooltips
- Fixes reset of edge styles in CSV import
- Uses mxGraph 3.7.3 beta 8

25-MAY-2017: 6.6.5

- Adds print option in lightbox
- Moves insert to arrange menu

24-MAY-2017: 6.6.4

- Fixes possible data loss for back button
- Enables OneDrive support on iOS

22-MAY-2017: 6.6.3

- vsdx export improvements

19-MAY-2017: 6.6.2

- Adds trees plugin
- Fixes text preview, custom handles with math
- Uses mxGraph 3.7.3 beta 7

17-MAY-2017: 6.6.1

- Fixes libs=aws2 URL parameter
- Uses mxGraph 3.7.3 beta 6

16-MAY-2017: 6.6.0

- Adds Venn diagram templates
- Starts .vsdx export functionality
- Improvements and bug fixes for Electron build
- Fixes for Gliffy importer
- Adds autosave for libraries in Chrome App

13-MAY-2017: 6.5.10

- Fixes case sensitivity issue for template names and folders

12-MAY-2017: 6.5.9

- Adds export as URL in Chrome App
- Adds drag and drop for all file formats in Sidebar and Library dialog
- Fixes handling of invalid files after close with realtime
- Adds offline app status icon for cached state
- Removes standalone mode to fix offline iOS home screen apps
- Redirects PDF export to print action when offline
- Fixes text preview for resize with custom handles
- Improvements for small mobile screens
- Forces HTTPS for offline app
- Fixes partial rectangles in Basic palette
- Uses mxGraph 3.7.3 beta 5

08-MAY-2017: 6.5.8

- Adds .vssx stencil import
- Adds square, circle, partial rectangles in sidebar
- Adds identity configuration for CSV import
- Uses mxGraph 3.7.3 beta 4

29-APR-2017: 6.5.7

- Fixes default and button labels for lost changes dialog
- Fixes event handling for overlapping edge handles
- Adds library export to local storage
- Ignores auth files in local storage picker
- Uses mxGraph 3.7.3 beta 3

27-APR-2017: 6.5.6

- Adds arrows and textbox to general sidebar
- Fixes possible data loss when opening local files
- Removes minimum of 120% for line height in format panel
- Fixes highlight for scaled, selected arrows in realtime
- Removes fix for cloned start/end arrow when splitting edge
- Fixes touch events in Chrome for hiding modal dialogs
- Uses mxGraph 3.7.3 beta 2

24-APR-2017: 6.5.5

- Fixes OneDrive file picker
- Uses mxGraph 3.7.3 beta 1
- Adds error handling in Google Docs add-on auth callback
- Fixes cancel for access denied dialog in GitHub client
- Adds sign out option for backends in splash screen
- Fixes changes lost warning when saving draft
- Removes clipart icons due to complaints
- Fixes close icon in Chrome app footer

20-APR-2017: 6.5.4

- Updates Sandstorm build
- Fixes download for exported PNG in Microsoft Edge
- Fixes possible NPE in embed mode
- Disables "Include a copy of my diagram" for PNG export by default

14-APR-2017: 6.5.3

- Disables hacked Dropbox client JS

13-APR-2017: 6.5.2

- Adds missing supercall in Editor.resetGraph override

13-APR-2017: 6.5.1

- Fixes dependency on mxSettings in viewer.min.js

13-APR-2017: 6.5.0

- Fixes extension for exported files with dots
- Fixes lost changes after create or open file in same window
- Fixes ignored default page size for Google Drive files
- Adds Alt+Shift+C for clear waypoints
- Adds toFront/Back context menu for multiple cells
- Adds arc size for copy/paste style
- Fixes rounded swimlane boundary cases
- Uses Cloudflare CDN for loading MathJax
- Adds clear waypoints for vertices with connections
- Adds error handling for saving macro in Confluence Cloud
- Fixes cloned start/end arrow when splitting edge
- Adds support for global shadow in PDF export
- Fixes special characters in branch names for GitHub client
- Fixes missing arc handle for unknown shapes
- Fixes hightlight size for arrows
- Uses mxGraph 3.7.2

06-APR-2017: 6.4.6

- Works around page counter loop condition in FF

05-APR-2017: 6.4.5

- .vsdx import improvements

03-APR-2017: 6.4.4

- Increases black header title in Conf Cloud to push tick and cross out of visible area

03-APR-2017: 6.4.3

- Improvements to theming support for vsdx import
- Fixes for grouped rotations in vsdx import

28-MAR-2017: 6.4.2

- Fixes embedded sheets in Google Drive Connector
- Updates Russian translations
- Improvements to theming support for vsdx import

24-MAR-2017: 6.4.1

- Initial .vsdx theming support

21-MAR-2017: 6.4.0

- Fixes scaling on .vsdx import
- Adds Google Cloud Platform cards

18-MAR-2017: 6.3.8

- Changes display on marker pull-down for no marker in use

17-MAR-2017: 6.3.7

- Adds locale information to drive user

16-MAR-2017: 6.3.6

- Fixes selection of deleted parents after delete actions
- Fixes missing XML for PNG export event in error case
- Fixes timeout for PDF export with invalid images

16-MAR-2017: 6.3.5

- Disables tooltip in GraphViewer via showTitleAsTooltip
- Fixes error handling for export message in embed mode
- Fixes export of empty diagram in Graph.getSvg

15-MAR-2017: 6.3.4

- Fixes NPE in FF

14-MAR-2017: 6.3.3

- Fixes use of undefined variable in DriveClient

14-MAR-2017: 6.3.2

- Updates AWS icons
- Added update plugin
- Fixes update of thumbnail if page not visible

12-MAR-2017: 6.3.1

- Sorts properties in metadata dialog
- Adds animation plugin

11-MAR-2017: 6.3.0

- Fixes slashes in branch names for GitHub client
- Fixes order for add selected cells to library
- Fixes order, missing shapes for export selected cells

09-MAR-2017: 6.2.9

- Fixes label offset for export of selected edges
- Uses temporary file for drag and drop data
- Uses mxGraph 3.7.2 beta 1

09-MAR-2017: 6.2.8

- Fixes ignored user ID in state URL parameter

08-MAR-2017: 6.2.7

- Fixes insert, copy, rename and move for Google Team Drives

07-MAR-2017: 6.2.6

- Adds support for Google Team Drives

07-MAR-2017: 6.2.5

- Adds remote JPEG export option
- Fixes OneDrive, adds GitHub in Edit Link dialog
- Fixes import of JPG and GIF from GitHub and URL

01-MAR-2017: 6.2.4

- Uses mxGraph 3.7.1
- Fixes inserting files in OneDrive
- Hides folder picker if no folders in Drive
- Fixes possible NPE in retry error handling

28-FEB-2017: 6.2.3

- Fixes label for turn action
- Fixes use of undefined function in Dropbox client

28-FEB-2017: 6.2.2

- Handles expired oauth tokens
- Handles blocked Dropbox client API
- Fixes autosave for libraries and scratchpad
- Fixes spinner for template dialog in embed mode

22-FEB-2017: 6.2.1

- Faster read, fixes possible NPE in Dropbox

22-FEB-2017: 6.2.0

- Fixes encoding errors in GitHub client
- Checks size in GitHub and Dropbox
- Fixes initial SVG file contents
- Adds target=frame URL parameter
- Moves cookies to local storage
- Adds recent files in splash
- Uses mxGraph 3.7.0.2 beta 5
- Uses Dropbox API v2

17-FEB-2017: 6.1.2

- Uses semantic versioning
- Fixes possible NPE in format panel

16-FEB-2017: 6.1.1.0

- Uses mxGraph 3.7.0.2 beta 4
- Adds import for SVG and JPG images from backends
- Adds VSDX/Gliffy/PNG+XML import/open from backends
- Adds border option for image export
- Adds timeout handlers for Atlassian cloud
- Fixes ignored crop in JPEG export

15-FEB-2017: 6.1.0.3

- Fixes possible NPE in OneDriveClient
- Adds client-side JPG export option

14-FEB-2017: 6.1.0.2

- Adds picker for GitHub
- Uses mxGraph 3.7.0.2 beta 3
- Changes dialog title for PDF export in Chrome app
- Adds pages option in image and SVG export dialog
- Fixes cancel in message dialog for GitHub insert

11-FEB-2017: 6.1.0.1

- Fixes overwrite of GitHub files
- Fixes default values in GitHub dialog
- Fixes initial save for graphics formats

11-FEB-2017: 6.1.0.0

- Fixes HTML export
- Adds GitHub support
- Fixes processing order in CSV import
- Fixes checks for valid HTTP responses

08-FEB-2017: 6.0.3.7

- Fixes preview for Embed HTML dialog

08-FEB-2017: 6.0.3.6

- Adds help button in publish link dialog
- Uses desk.draw.io for searching help
- Adds export HTML dialog

07-FEB-2017: 6.0.3.5

- Fixes hidden image in Chrome for image export to new window
- Fixes fallback for non-public Google Drive files
- Fixes blurred image for client-side image export in Chrome
- Uses mxGraph 3.7.0.2 beta 2

07-FEB-2017: 6.0.3.4

- Shows related articles in help links
- Adds link options in HTML and URL dialogs

06-FEB-2017: 6.0.3.3

- Uses mxGraph 3.7.0.2 beta 1
- Fixes conversion for plain and formatted text
- Adds Ctrl+Enter for newlines in Safari
- Replaces ?url URL parameter with #U hash value
- Uses public diagram URL in Google Drive Connector

03-FEB-2017: 6.0.3.2

- Fixes Embed dialogs
- Moves Insert to Extras, CSV to File, Import
- Adds fallback for Publish Link action
- Removes Imgur and Github publish options

03-FEB-2017: 6.0.3.1

- Updates Dutch translations
- Fixes lost value when cloning page while editing
- Fixes possible NPE when removing images from custom libraries
- Fixes unicode page name character in vsdx import

31-JAN-2017: 6.0.3.0

- Hides plugin warning for all local plugins
- Adds prefetched URLs in embed to fix CORS issue
- Fixes public URL for shared Google Drive files
- Adds Export, URL and #R raw file types

30-JAN-2017: 6.0.2.16

- Adds CSV import plugin

29-JAN-2017: 6.0.2.15

- Uses mxGraph 3.7.0.1

27-JAN-2017: 6.0.2.14

- Fixes status bar in Firefox in Atlas theme

26-JAN-2017: 6.0.2.13

- Updates Arrange tab after remove from group
- Faster image and SVG export
- Uses mxGraph 3.7.0.1 beta 1

18-JAN-2017: 6.0.2.12

- Adds width, height in advanced export dialog

18-JAN-2017: 6.0.2.11

- Adds crop option for SVG and image export
- Fixes PDF crop export option
- Adds text extraction plugin
- Uses mxGraph 3.7.0.0

13-JAN-2017: 6.0.2.10

- Removes green background from server-side image export
- Ignores convention of not using double digit release numbers

13-JAN-2017: 6.0.2.9

- Adds Google Cloud icons
- Removes lightbox link for Imgur files
- Uses mxGraph 3.7.0.0 beta 13

09-JAN-2017: 6.0.2.8

- Adds props plugin
- Uses mxGraph 3.7.0.0 beta 12
- Adds help button in print dialog

28-DEC-2016: 6.0.2.7

- Adds dialog for selecting pages in docs add-on
- Fixes update all for generic links in docs add-on
- Adds open in new window, data URI import while offline
- Adds import for Lucidchart files

26-DEC-2016: 6.0.2.6

- Fixes lazy loading of clients in chromeless mode
- Fixes export of arbitrary pages with advanced dialog

23-DEC-2016: 6.0.2.5

- Adds PlantUML option in text dialog
- Uses mxGraph 3.7.0.0 beta 11

14-DEC-2016: 6.0.2.4

- Adds text field support for .vsdx import

13-DEC-2016: 6.0.2.3

- Improves .vsdx import text handling

12-DEC-2016: 6.0.2.2

- Improves .vsdx import

08-DEC-2016: 6.0.2.1

- Adds edit option in HTML and SVG embed dialog
- Moves tags, find plugins to editor
- Uses mxGraph 3.7.0.0 beta 11
- Fixes ignored width in viewer after page change
- Adds number plugin for numbering shapes

06-DEC-2016: 6.0.2.0

- Stops allowing diagrams on new Conf Cloud pages
- Fixes URL encoding for Conf Connect diagram names
- Fixes page breaks, blank pages in PDF export
- Fixes viewer in hidden containers for IE9-
- Uses mxGraph 3.7.0.0 beta 10

02-DEC-2016: 6.0.1.9

- Adds context path to URL for Connect Rendermode

01-DEC-2016: 6.0.1.8

- Removes blocking DIV while inserting files
- Adds marker styles for copy/paste style

23-NOV-2016: 6.0.1.7

- Fixes links to same domain for viewer in iframes
- Fixes automatic loading of libraries
- Fixes sidebar title overlap with buttons
- Fixes lost names, delete order in library dialog

21-NOV-2016: 6.0.1.6

- Fixes missing auth header in Google client API

18-NOV-2016: 6.0.1.5

- Replaces prompts in Atlassian cloud plugins
- Fixes save of scratchpad in embed mode
- Enables paste of images while editing labels
- Adds support for title attribute in mxlibrary

16-NOV-2016: 6.0.1.4

- Defaults to using F2 GAE instances
- Fixes no element error for selecting page in Firefox
- Fixes drag and drop for pages in Firefox

09-NOV-2016: 6.0.1.3

- Shift+Drop ignores embedded XML in images
- Alt+Drop ignores highlighted drop target

07-NOV-2016: 6.0.1.2

- Adds new electrical shapes
- Minor improvements for find plugin

04-NOV-2016: 6.0.1.1

- Adds consistent location for insert and sidebar
- Adds support for pages in publish actions
- Adds search for metadata in find plugin
- Uses lightbox for Imgur redirects
- Fixes HTML export for multiple pages
- Fixes shape detection for multiple pages

02-NOV-2016: 6.0.1.0

- Updates shapes in embed servlet
- Uses new Iconfinder API
- Uses mxGraph 3.7.0.0 beta 9
- Uses first unlocked layer for all diagrams

31-OCT-2016: 6.0.0.0

- Adds multiple pages per file

31-OCT-2016: 5.7.2.5

- Makes recent colors persistent
- Uses first unlocked layer for multiple pages

28-OCT-2016: 5.7.2.4

- Fixes Gliffy line imports with less than 2 waypoints

28-OCT-2016: 5.7.2.3

- Prepares multiple pages per file
- Simplifies UX for tags plugin

27-OCT-2016: 5.7.2.2

- Adds page view state to realtime
- Uses mxGraph 3.7.0.0 beta 8
- Adds diagram option in From Text dialog
- Adds incremental find plugin

26-OCT-2016: 5.7.2.1

- Uses mxGraph 3.7.0.0 beta 7
- Adds page format option in print dialog
- Shift+alt+rubberband removes selection cells
- Shift+click adds edges for delete in toolbar

18-OCT-2016: 5.7.2.0

- Uses mxGraph 3.7.0.0 beta 6
- Adds experimental sql plugin

13-OCT-2016: 5.7.1.3

- Fixes mxFile import with page disabled

07-OCT-2016: 5.7.1.2

- Adds import for multiple pages
- Fixes german spelling errors

06-OCT-2016: 5.7.1.1

- Adds warning for model size limit exceeded error

05-OCT-2016: 5.7.1.0

- Adds support for pages in embed mode
- Embed save uses mxFile rather than GraphModel in pages mode

04-OCT-2016: 5.7.0.9

- Adds experimental tags plugin
- Fixes page scale in print preview
- Adds new colorset

03-OCT-2016: 5.7.0.8.2

- Adds tolerance, uses fewer cells in scissors tool

27-SEP-2016: 5.7.0.7

- Adds filename for editors in Atlassian cloud plugins
- Fixes encoding of filenames in Atlassian cloud plugins
- Adds optional title parameter to load message
- Uses mxGraph 3.7.0.0 beta 5
- Fixes possible empty pages in PDF export

27-SEP-2016: 5.7.0.6

- Fixes redirect error in IE

26-SEP-2016: 5.7.0.5

- Adds publish to Facebook, Twitter

21-SEP-2016: 5.7.0.4

- Minor logging changes

21-SEP-2016: 5.7.0.3

- Uses mxGraph 3.7.0.0 beta 4
- Logging changes to use standard Java logging

21-SEP-2016: 5.7.0.2

- Uses mxGraph 3.7.0.0 beta 3
- Fixes possible NPE for markup editor

20-SEP-2016: 5.7.0.1

- Fixes minor bug with autosave
- Uses mxGraph 3.7.0.0 beta 2

20-SEP-2016: 5.7.0.0

- Sets initial state of sidebar to invisible
- Adds support for scratchpad in Chrome App
- Disables default value for exporting selection only
- Adds square and circle shapes, hints for special searches
- Uses mxGraph 3.7.0.0 beta 1
- Creates temporary blank diagram if splash dialog is closed
- Removes "all changes saved" message for device files
- Adds snapToPoint custom attribute
- Fixes enabled state of publish menu and link item
- Adds scope to set and get placeholder variable
- Fixes current revision in dialog during autosave

13-SEP-2016: 5.6.0.5

- Adds multiple (previous) predefined color sets
- Adds Alt+(Shift+)Tab for select parent/child

12-SEP-2016: 5.6.0.4

- Uses mxGraph 3.6.0.1 beta 1
- Adds reset for undo history of in-place editor
- Fixes inconsistent selection check for cursor keys
- Adds hash listener for pages with url parameters
- Fixes PDF, image with XML export for multiple pages
- File ID has precedence over create, url parameters
- Adds validation for grid size in page setup dialog
- Fixes fullscreen toggle in embed mode for Kennedy
- Adds keyboard shortcuts in toolbar tooltips
- Uses mxfile wrapper for embedded HTML files
- Adds optional callback argument in App.main

07-SEP-2016: 5.6.0.3

- Uses mxGraph 3.6
- Fixes authentication error in Dropbox
- Adds workaround for Confluence cloud expand macro in Chrome

06-SEP-2016: 5.6.0.2

- Fixes Confluence Cloud plugin

06-SEP-2016: 5.6.0.1

- Uses mxGraph 3.5.1.6 beta 6

06-SEP-2016: 5.6.0.0

- Fixes cursor scrolling for empty selection
- Adds Alt+Shift+Cursor to connect and clone
- Adds placeholders for custom shape text
- Ctrl+A selects all cells recursively
- Uses new (de)compression algorithm
- Adds language option in Chrome App
- Enables relative links in labels
- Shift+Escape cancels editing
- Uses mxGraph 3.5.1.6 beta 5
- Pre-loads custom libraries
- Fixes object error in IE6

01-SEP-2016: 5.5.6.2

- Adds new predefined color schemes

30-AUG-2016: 5.5.6.1

- Uses mxGraph 3.5.1.6 beta 4
- Escape while editing applies new text value
- Fixes bounds for zoomed markup in-place editor
- Fixes JIRA cloud integration for Safari 

25-AUG-2016: 5.5.6.0

- Uses mxGraph 3.5.1.6 beta 3
- Ignores scale for guides 
- Fixes ignored background image in realtime
- Removes clipping for general text in grapheditor example
- Adds workaround for image printing in Chrome
- Fixes cropped labels in sidebar tooltips
- Adds entries argument in MoreShapes dialog
- Removes unused code and resources
- Simplified licensing check
- Adds new office, archimate3 shapes
- Finnish translation improvements
- Persian translation improvements

12-AUG-2016: 5.5.5.8

- i18n updates

10-AUG-2016: 5.5.5.7

- Minor changes

08-AUG-2016: 5.5.5.6

- Fixes malformed XHTML meta element used in HTML save

07-AUG-2016: 5.5.5.5

- Adds encoding for new HTML file format

04-AUG-2016: 5.5.5.4

- Marketing text changes

02-AUG-2016: 5.5.5.3

- Fixes export via Advanced dialog

29-JUL-2016: 5.5.5.2

- Fixes cloud export for UTF characters

29-JUL-2016: 5.5.5.1

- Mousewheel zoom centered around mouse cursor

28-JUL-2016: 5.5.5.0

- Adds embedded image support for .vsdx import
- Adds File, Publish submenu, GitHub option
- Fixes capitalized keys in tooltips
- Uses mxGraph 3.5.1.6 beta 2

26-JUL-2016: 5.5.4.0

- Adds placeholder metadata variable

25-JUL-2016: 5.5.3.8

- Fixes templates for new HTML file format
- Fixes image export for new HTML file format
- Uses mxGraph 3.5.1.6 beta 1

23-JUL-2016: 5.5.3.7

- Uses Ctrl+Shift+Z for redo on Linux
- Adds Ctrl+,/. for subscript/superscript
- Uses new embed code for HTML files and export
- Fixes embed iframe dialog

21-JUL-2016: 5.5.3.6

- Fixes lazy loading of shapes in Chrome App

21-JUL-2016: 5.5.3.5

- Simplifies footer

20-JUL-2016: 5.5.3.4

- Adds Contact Us link in footer

20-JUL-2016: 5.5.3.3

- Uses mxGraph 3.5.1.5
- Adds browser in splash for offline mode
- Fixes splash screen in offline mode
- Adds padding for pages in print preview
- Removes voice assistant in Extras menu

15-JUL-2016: 5.5.3.2

- Uses mxGraph 3.5.1.5 beta 2
- Fixes waiting for clients in Create dialog

11-JUL-2016: 5.5.3.1

- Adds tag for RSS feed
- Adds page scale to realtime model
- Page scale change triggers autosave

09-JUL-2016: 5.5.3.0

- Adds elbow and isometric edge styles
- Uses single redirect for non-SSL apex domain
- Adds View, Page scale option
- Uses letter paper size in US, Canada and Mexico

08-JUL-2016: 5.5.2.8

- Adds timeout for clients in splash screen
- Fixes loading of JS shapes in new embed mode
- Fixes loading of unused clients in chromeless mode
- Adds embed link dialog, simplifies embed html dialog
- Renames responsive to fit in embed dialogs
- Removes image, adds retina option in embed image dialog
- Updates French, Taiwanese translations
- Fixes enterGroup action for normal groups

06-JUL-2016: 5.5.2.7

- Fixes selection of child cells in groups

06-JUL-2016: 5.5.2.6

- Adds navigation for all groups
- Fixes spinner for unsupported clients
- Adds redirect for cdn.draw.io in splash screen

06-JUL-2016: 5.5.2.5

- Adds lazy loading for clients with splash screen

04-JUL-2016: 5.5.2.4

- Fixes to .vsdx import

23-JUN-2016: 5.5.2.3

- Fixes loading of Drive files with disabled splash screen

23-JUN-2016: 5.5.2.2

- Improves startup time for Chrome App

23-JUN-2016: 5.5.2.1

- Adds Citrix networking shapes
- Fixes possible loop for autosize in graph viewer
- Removes zoom buttons in viewer for JIRA Cloud add-on
- Fixes inline hover state, position for toolbar in graph viewer
- Removes open image button in Confluence Cloud add-on toolbar

19-JUN-2016: 5.5.2.0

- Adds open image button in Confluence Cloud add-on toolbar
- Adds links for selected label text in P2 add-on
- Adds fullscreen toggle in P2 add-on
- Fixes default storage for make copy in Google Drive
- Adds template json message, dialogs in connect plugins
- Fixes ignored grid for image drop location
- Adds new templates dialog for creating diagrams
- Fixes image export if math enabled in Chrome App
- Fixes drag preview in library dialog for Google Chrome
- Fixes paste for images from Lucidchart
- Adds Ctrl+N, Ctrl+O in Chrome App
- Adds new print dialog with custom zoom

08-JUN-2016: 5.5.1.6

- Fixes horizontal/vertical flip in mxText
- Fixes handling of fill/stroke with no shape
- Fixes version string in about dialog
- Uses mxGraph 3.5.1.5 beta 1

07-JUN-2016: 5.5.1.5

- Moves grid color from Extras menu to format panel
- Fixes gradients for print/PDF output in Chrome App

06-JUN-2016: 5.5.1.4

- Fixes loading of client libraries in atlas.min.js
- Simplifies build for Chrome App, app.min.js

05-JUN-2016: 5.5.1.3

- Fixes insert of diagram via {drawio} macro name
- Fixes utf8 characters in Confluence cloud add-on

02-JUN-2016: 5.5.1.2

- Disables revision parsing in Confluence Cloud
- Uses mxGraph 3.5.1.4

01-JUN-2016: 5.5.1.1

- Fixes Confluence cloud expand macro integration

01-JUN-2016: 5.5.1.0

- Adds fullscreen button, persistent libraries in embed mode
- Adds new viewer for JIRA cloud integration
- Removes collapse/expand option in HTML embed dialog
- Adds filename in toolbar for Confluence cloud viewer
- Enables folding in Confluence cloud integration

31-MAY-2016: 5.5.0.2

- Fixes layers button in Confluence cloud lightbox toolbar
- Fixes custom protocol absolute links in embedded HTML
- Lightbox no longer shows layers button for single layer
- Fixes click handling for embedded HTML on touch devices

13-MAY-2016: 5.5.0.1

- Fixes dynamic shape loading in Confluence Cloud viewer
- Enables Extras, Edit Diagram in embed mode
- Add shift-hover in chromeless mode to hide toolbar
- Adds highlight, target URL params for chromeless mode
- Adds link handling in chromeless mode

12-MAY-2016: 5.5.0.0

- Uses new HTML embed code and dialog
- Adds viewer for Confluence cloud
- Adds fullscreen and format switch in Atlas theme
- Adds transparency for layers dialog in embedded and lightbox mode
- Uses mxfile in PNG/SVG+XML file formats
- Adds parsing for new embedded HTML files
- Fixes lightbox click for links in embedded SVG
- Fixes relative images in new HTML embed
- Uses mxGraph 3.5.1.4 beta 1

09-MAY-2016: 5.4.4.5

- Adds fullscreen button
- Blocks possible javascript: shape links
- Fixes handling of edit URL parameter
- Uses mxGraph 3.5.1.3

06-MAY-2016: 5.4.4.4

- Fixes UI language in Chrome App
- Fixes File, Make Copy in IE9-
- Allows non-integer font sizes
- Uses mxGraph 3.5.1.3 beta 6

04-MAY-2016: 5.4.4.3

- Fixes persistence of current libraries

04-MAY-2016: 5.4.4.2

- Removes debug output

04-MAY-2016: 5.4.4.1

- Fixes binary file export in Chrome App
- Fixes SVG namespace for groups in svgdata plugin

02-MAY-2016: 5.4.4.0

- Writing files in Chrome app replaces existing content
- Adds layers option in iframe/SVG/image embed dialogs
- Adds layers URL parameter in chromeless mode
- Adds ctrl+shift+connect to disable connections
- Uses mxGraph 3.5.1.3 beta 5

30-APR-2016: 5.4.3.9

- Moves application code to JS files
- Adds icon for help link in menus

29-APR-2016: 5.4.3.8

- Removes gridcolor attribute in file, URL parameter
- Adds peristent grid color option in Extras menu
- Fixes resize of background page in outline dialog
- Disables context menu on touch devices on folding icon
- Fixes hover icons for overlapping cell in all directions
- Adds logging for file loading errors
- Uses mxGraph 3.5.1.3 beta 4

27-APR-2016: 5.4.3.7

- Switches JIRA Cloud to attachment writes via client
- Fixes ignored config in embed script
- Renames File to DrawioFile
- Uses mxGraph 3.5.1.3 beta 3

26-APR-2016: 5.4.3.6

- Fixes version in about dialog

26-APR-2016: 5.4.3.5

- Fixes possible bug with cached JS and uncached HTML

25-APR-2016: 5.4.3.4

- Removes old stylesheet
- Fixes bug for edges between layers
- Fixes embedding with custom shapes
- Fixes logging of domains with database entry
- Moves createSpinner, setFileData to EditorUi
- Adds lightbox parameter for chromeless mode
- Uses single click for lightbox in embed

22-APR-2016: 5.4.3.3

- Fixes naming issues in PlantUML render mode

22-APR-2016: 5.4.3.2

- Adds render mode to PlantUML

18-APR-2016: 5.4.3.1

- Fixes Confluence Cloud new page diagram insertion
- Uses mxGraph 3.5.1.3 beta 2

17-APR-2016: 5.4.3.0

- Removes macro parameter from plantUML

17-APR-2016: 5.4.2.5

- Adds previous UML shapes

15-APR-2016: 5.4.2.4

- Fixes double click on layer to rename
- Uses mxGraph 3.5.1.2

13-APR-2016: 5.4.2.3

- Changes plant export URL to https

13-APR-2016: 5.4.2.2

- Changes baseURL of plantUML to plant.draw.io

13-APR-2016: 5.4.2.1

- Changes baseURL of plantUML to https

13-APR-2016: 5.4.2.0

- Adds tooltips, svgdata plugin (p=tips;svgdata)
- Uses standard print dialog in Chrome App
- No longer repaints label while editing
- Uses mxGraph 3.5.1.1

11-APR-2016: 5.4.1.8

- Adds line height in text format panel
- Fixes possible NPE when updating shapes
- Uses mxGraph 3.5.1.1 beta 4

11-APR-2016: 5.4.1.7

- Fixes font size change with no text selection
- Fixes isConsumed not defined in MS Edge
- Fixes change of text opacity
- Uses mxGraph 3.5.1.1 beta 3

09-APR-2016: 5.4.1.6

- Changes default edge length to 80
- Fixes anchor links for embedded HTML and SVG
- Adds expiry to license logging
- Adds Alt+/Shift+/Ctrl+Click in sidebar

08-APR-2016: 5.4.1.5

- Adds imgur redirect servlet
- Fixes offline mode
- Fixes reset of comic style in connect preview

08-APR-2016: 5.4.1.4

- Fixes global spacing ignored if overridden
- Adds logging in JIRA servlet to avoid data loss
- Fixes click on unselected edge label moves label
- Fixes thumbnail for disabled autosave in Drive
- Adds recovery from backup in revision history
- Uses mxGraph 3.5.1.1 beta 2

06-APR-2016: 5.4.1.3

- Uses mxGraph 3.5.1.1 beta 1
- Fixes File, Publish menu item
- Fixes iOS app icons

06-APR-2016: 5.4.1.2

- Uses mxGraph 3.5.1.0
- Uses new logo with no black bar
- Fixes export for certain AWS 3D shapes
- Fixes action states for read-only and restricted files

05-APR-2016: 5.4.1.1

- Adds comic, text background color to default style
- Adds outline keyboard shortcut in chromeless mode
- Adds labelMovable style for vertex labels
- Uses mxGraph 3.5.1.0 beta 6
- Adds selection only option for XML export
- Adds persistent settings for Chrome App

03-APR-2016: 5.4.1.0

- Removes certain AWS 3D shapes

01-APR-2016: 5.4.0.9

- Adds isometric AWS shapes

01-APR-2016: 5.4.0.8

- Adds more dotted line styles
- Adds isometric shapes and connectors (beta)
- Updates handler after style change of cell
- Uses mxGraph 3.5.1.0 beta 5

31-MAR-2016: 5.4.0.7

- Hides toolbar after mouse move in chromeless mode
- Adds keyboard shortcuts in read-only and chromeless mode
- Fixes highlight in realtime for large strokewidths
- Fixes update of text shape after change of overflow style
- Uses mxGraph 3.5.1.0 beta 5
- Fixes vertical alignment for Component shape
- Enables comic style for various shapes
- Uses filename for dropped files in libraries

26-MAR-2016: 5.4.0.6

- Removes shadow URL parameter
- Smaller jiggle effect for diamond shapes
- Adds global shadow option in View menu (beta)
- Removes bug tracking code for MS Edge

25-MAR-2016: 5.4.0.5

- Adds image option in embed SVG dialog
- Fixes embedded images in HTML labels

24-MAR-2016: 5.4.0.4

- Restores bug tracking code for Edge
- Adds app icons for various devices

24-MAR-2016: 5.4.0.3

- Uses mxGraph 3.5.1.0 beta 4
- Fixes word wrap change for existing text
- Removes bug tracking code for MS Edge

23-MAR-2016: 5.4.0.2

- Fixes possible NPE for import
- Removes crc32 for email logging
- Adds bug tracking code for MS Edge

23-MAR-2016: 5.4.0.1

- Adds Extras, Show Start Screen option
- Uses mxGraph 3.5.1.0 beta 3
- Resets text shape state before using new style
- Removes extension from published diagram title
- Fixes rendering of comic rectangles in VML
- Fixes expand of Misc sidebar in IE6/8

22-MAR-2016: 5.4.0.0

- Uses XML to convert from old realtime
- Fixes gradients for certain URLs in IE11/Edge
- Adds comic style and shapes
- Fixes move preview offset
- Uses mxGraph 3.5.1.0 beta 2
- Fixes library title editing on iOS
- Makes autosave optional in Chrome App

18-MAR-2016: 5.3.5.2

- Adds delete URL to publish confirmation
- Adds warning dialog before Publish
- Adds File, Embed, Image menu option
- Adds Email address to Drive user info
- Click on app icon opens Drive folder

17-MAR-2016: 5.3.5.1

- Simplifies status messages for saving
- Adds UI for editing sidebar titles
- Disables publish action in IE9-
- Fixes possible infinite loop in Drive client

17-MAR-2016: 5.3.5.0

- Adds File, Publish for uploading to Imgur
- Moves moreShapes from File to View menu
- Moves createShape from File to Extras menu
- Removes create shape option from sidebar
- Adds confirmation after copy in SVG embed
- Adds copy button in embed iframe dialog

16-MAR-2016: 5.3.4.3

- Enables licensing for Confluence Cloud
- Removes second macro for GDrive Connector
- Fixes custom shapes for embedded diagrams
- Updates MS Azure, Cloud + Enterprise icons

15-MAR-2016: 5.3.4.2

- Adds File, Embed, SVG menu option
- Uses client mode for making a copy
- Hash has precedence over client parameter

14-MAR-2016: 5.3.4.1

- Adds support for embedded PNG data URI in client mode
- Fixes ignored grid for XML drag and drop
- Fixes decoding of base64 encoded embedded SVG
- Fixes embedded PNG character encoding in Safari

10-MAR-2016: 5.3.4.0

- Uses mxGraph 3.5.1.0 beta 1

09-MAR-2016: 5.3.3.9

- Uses mxGraph 3.5.0.1 beta 3

09-MAR-2016: 5.3.3.8

- Fixes double encoding for PNG+XML in embed mode

08-MAR-2016: 5.3.3.7

- Uses mxGraph 3.5.0.1 beta 2

04-MAR-2016: 5.3.3.6

- Fixes insertTextAt call in importFile()

04-MAR-2016: 5.3.3.5

- Uses mxGraph 3.5.0.1 beta 1
- Redirects apex domain to www.draw.io
- Fixes loading spinner for converted Dropbox files

03-MAR-2016: 5.3.3.4

- Fixes offset of imports with no mouse event
- Adds configurable edit button in chromeless mode
- Ignores public URL for Drive files in public folders
- Adds upload tab in Google picker dialog
- Makes hierarchical folder picker default
- Puts new Google files into root folder
- Adds folder picker for new libraries

03-MAR-2016: 5.3.3.3

- Changes BaseURL for Google Drive Connector

02-MAR-2016: 5.3.3.2

- Adds responsive UI for small screens
- Adds voice assistance for text input

01-MAR-2016: 5.3.3.1

- Fixes grid rounding errors for common cases

01-MAR-2016: 5.3.3.0

- Uses mxGraph 3.5.0.0
- Adds voice assistant in Extras menu
- Adds experimental shadow URL parameter
- Ignores transparent stroke color for default style

29-FEB-2016: 5.3.2.3

- Adds Ctrl+Shift+Drag to create/remove space
- Fixes licensing in chromeless mode
- Fixes bug in reset graph

28-FEB-2016: 5.3.2.2

- Uses mxGraph 3.4.1.3 beta 9
- Removes Export PNG+XML menu item
- Uses MathJax from CDN, lighter config
- Adds selection option for remote export
- Fixes timing problem for printing with math
- Adds text fallback for SVG export (experimental)
- Improved text rendering for image and SVG export
- Fixes artifacts for embedded math diagrams in Chrome
- Fixes Open in new window for IE10/11, MS Edge, Safari

26-FEB-2016: 5.3.2.1

- Uses MathJax 2.6 to fix artifacts in Chrome
- Fixes import of edges in separate layers
- Import of file appends multiple layers
- Changes logging for Google accounts
- Fixes drop of file URL into editor
- Uses mxGraph 3.4.1.3 beta 8

25-FEB-2016: 5.3.2.0

- Adds licensing server and client

25-FEB-2016: 5.3.1.0

- Uses mxGraph 3.4.1.3 beta 7
- Adds gridcolor URL parameter
- Adds scaled grid, replaces grid dots with grid lines
- Fixes anchors open in same page for embedded diagrams
- Moves Search, Scratchpad from Extras menu to View menu

22-FEB-2016: 5.3.0.6

- Updates Confluence Connect to use new page context mechanism
- Uses mxGraph 3.4.1.3 beta 6
- Adds rt, grid parameters for chromeless mode
- Fixes export dialog width, adds help button
- Detects data URI with XML in drag source
- Enables embed image menu in test mode

07-FEB-2016: 5.3.0.5

- Fixes direction, align, distribute menu states
- Adds tap and hold to add to selection

06-FEB-2016: 5.3.0.4

- Fixes possible NPE in plugins warning dialog

06-FEB-2016: 5.3.0.3

- Adds delayed quick start footer ad
- Removes voice assistant from help menu
- Moves ctrl+shift+j shortcut to two pages
- Disables hover icons while space is pressed
- Adds tooltips for buttons in format panel
- Fixes button label overflow in sidebar

05-FEB-2016: 5.3.0.2

- Replaces numeric keyboard shortcuts

05-FEB-2016: 5.3.0.1

- Fixes asynchronous loading of plugins

05-FEB-2016: 5.3.0.0

- Adds optional converter argument for canvas export
- Adds asynchronous loading for resources
- Uses mxGraph 3.4.1.3 beta 5

03-FEB-2016: 5.2.9.1

- Changes Confluence Cloud footer

03-FEB-2016: 5.2.9.0

- Ignores panning trigger to change edges
- Fixes sidebar rendering in math mode
- Uses mxGraph 3.4.1.3 beta 4

01-FEB-2016: 5.2.8.9

- Updates AWS icons

01-FEB-2016: 5.2.8.8

- Fixes offset for drag and drop of diagram data
- Fixes drop of SVG data URI with embedded XML
- Fixes download and export SVG to new window in Safari
- Fixes SVG export in older versions of IE
- Fixes drop shadow in SVG export for Safari
- Adds control-resize for centered resize of vertices
- Fixes import of SVG with embedded XML graph model
- Adds selection, transparent background for SVG export
- Adds include diagram option for image and SVG export
- Fixes open library file as diagram in Google Drive
- Adds pseudo-hierarchical view in Google library picker

29-JAN-2016: 5.2.8.7

- Fixes ignored background color for image export
- Fixes update of outline after changing page format
- Fixes edit shape button after insert of new shape

27-JAN-2016: 5.2.8.6

- Adds shadow option for image and SVG export

26-JAN-2016: 5.2.8.5

- Adds pseudo-hierarchical view in Google file picker
- Adds fallback for failed local image export
- Fixes lost connect preview after remote change
- Uses mxGraph 3.4.1.3 beta 3

25-JAN-2016: 5.2.8.4

- Fixes disabled transparent background export option
- Adds touch support for Microsoft Edge
- Adds pseudo-hierarchical view in Google folder picker
- Clean up for templates and more shapes dialog
- Adds selection only option in image export dialog
- Ungroup no longer deletes non-transparent groups
- Fixes paste via menu after ctrl/cmd+c
- Fixes hiding of all sidebar entries
- Uses mxGraph 3.4.1.3 beta 2

19-JAN-2016: 5.2.8.3

- Fixes collapse/expand for sidebars

19-JAN-2016: 5.2.8.2

- Fixes concurrent loading of custom libraries
- Improves initial sidebar rendering speed

18-JAN-2016: 5.2.8.1

- Uses mxGraph 3.4.1.4 beta 1
- Adds File, Move to Folder for OneDrive files
- Adds File, Rename menu item for all files
- Fixes spinner status for create revision
- Fixes edit as new for remote embedded diagrams
- Fixes minor bugs in search sidebar
- Fixes open in new window for save dialog
- Fixes edit diagram, search in Chrome app menubar
- Adds support for HTML tooltips in embedded diagrams
- Adds transparent background option for image export

15-JAN-2016: 5.2.8.0

- Uses mxGraph 3.4.1.3 beta 1
- Adds timeout for save revision in Drive
- Fixes spinner for retry after error
- Fixes handling of leading # in color dialog
- Increases size limit for background image
- Fixes minor bugs in library dialog
- Fixes image size for scratchpad

14-JAN-2016: 5.2.7.9

- Changes Connect footer text for Conf/JIRA

14-JAN-2016: 5.2.7.8

- Removes remote condition check in JIRA cloud
- Fixes outline connect for backbone, lifeline shapes

12-JAN-2016: 5.2.7.7

- Updates Polish translation
- Removes incorrect header from Confluence Connect [DS-249]
- Fixes encoding of filename in JIRA Connect [DFJC-3]

08-JAN-2016: 5.2.7.6

- Uses mxGraph 3.4.1.2
- Fixes inconsistent loop routing
- Fixes possible page scroll for embedded iframe
- Restores spacer in UML sidebar
- Uses UML 2.5 interface notation

06-JAN-2016: 5.2.7.5

- Uses mxGraph 3.4.1.1
- Adds interface in UML sidebar
- Adds fit page in print dialog
- Adds crop option for PDF export
- Merges image export menu items

02-JAN-2016: 5.2.7.4

- Adds support for title attribute in library files
- Adds optional sidebar search in Extras, Search
- Adds custom client-side image export option

31-DEC-2015: 5.2.7.3

- Adds new spinner while autosaving files
- Uses simplified UI for search sidebar
- Adds library file menu items on iOS

28-DEC-2015: 5.2.7.2

- Inserts new auto-layouted diagrams into current page
- Disables pinch to zoom, ctrl+wheel for Chrome on Mac
- Uses shorter delay for showing hover icons
- Shows hover icons after drop from sidebar
- Adds status after save from draft state
- Fixes default extension in create dialog
- Fixes save after change of storage file extension
- Fixes menubar height in atlas UI
- Uses parser for checking XML strings
- Shows spinner while sending feedback

22-DEC-2015: 5.2.7.1

- Adds automatic jetty size for orthogonal edges
- Fixes loop routing for fixed connection points
- Labels for locked cells are no longer editable
- Fixes auto-delete for empty non-deletable text
- Handles oversize labels on buttons in sidebars
- Fixes clipping in dropdown menu with scrollbars
- Uses mxGraph 3.4.1.1 beta 1

11-DEC-2015: 5.2.7.0

- Fixes encoding for JIRA Connect
- Ignores ancestor collisions for connection arrows
- Uses mxGraph 3.4.1.0

09-DEC-2015: 5.2.6.9

- Opens PNG+XML data uri via drag and drop
- Adds thin open, async open markers
- Updates UML sidebar, adds cross marker
- Fixes markers in connect preview
- Uses smaller hover icons
- Uses mxGraph 3.4.0.4 beta 10

08-DEC-2015: 5.2.6.8

- Adds all markers to edge format panel
- Adds thin block and thin classic markers
- Adds async, circle, circlePlus markers
- Hides overlapping connection arrows

07-DEC-2015: 5.2.6.7

- Uses mxGraph 3.4.0.4 beta 9
- Adds vsdx support for unconnected edges
- Adds entity relation shapes and connectors
- Adds default styles in connect preview
- Fixes dynamic loading for registered default shapes
- Hides disabled connection points while connecting
- Uses dotted highlight border for active drop targets
- Adds dropzone with description in editable sidebars
- Adds app identifier and current version in mxfile
- Fixes sidebar button event handling for IE8/quirks
- Fixes library dialog for quirks mode

03-DEC-2015: 5.2.6.6

- Fixes possible scroll to origin after paste in FF
- Fixes copy/paste in older versions of IE
- Adds export image to new window in IE
- Adds storage dialog for export in IE
- Uses mxGraph 3.4.0.4 beta 8

02-DEC-2015: 5.2.6.5

- Updates AWS icons to latest set
- Adds delay for connection arrows

02-DEC-2015: 5.2.6.4

- Fixes select all after paste of large amounts of text
- Fixes update of label preview during vertical resize
- Fixes click on resize handles while editing label
- Fixes certain label positions and sizes
- Fixes menubar style in atlas UI
- Uses mxGraph 3.4.0.4 beta 7

27-NOV-2015: 5.2.6.3

- Fixes IME input for i18n in FF
- Uses mxGraph 3.4.0.4 beta 6
- Adds experimental doors plugin

25-NOV-2015: 5.2.6.2

- Fixes edge move preview for scaled tolerance
- Fixes new waypoint for drag of edges with bends
- Fixes ignored folder for new OneDrive files
- Fixes download, adds options in Save dialog
- Adds padding to handles while editing
- Adds spacing to copied styles
- Enables glass effect switch for process shape
- Migrates Docs add-on to new API
- Adds dblclick in more shapes dialog
- Fixes color dialog for font (background) color
- Uses mxGraph 3.4.0.4 beta 5

20-NOV-2015: 5.2.6.1

- Adds link to scratchpad FAQ entry
- Handles possible missing root cell in realtime

20-NOV-2015: 5.2.6.0

- Removes local storage option from splash screen
- Adds browser=1 URL parameter for local storage
- Adds double click to keyboard shortcuts

19-NOV-2015: 5.2.5.8

- Adds US-Legal paper size
- Handles file not found for local storage
- Handles domain policy errors in Drive client
- Restores timer for fixed connection points with mouse

17-NOV-2015: 5.2.5.7

- Removes page reload after create from Drive
- Hash has precedence over state URL parameter
- Handles removed App folder in Dropbox
- Fixes handling of existing mxfile node
- Redirects 5% of reviews to Docs Add-on
- Adds support for extracting diagram nodes
- Adds spinner action in JSON protocol
- Fixes click and drag on edges in groups
- Fixes ignored scale for connect live preview
- Removes unused image files from Chrome App
- Resets constraint focus after root change
- Adds repaint of hover icons after root change
- Fixes offset for terminal point in VML
- Uses mxGraph 3.4.0.4 beta 4

17-NOV-2015: 5.2.5.6

- Uses mxGraph 3.4.0.4 beta 2
- Uses new draw.io logo and colors
- Fixes hit detection for outline connect and grid
- Removes timer for fixed points with non-touch devices
- Adds live preview for new connections
- Fixes replacement of PNG extension in IE
- Adds autosave if gridsize is changed
- Removes Draw.io for Work action and menu item
- Fixes loading of plugins from mxSettings

13-NOV-2015: 5.2.5.5

- Fixes new diagram creation in Chrome Packaged App
- Fixes delete operation (DELETE verb changed to POST)

12-NOV-2015: 5.2.5.4

- Fixes context path for JIRA Connect

11-NOV-2015: 5.2.5.3

- Fixes mxUtils.getFunctionName()

11-NOV-2015: 5.2.5.2

- Fixes creating blank diagram files in createFile

11-NOV-2015: 5.2.5.1

- Adds error handling for invalid diagram files

10-NOV-2015: 5.2.5.0

- Fixes embed preview in Microsoft Edge
- Adds default connections for backbone shape
- Adds number checks for custom zoom dialog

05-NOV-2015: 5.2.4.4

- Reverts Connect viewer

05-NOV-2015: 5.2.4.3

- Improvements for JIRA Connect

05-NOV-2015: 5.2.4.2

- Improvements for JIRA Connect

04-NOV-2015: 5.2.4.1

- Adds workaround for NS_ERROR_FAILURE in FF
- Adds network shapes library
- Fixes editorUi is not defined for help link
- Uses mxGraph 3.4.0.4 beta 1

04-NOV-2015: 5.2.4.0

- Changes items in format panel and menubar
- Renames editFile, editMetadata, connect actions
- Handles invalid image bounds in Graph.getSvg

03-NOV-2015: 5.2.3.9

- Fixes possible NPE

03-NOV-2015: 5.2.3.8

- Adds separate switch to disable connection points
- Uses mxGraph 3.4.0.2

02-NOV-2015: 5.2.3.7

- Corrects JIRA connect plugin key in descriptor

02-NOV-2015: 5.2.3.6

- Fixes ads in footer after Google login

02-NOV-2015: 5.2.3.5

- Fixes possible NPE

02-NOV-2015: 5.2.3.4

- Splits edges for drop from sidebar (shift to disable)
- Uses mxGraph 3.4.0.2 beta 13

28-OCT-2015: 5.2.3.3

- Adds missing function for Confluence OnDemand
- Adds refresh in format panel after root change
- Changes page size units from px to pt

28-OCT-2015: 5.2.3.2

- Fixes shape search for non-existing tags
- Removes GMDL library from default sidebars
- Adds link to user manual in help menu
- Removes click to speak button in header

25-OCT-2015: 5.2.3.1

- Adds separate files for GMDL, SysML sidebars
- Creates Drive revisions with autosave disabled
- Fixes scrollbar for fit page (width) actions
- Fixes delayed reset of scrollbar positions
- Fixes background page shadow color in VML
- Fixes terminal handle transparency in VML
- Uses Metarial Design for GMDL library title
- Uses mxGraph 3.4.0.2 beta 12

23-OCT-2015: 5.2.3.0

- Adds GMDL (Google Media Design Library) sidebar
- Fixes offset for repeated copy paste in Safari
- Fixes download after creating new device file
- Fixes keyboard shortcut ctrl+0 for reset view
- Fixes div has no click in more shapes dialog
- Adds horizontal/vertical page center guides
- Hides word wrap option for autosize labels
- Fixes initial size of new text labels
- Uses mxGraph 3.4.0.2 beta 11

21-OCT-2015: 5.2.2.2

- Fixes flow in voice plugin
- Fixes title collapse/expand icon color
- Fixes sidebar title font size

20-OCT-2015: 5.2.2.1

- Fixes dialog for read-only realtime files

19-OCT-2015: 5.2.2.0

- Improves voice recognition in plugin
- Fixes print output in Microsoft Edge
- Uses mxGraph 3.4.0.2 beta 10

18-OCT-2015: 5.2.1.9

- Fixes unlink in label with edit dialog
- Fixes html and svg URLs for embedding
- Intercepts links that change page URL
- Fixes remote selection highlight color
- Uses mxGraph 3.4.0.2 beta 9

18-OCT-2015: 5.2.1.8

- Adds dynamic loading for lucid chart import
- Adds voice label for missing speech input

17-OCT-2015: 5.2.1.7

- Fixes dynamic loading of voice plugin
- Fixes overflow for voice button

17-OCT-2015: 5.2.1.6

- Prepares Extensions.js for refactoring into dynamic plugins
- Adds share button for drive files, voice assistant button
- Adds transaction for connecting dangling edge in voice plugin

17-OCT-2015: 5.2.1.5

- Adds select, select source/target in voice plugin
- Insert shape connects connecting dangling edge
- Adds connect vs clone command in voice plugin

16-OCT-2015: 5.2.1.4

- Adds persistent current voice setting for plugin
- Adds autostart option item in voice menu for plugin
- Adds voice assistant item in main help menu
- Hides voice assistant footer if not supported
- Fixes edge clipping in print and PDF export 
- Uses mxGraph 3.4.0.2 beta 8

15-OCT-2015: 5.2.1.3

- Fixes possible NPE in graph.connectVertex
- Uses levenshtein distance in voice plugin
- Next/previous moved to select prefix in voice

15-OCT-2015: 5.2.1.2

- Adds variable and timestamp in Misc sidebar
- Adds voice commands in voice plugin
- Fixes segment offsets after change of parent
- Uses mxGraph 3.4.0.2 beta 7

14-OCT-2015: 5.2.1.1

- Fixes bugs, adds commands, uses footer in voice plugin
- Adds promo link to voice assistant (beta) in Chrome

14-OCT-2015: 5.2.1.0

- Removes enable/disable command in voice plugin
- Fixes possible duplicate connection inserted
- Fixes lifeline perimeter for undefined strokewidths
- Improved tags for standard shapes

13-OCT-2015: 5.2.0.9

- Adds continuous speech input in voice plugin
- Adds scrollbars in voice type menu
- Fixes duplicate insert of same plugin
- Fixes drop for PNG+XML data URIs
- Adds help link in voice plugin menu

13-OCT-2015: 5.2.0.8

- Adds menu for voice plugin
- Fixes keyboard shortcuts for voice plugin on Windows
- Adds hello, help and quick start for voice plugin
- Fixes hover icon focus for touch devices

12-OCT-2015: 5.2.0.7

- Adds experimental voice plugin (id voice)
- Fixes hover icon click for relative cells
- Fixes local save of large client-side export
- Adds recently used colors in color dialogs
- Fixes dragging labels for unselected edges
- Fixes pending timer after drop from sidebar
- Adds insert for new edges before source cell
- Changes label position and background for images
- Fixes drop of images with invalid file extension
- Uses mxGraph 3.4.0.2 beta 6

10-OCT-2015: 5.2.0.6

- Fixes sidebar tooltip after drop cells to library
- Allows 1px move of start segment in edge style
- Restores moving of selected container via child
- Fixes padding for new rows in UML table shape
- Clones west hover icon in stack before source cell
- Fixes click on hover icon in stack with near cell
- Allows group/ungroup to (de)containerize vertices
- Fixes 1px handle offset, adds terminal handle with dot
- Adds backbone shape, fixes lifeline perimeter
- Fixes drop resize if source smaller than 45px
- Adds Draw.io for Work link in Help menu
- Adds modified, saveAndExit in load JSON message
- Avoids unnecessary image resampling
- Uses mxGraph 3.4.0.2 beta 5

09-OCT-2015: 5.2.0.5

- Changes image resize condition to over 100K
- Fixes font size stepper for multiple values
- Adds edit metadata to context menu
- Adds date{format} placeholder option
- Adds link to file extensions FAQ entry

08-OCT-2015: 5.2.0.4

- Fixes vertical alignment for footer

08-OCT-2015: 5.2.0.3

- Adds Draw.io for Work link in footer
- Fixes update of child placeholders after undo
- Replaces PNG extension for url parameter with XML
- Adds shift for keeping original image size
- Adds edit metadata option in format panel

08-OCT-2015: 5.2.0.2

- Fixes change of font size on multiple cells
- Fixes Ctrl+B/U/I while editing in FF/Safari
- Ignores default style for copy via hover icon
- Applies only basic text styles for new labels
- Ignores default style for custom library entries
- Fixes repaint performance after metadata change
- Improves speed for deleting large number of cells
- Removes page unload warning for url parameter
- Uses mxGraph 3.4.0.2 beta 4

08-OCT-2015: 5.2.0.1

- Fixes copy-paste in non-Chrome browsers

07-OCT-2015: 5.2.0.0

- Adds link from Chrome App to online app
- Fixes inconsistent child selection for selected swimlanes
- Fixes PDF export for math without page view
- Increases size of metadata dialog
- Adds placeholders for labels and tooltips
- Fixes encoding for cross-platform clipboard
- Improves repaint performance for text labels
- Improves drag and drop for links and images
- Uses mxGraph 3.4.0.2 beta 3

06-OCT-2015: 5.1.1.1

- Fixes math PDF export

06-OCT-2015: 5.1.1.0

- Fixes filename, advanced export to new window
- Renames main macro for Confluence Connect
- Adds error handling for invalid PDF export
- Adds timer for grouping cursor operations
- Hover icon click ignores locked layers
- Locked cells are no longer connectable
- Fixes change of fontSize for certain nodes
- Fixes paste for large diagrams
- Shows link tooltip only for single selection
- Fixes print offset for negative origins
- Fixes remote parsing for paste of ASCII 160
- Adds GraphML import (beta)
- Adds Cmd+Drag on Mac for cloning
- Improves client-side print performance
- Uses mxGraph 3.4.0.2 beta 2

05-OCT-2015: 5.1.0.3

- Enables drag and drop and open for library files
- Constrains proportions for images in libraries
- Adds drop of library files to sidebar, dialog
- Fixes template not found error message
- Fixes mouse cursor for entity relation
- Uses custom handles only for single selection
- Adds notitle URL parameter
- Removes extension for url parameter filename
- Adds logging for help search via menu
- Uses mxGraph 3.4.0.2 beta 1

02-OCT-2015: 5.1.0.2

- Checks leading dots for storage files
- Maintains sidebar order after save of library
- Removes remoteAlert, uses version for scratchpad
- Adds drag and drop of files to custom libraries
- Fixes preview and drag to library in IE11/10
- Adds folder picker for new files

01-OCT-2015: 5.1.0.1

- Fixes possible NPE for chromeless mode
- Fixes restore of scratchpad if empty

01-OCT-2015: 5.1.0.0

- Adds scratchpad option in Extras menu
- Adds tooltip, dblclick for custom libraries
- Adds drag and drop to custom libraries
- Edge drag uses handles if edge selected
- Uses mxGraph 3.4.0.1

30-SEP-2015: 5.0.6.4

- Adds small, closable footer in Chrome App
- Adds client status message in File menu
- Adds previously selected in Google picker
- Click on background closes Google picker
- Fixes possible 401 in Google picker
- Adds improved error logging

29-SEP-2015: 5.0.6.3

- Fixes connecting edges with elbow edge style

29-SEP-2015: 5.0.6.2

- Persists page format as default for new diagrams
- Fixes connecting edges with entity edge style
- Adds ctrl+drag to move and clone edges
- Uses mxGraph 3.4.0.1 beta 13

29-SEP-2015: 5.0.6.1

- Fixes cursor for edges with entity edge style
- Adds link, link color and tooltip option in embed dialog
- Adds mxClientOnCreate callback for embedded diagrams
- Fixes atomic undo for new waypoints when dragging edge
- Adds labels for cloud option buttons in save dialog
- Removes open in new window for edit file in Chrome App
- Adds help menu items, FAQ search in Chrome App
- Redirect exportPdf to print action in Chrome App

27-SEP-2015: 5.0.6.0

- Fixes hover icon focus for mouse and touch events
- Fixes move of edge label with selected parent edge
- Drag connected edge adds waypoint (shift+drag moves)
- Disables loading of draft files from local storage

26-SEP-2015: 5.0.5.8

- Uses mxGraph 3.4.0.1 beta 12

26-SEP-2015: 5.0.5.7

- Fixes ensureDataSaved in chromeless mode
- Adds experimental connect edge mode

26-SEP-2015: 5.0.5.6

- Adds save dialog for Google Drive and OneDrive
- Adds storage buttons in Save dialogs
- Adds Open in new window option for PDF export
- Changes default background to white
- Fixes attempt to load realtime after export

26-SEP-2015: 5.0.5.5

- Adds print support in Chrome App (beta)
- Fixes PROXY_URL not defined in Chrome App
- Fixes click on links after panning
- Uses mxGraph 3.4.0.1 beta 11

25-SEP-2015: 5.0.5.4

- Adds export for selection cells
- Fixes possible 404 for default-style2 when switching files
- Fixes reset of background image when switching files
- Adds pagination in PDF export
- Updates zoom in toolbar after edit file dialog
- Fixes background color in print output
- Uses mxGraph 3.4.0.1 beta 10
- Waits for images in HTML labels in export
- Fixes background image for PDF export
- Connectable style overrides connectable property
- Adds nowarn URL parameter for local files
- Fixes possible NPE In HoverIcons.drag
- Added support for links in Gliffy diagrams

23-SEP-2015: 5.0.5.3

- Removes preferred mode based on domain

23-SEP-2015: 5.0.5.2

- Uses www for new, legacy for old Google Drive app
- Ignores quota exceeded errors in mxSettings
- Uses mxGraph 3.4.0.1 beta 9

23-SEP-2015: 5.0.5.1

- Adds connectable style
- Persists current edge and vertex style, copy on connect
- Fixes partial rectangle in VML
- Adds review link in Chrome App splash screen
- Fixes import of VDX files from Google Drive
- Adds File, Close menu item
- Fixes member not found in IE8- after paste
- Disables move, resize and delete of locked cells
- Adds delete protection for locked cells
- Removes preview for embed iframe in IE8-
- Fixes possible NPE in HoverIcons.drag

22-SEP-2015: 5.0.5.0

- Adds paste for images from clipboard in Chrome
- Fixes paste from Word, Excel while editing labels
- Fixes VDX/Gliffy conversion for read-only folders in Drive
- Fixes paste from Lucidchart in modern browsers
- Uses mxGraph 3.4.0.1 beta 8

21-SEP-2015: 5.0.4.6

- Replaces connectionPoints with global connect switch
- Deletes empty text cells with no fill/stroke color
- Adds select none menu item and keyboard shortcut
- Increases/checks max size for imported images
- Fixes background image aspect for SVG export
- Fixes mouse event handling errors
- Removes rounded toolbar button
- Uses mxGraph 3.4.0.1 beta 7

20-SEP-2015: 5.0.4.5

- Changes autosave delay for local storage files to 2s
- Restores hover icons after cancel drag from sidebar
- Adds hover icons after panning, drop from sidebar
- Fixes hover icons for overlapping cells, adds timer
- Selects edge under hover icon only if connected to vertex
- Scrolls to new vertex after click on hover icon
- Uses mxGraph 3.4.0.1 beta 6

19-SEP-2015: 5.0.4.4

- Exports files to same folder in Google Drive
- Adds format panel toggle button in toolbar
- Cursor keys move child cells in stack layouts
- Selects edges under hover icon on single click
- Scrolls cells to visible after shift+click in sidebar
- Hover icon click no longer connects in stack layouts
- Hides hover icons with shift/meta, keeps with ctrl
- Hides hover icons after shift/meta/ctrl+click
- Selects new target vertex after hover icon click

18-SEP-2015: 5.0.4.3

- Uses transparent shadows
- Hides hover icons during drag from sidebar
- Fixes connect to ancestors for hover icon click
- Adds shift+click in sidebar to change selection
- Hover icons ignore popup menu trigger events
- Uses ctrl+click for clone, shift+click for connect
- Adds lazy loading for state URL parameter

18-SEP-2015: 5.0.4.2

- Fixes dialog for automatic layout
- Fixes hover icons not reachable with nearby cells
- Adds hover icons for dangling edges
- Fixes possible NPE for dragging hover icons

18-SEP-2015: 5.0.4.1

- Fixes possible NS_ERROR_FAILURE in Firefox
- Fixes shadow color for embedded diagrams
- Fixes selection of images after drop
- Adds more aggressive image resizing
- Uses mxGraph 3.4.0.1 beta 5

18-SEP-2015: 5.0.4.0

- Fixes deleting cells with loops, terminals in groups
- Increases size for local storage open dialog
- Fixes mouse event on scrollbar after rubberband in IE 11
- Fixes image dialog size for older browsers
- Fixes possible parseRequestText is not a function in OneDrive
- Fixes handling of linefeeds in non-formatted labels
- Makes import and replace faster in Edit file dialog
- Autosize sets height for cells with word wrapping
- Adds link to open via Drive UI if file not found
- Uses label background while editing edge labels
- Fixes right/bottom padding for scaled page view
- Adds Ctrl+Shift-Mouse wheel for zoom on Mac
- Adds fallback to server for image export
- Parser errors are now handled separately
- Adds Ctrl+Shift+Click on connect handles
- Replaces connect icon with arrow icons
- Disables word wrap option for edges
- Fixes spelling of English resources
- Improves error handling for export
- Renames actual size to reset view
- Uses mxGraph 3.4.0.1 beta 4

12-SEP-2015: 5.0.3.7

- Handles permission change during collaboration
- Adds toggle selection in shortcuts.svg
- Adds Shift+Click to toggle selection state

11-SEP-2015: 5.0.3.6

- Fixes language in Confluence Connect
- Removes shadow and glass in quick styles
- Fixes possible URL undefined error
- Fixes possible DocumentClosedErrors
- Fixes foreignObjects in shortcuts.svg

11-SEP-2015: 5.0.3.5

- Improves error handling for realtime collaboration
- Fixes switch to custom from landscape in format panel
- Fixes paper size for print output
- Removes shapeeditor.html
- Fixes update of page size after edit file
- Fixes drop of XML into empty diagram creates new file
- Restores xml default extension for files in Chrome App
- Fixes spinner after cancel of library save in Chrome App
- Fixes extension for libraries in Chrome App
- Fixes status after autosave in Chrome App
- Removes foreignObjects in shortcuts.svg

10-SEP-2015: 5.0.3.4

- Fixes translations in Connect
- Adds mxReader.js to atlas.min.js
- Adds dropbox client to app.min.js
- Adds error message for busy state
- Fixes cursor in viewer for Connnect
- Handles modifications while saving
- Uses common mxProperties in Connect
- Fixes modified check for local files

09-SEP-2015: 5.0.3.3

- Fixes label for recent OneDrive files
- Adds common resources from Confluence
- Fixes toolbar for viewer in Connect
- Adds support for expand macro in Connect
- Fixes Google Drive client API in Opera
- Adds lazy loading for OneDrive client API
- Fixes startup in quirks and IE8 standards

07-SEP-2015: 5.0.3.2

- Makes autosave optional in Google Drive
- Adds adaptive autosave delay in Google Drive
- Fixes relative URLs in Confluence connect
- Moves atlas.min.js to war/js, uses in connect
- Adds lazy loading for sidebar search index

05-SEP-2015: 5.0.3.1

- Fixes single click on connector handle

05-SEP-2015: 5.0.3.0

- Fixes import from Dropbox, import for images
- Adds backlink to keyboard-shortcuts file
- Adds error handling for invalid URL parameter

05-SEP-2015: 5.0.2.11

- Updates atlas.min to 5.0.2.11 in Confluence connect
- Fixes handling of utf8 chars in Confluence connect
- Updates search index to include new built-in shapes
- Save dialog no longer overrides existing extension
- Use URL for filename with url and no title parameter
- Adds diagram data to shortcuts.svg, moves to root
- Uses mxGraph 3.4.0.1 beta 3

04-SEP-2015: 5.0.2.10

- Adds SVG version for keyboard shortcuts
- Adds ctrl+(shift+)cursor keys for resize
- Uses oauth2 token in sharing dialog
- Removes sharing error handling
- Uses mxGraph 3.4.0.1 beta 2

04-SEP-2015: 5.0.2.9

- Uses capability check for client-side export

03-SEP-2015: 5.0.2.8

- Fixes sharing timeout error handling

03-SEP-2015: 5.0.2.7

- Fix save diagram for new page in Confluence connect
- Shows error message if sharing dialog times out

03-SEP-2015: 5.0.2.6

- Adds clearWaypoints for multiple selection cells
- Removes wire-compression in proxy servlet
- Uses mxGraph 3.4.0.1 beta 1

31-AUG-2015: 5.0.2.5

- Fixes directory name for keybase.io auth

31-AUG-2015: 5.0.2.4

- Uses PNG+XML as default for Chrome App
- Adds PNG+XML export in Chrome App
- Uses client-side PNG+XML export in embed mode
- Fixes ctrl+drag on connector handle in FF
- Adds client-side PNG+XML file format
- Fixes possible NPE in Sidebar

28-AUG-2015: 5.0.2.3

- Increases max zoom to 160x
- Fixes possible overwrite for storage file after DnD
- Uses base64 encoding for SVG data URIs
- URI encoded content attribute for SVG+XML files
- Adds faster startup for loading with url parameter
- Fixes App.loadUrl for binary files in IE9/10

27-AUG-2015: 5.0.2.2

- Restores format for export JSON protocol event

27-AUG-2015: 5.0.2.1

- Fixes possible NPE in App.saveLibrary, createFile
- Uses utf8 for imported SVG files
- Moves canvas export to EditorUi
- Fixes click method missing on div
- Uses mxGraph 3.4 beta 12

27-AUG-2015: 5.0.2.0

- Fixes possible graph.createCurrentEdgeStyle undefined
- Fixes possible gapi.load is undefined error
- Changes color of normal unsaved status message
- Fixes possible NPE in OneDrive error handling
- Uses Youtube icon for quick start video link
- Uses numeric width and height for inserted text
- Fixes possible NPE in App.convertImages
- Fixes possible unsanitized HTML output
- Uses mxGraph 3.4 beta 11

26-AUG-2015: 5.0.1.5

- Uses client-side export for PNG in embed mode
- Fixes character encoding for PNG export in embed mode
- Adds error handling in App.saveRequest, saveLocalFile
- Adds open in new window button in export dialog
- Fixes initialization for Dropbox client
- Updates keyboard shortcuts
- Uses mxGraph 3.4 beta 10

25-AUG-2015: 5.0.1.4

- Uses mxGraph 3.4 beta 9

25-AUG-2015: 5.0.1.3

- Fix ctrl+drag of container with selected children
- Fix move of edge label with selected terminals
- Adds tooltip for sidebar sections
- Uses mxGraph 3.4 beta 8

24-AUG-2015: 5.0.1.2

- Fixes label for recent Google Drive files
- Uses mxGraph 3.4 beta 7

24-AUG-2015: 5.0.1.1

- Adds open recent menu
- Removes debugging output in open.html
- Adds lazy loading for Dropbox client API

23-AUG-2015: 5.0.1.0

- Keeps state URL parameter after open from Google Drive
- Fixes default window bounds for new files in Chrome App

23-AUG-2015: 5.0.0.9

- Adds lazy loading for Google Drive client API
- Adds open in new window option for local export

23-AUG-2015: 5.0.0.8

- Disables paste of empty string via keyboard shortcut
- Fixes slow ctrl-key handling with large clipboard data
- Sets default for adding plugins to p URL parameter
- Adds short key, handles escape in explore plugin

21-AUG-2015: 5.0.0.7

- Ignores shape for default vertex styles
- Hides background image option in Chrome App
- Removes background image option in Chrome App
- Minor fix for logo in Chrome App

21-AUG-2015: 5.0.0.6

- Fixes possible flickering for connector target drop
- Fixes logo position in Chrome App
- Fixes initial Chrome App window position
- Uses mxGraph 3.4 beta 6

21-AUG-2015: 5.0.0.5

- Uses case insensitive sorting for browser file list
- Shows drop targets for drag on connector handle
- Fixes timer for shape drop target updates
- Fixes default window size and position for Chrome App
- Uses mxGraph 3.4 beta 6

20-AUG-2015: 5.0.0.4

- Adds timer for update of shape drop targets
- Adds tooltips for shape drop targets
- Uses mxGraph 3.4 beta 5

19-AUG-2015: 5.0.0.3

- Opens dropped XML in same window for empty diagram
- Fixes import of non-PNG images in Chrome App
- Improves error messages for OneDrive
- Merges view and options section in format panel
- Removes copy on connect option in format panel
- Fixes menus and action states in Chrome App

19-AUG-2015: 5.0.0.2

- Fixes XML via drag and drop overwrites local storage file
- Fixes client-side export in Firefox, disables in Edge
- Fixes SVG for embed mode in Safari and Firefox
- Uses mxGraph 3.4 beta 4

18-AUG-2015: 5.0.0.1

- Disables client-side image export in Firefox
- Fixes invalid characters for image export in Chrome

18-AUG-2015: 5.0.0.0

- Uses mxGraph 3.4 beta 3
- Adds embedImages switch (default true) for SVG and SVG+XML in JSON protocol
- Changes autosave interval in Drive to 6 seconds
- Adds text labels for Google Drive previews in Firefox and Chrome
- Disables Google Drive in Opera
- Fixes export of binary files to cloud in IE 10
- Adds download button in revision history dialog
- Uses client-side PNG export in Firefox, Chrome and Opera
- Adds PNG image export in Chrome App
- Removes JPG export option
- Adds handling for invalid characters in Dropbox
- Fixes encoding of XML files in IE 9
- Adds error handling for large image export
- Cuts shapes and connections separately
- Deletes layers and connections separately
- Enables connections for text labels
- Fixes restore button state in revision dialog
- Uses untitled layer as name for new layers
- Adds rename layer button in layers window toolbar

06-AUG-2015: 4.9.0.9

- Moves copy on connect option to after background
- Fixes initial value of foldingEnabled in realtime
- No longer hides handles while editing label

06-AUG-2015: 4.9.0.8

- Improvements to Confluence connect functionality

06-AUG-2015: 4.9.0.7

- Improvements to Confluence connect functionality

06-AUG-2015: 4.9.0.6

- Improves error handling in Chrome App
- Adds top/bottom+left/right label position
- Adds import for local images in Chrome App
- More image resizing to reduce file size
- Chrome app no longer enforces file extension
- Adds handling for storage quota exceeded error

05-AUG-2015: 4.9.0.5

- Fixes binary base64 data in JSON protocol for IE10
- Fixes handling of 403 error in Google client
- Adds legacy.draw.io for old drive app
- Ignores errors for native undo/redo

05-AUG-2015: 4.9.0.4

- Improvements to Confluence connect functionality

04-AUG-2015: 4.9.0.3

- Adds connect plugin
- Improvements to Confluence connect functionality
- Fixes possible NPE, handles table action errors

04-AUG-2015: 4.9.0.2

- Uses mxGraph 3.4 beta 2
- Adds p URL parameter for app customization plugin IDs
- Fixes unexpected end of input, CSS in save status message
- Adds ctrl+backspace to delete shape with connections

03-AUG-2015: 4.9.0.1

- Fixes initial char for immediate editing
- Fixes text size drop down in toolbar

03-AUG-2015: 4.9.0.0

- Uses mxGraph 3.4 beta 1
- Adds xml to export event in JSON protocol
- Fixes rendering of trailing newlines in HTML labels
- Fixes repaint for in-place editor while zooming
- Fixes font size in format panel for zoomed text
- Adds rounded to copy style and default style
- Fixes paste into active layer and locked layers
- Adds ctrl+connect to copy source terminal
- Adds ctrl+mouse wheel to zoom on Windows and Linux
- Adds ctrl+delete to delete shape with connections
- Deletes shapes and connections separately
- Changes connect (plus) icon to arrow icon
- Copy on connect is now disabled by default
- Adds cross-browser Ctrl-/Cmd+B/I/U for bold, italic, underline 
- Adds shift in keyboard shortcut for ungroup, toBack
- Fixes update of page view option in format panel
- Adds message with save link for new unsaved files
- Fixes math rendering while editing and zooming
- Adds splash=0 URL parameter to bypass splash screen
- Fixes reset while entering URL in background image dialog
- Adds link to unsaved data status message for saving

27-JUL-2015: 4.8.5.14

- Improvements to Confluence connect functionality

24-JUL-2015: 4.8.5.13

- Improvements to Confluence connect functionality

24-JUL-2015: 4.8.5.12

- Adds autosave option to load message in JSON protocol
- Adds randomized Chrome App and Docs Add-on link in footer
- Removes link to WordPress plugin in footer

23-JUL-2015: 4.8.5.11

- Removes development code for in-place editing

23-JUL-2015: 4.8.5.10

- Corrects Hebrew and Arabic resources base directions

22-JUL-2015: 4.8.5.9

- Replaces technology with wordpress plugin in footer
- Fixes saving of local library files to device
- Changes alignment of social icons in footer
- Removes debugging output in More Shapes dialog

21-JUL-2015: 4.8.5.8

- Adds html export format option in JSON protocol
- Fixes exporting in embed mode
- Fixes splash screen after cancel import from browser in embed mode
- Restores social icons in footer
- Disables import menu for read-only files
- Fixes enabled state of grid menu item
- Fixes enabled state of view toolbar items in embed mode

20-JUL-2015: 4.8.5.7

- Uses new more shapes dialog in quirks mode
- Fixes special characters for filename in OpenServlet
- Adds error message for invalid file encoding in OpenServlet
- Fixes enabled state of Extras menu if no file open
- Adds fileId for redirect to realtime if no file open
- Removes Google file menu items if no file is open

18-JUL-2015: 4.8.5.6

- Adds filter for license checks

18-JUL-2015: 4.8.5.5

- Fixes initial state for toolbar items, share action
- Adds local URL parameter for device app mode
- Remember me in auth dialog is now checked by default

18-JUL-2015: 4.8.5.4

- Fixes lost Google authentication cookie
- Adds error handler in JS response from OpenServlet

17-JUL-2015: 4.8.5.3

- Restores i18n resources in Chrome App

16-JUL-2015: 4.8.5.2

- Restores lost arrange menus

16-JUL-2015: 4.8.5.1

- Adds error message for import of local images in Chrome App
- Fixes width of filename element in header
- Adds xmlsvg format, xml for all formats in export message
- Adds support for disabled export options in Google Drive
- Improves error handling in DropboxClient and DriveClient
- Fixes various actions and menus for read-only files
- Uses new more shapes dialog in Chrome App
- Removes unused files from Chrome App package

15-JUL-2015: 4.8.5.0

- Fixes timing issue in revision dialog after restore
- Reduces size of keyboard-shortcuts.png
- Adds new more shapes dialog with preview in online mode
- Moves actual size action from toolbar to zoom dropdown
- Uses mxGraph 3.3.1.2 beta 5

13-JUL-2015: 4.8.4.2

- Removes gradient, adds connection type in toolbar

13-JUL-2015: 4.8.4.1

- Adds PNG export for offline mode in Google Chrome
- Fixes creating files via create button in Drive
- Changes footer, moves social links to help menu

11-JUL-2015: 4.8.4.0

- Avoids closing closed document in DriveRealtime
- Uses mxGraph 3.3.1.2 beta 4
- Fixes possible NPE in mxEdgeStyle.SegmentConnector
- Moves handling of decideLater to callback

11-JUL-2015: 4.8.3.9

- Fixes handling of decide later in create dialog
- Click on collaborator in realtime shows last selection
- Ignores empty selection to reduce history size in realtime
- Ignores possible quota exceeded in DriveClient.setUserId
- Fixes possible NPE in StorageDialog, local file save

10-JUL-2015: 4.8.3.8

- Updates keyboard shortcuts for touch devices
- Fixes translation for copyOf in RTL languages
- Fixes DIV for embedded diagrams in quirks, IE8 standards mode
- Ignores User cancelled errors in Chrome App
- Uses mxGraph 3.3.1.2 beta 3
- Fixes accidental inserts of labels with double click
- Fixes initial value, clear icon in shape search for IE8
- Removes Azure from default sidebars
- Adds networkshapes URL parameter for testing
- Fixes insert location for created shapes
- Adds styled table, title in misc section
- Replaces circles with ellipses in general section

08-JUL-2015: 4.8.3.7

- Fixes file extensions for saving via servlet
- Fixes save of browser file as device file
- Disables local save in FF11, IE6, IE7, IE8
- Fixes handling of invalid state args
- Fixes encoding for cross-browser use of OpenServlet
- Fixes navigate dialog for click on filename in IE8
- Fixes ignored bottom and right border for export
- Disables vertical scroll for fit page width
- Disables insert, layout menu for locked layers
- Disables insert, paste for locked layers
- Adds keyboard shortcuts in help menu

06-JUL-2015: 4.8.3.6

- Updates French and Arabic i18n

02-JUL-2015: 4.8.3.5

- Fixes NPE in insert menu

02-JUL-2015: 4.8.3.4

- Fixes possible NPE for insert dropdown in toolbar

02-JUL-2015: 4.8.3.3

- Uses simple menu, toolbar and sidebar
- Rearranges various menus

30-JUN-2015: 4.8.3.2

- Disables cleanup of selection state in realtime
- Allows decimal values for size and position in arrange panel
- Changes search label in Help menu to English
- Fixes swimlane selection on mouse up
- Adds tooltip for small spinner in Google Drive
- Fixes double click text insert in locked layers
- Fixes position for user element
- Adds fallback for moving layers on touch devices

30-JUN-2015: 4.8.3.1

- Removes Computer Networks from More shapes dialog

30-JUN-2015: 4.8.3.0

- Fixes save action in non-embedded mode
- Adds locking for layers, updates dialog
- Enables edit metadata for diagram
- Moves small file spinner to menubar
- Improves various labels in the UI
- Adds view menu in simple mode
- Improves German translation

29-JUN-2015: 4.8.2.5

- Aligns language menu with UI elements
- Moves formatPanel in normal view menu
- Adds toBack/toFront in simple toolbar
- Fixes anti aliasing for rounded icon

27-JUN-2015: 4.8.2.4

- Fixes embed buttons in text toolbar mode
- Fixes dropdown location for toolbar in normal mode
- Fixes update of font and size after toolbar switch

27-JUN-2015: 4.8.2.3

- Fixes font name and size in toolbar
- Adds text format toolbar in simple mode
- Adds gradient, toggle rounded for toolbar in simple mode
- Adds special i18n language bundle
- Removes GIF image export option

26-JUN-2015: 4.8.2.2

- Add embedded image support for .vsdx import
- Rearranges help menu, changes 10 tips video

25-JUN-2015: 4.8.2.1

- Fixes cursor for menubar, toolbar, sidebar items
- Uses current mouse location for Ctrl(+Shift)+K
- Adds shift+tab to select previous cell
- Adds zoom, format toolbar buttons in simple mode
- Moves layout from advanced to main menubar in simple mode
- Uses Atlas 5.7 CSS style for toolbar items
- Uses mxGraph 3.3.1.2 beta 2

24-JUN-2015: 4.8.2.0

- Moves language menu to top, right corner
- Adds insert text, rectangle, ellipse
- Fixes location for single click inserts
- Adds simple=1 URL parameter (experimental)
- Fixes numeric key shortcuts for numeric keypad
- Fixes minimum height for exported images
- Fixes zoom button mouse clicks in embedded diagrams on touchscreens
- Adds space+drag for panning, handles tab while editing
- Uses mxGraph 3.3.1.2 beta 1

23-JUN-2015: 4.8.1.4

- Adds saveAndExit, modified URL parameters for embed mode
- Adds status messages, modified flags, resource keys
- Fixes SVG export via messages
- Uses mxGraph 3.3.1.1

19-JUN-2015: 4.8.1.3

- Improves Atlassian Connect integration

18-JUN-2015: 4.8.1.2

- Improves Atlassian Connect integration

18-JUN-2015: 4.8.1.1

- Shows embed buttons after loading diagram
- Adds xmlpng format for export and load message
- Adds modified parameter in exit event message

18-JUN-2015: 4.8.1.0

- Adds export messages in JSON protocol, png export
- Fixes loading HTML files with ampersand in title
- Uses mxGraph 3.3.1.0

18-JUN-2015: 4.8.0.6

- Adds proto, spin URL parameters for embed mode
- Fixes import of Gliffy files

17-JUN-2015: 4.8.0.5

- Renames image export servlet

16-JUN-2015: 4.8.0.4

- Click on plus icon in stack does no longer connect to clone
- Fixes import of VSDX files via drag and drop
- Fixes broken images, hardcoded delay for image export
- Fixes child order for moving selected cells in stacks
- Fixes demo mode, decide later option for iOS devices
- Uses mxGraph 3.3.1.0 beta 6

15-JUN-2015: 4.8.0.3

- Uses (shift) click on plus icon to (connect and) clone
- Click on selected child in swimlane selects swimlane
- Uses chooser for exporting files in Chrome App
- Fixes demo mode for persistent backend choice
- Fixes size of replace shape for touch devices
- Removes decide later option in Splash screen
- Reduces file size for dummy PNG images
- Fixes Google Drive, OneDrive in IE11
- Enter key starts editing like F2 key
- Uses move cursor for sidebar items
- Click on sidebar stops editing
- Adds logging for shape search
- Uses mxGraph 3.3.1.0 beta 5

08-JUN-2015: 4.8.0.2

- Uses new export servlet URL
- Fixes font for math export
- Updates Hungarian and Russian translation
- Limits zoom to 20x
- Sets initial state of general sidebar to expanded
- Fixes delete action during interactive operation
- Remember in splash defaults to true
- Fixes scaled drop connect to edge

05-JUN-2015: 4.8.0.1

- Improves mousewheel zoom performance
- Fixes orthogonal edge router
- Uses mxGraph 3.3.1.0 beta 4

03-JUN-2015: 4.8.0.0

- Adds caching for formatted text labels and math
- Fixes initial svg/html save in undefined mode 
- Uses mxGraph 3.3.1.0 beta 3
- Fixes printing with math

02-JUN-2015: 4.7.0.4

- No longer sends local save to server if supported
- Adds status pass-through for proxied requests
- Fixes ignored filenames for bitmap export
- Adds export for SVG with embedded XML
- Fixes import of files in Chrome App
- Adds support for embedded SVG files

01-JUN-2015: 4.7.0.3

- Adds cloud support in advanced export dialog
- Hides toolbar for print in chromeless mode
- Fixes modified state in embed mode
- Fixes row drop location on lists
- Adds returnbounds URL parameter
- Adds ER schema row shapes

30-MAY-2015: 4.7.0.2

- Fixes click required for connect on iOS
- Fixes replace shape delay for images
- Fixes i18n Dropbox app folder check

29-MAY-2015: 4.7.0.1

- Adds export to Google Drive, Dropbox and OneDrive
- Fixes paste of Gliffy data into diagram
- Fixes lost connections for duplicate cells
- Fixes changing points in unconnectable groups
- Runs layouts for groups and finds tree roots
- Adds edit link in arrange format panel
- Adds Dropbox and OneDrive options in Link Dialog
- Fixes moved edge labels when zoom is changed
- Changes initial mode to undefined in client mode
- Updates format panel state in embed mode
- Tidies up format panel in Atlas theme
- Adds tooltip for rightclick pan
- Uses mxGraph 3.3.1.0 beta 2

28-MAY-2015: 4.7.0.0

- Uses mxGraph 3.3.1.0 beta 1
- Adds list, dimension, collate and sort in advanced sidebar
- Moves text shapes from Advanced to General sidebar
- Shift-click on plus icon creates new connection
- Adds 'clear waypoints' in arrange format panel
- Fixes incremental selection of cell hierarchies
- Fixes NS_ERROR_NOT_IMPLEMENTED in Firefox 3.6
- Sets orthogonal direction for fields and rows
- Drop on lifelines replaces participant shape
- Direct child selection for UML and ER shapes
- Fixes text rendering with overflow=fill
- Adds delay for replace shape icon
- Adds schema row in ER sidebar

22-MAY-2015: 4.6.1.2

- Improves local shape search, adds tags

22-MAY-2015: 4.6.1.1

- Fixes name encoding when moving files to Dropbox apps folder

21-MAY-2015: 4.6.1.0

- Fixes loading files from non-app folder in Dropbox
- Handles 404 status codes when loading Dropbox files
- Fixes loading of libraries files as diagrams
- Fixes ignored background in advanced image export
- Fixes paste here menu for chromeless mode
- Makes toolbar for chromeless mode transparent

20-MAY-2015: 4.6.0.11

- Fixes possible NPE in searchEntries

20-MAY-2015: 4.6.0.10

- Fixes move of parent after click on child connect icon on touch devices
- Fixes last result page in search
- Fixes possible NPE in Revision dialog
- Fixes detection of file types in URLs with parameters
- Catches decoding errors in extractGraphModelFromPng
- Fixes appIcon link for current file
- Fixes possible NPE in New dialog

19-MAY-2015: 4.6.0.9

- Uses mxGraph 3.3.0.1
- Fixes second click on 1:1 for chromeless mode with no page view
- Fixes flow for picking Dropbox files
- Adds paste here action in context menu
- Enables math typesetting in demo mode
- No longer sets initial mode for demo=1

18-MAY-2015: 4.6.0.8

- Uses mxGraph 3.3.0.1 beta 3
- Fixes forward references in FF ESR
- Fixes moving and selection for parts and groups

18-MAY-2015: 4.6.0.7

- Disables Dropbox in IE9
- Uses mxGraph 3.3.0.1 beta 2
- Keeps page title before loading file
- Fixes possible NPE in mxShape.destroyCanvas
- Fixes loading from URL in old versions of IE

16-MAY-2015: 4.6.0.6

- Opens and imports all .vsdx, Gliffy and PNG+XML files
- Adds Ctrl+connect to disable copy of source
- Fixes composite drop connect offset

14-MAY-2015: 4.6.0.5

- Adds timer for drop connect target switching
- Fixes handling of "new" action in draft mode
- Adds storage option in save and copy dialog
- Adds support for libraries in Chrome App
- Replaces "Ask later" with "Decide later"
- Fixes composite drop connect location
- Removes UML shapes with HTML labels
- Allows for compressed XML templates

11-MAY-2015: 4.6.0.4

- Fixes offset for drop connect edge on stack child
- Adds support for undefined mode in save action
- Adds ask later option in splash screen
- Changes initial mode to undefined for url parameter
- Adds ask later option in create dialog
- Allows PNGs for create and url URL parameters
- Fixes handling of extra spaces in search box
- Fixes double click on disabled graphs

08-MAY-2015: 4.6.0.3

- Uses mxGraph 3.3.0.1 beta 1
- Improves Japanese and Danish translations
- Fixes DOM error when opening files in IE9
- Fixes handling of libs parameter
- Improves metadata and image dialog
- Fixes accidental loss of meta data
- Fixes handling of clicks in layers dialog for Chrome dev channel

05-MAY-2015: 4.6.0.2

- Fix for IE echo open

04-MAY-2015: 4.6.0.1

- NPE fix for Gliffy import

03-MAY-2015: 4.6.0.0

- First iteration of new .vsdx importer

23-APR-2015: 4.5.0.5

- Uses mxGraph 3.3.0.0
- Improves Japanese translations
- Adds rounded and glass format options for UML lifelines
- Fixes replace shape icon in older IE versions

23-APR-2015: 4.5.0.4

- Adds global mxLoadSettings switch, Sidebar.prototype.searchFileUrl
- Fixes folding icons for embedded diagrams
- Adds orthogonalPerimeter for UML activation
- Adds UML sequence diagram building blocks
- Adds timer for replace shape and connect

22-APR-2015: 4.5.0.3

- Limits revision history preview default scale
- Limits drive thumbnail sizes
- Adds timer-based outline connect
- Fixes accidental loss of modified shape data
- Fixes horizontal tree layout
- Fixes scaled rendering of UML frames
- Fixes shadow for UML destroy shape

21-APR-2015: 4.5.0.2

- Fixes search UI for atlas theme
- Uses mxGraph 3.2.0.1 beta 7
- Fixes search button state in offline mode

21-APR-2015: 4.5.0.1

- Maps iconfinder search to global search

21-APR-2015: 4.5.0.0

- Adds shape search
- Uses mxGraph 3.2.0.1 beta 6
- Fixes click on paper size radio button labels
- Improves Japanese and Danish translations
- Fixes image action if no cells are selected
- Adds UML boundary, entity and control shapes and lifelines
- Uses data URIs for various images

15-APR-2015: 4.4.1.5

- Adds plus click handling for child cells
- Fixes Russian, Danish and Spanish translations

13-APR-2015: 4.4.1.4

- Fixes CORS for MathJax in embedded diagrams

13-APR-2015: 4.4.1.3

- Uses mxGraph 3.2.0.1 beta 5
- Fixes possible invisible buttons in more shapes dialog
- Enables local file saving for non-Safari browsers
- Scales data URIs above 1M (hold Ctrl to bypass)
- Uses local copy of MathJax
- Uses static JS for embedding with no custom shapes
- Fixes edges in revision dialog preview
- Adds support for composite cells
- Fixes conversion of some numeric text labels
- Fixes shadow for transparent ellipses in Firefox
- Adds handle for hexagon shape
- Fixes duplicate extension in create dialog
- Fixes make copy of HTML files for Dropbox and OneDrive

10-APR-2015: 4.4.1.2

- Fixes NPE in OpenServlet

09-APR-2015: 4.4.1.1

- Fixes caching of images for Google Drive thumbnails

09-APR-2015: 4.4.1.0

- Uses mxGraph 3.2.0.1 beta 4
- Fixes undo for text editing and insert labels
- Uses Ctrl+Shift+Z for redo on Mac
- Changes keyboard shortcut for autosize to Ctrl+Shift+Y
- Inserts new cell after editing shape in createShape
- Uses orthogonal edge style in activity and sequence diagrams
- Uses grid for lifline and UML frame handle
- Fixes roundtrip for numeric labels with 0 prefix
- Adds UML frame shape and handle, participant style for lifeline
- Disables recursive resize for UML lifelines
- Pre-selects first entry in revision dialog, shows full timestamp
- Ignores pointer events for transparent groups
- Fixes removing cells from selected parents
- Adds arc handle for rounded hexagon shape

25-MAR-2015: 4.4.0.9

- Uses mxGraph 3.2.0.1 beta 3
- Fixes selection state after enter and exit group
- Fixes update of unchanged geometries in stack layouts
- Renames navigation switch, moves to advanced menu

18-MAR-2015: 4.4.0.8

- Uses mxGraph 3.2.0.1 beta 2
- Fixes possible NPE in restore

18-MAR-2015: 4.4.0.7

- Fixes format sidebar, buttons in embed mode
- Fixes canvas state for certain shapes

17-MAR-2015: 4.4.0.6

- Fixes missing restore in mxgraph.aws2.sdks.nodejs

14-MAR-2015: 4.4.0.5

- Uses mxGraph 3.2.0.1 beta 1
- Hides inactive custom handles for edges if custom handle is active
- Adds header for SVG, declaration for XML exports

13-MAR-2015: 4.4.0.4

- Uses mxGraph 3.2.0.0
- Fixes HTML embed dialog size and preview in IE
- Adds arcSize handle
- Adds tooltips for plus and rotate handle
- Hides tooltip when editing starts

12-MAR-2015: 4.4.0.3

- Uses mxGraph 3.2.0.0 beta 4
- Fixes autosave, makes files read-only in chromeless mode
- Fixes embedded iframe height, timing problems in embed preview
- Fixes fit, resize and autosize for chromeless and embed mode
- Fixes error handling, adds console output for errors in embed
- Trims data for embedded diagrams to fix inflate in IE

11-MAR-2015: 4.4.0.2

- Uses mxGraph 3.2.0.0 beta 3
- Adds keyboard shortcuts for zoom actions
- Adds Or-, Sum- and LineEllipse in Advanced sidebar
- Fixes escape for all custom handles
- Fixes rounding for edge arrow sizes
- Makes flow layout settings available via cell style
- Sets interRankCellSpacing to 50 in flow layouts
- Shows/hides link hint if link changes
- Removes text format change for edit link action
- Fixes renaming of storage files and libraries
- Fixes conversion of newlines for formattedText action
- Fixes rounding for drop connect of groups with edges
- Fixes drop connect location for child cell in container
- Adds rounding in mxConnectionHandler.createTargetVertex
- Add rounding for offset after Shift+collapse/expand
- Fix duplicate action for cells and descendants

10-MAR-2015: 4.4.0.1

- Uses mxGraph 3.2.0.0 beta 2
- Selects parents after deleting cells
- Fixes delayed selection after folding
- Enables navigation in chromeless mode
- Uses Graph subclass in embedded diagrams
- Adds nav parameter for embedded diagrams
- Adds Ctrl+Enter for cloning cells "in-place"
- Adds autosave for change of navigation switch
- Fixes focus after stop editing with Ctrl+Enter
- Disables extending parents with stack layouts on add
- Shift+expand/collapse moves siblings cells (experimental)
- Expand/collapse resizes parent stack (press alt to disable)
- Collapsed swimlane in horizontal stack has vertical label
- Ignores previous width/height for collapse/expand in stack
- Fixes position of close icon in format panel for quirks, FF
- Changes key shortcuts for expand and collapse (Ctrl+Home/End)
- Changes key shortcuts for edit and enter group (Ctrl+Shift+Home/End)
- Adds key shortcuts for select next/previous/parent/child (Ctrl+Tab/Ctrl+Shift+Tab)

07-MAR-2015: 4.4.0.0

- Uses mxGraph 3.2.0.0 beta 1
- Fixes size handles for locked shape
- Collapsed swimlane in vertical stack has horizontal label
- Fixes nested container layout
- Adds swimlaneFillColor to copied styles
- Changes UML lifeline container state
- Adds new UML and ER elements in UML sidebar
- Fixes replace shape applies marker styles for edges
- Fixes drop on container from sidebar, stops editing
- Adds table elements in entity relation sidebar
- Adds alt-shift to only highlight drop target

06-MAR-2015: 4.3.0.2

- Changes default edge style to entity relation in ER sidebar
- Adds table, row and 1 mandatory to 1 optional relation in ER sidebar
- Adds edit shape option in format menu and style panel
- Changes title and size of edit style dialog
- Adds create shape option in sidebar footer

05-MAR-2015: 4.3.0.1

- Adds Options, Advanced, Custom shapes menu
- Adds control key to apply arrow handle to opposite side
- Fixes arrow handles to appear on same side
- Fixes custom shapes in embedded diagrams
- Uses mxGraph 3.1.3.1 beta 2

05-MAR-2015: 4.3.0.0

- Adds shapeeditor.html for implementing custom shapes
- Invokes turn (rotate 90 degrees) for click on rotate handle
- Adds experimental support for custom stencils via shape=stencil(value)
- Uses mxGraph 3.1.3.1 beta 1

04-MAR-2015: 4.2.3.2

- Fixes zoom buttons for chromeless mode
- Adds link to 10 tips video in help menu
- Adds and removes a number of styles in copy/paste style
- Fixes undefined not a function in autosave on error
- Shows 100 revisions in Dropbox revision history dialog
- Fixes handling of rev URL parameter in Dropbox client

03-MAR-2015: 4.2.3.1

- Fixes modified flag update after save response
- Adds revision history dialog for Dropbox files
- Shows timestamp for same day, current revision in revision history
- Does no longer show layers/restore libraries in chromeless mode
- Adds hover style for images in sidebar titles
- Fixes wrapping in sidebar titles with icons
- Fixes copy paste of orphaned relative child cells
- Shows small spinner while updating Drive thumbnails
- Shows small spinner for autosave of libraries and files

02-MAR-2015: 4.2.3.0

- Adds cells in libraries

01-MAR-2015: 4.2.2.0

- Makes html extension default for cloud files
- Adds xhtml namespace in html files
- Fixes autosize icon in Arrange panel

01-MAR-2015: 4.2.1.5

- Disabes OneDrive in demo and stealth mode
- Changes html files to redirect to edit URL

28-FEB-2015: 4.2.1.2

- Fixes refresh of outline window after hiding
- Disables OneDrive on iOS
- Keeps html extension for open via drag and drop
- Fixes file extensions for download of html files
- Centers buttons in confirm dialog
- Adds immediate save for change from html to other extension

27-FEB-2015: 4.2.1.1

- Fixes download as XML, embedded PNG with XML for html files
- Rename file to html creates revision and saves
- Edit in local HTML files creates copy
- Fixes possible NPE

27-FEB-2015: 4.2.1.0

- Saves html files as embedded HTML with edit link

27-FEB-2015: 4.2.0.1

- Fixes URL for windows live API

27-FEB-2015: 4.2.0.0

- Adds snapping for custom arrow handles
- Fixes background image in image and PDF export
- Adds support for OneDrive
- Fixes extensions for library files
- Adds xml extension for files in Google Drive
- Adds snapping for new vertical/horizontal connections
- Adds shift to disable adding waypoints, custom handles
- Adds orange color style, uses in format panel
- Adds clibs URL parameter for custom libraries
- Fixes URL decoding for libs URL parameter
- Resets revision timer after create revision
- Simplified edge entries for general sidebar
- Fixes russian translations
- Uses mxGraph 3.1.2.3 beta 8

21-FEB-2015: 4.1.0.5

- Adds edge shape/style toolbar items
- Adds vertical text option
- Adds simple arrow shape
- Uses mxGraph 3.1.2.3 beta 7

20-FEB-2015: 4.1.0.4

- Changes thumbnail size in Google Drive to 480px
- Disables zoom with mousewheel if dialogs are open
- Adds zoom controls for chromeless mode
- Adds version in about dialog
- Adds preview in revision history dialog
- Uses mxGraph 3.1.2.3 beta 6

19-FEB-2015: 4.1.0.3

- Uses mxGraph 3.1.2.3 beta 5
- Fixes possible NPE in arrow shape
- Adds preview dialog for revision history
- Adds preview in iframe embed dialog

19-FEB-2015: 4.1.0.2

- Adds preview in embed dialog
- Fixes possible NPE in arrow shape
- Fixes invalid argument error for drag and drop of text in IE10
- Uses mxGraph 3.1.2.3 beta 4

19-FEB-2015: 4.1.0.1

- Fixes NPE in embed dialog

19-FEB-2015: 4.1.0.0

- Adds waypoints for arrows and links
- Adds glass effect to current style
- Fixes gradient color action state
- Adds arrows to advanced sidebar
- Adds connections to general sidebar
- Removes edge styles from toolbar
- Separates waypoints and connection in style panel
- Adds edge width option in arrange panel
- Changes replace existing diagram to open in this window
- Fixes connection points for tee and corner shape
- Fixes iconfinder search client for GitHub domain
- Adds thumb=0 URL parameter to disable thumbnails in Drive
- Adds autosize option in embed dialog for responsive pages
- Adds rounded support for single- and doubleArrow vertices
- Disables splitting edges with edges
- Removes waypoints for straight segments
- Inverts order of lineend/-start options in format panel
- Removes dos.xml
- Uses mxGraph 3.1.2.3 beta 3

13-FEB-2015: 4.0.1.2

- Safeguards Dropbox client
- Changes error reporting to 2x2.png

13-FEB-2015: 4.0.1.1

- Fixes sidebar entry for device libraries after save
- Fixes object is not a function in File.autosave
- Makes creation of thumbnails safer
- Disables writingDirection for no selection

13-FEB-2015: 4.0.1.0

- Fixes vertical center for default text size
- Fixes update of XML in Drive before unload
- Allows negative spacing values in format panel
- Uses webViewLink metadata in getPublicUrl
- Disables Google Drive for IE9
- Adds thumbnails for Google Drive files
- Fixes possible localStorage undefined error
- Adds writing direction in menu and format panel
- Changes labels in feedback dialog and emails
- Fixes clipboard for selected cells and descendants
- Uses mxGraph 3.1.2.3 beta 2

10-FEB-2015: 4.0.0.1

- Fixes broken arrow shape

10-FEB-2015: 4.0.0.0

- Adds library files for device, local storage and dropbox
- Fixes change of open libraries from different tabs
- Fixes summing junction and or shape in Flowcharts
- Adds drag and drop in URL and filename dialogs
- Adds drag and drop for opening files from URL
- Adds download option in library dialog
- Fixes ctrl/cmd removes focus for input
- Adds recursive rubberband selection
- Adds decimal values for angles
- Fixes z-index for subdialogs
- Adds open library from URL
- Fixes possible NPEs
- Uses mxGraph 3.1.2.3 beta 1

09-FEB-2015: 3.8.0.5

- Fixes drag and drop for Gliffy data and HTML markup
- Fixes possible arguments error in FF 13
- Fixes possible value outside range error
- Fixes no click on DIV in KHTML
- Fixes possible NPEs
- Uses mxGraph 3.1.2.2

07-FEB-2015: 3.8.0.4

- Fixes gradient option with no fill color
- Adds rotation for edge labels
- Fixes default size for double click on background
- Uses mxGraph 3.1.2.2 beta 6

07-FEB-2015: 3.8.0.3

- Chrome App reads PNG+XML files
- Adds drag and drop for text editor
- Adds drag and drop for image and link dialogs
- Fixes NPE in older versions of Chrome
- Uses mxGraph 3.1.2.2 beta 5

05-FEB-2015: 3.8.0.2

- Fixes parsing of PNG+XML files in non-IE browsers
- Double click on background adds autosize textbox
- Fixes possible NPE for autosize
- Fixes possible NaN for stepper with empty input

04-FEB-2015: 3.8.0.1

- Adds keyboard shortcut, buffer for autosize
- Fixes SVG export for some HTML entities in IE8 and IE11
- Adds close button in format panel
- Moves dialogs on top of footer
- Uses mxGraph 3.1.2.2 beta 4

31-JAN-2015: 3.8.0.0

- Adds revision history dialog in Drive mode
- Fixes renaming of libraries
- Allows XML files to be loaded as libraries
- Fixes overridden mime type of libraries
- Fixes import of Google Drive files
- Improves open and import of .vsdx and Gliffy files
- Fixes possible document closed errors
- Uses mxGraph 3.1.2.2 beta 3

09-JAN-2015: 3.7.7.8

- Adds Rack/F5 stencils
- Adds photos=1 URL parameter
- Removes photos scopes in Drive
- Enlarges Text item in sidebar

08-JAN-2015: 3.7.7.7

- Handles paste for Gliffy data
- Fixes size of pasted data URI images
- Fixes copy from Lucidchart in Firefox
- Fixes extensions for VDX and Gliffy files
- Shows spinner for asynchronous datatransfer

08-JAN-2015: 3.7.7.6

- Fixes images in PDF export with math
- Handles VDX/Gliffy files via DnD
- Adds import for Gliffy files
- Handles paste from Lucidchart
- Adds edit style in format panel
- Uses mxGraph 3.1.2.2 beta 2

06-JAN-2015: 3.7.7.5

- Adds page scale in print dialog
- Fixes enter in dialogs for IE8-10
- Fixes CSS for IE8 standards mode
- Fixes help menu for quirks, IE8, iOS
- Fixes font size control for IE8/11
- Fixes public URL filename encoding
- Uses mxGraph 3.1.2.2 beta 1

04-JAN-2015: 3.7.7.4

- Fixes typo in splash screen

04-JAN-2015: 3.7.7.3

- Normalizes page layout, adds rounding in PDF export
- Adds search box in help menu
- Adds support for data URI in image dialog and clipboard

31-DEC-2014: 3.7.7.2

- Fixes toolbar button for format panel

31-DEC-2014: 3.7.7.0

- Adds format panel
- Fixes scrollbars in IE8 standards
- Uses mxGraph 3.1.2.1 beta 13

22-DEC-2014: 3.7.6.2

- Removes dashed line style for guides
- Improves Russian translation
- Fixes use of iOS devices in Android sidebar
- Adds public Drive file URL in embed dialogs
- Uses mxGraph 3.1.2.1 beta 12

19-DEC-2014: 3.7.6.1

- Adds Enterprise Integration Patterns (EIP) shapes
- Adds stealth=1 URL parameter for offline mode
- Removes downloadify, adds save=local URL parameter
- Fixes text opacity in quirks, HTML with NO_FO
- EditorUi.showImageDialog invokes callback with null
- Uses mxGraph 3.1.2.1 beta 11

16-DEC-2014: 3.7.6.0

- Fixes possible artifacts for selection boxes
- Makes connection icons smaller
- Fixes drag and drop for image links
- Uses mxGraph 3.1.2.1 beta 10

12-DEC-2014: 3.7.5.10

- Fixes menu states in embed mode

12-DEC-2014: 3.7.5.9

- Unifies code for copy/paste and drag and drop
- Removes mxClipboard.stringToCells
- Enables drag and drop of XML text for open and import
- Applies pending edits in save and apply action
- Assigns Ctrl+Shift+R to clearDefaultStyle
- Renames reset- to clearDefaultStyle, reset- to clearWaypoints
- Hides ungroup for containers and edges with labels
- Fixes size in background image dialog
- Removes menubar padding in compact, embed view
- Adds highlights for drop targets
- Removes page and local storage clipboard
- Fixes errors for strong security settings in FF
- Uses mxGraph 3.1.2.1 beta 9

09-DEC-2014: 3.7.5.8

- Fixes file extensions for PNG and HTML files
- Open XML, PNG and HTML files by dropping anywhere
- Removes iframe for opening local files (except IE)
- Adds alt key to import dropped files at origin
- Adds switch shape in Advanced sidebar
- Uses mxGraph 3.1.2.1 beta 8

09-DEC-2014: 3.7.5.7

- Fixes update of parent highlight if parent changes
- Fixes fuzzy images in image export, Docs add-on
- Uses mxGraph 3.1.2.1 beta 7

09-DEC-2014: 3.7.5.6

- Removes debugging output in image and PDF export
- Fixes timeout for chromeless mode with non public URLs
- Fixes error handling if realtime client API does not load
- Adds alt key to disable drop into groups for existing cells
- Uses mxGraph 3.1.2.1 beta 6

08-DEC-2014: 3.7.5.5

- Shows error if realtime API cannot be loaded
- Fixes segment edge handler
- Limits size for diagrams in feedback
- Fixes dragging existing cells into containers
- Adds disabled button states in CSS
- Fixes black JPG background for older diagrams
- Uses mxGraph 3.1.2.1 beta 5

05-DEC-2014: 3.7.5.4

- Fixes possible NPEs in SegmentConnector
- Fixes background color in cropped PDF exports
- Fixes PDF export size via export dialog
- Uses mxGraph 3.1.2.1 beta 4

04-DEC-2014: 3.7.5.3

- Fixes possible NPEs
- Uses mxGraph 3.1.2.1 beta 3

04-DEC-2014: 3.7.5.2

- Fixes possible text clipping in image and PDF export
- Replaces labels with previews in Format, Style menu
- Changes shortcuts for zoomin, zoomout to ctrl+plus/minus
- Fixes arrow directions in SegmentConnector
- Improves Chinese, Spanish translations
- Adds rounding in OrthConnector
- Uses mxGraph 3.1.2.1 beta 2

01-DEC-2014: 3.7.5.1

- Shows connect icon with control instead of shift, for selected cells
- Renames switchDirection action to turn
- Inverts constraints when turning edges
- Selects cells in groups when editing starts
- Fixes select all edges for edges with labels
- Fixes moving of edge labels in groups
- Adds shift key to keep connection points visible
- Keeps connection points visible while over cell
- Improves Chinese translation
- Uses mxGraph 3.1.2.1 beta 1

25-NOV-2014: 3.7.5.0

- Changes background color of sidebar to white
- Undo in text editor stops editing after last change
- Fixes focus rectangle for edge label editing in IE
- Fixes gradients with no fill color in VML
- Fixes autoscroll after click on scrollbar in IE11
- Uses Helvetica Neue as default font in CSS
- Fixes ignored styles after style classnames
- Uses 240px sidebar, 46x46px for entries in atlas
- Adds nl2Br style to disable conversion of linefeeds
- Fixes HTML source mode editor size for edges
- Hides handles while editing cell labels
- Automatically removes empty edge labels
- Double click on edge adds new label
- Uses TLS for image and PDF export
- Uses mxGraph 3.1.2.0 beta 4

25-NOV-2014: 3.7.4.5

- Fixes italic rich text editing
- Fixes HTML source mode editor size
- Fixes possible NPE in mxEdgeSegmentHandler.start
- Fixes bug in mxCellEditor.resize for edge labels

24-NOV-2014: 3.7.4.4

- Fixes typo in offline cache file

24-NOV-2014: 3.7.4.3

- Adds word wrapping, formatted labels to various shapes
- Adds larger buttons, CSS styles for all buttons
- Click on background closes modal dialogs
- Makes color dialogs closable, checkbox labels clickable
- Adds special handle for fixed connection points
- Adds Vertical/Horizontal Flow Layout in advanced sidebar
- Fixes chromeless autoscale for multiple pages
- Fixes page count for cells at page borders
- Improves bounding box for in-place editor
- Improves hit detection on fixed connection points
- Fixes handling of special cases in segment edges
- Uses mxGraph 3.1.2.0 beta 3

17-NOV-2014: 3.7.4.2

- Adds word wrapping, formatted labels in various sidebar shapes
- Handles conversion to draw.io pro while file is open

14-NOV-2014: 3.7.4.1

- Stored mode wins over preferred mode in draw.io pro
- Adds data store, activity markers and task types for BPMN
- Fixes loading for mxgraph.mockup.anchor shape
- Uses realtime for all Google Drive files
- Fixes center for custom handles with zoom
- Adds remote alerts for important notifications
- Keeps footer visible when modal dialogs are shown
- Clears points for drop and connect from sidebar
- Fixes PID valve shapes in offline + Chrome app
- Adds update style for edges from sidebar
- Adds shift to update style for containers
- Fixes offset after tree layout in container
- Fixes edge styles in tree layout shapes
- Adds elbow direction to current edge style
- Uses mxGraph 3.1.2.0 beta 2

10-NOV-2014: 3.7.4.0

- Fixes merging of 2 segments in mxEdgeSegmentHandler
- Fixes rendering, glass effect for ext shape
- Uses mxGraph 3.1.2.0 beta 1

07-NOV-2014: 3.7.3.6

- Fixes perimeter of (Call) Conversation shape in BPMN sidebar
- Fixes edge style toolbar always updates current style
- Fixes current text style, colors for text shape
- Fixes vertical offset for empty initial label
- Fixes current edge style for shape/edgeStyle
- Uses mxGraph 3.1.1.1 beta 3

06-NOV-2014: 3.7.3.5

- Uses mxGraph 3.1.1.1 beta 2
- Adds Curly Bracket in General, Parallel Marker in BPMN sidebar
- Adds Corner, Tee, Vertical/Horizontal Tree in Advanced sidebar
- Merges tilt and reverseEdge into switchDirection
- Fixes ID attributes in SVG for URLs with brackets
- Replaces alt-drag from sidebar with refresh icon
- Alt-/shift-drag from sidebar disables actions
- Adds formatted text state for new connections
- Moves collapsible item to Navigation submenu
- Shows focus rectangle for edge label editing
- Makes formatted text default for all cells
- Rearranges general shapes based on usage
- Hides custom handles for locked cells
- Adds resizing for rich text editing
- Adds reset default style menu item
- Removes Text & Images sidebar

01-NOV-2014: 3.7.3.4

- Fixes image and PDF export for math typesetting (beta)
- Fixes tolerance check in mxPopupMenuHandler for touch events
- Uses mxGraph 3.1.1.1 beta 1
- Disables MathJax context menu

29-OCT-2014: 3.7.3.3

- Fixes dblclick on edge handles in quirks mode
- Merges intersecting waypoints into single waypoint
- Adds virtual waypoints in straight edges
- Single click on plus button duplicates cell
- Double click on waypoint removes it
- Uses mxGraph 3.1.0.2 beta 3

28-OCT-2014: 3.7.3.2

- Uses mxGraph 3.1.0.2 beta 3
- Fixes offset for drop targets in containers
- Fixes relative geometries for edges in sidebar
- Highlights parent group for selected child vertex
- Centers handle shape in custom handles
- Fixes vertical offset for text editing on edges

27-OCT-2014: 3.7.3.1

- Uses mxGraph 3.1.0.2 beta 2
- Adds curved, straight format menu item
- Sets current edge style, markers regardless of selection
- Adds support for margin style in ext shape
- Fixes label bounds for shapes with double borders
- Replaces some shapes in ER with standard shapes
- Adds %today%, %filename% variables in p1 plugin
- Fixes rhombus perimeter for "has" shapes in ER
- Fixes outline connect, edge handles in IE8 standards
- Fixes focus handling, size for dropdown menus in IE
- Adds alt-shift to disable connect to outline
- Fixes connections sidebar for libs URL param

22-OCT-2014: 3.7.3.0

- Adds bootstrap sidebar
- Uses mxGraph 3.1.0.2 beta 1
- Improves error handling and authorization flow
- Handles escape in color dialogs
- Change to edge style no longer resets label positions
- Improves drop handling for edges, groups from sidebar
- Removes deprecation warnings for use of nodeValue
- Adds support for rounded style in various shapes
- Adds Required Interface shape in UML sidebar

09-OCT-2014: 3.7.2.6

- Fixes link to Docs add-on
- Uses mxGraph 3.1.0.1

09-OCT-2014: 3.7.2.5

- Fixes grid size handling after document properties dialog
- Adds spacing for drop target arrows
- Removes rounded from initial edge style
- Adds setAsDefaultStyle action

08-OCT-2014: 3.7.2.4

- Fixes NPE in chromeless mode

08-OCT-2014: 3.7.2.3

- Fixes copy-/pasteStyle for value none
- Adds reverse edge action
- Adds title in feedback form
- Fixes gradient toolbar item

08-OCT-2014: 3.7.2.2

- Fixes link shape for different stroke widths
- Adds text toolbar state for current selection
- Adds Youtube videos via insert link
- Fixes z-index for Google picker
- Adds Format, Dotted and Plain menu items
- Improves email check, status message for feedback form
- Removes scrollbar position, scale from files
- Adds rounded to current edge style
- Restores connection sidebar
- Uses mxGraph 3.1.0.1 beta 3

07-OCT-2014: 3.7.2.1

- Removes connection palette
- Uses groups for compound shapes
- Fixes possible undefined label in edges after edit link
- Resets waypoints, label if edge style is changed
- Cleanup edge style options from menu, toolbar
- Fixes copyStyle, global style, alt-click in sidebar
- Fixes arrow drop geometries for relative targets
- Maintains parent for duplicated cells
- Uses mxGraph 3.1.0.1 beta 2

06-OCT-2014: 3.7.2.0

- Adds drop target arrows for drag from sidebar
- Stores current scale and scrollbar positions
- Remove setDefaultEdge function
- Adds current style for edges
- Uses mxGraph 3.1.0.1 beta 1
- Adds Feedback in Help menu
- Fixes Text, Position menu

01-OCT-2014: 3.7.1.4

- Uses mxGraph 3.1.0.0 beta 5

29-SEP-2014: 3.7.1.3

- Uses mxGraph 3.1.0.0 beta 4

24-SEP-2014: 3.7.1.2

- Enables target="_blank" in sanitized HTML
- Uses mxGraph 3.1.0.0 beta 3

22-SEP-2014: 3.7.1.1

- Uses mxGraph 3.1.0.0 beta 2

22-SEP-2014: 3.7.1.0

- Uses mxGraph 3.1.0.0 beta 1

21-SEP-2014: 3.7.0.9

- Improves sanitization for HTML labels
- Uses mxGraph 3.0.1.2 beta 5

20-SEP-2014: 3.7.0.8

- Adds sanitization for HTML labels
- Uses mxGraph 3.0.1.2 beta 4

20-SEP-2014: 3.7.0.7

- Uses mxGraph 3.0.1.2 beta 3

19-SEP-2014: 3.7.0.6

- Uses mxGraph 3.0.1.2 beta 2

12-SEP-2014: 3.7.0.5

- Uses mxGraph 3.0.1.2 beta 1
- Uses GAE SDK 1.9.11
- Fixes s param for embedded markers
- Adds dynamic loading for markers

11-SEP-2014: 3.7.0.4

- Removes Ports and Flows from sidebar
- Uses mxGraph 3.0.1.1

10-SEP-2014: 3.7.0.3

- Uses mxGraph 3.0.1.0
- Fixes image size in advanced export dialog if page not visible

08-SEP-2014: 3.7.0.2

- Adds workaround for invalid file descriptors in Dropbox

27-AUG-2014: 3.7.0.1

- Fixes bugs in realtime diagrams
- Fixes recursive resize of relative child cells
- Uses mxGraph 3.0.0.0 beta 2

26-AUG-2014: 3.7.0.0

- Uses mxGraph 3.0.0.0 beta 1

05-AUG-2014: 3.6.1.5.2

- Another footer change

05-AUG-2014: 3.6.1.5.1

- Footer change

04-AUG-2014: 3.6.1.5

- Fixes SVG export in IE
- Uses mxGraph 2.9.0.2 beta 1

31-JUL-2014: 3.6.1.4

- Fixes transparent gradients in FF
- Fixes redirect to HTTPS in Firefox
- Uses document size for PDF export in page view

31-JUL-2014: 3.6.1.3

- Uses mxGraph 2.9.0.1
- Adds ff=1 URL parameter for bug hunting
- Removes empty hash tag for local files
- Removes empty hash tag in initial state

29-JUL-2014: 3.6.1.2

- Makes refresh of new local file with template blank
- Fixes handling of blocked popups in Chrome
- Uses Universal Analytics
- Adds blogger icon in footer
- Fixes possible NPE in mxEdgeHandler.mouseMove
- Uses mxGraph 2.9.0.1 beta 1

28-JUL-2014: 3.6.1.1

- Fixes arrange, distribute
- Fixes embedded diagrams in all IE versions
- Enables paste, drop for graph model snippets
- Fixes edit geometry to work with multiple vertices

25-JUL-2014: 3.6.1.0

- Uses mxGraph 2.9
- Adds collapsible action

23-JUL-2014: 3.6.0.8

- Uses mxGraph 2.9 beta 5
- Resets mode after Google sign out

20-JUL-2014: 3.6.0.7

- Replaces connect with connection points option
- Fixes resize for current root

19-JUL-2014: 3.6.0.6

- Fixes overlapping wrapped labels in IE8, quirks
- Fixes rotated resize

19-JUL-2014: 3.6.0.5

- Fixes automatic layouts in sidebar previews
- Adds part style for moving cells as parts of groups
- Improves Entity shape in Entity Relation sidebar
- Imports diagram files with no extensions via drag and drop
- Adds part style for moving cells as parts of other cells
- Adds waypoints to automatic line in sidebar
- Fixes resize preview for changed parents
- Shows connector handles on containers
- Uses mxGraph 2.9 beta 4

16-JUL-2014: 3.6.0.4

- Fixes resize preview inside groups
- Adds radial tree layout

16-JUL-2014: 3.6.0.3

- Fixes scaled resize rounding errors
- Fixes creation of scaled connections
- Fixes ui parameter in redirected URLs
- Uses mxGraph 2.9 beta 3

14-JUL-2014: 3.6.0.2

- Removes ui=null in redirected URLs
- Shift cursor moves by gridSize
- Uses white preview for black background
- Fixes distribute action
- Fixes initial undo in embed mode
- Resizes pool in stack layouts

11-JUL-2014: 3.6.0.1

- Fixes toggle selection on touch devices with mouse
- Empty postMessage creates new file in embed mode
- Disables custom dashed edges in outline shapes
- Uses Ctrl-Click for context menu only on Macs
- Makes hit detection for new edges consistent
- Fixes alignment of cloned source terminals
- Uses mxGraph 2.9 beta 2

11-JUL-2014: 3.6.0.0

- Adds Azure shapes
- Uses mxGraph 2.9 beta 1
- Fixes edge preview to use actual shape
- Uses image for edge label handles
- Avoids overlap of label and edge handles
- Adds snap to waypoints for edges handles
- Adds connect to outline for all shapes
- Adds alt for connecting to anywhere in a shape
- Adds shift for horizontal/vertical edge segments
- Adds Options, Advanced, Theme menu
- Uses Ctrl-Click for context menu in all browsers
- Remove fixedPoints style, adds points style
- Fixes special handle for new arrow shapes

26-JUN-2014: 3.5.3.5

- Uses mxGraph 2.8.2.1 beta 3
- Fixes minor bugs

24-JUN-2014: 3.5.3.4

- Hides special handles for disabled graphs
- Fixes minor bugs for realtime collaboration
- Fixes cell order for native copy paste
- Truncates existing files in Chrome App
- Fixes clipboard state after ctrl+x (cut)
- Adds import all file types for Google Drive
- Fixes move cursor for entries in library dialog

21-JUN-2014: 3.5.3.3

- Adds shortcut for edit geometry, initial focus
- Fixes grid size for moving cells in scaled graphs
- Adds grid size in document properties dialog
- Does no longer scroll to cells after move
- Fixes minor bug in a floorplan shape

18-JUN-2014: 3.5.3.2

- Adds new shapes in general, advanced
- Shift-cursor key moves by 10 pixels
- Uses mxGraph 2.8.2.1 beta 2
- Fixes initial scroll position on iOS
- Fixes font family, size combo width in quirks mode
- Fixes document properties in standalone mode for iOS

16-JUN-2014: 3.5.3.1

- Adds explore plugin
- Add social icons in footer
- Adds Embed, Google Docs menu item
- Adds ready, ui=atlas URL parameters
- Adds alt-drop from sidebar to override shape
- Uses automatic force constant for organic layout
- Uses mxGraph 2.8.2.1 beta 1

11-JUN-2014: 3.5.3.0

- Uses OS clipboard for cut, copy and paste shortcuts
- Adds shortcuts for edit-, copy- and paste style
- Makes layer visible after insert of new cell
- Uses mxGraph 2.8.2.0

09-JUN-2014: 3.5.2.0

- Style changes trigger layout
- Control enter stops editing
- Uses mxGraph 2.8.1.1 beta 1
- Uses last font, alignment for new cells
- Adds validation for filenames

02-JUN-2014: 3.5.1.2

- Adds SVG transformation to image export via XML

02-JUN-2014: 3.5.1.1

- Uses mxGraph 2.8.1.0
- Shows layers dialog for files with layers
- Fixes links for transparent shapes in SVG export
- Adds import from URL option

27-MAY-2014: 3.5.1.0

- Adds remove attribute option in metadata dialog
- Adds larger open dialog
- Fixes grid clipping bug in webkit
- Fixes handle states after model change
- Fixes hyperlinks in SVG export
- Adds hexagon perimeter for hexagon shape
- Uses mxGraph 2.8.0.0 beta 2

14-MAY-2014: 3.5.0.0

- Adds tooltips for links
- Adds rotation in edit geometry dialog
- Unifies mobile and desktop UI
- Adds reset waypoints
- Uses mxGraph 2.7.0.1 beta 2

12-MAY-2014: 3.4.0.8

- Adds client app mode
- Adds edit as new embed option
- Adds support for compressed data in embed, client mode

12-MAY-2014: 3.4.0.7

- Adds immediate editing
- Uses mxGraph 2.7.0.1 beta

11-MAY-2014: 3.4.0.6

- Calls resetGraphView after loading realtime model
- Adds placeholder in link dialog
- Reads HTML embedded files
- Uses mxGraph 2.6.0.1 beta 5

10-MAY-2014: 3.4.0.5

- Adds rounding to move, resize, rotate
- Compacts About dialog
- Adds offline menu item
- Adds open from template URL
- Adds open from URL option
- Shows connect icon if shift is pressed
- Adds tooltips for rotate, resize and move
- Adds edit tooltip action
- Improves metadata dialog
- Uses mxGraph 2.6.0.1 beta 4

08-MAY-2014: 3.4.0.4

- Fixes zoom, footer in chromeless mode
- Adds image item in toolbar
- Uses mxGraph 2.6.0.1 beta 3

07-MAY-2014: 3.4.0.3

- Fixes pinch to zoom on iOS
- Uses mxGraph 2.6.0.1 beta 2

06-MAY-2014: 3.4.0.2

- Uses mxGraph 2.6.0.1 beta
- Fixes handling of empty files
- Fixes new library function

06-MAY-2014: 3.4.0.1

- Adds custom font sizes in toolbar
- Fixes pinch gesture in iOS
- Fixes offline mode in Firefox

05-MAY-2014: 3.4.0.0

- Uses mxGraph 2.6.0.0
- Moves outline into separate dialog
- Adds document properties dialog
- Uses alt-wheel for zoom (shift for horizontal scroll)
- Uses right mouse button for panning
- Adds scaled page buffer with scrollbars
- Adds initial centering of diagram
- Adds local storage in IE8 quirks mode
- Enables drag and drop in library dialog
- Uses touch UI in Firefox only on Windows
- Adds toggle state for grid/guides buttons
- Adds license option in images sidebar

17-APR-2014: 3.3.0.0

- Adds custom libraries for Drive files
- Adds persistence for visible libraries
- Hides labels in sidebar

15-APR-2014: 3.2.1.5

- Fixes autosave for grid and page view changes
- Uses mxGraph 2.5.1.2 beta

13-APR-2014: 3.2.1.4

- Uses mxGraph 2.5.1.1
- Fixes import offset for new layers

11-APR-2014: 3.2.1.3

- Adds pools with lanes and stack child layouts
- Splits general to text, connection and advanced sidebars
- Fixes import for local and storage files
- Adds stackLayout childLayout, stackHorizontal style
- Fixes import XML for multiple layers
- Adds grid/guides toolbar button
- Fixes dialog event handling on iPad

11-APR-2014: 3.2.1.2

- Adds mime type filter in Google picker
- Removes extension for Google Chrome

10-APR-2014: 3.2.1.1

- Adds recursive resize for groups
- Uses mxGraph 2.5.1.1 beta

10-APR-2014: 3.2.1.0

- Replaces Open with Open from in file menu
- Adds click handling for split bars
- Removes folding icon in XML image export
- Adds file extensions for Google Drive files
- Adds embed iframe option
- Adds import from menu

07-APR-2014: 3.2.0.5

- Adds Options, Advanced, Open from menu
- Removes old storage item after rename
- Disables user scaling on mobile devices

02-APR-2014: 3.2.0.4

- Adds viewbox to imported SVG files for FF, IE

02-APR-2014: 3.2.0.3

- Handles s=* parameter in embed servlet
- Fixes Edit Image, Insert Image dialogs
- Fixes Edit Link, Insert Link dialogs
- Uses mxGraph 2.5.1.0

29-MAR-2014: 3.2.0.2

- Handles enter key in text input dialog
- Uses "diagram name" for Google files
- Transparent use of zlib compression

28-MAR-2014: 3.2.0.1

- Adds Options, Advanced, Export option

27-MAR-2014: 3.2.0.0

- Uses viewer in Google gadget for embedding
- Adds chrome-less read-only viewer mode

26-MAR-2014: 3.1.0.2

- Adds storage logo in storage dialog
- Adds help link in splash dialog
- Adds distribute menu from core example

24-MAR-2014: 3.1.0.1

- Uses layers dialog from core example

21-MAR-2014: 3.1.0.0

- Removes profile.email scope in Google Drive
- Shows local storage option on desktop
- Adds XML+PNG file format (open and save)
- Changes order of cancel, approval buttons in dialogs
- Fixes insert Google Drive image (adds photo scopes)
- Fixes special link action, adds photo, album links
- Fixes colors for logos and app icons
- Adds Google Sites dialog
- Adds chrome=0 URL parameter
- Adds advanced menu in options
- Improves Google Gadget servlet
- Removes mockups from default sidebars

14-MAR-2014: 3.0.0.6

- Reduces time between revisions to 0.5h
- Adds consistency checks in realtime
- Uses mxGraph 2.5.0.3

13-MAR-2014: 3.0.0.5

- Adds floorplan shapes
- Adds upload (offline), makeCopy actions
- Adds support for embed mode in new tab

10-MAR-2014: 3.0.0.4

- Disables iconfinder sidebar in offline mode
- Adds cache status to Chrome/iOS in offline mode

09-MAR-2014: 3.0.0.3

- Disables print function in iOS standalone mode
- Fixes general.xml shapes in offline mode
- Adds mime-type for cache.manifest in web.xml
- Uses text context menu for text downloads in iOS
- Disables binary downloads in iOS standalone mode

07-MAR-2014: 3.0.0.2

- Adds mobile web app tags
- Adds demo=1 URL parameter
- Adds new templates with categories
- Adds /app shortcut for offline mode
- Adds online features in offline mode for Chrome
- Warns if Google Drive is blocked

03-MAR-2014: 3.0.0.1

- Adds apple app icons to offline cache
- Disables device storage for offline mode on IOS
- Adds storage=browser/device URL params
- Fixes alternate FO text for bitmap exports

28-FEB-2014: 3.0.0.0

- Adds support for offline mode

27-FEB-2014: 2.9.0.0

- Replaces RawDeflate.deflate with Zlib
- Adds lazy loading for MathJax
- Uses mxGraph 2.5.0.2
- Adds shared clipboard
- Adds drop handler for images, text and XML files
- Disables Dropbox/Drive in embed mode by default
- Adds global mxClientOnLoad callback in embed
- Adds edit geometry, copy/paste style actions
- Uses mxGraph 2.5.0.1

17-FEB-2014: 2.8.0.0

- Fixes possible NPE in DriveRealtime.highlight, App.defineCustomObjects
- Uses mxGraph 2.5.0.0 beta
- Adds HTML5 doctype in HTML export

10-FEB-2014: 2.7.0.8

- Uses mxGraph 2.4.1.0
- Adds support for background images

31-JAN-2014: 2.7.0.7

- Embed does no longer use eval
- Tests zlib for file compression
- Uses mxGraph 2.4.0.4

29-JAN-2014: 2.7.0.6

- Adds create, title URL parameters

28-JAN-2014: 2.7.0.5

- Fixes embedded diagrams with math
- Adds Mathematical typesetting option

27-JAN-2014: 2.7.0.4

- Adds Android shapes for embedded diagrams
- Cleanup embed dialog

27-JAN-2014: 2.7.0.3

- Uses mxGraph 2.4.0.4 beta
- Handles invalid characters in input files
- Adds Google Gadget URL in embed dialog
- Adds GoogleSitesServlet at /gadget.xml

22-JAN-2014: 2.7.0.2

- Uses mxGraph 2.4.0.3
- Creates revision every hour and on load
- Adds checks for realtime connection
- Adds userAgent to file format
- Adds Android shapes

17-JAN-2014: 2.7.0.1

- Uses mxGraph 2.4.0.2
- Fixes table editing for FF/IE quirks
- Fixes decoding error in Firefox
- Adds retry option for timeout errors
- Fixes title word wrap for long filenames
- Adds math parameter for MathJax support (experimental)
- Adds table support in HTML editor

08-JAN-2014: 2.7.0.0

- Adds custom HTML in-place editor
- Adds Arrange, Insert and Format, Style menus
- Uses mxGraph 2.4.0.0
- Adds splash screen
- Adds Google Doc style header
- Rewrites remote storage integrations

11-DEC-2013: 2.6.4.1

- Add option to lock resize aspect using shift key

04-DEC-2013: 2.6.4.0

- Fixes PID path issues

27-NOV-2013: 2.6.3.0/1

- Add iOS 7 stencils
- Fixes Drive RT copying issues

19-NOV-2013: 2.6.2.0/1

- Improvements to PID stencils

18-NOV-2013: 2.6.1.0

- Improvements to rack stencils

11-NOV-2013: 2.6.0.2

- Add same domain test plugin
- Minor changes to rack stencils

11-NOV-2013: 2.6.0.1

- Updates mxClient.js to 2.3.0.2

09-NOV-2013: 2.6.0.0

- Adds Dropbox autosave
- Uses image export v3 (PhantomJS)
- Uses world icon for language menu

17-OCT-2013: 2.5.2.1

- Corrects path error in mockups.misc.statusbar

16-OCT-2013: 2.5.2.0

- Merges vdx importer back into base
- Updates mxClient.js to 2.2.0.3
- Fixes CSS float for IE

10-OCT-2013: 2.5.1.3

- Adds CORS headers for JGraph CMS
- Adds new Vdxio

08-OCT-2013: 2.5.1.2

- Added embed mode
- Restores legacy clipart pathnames
- Updates mxclient.js 2.2.0.2

23-SEP-2013: 2.5.1.1

- Reverted scope change

19-SEP-2013: 2.5.1.0

- Uses mxGraph 2.2.0.0
- Reduces access to Google user profile info.

09-SEP-2013: 2.5.0.0

- Forces refresh when Drive save fails
- Uses mxGraph 2.1.1.2
- Adds Dropbox support on db.draw.io

31-JUL-2013: 2.4.1.0

- Uses mxGraph 2.1.0.7
- Adds menu item to toggle chat window
- Fixes handling of special filenames for export
- Adds support for XML user objects in Realtime files
- Adds button to hide footer
- Changes collaborative chat to list
- Moves autosaving to DriveRealTime
- Adds clipboard, https URL parameters
- Shows filename in document title

24-JUN-2013: 2.4.0.0

- Fixes real-time re-auth issue
- Updates touch support code

20-JUN-2013: 2.3.2.2

- Fixes reader file excludes

31-MAY-2013: 2.3.2.1

- Cosmetic adjustments

30-MAY-2013: 2.3.2.0

- Adds plugins, plugin dialogs

22-MAY-2013: 2.3.1.0

- Fixes vertical label export offset bug
- Fixes MT bugs in .vsdx import

11-MAY-2013: 2.3.0.1

- Minor changes to language menu

07-MAY-2013: 2.3.0.0

- Makes labels of mockup, ER shapes editable
- Replaces width and height checks with area check in export
- Adds language configuration in local storage
- Ignores "dot" files in local storage open dialog
- Fixes handling of nested default edges
- Adds live preview for vertex resizing, edge handling
- Adds process, document, parallelograph and trapezoid shapes
- Adds layers, language menu and resources

12-APR-2013: 2.2.2.5

- Adds debugging

11-APR-2013: 2.2.2.4

- Minor bug fixes

10-APR-2013: 2.2.2.3

- Fixes shape deletion whilst dragging connection issue

09-APR-2013: 2.2.2.2

- Adds shape locking, Mac backspace delete and a changelog entry that has multiple items on one line and is more than 80 characters

07-APR-2013: 2.2.2.1

- Adds rack stencils
- Fix for Safari save problem

04-APR-2013: 2.2.2.0

- Fix for Firefox 20 save problem

27-MAR-2013: 2.2.1.0

- Google Drive workflow changes

23-MAR-2013: 2.2.0.3

- Moves ER markers to side to avoid dynamic load issues

19-MAR-2013: 2.2.0.2

- Adds File->Rename for Google Drive file

18-MAR-2013: 2.2.0.0

- Adds mockup stencils

28-FEB-2013: 2.1.1.2

- Uses latest mxGraph
- Switch XML stencil labels back on
- Enables word wrapping for some basic shapes
- Improves Drive authentication after timeout

16-FEB-2013: 2.1.1.1

- Uses latest mxGraph

08-FEB-2013: 2.1.1.0

- Added iOS and ER stencils

06-FEB-2013: 2.1.0.2

- Patch for IE 9 Google Drive communications
- Added Cisco stencils

05-FEB-2013: 2.1.0.1

- Fixes 7 second repeating Google auth dialog bug

04-FEB-2013: 2.1.0.0

- Removes old sharing
- Fixes relative images in embedded diagrams
- Uses App Engne SDK 1.7.4
- Uses mxGraph 2.0.0.0

16-JAN-2013: 2.0.1.7

- Uses mxGraph 1.10.4.2
- Adds curved format menu item
- Uses extended image picker if logged into Google
- Removes devhost URL parameter

20-DEC-2012: 2.0.1.6

- Fixes issue with Google Drive files retaining file name

19-DEC-2012: 2.0.1.5

- Enabled .vdx open/importing (alpha)

19-DEC-2012: 2.0.1.4

- Shows spinner while loading url URL parameter
- Fixes alignment of SVG sidebar entries in IE
- Fixes flickering of sidebar entries in FF
- Adds spinner to minified diagramly

18-DEC-2012: 2.0.1.3

- Uses mxGraph 1.10.4.1
- Fixes handling of url URL parameter

14-DEC-2012: 2.0.1.2

- Removes plugins feature

13-DEC-2012: 2.0.1.1

- Adds security alert when loading plugins
- Fixes clipping bug

12-DEC-2012: 2.0.1.0

- Fixes session expiry issue in Google Drive

12-DEC-2012: 2.0.0.4

- Adds plugins via URL parameter
- Fixes toolbar size
- Fixes browser context menu
- Adds colors in color dialog

06-DEC-2012: 2.0.0.1

- Switches to using JS client library for Google Drive calls

08-NOV-2012: 1.6.10.0

- Adds Korean, Japanese, Russian, Bosnian and Ukrainian translations
- Switches to port 80 for image export server

31-OCT-2012: 1.6.9.2

- Removed data nucleus libraries
- Adds rawdeflate, base64 to diagramly.min.js
- Changes color of social icons to gray

30-OCT-2012: 1.6.9.1

- Removes social JS
- Uses mxGraph 1.10.4.0

25-OCT-2012: 1.6.9.0

- Adds Google Drive install scope
- Updates libraries used for Google Drive integration

19-OCT-2012: 1.6.8.1

- Fixes handling of file positioning in Drive

16-OCT-2012: 1.6.8.0

- Fixes using multiple accounts with Google Drive

24-SEP-2012: 1.6.7.4

- Changes diagram.ly to draw.io in dialogs
- Minor formatting fixes

21-SEP-2012: 1.6.7.3

- Add session tidying cron job for GAE

14-SEP-2012: 1.6.7.2

- Removes Facebook footer in IE6
- Adds layout options via grapheditor example

13-SEP-2012: 1.6.7.1

- Fixes use of custom handlers with closure compiler

31-AUG-2012: 1.6.7.0

- Uses mxGraph 1.10.3.1
- Fixes background color for SVG export in quirks mode
- Enables Google image picker on Mac/iPad
- Adds GitHub menu item in help menu

29-AUG-2012: 1.6.1.9

- Fixes GitHub deployment Ant task
- Fixes German Facebook button (changes to English)
- Fixes touch-based panning for embedded diagrams
- Uses mxGraph 1.10.3.0

22-AUG-2012: 1.6.1.8

- Adds Facebook like button

21-AUG-2012: 1.6.1.7

- Adds compression for embedded diagrams

02-AUG-2012: 1.6.1.6

- Adds fixes for null user objects in link handling

02-AUG-2012: 1.6.1.5

- Adds transparency option for PNG image, SVG export

01-AUG-2012: 1.6.1.4

- Fixes for filepicker.io

31-JUL-2012: 1.6.1.3

- Uses mxClient.js, mxgraph-core.jar 1.10.2.1
- Adds social, analytics URL parameters
- Adds persistent stats for embedding
- Adds save for filepicker.io

28-JUL-2012: 1.6.1.2

- Fixes embedding of international characters and newlines
- Changes image export URL to http://shr.diagramly.com:8080/ImageExport/export
- Changes lastModified header creation in EmbedServlet
- Fixes infinite recursion in Embed.js for convertValueToString

27-JUL-2012: 1.6.1.1

- Adds support for hyperlinks

23-JUL-2012: 1.6.1.0

- Uses mxGraph 1.10.2.0
- Adds embed feature
- Fixes errors if tinyMCE not available
- Fixes syntax of dash patterns in shapes

30-JUN-2012: 1.6.0.2

- Renames Init.js to Devel.js
- Adds link to "Did you know..." topic in help menu
- Removes previous diagramly link from help menu
- Adds url URL parameter handling in client
- Adds proxy servlet for loading files from URLs

22-JUN-2012: 1.6.0.1

- Fixes minor bugs
- Uses mxGraph 1.10.1.3

19-JUN-2012: 1.6.0.0

- Adds real-time collaboration (experimental)
- Adds handling for App not installed error in Google Drive
- Uses mxGraph 1.10.1.2

06-JUN-2012: 1.5.0.7

- Uses mxGraph 1.10.1.1
- Adds workaround for focus repaint bug in IE9/10
- Adds fixed connection points for custom shapes
- Adds closure compiler pre-deploy step
- Puts all JS in a single minified file

25-MAY-2012: 1.5.0.6

- Uses static mxGraph 1.10.0.6
- Fixes "Save as" in Google Drive
- Fixes page view, default pageScale
- Adds new items in file menu
- Adds options in file edit dialog
- Adds import action
- Adds extra handle for custom shapes

17-MAY-2012: 1.5.0.5

- Removes .mxe default file extension
- Changes mime type to application/mxe

16-MAY-2012: 1.5.0.4

- Uses current protocol to load picker API
- Adds CSS3 transitions for hover styles
- Simplifies tinyMCE toolbar, uses main toolbar (non-IE only)
- Adds "Use as default edge" action

14-MAY-2012: 1.5.0.3

- Adds border in export dialog
- Adds resources for Google Drive integration
- Fixes use of optional flash for saving in savedialog

05-MAY-2012: 1.5.0.2

- Handles requests for non-existent script versions
- Handles DeadlineExceededException

03-MAY-2012: 1.5.0.1

- Adds XML export option
- Fixes unicode character encoding in files
- Adds status information for Google Drive operations
- Adds spinner during Google Drive operations
- Adds reconnect for lost session after save
- Fixes illegal state exceptions in servlet

02-MAY-2012: 1.5.0.0

- Adds working Google Drive integration

01-MAY-2012: 1.4.0.7

- Adds initial Google Drive integration

29-APR-2012: 1.4.0.6

- Uses mxGraph 1.10.0.2
- Adds BPMN shapes, markers and custom edges
- Fixes Downloadify integration

19-APR-2012: 1.4.0.5

- Adds editFile action from grapheditor
- Adds fromText action and ParseDialog
- Adds forum link in help menu
- Adds more shapes sidebar entry
- Adds iconfinder library

29-MAR-2012: 1.4.0.2

- Adds UML library
- Adds experimental group selection
- Adds persistent UI settings
- Adds templates, file, new... menu
- Adds HTML labels with editing
- Adds aa URL parameter to disable anti aliasing
- Adds PDF export via backend with limited HTML support
- Adds context menu in sidebar
- Various fixes from bug reports, disabled Flash

16-FEB-2012: 1.4.0.0

- First release of new codebase

24-JAN-2012: 1.3.2.2

- Fixes for brix

13-JAN-2012: 1.3.2.0

- Enables .vdx importing for GAE

25-DEC-2011: 1.3.1.2

- Avoids passing null version parameter onto primary client server

23-DEC-2011: 1.3.1.1

- Adds AWS icons
- Updates core to 1.8.0.6

15-DEC-2011: 1.3.1.0

- Adds local SVG generation
- Adds client servlet for cached mxclient delivery

17-NOV-2011: 1.3.0.1

- mxgraph.mockuop.form_elements stencil set name typo corrected

11-NOV-2011: 1.3.0.0

- Addition stencil based shapes added

14-JUL-2011: 1.2.0.1

- Collaboration integrated

11-JUL-2011: 1.2.0.0

- Deployed to GAE by default

24-JUN-2011: 1.1.1.0

- Sprited toolbar icons
- Local open for file API enabled browsers

26-MAY-2011: 1.1.0.0

- Switches most content to static serving
- New iPad interface

12-MAY-2011: 1.0.11.0

- Adds simplified default stylesheet for new diagrams
- Adds UI for transparency, user-defined colors and images

02-MAY-2011: 1.0.10.1

- Additional static gzipping of resources
- Adds lazy loading of images in collapsed palettes

05-APR-2011: 1.0.10.0

- Fixes string escaping parse errors on open
- Add show/parse XML options

17-MAR-2011: 1.0.9.0

- Adds duplicate context menu item, ctrl-D
- Adds optional navigation context menu
- Adds optional navigation icons
- Adds support for cursor keys
- Adds guides

05-MAR-2011: 1.0.8.0

- Adds connect preview
- Adds splash screens
- Adds import of VDX files

02-MAR-2011: 1.0.7.0

- Uses connect image for new connections
- Changes save, export, print, open dialogs
- Changes toolbars, toolbar icons

25-FEB-2011: 1.0.6.0

- Corrected title to diagram.ly
- Adds sv, pl, ar translations.

15-FEB-2011: 1.0.5.0

- Adds footer
- i18n for library text.
- Adds it, fr, zh, pt, ja, es, ru, nl translations.

02-FEB-2011: 1.0.4.0

- Uses mxGraph core 1.5.1.5 to fix IE 6 dialogs.

30-JAN-2011: 1.0.3.1

- Sets svgCanvas variable of ExportServlet to null on each request. Previously,
	making an SVG export request then broke the other image exports.

30-JAN-2011: 1.0.3.0

- Fixes forwarding to site using Firefox