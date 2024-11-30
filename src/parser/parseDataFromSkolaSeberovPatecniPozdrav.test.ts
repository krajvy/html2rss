import { parseDataFromSkolaSeberovPatecniPozdrav } from './parseDataFromSkolaSeberovPatecniPozdrav.js';

describe('Should parse data from Škola Šeberov Páteční Pozdrav page', () => {
  const urlRow: UrlRow = {
    title: 'Škola Šeberov - Páteční pozdrav',
    slug: 'skolaseberov-patecnipozdrav',
    url: 'https://skolaseberov.edupage.org/a/patecni-pozdrav',
  };
  const htmlPage = `
<!DOCTYPE html>		
			<!--[if lte IE 8]>              <html class="ie8 no-js" lang="cz">     <![endif]-->
			<!--[if IE 9]>					<html class="ie9 no-js" lang="cz">     <![endif]-->
			<!--[if (gt IE 9)|!(IE)]><!-->	<html class="not-ie no-js " lang="cs">  <!--<![endif]-->
			<head>				
						<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss/news">
		<link rel="shortcut icon" href="/global/pics/favicon.ico">
		<title>Páteční&nbsp;pozdrav | Základní škola a mateřská škola ŠEBEROV</title>		
										
				<!-- @edupage66  skolaseberov-->
				
				<link rel="stylesheet" href="/global/pics/css/font-awesome.min.css?v=2e1ba4">
				<link rel="stylesheet" type="text/css" href="/global/pics/css/jquery-ui-1.12.1.css?v=77ad17" />
				<link rel="stylesheet" type="text/css" href="/global/pics/css/edupageDefault.css?v=c9b525"/>	
											
				<script type="text/javascript" src="//static.edupage.org/global/pics/js/jquery/jquery-3.6.0.min.js?v=20130325"></script>							
			<script type="text/javascript" src="//static.edupage.org/global/pics/js/jquery/jquery-migrate-3.4.0.min.js?v=20130325"></script>
			<script>jQuery.migrateEnablePatches("self-closed-tags");</script>				<script type="text/javascript" src="//static.edupage.org/global/pics/js/jquery/jquery-ui-1.12.1.min.js"></script>					<script type="text/javascript" src="/langs/pics/js/lang_cz.js?v=5c2a59"></script>
					
				<script src="/global/pics/js/edubarUtils.js?v=dcca6b" type="text/javascript"></script>	
										
						<meta name="viewport" content="width=device-width, minimum-scale=1" />
		<meta name="referrer" content="origin">
		<link rel="stylesheet" href="/skin/pics/css/layoutDefault.css?v=54313d"><link rel="stylesheet" href="/elearn/pics/skin/css/text10_0.css?v=03a3cd" id="cssFor_text10"><link rel="stylesheet" href="/elearn/pics/skin/css/skin.css?v=2e2dab" id="cssFor_skin"><style type="text/css" id="mainCssStyle">
				</style>
		
		<script type="text/javascript" src="/skin/pics/js/skinResponsiveScripts.js?v=6efd66"></script><link href="/global/pics/gfonts/Comfortaa/font.css?v=6da133" type="text/css" rel="stylesheet"/><link href="/global/pics/gfonts/Open_Sans/font.css?v=609110" type="text/css" rel="stylesheet"/>		<style type="text/css">
			.g_skincolors .asc-dt th, .g_skincolors .asc-dt th a {
				background-color: #1475B8;
				color: #6C6C6C;
			}
			.g_skincolors .asc-dt table tr.rec:nth-child(even) {
				background-color: #ebf6ff;
				color: #111111;
			}
			
			.g_skincolors .asc-dt table tr.rec:nth-child(odd) {
				background-color: #d7eeff;
				color: #111111;
			}
			.g_skincolors table.asc-timetable caption {
				color: #111111;
			}
		</style>
		<link rel="stylesheet" type="text/css" href="/global/pics/css/asc.css?dummy=61b8a4"><link rel="stylesheet" type="text/css" href="/agenda/pics/css/agenda.css?dummy=d2b781">		<script type="text/javascript">
		if (!String.prototype.includes) {
			document.write('<script type="text/javascript" src="/asc/pics/old-browser-polyfill.js?dummy=d6dcf3"><'+'/script>');
		}
		var ASC=ASC||{};ASC.req_props={"edupage":"skolaseberov","lang":"cz","school_name":"Základní škola a mateřská škola ŠEBEROV","school_country":"cz","school_state":"","schoolyear_turnover":"09-01","year_auto":2024,"year_auto_date":"2024-12-01",
"custom_turnover":[],"firstDayOfWeek":1,
"weekendDays":[0,
6],"timezone":"Europe/Prague","sort_name_col":"LSF",
"dtFormats":{"date":"dd.mm.yy","time":"24"},"jsmodulemode":"bundled","loggedUser":"",
"loggedUserRights":[]};ASC.bundle_v="19574b";ASC.edupage="skolaseberov";
ASC.server="edupage66";
ASC.school_name="Základní škola a mateřská škola ŠEBEROV";
ASC.lang="cz";
ASC.school_country="cz";
ASC.schoolyear_turnover="09-01";
ASC.sort_name_col="LSF";
ASC.browser="chrome";
ASC.gsechash="00000000";
ASC.firstDayOfWeek=1;
ASC.rtl=function(ltr, rtl){return ltr;};ASC.timezone_isWeekend_day=function(d) {switch(d){case 0:return true;case 6:return true;}return false;};ASC.timezone_firstDayOfWeek=function(){return 1;};		</script>		
					<script type="text/javascript" src="/global/pics/js/bundles/bundle_main.min.js?dummy=126b00"></script>
					<script type="text/javascript">
				$j.holdReady(true);
				ASC.requireAsync('/asc/edurequest.js').then(function(){$j.holdReady(false)});
			</script>
									
			</head>		
			<body id="docbody" class="   " data-isLoginSkin="0" data-m="text/text10">
			<div class="topDiv"><div class="edubarMainSkin nowmaxL"><div class="skgd composite sgmain" id="skin_main" data-sgid="skin_main"  data-templateid="skin" data-randid="skin_main-8409">			<ul class="skip-links">
									<li><a href="#skin_FixedHeader_2">Horní menu</a></li>
													<li><a href="#skin_PageContent_2">Obsah</a></li>
													<li><a href="#skin_Login_2">Přihlášení</a></li>
													<li><a href="#skin_LegalInfo_2">Zápatí</a></li>
						
			</ul>
			<div class="skgd composite" id="skin_Div_2" data-sgid="skin_Div_2" ><ul class="skgd composite" id="skin_BoxV_3" data-sgid="skin_BoxV_3" ><li class="compositeInner"><div class="skgd composite skgdContainer" id="skin_Container_7" data-sgid="skin_Container_7" ><section class="skgd composite skgdSection visualEdit inlineEditable sgsp" id="skin_Section_7" data-sgid="skin_Section_7" ><a class="skgd composite ihoverable" id="skin_Link_7" data-sgid="skin_Link_7"  href="/"><ul class="skgd composite fbox responsive" id="skin_BoxF_3" data-sgid="skin_BoxF_3" ><li style="flex:auto 0 0;"  class="compositeInner"><img class="skgd skgdLogoImg" id="skin_Logo_3" data-sgid="skin_Logo_3"  src="//cloudt.edupage.org/cloud?z%3AaOfYHG%2BM7j9PQznEP7VSEJb6arcNcUnhLA4IxCdPrTH%2Fbpcey0hTCbPhmEm4uIVAp4NdEJA9tbd0I%2FzYaR2410yMXJGwJU7vz5bc%2FQ9QvjA4Arwx0yLuhuhuPoZqhl6l" alt="Domovská stránka" onerror="this.style.display='none'"></li><li style="flex:auto 1 1;"  class="compositeInner"><span class="skgd skgdLogoText" id="skin_LogoText_3" data-sgid="skin_LogoText_3" ><span style="font-size:100%;line-height: 120%;display:inline-block;"></span></span></li></ul></a><div class="skgd composite" id="skin_Div_3" data-sgid="skin_Div_3" ><ul class="skgd composite fbox responsive" id="skin_BoxF_4" data-sgid="skin_BoxF_4" ><li style="flex:auto 1 1;"  class="compositeInner"><div class="skgd composite" id="skin_Div_5" data-sgid="skin_Div_5" ><div class="skgd skgdSearchbox" id="skin_Searchbox_2" data-sgid="skin_Searchbox_2" >		<form action="//skolaseberov.edupage.org/search/" method="get">
			<input type="text" name="q" value="" class="skgdSearchInput" placeholder="hledaný text" title="hledaný text"><button type="submit" class="skgdSearchButton" title="Hledat"><i class="fa fa-fw fa-search" aria-label="Hledat"></i></button>
				<input type="hidden" name="cx" value="007363575946410195037:6gnn9e1l7ae">
    <input type="hidden" name="cof" value="FORID:11">
    		</form>
		</div><div class="skgd composite" id="skin_Div_6" data-sgid="skin_Div_6" ><div class="skgd skgdLangChooser" id="skin_LangChooser_2" data-sgid="skin_LangChooser_2" >		
			<a title="Výběr jazyka: Česky (Czech)" class="selectedLang langChooserMenuBtn" tabindex="0" data-langs="[{&quot;id&quot;:&quot;cz&quot;,&quot;name&quot;:&quot;\u010cesky (Czech)&quot;,&quot;icon&quot;:&quot;\/langs\/pics\/cz.gif?v=2&quot;,&quot;url&quot;:&quot;\/?lang=cz&quot;},{&quot;id&quot;:&quot;en&quot;,&quot;name&quot;:&quot;English&quot;,&quot;icon&quot;:&quot;\/langs\/pics\/en.gif?v=2&quot;,&quot;url&quot;:&quot;\/?lang=en&quot;},{&quot;id&quot;:&quot;de&quot;,&quot;name&quot;:&quot;Deutsch&quot;,&quot;icon&quot;:&quot;\/langs\/pics\/de.gif?v=2&quot;,&quot;url&quot;:&quot;\/?lang=de&quot;},{&quot;id&quot;:&quot;es&quot;,&quot;name&quot;:&quot;Spanish&quot;,&quot;icon&quot;:&quot;\/langs\/pics\/es.gif?v=2&quot;,&quot;url&quot;:&quot;\/?lang=es&quot;}]">
				<span style="background: url('//static.edupage.org/langs/pics/flags.png?v=f2af68') -96px -30px no-repeat;">
				</span>
				<span class="skgd-eyes-hidden">Česky (Czech)</span>
			</a>
							<div class="skgdMainFontSizes">
					<a class="skgdChangeFontSize" data-change="1" title="Zvětšit velikost písma" tabindex="0"><i class="fa  fa-font"></i>+</a>
					<a class="skgdChangeFontSize" data-change="-1" title="Zmenšit velikost písma" tabindex="0"><i class="fa  fa-font"></i>-</a>

					<a class="skgdChangeFontSize" data-change="contrast" title="Vysoký kontrast" tabindex="0"><i class="fa fa-adjust"></i></a>
				</div>
				</div><a class="skgd composite ihoverable" id="skin_Link_8" data-sgid="skin_Link_8"  href="/login/">Přihlášení</a></div></div></li></ul></div></section></div></li></ul><ul class="skgd composite" id="skin_BoxV_7" data-sgid="skin_BoxV_7" ><li class="compositeInner"><header class="skgd composite skgdFixedHeader fixedRight" id="skin_FixedHeader_2" data-sgid="skin_FixedHeader_2" ><div class="skgd composite skgdContainer" id="skin_Container_8" data-sgid="skin_Container_8" ><section class="skgd composite skgdSection visualEdit inlineEditable sgsp" id="skin_Section_8" data-sgid="skin_Section_8" ><a class="skgd composite ihoverable" id="skin_Link_9" data-sgid="skin_Link_9"  href="/"><img class="skgd skgdLogoImg" id="skin_Logo_4" data-sgid="skin_Logo_4"  src="//cloudt.edupage.org/cloud?z%3AaOfYHG%2BM7j9PQznEP7VSEJb6arcNcUnhLA4IxCdPrTH%2Fbpcey0hTCbPhmEm4uIVAp4NdEJA9tbd0I%2FzYaR2410yMXJGwJU7vz5bc%2FQ9QvjA4Arwx0yLuhuhuPoZqhl6l" alt="Domovská stránka" onerror="this.style.display='none'"><div class="skgd composite" id="skin_Div_8" data-sgid="skin_Div_8" ><span class="skgd skgdLogoText" id="skin_LogoText_4" data-sgid="skin_LogoText_4" ><span style="font-size:100%;line-height: 120%;display:inline-block;"></span></span></div></a><nav class="skgd menub horizontal side-menu-left" id="skin_MenuB_2" data-sgid="skin_MenuB_2" ><div class="skgdMiniMenu"><ul class="level0"><li class="skgdMenuItem skgdTopMenuItem skgdMiniMenuItem"><a class="skgdMenuItemLink skgdMiniMenuLink" aria-label="Zobrazit menu" title="Zobrazit menu" tabindex="0"><i class="fa fa-bars fa-fw" aria-hidden="true"></i></a></li></ul></div><a class="skgdSideMenuOpenBtn" aria-label="Zobrazit menu" title="Zobrazit menu" tabindex="1"><i class="fa fa-bars fa-fw" aria-hidden="true"></i></a><ul class="level0 skgdFullMenu"><li class="skgdMenuItem skgdTopMenuItem"><a class="skgdMenuItemLink"  tabindex="0" href="/?">Domů</a></li><li class="skgdMenuItem skgdTopMenuItem hasSubmenu"><a class="skgdMenuItemLink"  tabindex="0" aria-expanded="false" aria-controls="skin_MenuB_2_sm1">Základní škola<i class="fa fa-caret-down fa-fw" aria-label="Tato položka má podmenu" role="img"></i></a><div class="skgdSubmenuDiv skgdSubmenuDiv2" id="skin_MenuB_2_sm1"><div class="submenuContent withImage modCount3"><ul class="level1 modCount3"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink skgdSubmenuTitle "><span class="fn">Základní informace o škole</span></a><ul class="level2 modCount4"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/koncepce"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Koncepce</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/awards/"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Nová budova školy</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/nas-tym"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Náš tým</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="https://www.kellnerfoundation.cz/pomahame-skolam-k-uspechu"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Pomáháme školám k úspěchu</span></a></li></ul></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink skgdSubmenuTitle "><span class="fn">Administrativa</span></a><ul class="level2 modCount4"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/ke-stazeni"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Ke stažení</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/skolni-rad"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Školní řád</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/skolska-rada"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Školská rada</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/job/"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Pracovní nabídky</span></a></li></ul></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink skgdSubmenuTitle "><span class="fn">Zápisy a přestupy</span></a><ul class="level2 modCount2"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/proc-zvolit-nasi-skolu"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Proč zvolit naši školu</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/jak-se-registrovat"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Jak se registrovat</span></a></li></ul></li></ul></div><div class="submenuImage"><img src="/global/pics/skins/slide/thumbs/fill320x320trslide102.jpg" alt=""></div><div style="clear:both"></div></div></li><li class="skgdMenuItem skgdTopMenuItem selected hasSubmenu"><a class="skgdMenuItemLink"  tabindex="0" aria-expanded="false" aria-controls="skin_MenuB_2_sm2">Žáci a rodiče<i class="fa fa-caret-down fa-fw" aria-label="Tato položka má podmenu" role="img"></i></a><div class="skgdSubmenuDiv skgdSubmenuDiv2" id="skin_MenuB_2_sm2"><div class="submenuContent withImage modCount3"><ul class="level1 modCount3"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink skgdSubmenuTitle "><span class="fn">Každodenní záležitosti</span></a><ul class="level2 modCount4"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/calendar/?#now"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Kalendář</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/timetable/"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Rozvrh</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/substitution/"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Suplování</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="https://app.strava.cz/jidelnicky?jidelna=11581" target="_blank"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Jídelní lístek</span></a></li></ul></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink skgdSubmenuTitle "><span class="fn">Život na škole</span></a><ul class="level2 modCount5"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/skolni-druzina"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Školní družina</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/skolni-klub"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Školní klub</span></a></li><li class="skgdSubmenuItem selected"><a class="skgdSubmenuItemLink withIcon" href="/a/patecni-pozdrav"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Páteční pozdrav</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/skolni-poradenske-centrum"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Školní poradenské centrum</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/seberovsky-ctyrlistek-spolek-rodicu"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Šeberovský čtyřlístek - spolek rodičů</span></a></li></ul></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink skgdSubmenuTitle "><span class="fn">Různé</span></a><ul class="level2 modCount3"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/blog"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Blog</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="https://sites.google.com/view/floseberov/" target="_blank"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">FLOŠ</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/eduapi?cmd=logintopartner&amp;url=https://skolaseberov.bellhop.cz/IS/sign/login-from" target="_blank"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Bellhop</span></a></li></ul></li></ul></div><div class="submenuImage"><img src="/global/pics/skins/slide/thumbs/fill320x320trslide103.jpg" alt=""></div><div style="clear:both"></div></div></li><li class="skgdMenuItem skgdTopMenuItem hasSubmenu"><a class="skgdMenuItemLink"  tabindex="0" aria-expanded="false" aria-controls="skin_MenuB_2_sm3">AKAŠE<i class="fa fa-caret-down fa-fw" aria-label="Tato položka má podmenu" role="img"></i></a><div class="skgdSubmenuDiv skgdSubmenuDiv2" id="skin_MenuB_2_sm3"><div class="submenuContent withImage modCount2"><ul class="level1 modCount2"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink skgdSubmenuTitle "><span class="fn">O projektu</span></a><ul class="level2 modCount2"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/koncepce-1"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Koncepce</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/kontakty-1"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Kontakty</span></a></li></ul></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink skgdSubmenuTitle "><span class="fn">Aktuality</span></a><ul class="level2 modCount2"><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/kruzky/"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Kroužky</span></a></li><li class="skgdSubmenuItem"><a class="skgdSubmenuItemLink withIcon" href="/a/pronajmy"><i class="fa fa-caret-right fa-fw" aria-hidden="true" role="img"></i><span class="fn">Pronájmy</span></a></li></ul></li></ul></div><div class="submenuImage"><img src="//cloud-9.edupage.org/cloud?z%3A5%2FhSIe27JeOEaIpgcUrA9DYnMhkYk8aE5HXx5qZOnhV79oVYBk7P7TQAw7moo1z%2BB794ond3kaubJMEreN0EzQ%3D%3D" alt=""></div><div style="clear:both"></div></div></li><li class="skgdMenuItem skgdTopMenuItem"><a class="skgdMenuItemLink"  tabindex="0" href="/contact/">Kontakty</a></li><li class="skgdMenuItem skgdTopMenuItem"><a class="skgdMenuItemLink"  tabindex="0" href="/news/">Novinky</a></li><li class="skgdMenuItem skgdTopMenuItem"><a class="skgdMenuItemLink"  tabindex="0" href="/a/materska-skola">Mateřská škola</a></li></ul>		<script type="text/javascript">
			$j('#skin_MenuB_2').responsiveMenuSkinGadget({"editable":false});
		</script></nav></section></div></header></li></ul></div><div class="skgd composite" id="skin_Div_10" data-sgid="skin_Div_10" ><section class="skgd composite skgdSection visualEdit inlineEditable sgsp" id="skin_Section_9" data-sgid="skin_Section_9" ><header class="skgd composite skgdModHeader" id="skin_ModuleHeader_2" data-sgid="skin_ModuleHeader_2" ><div class="skgd composite skgdFullWidthContainer" id="skin_FullWidthContainer_1" data-sgid="skin_FullWidthContainer_1" ><div class="skgd composite imageSkgd imageDivSkgd skgdImageDivTranslucent" id="skin_ImageDiv_1" data-sgid="skin_ImageDiv_1" ><div class="skgd composite skgdContainer" id="skin_Container_1" data-sgid="skin_Container_1" ><h1 class="skgd" id="skin_ModuleHeading_1" data-sgid="skin_ModuleHeading_1" >Páteční pozdrav</h2><ul class="skgd composite skgdList responsive skgdBreadcrumb" id="skin_Breadcrumb_1" data-sgid="skin_Breadcrumb_1" ><li class="skgd skgdli-skin_ListItem_1-skin_ListItem_1 composite skgdLi" id="skin_ListItem_1-home0" data-sgid="skin_ListItem_1-home0"  data-listItemId="home0"><a class="skgd skgdli-skin_ListItem_1-skin_Link_1 composite ihoverable" id="skin_Link_1-home0" data-sgid="skin_Link_1-home0"  href="/?">Domů</a></li><li class="skgd skgdli-skin_ListItem_2-skin_ListItem_2 composite skgdLi" id="skin_ListItem_2-sep1" data-sgid="skin_ListItem_2-sep1"  data-listItemId="sep1"><div class="skgd skgdli-skin_ListItem_2-skin_Text_1" id="skin_Text_1-sep1" data-sgid="skin_Text_1-sep1" >/</div></li><li class="skgd skgdli-skin_ListItem_1-skin_ListItem_1 composite skgdLi" id="skin_ListItem_1-submenu51" data-sgid="skin_ListItem_1-submenu51"  data-listItemId="submenu51"><a class="skgd skgdli-skin_ListItem_1-skin_Link_1 composite ihoverable emptyLink" id="skin_Link_1-submenu51" data-sgid="skin_Link_1-submenu51" >Žáci a rodiče</a></li><li class="skgd skgdli-skin_ListItem_2-skin_ListItem_2 composite skgdLi" id="skin_ListItem_2-sep2" data-sgid="skin_ListItem_2-sep2"  data-listItemId="sep2"><div class="skgd skgdli-skin_ListItem_2-skin_Text_1" id="skin_Text_1-sep2" data-sgid="skin_Text_1-sep2" >/</div></li><li class="skgd skgdli-skin_ListItem_1-skin_ListItem_1 composite skgdLi" id="skin_ListItem_1-submenu72" data-sgid="skin_ListItem_1-submenu72"  data-listItemId="submenu72"><a class="skgd skgdli-skin_ListItem_1-skin_Link_1 composite ihoverable emptyLink" id="skin_Link_1-submenu72" data-sgid="skin_Link_1-submenu72" >Život na škole</a></li><li class="skgd skgdli-skin_ListItem_2-skin_ListItem_2 composite skgdLi" id="skin_ListItem_2-sep3" data-sgid="skin_ListItem_2-sep3"  data-listItemId="sep3"><div class="skgd skgdli-skin_ListItem_2-skin_Text_1" id="skin_Text_1-sep3" data-sgid="skin_Text_1-sep3" >/</div></li><li class="skgd skgdli-skin_ListItem_1-skin_ListItem_1 composite skgdLi itemSelected" id="skin_ListItem_1-text103" data-sgid="skin_ListItem_1-text103"  data-listItemId="text103"><a class="skgd skgdli-skin_ListItem_1-skin_Link_1 composite ihoverable" id="skin_Link_1-text103" data-sgid="skin_Link_1-text103"  href="/a/patecni-pozdrav">Páteční pozdrav</a></li></ul></div></div></div></header></section><div class="skgd composite skgdContainer" id="skin_Container_10" data-sgid="skin_Container_10" ><div class="skgd" id="skin_PageContent_2" data-sgid="skin_PageContent_2" ><main class="skgd composite sgmain maing sgspte" id="text10_main" data-sgid="text10_main"  data-templateid="text10" data-randid="text10_main-2465"><ul class="skgd composite" id="text10_BoxV_1" data-sgid="text10_BoxV_1" ><li class="compositeInner"><section class="skgd composite skgdSubpageContent" id="text10_SubpageContent_1" data-sgid="text10_SubpageContent_1" ><ul class="skgd composite sgbox sgsp skgdSectionGroup skgdListH1 responsive" id="text10_SectionGroup_1" data-sgid="text10_SectionGroup_1" ><li class="compositeInner skgdListLi" style="padding-right:15px;padding-bottom:15px;"><section class="skgd composite skgdSection visualEdit inlineEditable sgsp" id="text10_Section_1" data-sgid="text10_Section_1" ><div class="skgd composite skgdSkb skb_skin0" id="text10_StyledBox_1" data-sgid="text10_StyledBox_1" ><ul class="skgd composite" id="text10_BoxV_2" data-sgid="text10_BoxV_2" ><li class="compositeInner"><h2 class="skgd" id="text10_SubpageHeading_1" data-sgid="text10_SubpageHeading_1" ></h2></li><li class="compositeInner"><div class="skgd plainText plainTextErte" id="text10_Html_1" data-sgid="text10_Html_1" ><div class="erte erte-main" data-id="rtew1"><div class="erte erte-section" data-id="rtew2"><div class="erte-section-inner"><div class="erte erte-columns" data-id="rtew3"><div class="erte erte-col erte-cell" data-id="rtew4"><div class="erte erte-text erte-content" data-id="rtew5"><div class="erte-text-inner"><p><br>
<strong>Páteční pozdravy jsou pravidelné zprávy z&nbsp;naší-vaší školy. Jejich prostřednictvím informujeme rodiče a&nbsp;školní komunitu o&nbsp;důležitých událostech, aktualitách a&nbsp;plánovaných aktivitách. Páteční pozdravy slouží k&nbsp;udržování komunikace a&nbsp;posilování pocitu sounáležitosti v&nbsp;rámci školní komunity.</strong></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AhcaocEak5tLgpP8F99N3ydb5vEt0BQGeC2miBzupwHBdAbQufJ%2BB9Aobvnct2961">Páteční pozdrav 11&nbsp;/ 29. listopadu 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AvBb9st%2F%2BxjF2Zo0NA%2BBVkqnS9uCSoyqsDPwTTgTVRYZm221xjGO765kQtB4VEmU7">Páteční pozdrav 10&nbsp;/ 22. listopadu 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AwC%2FO6sDDXS0luY5Ul1IZyw%2FFXVFd%2FwoO27SuC5LVunBkTJDoqiHbaHtvWg2vIK%2BY">Páteční pozdrav 9 / 15. listopadu 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AAHAP54SeDdNR3HoYYAsHwnsZe6dpwrDjLUShtItZeG1WCIv2mHAEH6EqA0%2BL0JMh">Páteční pozdrav 8 / 8.&nbsp;listopadu 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3ArHo059NSwmvJojykyHwDHt8UfEOOdZac6DslUZud2ZancpsQedYB%2FbUZinAWbPB7">Páteční pozdrav 6 / 18. října 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AoyxhCRjsNFjBfJ68v4hXrKlLGd9dlY7XaA2U6iO%2BitaERNttvYZyBUaUfaHpW0wB">Páteční pozdrav 5 / 11. října 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AOX4pMJFDEXNJ02RNgcWSzC5TwfGKJMBxBzqShUO3%2FYZ55JiJtGcYfQdwlSKqOrNM">Páteční pozdrav 4 / 4.&nbsp;října 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AlDSSwc2COdUVK9HIlNArtmOGf3pWbpFwQmZUNo%2FZ63vHCO4iQjJiAgKYvctJBGG7">Páteční pozdrav 3 / 27. září 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3A4rg6xhpGSwAIvl9sctKcO9XYrzFgaIYYZ8UfuqfqlvDC97YqbS1v%2F38jDIzJany%2F">Páteční pozdrav 2 / 20. září 2024</a></p>

<p><a href="https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AtHNEjEMeO1pN7YkuTa2tVuAxndt2LJR7P6zFYmtH8yBjz2LykrV8LouBiJgAnRro" target="_blank">Páteční pozdrav 1/&nbsp;13. září 2024</a></p>
</div></div></div></div><div class="erte erte-columns" data-id="rtew6"><div class="erte erte-col erte-cell" data-id="rtew7"><div class="erte erte-photos erte-content" data-id="rtew8"></div></div></div><div class="erte erte-columns" data-id="rtew9"><div class="erte erte-col erte-cell" data-id="rtew10"><div class="erte erte-text erte-content erte-text-empty" data-id="rtew11"><div class="erte-text-inner"></div></div></div></div></div></div></div></div></li></ul></div></section></li></ul></section></li></ul></main>		<script type="text/javascript">			
			$j(document).ready(function($) {
				var accepted = localStorage.getItem('euCookieAccepted') || sessionStorage.getItem('euCookieAccepted');
				if (!accepted) {
					var s = '';
					s += '<div class="eu-cookie-panel" style="white-space:pre-wrap">';
						s += ls(7818);
						s += '<div style="text-align: right;margin-top: 10px;">';						
							s += '<a class="flat-button flat-button-greend eu-cookie-closeBtn" tabindex="1">'+lset(1573)+'</a>';
						s += '</div>';
					s += '</div>';
					var elem = $(s).prependTo($('body'));
					
					elem.find('.eu-cookie-closeBtn').click(function() {
						localStorage.setItem('euCookieAccepted','1');
						sessionStorage.setItem('euCookieAccepted','1');
						elem.fadeOut('fast',function() {
							elem.remove();
						});
					}).on('keypress', function(e) {
						if (e.which == 13) {
							$(this).click();
							return false;
						}
					})
				}
				
			});
		</script>
		</div></div></div><div class="skgd composite" id="skin_Div_11" data-sgid="skin_Div_11" ><div class="skgd composite skgdContainer" id="skin_Container_11" data-sgid="skin_Container_11" ><ul class="skgd composite sgbox sgsp skgdSectionGroup skgdListH skgdListHGap skgdListCols3 responsive" id="skin_SectionGroup_2" data-sgid="skin_SectionGroup_2" ><li class="compositeInner skgdListLi" style="padding-right:1em;padding-bottom:1em;"><section class="skgd composite skgdSection visualEdit inlineEditable sgsp" id="skin_Section_10" data-sgid="skin_Section_10" ><ul class="skgd composite" id="skin_BoxV_8" data-sgid="skin_BoxV_8" ><li class="compositeInner"><h3 class="skgd inlineEditable" id="skin_Heading_4" data-sgid="skin_Heading_4" >Odkazy</h3></li><li class="compositeInner"><ul class="skgd composite skgdList responsive skgd-fa-ul" id="skin_LegalInfo_2" data-sgid="skin_LegalInfo_2" ><li class="skgd skgdli-skin_ListItem_8-skin_ListItem_8 composite skgdLi skgd-fa-li fa-envelope" id="skin_ListItem_8-0" data-sgid="skin_ListItem_8-0"  data-listItemId="0"><a class="skgd skgdli-skin_ListItem_8-skin_Link_11 composite ihoverable" id="skin_Link_11-0" data-sgid="skin_Link_11-0"  href="mailto:hospodarka@skolaseberov.cz">Správce obsahu</a></li><li class="skgd skgdli-skin_ListItem_8-skin_ListItem_8 composite skgdLi skgd-fa-li fa-envelope" id="skin_ListItem_8-1" data-sgid="skin_ListItem_8-1"  data-listItemId="1"><a class="skgd skgdli-skin_ListItem_8-skin_Link_11 composite ihoverable" id="skin_Link_11-1" data-sgid="skin_Link_11-1"  href="mailto:hospodarka@skolaseberov.cz">Technická podpora</a></li><li class="skgd skgdli-skin_ListItem_8-skin_ListItem_8 composite skgdLi skgd-fa-li fa-wheelchair" id="skin_ListItem_8-2" data-sgid="skin_ListItem_8-2"  data-listItemId="2"><a class="skgd skgdli-skin_ListItem_8-skin_Link_11 composite ihoverable" id="skin_Link_11-2" data-sgid="skin_Link_11-2"  href="/privacy/?eqa=cHJpc3R1cG5vc3Q9MQ%3D%3D">Prohlášení o přístupnosti</a></li><li class="skgd skgdli-skin_ListItem_8-skin_ListItem_8 composite skgdLi skgd-fa-li fa-legal" id="skin_ListItem_8-3" data-sgid="skin_ListItem_8-3"  data-listItemId="3"><a class="skgd skgdli-skin_ListItem_8-skin_Link_11 composite ihoverable" id="skin_Link_11-3" data-sgid="skin_Link_11-3"  href="/privacy/?eqa=cHJhdm5laW5mb3JtYWNpZT0x">Právní informace</a></li><li class="skgd skgdli-skin_ListItem_8-skin_ListItem_8 composite skgdLi skgd-fa-li fa-unlock" id="skin_ListItem_8-4" data-sgid="skin_ListItem_8-4"  data-listItemId="4"><a class="skgd skgdli-skin_ListItem_8-skin_Link_11 composite ihoverable" id="skin_Link_11-4" data-sgid="skin_Link_11-4"  href="/privacy/">Zásady ochrany osobních údajů</a></li><li class="skgd skgdli-skin_ListItem_8-skin_ListItem_8 composite skgdLi skgd-fa-li fa-legal" id="skin_ListItem_8-5" data-sgid="skin_ListItem_8-5"  data-listItemId="5"><a class="skgd skgdli-skin_ListItem_8-skin_Link_11 composite ihoverable" id="skin_Link_11-5" data-sgid="skin_Link_11-5"  href="/privacy/?eqa=ZXBzbT1pbXByZXN1bQ%3D%3D">Údaje o provozovateli</a></li><li class="skgd skgdli-skin_ListItem_8-skin_ListItem_8 composite skgdLi skgd-fa-li fa-sitemap" id="skin_ListItem_8-6" data-sgid="skin_ListItem_8-6"  data-listItemId="6"><a class="skgd skgdli-skin_ListItem_8-skin_Link_11 composite ihoverable" id="skin_Link_11-6" data-sgid="skin_Link_11-6"  href="/sitemap/">Mapa stránek</a></li></ul></li><li class="compositeInner"><ul class="skgd composite skgdList responsive skgd-fa-ul" id="skin_Links_2" data-sgid="skin_Links_2" ><li class="skgd skgdli-skin_ListItem_9-skin_ListItem_9 composite skgdLi skgd-fa-li fa-caret-right" id="skin_ListItem_9-0" data-sgid="skin_ListItem_9-0"  data-listItemId="0"><a class="skgd skgdli-skin_ListItem_9-skin_Link_12 composite ihoverable" id="skin_Link_12-0" data-sgid="skin_Link_12-0"  href="/about/">O nás</a></li><li class="skgd skgdli-skin_ListItem_9-skin_ListItem_9 composite skgdLi skgd-fa-li fa-caret-right" id="skin_ListItem_9-1" data-sgid="skin_ListItem_9-1"  data-listItemId="1"><a class="skgd skgdli-skin_ListItem_9-skin_Link_12 composite ihoverable" id="skin_Link_12-1" data-sgid="skin_Link_12-1"  href="/contact/">Kontakt</a></li><li class="skgd skgdli-skin_ListItem_9-skin_ListItem_9 composite skgdLi skgd-fa-li fa-caret-right" id="skin_ListItem_9-2" data-sgid="skin_ListItem_9-2"  data-listItemId="2"><a class="skgd skgdli-skin_ListItem_9-skin_Link_12 composite ihoverable" id="skin_Link_12-2" data-sgid="skin_Link_12-2"  href="/news/">Novinky</a></li></ul></li></ul></section></li><li class="compositeInner skgdListLi" style="padding-right:1em;padding-bottom:1em;"><section class="skgd composite skgdSection visualEdit inlineEditable sgsp" id="skin_Section_11" data-sgid="skin_Section_11" ><ul class="skgd composite" id="skin_BoxV_9" data-sgid="skin_BoxV_9" ><li class="compositeInner"><h3 class="skgd inlineEditable" id="skin_Heading_5" data-sgid="skin_Heading_5" >Kontakty</h3></li><li class="compositeInner"><ul class="skgd composite skgdList responsive skgd-fa-ul contact" id="skin_Contact_2" data-sgid="skin_Contact_2" ><li class="skgd skgdli-skin_ListItem_10-skin_ListItem_10 composite skgdLi skgd-fa-li fa-building" id="skin_ListItem_10-school_name" data-sgid="skin_ListItem_10-school_name"  data-listItemId="school_name"><div class="skgd skgdli-skin_ListItem_10-skin_Text_4" id="skin_Text_4-school_name" data-sgid="skin_Text_4-school_name" >Základní škola a mateřská škola ŠEBEROV</div></li><li class="skgd skgdli-skin_ListItem_10-skin_ListItem_10 composite skgdLi skgd-fa-li fa-envelope" id="skin_ListItem_10-school_email" data-sgid="skin_ListItem_10-school_email"  data-listItemId="school_email"><div class="skgd skgdli-skin_ListItem_10-skin_Text_4" id="skin_Text_4-school_email" data-sgid="skin_Text_4-school_email" ><a href="mailto:hospodarka@skolaseberov.cz">hospodarka@skolaseberov.cz</a></div></li><li class="skgd skgdli-skin_ListItem_10-skin_ListItem_10 composite skgdLi skgd-fa-li fa-map-marker" id="skin_ListItem_10-school_address" data-sgid="skin_ListItem_10-school_address"  data-listItemId="school_address"><div class="skgd skgdli-skin_ListItem_10-skin_Text_4" id="skin_Text_4-school_address" data-sgid="skin_Text_4-school_address" >V Ladech 6<br />
149 00 Praha<br />
Czech Republic</div></li></ul></li></ul></section></li><li class="compositeInner skgdListLi" style="padding-right:1em;padding-bottom:1em;"><section class="skgd composite skgdSection visualEdit inlineEditable sgsp" id="skin_Section_12" data-sgid="skin_Section_12" ><ul class="skgd composite" id="skin_BoxV_10" data-sgid="skin_BoxV_10" ><li class="compositeInner"><h3 class="skgd inlineEditable" id="skin_Heading_6" data-sgid="skin_Heading_6" >Přihlášení</h3></li><li class="compositeInner"><div class="skgd skgdLogin verticalForm" id="skin_Login_2" data-sgid="skin_Login_2" >
<form action="https://skolaseberov.edupage.org/login/edubarLogin.php" method="post">
		<input type="hidden" name="csrfauth" value="046562c9a883612be9e7946d5150bfe06b540fd0b49160a8399e82e60872c99d6926f00d">
				<ul class="skgdFormList">
			<li>
				
				<span class="skgdFormLabel">
					<label for="skin_Login_2e1">Uživatelské jméno:</label>
				</span><span class="skgdFormValue">
					<input id="skin_Login_2e1" class="skgdFormInput" type="text" name="username" value="">					
				</span>				
			</li>		
			
			<li>
				
				<span class="skgdFormLabel">
					<label for="skin_Login_2e2">Heslo:</label>
				</span><span class="skgdFormValue">
					<input id="skin_Login_2e2" class="skgdFormInput" type="password" name="password" value="">					
				</span>
				
			</li>
					
			<li>
				<span class="skgdFormLabel"></span><span class="skgdFormValue skgdSubmitRow">							
											
					<input type="submit" class="skgdFormSubmit" value="Přihlášení" style="vertical-align: middle;">		
				</span>	
			</li>		
			<li>
				<span class="skgdFormLabel"></span>				
				<span class="skgdFormValue skgdLostPasswordRow">
					<a class="lostPasswordBtn" style="cursor:pointer"  tabindex="0">Neznám přihlašovací jméno nebo heslo</a>
					
					
					
					
					
					
					
										
				</span>		
			</li>	
		</ul>	
	</form><script type="text/javascript">

$j(document).ready(function($) {		
	var elem = $('#skin_Login_2');		
	elem.find('.lostPasswordBtn').on('click',function() {
			
		barNewDialog({
			'source': '/portal/?cmd=LostPassword',
			'title': ls(1589)
		});
	}).on('keypress', function(e) {
		if (e.which == 13) {
			$(this).click();
		}
	});
	
		
		elem.find('.ssoLoginBtn').on('click',function() {
			window.location = barEncLink('/login/?cmd=oauthLogin&a='+($(this).attr('data-a')||""));			
		}).on('keypress', function(e) {
			if (e.which == 13) {
				$(this).click();
			}
		});
	});
</script></div></li></ul></section></li></ul></div></div><div class="skgd composite" id="skin_Div_12" data-sgid="skin_Div_12" ><div class="skgd composite skgdContainer" id="skin_Container_12" data-sgid="skin_Container_12" ><ul class="skgd composite hbox static valign-top" id="skin_BoxH_2" data-sgid="skin_BoxH_2" ><li style="width:50.00%;"  class="compositeInner"><div class="skgd" id="skin_BlindFriendly_2" data-sgid="skin_BlindFriendly_2" ><a href="/a/patecni-pozdrav?blindFriendly=1" style="color:inherit">
			<i class="fa fa-blind" aria-hidden="true"></i> 
							Bezbariérová verze					</a>
		
		<a class="skgdChangeFontSize" data-change="1" title="Zvětšit velikost písma" tabindex="0"><i class="fa fa-fw fa-font" aria-hidden="true"></i>+</a>
		<a class="skgdChangeFontSize" data-change="-1" title="Zmenšit velikost písma" tabindex="0"><i class="fa fa-fw fa-font" aria-hidden="true"></i>-</a>
		<a class="skgdChangeFontSize" data-change="contrast" title="Vysoký kontrast" tabindex="0"><i class="fa fa-adjust"></i></a></div></li><li style="width:50.00%;"  class="compositeInner"><div class="skgd plainText" id="skin_Html_2" data-sgid="skin_Html_2" ><p>Powered by <a href="https://www.edupage.org" target="_blank">aSc EduPage</a></p></div></li></ul></div></div></div></div></div>			
			</body>
			</html>
			`;

  test('Parse HTML page', () => {
    const result = parseDataFromSkolaSeberovPatecniPozdrav(urlRow, htmlPage);
    const expectation: Feed = {
      channel: {
        title: 'Škola Šeberov - Páteční pozdrav',
        description: 'Páteční pozdrav',
        link: 'https://skolaseberov.edupage.org/a/patecni-pozdrav',
      },
      items: [
        {
          guid: '6f7ffdb7e17373239f33b2434843a0ee',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AhcaocEak5tLgpP8F99N3ydb5vEt0BQGeC2miBzupwHBdAbQufJ%2BB9Aobvnct2961',
          title: 'Páteční pozdrav 11 / 29. listopadu 2024',
        },
        {
          guid: '0a3fff95b848605e683ad0930bd6898d',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AvBb9st%2F%2BxjF2Zo0NA%2BBVkqnS9uCSoyqsDPwTTgTVRYZm221xjGO765kQtB4VEmU7',
          title: 'Páteční pozdrav 10 / 22. listopadu 2024',
        },
        {
          guid: '9dc45a4580a1052e9b391aadea3b4208',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AwC%2FO6sDDXS0luY5Ul1IZyw%2FFXVFd%2FwoO27SuC5LVunBkTJDoqiHbaHtvWg2vIK%2BY',
          title: 'Páteční pozdrav 9 / 15. listopadu 2024',
        },
        {
          guid: 'ff687a5cc9341928a77c12f30adc3357',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AAHAP54SeDdNR3HoYYAsHwnsZe6dpwrDjLUShtItZeG1WCIv2mHAEH6EqA0%2BL0JMh',
          title: 'Páteční pozdrav 8 / 8. listopadu 2024',
        },
        {
          guid: '922b80ea9e89f9b3341bb42c7d76aec5',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3ArHo059NSwmvJojykyHwDHt8UfEOOdZac6DslUZud2ZancpsQedYB%2FbUZinAWbPB7',
          title: 'Páteční pozdrav 6 / 18. října 2024',
        },
        {
          guid: 'ff392bd98b947a9c5940040c2809b01e',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AoyxhCRjsNFjBfJ68v4hXrKlLGd9dlY7XaA2U6iO%2BitaERNttvYZyBUaUfaHpW0wB',
          title: 'Páteční pozdrav 5 / 11. října 2024',
        },
        {
          guid: 'f3453519bee7360a66c78d95e4cfb421',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AOX4pMJFDEXNJ02RNgcWSzC5TwfGKJMBxBzqShUO3%2FYZ55JiJtGcYfQdwlSKqOrNM',
          title: 'Páteční pozdrav 4 / 4. října 2024',
        },
        {
          guid: 'd312f21fd645f927f79847639991194e',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AlDSSwc2COdUVK9HIlNArtmOGf3pWbpFwQmZUNo%2FZ63vHCO4iQjJiAgKYvctJBGG7',
          title: 'Páteční pozdrav 3 / 27. září 2024',
        },
        {
          guid: 'b2f1d62bc650e22c6341c913ea6a61cc',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3A4rg6xhpGSwAIvl9sctKcO9XYrzFgaIYYZ8UfuqfqlvDC97YqbS1v%2F38jDIzJany%2F',
          title: 'Páteční pozdrav 2 / 20. září 2024',
        },
        {
          guid: '616d326f189fd1b46474b38ea967310a',
          link: 'https://skolaseberov.edupage.org/elearning/ruqjzfpv?z%3AtHNEjEMeO1pN7YkuTa2tVuAxndt2LJR7P6zFYmtH8yBjz2LykrV8LouBiJgAnRro',
          title: 'Páteční pozdrav 1/ 13. září 2024',
        },
      ],
    };

    expect(result).toStrictEqual(expectation);
  });
});
