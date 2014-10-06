<?php

$link = mysql_connect('127.0.0.1', 'root', '');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';

if (!mysql_select_db("ayi")) {
    echo "Unable to select mydbname: " . mysql_error();
    exit;
}

function sani($name) {
  return str_replace(['(a)', '(b)', 'inc.', 'ltd.', 'inc', 'ltd'], '', strtolower($name));
}

function bestMatch($name, $flat) {
  $best = 0;
  $bestName = 0;
  foreach ($flat as $key => $value) {
    similar_text($name, $key, $percent);
    if ($percent > $best) {
      $best = $percent;
      $bestName = $key;
    }
  }
  return [$bestName, $best];
}

$s = file_get_contents('tickers.json');
$json = json_decode($s);
// var_dump($json);
$results = $json->query->results->industry;
$flat = [];
print '<pre>';
foreach ($results as $key => $industry) {
  // var_dump($industry->company);
  $zz = $industry->company;
  if ($zz == null) {
    continue;
  }

  foreach ($zz as $key2 => $company) {
    $cn = sani($company->name);
    if (!isset($flat[$cn])) {
      $flat[$cn] = [];
    }
    array_push($flat[$cn], $company->symbol);
  }
}

$result = mysql_query('SELECT * FROM up WHERE company!=\'\'');

$total = 0;
$found = 0;
while ($row = mysql_fetch_assoc($result)) {
  $total++;
  if (isset($flat[sani($row["company"])])) {
    $found++;
    continue;
  }
  $best = bestMatch(sani($row["company"]), $flat);
  print $row["company"] . ' = ' . $best[0] . ' ' . $best[1] . "%\n";
  if ($total > 100) die();
}
print "Total: " . $total . " found: " . $found;

mysql_close($link);
?>