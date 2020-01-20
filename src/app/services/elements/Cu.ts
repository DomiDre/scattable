const Cu = {
    atomic_number: 29,
    name: 'Copper',
    symbol: 'Cu',
    mass: 63.546,
    common_ions: [2],
    uncommon_ions: [-2, 1, 3, 4],
    xray_scattering: [
         { energy: 0.01, f1: undefined, f2: 1.300_88 },
         { energy: 0.010_161_7, f1: undefined, f2: 1.333_74 },
         { energy: 0.010_326_1, f1: undefined, f2: 1.367_43 },
         { energy: 0.010_493_1, f1: undefined, f2: 1.401_97 },
         { energy: 0.010_662_8, f1: undefined, f2: 1.437_38 },
         { energy: 0.010_835_3, f1: undefined, f2: 1.473_69 },
         { energy: 0.011_010_6, f1: undefined, f2: 1.510_91 },
         { energy: 0.011_188_6, f1: undefined, f2: 1.549_08 },
         { energy: 0.011_369_6, f1: undefined, f2: 1.588_21 },
         { energy: 0.011_553_5, f1: undefined, f2: 1.628_33 },
         { energy: 0.011_740_4, f1: undefined, f2: 1.669_46 },
         { energy: 0.011_930_3, f1: undefined, f2: 1.711_63 },
         { energy: 0.012_123_2, f1: undefined, f2: 1.754_87 },
         { energy: 0.012_319_3, f1: undefined, f2: 1.799_2 },
         { energy: 0.012_518_6, f1: undefined, f2: 1.844_64 },
         { energy: 0.012_721, f1: undefined, f2: 1.891_24 },
         { energy: 0.012_926_8, f1: undefined, f2: 1.939_01 },
         { energy: 0.013_135_9, f1: undefined, f2: 1.987_99 },
         { energy: 0.013_348_3, f1: undefined, f2: 2.038_21 },
         { energy: 0.013_564_2, f1: undefined, f2: 2.089_7 },
         { energy: 0.013_783_6, f1: undefined, f2: 2.142_48 },
         { energy: 0.014_006_6, f1: undefined, f2: 2.196_6 },
         { energy: 0.014_233_1, f1: undefined, f2: 2.252_09 },
         { energy: 0.014_463_3, f1: undefined, f2: 2.307_79 },
         { energy: 0.014_697_3, f1: undefined, f2: 2.363_82 },
         { energy: 0.014_935, f1: undefined, f2: 2.421_21 },
         { energy: 0.015_176_5, f1: undefined, f2: 2.479_99 },
         { energy: 0.015_422, f1: undefined, f2: 2.540_19 },
         { energy: 0.015_671_4, f1: undefined, f2: 2.598_24 },
         { energy: 0.015_924_9, f1: undefined, f2: 2.655_2 },
         { energy: 0.016_182_5, f1: undefined, f2: 2.713_41 },
         { energy: 0.016_444_2, f1: undefined, f2: 2.772_89 },
         { energy: 0.016_710_2, f1: undefined, f2: 2.833_68 },
         { energy: 0.016_980_5, f1: undefined, f2: 2.895_8 },
         { energy: 0.017_255_1, f1: undefined, f2: 2.939_18 },
         { energy: 0.017_534_2, f1: undefined, f2: 2.974_86 },
         { energy: 0.017_817_8, f1: undefined, f2: 3.010_98 },
         { energy: 0.018_106, f1: undefined, f2: 3.047_54 },
         { energy: 0.018_398_9, f1: undefined, f2: 3.084_54 },
         { energy: 0.018_696_4, f1: undefined, f2: 3.105_71 },
         { energy: 0.018_998_8, f1: undefined, f2: 3.126_96 },
         { energy: 0.019_306_1, f1: undefined, f2: 3.148_35 },
         { energy: 0.019_618_4, f1: undefined, f2: 3.169_89 },
         { energy: 0.019_935_7, f1: undefined, f2: 3.191_58 },
         { energy: 0.020_258_2, f1: undefined, f2: 3.200_66 },
         { energy: 0.020_585_8, f1: undefined, f2: 3.196_41 },
         { energy: 0.020_918_8, f1: undefined, f2: 3.192_18 },
         { energy: 0.021_257_1, f1: undefined, f2: 3.187_94 },
         { energy: 0.021_600_9, f1: undefined, f2: 3.183_72 },
         { energy: 0.021_950_3, f1: undefined, f2: 3.204_29 },
         { energy: 0.022_305_3, f1: undefined, f2: 3.233_65 },
         { energy: 0.022_666_1, f1: undefined, f2: 3.263_27 },
         { energy: 0.023_032_7, f1: undefined, f2: 3.293_17 },
         { energy: 0.023_405_3, f1: undefined, f2: 3.330_41 },
         { energy: 0.023_783_8, f1: undefined, f2: 3.396_69 },
         { energy: 0.024_168_5, f1: undefined, f2: 3.464_28 },
         { energy: 0.024_559_4, f1: undefined, f2: 3.533_22 },
         { energy: 0.024_956_6, f1: undefined, f2: 3.603_53 },
         { energy: 0.025_360_3, f1: undefined, f2: 3.675_24 },
         { energy: 0.025_770_5, f1: undefined, f2: 3.775_78 },
         { energy: 0.026_187_3, f1: undefined, f2: 3.892_27 },
         { energy: 0.026_610_9, f1: undefined, f2: 4.012_36 },
         { energy: 0.027_041_3, f1: undefined, f2: 4.136_15 },
         { energy: 0.027_478_6, f1: undefined, f2: 4.263_76 },
         { energy: 0.027_923_1, f1: undefined, f2: 4.395_3 },
         { energy: 0.028_374_7, f1: undefined, f2: 4.530_91 },
         { energy: 0.028_833_7, f1: undefined, f2: 4.621_95 },
         { energy: 0.029_3, f1: 1.552_5, f2: 4.708 },
         { energy: 0.029_773_9, f1: 1.650_95, f2: 4.795_65 },
         { energy: 0.030_255_5, f1: 1.757_82, f2: 4.884_94 },
         { energy: 0.030_744_9, f1: 1.884_91, f2: 4.975_88 },
         { energy: 0.031_242_1, f1: 2.053_97, f2: 5.066_06 },
         { energy: 0.031_747_5, f1: 2.221_43, f2: 5.057_8 },
         { energy: 0.032_260_9, f1: 2.353_11, f2: 5.049_55 },
         { energy: 0.032_782_7, f1: 2.476_07, f2: 5.041_32 },
         { energy: 0.033_313, f1: 2.608_41, f2: 5.030_52 },
         { energy: 0.033_851_8, f1: 2.723_25, f2: 4.962_9 },
         { energy: 0.034_399_3, f1: 2.802_97, f2: 4.896_18 },
         { energy: 0.034_955_7, f1: 2.860_36, f2: 4.830_37 },
         { energy: 0.035_521_1, f1: 2.898_11, f2: 4.765_44 },
         { energy: 0.036_095_6, f1: 2.914_57, f2: 4.701_38 },
         { energy: 0.036_679_4, f1: 2.901_41, f2: 4.638_18 },
         { energy: 0.037_272_7, f1: 2.842_72, f2: 4.623_31 },
         { energy: 0.037_875_5, f1: 2.820_23, f2: 4.646_2 },
         { energy: 0.038_488_2, f1: 2.810_08, f2: 4.669_19 },
         { energy: 0.039_110_7, f1: 2.803_57, f2: 4.692_31 },
         { energy: 0.039_743_2, f1: 2.796_5, f2: 4.715_53 },
         { energy: 0.040_386_1, f1: 2.784_88, f2: 4.738_88 },
         { energy: 0.041_039_3, f1: 2.758_09, f2: 4.762_33 },
         { energy: 0.041_703_1, f1: 2.716_01, f2: 4.825_18 },
         { energy: 0.042_377_6, f1: 2.700_61, f2: 4.903_95 },
         { energy: 0.043_063, f1: 2.699_52, f2: 4.984 },
         { energy: 0.043_759_5, f1: 2.706_14, f2: 5.065_36 },
         { energy: 0.044_467_3, f1: 2.719_23, f2: 5.148_05 },
         { energy: 0.045_186_5, f1: 2.738_22, f2: 5.232_09 },
         { energy: 0.045_917_4, f1: 2.763_19, f2: 5.317_49 },
         { energy: 0.046_66, f1: 2.796_4, f2: 5.404_3 },
         { energy: 0.047_414_7, f1: 2.840_7, f2: 5.482_39 },
         { energy: 0.048_181_6, f1: 2.879_37, f2: 5.554_41 },
         { energy: 0.048_960_9, f1: 2.916_23, f2: 5.627_37 },
         { energy: 0.049_752_8, f1: 2.953_58, f2: 5.701_28 },
         { energy: 0.050_557_6, f1: 2.991_71, f2: 5.776_17 },
         { energy: 0.051_375_3, f1: 3.030_82, f2: 5.852_04 },
         { energy: 0.052_206_2, f1: 3.070_96, f2: 5.928_91 },
         { energy: 0.053_050_6, f1: 3.111_82, f2: 6.006_8 },
         { energy: 0.053_908_7, f1: 3.152_29, f2: 6.087_18 },
         { energy: 0.054_780_6, f1: 3.196_26, f2: 6.170_57 },
         { energy: 0.055_666_7, f1: 3.243_12, f2: 6.255_1 },
         { energy: 0.056_567, f1: 3.292_48, f2: 6.340_79 },
         { energy: 0.057_482, f1: 3.344_5, f2: 6.427_65 },
         { energy: 0.058_411_7, f1: 3.399_47, f2: 6.515_7 },
         { energy: 0.059_356_4, f1: 3.458_09, f2: 6.604_96 },
         { energy: 0.060_316_5, f1: 3.522_67, f2: 6.695_1 },
         { energy: 0.061_292_1, f1: 3.589_13, f2: 6.777_7 },
         { energy: 0.062_283_4, f1: 3.654_83, f2: 6.861_31 },
         { energy: 0.063_290_8, f1: 3.721_32, f2: 6.945_94 },
         { energy: 0.064_314_5, f1: 3.789_74, f2: 7.031_63 },
         { energy: 0.065_354_7, f1: 3.860_74, f2: 7.118_37 },
         { energy: 0.066_411_8, f1: 3.935_19, f2: 7.206_18 },
         { energy: 0.067_485_9, f1: 4.014_81, f2: 7.295_07 },
         { energy: 0.068_577_5, f1: 4.105_54, f2: 7.385_06 },
         { energy: 0.069_686_7, f1: 4.199_8, f2: 7.451_57 },
         { energy: 0.070_813_8, f1: 4.284_4, f2: 7.515_85 },
         { energy: 0.071_959_1, f1: 4.363_55, f2: 7.580_68 },
         { energy: 0.073_123, f1: 4.440_21, f2: 7.646_08 },
         { energy: 0.074_305_7, f1: 4.514_87, f2: 7.712_04 },
         { energy: 0.075_507_6, f1: 4.587_64, f2: 7.778_57 },
         { energy: 0.076_728_9, f1: 4.658_1, f2: 7.845_68 },
         { energy: 0.077_969_9, f1: 4.724_19, f2: 7.915_45 },
         { energy: 0.079_231, f1: 4.791_79, f2: 7.990_51 },
         { energy: 0.080_512_5, f1: 4.860_06, f2: 8.066_28 },
         { energy: 0.081_814_7, f1: 4.927_76, f2: 8.142_76 },
         { energy: 0.083_138, f1: 4.993_37, f2: 8.219_97 },
         { energy: 0.084_482_7, f1: 5.052_9, f2: 8.297_91 },
         { energy: 0.085_849_1, f1: 5.105_38, f2: 8.391_71 },
         { energy: 0.087_237_7, f1: 5.169_92, f2: 8.496_27 },
         { energy: 0.088_648_7, f1: 5.241_28, f2: 8.602_14 },
         { energy: 0.090_082_5, f1: 5.317_08, f2: 8.709_32 },
         { energy: 0.091_539_5, f1: 5.396_35, f2: 8.817_83 },
         { energy: 0.093_020_1, f1: 5.478_15, f2: 8.927_7 },
         { energy: 0.094_524_6, f1: 5.560_26, f2: 9.038_94 },
         { energy: 0.096_053_5, f1: 5.644_31, f2: 9.160_33 },
         { energy: 0.097_607_1, f1: 5.736_87, f2: 9.285_68 },
         { energy: 0.099_185_8, f1: 5.836_62, f2: 9.412_73 },
         { energy: 0.100_79, f1: 5.942_42, f2: 9.541_53 },
         { energy: 0.102_42, f1: 6.054_39, f2: 9.672_1 },
         { energy: 0.104_077, f1: 6.173_08, f2: 9.804_44 },
         { energy: 0.105_76, f1: 6.299_76, f2: 9.938_6 },
         { energy: 0.107_471, f1: 6.438_82, f2: 10.069_8 },
         { energy: 0.109_209, f1: 6.578_18, f2: 10.195_1 },
         { energy: 0.110_975, f1: 6.720_74, f2: 10.321_9 },
         { energy: 0.112_77, f1: 6.868_39, f2: 10.450_3 },
         { energy: 0.114_594, f1: 7.022_41, f2: 10.580_3 },
         { energy: 0.116_448, f1: 7.184_06, f2: 10.712 },
         { energy: 0.118_331, f1: 7.355_28, f2: 10.845_2 },
         { energy: 0.120_245, f1: 7.539_72, f2: 10.980_2 },
         { energy: 0.122_19, f1: 7.750_79, f2: 11.114_6 },
         { energy: 0.124_166, f1: 7.962_58, f2: 11.203_8 },
         { energy: 0.126_175, f1: 8.164_51, f2: 11.293_8 },
         { energy: 0.128_215, f1: 8.362_82, f2: 11.384_5 },
         { energy: 0.130_289, f1: 8.562_73, f2: 11.475_9 },
         { energy: 0.132_397, f1: 8.766_07, f2: 11.568_1 },
         { energy: 0.134_538, f1: 8.974_5, f2: 11.660_9 },
         { energy: 0.136_714, f1: 9.189_69, f2: 11.754_6 },
         { energy: 0.138_925, f1: 9.413_78, f2: 11.849 },
         { energy: 0.141_172, f1: 9.649_75, f2: 11.944_1 },
         { energy: 0.143_456, f1: 9.904_32, f2: 12.04 },
         { energy: 0.145_776, f1: 10.213_3, f2: 12.129_4 },
         { energy: 0.148_134, f1: 10.508_2, f2: 12.129 },
         { energy: 0.150_53, f1: 10.77, f2: 12.128_5 },
         { energy: 0.152_964, f1: 11.019_6, f2: 12.128_1 },
         { energy: 0.155_439, f1: 11.263_1, f2: 12.127_7 },
         { energy: 0.157_953, f1: 11.503_7, f2: 12.127_3 },
         { energy: 0.160_507, f1: 11.744_1, f2: 12.126_9 },
         { energy: 0.163_103, f1: 11.986_4, f2: 12.126_4 },
         { energy: 0.165_742, f1: 12.233_8, f2: 12.126 },
         { energy: 0.168_422, f1: 12.491_4, f2: 12.125_6 },
         { energy: 0.171_146, f1: 12.784_9, f2: 12.125_2 },
         { energy: 0.173_915, f1: 13.083_8, f2: 12.049_8 },
         { energy: 0.176_727, f1: 13.342_2, f2: 11.956_2 },
         { energy: 0.179_586, f1: 13.579_7, f2: 11.863_3 },
         { energy: 0.182_491, f1: 13.804_6, f2: 11.771_1 },
         { energy: 0.185_442, f1: 14.020_5, f2: 11.679_7 },
         { energy: 0.188_442, f1: 14.23, f2: 11.589 },
         { energy: 0.191_489, f1: 14.435_2, f2: 11.498_9 },
         { energy: 0.194_587, f1: 14.639, f2: 11.409_6 },
         { energy: 0.197_734, f1: 14.849_3, f2: 11.321 },
         { energy: 0.200_932, f1: 15.063, f2: 11.203_9 },
         { energy: 0.204_182, f1: 15.254_9, f2: 11.075_4 },
         { energy: 0.207_485, f1: 15.428_8, f2: 10.948_4 },
         { energy: 0.210_84, f1: 15.591_8, f2: 10.822_9 },
         { energy: 0.214_251, f1: 15.741_3, f2: 10.698_8 },
         { energy: 0.217_716, f1: 15.885_2, f2: 10.587_5 },
         { energy: 0.221_237, f1: 16.028_5, f2: 10.478_3 },
         { energy: 0.224_816, f1: 16.169_4, f2: 10.370_2 },
         { energy: 0.228_452, f1: 16.307_4, f2: 10.263_2 },
         { energy: 0.232_147, f1: 16.442_9, f2: 10.157_3 },
         { energy: 0.235_902, f1: 16.576_2, f2: 10.052_5 },
         { energy: 0.239_717, f1: 16.708_2, f2: 9.948_83 },
         { energy: 0.243_595, f1: 16.844_3, f2: 9.846_19 },
         { energy: 0.247_535, f1: 16.976_3, f2: 9.730_53 },
         { energy: 0.251_538, f1: 17.098_9, f2: 9.615_05 },
         { energy: 0.255_607, f1: 17.215_7, f2: 9.500_95 },
         { energy: 0.259_741, f1: 17.328, f2: 9.388_19 },
         { energy: 0.263_942, f1: 17.436_4, f2: 9.276_77 },
         { energy: 0.268_211, f1: 17.541_4, f2: 9.166_69 },
         { energy: 0.272_549, f1: 17.643_3, f2: 9.057_9 },
         { energy: 0.276_957, f1: 17.742_3, f2: 8.950_41 },
         { energy: 0.281_437, f1: 17.838_9, f2: 8.844_19 },
         { energy: 0.285_989, f1: 17.933_3, f2: 8.739_23 },
         { energy: 0.290_615, f1: 18.026, f2: 8.635_51 },
         { energy: 0.295_315, f1: 18.117_3, f2: 8.533_04 },
         { energy: 0.300_092, f1: 18.208_1, f2: 8.431_77 },
         { energy: 0.304_945, f1: 18.306, f2: 8.328_68 },
         { energy: 0.309_878, f1: 18.396_3, f2: 8.214_45 },
         { energy: 0.314_89, f1: 18.477_7, f2: 8.101_77 },
         { energy: 0.319_983, f1: 18.554_5, f2: 7.990_65 },
         { energy: 0.325_158, f1: 18.627_5, f2: 7.881_05 },
         { energy: 0.330_418, f1: 18.697_1, f2: 7.772_96 },
         { energy: 0.335_762, f1: 18.763_9, f2: 7.666_34 },
         { energy: 0.341_192, f1: 18.827_9, f2: 7.561_19 },
         { energy: 0.346_711, f1: 18.889_6, f2: 7.457_49 },
         { energy: 0.352_319, f1: 18.949_3, f2: 7.355_19 },
         { energy: 0.358_017, f1: 19.008_2, f2: 7.254_32 },
         { energy: 0.363_808, f1: 19.065_5, f2: 7.152_19 },
         { energy: 0.369_692, f1: 19.119_3, f2: 7.050_12 },
         { energy: 0.375_672, f1: 19.170_3, f2: 6.949_53 },
         { energy: 0.381_748, f1: 19.219_4, f2: 6.850_37 },
         { energy: 0.387_922, f1: 19.267_1, f2: 6.752_62 },
         { energy: 0.394_197, f1: 19.314_2, f2: 6.656_27 },
         { energy: 0.400_573, f1: 19.361_6, f2: 6.561_29 },
         { energy: 0.407_052, f1: 19.415_3, f2: 6.467_67 },
         { energy: 0.413_635, f1: 19.478_3, f2: 6.359_8 },
         { energy: 0.420_326, f1: 19.522_5, f2: 6.233_35 },
         { energy: 0.427_124, f1: 19.552_5, f2: 6.109_42 },
         { energy: 0.434_032, f1: 19.572_8, f2: 5.987_94 },
         { energy: 0.441_052, f1: 19.584_6, f2: 5.868_9 },
         { energy: 0.448_186, f1: 19.588, f2: 5.752_21 },
         { energy: 0.455_435, f1: 19.582_9, f2: 5.637_84 },
         { energy: 0.462_802, f1: 19.549_6, f2: 5.534_28 },
         { energy: 0.470_287, f1: 19.526_9, f2: 5.460_85 },
         { energy: 0.477_894, f1: 19.517_9, f2: 5.388_39 },
         { energy: 0.485_623, f1: 19.511_8, f2: 5.316_88 },
         { energy: 0.493_478, f1: 19.508_1, f2: 5.246_33 },
         { energy: 0.501_459, f1: 19.506_5, f2: 5.176_72 },
         { energy: 0.509_57, f1: 19.517_6, f2: 5.102_73 },
         { energy: 0.517_812, f1: 19.519_3, f2: 5.013_42 },
         { energy: 0.526_187, f1: 19.509_4, f2: 4.925_66 },
         { energy: 0.534_698, f1: 19.494_3, f2: 4.839_45 },
         { energy: 0.543_346, f1: 19.474_6, f2: 4.754_73 },
         { energy: 0.552_134, f1: 19.450_7, f2: 4.671_52 },
         { energy: 0.561_065, f1: 19.423, f2: 4.589_74 },
         { energy: 0.570_139, f1: 19.391_7, f2: 4.509_41 },
         { energy: 0.579_361, f1: 19.360_8, f2: 4.430_48 },
         { energy: 0.588_732, f1: 19.326, f2: 4.343_93 },
         { energy: 0.598_254, f1: 19.280_3, f2: 4.255_21 },
         { energy: 0.607_93, f1: 19.226, f2: 4.168_31 },
         { energy: 0.617_763, f1: 19.164_1, f2: 4.083_18 },
         { energy: 0.627_755, f1: 19.094_9, f2: 3.999_79 },
         { energy: 0.637_908, f1: 19.019_2, f2: 3.918_1 },
         { energy: 0.648_226, f1: 18.938_4, f2: 3.835_81 },
         { energy: 0.658_711, f1: 18.845_1, f2: 3.749_32 },
         { energy: 0.669_365, f1: 18.738_9, f2: 3.664_77 },
         { energy: 0.680_191, f1: 18.619_9, f2: 3.582_13 },
         { energy: 0.691_193, f1: 18.487_3, f2: 3.501_35 },
         { energy: 0.702_372, f1: 18.334_6, f2: 3.422_4 },
         { energy: 0.713_733, f1: 18.163_4, f2: 3.357_7 },
         { energy: 0.725_277, f1: 17.987_1, f2: 3.305_16 },
         { energy: 0.737_008, f1: 17.800_9, f2: 3.253_44 },
         { energy: 0.748_928, f1: 17.599_9, f2: 3.202_53 },
         { energy: 0.761_042, f1: 17.380_2, f2: 3.152_42 },
         { energy: 0.773_351, f1: 17.140_1, f2: 3.103_1 },
         { energy: 0.785_859, f1: 16.876_5, f2: 3.049_12 },
         { energy: 0.798_57, f1: 16.570_5, f2: 2.985_32 },
         { energy: 0.811_486, f1: 16.214_3, f2: 2.922_86 },
         { energy: 0.824_611, f1: 15.798_8, f2: 2.861_7 },
         { energy: 0.837_949, f1: 15.307_2, f2: 2.801_83 },
         { energy: 0.851_502, f1: 14.727, f2: 2.743_21 },
         { energy: 0.865_274, f1: 13.996_4, f2: 2.658_09 },
         { energy: 0.879_269, f1: 13.027, f2: 2.572_08 },
         { energy: 0.893_491, f1: 11.674_5, f2: 2.496_03 },
         { energy: 0.907_943, f1: 9.631_07, f2: 2.436_09 },
         { energy: 0.922_628, f1: 5.284_71, f2: 2.259_09 },
         { energy: 0.932_4, f1: -18.074_7, f2: 2.149_91 },
         { energy: 0.932_6, f1: -18.055_2, f2: 18.478_6 },
         { energy: 0.937_551, f1: 2.422_54, f2: 18.295_3 },
         { energy: 0.952_715, f1: 9.964_36, f2: 17.750_8 },
         { energy: 0.968_124, f1: 13.114_9, f2: 17.222_4 },
         { energy: 0.983_783, f1: 15.129_7, f2: 16.710_2 },
         { energy: 0.999_695, f1: 16.586_5, f2: 16.213_2 },
         { energy: 1.015_86, f1: 17.696_6, f2: 15.731_1 },
         { energy: 1.032_29, f1: 18.499_6, f2: 15.263_1 },
         { energy: 1.048_99, f1: 19.080_3, f2: 14.943_5 },
         { energy: 1.065_96, f1: 19.652_6, f2: 14.776_4 },
         { energy: 1.083_2, f1: 20.215_9, f2: 14.611_2 },
         { energy: 1.100_72, f1: 20.749_5, f2: 14.447_9 },
         { energy: 1.118_52, f1: 21.254, f2: 14.286_5 },
         { energy: 1.136_61, f1: 21.732_7, f2: 14.126_7 },
         { energy: 1.155, f1: 22.19, f2: 13.968_8 },
         { energy: 1.173_68, f1: 22.630_3, f2: 13.812_7 },
         { energy: 1.192_66, f1: 23.058_9, f2: 13.658_3 },
         { energy: 1.211_95, f1: 23.482_8, f2: 13.505_6 },
         { energy: 1.231_55, f1: 23.919_9, f2: 13.354_7 },
         { energy: 1.251_47, f1: 24.371_2, f2: 13.159_1 },
         { energy: 1.271_72, f1: 24.820_6, f2: 12.913_3 },
         { energy: 1.292_29, f1: 25.201_6, f2: 12.607_5 },
         { energy: 1.313_19, f1: 25.528_4, f2: 12.309_1 },
         { energy: 1.334_43, f1: 25.820_5, f2: 12.017_8 },
         { energy: 1.356_01, f1: 26.085_3, f2: 11.733_3 },
         { energy: 1.377_94, f1: 26.327_2, f2: 11.455_5 },
         { energy: 1.400_23, f1: 26.549_3, f2: 11.184_4 },
         { energy: 1.422_88, f1: 26.754_2, f2: 10.919_6 },
         { energy: 1.445_89, f1: 26.943_7, f2: 10.661_1 },
         { energy: 1.469_28, f1: 27.119_5, f2: 10.408_5 },
         { energy: 1.493_04, f1: 27.283, f2: 10.161_6 },
         { energy: 1.517_19, f1: 27.434_6, f2: 9.919_26 },
         { energy: 1.541_73, f1: 27.574_9, f2: 9.682_55 },
         { energy: 1.566_67, f1: 27.705_2, f2: 9.451_57 },
         { energy: 1.592_01, f1: 27.826_3, f2: 9.226_06 },
         { energy: 1.617_76, f1: 27.939_1, f2: 9.005_9 },
         { energy: 1.643_92, f1: 28.044_2, f2: 8.791_03 },
         { energy: 1.670_51, f1: 28.142_5, f2: 8.581_25 },
         { energy: 1.697_53, f1: 28.234_4, f2: 8.376_49 },
         { energy: 1.724_99, f1: 28.323, f2: 8.176_59 },
         { energy: 1.752_89, f1: 28.405_8, f2: 7.976_76 },
         { energy: 1.781_24, f1: 28.481, f2: 7.780_17 },
         { energy: 1.810_05, f1: 28.549_2, f2: 7.587_11 },
         { energy: 1.839_32, f1: 28.610_8, f2: 7.398_97 },
         { energy: 1.869_07, f1: 28.667_1, f2: 7.215_55 },
         { energy: 1.899_3, f1: 28.718_7, f2: 7.036_72 },
         { energy: 1.930_02, f1: 28.765_8, f2: 6.862_13 },
         { energy: 1.961_24, f1: 28.808_6, f2: 6.691_9 },
         { energy: 1.992_96, f1: 28.846_8, f2: 6.526_06 },
         { energy: 2.025_2, f1: 28.885, f2: 6.366_99 },
         { energy: 2.057_95, f1: 28.920_5, f2: 6.206_64 },
         { energy: 2.091_24, f1: 28.950_8, f2: 6.050_01 },
         { energy: 2.125_06, f1: 28.977_7, f2: 5.897_02 },
         { energy: 2.159_43, f1: 29.001_6, f2: 5.747_51 },
         { energy: 2.194_36, f1: 29.022_4, f2: 5.601_15 },
         { energy: 2.229_85, f1: 29.040_2, f2: 5.458_34 },
         { energy: 2.265_92, f1: 29.055_4, f2: 5.319_03 },
         { energy: 2.302_57, f1: 29.068_5, f2: 5.182_92 },
         { energy: 2.339_81, f1: 29.079, f2: 5.049_77 },
         { energy: 2.377_66, f1: 29.087_4, f2: 4.920_1 },
         { energy: 2.416_11, f1: 29.093_8, f2: 4.793_21 },
         { energy: 2.455_19, f1: 29.098_2, f2: 4.669_59 },
         { energy: 2.494_9, f1: 29.100_8, f2: 4.548_72 },
         { energy: 2.535_26, f1: 29.101_6, f2: 4.430_93 },
         { energy: 2.576_26, f1: 29.100_9, f2: 4.316_15 },
         { energy: 2.617_93, f1: 29.098_7, f2: 4.203_92 },
         { energy: 2.660_27, f1: 29.095, f2: 4.094_34 },
         { energy: 2.703_3, f1: 29.09, f2: 3.987_75 },
         { energy: 2.747_03, f1: 29.083_8, f2: 3.883_62 },
         { energy: 2.791_46, f1: 29.076_3, f2: 3.782_07 },
         { energy: 2.836_61, f1: 29.067_8, f2: 3.683_02 },
         { energy: 2.882_49, f1: 29.058_2, f2: 3.586_44 },
         { energy: 2.929_11, f1: 29.047_7, f2: 3.492_24 },
         { energy: 2.976_48, f1: 29.036_2, f2: 3.400_4 },
         { energy: 3.024_63, f1: 29.023_8, f2: 3.310_86 },
         { energy: 3.073_55, f1: 29.010_7, f2: 3.223_58 },
         { energy: 3.123_26, f1: 28.996_8, f2: 3.138_47 },
         { energy: 3.173_78, f1: 28.982_2, f2: 3.055_53 },
         { energy: 3.225_11, f1: 28.966_9, f2: 2.974_64 },
         { energy: 3.277_27, f1: 28.951, f2: 2.895_85 },
         { energy: 3.330_28, f1: 28.934_5, f2: 2.819_02 },
         { energy: 3.384_15, f1: 28.917_4, f2: 2.744_17 },
         { energy: 3.438_88, f1: 28.899_9, f2: 2.671_22 },
         { energy: 3.494_5, f1: 28.881_8, f2: 2.600_14 },
         { energy: 3.551_02, f1: 28.863_3, f2: 2.530_85 },
         { energy: 3.608_46, f1: 28.844_4, f2: 2.463_34 },
         { energy: 3.666_82, f1: 28.825_1, f2: 2.397_57 },
         { energy: 3.726_13, f1: 28.805_3, f2: 2.333_46 },
         { energy: 3.786_4, f1: 28.785_2, f2: 2.271_05 },
         { energy: 3.847_64, f1: 28.764_8, f2: 2.210_2 },
         { energy: 3.909_87, f1: 28.744, f2: 2.150_92 },
         { energy: 3.973_11, f1: 28.723, f2: 2.093_21 },
         { energy: 4.037_38, f1: 28.701_6, f2: 2.036_96 },
         { energy: 4.102_68, f1: 28.679_9, f2: 1.982_16 },
         { energy: 4.169_03, f1: 28.658, f2: 1.928_78 },
         { energy: 4.236_46, f1: 28.635_7, f2: 1.876_77 },
         { energy: 4.304_98, f1: 28.613_2, f2: 1.826_13 },
         { energy: 4.374_62, f1: 28.590_3, f2: 1.776_79 },
         { energy: 4.445_37, f1: 28.567_3, f2: 1.728_77 },
         { energy: 4.517_27, f1: 28.544, f2: 1.681_97 },
         { energy: 4.590_33, f1: 28.520_3, f2: 1.636_32 },
         { energy: 4.664_58, f1: 28.496_3, f2: 1.591_95 },
         { energy: 4.740_03, f1: 28.472_1, f2: 1.548_7 },
         { energy: 4.816_69, f1: 28.447_6, f2: 1.506_55 },
         { energy: 4.894_6, f1: 28.422_7, f2: 1.465_52 },
         { energy: 4.973_77, f1: 28.397_5, f2: 1.425_55 },
         { energy: 5.054_21, f1: 28.371_8, f2: 1.386_63 },
         { energy: 5.135_96, f1: 28.345_9, f2: 1.348_73 },
         { energy: 5.219_03, f1: 28.319_5, f2: 1.311_82 },
         { energy: 5.303_44, f1: 28.292_6, f2: 1.275_81 },
         { energy: 5.389_22, f1: 28.265_2, f2: 1.240_83 },
         { energy: 5.476_39, f1: 28.237_4, f2: 1.206_7 },
         { energy: 5.564_97, f1: 28.208_9, f2: 1.173_44 },
         { energy: 5.654_98, f1: 28.179_8, f2: 1.141_13 },
         { energy: 5.746_44, f1: 28.15, f2: 1.109_56 },
         { energy: 5.839_39, f1: 28.119_4, f2: 1.078_91 },
         { energy: 5.933_83, f1: 28.088, f2: 1.048_95 },
         { energy: 6.029_81, f1: 28.055_6, f2: 1.019_85 },
         { energy: 6.127_33, f1: 28.022_3, f2: 0.991_53 },
         { energy: 6.226_44, f1: 27.987_8, f2: 0.963_866 },
         { energy: 6.327_15, f1: 27.952, f2: 0.936_946 },
         { energy: 6.429_48, f1: 27.914_7, f2: 0.910_741 },
         { energy: 6.533_48, f1: 27.875_9, f2: 0.885_194 },
         { energy: 6.639_15, f1: 27.835_2, f2: 0.860_322 },
         { energy: 6.746_54, f1: 27.792_4, f2: 0.836_094 },
         { energy: 6.855_65, f1: 27.747_3, f2: 0.812_505 },
         { energy: 6.966_54, f1: 27.699_5, f2: 0.789_511 },
         { energy: 7.079_22, f1: 27.648_5, f2: 0.767_114 },
         { energy: 7.193_72, f1: 27.593_9, f2: 0.745_298 },
         { energy: 7.310_07, f1: 27.535, f2: 0.724_043 },
         { energy: 7.428_31, f1: 27.471, f2: 0.703_338 },
         { energy: 7.548_45, f1: 27.400_9, f2: 0.683_167 },
         { energy: 7.670_54, f1: 27.323_3, f2: 0.663_518 },
         { energy: 7.794_61, f1: 27.236_6, f2: 0.644_376 },
         { energy: 7.920_68, f1: 27.138_1, f2: 0.625_722 },
         { energy: 8.048_79, f1: 27.024_6, f2: 0.607_548 },
         { energy: 8.178_98, f1: 26.890_6, f2: 0.589_836 },
         { energy: 8.311_26, f1: 26.728_1, f2: 0.572_588 },
         { energy: 8.445_69, f1: 26.522_7, f2: 0.555_773 },
         { energy: 8.582_29, f1: 26.246_7, f2: 0.539_391 },
         { energy: 8.721_11, f1: 25.834_5, f2: 0.523_425 },
         { energy: 8.862_16, f1: 25.048_7, f2: 0.507_876 },
         { energy: 8.978_8, f1: 17.573_5, f2: 0.495_545 },
         { energy: 8.979, f1: 17.573_9, f2: 3.853_05 },
         { energy: 9.005_5, f1: 23.569, f2: 3.836_52 },
         { energy: 9.151_16, f1: 25.640_5, f2: 3.747_71 },
         { energy: 9.299_17, f1: 26.353_9, f2: 3.660_34 },
         { energy: 9.449_58, f1: 26.803_7, f2: 3.574_19 },
         { energy: 9.602_42, f1: 27.134, f2: 3.489_38 },
         { energy: 9.757_73, f1: 27.394_9, f2: 3.405_92 },
         { energy: 9.915_55, f1: 27.609_9, f2: 3.323_98 },
         { energy: 10.075_9, f1: 27.792_2, f2: 3.243_24 },
         { energy: 10.238_9, f1: 27.949_5, f2: 3.163_89 },
         { energy: 10.404_5, f1: 28.087_3, f2: 3.085_95 },
         { energy: 10.572_8, f1: 28.209_2, f2: 3.009_42 },
         { energy: 10.743_8, f1: 28.317_9, f2: 2.934_3 },
         { energy: 10.917_6, f1: 28.415_5, f2: 2.860_61 },
         { energy: 11.094_2, f1: 28.503_5, f2: 2.788_33 },
         { energy: 11.273_6, f1: 28.583_2, f2: 2.717_47 },
         { energy: 11.455_9, f1: 28.655_7, f2: 2.648_02 },
         { energy: 11.641_2, f1: 28.721_6, f2: 2.579_99 },
         { energy: 11.829_5, f1: 28.781_8, f2: 2.513_35 },
         { energy: 12.020_8, f1: 28.836_8, f2: 2.448_11 },
         { energy: 12.215_3, f1: 28.887_2, f2: 2.384_24 },
         { energy: 12.412_8, f1: 28.933_3, f2: 2.321_75 },
         { energy: 12.613_6, f1: 28.975_6, f2: 2.260_61 },
         { energy: 12.817_6, f1: 29.014_3, f2: 2.200_82 },
         { energy: 13.025, f1: 29.049_7, f2: 2.142_36 },
         { energy: 13.235_6, f1: 29.082_2, f2: 2.085_21 },
         { energy: 13.449_7, f1: 29.112, f2: 2.029_36 },
         { energy: 13.667_2, f1: 29.139_2, f2: 1.974_79 },
         { energy: 13.888_3, f1: 29.164_1, f2: 1.921_48 },
         { energy: 14.112_9, f1: 29.186_8, f2: 1.869_42 },
         { energy: 14.341_2, f1: 29.207_4, f2: 1.818_58 },
         { energy: 14.573_1, f1: 29.226_2, f2: 1.768_95 },
         { energy: 14.808_9, f1: 29.243_3, f2: 1.720_51 },
         { energy: 15.048_4, f1: 29.258_7, f2: 1.673_24 },
         { energy: 15.291_8, f1: 29.272_6, f2: 1.627_12 },
         { energy: 15.539_1, f1: 29.285_1, f2: 1.582_13 },
         { energy: 15.790_4, f1: 29.296_3, f2: 1.538_24 },
         { energy: 16.045_8, f1: 29.306_3, f2: 1.495_45 },
         { energy: 16.305_4, f1: 29.315_1, f2: 1.453_72 },
         { energy: 16.569_1, f1: 29.322_9, f2: 1.413_04 },
         { energy: 16.837_1, f1: 29.329_6, f2: 1.373_39 },
         { energy: 17.109_4, f1: 29.335_4, f2: 1.334_75 },
         { energy: 17.386_1, f1: 29.340_4, f2: 1.297_1 },
         { energy: 17.667_4, f1: 29.344_5, f2: 1.260_41 },
         { energy: 17.953_1, f1: 29.347_9, f2: 1.224_67 },
         { energy: 18.243_5, f1: 29.350_5, f2: 1.189_85 },
         { energy: 18.538_6, f1: 29.352_6, f2: 1.155_95 },
         { energy: 18.838_4, f1: 29.353_9, f2: 1.122_94 },
         { energy: 19.143_1, f1: 29.354_7, f2: 1.090_79 },
         { energy: 19.452_7, f1: 29.355, f2: 1.059_49 },
         { energy: 19.767_4, f1: 29.354_8, f2: 1.029_03 },
         { energy: 20.087_1, f1: 29.354_1, f2: 0.999_375 },
         { energy: 20.412, f1: 29.353, f2: 0.970_516 },
         { energy: 20.742_1, f1: 29.351_5, f2: 0.942_433 },
         { energy: 21.077_6, f1: 29.349_6, f2: 0.915_106 },
         { energy: 21.418_5, f1: 29.347_4, f2: 0.888_521 },
         { energy: 21.765, f1: 29.344_9, f2: 0.862_657 },
         { energy: 22.117, f1: 29.342, f2: 0.837_5 },
         { energy: 22.474_7, f1: 29.338_9, f2: 0.813_031 },
         { energy: 22.838_2, f1: 29.335_6, f2: 0.789_233 },
         { energy: 23.207_6, f1: 29.332, f2: 0.766_091 },
         { energy: 23.583, f1: 29.328_2, f2: 0.743_588 },
         { energy: 23.964_4, f1: 29.324_2, f2: 0.721_709 },
         { energy: 24.352, f1: 29.320_1, f2: 0.700_438 },
         { energy: 24.745_9, f1: 29.315_7, f2: 0.679_76 },
         { energy: 25.146_2, f1: 29.311_3, f2: 0.659_66 },
         { energy: 25.552_9, f1: 29.306_7, f2: 0.640_123 },
         { energy: 25.966_2, f1: 29.302, f2: 0.621_136 },
         { energy: 26.386_1, f1: 29.297_2, f2: 0.602_683 },
         { energy: 26.812_9, f1: 29.292_3, f2: 0.584_752 },
         { energy: 27.246_6, f1: 29.287_3, f2: 0.567_329 },
         { energy: 27.687_3, f1: 29.282_3, f2: 0.550_4 },
         { energy: 28.135_1, f1: 29.277_2, f2: 0.533_953 },
         { energy: 28.590_2, f1: 29.272_1, f2: 0.517_976 },
         { energy: 29.052_6, f1: 29.266_9, f2: 0.502_455 },
         { energy: 29.522_5, f1: 29.261_7, f2: 0.487_378 },
         { energy: 30.0, f1: 29.256_4, f2: 0.472_735 },
    ],
    neutron_scattering: {
        b_c: { value: 7.718, uncertainty: 0.004},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 7.485, uncertainty: 0.008},
        bound_incoherent_scattering_xs: { value: 0.55, uncertainty: 0.03},
        total_bound_scattering_xs: { value: 8.03, uncertainty: 0.03},
        absorption_xs: { value: 3.78, uncertainty: 0.02},
    },
    isotopes: [
        { 
            mass_number: 52,
            mass: { value: 51.997_18, uncertainty: 0.000_28},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 53,
            mass: { value: 52.985_55, uncertainty: 0.000_28},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 54,
            mass: { value: 53.976_71, uncertainty: 0.000_23},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 55,
            mass: { value: 54.966_05, uncertainty: 0.000_32},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 56,
            mass: { value: 55.958_56, uncertainty: 0.000_15},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 57,
            mass: { value: 56.949_216, uncertainty: 0.000_017},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 58,
            mass: { value: 57.944_540_7, uncertainty: 0.000_002_7},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 59,
            mass: { value: 58.939_504_1, uncertainty: 0.000_001_8},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 60,
            mass: { value: 59.937_368_1, uncertainty: 0.000_002_7},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 61,
            mass: { value: 60.933_462_2, uncertainty: 0.000_001_9},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 62,
            mass: { value: 61.932_587, uncertainty: 0.000_004},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 63,
            mass: { value: 62.929_601_1, uncertainty: 0.000_001_5},
            abundance: { value: 69.17, uncertainty: 0.03},
            neutron_scattering: {
                    b_c: { value: 6.477, uncertainty: 0.013},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 5.2, uncertainty: 0.2},
                    bound_incoherent_scattering_xs: { value: 0.006, uncertainty: 0.001},
                    total_bound_scattering_xs: { value: 5.2, uncertainty: 0.2},
                    absorption_xs: { value: 4.5, uncertainty: 0.2},
                },
        },
        { 
            mass_number: 64,
            mass: { value: 63.929_767_9, uncertainty: 0.000_001_5},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 65,
            mass: { value: 64.927_793_7, uncertainty: 0.000_001_9},
            abundance: { value: 30.83, uncertainty: 0.03},
            neutron_scattering: {
                    b_c: { value: 10.204, uncertainty: 0.020},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 14.1, uncertainty: 0.5},
                    bound_incoherent_scattering_xs: { value: 0.4, uncertainty: 0.4},
                    total_bound_scattering_xs: { value: 14.5, uncertainty: 0.5},
                    absorption_xs: { value: 2.17, uncertainty: 0.03},
                },
        },
        { 
            mass_number: 66,
            mass: { value: 65.928_873, uncertainty: 0.000_019},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 67,
            mass: { value: 66.927_75, uncertainty: 0.000_09},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 68,
            mass: { value: 67.929_64, uncertainty: 0.000_50},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 69,
            mass: { value: 68.929_425, uncertainty: 0.000_009},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 70,
            mass: { value: 69.932_409, uncertainty: 0.000_016},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 71,
            mass: { value: 70.932_62, uncertainty: 0.000_40},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 72,
            mass: { value: 71.935_52, uncertainty: 0.000_21},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 73,
            mass: { value: 72.936_49, uncertainty: 0.000_32},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 74,
            mass: { value: 73.940_2, uncertainty: 0.004_3},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 75,
            mass: { value: 74.941_7, uncertainty: 0.005_4},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 76,
            mass: { value: 75.945_99, uncertainty: 0.000_64},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 77,
            mass: { value: 76.947_95, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 78,
            mass: { value: 77.952_81, uncertainty: 0.000_86},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 79,
            mass: { value: 78.955_28, uncertainty: 0.000_97},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 80,
            mass: { value: 79.961_89, uncertainty: 0.000_97},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Cu};
