const Al = {
    atomic_number: 13,
    name: 'Aluminum',
    symbol: 'Al',
    mass: 26.981_538,
    common_ions: [3],
    uncommon_ions: [-2, -1, 1, 2],
    xray_scattering: [
         { energy: 0.01, f1: undefined, f2: 3.119_9 },
         { energy: 0.010_161_7, f1: undefined, f2: 3.058_22 },
         { energy: 0.010_326_1, f1: undefined, f2: 2.997_76 },
         { energy: 0.010_493_1, f1: undefined, f2: 2.938_5 },
         { energy: 0.010_662_8, f1: undefined, f2: 2.880_41 },
         { energy: 0.010_835_3, f1: undefined, f2: 2.823_47 },
         { energy: 0.011_010_6, f1: undefined, f2: 2.767_66 },
         { energy: 0.011_188_6, f1: undefined, f2: 2.722 },
         { energy: 0.011_369_6, f1: undefined, f2: 2.691_48 },
         { energy: 0.011_553_5, f1: undefined, f2: 2.661_29 },
         { energy: 0.011_740_4, f1: undefined, f2: 2.631_45 },
         { energy: 0.011_930_3, f1: undefined, f2: 2.601_95 },
         { energy: 0.012_123_2, f1: undefined, f2: 2.572_77 },
         { energy: 0.012_319_3, f1: undefined, f2: 2.543_92 },
         { energy: 0.012_518_6, f1: undefined, f2: 2.515_39 },
         { energy: 0.012_721, f1: undefined, f2: 2.466_68 },
         { energy: 0.012_926_8, f1: undefined, f2: 2.413_73 },
         { energy: 0.013_135_9, f1: undefined, f2: 2.361_92 },
         { energy: 0.013_348_3, f1: undefined, f2: 2.308_98 },
         { energy: 0.013_564_2, f1: undefined, f2: 2.234_05 },
         { energy: 0.013_783_6, f1: undefined, f2: 2.153_56 },
         { energy: 0.014_006_6, f1: undefined, f2: 2.060_69 },
         { energy: 0.014_233_1, f1: undefined, f2: 1.967_56 },
         { energy: 0.014_463_3, f1: undefined, f2: 1.813_05 },
         { energy: 0.014_697_3, f1: undefined, f2: 1.359_47 },
         { energy: 0.014_935, f1: undefined, f2: 0.902_011 },
         { energy: 0.015_176_5, f1: undefined, f2: 0.609_172 },
         { energy: 0.015_422, f1: undefined, f2: 0.439_681 },
         { energy: 0.015_671_4, f1: undefined, f2: 0.372_037 },
         { energy: 0.015_924_9, f1: undefined, f2: 0.326_005 },
         { energy: 0.016_182_5, f1: undefined, f2: 0.285_669 },
         { energy: 0.016_444_2, f1: undefined, f2: 0.247_205 },
         { energy: 0.016_710_2, f1: undefined, f2: 0.213_52 },
         { energy: 0.016_980_5, f1: undefined, f2: 0.196_522 },
         { energy: 0.017_255_1, f1: undefined, f2: 0.181_095 },
         { energy: 0.017_534_2, f1: undefined, f2: 0.168_385 },
         { energy: 0.017_817_8, f1: undefined, f2: 0.160_808 },
         { energy: 0.018_106, f1: undefined, f2: 0.153_573 },
         { energy: 0.018_398_9, f1: undefined, f2: 0.146_663 },
         { energy: 0.018_696_4, f1: undefined, f2: 0.140_063 },
         { energy: 0.018_998_8, f1: undefined, f2: 0.133_164 },
         { energy: 0.019_306_1, f1: undefined, f2: 0.126_575 },
         { energy: 0.019_618_4, f1: undefined, f2: 0.120_312 },
         { energy: 0.019_935_7, f1: undefined, f2: 0.114_36 },
         { energy: 0.020_258_2, f1: undefined, f2: 0.109_752 },
         { energy: 0.020_585_8, f1: undefined, f2: 0.111_01 },
         { energy: 0.020_918_8, f1: undefined, f2: 0.112_282 },
         { energy: 0.021_257_1, f1: undefined, f2: 0.113_569 },
         { energy: 0.021_600_9, f1: undefined, f2: 0.114_87 },
         { energy: 0.021_950_3, f1: undefined, f2: 0.116_186 },
         { energy: 0.022_305_3, f1: undefined, f2: 0.117_518 },
         { energy: 0.022_666_1, f1: undefined, f2: 0.118_864 },
         { energy: 0.023_032_7, f1: undefined, f2: 0.120_227 },
         { energy: 0.023_405_3, f1: undefined, f2: 0.122_751 },
         { energy: 0.023_783_8, f1: undefined, f2: 0.126_315 },
         { energy: 0.024_168_5, f1: undefined, f2: 0.129_984 },
         { energy: 0.024_559_4, f1: undefined, f2: 0.133_759 },
         { energy: 0.024_956_6, f1: undefined, f2: 0.137_643 },
         { energy: 0.025_360_3, f1: undefined, f2: 0.141_64 },
         { energy: 0.025_770_5, f1: undefined, f2: 0.145_495 },
         { energy: 0.026_187_3, f1: undefined, f2: 0.148_244 },
         { energy: 0.026_610_9, f1: undefined, f2: 0.151_045 },
         { energy: 0.027_041_3, f1: undefined, f2: 0.153_898 },
         { energy: 0.027_478_6, f1: undefined, f2: 0.156_806 },
         { energy: 0.027_923_1, f1: undefined, f2: 0.159_768 },
         { energy: 0.028_374_7, f1: undefined, f2: 0.162_787 },
         { energy: 0.028_833_7, f1: undefined, f2: 0.165_863 },
         { energy: 0.029_3, f1: 2.342_85, f2: 0.168_996 },
         { energy: 0.029_773_9, f1: 2.327_17, f2: 0.172_189 },
         { energy: 0.030_255_5, f1: 2.311_39, f2: 0.175_442 },
         { energy: 0.030_744_9, f1: 2.295_52, f2: 0.178_757 },
         { energy: 0.031_242_1, f1: 2.279_56, f2: 0.182_134 },
         { energy: 0.031_747_5, f1: 2.263_5, f2: 0.185_575 },
         { energy: 0.032_260_9, f1: 2.247_54, f2: 0.189_081 },
         { energy: 0.032_782_7, f1: 2.231_75, f2: 0.192_378 },
         { energy: 0.033_313, f1: 2.215_55, f2: 0.194_561 },
         { energy: 0.033_851_8, f1: 2.198_43, f2: 0.196_767 },
         { energy: 0.034_399_3, f1: 2.180_68, f2: 0.198_999 },
         { energy: 0.034_955_7, f1: 2.162_35, f2: 0.201_256 },
         { energy: 0.035_521_1, f1: 2.143_42, f2: 0.203_539 },
         { energy: 0.036_095_6, f1: 2.123_88, f2: 0.205_847 },
         { energy: 0.036_679_4, f1: 2.103_71, f2: 0.208_182 },
         { energy: 0.037_272_7, f1: 2.082_87, f2: 0.210_544 },
         { energy: 0.037_875_5, f1: 2.061_35, f2: 0.212_932 },
         { energy: 0.038_488_2, f1: 2.039_11, f2: 0.215_347 },
         { energy: 0.039_110_7, f1: 2.016_12, f2: 0.217_789 },
         { energy: 0.039_743_2, f1: 1.992_37, f2: 0.220_259 },
         { energy: 0.040_386_1, f1: 1.967_97, f2: 0.222_758 },
         { energy: 0.041_039_3, f1: 1.942_95, f2: 0.225_068 },
         { energy: 0.041_703_1, f1: 1.916_82, f2: 0.226_47 },
         { energy: 0.042_377_6, f1: 1.889_12, f2: 0.227_88 },
         { energy: 0.043_063, f1: 1.860_07, f2: 0.229_299 },
         { energy: 0.043_759_5, f1: 1.829_66, f2: 0.230_727 },
         { energy: 0.044_467_3, f1: 1.797_87, f2: 0.232_164 },
         { energy: 0.045_186_5, f1: 1.764_66, f2: 0.233_61 },
         { energy: 0.045_917_4, f1: 1.730_05, f2: 0.235_064 },
         { energy: 0.046_66, f1: 1.693_99, f2: 0.236_528 },
         { energy: 0.047_414_7, f1: 1.658_14, f2: 0.238_001 },
         { energy: 0.048_181_6, f1: 1.620_74, f2: 0.235_842 },
         { energy: 0.048_960_9, f1: 1.578_43, f2: 0.232_104 },
         { energy: 0.049_752_8, f1: 1.532_29, f2: 0.228_425 },
         { energy: 0.050_557_6, f1: 1.482_52, f2: 0.224_805 },
         { energy: 0.051_375_3, f1: 1.429_04, f2: 0.221_242 },
         { energy: 0.052_206_2, f1: 1.371_59, f2: 0.217_735 },
         { energy: 0.053_050_6, f1: 1.309_72, f2: 0.214_284 },
         { energy: 0.053_908_7, f1: 1.243_15, f2: 0.211_759 },
         { energy: 0.054_780_6, f1: 1.172_29, f2: 0.209_829 },
         { energy: 0.055_666_7, f1: 1.096_75, f2: 0.207_917 },
         { energy: 0.056_567, f1: 1.015_59, f2: 0.206_022 },
         { energy: 0.057_482, f1: 0.928_103, f2: 0.204_145 },
         { energy: 0.058_411_7, f1: 0.833_427, f2: 0.202_284 },
         { energy: 0.059_356_4, f1: 0.729_805, f2: 0.200_441 },
         { energy: 0.060_316_5, f1: 0.616_72, f2: 0.200_207 },
         { energy: 0.061_292_1, f1: 0.494_009, f2: 0.200_602 },
         { energy: 0.062_283_4, f1: 0.359_171, f2: 0.200_998 },
         { energy: 0.063_290_8, f1: 0.206_766, f2: 0.201_394 },
         { energy: 0.064_314_5, f1: 0.036_783_8, f2: 0.208_215 },
         { energy: 0.065_354_7, f1: -0.150_1, f2: 0.215_821 },
         { energy: 0.066_411_8, f1: -0.363_4, f2: 0.223_705 },
         { energy: 0.067_485_9, f1: -0.612_251, f2: 0.231_878 },
         { energy: 0.068_577_5, f1: -0.913_185, f2: 0.239_512 },
         { energy: 0.069_686_7, f1: -1.297_72, f2: 0.247_287 },
         { energy: 0.070_813_8, f1: -1.839_16, f2: 0.255_315 },
         { energy: 0.071_959_1, f1: -2.826_4, f2: 0.263_603 },
         { energy: 0.072_6, f1: -4.718_7, f2: 0.268_298 },
         { energy: 0.072_8, f1: -4.778_65, f2: 3.053_91 },
         { energy: 0.073_123, f1: -3.577_38, f2: 3.101_06 },
         { energy: 0.074_305_7, f1: -2.589_86, f2: 3.278_08 },
         { energy: 0.075_507_6, f1: -2.244_98, f2: 3.465_21 },
         { energy: 0.076_728_9, f1: -2.049_74, f2: 3.663_01 },
         { energy: 0.077_969_9, f1: -1.916_58, f2: 3.872_12 },
         { energy: 0.079_231, f1: -1.811_73, f2: 4.093_16 },
         { energy: 0.080_512_5, f1: -1.712_07, f2: 4.326_81 },
         { energy: 0.081_814_7, f1: -1.612_78, f2: 4.558_77 },
         { energy: 0.083_138, f1: -1.516_95, f2: 4.802_27 },
         { energy: 0.084_482_7, f1: -1.408_21, f2: 5.058_77 },
         { energy: 0.085_849_1, f1: -1.246_39, f2: 5.328_97 },
         { energy: 0.087_237_7, f1: -1.044_12, f2: 5.545_66 },
         { energy: 0.088_648_7, f1: -0.869_623, f2: 5.690_7 },
         { energy: 0.090_082_5, f1: -0.729_715, f2: 5.839_53 },
         { energy: 0.091_539_5, f1: -0.602_517, f2: 5.992_25 },
         { energy: 0.093_020_1, f1: -0.481_649, f2: 6.148_97 },
         { energy: 0.094_524_6, f1: -0.363_849, f2: 6.309_78 },
         { energy: 0.096_053_5, f1: -0.246_485, f2: 6.474_8 },
         { energy: 0.097_607_1, f1: -0.127_798, f2: 6.644_13 },
         { energy: 0.099_185_8, f1: -0.005_721_52, f2: 6.817_9 },
         { energy: 0.100_79, f1: 0.121_587, f2: 6.996_2 },
         { energy: 0.102_42, f1: 0.257_648, f2: 7.179_18 },
         { energy: 0.104_077, f1: 0.408_417, f2: 7.360_22 },
         { energy: 0.105_76, f1: 0.563_135, f2: 7.528_66 },
         { energy: 0.107_471, f1: 0.713_525, f2: 7.700_96 },
         { energy: 0.109_209, f1: 0.869_599, f2: 7.877_2 },
         { energy: 0.110_975, f1: 1.032_57, f2: 8.057_48 },
         { energy: 0.112_77, f1: 1.204_65, f2: 8.241_88 },
         { energy: 0.114_594, f1: 1.387_85, f2: 8.430_5 },
         { energy: 0.116_448, f1: 1.585_11, f2: 8.623_44 },
         { energy: 0.118_331, f1: 1.799_93, f2: 8.820_8 },
         { energy: 0.120_245, f1: 2.038_32, f2: 9.022_67 },
         { energy: 0.122_19, f1: 2.311_05, f2: 9.229_16 },
         { energy: 0.124_166, f1: 2.657_26, f2: 9.440_37 },
         { energy: 0.126_175, f1: 3.054_5, f2: 9.497_54 },
         { energy: 0.128_215, f1: 3.376_36, f2: 9.511_14 },
         { energy: 0.130_289, f1: 3.654_55, f2: 9.524_75 },
         { energy: 0.132_397, f1: 3.916_35, f2: 9.538_4 },
         { energy: 0.134_538, f1: 4.166_54, f2: 9.552_06 },
         { energy: 0.136_714, f1: 4.408_86, f2: 9.565_73 },
         { energy: 0.138_925, f1: 4.645_94, f2: 9.579_43 },
         { energy: 0.141_172, f1: 4.879_87, f2: 9.593_15 },
         { energy: 0.143_456, f1: 5.112_58, f2: 9.606_89 },
         { energy: 0.145_776, f1: 5.346_18, f2: 9.620_64 },
         { energy: 0.148_134, f1: 5.584_38, f2: 9.634_43 },
         { energy: 0.150_53, f1: 5.835_49, f2: 9.648_22 },
         { energy: 0.152_964, f1: 6.090_89, f2: 9.623_1 },
         { energy: 0.155_439, f1: 6.326_55, f2: 9.596_89 },
         { energy: 0.157_953, f1: 6.556_13, f2: 9.570_75 },
         { energy: 0.160_507, f1: 6.783_02, f2: 9.544_68 },
         { energy: 0.163_103, f1: 7.009_48, f2: 9.518_68 },
         { energy: 0.165_742, f1: 7.237_59, f2: 9.492_75 },
         { energy: 0.168_422, f1: 7.469_8, f2: 9.466_89 },
         { energy: 0.171_146, f1: 7.709_42, f2: 9.441_11 },
         { energy: 0.173_915, f1: 7.962_19, f2: 9.415_4 },
         { energy: 0.176_727, f1: 8.243_13, f2: 9.389_75 },
         { energy: 0.179_586, f1: 8.579_64, f2: 9.314_72 },
         { energy: 0.182_491, f1: 8.889_46, f2: 9.131_15 },
         { energy: 0.185_442, f1: 9.116_23, f2: 8.951_19 },
         { energy: 0.188_442, f1: 9.320_69, f2: 8.774_77 },
         { energy: 0.191_489, f1: 9.504_96, f2: 8.601_84 },
         { energy: 0.194_587, f1: 9.673_11, f2: 8.432_31 },
         { energy: 0.197_734, f1: 9.827_98, f2: 8.266_12 },
         { energy: 0.200_932, f1: 9.971_97, f2: 8.103_17 },
         { energy: 0.204_182, f1: 10.105_3, f2: 7.939_53 },
         { energy: 0.207_485, f1: 10.226_5, f2: 7.779_2 },
         { energy: 0.210_84, f1: 10.337_6, f2: 7.622_1 },
         { energy: 0.214_251, f1: 10.438_8, f2: 7.468_17 },
         { energy: 0.217_716, f1: 10.529_9, f2: 7.317_36 },
         { energy: 0.221_237, f1: 10.608_3, f2: 7.169_59 },
         { energy: 0.224_816, f1: 10.668, f2: 7.035_32 },
         { energy: 0.228_452, f1: 10.728_4, f2: 6.929_93 },
         { energy: 0.232_147, f1: 10.804_2, f2: 6.826_11 },
         { energy: 0.235_902, f1: 10.881_1, f2: 6.723_84 },
         { energy: 0.239_717, f1: 10.959_2, f2: 6.623_12 },
         { energy: 0.243_595, f1: 11.038, f2: 6.523_89 },
         { energy: 0.247_535, f1: 11.117_6, f2: 6.426_16 },
         { energy: 0.251_538, f1: 11.198_3, f2: 6.329_88 },
         { energy: 0.255_607, f1: 11.280_8, f2: 6.235_05 },
         { energy: 0.259_741, f1: 11.366_4, f2: 6.141_64 },
         { energy: 0.263_942, f1: 11.463, f2: 6.049_64 },
         { energy: 0.268_211, f1: 11.572_5, f2: 5.948_56 },
         { energy: 0.272_549, f1: 11.674_7, f2: 5.805_23 },
         { energy: 0.276_957, f1: 11.751_1, f2: 5.665_35 },
         { energy: 0.281_437, f1: 11.815_9, f2: 5.528_84 },
         { energy: 0.285_989, f1: 11.872_4, f2: 5.395_63 },
         { energy: 0.290_615, f1: 11.922_2, f2: 5.265_61 },
         { energy: 0.295_315, f1: 11.966_4, f2: 5.138_74 },
         { energy: 0.300_092, f1: 12.005_8, f2: 5.014_92 },
         { energy: 0.304_945, f1: 12.040_8, f2: 4.894_09 },
         { energy: 0.309_878, f1: 12.071_8, f2: 4.776_16 },
         { energy: 0.314_89, f1: 12.099_3, f2: 4.661_08 },
         { energy: 0.319_983, f1: 12.123_5, f2: 4.548_77 },
         { energy: 0.325_158, f1: 12.144_5, f2: 4.439_17 },
         { energy: 0.330_418, f1: 12.162_5, f2: 4.332_21 },
         { energy: 0.335_762, f1: 12.177_7, f2: 4.227_82 },
         { energy: 0.341_192, f1: 12.19, f2: 4.125_95 },
         { energy: 0.346_711, f1: 12.199_2, f2: 4.026_54 },
         { energy: 0.352_319, f1: 12.204_9, f2: 3.929_52 },
         { energy: 0.358_017, f1: 12.204_5, f2: 3.834_84 },
         { energy: 0.363_808, f1: 12.199_8, f2: 3.753_88 },
         { energy: 0.369_692, f1: 12.200_8, f2: 3.678_18 },
         { energy: 0.375_672, f1: 12.204_8, f2: 3.604 },
         { energy: 0.381_748, f1: 12.209_7, f2: 3.531_33 },
         { energy: 0.387_922, f1: 12.215_2, f2: 3.460_11 },
         { energy: 0.394_197, f1: 12.221, f2: 3.390_34 },
         { energy: 0.400_573, f1: 12.227, f2: 3.321_97 },
         { energy: 0.407_052, f1: 12.233_3, f2: 3.254_98 },
         { energy: 0.413_635, f1: 12.239_9, f2: 3.189_34 },
         { energy: 0.420_326, f1: 12.247, f2: 3.125_02 },
         { energy: 0.427_124, f1: 12.254_9, f2: 3.062_01 },
         { energy: 0.434_032, f1: 12.265_2, f2: 3.000_26 },
         { energy: 0.441_052, f1: 12.277_3, f2: 2.932_96 },
         { energy: 0.448_186, f1: 12.284_9, f2: 2.864_24 },
         { energy: 0.455_435, f1: 12.289_2, f2: 2.797_3 },
         { energy: 0.462_802, f1: 12.292, f2: 2.731_89 },
         { energy: 0.470_287, f1: 12.293_7, f2: 2.667_98 },
         { energy: 0.477_894, f1: 12.294_3, f2: 2.605_59 },
         { energy: 0.485_623, f1: 12.294_5, f2: 2.544_63 },
         { energy: 0.493_478, f1: 12.294_2, f2: 2.484_9 },
         { energy: 0.501_459, f1: 12.293_9, f2: 2.425_7 },
         { energy: 0.509_57, f1: 12.292_8, f2: 2.366_43 },
         { energy: 0.517_812, f1: 12.289_6, f2: 2.308_01 },
         { energy: 0.526_187, f1: 12.285_2, f2: 2.251_25 },
         { energy: 0.534_698, f1: 12.280_1, f2: 2.196_25 },
         { energy: 0.543_346, f1: 12.274_8, f2: 2.142_77 },
         { energy: 0.552_134, f1: 12.27, f2: 2.090_62 },
         { energy: 0.561_065, f1: 12.265_3, f2: 2.038_05 },
         { energy: 0.570_139, f1: 12.259_2, f2: 1.985_89 },
         { energy: 0.579_361, f1: 12.252_2, f2: 1.934_06 },
         { energy: 0.588_732, f1: 12.243_7, f2: 1.883_38 },
         { energy: 0.598_254, f1: 12.234_4, f2: 1.833_89 },
         { energy: 0.607_93, f1: 12.224_3, f2: 1.785_71 },
         { energy: 0.617_763, f1: 12.213_8, f2: 1.738_79 },
         { energy: 0.627_755, f1: 12.203_4, f2: 1.692_98 },
         { energy: 0.637_908, f1: 12.192_9, f2: 1.647_04 },
         { energy: 0.648_226, f1: 12.181_4, f2: 1.600_38 },
         { energy: 0.658_711, f1: 12.167_4, f2: 1.553_77 },
         { energy: 0.669_365, f1: 12.149_1, f2: 1.508_56 },
         { energy: 0.680_191, f1: 12.128_7, f2: 1.468_82 },
         { energy: 0.691_193, f1: 12.110_8, f2: 1.433_28 },
         { energy: 0.702_372, f1: 12.095_4, f2: 1.399_41 },
         { energy: 0.713_733, f1: 12.082, f2: 1.363_8 },
         { energy: 0.725_277, f1: 12.067_4, f2: 1.327_37 },
         { energy: 0.737_008, f1: 12.051_4, f2: 1.291_93 },
         { energy: 0.748_928, f1: 12.035, f2: 1.257_42 },
         { energy: 0.761_042, f1: 12.018_1, f2: 1.223_82 },
         { energy: 0.773_351, f1: 12.000_9, f2: 1.191 },
         { energy: 0.785_859, f1: 11.983_4, f2: 1.158_72 },
         { energy: 0.798_57, f1: 11.965_2, f2: 1.127_05 },
         { energy: 0.811_486, f1: 11.946_3, f2: 1.096_24 },
         { energy: 0.824_611, f1: 11.926_9, f2: 1.066_25 },
         { energy: 0.837_949, f1: 11.907, f2: 1.037_08 },
         { energy: 0.851_502, f1: 11.886_6, f2: 1.008_7 },
         { energy: 0.865_274, f1: 11.865_6, f2: 0.981_035 },
         { energy: 0.879_269, f1: 11.844_1, f2: 0.954_065 },
         { energy: 0.893_491, f1: 11.822, f2: 0.927_842 },
         { energy: 0.907_943, f1: 11.799_2, f2: 0.902_346 },
         { energy: 0.922_628, f1: 11.775_9, f2: 0.877_557 },
         { energy: 0.937_551, f1: 11.751_9, f2: 0.853_321 },
         { energy: 0.952_715, f1: 11.727, f2: 0.829_761 },
         { energy: 0.968_124, f1: 11.701_3, f2: 0.806_859 },
         { energy: 0.983_783, f1: 11.674_7, f2: 0.784_555 },
         { energy: 0.999_695, f1: 11.647_2, f2: 0.762_967 },
         { energy: 1.015_86, f1: 11.618_4, f2: 0.742_081 },
         { energy: 1.032_29, f1: 11.588_8, f2: 0.722_661 },
         { energy: 1.048_99, f1: 11.559_1, f2: 0.703_173 },
         { energy: 1.065_96, f1: 11.527_8, f2: 0.683_588 },
         { energy: 1.083_2, f1: 11.494_7, f2: 0.664_537 },
         { energy: 1.100_72, f1: 11.46, f2: 0.646_018 },
         { energy: 1.118_52, f1: 11.423_4, f2: 0.628_015 },
         { energy: 1.136_61, f1: 11.384_9, f2: 0.610_519 },
         { energy: 1.155, f1: 11.344, f2: 0.593_506 },
         { energy: 1.173_68, f1: 11.300_7, f2: 0.576_965 },
         { energy: 1.192_66, f1: 11.254_4, f2: 0.560_888 },
         { energy: 1.211_95, f1: 11.204_9, f2: 0.545_258 },
         { energy: 1.231_55, f1: 11.151_6, f2: 0.530_064 },
         { energy: 1.251_47, f1: 11.093_8, f2: 0.515_441 },
         { energy: 1.271_72, f1: 11.031, f2: 0.501_38 },
         { energy: 1.292_29, f1: 10.962_2, f2: 0.487_892 },
         { energy: 1.313_19, f1: 10.886_5, f2: 0.474_763 },
         { energy: 1.334_43, f1: 10.802_1, f2: 0.461_987 },
         { energy: 1.356_01, f1: 10.706_9, f2: 0.449_555 },
         { energy: 1.377_94, f1: 10.598, f2: 0.437_459 },
         { energy: 1.400_23, f1: 10.471_3, f2: 0.425_689 },
         { energy: 1.422_88, f1: 10.320_6, f2: 0.414_239 },
         { energy: 1.445_89, f1: 10.136_1, f2: 0.403_093 },
         { energy: 1.469_28, f1: 9.900_68, f2: 0.392_1 },
         { energy: 1.493_04, f1: 9.580_44, f2: 0.381_187 },
         { energy: 1.517_19, f1: 9.092_16, f2: 0.369_68 },
         { energy: 1.541_73, f1: 8.115_37, f2: 0.358_399 },
         { energy: 1.559_5, f1: 1.893_96, f2: 0.350_553 },
         { energy: 1.559_7, f1: 1.895_89, f2: 4.166_29 },
         { energy: 1.566_67, f1: 7.104_41, f2: 4.141_05 },
         { energy: 1.592_01, f1: 9.035_72, f2: 4.051_44 },
         { energy: 1.617_76, f1: 9.803_37, f2: 3.963_79 },
         { energy: 1.643_92, f1: 10.299_5, f2: 3.878_09 },
         { energy: 1.670_51, f1: 10.669, f2: 3.794_2 },
         { energy: 1.697_53, f1: 10.964_2, f2: 3.712_13 },
         { energy: 1.724_99, f1: 11.212_1, f2: 3.631_82 },
         { energy: 1.752_89, f1: 11.425_4, f2: 3.548_96 },
         { energy: 1.781_24, f1: 11.608_6, f2: 3.466_53 },
         { energy: 1.810_05, f1: 11.769_5, f2: 3.384_94 },
         { energy: 1.839_32, f1: 11.911_7, f2: 3.305_27 },
         { energy: 1.869_07, f1: 12.039_1, f2: 3.227_47 },
         { energy: 1.899_3, f1: 12.154, f2: 3.151_48 },
         { energy: 1.930_02, f1: 12.258_3, f2: 3.077_31 },
         { energy: 1.961_24, f1: 12.353_6, f2: 3.004_89 },
         { energy: 1.992_96, f1: 12.440_8, f2: 2.934_17 },
         { energy: 2.025_2, f1: 12.522_6, f2: 2.866_96 },
         { energy: 2.057_95, f1: 12.600_1, f2: 2.796_99 },
         { energy: 2.091_24, f1: 12.669_5, f2: 2.728_03 },
         { energy: 2.125_06, f1: 12.733_4, f2: 2.660_35 },
         { energy: 2.159_43, f1: 12.792_3, f2: 2.594_05 },
         { energy: 2.194_36, f1: 12.846_7, f2: 2.528_81 },
         { energy: 2.229_85, f1: 12.896_9, f2: 2.464_98 },
         { energy: 2.265_92, f1: 12.943_3, f2: 2.402_35 },
         { energy: 2.302_57, f1: 12.986_1, f2: 2.341_01 },
         { energy: 2.339_81, f1: 13.025_7, f2: 2.280_95 },
         { energy: 2.377_66, f1: 13.062_2, f2: 2.222_04 },
         { energy: 2.416_11, f1: 13.096, f2: 2.164_45 },
         { energy: 2.455_19, f1: 13.127_2, f2: 2.108_1 },
         { energy: 2.494_9, f1: 13.156, f2: 2.052_84 },
         { energy: 2.535_26, f1: 13.182_5, f2: 1.998_85 },
         { energy: 2.576_26, f1: 13.206_8, f2: 1.946_06 },
         { energy: 2.617_93, f1: 13.229_2, f2: 1.894_47 },
         { energy: 2.660_27, f1: 13.249_8, f2: 1.844 },
         { energy: 2.703_3, f1: 13.268_7, f2: 1.794_74 },
         { energy: 2.747_03, f1: 13.285_9, f2: 1.746_51 },
         { energy: 2.791_46, f1: 13.301_6, f2: 1.699_45 },
         { energy: 2.836_61, f1: 13.315_9, f2: 1.653_5 },
         { energy: 2.882_49, f1: 13.328_8, f2: 1.608_62 },
         { energy: 2.929_11, f1: 13.340_5, f2: 1.564_81 },
         { energy: 2.976_48, f1: 13.351, f2: 1.522_04 },
         { energy: 3.024_63, f1: 13.360_4, f2: 1.480_33 },
         { energy: 3.073_55, f1: 13.368_8, f2: 1.439_61 },
         { energy: 3.123_26, f1: 13.376_2, f2: 1.399_89 },
         { energy: 3.173_78, f1: 13.382_7, f2: 1.361_16 },
         { energy: 3.225_11, f1: 13.388_3, f2: 1.323_39 },
         { energy: 3.277_27, f1: 13.393_2, f2: 1.286_57 },
         { energy: 3.330_28, f1: 13.397_3, f2: 1.250_64 },
         { energy: 3.384_15, f1: 13.400_7, f2: 1.215_64 },
         { energy: 3.438_88, f1: 13.403_4, f2: 1.181_54 },
         { energy: 3.494_5, f1: 13.405_5, f2: 1.148_31 },
         { energy: 3.551_02, f1: 13.407, f2: 1.115_91 },
         { energy: 3.608_46, f1: 13.408, f2: 1.084_36 },
         { energy: 3.666_82, f1: 13.408_5, f2: 1.053_63 },
         { energy: 3.726_13, f1: 13.408_5, f2: 1.023_69 },
         { energy: 3.786_4, f1: 13.408_1, f2: 0.994_542 },
         { energy: 3.847_64, f1: 13.407_2, f2: 0.966_167 },
         { energy: 3.909_87, f1: 13.406, f2: 0.938_535 },
         { energy: 3.973_11, f1: 13.404_4, f2: 0.911_645 },
         { energy: 4.037_38, f1: 13.402_5, f2: 0.885_448 },
         { energy: 4.102_68, f1: 13.400_3, f2: 0.859_966 },
         { energy: 4.169_03, f1: 13.397_8, f2: 0.835_163 },
         { energy: 4.236_46, f1: 13.395, f2: 0.811_033 },
         { energy: 4.304_98, f1: 13.392, f2: 0.787_559 },
         { energy: 4.374_62, f1: 13.388_8, f2: 0.764_708 },
         { energy: 4.445_37, f1: 13.385_3, f2: 0.742_491 },
         { energy: 4.517_27, f1: 13.381_7, f2: 0.720_878 },
         { energy: 4.590_33, f1: 13.377_9, f2: 0.699_839 },
         { energy: 4.664_58, f1: 13.373_9, f2: 0.679_399 },
         { energy: 4.740_03, f1: 13.369_8, f2: 0.659_516 },
         { energy: 4.816_69, f1: 13.365_6, f2: 0.640_176 },
         { energy: 4.894_6, f1: 13.361_2, f2: 0.621_389 },
         { energy: 4.973_77, f1: 13.356_8, f2: 0.603_106 },
         { energy: 5.054_21, f1: 13.352_2, f2: 0.585_342 },
         { energy: 5.135_96, f1: 13.347_6, f2: 0.568_08 },
         { energy: 5.219_03, f1: 13.342_9, f2: 0.551_279 },
         { energy: 5.303_44, f1: 13.338_1, f2: 0.534_968 },
         { energy: 5.389_22, f1: 13.333_2, f2: 0.519_116 },
         { energy: 5.476_39, f1: 13.328_4, f2: 0.503_715 },
         { energy: 5.564_97, f1: 13.323_5, f2: 0.488_726 },
         { energy: 5.654_98, f1: 13.318_5, f2: 0.474_187 },
         { energy: 5.746_44, f1: 13.313_5, f2: 0.460_062 },
         { energy: 5.839_39, f1: 13.308_6, f2: 0.446_336 },
         { energy: 5.933_83, f1: 13.303_6, f2: 0.433_003 },
         { energy: 6.029_81, f1: 13.298_6, f2: 0.420_026 },
         { energy: 6.127_33, f1: 13.293_6, f2: 0.407_459 },
         { energy: 6.226_44, f1: 13.288_6, f2: 0.395_224 },
         { energy: 6.327_15, f1: 13.283_6, f2: 0.383_348 },
         { energy: 6.429_48, f1: 13.278_6, f2: 0.371_815 },
         { energy: 6.533_48, f1: 13.273_7, f2: 0.360_616 },
         { energy: 6.639_15, f1: 13.268_7, f2: 0.349_739 },
         { energy: 6.746_54, f1: 13.263_8, f2: 0.339_182 },
         { energy: 6.855_65, f1: 13.259, f2: 0.328_927 },
         { energy: 6.966_54, f1: 13.254_1, f2: 0.318_973 },
         { energy: 7.079_22, f1: 13.249_3, f2: 0.309_309 },
         { energy: 7.193_72, f1: 13.244_6, f2: 0.299_926 },
         { energy: 7.310_07, f1: 13.239_8, f2: 0.290_817 },
         { energy: 7.428_31, f1: 13.235_2, f2: 0.281_974 },
         { energy: 7.548_45, f1: 13.230_5, f2: 0.273_391 },
         { energy: 7.670_54, f1: 13.225_9, f2: 0.265_058 },
         { energy: 7.794_61, f1: 13.221_4, f2: 0.256_972 },
         { energy: 7.920_68, f1: 13.216_9, f2: 0.249_121 },
         { energy: 8.048_79, f1: 13.212_4, f2: 0.241_506 },
         { energy: 8.178_98, f1: 13.208_1, f2: 0.234_114 },
         { energy: 8.311_26, f1: 13.203_7, f2: 0.226_938 },
         { energy: 8.445_69, f1: 13.199_4, f2: 0.219_978 },
         { energy: 8.582_29, f1: 13.195_2, f2: 0.213_218 },
         { energy: 8.721_11, f1: 13.191, f2: 0.206_663 },
         { energy: 8.862_16, f1: 13.186_9, f2: 0.200_304 },
         { energy: 9.005_5, f1: 13.182_9, f2: 0.194_131 },
         { energy: 9.151_16, f1: 13.178_9, f2: 0.188_14 },
         { energy: 9.299_17, f1: 13.174_9, f2: 0.182_331 },
         { energy: 9.449_58, f1: 13.171_1, f2: 0.176_693 },
         { energy: 9.602_42, f1: 13.167_2, f2: 0.171_229 },
         { energy: 9.757_73, f1: 13.163_5, f2: 0.165_921 },
         { energy: 9.915_55, f1: 13.159_8, f2: 0.160_78 },
         { energy: 10.075_9, f1: 13.156_1, f2: 0.155_788 },
         { energy: 10.238_9, f1: 13.152_6, f2: 0.150_945 },
         { energy: 10.404_5, f1: 13.149, f2: 0.146_248 },
         { energy: 10.572_8, f1: 13.145_6, f2: 0.141_693 },
         { energy: 10.743_8, f1: 13.142_2, f2: 0.137_274 },
         { energy: 10.917_6, f1: 13.138_8, f2: 0.132_988 },
         { energy: 11.094_2, f1: 13.135_5, f2: 0.128_831 },
         { energy: 11.273_6, f1: 13.132_3, f2: 0.124_8 },
         { energy: 11.455_9, f1: 13.129_1, f2: 0.120_89 },
         { energy: 11.641_2, f1: 13.126, f2: 0.117_099 },
         { energy: 11.829_5, f1: 13.122_9, f2: 0.113_422 },
         { energy: 12.020_8, f1: 13.119_9, f2: 0.109_856 },
         { energy: 12.215_3, f1: 13.117, f2: 0.106_398 },
         { energy: 12.412_8, f1: 13.114_1, f2: 0.103_045 },
         { energy: 12.613_6, f1: 13.111_2, f2: 0.099_794_1 },
         { energy: 12.817_6, f1: 13.108_4, f2: 0.096_641_6 },
         { energy: 13.025, f1: 13.105_7, f2: 0.093_584_8 },
         { energy: 13.235_6, f1: 13.103, f2: 0.090_620_9 },
         { energy: 13.449_7, f1: 13.100_4, f2: 0.087_747_3 },
         { energy: 13.667_2, f1: 13.097_8, f2: 0.084_961_1 },
         { energy: 13.888_3, f1: 13.095_3, f2: 0.082_259_8 },
         { energy: 14.112_9, f1: 13.092_8, f2: 0.079_640_8 },
         { energy: 14.341_2, f1: 13.090_3, f2: 0.077_101_8 },
         { energy: 14.573_1, f1: 13.088, f2: 0.074_640_2 },
         { energy: 14.808_9, f1: 13.085_6, f2: 0.072_253_9 },
         { energy: 15.048_4, f1: 13.083_3, f2: 0.069_940_5 },
         { energy: 15.291_8, f1: 13.081_1, f2: 0.067_697_9 },
         { energy: 15.539_1, f1: 13.078_9, f2: 0.065_524 },
         { energy: 15.790_4, f1: 13.076_8, f2: 0.063_416_5 },
         { energy: 16.045_8, f1: 13.074_6, f2: 0.061_373_7 },
         { energy: 16.305_4, f1: 13.072_6, f2: 0.059_393_5 },
         { energy: 16.569_1, f1: 13.070_6, f2: 0.057_474_1 },
         { energy: 16.837_1, f1: 13.068_6, f2: 0.055_613_6 },
         { energy: 17.109_4, f1: 13.066_7, f2: 0.053_810_2 },
         { energy: 17.386_1, f1: 13.064_8, f2: 0.052_062_3 },
         { energy: 17.667_4, f1: 13.062_9, f2: 0.050_368_1 },
         { energy: 17.953_1, f1: 13.061_1, f2: 0.048_726 },
         { energy: 18.243_5, f1: 13.059_3, f2: 0.047_134_5 },
         { energy: 18.538_6, f1: 13.057_6, f2: 0.045_592 },
         { energy: 18.838_4, f1: 13.055_9, f2: 0.044_097 },
         { energy: 19.143_1, f1: 13.054_2, f2: 0.042_648_2 },
         { energy: 19.452_7, f1: 13.052_6, f2: 0.041_244 },
         { energy: 19.767_4, f1: 13.051, f2: 0.039_883_1 },
         { energy: 20.087_1, f1: 13.049_4, f2: 0.038_553_3 },
         { energy: 20.412, f1: 13.047_9, f2: 0.037_277_1 },
         { energy: 20.742_1, f1: 13.046_4, f2: 0.036_042_3 },
         { energy: 21.077_6, f1: 13.044_9, f2: 0.034_847_5 },
         { energy: 21.418_5, f1: 13.043_5, f2: 0.033_691_5 },
         { energy: 21.765, f1: 13.042_1, f2: 0.032_573_1 },
         { energy: 22.117, f1: 13.040_7, f2: 0.031_490_9 },
         { energy: 22.474_7, f1: 13.039_4, f2: 0.030_444 },
         { energy: 22.838_2, f1: 13.038_1, f2: 0.029_431_1 },
         { energy: 23.207_6, f1: 13.036_8, f2: 0.028_451_1 },
         { energy: 23.583, f1: 13.035_6, f2: 0.027_503 },
         { energy: 23.964_4, f1: 13.034_3, f2: 0.026_585_8 },
         { energy: 24.352, f1: 13.033_1, f2: 0.025_698_5 },
         { energy: 24.745_9, f1: 13.032, f2: 0.024_840_1 },
         { energy: 25.146_2, f1: 13.030_8, f2: 0.024_009_7 },
         { energy: 25.552_9, f1: 13.029_7, f2: 0.023_206_4 },
         { energy: 25.966_2, f1: 13.028_7, f2: 0.022_429_3 },
         { energy: 26.386_1, f1: 13.027_6, f2: 0.021_677_6 },
         { energy: 26.812_9, f1: 13.026_6, f2: 0.020_950_5 },
         { energy: 27.246_6, f1: 13.025_6, f2: 0.020_247_1 },
         { energy: 27.687_3, f1: 13.024_6, f2: 0.019_566_8 },
         { energy: 28.135_1, f1: 13.023_6, f2: 0.018_908_7 },
         { energy: 28.590_2, f1: 13.022_7, f2: 0.018_272_2 },
         { energy: 29.052_6, f1: 13.021_8, f2: 0.017_656_5 },
         { energy: 29.522_5, f1: 13.020_9, f2: 0.017_061_1 },
         { energy: 30.0, f1: 13.019_8, f2: 0.016_485_2 },
    ],
    neutron_scattering: {
        b_c: { value: 3.449, uncertainty: 0.005},
        b_p: { value: 3.67, uncertainty: 0.02},
        b_m: { value: 3.15, uncertainty: 0.02},
        bound_coherent_scattering_xs: { value: 1.495, uncertainty: 0.004},
        bound_incoherent_scattering_xs: { value: 0.008_2, uncertainty: 0.000_6},
        total_bound_scattering_xs: { value: 1.503, uncertainty: 0.004},
        absorption_xs: { value: 0.231, uncertainty: 0.003},
    },
    isotopes: [
        { 
            mass_number: 21,
            mass: { value: 21.028_04, uncertainty: 0.000_32},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 22,
            mass: { value: 22.019_52, uncertainty: 0.000_10},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 23,
            mass: { value: 23.007_265, uncertainty: 0.000_027},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 24,
            mass: { value: 23.999_941, uncertainty: 0.000_004},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 25,
            mass: { value: 24.990_428_6, uncertainty: 0.000_000_7},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 26,
            mass: { value: 25.986_891_66, uncertainty: 0.000_000_21},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 27,
            mass: { value: 26.981_538_44, uncertainty: 0.000_000_14},
            abundance: { value: 100.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 28,
            mass: { value: 27.981_910_18, uncertainty: 0.000_000_15},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 29,
            mass: { value: 28.980_444_8, uncertainty: 0.000_001_3},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 30,
            mass: { value: 29.982_96, uncertainty: 0.000_15},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 31,
            mass: { value: 30.983_946, uncertainty: 0.000_022},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 32,
            mass: { value: 31.988_12, uncertainty: 0.000_90},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 33,
            mass: { value: 32.990_87, uncertainty: 0.000_70},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 34,
            mass: { value: 33.996_93, uncertainty: 0.000_10},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 35,
            mass: { value: 34.999_94, uncertainty: 0.000_15},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 36,
            mass: { value: 36.006_35, uncertainty: 0.000_29},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 37,
            mass: { value: 37.010_31, uncertainty: 0.000_58},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 38,
            mass: { value: 38.016_9, uncertainty: 0.006_0},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 39,
            mass: { value: 39.021_9, uncertainty: 0.006_4},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Al};
