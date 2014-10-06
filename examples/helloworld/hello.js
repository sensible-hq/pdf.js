/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

var all = [
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(10_2)_Jul1307.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(12_2)_Jun2207.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(13_2)_Jun1507.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(14_2)_Jun0807.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(156_2)_Dec0707.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(157_2)_Dec1407.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(158_2)_Jan0408.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(159_2)_Dec2807.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(15_2)_Jun0107.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(160_2)_Dec2107.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(161_2)_May3008.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(162_2)_May2308.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(163_2)_May1608.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(164_2)_May0908.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(165_2)_May0208.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(166_2)_Apr2508.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(167_2)_Apr1808.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(168_2)_Apr0408.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(169_2)_Mar2808.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(16_2)_May1807.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(170_2)_Mar2108.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(171_2)_Mar0708.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(172_2)_Feb2908.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(172_5)_Feb2208.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(173_2)_Feb1508.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(174_2)_Feb0808.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(175_2)_Feb0108 .pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(176_2)_Jan2508.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(177_2)_Jan1808.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(178_2)_Jan1108.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(179_2)_Jun0509.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(17_2)_May1107.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(180_2)_May2909.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(181_2)_Jun1209.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(182_2)_Jun1909.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(183_2)_Dec2509.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(184_2)_Jan0110.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(185_2)_Jan0810.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(186_2)_Jan1510.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(187_2)_Jan2210.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(188_2)_Jan2910.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(189_2)_Feb2610.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(18_2)_May0407.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(190_2)_Mar1210.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(191_2)_Mar1910.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(192_2)_Mar2610.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(193_2)_Apr2310.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(194_2)_Apr3010.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(195_2)_May0710.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(196_2)_May1410.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(197_2)_May2110.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(198_2)_May2810.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(199_2)_Jun0410.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(19_2)_Apr2707.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(1_2)_Sep2107.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(200_2)_Jun1110.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(201_2)_Jun2510.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(202_2)_Jul2310.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(203_2)_Jul2409.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(204_2)_Jul3109.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(205_2)_Aug0709.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(206_2)_Aug1409.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(207_2)_Aug2109.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(208_2)_Aug2809.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(209_2)_Sep0409.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(20_2)_Apr2007.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(210_2)_Sep1109.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(211_2)_Sep1809.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(212_2)_Sep2509.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(213_2)_Oct0209.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(214_2)_Oct0909.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(215_2)_Oct2309.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(215_4)_Oct1609.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(216_2)_Oct3009.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(217_2)_Nov0609.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(218_2)_Nov1309.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(219_2)_Nov2009.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(21_2)_Nov3007.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(220_2)_Nov2709.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(221_2)_Dec1109.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(222_2)_Dec1809.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(223_2)_Dec1208.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(224_2)_Dec1908.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(229_2)_Dec2608.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(22_2)_Nov2307.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(230_2)_Jan0909.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(231_2)_Jan1609.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(232_2)_Jan2309[1].pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(233_2)_Jan3009.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(234_2)_Feb1309.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(235_2)_Feb2009.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(236_2)_Feb2709.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(237_2)_Mar0609.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(238_2)_Mar1309.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(239_2)_Mar2009.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(23_2)_Nov1607.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(240_2)_Apr0309.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(241_2)_Apr1009.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(242_2)_Apr1709.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(243_2)_May0809.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(244_2)_Jun2609.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(245_2)_Jul0309.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(246_2)_Jun0608.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(247_2)_Jun1308.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(24_2)_Nov0907.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(251_2)_Jun2708.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(252_2)_Jul1808.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(253_2)_Jul2508.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(254_2)_Aug0108.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(255_2)_Aug0808.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(256_2)_Aug1508.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(257_2)_Aug2208.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(258_2)_Aug2908.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(259_2)_Sep0508.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(25_2)_Nov0207.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(260_2)_Sep1908.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(261_2)_Sep2608.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(262_2)_Oct0308.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(263_2)_Oct1008.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(264_2)_Oct1708.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(265_2)_Oct2408.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(266_2)_Oct3108.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(267_2)_Nov0708.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(268_2)_Nov1408.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(269_2)_Nov2108.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(26_2)_Oct2607.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(270_2)_Nov2808.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(271_2)_Dec0508.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(272_2)_Oct0810.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(273_2)_Nov0510.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(274_2)_Oct2910.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(275_2)_Aug1310.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(276_2)_Aug2010.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(277_2)_Aug2710.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(278_2)_Sep0310.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(279_2)_Sep1010.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(27_2)_Oct1907.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(280_2)_Sep1710.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(281_2)_Sep2410.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(282_2)_Oct0110.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(283_2)_Oct2210.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(284_2)_Nov1210.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(285_2)_Nov1910.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(286_2)_Nov2610.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(287_2)_Dec0310.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(288_2)_Dec1010.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(289_2)_Dec1710.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(28_2)_Oct0507.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(290_2)_Dec3110.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(291_2)_Jan0711.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(292_2)_Jan1411.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(293_2)_Jan2111.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(294_2)_Jan2811.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(295_2)_Feb0411.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(296_2)_Feb1111.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(297_2)_Feb1811.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(298_2)_Feb2511.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(299_2)_Mar0411.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(29_2)_Sep2807.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(2_2)_Sep1407.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(300_2)_Mar1811.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(301_2)_Mar2511.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(302_2)_Apr0111.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(303_2)_Apr0111.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(304_2)_Jun1711.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(305_2)_May2711.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(306_2)_Jun0311.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(307_2)_Jun1011.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(308_2)_Apr2211.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(309_2)_Apr2911.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(30_2)_Feb1706.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(310_2)_May0611.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(311_2)_May1311.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(312_2)_Sep3011.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(313_2)_Oct2111.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(314_2)_Oct2811.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(315_2)_Nov0411.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(316_2)_Dec2311.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(317_2)_Feb2412.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(318_2)_Mar0212.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(319_2)_Mar0912.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(31_2)_Feb2406.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(320_2)_Mar1612.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(321_2)_Jun2008.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(322_2)_Apr2409.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(323_2)_May0109.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(324_2)_May2011.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(325_2)_Jun2411.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(326_2)_Jul2211.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(327_2)_Jul2911.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(328_3)_Aug0511.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(329_2)_Aug1211.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(32_2)_Mar0306.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(330_2)_Aug1911.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(331_2)_Aug2611.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(332_2)_Sep0211.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(333_2)_Oct1411.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(334_2)_Nov1111.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(335_2)_Nov2511.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(336_2)_Dec0911.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(337_2)_Dec1611.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(338_2)_Dec3011.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(339_2)_Jan0612.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(33_2)_Mar1006.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(340_2)_Jan1312.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(342_2)_Jan2012.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(343_2)_Jan2712.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(344_2)_Feb1012.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(345_2)_Feb1712.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(346_2)_Mar2312.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(347_2)_Mar3012.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(348_2)_Apr0612.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(34_2)_Mar1706.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(350_2)_Apr2012.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(351_2)_Apr2712.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(352_2)_May0412.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(353_2)_May1112.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(354_2)_May1812.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(355_2)_May2512.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(356_2)_Jun0112.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(357_2)_Jun0812.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(358_2)_Jun1512.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(359_3)_Jul2012.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(360_2)_Jul2712.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(361_2)_Aug0312.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(362_2)_Aug1012.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(363_2)_Aug1712.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(364_2)_Aug2412.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(365_2)_Aug3112.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(366_2)_Sep0712.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(367_2)_Sep0712.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(368_2)_Sep1412.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(369_2)_Sep2112.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(36_2)_Mar2406.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(370_2)_Sep2812.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(371_2)_Oct0512.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(372_2)_Oct1212.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(373_2)_Oct1912.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(374_2)_Oct2612.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(375_2)_Nov0212.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(376_2)_Nov0912.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(377_2)_Nov1612.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(378_2)_Nov2312.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(379_2)_Dec0712.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(37_2)_Mar3106.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(380_2)_Dec1412.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(381_2)_Dec2112.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(382_2)_Dec2812.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(383_2)_Jan0413.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(384_2)_Jan1113.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(385_2)_Jan1813.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(386_2)_Jan2513.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(387_2)_Feb0113.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(389_2)_Feb2213.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(38_2)_Apr0706.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(390_2)_Mar0113.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(391_2)_Mar0813.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(392_2)_Mar1513.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(393_2)_Mar2213.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(394_2)_Mar2913.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(395_2)_Apr0513.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(396_2)_Apr1213.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(397_2)_Apr1913.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(398_2)_Apr2613.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(399_2)_May0313.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(39_2)_Apr1406.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(3_2)_Sep0707.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(400_2)_May1013.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(401_2)_May1713.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(402_2)_May2413.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(404_2)_May3113.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(405_2)_Jun0713.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(406_2)_Jun1413.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(407_2)_Jun2113.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(408_2)_Aug0213.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(409_2)_Aug0913.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(40_3)_Apr1406.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(410_2)_Aug1613.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(411_2)_Aug2313.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(412_2)_Aug3013.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(413_2)_Sep0613.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(414_2)_Sep1313.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(415_2)_Sep2013.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(416_2)_Sep2713.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(417_2)_Oct0413.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(418_2)_Oct1113.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(419_2)_Oct1813.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(41_2)_Apr2106.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(420_2)_Oct2513.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(421_2)_Nov0113.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(422_2)_Nov0813.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(423_2)_Nov1513.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(424_2)_Nov2213.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(425_2)_Nov2913.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(426_2)_Dec0613.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(427_2)_Dec1313.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(428_2)_Dec2013.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(429_2)_Dec2713.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(42_2)_Apr2806.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(430_2)_Jan0314.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(431_2)_Jan1014.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(432_2)_Jan1714.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(433_2)_Jan2414.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(434_2)_Jan3114.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(435_2)_Feb0714.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(436_2)_Feb1414.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(437_2)_Feb2114.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(438_2)_Feb2814.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(439_2)_Mar0714.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(43_2)_May0506.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(440_2)_Mar1414.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(441_2)_Mar2114.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(442_2)_Mar2814.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(443_2)_Apr0414.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(444_2)_Apr1814.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(445_2)_Apr2514.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(446_2)_May0214.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(447_2)_May0914.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(448_2)_Jun1314.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(449_2)_Jul2514.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(449_4)_Aug0114.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(44_2)_May1206.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(450_2)_Jul2514.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(450_4)_Aug0114.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(451_2)_Aug1514.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(452_2)_Aug2214.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(453_2)_Aug2914.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(454_2)_Sep0514.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(455_2)_Sep1214.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(456_2)_Sep192014.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(45_2)_May1906.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(46_2)_May2606.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(47_3)_Jun0206.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(48_2)_Jun0906.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(49_2)_Jun1606.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(4_2)_Aug3107[.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(50_2)_Jun2306.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(51_2)_Jun3006.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(52_2)_Jul0706.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(53_2)_Aug0406.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(54_2)_Aug2506.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(55_2)_Sep0106.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(56_2)_Sep0806.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(57_2)_Sep1506.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(58_2)_Sep2206.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(59_2)_Sep2906.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(5_2)_Aug2407.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(63_2)_Oct0606.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(64_2)_Oct2006.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(65_2)_Oct2706.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(66_2)_Nov0306.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(67_2)_Nov1006.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(69_2)_Nov2406.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(6_2)_Aug1007.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(71_2)_Dec1506.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(73_2)_Jan0507.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(74_2)_Jan1207.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(75_2)_Jan1907.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(76_2)_Jan2607.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(77_2)_Feb0907.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(78_2)_Feb1607.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(79_2)_Feb2307.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(7_2)_Aug0307.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(80_2)_Mar2307[1].pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(81_2)_Mar3007[1].pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(8_2)_Jul2707.pdf',
'From(Kathy & George Burnham (gkolorado@yahoo.com))_ID(9_2)_Jul2007.pdf',];

function mergeGlyphs(glyphs) {
  var part = '';
  var chunks = [];
  for (var i = 0; i < glyphs.length; i++) {
    var glyph = glyphs[i];
    if (isNum(glyph) || glyph === null) {
      chunks.push(part);
      part = '';
    } else {
      part += glyph.unicode;
    }
  }
  if (part !== '') {
    chunks.push(part);
  }
  return chunks;
}

function isTimelinessNumber(num) {
  switch (num) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      return true;
  }
  return false;
}

