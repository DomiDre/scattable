const Fe = {
    atomic_number: 26,
    name: 'Iron',
    symbol: 'Fe',
    mass: 55.845,
    common_ions: [2, 3, 6],
    uncommon_ions: [-4, -2, -1, 1, 4, 5, 7],
    xray_scattering: [
         { energy: 0.01, f1: undefined, f2: 1.378_52 },
         { energy: 0.010_161_7, f1: undefined, f2: 1.429_61 },
         { energy: 0.010_326_1, f1: undefined, f2: 1.482_59 },
         { energy: 0.010_493_1, f1: undefined, f2: 1.537_54 },
         { energy: 0.010_662_8, f1: undefined, f2: 1.594_53 },
         { energy: 0.010_835_3, f1: undefined, f2: 1.653_62 },
         { energy: 0.011_010_6, f1: undefined, f2: 1.714_91 },
         { energy: 0.011_188_6, f1: undefined, f2: 1.778_47 },
         { energy: 0.011_369_6, f1: undefined, f2: 1.844_38 },
         { energy: 0.011_553_5, f1: undefined, f2: 1.912_74 },
         { energy: 0.011_740_4, f1: undefined, f2: 1.974_02 },
         { energy: 0.011_930_3, f1: undefined, f2: 2.010_44 },
         { energy: 0.012_123_2, f1: undefined, f2: 2.047_52 },
         { energy: 0.012_319_3, f1: undefined, f2: 2.085_29 },
         { energy: 0.012_518_6, f1: undefined, f2: 2.123_75 },
         { energy: 0.012_721, f1: undefined, f2: 2.162_92 },
         { energy: 0.012_926_8, f1: undefined, f2: 2.202_82 },
         { energy: 0.013_135_9, f1: undefined, f2: 2.243_45 },
         { energy: 0.013_348_3, f1: undefined, f2: 2.284_84 },
         { energy: 0.013_564_2, f1: undefined, f2: 2.326_98 },
         { energy: 0.013_783_6, f1: undefined, f2: 2.369_9 },
         { energy: 0.014_006_6, f1: undefined, f2: 2.413_62 },
         { energy: 0.014_233_1, f1: undefined, f2: 2.458_14 },
         { energy: 0.014_463_3, f1: undefined, f2: 2.503_48 },
         { energy: 0.014_697_3, f1: undefined, f2: 2.549_66 },
         { energy: 0.014_935, f1: undefined, f2: 2.596_69 },
         { energy: 0.015_176_5, f1: undefined, f2: 2.644_58 },
         { energy: 0.015_422, f1: undefined, f2: 2.693_37 },
         { energy: 0.015_671_4, f1: undefined, f2: 2.731_88 },
         { energy: 0.015_924_9, f1: undefined, f2: 2.756_88 },
         { energy: 0.016_182_5, f1: undefined, f2: 2.782_11 },
         { energy: 0.016_444_2, f1: undefined, f2: 2.807_56 },
         { energy: 0.016_710_2, f1: undefined, f2: 2.833_25 },
         { energy: 0.016_980_5, f1: undefined, f2: 2.859_18 },
         { energy: 0.017_255_1, f1: undefined, f2: 2.885_34 },
         { energy: 0.017_534_2, f1: undefined, f2: 2.911_74 },
         { energy: 0.017_817_8, f1: undefined, f2: 2.938_38 },
         { energy: 0.018_106, f1: undefined, f2: 2.962_61 },
         { energy: 0.018_398_9, f1: undefined, f2: 2.979_51 },
         { energy: 0.018_696_4, f1: undefined, f2: 2.996_5 },
         { energy: 0.018_998_8, f1: undefined, f2: 3.013_59 },
         { energy: 0.019_306_1, f1: undefined, f2: 3.030_78 },
         { energy: 0.019_618_4, f1: undefined, f2: 3.048_06 },
         { energy: 0.019_935_7, f1: undefined, f2: 3.065_44 },
         { energy: 0.020_258_2, f1: undefined, f2: 3.082_93 },
         { energy: 0.020_585_8, f1: undefined, f2: 3.100_51 },
         { energy: 0.020_918_8, f1: undefined, f2: 3.118_19 },
         { energy: 0.021_257_1, f1: undefined, f2: 3.135_97 },
         { energy: 0.021_600_9, f1: undefined, f2: 3.153_86 },
         { energy: 0.021_950_3, f1: undefined, f2: 3.171_84 },
         { energy: 0.022_305_3, f1: undefined, f2: 3.189_93 },
         { energy: 0.022_666_1, f1: undefined, f2: 3.199_01 },
         { energy: 0.023_032_7, f1: undefined, f2: 3.205_29 },
         { energy: 0.023_405_3, f1: undefined, f2: 3.211_59 },
         { energy: 0.023_783_8, f1: undefined, f2: 3.217_89 },
         { energy: 0.024_168_5, f1: undefined, f2: 3.224_21 },
         { energy: 0.024_559_4, f1: undefined, f2: 3.230_54 },
         { energy: 0.024_956_6, f1: undefined, f2: 3.236_89 },
         { energy: 0.025_360_3, f1: undefined, f2: 3.243_24 },
         { energy: 0.025_770_5, f1: undefined, f2: 3.249_61 },
         { energy: 0.026_187_3, f1: undefined, f2: 3.255_99 },
         { energy: 0.026_610_9, f1: undefined, f2: 3.262_39 },
         { energy: 0.027_041_3, f1: undefined, f2: 3.268_79 },
         { energy: 0.027_478_6, f1: undefined, f2: 3.275_21 },
         { energy: 0.027_923_1, f1: undefined, f2: 3.281_64 },
         { energy: 0.028_374_7, f1: undefined, f2: 3.281_84 },
         { energy: 0.028_833_7, f1: undefined, f2: 3.263_61 },
         { energy: 0.029_3, f1: 4.565_51, f2: 3.245_47 },
         { energy: 0.029_773_9, f1: 4.596_74, f2: 3.227_45 },
         { energy: 0.030_255_5, f1: 4.623_89, f2: 3.209_51 },
         { energy: 0.030_744_9, f1: 4.647_52, f2: 3.191_68 },
         { energy: 0.031_242_1, f1: 4.667_94, f2: 3.173_95 },
         { energy: 0.031_747_5, f1: 4.685_34, f2: 3.156_32 },
         { energy: 0.032_260_9, f1: 4.699_85, f2: 3.138_78 },
         { energy: 0.032_782_7, f1: 4.711_57, f2: 3.121_35 },
         { energy: 0.033_313, f1: 4.720_56, f2: 3.104_01 },
         { energy: 0.033_851_8, f1: 4.727_26, f2: 3.086_76 },
         { energy: 0.034_399_3, f1: 4.732_53, f2: 3.068_21 },
         { energy: 0.034_955_7, f1: 4.732_84, f2: 3.047_83 },
         { energy: 0.035_521_1, f1: 4.728_73, f2: 3.027_59 },
         { energy: 0.036_095_6, f1: 4.720_57, f2: 3.007_47 },
         { energy: 0.036_679_4, f1: 4.708_33, f2: 2.987_5 },
         { energy: 0.037_272_7, f1: 4.691_85, f2: 2.967_65 },
         { energy: 0.037_875_5, f1: 4.670_95, f2: 2.947_94 },
         { energy: 0.038_488_2, f1: 4.645_4, f2: 2.928_35 },
         { energy: 0.039_110_7, f1: 4.614_96, f2: 2.908_91 },
         { energy: 0.039_743_2, f1: 4.579_45, f2: 2.889_58 },
         { energy: 0.040_386_1, f1: 4.538_98, f2: 2.870_39 },
         { energy: 0.041_039_3, f1: 4.495_19, f2: 2.850_02 },
         { energy: 0.041_703_1, f1: 4.441_7, f2: 2.821_62 },
         { energy: 0.042_377_6, f1: 4.375_64, f2: 2.793_49 },
         { energy: 0.043_063, f1: 4.297_42, f2: 2.765_65 },
         { energy: 0.043_759_5, f1: 4.206_34, f2: 2.738_09 },
         { energy: 0.044_467_3, f1: 4.100_8, f2: 2.710_79 },
         { energy: 0.045_186_5, f1: 3.978_65, f2: 2.683_77 },
         { energy: 0.045_917_4, f1: 3.836_97, f2: 2.657_03 },
         { energy: 0.046_66, f1: 3.671_91, f2: 2.630_54 },
         { energy: 0.047_414_7, f1: 3.478_17, f2: 2.604_33 },
         { energy: 0.048_181_6, f1: 3.248_35, f2: 2.578_37 },
         { energy: 0.048_960_9, f1: 2.971_72, f2: 2.552_67 },
         { energy: 0.049_752_8, f1: 2.632_37, f2: 2.526_64 },
         { energy: 0.050_557_6, f1: 2.198_08, f2: 2.495_88 },
         { energy: 0.051_375_3, f1: 1.605_64, f2: 2.465_5 },
         { energy: 0.052_206_2, f1: 0.746_053, f2: 2.499_5 },
         { energy: 0.053_050_6, f1: -0.823_081, f2: 2.574_69 },
         { energy: 0.053_908_7, f1: -3.484_92, f2: 4.805_17 },
         { energy: 0.054_780_6, f1: -2.282_94, f2: 9.285_09 },
         { energy: 0.055_666_7, f1: -0.253_217, f2: 9.982_38 },
         { energy: 0.056_567, f1: 1.297_76, f2: 10.454_9 },
         { energy: 0.057_482, f1: 2.402_76, f2: 10.707_6 },
         { energy: 0.058_411_7, f1: 3.541_72, f2: 10.927_5 },
         { energy: 0.059_356_4, f1: 4.538_69, f2: 10.685 },
         { energy: 0.060_316_5, f1: 5.329_58, f2: 10.447_8 },
         { energy: 0.061_292_1, f1: 6.037_52, f2: 10.112_2 },
         { energy: 0.062_283_4, f1: 6.553_92, f2: 9.716_69 },
         { energy: 0.063_290_8, f1: 6.939_43, f2: 9.336_63 },
         { energy: 0.064_314_5, f1: 7.235_31, f2: 8.971_42 },
         { energy: 0.065_354_7, f1: 7.452_67, f2: 8.620_5 },
         { energy: 0.066_411_8, f1: 7.586_08, f2: 8.283_32 },
         { energy: 0.067_485_9, f1: 7.588_43, f2: 7.970_15 },
         { energy: 0.068_577_5, f1: 7.590_44, f2: 7.862_67 },
         { energy: 0.069_686_7, f1: 7.645_65, f2: 7.756_63 },
         { energy: 0.070_813_8, f1: 7.709_68, f2: 7.652_03 },
         { energy: 0.071_959_1, f1: 7.769_21, f2: 7.548_83 },
         { energy: 0.073_123, f1: 7.815_95, f2: 7.447_03 },
         { energy: 0.074_305_7, f1: 7.837_98, f2: 7.346_6 },
         { energy: 0.075_507_6, f1: 7.797_81, f2: 7.288_64 },
         { energy: 0.076_728_9, f1: 7.805_45, f2: 7.306_16 },
         { energy: 0.077_969_9, f1: 7.841_88, f2: 7.323_72 },
         { energy: 0.079_231, f1: 7.893, f2: 7.341_33 },
         { energy: 0.080_512_5, f1: 7.952_79, f2: 7.358_98 },
         { energy: 0.081_814_7, f1: 8.018_51, f2: 7.376_67 },
         { energy: 0.083_138, f1: 8.088_5, f2: 7.394_4 },
         { energy: 0.084_482_7, f1: 8.161_54, f2: 7.412_18 },
         { energy: 0.085_849_1, f1: 8.236_68, f2: 7.43 },
         { energy: 0.087_237_7, f1: 8.312_82, f2: 7.447_86 },
         { energy: 0.088_648_7, f1: 8.387_4, f2: 7.466_24 },
         { energy: 0.090_082_5, f1: 8.464_71, f2: 7.492_75 },
         { energy: 0.091_539_5, f1: 8.546_59, f2: 7.519_36 },
         { energy: 0.093_020_1, f1: 8.631_78, f2: 7.546_07 },
         { energy: 0.094_524_6, f1: 8.719_38, f2: 7.572_86 },
         { energy: 0.096_053_5, f1: 8.809_11, f2: 7.599_76 },
         { energy: 0.097_607_1, f1: 8.900_86, f2: 7.626_75 },
         { energy: 0.099_185_8, f1: 8.994_54, f2: 7.653_83 },
         { energy: 0.100_79, f1: 9.090_17, f2: 7.681_01 },
         { energy: 0.102_42, f1: 9.187_82, f2: 7.708_29 },
         { energy: 0.104_077, f1: 9.287_76, f2: 7.735_67 },
         { energy: 0.105_76, f1: 9.391_01, f2: 7.763_14 },
         { energy: 0.107_471, f1: 9.496_49, f2: 7.787_22 },
         { energy: 0.109_209, f1: 9.601_95, f2: 7.810_49 },
         { energy: 0.110_975, f1: 9.708_42, f2: 7.833_83 },
         { energy: 0.112_77, f1: 9.816_4, f2: 7.857_24 },
         { energy: 0.114_594, f1: 9.926_28, f2: 7.880_73 },
         { energy: 0.116_448, f1: 10.038_4, f2: 7.904_28 },
         { energy: 0.118_331, f1: 10.153_3, f2: 7.927_91 },
         { energy: 0.120_245, f1: 10.271_7, f2: 7.951_6 },
         { energy: 0.122_19, f1: 10.395_1, f2: 7.975_37 },
         { energy: 0.124_166, f1: 10.528, f2: 7.999_21 },
         { energy: 0.126_175, f1: 10.673_9, f2: 8.006_25 },
         { energy: 0.128_215, f1: 10.806_8, f2: 7.998_53 },
         { energy: 0.130_289, f1: 10.933_2, f2: 7.990_83 },
         { energy: 0.132_397, f1: 11.056_5, f2: 7.983_13 },
         { energy: 0.134_538, f1: 11.178_1, f2: 7.975_44 },
         { energy: 0.136_714, f1: 11.298_9, f2: 7.967_76 },
         { energy: 0.138_925, f1: 11.419_6, f2: 7.960_08 },
         { energy: 0.141_172, f1: 11.540_9, f2: 7.952_41 },
         { energy: 0.143_456, f1: 11.663_8, f2: 7.944_75 },
         { energy: 0.145_776, f1: 11.790_7, f2: 7.937_1 },
         { energy: 0.148_134, f1: 11.927_8, f2: 7.921_06 },
         { energy: 0.150_53, f1: 12.054_7, f2: 7.892_17 },
         { energy: 0.152_964, f1: 12.175_8, f2: 7.863_39 },
         { energy: 0.155_439, f1: 12.293_7, f2: 7.834_71 },
         { energy: 0.157_953, f1: 12.409_4, f2: 7.806_15 },
         { energy: 0.160_507, f1: 12.523_7, f2: 7.777_68 },
         { energy: 0.163_103, f1: 12.636_9, f2: 7.749_32 },
         { energy: 0.165_742, f1: 12.749_5, f2: 7.721_06 },
         { energy: 0.168_422, f1: 12.861_9, f2: 7.692_9 },
         { energy: 0.171_146, f1: 12.974_5, f2: 7.664_85 },
         { energy: 0.173_915, f1: 13.087_7, f2: 7.636_9 },
         { energy: 0.176_727, f1: 13.202, f2: 7.609_05 },
         { energy: 0.179_586, f1: 13.318_3, f2: 7.581_3 },
         { energy: 0.182_491, f1: 13.437_7, f2: 7.553_66 },
         { energy: 0.185_442, f1: 13.562_1, f2: 7.526_11 },
         { energy: 0.188_442, f1: 13.696_3, f2: 7.498_67 },
         { energy: 0.191_489, f1: 13.860_1, f2: 7.460_87 },
         { energy: 0.194_587, f1: 14.003_8, f2: 7.368_66 },
         { energy: 0.197_734, f1: 14.125_1, f2: 7.277_6 },
         { energy: 0.200_932, f1: 14.232_1, f2: 7.187_66 },
         { energy: 0.204_182, f1: 14.329_6, f2: 7.098_84 },
         { energy: 0.207_485, f1: 14.419_2, f2: 7.011_11 },
         { energy: 0.210_84, f1: 14.501_7, f2: 6.924_46 },
         { energy: 0.214_251, f1: 14.577_2, f2: 6.838_89 },
         { energy: 0.217_716, f1: 14.645_4, f2: 6.754_37 },
         { energy: 0.221_237, f1: 14.704_5, f2: 6.670_9 },
         { energy: 0.224_816, f1: 14.744_9, f2: 6.589_63 },
         { energy: 0.228_452, f1: 14.788_4, f2: 6.544_14 },
         { energy: 0.232_147, f1: 14.841_6, f2: 6.498_96 },
         { energy: 0.235_902, f1: 14.900_9, f2: 6.454_1 },
         { energy: 0.239_717, f1: 14.962_7, f2: 6.409_54 },
         { energy: 0.243_595, f1: 15.026_4, f2: 6.365_29 },
         { energy: 0.247_535, f1: 15.091_7, f2: 6.321_35 },
         { energy: 0.251_538, f1: 15.158_5, f2: 6.277_71 },
         { energy: 0.255_607, f1: 15.226_9, f2: 6.234_37 },
         { energy: 0.259_741, f1: 15.297_2, f2: 6.191_33 },
         { energy: 0.263_942, f1: 15.370_2, f2: 6.148_59 },
         { energy: 0.268_211, f1: 15.446_9, f2: 6.106_15 },
         { energy: 0.272_549, f1: 15.529_4, f2: 6.063_99 },
         { energy: 0.276_957, f1: 15.641, f2: 6.010_84 },
         { energy: 0.281_437, f1: 15.733_8, f2: 5.922_55 },
         { energy: 0.285_989, f1: 15.806_3, f2: 5.835_56 },
         { energy: 0.290_615, f1: 15.871, f2: 5.749_84 },
         { energy: 0.295_315, f1: 15.929_8, f2: 5.665_39 },
         { energy: 0.300_092, f1: 15.983_9, f2: 5.582_17 },
         { energy: 0.304_945, f1: 16.034_1, f2: 5.500_18 },
         { energy: 0.309_878, f1: 16.081_1, f2: 5.419_4 },
         { energy: 0.314_89, f1: 16.125_6, f2: 5.339_79 },
         { energy: 0.319_983, f1: 16.168_3, f2: 5.261_36 },
         { energy: 0.325_158, f1: 16.210_1, f2: 5.184_08 },
         { energy: 0.330_418, f1: 16.252_5, f2: 5.107_94 },
         { energy: 0.335_762, f1: 16.309_8, f2: 5.032_91 },
         { energy: 0.341_192, f1: 16.358_1, f2: 4.923_8 },
         { energy: 0.346_711, f1: 16.386_9, f2: 4.816_16 },
         { energy: 0.352_319, f1: 16.404_8, f2: 4.710_86 },
         { energy: 0.358_017, f1: 16.414_2, f2: 4.607_87 },
         { energy: 0.363_808, f1: 16.416, f2: 4.507_13 },
         { energy: 0.369_692, f1: 16.410_7, f2: 4.408_59 },
         { energy: 0.375_672, f1: 16.398, f2: 4.312_21 },
         { energy: 0.381_748, f1: 16.370_7, f2: 4.217_93 },
         { energy: 0.387_922, f1: 16.338_7, f2: 4.144_9 },
         { energy: 0.394_197, f1: 16.317, f2: 4.079_54 },
         { energy: 0.400_573, f1: 16.303_7, f2: 4.009_15 },
         { energy: 0.407_052, f1: 16.282_2, f2: 3.929_17 },
         { energy: 0.413_635, f1: 16.253_4, f2: 3.850_8 },
         { energy: 0.420_326, f1: 16.219_1, f2: 3.773_98 },
         { energy: 0.427_124, f1: 16.179_7, f2: 3.698_7 },
         { energy: 0.434_032, f1: 16.135_4, f2: 3.624_91 },
         { energy: 0.441_052, f1: 16.085_9, f2: 3.552_6 },
         { energy: 0.448_186, f1: 16.031_2, f2: 3.481_74 },
         { energy: 0.455_435, f1: 15.971_1, f2: 3.412_28 },
         { energy: 0.462_802, f1: 15.905_2, f2: 3.344_21 },
         { energy: 0.470_287, f1: 15.833_3, f2: 3.277_5 },
         { energy: 0.477_894, f1: 15.755, f2: 3.212_12 },
         { energy: 0.485_623, f1: 15.669_8, f2: 3.148_04 },
         { energy: 0.493_478, f1: 15.577_7, f2: 3.085_03 },
         { energy: 0.501_459, f1: 15.477_1, f2: 3.022_69 },
         { energy: 0.509_57, f1: 15.367_2, f2: 2.961_6 },
         { energy: 0.517_812, f1: 15.247_5, f2: 2.901_75 },
         { energy: 0.526_187, f1: 15.116_9, f2: 2.843_1 },
         { energy: 0.534_698, f1: 14.974_2, f2: 2.785_64 },
         { energy: 0.543_346, f1: 14.818_1, f2: 2.729_35 },
         { energy: 0.552_134, f1: 14.646_6, f2: 2.674_18 },
         { energy: 0.561_065, f1: 14.457_7, f2: 2.620_14 },
         { energy: 0.570_139, f1: 14.248_6, f2: 2.567_19 },
         { energy: 0.579_361, f1: 14.015_8, f2: 2.515_3 },
         { energy: 0.588_732, f1: 13.754_2, f2: 2.464_47 },
         { energy: 0.598_254, f1: 13.458_3, f2: 2.419_99 },
         { energy: 0.607_93, f1: 13.127_3, f2: 2.379_73 },
         { energy: 0.617_763, f1: 12.752_3, f2: 2.340_17 },
         { energy: 0.627_755, f1: 12.319_4, f2: 2.301_04 },
         { energy: 0.637_908, f1: 11.809_3, f2: 2.259_57 },
         { energy: 0.648_226, f1: 11.191_5, f2: 2.214_52 },
         { energy: 0.658_711, f1: 10.415_5, f2: 2.167_57 },
         { energy: 0.669_365, f1: 9.397_78, f2: 2.121_64 },
         { energy: 0.680_191, f1: 7.965_62, f2: 2.082_55 },
         { energy: 0.691_193, f1: 5.653_97, f2: 2.048_74 },
         { energy: 0.702_372, f1: -0.051_255, f2: 2.017_13 },
         { energy: 0.706_7, f1: -17.987_8, f2: 2.005_16 },
         { energy: 0.706_9, f1: -17.971_7, f2: 17.024_1 },
         { energy: 0.713_733, f1: 2.561_29, f2: 16.800_5 },
         { energy: 0.725_277, f1: 7.511_67, f2: 16.434 },
         { energy: 0.737_008, f1: 10.037_5, f2: 16.075_6 },
         { energy: 0.748_928, f1: 11.744_1, f2: 15.725_2 },
         { energy: 0.761_042, f1: 13.018, f2: 15.382_8 },
         { energy: 0.773_351, f1: 14.007_9, f2: 15.048 },
         { energy: 0.785_859, f1: 14.773_7, f2: 14.726_1 },
         { energy: 0.798_57, f1: 15.252_2, f2: 14.432_7 },
         { energy: 0.811_486, f1: 15.735_7, f2: 14.506_6 },
         { energy: 0.824_611, f1: 16.301, f2: 14.580_9 },
         { energy: 0.837_949, f1: 16.929_4, f2: 14.655_5 },
         { energy: 0.851_502, f1: 17.653_1, f2: 14.730_5 },
         { energy: 0.865_274, f1: 18.491_7, f2: 14.591_5 },
         { energy: 0.879_269, f1: 19.193_3, f2: 14.265_2 },
         { energy: 0.893_491, f1: 19.732_9, f2: 13.946_5 },
         { energy: 0.907_943, f1: 20.208_4, f2: 13.634_7 },
         { energy: 0.922_628, f1: 20.627_2, f2: 13.329_7 },
         { energy: 0.937_551, f1: 21.005_9, f2: 13.041_8 },
         { energy: 0.952_715, f1: 21.354_4, f2: 12.763 },
         { energy: 0.968_124, f1: 21.678, f2: 12.492_8 },
         { energy: 0.983_783, f1: 21.980_1, f2: 12.228 },
         { energy: 0.999_695, f1: 22.262_3, f2: 11.968_5 },
         { energy: 1.015_86, f1: 22.527_8, f2: 11.714 },
         { energy: 1.032_29, f1: 22.777_3, f2: 11.461_7 },
         { energy: 1.048_99, f1: 23.012_3, f2: 11.210_6 },
         { energy: 1.065_96, f1: 23.229_5, f2: 10.960_4 },
         { energy: 1.083_2, f1: 23.429_4, f2: 10.715_7 },
         { energy: 1.100_72, f1: 23.615_7, f2: 10.476_5 },
         { energy: 1.118_52, f1: 23.789_5, f2: 10.242_6 },
         { energy: 1.136_61, f1: 23.952_2, f2: 10.013_9 },
         { energy: 1.155, f1: 24.104_6, f2: 9.790_36 },
         { energy: 1.173_68, f1: 24.247_8, f2: 9.571_81 },
         { energy: 1.192_66, f1: 24.382_5, f2: 9.358_13 },
         { energy: 1.211_95, f1: 24.509_6, f2: 9.149_19 },
         { energy: 1.231_55, f1: 24.631_3, f2: 8.944_92 },
         { energy: 1.251_47, f1: 24.746_8, f2: 8.742_4 },
         { energy: 1.271_72, f1: 24.856_4, f2: 8.541_42 },
         { energy: 1.292_29, f1: 24.957_1, f2: 8.341_35 },
         { energy: 1.313_19, f1: 25.048_7, f2: 8.146_13 },
         { energy: 1.334_43, f1: 25.133_8, f2: 7.955_44 },
         { energy: 1.356_01, f1: 25.212_9, f2: 7.769_13 },
         { energy: 1.377_94, f1: 25.286_5, f2: 7.587_14 },
         { energy: 1.400_23, f1: 25.355_1, f2: 7.409_43 },
         { energy: 1.422_88, f1: 25.419_2, f2: 7.235_95 },
         { energy: 1.445_89, f1: 25.479_8, f2: 7.066_56 },
         { energy: 1.469_28, f1: 25.536_9, f2: 6.900_47 },
         { energy: 1.493_04, f1: 25.592, f2: 6.737_28 },
         { energy: 1.517_19, f1: 25.642_6, f2: 6.573_91 },
         { energy: 1.541_73, f1: 25.687_2, f2: 6.413_99 },
         { energy: 1.566_67, f1: 25.727_5, f2: 6.258_03 },
         { energy: 1.592_01, f1: 25.764_2, f2: 6.105_83 },
         { energy: 1.617_76, f1: 25.797_7, f2: 5.957_31 },
         { energy: 1.643_92, f1: 25.828_2, f2: 5.812_39 },
         { energy: 1.670_51, f1: 25.856_3, f2: 5.671_04 },
         { energy: 1.697_53, f1: 25.882_3, f2: 5.533_11 },
         { energy: 1.724_99, f1: 25.907_6, f2: 5.398_47 },
         { energy: 1.752_89, f1: 25.930_8, f2: 5.263_44 },
         { energy: 1.781_24, f1: 25.950_7, f2: 5.130_51 },
         { energy: 1.810_05, f1: 25.966_7, f2: 4.999_9 },
         { energy: 1.839_32, f1: 25.979_7, f2: 4.872_66 },
         { energy: 1.869_07, f1: 25.990_2, f2: 4.748_66 },
         { energy: 1.899_3, f1: 25.998_5, f2: 4.627_85 },
         { energy: 1.930_02, f1: 26.004_9, f2: 4.510_12 },
         { energy: 1.961_24, f1: 26.009_8, f2: 4.395_37 },
         { energy: 1.992_96, f1: 26.012_4, f2: 4.283_5 },
         { energy: 2.025_2, f1: 26.015_3, f2: 4.176_38 },
         { energy: 2.057_95, f1: 26.017_5, f2: 4.068_27 },
         { energy: 2.091_24, f1: 26.017_4, f2: 3.962_72 },
         { energy: 2.125_06, f1: 26.015_5, f2: 3.859_56 },
         { energy: 2.159_43, f1: 26.012_2, f2: 3.758_85 },
         { energy: 2.194_36, f1: 26.007_4, f2: 3.660_43 },
         { energy: 2.229_85, f1: 26.001_4, f2: 3.564_42 },
         { energy: 2.265_92, f1: 25.994_2, f2: 3.470_73 },
         { energy: 2.302_57, f1: 25.986, f2: 3.379_28 },
         { energy: 2.339_81, f1: 25.976_6, f2: 3.289_88 },
         { energy: 2.377_66, f1: 25.966_2, f2: 3.202_81 },
         { energy: 2.416_11, f1: 25.954_9, f2: 3.117_85 },
         { energy: 2.455_19, f1: 25.942_8, f2: 3.034_94 },
         { energy: 2.494_9, f1: 25.929_9, f2: 2.954_09 },
         { energy: 2.535_26, f1: 25.916_2, f2: 2.875_25 },
         { energy: 2.576_26, f1: 25.901_8, f2: 2.798_37 },
         { energy: 2.617_93, f1: 25.886_6, f2: 2.723_4 },
         { energy: 2.660_27, f1: 25.870_9, f2: 2.650_34 },
         { energy: 2.703_3, f1: 25.854_6, f2: 2.579_09 },
         { energy: 2.747_03, f1: 25.837_7, f2: 2.509_66 },
         { energy: 2.791_46, f1: 25.820_2, f2: 2.442_01 },
         { energy: 2.836_61, f1: 25.802_3, f2: 2.376_11 },
         { energy: 2.882_49, f1: 25.783_9, f2: 2.311_86 },
         { energy: 2.929_11, f1: 25.765, f2: 2.249_28 },
         { energy: 2.976_48, f1: 25.745_7, f2: 2.188_31 },
         { energy: 3.024_63, f1: 25.726, f2: 2.128_95 },
         { energy: 3.073_55, f1: 25.705_9, f2: 2.071_1 },
         { energy: 3.123_26, f1: 25.685_5, f2: 2.014_76 },
         { energy: 3.173_78, f1: 25.664_7, f2: 1.959_9 },
         { energy: 3.225_11, f1: 25.643_6, f2: 1.906_5 },
         { energy: 3.277_27, f1: 25.622_1, f2: 1.854_49 },
         { energy: 3.330_28, f1: 25.600_3, f2: 1.803_85 },
         { energy: 3.384_15, f1: 25.578_2, f2: 1.754_56 },
         { energy: 3.438_88, f1: 25.555_9, f2: 1.706_57 },
         { energy: 3.494_5, f1: 25.533_2, f2: 1.659_83 },
         { energy: 3.551_02, f1: 25.510_2, f2: 1.614_38 },
         { energy: 3.608_46, f1: 25.486_9, f2: 1.570_13 },
         { energy: 3.666_82, f1: 25.463_2, f2: 1.527_04 },
         { energy: 3.726_13, f1: 25.439_3, f2: 1.485_15 },
         { energy: 3.786_4, f1: 25.415_1, f2: 1.444_34 },
         { energy: 3.847_64, f1: 25.390_5, f2: 1.404_65 },
         { energy: 3.909_87, f1: 25.365_5, f2: 1.366_03 },
         { energy: 3.973_11, f1: 25.340_2, f2: 1.328_47 },
         { energy: 4.037_38, f1: 25.314_5, f2: 1.291_9 },
         { energy: 4.102_68, f1: 25.288_4, f2: 1.256_36 },
         { energy: 4.169_03, f1: 25.261_9, f2: 1.221_73 },
         { energy: 4.236_46, f1: 25.234_8, f2: 1.188_09 },
         { energy: 4.304_98, f1: 25.207_3, f2: 1.155_33 },
         { energy: 4.374_62, f1: 25.179_2, f2: 1.123_46 },
         { energy: 4.445_37, f1: 25.150_5, f2: 1.092_49 },
         { energy: 4.517_27, f1: 25.121_1, f2: 1.062_39 },
         { energy: 4.590_33, f1: 25.091, f2: 1.033_05 },
         { energy: 4.664_58, f1: 25.060_1, f2: 1.004_57 },
         { energy: 4.740_03, f1: 25.028_3, f2: 0.976_873 },
         { energy: 4.816_69, f1: 24.995_5, f2: 0.949_891 },
         { energy: 4.894_6, f1: 24.961_7, f2: 0.923_701 },
         { energy: 4.973_77, f1: 24.926_6, f2: 0.898_161 },
         { energy: 5.054_21, f1: 24.890_2, f2: 0.873_392 },
         { energy: 5.135_96, f1: 24.852_2, f2: 0.849_294 },
         { energy: 5.219_03, f1: 24.812_6, f2: 0.825_838 },
         { energy: 5.303_44, f1: 24.771, f2: 0.803_057 },
         { energy: 5.389_22, f1: 24.727_1, f2: 0.780_872 },
         { energy: 5.476_39, f1: 24.680_8, f2: 0.759_346 },
         { energy: 5.564_97, f1: 24.631_5, f2: 0.738_385 },
         { energy: 5.654_98, f1: 24.578_9, f2: 0.718_011 },
         { energy: 5.746_44, f1: 24.522_2, f2: 0.698_203 },
         { energy: 5.839_39, f1: 24.460_9, f2: 0.678_946 },
         { energy: 5.933_83, f1: 24.394, f2: 0.660_221 },
         { energy: 6.029_81, f1: 24.320_4, f2: 0.642_017 },
         { energy: 6.127_33, f1: 24.238_4, f2: 0.624_321 },
         { energy: 6.226_44, f1: 24.146, f2: 0.607_117 },
         { energy: 6.327_15, f1: 24.040_2, f2: 0.590_39 },
         { energy: 6.429_48, f1: 23.916_8, f2: 0.574_125 },
         { energy: 6.533_48, f1: 23.769_1, f2: 0.558_319 },
         { energy: 6.639_15, f1: 23.586_1, f2: 0.542_948 },
         { energy: 6.746_54, f1: 23.348_1, f2: 0.528_004 },
         { energy: 6.855_65, f1: 23.012_4, f2: 0.513_483 },
         { energy: 6.966_54, f1: 22.459_1, f2: 0.499_359 },
         { energy: 7.079_22, f1: 20.934_4, f2: 0.485_638 },
         { energy: 7.111_9, f1: 14.751_3, f2: 0.481_77 },
         { energy: 7.112_1, f1: 14.751_8, f2: 3.855_92 },
         { energy: 7.193_72, f1: 22.019_7, f2: 3.792_69 },
         { energy: 7.310_07, f1: 23.031_1, f2: 3.705_52 },
         { energy: 7.428_31, f1: 23.578_8, f2: 3.619_51 },
         { energy: 7.548_45, f1: 23.959_5, f2: 3.534_62 },
         { energy: 7.670_54, f1: 24.251_8, f2: 3.451_14 },
         { energy: 7.794_61, f1: 24.488_8, f2: 3.368_93 },
         { energy: 7.920_68, f1: 24.687_3, f2: 3.288_02 },
         { energy: 8.048_79, f1: 24.857_5, f2: 3.208_44 },
         { energy: 8.178_98, f1: 25.005_8, f2: 3.130_21 },
         { energy: 8.311_26, f1: 25.136_4, f2: 3.053_34 },
         { energy: 8.445_69, f1: 25.252_7, f2: 2.977_92 },
         { energy: 8.582_29, f1: 25.356_9, f2: 2.903_74 },
         { energy: 8.721_11, f1: 25.450_7, f2: 2.831_04 },
         { energy: 8.862_16, f1: 25.535_5, f2: 2.759_67 },
         { energy: 9.005_5, f1: 25.612_6, f2: 2.689_82 },
         { energy: 9.151_16, f1: 25.682_9, f2: 2.621_15 },
         { energy: 9.299_17, f1: 25.746_8, f2: 2.553_98 },
         { energy: 9.449_58, f1: 25.805_4, f2: 2.488_17 },
         { energy: 9.602_42, f1: 25.859, f2: 2.423_76 },
         { energy: 9.757_73, f1: 25.908_1, f2: 2.360_63 },
         { energy: 9.915_55, f1: 25.953_2, f2: 2.298_98 },
         { energy: 10.075_9, f1: 25.994_6, f2: 2.238_54 },
         { energy: 10.238_9, f1: 26.032_5, f2: 2.179_43 },
         { energy: 10.404_5, f1: 26.067_3, f2: 2.121_63 },
         { energy: 10.572_8, f1: 26.099_2, f2: 2.065_11 },
         { energy: 10.743_8, f1: 26.128_4, f2: 2.009_87 },
         { energy: 10.917_6, f1: 26.155_2, f2: 1.955_89 },
         { energy: 11.094_2, f1: 26.179_7, f2: 1.903_15 },
         { energy: 11.273_6, f1: 26.202, f2: 1.851_64 },
         { energy: 11.455_9, f1: 26.222_4, f2: 1.801_33 },
         { energy: 11.641_2, f1: 26.241, f2: 1.752_22 },
         { energy: 11.829_5, f1: 26.257_8, f2: 1.704_28 },
         { energy: 12.020_8, f1: 26.273, f2: 1.657_49 },
         { energy: 12.215_3, f1: 26.286_8, f2: 1.611_83 },
         { energy: 12.412_8, f1: 26.299_2, f2: 1.567_28 },
         { energy: 12.613_6, f1: 26.310_3, f2: 1.523_83 },
         { energy: 12.817_6, f1: 26.320_2, f2: 1.481_46 },
         { energy: 13.025, f1: 26.328_9, f2: 1.440_14 },
         { energy: 13.235_6, f1: 26.336_6, f2: 1.399_85 },
         { energy: 13.449_7, f1: 26.343_3, f2: 1.360_58 },
         { energy: 13.667_2, f1: 26.349_1, f2: 1.322_31 },
         { energy: 13.888_3, f1: 26.354, f2: 1.285_01 },
         { energy: 14.112_9, f1: 26.358_2, f2: 1.248_66 },
         { energy: 14.341_2, f1: 26.361_6, f2: 1.213_26 },
         { energy: 14.573_1, f1: 26.364_2, f2: 1.178_77 },
         { energy: 14.808_9, f1: 26.366_3, f2: 1.145_18 },
         { energy: 15.048_4, f1: 26.367_7, f2: 1.112_46 },
         { energy: 15.291_8, f1: 26.368_5, f2: 1.080_61 },
         { energy: 15.539_1, f1: 26.368_9, f2: 1.049_6 },
         { energy: 15.790_4, f1: 26.368_7, f2: 1.019_41 },
         { energy: 16.045_8, f1: 26.368_1, f2: 0.990_019 },
         { energy: 16.305_4, f1: 26.367, f2: 0.961_418 },
         { energy: 16.569_1, f1: 26.365_5, f2: 0.933_585 },
         { energy: 16.837_1, f1: 26.363_7, f2: 0.906_501 },
         { energy: 17.109_4, f1: 26.361_6, f2: 0.880_15 },
         { energy: 17.386_1, f1: 26.359_1, f2: 0.854_515 },
         { energy: 17.667_4, f1: 26.356_3, f2: 0.829_578 },
         { energy: 17.953_1, f1: 26.353_3, f2: 0.805_322 },
         { energy: 18.243_5, f1: 26.35, f2: 0.781_732 },
         { energy: 18.538_6, f1: 26.346_5, f2: 0.758_791 },
         { energy: 18.838_4, f1: 26.342_8, f2: 0.736_483 },
         { energy: 19.143_1, f1: 26.338_9, f2: 0.714_793 },
         { energy: 19.452_7, f1: 26.334_8, f2: 0.693_706 },
         { energy: 19.767_4, f1: 26.330_5, f2: 0.673_206 },
         { energy: 20.087_1, f1: 26.326_1, f2: 0.653_279 },
         { energy: 20.412, f1: 26.321_6, f2: 0.633_91 },
         { energy: 20.742_1, f1: 26.317, f2: 0.615_086 },
         { energy: 21.077_6, f1: 26.312_3, f2: 0.596_791 },
         { energy: 21.418_5, f1: 26.307_5, f2: 0.579_014 },
         { energy: 21.765, f1: 26.302_6, f2: 0.561_739 },
         { energy: 22.117, f1: 26.297_6, f2: 0.544_955 },
         { energy: 22.474_7, f1: 26.292_6, f2: 0.528_649 },
         { energy: 22.838_2, f1: 26.287_5, f2: 0.512_808 },
         { energy: 23.207_6, f1: 26.282_4, f2: 0.497_42 },
         { energy: 23.583, f1: 26.277_2, f2: 0.482_472 },
         { energy: 23.964_4, f1: 26.272, f2: 0.467_954 },
         { energy: 24.352, f1: 26.266_8, f2: 0.453_854 },
         { energy: 24.745_9, f1: 26.261_6, f2: 0.440_16 },
         { energy: 25.146_2, f1: 26.256_4, f2: 0.426_862 },
         { energy: 25.552_9, f1: 26.251_2, f2: 0.413_949 },
         { energy: 25.966_2, f1: 26.246, f2: 0.401_411 },
         { energy: 26.386_1, f1: 26.240_8, f2: 0.389_237 },
         { energy: 26.812_9, f1: 26.235_6, f2: 0.377_418 },
         { energy: 27.246_6, f1: 26.230_4, f2: 0.365_944 },
         { energy: 27.687_3, f1: 26.225_3, f2: 0.354_805 },
         { energy: 28.135_1, f1: 26.220_2, f2: 0.343_992 },
         { energy: 28.590_2, f1: 26.215_1, f2: 0.333_497 },
         { energy: 29.052_6, f1: 26.21, f2: 0.323_31 },
         { energy: 29.522_5, f1: 26.205, f2: 0.313_422 },
         { energy: 30.0, f1: 26.2, f2: 0.303_827 },
    ],
    neutron_scattering: {
        b_c: { value: 9.45, uncertainty: 0.02},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 11.22, uncertainty: 0.05},
        bound_incoherent_scattering_xs: { value: 0.4, uncertainty: 0.11},
        total_bound_scattering_xs: { value: 11.62, uncertainty: 0.10},
        absorption_xs: { value: 2.56, uncertainty: 0.03},
    },
    isotopes: [
        { 
            mass_number: 45,
            mass: { value: 45.014_56, uncertainty: 0.000_43},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 46,
            mass: { value: 46.000_81, uncertainty: 0.000_38},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 47,
            mass: { value: 46.992_89, uncertainty: 0.000_28},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 48,
            mass: { value: 47.980_56, uncertainty: 0.000_11},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 49,
            mass: { value: 48.973_61, uncertainty: 0.000_17},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 50,
            mass: { value: 49.962_99, uncertainty: 0.000_60},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 51,
            mass: { value: 50.956_825, uncertainty: 0.000_016},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 52,
            mass: { value: 51.948_117, uncertainty: 0.000_011},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 53,
            mass: { value: 52.945_312_3, uncertainty: 0.000_002_3},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 54,
            mass: { value: 53.939_614_8, uncertainty: 0.000_001_4},
            abundance: { value: 5.845, uncertainty: 0.035},
            neutron_scattering: {
                    b_c: { value: 4.2, uncertainty: 0.1},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 2.2, uncertainty: 0.1},
                    bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
                    total_bound_scattering_xs: { value: 2.2, uncertainty: 0.1},
                    absorption_xs: { value: 2.25, uncertainty: 0.18},
                },
        },
        { 
            mass_number: 55,
            mass: { value: 54.938_298, uncertainty: 0.000_014},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 56,
            mass: { value: 55.934_942_1, uncertainty: 0.000_001_5},
            abundance: { value: 91.754, uncertainty: 0.036},
            neutron_scattering: {
                    b_c: { value: 10.1, uncertainty: 0.2},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 12.42, uncertainty: 0.07},
                    bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
                    total_bound_scattering_xs: { value: 12.42, uncertainty: 0.07},
                    absorption_xs: { value: 2.59, uncertainty: 0.14},
                },
        },
        { 
            mass_number: 57,
            mass: { value: 56.935_398_7, uncertainty: 0.000_001_5},
            abundance: { value: 2.119, uncertainty: 0.010},
            neutron_scattering: {
                    b_c: { value: 2.3, uncertainty: 0.1},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 0.66, uncertainty: 0.06},
                    bound_incoherent_scattering_xs: { value: 0.3, uncertainty: 0.3},
                    total_bound_scattering_xs: { value: 1.0, uncertainty: 0.3},
                    absorption_xs: { value: 2.48, uncertainty: 0.30},
                },
        },
        { 
            mass_number: 58,
            mass: { value: 57.933_280_5, uncertainty: 0.000_001_5},
            abundance: { value: 0.282, uncertainty: 0.004},
            neutron_scattering: {
                    b_c: { value: 15.0, uncertainty: 0.7},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 28.0, uncertainty: 26.0},
                    bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
                    total_bound_scattering_xs: { value: 28.0, uncertainty: 26.0},
                    absorption_xs: { value: 1.28, uncertainty: 0.05},
                },
        },
        { 
            mass_number: 59,
            mass: { value: 58.934_880_5, uncertainty: 0.000_001_5},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 60,
            mass: { value: 59.934_077, uncertainty: 0.000_004},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 61,
            mass: { value: 60.936_749, uncertainty: 0.000_022},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 62,
            mass: { value: 61.936_77, uncertainty: 0.000_16},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 63,
            mass: { value: 62.940_12, uncertainty: 0.000_20},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 64,
            mass: { value: 63.940_87, uncertainty: 0.000_30},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 65,
            mass: { value: 64.944_94, uncertainty: 0.000_30},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 66,
            mass: { value: 65.945_98, uncertainty: 0.000_35},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 67,
            mass: { value: 66.95, uncertainty: 0.50},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 68,
            mass: { value: 67.952_51, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 69,
            mass: { value: 68.957_7, uncertainty: 0.008_6},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Fe};
