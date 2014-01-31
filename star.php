<?php
if (! isset($_GET['star']))
  die();

function htmlclean($str) {
  return preg_replace('/\<.*?\>/', '', $str);
}


$star = $_GET['star'];

$star = strtoupper(str_replace('.sys', '', $star));
$star = preg_replace('/_.*$/', '', $star);

$altnames = json_decode(file_get_contents('altnames.json'), true);
if ($altnames[$star])
  $star = $altnames[$star];

$url = "http://simbad.u-strasbg.fr/simbad/sim-basic?Ident=%s&submit=SIMBAD+search";
sleep(2);
$url = sprintf($url, urlencode($star));
$simbad = file_get_contents($url);


if (preg_match('/(\"[^\"]*get-thumbnail.py[^\"]*)/i', $simbad, $matches)) {
  print '<img src=' . $matches[1] . '" class="img-thumbnail pull-right">';
}

if (preg_match('/<FONT SIZE=\"\+2\"\>(.*?)\<\/FONT\>/is', $simbad, $matches)) {
  print('<h4>' . $matches[1] . '</h4>');
  print('<p>[' . $star . ']</p><hr>');
}

if (preg_match('/Spectral type:(.*?)\<\/B\>/is', $simbad, $matches)) {
  print('<p><strong>Spectral type:</strong> ' . htmlclean($matches[1]) . '</p>');
}
if (preg_match('/\<TD VALIGN=\"TOP\"\>\s+\<UL\>(.*?)\<\/UL\>/is', $simbad, $matches)) {
  print('<p><strong>Notes:</strong><ul>' . $matches[1] . '</ul></p>');
}
print('<hr><p><a href="'. $url . '">Read more on SIMBAD</a></p>');

?>