function isTimelinessChange(chunks) {
  var regex = /(.*?)([1-5])(?:\s+)([1-5])/g;
  var matches;
  if (matches = regex.exec(chunks)) {
    return [matches[1].trim(), matches[2], matches[3]];
  }
  return false;
}

function partialMatch(regex, chunks) {
  return regex.test(chunks);
}

function findDate(input) {
  var regex = /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d*\d),\s*(20\d\d)/g;
    var matches;
  if (matches = regex.exec(input)) {
    return [new Date(matches[0]), matches[1], matches[2], matches[3]];
  }
  return false;
}

var collectChanges = false;

var foundDown = false;

function doPage(pdf, num, data) {
  var allText = [];
  var currentPos;
  return pdf.getPage(num).then(function(page) {
    return page.getTextContent();
  }).then(function(textContent) {
    // Collect all the text so we can sort it by position.
    for (var i = 0; i < textContent.items.length; i++) {
      var text = textContent.items[i];
      var y = text.transform[5];
      currentPos = {
        y: y,
        text: text.str
      };
      allText.push(currentPos);
    }
    allText.sort(function (a, b) {
      return b.y - a.y;
    });
    // Now search for the timeliness changes.
    for (var i = 0; i < allText.length; i++) {
      var chunks = allText[i].text;
      var date;
      if (num == 1 && (date = findDate(chunks))) {
        // console.log(date);
        data.date = date;
      }
      if (!collectChanges && partialMatch(/STOCKS\s+MOVING\s+UP/g, chunks)) {
        collectChanges = true;
        // console.log('hi');
        continue;
      }
      if (collectChanges && partialMatch(/STOCKS\s+MOVING\s+DOWN/g, chunks)) {
        // console.log('bye');
        foundDown = true;
        collectChanges = false;
        break;
      }
      if (collectChanges) {
        var change;
        // console.log(chunks);
        if (change = isTimelinessChange(chunks)) {
          // console.log(chunks);
          data.up.push(change);
          // console.log(change);
        }
      }
    }
    return data;
  });
}

