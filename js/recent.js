// auto slider carousel custom

function RecentByLabel(json) {
document.write('<div id="rc_label"><div class="viewport"><ul>');
        for (var i = 0; i < numposts; i++) {
                var entry = json.feed.entry[i],
                        title = entry.title.$t,
                        date = entry.published.$t,
                        link, summ, months, cm, img;
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
                summ = (summ.length > numchars) ? summ.substring(0, numchars) + '&hellip;' : summ;
                img = ('media$thumbnail' in entry) ? entry.media$thumbnail.url : 'http://xcinc.googlecode.com/svn/img/noimage.png';
                img = img.replace(/\/s[0-9]+(\-c)?\//, "/s"+img_sz+"-c/");
                                        
document.write('<li><a href="' + link + '"><img src="' + img + '" title="' + title + '" class="recent-thumb"></a><h3><a href="' + link + '">' + title + '</a></h3><p>' + summ + '</p></li>');
        }
document.write('</ul></div></div>');
}

document.write("<scr" + "ipt type='text/javascript' src='/feeds/posts/summary/" + (byLabels ? '-/' + LabelName : '') + "?max-results=" + numposts + "&orderby=published&alt=json-in-script&callback=RecentByLabel'><\/scr" + "ipt>");


