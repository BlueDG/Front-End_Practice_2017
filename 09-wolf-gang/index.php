<?php

// 1) ouvrir le fichier en mode lecture

$file = fopen('motos.csv', 'r');


// 2) créer un tableau vide ($motos)

$motos = [];


// 3) tant que fgetcsv nous envoie des données on ajoute au tableau ($motos)

while(($moto = fgetcsv($file)) != false){
    $motos[] = $moto;
    
}

fclose($file);













include('index.phtml');