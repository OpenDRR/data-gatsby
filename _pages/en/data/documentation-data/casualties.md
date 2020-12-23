---
layout: page
lang: en
menu: false
altLangPrefix: index
authorName: Natural Resources Canada
authorUrl:
contentTitle:
  en: Casualties
  fr: Casualties
dateModified: 2020-09-18
description:
  en: Supporting text explaining the economic impact of the dataset
  fr: Supporting text explaining the economic impact of the dataset
longDescription:
    en: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Casualties
# Leaflet
leaflet: true
latlng: [49.24, -123.11] # if not set then map will zoom to extent of layer
zoom: 10
layer: /assets/data/afm7p2_lrdmf_casualties_sauid.geojson
featureClass: Sauid
img: "http://placehold.it/100x100"
# mlatlng: [49.24, -123.11] # marker lat/lon
---
[back](../)
# {{ page.contentTitle.en }}

{{page.description.en}}

{{page.longDescription.en}}


[GeoJSON]({{site.baseurl}}{{page.layer}})
[License]({{site.data.metadata.metadata.license.url}})
<h4>{{site.data.metadata.metadata.contact.position}}</h4>
<p>{{site.data.metadata.metadata.contact.name}}</p>
<ul>
<li>Phone:{{site.data.metadata.metadata.contact.phone}}</li>
<li>Fax:{{site.data.metadata.metadata.contact.fax}}</li>
<li>Email:{{site.data.metadata.metadata.contact.email}}</li>
</ul>