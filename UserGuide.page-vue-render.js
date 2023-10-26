
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_m(0),_v(" "),_c('p',[_v("ModCraft is an app that provides a fast and easy way for students to track courses\nto take to meet graduation requirements and plan courses to take. The user interacts\nwith it using a CLI, and it has a GUI created with JavaFX.")]),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('p',[_v("Shows a message explaning how to access the help page.")]),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('p',[_v("Adds a module to the list of modules taken")]),_v(" "),_m(12),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tip:")]),_v(" The module will be added to the default sem set.")])]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('p',[_v("Changes an attribute of a module. Useful if you want to update information about a module or have made a mistake in adding.")]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('p',[_v("Deletes a module from the list of taken modules if it exists.")]),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_c('p',[_v("Find the information about a certain module by module code.")]),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_c('p',[_v("Calculates the total current Modular Credits (MCs) stored in all years and semesters.")]),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_c('p',[_v("Exits the program.")]),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_c('p',[_v("AddressBook data are saved in the hard disk automatically after any command that changes the data. There is no need to save manually.")]),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nIf your changes to the data file makes its format invalid, AddressBook will discard all data and start with an empty data file at the next run.  Hence, it is recommended to take a backup of the file before editing it.")])]),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_c('hr'),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_c('hr'),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_c('hr'),_v(" "),_m(43),_v(" "),_m(44)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"modcraft-user-guide"}},[_v("ModCraft User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#modcraft-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"table-of-contents"}},[_v("Table of Contents"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#table-of-contents","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#quick-start"}},[_v("Quick start")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#features"}},[_v("Features")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#faq"}},[_v("FAQ")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#known-issues"}},[_v("Known issues")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#command-summary"}},[_v("Command summary")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java 11 or above installed in your Computer.")]),_v(" "),_c('ol',[_c('li',[_v("To do this, open a command terminal and type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java --version")]),_v(".")]),_v(" "),_c('li',[_v("If you do not have Java 11 installed, get it "),_c('a',{attrs:{"href":"https://www.oracle.com/sg/java/technologies/javase/jdk11-archive-downloads.html"}},[_v("here")]),_v(".")])])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModCraft.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/AY2324S1-CS2103T-T13-0/tp/releases/tag/v1.2b"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for your ModCraft.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar ModCraft.jar")]),_v(" command to run the application."),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br'),_v(" "),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/UserGuide.html/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/UserGuide.html/images/Ui.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type the command in the command box and press Enter to execute it. e.g. typing "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])]),_v(" and pressing Enter will open the help window."),_c('br'),_v("\nSome example commands you can try:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("info CS1101S")]),_v(" : Shows Information about the module CS1101S")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add CS2030S y/1 s/2 g/IP")]),_v(" : Adds the module CS2030S to semester 2 in year 1, and marks it as In Progress.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete CS2040S")]),_v(" : Deletes the module CS2040S if present from the list of modules taken")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" : Exits the app.")])])])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" section below for details of each command.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes about the command format:")]),_c('br')])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("Words in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UPPER_CASE")]),_v(" are the parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete MODULE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MODULE")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete CFG1002")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Parameters can be in any order."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("y/YEAR s/SEM")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s/SEM y/YEAR")]),_v(" is also acceptable.")])]),_v(" "),_c('li',[_c('p',[_v("Parameters in square brackets denote optional parameters."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit [y/YEAR]")]),_v(" means that specifying "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("YEAR")]),_v(" is optional.")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in parameters (such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(") will be ignored."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines as space characters surrounding line-breaks may be omitted when copied over to the application.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"viewing-help-help"}},[_v("Viewing help : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-help-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/UserGuide.html/images/helpMessage.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/UserGuide.html/images/helpMessage.png","alt":"help message"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-module-add"}},[_v("Adding a module: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-module-add","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add MODULE [s/SEM]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add MA1521 Y1S1")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add IS1108")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-module-edit"}},[_v("Editing a module: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-module-edit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit MODULE [y/YEAR] [s/SEM] [g/GRADE]")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Note:")]),_v(" At least one of the optional fields must be provided.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit CS2030S g/A+")]),_v(": Updates the grade of CS2030S to A+.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit CS3230 y/4 s/2")]),_v(": Moves CS3230 to Year 4 Semester 2.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-module-delete"}},[_v("Deleting a module : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-module-delete","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete MODULE")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Removes the module from whichever semester the module is taken.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete GEA1000")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete CS2030S")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"finding-information-about-a-module-info"}},[_v("Finding Information about a module: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("info")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#finding-information-about-a-module-info","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("info m/MODULE")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("To search for modules with variants add a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")]),_v(" at the end of the module name.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("info CS2019")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("info CS1010*")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"calculating-the-total-current-cap"}},[_v("Calculating the total current CAP:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#calculating-the-total-current-cap","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Calculates the total current CAP of all modules stored in all years and semesters\nusing the formula:"),_c('br'),_v(" "),_c('eq',{pre:true},[_c('span',{pre:true,attrs:{"class":"katex"}},[_c('span',{pre:true,attrs:{"class":"katex-mathml"}},[_c('math',{pre:true,attrs:{"xmlns":"http://www.w3.org/1998/Math/MathML"}},[_c('semantics',{pre:true},[_c('mrow',{pre:true},[_c('mfrac',{pre:true},[_c('mtext',{pre:true},[_v("sum of all modules: (grade point of that module * Modular Credits of that module)")]),_c('mtext',{pre:true},[_v("total Modular Credits")])],1)],1),_c('annotation',{pre:true,attrs:{"encoding":"application/x-tex","v-pre":""}},[_v("\\frac{\\text{sum of all modules: (grade point of that module * Modular Credits of that module)}}{\\text{total Modular Credits}}")])],1)],1)],1),_c('span',{pre:true,attrs:{"class":"katex-html","aria-hidden":"true"}},[_c('span',{pre:true,attrs:{"class":"base"}},[_c('span',{pre:true,attrs:{"class":"strut","style":"height:1.355em;vertical-align:-0.345em;"}}),_c('span',{pre:true,attrs:{"class":"mord"}},[_c('span',{pre:true,attrs:{"class":"mopen nulldelimiter"}}),_c('span',{pre:true,attrs:{"class":"mfrac"}},[_c('span',{pre:true,attrs:{"class":"vlist-t vlist-t2"}},[_c('span',{pre:true,attrs:{"class":"vlist-r"}},[_c('span',{pre:true,attrs:{"class":"vlist","style":"height:1.01em;"}},[_c('span',{pre:true,attrs:{"style":"top:-2.655em;"}},[_c('span',{pre:true,attrs:{"class":"pstrut","style":"height:3em;"}}),_c('span',{pre:true,attrs:{"class":"sizing reset-size6 size3 mtight"}},[_c('span',{pre:true,attrs:{"class":"mord mtight"}},[_c('span',{pre:true,attrs:{"class":"mord text mtight"}},[_c('span',{pre:true,attrs:{"class":"mord mtight"}},[_v("total Modular Credits")])])])])]),_c('span',{pre:true,attrs:{"style":"top:-3.23em;"}},[_c('span',{pre:true,attrs:{"class":"pstrut","style":"height:3em;"}}),_c('span',{pre:true,attrs:{"class":"frac-line","style":"border-bottom-width:0.04em;"}})]),_c('span',{pre:true,attrs:{"style":"top:-3.485em;"}},[_c('span',{pre:true,attrs:{"class":"pstrut","style":"height:3em;"}}),_c('span',{pre:true,attrs:{"class":"sizing reset-size6 size3 mtight"}},[_c('span',{pre:true,attrs:{"class":"mord mtight"}},[_c('span',{pre:true,attrs:{"class":"mord text mtight"}},[_c('span',{pre:true,attrs:{"class":"mord mtight"}},[_v("sum of all modules: (grade point of that module * Modular Credits of that module)")])])])])])]),_c('span',{pre:true,attrs:{"class":"vlist-s"}},[_v("​")])]),_c('span',{pre:true,attrs:{"class":"vlist-r"}},[_c('span',{pre:true,attrs:{"class":"vlist","style":"height:0.345em;"}},[_c('span')])])])]),_c('span',{pre:true,attrs:{"class":"mclose nulldelimiter"}})])])])])]),_v(".")],1)}
},function anonymous(
) {
with(this){return _c('p',[_v("Returns a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("float")]),_v(" of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0.0")]),_v(" "),_c('eq',{pre:true},[_c('span',{pre:true,attrs:{"class":"katex"}},[_c('span',{pre:true,attrs:{"class":"katex-mathml"}},[_c('math',{pre:true,attrs:{"xmlns":"http://www.w3.org/1998/Math/MathML"}},[_c('semantics',{pre:true},[_c('mrow',{pre:true},[_c('mo',{pre:true},[_v("≤")])],1),_c('annotation',{pre:true,attrs:{"encoding":"application/x-tex","v-pre":""}},[_v("\\leq")])],1)],1)],1),_c('span',{pre:true,attrs:{"class":"katex-html","aria-hidden":"true"}},[_c('span',{pre:true,attrs:{"class":"base"}},[_c('span',{pre:true,attrs:{"class":"strut","style":"height:0.7719em;vertical-align:-0.136em;"}}),_c('span',{pre:true,attrs:{"class":"mrel"}},[_v("≤")])])])])]),_v(" value "),_c('eq',{pre:true},[_c('span',{pre:true,attrs:{"class":"katex"}},[_c('span',{pre:true,attrs:{"class":"katex-mathml"}},[_c('math',{pre:true,attrs:{"xmlns":"http://www.w3.org/1998/Math/MathML"}},[_c('semantics',{pre:true},[_c('mrow',{pre:true},[_c('mo',{pre:true},[_v("≤")])],1),_c('annotation',{pre:true,attrs:{"encoding":"application/x-tex","v-pre":""}},[_v("\\leq")])],1)],1)],1),_c('span',{pre:true,attrs:{"class":"katex-html","aria-hidden":"true"}},[_c('span',{pre:true,attrs:{"class":"base"}},[_c('span',{pre:true,attrs:{"class":"strut","style":"height:0.7719em;vertical-align:-0.136em;"}}),_c('span',{pre:true,attrs:{"class":"mrel"}},[_v("≤")])])])])]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("5.0")]),_v(".")],1)}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("calculateCAP")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"calculating-the-total-current-modular-credits-mcs"}},[_v("Calculating the total current Modular Credits (MCs)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#calculating-the-total-current-modular-credits-mcs","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("calculateMC")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exiting-the-program-exit"}},[_v("Exiting the program : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exiting-the-program-exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-the-data"}},[_v("Saving the data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-the-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-the-data-file"}},[_v("Editing the data file"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-the-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("AddressBook data are saved automatically as a JSON file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/addressbook.json")]),_v(". Advanced users are welcome to update data directly by editing that data file.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"archiving-data-files-coming-in-v1-3"}},[_v("Archiving data files "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[coming in v1.3]")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#archiving-data-files-coming-in-v1-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("Details coming soon ...")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous ModCraft home folder.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format, Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("add")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add MODULE [s/SEM]")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add m/CS2106 s/Y3S1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("edit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit MODULE [y/YEAR] [s/SEM] [g/GRADE]")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit CS2030S g/A+")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("delete")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete MODULE")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete CS2040S")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("info")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("info MODULE")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("info m/CS3230")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("calculate CAP")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CalculateCAP")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("calculate MCs")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CalculateMC")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])])])])])}
}];
  