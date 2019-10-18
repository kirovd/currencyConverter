/***************************************************************************
* Vasplus Programming Blog Checkbox, Radio and Select Form Options Plugin
* Website: www.vasplus.com
****************************************************************************/
$(document).ready(function(){ var VPB_Options = {preloadImg:true}; var VPB_label_items = function(VPB_items_specifics){ var VPB_formPart = $(VPB_items_specifics.get(0).form); var VPB_areas_specifics = VPB_items_specifics.next(); if(!VPB_areas_specifics.is('label')) { VPB_areas_specifics = VPB_items_specifics.prev(); if(VPB_areas_specifics.is('label')){ var inputname = VPB_items_specifics.attr('id'); if(inputname){ VPB_areas_specifics = VPB_formPart.find('label[for="'+inputname+'"]'); } } } if(VPB_areas_specifics.is('label')){return VPB_areas_specifics.css('cursor','pointer');} return false; }; var VPB_selection_hidden_opt = function(oTarget){ var ulVisible = $('.VPB_selection_hidden_opt ul:visible'); ulVisible.each(function(){ var oSelect = $(this).parents(".VPB_selection_hidden_opt:first").find("select").get(0); if( !(oTarget && oSelect.VPB_areas_specifics && oSelect.VPB_areas_specifics.get(0) == oTarget.get(0)) ){$(this).hide();} }); }; var VPB_clicks_identifier_determiner = function(event) { if ($(event.target).parents('.VPB_selection_hidden_opt').length === 0) { VPB_selection_hidden_opt($(event.target)); } }; var VPB_items_waiter_opt = function (){ $(document).mousedown(VPB_clicks_identifier_determiner); };	var VPB_items_settings_opt = function(f){ var sel; $('.VPB_selection_hidden_opt select', f).each(function(){sel = (this.selectedIndex<0) ? 0 : this.selectedIndex; $('ul', $(this).parent()).each(function(){$('a:eq('+ sel +')', this).click();});}); $('a.VPB_checkboxes_opt, a.VPB_radioboxes_opt', f).removeClass('VPB_checkboxed_opt'); $('input:checkbox, input:radio', f).each(function(){if(this.checked){$('a', $(this).parent()).addClass('VPB_checkboxed_opt');}}); }; $.fn.VPB_checkbox_main_opt = function(){ return this.each(function(){ if($(this).hasClass('VPB_checkbox_main_hidden')) {return;} var $input = $(this); var inputSelf = this; var VPB_areas_specifics=VPB_label_items($input); VPB_areas_specifics && VPB_areas_specifics.click(function(){VPB_linked_opt.trigger('click');}); var VPB_linked_opt = $('<a href="javascript:void(0);" class="VPB_checkboxes_opt"></a>'); $input.addClass('VPB_checkbox_main_hidden').wrap('<span class="VPB_checkboxes_optWrapper"></span>').parent().prepend(VPB_linked_opt); $input.change(function(){ this.checked && VPB_linked_opt.addClass('VPB_checkboxed_opt') || VPB_linked_opt.removeClass('VPB_checkboxed_opt'); return true; }); VPB_linked_opt.click(function(){ if($input.attr('disabled')){return false;} $input.trigger('click').trigger("change"); return false; }); this.checked && VPB_linked_opt.addClass('VPB_checkboxed_opt'); }); }; $.fn.VPB_radiobox_main_opt = function(){ return this.each(function(){ if($(this).hasClass('VPB_checkbox_main_hidden')) {return;} var $input = $(this); var inputSelf = this; VPB_areas_specifics = VPB_label_items($input); VPB_areas_specifics && VPB_areas_specifics.click(function(){VPB_linked_opt.trigger('click');}); var VPB_linked_opt = $('<a href="javascript:void(0);" class="VPB_radioboxes_opt" rel="'+ this.name +'"></a>'); $input.addClass('VPB_checkbox_main_hidden').wrap('<span class="VPB_radioboxes_optWrapper"></span>').parent().prepend(VPB_linked_opt); $input.change(function(){ inputSelf.checked && VPB_linked_opt.addClass('VPB_checkboxed_opt') || VPB_linked_opt.removeClass('VPB_checkboxed_opt'); return true; }); VPB_linked_opt.click(function(){ if($input.attr('disabled')){return false;} $input.trigger('click').trigger('change'); $('input[name="'+$input.attr('name')+'"]',inputSelf.form).not($input).each(function(){ $(this).attr('type')=='radio' && $(this).trigger('change'); }); return false;	}); inputSelf.checked && VPB_linked_opt.addClass('VPB_checkboxed_opt'); }); }; $.fn.VPB_selectbox_main_opt = function(){ return this.each(function(index){ var $select = $(this); if($select.hasClass('VPB_checkbox_main_hidden')) {return;} if($select.attr('multiple')) {return;} var VPB_areas_specifics  =  VPB_label_items($select); var $wrapper = $select.addClass('VPB_checkbox_main_hidden').wrap('<div class="VPB_selection_hidden_opt"></div>').parent().css({zIndex: 10-index}); $wrapper.prepend('<div><span></span><a href="javascript:void(0);" class="VPB_selectbox_class_o_opt"></a></div><ul></ul>'); var $ul = $('ul', $wrapper).css('width',$select.width()).hide(); $('option', this).each(function(i){ var oLi = $('<li><a href="javascript:void(0);" index="'+ i +'">'+ $(this).html() +'</a></li>'); $ul.append(oLi); }); $ul.find('a').click(function(){ $('a.selected', $wrapper).removeClass('selected'); $(this).addClass('selected'); if ($select[0].selectedIndex != $(this).attr('index') && $select[0].onchange) { $select[0].selectedIndex = $(this).attr('index'); $select[0].onchange(); } $select[0].selectedIndex = $(this).attr('index'); $('span:eq(0)', $wrapper).html($(this).html()); $ul.hide(); return false; }); $('a:eq('+ this.selectedIndex +')', $ul).click(); $('span:first', $wrapper).click(function(){$("a.VPB_selectbox_class_o_opt",$wrapper).trigger('click');}); VPB_areas_specifics && VPB_areas_specifics.click(function(){$("a.VPB_selectbox_class_o_opt",$wrapper).trigger('click');}); this.VPB_areas_specifics = VPB_areas_specifics; var VPB_linkd_o_opt_val = $('a.VPB_selectbox_class_o_opt', $wrapper).click(function() { if( $ul.css('display') == 'none' ) {VPB_selection_hidden_opt();} if($select.attr('disabled')){return false;} $ul.slideToggle('fast', function(){ var offSet = ($('a.selected', $ul).offset().top - $ul.offset().top); $ul.animate({scrollTop: offSet}); }); return false; }); var iSelectWidth = $select.outerWidth(); var oSpan = $('span:first',$wrapper); var newWidth = (iSelectWidth > oSpan.innerWidth())?iSelectWidth+VPB_linkd_o_opt_val.outerWidth():$wrapper.width(); $wrapper.css('width',newWidth); $ul.css('width',newWidth-2); oSpan.css({width:iSelectWidth}); $ul.css({display:'block',visibility:'hidden'}); var iSelectHeight = ($('li',$ul).length)*($('li:first',$ul).height()); (iSelectHeight < $ul.height()) && $ul.css({height:iSelectHeight,'overflow':'hidden'}); $ul.css({display:'none',visibility:'visible'}); }); }; $.fn.Vasplus_Programming_Blog_Form_Plugin_Opt = function(options){ var opt = $.extend({},VPB_Options,options); return this.each(function(){ var VPB_formPart = $(this); if(VPB_formPart.hasClass('VPB_accomplished_opt')) {return;} VPB_formPart.addClass('VPB_accomplished_opt'); $('input:checkbox', this).VPB_checkbox_main_opt(); $('input:radio', this).VPB_radiobox_main_opt(); if( $('select', this).VPB_selectbox_main_opt().length > 0 ){VPB_items_waiter_opt();} VPB_formPart.bind('reset',function(){var action = function(){VPB_items_settings_opt(this);}; window.setTimeout(action, 10);}); }); }; $('#vasplus_programming_blog_form').Vasplus_Programming_Blog_Form_Plugin_Opt(); });