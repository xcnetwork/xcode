// auto slider carousel custom
function tinyCarouselGallery(json) {
document.write('<div id="tinycarousel"><div id="tinyarrow"><a href="#"><img class="buttons prev" src="' + prevNav + '"/></a><a href="#"><img class="buttons next" src="' + nextNav + '"/></a><span>' + showText + '</span></div><div class="viewport"><ul class="overview">');

        for (var i = 0; i < numposts_g; i++) {
                var entry = json.feed.entry[i],
                        title = entry.title.$t,
                        date = entry.published.$t,
                        link, summ, cm, img;
                if (i == entry.length) break;
                for (var j = 0, jen = entry.link.length; j < jen; j++) {
                        if (entry.link[j].rel == 'alternate') {
                                link = entry.link[j].href;
                                break;
                        }
                }
                for (var k = 0, ken = entry.link.length; k < ken; k++) {
                        if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                                cm = entry.link[k].title.split(' ')[0];
                                break;
                        }
                }                              
                summ = ("summary" in entry) ? entry.summary.$t.replace(/<(.*)?>/g, "") : "";
                summ = (summ.length > numchars_g) ? summ.substring(0, numchars_g) + '&hellip;' : summ;
                img = ('media$thumbnail' in entry) ? entry.media$thumbnail.url : pBlank;
                img = img.replace(/\/s[0-9]+(\-c)?\//, "/s230-c/");
                var price = document.getElementById('harga');
					
document.write('<li><div class="inner"><a href="' + link + '"' + (slideOpenNewTab ? ' target="_blank"' : '') + '><img id="promo" src="' + prImg + '"/><img src="' + img + '" alt="' + title + '" class="recent-thumb"></a><h3><a href="' + link + '"' + (slideOpenNewTab ? ' target="_blank"' : '') + '>' + title + '</a></h3><p>' + price + '</p></div>' + (showPostDate_g ? '<em>' + date_a + ' ' + months[parseInt(date_b, 10)-1] + ' ' + date_c + '</em>' : '') + (showComm_g ? '<em>' + cm + ' ' + text + '</em>' : '') + '</li>');
        }
document.write('</ul></div></div>');
}

document.write("<scr" + "ipt type='text/javascript' src='/feeds/posts/summary/" + (byLabels ? '-/' + LabelName : '') + "?max-results=" + numposts_g + "&orderby=published&alt=json-in-script&callback=tinyCarouselGallery'><\/scr" + "ipt>");