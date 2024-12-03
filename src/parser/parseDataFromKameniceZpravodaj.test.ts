import { parseDataFromKameniceZpravodaj } from './parseDataFromKameniceZpravodaj';

describe('Should parse data from Kamenice Zpravodaj page', () => {
  const urlRow: UrlRow = {
    title: 'Kamenice - Zpravodaj',
    slug: 'kamenice-zpravodaj',
    url: 'https://www.obeckamenice.cz/zpravodaj-kamenice/archiv/',
  };
  const htmlPage = `
<!DOCTYPE html>
<html lang="cs">
<head>
	<meta charset="utf-8" />
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<meta name="author" content="(c) 2024 VIZUS.CZ s.r.o. | 2.0, 26. 6. 2015 9:31:22" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />

	<link type="text/css" rel="stylesheet" href="/res/cache/web-a5bb3951121ba62ee190a577a490002f.css?version=1733187340">
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" media="screen" />
	<link rel="stylesheet" href="/res/css/print.css" media="print" />

	<script src="/res/cache/web-93f0d939e7262a9b150873057744d76f.js?version=1733187340"></script>

	<title>Archiv - Obec Kamenice</title>
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79651037-1', 'auto');
  ga('send', 'pageview');

</script></head>
	<body class="green">
	<section>
		
	<div class="all" id="top">
		<header>
			<div class="header-page">
				<div class="header-top">
								<nav>
	<ul>

				
			<li>
				<a href="http://www.obeckamenice.cz/" title="Hlavní stránka"
														>Hlavní stránka</a>
									<span>|</span>
							</li>
				
			<li>
				<a href="http://www.obeckamenice.cz/uredni-deska-vypis/" title="Úřední deska"
														>Úřední deska</a>
									<span>|</span>
							</li>
				
			<li>
				<a href="https://kamenice.obce.gepro.cz/#/" title="Územní plán"
										target="_blank"				>Územní plán</a>
									<span>|</span>
							</li>
				
			<li>
				<a href="/zpravodaj-kamenice/" title="Zpravodaj"
														>Zpravodaj</a>
									<span>|</span>
							</li>
				
			<li>
				<a href="https://www.tenderarena.cz/profily/kamenice" title="Veřejné zakázky"
														>Veřejné zakázky</a>
									<span>|</span>
							</li>
				
			<li>
				<a href="http://stredocesky.dppcr.cz/web_538299/" title="Povodňový plán"
														>Povodňový plán</a>
									<span>|</span>
							</li>
				
			<li class="last">
				<a href="/urad/kontaktni-udaje/" title="Kontakty"
														>Kontakty</a>
							</li>
		
	</ul>
	</nav>
						<div class="languages">
	</div>
				</div>
				<div class="header-page-top">
					<a href="/" title="Úvodní stránka"><img src="/res/images/logo-page.png" width="65" height="76" alt="Obec Kamenice" class="logo-page" /></a>
					<div class="logo-area">
						<span class="first">Obec Kamenice</span>
						<span class="second">Naše obec v srdci Ladova kraje</span>
					</div>
					<form action="/vyhledavani/" method="get" class="search">
						<input type="text" value="Hledaný výraz" name="query" id="search-query" />
						<input type="image" src="/res/images/search.png" width="24" height="24" alt="OK" title="Vyhledat" />
					</form>
				</div>
				<div class="top-lines">
																					<a href="/Kalendar-akci-v-Kamenici/" title="Život v obci" class="top-line1-out">
												<span class="top-line1">Život v obci</span>
											</a>
																<a href="/urad/" title="Obecní úřad" class="top-line2"><span>Obecní úřad</span></a>
									</div>
			</div>
		</header>
		<div class="main-cols">
			<div class="left-col">
				<div class="content-col">
											<h1>Archiv</h1>
										


<div class="events-list">

	
	
		<div class="item">
			<h2><a href="/res/archive/127/017014.pdf?seek=1732565616" title="Zpravodaj prosinec 2024 - stáhnout">Zpravodaj prosinec 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>7,7 MB | PDF</strong><br />
			<a href="/res/archive/127/017014.pdf?seek=1732565616" title="Zpravodaj prosinec 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/126/016946.pdf?seek=1730118865" title="Zpravodaj listopad 2024 - stáhnout">Zpravodaj listopad 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>8,2 MB | PDF</strong><br />
			<a href="/res/archive/126/016946.pdf?seek=1730118865" title="Zpravodaj listopad 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/126/016918.pdf?seek=1727970538" title="Zpravodaj říjen 2024 - stáhnout">Zpravodaj říjen 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>12,2 MB | PDF</strong><br />
			<a href="/res/archive/126/016918.pdf?seek=1727970538" title="Zpravodaj říjen 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/125/016800.pdf?seek=1724771506" title="Zpravodaj září 2024 - stáhnout">Zpravodaj září 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>12,9 MB | PDF</strong><br />
			<a href="/res/archive/125/016800.pdf?seek=1724771506" title="Zpravodaj září 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/125/016788.pdf?seek=1722768527" title="Zpravodaj srpen 2024 - stáhnout">Zpravodaj srpen 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>6,6 MB | PDF</strong><br />
			<a href="/res/archive/125/016788.pdf?seek=1722768527" title="Zpravodaj srpen 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/124/016715.pdf?seek=1719604347" title="Zpravodaj červenec 2024 - stáhnout">Zpravodaj červenec 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>12,1 MB | PDF</strong><br />
			<a href="/res/archive/124/016715.pdf?seek=1719604347" title="Zpravodaj červenec 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/124/016682.pdf?seek=1717183471" title="Zpravodaj červen 2024 - stáhnout">Zpravodaj červen 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>8,5 MB | PDF</strong><br />
			<a href="/res/archive/124/016682.pdf?seek=1717183471" title="Zpravodaj červen 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/121/016644.pdf?seek=1715238887" title="Zpravodaj květen 2024 - stáhnout">Zpravodaj květen 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>10,9 MB | PDF</strong><br />
			<a href="/res/archive/121/016644.pdf?seek=1715238887" title="Zpravodaj květen 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/123/016521.pdf?seek=1712559163" title="Zpravodaj duben 2024 - stáhnout">Zpravodaj duben 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>8,1 MB | PDF</strong><br />
			<a href="/res/archive/123/016521.pdf?seek=1712559163" title="Zpravodaj duben 2024 - stáhnout">stáhnout</a></p>
		</div>

	
	
		<div class="item">
			<h2><a href="/res/archive/122/016487.pdf?seek=1709551051" title="Zpravodaj březen 2024 - stáhnout">Zpravodaj březen 2024</a></h2>
			<p></p>			<p class="download"><img src="/res/images/pdf.png" width="18" height="22" alt="PDF" class="icon" />
			<strong>6,9 MB | PDF</strong><br />
			<a href="/res/archive/122/016487.pdf?seek=1709551051" title="Zpravodaj březen 2024 - stáhnout">stáhnout</a></p>
		</div>

	
</div>

				</div>
				<div class="menu-col">
												
						
					<nav>
			<ul class="left-menu">
		
							<li>
					<a href="/Kalendar-akci-v-Kamenici/" title="Kalendář akcí v Kamenici">Kalendář akcí</a>
									</li>
							<li>
					<a href="/o-kamenici/" title=" O Kamenice"> O Kamenici</a>
									</li>
							<li>
					<a href="/sluzby-v-obci/" title="Služby v obci">Služby v obci</a>
									</li>
							<li>
					<a href="/volny-cas/" title="Volný čas">Volný čas</a>
									</li>
							<li>
					<a href="/turistika/" title="Turistika">Turistika</a>
									</li>
							<li class="active">
					<a href="/zpravodaj-kamenice/" title="Zpravodaj">Zpravodaj</a>
						
						
					<ul>
		
							<li>
					<a href="/zpravodaj-kamenice/zpravodaji/" title="O Zpravodaji">O Zpravodaji</a>
									</li>
							<li>
					<a href="/zpravodaj-kamenice/pro-inzerenty/" title="Pro inzerenty">Pro inzerenty</a>
									</li>
							<li>
					<a href="/zpravodaj-kamenice/pro-prispevatele/" title="Pro přispěvatele">Pro přispěvatele</a>
									</li>
							<li>
					<a href="/zpravodaj-kamenice/cele-prispevky/" title="Celé příspěvky">Celé příspěvky</a>
									</li>
							<li>
					<a href="/zpravodaj-kamenice/kontakt/" title="kontakt">Kontakt</a>
									</li>
							<li class="active">
					<a href="/zpravodaj-kamenice/archiv/" title="Archiv">Archiv</a>
										</li>
							<li>
					<a href="/zpravodaj-kamenice/pro-nasi-kamenici/" title="Pro naši Kamenici">Pro naši Kamenici</a>
									</li>
			
					</ul>
							</li>
							<li>
					<a href="/galerie/" title="Galerie">Fotogalerie a video</a>
									</li>
			
					</ul>
			</nav>
												</div>

									<div class="ppager">
						

<div class="pager">

	
	
	<a href="/zpravodaj-kamenice/archiv/?page=1" title="Stránka 1" class="num active">1</a><a href="/zpravodaj-kamenice/archiv/?page=2" title="Stránka 2" class="num">2</a><a href="/zpravodaj-kamenice/archiv/?page=3" title="Stránka 3" class="num">3</a><a href="/zpravodaj-kamenice/archiv/?page=4" title="Stránka 4" class="num">4</a><a href="/zpravodaj-kamenice/archiv/?page=5" title="Stránka 5" class="num">5</a>
	<span class="num nenum">&hellip;</span>
	<a href="/zpravodaj-kamenice/archiv/?page=12" class="num">12</a>
</div>

					</div>
							</div>
										<div class="right-col">
					<div class="box">
	<h2>
					<a href="https://www.obeckamenice.cz/res/archive/127/017014.pdf?seek=1732565616" title="Zpravodaj ke stažení" target="_blank">
				Zpravodaj ke stažení			</a>
			</h2>

				<p><h3><a href="https://www.obeckamenice.cz/res/archive/127/017014.pdf?seek=1732565616" class="cms-editor-link" target="_blank" title="Zpravodaj ke stažení" rel="noopener"><img class="cms-editor-image cms-image-type-67" title="Zpravodaj z Kamenice" src="/res/archive/093/013736_67_092685.jpg?seek=1592856261" alt="Zpravodaj z Kamenice" width="264" height="124" data-vizus-cms-component="editor.image" data-vizus-cms-file-id="13736" data-vizus-cms-image-view-id="92685" data-vizus-cms-image-click-id="0"></a></h3></p>		
		
</div>
<div class="slider-pages">
	<div class="slider-pages-in" id="slider-pages"><div class="item"><div class="txt"><div class="txt-content"><h2><a href="https://www.obeckamenice.cz/res/archive/127/017014.pdf?seek=1732565616" title="Prosincový Zpravodaj již nyní ke stažení.">Prosincový Zpravodaj již nyní ke stažení.</a></h2></div><a href="https://www.obeckamenice.cz/res/archive/127/017014.pdf?seek=1732565616" title="Prosincový Zpravodaj již nyní ke stažení. - více" class="more"><span>více</span></a></div><a href="https://www.obeckamenice.cz/res/archive/127/017014.pdf?seek=1732565616" title="Prosincový Zpravodaj již nyní ke stažení."><img src="/res/archive/127/017015_65_127591.png?seek=1732565621" class="simage" alt="Prosincový Zpravodaj již nyní ke stažení." /></a></div><div class="item"><div class="txt"><div class="txt-content"><h2><a href="https://www.obeckamenice.cz/res/archive/100/014098.jpg" title="Otevírací doba v období vánočních svátků">Otevírací doba v období vánočních svátků</a></h2></div><a href="https://www.obeckamenice.cz/res/archive/100/014098.jpg" title="Otevírací doba v období vánočních svátků - více" class="more"><span>více</span></a></div><a href="https://www.obeckamenice.cz/res/archive/100/014098.jpg" title="Otevírací doba v období vánočních svátků"><img src="/res/archive/100/014096_65_096655.png?seek=1608535615" class="simage" alt="Otevírací doba v období vánočních svátků" /></a></div></div>	<div class="slider-navi"><a href="#" title="Prosincový Zpravodaj již nyní ke stažení." data-rel="0" class="i0 active">1</a><a href="#" title="Otevírací doba v období vánočních svátků" data-rel="1" class="i1">2</a></div>	<img src="/res/images/prev-small.png" class="prev" alt="Předchozí" usemap="#prev-map-pages" /><img src="/res/images/next-small.png" class="next" alt="Další" usemap="#next-map-pages" /><map name="prev-map-pages" id="prev-map-pages"><area shape="poly" coords="17,15,34,32,17,49,0,32,17,15" href="#" title="Předchozí" alt="Předchozí" /></map><map name="next-map-pages" id="next-map-pages"><area shape="poly" coords="17,15,34,32,17,49,0,32,17,15" href="#" title="Další" alt="Další" /></map></div>
				</div>
						<div class="cl"></div>
		</div>
				<footer>
			<div class="footer">
				<div class="footer-top">
					<div class="item">
													<a href="/zpravodaj-kamenice/" title="Zpravodaj"><img src="/res/images/ico/newspaper.png" height="60" alt="Zpravodaj" /></a>
											</div>
					<div class="item">
													<a href="https://www.facebook.com/kamenice" title="Facebook" onclick="window.open(this.href); return false;"><img src="/res/images/ico/facebook.png" height="60" alt="Facebook" /></a>
											</div>
					<div class="item">
													<a href="/fotogalerie/" title="Galerie"><img src="/res/images/ico/photogallery.png" height="60" alt="Galerie" /></a>
											</div>
					<div class="item">
													<a href="https://www.youtube.com/channel/UCAPBiOBk-8J8F_Fh_r6GIyg" title="Youtube" onclick="window.open(this.href); return false;"><img src="/res/images/ico/youtube.png" height="60" alt="Youtube" /></a>
											</div>
					<div class="item last">
													<a href="/o-kamenici/mapageoportal/" title="Kontakty"><img src="/res/images/map.png" width="159" height="108" alt="Kontakty" /></a>
											</div>
				</div>
				<div class="footer-bottom">
					<div class="footer-bottom-first">
						&copy; 2024 <a href="http://www.vizus.cz/" title="VIZUS &ndash; tvorba www stránek" target="_blank">VIZUS</a> | <a href="http://www.vizus.cz/webmaster/" title="webmaster" target="_blank">webmaster</a><br />Používáme <a href="http://www.vizus.cz/produkty/cms/" title="Redakční systém Vizus CMS" target="_blank">redakční systém Vizus CMS</a>					</div>
					<div class="footer-bottom-second">
						<nav>
	
		<a href="/rss-akce/" title="RSS akce"
								>RSS akce</a>

					<span>|</span>
		
	
		<a href="/mapa-stranek/" title="Mapa stránek"
								>Mapa stránek</a>

		
	</nav>
					</div>
											<form action="/newsletter/?action=insert" method="post" class="footer-bottom-third" id="NewsletterFormSmall" onsubmit="return sendNewsletterFormSmall()">
							<input type="hidden" value="0" name="human" />
							<input type="text" value="Pro odběr zpravodaje zadejte Váš e-mail" name="form[email]" id="NewsletterFormSmallEmail" title="Pro odběr zpravodaje zadejte Váš e-mail" />
							<input type="image" src="/res/images/ok-yellow.png" width="50" height="36" alt="ok" title="Přihlásit odběr zpravodaje" />
							<div id="NewsletterFormSmallJs"></div>
						</form>
									</div>
			</div>
			<div class="footer-down"></div>
		</footer>
		<div class="cl"></div>
	</div>
	</section>
</body>
</html>
`;

  test('Parse HTML page', () => {
    const result = parseDataFromKameniceZpravodaj(urlRow, htmlPage);
    const expectation: Feed = {
      channel: {
        title: 'Kamenice - Zpravodaj',
        description: 'kamenice-zpravodaj',
        link: 'https://www.obeckamenice.cz/zpravodaj-kamenice/archiv/',
      },
      items: [
        {
          guid: '2555ed8304a2245cf0b2c9bf26548576',
          link: 'https://www.obeckamenice.cz/res/archive/127/017014.pdf?seek=1732565616',
          title: 'Zpravodaj prosinec 2024',
        },
        {
          guid: 'd606bc62ad1d4f109d024fdfc33f5830',
          link: 'https://www.obeckamenice.cz/res/archive/126/016946.pdf?seek=1730118865',
          title: 'Zpravodaj listopad 2024',
        },
        {
          guid: 'd86e8bb9f51457eb0dc6b851175cccb6',
          link: 'https://www.obeckamenice.cz/res/archive/126/016918.pdf?seek=1727970538',
          title: 'Zpravodaj říjen 2024',
        },
        {
          guid: 'dab434813595484c89034b5e9086503a',
          link: 'https://www.obeckamenice.cz/res/archive/125/016800.pdf?seek=1724771506',
          title: 'Zpravodaj září 2024',
        },
        {
          guid: 'dcc9096918ed831b18f5fcffe41f3bac',
          link: 'https://www.obeckamenice.cz/res/archive/125/016788.pdf?seek=1722768527',
          title: 'Zpravodaj srpen 2024',
        },
        {
          guid: 'e025d41708d72459e517c1c88ddc8454',
          link: 'https://www.obeckamenice.cz/res/archive/124/016715.pdf?seek=1719604347',
          title: 'Zpravodaj červenec 2024',
        },
        {
          guid: 'f068f365258a61a6a9cdfaf781c43afa',
          link: 'https://www.obeckamenice.cz/res/archive/124/016682.pdf?seek=1717183471',
          title: 'Zpravodaj červen 2024',
        },
        {
          guid: '696422948d24857482eb299b6a9ad757',
          link: 'https://www.obeckamenice.cz/res/archive/121/016644.pdf?seek=1715238887',
          title: 'Zpravodaj květen 2024',
        },
        {
          guid: '7096487ea0fd48679cae4c2a7826c10c',
          link: 'https://www.obeckamenice.cz/res/archive/123/016521.pdf?seek=1712559163',
          title: 'Zpravodaj duben 2024',
        },
        {
          guid: 'c0dc85aecbe55e70c1d31eff61fc43b6',
          link: 'https://www.obeckamenice.cz/res/archive/122/016487.pdf?seek=1709551051',
          title: 'Zpravodaj březen 2024',
        },
      ],
    };

    expect(result).toStrictEqual(expectation);
  });
});
