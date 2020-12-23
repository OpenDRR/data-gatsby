---
layout: page
lang: en
menu: false
altLangPrefix: index
authorName: Natural Resources Canada
authorUrl:
contentTitle:
  en: Damage State
  fr: Damage State
dateModified: 2020-05-02
description:
  en: DSRA full retrofit classified on sDtr_None_r2
  fr: DSRA full retrofit classified on sDtr_None_r2
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Damage State Building
# Leaflet
leaflet: true
latlng: [49.24, -123.11] # if not set then map will zoom to extent of layer
zoom: 10
layer: /assets/data/afm7p2_lrdmf_damage_state_sauid.geojson
featureClass: sDtr_None_r2
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