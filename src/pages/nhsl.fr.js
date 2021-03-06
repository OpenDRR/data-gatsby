import React from "react";
import Layout from "../components/layout";
import Breadcrumb from "../components/Breadcrumb";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";


const NHSL = ({ location }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Couche Nationale Des √Čtablissements Humains",
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
          <h1 id="wb-cont">Couche Nationale Des √Čtablissements Humains</h1>
        </div>
        <div className="text">
          <p>
            La couche des zones de peuplement au niveau national (couche ZPN)
            est une collection d‚Äôensembles de donn√©es th√©matiques qui d√©crivent
            les caract√©ristiques physiques, sociales et √©conomiques des centres
            urbains et des collectivit√©s rurales et √©loign√©es du Canada, ainsi
            que leur vuln√©rabilit√© aux dangers naturels pr√©occupants. Des
            renseignements d√©taill√©s sur l‚Äôutilisation des terres, les
            b√Ętiments, les gens et les immobilisations sont fournis au niveau
            administratif des aires de diffusion du recensement pour plus de
            454‚ÄČ000 r√©gions habit√©es √† travers le Canada.
            <span id="dots">..</span>
            <span id="more">
              La couche de l‚Äôexposition physique inclut une d√©lin√©ation des
              zones de peuplement humain et les cat√©gories d‚Äôutilisation
              fonctionnelle des terres qui y sont associ√©es au Canada, et
              fournit des renseignements d√©taill√©s sur le type de construction,
              l‚Äôoccupation et le niveau de conception de plus de 9,1 millions de
              b√Ętiments; la dynamique de la population √† diverses heures de la
              journ√©e pour 35,1 millions de personnes; et une √©valuation des
              immobilisations des b√Ętiments et de leur contenu totalisant plus
              de 8‚ÄČ300 milliards de dollars canadiens.
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
            L‚Äô√©l√©ment ¬ę‚ÄČmenaces li√©es aux dangers naturels‚ÄČ¬Ľ de la couche des
            zones de peuplement au niveau national (couche ZPN) √©tend la
            capacit√© du mod√®le d‚Äôexposition physique √† approfondir la question
            de savoir qui et quoi pourrait √™tre affect√© par des dangers naturels
            pr√©occupants au Canada. Il utilise l‚Äôinformation disponible au
            niveau national sur les tremblements de terre, les inondations, les
            coul√©es de d√©bris, les feux de for√™t et les dangers li√©s aux vents
            violents pour √©valuer dans quelle mesure les gens et les biens
            essentiels se trouvent en danger (exposition aux dangers) et pour
            √©valuer le potentiel de perturbations socio√©conomiques dans les
            zones o√Ļ l‚Äôintensit√© des dangers est susceptible d‚Äôexc√©der les
            seuils minimaux de dommages potentiels (sensibilit√© aux dangers)..
            <span id="layerDots">..</span>
            <span id="layerMore">
              {" "}
              Les menaces li√©es aux al√©as sismiques sont √©valu√©es au moyen des
              niveaux d‚Äôintensit√© des secousses telluriques survenant une fois
              tous les 2‚ÄČ500 ans mis au point par la Commission g√©ologique du
              Canada pour √©valuer les seuils minimaux des dommages aux
              b√Ętiments. Les menaces li√©es aux risques de feux de for√™t sont
              √©valu√©es au moyen des niveaux moyens d‚Äôintensit√© du front (IF) mis
              au point par le Service canadien des for√™ts pour √©valuer les biens
              communautaires en danger. Les menaces li√©es aux coul√©es de d√©bris
              sont bas√©es sur un mod√®le de vuln√©rabilit√© aux glissements de
              terrain √† variables multiples mis au point par la NASA dans le
              cadre d‚Äôun syst√®me mondial d‚Äôalerte rapide pour les √©v√©nements
              d√©clench√©s par les conditions m√©t√©orologiques. Les menaces li√©es
              aux tsunamis, aux d√©bordements de cours d‚Äôeau et aux vents
              violents sont bas√©es sur les mod√®les de cyclone et inondations
              survenant 1 fois tous les 500 ans dans le cadre du Bilan mondial
              2011 sur la r√©duction des risques de catastrophe des Nations Unies
              pour orienter les efforts de gestion des catastrophes √† l‚Äô√©chelle
              r√©gionale et nationale. La sensibilit√© √† chacun des dangers est
              estim√©e en fonction du nombre de gens et de biens essentiels
              expos√©s au niveau des aires de diffusion du recensement. Les
              r√©sultats sont regroup√©s dans un index des menaces li√©es √† des
              dangers multiples pour aider √† cerner les points chauds
              pr√©occupants dans l‚Äôensemble du Canada.
              <h2>Ressources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/hazard_threat_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Services Web T√©l√©charger
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/hazard_threat_fr/MapServer">
                    Portail ArcGIS Server (ESRI REST)
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_hazard_threat_data">
                    T√©l√©charger le paquet
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
            L‚Äô√©l√©ment ¬ę‚ÄČexposition physique‚ÄČ¬Ľ de la couche des zones de
            peuplement au niveau national (couche ZPN) comprend une d√©lin√©ation
            des aires b√Ęties et des cat√©gories d‚Äôutilisation fonctionnelle des
            terres pour les aires de diffusion du recensement dans les centres
            urbains et les collectivit√©s rurales et √©loign√©es du Canada. Il
            fournit des renseignements d√©taill√©s sur le type de construction,
            l‚Äôoccupation et le niveau de conception de plus de 9,1 millions de
            b√Ętiments; la dynamique de la population √† diverses heures de la
            journ√©e pour 35,1 millions de personnes; et une √©valuation des
            immobilisations des b√Ętiments et de leur contenu totalisant plus de
            8300 milliards de dollars canadiens.<span id="peDots">..</span>
            <span id="peMore">
              {" "}
              Le portefeuille des b√Ętiments est divis√© en cat√©gories selon une
              combinaison de 36 taxonomies de construction qui comprennent
              diff√©rents types de structures en bois, b√©ton, ma√ßonnerie ou acier
              et structures pr√©fabriqu√©es, et de 33 cat√©gories d‚Äôoccupation qui
              comprennent un m√©lange d‚Äôutilisations fonctionnelles
              r√©sidentielles, civiques, commerciales et industrielles. Des
              mod√®les de cartographie propres au contexte pour chaque
              combinaison d‚Äôutilisation des terres, de type de construction et
              de cat√©gorie d‚Äôoccupation sont utilis√©s pour attribuer une
              distribution de cat√©gories de b√Ętiments qui repr√©sente la forme
              structurelle et la fonction globales d‚Äôun quartier donn√©. Le
              nombre d‚Äôoccupants des b√Ętiments √† diff√©rents moments de la
              journ√©e est estim√© pour les heures de travail normales lorsque les
              gens sont dans les bureaux, les √©coles ou d‚Äôautres installations
              de groupes (9 h √† 17 h); pour les heures du matin et du soir
              lorsqu‚Äôils se d√©placent entre domicile et travail (7 h √† 9 h et 17
              h √† 19 h); et pour les heures en soir√©e lorsque la majorit√© des
              gens sont chez eux (19 h √† 7 h). L‚Äô√©valuation des immobilisations
              est bas√©e sur les co√Ľts de remplacement pour l‚Äôindustrie des
              arch√©types de b√Ętiments des r√©gions repr√©sentatives du Canada.
              L‚Äôinventaire des b√Ętiments cadre avec les normes internationales
              pour les √©valuations des risques pour des dangers multiples et
              peut √™tre utilis√© dans d‚Äôautres applications d‚Äô√©valuation de
              l‚Äôutilisation des terres qui pourraient n√©cessiter de
              l‚Äôinformation propre √† la forme ou √† la fonction de
              l‚Äôenvironnement b√Ęti.
              <h2>Ressources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/physical_exposure_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Services Web T√©l√©charger
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/physical_exposure_fr/MapServer">
                    Portail ArcGIS Server (ESRI REST)
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_physical_exposure_data">
                    T√©l√©charger le paquet
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
            L‚Äô√©l√©ment ¬ę dynamique du risque ¬Ľ de la couche des zones de
            peuplement au niveau national (couche ZPN) s‚Äôappuie sur une analyse
            de donn√©es de t√©l√©d√©tection et une mod√©lisation spatiale entreprises
            par le Centre commun de recherche de la Commission europ√©enne dans
            le cadre d‚Äôune √©tude mondiale des tendances en √©volution du
            peuplement humain et de leur influence sur les risques li√©s aux
            catastrophes et le d√©veloppement durable (couche du peuplement
            humain mondial). Des grilles de population √† haute r√©solution (250
            m) et des mod√®les de classification des utilisations des terres √†
            des intervalles de dix ans (1975, 1990, 2000 et 2015) fournissent un
            cadre pour √©valuer la mesure dans laquelle les peuplements humains
            changent au chapitre de la densit√© et des profils spatiaux
            d‚Äôurbanisation.<span id="rdDots">..</span>
            <span id="rdMore">
              {" "}
              Ces ensembles de donn√©es du cadre sont combin√©es aux √©valuations
              nationales disponibles des dangers li√©es aux tremblements de
              terre, tsunami, inondations, coul√©es de d√©bris, feux de for√™t et
              cyclones pour d√©cerner comment la croissance de la population et
              les tendances en √©volutions des changements aux utilisations des
              terres au cours des 40 derni√®res ann√©es contribuent aux profils
              toujours croissants des risques li√©s aux dangers naturels au
              Canada. Les indicateurs de l‚Äôexposition physique et de la
              sensibilit√© aux dangers sont d√©clar√©s au moyen du maillage de
              population de 250 m de la couche du peuplement humain mondial pour
              chaque √©poque temporelle. Les r√©sultats de cette √©tude compl√®tent
              une √©valuation mondiale de l‚Äôexposition aux dangers naturels
              effectu√©e par le Centre commun de recherche dans le cadre de
              l‚ÄôAtlas de la plan√®te humaine de 2017 et fournissent des
              perspectives suppl√©mentaires pour guider les efforts de
              planification locaux et r√©gionaux sur le plan de la r√©silience aux
              catastrophes dans l‚Äôensemble du Canada.
              <h2>Ressources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/risk_dynamics_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Services Web T√©l√©charger
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/risk_dynamics_fr/MapServer">
                    Portail ArcGIS Server (ESRI REST)
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_risk_dynamics_data">
                    T√©l√©charger le paquet
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
          <h2>Seuils Du Tissu Social Et De La Capacit√©</h2>
          <p>
            L‚Äô√©l√©ment ¬ę‚ÄČtissu social‚ÄČ¬Ľ de la couche des zones de peuplement au
            niveau national (couche ZPN) utilise les donn√©es d√©mographiques de
            recensement disponibles pour √©valuer les profils spatiaux g√©n√©raux
            de la sensibilit√© ainsi que la capacit√© des quartiers √† r√©sister aux
            √©v√©nements catastrophiques, et √† s‚Äôen r√©tablir, en fonction des
            caract√©ristiques du logement, de la structure familiale, de
            l‚Äôautonomie individuelle et des syst√®mes financiers.{" "}
            <span id="sfDots">..</span>
            <span id="sfMore">
              Des indicateurs de la vuln√©rabilit√© et du seuil de capacit√© aident
              √† cerner les tendances sous-jacentes de l‚Äôin√©galit√© sociale qui
              pourrait exister au sein d‚Äôune collectivit√© ou d‚Äôune r√©gion
              donn√©e, et de trouver qui est le plus susceptible d‚Äôavoir √†
              assumer le plus grand fardeau de risque apr√®s un √©v√©nement
              catastrophique. Les niveaux de vuln√©rabilit√© de chaque √©l√©ment de
              l‚Äôindice de vuln√©rabilit√© sociale sont √©valu√©s au moyen de
              m√©thodes analytiques adapt√©es du ¬ę‚ÄČmod√®le des dangers des lieux‚ÄČ¬Ľ
              de Cutter pour filtrer et classer des variables d√©mographiques en
              fonction de leur capacit√© √† expliquer les profils spatiaux pour un
              large √©ventail d‚Äôarch√©types communautaires, y compris les centres
              urbains √† forte densit√©, les r√©gions suburbaines et rurbaines
              avoisinantes, et les peuplements ruraux et √©loign√©s plus distants.
              <br />
              Des indicateurs composites d√©crivant les caract√©ristiques des
              conditions de logement, de la structure familiale, de l‚Äôautonomie
              individuelle et des syst√®mes financiers permettent de comparer les
              niveaux relatifs de vuln√©rabilit√© d‚Äôune r√©gion √† l‚Äôautre dans
              l‚Äôensemble du Canada et d‚Äôidentifier les quartiers dans lesquels
              la capacit√© de r√©sister √† des √©v√©nements catastrophiques, et de
              s‚Äôen r√©tablir, peut √™tre restreinte. Les indicateurs sont d√©clar√©s
              au niveau des aires de diffusion du recensement et peuvent √™tre
              utilis√©s en conjonction avec des renseignements sur des menaces
              pr√©cises li√©es aux dangers pour identifier les points chauds
              pr√©occupants potentiels au sein d‚Äôune collectivit√© ou d‚Äôune
              r√©gion, et les zones dans lesquelles des investissements proactifs
              dans la planification et le d√©veloppement des capacit√©s pourraient
              efficacement contribuer √† g√©n√©rer une r√©silience aux catastrophes
              et une durabilit√© √† plus long terme.
              <h2>Ressources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/social_fabric_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Services Web T√©l√©charger
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/social_fabric_fr/MapServer">
                    Portail ArcGIS Server (ESRI REST)
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_social_fabric_data">
                    T√©l√©charger le paquet
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
