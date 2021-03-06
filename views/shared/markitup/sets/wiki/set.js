// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// Mediawiki Wiki tags example
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
mySettings = {
	previewParserPath:	'', // path to your Wiki parser
	onShiftEnter:		{keepDefault:false, replaceWith:'\n\n'},
	onEnter:		{keepDefault:true, replaceWith:'\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'== ', closeWith:' ==', placeHolder:'Your title here...', className:"h1" },
		{name:'Heading 2', key:'2', openWith:'=== ', closeWith:' ===', placeHolder:'Your title here...', className:"h2" },
		{separator:'---------------'},		
		{name:'Underline', key:'U', openWith:'<u>', closeWith:'</u>', className: "underline"}, 
		{name:'Stroke through', key:'S', openWith:'<s>', closeWith:'</s>', className: "strike"}, 
		{separator:'---------------'},
        {   name:'Table generator', 
            className:'tablegenerator', 
            placeholder:"Your text here...",
            replaceWith:function(markItUp) {
                var cols = prompt("How many cols?"),
                    rows = prompt("How many rows?"),
                    html = "<table>\n";
                if (markItUp.altKey) {
                    html += " <tr>\n";
                    for (var c = 0; c < cols; c++) {
                        html += "! [![TH"+(c+1)+" text:]!]\n";  
                    }
                    html+= " </tr>\n";
                }
                for (var r = 0; r < rows; r++) {
                    html+= " <tr>\n";
                    for (var c = 0; c < cols; c++) {
                        html += "  <td>"+(markItUp.placeholder||"")+"</td>\n";  
                    }
                    html+= " </tr>\n";
                }
                html += "<table>\n";
                return html;
            }
        }, 
		{name:'Comment', openWith:'{', closeWith:'}', placeHolder:'Your comment here...', className: "comment"},
    ]
}
