const Br = {
    atomic_number: 35,
    name: "Bromine",
    symbol: "Br",
    mass: 79.904,
    common_ions: [-1, 1, 3, 5],
    uncommon_ions: [4, 7],
    xray_scattering: {
        table: [
             { energy: 0.01, f1: undefined, f2: 5.161_99 },
             { energy: 0.010_161_7, f1: undefined, f2: 5.318_55 },
             { energy: 0.010_326_1, f1: undefined, f2: 5.479_86 },
             { energy: 0.010_493_1, f1: undefined, f2: 5.646_06 },
             { energy: 0.010_662_8, f1: undefined, f2: 5.817_3 },
             { energy: 0.010_835_3, f1: undefined, f2: 5.993_73 },
             { energy: 0.011_010_6, f1: undefined, f2: 6.175_52 },
             { energy: 0.011_188_6, f1: undefined, f2: 6.362_81 },
             { energy: 0.011_369_6, f1: undefined, f2: 6.555_8 },
             { energy: 0.011_553_5, f1: undefined, f2: 6.754_63 },
             { energy: 0.011_740_4, f1: undefined, f2: 6.959_49 },
             { energy: 0.011_930_3, f1: undefined, f2: 7.170_57 },
             { energy: 0.012_123_2, f1: undefined, f2: 7.388_04 },
             { energy: 0.012_319_3, f1: undefined, f2: 7.583_43 },
             { energy: 0.012_518_6, f1: undefined, f2: 7.774_69 },
             { energy: 0.012_721, f1: undefined, f2: 7.970_79 },
             { energy: 0.012_926_8, f1: undefined, f2: 8.158_05 },
             { energy: 0.013_135_9, f1: undefined, f2: 8.336_56 },
             { energy: 0.013_348_3, f1: undefined, f2: 8.518_99 },
             { energy: 0.013_564_2, f1: undefined, f2: 8.705_4 },
             { energy: 0.013_783_6, f1: undefined, f2: 8.856_95 },
             { energy: 0.014_006_6, f1: undefined, f2: 9.008_06 },
             { energy: 0.014_233_1, f1: undefined, f2: 9.161_74 },
             { energy: 0.014_463_3, f1: undefined, f2: 9.318_05 },
             { energy: 0.014_697_3, f1: undefined, f2: 9.477_02 },
             { energy: 0.014_935, f1: undefined, f2: 9.545_82 },
             { energy: 0.015_176_5, f1: undefined, f2: 9.600_17 },
             { energy: 0.015_422, f1: undefined, f2: 9.654_83 },
             { energy: 0.015_671_4, f1: undefined, f2: 9.709_81 },
             { energy: 0.015_924_9, f1: undefined, f2: 9.765_08 },
             { energy: 0.016_182_5, f1: undefined, f2: 9.820_68 },
             { energy: 0.016_444_2, f1: undefined, f2: 9.876_59 },
             { energy: 0.016_710_2, f1: undefined, f2: 9.932_83 },
             { energy: 0.016_980_5, f1: undefined, f2: 9.989_37 },
             { energy: 0.017_255_1, f1: undefined, f2: 9.992_58 },
             { energy: 0.017_534_2, f1: undefined, f2: 9.977_51 },
             { energy: 0.017_817_8, f1: undefined, f2: 9.962_45 },
             { energy: 0.018_106, f1: undefined, f2: 9.947_43 },
             { energy: 0.018_398_9, f1: undefined, f2: 9.932_43 },
             { energy: 0.018_696_4, f1: undefined, f2: 9.917_45 },
             { energy: 0.018_998_8, f1: undefined, f2: 9.902_49 },
             { energy: 0.019_306_1, f1: undefined, f2: 9.826_16 },
             { energy: 0.019_618_4, f1: undefined, f2: 9.728_46 },
             { energy: 0.019_935_7, f1: undefined, f2: 9.631_75 },
             { energy: 0.020_258_2, f1: undefined, f2: 9.535_99 },
             { energy: 0.020_585_8, f1: undefined, f2: 9.441_19 },
             { energy: 0.020_918_8, f1: undefined, f2: 9.344_34 },
             { energy: 0.021_257_1, f1: undefined, f2: 9.139_18 },
             { energy: 0.021_600_9, f1: undefined, f2: 8.938_51 },
             { energy: 0.021_950_3, f1: undefined, f2: 8.742_25 },
             { energy: 0.022_305_3, f1: undefined, f2: 8.550_31 },
             { energy: 0.022_666_1, f1: undefined, f2: 8.362_58 },
             { energy: 0.023_032_7, f1: undefined, f2: 8.178_96 },
             { energy: 0.023_405_3, f1: undefined, f2: 7.999_39 },
             { energy: 0.023_783_8, f1: undefined, f2: 7.823_75 },
             { energy: 0.024_168_5, f1: undefined, f2: 7.651_97 },
             { energy: 0.024_559_4, f1: undefined, f2: 7.483_96 },
             { energy: 0.024_956_6, f1: undefined, f2: 7.319_64 },
             { energy: 0.025_360_3, f1: undefined, f2: 7.154_99 },
             { energy: 0.025_770_5, f1: undefined, f2: 6.847_31 },
             { energy: 0.026_187_3, f1: undefined, f2: 6.552_86 },
             { energy: 0.026_610_9, f1: undefined, f2: 6.271_07 },
             { energy: 0.027_041_3, f1: undefined, f2: 6.001_4 },
             { energy: 0.027_478_6, f1: undefined, f2: 5.743_32 },
             { energy: 0.027_923_1, f1: undefined, f2: 5.496_34 },
             { energy: 0.028_374_7, f1: undefined, f2: 5.259_99 },
             { energy: 0.028_833_7, f1: undefined, f2: 5.033_79 },
             { energy: 0.029_3, f1: 10.308_2, f2: 4.817_33 },
             { energy: 0.029_773_9, f1: 10.317, f2: 4.610_18 },
             { energy: 0.030_255_5, f1: 10.322_2, f2: 4.411_93 },
             { energy: 0.030_744_9, f1: 10.326_8, f2: 4.222_2 },
             { energy: 0.031_242_1, f1: 10.337_4, f2: 4.040_64 },
             { energy: 0.031_747_5, f1: 10.372_5, f2: 3.845_76 },
             { energy: 0.032_260_9, f1: 10.373_3, f2: 3.606_61 },
             { energy: 0.032_782_7, f1: 10.341_7, f2: 3.382_32 },
             { energy: 0.033_313, f1: 10.291_9, f2: 3.171_99 },
             { energy: 0.033_851_8, f1: 10.230_4, f2: 2.974_74 },
             { energy: 0.034_399_3, f1: 10.160_2, f2: 2.789_75 },
             { energy: 0.034_955_7, f1: 10.083_2, f2: 2.616_26 },
             { energy: 0.035_521_1, f1: 10.001_1, f2: 2.453_57 },
             { energy: 0.036_095_6, f1: 9.914_76, f2: 2.300_99 },
             { energy: 0.036_679_4, f1: 9.825_28, f2: 2.157_9 },
             { energy: 0.037_272_7, f1: 9.733_35, f2: 2.023_7 },
             { energy: 0.037_875_5, f1: 9.639_64, f2: 1.897_86 },
             { energy: 0.038_488_2, f1: 9.545_22, f2: 1.779_83 },
             { energy: 0.039_110_7, f1: 9.451_97, f2: 1.667_5 },
             { energy: 0.039_743_2, f1: 9.354_72, f2: 1.557_75 },
             { energy: 0.040_386_1, f1: 9.253_9, f2: 1.455_22 },
             { energy: 0.041_039_3, f1: 9.151_04, f2: 1.359_45 },
             { energy: 0.041_703_1, f1: 9.046_51, f2: 1.269_97 },
             { energy: 0.042_377_6, f1: 8.939_86, f2: 1.186_39 },
             { energy: 0.043_063, f1: 8.829_82, f2: 1.111_33 },
             { energy: 0.043_759_5, f1: 8.722_91, f2: 1.043_71 },
             { energy: 0.044_467_3, f1: 8.617_13, f2: 0.980_199 },
             { energy: 0.045_186_5, f1: 8.511_07, f2: 0.920_558 },
             { energy: 0.045_917_4, f1: 8.403_66, f2: 0.864_544 },
             { energy: 0.046_66, f1: 8.296_1, f2: 0.815_397 },
             { energy: 0.047_414_7, f1: 8.189_57, f2: 0.769_296 },
             { energy: 0.048_181_6, f1: 8.082_53, f2: 0.725_801 },
             { energy: 0.048_960_9, f1: 7.973_65, f2: 0.684_766 },
             { energy: 0.049_752_8, f1: 7.859_98, f2: 0.647_698 },
             { energy: 0.050_557_6, f1: 7.747_94, f2: 0.621_275 },
             { energy: 0.051_375_3, f1: 7.638_02, f2: 0.595_928 },
             { energy: 0.052_206_2, f1: 7.527_17, f2: 0.571_616 },
             { energy: 0.053_050_6, f1: 7.411_2, f2: 0.549_811 },
             { energy: 0.053_908_7, f1: 7.296_33, f2: 0.538_688 },
             { energy: 0.054_780_6, f1: 7.183_07, f2: 0.527_79 },
             { energy: 0.055_666_7, f1: 7.067_22, f2: 0.519_232 },
             { energy: 0.056_567, f1: 6.951_24, f2: 0.513_192 },
             { energy: 0.057_482, f1: 6.830_22, f2: 0.510_186 },
             { energy: 0.058_411_7, f1: 6.710_55, f2: 0.512_216 },
             { energy: 0.059_356_4, f1: 6.589_78, f2: 0.514_254 },
             { energy: 0.060_316_5, f1: 6.465_03, f2: 0.516_291 },
             { energy: 0.061_292_1, f1: 6.334_1, f2: 0.518_279 },
             { energy: 0.062_283_4, f1: 6.193_62, f2: 0.520_274 },
             { energy: 0.063_290_8, f1: 6.037_82, f2: 0.526_423 },
             { energy: 0.064_314_5, f1: 5.870_86, f2: 0.537_133 },
             { energy: 0.065_354_7, f1: 5.683_01, f2: 0.548_06 },
             { energy: 0.066_411_8, f1: 5.440_05, f2: 0.558_161 },
             { energy: 0.067_485_9, f1: 5.018_81, f2: 0.654_814 },
             { energy: 0.068_577_5, f1: 4.703_97, f2: 1.056_1 },
             { energy: 0.069_686_7, f1: 4.782_36, f2: 1.537_91 },
             { energy: 0.070_813_8, f1: 4.944_58, f2: 1.801_31 },
             { energy: 0.071_959_1, f1: 5.104_09, f2: 1.852_64 },
             { energy: 0.073_123, f1: 5.286_62, f2: 1.905_43 },
             { energy: 0.074_305_7, f1: 5.179_92, f2: 1.595_32 },
             { energy: 0.075_507_6, f1: 5.007_58, f2: 1.627_4 },
             { energy: 0.076_728_9, f1: 4.875_91, f2: 1.670_37 },
             { energy: 0.077_969_9, f1: 4.736_5, f2: 1.714_46 },
             { energy: 0.079_231, f1: 4.581_38, f2: 1.796_08 },
             { energy: 0.080_512_5, f1: 4.442_35, f2: 1.895_96 },
             { energy: 0.081_814_7, f1: 4.310_84, f2: 2.001_4 },
             { energy: 0.083_138, f1: 4.178_85, f2: 2.112_71 },
             { energy: 0.084_482_7, f1: 4.040_02, f2: 2.232_7 },
             { energy: 0.085_849_1, f1: 3.904_47, f2: 2.371_66 },
             { energy: 0.087_237_7, f1: 3.773_59, f2: 2.519_27 },
             { energy: 0.088_648_7, f1: 3.645_15, f2: 2.676_06 },
             { energy: 0.090_082_5, f1: 3.518_65, f2: 2.842_62 },
             { energy: 0.091_539_5, f1: 3.394_34, f2: 3.019_54 },
             { energy: 0.093_020_1, f1: 3.272_38, f2: 3.207_47 },
             { energy: 0.094_524_6, f1: 3.153_39, f2: 3.407_1 },
             { energy: 0.096_053_5, f1: 3.037_51, f2: 3.619_15 },
             { energy: 0.097_607_1, f1: 2.925_2, f2: 3.846_35 },
             { energy: 0.099_185_8, f1: 2.821_19, f2: 4.089_96 },
             { energy: 0.100_79, f1: 2.727_18, f2: 4.349_01 },
             { energy: 0.102_42, f1: 2.645_38, f2: 4.624_45 },
             { energy: 0.104_077, f1: 2.580_33, f2: 4.917_35 },
             { energy: 0.105_76, f1: 2.539_29, f2: 5.228_79 },
             { energy: 0.107_471, f1: 2.546_28, f2: 5.559_97 },
             { energy: 0.109_209, f1: 2.605_14, f2: 5.825_89 },
             { energy: 0.110_975, f1: 2.630_93, f2: 6.065_08 },
             { energy: 0.112_77, f1: 2.638_2, f2: 6.314_09 },
             { energy: 0.114_594, f1: 2.645_29, f2: 6.573_33 },
             { energy: 0.116_448, f1: 2.656_08, f2: 6.843_21 },
             { energy: 0.118_331, f1: 2.674_57, f2: 7.124_17 },
             { energy: 0.120_245, f1: 2.705_24, f2: 7.416_67 },
             { energy: 0.122_19, f1: 2.759_92, f2: 7.721_17 },
             { energy: 0.124_166, f1: 2.836_61, f2: 7.999_45 },
             { energy: 0.126_175, f1: 2.904_59, f2: 8.273_73 },
             { energy: 0.128_215, f1: 2.970_84, f2: 8.557_42 },
             { energy: 0.130_289, f1: 3.044_74, f2: 8.850_84 },
             { energy: 0.132_397, f1: 3.129_9, f2: 9.154_31 },
             { energy: 0.134_538, f1: 3.231_25, f2: 9.468_2 },
             { energy: 0.136_714, f1: 3.356_36, f2: 9.792_85 },
             { energy: 0.138_925, f1: 3.530_26, f2: 10.128_6 },
             { energy: 0.141_172, f1: 3.736_27, f2: 10.383_9 },
             { energy: 0.143_456, f1: 3.911_59, f2: 10.620_3 },
             { energy: 0.145_776, f1: 4.068_66, f2: 10.862 },
             { energy: 0.148_134, f1: 4.224_27, f2: 11.109_3 },
             { energy: 0.150_53, f1: 4.382_23, f2: 11.362_1 },
             { energy: 0.152_964, f1: 4.546_67, f2: 11.620_8 },
             { energy: 0.155_439, f1: 4.728_56, f2: 11.885_3 },
             { energy: 0.157_953, f1: 4.914_73, f2: 12.127_9 },
             { energy: 0.160_507, f1: 5.095_57, f2: 12.373_6 },
             { energy: 0.163_103, f1: 5.277_81, f2: 12.624_2 },
             { energy: 0.165_742, f1: 5.463_92, f2: 12.879_9 },
             { energy: 0.168_422, f1: 5.655_08, f2: 13.140_8 },
             { energy: 0.171_146, f1: 5.847_92, f2: 13.407 },
             { energy: 0.173_915, f1: 6.048_07, f2: 13.694_3 },
             { energy: 0.176_727, f1: 6.271_7, f2: 13.994_9 },
             { energy: 0.179_586, f1: 6.518_12, f2: 14.302_1 },
             { energy: 0.182_491, f1: 6.789_61, f2: 14.616_1 },
             { energy: 0.185_442, f1: 7.092_57, f2: 14.937 },
             { energy: 0.188_442, f1: 7.440_74, f2: 15.264_9 },
             { energy: 0.191_489, f1: 7.889_28, f2: 15.594_3 },
             { energy: 0.194_587, f1: 8.332_63, f2: 15.740_1 },
             { energy: 0.197_734, f1: 8.730_32, f2: 15.887_3 },
             { energy: 0.200_932, f1: 9.103_81, f2: 16.035_9 },
             { energy: 0.204_182, f1: 9.474_23, f2: 16.185_8 },
             { energy: 0.207_485, f1: 9.849_36, f2: 16.337_1 },
             { energy: 0.210_84, f1: 10.238_7, f2: 16.489_9 },
             { energy: 0.214_251, f1: 10.696_5, f2: 16.619_5 },
             { energy: 0.217_716, f1: 11.117_5, f2: 16.662_1 },
             { energy: 0.221_237, f1: 11.497_2, f2: 16.704_7 },
             { energy: 0.224_816, f1: 11.863, f2: 16.747_5 },
             { energy: 0.228_452, f1: 12.220_5, f2: 16.790_4 },
             { energy: 0.232_147, f1: 12.573_2, f2: 16.833_4 },
             { energy: 0.235_902, f1: 12.923_8, f2: 16.876_5 },
             { energy: 0.239_717, f1: 13.275_1, f2: 16.919_7 },
             { energy: 0.243_595, f1: 13.630_5, f2: 16.963 },
             { energy: 0.247_535, f1: 13.999_7, f2: 17.004_1 },
             { energy: 0.251_538, f1: 14.366_3, f2: 17.020_2 },
             { energy: 0.255_607, f1: 14.728_6, f2: 17.036_3 },
             { energy: 0.259_741, f1: 15.092_3, f2: 17.052_3 },
             { energy: 0.263_942, f1: 15.462_7, f2: 17.068_5 },
             { energy: 0.268_211, f1: 15.846_5, f2: 17.084_8 },
             { energy: 0.272_549, f1: 16.257_6, f2: 17.100_8 },
             { energy: 0.276_957, f1: 16.733_7, f2: 17.061_5 },
             { energy: 0.281_437, f1: 17.177_8, f2: 16.953 },
             { energy: 0.285_989, f1: 17.574_6, f2: 16.801_4 },
             { energy: 0.290_615, f1: 17.935_2, f2: 16.645_3 },
             { energy: 0.295_315, f1: 18.268_6, f2: 16.490_8 },
             { energy: 0.300_092, f1: 18.584_2, f2: 16.337_4 },
             { energy: 0.304_945, f1: 18.885_2, f2: 16.185_3 },
             { energy: 0.309_878, f1: 19.173_7, f2: 16.034_7 },
             { energy: 0.314_89, f1: 19.451_7, f2: 15.885_7 },
             { energy: 0.319_983, f1: 19.720_8, f2: 15.738_1 },
             { energy: 0.325_158, f1: 19.981_5, f2: 15.591_5 },
             { energy: 0.330_418, f1: 20.234_9, f2: 15.446_6 },
             { energy: 0.335_762, f1: 20.482_2, f2: 15.303 },
             { energy: 0.341_192, f1: 20.723_7, f2: 15.160_6 },
             { energy: 0.346_711, f1: 20.960_3, f2: 15.019_8 },
             { energy: 0.352_319, f1: 21.193, f2: 14.880_3 },
             { energy: 0.358_017, f1: 21.422_2, f2: 14.741_9 },
             { energy: 0.363_808, f1: 21.648_6, f2: 14.604_6 },
             { energy: 0.369_692, f1: 21.873, f2: 14.468_7 },
             { energy: 0.375_672, f1: 22.097_7, f2: 14.334_5 },
             { energy: 0.381_748, f1: 22.324_9, f2: 14.200_9 },
             { energy: 0.387_922, f1: 22.559_1, f2: 14.065_3 },
             { energy: 0.394_197, f1: 22.808_6, f2: 13.923_8 },
             { energy: 0.400_573, f1: 23.056_7, f2: 13.741_6 },
             { energy: 0.407_052, f1: 23.274_1, f2: 13.545_5 },
             { energy: 0.413_635, f1: 23.473_6, f2: 13.352_7 },
             { energy: 0.420_326, f1: 23.661_2, f2: 13.162 },
             { energy: 0.427_124, f1: 23.839_1, f2: 12.974 },
             { energy: 0.434_032, f1: 24.009_2, f2: 12.788_7 },
             { energy: 0.441_052, f1: 24.173, f2: 12.606_1 },
             { energy: 0.448_186, f1: 24.335_1, f2: 12.425 },
             { energy: 0.455_435, f1: 24.490_8, f2: 12.240_7 },
             { energy: 0.462_802, f1: 24.639_3, f2: 12.054_5 },
             { energy: 0.470_287, f1: 24.778_8, f2: 11.868_7 },
             { energy: 0.477_894, f1: 24.910_2, f2: 11.685_7 },
             { energy: 0.485_623, f1: 25.035_6, f2: 11.505_9 },
             { energy: 0.493_478, f1: 25.156, f2: 11.328_9 },
             { energy: 0.501_459, f1: 25.271_9, f2: 11.154_4 },
             { energy: 0.509_57, f1: 25.384, f2: 10.983 },
             { energy: 0.517_812, f1: 25.494_6, f2: 10.813_4 },
             { energy: 0.526_187, f1: 25.602, f2: 10.643_7 },
             { energy: 0.534_698, f1: 25.705_7, f2: 10.473 },
             { energy: 0.543_346, f1: 25.803_8, f2: 10.303_3 },
             { energy: 0.552_134, f1: 25.900_4, f2: 10.136_6 },
             { energy: 0.561_065, f1: 25.994_3, f2: 9.963_28 },
             { energy: 0.570_139, f1: 26.077_8, f2: 9.788_87 },
             { energy: 0.579_361, f1: 26.153_5, f2: 9.619_83 },
             { energy: 0.588_732, f1: 26.224_7, f2: 9.454_55 },
             { energy: 0.598_254, f1: 26.292_7, f2: 9.292_63 },
             { energy: 0.607_93, f1: 26.357_9, f2: 9.133_51 },
             { energy: 0.617_763, f1: 26.421_1, f2: 8.977_13 },
             { energy: 0.627_755, f1: 26.485_4, f2: 8.822_8 },
             { energy: 0.637_908, f1: 26.549_6, f2: 8.663_45 },
             { energy: 0.648_226, f1: 26.608_8, f2: 8.495_74 },
             { energy: 0.658_711, f1: 26.652_3, f2: 8.323_99 },
             { energy: 0.669_365, f1: 26.679_4, f2: 8.155_81 },
             { energy: 0.680_191, f1: 26.693, f2: 8.008_84 },
             { energy: 0.691_193, f1: 26.712_4, f2: 7.878_1 },
             { energy: 0.702_372, f1: 26.748_1, f2: 7.752_5 },
             { energy: 0.713_733, f1: 26.789, f2: 7.614_3 },
             { energy: 0.725_277, f1: 26.819_4, f2: 7.468_64 },
             { energy: 0.737_008, f1: 26.842_5, f2: 7.325_83 },
             { energy: 0.748_928, f1: 26.860_8, f2: 7.185_74 },
             { energy: 0.761_042, f1: 26.875_8, f2: 7.048_23 },
             { energy: 0.773_351, f1: 26.888_6, f2: 6.912_33 },
             { energy: 0.785_859, f1: 26.898_5, f2: 6.775_44 },
             { energy: 0.798_57, f1: 26.901_7, f2: 6.638_33 },
             { energy: 0.811_486, f1: 26.899_2, f2: 6.503_9 },
             { energy: 0.824_611, f1: 26.892, f2: 6.372_22 },
             { energy: 0.837_949, f1: 26.880_2, f2: 6.243_21 },
             { energy: 0.851_502, f1: 26.864_2, f2: 6.117_17 },
             { energy: 0.865_274, f1: 26.844_3, f2: 5.993_98 },
             { energy: 0.879_269, f1: 26.820_8, f2: 5.873_52 },
             { energy: 0.893_491, f1: 26.793_6, f2: 5.755_39 },
             { energy: 0.907_943, f1: 26.762_7, f2: 5.639_67 },
             { energy: 0.922_628, f1: 26.728_4, f2: 5.526_34 },
             { energy: 0.937_551, f1: 26.690_1, f2: 5.414_02 },
             { energy: 0.952_715, f1: 26.647_4, f2: 5.303_67 },
             { energy: 0.968_124, f1: 26.6, f2: 5.195_29 },
             { energy: 0.983_783, f1: 26.548_1, f2: 5.089_21 },
             { energy: 0.999_695, f1: 26.492_1, f2: 4.984_81 },
             { energy: 1.015_86, f1: 26.432_3, f2: 4.882_04 },
             { energy: 1.032_29, f1: 26.366_2, f2: 4.777_3 },
             { energy: 1.048_99, f1: 26.292_7, f2: 4.673_93 },
             { energy: 1.065_96, f1: 26.211, f2: 4.571_91 },
             { energy: 1.083_2, f1: 26.121_2, f2: 4.472_06 },
             { energy: 1.100_72, f1: 26.023, f2: 4.374_4 },
             { energy: 1.118_52, f1: 25.916, f2: 4.278_9 },
             { energy: 1.136_61, f1: 25.799_5, f2: 4.185_57 },
             { energy: 1.155, f1: 25.672_7, f2: 4.094_23 },
             { energy: 1.173_68, f1: 25.534_5, f2: 4.004_83 },
             { energy: 1.192_66, f1: 25.383_6, f2: 3.917_47 },
             { energy: 1.211_95, f1: 25.218_6, f2: 3.831_98 },
             { energy: 1.231_55, f1: 25.037_7, f2: 3.748_29 },
             { energy: 1.251_47, f1: 24.838_3, f2: 3.666_04 },
             { energy: 1.271_72, f1: 24.617_4, f2: 3.585_18 },
             { energy: 1.292_29, f1: 24.370_7, f2: 3.505_59 },
             { energy: 1.313_19, f1: 24.093_5, f2: 3.427_86 },
             { energy: 1.334_43, f1: 23.779_7, f2: 3.351_81 },
             { energy: 1.356_01, f1: 23.420_5, f2: 3.277_36 },
             { energy: 1.377_94, f1: 23.003_9, f2: 3.204_7 },
             { energy: 1.400_23, f1: 22.512_5, f2: 3.133_64 },
             { energy: 1.422_88, f1: 21.919_4, f2: 3.064_14 },
             { energy: 1.445_89, f1: 21.180_6, f2: 2.996_14 },
             { energy: 1.469_28, f1: 20.215_8, f2: 2.931_08 },
             { energy: 1.493_04, f1: 18.858_5, f2: 2.869_62 },
             { energy: 1.517_19, f1: 16.652_8, f2: 2.818_72 },
             { energy: 1.541_73, f1: 10.896_3, f2: 2.770_01 },
             { energy: 1.549_8, f1: -8.009_39, f2: 2.754_34 },
             { energy: 1.55, f1: -8.001_55, f2: 16.356_4 },
             { energy: 1.566_67, f1: 14.390_6, f2: 16.134_4 },
             { energy: 1.592_01, f1: 18.575_1, f2: 15.806_9 },
             { energy: 1.617_76, f1: 20.765_3, f2: 15.486 },
             { energy: 1.643_92, f1: 22.247_7, f2: 15.171_7 },
             { energy: 1.670_51, f1: 23.345_4, f2: 14.863_6 },
             { energy: 1.697_53, f1: 24.180_6, f2: 14.561_9 },
             { energy: 1.724_99, f1: 24.791_5, f2: 14.266_4 },
             { energy: 1.752_89, f1: 25.115_1, f2: 13.976_6 },
             { energy: 1.781_24, f1: 23.415_6, f2: 13.692_7 },
             { energy: 1.781_9, f1: 22.089_3, f2: 13.686_2 },
             { energy: 1.782_1, f1: 22.094_9, f2: 15.761_7 },
             { energy: 1.810_05, f1: 26.442_1, f2: 15.419_9 },
             { energy: 1.839_32, f1: 27.462_9, f2: 15.075_3 },
             { energy: 1.869_07, f1: 28.226_2, f2: 14.738_3 },
             { energy: 1.899_3, f1: 28.860_9, f2: 14.408_7 },
             { energy: 1.930_02, f1: 29.411_2, f2: 14.086_5 },
             { energy: 1.961_24, f1: 29.899_7, f2: 13.771_6 },
             { energy: 1.992_96, f1: 30.336_7, f2: 13.463_7 },
             { energy: 2.025_2, f1: 30.741_7, f2: 13.170_5 },
             { energy: 2.057_95, f1: 31.115_5, f2: 12.866_5 },
             { energy: 2.091_24, f1: 31.455_1, f2: 12.567_2 },
             { energy: 2.125_06, f1: 31.765_3, f2: 12.272_8 },
             { energy: 2.159_43, f1: 32.050_7, f2: 11.983_9 },
             { energy: 2.194_36, f1: 32.313_8, f2: 11.699_5 },
             { energy: 2.229_85, f1: 32.556_5, f2: 11.420_5 },
             { energy: 2.265_92, f1: 32.781_1, f2: 11.146_9 },
             { energy: 2.302_57, f1: 32.989_1, f2: 10.878_3 },
             { energy: 2.339_81, f1: 33.181_8, f2: 10.614_7 },
             { energy: 2.377_66, f1: 33.360_1, f2: 10.356_1 },
             { energy: 2.416_11, f1: 33.525_3, f2: 10.102_7 },
             { energy: 2.455_19, f1: 33.678_3, f2: 9.854_22 },
             { energy: 2.494_9, f1: 33.819_9, f2: 9.610_99 },
             { energy: 2.535_26, f1: 33.951_2, f2: 9.372_99 },
             { energy: 2.576_26, f1: 34.072_7, f2: 9.139_42 },
             { energy: 2.617_93, f1: 34.184_8, f2: 8.910_91 },
             { energy: 2.660_27, f1: 34.288_4, f2: 8.687_62 },
             { energy: 2.703_3, f1: 34.384_4, f2: 8.468_94 },
             { energy: 2.747_03, f1: 34.472_4, f2: 8.254_7 },
             { energy: 2.791_46, f1: 34.553_6, f2: 8.045_6 },
             { energy: 2.836_61, f1: 34.627_9, f2: 7.840_66 },
             { energy: 2.882_49, f1: 34.696_1, f2: 7.640_96 },
             { energy: 2.929_11, f1: 34.758_8, f2: 7.445_2 },
             { energy: 2.976_48, f1: 34.815_6, f2: 7.253_83 },
             { energy: 3.024_63, f1: 34.867_4, f2: 7.067_23 },
             { energy: 3.073_55, f1: 34.914_3, f2: 6.884_67 },
             { energy: 3.123_26, f1: 34.956_6, f2: 6.706_39 },
             { energy: 3.173_78, f1: 34.994_5, f2: 6.532_29 },
             { energy: 3.225_11, f1: 35.028_6, f2: 6.362_74 },
             { energy: 3.277_27, f1: 35.059, f2: 6.196_64 },
             { energy: 3.330_28, f1: 35.085_6, f2: 6.034_6 },
             { energy: 3.384_15, f1: 35.108_8, f2: 5.876_52 },
             { energy: 3.438_88, f1: 35.128_9, f2: 5.722_25 },
             { energy: 3.494_5, f1: 35.146_1, f2: 5.571_63 },
             { energy: 3.551_02, f1: 35.160_3, f2: 5.424_76 },
             { energy: 3.608_46, f1: 35.172, f2: 5.281_46 },
             { energy: 3.666_82, f1: 35.181_2, f2: 5.141_65 },
             { energy: 3.726_13, f1: 35.188, f2: 5.005_38 },
             { energy: 3.786_4, f1: 35.192_7, f2: 4.872_4 },
             { energy: 3.847_64, f1: 35.195_3, f2: 4.742_75 },
             { energy: 3.909_87, f1: 35.195_9, f2: 4.616_36 },
             { energy: 3.973_11, f1: 35.194_8, f2: 4.493_13 },
             { energy: 4.037_38, f1: 35.191_9, f2: 4.373_01 },
             { energy: 4.102_68, f1: 35.187_4, f2: 4.255_94 },
             { energy: 4.169_03, f1: 35.181_5, f2: 4.141_84 },
             { energy: 4.236_46, f1: 35.174_1, f2: 4.030_63 },
             { energy: 4.304_98, f1: 35.165_4, f2: 3.922_31 },
             { energy: 4.374_62, f1: 35.155_5, f2: 3.816_66 },
             { energy: 4.445_37, f1: 35.144_4, f2: 3.713_8 },
             { energy: 4.517_27, f1: 35.132_3, f2: 3.613_61 },
             { energy: 4.590_33, f1: 35.119_1, f2: 3.515_93 },
             { energy: 4.664_58, f1: 35.104_9, f2: 3.420_88 },
             { energy: 4.740_03, f1: 35.09, f2: 3.328_25 },
             { energy: 4.816_69, f1: 35.074_2, f2: 3.238 },
             { energy: 4.894_6, f1: 35.057_6, f2: 3.150_11 },
             { energy: 4.973_77, f1: 35.040_2, f2: 3.064_55 },
             { energy: 5.054_21, f1: 35.022_2, f2: 2.981_28 },
             { energy: 5.135_96, f1: 35.003_7, f2: 2.900_15 },
             { energy: 5.219_03, f1: 34.984_5, f2: 2.821_1 },
             { energy: 5.303_44, f1: 34.964_7, f2: 2.744_16 },
             { energy: 5.389_22, f1: 34.944_4, f2: 2.669_31 },
             { energy: 5.476_39, f1: 34.923_7, f2: 2.596_42 },
             { energy: 5.564_97, f1: 34.902_5, f2: 2.525_5 },
             { energy: 5.654_98, f1: 34.880_9, f2: 2.456_41 },
             { energy: 5.746_44, f1: 34.858_9, f2: 2.389_18 },
             { energy: 5.839_39, f1: 34.836_6, f2: 2.323_73 },
             { energy: 5.933_83, f1: 34.813_9, f2: 2.259_99 },
             { energy: 6.029_81, f1: 34.790_8, f2: 2.197_93 },
             { energy: 6.127_33, f1: 34.767_3, f2: 2.137_64 },
             { energy: 6.226_44, f1: 34.743_7, f2: 2.078_91 },
             { energy: 6.327_15, f1: 34.719_7, f2: 2.021_76 },
             { energy: 6.429_48, f1: 34.695_4, f2: 1.966_08 },
             { energy: 6.533_48, f1: 34.670_8, f2: 1.912_04 },
             { energy: 6.639_15, f1: 34.646, f2: 1.859_31 },
             { energy: 6.746_54, f1: 34.620_9, f2: 1.808_08 },
             { energy: 6.855_65, f1: 34.595_5, f2: 1.758_23 },
             { energy: 6.966_54, f1: 34.569_9, f2: 1.709_68 },
             { energy: 7.079_22, f1: 34.543_9, f2: 1.662_45 },
             { energy: 7.193_72, f1: 34.517_7, f2: 1.616_55 },
             { energy: 7.310_07, f1: 34.491_1, f2: 1.571_78 },
             { energy: 7.428_31, f1: 34.464_2, f2: 1.528_32 },
             { energy: 7.548_45, f1: 34.437, f2: 1.486_03 },
             { energy: 7.670_54, f1: 34.409_4, f2: 1.444_82 },
             { energy: 7.794_61, f1: 34.381_5, f2: 1.404_79 },
             { energy: 7.920_68, f1: 34.353_1, f2: 1.365_82 },
             { energy: 8.048_79, f1: 34.324_3, f2: 1.327_9 },
             { energy: 8.178_98, f1: 34.295, f2: 1.291_01 },
             { energy: 8.311_26, f1: 34.265_2, f2: 1.255_13 },
             { energy: 8.445_69, f1: 34.234_8, f2: 1.220_22 },
             { energy: 8.582_29, f1: 34.203_7, f2: 1.186_25 },
             { energy: 8.721_11, f1: 34.172, f2: 1.153_22 },
             { energy: 8.862_16, f1: 34.139_5, f2: 1.121_07 },
             { energy: 9.005_5, f1: 34.106_1, f2: 1.089_8 },
             { energy: 9.151_16, f1: 34.071_8, f2: 1.059_37 },
             { energy: 9.299_17, f1: 34.036_4, f2: 1.029_78 },
             { energy: 9.449_58, f1: 33.999_8, f2: 1.000_99 },
             { energy: 9.602_42, f1: 33.962, f2: 0.972_971 },
             { energy: 9.757_73, f1: 33.922_6, f2: 0.945_717 },
             { energy: 9.915_55, f1: 33.881_5, f2: 0.919_21 },
             { energy: 10.075_9, f1: 33.838_5, f2: 0.893_416 },
             { energy: 10.238_9, f1: 33.793_2, f2: 0.868_322 },
             { energy: 10.404_5, f1: 33.745_5, f2: 0.843_909 },
             { energy: 10.572_8, f1: 33.694_8, f2: 0.820_157 },
             { energy: 10.743_8, f1: 33.640_8, f2: 0.797_05 },
             { energy: 10.917_6, f1: 33.582_7, f2: 0.774_568 },
             { energy: 11.094_2, f1: 33.52, f2: 0.752_695 },
             { energy: 11.273_6, f1: 33.451_6, f2: 0.731_414 },
             { energy: 11.455_9, f1: 33.376_3, f2: 0.710_71 },
             { energy: 11.641_2, f1: 33.292_5, f2: 0.690_565 },
             { energy: 11.829_5, f1: 33.198_1, f2: 0.670_965 },
             { energy: 12.020_8, f1: 33.089_9, f2: 0.651_895 },
             { energy: 12.215_3, f1: 32.963_5, f2: 0.633_339 },
             { energy: 12.412_8, f1: 32.811_6, f2: 0.615_284 },
             { energy: 12.613_6, f1: 32.622_5, f2: 0.597_716 },
             { energy: 12.817_6, f1: 32.374, f2: 0.580_621 },
             { energy: 13.025, f1: 32.017_1, f2: 0.563_987 },
             { energy: 13.235_6, f1: 31.402, f2: 0.547_8 },
             { energy: 13.449_7, f1: 29.052_5, f2: 0.532_049 },
             { energy: 13.473_6, f1: 23.252_9, f2: 0.530_333 },
             { energy: 13.473_8, f1: 23.253_2, f2: 3.862_04 },
             { energy: 13.667_2, f1: 31.364_2, f2: 3.778_68 },
             { energy: 13.888_3, f1: 32.227_9, f2: 3.687 },
             { energy: 14.112_9, f1: 32.727_8, f2: 3.596_94 },
             { energy: 14.341_2, f1: 33.082_6, f2: 3.508_52 },
             { energy: 14.573_1, f1: 33.357_5, f2: 3.421_73 },
             { energy: 14.808_9, f1: 33.581_1, f2: 3.336_58 },
             { energy: 15.048_4, f1: 33.768_8, f2: 3.253_06 },
             { energy: 15.291_8, f1: 33.929_7, f2: 3.171_18 },
             { energy: 15.539_1, f1: 34.069_7, f2: 3.090_92 },
             { energy: 15.790_4, f1: 34.192_9, f2: 3.012_29 },
             { energy: 16.045_8, f1: 34.302_3, f2: 2.935_28 },
             { energy: 16.305_4, f1: 34.400_1, f2: 2.859_86 },
             { energy: 16.569_1, f1: 34.488, f2: 2.786_04 },
             { energy: 16.837_1, f1: 34.567_2, f2: 2.713_79 },
             { energy: 17.109_4, f1: 34.639, f2: 2.643_11 },
             { energy: 17.386_1, f1: 34.704_2, f2: 2.573_97 },
             { energy: 17.667_4, f1: 34.763_5, f2: 2.506_36 },
             { energy: 17.953_1, f1: 34.817_5, f2: 2.440_26 },
             { energy: 18.243_5, f1: 34.866_8, f2: 2.375_65 },
             { energy: 18.538_6, f1: 34.911_8, f2: 2.312_51 },
             { energy: 18.838_4, f1: 34.952_9, f2: 2.250_83 },
             { energy: 19.143_1, f1: 34.990_5, f2: 2.190_58 },
             { energy: 19.452_7, f1: 35.024_8, f2: 2.131_74 },
             { energy: 19.767_4, f1: 35.056_2, f2: 2.074_29 },
             { energy: 20.087_1, f1: 35.084_8, f2: 2.018_2 },
             { energy: 20.412, f1: 35.110_9, f2: 1.963_45 },
             { energy: 20.742_1, f1: 35.134_7, f2: 1.910_03 },
             { energy: 21.077_6, f1: 35.156_3, f2: 1.857_91 },
             { energy: 21.418_5, f1: 35.175_9, f2: 1.807_06 },
             { energy: 21.765, f1: 35.193_7, f2: 1.757_46 },
             { energy: 22.117, f1: 35.209_8, f2: 1.709_09 },
             { energy: 22.474_7, f1: 35.224_3, f2: 1.661_92 },
             { energy: 22.838_2, f1: 35.237_3, f2: 1.615_94 },
             { energy: 23.207_6, f1: 35.248_9, f2: 1.571_11 },
             { energy: 23.583, f1: 35.259_3, f2: 1.527_42 },
             { energy: 23.964_4, f1: 35.268_4, f2: 1.484_84 },
             { energy: 24.352, f1: 35.276_5, f2: 1.443_35 },
             { energy: 24.745_9, f1: 35.283_5, f2: 1.402_93 },
             { energy: 25.146_2, f1: 35.289_6, f2: 1.363_55 },
             { energy: 25.552_9, f1: 35.294_7, f2: 1.325_2 },
             { energy: 25.966_2, f1: 35.299, f2: 1.287_84 },
             { energy: 26.386_1, f1: 35.302_6, f2: 1.251_46 },
             { energy: 26.812_9, f1: 35.305_4, f2: 1.216_04 },
             { energy: 27.246_6, f1: 35.307_5, f2: 1.181_55 },
             { energy: 27.687_3, f1: 35.309, f2: 1.147_97 },
             { energy: 28.135_1, f1: 35.31, f2: 1.115_29 },
             { energy: 28.590_2, f1: 35.310_4, f2: 1.083_48 },
             { energy: 29.052_6, f1: 35.310_5, f2: 1.052_52 },
             { energy: 29.522_5, f1: 35.313, f2: 1.022_39 },
             { energy: 30.0, f1: 35.299_9, f2: 0.993_072 },
        ]
    },
    neutron_scattering: {
        b_c: { value: 6.79, uncertainty: 0.02},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 5.8, uncertainty: 0.3},
        bound_incoherent_scattering_xs: { value: 0.1, uncertainty: 0.9},
        total_bound_scattering_xs: { value: 5.9, uncertainty: 0.9},
        absorption_xs: { value: 6.9, uncertainty: 0.2},
    },
    isotopes: [
        { 
            mass_number: 67,
            mass: { value: 66.964_79, uncertainty: 0.000_54},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 68,
            mass: { value: 67.958_25, uncertainty: 0.000_58},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 69,
            mass: { value: 68.950_18, uncertainty: 0.000_34},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 70,
            mass: { value: 69.944_62, uncertainty: 0.000_39},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 71,
            mass: { value: 70.939_25, uncertainty: 0.000_32},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 72,
            mass: { value: 71.936_5, uncertainty: 0.002_8},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 73,
            mass: { value: 72.931_79, uncertainty: 0.000_14},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 74,
            mass: { value: 73.929_891, uncertainty: 0.000_016},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 75,
            mass: { value: 74.925_776, uncertainty: 0.000_015},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 76,
            mass: { value: 75.924_542, uncertainty: 0.000_010},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 77,
            mass: { value: 76.921_38, uncertainty: 0.000_03},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 78,
            mass: { value: 77.921_146, uncertainty: 0.000_004},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 79,
            mass: { value: 78.918_337_6, uncertainty: 0.000_002_0},
            abundance: { value: 50.69, uncertainty: 0.07},
            neutron_scattering: {
                    b_c: { value: 6.79, uncertainty: 0.07},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 5.81, uncertainty: 0.02},
                    bound_incoherent_scattering_xs: { value: 0.15, uncertainty: 0.06},
                    total_bound_scattering_xs: { value: 5.96, uncertainty: 0.13},
                    absorption_xs: { value: 11.0, uncertainty: 0.7},
                },
        },
        { 
            mass_number: 80,
            mass: { value: 79.918_53, uncertainty: 0.000_20},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 81,
            mass: { value: 80.916_291, uncertainty: 0.000_003},
            abundance: { value: 49.31, uncertainty: 0.07},
            neutron_scattering: {
                    b_c: { value: 6.78, uncertainty: 0.07},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 5.79, uncertainty: 0.12},
                    bound_incoherent_scattering_xs: { value: 0.05, uncertainty: 0.02},
                    total_bound_scattering_xs: { value: 5.84, uncertainty: 0.12},
                    absorption_xs: { value: 2.7, uncertainty: 0.2},
                },
        },
        { 
            mass_number: 82,
            mass: { value: 81.916_805, uncertainty: 0.000_003},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 83,
            mass: { value: 82.915_18, uncertainty: 0.000_05},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 84,
            mass: { value: 83.916_504, uncertainty: 0.000_027},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 85,
            mass: { value: 84.915_608, uncertainty: 0.000_021},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 86,
            mass: { value: 85.918_797, uncertainty: 0.000_012},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 87,
            mass: { value: 86.920_711, uncertainty: 0.000_019},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 88,
            mass: { value: 87.924_07, uncertainty: 0.000_40},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 89,
            mass: { value: 88.926_39, uncertainty: 0.000_60},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 90,
            mass: { value: 89.930_63, uncertainty: 0.000_80},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 91,
            mass: { value: 90.933_97, uncertainty: 0.000_80},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 92,
            mass: { value: 91.939_26, uncertainty: 0.000_50},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 93,
            mass: { value: 92.943_1, uncertainty: 0.003_2},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 94,
            mass: { value: 93.948_68, uncertainty: 0.000_43},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Br};