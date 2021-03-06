const Th = {
    atomic_number: 90,
    name: 'Thorium',
    symbol: 'Th',
    mass: 232.038_1,
    common_ions: [4],
    uncommon_ions: [1, 2, 3],
    xray_scattering: [
         { energy: 0.01, f1: undefined, f2: 3.147_69 },
         { energy: 0.010_161_7, f1: undefined, f2: 3.100_7 },
         { energy: 0.010_326_1, f1: undefined, f2: 3.054_42 },
         { energy: 0.010_493_1, f1: undefined, f2: 3.008_83 },
         { energy: 0.010_662_8, f1: undefined, f2: 2.963_92 },
         { energy: 0.010_835_3, f1: undefined, f2: 2.919_68 },
         { energy: 0.011_010_6, f1: undefined, f2: 2.876_11 },
         { energy: 0.011_188_6, f1: undefined, f2: 2.833_18 },
         { energy: 0.011_369_6, f1: undefined, f2: 2.790_89 },
         { energy: 0.011_553_5, f1: undefined, f2: 2.740_24 },
         { energy: 0.011_740_4, f1: undefined, f2: 2.662_01 },
         { energy: 0.011_930_3, f1: undefined, f2: 2.586 },
         { energy: 0.012_123_2, f1: undefined, f2: 2.512_17 },
         { energy: 0.012_319_3, f1: undefined, f2: 2.440_44 },
         { energy: 0.012_518_6, f1: undefined, f2: 2.374_57 },
         { energy: 0.012_721, f1: undefined, f2: 2.326_1 },
         { energy: 0.012_926_8, f1: undefined, f2: 2.278_63 },
         { energy: 0.013_135_9, f1: undefined, f2: 2.232_12 },
         { energy: 0.013_348_3, f1: undefined, f2: 2.186_56 },
         { energy: 0.013_564_2, f1: undefined, f2: 2.133_58 },
         { energy: 0.013_783_6, f1: undefined, f2: 2.081_42 },
         { energy: 0.014_006_6, f1: undefined, f2: 2.030_53 },
         { energy: 0.014_233_1, f1: undefined, f2: 1.975_88 },
         { energy: 0.014_463_3, f1: undefined, f2: 1.910_03 },
         { energy: 0.014_697_3, f1: undefined, f2: 1.846_37 },
         { energy: 0.014_935, f1: undefined, f2: 1.784_84 },
         { energy: 0.015_176_5, f1: undefined, f2: 1.744_04 },
         { energy: 0.015_422, f1: undefined, f2: 1.709_65 },
         { energy: 0.015_671_4, f1: undefined, f2: 1.675_93 },
         { energy: 0.015_924_9, f1: undefined, f2: 1.688_99 },
         { energy: 0.016_182_5, f1: undefined, f2: 1.708_19 },
         { energy: 0.016_444_2, f1: undefined, f2: 1.727_97 },
         { energy: 0.016_710_2, f1: undefined, f2: 1.783_18 },
         { energy: 0.016_980_5, f1: undefined, f2: 1.842_2 },
         { energy: 0.017_255_1, f1: undefined, f2: 1.925_27 },
         { energy: 0.017_534_2, f1: undefined, f2: 2.024_13 },
         { energy: 0.017_817_8, f1: undefined, f2: 2.145_32 },
         { energy: 0.018_106, f1: undefined, f2: 2.273_77 },
         { energy: 0.018_398_9, f1: undefined, f2: 2.564_75 },
         { energy: 0.018_696_4, f1: undefined, f2: 3.050_3 },
         { energy: 0.018_998_8, f1: undefined, f2: 3.714_48 },
         { energy: 0.019_306_1, f1: undefined, f2: 4.558_03 },
         { energy: 0.019_618_4, f1: undefined, f2: 5.593_14 },
         { energy: 0.019_935_7, f1: undefined, f2: 6.604_4 },
         { energy: 0.020_258_2, f1: undefined, f2: 7.289_2 },
         { energy: 0.020_585_8, f1: undefined, f2: 8.025_34 },
         { energy: 0.020_918_8, f1: undefined, f2: 8.416_45 },
         { energy: 0.021_257_1, f1: undefined, f2: 8.826_63 },
         { energy: 0.021_600_9, f1: undefined, f2: 9.256_8 },
         { energy: 0.021_950_3, f1: undefined, f2: 9.707_94 },
         { energy: 0.022_305_3, f1: undefined, f2: 10.037_6 },
         { energy: 0.022_666_1, f1: undefined, f2: 10.293_4 },
         { energy: 0.023_032_7, f1: undefined, f2: 10.555_6 },
         { energy: 0.023_405_3, f1: undefined, f2: 10.824_6 },
         { energy: 0.023_783_8, f1: undefined, f2: 11.100_4 },
         { energy: 0.024_168_5, f1: undefined, f2: 11.325 },
         { energy: 0.024_559_4, f1: undefined, f2: 11.548 },
         { energy: 0.024_956_6, f1: undefined, f2: 11.775_4 },
         { energy: 0.025_360_3, f1: undefined, f2: 12.007_3 },
         { energy: 0.025_770_5, f1: undefined, f2: 12.243_7 },
         { energy: 0.026_187_3, f1: undefined, f2: 12.344_7 },
         { energy: 0.026_610_9, f1: undefined, f2: 12.402_2 },
         { energy: 0.027_041_3, f1: undefined, f2: 12.459_9 },
         { energy: 0.027_478_6, f1: undefined, f2: 12.517_9 },
         { energy: 0.027_923_1, f1: undefined, f2: 12.576_2 },
         { energy: 0.028_374_7, f1: undefined, f2: 12.634_8 },
         { energy: 0.028_833_7, f1: undefined, f2: 12.673_2 },
         { energy: 0.029_3, f1: 13.213_2, f2: 12.670_9 },
         { energy: 0.029_773_9, f1: 13.585_4, f2: 12.668_5 },
         { energy: 0.030_255_5, f1: 13.953_2, f2: 12.666_2 },
         { energy: 0.030_744_9, f1: 14.323_5, f2: 12.663_8 },
         { energy: 0.031_242_1, f1: 14.702_8, f2: 12.661_5 },
         { energy: 0.031_747_5, f1: 15.099_7, f2: 12.659_1 },
         { energy: 0.032_260_9, f1: 15.531_3, f2: 12.656_8 },
         { energy: 0.032_782_7, f1: 16.056_7, f2: 12.654_4 },
         { energy: 0.033_313, f1: 16.621, f2: 12.397_3 },
         { energy: 0.033_851_8, f1: 17.037_2, f2: 12.103 },
         { energy: 0.034_399_3, f1: 17.379, f2: 11.815_6 },
         { energy: 0.034_955_7, f1: 17.680_8, f2: 11.535_1 },
         { energy: 0.035_521_1, f1: 17.953, f2: 11.261_3 },
         { energy: 0.036_095_6, f1: 18.205_4, f2: 10.993_9 },
         { energy: 0.036_679_4, f1: 18.450_8, f2: 10.732_9 },
         { energy: 0.037_272_7, f1: 18.677_2, f2: 10.436_3 },
         { energy: 0.037_875_5, f1: 18.866, f2: 10.144 },
         { energy: 0.038_488_2, f1: 19.031_7, f2: 9.859_86 },
         { energy: 0.039_110_7, f1: 19.181_2, f2: 9.583_72 },
         { energy: 0.039_743_2, f1: 19.325_1, f2: 9.315_31 },
         { energy: 0.040_386_1, f1: 19.483_7, f2: 9.045_97 },
         { energy: 0.041_039_3, f1: 19.608_1, f2: 8.712_66 },
         { energy: 0.041_703_1, f1: 19.683_6, f2: 8.391_63 },
         { energy: 0.042_377_6, f1: 19.729_4, f2: 8.082_43 },
         { energy: 0.043_063, f1: 19.751_8, f2: 7.784_62 },
         { energy: 0.043_759_5, f1: 19.754_3, f2: 7.497_79 },
         { energy: 0.044_467_3, f1: 19.738_8, f2: 7.221_52 },
         { energy: 0.045_186_5, f1: 19.706_8, f2: 6.955_44 },
         { energy: 0.045_917_4, f1: 19.658_9, f2: 6.699_15 },
         { energy: 0.046_66, f1: 19.593_1, f2: 6.452_32 },
         { energy: 0.047_414_7, f1: 19.515_2, f2: 6.226_8 },
         { energy: 0.048_181_6, f1: 19.431_1, f2: 6.009_83 },
         { energy: 0.048_960_9, f1: 19.338_6, f2: 5.800_43 },
         { energy: 0.049_752_8, f1: 19.236_3, f2: 5.598_31 },
         { energy: 0.050_557_6, f1: 19.123_8, f2: 5.403_25 },
         { energy: 0.051_375_3, f1: 19.000_7, f2: 5.214_98 },
         { energy: 0.052_206_2, f1: 18.866_4, f2: 5.033_27 },
         { energy: 0.053_050_6, f1: 18.719_9, f2: 4.857_89 },
         { energy: 0.053_908_7, f1: 18.559_6, f2: 4.688_62 },
         { energy: 0.054_780_6, f1: 18.379_4, f2: 4.525_25 },
         { energy: 0.055_666_7, f1: 18.160_9, f2: 4.385_31 },
         { energy: 0.056_567, f1: 17.958_8, f2: 4.290_22 },
         { energy: 0.057_482, f1: 17.768_4, f2: 4.197_18 },
         { energy: 0.058_411_7, f1: 17.577_3, f2: 4.106_16 },
         { energy: 0.059_356_4, f1: 17.382, f2: 4.017_12 },
         { energy: 0.060_316_5, f1: 17.180_2, f2: 3.93 },
         { energy: 0.061_292_1, f1: 16.969_9, f2: 3.844_78 },
         { energy: 0.062_283_4, f1: 16.749_6, f2: 3.761_41 },
         { energy: 0.063_290_8, f1: 16.517_5, f2: 3.679_84 },
         { energy: 0.064_314_5, f1: 16.271_8, f2: 3.600_04 },
         { energy: 0.065_354_7, f1: 16.010_4, f2: 3.521_97 },
         { energy: 0.066_411_8, f1: 15.729_7, f2: 3.446_98 },
         { energy: 0.067_485_9, f1: 15.432_4, f2: 3.378_42 },
         { energy: 0.068_577_5, f1: 15.116_2, f2: 3.311_23 },
         { energy: 0.069_686_7, f1: 14.777_6, f2: 3.245_37 },
         { energy: 0.070_813_8, f1: 14.412_9, f2: 3.180_83 },
         { energy: 0.071_959_1, f1: 14.018_1, f2: 3.117_56 },
         { energy: 0.073_123, f1: 13.588_8, f2: 3.055_56 },
         { energy: 0.074_305_7, f1: 13.119_3, f2: 2.994_79 },
         { energy: 0.075_507_6, f1: 12.602_9, f2: 2.935_06 },
         { energy: 0.076_728_9, f1: 12.030_4, f2: 2.876_2 },
         { energy: 0.077_969_9, f1: 11.390_2, f2: 2.818_51 },
         { energy: 0.079_231, f1: 10.665, f2: 2.761_99 },
         { energy: 0.080_512_5, f1: 9.839_38, f2: 2.717_74 },
         { energy: 0.081_814_7, f1: 8.900_03, f2: 2.673_94 },
         { energy: 0.083_138, f1: 7.753_2, f2: 2.595_35 },
         { energy: 0.084_482_7, f1: 6.345_78, f2: 2.599_67 },
         { energy: 0.085_849_1, f1: 4.499_88, f2: 2.646_46 },
         { energy: 0.087_237_7, f1: 1.731_52, f2: 3.056_15 },
         { energy: 0.088_648_7, f1: -1.717_62, f2: 5.147_8 },
         { energy: 0.090_082_5, f1: -4.459_96, f2: 9.817_32 },
         { energy: 0.091_539_5, f1: -1.344_86, f2: 18.722_2 },
         { energy: 0.093_020_1, f1: 7.039_67, f2: 11.952_2 },
         { energy: 0.094_524_6, f1: 2.659_75, f2: 4.898_22 },
         { energy: 0.096_053_5, f1: -4.996_29, f2: 4.832_57 },
         { energy: 0.097_607_1, f1: -13.759_7, f2: 7.702_72 },
         { energy: 0.099_185_8, f1: -22.836_1, f2: 14.742_7 },
         { energy: 0.100_79, f1: -31.072_2, f2: 28.217_6 },
         { energy: 0.102_42, f1: -29.843_9, f2: 54.007_5 },
         { energy: 0.104_077, f1: -10.077_2, f2: 67.787_6 },
         { energy: 0.105_76, f1: 6.221_73, f2: 71.266_7 },
         { energy: 0.107_471, f1: 22.156_9, f2: 70.820_6 },
         { energy: 0.109_209, f1: 36.020_1, f2: 61.680_4 },
         { energy: 0.110_975, f1: 42.318_7, f2: 51.03 },
         { energy: 0.112_77, f1: 43.111_5, f2: 42.218_4 },
         { energy: 0.114_594, f1: 42.582_9, f2: 37.758_9 },
         { energy: 0.116_448, f1: 42.635_3, f2: 34.154_9 },
         { energy: 0.118_331, f1: 42.232_1, f2: 31.220_4 },
         { energy: 0.120_245, f1: 42.228_1, f2: 29.142_4 },
         { energy: 0.122_19, f1: 42.377_2, f2: 27.202_7 },
         { energy: 0.124_166, f1: 42.563_3, f2: 25.392_2 },
         { energy: 0.126_175, f1: 42.830_1, f2: 23.669_2 },
         { energy: 0.128_215, f1: 42.910_9, f2: 21.741_9 },
         { energy: 0.130_289, f1: 42.759_6, f2: 19.971_6 },
         { energy: 0.132_397, f1: 42.405_2, f2: 18.345_4 },
         { energy: 0.134_538, f1: 41.728_3, f2: 16.975_3 },
         { energy: 0.136_714, f1: 41.255_9, f2: 16.164_4 },
         { energy: 0.138_925, f1: 40.969_1, f2: 15.392_3 },
         { energy: 0.141_172, f1: 40.821_4, f2: 14.657 },
         { energy: 0.143_456, f1: 40.747_3, f2: 13.832_3 },
         { energy: 0.145_776, f1: 40.598_6, f2: 12.987 },
         { energy: 0.148_134, f1: 40.421, f2: 12.193_4 },
         { energy: 0.150_53, f1: 40.240_9, f2: 11.448_3 },
         { energy: 0.152_964, f1: 40.086_4, f2: 10.748_7 },
         { energy: 0.155_439, f1: 40.124_6, f2: 9.985_05 },
         { energy: 0.157_953, f1: 39.942, f2: 8.994_08 },
         { energy: 0.160_507, f1: 39.566_4, f2: 8.101_46 },
         { energy: 0.163_103, f1: 39.108_7, f2: 7.297_4 },
         { energy: 0.165_742, f1: 38.592_8, f2: 6.594_66 },
         { energy: 0.168_422, f1: 38.056_4, f2: 5.973_52 },
         { energy: 0.171_146, f1: 37.492_2, f2: 5.410_91 },
         { energy: 0.173_915, f1: 36.841_4, f2: 4.925_5 },
         { energy: 0.176_727, f1: 36.262_9, f2: 4.660_99 },
         { energy: 0.179_586, f1: 35.762_3, f2: 4.410_68 },
         { energy: 0.182_491, f1: 35.307_2, f2: 4.173_82 },
         { energy: 0.185_442, f1: 34.874_3, f2: 3.949_68 },
         { energy: 0.188_442, f1: 34.454_4, f2: 3.737_57 },
         { energy: 0.191_489, f1: 34.036_5, f2: 3.536_85 },
         { energy: 0.194_587, f1: 33.615, f2: 3.369_01 },
         { energy: 0.197_734, f1: 33.210_7, f2: 3.222_82 },
         { energy: 0.200_932, f1: 32.810_9, f2: 3.082_97 },
         { energy: 0.204_182, f1: 32.379_3, f2: 2.949_19 },
         { energy: 0.207_485, f1: 31.957, f2: 2.926_93 },
         { energy: 0.210_84, f1: 31.587_3, f2: 2.920_49 },
         { energy: 0.214_251, f1: 31.255_1, f2: 2.914_06 },
         { energy: 0.217_716, f1: 30.940_8, f2: 2.907_64 },
         { energy: 0.221_237, f1: 30.638_5, f2: 2.901_24 },
         { energy: 0.224_816, f1: 30.342_9, f2: 2.894_85 },
         { energy: 0.228_452, f1: 30.040_8, f2: 2.888_48 },
         { energy: 0.232_147, f1: 29.738_4, f2: 2.911_51 },
         { energy: 0.235_902, f1: 29.458_9, f2: 2.948_28 },
         { energy: 0.239_717, f1: 29.193_5, f2: 2.985_52 },
         { energy: 0.243_595, f1: 28.938_1, f2: 3.023_23 },
         { energy: 0.247_535, f1: 28.689_7, f2: 3.056_96 },
         { energy: 0.251_538, f1: 28.439_8, f2: 3.087_23 },
         { energy: 0.255_607, f1: 28.186_8, f2: 3.117_8 },
         { energy: 0.259_741, f1: 27.927_1, f2: 3.148_68 },
         { energy: 0.263_942, f1: 27.646_4, f2: 3.186_99 },
         { energy: 0.268_211, f1: 27.375_9, f2: 3.259_91 },
         { energy: 0.272_549, f1: 27.115_8, f2: 3.334_5 },
         { energy: 0.276_957, f1: 26.860_7, f2: 3.410_79 },
         { energy: 0.281_437, f1: 26.607_3, f2: 3.488_84 },
         { energy: 0.285_989, f1: 26.355_1, f2: 3.568_66 },
         { energy: 0.290_615, f1: 26.107_9, f2: 3.650_32 },
         { energy: 0.295_315, f1: 25.859_5, f2: 3.711 },
         { energy: 0.300_092, f1: 25.590_1, f2: 3.763_93 },
         { energy: 0.304_945, f1: 25.297_6, f2: 3.817_61 },
         { energy: 0.309_878, f1: 24.980_6, f2: 3.872_06 },
         { energy: 0.314_89, f1: 24.614_5, f2: 3.946_83 },
         { energy: 0.319_983, f1: 24.249, f2: 4.059_44 },
         { energy: 0.325_158, f1: 23.880_4, f2: 4.175_26 },
         { energy: 0.330_418, f1: 23.485_8, f2: 4.294_39 },
         { energy: 0.335_762, f1: 23.062_8, f2: 4.440_11 },
         { energy: 0.341_192, f1: 22.618_6, f2: 4.599_23 },
         { energy: 0.346_711, f1: 22.135_7, f2: 4.764_06 },
         { energy: 0.352_319, f1: 21.550_4, f2: 4.954_55 },
         { energy: 0.358_017, f1: 20.964_6, f2: 5.295_74 },
         { energy: 0.363_808, f1: 20.384_3, f2: 5.660_44 },
         { energy: 0.369_692, f1: 19.673_8, f2: 6.098_33 },
         { energy: 0.375_672, f1: 19.032, f2: 6.741_45 },
         { energy: 0.381_748, f1: 18.480_7, f2: 7.452_37 },
         { energy: 0.387_922, f1: 17.989_2, f2: 8.238_3 },
         { energy: 0.394_197, f1: 17.596_4, f2: 9.107_09 },
         { energy: 0.400_573, f1: 17.369_2, f2: 9.963_64 },
         { energy: 0.407_052, f1: 17.108_1, f2: 10.722_3 },
         { energy: 0.413_635, f1: 16.832_2, f2: 11.538_8 },
         { energy: 0.420_326, f1: 16.574_4, f2: 12.417_4 },
         { energy: 0.427_124, f1: 16.356_7, f2: 13.362_9 },
         { energy: 0.434_032, f1: 16.194_8, f2: 14.380_4 },
         { energy: 0.441_052, f1: 16.116_7, f2: 15.475_4 },
         { energy: 0.448_186, f1: 16.242_7, f2: 16.597_8 },
         { energy: 0.455_435, f1: 16.404_6, f2: 17.645_8 },
         { energy: 0.462_802, f1: 16.618_3, f2: 18.760_1 },
         { energy: 0.470_287, f1: 17.077_3, f2: 19.882_2 },
         { energy: 0.477_894, f1: 17.525_1, f2: 20.781 },
         { energy: 0.485_623, f1: 17.977_4, f2: 21.720_4 },
         { energy: 0.493_478, f1: 18.559_2, f2: 22.702_3 },
         { energy: 0.501_459, f1: 19.387_8, f2: 23.534_8 },
         { energy: 0.509_57, f1: 20.071, f2: 24.058_2 },
         { energy: 0.517_812, f1: 20.645_9, f2: 24.593_3 },
         { energy: 0.526_187, f1: 21.183_2, f2: 25.140_2 },
         { energy: 0.534_698, f1: 21.710_2, f2: 25.699_3 },
         { energy: 0.543_346, f1: 22.251_6, f2: 26.270_9 },
         { energy: 0.552_134, f1: 22.843_1, f2: 26.823_9 },
         { energy: 0.561_065, f1: 23.405_9, f2: 27.313_9 },
         { energy: 0.570_139, f1: 23.950_2, f2: 27.812_8 },
         { energy: 0.579_361, f1: 24.495_8, f2: 28.320_8 },
         { energy: 0.588_732, f1: 25.052_7, f2: 28.838_1 },
         { energy: 0.598_254, f1: 25.659_6, f2: 29.364_8 },
         { energy: 0.607_93, f1: 26.271_5, f2: 29.829_6 },
         { energy: 0.617_763, f1: 26.871, f2: 30.300_7 },
         { energy: 0.627_755, f1: 27.480_2, f2: 30.779_2 },
         { energy: 0.637_908, f1: 28.108_5, f2: 31.265_2 },
         { energy: 0.648_226, f1: 28.769_9, f2: 31.758_9 },
         { energy: 0.658_711, f1: 29.466_5, f2: 32.234_4 },
         { energy: 0.669_365, f1: 30.187_2, f2: 32.704_3 },
         { energy: 0.680_191, f1: 30.942_8, f2: 33.181 },
         { energy: 0.691_193, f1: 31.756_4, f2: 33.664_8 },
         { energy: 0.702_372, f1: 32.708_8, f2: 34.155_5 },
         { energy: 0.713_733, f1: 33.864_9, f2: 34.477_2 },
         { energy: 0.725_277, f1: 34.870_5, f2: 34.490_7 },
         { energy: 0.737_008, f1: 35.751_2, f2: 34.504 },
         { energy: 0.748_928, f1: 36.592_1, f2: 34.517_4 },
         { energy: 0.761_042, f1: 37.404_2, f2: 34.496 },
         { energy: 0.773_351, f1: 38.166_3, f2: 34.450_2 },
         { energy: 0.785_859, f1: 38.893_5, f2: 34.404_4 },
         { energy: 0.798_57, f1: 39.638_2, f2: 34.358_7 },
         { energy: 0.811_486, f1: 40.350_4, f2: 34.225_2 },
         { energy: 0.824_611, f1: 40.985_7, f2: 34.072_9 },
         { energy: 0.837_949, f1: 41.564_6, f2: 33.921_2 },
         { energy: 0.851_502, f1: 42.087_9, f2: 33.770_3 },
         { energy: 0.865_274, f1: 42.521_9, f2: 33.62 },
         { energy: 0.879_269, f1: 42.907_5, f2: 33.599_6 },
         { energy: 0.893_491, f1: 43.320_7, f2: 33.626_7 },
         { energy: 0.907_943, f1: 43.690_3, f2: 33.653_7 },
         { energy: 0.922_628, f1: 44.066_1, f2: 33.828_4 },
         { energy: 0.937_551, f1: 44.548_1, f2: 34.063_4 },
         { energy: 0.952_715, f1: 45.106_1, f2: 34.299_9 },
         { energy: 0.968_124, f1: 45.730_2, f2: 34.538_1 },
         { energy: 0.983_783, f1: 46.394_3, f2: 34.777_9 },
         { energy: 0.999_695, f1: 47.640_8, f2: 34.752_5 },
         { energy: 1.015_86, f1: 47.503_8, f2: 33.677_4 },
         { energy: 1.032_29, f1: 47.818_4, f2: 35.319_5 },
         { energy: 1.048_99, f1: 49.454, f2: 36.018_6 },
         { energy: 1.065_96, f1: 50.820_4, f2: 35.593_1 },
         { energy: 1.083_2, f1: 51.815, f2: 35.171_5 },
         { energy: 1.100_72, f1: 52.661_9, f2: 34.754_7 },
         { energy: 1.118_52, f1: 53.417_5, f2: 34.342_6 },
         { energy: 1.136_61, f1: 54.106_8, f2: 33.934_5 },
         { energy: 1.155, f1: 54.743_6, f2: 33.530_9 },
         { energy: 1.173_68, f1: 55.335_8, f2: 33.131_5 },
         { energy: 1.192_66, f1: 55.888_2, f2: 32.736_4 },
         { energy: 1.211_95, f1: 56.402_5, f2: 32.345_4 },
         { energy: 1.231_55, f1: 56.870_7, f2: 31.958_5 },
         { energy: 1.251_47, f1: 57.297_6, f2: 31.608_4 },
         { energy: 1.271_72, f1: 57.697_7, f2: 31.297_1 },
         { energy: 1.292_29, f1: 58.117_6, f2: 31.031_6 },
         { energy: 1.313_19, f1: 58.551_5, f2: 30.767_7 },
         { energy: 1.334_43, f1: 58.989_9, f2: 30.505_8 },
         { energy: 1.356_01, f1: 59.431_3, f2: 30.245_8 },
         { energy: 1.377_94, f1: 59.875_8, f2: 29.986_8 },
         { energy: 1.400_23, f1: 60.325_4, f2: 29.729_5 },
         { energy: 1.422_88, f1: 60.784_6, f2: 29.473_9 },
         { energy: 1.445_89, f1: 61.262_9, f2: 29.219_4 },
         { energy: 1.469_28, f1: 61.780_7, f2: 28.942_9 },
         { energy: 1.493_04, f1: 62.343_5, f2: 28.632_7 },
         { energy: 1.517_19, f1: 62.864_3, f2: 28.176_5 },
         { energy: 1.541_73, f1: 63.310_5, f2: 27.706_5 },
         { energy: 1.566_67, f1: 63.698_6, f2: 27.243_2 },
         { energy: 1.592_01, f1: 64.052_4, f2: 26.786_6 },
         { energy: 1.617_76, f1: 64.377_8, f2: 26.337_4 },
         { energy: 1.643_92, f1: 64.679_8, f2: 25.895_5 },
         { energy: 1.670_51, f1: 64.961_6, f2: 25.460_1 },
         { energy: 1.697_53, f1: 65.225_3, f2: 25.031_3 },
         { energy: 1.724_99, f1: 65.480_2, f2: 24.608_8 },
         { energy: 1.752_89, f1: 65.718_2, f2: 24.177_9 },
         { energy: 1.781_24, f1: 65.933_9, f2: 23.748_9 },
         { energy: 1.810_05, f1: 66.128_6, f2: 23.322_7 },
         { energy: 1.839_32, f1: 66.302_8, f2: 22.903_7 },
         { energy: 1.869_07, f1: 66.460_1, f2: 22.492 },
         { energy: 1.899_3, f1: 66.602_1, f2: 22.087_6 },
         { energy: 1.930_02, f1: 66.729_2, f2: 21.689_4 },
         { energy: 1.961_24, f1: 66.841_8, f2: 21.297_8 },
         { energy: 1.992_96, f1: 66.936_9, f2: 20.912_7 },
         { energy: 2.025_2, f1: 67.032_3, f2: 20.544_7 },
         { energy: 2.057_95, f1: 67.116_5, f2: 20.162 },
         { energy: 2.091_24, f1: 67.179, f2: 19.783_8 },
         { energy: 2.125_06, f1: 67.225_8, f2: 19.410_7 },
         { energy: 2.159_43, f1: 67.256_3, f2: 19.041_2 },
         { energy: 2.194_36, f1: 67.270_8, f2: 18.677_1 },
         { energy: 2.229_85, f1: 67.269_2, f2: 18.317_1 },
         { energy: 2.265_92, f1: 67.250_8, f2: 17.961_7 },
         { energy: 2.302_57, f1: 67.214_1, f2: 17.610_4 },
         { energy: 2.339_81, f1: 67.159_9, f2: 17.265_1 },
         { energy: 2.377_66, f1: 67.087_1, f2: 16.923_3 },
         { energy: 2.416_11, f1: 66.993_7, f2: 16.586 },
         { energy: 2.455_19, f1: 66.879_3, f2: 16.253_9 },
         { energy: 2.494_9, f1: 66.742_1, f2: 15.925_9 },
         { energy: 2.535_26, f1: 66.58, f2: 15.602_6 },
         { energy: 2.576_26, f1: 66.391_3, f2: 15.284_2 },
         { energy: 2.617_93, f1: 66.172_8, f2: 14.970_1 },
         { energy: 2.660_27, f1: 65.922_5, f2: 14.661_7 },
         { energy: 2.703_3, f1: 65.635_8, f2: 14.356_3 },
         { energy: 2.747_03, f1: 65.307_1, f2: 14.055_7 },
         { energy: 2.791_46, f1: 64.930_8, f2: 13.759_9 },
         { energy: 2.836_61, f1: 64.498_9, f2: 13.468_6 },
         { energy: 2.882_49, f1: 64.000_6, f2: 13.181_4 },
         { energy: 2.929_11, f1: 63.422, f2: 12.898_8 },
         { energy: 2.976_48, f1: 62.743_2, f2: 12.620_5 },
         { energy: 3.024_63, f1: 61.935_9, f2: 12.346_6 },
         { energy: 3.073_55, f1: 60.956_8, f2: 12.076_8 },
         { energy: 3.123_26, f1: 59.734_6, f2: 11.811_2 },
         { energy: 3.173_78, f1: 58.139_6, f2: 11.549_8 },
         { energy: 3.225_11, f1: 55.890_4, f2: 11.292_6 },
         { energy: 3.277_27, f1: 52.129_6, f2: 11.039_3 },
         { energy: 3.330_28, f1: 33.869_6, f2: 10.790_2 },
         { energy: 3.331_9, f1: 19.161_9, f2: 10.782_8 },
         { energy: 3.332_1, f1: 19.165_5, f2: 27.041_4 },
         { energy: 3.384_15, f1: 50.801, f2: 26.350_8 },
         { energy: 3.438_88, f1: 52.753_5, f2: 25.654_6 },
         { energy: 3.490_7, f1: 34.055_1, f2: 25.022_1 },
         { energy: 3.490_9, f1: 34.072_9, f2: 35.859_4 },
         { energy: 3.494_5, f1: 46.155, f2: 35.802 },
         { energy: 3.551_02, f1: 57.47, f2: 34.921_3 },
         { energy: 3.608_46, f1: 61.142_9, f2: 34.064 },
         { energy: 3.666_82, f1: 63.580_5, f2: 33.228 },
         { energy: 3.726_13, f1: 65.386_7, f2: 32.414_2 },
         { energy: 3.786_4, f1: 66.768_3, f2: 31.621_8 },
         { energy: 3.847_64, f1: 67.805_5, f2: 30.850_3 },
         { energy: 3.909_87, f1: 68.493_5, f2: 30.097_3 },
         { energy: 3.973_11, f1: 68.664_7, f2: 29.363_1 },
         { energy: 4.037_38, f1: 66.531_5, f2: 28.648_9 },
         { energy: 4.046, f1: 59.905_7, f2: 28.555_3 },
         { energy: 4.046_2, f1: 59.915, f2: 33.308_5 },
         { energy: 4.102_68, f1: 70.240_8, f2: 32.620_6 },
         { energy: 4.169_03, f1: 72.207, f2: 31.841_8 },
         { energy: 4.236_46, f1: 73.560_1, f2: 31.082_6 },
         { energy: 4.304_98, f1: 74.631_8, f2: 30.342_1 },
         { energy: 4.374_62, f1: 75.522_3, f2: 29.619_6 },
         { energy: 4.445_37, f1: 76.275_8, f2: 28.915 },
         { energy: 4.517_27, f1: 76.915_5, f2: 28.228_2 },
         { energy: 4.590_33, f1: 77.446_2, f2: 27.555_4 },
         { energy: 4.664_58, f1: 77.858_1, f2: 26.901_8 },
         { energy: 4.740_03, f1: 78.097_6, f2: 26.262_1 },
         { energy: 4.816_69, f1: 77.679_7, f2: 25.64 },
         { energy: 4.830_3, f1: 75.453_1, f2: 25.532_1 },
         { energy: 4.830_5, f1: 75.454_1, f2: 27.000_7 },
         { energy: 4.894_6, f1: 78.811_5, f2: 26.506_1 },
         { energy: 4.973_77, f1: 79.538_3, f2: 25.916_3 },
         { energy: 5.054_21, f1: 80.016_4, f2: 25.340_7 },
         { energy: 5.135_96, f1: 80.349_9, f2: 24.777_8 },
         { energy: 5.182_2, f1: 78.863, f2: 24.468_8 },
         { energy: 5.182_4, f1: 78.869_2, f2: 25.487_1 },
         { energy: 5.219_03, f1: 80.675_6, f2: 25.232_2 },
         { energy: 5.303_44, f1: 81.501_6, f2: 24.660_9 },
         { energy: 5.389_22, f1: 82.076_8, f2: 24.099_7 },
         { energy: 5.476_39, f1: 82.556_5, f2: 23.548_5 },
         { energy: 5.564_97, f1: 82.976_4, f2: 23.007_2 },
         { energy: 5.654_98, f1: 83.351_6, f2: 22.476 },
         { energy: 5.746_44, f1: 83.690_6, f2: 21.954_4 },
         { energy: 5.839_39, f1: 83.998_7, f2: 21.443 },
         { energy: 5.933_83, f1: 84.279_8, f2: 20.941_1 },
         { energy: 6.029_81, f1: 84.537, f2: 20.449_5 },
         { energy: 6.127_33, f1: 84.772_6, f2: 19.967_2 },
         { energy: 6.226_44, f1: 84.988_3, f2: 19.494_5 },
         { energy: 6.327_15, f1: 85.185_7, f2: 19.031_5 },
         { energy: 6.429_48, f1: 85.366_4, f2: 18.578_2 },
         { energy: 6.533_48, f1: 85.531_5, f2: 18.134 },
         { energy: 6.639_15, f1: 85.682_1, f2: 17.699_3 },
         { energy: 6.746_54, f1: 85.819_2, f2: 17.273_9 },
         { energy: 6.855_65, f1: 85.943_6, f2: 16.857_6 },
         { energy: 6.966_54, f1: 86.056_4, f2: 16.450_2 },
         { energy: 7.079_22, f1: 86.157_9, f2: 16.051_4 },
         { energy: 7.193_72, f1: 86.248_9, f2: 15.661_7 },
         { energy: 7.310_07, f1: 86.330_2, f2: 15.280_4 },
         { energy: 7.428_31, f1: 86.401_9, f2: 14.907_8 },
         { energy: 7.548_45, f1: 86.465, f2: 14.543_5 },
         { energy: 7.670_54, f1: 86.519_9, f2: 14.187_6 },
         { energy: 7.794_61, f1: 86.567, f2: 13.839_4 },
         { energy: 7.920_68, f1: 86.606_6, f2: 13.499_7 },
         { energy: 8.048_79, f1: 86.639_4, f2: 13.167_4 },
         { energy: 8.178_98, f1: 86.665_4, f2: 12.843 },
         { energy: 8.311_26, f1: 86.685_2, f2: 12.525_9 },
         { energy: 8.445_69, f1: 86.698_8, f2: 12.216_4 },
         { energy: 8.582_29, f1: 86.706_8, f2: 11.914_4 },
         { energy: 8.721_11, f1: 86.709_5, f2: 11.619_2 },
         { energy: 8.862_16, f1: 86.707, f2: 11.331_4 },
         { energy: 9.005_5, f1: 86.699_9, f2: 11.050_3 },
         { energy: 9.151_16, f1: 86.688_1, f2: 10.775_7 },
         { energy: 9.299_17, f1: 86.671_9, f2: 10.508_1 },
         { energy: 9.449_58, f1: 86.651_7, f2: 10.246_8 },
         { energy: 9.602_42, f1: 86.627_8, f2: 9.991_78 },
         { energy: 9.757_73, f1: 86.600_6, f2: 9.742_98 },
         { energy: 9.915_55, f1: 86.573_9, f2: 9.500_08 },
         { energy: 10.075_9, f1: 86.543_8, f2: 9.254 },
         { energy: 10.238_9, f1: 86.502_2, f2: 9.014 },
         { energy: 10.404_5, f1: 86.455_7, f2: 8.779_94 },
         { energy: 10.572_8, f1: 86.403_9, f2: 8.551_74 },
         { energy: 10.743_8, f1: 86.347, f2: 8.329_31 },
         { energy: 10.917_6, f1: 86.285_3, f2: 8.112_55 },
         { energy: 11.094_2, f1: 86.218_7, f2: 7.901_35 },
         { energy: 11.273_6, f1: 86.147_2, f2: 7.695_61 },
         { energy: 11.455_9, f1: 86.070_7, f2: 7.495_25 },
         { energy: 11.641_2, f1: 85.989_3, f2: 7.300_14 },
         { energy: 11.829_5, f1: 85.902_6, f2: 7.110_19 },
         { energy: 12.020_8, f1: 85.810_5, f2: 6.925_3 },
         { energy: 12.215_3, f1: 85.712_6, f2: 6.745_37 },
         { energy: 12.412_8, f1: 85.608_5, f2: 6.570_29 },
         { energy: 12.613_6, f1: 85.497_8, f2: 6.399_97 },
         { energy: 12.817_6, f1: 85.379_7, f2: 6.234_3 },
         { energy: 13.025, f1: 85.253_5, f2: 6.073_18 },
         { energy: 13.235_6, f1: 85.118_3, f2: 5.916_52 },
         { energy: 13.449_7, f1: 84.972_6, f2: 5.764_21 },
         { energy: 13.667_2, f1: 84.814_8, f2: 5.616_16 },
         { energy: 13.888_3, f1: 84.642_8, f2: 5.472_28 },
         { energy: 14.112_9, f1: 84.453_7, f2: 5.332_46 },
         { energy: 14.341_2, f1: 84.243_6, f2: 5.196_61 },
         { energy: 14.573_1, f1: 84.006_8, f2: 5.064_64 },
         { energy: 14.808_9, f1: 83.735_1, f2: 4.936_46 },
         { energy: 15.048_4, f1: 83.415_5, f2: 4.811_98 },
         { energy: 15.291_8, f1: 83.026_4, f2: 4.691_1 },
         { energy: 15.539_1, f1: 82.526_4, f2: 4.573_75 },
         { energy: 15.790_4, f1: 81.821_4, f2: 4.459_82 },
         { energy: 16.045_8, f1: 80.604_9, f2: 4.349_25 },
         { energy: 16.300_2, f1: 66.537_4, f2: 4.243_52 },
         { energy: 16.300_4, f1: 66.537_8, f2: 9.917_22 },
         { energy: 16.305_4, f1: 73.640_4, f2: 9.911_96 },
         { energy: 16.569_1, f1: 80.893_7, f2: 9.638_17 },
         { energy: 16.837_1, f1: 82.140_4, f2: 9.371_94 },
         { energy: 17.109_4, f1: 82.836_2, f2: 9.113_08 },
         { energy: 17.386_1, f1: 83.287, f2: 8.861_37 },
         { energy: 17.667_4, f1: 83.588_6, f2: 8.616_61 },
         { energy: 17.953_1, f1: 83.780_4, f2: 8.378_62 },
         { energy: 18.243_5, f1: 83.877_8, f2: 8.147_21 },
         { energy: 18.538_6, f1: 83.880_4, f2: 7.922_2 },
         { energy: 18.838_4, f1: 83.768_2, f2: 7.703_41 },
         { energy: 19.143_1, f1: 83.479_5, f2: 7.490_66 },
         { energy: 19.452_7, f1: 82.783_7, f2: 7.283_8 },
         { energy: 19.693_1, f1: 75.563, f2: 7.129_31 },
         { energy: 19.693_3, f1: 75.563_6, f2: 10.112_8 },
         { energy: 19.767_4, f1: 81.675, f2: 10.057_9 },
         { energy: 20.087_1, f1: 82.998_6, f2: 9.826_23 },
         { energy: 20.412, f1: 83.320_9, f2: 9.599_91 },
         { energy: 20.472, f1: 83.702_2, f2: 9.559_06 },
         { energy: 20.472_2, f1: 83.705_2, f2: 10.992_6 },
         { energy: 20.742_1, f1: 84.658_9, f2: 10.776_7 },
         { energy: 21.077_6, f1: 85.334_4, f2: 10.518_1 },
         { energy: 21.418_5, f1: 85.835_4, f2: 10.264_5 },
         { energy: 21.765, f1: 86.24, f2: 10.016 },
         { energy: 22.117, f1: 86.580_2, f2: 9.772_59 },
         { energy: 22.474_7, f1: 86.873_1, f2: 9.534_14 },
         { energy: 22.838_2, f1: 87.129_3, f2: 9.300_62 },
         { energy: 23.207_6, f1: 87.355_9, f2: 9.072 },
         { energy: 23.583, f1: 87.557_7, f2: 8.848_21 },
         { energy: 23.964_4, f1: 87.738_5, f2: 8.629_23 },
         { energy: 24.352, f1: 87.901_3, f2: 8.414_96 },
         { energy: 24.745_9, f1: 88.048_2, f2: 8.205_38 },
         { energy: 25.146_2, f1: 88.181_1, f2: 8.000_4 },
         { energy: 25.552_9, f1: 88.301_5, f2: 7.799_97 },
         { energy: 25.966_2, f1: 88.410_8, f2: 7.604_02 },
         { energy: 26.386_1, f1: 88.509_9, f2: 7.412_48 },
         { energy: 26.812_9, f1: 88.599_9, f2: 7.225_29 },
         { energy: 27.246_6, f1: 88.681_5, f2: 7.042_37 },
         { energy: 27.687_3, f1: 88.755_5, f2: 6.863_66 },
         { energy: 28.135_1, f1: 88.822_5, f2: 6.689_09 },
         { energy: 28.590_2, f1: 88.883_1, f2: 6.518_58 },
         { energy: 29.052_6, f1: 88.937_7, f2: 6.352_07 },
         { energy: 29.522_5, f1: 88.986_8, f2: 6.189_48 },
         { energy: 30.0, f1: 89.030_9, f2: 6.030_74 },
    ],
    neutron_scattering: {
        b_c: { value: 10.31, uncertainty: 0.03},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 13.36, uncertainty: 0.08},
        bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
        total_bound_scattering_xs: { value: 13.36, uncertainty: 0.08},
        absorption_xs: { value: 7.37, uncertainty: 0.06},
    },
    isotopes: [
        { 
            mass_number: 210,
            mass: { value: 210.015_03, uncertainty: 0.000_17},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 211,
            mass: { value: 211.014_86, uncertainty: 0.000_45},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 212,
            mass: { value: 212.012_92, uncertainty: 0.000_15},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 213,
            mass: { value: 213.012_96, uncertainty: 0.000_14},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 214,
            mass: { value: 214.011_45, uncertainty: 0.000_10},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 215,
            mass: { value: 215.011_73, uncertainty: 0.000_70},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 216,
            mass: { value: 216.011_051, uncertainty: 0.000_017},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 217,
            mass: { value: 217.013_07, uncertainty: 0.000_30},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 218,
            mass: { value: 218.013_268, uncertainty: 0.000_015},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 219,
            mass: { value: 219.015_52, uncertainty: 0.000_50},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 220,
            mass: { value: 220.015_733, uncertainty: 0.000_024},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 221,
            mass: { value: 221.018_171, uncertainty: 0.000_011},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 222,
            mass: { value: 222.018_454, uncertainty: 0.000_014},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 223,
            mass: { value: 223.020_795, uncertainty: 0.000_010},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 224,
            mass: { value: 224.021_459, uncertainty: 0.000_013},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 225,
            mass: { value: 225.023_941, uncertainty: 0.000_008},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 226,
            mass: { value: 226.024_891, uncertainty: 0.000_005},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 227,
            mass: { value: 227.027_699, uncertainty: 0.000_003},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 228,
            mass: { value: 228.028_731_3, uncertainty: 0.000_002_9},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 229,
            mass: { value: 229.031_755, uncertainty: 0.000_003},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 230,
            mass: { value: 230.033_126_6, uncertainty: 0.000_002_2},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 231,
            mass: { value: 231.036_297_1, uncertainty: 0.000_002_2},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 232,
            mass: { value: 232.038_050_4, uncertainty: 0.000_002_2},
            abundance: { value: 100.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 233,
            mass: { value: 233.041_576_9, uncertainty: 0.000_002_2},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 234,
            mass: { value: 234.043_595, uncertainty: 0.000_004},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 235,
            mass: { value: 235.047_5, uncertainty: 0.005_0},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 236,
            mass: { value: 236.049_71, uncertainty: 0.000_32},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 237,
            mass: { value: 237.053_89, uncertainty: 0.000_39},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 238,
            mass: { value: 238.056_24, uncertainty: 0.000_39},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Th};
