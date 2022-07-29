var map = L.map('map').setView([19.493867, -99.13276],11);
L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: 'Map Data © OpenStreetMap contributors'
}).addTo(map);




//AQUI CAMBIAS LOS ESTILOS DE LAS CAPAS, LAGRO, ANCHO 
////SIMBOLOGÍA PUNTOS
 var icono_interseccionseg = new L.Icon({
     iconSize: [12, 12], //tamaño del ícono
     iconAnchor: [12, 12], //ancho del ícono
     iconUrl: 'imagenes/checkpink.png'
 });

 var icono_Hospital = new L.Icon({
     iconSize: [20, 20], //tamaño del ícono
     iconAnchor: [11, 20], //ancho del ícono
     iconUrl: 'imagenes/hospital.png'
 });

  var icono_CulturayDeporte = new L.Icon({
     iconSize: [20, 20], //tamaño del ícono
     iconAnchor: [11, 20], //ancho del ícono
     iconUrl: 'imagenes/centroCult.png'
 });
 
 var icono_serveducativo = new L.Icon({
     iconSize: [20, 20], //tamaño del ícono
     iconAnchor: [11, 20], //ancho del ícono
     iconUrl: 'imagenes/escuelas.png'
 });

  var icono_escuela = new L.Icon({
     iconSize: [20, 20], //tamaño del ícono
     iconAnchor: [11, 20], //ancho del ícono
     iconUrl: 'imagenes/escuelas.png'
 });

  var icono_banco = new L.Icon({
     iconSize: [20, 20], //tamaño del ícono
     iconAnchor: [11, 20], //ancho del ícono
     iconUrl: 'imagenes/banco.png'
 });

 var icono_iglesia = new L.Icon({
     iconSize: [20, 20], //tamaño del ícono
     iconAnchor: [11, 20], //ancho del ícono
     iconUrl: 'imagenes/iglesia.png'
 });

 var icono_comercio = new L.Icon({
     iconSize: [15, 15], //tamaño del ícono
     iconAnchor: [5, 15], //ancho del ícono
     iconUrl: 'imagenes/comercio.png'
 });

 var icono_alimentobebida = new L.Icon({
     iconSize: [15, 15], //tamaño del ícono
     iconAnchor: [5, 15], //ancho del ícono
     iconUrl: 'imagenes/alimentosbeb.png'
 });  

  var icono_postes = new L.Icon({
     iconSize: [15, 15], //tamaño del ícono
     iconAnchor: [8, 15], //ancho del ícono
     iconUrl: 'imagenes/poste.png'
 });

  var icono_cetram = new L.Icon({
     iconSize: [20, 20], //tamaño del ícono
     iconAnchor: [11, 20], //ancho del ícono
     iconUrl: 'imagenes/estrella.png'
 });

  var icono_rtp = new L.Icon({
     iconSize: [10, 10], //tamaño del ícono
     iconAnchor: [9, 10], //ancho del ícono
     iconUrl: 'imagenes/rtp.png'
 });

  var icono_trole = new L.Icon({
     iconSize: [10, 10], //tamaño del ícono
     iconAnchor: [9, 10], //ancho del ícono
     iconUrl: 'imagenes/trole.png'
 });

  var icono_cablebus = new L.Icon({
     iconSize: [10, 10], //tamaño del ícono
     iconAnchor: [9, 10], //ancho del ícono
     iconUrl: 'imagenes/cablebus.png'
 });

  var icono_metro = new L.Icon({
     iconSize: [10, 10], //tamaño del ícono
     iconAnchor: [9, 10], //ancho del ícono
     iconUrl: 'imagenes/metro.png'
 });

  var icono_metrobus = new L.Icon({
     iconSize: [10, 10], //tamaño del ícono
     iconAnchor: [9, 10], //ancho del ícono
     iconUrl: 'imagenes/metrobus.png'
 });

 ////SIMBOLOGIA LINEAS

 var color_senderoSeguro = {
    color: "#009dff", //color en hexadecimal
    weight: 5,  //grosor de línea
    opacity: 0.65 // transparencia
 };

 var color_sendavenidas = {
    color: "#00ff1a", //color en hexadecimal
    weight: 5,  //grosor de línea
    opacity: 0.65 // transparencia
 };

 var color_sendescolar = {
    color: "#ff0080", //color en hexadecimal
    weight: 5,  //grosor de línea
    opacity: 0.65 // transparencia
 };


