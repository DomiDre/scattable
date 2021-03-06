const Co = {
    atomic_number: 27,
    name: 'Cobalt',
    symbol: 'Co',
    mass: 58.933_2,
    common_ions: [2, 3],
    uncommon_ions: [-3, -1, 1, 4, 5],
    xray_scattering: [
         { energy: 0.01, f1: undefined, f2: 1.420_71 },
         { energy: 0.010_161_7, f1: undefined, f2: 1.459_25 },
         { energy: 0.010_326_1, f1: undefined, f2: 1.498_84 },
         { energy: 0.010_493_1, f1: undefined, f2: 1.539_49 },
         { energy: 0.010_662_8, f1: undefined, f2: 1.581_25 },
         { energy: 0.010_835_3, f1: undefined, f2: 1.624_15 },
         { energy: 0.011_010_6, f1: undefined, f2: 1.668_2 },
         { energy: 0.011_188_6, f1: undefined, f2: 1.713_45 },
         { energy: 0.011_369_6, f1: undefined, f2: 1.759_93 },
         { energy: 0.011_553_5, f1: undefined, f2: 1.807_67 },
         { energy: 0.011_740_4, f1: undefined, f2: 1.856_71 },
         { energy: 0.011_930_3, f1: undefined, f2: 1.907_07 },
         { energy: 0.012_123_2, f1: undefined, f2: 1.946_82 },
         { energy: 0.012_319_3, f1: undefined, f2: 1.986 },
         { energy: 0.012_518_6, f1: undefined, f2: 2.025_96 },
         { energy: 0.012_721, f1: undefined, f2: 2.066_74 },
         { energy: 0.012_926_8, f1: undefined, f2: 2.108_33 },
         { energy: 0.013_135_9, f1: undefined, f2: 2.150_76 },
         { energy: 0.013_348_3, f1: undefined, f2: 2.194_04 },
         { energy: 0.013_564_2, f1: undefined, f2: 2.238_19 },
         { energy: 0.013_783_6, f1: undefined, f2: 2.283_23 },
         { energy: 0.014_006_6, f1: undefined, f2: 2.329_18 },
         { energy: 0.014_233_1, f1: undefined, f2: 2.376_05 },
         { energy: 0.014_463_3, f1: undefined, f2: 2.423_71 },
         { energy: 0.014_697_3, f1: undefined, f2: 2.471_99 },
         { energy: 0.014_935, f1: undefined, f2: 2.521_23 },
         { energy: 0.015_176_5, f1: undefined, f2: 2.571_46 },
         { energy: 0.015_422, f1: undefined, f2: 2.622_68 },
         { energy: 0.015_671_4, f1: undefined, f2: 2.674_92 },
         { energy: 0.015_924_9, f1: undefined, f2: 2.728_21 },
         { energy: 0.016_182_5, f1: undefined, f2: 2.782_55 },
         { energy: 0.016_444_2, f1: undefined, f2: 2.837_98 },
         { energy: 0.016_710_2, f1: undefined, f2: 2.894_52 },
         { energy: 0.016_980_5, f1: undefined, f2: 2.952_17 },
         { energy: 0.017_255_1, f1: undefined, f2: 3.002_03 },
         { energy: 0.017_534_2, f1: undefined, f2: 3.044_55 },
         { energy: 0.017_817_8, f1: undefined, f2: 3.087_68 },
         { energy: 0.018_106, f1: undefined, f2: 3.131_42 },
         { energy: 0.018_398_9, f1: undefined, f2: 3.175_78 },
         { energy: 0.018_696_4, f1: undefined, f2: 3.220_76 },
         { energy: 0.018_998_8, f1: undefined, f2: 3.266_39 },
         { energy: 0.019_306_1, f1: undefined, f2: 3.312_66 },
         { energy: 0.019_618_4, f1: undefined, f2: 3.359_58 },
         { energy: 0.019_935_7, f1: undefined, f2: 3.407 },
         { energy: 0.020_258_2, f1: undefined, f2: 3.451_66 },
         { energy: 0.020_585_8, f1: undefined, f2: 3.496_9 },
         { energy: 0.020_918_8, f1: undefined, f2: 3.542_74 },
         { energy: 0.021_257_1, f1: undefined, f2: 3.589_17 },
         { energy: 0.021_600_9, f1: undefined, f2: 3.636_22 },
         { energy: 0.021_950_3, f1: undefined, f2: 3.683_88 },
         { energy: 0.022_305_3, f1: undefined, f2: 3.732_17 },
         { energy: 0.022_666_1, f1: undefined, f2: 3.781_09 },
         { energy: 0.023_032_7, f1: undefined, f2: 3.830_65 },
         { energy: 0.023_405_3, f1: undefined, f2: 3.880_86 },
         { energy: 0.023_783_8, f1: undefined, f2: 3.931_73 },
         { energy: 0.024_168_5, f1: undefined, f2: 3.983_27 },
         { energy: 0.024_559_4, f1: undefined, f2: 4.027_21 },
         { energy: 0.024_956_6, f1: undefined, f2: 4.064_35 },
         { energy: 0.025_360_3, f1: undefined, f2: 4.101_83 },
         { energy: 0.025_770_5, f1: undefined, f2: 4.139_66 },
         { energy: 0.026_187_3, f1: undefined, f2: 4.177_84 },
         { energy: 0.026_610_9, f1: undefined, f2: 4.216_37 },
         { energy: 0.027_041_3, f1: undefined, f2: 4.255_26 },
         { energy: 0.027_478_6, f1: undefined, f2: 4.294_5 },
         { energy: 0.027_923_1, f1: undefined, f2: 4.334_11 },
         { energy: 0.028_374_7, f1: undefined, f2: 4.363_66 },
         { energy: 0.028_833_7, f1: undefined, f2: 4.358_57 },
         { energy: 0.029_3, f1: 3.982_51, f2: 4.353_48 },
         { energy: 0.029_773_9, f1: 4.050_81, f2: 4.348_4 },
         { energy: 0.030_255_5, f1: 4.114_38, f2: 4.343_33 },
         { energy: 0.030_744_9, f1: 4.174_42, f2: 4.338_26 },
         { energy: 0.031_242_1, f1: 4.231_78, f2: 4.333_2 },
         { energy: 0.031_747_5, f1: 4.287_23, f2: 4.328_14 },
         { energy: 0.032_260_9, f1: 4.341_62, f2: 4.323_08 },
         { energy: 0.032_782_7, f1: 4.398_19, f2: 4.318_04 },
         { energy: 0.033_313, f1: 4.461_59, f2: 4.302 },
         { energy: 0.033_851_8, f1: 4.510_57, f2: 4.277_1 },
         { energy: 0.034_399_3, f1: 4.551_07, f2: 4.252_34 },
         { energy: 0.034_955_7, f1: 4.585_79, f2: 4.227_73 },
         { energy: 0.035_521_1, f1: 4.615_16, f2: 4.203_26 },
         { energy: 0.036_095_6, f1: 4.639_25, f2: 4.178_93 },
         { energy: 0.036_679_4, f1: 4.657_65, f2: 4.154_73 },
         { energy: 0.037_272_7, f1: 4.668_4, f2: 4.130_69 },
         { energy: 0.037_875_5, f1: 4.674_46, f2: 4.115_92 },
         { energy: 0.038_488_2, f1: 4.680_6, f2: 4.101_81 },
         { energy: 0.039_110_7, f1: 4.684_68, f2: 4.087_75 },
         { energy: 0.039_743_2, f1: 4.685_56, f2: 4.073_74 },
         { energy: 0.040_386_1, f1: 4.682_76, f2: 4.059_77 },
         { energy: 0.041_039_3, f1: 4.675_85, f2: 4.045_86 },
         { energy: 0.041_703_1, f1: 4.664_34, f2: 4.031_99 },
         { energy: 0.042_377_6, f1: 4.647_8, f2: 4.018_53 },
         { energy: 0.043_063, f1: 4.626_11, f2: 4.005_28 },
         { energy: 0.043_759_5, f1: 4.598_55, f2: 3.992_06 },
         { energy: 0.044_467_3, f1: 4.564_4, f2: 3.978_89 },
         { energy: 0.045_186_5, f1: 4.522_8, f2: 3.965_76 },
         { energy: 0.045_917_4, f1: 4.472_71, f2: 3.952_68 },
         { energy: 0.046_66, f1: 4.412_79, f2: 3.939_68 },
         { energy: 0.047_414_7, f1: 4.341_77, f2: 3.927_25 },
         { energy: 0.048_181_6, f1: 4.257_82, f2: 3.914_87 },
         { energy: 0.048_960_9, f1: 4.158_2, f2: 3.902_52 },
         { energy: 0.049_752_8, f1: 4.038_7, f2: 3.890_21 },
         { energy: 0.050_557_6, f1: 3.892_04, f2: 3.877_94 },
         { energy: 0.051_375_3, f1: 3.713_61, f2: 3.879_3 },
         { energy: 0.052_206_2, f1: 3.504_55, f2: 3.885_47 },
         { energy: 0.053_050_6, f1: 3.231_45, f2: 3.898_69 },
         { energy: 0.053_908_7, f1: 2.924_56, f2: 3.990_62 },
         { energy: 0.054_780_6, f1: 2.578_71, f2: 4.084_73 },
         { energy: 0.055_666_7, f1: 2.120_07, f2: 4.216_66 },
         { energy: 0.056_567, f1: 1.507_81, f2: 4.403_44 },
         { energy: 0.057_482, f1: 0.481_044, f2: 5.046_5 },
         { energy: 0.058_411_7, f1: -0.135_5, f2: 6.268_67 },
         { energy: 0.059_356_4, f1: -0.348_01, f2: 7.786_83 },
         { energy: 0.060_316_5, f1: 0.174_934, f2: 9.672_73 },
         { energy: 0.061_292_1, f1: 1.785_64, f2: 10.653_7 },
         { energy: 0.062_283_4, f1: 3.050_37, f2: 11.049_1 },
         { energy: 0.063_290_8, f1: 4.178_87, f2: 10.944 },
         { energy: 0.064_314_5, f1: 4.941_2, f2: 10.695 },
         { energy: 0.065_354_7, f1: 5.472_62, f2: 10.472_2 },
         { energy: 0.066_411_8, f1: 5.920_47, f2: 10.275_7 },
         { energy: 0.067_485_9, f1: 6.301_38, f2: 10.082_8 },
         { energy: 0.068_577_5, f1: 6.623_07, f2: 9.893_49 },
         { energy: 0.069_686_7, f1: 6.891_14, f2: 9.707_77 },
         { energy: 0.070_813_8, f1: 7.097_57, f2: 9.542_02 },
         { energy: 0.071_959_1, f1: 7.291_07, f2: 9.409_58 },
         { energy: 0.073_123, f1: 7.466_32, f2: 9.278_99 },
         { energy: 0.074_305_7, f1: 7.617_56, f2: 9.150_2 },
         { energy: 0.075_507_6, f1: 7.735_33, f2: 9.023_21 },
         { energy: 0.076_728_9, f1: 7.787_07, f2: 8.899_86 },
         { energy: 0.077_969_9, f1: 7.841_23, f2: 8.898_39 },
         { energy: 0.079_231, f1: 7.934_3, f2: 8.896_92 },
         { energy: 0.080_512_5, f1: 8.040_89, f2: 8.895_45 },
         { energy: 0.081_814_7, f1: 8.153_64, f2: 8.893_97 },
         { energy: 0.083_138, f1: 8.269_45, f2: 8.892_51 },
         { energy: 0.084_482_7, f1: 8.386_56, f2: 8.891_03 },
         { energy: 0.085_849_1, f1: 8.503_8, f2: 8.889_57 },
         { energy: 0.087_237_7, f1: 8.620_13, f2: 8.888_1 },
         { energy: 0.088_648_7, f1: 8.733_91, f2: 8.886_63 },
         { energy: 0.090_082_5, f1: 8.840_08, f2: 8.885_16 },
         { energy: 0.091_539_5, f1: 8.943_02, f2: 8.901_85 },
         { energy: 0.093_020_1, f1: 9.057_32, f2: 8.924_56 },
         { energy: 0.094_524_6, f1: 9.178_02, f2: 8.947_31 },
         { energy: 0.096_053_5, f1: 9.303_36, f2: 8.970_14 },
         { energy: 0.097_607_1, f1: 9.433_02, f2: 8.993_01 },
         { energy: 0.099_185_8, f1: 9.567_27, f2: 9.015_95 },
         { energy: 0.100_79, f1: 9.707_15, f2: 9.038_94 },
         { energy: 0.102_42, f1: 9.855_58, f2: 9.061_99 },
         { energy: 0.104_077, f1: 10.024_4, f2: 9.076_17 },
         { energy: 0.105_76, f1: 10.182_1, f2: 9.059_84 },
         { energy: 0.107_471, f1: 10.328_9, f2: 9.043_53 },
         { energy: 0.109_209, f1: 10.469_6, f2: 9.027_26 },
         { energy: 0.110_975, f1: 10.607, f2: 9.011_02 },
         { energy: 0.112_77, f1: 10.741_9, f2: 8.994_79 },
         { energy: 0.114_594, f1: 10.875_1, f2: 8.978_6 },
         { energy: 0.116_448, f1: 11.006_8, f2: 8.962_45 },
         { energy: 0.118_331, f1: 11.137_5, f2: 8.946_33 },
         { energy: 0.120_245, f1: 11.267_4, f2: 8.930_22 },
         { energy: 0.122_19, f1: 11.396_7, f2: 8.914_15 },
         { energy: 0.124_166, f1: 11.525_6, f2: 8.898_11 },
         { energy: 0.126_175, f1: 11.653_3, f2: 8.882_1 },
         { energy: 0.128_215, f1: 11.768_9, f2: 8.876_6 },
         { energy: 0.130_289, f1: 11.924_3, f2: 8.887_91 },
         { energy: 0.132_397, f1: 12.079_1, f2: 8.851_18 },
         { energy: 0.134_538, f1: 12.220_9, f2: 8.814_53 },
         { energy: 0.136_714, f1: 12.355_3, f2: 8.778_04 },
         { energy: 0.138_925, f1: 12.486_2, f2: 8.741_72 },
         { energy: 0.141_172, f1: 12.614_7, f2: 8.705_59 },
         { energy: 0.143_456, f1: 12.741_6, f2: 8.669_63 },
         { energy: 0.145_776, f1: 12.867_4, f2: 8.633_79 },
         { energy: 0.148_134, f1: 12.992_6, f2: 8.598_04 },
         { energy: 0.150_53, f1: 13.117_5, f2: 8.562_4 },
         { energy: 0.152_964, f1: 13.243, f2: 8.527_1 },
         { energy: 0.155_439, f1: 13.370_5, f2: 8.491_88 },
         { energy: 0.157_953, f1: 13.503_6, f2: 8.456_77 },
         { energy: 0.160_507, f1: 13.637_7, f2: 8.409_11 },
         { energy: 0.163_103, f1: 13.772_3, f2: 8.356 },
         { energy: 0.165_742, f1: 13.897_3, f2: 8.295_84 },
         { energy: 0.168_422, f1: 14.016_7, f2: 8.236_02 },
         { energy: 0.171_146, f1: 14.132_3, f2: 8.176_63 },
         { energy: 0.173_915, f1: 14.245_3, f2: 8.117_67 },
         { energy: 0.176_727, f1: 14.356_2, f2: 8.059_21 },
         { energy: 0.179_586, f1: 14.465_7, f2: 8.001_18 },
         { energy: 0.182_491, f1: 14.574_5, f2: 7.943_57 },
         { energy: 0.185_442, f1: 14.683_5, f2: 7.886_32 },
         { energy: 0.188_442, f1: 14.794_7, f2: 7.827_54 },
         { energy: 0.191_489, f1: 14.908_6, f2: 7.765_16 },
         { energy: 0.194_587, f1: 15.016_2, f2: 7.693_06 },
         { energy: 0.197_734, f1: 15.118_3, f2: 7.621_72 },
         { energy: 0.200_932, f1: 15.217, f2: 7.551_1 },
         { energy: 0.204_182, f1: 15.313_6, f2: 7.481 },
         { energy: 0.207_485, f1: 15.409_8, f2: 7.410_66 },
         { energy: 0.210_84, f1: 15.506, f2: 7.339_87 },
         { energy: 0.214_251, f1: 15.598_8, f2: 7.261_83 },
         { energy: 0.217_716, f1: 15.686_4, f2: 7.184_23 },
         { energy: 0.221_237, f1: 15.77, f2: 7.107_47 },
         { energy: 0.224_816, f1: 15.851, f2: 7.031_72 },
         { energy: 0.228_452, f1: 15.93, f2: 6.956_7 },
         { energy: 0.232_147, f1: 16.007_3, f2: 6.882_36 },
         { energy: 0.235_902, f1: 16.084, f2: 6.808_89 },
         { energy: 0.239_717, f1: 16.161_4, f2: 6.733_46 },
         { energy: 0.243_595, f1: 16.235_4, f2: 6.655_5 },
         { energy: 0.247_535, f1: 16.305_9, f2: 6.575_87 },
         { energy: 0.251_538, f1: 16.372_5, f2: 6.496_9 },
         { energy: 0.255_607, f1: 16.436_4, f2: 6.418_91 },
         { energy: 0.259_741, f1: 16.498_2, f2: 6.341_75 },
         { energy: 0.263_942, f1: 16.558_4, f2: 6.265_51 },
         { energy: 0.268_211, f1: 16.619_1, f2: 6.190_16 },
         { energy: 0.272_549, f1: 16.677_9, f2: 6.110_7 },
         { energy: 0.276_957, f1: 16.732_7, f2: 6.030_7 },
         { energy: 0.281_437, f1: 16.783_9, f2: 5.951_19 },
         { energy: 0.285_989, f1: 16.832_3, f2: 5.872_52 },
         { energy: 0.290_615, f1: 16.878_2, f2: 5.794_87 },
         { energy: 0.295_315, f1: 16.922_7, f2: 5.718_31 },
         { energy: 0.300_092, f1: 16.965_5, f2: 5.641_28 },
         { energy: 0.304_945, f1: 17.006_8, f2: 5.563_94 },
         { energy: 0.309_878, f1: 17.044_6, f2: 5.486_05 },
         { energy: 0.314_89, f1: 17.079_3, f2: 5.409_04 },
         { energy: 0.319_983, f1: 17.111_5, f2: 5.333_16 },
         { energy: 0.325_158, f1: 17.142_5, f2: 5.258_52 },
         { energy: 0.330_418, f1: 17.171_5, f2: 5.182_98 },
         { energy: 0.335_762, f1: 17.198_2, f2: 5.107_62 },
         { energy: 0.341_192, f1: 17.221_8, f2: 5.032_29 },
         { energy: 0.346_711, f1: 17.242_4, f2: 4.957_93 },
         { energy: 0.352_319, f1: 17.260_6, f2: 4.884_64 },
         { energy: 0.358_017, f1: 17.277_4, f2: 4.812_43 },
         { energy: 0.363_808, f1: 17.291_9, f2: 4.739_13 },
         { energy: 0.369_692, f1: 17.303_1, f2: 4.666_42 },
         { energy: 0.375_672, f1: 17.311_3, f2: 4.594_58 },
         { energy: 0.381_748, f1: 17.317, f2: 4.523_85 },
         { energy: 0.387_922, f1: 17.320_7, f2: 4.453_74 },
         { energy: 0.394_197, f1: 17.321_5, f2: 4.383_67 },
         { energy: 0.400_573, f1: 17.319_4, f2: 4.313_98 },
         { energy: 0.407_052, f1: 17.314, f2: 4.245_1 },
         { energy: 0.413_635, f1: 17.305_9, f2: 4.177_33 },
         { energy: 0.420_326, f1: 17.294_9, f2: 4.109_64 },
         { energy: 0.427_124, f1: 17.280_9, f2: 4.042_63 },
         { energy: 0.434_032, f1: 17.263_1, f2: 3.975_9 },
         { energy: 0.441_052, f1: 17.241_7, f2: 3.910_23 },
         { energy: 0.448_186, f1: 17.217_2, f2: 3.845_46 },
         { energy: 0.455_435, f1: 17.188_9, f2: 3.780_9 },
         { energy: 0.462_802, f1: 17.156_5, f2: 3.717_17 },
         { energy: 0.470_287, f1: 17.12, f2: 3.654_38 },
         { energy: 0.477_894, f1: 17.08, f2: 3.592_62 },
         { energy: 0.485_623, f1: 17.035_5, f2: 3.530_09 },
         { energy: 0.493_478, f1: 16.985_2, f2: 3.467_97 },
         { energy: 0.501_459, f1: 16.929_1, f2: 3.406_95 },
         { energy: 0.509_57, f1: 16.867_3, f2: 3.347_01 },
         { energy: 0.517_812, f1: 16.799, f2: 3.288_28 },
         { energy: 0.526_187, f1: 16.724_3, f2: 3.231_15 },
         { energy: 0.534_698, f1: 16.643_1, f2: 3.176_12 },
         { energy: 0.543_346, f1: 16.555_8, f2: 3.122_57 },
         { energy: 0.552_134, f1: 16.462_2, f2: 3.069_98 },
         { energy: 0.561_065, f1: 16.360_7, f2: 3.015_58 },
         { energy: 0.570_139, f1: 16.247_8, f2: 2.961_12 },
         { energy: 0.579_361, f1: 16.123_6, f2: 2.909_27 },
         { energy: 0.588_732, f1: 15.988_1, f2: 2.858_82 },
         { energy: 0.598_254, f1: 15.840_1, f2: 2.809_54 },
         { energy: 0.607_93, f1: 15.677_9, f2: 2.761_06 },
         { energy: 0.617_763, f1: 15.499_4, f2: 2.713_46 },
         { energy: 0.627_755, f1: 15.302_8, f2: 2.666_56 },
         { energy: 0.637_908, f1: 15.084_7, f2: 2.618_48 },
         { energy: 0.648_226, f1: 14.839_6, f2: 2.568_38 },
         { energy: 0.658_711, f1: 14.559_6, f2: 2.517_37 },
         { energy: 0.669_365, f1: 14.237_6, f2: 2.467_41 },
         { energy: 0.680_191, f1: 13.865_1, f2: 2.423_81 },
         { energy: 0.691_193, f1: 13.435_2, f2: 2.385_06 },
         { energy: 0.702_372, f1: 12.932_6, f2: 2.347_79 },
         { energy: 0.713_733, f1: 12.325_9, f2: 2.306_98 },
         { energy: 0.725_277, f1: 11.564_7, f2: 2.264_06 },
         { energy: 0.737_008, f1: 10.567_7, f2: 2.221_89 },
         { energy: 0.748_928, f1: 9.163_23, f2: 2.180_51 },
         { energy: 0.761_042, f1: 6.884_03, f2: 2.139_89 },
         { energy: 0.773_351, f1: 1.200_92, f2: 2.100_04 },
         { energy: 0.778, f1: -16.669_7, f2: 2.085_34 },
         { energy: 0.778_2, f1: -16.657_4, f2: 16.755_4 },
         { energy: 0.785_859, f1: 3.900_51, f2: 16.566_5 },
         { energy: 0.798_57, f1: 8.677_26, f2: 16.261_8 },
         { energy: 0.811_486, f1: 11.142_4, f2: 15.962_8 },
         { energy: 0.824_611, f1: 12.829, f2: 15.669_2 },
         { energy: 0.837_949, f1: 14.111_5, f2: 15.380_9 },
         { energy: 0.851_502, f1: 15.144_7, f2: 15.098_8 },
         { energy: 0.865_274, f1: 16.001_9, f2: 14.799_1 },
         { energy: 0.879_269, f1: 16.697_5, f2: 14.485 },
         { energy: 0.893_491, f1: 17.123_6, f2: 14.165 },
         { energy: 0.907_943, f1: 17.357, f2: 14.128_1 },
         { energy: 0.922_628, f1: 17.803_4, f2: 14.397_9 },
         { energy: 0.937_551, f1: 18.511_8, f2: 14.672_8 },
         { energy: 0.952_715, f1: 19.468_3, f2: 14.630_3 },
         { energy: 0.968_124, f1: 20.257_1, f2: 14.281_4 },
         { energy: 0.983_783, f1: 20.818, f2: 13.941_2 },
         { energy: 0.999_695, f1: 21.302_2, f2: 13.612_2 },
         { energy: 1.015_86, f1: 21.715_1, f2: 13.294_3 },
         { energy: 1.032_29, f1: 22.092, f2: 13.013_6 },
         { energy: 1.048_99, f1: 22.450_6, f2: 12.734 },
         { energy: 1.065_96, f1: 22.780_2, f2: 12.454_8 },
         { energy: 1.083_2, f1: 23.082_2, f2: 12.181_9 },
         { energy: 1.100_72, f1: 23.361_7, f2: 11.914_9 },
         { energy: 1.118_52, f1: 23.621_4, f2: 11.653_9 },
         { energy: 1.136_61, f1: 23.863_1, f2: 11.398_4 },
         { energy: 1.155, f1: 24.088_5, f2: 11.148_6 },
         { energy: 1.173_68, f1: 24.299_4, f2: 10.904_3 },
         { energy: 1.192_66, f1: 24.497_2, f2: 10.665_3 },
         { energy: 1.211_95, f1: 24.683, f2: 10.431_5 },
         { energy: 1.231_55, f1: 24.859_8, f2: 10.202_9 },
         { energy: 1.251_47, f1: 25.027, f2: 9.976_41 },
         { energy: 1.271_72, f1: 25.185_1, f2: 9.751_68 },
         { energy: 1.292_29, f1: 25.331_3, f2: 9.528_08 },
         { energy: 1.313_19, f1: 25.465_7, f2: 9.309_75 },
         { energy: 1.334_43, f1: 25.591, f2: 9.096_4 },
         { energy: 1.356_01, f1: 25.708, f2: 8.887_87 },
         { energy: 1.377_94, f1: 25.817_4, f2: 8.684_15 },
         { energy: 1.400_23, f1: 25.92, f2: 8.485_11 },
         { energy: 1.422_88, f1: 26.016_4, f2: 8.290_65 },
         { energy: 1.445_89, f1: 26.107_5, f2: 8.100_59 },
         { energy: 1.469_28, f1: 26.193_8, f2: 7.914_22 },
         { energy: 1.493_04, f1: 26.276_8, f2: 7.731_12 },
         { energy: 1.517_19, f1: 26.353_9, f2: 7.547_75 },
         { energy: 1.541_73, f1: 26.423_6, f2: 7.368_08 },
         { energy: 1.566_67, f1: 26.487_7, f2: 7.192_61 },
         { energy: 1.592_01, f1: 26.546_9, f2: 7.021_42 },
         { energy: 1.617_76, f1: 26.601_9, f2: 6.854_3 },
         { energy: 1.643_92, f1: 26.653, f2: 6.691_18 },
         { energy: 1.670_51, f1: 26.700_9, f2: 6.532_01 },
         { energy: 1.697_53, f1: 26.746_2, f2: 6.376_59 },
         { energy: 1.724_99, f1: 26.790_8, f2: 6.224_8 },
         { energy: 1.752_89, f1: 26.832_4, f2: 6.071_19 },
         { energy: 1.781_24, f1: 26.869_4, f2: 5.919_59 },
         { energy: 1.810_05, f1: 26.901, f2: 5.770_49 },
         { energy: 1.839_32, f1: 26.928_6, f2: 5.625_17 },
         { energy: 1.869_07, f1: 26.952_8, f2: 5.483_47 },
         { energy: 1.899_3, f1: 26.974_1, f2: 5.345_28 },
         { energy: 1.930_02, f1: 26.992_6, f2: 5.210_58 },
         { energy: 1.961_24, f1: 27.008_9, f2: 5.079_32 },
         { energy: 1.992_96, f1: 27.022_3, f2: 4.951_48 },
         { energy: 2.025_2, f1: 27.036_1, f2: 4.829_06 },
         { energy: 2.057_95, f1: 27.048_8, f2: 4.704_87 },
         { energy: 2.091_24, f1: 27.058_5, f2: 4.583_52 },
         { energy: 2.125_06, f1: 27.065_7, f2: 4.464_56 },
         { energy: 2.159_43, f1: 27.070_5, f2: 4.348_37 },
         { energy: 2.194_36, f1: 27.073_7, f2: 4.235_09 },
         { energy: 2.229_85, f1: 27.075_1, f2: 4.124_25 },
         { energy: 2.265_92, f1: 27.074_8, f2: 4.015_92 },
         { energy: 2.302_57, f1: 27.072_9, f2: 3.910_18 },
         { energy: 2.339_81, f1: 27.069_5, f2: 3.806_84 },
         { energy: 2.377_66, f1: 27.064_7, f2: 3.706_09 },
         { energy: 2.416_11, f1: 27.058_6, f2: 3.607_55 },
         { energy: 2.455_19, f1: 27.051_3, f2: 3.511_69 },
         { energy: 2.494_9, f1: 27.042_9, f2: 3.417_89 },
         { energy: 2.535_26, f1: 27.033_3, f2: 3.326_45 },
         { energy: 2.576_26, f1: 27.022_7, f2: 3.237_28 },
         { energy: 2.617_93, f1: 27.011_2, f2: 3.150_31 },
         { energy: 2.660_27, f1: 26.998_7, f2: 3.065_47 },
         { energy: 2.703_3, f1: 26.985_4, f2: 2.982_78 },
         { energy: 2.747_03, f1: 26.971_3, f2: 2.902_13 },
         { energy: 2.791_46, f1: 26.956_4, f2: 2.823_54 },
         { energy: 2.836_61, f1: 26.940_9, f2: 2.746_95 },
         { energy: 2.882_49, f1: 26.924_7, f2: 2.672_29 },
         { energy: 2.929_11, f1: 26.907_8, f2: 2.599_56 },
         { energy: 2.976_48, f1: 26.890_4, f2: 2.528_68 },
         { energy: 3.024_63, f1: 26.872_4, f2: 2.459_62 },
         { energy: 3.073_55, f1: 26.853_9, f2: 2.392_38 },
         { energy: 3.123_26, f1: 26.834_9, f2: 2.326_86 },
         { energy: 3.173_78, f1: 26.815_5, f2: 2.263_06 },
         { energy: 3.225_11, f1: 26.795_6, f2: 2.200_96 },
         { energy: 3.277_27, f1: 26.775_3, f2: 2.140_49 },
         { energy: 3.330_28, f1: 26.754_6, f2: 2.081_6 },
         { energy: 3.384_15, f1: 26.733_6, f2: 2.024_26 },
         { energy: 3.438_88, f1: 26.712_2, f2: 1.968_45 },
         { energy: 3.494_5, f1: 26.690_4, f2: 1.914_17 },
         { energy: 3.551_02, f1: 26.668_4, f2: 1.861_31 },
         { energy: 3.608_46, f1: 26.646, f2: 1.809_87 },
         { energy: 3.666_82, f1: 26.623_3, f2: 1.759_83 },
         { energy: 3.726_13, f1: 26.600_4, f2: 1.711_12 },
         { energy: 3.786_4, f1: 26.577_1, f2: 1.663_73 },
         { energy: 3.847_64, f1: 26.553_5, f2: 1.617_63 },
         { energy: 3.909_87, f1: 26.529_7, f2: 1.572_78 },
         { energy: 3.973_11, f1: 26.505_5, f2: 1.529_14 },
         { energy: 4.037_38, f1: 26.481, f2: 1.486_72 },
         { energy: 4.102_68, f1: 26.456_3, f2: 1.445_46 },
         { energy: 4.169_03, f1: 26.431_2, f2: 1.405_33 },
         { energy: 4.236_46, f1: 26.405_8, f2: 1.366_31 },
         { energy: 4.304_98, f1: 26.38, f2: 1.328_38 },
         { energy: 4.374_62, f1: 26.353_9, f2: 1.291_45 },
         { energy: 4.445_37, f1: 26.327_3, f2: 1.255_6 },
         { energy: 4.517_27, f1: 26.300_4, f2: 1.220_69 },
         { energy: 4.590_33, f1: 26.273, f2: 1.186_82 },
         { energy: 4.664_58, f1: 26.245_1, f2: 1.153_83 },
         { energy: 4.740_03, f1: 26.216_6, f2: 1.121_78 },
         { energy: 4.816_69, f1: 26.187_6, f2: 1.090_64 },
         { energy: 4.894_6, f1: 26.158, f2: 1.060_35 },
         { energy: 4.973_77, f1: 26.127_6, f2: 1.030_91 },
         { energy: 5.054_21, f1: 26.096_5, f2: 1.002_35 },
         { energy: 5.135_96, f1: 26.064_6, f2: 0.974_532 },
         { energy: 5.219_03, f1: 26.031_7, f2: 0.947_518 },
         { energy: 5.303_44, f1: 25.997_8, f2: 0.921_275 },
         { energy: 5.389_22, f1: 25.962_7, f2: 0.895_781 },
         { energy: 5.476_39, f1: 25.926_3, f2: 0.871_002 },
         { energy: 5.564_97, f1: 25.888_4, f2: 0.846_905 },
         { energy: 5.654_98, f1: 25.848_9, f2: 0.823_513 },
         { energy: 5.746_44, f1: 25.807_5, f2: 0.800_73 },
         { energy: 5.839_39, f1: 25.763_9, f2: 0.778_663 },
         { energy: 5.933_83, f1: 25.717_9, f2: 0.757_205 },
         { energy: 6.029_81, f1: 25.669_1, f2: 0.736_352 },
         { energy: 6.127_33, f1: 25.617, f2: 0.716_096 },
         { energy: 6.226_44, f1: 25.561, f2: 0.696_42 },
         { energy: 6.327_15, f1: 25.500_5, f2: 0.677_309 },
         { energy: 6.429_48, f1: 25.434_5, f2: 0.658_738 },
         { energy: 6.533_48, f1: 25.361_9, f2: 0.640_705 },
         { energy: 6.639_15, f1: 25.281_3, f2: 0.623_185 },
         { energy: 6.746_54, f1: 25.190_5, f2: 0.606_17 },
         { energy: 6.855_65, f1: 25.086_8, f2: 0.589_643 },
         { energy: 6.966_54, f1: 24.965_8, f2: 0.573_591 },
         { energy: 7.079_22, f1: 24.821_2, f2: 0.557_998 },
         { energy: 7.193_72, f1: 24.642_5, f2: 0.542_853 },
         { energy: 7.310_07, f1: 24.410_3, f2: 0.528_143 },
         { energy: 7.428_31, f1: 24.083_8, f2: 0.513_866 },
         { energy: 7.548_45, f1: 23.548_6, f2: 0.499_994 },
         { energy: 7.670_54, f1: 22.113_6, f2: 0.486_51 },
         { energy: 7.708_8, f1: 15.879_5, f2: 0.482_403 },
         { energy: 7.709, f1: 15.879_9, f2: 3.793_98 },
         { energy: 7.794_61, f1: 23.064_9, f2: 3.733_39 },
         { energy: 7.920_68, f1: 24.078_4, f2: 3.647_08 },
         { energy: 8.048_79, f1: 24.621_3, f2: 3.561_98 },
         { energy: 8.178_98, f1: 24.997_4, f2: 3.478_1 },
         { energy: 8.311_26, f1: 25.285_7, f2: 3.395_47 },
         { energy: 8.445_69, f1: 25.519, f2: 3.314_28 },
         { energy: 8.582_29, f1: 25.714_3, f2: 3.234_28 },
         { energy: 8.721_11, f1: 25.881_6, f2: 3.155_69 },
         { energy: 8.862_16, f1: 26.027_2, f2: 3.078_41 },
         { energy: 9.005_5, f1: 26.155_5, f2: 3.002_55 },
         { energy: 9.151_16, f1: 26.269_6, f2: 2.928_11 },
         { energy: 9.299_17, f1: 26.371_7, f2: 2.854_96 },
         { energy: 9.449_58, f1: 26.463_7, f2: 2.783_22 },
         { energy: 9.602_42, f1: 26.546_9, f2: 2.712_87 },
         { energy: 9.757_73, f1: 26.622_3, f2: 2.643_82 },
         { energy: 9.915_55, f1: 26.690_9, f2: 2.576_31 },
         { energy: 10.075_9, f1: 26.753_6, f2: 2.510_07 },
         { energy: 10.238_9, f1: 26.810_9, f2: 2.445_21 },
         { energy: 10.404_5, f1: 26.863_3, f2: 2.381_69 },
         { energy: 10.572_8, f1: 26.911_3, f2: 2.319_52 },
         { energy: 10.743_8, f1: 26.955_3, f2: 2.258_69 },
         { energy: 10.917_6, f1: 26.995_6, f2: 2.199_18 },
         { energy: 11.094_2, f1: 27.032_6, f2: 2.140_98 },
         { energy: 11.273_6, f1: 27.066_5, f2: 2.084_07 },
         { energy: 11.455_9, f1: 27.097_6, f2: 2.028_44 },
         { energy: 11.641_2, f1: 27.126, f2: 1.974_08 },
         { energy: 11.829_5, f1: 27.152, f2: 1.920_96 },
         { energy: 12.020_8, f1: 27.175_8, f2: 1.869_07 },
         { energy: 12.215_3, f1: 27.197_5, f2: 1.818_39 },
         { energy: 12.412_8, f1: 27.217_3, f2: 1.768_91 },
         { energy: 12.613_6, f1: 27.235_3, f2: 1.720_6 },
         { energy: 12.817_6, f1: 27.251_6, f2: 1.673_45 },
         { energy: 13.025, f1: 27.266_4, f2: 1.627_44 },
         { energy: 13.235_6, f1: 27.279_7, f2: 1.582_55 },
         { energy: 13.449_7, f1: 27.291_6, f2: 1.538_76 },
         { energy: 13.667_2, f1: 27.302_3, f2: 1.496_04 },
         { energy: 13.888_3, f1: 27.311_8, f2: 1.454_39 },
         { energy: 14.112_9, f1: 27.320_3, f2: 1.413_78 },
         { energy: 14.341_2, f1: 27.327_6, f2: 1.374_19 },
         { energy: 14.573_1, f1: 27.334_1, f2: 1.335_6 },
         { energy: 14.808_9, f1: 27.339_6, f2: 1.297_99 },
         { energy: 15.048_4, f1: 27.344_3, f2: 1.261_34 },
         { energy: 15.291_8, f1: 27.348_2, f2: 1.225_64 },
         { energy: 15.539_1, f1: 27.351_3, f2: 1.190_85 },
         { energy: 15.790_4, f1: 27.353_8, f2: 1.156_97 },
         { energy: 16.045_8, f1: 27.355_7, f2: 1.123_98 },
         { energy: 16.305_4, f1: 27.356_9, f2: 1.091_85 },
         { energy: 16.569_1, f1: 27.357_6, f2: 1.060_56 },
         { energy: 16.837_1, f1: 27.357_8, f2: 1.030_11 },
         { energy: 17.109_4, f1: 27.357_5, f2: 1.000_46 },
         { energy: 17.386_1, f1: 27.356_8, f2: 0.971_604 },
         { energy: 17.667_4, f1: 27.355_6, f2: 0.943_521 },
         { energy: 17.953_1, f1: 27.354_1, f2: 0.916_193 },
         { energy: 18.243_5, f1: 27.352_2, f2: 0.889_602 },
         { energy: 18.538_6, f1: 27.35, f2: 0.863_733 },
         { energy: 18.838_4, f1: 27.347_4, f2: 0.838_566 },
         { energy: 19.143_1, f1: 27.344_6, f2: 0.814_087 },
         { energy: 19.452_7, f1: 27.341_6, f2: 0.790_277 },
         { energy: 19.767_4, f1: 27.338_2, f2: 0.767_122 },
         { energy: 20.087_1, f1: 27.334_7, f2: 0.744_605 },
         { energy: 20.412, f1: 27.331, f2: 0.722_71 },
         { energy: 20.742_1, f1: 27.327_1, f2: 0.701_422 },
         { energy: 21.077_6, f1: 27.323, f2: 0.680_726 },
         { energy: 21.418_5, f1: 27.318_8, f2: 0.660_608 },
         { energy: 21.765, f1: 27.314_4, f2: 0.641_052 },
         { energy: 22.117, f1: 27.309_9, f2: 0.622_045 },
         { energy: 22.474_7, f1: 27.305_3, f2: 0.603_573 },
         { energy: 22.838_2, f1: 27.300_6, f2: 0.585_621 },
         { energy: 23.207_6, f1: 27.295_8, f2: 0.568_177 },
         { energy: 23.583, f1: 27.290_9, f2: 0.551_227 },
         { energy: 23.964_4, f1: 27.286, f2: 0.534_759 },
         { energy: 24.352, f1: 27.281, f2: 0.518_759 },
         { energy: 24.745_9, f1: 27.276, f2: 0.503_217 },
         { energy: 25.146_2, f1: 27.270_9, f2: 0.488_119 },
         { energy: 25.552_9, f1: 27.265_8, f2: 0.473_454 },
         { energy: 25.966_2, f1: 27.260_7, f2: 0.459_21 },
         { energy: 26.386_1, f1: 27.255_5, f2: 0.445_376 },
         { energy: 26.812_9, f1: 27.250_4, f2: 0.431_942 },
         { energy: 27.246_6, f1: 27.245_2, f2: 0.418_896 },
         { energy: 27.687_3, f1: 27.240_1, f2: 0.406_228 },
         { energy: 28.135_1, f1: 27.234_9, f2: 0.393_927 },
         { energy: 28.590_2, f1: 27.229_8, f2: 0.381_985 },
         { energy: 29.052_6, f1: 27.224_8, f2: 0.370_39 },
         { energy: 29.522_5, f1: 27.220_8, f2: 0.359_134 },
         { energy: 30.0, f1: 27.211_3, f2: 0.348_207 },
    ],
    neutron_scattering: {
        b_c: { value: 2.49, uncertainty: 0.02},
        b_p: { value: -9.21, uncertainty: 0.10},
        b_m: { value: 3.58, uncertainty: 0.10},
        bound_coherent_scattering_xs: { value: 0.779, uncertainty: 0.013},
        bound_incoherent_scattering_xs: { value: 4.8, uncertainty: 0.3},
        total_bound_scattering_xs: { value: 5.6, uncertainty: 0.3},
        absorption_xs: { value: 37.18, uncertainty: 0.06},
    },
    isotopes: [
        { 
            mass_number: 48,
            mass: { value: 48.001_76, uncertainty: 0.000_43},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 49,
            mass: { value: 48.989_72, uncertainty: 0.000_28},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 50,
            mass: { value: 49.981_54, uncertainty: 0.000_18},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 51,
            mass: { value: 50.970_72, uncertainty: 0.000_16},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 52,
            mass: { value: 51.963_59, uncertainty: 0.000_70},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 53,
            mass: { value: 52.954_225, uncertainty: 0.000_019},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 54,
            mass: { value: 53.948_464_1, uncertainty: 0.000_001_4},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 55,
            mass: { value: 54.942_003_1, uncertainty: 0.000_001_5},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 56,
            mass: { value: 55.939_843_9, uncertainty: 0.000_002_6},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 57,
            mass: { value: 56.936_296_2, uncertainty: 0.000_001_5},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 58,
            mass: { value: 57.935_757_6, uncertainty: 0.000_001_9},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 59,
            mass: { value: 58.933_200_2, uncertainty: 0.000_001_5},
            abundance: { value: 100.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 60,
            mass: { value: 59.933_822_2, uncertainty: 0.000_001_5},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 61,
            mass: { value: 60.932_479_4, uncertainty: 0.000_001_7},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 62,
            mass: { value: 61.934_054, uncertainty: 0.000_022},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 63,
            mass: { value: 62.933_615, uncertainty: 0.000_022},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 64,
            mass: { value: 63.935_814, uncertainty: 0.000_022},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 65,
            mass: { value: 64.936_485, uncertainty: 0.000_014},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 66,
            mass: { value: 65.939_83, uncertainty: 0.000_29},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 67,
            mass: { value: 66.940_61, uncertainty: 0.000_30},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 68,
            mass: { value: 67.944_36, uncertainty: 0.000_35},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 69,
            mass: { value: 68.945_2, uncertainty: 0.004_0},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 70,
            mass: { value: 69.949_81, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 71,
            mass: { value: 70.951_73, uncertainty: 0.000_86},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 72,
            mass: { value: 71.956_41, uncertainty: 0.000_86},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Co};
