---
layout: page
lang: en
menu: false
altLangPrefix: index
authorName: Natural Resources Canada
authorUrl:
contentTitle:
  en: DSRA Full Retrofit
  fr: DSRA Full Retrofit
dateModified: 2020-05-02
description:
  en: DSRA full retrofit classified on sCR_Debris_r2
  fr: DSRA full retrofit classified on sCR_Debris_r2
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: DSRA Full Retrofit
# Leaflet
leaflet: true
latlng: [49.24, -123.11] # if not set then map will zoom to extent of layer
zoom: 10
layer: /assets/data/dsra_sim6p8_cr2022_rlz_1_b0_full_retrofit_agg_view.geojson
featureClass: sCR_Debris_r2
# mlatlng: [49.24, -123.11] # marker lat/lon
img: "http://placehold.it/100x100"
---
[back](../)
# {{ page.contentTitle.en }}

{{page.description.en}}

{% include leaflet.html %}

## Downloads

[GeoJSON]({{site.baseurl}}{{page.layer}})
[License]({{site.data.metadata.metadata.license.url}})
<h4>{{site.data.metadata.metadata.contact.position}}</h4>
<p>{{site.data.metadata.metadata.contact.name}}</p>
<ul>
<li>Phone:{{site.data.metadata.metadata.contact.phone}}</li>
<li>Fax:{{site.data.metadata.metadata.contact.fax}}</li>
<li>Email:{{site.data.metadata.metadata.contact.email}}</li>
</ul>