var missingData = [];

function printCSV(data) {
  debugger;
  var out = '';
  for (var i = 0; i < data.length; i++) {
    var a = data[i];
    if (a.up.length == 0) {
      missingData.push(a.filename);
    }
    for (var j = 0; j < a.up.length; j++) {
      var line = [
        a.filename,
        a.date[0].toISOString().slice(0, 19).replace('T', ' '),
        a.up[j][0].replace(',', ' '),
        a.up[j][1],
        a.up[j][2]];
      out += line.join(',') + '\n';
    }
  }
  return out;
}

var allData = [];

function nextDoc(x) {
  var filename = all[x];
  console.log(filename);
  PDFJS.getDocument('/pdfs/ayi/' + encodeURI(filename)).then(function(pdf) {
    // Using promise to fetch the page
    var data = {
      filename: filename,
      date: null,
      up: []
    };
    var numPages = pdf.numPages;
    var i = 0;
    function a(i) {
      if (i >= numPages) {
        return data;
      }
      if ((i + 1) == 2) {
        i = 20;
      }
      return doPage(pdf, i + 1, data).then(function() {
        if (foundDown) {
          foundDown = false;
          return data;
        }
        return a(++i);
      }, function (e) {
        debugger;
        console.error(e);
      });
    }
    return a(0).then(function (data) {
      allData.push(data);
    });
  }).then(function () {
    if (x >= all.length - 1) {
      var parts = printCSV(allData);
      var bl = new Blob([parts], {type : 'text/csv'});
      console.log(URL.createObjectURL(bl));
      return;
    }
    console.log((x + 1) + ' of ' + all.length);
    return nextDoc(x + 1)
  });
}

nextDoc(0);

