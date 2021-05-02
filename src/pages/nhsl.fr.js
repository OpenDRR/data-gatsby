import React from "react";
import Layout from "../components/layout";
import Breadcrumb from "../components/Breadcrumb";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";


const NHSL = ({ location }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Couche Nationale Des Établissements Humains",
  });
  function ReadMoreLess() {
    var dots = document.getElementById("dots");
    var moretext = document.getElementById("more");
    var btn = document.getElementById("nhslOne");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moretext.style.display = "none";
      btn.innerHTML = "Lire la suite";
    } else {
      dots.style.display = "none";
      moretext.style.display = "inline";
      btn.innerHTML = "Lire la suite";
    }
  }

  function ReadMoreLessLayer() {
    var layerDots = document.getElementById("layerDots");
    var layerMore = document.getElementById("layerMore");
    var btn = document.getElementById("nhslTwo");

    if (layerDots.style.display === "none") {
      layerDots.style.display = "inline";
      layerMore.style.display = "none";
      btn.innerHTML = "Lire la suite";
    } else {
      layerDots.style.display = "none";
      layerMore.style.display = "inline";
      btn.innerHTML = "Lire la suite";
    }
  }

  function PELayer() {
    var peDots = document.getElementById("peDots");
    var peMore = document.getElementById("peMore");
    var btn = document.getElementById("nhslThree");

    if (peDots.style.display === "none") {
      peDots.style.display = "inline";
      peMore.style.display = "none";
      btn.innerHTML = "Lire la suite";
    } else {
      peDots.style.display = "none";
      peMore.style.display = "inline";
      btn.innerHTML = "Lire la suite";
    }
  }

  function RDLayer() {
    var rdDots = document.getElementById("rdDots");
    var rdMore = document.getElementById("rdMore");
    var btn = document.getElementById("nhslFour");

    if (rdDots.style.display === "none") {
      rdDots.style.display = "inline";
      rdMore.style.display = "none";
      btn.innerHTML = "Lire la suite";
    } else {
      rdDots.style.display = "none";
      rdMore.style.display = "inline";
      btn.innerHTML = "Lire la suite";
    }
  }

  function SFLayer() {
    var sfDots = document.getElementById("sfDots");
    var sfMore = document.getElementById("sfMore");
    var btn = document.getElementById("nhslFive");

    if (sfDots.style.display === "none") {
      sfDots.style.display = "inline";
      sfMore.style.display = "none";
      btn.innerHTML = "Lire la suite";
    } else {
      sfDots.style.display = "none";
      sfMore.style.display = "inline";
      btn.innerHTML = "Lire la suite";
    }
  }

  return (
    <Layout>
      <div className="container">
      <Breadcrumb crumbs={crumbs} />
        <div className="row">
          <h1 id="wb-cont">Couche Nationale Des Établissements Humains</h1>
        </div>
        <div className="text">
          <p>
            La couche des zones de peuplement au niveau national (couche ZPN)
            est une collection d’ensembles de données thématiques qui décrivent
            les caractéristiques physiques, sociales et économiques des centres
            urbains et des collectivités rurales et éloignées du Canada, ainsi
            que leur vulnérabilité aux dangers naturels préoccupants. Des
            renseignements détaillés sur l’utilisation des terres, les
            bâtiments, les gens et les immobilisations sont fournis au niveau
            administratif des aires de diffusion du recensement pour plus de
            454 000 régions habitées à travers le Canada.
            <span id="dots">..</span>
            <span id="more">
              La couche de l’exposition physique inclut une délinéation des
              zones de peuplement humain et les catégories d’utilisation
              fonctionnelle des terres qui y sont associées au Canada, et
              fournit des renseignements détaillés sur le type de construction,
              l’occupation et le niveau de conception de plus de 9,1 millions de
              bâtiments; la dynamique de la population à diverses heures de la
              journée pour 35,1 millions de personnes; et une évaluation des
              immobilisations des bâtiments et de leur contenu totalisant plus
              de 8 300 milliards de dollars canadiens.
            </span>
          </p>
          <button onClick={ReadMoreLess} className="btn" id="nhslOne">
            Lire la suite
          </button>
        </div>
        <div className="row">
          <h2>Couches</h2>
        </div>
        <div className="text">
          <h2>Menace De Danger</h2>
          <p>
            L’élément « menaces liées aux dangers naturels » de la couche des
            zones de peuplement au niveau national (couche ZPN) étend la
            capacité du modèle d’exposition physique à approfondir la question
            de savoir qui et quoi pourrait être affecté par des dangers naturels
            préoccupants au Canada. Il utilise l’information disponible au
            niveau national sur les tremblements de terre, les inondations, les
            coulées de débris, les feux de forêt et les dangers liés aux vents
            violents pour évaluer dans quelle mesure les gens et les biens
            essentiels se trouvent en danger (exposition aux dangers) et pour
            évaluer le potentiel de perturbations socioéconomiques dans les
            zones où l’intensité des dangers est susceptible d’excéder les
            seuils minimaux de dommages potentiels (sensibilité aux dangers)..
            <span id="layerDots">..</span>
            <span id="layerMore">
              {" "}
              Les menaces liées aux aléas sismiques sont évaluées au moyen des
              niveaux d’intensité des secousses telluriques survenant une fois
              tous les 2 500 ans mis au point par la Commission géologique du
              Canada pour évaluer les seuils minimaux des dommages aux
              bâtiments. Les menaces liées aux risques de feux de forêt sont
              évaluées au moyen des niveaux moyens d’intensité du front (IF) mis
              au point par le Service canadien des forêts pour évaluer les biens
              communautaires en danger. Les menaces liées aux coulées de débris
              sont basées sur un modèle de vulnérabilité aux glissements de
              terrain à variables multiples mis au point par la NASA dans le
              cadre d’un système mondial d’alerte rapide pour les événements
              déclenchés par les conditions météorologiques. Les menaces liées
              aux tsunamis, aux débordements de cours d’eau et aux vents
              violents sont basées sur les modèles de cyclone et inondations
              survenant 1 fois tous les 500 ans dans le cadre du Bilan mondial
              2011 sur la réduction des risques de catastrophe des Nations Unies
              pour orienter les efforts de gestion des catastrophes à l’échelle
              régionale et nationale. La sensibilité à chacun des dangers est
              estimée en fonction du nombre de gens et de biens essentiels
              exposés au niveau des aires de diffusion du recensement. Les
              résultats sont regroupés dans un index des menaces liées à des
              dangers multiples pour aider à cerner les points chauds
              préoccupants dans l’ensemble du Canada.
              <h2>Ressources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/hazard_threat_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Services Web Télécharger
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/hazard_threat_fr/MapServer">
                    Portail ArcGIS Server (ESRI REST)
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_hazard_threat_data">
                    Télécharger le paquet
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <button onClick={ReadMoreLessLayer} className="btn" id="nhslTwo">
            Lire la suite
          </button>
        </div>

        <div className="text">
          <h2>Exposition Physique</h2>
          <p>
            L’élément « exposition physique » de la couche des zones de
            peuplement au niveau national (couche ZPN) comprend une délinéation
            des aires bâties et des catégories d’utilisation fonctionnelle des
            terres pour les aires de diffusion du recensement dans les centres
            urbains et les collectivités rurales et éloignées du Canada. Il
            fournit des renseignements détaillés sur le type de construction,
            l’occupation et le niveau de conception de plus de 9,1 millions de
            bâtiments; la dynamique de la population à diverses heures de la
            journée pour 35,1 millions de personnes; et une évaluation des
            immobilisations des bâtiments et de leur contenu totalisant plus de
            8300 milliards de dollars canadiens.<span id="peDots">..</span>
            <span id="peMore">
              {" "}
              Le portefeuille des bâtiments est divisé en catégories selon une
              combinaison de 36 taxonomies de construction qui comprennent
              différents types de structures en bois, béton, maçonnerie ou acier
              et structures préfabriquées, et de 33 catégories d’occupation qui
              comprennent un mélange d’utilisations fonctionnelles
              résidentielles, civiques, commerciales et industrielles. Des
              modèles de cartographie propres au contexte pour chaque
              combinaison d’utilisation des terres, de type de construction et
              de catégorie d’occupation sont utilisés pour attribuer une
              distribution de catégories de bâtiments qui représente la forme
              structurelle et la fonction globales d’un quartier donné. Le
              nombre d’occupants des bâtiments à différents moments de la
              journée est estimé pour les heures de travail normales lorsque les
              gens sont dans les bureaux, les écoles ou d’autres installations
              de groupes (9 h à 17 h); pour les heures du matin et du soir
              lorsqu’ils se déplacent entre domicile et travail (7 h à 9 h et 17
              h à 19 h); et pour les heures en soirée lorsque la majorité des
              gens sont chez eux (19 h à 7 h). L’évaluation des immobilisations
              est basée sur les coûts de remplacement pour l’industrie des
              archétypes de bâtiments des régions représentatives du Canada.
              L’inventaire des bâtiments cadre avec les normes internationales
              pour les évaluations des risques pour des dangers multiples et
              peut être utilisé dans d’autres applications d’évaluation de
              l’utilisation des terres qui pourraient nécessiter de
              l’information propre à la forme ou à la fonction de
              l’environnement bâti.
              <h2>Ressources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/physical_exposure_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Services Web Télécharger
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/physical_exposure_fr/MapServer">
                    Portail ArcGIS Server (ESRI REST)
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_physical_exposure_data">
                    Télécharger le paquet
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <button onClick={PELayer} className="btn" id="nhslThree">
            Lire la suite
          </button>
        </div>

        <div className="text">
          <h2>Risk Dynamics</h2>
          <p>
            L’élément « dynamique du risque » de la couche des zones de
            peuplement au niveau national (couche ZPN) s’appuie sur une analyse
            de données de télédétection et une modélisation spatiale entreprises
            par le Centre commun de recherche de la Commission européenne dans
            le cadre d’une étude mondiale des tendances en évolution du
            peuplement humain et de leur influence sur les risques liés aux
            catastrophes et le développement durable (couche du peuplement
            humain mondial). Des grilles de population à haute résolution (250
            m) et des modèles de classification des utilisations des terres à
            des intervalles de dix ans (1975, 1990, 2000 et 2015) fournissent un
            cadre pour évaluer la mesure dans laquelle les peuplements humains
            changent au chapitre de la densité et des profils spatiaux
            d’urbanisation.<span id="rdDots">..</span>
            <span id="rdMore">
              {" "}
              Ces ensembles de données du cadre sont combinées aux évaluations
              nationales disponibles des dangers liées aux tremblements de
              terre, tsunami, inondations, coulées de débris, feux de forêt et
              cyclones pour décerner comment la croissance de la population et
              les tendances en évolutions des changements aux utilisations des
              terres au cours des 40 dernières années contribuent aux profils
              toujours croissants des risques liés aux dangers naturels au
              Canada. Les indicateurs de l’exposition physique et de la
              sensibilité aux dangers sont déclarés au moyen du maillage de
              population de 250 m de la couche du peuplement humain mondial pour
              chaque époque temporelle. Les résultats de cette étude complètent
              une évaluation mondiale de l’exposition aux dangers naturels
              effectuée par le Centre commun de recherche dans le cadre de
              l’Atlas de la planète humaine de 2017 et fournissent des
              perspectives supplémentaires pour guider les efforts de
              planification locaux et régionaux sur le plan de la résilience aux
              catastrophes dans l’ensemble du Canada.
              <h2>Ressources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/risk_dynamics_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Services Web Télécharger
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/risk_dynamics_fr/MapServer">
                    Portail ArcGIS Server (ESRI REST)
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_risk_dynamics_data">
                    Télécharger le paquet
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <button onClick={RDLayer} className="btn" id="nhslFour">
            Lire la suite
          </button>
        </div>

        <div className="text">
          <h2>Seuils Du Tissu Social Et De La Capacité</h2>
          <p>
            L’élément « tissu social » de la couche des zones de peuplement au
            niveau national (couche ZPN) utilise les données démographiques de
            recensement disponibles pour évaluer les profils spatiaux généraux
            de la sensibilité ainsi que la capacité des quartiers à résister aux
            événements catastrophiques, et à s’en rétablir, en fonction des
            caractéristiques du logement, de la structure familiale, de
            l’autonomie individuelle et des systèmes financiers.{" "}
            <span id="sfDots">..</span>
            <span id="sfMore">
              Des indicateurs de la vulnérabilité et du seuil de capacité aident
              à cerner les tendances sous-jacentes de l’inégalité sociale qui
              pourrait exister au sein d’une collectivité ou d’une région
              donnée, et de trouver qui est le plus susceptible d’avoir à
              assumer le plus grand fardeau de risque après un événement
              catastrophique. Les niveaux de vulnérabilité de chaque élément de
              l’indice de vulnérabilité sociale sont évalués au moyen de
              méthodes analytiques adaptées du « modèle des dangers des lieux »
              de Cutter pour filtrer et classer des variables démographiques en
              fonction de leur capacité à expliquer les profils spatiaux pour un
              large éventail d’archétypes communautaires, y compris les centres
              urbains à forte densité, les régions suburbaines et rurbaines
              avoisinantes, et les peuplements ruraux et éloignés plus distants.
              <br />
              Des indicateurs composites décrivant les caractéristiques des
              conditions de logement, de la structure familiale, de l’autonomie
              individuelle et des systèmes financiers permettent de comparer les
              niveaux relatifs de vulnérabilité d’une région à l’autre dans
              l’ensemble du Canada et d’identifier les quartiers dans lesquels
              la capacité de résister à des événements catastrophiques, et de
              s’en rétablir, peut être restreinte. Les indicateurs sont déclarés
              au niveau des aires de diffusion du recensement et peuvent être
              utilisés en conjonction avec des renseignements sur des menaces
              précises liées aux dangers pour identifier les points chauds
              préoccupants potentiels au sein d’une collectivité ou d’une
              région, et les zones dans lesquelles des investissements proactifs
              dans la planification et le développement des capacités pourraient
              efficacement contribuer à générer une résilience aux catastrophes
              et une durabilité à plus long terme.
              <h2>Ressources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/social_fabric_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Services Web Télécharger
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/social_fabric_fr/MapServer">
                    Portail ArcGIS Server (ESRI REST)
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_social_fabric_data">
                    Télécharger le paquet
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <button onClick={SFLayer} className="btn" id="nhslFive">
            Lire la suite
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default NHSL;
