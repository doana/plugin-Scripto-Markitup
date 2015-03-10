<?php

class ScriptoMarkitupPlugin extends Omeka_Plugin_AbstractPlugin
{
    protected $_hooks =array(
        'public_head',
    );

    public function hookPublicHead() {
        //Core markitup files.
        queue_js_file('jquery.markitup', 'markitup');
        queue_css_file('skins/simple/style', 'all', false, 'markitup');
    
        //Files for wiki syntax
        queue_js_file('sets/wiki/set', 'markitup');
        queue_css_file('sets/wiki/style', 'all', false, 'markitup');

        //Loads editor
        queue_js_file('scripto-markitup', 'markitup');
    }
}
