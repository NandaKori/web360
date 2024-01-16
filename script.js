(function(){
    var script = {
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "layout": "absolute",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1BB1479C_1030_0AC2_419E_12E15548E871_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.83,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_02C11EBC_1051_FACC_419C_39F860A65E36"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "1",
 "hfovMin": "150%",
 "id": "panorama_1BB1479C_1030_0AC2_419E_12E15548E871",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA",
   "class": "AdjacentPanorama",
   "yaw": 4.39,
   "distance": 1,
   "backwardYaw": -44.08
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_t.jpg",
 "overlays": [
  "this.overlay_1D325A1F_1030_05FF_4193_38621CB64897"
 ]
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_004824B0_1030_0ED4_4195_072EDDFC9974",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_004824B0_1030_0ED4_4195_072EDDFC9974_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 576,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.71,
 "hideEasing": "cubic_out",
 "yaw": 39.4,
 "hfov": 4.44
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1BB1479C_1030_0AC2_419E_12E15548E871",
   "camera": "this.panorama_1BB1479C_1030_0AC2_419E_12E15548E871_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA",
   "camera": "this.panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499",
   "camera": "this.panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1ABEC055_1030_0642_4194_08D10260DCA8",
   "camera": "this.panorama_1ABEC055_1030_0642_4194_08D10260DCA8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE",
   "camera": "this.panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8",
   "camera": "this.panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.47,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_010BCE89_1051_FAB4_418E_575ABBFBAA65"
},
{
 "levels": [
  {
   "url": "media/popup_000D2225_10D0_05FC_41A2_045651D2D949_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1920
  },
  {
   "url": "media/popup_000D2225_10D0_05FC_41A2_045651D2D949_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 576,
   "height": 1024
  },
  {
   "url": "media/popup_000D2225_10D0_05FC_41A2_045651D2D949_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 288,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_02F79AD7_1030_1A5C_410D_3A5E4AC25360"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.07,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0162BE77_1051_FA5C_4186_19CAEFEB165D"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_1FE5D90C_10F0_07CC_4171_95EF1EAB853F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_1FE5D90C_10F0_07CC_4171_95EF1EAB853F_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 576,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.76,
 "hideEasing": "cubic_out",
 "yaw": -57.85,
 "hfov": 4.3
},
{
 "class": "Panorama",
 "hfovMax": 130,
 "label": "7",
 "hfovMin": "150%",
 "id": "panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_t.jpg",
 "overlays": [
  "this.overlay_1F724008_1030_05B4_41A0_970D02DF21B1"
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -57.02,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_02E36EE0_1051_FA74_4193_8304D8B551D9"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_01FC7E97_1050_1ADC_41A2_155DE838D759",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_01FC7E97_1050_1ADC_41A2_155DE838D759_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 576,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.75,
 "hideEasing": "cubic_out",
 "yaw": -86.48,
 "hfov": 4.9
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_000D2225_10D0_05FC_41A2_045651D2D949",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_000D2225_10D0_05FC_41A2_045651D2D949_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 576,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.69,
 "hideEasing": "cubic_out",
 "yaw": -23.57,
 "hfov": 3.82
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "2",
 "hfovMin": "150%",
 "id": "panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1BB1479C_1030_0AC2_419E_12E15548E871",
   "class": "AdjacentPanorama",
   "yaw": -44.08,
   "distance": 1,
   "backwardYaw": 4.39
  },
  {
   "panorama": "this.panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499",
   "class": "AdjacentPanorama",
   "yaw": -75.92,
   "distance": 1,
   "backwardYaw": 4.17
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_t.jpg",
 "overlays": [
  "this.overlay_1EA3E059_1030_0643_41A3_E5B702E0E910",
  "this.overlay_1E6EC8B0_1030_06DF_4192_D4F559DDBFD4",
  "this.overlay_1DE9CAF1_1030_7A41_41A3_BE350C314E86",
  "this.overlay_1F2010DC_10F0_064C_419C_CFBA141CD9FE",
  "this.popup_1FE5D90C_10F0_07CC_4171_95EF1EAB853F"
 ]
},
{
 "levels": [
  {
   "url": "media/popup_0065EEE8_10D0_3A74_4163_B834CCCB7456_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1920
  },
  {
   "url": "media/popup_0065EEE8_10D0_3A74_4163_B834CCCB7456_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 576,
   "height": 1024
  },
  {
   "url": "media/popup_0065EEE8_10D0_3A74_4163_B834CCCB7456_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 288,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_02F4AAD7_1030_1A5C_41B0_21D74ED26090"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.08,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0124CEAA_1051_FAF4_4190_C6EE723F38C1"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0065EEE8_10D0_3A74_4163_B834CCCB7456",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0065EEE8_10D0_3A74_4163_B834CCCB7456_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 576,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.38,
 "hideEasing": "cubic_out",
 "yaw": 11.33,
 "hfov": 4.89
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_camera"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "5",
 "hfovMin": "150%",
 "id": "panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1ABEC055_1030_0642_4194_08D10260DCA8",
   "class": "AdjacentPanorama",
   "yaw": 72.69,
   "distance": 1,
   "backwardYaw": -60.02
  },
  {
   "panorama": "this.panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499",
   "class": "AdjacentPanorama",
   "yaw": 99.6,
   "distance": 1,
   "backwardYaw": 122.98
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_t.jpg",
 "overlays": [
  "this.overlay_1FB6377D_1030_0A49_419D_3D121989809E",
  "this.overlay_1FB666BF_1030_0AC9_41A9_C5A2EB006F27",
  "this.overlay_004AE085_1050_06BC_4194_6909A4C3ADA5",
  "this.popup_01FC7E97_1050_1ADC_41A2_155DE838D759",
  "this.overlay_00036EE1_1050_3A74_4199_E6F8901E95C6",
  "this.popup_00B498A7_1050_06FD_41B0_39EFB4770049"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.18,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_017ECE80_1051_FAB4_419A_9029E176E5C0"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0081C179_10D0_0655_41AE_C9A15291D19D",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0081C179_10D0_0655_41AE_C9A15291D19D_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 576,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.89,
 "hideEasing": "cubic_out",
 "yaw": -71.74,
 "hfov": 5.63
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_camera"
},
{
 "levels": [
  {
   "url": "media/popup_00B498A7_1050_06FD_41B0_39EFB4770049_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1920
  },
  {
   "url": "media/popup_00B498A7_1050_06FD_41B0_39EFB4770049_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 576,
   "height": 1024
  },
  {
   "url": "media/popup_00B498A7_1050_06FD_41B0_39EFB4770049_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 288,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_00A5F623_1050_0DF4_41AD_55AB4101DE53"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_00B498A7_1050_06FD_41B0_39EFB4770049",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_00B498A7_1050_06FD_41B0_39EFB4770049_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 576,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.34,
 "hideEasing": "cubic_out",
 "yaw": -60.59,
 "hfov": 4.74
},
{
 "levels": [
  {
   "url": "media/popup_01FC7E97_1050_1ADC_41A2_155DE838D759_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1920
  },
  {
   "url": "media/popup_01FC7E97_1050_1ADC_41A2_155DE838D759_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 576,
   "height": 1024
  },
  {
   "url": "media/popup_01FC7E97_1050_1ADC_41A2_155DE838D759_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 288,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_00A68623_1050_0DF4_4193_BB99DCB12E51"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1ABEC055_1030_0642_4194_08D10260DCA8_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.4,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_011A2E98_1051_FAD4_419C_089385733B0F"
},
{
 "levels": [
  {
   "url": "media/popup_1FE5D90C_10F0_07CC_4171_95EF1EAB853F_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1920
  },
  {
   "url": "media/popup_1FE5D90C_10F0_07CC_4171_95EF1EAB853F_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 576,
   "height": 1024
  },
  {
   "url": "media/popup_1FE5D90C_10F0_07CC_4171_95EF1EAB853F_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 288,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_028AEACE_1030_1A4C_417B_D232CADE683D"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.98,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_02D14EC5_1051_FABC_41AB_455D793DE2F4"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "3",
 "hfovMin": "150%",
 "id": "panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE",
   "class": "AdjacentPanorama",
   "yaw": 122.98,
   "distance": 1,
   "backwardYaw": 99.6
  },
  {
   "panorama": "this.panorama_1ABEC055_1030_0642_4194_08D10260DCA8",
   "class": "AdjacentPanorama",
   "yaw": 144.82,
   "distance": 1,
   "backwardYaw": -99.19
  },
  {
   "panorama": "this.panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA",
   "class": "AdjacentPanorama",
   "yaw": 4.17,
   "distance": 1,
   "backwardYaw": -75.92
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_t.jpg",
 "overlays": [
  "this.overlay_1E2E4A98_1030_7ACE_41A4_6F65B944C480",
  "this.overlay_0062A38B_1030_0ACC_41A7_D1AC02BFF803",
  "this.overlay_1F458A05_1030_05C5_4195_73D471C7F323"
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "6",
 "hfovMin": "150%",
 "id": "panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1ABEC055_1030_0642_4194_08D10260DCA8",
   "class": "AdjacentPanorama",
   "yaw": -82.93,
   "distance": 1,
   "backwardYaw": 134.53
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_t.jpg",
 "overlays": [
  "this.overlay_003542BB_1030_0ACB_4197_1396D42AEE15",
  "this.overlay_1F5E3556_10D0_0E5C_41A4_2FC7AA9D042B",
  "this.popup_0065EEE8_10D0_3A74_4163_B834CCCB7456",
  "this.overlay_1F5653DF_10D0_0A4C_418B_A938013679F9",
  "this.popup_000D2225_10D0_05FC_41A2_045651D2D949",
  "this.overlay_1F52125E_10D0_0A4F_4165_62D3B4B26498",
  "this.popup_0081C179_10D0_0655_41AE_C9A15291D19D",
  "this.overlay_00879F3F_1030_3BCC_41A4_1F973B65A66C",
  "this.popup_004824B0_1030_0ED4_4195_072EDDFC9974"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 135.92,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_02F3CEEF_1051_FA4C_4164_8E55EFB32860"
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 80.81,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_01142EA1_1051_FAF4_4194_E8ABE4557FA3"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_camera"
},
{
 "levels": [
  {
   "url": "media/popup_004824B0_1030_0ED4_4195_072EDDFC9974_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1920
  },
  {
   "url": "media/popup_004824B0_1030_0ED4_4195_072EDDFC9974_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 576,
   "height": 1024
  },
  {
   "url": "media/popup_004824B0_1030_0ED4_4195_072EDDFC9974_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 288,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_02F96ADA_1030_1A54_4187_62A3A1C1A3CC"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -107.31,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_01558E6E_1051_FA4C_4182_A0CE1D807D47"
},
{
 "levels": [
  {
   "url": "media/popup_0081C179_10D0_0655_41AE_C9A15291D19D_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1920
  },
  {
   "url": "media/popup_0081C179_10D0_0655_41AE_C9A15291D19D_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 576,
   "height": 1024
  },
  {
   "url": "media/popup_0081C179_10D0_0655_41AE_C9A15291D19D_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 288,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_02F94AD7_1030_1A5C_41A7_BCDDE15A6293"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "4",
 "hfovMin": "150%",
 "id": "panorama_1ABEC055_1030_0642_4194_08D10260DCA8",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE",
   "class": "AdjacentPanorama",
   "yaw": -60.02,
   "distance": 1,
   "backwardYaw": 72.69
  },
  {
   "panorama": "this.panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8",
   "class": "AdjacentPanorama",
   "yaw": 134.53,
   "distance": 1,
   "backwardYaw": -82.93
  },
  {
   "panorama": "this.panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499",
   "class": "AdjacentPanorama",
   "yaw": -99.19,
   "distance": 1,
   "backwardYaw": 144.82
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_t.jpg",
 "overlays": [
  "this.overlay_1FA0BB82_103F_FABE_4191_F4EDF6EF219C",
  "this.overlay_1F1723CE_1030_0A49_41AC_4E2BAC9FE7C6",
  "this.overlay_1FA43DDF_1030_FE48_4175_CFE7E8DFEF6A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_01373EB3_1051_FAD4_419B_CEF9EF338071"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingBottom": 0,
 "progressBarBorderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.55,
 "minHeight": 0,
 "borderRadius": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "bottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "top": 0,
 "minWidth": 0,
 "class": "UIComponent",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "UIComponent26416"
 },
 "backgroundColorDirection": "vertical",
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "minHeight": 0,
 "borderRadius": 0,
 "bottom": 0,
 "backgroundColorRatios": [],
 "backgroundColor": [],
 "propagateClick": false,
 "top": 0,
 "minWidth": 0,
 "class": "ZoomImage",
 "shadow": false,
 "paddingTop": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage26417"
 },
 "backgroundColorDirection": "vertical",
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "pressedIconColor": "#888888",
 "shadowSpread": 1,
 "id": "closeButtonPopupPanorama",
 "paddingLeft": 5,
 "layout": "horizontal",
 "paddingRight": 5,
 "right": 10,
 "borderSize": 0,
 "paddingBottom": 5,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "iconHeight": 20,
 "minHeight": 0,
 "iconColor": "#000000",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "rollOverIconColor": "#666666",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "propagateClick": false,
 "top": 10,
 "label": "",
 "mode": "push",
 "minWidth": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "class": "CloseButton",
 "fontSize": "1.29vmin",
 "shadow": false,
 "paddingTop": 5,
 "fontStyle": "normal",
 "visible": false,
 "iconLineWidth": 5,
 "data": {
  "name": "CloseButton26418"
 },
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "iconWidth": 20
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA, this.camera_02F3CEEF_1051_FA4C_4164_8E55EFB32860); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.4,
   "hfov": 19.45
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02929AB9_1030_1AD5_41AB_C65412F8938B",
   "yaw": 4.39,
   "pitch": -15.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.45
  }
 ],
 "id": "overlay_1D325A1F_1030_05FF_4193_38621CB64897",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.26,
   "hfov": 16.39
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_029B0ABF_1030_1ACD_41A9_433C2BE4E0F5",
   "yaw": -22.95,
   "pitch": -13.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 16.39
  }
 ],
 "id": "overlay_1F724008_1030_05B4_41A0_970D02DF21B1",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1BB1479C_1030_0AC2_419E_12E15548E871, this.camera_01373EB3_1051_FAD4_419B_CEF9EF338071); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.09,
   "hfov": 12.1
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02944ABC_1030_1AD3_41AA_ABB2005F98E0",
   "yaw": -44.08,
   "pitch": -2.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.1
  }
 ],
 "id": "overlay_1EA3E059_1030_0643_41A3_E5B702E0E910",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499, this.camera_02C11EBC_1051_FACC_419C_39F860A65E36); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5,
   "hfov": 15.27
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02941ABC_1030_1AD3_4193_47C7549F1CA0",
   "yaw": -75.92,
   "pitch": -5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.27
  }
 ],
 "id": "overlay_1E6EC8B0_1030_06DF_4192_D4F559DDBFD4",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.68,
   "hfov": 13.07
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0294AABC_1030_1AD3_41A1_14712587331E",
   "yaw": -143.88,
   "pitch": -2.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.07
  }
 ],
 "id": "overlay_1DE9CAF1_1030_7A41_41A3_BE350C314E86",
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_1FE5D90C_10F0_07CC_4171_95EF1EAB853F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','paddingTop':5,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingBottom':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedIconWidth':20,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_028AEACE_1030_1A4C_417B_D232CADE683D, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.76,
   "hfov": 8.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 33
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.76,
   "yaw": -57.85,
   "hfov": 8.72
  }
 ],
 "id": "overlay_1F2010DC_10F0_064C_419C_CFBA141CD9FE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1ABEC055_1030_0642_4194_08D10260DCA8, this.camera_02D14EC5_1051_FABC_41AB_455D793DE2F4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.55,
   "hfov": 16.08
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02992ABF_1030_1ACD_41A1_A64F805FC458",
   "yaw": 72.69,
   "pitch": -9.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 16.08
  }
 ],
 "id": "overlay_1FB6377D_1030_0A49_419D_3D121989809E",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499, this.camera_02E36EE0_1051_FA74_4193_8304D8B551D9); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.93,
   "hfov": 13.62
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0299CABF_1030_1ACD_41A0_297945123D99",
   "yaw": 99.6,
   "pitch": -6.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.62
  }
 ],
 "id": "overlay_1FB666BF_1030_0AC9_41A9_C5A2EB006F27",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_01FC7E97_1050_1ADC_41A2_155DE838D759, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','paddingTop':5,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingBottom':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedIconWidth':20,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_00A68623_1050_0DF4_4193_BB99DCB12E51, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.75,
   "hfov": 9.51
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 42,
      "height": 38
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.75,
   "yaw": -86.48,
   "hfov": 9.51
  }
 ],
 "id": "overlay_004AE085_1050_06BC_4194_6909A4C3ADA5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_00B498A7_1050_06FD_41B0_39EFB4770049, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','paddingTop':5,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingBottom':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedIconWidth':20,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_00A5F623_1050_0DF4_41AD_55AB4101DE53, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.34,
   "hfov": 10.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 45,
      "height": 37
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.34,
   "yaw": -60.59,
   "hfov": 10.31
  }
 ],
 "id": "overlay_00036EE1_1050_3A74_4199_E6F8901E95C6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA, this.camera_0124CEAA_1051_FAF4_4190_C6EE723F38C1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -54.39,
   "hfov": 11.12
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02971ABC_1030_1AD3_4176_C533E2218E1C",
   "yaw": 4.17,
   "pitch": -54.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.12
  }
 ],
 "id": "overlay_1E2E4A98_1030_7ACE_41A4_6F65B944C480",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1ABEC055_1030_0642_4194_08D10260DCA8, this.camera_01142EA1_1051_FAF4_4194_E8ABE4557FA3); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.19,
   "hfov": 15.83
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0297AABC_1030_1AD3_4192_5F753D886B46",
   "yaw": 144.82,
   "pitch": -9.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 15.83
  }
 ],
 "id": "overlay_0062A38B_1030_0ACC_41A7_D1AC02BFF803",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE, this.camera_011A2E98_1051_FAD4_419C_089385733B0F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.54,
   "hfov": 14.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02967ABF_1030_1ACD_41A5_6DC0982E0F7B",
   "yaw": 122.98,
   "pitch": -6.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 14.6
  }
 ],
 "id": "overlay_1F458A05_1030_05C5_4195_73D471C7F323",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1ABEC055_1030_0642_4194_08D10260DCA8, this.camera_010BCE89_1051_FAB4_418E_575ABBFBAA65); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.43,
   "hfov": 17.49
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02998ABF_1030_1ACD_41AF_81B36B60C9E0",
   "yaw": -82.93,
   "pitch": -26.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 17.49
  }
 ],
 "id": "overlay_003542BB_1030_0ACB_4197_1396D42AEE15",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0065EEE8_10D0_3A74_4163_B834CCCB7456, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','paddingTop':5,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingBottom':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedIconWidth':20,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_02F4AAD7_1030_1A5C_41B0_21D74ED26090, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.38,
   "hfov": 7.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 38
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.38,
   "yaw": 11.33,
   "hfov": 7.89
  }
 ],
 "id": "overlay_1F5E3556_10D0_0E5C_41A4_2FC7AA9D042B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_000D2225_10D0_05FC_41A2_045651D2D949, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','paddingTop':5,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingBottom':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedIconWidth':20,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_02F79AD7_1030_1A5C_410D_3A5E4AC25360, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.69,
   "hfov": 9.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 30
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.69,
   "yaw": -23.57,
   "hfov": 9.21
  }
 ],
 "id": "overlay_1F5653DF_10D0_0A4C_418B_A938013679F9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0081C179_10D0_0655_41AE_C9A15291D19D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','paddingTop':5,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingBottom':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedIconWidth':20,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_02F94AD7_1030_1A5C_41A7_BCDDE15A6293, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.89,
   "hfov": 11.34
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 50,
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.89,
   "yaw": -71.74,
   "hfov": 11.34
  }
 ],
 "id": "overlay_1F52125E_10D0_0A4F_4165_62D3B4B26498",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_004824B0_1030_0ED4_4195_072EDDFC9974, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','paddingTop':5,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingBottom':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedIconWidth':20,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_02F96ADA_1030_1A54_4187_62A3A1C1A3CC, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.71,
   "hfov": 8.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 35
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.71,
   "yaw": 39.4,
   "hfov": 8.43
  }
 ],
 "id": "overlay_00879F3F_1030_3BCC_41A4_1F973B65A66C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8, this.camera_0162BE77_1051_FA5C_4186_19CAEFEB165D); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.45,
   "hfov": 17.25
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02960ABF_1030_1ACD_41A4_808111A4A72F",
   "yaw": 134.53,
   "pitch": -29.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 17.25
  }
 ],
 "id": "overlay_1FA0BB82_103F_FABE_4191_F4EDF6EF219C",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499, this.camera_017ECE80_1051_FAB4_419A_9029E176E5C0); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.7,
   "hfov": 16.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0296DABF_1030_1ACD_4195_46CB36CFE82D",
   "yaw": -99.19,
   "pitch": -12.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 16.69
  }
 ],
 "id": "overlay_1F1723CE_1030_0A49_41AC_4E2BAC9FE7C6",
 "data": {
  "label": "Arrow 02c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE, this.camera_01558E6E_1051_FA4C_4182_A0CE1D807D47); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.19,
   "hfov": 17.5
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_02969ABF_1030_1ACD_41A4_52524AC3262E",
   "yaw": -60.02,
   "pitch": -12.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 17.5
  }
 ],
 "id": "overlay_1FA43DDF_1030_FE48_4175_CFE7E8DFEF6A",
 "data": {
  "label": "Arrow 02c Right-Up"
 }
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1BB1479C_1030_0AC2_419E_12E15548E871_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_02929AB9_1030_1AD5_41AB_C65412F8938B",
 "frameCount": 9,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1AA127CE_1030_0A41_41A1_2CFFEA5394BB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_029B0ABF_1030_1ACD_41A9_433C2BE4E0F5",
 "frameCount": 24,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_02944ABC_1030_1AD3_41AA_ABB2005F98E0",
 "frameCount": 9,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_02941ABC_1030_1AD3_4193_47C7549F1CA0",
 "frameCount": 9,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1AA1EB6A_1030_3A46_41A0_D626BE73EFFA_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_0294AABC_1030_1AD3_41A1_14712587331E",
 "frameCount": 9,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_02992ABF_1030_1ACD_41A1_A64F805FC458",
 "frameCount": 24,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1AA122DA_1030_0A46_4199_CCA82F293FFE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_0299CABF_1030_1ACD_41A0_297945123D99",
 "frameCount": 9,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_02971ABC_1030_1AD3_4176_C533E2218E1C",
 "frameCount": 9,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0297AABC_1030_1AD3_4192_5F753D886B46",
 "frameCount": 24,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1AA15DDD_1030_3E42_419D_F7FEAA502499_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_02967ABF_1030_1ACD_41A5_6DC0982E0F7B",
 "frameCount": 24,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1AA1554F_1030_0E5E_41A2_B692D51F0FD8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_02998ABF_1030_1ACD_41AF_81B36B60C9E0",
 "frameCount": 24,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_02960ABF_1030_1ACD_41A4_808111A4A72F",
 "frameCount": 24,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0296DABF_1030_1ACD_4195_46CB36CFE82D",
 "frameCount": 24,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1ABEC055_1030_0642_4194_08D10260DCA8_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_02969ABF_1030_1ACD_41A4_52524AC3262E",
 "frameCount": 24,
 "rowCount": 6
}],
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "class": "Player",
 "shadow": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player551"
 },
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "height": "100%",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
