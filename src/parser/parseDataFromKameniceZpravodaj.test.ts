import { parseDataFromKameniceZpravodaj } from './parseDataFromKameniceZpravodaj';

describe('Should parse data from Kamenice Zpravodaj page', () => {
  const urlRow: UrlRow = {
    title: 'Kamenice - Zpravodaj',
    slug: 'kamenice-zpravodaj',
    url: 'https://www.kamenice.cz/archiv-vydani-zpravodaje',
  };
  const htmlPage = `
<!DOCTYPE html>
<html lang="cs" class="no-js">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


        <meta name="application-name" content="Kamenice" data-application="Vismo6" data-time-generated="08/31/2026 21:47:00" data-id-object="3401459" data-id-object-version="4059355" data-recaptcha-v3-site-key="6Ld4YbUUAAAAAAfAjkZNe1bRBQKPrYiB8l1HhfC8" data-minbase-version="4.10.3.0" data-web-release-date="07/16/2026 08:47:26" data-website-id="391" data-tenant-id="393" data-required-analytics-agree="true" data-required-marketing-agree="false" data-required-preference-agree="false">



    
<meta property="og:url" content="https://www.kamenice.cz/archiv-vydani-zpravodaje">
<meta property="og:type" content="article">
<meta property="og:title" content="Archiv vyd&#xE1;n&#xED; zpravodaje: Kamenice">
<meta property="og:description" content="Kamenice">
<meta property="og:image" content="https://www.kamenice.cz/images/local/v-202607161040/logo-social-networks.jpg">
<meta property="og:locale" content="cs">

<meta property="twitter:card" content="summary_large_image">
<meta property='twitter:title' content="Archiv vyd&#xE1;n&#xED; zpravodaje: Kamenice">
<meta property='twitter:description' content="Kamenice">
<meta property="twitter:image" content="https://www.kamenice.cz/images/local/v-202607161040/logo-social-networks.jpg">

    

<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/images/local/icons/apple-touch-icon.png" />
<link rel="manifest" href="/webmanifest.json">
<meta name="theme-color" content="#FFFFFF">
<link rel="icon" type="image/png" href="/images/local/icons/favicon-48x48.png" sizes="48x48" />
<link rel="icon" type="image/svg+xml" href="/images/local/icons/favicon.svg" />

        <title>Archiv vyd&#xE1;n&#xED; zpravodaje: Kamenice</title>

    
    
    <style>
        html {
            --tenant-base-color: #003819;
        }
    </style>



    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>

    <link rel="stylesheet" href="/css/global/v-2026060200001/global.css" media="screen">
    <link rel="stylesheet" href="/css/local/v-202607161040/main.css" media="screen">

    


    
        <link rel="stylesheet" href="/css/local/v-202607161040/page.css" media="screen">

    

    
    


    
    
    

    



    <link rel="stylesheet" href="/css/global/v-2026060200001/print.css" media="print">

    <script src="/js/global/wedar/v-2026060200001/mustache.js"></script>
    <script src="/js/global/v-2026060200001/wedates.js"></script>
    <script src="/js/global/v-2026060200001/wehe.js"></script>


    
    
    





    

<script>
    window.dataLayer = window.dataLayer || [];

    const consentDefaults = {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
    };
    function gtag(){ dataLayer.push(arguments); }
    gtag('consent', 'default', consentDefaults);
</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-1103RGKXBY"></script>
<script>
    gtag('js', new Date());
    gtag('config', 'G-1103RGKXBY');

    document.addEventListener('cookieconsent', (event) => {
        const detail = event.detail || {};
        const consentUpdate = {
            analytics_storage: detail.agreeAnalytics ? 'granted' : 'denied',
            ad_storage: detail.agreeMarketing ? 'granted' : 'denied',
            ad_user_data: detail.agreeMarketing ? 'granted' : 'denied',
            ad_personalization: detail.agreePreferences ? 'granted' : 'denied'
        };
        gtag('consent', 'update', consentUpdate);
    });
</script>
    
    
    
 

</head>


<body>

    

    



    























    <div class="blender-header__wrapper">
        <header id="header" class="header -page-header">
            <div class="centered header__content">
                <div class="header__heading-container">
                    <img class="header__logo" src="/images/local/v-202607161040/znak.png" width="104" height="127" alt="Znak Kamenice">
                    <h1 class="header__heading notranslate _fsr">
                        Kamenice <span class="_fsr"> - </span>
                        <span class="header__subheading">Ofici&#xE1;ln&#xED; str&#xE1;nky</span>
                    </h1>
                    <a class="header__home-link" href="/"><span class="_fsr">Odkaz na titulní stránku</span></a>
                </div>
                <div class="header__nav">
                    <nav id="main-nav" class="main-nav" aria-labelledby="nav-heading">
                        <h2 id="nav-heading" class="main-nav__heading _fsr">Hlavn&#xED; nab&#xED;dka: prvn&#xED; &#xFA;rove&#x148;</h2>
                        
                        

<div class="dev-element-block">
    
    
    

    
                
                    <div>
                    
<h2 class="element-type-heading _fsr">Menu</h2>                        

                        







<div><ul class="nav -js-nav -root-nav"><li id="n-22792-3382435" class="nav__item"><a class="nav__link -active-parent" href="/kamenice" data-object-id="3382435">Kamenice</a></li><li id="n-22792-3382473" class="nav__item"><a class="nav__link" href="/urad" data-object-id="3382473">Úřad</a></li><li id="n-22792-3282451" class="nav__item"><a class="nav__link" href="/dokumenty" data-object-id="3282451">Dokumenty</a></li><li id="n-22792-3382457" class="nav__item"><a class="nav__link" href="/volny-cas" data-object-id="3382457">Volný čas</a></li><li id="n-22792-3283414" class="nav__item"><a class="nav__link" href="/kontakty" data-object-id="3283414">Kontakt</a></li></ul></div>

                    </div>

</div>




                        <button type="button" class="header__nav-button nav-button" aria-haspopup="dialog" aria-controls="big-menu">
                            <span class="nav-button__title">Celé menu</span>
                            <span class="hamburger hamburger--collapse js-hamburger">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </span>
                        </button>

                    </nav>
                </div>
                <div class="header__additional">
                    <section class="header__social">
                        <h2 class="element-type-heading _fsr">Užitečné odkazy</h2>
                        <ul class="list">
                            <li class="list__item">
                                <div class="google-translate-element__container">
                                    <div id="google-translate-element"></div>
                                    <div class="google-translate-element__mutation" id="gte-languages"></div>
                                </div>
                            </li>
                            <li class="list__item fullscreen-search-anchor__container">
                                <h2 class="search__heading _fsr">Vyhled&#xE1;v&#xE1;n&#xED;</h2>
                                <a class="list__link fullscreen-search-anchor fullscreen_search_anchor" href="#fullscreen-search">
                                    <span class="fullscreen-search-anchor__text _fsr">Vyhled&#xE1;v&#xE1;n&#xED;</span>
                                    <img class="fullscreen-search-anchor__img" src="/images/local/icons/v-202607161040/lupa.png" width="20" height="20" alt="Znak Kamenice">
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </header>
        <div class="blender__container">
            <div id="blender" class="blender"></div>
        </div>
    </div>

    


<section id="fullscreen-search" class="fullscreen-search">
        
    <h2 class="section__heading _fsr">Vyhled&#xE1;v&#xE1;n&#xED;</h2>
    <form class="fullscreen-search__form" action="/vyhledavani" data-placeholder="" data-has-tags="true" data-use-tag-whisperer="true" data-use-search-whisperer="true" data-search-page="/vyhledavani" data-image-button-src="/images/local/v-202607161040/btn_search_fullscreen.svg" data-is-fullscreen="true" data-label="Hledan&#xFD; v&#xFD;raz" data-alt="Hledat" id="appForSearchWhisperer">

        <label class="fullscreen-search__label" for="vismo-query">Hledan&#xFD; v&#xFD;raz</label>
        <div class="fullscreen-search__container">
            <input 
                id = "vismo-query"
                name = "searchExpression"
                class="fullscreen-search__input" 
                type="text">
            
            <input 
                class="fullscreen-search__button" 
                type="image" 
                name="submit" 
                src="/images/local/v-202607161040/btn_search_fullscreen.svg" 
                alt="Hledat">
        </div>

    </form>
    <a class="fullscreen-search__close" href="#"><span class="_fsr">Zav&#x159;&#xED;t</span></a>
</section>

<script src="/js/global/v-2026060200001/weSearchWhisperer.js"></script>
<script>
    new Wehejs.WeSearchWhisperer({
        vueAppQS:"#appForSearchWhisperer"
        ,formREF:"searchFormElm"
        ,formInputREF:"searchFormInputElm"
        ,formSendButtonREF:"searchFormSendButtonElm"
        ,whispererListREF:"whispererList"
    });
</script>

<hr class="_fsr">
<script src="/js/global/v-2026060200001/fullscreensearch.js"></script>
<script>
    new FullscreenSearch(document.querySelector(".fullscreen_search_anchor"));
</script>


    <section class="breadcrumbs -sidebar" aria-labelledby="breadcrumbs-heading">
        
<div class="centered -padded">
    <h2 class="_fsr" id="breadcrumbs-heading">Drobe&#x10D;kov&#xE1; navigace</h2>
    <ul class="list breadcrumb-nav">
            <li class="breadcrumb-nav__item">
                <a href="/titulni-stranka" class="breadcrumb-nav__link" >Tituln&#xED; str&#xE1;nka</a>
            </li>
            <li class="breadcrumb-nav__item">
                <a href="/kamenice" class="breadcrumb-nav__link" >Kamenice</a>
            </li>
            <li class="breadcrumb-nav__item">
                <a href="/zpravodaj" class="breadcrumb-nav__link" >Zpravodaj</a>
            </li>
            <li class="breadcrumb-nav__item -active">
                <a href="/archiv-vydani-zpravodaje" class="breadcrumb-nav__link -active" aria-current="page">Archiv vyd&#xE1;n&#xED; zpravodaje</a>
            </li>
    </ul>
</div>
    </section>

    <div class="centered main-wrapper -sidebar">
        <main class="main ot-2">
            <div class="content">
                    



                <article class="article" aria-labelledby="article__heading">
                    
                        




<header id="article__header" class="article__header">
    
        <h1 class="heading article__heading" id="article__heading">
            

Archiv vyd&#xE1;n&#xED; zpravodaje
        </h1>
    <p class="article__perex">
        


    </p>

</header>

<div class="article__body">

	 

<div class="dev-element-block">
    
    
    

    
                
                
                    <div class="article__tags">
                    
                        

                        





<ul class="list -inline"></ul>


                    </div>
                
                
                
                    <div class="article__articles vismo-drag-drop-vertical-info vismo-left-buttons-together">
                    
<h2 class="element-type-heading _fsr">Články</h2>                        

                        









        <ul class="list documents" data-swipeview="etootId-5">
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-srpen-2026" data-object-id="4048762">
              <figure class="document__image">
                <img srcset="/image/4164365/300/300/" src="/image/4164365/300/300/" alt="Zpravodaj Srpen 2026" loading="lazy">
              </figure>
            <h3 class="document__title">Zpravodaj Srpen 2026</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2026-07-03">3. 7. 2026</time>
        <div class="document__tags">
            <ul class="list -inline">
                <li class="list__item">
                    <a href="/vyhledavani/?tags=16456" class="article__tag -tag-id-16456" title="Štítek: TOP Aktualita">TOP Aktualita</a>
                </li>
            </ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-cervenec-2026" data-object-id="4003591">
              <figure class="document__image">
                <img srcset="/image/4003595/300/300/" src="/image/4003595/300/300/" alt="Zpravodaj červenec 2026" loading="lazy">
              </figure>
            <h3 class="document__title">Zpravodaj červenec 2026</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2026-06-26">26. 6. 2026</time>
        <div class="document__tags">
            <ul class="list -inline">
                <li class="list__item">
                    <a href="/vyhledavani/?tags=16456" class="article__tag -tag-id-16456" title="Štítek: TOP Aktualita">TOP Aktualita</a>
                </li>
            </ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-cerven-2026" data-object-id="4003587">
              <figure class="document__image">
                <img srcset="/image/4003594/300/300/" src="/image/4003594/300/300/" alt="Zpravodaj červen 2026" loading="lazy">
              </figure>
            <h3 class="document__title">Zpravodaj červen 2026</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2026-06-26">26. 6. 2026</time>
        <div class="document__tags">
            <ul class="list -inline">
                <li class="list__item">
                    <a href="/vyhledavani/?tags=16456" class="article__tag -tag-id-16456" title="Štítek: TOP Aktualita">TOP Aktualita</a>
                </li>
            </ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-kveten-2026" data-object-id="4003534">
              <figure class="document__image">
                <img srcset="/image/4003562/300/300/" src="/image/4003562/300/300/" alt="Zpravodaj květen 2026" loading="lazy">
              </figure>
            <h3 class="document__title">Zpravodaj květen 2026</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2026-06-26">26. 6. 2026</time>
        <div class="document__tags">
            <ul class="list -inline">
                <li class="list__item">
                    <a href="/vyhledavani/?tags=16456" class="article__tag -tag-id-16456" title="Štítek: TOP Aktualita">TOP Aktualita</a>
                </li>
            </ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-duben-2026" data-object-id="3401734">
              <figure class="document__image">
                <img srcset="/image/3420852/300/300/" src="/image/3420852/300/300/" alt="Zpravodaj duben 2026" loading="lazy">
              </figure>
            <h3 class="document__title">Zpravodaj duben 2026</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2026-04-07">7. 4. 2026</time>
        <div class="document__tags">
            <ul class="list -inline">
                <li class="list__item">
                    <a href="/vyhledavani/?tags=16456" class="article__tag -tag-id-16456" title="Štítek: TOP Aktualita">TOP Aktualita</a>
                </li>
            </ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-brezen-2026" data-object-id="3401731">
              <figure class="document__image">
                <img srcset="/image/3402168/300/300/" src="/image/3402168/300/300/" alt="Zpravodaj březen 2026" loading="lazy">
              </figure>
            <h3 class="document__title">Zpravodaj březen 2026</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2026-03-01">1. 3. 2026</time>
        <div class="document__tags">
            <ul class="list -inline"></ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-unor-2026" data-object-id="3401729">
              <figure class="document__image">
                <img srcset="/image/3402177/300/300/" src="/image/3402177/300/300/" alt="Zpravodaj &#250;nor 2026" loading="lazy">
              </figure>
            <h3 class="document__title">Zpravodaj &#250;nor 2026</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2026-02-01">1. 2. 2026</time>
        <div class="document__tags">
            <ul class="list -inline">
                <li class="list__item">
                    <a href="/vyhledavani/?tags=16456" class="article__tag -tag-id-16456" title="Štítek: TOP Aktualita">TOP Aktualita</a>
                </li>
            </ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-leden-2026" data-object-id="3401727">
            <h3 class="document__title">Zpravodaj leden 2026</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2026-01-05">5. 1. 2026</time>
        <div class="document__tags">
            <ul class="list -inline"></ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-prosinec-2025" data-object-id="3401725">
            <h3 class="document__title">Zpravodaj prosinec 2025</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2025-12-02">2. 12. 2025</time>
        <div class="document__tags">
            <ul class="list -inline"></ul>
        </div>
    </div>
</article>
                </li>
                <li class="list__item">
                    <article class="document">
    <div class="document__body">
        <a class="document__link" href="/zpravodaj-listopad-2025" data-object-id="3401723">
            <h3 class="document__title">Zpravodaj listopad 2025</h3>
        </a>
        <time class="document__date" pubdate="pubdate" datetime="2025-11-01">1. 11. 2025</time>
        <div class="document__tags">
            <ul class="list -inline"></ul>
        </div>
    </div>
</article>
                </li>
        </ul>




    <section class="pgn-section" data-total-count="139" data-total-pages="6">
        <h2 class="element-type-heading _fsr">Stránkování</h2>
        <p class="current-page">Stránka <strong>1</strong> z 6</p>
        <nav class="pgn" aria-label="Stránkování">
            <ul class="pgn__list">

                <li class="pgn__item -first">
                        <a class="pgn__link" title="Na začátek" aria-disabled="true">
                            <span class="_fsr">Na začátek</span>
                            <svg x="0px" y="0px" viewBox="0 0 11.6 9.8"><polyline points="10.6,8.8 6.7,4.9 10.6,1 "/><polyline points="5.3,8.8 1.4,4.9 5.3,1 "/></svg>
                        </a>
                </li>

                <li class="pgn__item -previous">
                        <a class="pgn__link" title="Předchozí" aria-disabled="true">
                            <span class="_fsr">Předchozí</span>
                            <svg x="0px" y="0px" viewBox="0 0 6.3 9.8"><polyline points="5.3,8.8 1.4,4.9 5.3,1 " /></svg>
                        </a>
                </li>
                

                

                <li class="pgn__item -active">
                    <a aria-disabled="true" class="pgn__link">1</a>
                </li>

                    <li class="pgn__item">
                        <a href="https://www.kamenice.cz/archiv-vydani-zpravodaje/?elparam-5-page=2" class="pgn__link">2</a>
                    </li>
                    <li class="pgn__item">
                        <a href="https://www.kamenice.cz/archiv-vydani-zpravodaje/?elparam-5-page=3" class="pgn__link">3</a>
                    </li>
                    <li class="pgn__item">
                        <a href="https://www.kamenice.cz/archiv-vydani-zpravodaje/?elparam-5-page=4" class="pgn__link">4</a>
                    </li>
                    <li class="pgn__item">
                        <a href="https://www.kamenice.cz/archiv-vydani-zpravodaje/?elparam-5-page=5" class="pgn__link">5</a>
                    </li>
                    <li class="pgn__item">
                        <a href="https://www.kamenice.cz/archiv-vydani-zpravodaje/?elparam-5-page=6" class="pgn__link">6</a>
                    </li>


                <li class="pgn__item -next">
                        <a class="pgn__link" title="Následující" href="https://www.kamenice.cz/archiv-vydani-zpravodaje/?elparam-5-page=2">
                            <span class="_fsr">Následující</span>
                            <svg x="0px" y="0px" viewBox="0 0 6.3 9.8"><polyline points="1,8.8 4.9,4.9 1,1 "/></svg>
                        </a>
                    
                </li>

                <li class="pgn__item -last">
                        <a class="pgn__link" title="Na konec" href="https://www.kamenice.cz/archiv-vydani-zpravodaje/?elparam-5-page=6">
                            <span class="_fsr">Na konec</span>
                            <svg x="0px" y="0px" viewBox="0 0 11.6 9.8"><polyline points="1,8.8 4.9,4.9 1,1 "/><polyline points="6.3,8.8 10.2,4.9 6.3,1 "/></svg>
                        </a>
                </li>

            </ul>
        </nav>
    </section>






                    </div>
                
                

</div>




</div>

<footer class="article__footer">
	 



</footer>



                    
                </article>
            </div>
        </main>

            <div class="sidebar" role="complementary">
                <nav class="nav" aria-labelledby="nav-navigation">
                    <div class="dev-layout-block">

                        

<div class="dev-element-block">
    
    
    

    
                
                    <div>
                    
<h2 class="element-type-heading _fsr">Hlavní nabídka: </h2>                        

                        








<h2 id="nav-navigation" class="_fsr">Hlavní nabídka: Zpravodaj</h2><a id="nav__upper_node_link" href="/zpravodaj" class="nav__upper_node_link" data-object-id="3283121">Zpravodaj</a><div><ul class="nav -js-nav -root-nav"><li id="n-22793-3399878" class="nav__item"><a class="nav__link" href="/aktualni-cislo-ke-stazeni" data-object-id="3399878">Aktuální číslo ke stažení</a></li><li id="n-22793-3399846" class="nav__item"><a class="nav__link" href="/o-zpravodaji" data-object-id="3399846">O Zpravodaji</a></li><li id="n-22793-3399830" class="nav__item"><a class="nav__link" href="/pro-inzerenty" data-object-id="3399830">Pro inzerenty</a></li><li id="n-22793-3283246" class="nav__item"><a class="nav__link" href="/co-se-neveslo-do-zpravodaje" data-object-id="3283246">Co se nevešlo do zpravodaje</a></li><li id="n-22793-3399803" class="nav__item"><a class="nav__link" href="/pro-prispevatele" data-object-id="3399803">Pro přispěvatele</a></li><li id="n-22793-3283235" class="nav__item"><a class="nav__link" href="/redakcni-rada" data-object-id="3283235">Redakční rada</a></li><li id="n-22793-3401459" class="nav__item"><a class="nav__link -active" href="/archiv-vydani-zpravodaje" data-object-id="3401459">Archiv vydání zpravodaje</a></li><li id="n-22793-3399774" class="nav__item"><a class="nav__link" href="/anketa" data-object-id="3399774">Anketa</a></li><li id="n-22793-3399776" class="nav__item"><a class="nav__link" href="/kontakt-na-redakci-a-inzerci" data-object-id="3399776">Kontakt na redakci a inzerci</a></li></ul></div>


                    </div>
                

</div>




                    </div>
                </nav>
            </div>
        

    </div>

    <aside class="additional">
        <div class="centered additional__content">
            <section class="additional__section -green -contact">
                

<div class="dev-element-block">
    
    
    

    
                
                    <div class="contact">
                    
<h2 class="element-type-heading">Kontakt</h2>                        

                        


<div class="text-component" data-swipeview="etootId-22795">

<p class="contact__line -location"><b>Obec Kamenice</b><br>Ringhofferovo náměstí 434
Olešovice 251 68 Kamenice</p><p>
                    </p><p class="contact__line -phone"><b>Telefon podatelna:</b><br><a href="tel:+420606056796">+420 606 056 796</a><br><a href="tel:+420702086866">+420 702 086 866</a></p><p>
                    </p><p class="contact__line -email"><strong>E-mail:</strong><br><a href="mailto:podatelna@kamenice.cz">podatelna@kamenice.cz</a><strong></strong></p><p>

 </p><p class="contact__line -ico"><strong>IČ:&nbsp;</strong>00240273<br><b>DIČ:&nbsp;</b>CZ00240273<strong></strong></p><p>

</p><p class="contact__line -data"><strong>Datová schránka:</strong><br>f6ibnuh<strong></strong></p><p>

</p><p class="contact__line -money"><strong>Číslo účtu:</strong><br>0420575329/0800<strong></strong></p>
</div>

                    </div>

</div>



                <p class="more contact__more"><a href="/kontakty" class="more__button -inverted">Podrobný kontakt</a></p>
            </section>

            <section class="additional__section">
                

<div class="dev-element-block">
    
    
    

    
                
                    <div class="vismo-left-button vismo-drag-drop-vertical-info">
                    
<h2 class="element-type-heading _fsr">Úřední hodiny OÚ a SÚ</h2>                        

                        

    
        <ul class="org-opening-hours-container__list">

                <li class="org-opening-hours-container__item">
                    <section class="org-opening-hours">
	<h3 class="org-opening-hours__title -size-h2">Úřední hodiny OÚ a SÚ</h3>
	<ul class="org-opening-hours__list">
			<li class="org-opening-hours__item">
				<strong class="org-opening-hours__day">Po: </strong>
				<p class="org-opening-hours__time">7:30 - 12:00   13:00 - 17:00</p>
			</li>
			<li class="org-opening-hours__item">
				<strong class="org-opening-hours__day">St: </strong>
				<p class="org-opening-hours__time">7:30 - 12:00   13:00 - 17:00</p>
			</li>
	</ul>
</section>
                </li>
        </ul>


                    </div>
                
                    <div class="vismo-left-button vismo-drag-drop-vertical-info">
                    
<h2 class="element-type-heading _fsr">Podatelna, pokladna, Czech POINT</h2>                        

                        

    
        <ul class="org-opening-hours-container__list">

                <li class="org-opening-hours-container__item">
                    <section class="org-opening-hours">
	<h3 class="org-opening-hours__title -size-h2">Podatelna, pokladna, Czech POINT</h3>
	<ul class="org-opening-hours__list">
			<li class="org-opening-hours__item">
				<strong class="org-opening-hours__day">Po: </strong>
				<p class="org-opening-hours__time">7:30 - 12:00 13:00 - 17:30</p>
			</li>
			<li class="org-opening-hours__item">
				<strong class="org-opening-hours__day">Út: </strong>
				<p class="org-opening-hours__time">7:30 - 12:00 13:00 - 15:00</p>
			</li>
			<li class="org-opening-hours__item">
				<strong class="org-opening-hours__day">St: </strong>
				<p class="org-opening-hours__time">7:30 - 12:00 13:00 - 17:30</p>
			</li>
			<li class="org-opening-hours__item">
				<strong class="org-opening-hours__day">Čt: </strong>
				<p class="org-opening-hours__time">7:30 - 12:00 13:00 - 15:00</p>
			</li>
			<li class="org-opening-hours__item">
				<strong class="org-opening-hours__day">Pá: </strong>
				<p class="org-opening-hours__time">7:30 - 10:00</p>
			</li>
	</ul>
</section>
                </li>
        </ul>


                    </div>

</div>



            </section>

            <section class="additional__section -green -abo">
                <h2 class="element-type-heading">Odb&#x11B;r novinek</h2>
                <div id="abo" class="abo" aria-label="Odb&#x11B;r novinek"></div>
                <div class="additional__social">
                    <h2 class="element-type-heading _fsr">Užitečné odkazy</h2>
                    <ul class="list">
                        <!-- <li class="list__item">
                            <a class="list__link" href="https://www.facebook.com/kamenice" rel="noopener noreferrer">
                                <img src="/images/local/icons/v-202607161040/facebook.svg" alt="Facebook" data-vismo-inline-svg="not-loaded">
                            </a>
                        </li> -->
                        <li class="list__item">
                            <a class="list__link" href="https://www.youtube.com/channel/UCAPBiOBk-8J8F_Fh_r6GIyg" rel="noopener noreferrer">
                                <img src="/images/local/icons/v-202607161040/youtube.svg" alt="Youtube" data-vismo-inline-svg="not-loaded">
                            </a>
                        </li>
                        <!-- <li class="list__item">
                            <a class="list__link" href="https://www.instagram.com/" rel="noopener noreferrer">
                                <img src="/images/local/icons/v-202607161040/instagram.svg" alt="Instagram" data-vismo-inline-svg="not-loaded">
                            </a>
                        </li> -->
                        <li class="list__item">
                            <a class="list__link" href="https://kamenice.obce.gepro.cz/" rel="noopener noreferrer">
                                <img src="/images/local/icons/v-202607161040/gps.svg" alt="Gps" data-vismo-inline-svg="not-loaded">
                            </a>
                        </li>
                        <!-- <li class="list__item">
                            <a class="list__link" href="https://x.com/" rel="noopener noreferrer">
                                <svg width="24" height="24"><use xlink:href="/images/local/icons/v-202607161040/icons.svg#icon-x"></use></svg>
                            </a>
                        </li> -->
                        <!-- <li class="list__item">
                            <a class="list__link" href="/doplnit" rel="noopener noreferrer">
                                <svg width="24" height="24"><use xlink:href="/images/local/icons/v-202607161040/icons.svg#icon-rss"></use></svg>
                            </a>
                        </li>-->
                    </ul>
                </div>

                <p class="more">
                    <a href="/napiste-nam" class="more__button -inverted">Napište nám</a>
                </p>

            </section>

            <section class="additional__section -banners">

                

<div class="dev-element-block">
    
    
    

    
                

</div>




            </section>
        </div>
    </aside>
    
    <dialog role="dialog" aria-modal="true" class="big-menu" id="big-menu" aria-labelledby="big-menu-heading">
        <h2 id="big-menu-heading" class="_fsr">Rozšířená nabídka</h2>
        <div class="big-menu__content centered">
            <button class="big-menu__close-btn" type="button">
                <span class="_fsr">Zavřít</span>
                <svg width="15" height="15" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path d="M2.56,13.793c-0.585,0.586 -1.536,0.586 -2.121,0c-0.585,-0.585 -0.585,-1.535 0,-2.121l11.233,-11.233c0.586,-0.585 1.536,-0.585 2.121,0c0.586,0.585 0.586,1.536 0,2.121l-11.233,11.233Z"/><path d="M13.793,11.672c0.586,0.586 0.586,1.536 0,2.121c-0.585,0.586 -1.535,0.586 -2.121,0l-11.233,-11.233c-0.585,-0.585 -0.585,-1.536 0,-2.121c0.585,-0.585 1.536,-0.585 2.121,0l11.233,11.233Z"/></svg>
            </button>
            <div class="big-menu__sections">
                <div class="big-menu__main">
                    <div class="big-menu__logo--block">
                        <img class="big-menu__logo" src="/images/local/v-202607161040/znak-flat.png" width="316" height="80" alt="Znak Kamenice">
                    </div>
                    <section class="big-menu__section">

                        

<div class="dev-element-block">
    
    
    

    
                
                    <div class="big-menu-nav">
                    
<h2 class="element-type-heading _fsr">Rozšířená nabídka</h2>                        

                        










<div><ul class="nav -js-nav -root-nav"><li id="n-22797-3382435" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/kamenice" data-object-id="3382435">
	Kamenice
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385727" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/o-kamenici" data-object-id="3385727">
	O Kamenici
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385831" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zakladni-udaje" data-object-id="3385831">
	Z&#225;kladn&#237; &#250;daje
</a>
</li><li id="n-22797-3385829" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/soucasnost-obce" data-object-id="3385829">
	Současnost obce
</a>
</li><li id="n-22797-3385825" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/prumyslova-tradice" data-object-id="3385825">
	Průmyslov&#225; tradice
</a>
</li><li id="n-22797-3385805" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/historie-obce" data-object-id="3385805">
	Historie obce
</a>
</li><li id="n-22797-3385760" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/literatura-o-obci" data-object-id="3385760">
	Literatura o obci
</a>
</li><li id="n-22797-3385731" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ochrana-prirody" data-object-id="3385731">
	Ochrana př&#237;rody
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385756" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zneskodnovani-odpadnich-vod" data-object-id="3385756">
	Zneškodňov&#225;n&#237; odpadn&#237;ch vod
</a>
</li><li id="n-22797-3385752" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/skeble-v-mlynskem-rybnice" data-object-id="3385752">
	Škeble v Ml&#253;nsk&#233;m rybn&#237;ce
</a>
</li><li id="n-22797-3385749" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rybnicky-a-biotopy" data-object-id="3385749">
	Rybn&#237;čky a biotopy
</a>
</li><li id="n-22797-3385747" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/povodne-sucha-a-stromy" data-object-id="3385747">
	Povodně, sucha a stromy
</a>
</li><li id="n-22797-3385745" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/stromy-vaseho-souseda" data-object-id="3385745">
	Stromy vašeho souseda
</a>
</li><li id="n-22797-3385735" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/podminky-kaceni-drevin" data-object-id="3385735">
	Podm&#237;nky k&#225;cen&#237; dřevin
</a>
</li></ul></li><li id="n-22797-3385729" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="https://kamenice.obce.gepro.cz/" data-object-id="3385729">
	Geoport&#225;l Kamenice
</a>
</li></ul></li><li id="n-22797-3385838" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/sluzby-v-obci" data-object-id="3385838">
	Služby v obci
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3397357" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/skolska-zarizeni" data-object-id="3397357">
	Školsk&#225; zař&#237;zen&#237;
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3397360" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/materske-skoly" data-object-id="3397360">
	Mateřsk&#233; školy
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3397364" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/materska-skola-kamenice" data-object-id="3397364">
	Mateřsk&#225; škola Kamenice
</a>
</li><li id="n-22797-3397363" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/lesni-materska-skola-devetsil" data-object-id="3397363">
	Lesn&#237; mateřsk&#225; škola Devětsil
</a>
</li><li id="n-22797-3397362" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/lesni-materska-skola-teptin" data-object-id="3397362">
	Lesn&#237; mateřsk&#225; škola Těpt&#237;n
</a>
</li></ul></li><li id="n-22797-3397374" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/zakladni-skoly" data-object-id="3397374">
	Z&#225;kladn&#237; školy
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3397388" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zakladni-skola-kamenice" data-object-id="3397388">
	Z&#225;kladn&#237; škola Kamenice
</a>
</li><li id="n-22797-3397385" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/skolni-jidelna" data-object-id="3397385">
	Školn&#237; j&#237;delna
</a>
</li><li id="n-22797-3397382" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zakladni-skola-olesovice" data-object-id="3397382">
	Z&#225;kladn&#237; škola Olešovice
</a>
</li><li id="n-22797-3397377" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zakladni-skola-teptin-s-r-o" data-object-id="3397377">
	Z&#225;kladn&#237; škola Těpt&#237;n s.r.o.
</a>
</li><li id="n-22797-3397372" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/lesni-zakladni-skola-devetsil" data-object-id="3397372">
	Lesn&#237; z&#225;kladn&#237; škola Devětsil
</a>
</li></ul></li></ul></li><li id="n-22797-3397356" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zdravotni-pece" data-object-id="3397356">
	Zdravotn&#237; p&#233;če
</a>
</li><li id="n-22797-3397352" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zachranne-sbory" data-object-id="3397352">
	Z&#225;chrann&#233; sbory
</a>
</li><li id="n-22797-3386057" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/kam-s-odpady" data-object-id="3386057">
	Kam s odpady
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385352" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/poplatky-za-komunalni-odpad" data-object-id="3385352">
	Poplatky za komun&#225;ln&#237; odpad
</a>
</li><li id="n-22797-3397296" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/prijmy-a-vydaje-na-odpady" data-object-id="3397296">
	Př&#237;jmy a v&#253;daje na odpady
</a>
</li><li id="n-22797-3397245" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/svoz-odpadu" data-object-id="3397245">
	Svoz odpadu
</a>
</li><li id="n-22797-3397227" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/trideni-odpadu" data-object-id="3397227">
	Tř&#237;děn&#237; odpadu
</a>
</li><li id="n-22797-3397219" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/odpad-z-rekreacnich-objektu" data-object-id="3397219">
	Odpad z rekreačn&#237;ch objektů
</a>
</li><li id="n-22797-3397208" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/likvidace-bioodpadu" data-object-id="3397208">
	Likvidace bioodpadu
</a>
</li><li id="n-22797-3397201" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/likvidace-velkoobjemoveho-odpadu" data-object-id="3397201">
	Likvidace velkoobjemov&#233;ho odpadu
</a>
</li><li id="n-22797-3397185" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/likvidace-nebezpecneho-odpadu" data-object-id="3397185">
	Likvidace nebezpečn&#233;ho odpadu
</a>
</li><li id="n-22797-3386076" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rady-pro-porizeni-nove-nadoby-popelnice" data-object-id="3386076">
	Rady pro poř&#237;zen&#237; nov&#233; n&#225;doby (popelnice)
</a>
</li><li id="n-22797-3386061" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/cipovani-nadob" data-object-id="3386061">
	Čipov&#225;n&#237; n&#225;dob
</a>
</li></ul></li><li id="n-22797-3386043" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/vodovod-a-kanalizace" data-object-id="3386043">
	Vodovod a kanalizace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382877" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kanalizace-vsedobrovice-stirin" data-object-id="3382877">
	Kanalizace Všedobrovice-Štiř&#237;n
</a>
</li></ul></li><li id="n-22797-3385939" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/kupte-od-souseda" data-object-id="3385939">
	Kupte od souseda
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385942" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/seznam-podnikatelu" data-object-id="3385942">
	Seznam podnikatelů
</a>
</li></ul></li><li id="n-22797-3385912" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/udrzba-komunikaci" data-object-id="3385912">
	&#218;držba komunikac&#237;
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385932" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/udrzba-obecnich-komunikaci" data-object-id="3385932">
	&#218;držba obecn&#237;ch komunikac&#237;
</a>
</li><li id="n-22797-3385917" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zimni-udrzba-komunikaci" data-object-id="3385917">
	Zimn&#237; &#250;držba komunikac&#237;
</a>
</li><li id="n-22797-3385914" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/oznaceni-neudrzovanych-komunikaci" data-object-id="3385914">
	Označen&#237; neudržovan&#253;ch komunikac&#237;
</a>
</li><li id="n-22797-3385929" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/sprava-a-udrzba-krajskych-komunikaci" data-object-id="3385929">
	Spr&#225;va a &#250;držba krajsk&#253;ch komunikac&#237;
</a>
</li></ul></li><li id="n-22797-3385862" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/technicke-sluzby" data-object-id="3385862">
	Technick&#233; služby
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385896" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/o-ts-kamenice" data-object-id="3385896">
	O TS Kamenice
</a>
</li></ul></li><li id="n-22797-3385839" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/posta" data-object-id="3385839">
	Pošta
</a>
</li></ul></li><li id="n-22797-3283121" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/zpravodaj" data-object-id="3283121">
	Zpravodaj
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3399878" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/aktualni-cislo-ke-stazeni" data-object-id="3399878">
	Aktu&#225;ln&#237; č&#237;slo ke stažen&#237;
</a>
</li><li id="n-22797-3399846" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/o-zpravodaji" data-object-id="3399846">
	O Zpravodaji
</a>
</li><li id="n-22797-3399830" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/pro-inzerenty" data-object-id="3399830">
	Pro inzerenty
</a>
</li><li id="n-22797-3283246" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/co-se-neveslo-do-zpravodaje" data-object-id="3283246">
	Co se nevešlo do zpravodaje
</a>
</li><li id="n-22797-3399803" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/pro-prispevatele" data-object-id="3399803">
	Pro přispěvatele
</a>
</li><li id="n-22797-3283235" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/redakcni-rada" data-object-id="3283235">
	Redakčn&#237; rada
</a>
</li><li id="n-22797-3401459" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/archiv-vydani-zpravodaje" data-object-id="3401459">
	Archiv vyd&#225;n&#237; zpravodaje
</a>
</li><li id="n-22797-3399774" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/anketa" data-object-id="3399774">
	Anketa
</a>
</li><li id="n-22797-3399776" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kontakt-na-redakci-a-inzerci" data-object-id="3399776">
	Kontakt na redakci a inzerci
</a>
</li></ul></li><li id="n-22797-3283461" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-obce" data-object-id="3283461">
	Fotogalerie obce
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3947475" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2026" data-object-id="3947475">
	Fotogalerie 2026
</a>
</li><li id="n-22797-3286286" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2025-1" data-object-id="3286286">
	Fotogalerie 2025
</a>
</li><li id="n-22797-3285479" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2024-1" data-object-id="3285479">
	Fotogalerie 2024
</a>
</li><li id="n-22797-3284878" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2023-1" data-object-id="3284878">
	Fotogalerie 2023
</a>
</li><li id="n-22797-3284837" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2022-1" data-object-id="3284837">
	Fotogalerie 2022
</a>
</li><li id="n-22797-3284808" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2020-1" data-object-id="3284808">
	Fotogalerie 2020
</a>
</li><li id="n-22797-3284587" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2019-1" data-object-id="3284587">
	Fotogalerie 2019
</a>
</li><li id="n-22797-3284444" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2018-1" data-object-id="3284444">
	Fotogalerie 2018
</a>
</li><li id="n-22797-3284220" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2017-1" data-object-id="3284220">
	Fotogalerie 2017
</a>
</li><li id="n-22797-3284036" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2016-1" data-object-id="3284036">
	Fotogalerie 2016
</a>
</li><li id="n-22797-3283868" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2015-1" data-object-id="3283868">
	Fotogalerie 2015
</a>
</li><li id="n-22797-3283705" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2014-1" data-object-id="3283705">
	Fotogalerie 2014
</a>
</li><li id="n-22797-3283564" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2013-1" data-object-id="3283564">
	Fotogalerie 2013
</a>
</li><li id="n-22797-3283500" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2012-1" data-object-id="3283500">
	Fotogalerie 2012
</a>
</li><li id="n-22797-3283463" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotogalerie-2010-1" data-object-id="3283463">
	Fotogalerie 2010
</a>
</li></ul></li><li id="n-22797-3399910" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="https://stredocesky.dppcr.cz/web_538299/" data-object-id="3399910">
	Povodňov&#253; pl&#225;n
</a>
</li><li id="n-22797-3399186" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/laduv-kraj-1" data-object-id="3399186">
	Ladův kraj
</a>
</li></ul></li><li id="n-22797-3382473" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/urad" data-object-id="3382473">
	&#218;řad
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3283323" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/aktualni-informace" data-object-id="3283323">
	Aktu&#225;ln&#237; informace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382887" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/odstavky-elektriny" data-object-id="3382887">
	Odst&#225;vky elektřiny
</a>
</li><li id="n-22797-3382891" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/ztraty-a-nalezy" data-object-id="3382891">
	Ztr&#225;ty a n&#225;lezy
</a>
</li></ul></li><li id="n-22797-3402190" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/potrebuji-si-vyridit" data-object-id="3402190">
	Potřebuji si vyř&#237;dit
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3402982" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/poplatky-za-komunalni-odpad" data-object-id="3402982">
	Poplatky za komun&#225;ln&#237; odpad
</a>
</li><li id="n-22797-3402929" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/povolovani-kaceni-a-zasahu-do-drevin" data-object-id="3402929">
	Povolov&#225;n&#237; k&#225;cen&#237; a z&#225;sahů do dřevin
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3402971" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/podminky-kaceni-a-zasahy-do-drevin" data-object-id="3402971">
	Podm&#237;nky k&#225;cen&#237; a z&#225;sahy do dřevin
</a>
</li></ul></li><li id="n-22797-3402786" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zrizovani-vecneho-bremene" data-object-id="3402786">
	Zřizov&#225;n&#237; věcn&#233;ho břemene
</a>
</li><li id="n-22797-3402776" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/pripojeni-na-inzenyrske-site" data-object-id="3402776">
	Připojen&#237; na inžen&#253;rsk&#233; s&#237;tě
</a>
</li><li id="n-22797-3402774" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/pripojeni-nemovitosti-k-mistni-komunikaci" data-object-id="3402774">
	Připojen&#237; nemovitosti k m&#237;stn&#237; komunikaci
</a>
</li><li id="n-22797-3402510" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zvlastni-uzivani-komunikaci-uzavirky-a-objizdky" data-object-id="3402510">
	Zvl&#225;štn&#237; už&#237;v&#225;n&#237; komunikac&#237;, uzav&#237;rky a obj&#237;žďky
</a>
</li><li id="n-22797-3402431" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zmena-mista-trvaleho-pobytu" data-object-id="3402431">
	Změna m&#237;sta trval&#233;ho pobytu
</a>
</li><li id="n-22797-3402396" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/hlaseni-adresy-pro-dorucovani" data-object-id="3402396">
	Hl&#225;šen&#237; adresy pro doručov&#225;n&#237;
</a>
</li><li id="n-22797-3402391" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/ukonceni-trvaleho-pobytu-na-uzemi-ceske-republiky" data-object-id="3402391">
	Ukončen&#237; trval&#233;ho pobytu na &#250;zem&#237; Česk&#233; republiky
</a>
</li><li id="n-22797-3402382" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zruseni-udaje-o-miste-trvaleho-pobytu" data-object-id="3402382">
	Zrušen&#237; &#250;daje o m&#237;stě trval&#233;ho pobytu
</a>
</li><li id="n-22797-3402366" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zadost-o-poskytnuti-udaju-z-informacniho-systemu" data-object-id="3402366">
	Ž&#225;dost o poskytnut&#237; &#250;dajů z informačn&#237;ho syst&#233;mu
</a>
</li><li id="n-22797-3402346" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zadost-o-poskytnuti-udaju-z-agendoveho-systemu" data-object-id="3402346">
	Ž&#225;dost o poskytnut&#237; &#250;dajů z agendov&#233;ho syst&#233;mu
</a>
</li><li id="n-22797-3402310" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mistni-poplatek-ze-psu-1" data-object-id="3402310">
	M&#237;stn&#237; poplatek ze psů
</a>
</li><li id="n-22797-3402300" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/co-delat-pri-ztrate-obcanskeho-prukazu" data-object-id="3402300">
	Co dělat při ztr&#225;tě občansk&#233;ho průkazu
</a>
</li><li id="n-22797-3402246" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/vitani-obcanku-4" data-object-id="3402246">
	V&#237;t&#225;n&#237; obč&#225;nků
</a>
</li><li id="n-22797-3402241" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zakladni-socialni-poradenstvi" data-object-id="3402241">
	Z&#225;kladn&#237; soci&#225;ln&#237; poradenstv&#237;
</a>
</li></ul></li><li id="n-22797-3385128" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/uredni-deska" data-object-id="3385128">
	&#218;ředn&#237; deska
</a>
</li><li id="n-22797-3383089" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/samosprava" data-object-id="3383089">
	Samospr&#225;va
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3383092" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/rada-obce" data-object-id="3383092">
	Rada obce
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3383094" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rada" data-object-id="3383094">
	Členov&#233; rady
</a>
</li><li id="n-22797-3539804" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/usneseni-rady" data-object-id="3539804">
	Usnesen&#237; rady
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3539813" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-ro-2026" data-object-id="3539813">
	Zased&#225;n&#237; RO 2026
</a>
</li><li id="n-22797-3539812" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-rm-2025" data-object-id="3539812">
	Zased&#225;n&#237; RO 2025
</a>
</li><li id="n-22797-3539811" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-rm-2024" data-object-id="3539811">
	Zased&#225;n&#237; RO 2024
</a>
</li><li id="n-22797-3539810" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-rm-2023" data-object-id="3539810">
	Zased&#225;n&#237; RO 2023
</a>
</li><li id="n-22797-3539809" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-rm-2022" data-object-id="3539809">
	Zased&#225;n&#237; RO 2022
</a>
</li><li id="n-22797-3539808" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-rm-2021" data-object-id="3539808">
	Zased&#225;n&#237; RO 2021
</a>
</li><li id="n-22797-3539807" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-rm-2020" data-object-id="3539807">
	Zased&#225;n&#237; RO 2020
</a>
</li><li id="n-22797-3539806" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-rm-2019" data-object-id="3539806">
	Zased&#225;n&#237; RO 2019
</a>
</li><li id="n-22797-3539805" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-rm-2018" data-object-id="3539805">
	Zased&#225;n&#237; RO 2018
</a>
</li></ul></li><li id="n-22797-3383096" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/jednaci-rad" data-object-id="3383096">
	Jednac&#237; ř&#225;d
</a>
</li></ul></li><li id="n-22797-3383098" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/zastupitelstvo-obce" data-object-id="3383098">
	Zastupitelstvo obce
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3383131" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zastupitelstvo" data-object-id="3383131">
	Členov&#233; zastupitelstva
</a>
</li><li id="n-22797-3539792" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/usneseni-zastupitelstva" data-object-id="3539792">
	Usnesen&#237; zastupitelstva
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3539803" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zo-2026" data-object-id="3539803">
	Zased&#225;n&#237; ZO 2026
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4108624" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/2026-2" data-object-id="4108624">
	Rozpočtov&#225; opatřen&#237; 2026
</a>
</li></ul></li><li id="n-22797-3539802" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zm-2025" data-object-id="3539802">
	Zased&#225;n&#237; ZO 2025
</a>
</li><li id="n-22797-3539801" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zm-2024" data-object-id="3539801">
	Zased&#225;n&#237; ZO 2024
</a>
</li><li id="n-22797-3539800" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zm-2023" data-object-id="3539800">
	Zased&#225;n&#237; ZO 2023
</a>
</li><li id="n-22797-3539798" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zm-2022" data-object-id="3539798">
	Zased&#225;n&#237; ZO 2022
</a>
</li><li id="n-22797-3539797" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zm-2021" data-object-id="3539797">
	Zased&#225;n&#237; ZO 2021
</a>
</li><li id="n-22797-3539796" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zm-2020" data-object-id="3539796">
	Zased&#225;n&#237; ZO 2020
</a>
</li><li id="n-22797-3539795" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zm-2019" data-object-id="3539795">
	Zased&#225;n&#237; ZO 2019
</a>
</li><li id="n-22797-3539794" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zasedani-zm-2018" data-object-id="3539794">
	Zased&#225;n&#237; ZO 2018
</a>
</li></ul></li><li id="n-22797-3552610" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/podklady-pro-zasedani" data-object-id="3552610">
	Podklady pro zased&#225;n&#237;
</a>
</li><li id="n-22797-3383135" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/jednaci-rad-1" data-object-id="3383135">
	Jednac&#237; ř&#225;d
</a>
</li><li id="n-22797-3987963" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/online-prenos-zasedani" data-object-id="3987963">
	Online přenos zased&#225;n&#237;
</a>
</li></ul></li><li id="n-22797-3383580" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/vybory-a-komise" data-object-id="3383580">
	V&#253;bory a komise
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3383582" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/osadni-vybory" data-object-id="3383582">
	Osadn&#237; v&#253;bory
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3383681" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ov-vsedobrovice-stirin" data-object-id="3383681">
	OV Všedobrovice - Štiř&#237;n
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3400944" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zapisy-5" data-object-id="3400944">
	Z&#225;pisy
</a>
</li></ul></li><li id="n-22797-3383644" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ov-teptin" data-object-id="3383644">
	OV Těpt&#237;n
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3400916" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zapisy-4" data-object-id="3400916">
	Z&#225;pisy
</a>
</li></ul></li><li id="n-22797-3383626" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ov-struharov" data-object-id="3383626">
	OV Struhařov
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3400763" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zapisy-3" data-object-id="3400763">
	Z&#225;pisy
</a>
</li></ul></li><li id="n-22797-3383614" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ov-ladvi" data-object-id="3383614">
	OV L&#225;dv&#237;
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3400686" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zapisy-2" data-object-id="3400686">
	Z&#225;pisy
</a>
</li></ul></li><li id="n-22797-3383606" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ov-skuher" data-object-id="3383606">
	OV Skuheř
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3400625" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zapisy-1" data-object-id="3400625">
	Z&#225;pisy
</a>
</li></ul></li><li id="n-22797-3383590" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ov-nova-hospoda" data-object-id="3383590">
	OV Nov&#225; Hospoda
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3400609" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zapisy" data-object-id="3400609">
	Z&#225;pisy
</a>
</li></ul></li></ul></li><li id="n-22797-3283450" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/financni-vybor" data-object-id="3283450">
	Finančn&#237; v&#253;bor
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3589976" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zapisy-fv" data-object-id="3589976">
	Z&#225;pisy
</a>
</li></ul></li><li id="n-22797-3283455" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/kontrolni-vybor" data-object-id="3283455">
	Kontroln&#237; v&#253;bor
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3589999" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zapisy-kv" data-object-id="3589999">
	Z&#225;pisy
</a>
</li></ul></li><li id="n-22797-3383695" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/komise-pro-sport-a-kulturu-1" data-object-id="3383695">
	Komise pro sport a kulturu
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3383698" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/dotace-pro-sport-a-kulturu" data-object-id="3383698">
	Dokumenty k ž&#225;dostem
</a>
</li><li id="n-22797-3383766" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/plan-rozvoje-sportu-v-obci-kamenice" data-object-id="3383766">
	Pl&#225;n rozvoje sportu v obci Kamenice
</a>
</li></ul></li></ul></li></ul></li><li id="n-22797-3938664" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/odbory" data-object-id="3938664">
	Odbory
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3383858" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/vedeni-uradu" data-object-id="3383858">
	Veden&#237; &#250;řadu
</a>
</li><li id="n-22797-3283433" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/odbor-investicni" data-object-id="3283433">
	Odbor investičn&#237;
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3384725" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rozsah-cinnosti-odbor-investicni" data-object-id="3384725">
	Rozsah činnosti
</a>
</li></ul></li><li id="n-22797-3401091" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/odbor-spravy-majetku" data-object-id="3401091">
	Odbor spr&#225;vy majetku
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3417132" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rozsah-cinnosti-odbor-spravy-majetku" data-object-id="3417132">
	Rozsah činnosti
</a>
</li></ul></li><li id="n-22797-3283424" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/kancelar-obce" data-object-id="3283424">
	Kancel&#225;ř obce
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3418205" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/podatelna" data-object-id="3418205">
	Podatelna
</a>
</li><li id="n-22797-3384717" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/rozsah-cinnosti-1" data-object-id="3384717">
	Rozsah činnosti
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385310" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/podatelna" data-object-id="3385310">
	Podatelna
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385389" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/czech-point" data-object-id="3385389">
	Czech POINT
</a>
</li><li id="n-22797-3385387" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/hlaseni-zavad" data-object-id="3385387">
	Hl&#225;šen&#237; z&#225;vad
</a>
</li><li id="n-22797-3385447" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/poplatky" data-object-id="3385447">
	Poplatky
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3592773" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mistni-poplatek-ze-psu" data-object-id="3592773">
	M&#237;stn&#237; poplatek ze psů
</a>
</li><li id="n-22797-3385312" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/platba-poplatku" data-object-id="3385312">
	Platba poplatků
</a>
</li><li id="n-22797-3397348" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/poplatky-za-komunalni-odpad" data-object-id="3397348">
	Poplatky za komun&#225;ln&#237; odpad
</a>
</li></ul></li></ul></li></ul></li></ul></li><li id="n-22797-3401087" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/stavebni-urad" data-object-id="3401087">
	Stavebn&#237; &#250;řad
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3417376" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rozsah-cinnosti-stavebni-urad" data-object-id="3417376">
	Rozsah činnosti
</a>
</li></ul></li><li id="n-22797-3283430" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ekonomicky-odbor" data-object-id="3283430">
	Ekonomick&#253; odbor
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3384721" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rozsah-cinnosti-ekonomicky-odbor" data-object-id="3384721">
	Rozsah činnosti
</a>
</li></ul></li><li id="n-22797-3283426" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/spravni-odbor" data-object-id="3283426">
	Spr&#225;vn&#237; odbor
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3384723" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rozsah-cinnosti" data-object-id="3384723">
	Rozsah činnosti
</a>
</li><li id="n-22797-3752612" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/socialni-prace" data-object-id="3752612">
	Soci&#225;ln&#237; pr&#225;ce
</a>
</li><li id="n-22797-3417159" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/vitani-obcanku-4" data-object-id="3417159">
	V&#237;t&#225;n&#237; obč&#225;nků
</a>
</li></ul></li></ul></li><li id="n-22797-3282859" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/projekty" data-object-id="3282859">
	Projekty a realizace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382789" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/studie" data-object-id="3382789">
	Studie
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4267198" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/komunitni-hriste-hamersky-lesik" data-object-id="4267198">
	Komunitn&#237; hřiště Hamersk&#253; les&#237;k
</a>
</li><li id="n-22797-3382797" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/bytovy-dum-teptin" data-object-id="3382797">
	Bytov&#253; dům Těpt&#237;n
</a>
</li><li id="n-22797-3382791" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rozsireni-zs-a-rekonstrukce-bytu" data-object-id="3382791">
	Rozš&#237;řen&#237; ZŠ a rekonstrukce bytů
</a>
</li></ul></li><li id="n-22797-3382677" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/priprava" data-object-id="3382677">
	Př&#237;prava
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3983431" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/chodniky-1" data-object-id="3983431">
	Chodn&#237;ky
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382692" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/chodnik-teptin-iii" data-object-id="3382692">
	Chodn&#237;k Těpt&#237;n III
</a>
</li><li id="n-22797-3382703" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/chodnik-ringhofferova-stred" data-object-id="3382703">
	Chodn&#237;k Ringhofferova střed
</a>
</li><li id="n-22797-3382708" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/chodnik-zelivec-hvezda" data-object-id="3382708">
	Chodn&#237;k Želivec Hvězda
</a>
</li></ul></li><li id="n-22797-3983354" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/obecni-komunikace-1" data-object-id="3983354">
	Obecn&#237; komunikace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382685" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/komunikace-na-vysluni-na-pesine" data-object-id="3382685">
	Komunikace Na V&#253;slun&#237;, Na Pěšině
</a>
</li><li id="n-22797-3382737" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/komunikace-vnitrni" data-object-id="3382737">
	Komunikace Vnitřn&#237;
</a>
</li></ul></li><li id="n-22797-4016317" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/vodovody-a-kanalizace" data-object-id="4016317">
	Vodovody a kanalizace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4016349" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/vodovod-a-kanalizace-skuher" data-object-id="4016349">
	Vodovod a kanalizace Skuheř
</a>
</li><li id="n-22797-4016331" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kanalizace-cov-ladvi" data-object-id="4016331">
	Kanalizace ČOV L&#225;dv&#237;
</a>
</li></ul></li><li id="n-22797-3382754" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/naves-nova-hospoda" data-object-id="3382754">
	N&#225;ves Nov&#225; Hospoda
</a>
</li></ul></li><li id="n-22797-3382598" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/realizace" data-object-id="3382598">
	Realizace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3982607" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/chodniky" data-object-id="3982607">
	Chodn&#237;ky
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4149408" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/obnova-povrchu-chodniku-olesovice-u-pomnicku-1" data-object-id="4149408">
	Obnova povrchu chodn&#237;ku Olešovice - u pomn&#237;čku
</a>
</li><li id="n-22797-3982634" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/chodnik-kuklik-ladvi" data-object-id="3982634">
	Chodn&#237;k Kukl&#237;k - L&#225;dv&#237;
</a>
</li><li id="n-22797-3382659" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/chodnik-prazska-i-a-ii-chodnik-olesovice" data-object-id="3382659">
	Chodn&#237;k Pražsk&#225; I a II, chodn&#237;k Olešovice
</a>
</li></ul></li><li id="n-22797-3982131" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/obecni-komunikace" data-object-id="3982131">
	Obecn&#237; komunikace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4198228" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kastanova" data-object-id="4198228">
	Kaštanov&#225;
</a>
</li><li id="n-22797-4198075" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/smaragdova" data-object-id="4198075">
	Smaragdov&#225;
</a>
</li><li id="n-22797-4198064" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kolma" data-object-id="4198064">
	Kolm&#225;
</a>
</li><li id="n-22797-4142382" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/k-lesu-k-markvartu-cesta-na-mokrany" data-object-id="4142382">
	K Lesu, k Markvartu, cesta na Mokřany
</a>
</li><li id="n-22797-3382743" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/okruzni" data-object-id="3382743">
	Okružn&#237;
</a>
</li><li id="n-22797-3982578" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/opalova" data-object-id="3982578">
	Op&#225;lov&#225;
</a>
</li><li id="n-22797-3982344" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/turisticka" data-object-id="3982344">
	Turistick&#225;
</a>
</li><li id="n-22797-3982138" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/trtinova" data-object-id="3982138">
	Třtinov&#225;
</a>
</li><li id="n-22797-3982076" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/tulipanova" data-object-id="3982076">
	Tulip&#225;nov&#225;
</a>
</li></ul></li><li id="n-22797-4016323" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/vodovody-a-kanalizace-1" data-object-id="4016323">
	Vodovody a kanalizace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382601" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kanalizace-jednosmerna" data-object-id="3382601">
	Kanalizace Jednosměrn&#225;
</a>
</li><li id="n-22797-3382717" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kanalizace-csov-struharov" data-object-id="3382717">
	Kanalizace ČSOV Struhařov
</a>
</li></ul></li><li id="n-22797-3982727" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/obecni-mobiliar" data-object-id="3982727">
	Obecn&#237; mobili&#225;ř
</a>
</li><li id="n-22797-3982204" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/verejne-osvetleni-1" data-object-id="3982204">
	Veřejn&#233; osvětlen&#237;
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4253881" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/verejne-osvetleni-kastanova-jilovska" data-object-id="4253881">
	Veřejn&#233; osvětlen&#237; Kaštanov&#225;/J&#237;lovsk&#225;
</a>
</li><li id="n-22797-3981409" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/verejne-osvetleni-kastanova" data-object-id="3981409">
	Veřejn&#233; osvětlen&#237; Kaštanov&#225;
</a>
</li><li id="n-22797-3382678" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/verejne-osvetleni-nova-hospoda" data-object-id="3382678">
	Veřejn&#233; osvětlen&#237; Nov&#225; Hospoda
</a>
</li></ul></li><li id="n-22797-3982159" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/mista-pro-separovany-odpad" data-object-id="3982159">
	M&#237;sta pro separovan&#253; odpad
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4254681" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/hluboka" data-object-id="4254681">
	Hlubok&#225;
</a>
</li><li id="n-22797-4254656" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/spojovaci" data-object-id="4254656">
	Spojovac&#237;
</a>
</li></ul></li><li id="n-22797-3981398" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/parkoviste-ringhofferovo-namesti" data-object-id="3981398">
	Parkoviště Ringhofferovo n&#225;měst&#237;
</a>
</li><li id="n-22797-3382648" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/budova-detske-skupiny" data-object-id="3382648">
	Budova Dětsk&#233; skupiny
</a>
</li><li id="n-22797-3382645" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/sportovni-areal" data-object-id="3382645">
	Sportovn&#237; are&#225;l
</a>
</li></ul></li><li id="n-22797-3382811" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/projekty-spolufinancovane-z-eu" data-object-id="3382811">
	Projekty spolufinancovan&#233; z EU
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382862" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/novostavba-detske-skupiny-v-kamenici" data-object-id="3382862">
	Novostavba dětsk&#233; skupiny v Kamenici
</a>
</li><li id="n-22797-3382844" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/chodnik-teptin-ii" data-object-id="3382844">
	Chodn&#237;k Těpt&#237;n II.
</a>
</li><li id="n-22797-3382836" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/vymena-svitidel-verejneho-osvetelni-v-obci-kamenice" data-object-id="3382836">
	V&#253;měna sv&#237;tidel veřejn&#233;ho osvěteln&#237; v obci Kamenice
</a>
</li><li id="n-22797-3382832" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/tlakova-kanalizace-vsedobrovice-a-stirin" data-object-id="3382832">
	Tlakov&#225; kanalizace Všedobrovice a Štiř&#237;n
</a>
</li><li id="n-22797-3382826" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/infrastruktura-v-zs-kamenici" data-object-id="3382826">
	Infrastruktura v ZŠ Kamenici
</a>
</li><li id="n-22797-3382822" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/snizeni-energeticke-narocnosti-viceuceloveho-objektu" data-object-id="3382822">
	Sn&#237;žen&#237; energetick&#233; n&#225;ročnosti v&#237;ce&#250;čelov&#233;ho objektu
</a>
</li><li id="n-22797-3382816" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mvn-vsedobrovicky-rybnik" data-object-id="3382816">
	MVN Všedobrovick&#253; rybn&#237;k
</a>
</li></ul></li><li id="n-22797-3282887" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/projekty-stredoceskeho-kraje" data-object-id="3282887">
	Projekty Středočesk&#233;ho kraje
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4016379" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/komunikace-ii-107-ringhofferova" data-object-id="4016379">
	Komunikace &quot;II/107 Ringhofferova&quot;
</a>
</li><li id="n-22797-3382865" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/komunikace-ii-603-sulice-zelivec-rekonstrukce-silnice-a-mostu" data-object-id="3382865">
	Komunikace &quot;II/603 Sulice - Želivec, rekonstrukce silnice a mostů&quot;
</a>
</li></ul></li></ul></li><li id="n-22797-3282890" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/uzemni-plany" data-object-id="3282890">
	&#218;zemn&#237; pl&#225;ny
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382526" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="https://kamenice.obce.gepro.cz/#/" data-object-id="3382526">
	Interaktivn&#237; geoport&#225;l
</a>
</li><li id="n-22797-3282891" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/platny-stav" data-object-id="3282891">
	Platn&#253; stav
</a>
</li><li id="n-22797-3282938" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/drivejsi-zmeny" data-object-id="3282938">
	Dř&#237;vějš&#237; změny
</a>
</li><li id="n-22797-3382530" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/novy-uzemni-plan-priprava" data-object-id="3382530">
	Nov&#253; &#250;zemn&#237; pl&#225;n - př&#237;prava
</a>
</li></ul></li><li id="n-22797-3399903" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="https://tenderarena.cz/profil/kamenice" data-object-id="3399903">
	Veřejn&#233; zak&#225;zky
</a>
</li><li id="n-22797-3385457" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/socialni-prace" data-object-id="3385457">
	Soci&#225;ln&#237; pr&#225;ce
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3385536" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/prehled-socialnich-sluzeb-v-okoli" data-object-id="3385536">
	Přehled soci&#225;ln&#237;ch služeb v okol&#237;
</a>
</li></ul></li><li id="n-22797-2547470" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/povinne-zverejnovane-informace" data-object-id="2547470">
	Povinně zveřejňovan&#233; informace
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3400182" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/vyrocni-zpravy" data-object-id="3400182">
	V&#253;ročn&#237; zpr&#225;vy
</a>
</li><li id="n-22797-3384737" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/informace-dle-zakona-106-1999-sb" data-object-id="3384737">
	Informace dle z&#225;kona 106/1999 Sb.
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3400336" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/odpovedi-dle-zakona-106-1999-sb" data-object-id="3400336">
	Odpovědi dle z&#225;kona 106/1999 Sb.
</a>
</li><li id="n-22797-3384739" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zadost-o-zverejneni-informace" data-object-id="3384739">
	Ž&#225;dost o zveřejněn&#237; informace
</a>
</li><li id="n-22797-3385085" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/sazebnik-uhrad-za-poskytnuti-informace" data-object-id="3385085">
	Sazebn&#237;k &#250;hrad za poskytnut&#237; informace
</a>
</li><li id="n-22797-3385090" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zprava-o-vysledku-prezkoumani-hospodareni-obce-1" data-object-id="3385090">
	Zpr&#225;va o v&#253;sledku přezkoum&#225;n&#237; hospodařen&#237; obce
</a>
</li></ul></li><li id="n-22797-3384728" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/gdpr" data-object-id="3384728">
	GDPR
</a>
</li></ul></li><li id="n-22797-3988368" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/seznam-obci-ve-spravnim-obvodu-kamenice" data-object-id="3988368">
	Seznam obc&#237; ve spr&#225;vn&#237;m obvodu Kamenice
</a>
</li><li id="n-22797-3382894" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/volby-do-zastupitelstev-obci" data-object-id="3382894">
	Volby do zastupitelstev obc&#237;
</a>
</li></ul></li><li id="n-22797-3282451" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/dokumenty" data-object-id="3282451">
	Dokumenty
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3382503" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="https://sbirkapp.gov.cz/vydavatel/f6ibnuh" data-object-id="3382503">
	Obecně z&#225;vazn&#233; vyhl&#225;šky
</a>
</li><li id="n-22797-3282452" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/smernice-a-pravidla" data-object-id="3282452">
	Směrnice a pravidla
</a>
</li><li id="n-22797-3382498" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zakony" data-object-id="3382498">
	Z&#225;kony
</a>
</li><li id="n-22797-3282695" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/obecni-urad" data-object-id="3282695">
	Obecn&#237; &#250;řad
</a>
</li><li id="n-22797-3282579" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/rozpocet-a-hospodareni-obce" data-object-id="3282579">
	Rozpočet a hospodařen&#237; obce
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4108444" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/rozpocet-1" data-object-id="4108444">
	Rozpočet
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4108462" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/2026-2" data-object-id="4108462">
	2026
</a>
</li><li id="n-22797-4108460" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/2025-2" data-object-id="4108460">
	2025
</a>
</li><li id="n-22797-4108451" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/2024-1" data-object-id="4108451">
	2024
</a>
</li><li id="n-22797-4108445" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/2023-1" data-object-id="4108445">
	2023
</a>
</li></ul></li><li id="n-22797-3382475" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/zaverecny-ucet-obce" data-object-id="3382475">
	Z&#225;věrečn&#253; &#250;čet obce
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-4108678" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zaverecny-ucet-obce-kamenice-za-rok-2025" data-object-id="4108678">
	Z&#225;věrečn&#253; &#250;čet obce Kamenice za rok 2025
</a>
</li><li id="n-22797-3282650" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zaverecny-ucet-obce-kamenice-za-rok-2024" data-object-id="3282650">
	Z&#225;věrečn&#253; &#250;čet obce Kamenice za rok 2024
</a>
</li><li id="n-22797-3282665" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zaverecny-ucet-obce-kamenice-za-rok-2023" data-object-id="3282665">
	Z&#225;věrečn&#253; &#250;čet obce Kamenice za rok 2023
</a>
</li><li id="n-22797-3282678" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zaverecny-ucet-obce-kamenice-za-rok-2022" data-object-id="3282678">
	Z&#225;věrečn&#253; &#250;čet obce Kamenice za rok 2022
</a>
</li></ul></li><li id="n-22797-4108609" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/plneni-rozpoctu" data-object-id="4108609">
	Plněn&#237; rozpočtu
</a>
</li></ul></li><li id="n-22797-3282481" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/strategicke-dokumenty" data-object-id="3282481">
	Strategick&#233; dokumenty
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3282482" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/strategicky-plan" data-object-id="3282482">
	Strategick&#253; pl&#225;n
</a>
</li><li id="n-22797-3282506" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/financni-analyza" data-object-id="3282506">
	Finančn&#237; anal&#253;za
</a>
</li><li id="n-22797-3988387" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/doprava" data-object-id="3988387">
	Doprava
</a>
</li><li id="n-22797-3282516" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kulturni-pamatky" data-object-id="3282516">
	Kulturn&#237; pam&#225;tky
</a>
</li><li id="n-22797-3282503" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mistni-energeticka-koncepce" data-object-id="3282503">
	M&#237;stn&#237; energetick&#225; koncepce
</a>
</li><li id="n-22797-3282802" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku" data-object-id="3282802">
	Měřen&#237; hluku
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3282855" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2024" data-object-id="3282855">
	Měřen&#237; hluku - 2024
</a>
</li><li id="n-22797-3282852" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2023" data-object-id="3282852">
	Měřen&#237; hluku - 2023
</a>
</li><li id="n-22797-3282847" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2022" data-object-id="3282847">
	Měřen&#237; hluku - 2022
</a>
</li><li id="n-22797-3282834" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2021" data-object-id="3282834">
	Měřen&#237; hluku - 2021
</a>
</li><li id="n-22797-3282829" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2020" data-object-id="3282829">
	Měřen&#237; hluku - 2020
</a>
</li><li id="n-22797-3282818" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2019" data-object-id="3282818">
	Měřen&#237; hluku - 2019
</a>
</li><li id="n-22797-3282817" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2018" data-object-id="3282817">
	Měřen&#237; hluku - 2018
</a>
</li><li id="n-22797-3282814" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2017" data-object-id="3282814">
	Měřen&#237; hluku - 2017
</a>
</li><li id="n-22797-3282811" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2016" data-object-id="3282811">
	Měřen&#237; hluku - 2016
</a>
</li><li id="n-22797-3282807" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2015" data-object-id="3282807">
	Měřen&#237; hluku - 2015
</a>
</li><li id="n-22797-3282806" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2014" data-object-id="3282806">
	Měřen&#237; hluku - 2014
</a>
</li><li id="n-22797-3282803" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mereni-hluku-2013" data-object-id="3282803">
	Měřen&#237; hluku - 2013
</a>
</li></ul></li></ul></li><li id="n-22797-3282566" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/verejne-osvetleni" data-object-id="3282566">
	Veřejn&#233; osvětlen&#237;
</a>
</li><li id="n-22797-3282521" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/verejnopravni-smlouvy-nad-50-000-kc" data-object-id="3282521">
	Veřejnopr&#225;vn&#237; smlouvy nad 50 000 Kč
</a>
</li><li id="n-22797-3282513" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/vyberove-rizeni-na-pracovni-pozici" data-object-id="3282513">
	V&#253;běrov&#233; ř&#237;zen&#237; na pracovn&#237; pozici
</a>
</li><li id="n-22797-3282785" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/dotace-pro-sport-a-kulturu" data-object-id="3282785">
	Dotace pro sport a kulturu
</a>
</li></ul></li><li id="n-22797-3382457" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/volny-cas" data-object-id="3382457">
	Voln&#253; čas
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-2697820" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/kalendar-udalosti" data-object-id="2697820">
	Kalend&#225;ř ud&#225;lost&#237;
</a>
</li><li id="n-22797-3397392" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="https://kckamenice.cz/" data-object-id="3397392">
	Kulturn&#237; centrum a knihovna
</a>
</li><li id="n-22797-3397395" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/organizace-a-spolky" data-object-id="3397395">
	Organizace a spolky
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3398692" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/sbor-dobrovolnych-hasicu-teptin" data-object-id="3398692">
	Sbor dobrovoln&#253;ch hasičů Těpt&#237;n
</a>
</li><li id="n-22797-3398690" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/ochotnicky-spolek-tyl" data-object-id="3398690">
	Ochotnick&#253; spolek Tyl
</a>
</li><li id="n-22797-3398680" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/svaz-vcelaru-struharov" data-object-id="3398680">
	Svaz včelařů Struhařov
</a>
</li><li id="n-22797-3397466" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/skautske-stredisko-kamenice" data-object-id="3397466">
	Skautsk&#233; středisko Kamenice
</a>
</li><li id="n-22797-3397464" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fotbalovy-oddil" data-object-id="3397464">
	Fotbalov&#253; odd&#237;l
</a>
</li><li id="n-22797-3397453" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/sportovni-klub-kamenice" data-object-id="3397453">
	Sportovn&#237; klub Kamenice
</a>
</li><li id="n-22797-3397451" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/mazoretky-kamenice" data-object-id="3397451">
	Mažoretky Kamenice
</a>
</li><li id="n-22797-3397410" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/lesni-ms-a-zs-devetsil" data-object-id="3397410">
	Lesn&#237; MŠ a ZŠ Devětsil
</a>
</li><li id="n-22797-3397409" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/judo-klub-kyklop" data-object-id="3397409">
	Judo klub Kyklop
</a>
</li><li id="n-22797-3397408" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/orientacni-klub-kamenice" data-object-id="3397408">
	Orientačn&#237; klub Kamenice
</a>
</li><li id="n-22797-3397397" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/gymnasticky-oddil-kamenice" data-object-id="3397397">
	Gymnastick&#253; odd&#237;l Kamenice
</a>
</li></ul></li><li id="n-22797-3398752" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/turistika" data-object-id="3398752">
	Turistika
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3399252" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/zajimavosti-v-obci" data-object-id="3399252">
	Zaj&#237;mavosti v obci
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3399491" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zamek-kamenice" data-object-id="3399491">
	Z&#225;mek Kamenice
</a>
</li><li id="n-22797-3399488" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zamek-stirin" data-object-id="3399488">
	Z&#225;mek Štiř&#237;n
</a>
</li><li id="n-22797-3399484" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/ringhofferova-hrobka" data-object-id="3399484">
	Ringhofferova hrobka
</a>
</li><li id="n-22797-3399266" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rozhledna-ladvi" data-object-id="3399266">
	Rozhledna L&#225;dv&#237;
</a>
</li><li id="n-22797-3399254" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/stirinske-studanky" data-object-id="3399254">
	Štiř&#237;nsk&#233; stud&#225;nky
</a>
</li></ul></li><li id="n-22797-3399207" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/zajimavosti-v-okoli" data-object-id="3399207">
	Zaj&#237;mavosti v okol&#237;
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3399221" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/pamatnik-na-mandave" data-object-id="3399221">
	Pam&#225;tn&#237;k na Mandavě
</a>
</li><li id="n-22797-3399211" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zidovsky-hrbitov" data-object-id="3399211">
	Židovsk&#253; hřbitov
</a>
</li></ul></li><li id="n-22797-3399158" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/cyklostezky" data-object-id="3399158">
	Cyklostezky
</a>
</li><li id="n-22797-3398759" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/gastronomie-ubytovani" data-object-id="3398759">
	Gastronomie, ubytov&#225;n&#237;
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3398806" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/v-okoli" data-object-id="3398806">
	V okol&#237;
</a>
</li></ul></li></ul></li><li id="n-22797-3403928" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/sport-v-kamenici" data-object-id="3403928">
	Sport v Kamenici
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3416614" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/tenisovy-kurt" data-object-id="3416614">
	Tenisov&#253; kurt
</a>
</li><li id="n-22797-3416781" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/viceucelove-hriste-a-atleticka-draha" data-object-id="3416781">
	V&#237;ce&#250;čelov&#233; hřiště a atletick&#225; dr&#225;ha
</a>
</li><li id="n-22797-3404087" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rezervace" data-object-id="3404087">
	Rezervace
</a>
</li><li id="n-22797-3398695" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/ostatni-sportovni-subjekty" data-object-id="3398695">
	Ostatn&#237; sportovn&#237; subjekty
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3398738" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/valnovka-wellness" data-object-id="3398738">
	Valnovka Wellness
</a>
</li><li id="n-22797-3398733" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/sauna-v-golf-klubu" data-object-id="3398733">
	Sauna v Golf Klubu
</a>
</li><li id="n-22797-3398730" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/indhee" data-object-id="3398730">
	Indhee
</a>
</li><li id="n-22797-3398713" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/fit-centrum-v-golf-klubu" data-object-id="3398713">
	Fit centrum v Golf Klubu
</a>
</li><li id="n-22797-3398710" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/tenis-kamenice" data-object-id="3398710">
	Tenis Kamenice
</a>
</li><li id="n-22797-3398706" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/golf-klub-kostelec-u-krizku" data-object-id="3398706">
	Golf Klub - Kostelec u Kř&#237;žků
</a>
</li><li id="n-22797-3398704" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/opido-kamenice-teptin" data-object-id="3398704">
	Opido Kamenice - Těpt&#237;n
</a>
</li><li id="n-22797-3398699" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/plan-rozvoje-sportu-v-obci-kamenice-na-rok-2017-2025" data-object-id="3398699">
	Pl&#225;n rozvoje sportu v obci Kamenice na rok 2017 - 2025
</a>
</li></ul></li></ul></li></ul></li><li id="n-22797-3283414" class="nav__item -has-children"><a class="big-menu-nav__link element-type-heading" href="/kontakty" data-object-id="3283414">
	Kontakt
</a>
<ul class="nav -js-nav -sub-nav"><li id="n-22797-3283417" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/obecni-urad-kamenice" data-object-id="3283417">
	Obecn&#237; &#250;řad Kamenice
</a>
</li><li id="n-22797-3945666" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/telefonni-seznam" data-object-id="3945666">
	Telefonn&#237; seznam
</a>
</li><li id="n-22797-3283437" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/zastupitelstvo" data-object-id="3283437">
	Zastupitelstvo
</a>
</li><li id="n-22797-3383041" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/rada" data-object-id="3383041">
	Rada
</a>
</li><li id="n-22797-3740269" class="nav__item"><a class="big-menu-nav__link element-type-heading" href="/odbory" data-object-id="3740269">
	Odbory
</a>
</li></ul></li></ul></div>




                    </div>

</div>




                    </section>
                </div>
                <div class="big-menu__aside">
                    <section class="big-menu__section">

                        

<div class="dev-element-block">
    
    
    

    
                
                    <div class="contact">
                    
<h2 class="element-type-heading">Kontakt</h2>                        

                        


<div class="text-component" data-swipeview="etootId-22795">

<p class="contact__line -location"><b>Obec Kamenice</b><br>Ringhofferovo náměstí 434
Olešovice 251 68 Kamenice</p><p>
                    </p><p class="contact__line -phone"><b>Telefon podatelna:</b><br><a href="tel:+420606056796">+420 606 056 796</a><br><a href="tel:+420702086866">+420 702 086 866</a></p><p>
                    </p><p class="contact__line -email"><strong>E-mail:</strong><br><a href="mailto:podatelna@kamenice.cz">podatelna@kamenice.cz</a><strong></strong></p><p>

 </p><p class="contact__line -ico"><strong>IČ:&nbsp;</strong>00240273<br><b>DIČ:&nbsp;</b>CZ00240273<strong></strong></p><p>

</p><p class="contact__line -data"><strong>Datová schránka:</strong><br>f6ibnuh<strong></strong></p><p>

</p><p class="contact__line -money"><strong>Číslo účtu:</strong><br>0420575329/0800<strong></strong></p>
</div>

                    </div>

</div>




                        <p class="more"><a href="/kontakty" class="more__button">Podrobný kontakt</a></p>
                        <div class="additional__social">
                            <h2 class="element-type-heading _fsr">Užitečné odkazy</h2>
                            <ul class="list">
                                <!-- <li class="list__item">
                                    <a class="list__link" href="https://www.facebook.com/kamenice" rel="noopener noreferrer">
                                        <img src="/images/local/icons/v-202607161040/facebook.svg" alt="Facebook" data-vismo-inline-svg="not-loaded">
                                    </a>
                                </li> -->
                                <li class="list__item">
                                    <a class="list__link" href="https://www.youtube.com/channel/UCAPBiOBk-8J8F_Fh_r6GIyg" rel="noopener noreferrer">
                                        <img src="/images/local/icons/v-202607161040/youtube.svg" alt="Youtube" data-vismo-inline-svg="not-loaded">
                                    </a>
                                </li>
                                <!-- <li class="list__item">
                                    <a class="list__link" href="https://www.instagram.com/" rel="noopener noreferrer">
                                        <img src="/images/local/icons/v-202607161040/instagram.svg" alt="Instagram" data-vismo-inline-svg="not-loaded">
                                    </a>
                                </li> -->
                                <li class="list__item">
                                    <a class="list__link" href="https://kamenice.obce.gepro.cz/" rel="noopener noreferrer">
                                        <img src="/images/local/icons/v-202607161040/gps.svg" alt="Gps" data-vismo-inline-svg="not-loaded">
                                    </a>
                                </li>
                                <!-- <li class="list__item">
                                    <a class="list__link" href="https://x.com/" rel="noopener noreferrer">
                                        <svg width="24" height="24"><use xlink:href="/images/local/icons/v-202607161040/icons.svg#icon-x"></use></svg>
                                    </a>
                                </li> -->
                                <!-- <li class="list__item">
                                    <a class="list__link" href="/doplnit" rel="noopener noreferrer">
                                        <svg width="24" height="24"><use xlink:href="/images/local/icons/v-202607161040/icons.svg#icon-rss"></use></svg>
                                    </a>
                                </li>-->
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </dialog>



<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha512-3P8rXCuGJdNZOnUx/03c1jOTnMn3rP63nBip5gOP2qmUh5YAdVAvFZ1E+QLZZbC1rtMrQb+mah3AfYW11RUrWA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/js/local/v-202607161040/jquery.event.move.js" type="text/javascript"></script>
<script src="/js/local/v-202607161040/jquery.twentytwenty.js" type="text/javascript"></script>
<script>
    $(window).on("load", function(){
        $(".custom-comparison").twentytwenty({
            default_offset_pct: 0.5, // How much of the before image is visible when the page loads
            //orientation: 'horizontal',
            before_label: 'Předtím',
            after_label: 'Dnes',
            //no_overlay: true,
            //move_slider_on_hover: true,
            //move_with_handle_only: true,
            //click_to_move: false
        });
    });
</script>

<script src="/js/local/v-202607161040/volgte2.js"></script>
<script>
    var gte = new VOLGTE("google-translate-element", {
        language: "cs"
		/*, languages: "en,de"*/
    });
    var googleTranslateElementInit = gte.init(() => {
        gte.insertTranslateLinks(["de","en"], document.querySelector("#gte-languages"))
    });
</script>
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>







    <footer class="page-footer">
        
        <h2 class="element-type-heading _fsr">Informace v patě</h2>
        
        <div class="centered">

            <ul class="page-footer__list">
                
                <li class="page-footer__item">
                    
                        <a href="/Account/Login?returnUrl=%2Farchiv-vydani-zpravodaje" title='P&#x159;ihl&#xE1;sit' class="page-footer__link login-link">P&#x159;ihl&#xE1;sit</a>
                </li>

                <li class="page-footer__item">
                    <a href="/o-webu" title='O webu' class="page-footer__link">O webu</a>
                </li>
                <li class="page-footer__item">
                    <a href="/o-webu#accessibility" title='Prohl&#xE1;&#x161;en&#xED; o p&#x159;&#xED;stupnosti' class="page-footer__link">Prohl&#xE1;&#x161;en&#xED; o p&#x159;&#xED;stupnosti</a>
                </li>
                <li class="page-footer__item">
                    <a href="/o-webu#cookies" title='Prohl&#xE1;&#x161;en&#xED; o pou&#x17E;it&#xED; cookies' class="page-footer__link">Prohl&#xE1;&#x161;en&#xED; o pou&#x17E;it&#xED; cookies</a>
                </li>
                <li class="page-footer__item">
                    <a href="/mapa-stranek" title='Mapa str&#xE1;nek' class="page-footer__link">Mapa str&#xE1;nek</a>
                </li>
                
                


                
                

            </ul>

            <p class="page-footer__webmaster">
	<span class="partWebmaster">web &amp; design <a href="http://webhouse.cz" title="WEBHOUSE, s. r. o." class="patalogo">WEBHOUSE<span>®</span></a></span><span class="_fsr">, </span><span class="partWebmaster1">redakční systém <a class="patalogo" href="http://vismo.cz" title="Redakční systém Vismo"><span class="vis">vis</span>mo<span>®</span></a></span>
</p>

        </div>
    </footer>

    <div id="universal-popup" class="universal-popup-component">
        <form id="UniversalPopupForm" method="post" class="universal-popup-component__form">
            <div class="universal-popup-component__body">
                <div class="universal-popup-component__content"></div>
                <div class="universal-popup-component__row -center">
                    <button class="universal-popup-component__button -close">Zav&#x159;&#xED;t</button>
                </div>
                <a href="#" class="universal-popup-component__close">x</a>
            </div>
        <input name="__RequestVerificationToken" type="hidden" value="CfDJ8GkTB9EA85hDlMDRpQhiDRzFolc2go1B3YGJABxH5jciPCmJ3eDHVyebHnDIlfLUPizE_xwJnxRa3mCDc0-9AtAGIk94mZAogPNSpeEjPfG4cRKmyezgVOCyJOnE3cs8HWCjKlUyuCvN8mVPGxu-Udg" /></form>
    </div>

    <script src="/js/global/v-2026060200001/lazyload.js"></script>
    <script src="/js/global/v-2026060200001/swipeview.js"></script>
    <script src="/js/local/v-202607161040/web.js"></script>

        <script src="https://www.google.com/recaptcha/api.js?render=6Ld4YbUUAAAAAAfAjkZNe1bRBQKPrYiB8l1HhfC8"></script>

    <script src="/js/global/v-2026060200001/we.js"></script>

    
    

        <script src="/js/global/wedar/v-2026060200001/vue.min.js"></script>

</body>
</html>
`;

  test('Parse HTML page', () => {
    const result = parseDataFromKameniceZpravodaj(urlRow, htmlPage);
    const expectation: Feed = {
      channel: {
        title: 'Kamenice - Zpravodaj',
        description: 'kamenice-zpravodaj',
        link: 'https://www.kamenice.cz/archiv-vydani-zpravodaje',
      },
      items: [
        {
          datetime: 'Fri Jul 03 2026 07:00:00 GMT+0200',
          guid: 'ebd8ebcde604f1d7bcb91d39db993fe2',
          image: 'https://www.kamenice.cz/image/4164365/300/300/',
          link: 'https://www.kamenice.cz/zpravodaj-srpen-2026',
          title: 'Zpravodaj Srpen 2026',
        },
        {
          datetime: 'Fri Jun 26 2026 07:00:00 GMT+0200',
          guid: '9772cd83aacb2cecb54134a244a1ced4',
          image: 'https://www.kamenice.cz/image/4003595/300/300/',
          link: 'https://www.kamenice.cz/zpravodaj-cervenec-2026',
          title: 'Zpravodaj červenec 2026',
        },
        {
          datetime: 'Fri Jun 26 2026 07:00:00 GMT+0200',
          guid: '0ff462899c8657a9336cca4c0c705c3b',
          image: 'https://www.kamenice.cz/image/4003594/300/300/',
          link: 'https://www.kamenice.cz/zpravodaj-cerven-2026',
          title: 'Zpravodaj červen 2026',
        },
        {
          datetime: 'Fri Jun 26 2026 07:00:00 GMT+0200',
          guid: '938f433d73e75265e85b83345f1ebd56',
          image: 'https://www.kamenice.cz/image/4003562/300/300/',
          link: 'https://www.kamenice.cz/zpravodaj-kveten-2026',
          title: 'Zpravodaj květen 2026',
        },
        {
          datetime: 'Tue Apr 07 2026 07:00:00 GMT+0200',
          guid: '872e2787e2125b7d8e0b23388aa27cb2',
          image: 'https://www.kamenice.cz/image/3420852/300/300/',
          link: 'https://www.kamenice.cz/zpravodaj-duben-2026',
          title: 'Zpravodaj duben 2026',
        },
        {
          datetime: 'Sun Mar 01 2026 06:00:00 GMT+0100',
          guid: '52b6f17d3ac00d8608c095cc0e0eb781',
          image: 'https://www.kamenice.cz/image/3402168/300/300/',
          link: 'https://www.kamenice.cz/zpravodaj-brezen-2026',
          title: 'Zpravodaj březen 2026',
        },
        {
          datetime: 'Sun Feb 01 2026 06:00:00 GMT+0100',
          guid: '88f6c8c0ccd693eef11b145e67660c27',
          image: 'https://www.kamenice.cz/image/3402177/300/300/',
          link: 'https://www.kamenice.cz/zpravodaj-unor-2026',
          title: 'Zpravodaj únor 2026',
        },
        {
          datetime: 'Mon Jan 05 2026 06:00:00 GMT+0100',
          guid: 'd5c0d4018ca9f194253ac71088024f65',
          image: '',
          link: 'https://www.kamenice.cz/zpravodaj-leden-2026',
          title: 'Zpravodaj leden 2026',
        },
        {
          datetime: 'Tue Dec 02 2025 06:00:00 GMT+0100',
          guid: 'cecb07a3bfe6bdf847e751759419bca7',
          image: '',
          link: 'https://www.kamenice.cz/zpravodaj-prosinec-2025',
          title: 'Zpravodaj prosinec 2025',
        },
        {
          datetime: 'Sat Nov 01 2025 06:00:00 GMT+0100',
          guid: 'ef5fbd0070a2e610313d95e82d457868',
          image: '',
          link: 'https://www.kamenice.cz/zpravodaj-listopad-2025',
          title: 'Zpravodaj listopad 2025',
        },
      ],
    };

    expect(result).toStrictEqual(expectation);
  });
});
