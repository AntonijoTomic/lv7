<?php
header('Content-type: text/json');
header('Content-type: application/json; charset-utf-8');

header('Access-Control-Allow-Origin: *');
include 'configuration.php';


$sQuery = "SELECT * FROM artikl order by id";
$oRecord = $oConnection ->query($sQuery);
$oArtikli = array();
while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
{
$sId = $oRow['Id'];
 $sNaziv = $oRow['Naziv'];
 $sProizvodac = $oRow['Proizvodac'];
 $sModel = $oRow['Model'];
 $sCijena = $oRow['Cijena'];
 $sKolicina = $oRow['Kolicina'];
 $oArtikl = new Artikl($sId, $sNaziv, $sProizvodac, $sModel, $sCijena,  $sKolicina );
 array_push($oArtikli, $oArtikl);
}
echo json_encode($oArtikli);
?>