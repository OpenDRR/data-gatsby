---
layout: page
lang: en
menu: false
altLangPrefix: index
authorName: Natural Resources Canada
authorUrl:
contentTitle:
  en: Recovery Time (Magnitude 7.2)
  fr: Recovery Time (Magnitude 7.2)
dateModified: 2020-09-18
description:
  en: Recovery time aggregated at building level
  fr: Recovery time aggregated at building level
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Recovery Time
keywords: earthquake
# Leaflet
leaflet: true
latlng: [49.24, -123.11] # if not set then map will zoom to extent of layer
zoom: 10
layer: /assets/data/afm7p2_lrdmf_recovery_time_sauid.geojson
featureClass: Sauid
img: "http://placehold.it/100x100"
# mlatlng: [49.24, -123.11] # marker lat/lon
---
[back](../)
# {{ page.contentTitle.en }}

{{page.description.en}}

{% include leaflet.html %}

## [Download Link]({{site.baseurl}}{{page.layer}})<br/>
[License]({{site.data.metadata.metadata.license.url}})
<h4>{{site.data.metadata.metadata.contact.position}}</h4>
<p>{{site.data.metadata.metadata.contact.name}}</p>
<ul>
<li>Phone:{{site.data.metadata.metadata.contact.phone}}</li>
<li>Fax:{{site.data.metadata.metadata.contact.fax}}</li>
<li>Email:{{site.data.metadata.metadata.contact.email}}</li>
</ul>
