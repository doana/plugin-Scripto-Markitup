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
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'== ', closeWith:' ==', placeHolder:'Your title here...' },
		{name:'Heading 2', key:'2', openWith:'=== ', closeWith:' ===', placeHolder:'Your title here...' },
		{name:'Heading 3', key:'3', openWith:'==== ', closeWith:' ====', placeHolder:'Your title here...' },
		{name:'Heading 4', key:'4', openWith:'===== ', closeWith:' =====', placeHolder:'Your title here...' },
		{name:'Heading 5', key:'5', openWith:'====== ', closeWith:' ======', placeHolder:'Your title here...'},
		{separator:'---------------'},		
		{name:'Bold', key:'B', openWith:"'''", closeWith:"'''"}, 
		{name:'Italic', key:'I', openWith:"''", closeWith:"''"}, 
		{name:'Stroke through', key:'S', openWith:'<s>', closeWith:'</s>'}, 
		{separator:'---------------'},
		{name:'Bulleted list', openWith:'(!(* |!|*)!)'}, 
		{name:'Numeric list', openWith:'(!(# |!|#)!)'}, 
		{separator:'---------------'},
		{name:'Indent', openWith:':', className:"indent"}, 
		{name:'Quotes', openWith:'(!(> |!|>)!)', className:"quotes", placeHolder:''},
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
