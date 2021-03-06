const K = {
    atomic_number: 19,
    name: 'Potassium',
    symbol: 'K',
    mass: 39.098_3,
    common_ions: [1],
    uncommon_ions: [-1],
    xray_scattering: [
         { energy: 0.01, f1: undefined, f2: 0.034_264_3 },
         { energy: 0.010_161_7, f1: undefined, f2: 0.035_292_1 },
         { energy: 0.010_326_1, f1: undefined, f2: 0.036_350_7 },
         { energy: 0.010_493_1, f1: undefined, f2: 0.037_441 },
         { energy: 0.010_662_8, f1: undefined, f2: 0.038_564_1 },
         { energy: 0.010_835_3, f1: undefined, f2: 0.039_720_9 },
         { energy: 0.011_010_6, f1: undefined, f2: 0.040_912_3 },
         { energy: 0.011_188_6, f1: undefined, f2: 0.042_139_5 },
         { energy: 0.011_369_6, f1: undefined, f2: 0.043_403_5 },
         { energy: 0.011_553_5, f1: undefined, f2: 0.044_705_4 },
         { energy: 0.011_740_4, f1: undefined, f2: 0.045_891_8 },
         { energy: 0.011_930_3, f1: undefined, f2: 0.046_776_1 },
         { energy: 0.012_123_2, f1: undefined, f2: 0.047_677_5 },
         { energy: 0.012_319_3, f1: undefined, f2: 0.048_596_2 },
         { energy: 0.012_518_6, f1: undefined, f2: 0.049_532_6 },
         { energy: 0.012_721, f1: undefined, f2: 0.050_503_4 },
         { energy: 0.012_926_8, f1: undefined, f2: 0.051_518_3 },
         { energy: 0.013_135_9, f1: undefined, f2: 0.052_553_6 },
         { energy: 0.013_348_3, f1: undefined, f2: 0.053_609_7 },
         { energy: 0.013_564_2, f1: undefined, f2: 0.054_707_6 },
         { energy: 0.013_783_6, f1: undefined, f2: 0.055_861 },
         { energy: 0.014_006_6, f1: undefined, f2: 0.057_038_7 },
         { energy: 0.014_233_1, f1: undefined, f2: 0.058_241_3 },
         { energy: 0.014_463_3, f1: undefined, f2: 0.059_469_2 },
         { energy: 0.014_697_3, f1: undefined, f2: 0.060_838_6 },
         { energy: 0.014_935, f1: undefined, f2: 0.062_358_5 },
         { energy: 0.015_176_5, f1: undefined, f2: 0.063_916_2 },
         { energy: 0.015_422, f1: undefined, f2: 0.065_512_9 },
         { energy: 0.015_671_4, f1: undefined, f2: 0.066_729_7 },
         { energy: 0.015_924_9, f1: undefined, f2: 0.069_865_5 },
         { energy: 0.016_182_5, f1: undefined, f2: 0.077_803_4 },
         { energy: 0.016_444_2, f1: undefined, f2: 0.092_740_7 },
         { energy: 0.016_710_2, f1: undefined, f2: 0.101_038 },
         { energy: 0.016_980_5, f1: undefined, f2: 0.100_077 },
         { energy: 0.017_255_1, f1: undefined, f2: 0.099_124_7 },
         { energy: 0.017_534_2, f1: undefined, f2: 0.097_203 },
         { energy: 0.017_817_8, f1: undefined, f2: 0.101_597 },
         { energy: 0.018_106, f1: undefined, f2: 0.125_934 },
         { energy: 0.018_398_9, f1: undefined, f2: 0.169_815 },
         { energy: 0.018_696_4, f1: undefined, f2: 0.232_685 },
         { energy: 0.018_998_8, f1: undefined, f2: 0.316_999 },
         { energy: 0.019_306_1, f1: undefined, f2: 0.445_772 },
         { energy: 0.019_618_4, f1: undefined, f2: 0.695_715 },
         { energy: 0.019_935_7, f1: undefined, f2: 1.367_43 },
         { energy: 0.020_258_2, f1: undefined, f2: 4.675_23 },
         { energy: 0.020_585_8, f1: undefined, f2: 5.538_76 },
         { energy: 0.020_918_8, f1: undefined, f2: 6.019_36 },
         { energy: 0.021_257_1, f1: undefined, f2: 6.541_65 },
         { energy: 0.021_600_9, f1: undefined, f2: 7.109_26 },
         { energy: 0.021_950_3, f1: undefined, f2: 7.726_12 },
         { energy: 0.022_305_3, f1: undefined, f2: 8.210_83 },
         { energy: 0.022_666_1, f1: undefined, f2: 8.659_7 },
         { energy: 0.023_032_7, f1: undefined, f2: 9.133_12 },
         { energy: 0.023_405_3, f1: undefined, f2: 9.632_42 },
         { energy: 0.023_783_8, f1: undefined, f2: 10.159 },
         { energy: 0.024_168_5, f1: undefined, f2: 10.713_6 },
         { energy: 0.024_559_4, f1: undefined, f2: 11.260_7 },
         { energy: 0.024_956_6, f1: undefined, f2: 11.835_8 },
         { energy: 0.025_360_3, f1: undefined, f2: 12.440_2 },
         { energy: 0.025_770_5, f1: undefined, f2: 13.075_6 },
         { energy: 0.026_187_3, f1: undefined, f2: 13.652_6 },
         { energy: 0.026_610_9, f1: undefined, f2: 13.946_1 },
         { energy: 0.027_041_3, f1: undefined, f2: 14.245_9 },
         { energy: 0.027_478_6, f1: undefined, f2: 14.552_1 },
         { energy: 0.027_923_1, f1: undefined, f2: 14.864_9 },
         { energy: 0.028_374_7, f1: undefined, f2: 15.184_4 },
         { energy: 0.028_833_7, f1: undefined, f2: 15.470_6 },
         { energy: 0.029_3, f1: 2.178_28, f2: 15.547_7 },
         { energy: 0.029_773_9, f1: 2.899_39, f2: 15.625_1 },
         { energy: 0.030_255_5, f1: 3.608_17, f2: 15.702_9 },
         { energy: 0.030_744_9, f1: 4.335_71, f2: 15.781_2 },
         { energy: 0.031_242_1, f1: 5.117_07, f2: 15.859_8 },
         { energy: 0.031_747_5, f1: 6.033_73, f2: 15.813_6 },
         { energy: 0.032_260_9, f1: 6.831_19, f2: 15.637_6 },
         { energy: 0.032_782_7, f1: 7.590_44, f2: 15.463_5 },
         { energy: 0.033_313, f1: 8.353_87, f2: 15.291_4 },
         { energy: 0.033_851_8, f1: 9.184_61, f2: 15.121_2 },
         { energy: 0.034_399_3, f1: 10.198_8, f2: 14.943_7 },
         { energy: 0.034_955_7, f1: 11.164_1, f2: 14.249_9 },
         { energy: 0.035_521_1, f1: 11.945_1, f2: 13.588_3 },
         { energy: 0.036_095_6, f1: 12.603_5, f2: 12.789_6 },
         { energy: 0.036_679_4, f1: 13.135_4, f2: 12.032_4 },
         { energy: 0.037_272_7, f1: 13.680_3, f2: 11.266_9 },
         { energy: 0.037_875_5, f1: 14.050_4, f2: 10.283_1 },
         { energy: 0.038_488_2, f1: 14.222_3, f2: 9.385_13 },
         { energy: 0.039_110_7, f1: 14.281_6, f2: 8.582_97 },
         { energy: 0.039_743_2, f1: 14.298_2, f2: 7.854_98 },
         { energy: 0.040_386_1, f1: 14.307_9, f2: 7.155_91 },
         { energy: 0.041_039_3, f1: 14.224_5, f2: 6.459_92 },
         { energy: 0.041_703_1, f1: 14.068_7, f2: 5.831_62 },
         { energy: 0.042_377_6, f1: 13.861_9, f2: 5.305_3 },
         { energy: 0.043_063, f1: 13.689_2, f2: 4.856_17 },
         { energy: 0.043_759_5, f1: 13.544_4, f2: 4.445_07 },
         { energy: 0.044_467_3, f1: 13.456_7, f2: 4.023_66 },
         { energy: 0.045_186_5, f1: 13.332_1, f2: 3.582_81 },
         { energy: 0.045_917_4, f1: 13.270_2, f2: 3.080_53 },
         { energy: 0.046_66, f1: 12.974_1, f2: 2.513_09 },
         { energy: 0.047_414_7, f1: 12.617_3, f2: 2.140_18 },
         { energy: 0.048_181_6, f1: 12.282_4, f2: 1.819_28 },
         { energy: 0.048_960_9, f1: 11.961_3, f2: 1.544_9 },
         { energy: 0.049_752_8, f1: 11.641_7, f2: 1.288_3 },
         { energy: 0.050_557_6, f1: 11.308_2, f2: 1.072_34 },
         { energy: 0.051_375_3, f1: 10.976_8, f2: 0.896_454 },
         { energy: 0.052_206_2, f1: 10.643_9, f2: 0.757_394 },
         { energy: 0.053_050_6, f1: 10.315_4, f2: 0.680_178 },
         { energy: 0.053_908_7, f1: 10.036_4, f2: 0.632_986 },
         { energy: 0.054_780_6, f1: 9.780_31, f2: 0.595_014 },
         { energy: 0.055_666_7, f1: 9.529_88, f2: 0.567_394 },
         { energy: 0.056_567, f1: 9.302_51, f2: 0.563_239 },
         { energy: 0.057_482, f1: 9.087_25, f2: 0.559_115 },
         { energy: 0.058_411_7, f1: 8.886_46, f2: 0.580_718 },
         { energy: 0.059_356_4, f1: 8.703_92, f2: 0.603_395 },
         { energy: 0.060_316_5, f1: 8.531_01, f2: 0.632_56 },
         { energy: 0.061_292_1, f1: 8.365_76, f2: 0.665_632 },
         { energy: 0.062_283_4, f1: 8.211_56, f2: 0.717_531 },
         { energy: 0.063_290_8, f1: 8.071_1, f2: 0.775_782 },
         { energy: 0.064_314_5, f1: 7.952_87, f2: 0.845_525 },
         { energy: 0.065_354_7, f1: 7.850_46, f2: 0.900_273 },
         { energy: 0.066_411_8, f1: 7.750_86, f2: 0.956_547 },
         { energy: 0.067_485_9, f1: 7.655_88, f2: 1.016_34 },
         { energy: 0.068_577_5, f1: 7.567_68, f2: 1.082_51 },
         { energy: 0.069_686_7, f1: 7.490_48, f2: 1.154_42 },
         { energy: 0.070_813_8, f1: 7.427_53, f2: 1.227_89 },
         { energy: 0.071_959_1, f1: 7.372_01, f2: 1.300_13 },
         { energy: 0.073_123, f1: 7.329_52, f2: 1.375_51 },
         { energy: 0.074_305_7, f1: 7.294_81, f2: 1.441_67 },
         { energy: 0.075_507_6, f1: 7.268_18, f2: 1.511 },
         { energy: 0.076_728_9, f1: 7.255_48, f2: 1.570_8 },
         { energy: 0.077_969_9, f1: 7.239_65, f2: 1.623_91 },
         { energy: 0.079_231, f1: 7.225_39, f2: 1.678_82 },
         { energy: 0.080_512_5, f1: 7.219_27, f2: 1.733_93 },
         { energy: 0.081_814_7, f1: 7.216_05, f2: 1.782_66 },
         { energy: 0.083_138, f1: 7.216_83, f2: 1.832_76 },
         { energy: 0.084_482_7, f1: 7.229_62, f2: 1.879_23 },
         { energy: 0.085_849_1, f1: 7.239_96, f2: 1.915_57 },
         { energy: 0.087_237_7, f1: 7.249_75, f2: 1.952_61 },
         { energy: 0.088_648_7, f1: 7.263_85, f2: 1.990_38 },
         { energy: 0.090_082_5, f1: 7.288_35, f2: 2.028_87 },
         { energy: 0.091_539_5, f1: 7.326_47, f2: 2.046_12 },
         { energy: 0.093_020_1, f1: 7.346_17, f2: 2.047_24 },
         { energy: 0.094_524_6, f1: 7.351_13, f2: 2.052_87 },
         { energy: 0.096_053_5, f1: 7.358_63, f2: 2.068_74 },
         { energy: 0.097_607_1, f1: 7.368_96, f2: 2.084_73 },
         { energy: 0.099_185_8, f1: 7.382_03, f2: 2.100_85 },
         { energy: 0.100_79, f1: 7.401_04, f2: 2.117_08 },
         { energy: 0.102_42, f1: 7.420_05, f2: 2.118_75 },
         { energy: 0.104_077, f1: 7.432_19, f2: 2.119_34 },
         { energy: 0.105_76, f1: 7.44, f2: 2.123_03 },
         { energy: 0.107_471, f1: 7.447_95, f2: 2.127_78 },
         { energy: 0.109_209, f1: 7.455_88, f2: 2.132_54 },
         { energy: 0.110_975, f1: 7.463_5, f2: 2.137_31 },
         { energy: 0.112_77, f1: 7.470_92, f2: 2.142_1 },
         { energy: 0.114_594, f1: 7.478_26, f2: 2.146_89 },
         { energy: 0.116_448, f1: 7.485_64, f2: 2.151_69 },
         { energy: 0.118_331, f1: 7.493_28, f2: 2.156_51 },
         { energy: 0.120_245, f1: 7.501_43, f2: 2.161_34 },
         { energy: 0.122_19, f1: 7.510_77, f2: 2.166_17 },
         { energy: 0.124_166, f1: 7.524_17, f2: 2.171_02 },
         { energy: 0.126_175, f1: 7.538_41, f2: 2.166_38 },
         { energy: 0.128_215, f1: 7.546_94, f2: 2.159_12 },
         { energy: 0.130_289, f1: 7.552_25, f2: 2.151_89 },
         { energy: 0.132_397, f1: 7.555_33, f2: 2.144_68 },
         { energy: 0.134_538, f1: 7.556_56, f2: 2.137_5 },
         { energy: 0.136_714, f1: 7.556_14, f2: 2.130_34 },
         { energy: 0.138_925, f1: 7.554_17, f2: 2.123_21 },
         { energy: 0.141_172, f1: 7.550_74, f2: 2.116_1 },
         { energy: 0.143_456, f1: 7.545_89, f2: 2.109_01 },
         { energy: 0.145_776, f1: 7.539_66, f2: 2.101_95 },
         { energy: 0.148_134, f1: 7.532_09, f2: 2.094_91 },
         { energy: 0.150_53, f1: 7.523_24, f2: 2.087_89 },
         { energy: 0.152_964, f1: 7.513_23, f2: 2.080_9 },
         { energy: 0.155_439, f1: 7.502_33, f2: 2.073_93 },
         { energy: 0.157_953, f1: 7.491_64, f2: 2.066_98 },
         { energy: 0.160_507, f1: 7.481_39, f2: 2.055_12 },
         { energy: 0.163_103, f1: 7.465_76, f2: 2.040_42 },
         { energy: 0.165_742, f1: 7.445_42, f2: 2.025_82 },
         { energy: 0.168_422, f1: 7.421_67, f2: 2.011_33 },
         { energy: 0.171_146, f1: 7.394_6, f2: 1.996_94 },
         { energy: 0.173_915, f1: 7.364_22, f2: 1.982_65 },
         { energy: 0.176_727, f1: 7.330_48, f2: 1.968_47 },
         { energy: 0.179_586, f1: 7.293_28, f2: 1.954_39 },
         { energy: 0.182_491, f1: 7.252_5, f2: 1.940_4 },
         { energy: 0.185_442, f1: 7.208_01, f2: 1.926_52 },
         { energy: 0.188_442, f1: 7.159_73, f2: 1.912_74 },
         { energy: 0.191_489, f1: 7.107_73, f2: 1.899_06 },
         { energy: 0.194_587, f1: 7.054_16, f2: 1.883_5 },
         { energy: 0.197_734, f1: 6.992_68, f2: 1.864_42 },
         { energy: 0.200_932, f1: 6.923_22, f2: 1.845_54 },
         { energy: 0.204_182, f1: 6.846_62, f2: 1.826_85 },
         { energy: 0.207_485, f1: 6.762_49, f2: 1.808_35 },
         { energy: 0.210_84, f1: 6.670_29, f2: 1.790_04 },
         { energy: 0.214_251, f1: 6.569_32, f2: 1.771_91 },
         { energy: 0.217_716, f1: 6.458_76, f2: 1.753_96 },
         { energy: 0.221_237, f1: 6.337_61, f2: 1.736_2 },
         { energy: 0.224_816, f1: 6.204_74, f2: 1.718_62 },
         { energy: 0.228_452, f1: 6.059_31, f2: 1.701_21 },
         { energy: 0.232_147, f1: 5.899, f2: 1.682_1 },
         { energy: 0.235_902, f1: 5.719_85, f2: 1.662_24 },
         { energy: 0.239_717, f1: 5.519_65, f2: 1.642_63 },
         { energy: 0.243_595, f1: 5.295_26, f2: 1.623_24 },
         { energy: 0.247_535, f1: 5.042_39, f2: 1.604_08 },
         { energy: 0.251_538, f1: 4.755_43, f2: 1.585_14 },
         { energy: 0.255_607, f1: 4.426_84, f2: 1.566_43 },
         { energy: 0.259_741, f1: 4.046_3, f2: 1.547_94 },
         { energy: 0.263_942, f1: 3.599_13, f2: 1.529_67 },
         { energy: 0.268_211, f1: 3.063_55, f2: 1.511_62 },
         { energy: 0.272_549, f1: 2.405_21, f2: 1.493_78 },
         { energy: 0.276_957, f1: 1.565_42, f2: 1.476_15 },
         { energy: 0.281_437, f1: 0.431_087, f2: 1.458_72 },
         { energy: 0.285_989, f1: -1.263_06, f2: 1.441_51 },
         { energy: 0.290_615, f1: -4.447_27, f2: 1.424_49 },
         { energy: 0.294_5, f1: -20.395_6, f2: 1.410_56 },
         { energy: 0.294_7, f1: -20.375_7, f2: 15.190_8 },
         { energy: 0.295_315, f1: -11.698_8, f2: 15.166_4 },
         { energy: 0.300_092, f1: -2.521_51, f2: 14.979_8 },
         { energy: 0.304_945, f1: 0.431_01, f2: 14.795_6 },
         { energy: 0.309_878, f1: 2.286_61, f2: 14.613_6 },
         { energy: 0.314_89, f1: 3.657_14, f2: 14.433_8 },
         { energy: 0.319_983, f1: 4.770_56, f2: 14.253_3 },
         { energy: 0.325_158, f1: 5.678_61, f2: 14.025_6 },
         { energy: 0.330_418, f1: 6.383_3, f2: 13.801_6 },
         { energy: 0.335_762, f1: 6.978_94, f2: 13.681_5 },
         { energy: 0.341_192, f1: 7.551_27, f2: 13.591_2 },
         { energy: 0.346_711, f1: 8.091_03, f2: 13.501_4 },
         { energy: 0.352_319, f1: 8.598_59, f2: 13.412_2 },
         { energy: 0.358_017, f1: 9.078_34, f2: 13.323_7 },
         { energy: 0.363_808, f1: 9.534_81, f2: 13.235_7 },
         { energy: 0.369_692, f1: 9.972_29, f2: 13.148_3 },
         { energy: 0.375_672, f1: 10.395, f2: 13.061_4 },
         { energy: 0.381_748, f1: 10.807_3, f2: 12.975_2 },
         { energy: 0.387_922, f1: 11.215_3, f2: 12.889_5 },
         { energy: 0.394_197, f1: 11.633_2, f2: 12.804_4 },
         { energy: 0.400_573, f1: 12.073_8, f2: 12.668 },
         { energy: 0.407_052, f1: 12.468_1, f2: 12.487_1 },
         { energy: 0.413_635, f1: 12.817_7, f2: 12.308_8 },
         { energy: 0.420_326, f1: 13.146_2, f2: 12.133_1 },
         { energy: 0.427_124, f1: 13.458_1, f2: 11.959_8 },
         { energy: 0.434_032, f1: 13.757_3, f2: 11.789_1 },
         { energy: 0.441_052, f1: 14.047_7, f2: 11.620_8 },
         { energy: 0.448_186, f1: 14.334_1, f2: 11.454_9 },
         { energy: 0.455_435, f1: 14.645, f2: 11.271_7 },
         { energy: 0.462_802, f1: 14.921_1, f2: 11.047_9 },
         { energy: 0.470_287, f1: 15.159_7, f2: 10.828_6 },
         { energy: 0.477_894, f1: 15.380_1, f2: 10.613_7 },
         { energy: 0.485_623, f1: 15.585, f2: 10.403 },
         { energy: 0.493_478, f1: 15.776_9, f2: 10.196_5 },
         { energy: 0.501_459, f1: 15.957_4, f2: 9.994_08 },
         { energy: 0.509_57, f1: 16.128, f2: 9.795_71 },
         { energy: 0.517_812, f1: 16.290_4, f2: 9.601_26 },
         { energy: 0.526_187, f1: 16.447_9, f2: 9.410_67 },
         { energy: 0.534_698, f1: 16.598_1, f2: 9.214_57 },
         { energy: 0.543_346, f1: 16.736_4, f2: 9.019_53 },
         { energy: 0.552_134, f1: 16.863_6, f2: 8.828_63 },
         { energy: 0.561_065, f1: 16.982_7, f2: 8.641_75 },
         { energy: 0.570_139, f1: 17.094_5, f2: 8.458_84 },
         { energy: 0.579_361, f1: 17.199_6, f2: 8.279_79 },
         { energy: 0.588_732, f1: 17.298_6, f2: 8.104_55 },
         { energy: 0.598_254, f1: 17.392_1, f2: 7.933_01 },
         { energy: 0.607_93, f1: 17.480_4, f2: 7.765_09 },
         { energy: 0.617_763, f1: 17.564_2, f2: 7.600_74 },
         { energy: 0.627_755, f1: 17.643_7, f2: 7.439_86 },
         { energy: 0.637_908, f1: 17.719_4, f2: 7.282_38 },
         { energy: 0.648_226, f1: 17.791_8, f2: 7.128_25 },
         { energy: 0.658_711, f1: 17.861_5, f2: 6.977_37 },
         { energy: 0.669_365, f1: 17.929_1, f2: 6.829_68 },
         { energy: 0.680_191, f1: 17.995_4, f2: 6.685_13 },
         { energy: 0.691_193, f1: 18.070_4, f2: 6.543_62 },
         { energy: 0.702_372, f1: 18.141, f2: 6.383_91 },
         { energy: 0.713_733, f1: 18.196_6, f2: 6.223_54 },
         { energy: 0.725_277, f1: 18.243_1, f2: 6.067_19 },
         { energy: 0.737_008, f1: 18.283, f2: 5.914_77 },
         { energy: 0.748_928, f1: 18.317_3, f2: 5.766_19 },
         { energy: 0.761_042, f1: 18.346_7, f2: 5.621_33 },
         { energy: 0.773_351, f1: 18.371_5, f2: 5.480_11 },
         { energy: 0.785_859, f1: 18.392_1, f2: 5.342_44 },
         { energy: 0.798_57, f1: 18.408_5, f2: 5.208_23 },
         { energy: 0.811_486, f1: 18.420_8, f2: 5.077_39 },
         { energy: 0.824_611, f1: 18.428_7, f2: 4.949_84 },
         { energy: 0.837_949, f1: 18.431_6, f2: 4.825_49 },
         { energy: 0.851_502, f1: 18.429_1, f2: 4.704_27 },
         { energy: 0.865_274, f1: 18.404_2, f2: 4.593_28 },
         { energy: 0.879_269, f1: 18.388_8, f2: 4.511_85 },
         { energy: 0.893_491, f1: 18.389_3, f2: 4.431_87 },
         { energy: 0.907_943, f1: 18.394_3, f2: 4.353_3 },
         { energy: 0.922_628, f1: 18.402_9, f2: 4.276_13 },
         { energy: 0.937_551, f1: 18.414_8, f2: 4.200_32 },
         { energy: 0.952_715, f1: 18.43, f2: 4.125_86 },
         { energy: 0.968_124, f1: 18.448_2, f2: 4.052_72 },
         { energy: 0.983_783, f1: 18.488_3, f2: 3.972_64 },
         { energy: 0.999_695, f1: 18.514, f2: 3.872_09 },
         { energy: 1.015_86, f1: 18.524_8, f2: 3.778_7 },
         { energy: 1.032_29, f1: 18.533_8, f2: 3.687_57 },
         { energy: 1.048_99, f1: 18.540_4, f2: 3.598_63 },
         { energy: 1.065_96, f1: 18.545, f2: 3.511_84 },
         { energy: 1.083_2, f1: 18.547_8, f2: 3.427_14 },
         { energy: 1.100_72, f1: 18.549_1, f2: 3.344_49 },
         { energy: 1.118_52, f1: 18.549_2, f2: 3.263_83 },
         { energy: 1.136_61, f1: 18.548_1, f2: 3.185_11 },
         { energy: 1.155, f1: 18.546_2, f2: 3.108_29 },
         { energy: 1.173_68, f1: 18.543_4, f2: 3.033_33 },
         { energy: 1.192_66, f1: 18.540_1, f2: 2.960_17 },
         { energy: 1.211_95, f1: 18.536_5, f2: 2.888_78 },
         { energy: 1.231_55, f1: 18.533_9, f2: 2.817_79 },
         { energy: 1.251_47, f1: 18.529_4, f2: 2.745_98 },
         { energy: 1.271_72, f1: 18.522_5, f2: 2.676 },
         { energy: 1.292_29, f1: 18.514_3, f2: 2.607_81 },
         { energy: 1.313_19, f1: 18.505, f2: 2.541_35 },
         { energy: 1.334_43, f1: 18.494_9, f2: 2.476_59 },
         { energy: 1.356_01, f1: 18.484, f2: 2.413_47 },
         { energy: 1.377_94, f1: 18.472_4, f2: 2.351_97 },
         { energy: 1.400_23, f1: 18.460_2, f2: 2.292_03 },
         { energy: 1.422_88, f1: 18.447_3, f2: 2.233_62 },
         { energy: 1.445_89, f1: 18.434, f2: 2.176_69 },
         { energy: 1.469_28, f1: 18.420_1, f2: 2.121_22 },
         { energy: 1.493_04, f1: 18.405_9, f2: 2.067_17 },
         { energy: 1.517_19, f1: 18.391_2, f2: 2.014_49 },
         { energy: 1.541_73, f1: 18.376_1, f2: 1.963_15 },
         { energy: 1.566_67, f1: 18.360_7, f2: 1.913_12 },
         { energy: 1.592_01, f1: 18.345, f2: 1.864_37 },
         { energy: 1.617_76, f1: 18.329_1, f2: 1.816_85 },
         { energy: 1.643_92, f1: 18.313, f2: 1.770_55 },
         { energy: 1.670_51, f1: 18.297, f2: 1.725_43 },
         { energy: 1.697_53, f1: 18.281_6, f2: 1.680_55 },
         { energy: 1.724_99, f1: 18.265_2, f2: 1.635_22 },
         { energy: 1.752_89, f1: 18.247_2, f2: 1.591_1 },
         { energy: 1.781_24, f1: 18.228_5, f2: 1.548_18 },
         { energy: 1.810_05, f1: 18.209_1, f2: 1.506_41 },
         { energy: 1.839_32, f1: 18.189_2, f2: 1.465_77 },
         { energy: 1.869_07, f1: 18.168_7, f2: 1.426_23 },
         { energy: 1.899_3, f1: 18.147_6, f2: 1.387_75 },
         { energy: 1.930_02, f1: 18.126, f2: 1.350_32 },
         { energy: 1.961_24, f1: 18.103_9, f2: 1.313_89 },
         { energy: 1.992_96, f1: 18.081_3, f2: 1.278_44 },
         { energy: 2.025_2, f1: 18.058_1, f2: 1.243_95 },
         { energy: 2.057_95, f1: 18.034_4, f2: 1.210_39 },
         { energy: 2.091_24, f1: 18.010_1, f2: 1.177_74 },
         { energy: 2.125_06, f1: 17.985_2, f2: 1.145_97 },
         { energy: 2.159_43, f1: 17.959_6, f2: 1.115_05 },
         { energy: 2.194_36, f1: 17.933_5, f2: 1.084_97 },
         { energy: 2.229_85, f1: 17.906_6, f2: 1.055_7 },
         { energy: 2.265_92, f1: 17.879_1, f2: 1.027_22 },
         { energy: 2.302_57, f1: 17.851, f2: 0.999_227 },
         { energy: 2.339_81, f1: 17.821_6, f2: 0.971_618 },
         { energy: 2.377_66, f1: 17.791, f2: 0.944_773 },
         { energy: 2.416_11, f1: 17.759_2, f2: 0.918_669 },
         { energy: 2.455_19, f1: 17.726, f2: 0.893_287 },
         { energy: 2.494_9, f1: 17.691_5, f2: 0.868_606 },
         { energy: 2.535_26, f1: 17.655_3, f2: 0.844_607 },
         { energy: 2.576_26, f1: 17.617_5, f2: 0.821_271 },
         { energy: 2.617_93, f1: 17.577_8, f2: 0.798_579 },
         { energy: 2.660_27, f1: 17.535_9, f2: 0.776_515 },
         { energy: 2.703_3, f1: 17.491_6, f2: 0.755_06 },
         { energy: 2.747_03, f1: 17.444_5, f2: 0.734_198 },
         { energy: 2.791_46, f1: 17.394_4, f2: 0.713_912 },
         { energy: 2.836_61, f1: 17.340_6, f2: 0.694_188 },
         { energy: 2.882_49, f1: 17.282_7, f2: 0.675_007 },
         { energy: 2.929_11, f1: 17.219_9, f2: 0.656_357 },
         { energy: 2.976_48, f1: 17.151_1, f2: 0.638_223 },
         { energy: 3.024_63, f1: 17.075_5, f2: 0.621_143 },
         { energy: 3.073_55, f1: 16.991_9, f2: 0.604_654 },
         { energy: 3.123_26, f1: 16.898_3, f2: 0.588_601 },
         { energy: 3.173_78, f1: 16.791_8, f2: 0.572_976 },
         { energy: 3.225_11, f1: 16.668_8, f2: 0.557_765 },
         { energy: 3.277_27, f1: 16.523_6, f2: 0.542_959 },
         { energy: 3.330_28, f1: 16.347_5, f2: 0.528_544 },
         { energy: 3.384_15, f1: 16.125_5, f2: 0.514_513 },
         { energy: 3.438_88, f1: 15.829_6, f2: 0.500_854 },
         { energy: 3.494_5, f1: 15.395_4, f2: 0.487_557 },
         { energy: 3.551_02, f1: 14.615_6, f2: 0.474_616 },
         { energy: 3.608_3, f1: 6.768_21, f2: 0.462_049 },
         { energy: 3.608_5, f1: 6.769_45, f2: 4.405_4 },
         { energy: 3.666_82, f1: 14.885_3, f2: 4.286_66 },
         { energy: 3.726_13, f1: 15.835_9, f2: 4.171_04 },
         { energy: 3.786_4, f1: 16.405_9, f2: 4.058_53 },
         { energy: 3.847_64, f1: 16.815_1, f2: 3.949_07 },
         { energy: 3.909_87, f1: 17.133_5, f2: 3.842_55 },
         { energy: 3.973_11, f1: 17.392_9, f2: 3.738_91 },
         { energy: 4.037_38, f1: 17.610_5, f2: 3.638_05 },
         { energy: 4.102_68, f1: 17.796_7, f2: 3.539_94 },
         { energy: 4.169_03, f1: 17.958_5, f2: 3.444_45 },
         { energy: 4.236_46, f1: 18.100_6, f2: 3.351_55 },
         { energy: 4.304_98, f1: 18.226_5, f2: 3.261_15 },
         { energy: 4.374_62, f1: 18.338_8, f2: 3.173_19 },
         { energy: 4.445_37, f1: 18.439_5, f2: 3.087_6 },
         { energy: 4.517_27, f1: 18.530_2, f2: 3.004_31 },
         { energy: 4.590_33, f1: 18.612_1, f2: 2.923_28 },
         { energy: 4.664_58, f1: 18.686_5, f2: 2.844_43 },
         { energy: 4.740_03, f1: 18.754_1, f2: 2.767_71 },
         { energy: 4.816_69, f1: 18.815_6, f2: 2.693_06 },
         { energy: 4.894_6, f1: 18.871_7, f2: 2.620_42 },
         { energy: 4.973_77, f1: 18.923, f2: 2.549_74 },
         { energy: 5.054_21, f1: 18.969_9, f2: 2.480_97 },
         { energy: 5.135_96, f1: 19.012_8, f2: 2.414_05 },
         { energy: 5.219_03, f1: 19.052_1, f2: 2.348_93 },
         { energy: 5.303_44, f1: 19.088_1, f2: 2.285_58 },
         { energy: 5.389_22, f1: 19.121_2, f2: 2.223_93 },
         { energy: 5.476_39, f1: 19.151_6, f2: 2.163_7 },
         { energy: 5.564_97, f1: 19.179_3, f2: 2.104_9 },
         { energy: 5.654_98, f1: 19.204_6, f2: 2.047_7 },
         { energy: 5.746_44, f1: 19.227_5, f2: 1.992_06 },
         { energy: 5.839_39, f1: 19.248_5, f2: 1.937_93 },
         { energy: 5.933_83, f1: 19.267_5, f2: 1.885_26 },
         { energy: 6.029_81, f1: 19.284_8, f2: 1.834_03 },
         { energy: 6.127_33, f1: 19.300_6, f2: 1.784_19 },
         { energy: 6.226_44, f1: 19.314_8, f2: 1.735_71 },
         { energy: 6.327_15, f1: 19.327_7, f2: 1.688_54 },
         { energy: 6.429_48, f1: 19.339_3, f2: 1.642_66 },
         { energy: 6.533_48, f1: 19.349_8, f2: 1.598_02 },
         { energy: 6.639_15, f1: 19.359_3, f2: 1.554_59 },
         { energy: 6.746_54, f1: 19.367_7, f2: 1.512_35 },
         { energy: 6.855_65, f1: 19.375_3, f2: 1.471_25 },
         { energy: 6.966_54, f1: 19.382_1, f2: 1.431_27 },
         { energy: 7.079_22, f1: 19.388_1, f2: 1.392_37 },
         { energy: 7.193_72, f1: 19.393_6, f2: 1.354_53 },
         { energy: 7.310_07, f1: 19.398_7, f2: 1.317_72 },
         { energy: 7.428_31, f1: 19.404_1, f2: 1.281_92 },
         { energy: 7.548_45, f1: 19.409_4, f2: 1.245_56 },
         { energy: 7.670_54, f1: 19.413_1, f2: 1.208_49 },
         { energy: 7.794_61, f1: 19.415, f2: 1.172_52 },
         { energy: 7.920_68, f1: 19.415_9, f2: 1.137_63 },
         { energy: 8.048_79, f1: 19.415_8, f2: 1.103_77 },
         { energy: 8.178_98, f1: 19.415_1, f2: 1.070_92 },
         { energy: 8.311_26, f1: 19.413_6, f2: 1.039_05 },
         { energy: 8.445_69, f1: 19.411_5, f2: 1.008_13 },
         { energy: 8.582_29, f1: 19.408_7, f2: 0.978_123 },
         { energy: 8.721_11, f1: 19.405_2, f2: 0.949_014 },
         { energy: 8.862_16, f1: 19.401, f2: 0.921_145 },
         { energy: 9.005_5, f1: 19.396_6, f2: 0.894_684 },
         { energy: 9.151_16, f1: 19.392_1, f2: 0.868_973 },
         { energy: 9.299_17, f1: 19.387_2, f2: 0.843_999 },
         { energy: 9.449_58, f1: 19.381_8, f2: 0.819_666 },
         { energy: 9.602_42, f1: 19.374_6, f2: 0.796_023 },
         { energy: 9.757_73, f1: 19.363_3, f2: 0.773_049 },
         { energy: 9.915_55, f1: 19.359_8, f2: 0.768_755 },
         { energy: 10.075_9, f1: 19.367_8, f2: 0.746_466 },
         { energy: 10.238_9, f1: 19.364_6, f2: 0.724_791 },
         { energy: 10.404_5, f1: 19.361_9, f2: 0.703_714 },
         { energy: 10.572_8, f1: 19.358_8, f2: 0.683_22 },
         { energy: 10.743_8, f1: 19.355_3, f2: 0.663_294 },
         { energy: 10.917_6, f1: 19.351_5, f2: 0.643_921 },
         { energy: 11.094_2, f1: 19.347_5, f2: 0.625_088 },
         { energy: 11.273_6, f1: 19.343_2, f2: 0.606_779 },
         { energy: 11.455_9, f1: 19.338_9, f2: 0.588_981 },
         { energy: 11.641_2, f1: 19.334_4, f2: 0.571_681 },
         { energy: 11.829_5, f1: 19.329_8, f2: 0.554_865 },
         { energy: 12.020_8, f1: 19.325_1, f2: 0.538_52 },
         { energy: 12.215_3, f1: 19.320_3, f2: 0.522_634 },
         { energy: 12.412_8, f1: 19.315_4, f2: 0.507_196 },
         { energy: 12.613_6, f1: 19.310_6, f2: 0.492_191 },
         { energy: 12.817_6, f1: 19.305_6, f2: 0.477_61 },
         { energy: 13.025, f1: 19.300_7, f2: 0.463_44 },
         { energy: 13.235_6, f1: 19.295_7, f2: 0.449_671 },
         { energy: 13.449_7, f1: 19.290_7, f2: 0.436_292 },
         { energy: 13.667_2, f1: 19.285_7, f2: 0.423_291 },
         { energy: 13.888_3, f1: 19.280_7, f2: 0.410_659 },
         { energy: 14.112_9, f1: 19.275_6, f2: 0.398_386 },
         { energy: 14.341_2, f1: 19.270_6, f2: 0.386_461 },
         { energy: 14.573_1, f1: 19.265_7, f2: 0.374_876 },
         { energy: 14.808_9, f1: 19.260_7, f2: 0.363_621 },
         { energy: 15.048_4, f1: 19.255_7, f2: 0.352_686 },
         { energy: 15.291_8, f1: 19.250_8, f2: 0.342_063 },
         { energy: 15.539_1, f1: 19.245_9, f2: 0.331_743 },
         { energy: 15.790_4, f1: 19.241_1, f2: 0.321_718 },
         { energy: 16.045_8, f1: 19.236_2, f2: 0.311_98 },
         { energy: 16.305_4, f1: 19.231_4, f2: 0.302_52 },
         { energy: 16.569_1, f1: 19.226_7, f2: 0.293_331 },
         { energy: 16.837_1, f1: 19.222, f2: 0.284_406 },
         { energy: 17.109_4, f1: 19.217_3, f2: 0.275_736 },
         { energy: 17.386_1, f1: 19.212_7, f2: 0.267_315 },
         { energy: 17.667_4, f1: 19.208_1, f2: 0.259_135 },
         { energy: 17.953_1, f1: 19.203_6, f2: 0.251_191 },
         { energy: 18.243_5, f1: 19.199_1, f2: 0.243_474 },
         { energy: 18.538_6, f1: 19.194_7, f2: 0.235_98 },
         { energy: 18.838_4, f1: 19.190_3, f2: 0.228_701 },
         { energy: 19.143_1, f1: 19.186, f2: 0.221_631 },
         { energy: 19.452_7, f1: 19.181_7, f2: 0.214_765 },
         { energy: 19.767_4, f1: 19.177_5, f2: 0.208_096 },
         { energy: 20.087_1, f1: 19.173_3, f2: 0.201_622 },
         { energy: 20.412, f1: 19.169_2, f2: 0.195_337 },
         { energy: 20.742_1, f1: 19.165_2, f2: 0.189_239 },
         { energy: 21.077_6, f1: 19.161_1, f2: 0.183_324 },
         { energy: 21.418_5, f1: 19.157_2, f2: 0.177_585 },
         { energy: 21.765, f1: 19.153_3, f2: 0.172_019 },
         { energy: 22.117, f1: 19.149_4, f2: 0.166_62 },
         { energy: 22.474_7, f1: 19.145_7, f2: 0.161_384 },
         { energy: 22.838_2, f1: 19.141_9, f2: 0.156_305 },
         { energy: 23.207_6, f1: 19.138_2, f2: 0.151_379 },
         { energy: 23.583, f1: 19.134_6, f2: 0.146_603 },
         { energy: 23.964_4, f1: 19.131_1, f2: 0.141_971 },
         { energy: 24.352, f1: 19.127_6, f2: 0.137_48 },
         { energy: 24.745_9, f1: 19.124_1, f2: 0.133_125 },
         { energy: 25.146_2, f1: 19.120_8, f2: 0.128_903 },
         { energy: 25.552_9, f1: 19.117_4, f2: 0.124_809 },
         { energy: 25.966_2, f1: 19.114_2, f2: 0.120_84 },
         { energy: 26.386_1, f1: 19.110_9, f2: 0.116_993 },
         { energy: 26.812_9, f1: 19.107_8, f2: 0.113_263 },
         { energy: 27.246_6, f1: 19.104_7, f2: 0.109_648 },
         { energy: 27.687_3, f1: 19.101_7, f2: 0.106_144 },
         { energy: 28.135_1, f1: 19.098_7, f2: 0.102_747 },
         { energy: 28.590_2, f1: 19.095_7, f2: 0.099_455_4 },
         { energy: 29.052_6, f1: 19.092_9, f2: 0.096_265 },
         { energy: 29.522_5, f1: 19.09, f2: 0.093_173_1 },
         { energy: 30.0, f1: 19.087_3, f2: 0.090_176_8 },
    ],
    neutron_scattering: {
        b_c: { value: 3.67, uncertainty: 0.02},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 1.69, uncertainty: 0.02},
        bound_incoherent_scattering_xs: { value: 0.27, uncertainty: 0.11},
        total_bound_scattering_xs: { value: 1.96, uncertainty: 0.11},
        absorption_xs: { value: 2.1, uncertainty: 0.1},
    },
    isotopes: [
        { 
            mass_number: 32,
            mass: { value: 32.021_92, uncertainty: 0.000_54},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 33,
            mass: { value: 33.007_26, uncertainty: 0.000_21},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 34,
            mass: { value: 33.998_41, uncertainty: 0.000_32},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 35,
            mass: { value: 34.988_012, uncertainty: 0.000_021},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 36,
            mass: { value: 35.981_293, uncertainty: 0.000_008},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 37,
            mass: { value: 36.973_376_91, uncertainty: 0.000_000_29},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 38,
            mass: { value: 37.969_080_1, uncertainty: 0.000_000_8},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 39,
            mass: { value: 38.963_706_9, uncertainty: 0.000_000_3},
            abundance: { value: 93.258_1, uncertainty: 0.004_4},
            neutron_scattering: {
                    b_c: { value: 3.79, uncertainty: 0.02},
                    b_p: { value: 5.15, uncertainty: 0.0 },
                    b_m: { value: 1.51, uncertainty: 0.0 },
                    bound_coherent_scattering_xs: { value: 1.76, uncertainty: 0.02},
                    bound_incoherent_scattering_xs: { value: 0.25, uncertainty: 0.11},
                    total_bound_scattering_xs: { value: 2.01, uncertainty: 0.11},
                    absorption_xs: { value: 2.1, uncertainty: 0.1},
                },
        },
        { 
            mass_number: 40,
            mass: { value: 39.963_998_67, uncertainty: 0.000_000_29},
            abundance: { value: 0.011_7, uncertainty: 0.000_1},
            neutron_scattering: {
                    b_c: { value: 3.1, uncertainty: 1.0},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 1.1, uncertainty: 0.6},
                    bound_incoherent_scattering_xs: { value: 0.5, uncertainty: 0.5},
                    total_bound_scattering_xs: { value: 1.6, uncertainty: 0.9},
                    absorption_xs: { value: 35.0, uncertainty: 8.0},
                },
        },
        { 
            mass_number: 41,
            mass: { value: 40.961_825_97, uncertainty: 0.000_000_28},
            abundance: { value: 6.730_2, uncertainty: 0.004_4},
            neutron_scattering: {
                    b_c: { value: 2.69, uncertainty: 0.08},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 0.91, uncertainty: 0.05},
                    bound_incoherent_scattering_xs: { value: 0.3, uncertainty: 0.6},
                    total_bound_scattering_xs: { value: 1.2, uncertainty: 0.6},
                    absorption_xs: { value: 1.46, uncertainty: 0.03},
                },
        },
        { 
            mass_number: 42,
            mass: { value: 41.962_403_1, uncertainty: 0.000_000_3},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 43,
            mass: { value: 42.960_716, uncertainty: 0.000_010},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 44,
            mass: { value: 43.961_56, uncertainty: 0.000_40},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 45,
            mass: { value: 44.960_7, uncertainty: 0.001_1},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 46,
            mass: { value: 45.961_976, uncertainty: 0.000_017},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 47,
            mass: { value: 46.961_678, uncertainty: 0.000_009},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 48,
            mass: { value: 47.965_513, uncertainty: 0.000_026},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 49,
            mass: { value: 48.967_45, uncertainty: 0.000_80},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 50,
            mass: { value: 49.972_78, uncertainty: 0.000_30},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 51,
            mass: { value: 50.976_38, uncertainty: 0.000_54},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 52,
            mass: { value: 51.982_61, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 53,
            mass: { value: 52.987_12, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 54,
            mass: { value: 53.993_99, uncertainty: 0.000_97},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 55,
            mass: { value: 54.999_39, uncertainty: 0.001_07},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {K};