////SIMBOLOGÍA POLIGONOS

 var color_pai = {
    weight: 8, // grosor de línea
    color: 'red', // color de línea
    opacity: 1.0, // tansparencia de línea
    fillColor: 'red', // color de relleno
    fillOpacity: 0.0 // transparencia de relleno
  };

 var color_areasverd = {
    weight: 0.8, // grosor de línea
    color: 'green', // color de línea
    opacity: 1.0, // tansparencia de línea
    fillColor: 'green', // color de relleno
    fillOpacity: 0.4 // transparencia de relleno
  };

 var color_areasterrit = {
    weight: 0.8, // grosor de línea
    color: 'brown', // color de línea
    opacity: 1.0, // tansparencia de línea
    fillColor: 'gbrown', // color de relleno
    fillOpacity: 0.0 // transparencia de relleno
  };

 var color_colonias = {
    weight: 0.5, // grosor de línea
    color: 'black', // color de línea
    opacity: 1.0, // tansparencia de línea
    fillColor: 'black', // color de relleno
    fillOpacity: 0.0 // transparencia de relleno
  };

 var color_coloniasred = {
    weight: 0.5, // grosor de línea
    color: 'red', // color de línea
    opacity: 1.0, // tansparencia de línea
    fillColor: 'red', // color de relleno
    fillOpacity: 0.3 // transparencia de relleno
  };

 // AQUÍ AGREGAS TUS CAPAS JS 

    ///CAPAS DE PUNTOS NECESITAN UN ICONO (IMAGEN PNG)
    var interseccionseg = L.geoJson(interseccionseg, {
          pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: icono_interseccionseg});
          }
     });

    var cetram = L.geoJson(cetram, {
          pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: icono_cetram});
          }
     });

    var rtp = L.geoJson(rtp, {
          pointToLayer: function (feature, latlng) {
              return L.marker(latlng, {icon: icono_rtp});
          }
     });

    var trole = L.geoJson(trole, {
          pointToLayer: function (feature, latlng) {
             return L.marker(latlng, {icon: icono_trole});
          }
     });

    var cablebus = L.geoJson(cablebus, {
          pointToLayer: function (feature, latlng) {
             return L.marker(latlng, {icon: icono_cablebus});
          }
     });
    
    var metro = L.geoJson(metro, {
          pointToLayer: function (feature, latlng) {
             return L.marker(latlng, {icon: icono_metro});
          }
     });

    var metrobus = L.geoJson(metrobus, {
         pointToLayer: function (feature, latlng) {
           return L.marker(latlng, {icon: icono_metrobus});
         }
     });

    var hospitales = L.geoJson(hospitales, {
         pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: icono_Hospital});
        }
     });

    var comercio = L.geoJson(comercios, {
         pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: icono_comercio});
        }
     });

    var alimentobebida = L.geoJson(alimentosbebidas, {
         pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: icono_alimentobebida});
        }
     });

    var banco = L.geoJson(bancos, {
         pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: icono_banco});
        }
     });

    var iglesia = L.geoJson(iglesias, {
         pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: icono_iglesia});
        }
     });
     
    var cultura = L.geoJson(servculdep, {
         pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: icono_CulturayDeporte});
        }
     });

    var serveducativo = L.geoJson(serveducativos, {
         pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: icono_serveducativo});
        }
     });

    var escuela = L.geoJson(escuelas, {
         pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: icono_escuela});
        }
     });

    var poste = L.geoJson(postes, {
         pointToLayer: function (feature, latlng) {
         return L.marker(latlng, {icon: icono_postes});
        }
     });

    //CAPA DE LÍNEAS
    var sendseguro = L.geoJson(sendseguro,{
       style: color_senderoSeguro 
     });

    var sendavenidas = L.geoJson(sendavenidas,{
        style: color_sendavenidas 
     });

    var sendescolar = L.geoJson(sendescolar,{
        style: color_sendescolar 
     });

    //CAPA DE POLÍGONOS
    // var pai1 = L.geoJson(pai1,{
    //   style: color_pai1
    // });
    var pai = L.geoJson(pai,{
      style: color_pai
    });
    var areasverd = L.geoJson(areasverd,{
      style: color_areasverd
    });
    var areasterrit = L.geoJson(areasterrit,{
      style: color_areasterrit
    });
    var colonias = L.geoJson(colonias,{
        style: color_colonias
    });
    var coloniasred = L.geoJson(coloniasred,{
        style: color_coloniasred
    });


//AQUÍ PUEDES AGREGAR MÁS MAPAS BASE (AHORITA SOLO HAY DOS)
var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});




//ESTE ES EL CONTROL QUE PRENDE Y APAGA CAPAS

//CONTROL PARA CAPAS BASE
var baseMaps = {
    "OSM": osmBase
};

//CONTROL PARA TUS CAPAS
var overlayMaps = {
    "Poligono de Actuacion Institucional": pai,
    // "PAI_1": pai1,
    "Areas Verdes": areasverd,
    "Areas territoriales": areasterrit,
    "Colonias": colonias,
    "Colonias de la red": coloniasred,
    "Intersecciones seguras": interseccionseg, 
    "Hospitales": hospitales,
    "Comercio al por menor": comercio,
    "Servicios de alimentos y bebidas": alimentobebida,
    "Bancos": banco,
    "Iglesias": iglesia,
    "Servicios culturales y deportivos": cultura,
    "Servicios educativos": serveducativo,
    "Escuelas": escuela,
    "Postes C5": poste,
    "Senderos seguros": sendseguro,
    "Senderos y avenidas": sendavenidas,
    "Senderos escolares": sendescolar,
    "CETRAM Indios Verdes": cetram,
    "RTP": rtp,
    "STE TROLEBUS": trole,
    "STE CABLEBUS": cablebus,
    "STE METRO": metro,
    "METROBUS": metrobus
}

///ESTE ES EL RECTANGULITO DONDE APARECERÁN TODAS LAS CAPAS (NO CAMBIA, AQUÍ NO SE HACE NADA YA)
L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);