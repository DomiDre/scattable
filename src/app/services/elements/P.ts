const P = {
    atomic_number: 15,
    name: 'Phosphorus',
    symbol: 'P',
    mass: 30.973_761,
    common_ions: [-3, 3, 5],
    uncommon_ions: [-2, -1, 1, 2, 4],
    xray_scattering: [
         { energy: 0.01, f1: undefined, f2: 8.477_38 },
         { energy: 0.010_161_7, f1: undefined, f2: 8.270_92 },
         { energy: 0.010_326_1, f1: undefined, f2: 8.069_49 },
         { energy: 0.010_493_1, f1: undefined, f2: 7.872_97 },
         { energy: 0.010_662_8, f1: undefined, f2: 7.681_23 },
         { energy: 0.010_835_3, f1: undefined, f2: 7.494_16 },
         { energy: 0.011_010_6, f1: undefined, f2: 7.311_65 },
         { energy: 0.011_188_6, f1: undefined, f2: 7.133_59 },
         { energy: 0.011_369_6, f1: undefined, f2: 6.959_85 },
         { energy: 0.011_553_5, f1: undefined, f2: 6.790_35 },
         { energy: 0.011_740_4, f1: undefined, f2: 6.624_98 },
         { energy: 0.011_930_3, f1: undefined, f2: 6.463_64 },
         { energy: 0.012_123_2, f1: undefined, f2: 6.306_23 },
         { energy: 0.012_319_3, f1: undefined, f2: 6.142_79 },
         { energy: 0.012_518_6, f1: undefined, f2: 5.969_38 },
         { energy: 0.012_721, f1: undefined, f2: 5.800_87 },
         { energy: 0.012_926_8, f1: undefined, f2: 5.637_11 },
         { energy: 0.013_135_9, f1: undefined, f2: 5.477_97 },
         { energy: 0.013_348_3, f1: undefined, f2: 5.320_59 },
         { energy: 0.013_564_2, f1: undefined, f2: 5.102_32 },
         { energy: 0.013_783_6, f1: undefined, f2: 4.893 },
         { energy: 0.014_006_6, f1: undefined, f2: 4.692_27 },
         { energy: 0.014_233_1, f1: undefined, f2: 4.499_77 },
         { energy: 0.014_463_3, f1: undefined, f2: 4.315_17 },
         { energy: 0.014_697_3, f1: undefined, f2: 4.138_15 },
         { energy: 0.014_935, f1: undefined, f2: 3.968_38 },
         { energy: 0.015_176_5, f1: undefined, f2: 3.805_58 },
         { energy: 0.015_422, f1: undefined, f2: 3.649_46 },
         { energy: 0.015_671_4, f1: undefined, f2: 3.494_98 },
         { energy: 0.015_924_9, f1: undefined, f2: 3.335_59 },
         { energy: 0.016_182_5, f1: undefined, f2: 3.183_47 },
         { energy: 0.016_444_2, f1: undefined, f2: 3.038_28 },
         { energy: 0.016_710_2, f1: undefined, f2: 2.894_19 },
         { energy: 0.016_980_5, f1: undefined, f2: 2.693_18 },
         { energy: 0.017_255_1, f1: undefined, f2: 2.506_14 },
         { energy: 0.017_534_2, f1: undefined, f2: 2.319_86 },
         { energy: 0.017_817_8, f1: undefined, f2: 2.100_76 },
         { energy: 0.018_106, f1: undefined, f2: 1.902_37 },
         { energy: 0.018_398_9, f1: undefined, f2: 1.700_08 },
         { energy: 0.018_696_4, f1: undefined, f2: 1.515_72 },
         { energy: 0.018_998_8, f1: undefined, f2: 1.371_84 },
         { energy: 0.019_306_1, f1: undefined, f2: 1.243_2 },
         { energy: 0.019_618_4, f1: undefined, f2: 1.124_94 },
         { energy: 0.019_935_7, f1: undefined, f2: 1.015_74 },
         { energy: 0.020_258_2, f1: undefined, f2: 0.914_288 },
         { energy: 0.020_585_8, f1: undefined, f2: 0.816_119 },
         { energy: 0.020_918_8, f1: undefined, f2: 0.731_59 },
         { energy: 0.021_257_1, f1: undefined, f2: 0.661_629 },
         { energy: 0.021_600_9, f1: undefined, f2: 0.597_179 },
         { energy: 0.021_950_3, f1: undefined, f2: 0.537_266 },
         { energy: 0.022_305_3, f1: undefined, f2: 0.483_365 },
         { energy: 0.022_666_1, f1: undefined, f2: 0.438_116 },
         { energy: 0.023_032_7, f1: undefined, f2: 0.397_524 },
         { energy: 0.023_405_3, f1: undefined, f2: 0.362_656 },
         { energy: 0.023_783_8, f1: undefined, f2: 0.334_441 },
         { energy: 0.024_168_5, f1: undefined, f2: 0.308_421 },
         { energy: 0.024_559_4, f1: undefined, f2: 0.282_182 },
         { energy: 0.024_956_6, f1: undefined, f2: 0.257_009 },
         { energy: 0.025_360_3, f1: undefined, f2: 0.236_594 },
         { energy: 0.025_770_5, f1: undefined, f2: 0.222_772 },
         { energy: 0.026_187_3, f1: undefined, f2: 0.209_917 },
         { energy: 0.026_610_9, f1: undefined, f2: 0.206_46 },
         { energy: 0.027_041_3, f1: undefined, f2: 0.203_059 },
         { energy: 0.027_478_6, f1: undefined, f2: 0.204_255 },
         { energy: 0.027_923_1, f1: undefined, f2: 0.209_753 },
         { energy: 0.028_374_7, f1: undefined, f2: 0.215_399 },
         { energy: 0.028_833_7, f1: undefined, f2: 0.221_196 },
         { energy: 0.029_3, f1: 4.978_05, f2: 0.229_708 },
         { energy: 0.029_773_9, f1: 4.942_45, f2: 0.238_708 },
         { energy: 0.030_255_5, f1: 4.909_15, f2: 0.248_061 },
         { energy: 0.030_744_9, f1: 4.877_53, f2: 0.258_073 },
         { energy: 0.031_242_1, f1: 4.848_09, f2: 0.268_995 },
         { energy: 0.031_747_5, f1: 4.820_71, f2: 0.280_38 },
         { energy: 0.032_260_9, f1: 4.795_31, f2: 0.292_247 },
         { energy: 0.032_782_7, f1: 4.772_33, f2: 0.304_615 },
         { energy: 0.033_313, f1: 4.752_85, f2: 0.316_307 },
         { energy: 0.033_851_8, f1: 4.733_45, f2: 0.325_368 },
         { energy: 0.034_399_3, f1: 4.714_16, f2: 0.334_688 },
         { energy: 0.034_955_7, f1: 4.695_75, f2: 0.343_738 },
         { energy: 0.035_521_1, f1: 4.677_46, f2: 0.352_639 },
         { energy: 0.036_095_6, f1: 4.659_58, f2: 0.361_769 },
         { energy: 0.036_679_4, f1: 4.642_18, f2: 0.371_136 },
         { energy: 0.037_272_7, f1: 4.625_28, f2: 0.380_746 },
         { energy: 0.037_875_5, f1: 4.608_89, f2: 0.390_605 },
         { energy: 0.038_488_2, f1: 4.593_01, f2: 0.400_718 },
         { energy: 0.039_110_7, f1: 4.577_63, f2: 0.411_094 },
         { energy: 0.039_743_2, f1: 4.562_76, f2: 0.421_739 },
         { energy: 0.040_386_1, f1: 4.548_41, f2: 0.432_658 },
         { energy: 0.041_039_3, f1: 4.534_59, f2: 0.443_861 },
         { energy: 0.041_703_1, f1: 4.521_33, f2: 0.455_354 },
         { energy: 0.042_377_6, f1: 4.508_72, f2: 0.467_145 },
         { energy: 0.043_063, f1: 4.496_96, f2: 0.479_24 },
         { energy: 0.043_759_5, f1: 4.486_18, f2: 0.490_69 },
         { energy: 0.044_467_3, f1: 4.475_17, f2: 0.501_872 },
         { energy: 0.045_186_5, f1: 4.464_31, f2: 0.513_308 },
         { energy: 0.045_917_4, f1: 4.453_72, f2: 0.525_005 },
         { energy: 0.046_66, f1: 4.443_48, f2: 0.536_968 },
         { energy: 0.047_414_7, f1: 4.433_66, f2: 0.549_204 },
         { energy: 0.048_181_6, f1: 4.424_33, f2: 0.561_719 },
         { energy: 0.048_960_9, f1: 4.415_57, f2: 0.574_519 },
         { energy: 0.049_752_8, f1: 4.407_51, f2: 0.587_61 },
         { energy: 0.050_557_6, f1: 4.400_35, f2: 0.601 },
         { energy: 0.051_375_3, f1: 4.394_47, f2: 0.614_695 },
         { energy: 0.052_206_2, f1: 4.390_76, f2: 0.628_703 },
         { energy: 0.053_050_6, f1: 4.392_23, f2: 0.639_288 },
         { energy: 0.053_908_7, f1: 4.389_77, f2: 0.644_138 },
         { energy: 0.054_780_6, f1: 4.384_94, f2: 0.649_026 },
         { energy: 0.055_666_7, f1: 4.378_81, f2: 0.653_95 },
         { energy: 0.056_567, f1: 4.371_8, f2: 0.658_911 },
         { energy: 0.057_482, f1: 4.364_11, f2: 0.663_911 },
         { energy: 0.058_411_7, f1: 4.355_88, f2: 0.668_948 },
         { energy: 0.059_356_4, f1: 4.347_26, f2: 0.674_023 },
         { energy: 0.060_316_5, f1: 4.338_42, f2: 0.679_137 },
         { energy: 0.061_292_1, f1: 4.329_79, f2: 0.684_29 },
         { energy: 0.062_283_4, f1: 4.322_75, f2: 0.688_005 },
         { energy: 0.063_290_8, f1: 4.313_22, f2: 0.688_515 },
         { energy: 0.064_314_5, f1: 4.301_56, f2: 0.689_024 },
         { energy: 0.065_354_7, f1: 4.288_32, f2: 0.689_535 },
         { energy: 0.066_411_8, f1: 4.273_73, f2: 0.690_045 },
         { energy: 0.067_485_9, f1: 4.257_86, f2: 0.690_556 },
         { energy: 0.068_577_5, f1: 4.240_72, f2: 0.691_067 },
         { energy: 0.069_686_7, f1: 4.222_31, f2: 0.691_579 },
         { energy: 0.070_813_8, f1: 4.202_63, f2: 0.692_091 },
         { energy: 0.071_959_1, f1: 4.181_64, f2: 0.692_603 },
         { energy: 0.073_123, f1: 4.159_33, f2: 0.693_116 },
         { energy: 0.074_305_7, f1: 4.135_68, f2: 0.693_629 },
         { energy: 0.075_507_6, f1: 4.110_73, f2: 0.694_143 },
         { energy: 0.076_728_9, f1: 4.084_72, f2: 0.694_657 },
         { energy: 0.077_969_9, f1: 4.057_72, f2: 0.693_818 },
         { energy: 0.079_231, f1: 4.027_76, f2: 0.692_06 },
         { energy: 0.080_512_5, f1: 3.995_27, f2: 0.690_306 },
         { energy: 0.081_814_7, f1: 3.960_34, f2: 0.688_558 },
         { energy: 0.083_138, f1: 3.922_93, f2: 0.686_813 },
         { energy: 0.084_482_7, f1: 3.882_92, f2: 0.685_073 },
         { energy: 0.085_849_1, f1: 3.840_18, f2: 0.683_337 },
         { energy: 0.087_237_7, f1: 3.794_57, f2: 0.681_605 },
         { energy: 0.088_648_7, f1: 3.745_9, f2: 0.679_879 },
         { energy: 0.090_082_5, f1: 3.693_99, f2: 0.678_156 },
         { energy: 0.091_539_5, f1: 3.638_67, f2: 0.676_438 },
         { energy: 0.093_020_1, f1: 3.579_76, f2: 0.674_723 },
         { energy: 0.094_524_6, f1: 3.517_45, f2: 0.673_014 },
         { energy: 0.096_053_5, f1: 3.453_38, f2: 0.669_023 },
         { energy: 0.097_607_1, f1: 3.381_16, f2: 0.661_918 },
         { energy: 0.099_185_8, f1: 3.301_17, f2: 0.654_888 },
         { energy: 0.100_79, f1: 3.213_87, f2: 0.647_932 },
         { energy: 0.102_42, f1: 3.118_7, f2: 0.641_051 },
         { energy: 0.104_077, f1: 3.014_92, f2: 0.634_243 },
         { energy: 0.105_76, f1: 2.901_59, f2: 0.627_507 },
         { energy: 0.107_471, f1: 2.777_6, f2: 0.620_842 },
         { energy: 0.109_209, f1: 2.641_62, f2: 0.614_248 },
         { energy: 0.110_975, f1: 2.492_49, f2: 0.607_725 },
         { energy: 0.112_77, f1: 2.327_08, f2: 0.598_33 },
         { energy: 0.114_594, f1: 2.140_49, f2: 0.588_439 },
         { energy: 0.116_448, f1: 1.929_32, f2: 0.578_712 },
         { energy: 0.118_331, f1: 1.688_84, f2: 0.569_145 },
         { energy: 0.120_245, f1: 1.411_89, f2: 0.559_736 },
         { energy: 0.122_19, f1: 1.088_14, f2: 0.550_483 },
         { energy: 0.124_166, f1: 0.701_791, f2: 0.541_383 },
         { energy: 0.126_175, f1: 0.227_104, f2: 0.532_433 },
         { energy: 0.128_215, f1: -0.382_396, f2: 0.523_631 },
         { energy: 0.130_289, f1: -1.225_12, f2: 0.514_975 },
         { energy: 0.132_397, f1: -2.580_99, f2: 0.506_462 },
         { energy: 0.134_538, f1: -6.429_91, f2: 0.498_089 },
         { energy: 0.134_9, f1: -9.750_36, f2: 0.496_701 },
         { energy: 0.135_1, f1: -9.780_4, f2: 7.248_21 },
         { energy: 0.136_714, f1: -3.806_88, f2: 7.376_24 },
         { energy: 0.138_925, f1: -2.118_71, f2: 7.552_81 },
         { energy: 0.141_172, f1: -1.197, f2: 7.733_6 },
         { energy: 0.143_456, f1: -0.541_382, f2: 7.918_72 },
         { energy: 0.145_776, f1: -0.014_160_2, f2: 8.108_28 },
         { energy: 0.148_134, f1: 0.444_985, f2: 8.302_36 },
         { energy: 0.150_53, f1: 0.872_47, f2: 8.501_1 },
         { energy: 0.152_964, f1: 1.313_26, f2: 8.704_6 },
         { energy: 0.155_439, f1: 1.730_13, f2: 8.807_97 },
         { energy: 0.157_953, f1: 2.101_06, f2: 8.911_01 },
         { energy: 0.160_507, f1: 2.444_14, f2: 9.015_26 },
         { energy: 0.163_103, f1: 2.777_46, f2: 9.120_73 },
         { energy: 0.165_742, f1: 3.113_13, f2: 9.227_44 },
         { energy: 0.168_422, f1: 3.481_35, f2: 9.335_39 },
         { energy: 0.171_146, f1: 3.909_62, f2: 9.324_04 },
         { energy: 0.173_915, f1: 4.224_55, f2: 9.221_28 },
         { energy: 0.176_727, f1: 4.437_98, f2: 9.119_66 },
         { energy: 0.179_586, f1: 4.570_84, f2: 9.019_15 },
         { energy: 0.182_491, f1: 4.488_35, f2: 8.919_77 },
         { energy: 0.185_442, f1: 4.438_27, f2: 9.232_34 },
         { energy: 0.188_442, f1: 4.568_13, f2: 9.572_78 },
         { energy: 0.191_489, f1: 4.810_79, f2: 9.925_77 },
         { energy: 0.194_587, f1: 5.175_14, f2: 10.291_8 },
         { energy: 0.197_734, f1: 5.790_93, f2: 10.636_5 },
         { energy: 0.200_932, f1: 6.361_32, f2: 10.551_3 },
         { energy: 0.204_182, f1: 6.810_58, f2: 10.466_8 },
         { energy: 0.207_485, f1: 7.188_38, f2: 10.383 },
         { energy: 0.210_84, f1: 7.538_6, f2: 10.299_9 },
         { energy: 0.214_251, f1: 7.899_18, f2: 10.201 },
         { energy: 0.217_716, f1: 8.214_3, f2: 10.061 },
         { energy: 0.221_237, f1: 8.488_64, f2: 9.922_81 },
         { energy: 0.224_816, f1: 8.739_23, f2: 9.786_55 },
         { energy: 0.228_452, f1: 8.969_13, f2: 9.652_18 },
         { energy: 0.232_147, f1: 9.177_02, f2: 9.519_64 },
         { energy: 0.235_902, f1: 9.368_14, f2: 9.405_94 },
         { energy: 0.239_717, f1: 9.557_5, f2: 9.300_22 },
         { energy: 0.243_595, f1: 9.744_55, f2: 9.195_68 },
         { energy: 0.247_535, f1: 9.926_36, f2: 9.092_33 },
         { energy: 0.251_538, f1: 10.103_2, f2: 8.990_12 },
         { energy: 0.255_607, f1: 10.275_6, f2: 8.889_07 },
         { energy: 0.259_741, f1: 10.444, f2: 8.789_16 },
         { energy: 0.263_942, f1: 10.609_2, f2: 8.690_37 },
         { energy: 0.268_211, f1: 10.772_3, f2: 8.592_7 },
         { energy: 0.272_549, f1: 10.934_6, f2: 8.496_11 },
         { energy: 0.276_957, f1: 11.099_2, f2: 8.400_62 },
         { energy: 0.281_437, f1: 11.279_9, f2: 8.297_84 },
         { energy: 0.285_989, f1: 11.442, f2: 8.164_94 },
         { energy: 0.290_615, f1: 11.587_6, f2: 8.034_17 },
         { energy: 0.295_315, f1: 11.722_5, f2: 7.905_5 },
         { energy: 0.300_092, f1: 11.849_4, f2: 7.778_88 },
         { energy: 0.304_945, f1: 11.969_6, f2: 7.654_29 },
         { energy: 0.309_878, f1: 12.084, f2: 7.531_71 },
         { energy: 0.314_89, f1: 12.193_2, f2: 7.411_08 },
         { energy: 0.319_983, f1: 12.297_8, f2: 7.292_38 },
         { energy: 0.325_158, f1: 12.398, f2: 7.175_59 },
         { energy: 0.330_418, f1: 12.494_4, f2: 7.060_67 },
         { energy: 0.335_762, f1: 12.587_3, f2: 6.947_58 },
         { energy: 0.341_192, f1: 12.676_9, f2: 6.836_31 },
         { energy: 0.346_711, f1: 12.763_6, f2: 6.726_82 },
         { energy: 0.352_319, f1: 12.847_7, f2: 6.619_09 },
         { energy: 0.358_017, f1: 12.929_5, f2: 6.513_08 },
         { energy: 0.363_808, f1: 13.009_2, f2: 6.408_76 },
         { energy: 0.369_692, f1: 13.087_4, f2: 6.306_12 },
         { energy: 0.375_672, f1: 13.164_5, f2: 6.205_12 },
         { energy: 0.381_748, f1: 13.241_5, f2: 6.105_75 },
         { energy: 0.387_922, f1: 13.321_2, f2: 6.006_35 },
         { energy: 0.394_197, f1: 13.402_5, f2: 5.903_91 },
         { energy: 0.400_573, f1: 13.481_1, f2: 5.791_78 },
         { energy: 0.407_052, f1: 13.549_7, f2: 5.677_35 },
         { energy: 0.413_635, f1: 13.612, f2: 5.565_36 },
         { energy: 0.420_326, f1: 13.670_1, f2: 5.455_5 },
         { energy: 0.427_124, f1: 13.724_8, f2: 5.347_77 },
         { energy: 0.434_032, f1: 13.776_6, f2: 5.242_1 },
         { energy: 0.441_052, f1: 13.826_3, f2: 5.138_55 },
         { energy: 0.448_186, f1: 13.876_5, f2: 5.036_3 },
         { energy: 0.455_435, f1: 13.924, f2: 4.932_39 },
         { energy: 0.462_802, f1: 13.968_1, f2: 4.827_9 },
         { energy: 0.470_287, f1: 14.008, f2: 4.724_16 },
         { energy: 0.477_894, f1: 14.043_9, f2: 4.622_51 },
         { energy: 0.485_623, f1: 14.077_2, f2: 4.523_2 },
         { energy: 0.493_478, f1: 14.108_2, f2: 4.426_1 },
         { energy: 0.501_459, f1: 14.137_6, f2: 4.331_16 },
         { energy: 0.509_57, f1: 14.165_6, f2: 4.238_09 },
         { energy: 0.517_812, f1: 14.192_9, f2: 4.146_64 },
         { energy: 0.526_187, f1: 14.219_5, f2: 4.056_03 },
         { energy: 0.534_698, f1: 14.244_8, f2: 3.965_11 },
         { energy: 0.543_346, f1: 14.267_6, f2: 3.875_11 },
         { energy: 0.552_134, f1: 14.290_9, f2: 3.787_2 },
         { energy: 0.561_065, f1: 14.312_7, f2: 3.693 },
         { energy: 0.570_139, f1: 14.324_5, f2: 3.598_32 },
         { energy: 0.579_361, f1: 14.332_2, f2: 3.512_89 },
         { energy: 0.588_732, f1: 14.339_4, f2: 3.431_56 },
         { energy: 0.598_254, f1: 14.347_6, f2: 3.353_39 },
         { energy: 0.607_93, f1: 14.356_1, f2: 3.277_01 },
         { energy: 0.617_763, f1: 14.365_2, f2: 3.202_35 },
         { energy: 0.627_755, f1: 14.376_4, f2: 3.128_99 },
         { energy: 0.637_908, f1: 14.388_9, f2: 3.052_64 },
         { energy: 0.648_226, f1: 14.399_7, f2: 2.971_38 },
         { energy: 0.658_711, f1: 14.402_6, f2: 2.887_94 },
         { energy: 0.669_365, f1: 14.397_8, f2: 2.806_81 },
         { energy: 0.680_191, f1: 14.387_2, f2: 2.735_38 },
         { energy: 0.691_193, f1: 14.378_7, f2: 2.671_41 },
         { energy: 0.702_372, f1: 14.376, f2: 2.610_54 },
         { energy: 0.713_733, f1: 14.375_2, f2: 2.547_3 },
         { energy: 0.725_277, f1: 14.372_1, f2: 2.483_06 },
         { energy: 0.737_008, f1: 14.367_6, f2: 2.420_45 },
         { energy: 0.748_928, f1: 14.362_2, f2: 2.359_42 },
         { energy: 0.761_042, f1: 14.356_4, f2: 2.299_87 },
         { energy: 0.773_351, f1: 14.350_8, f2: 2.241_35 },
         { energy: 0.785_859, f1: 14.344_8, f2: 2.182_67 },
         { energy: 0.798_57, f1: 14.336_7, f2: 2.124_2 },
         { energy: 0.811_486, f1: 14.327_1, f2: 2.067_31 },
         { energy: 0.824_611, f1: 14.316_4, f2: 2.011_93 },
         { energy: 0.837_949, f1: 14.304_8, f2: 1.958_03 },
         { energy: 0.851_502, f1: 14.292_2, f2: 1.905_79 },
         { energy: 0.865_274, f1: 14.279, f2: 1.855_17 },
         { energy: 0.879_269, f1: 14.265_4, f2: 1.806_1 },
         { energy: 0.893_491, f1: 14.251_4, f2: 1.758_35 },
         { energy: 0.907_943, f1: 14.237, f2: 1.711_85 },
         { energy: 0.922_628, f1: 14.222_4, f2: 1.666_58 },
         { energy: 0.937_551, f1: 14.207_3, f2: 1.622_25 },
         { energy: 0.952_715, f1: 14.191_7, f2: 1.579_06 },
         { energy: 0.968_124, f1: 14.175_6, f2: 1.536_98 },
         { energy: 0.983_783, f1: 14.159_2, f2: 1.496_04 },
         { energy: 0.999_695, f1: 14.142_3, f2: 1.456_21 },
         { energy: 1.015_86, f1: 14.125_1, f2: 1.417_47 },
         { energy: 1.032_29, f1: 14.107_9, f2: 1.379_83 },
         { energy: 1.048_99, f1: 14.090_5, f2: 1.342_73 },
         { energy: 1.065_96, f1: 14.072_4, f2: 1.306_15 },
         { energy: 1.083_2, f1: 14.053_5, f2: 1.270_56 },
         { energy: 1.100_72, f1: 14.034_1, f2: 1.235_96 },
         { energy: 1.118_52, f1: 14.014_2, f2: 1.202_32 },
         { energy: 1.136_61, f1: 13.993_9, f2: 1.169_56 },
         { energy: 1.155, f1: 13.973, f2: 1.137_7 },
         { energy: 1.173_68, f1: 13.951_6, f2: 1.106_73 },
         { energy: 1.192_66, f1: 13.929_7, f2: 1.076_57 },
         { energy: 1.211_95, f1: 13.907_2, f2: 1.047_23 },
         { energy: 1.231_55, f1: 13.884_1, f2: 1.018_67 },
         { energy: 1.251_47, f1: 13.860_4, f2: 0.990_996 },
         { energy: 1.271_72, f1: 13.836, f2: 0.964_146 },
         { energy: 1.292_29, f1: 13.811, f2: 0.938_107 },
         { energy: 1.313_19, f1: 13.785_4, f2: 0.912_775 },
         { energy: 1.334_43, f1: 13.759_1, f2: 0.888_128 },
         { energy: 1.356_01, f1: 13.731_9, f2: 0.864_145 },
         { energy: 1.377_94, f1: 13.703_9, f2: 0.840_814 },
         { energy: 1.400_23, f1: 13.674_8, f2: 0.818_112 },
         { energy: 1.422_88, f1: 13.644_7, f2: 0.796_024 },
         { energy: 1.445_89, f1: 13.613_4, f2: 0.774_53 },
         { energy: 1.469_28, f1: 13.580_7, f2: 0.753_673 },
         { energy: 1.493_04, f1: 13.546_5, f2: 0.733_458 },
         { energy: 1.517_19, f1: 13.510_8, f2: 0.714_144 },
         { energy: 1.541_73, f1: 13.473_6, f2: 0.695_386 },
         { energy: 1.566_67, f1: 13.434_5, f2: 0.677_114 },
         { energy: 1.592_01, f1: 13.393_3, f2: 0.659_332 },
         { energy: 1.617_76, f1: 13.349_7, f2: 0.642_015 },
         { energy: 1.643_92, f1: 13.303_2, f2: 0.625_148 },
         { energy: 1.670_51, f1: 13.253_6, f2: 0.608_723 },
         { energy: 1.697_53, f1: 13.200_4, f2: 0.592_732 },
         { energy: 1.724_99, f1: 13.143, f2: 0.577_164 },
         { energy: 1.752_89, f1: 13.080_6, f2: 0.561_479 },
         { energy: 1.781_24, f1: 13.011_8, f2: 0.546_048 },
         { energy: 1.810_05, f1: 12.935_5, f2: 0.530_917 },
         { energy: 1.839_32, f1: 12.850_1, f2: 0.516_2 },
         { energy: 1.869_07, f1: 12.753_5, f2: 0.501_889 },
         { energy: 1.899_3, f1: 12.642_6, f2: 0.487_977 },
         { energy: 1.930_02, f1: 12.513_2, f2: 0.474_448 },
         { energy: 1.961_24, f1: 12.358_8, f2: 0.461_296 },
         { energy: 1.992_96, f1: 12.168_7, f2: 0.448_513 },
         { energy: 2.025_2, f1: 11.924_9, f2: 0.436_361 },
         { energy: 2.057_95, f1: 11.589_5, f2: 0.423_895 },
         { energy: 2.091_24, f1: 11.067_6, f2: 0.411_665 },
         { energy: 2.125_06, f1: 9.954_15, f2: 0.399_7 },
         { energy: 2.145_4, f1: 3.545_95, f2: 0.392_762 },
         { energy: 2.145_6, f1: 3.547_65, f2: 4.222_84 },
         { energy: 2.159_43, f1: 9.609_59, f2: 4.185_09 },
         { energy: 2.194_36, f1: 11.218_7, f2: 4.092_33 },
         { energy: 2.229_85, f1: 11.942_3, f2: 4.000_67 },
         { energy: 2.265_92, f1: 12.421_9, f2: 3.910_21 },
         { energy: 2.302_57, f1: 12.782_6, f2: 3.821 },
         { energy: 2.339_81, f1: 13.071_9, f2: 3.732_93 },
         { energy: 2.377_66, f1: 13.312_7, f2: 3.646_05 },
         { energy: 2.416_11, f1: 13.518_6, f2: 3.560_55 },
         { energy: 2.455_19, f1: 13.697_6, f2: 3.476_3 },
         { energy: 2.494_9, f1: 13.855_3, f2: 3.393_39 },
         { energy: 2.535_26, f1: 13.995_7, f2: 3.311_85 },
         { energy: 2.576_26, f1: 14.121_6, f2: 3.231_75 },
         { energy: 2.617_93, f1: 14.235_2, f2: 3.152_96 },
         { energy: 2.660_27, f1: 14.338_3, f2: 3.075_76 },
         { energy: 2.703_3, f1: 14.432_1, f2: 2.999_68 },
         { energy: 2.747_03, f1: 14.517_7, f2: 2.925_12 },
         { energy: 2.791_46, f1: 14.596_1, f2: 2.851_95 },
         { energy: 2.836_61, f1: 14.667_9, f2: 2.780_22 },
         { energy: 2.882_49, f1: 14.734, f2: 2.709_92 },
         { energy: 2.929_11, f1: 14.794_7, f2: 2.640_91 },
         { energy: 2.976_48, f1: 14.850_6, f2: 2.573_41 },
         { energy: 3.024_63, f1: 14.902, f2: 2.507_31 },
         { energy: 3.073_55, f1: 14.949_6, f2: 2.442_7 },
         { energy: 3.123_26, f1: 14.993_5, f2: 2.379_24 },
         { energy: 3.173_78, f1: 15.033_9, f2: 2.317_15 },
         { energy: 3.225_11, f1: 15.071, f2: 2.256_49 },
         { energy: 3.277_27, f1: 15.105_3, f2: 2.197_15 },
         { energy: 3.330_28, f1: 15.136_9, f2: 2.139_1 },
         { energy: 3.384_15, f1: 15.166, f2: 2.082_37 },
         { energy: 3.438_88, f1: 15.192_7, f2: 2.026_91 },
         { energy: 3.494_5, f1: 15.217_2, f2: 1.972_73 },
         { energy: 3.551_02, f1: 15.239_7, f2: 1.919_81 },
         { energy: 3.608_46, f1: 15.260_3, f2: 1.868_11 },
         { energy: 3.666_82, f1: 15.279_1, f2: 1.817_62 },
         { energy: 3.726_13, f1: 15.296_2, f2: 1.768_33 },
         { energy: 3.786_4, f1: 15.311_8, f2: 1.720_21 },
         { energy: 3.847_64, f1: 15.325_9, f2: 1.673_25 },
         { energy: 3.909_87, f1: 15.338_7, f2: 1.627_43 },
         { energy: 3.973_11, f1: 15.350_2, f2: 1.582_74 },
         { energy: 4.037_38, f1: 15.360_5, f2: 1.539_14 },
         { energy: 4.102_68, f1: 15.369_7, f2: 1.496_61 },
         { energy: 4.169_03, f1: 15.377_8, f2: 1.455_15 },
         { energy: 4.236_46, f1: 15.385, f2: 1.414_72 },
         { energy: 4.304_98, f1: 15.391_2, f2: 1.375_29 },
         { energy: 4.374_62, f1: 15.396_6, f2: 1.336_87 },
         { energy: 4.445_37, f1: 15.401_1, f2: 1.299_43 },
         { energy: 4.517_27, f1: 15.404_9, f2: 1.262_95 },
         { energy: 4.590_33, f1: 15.408, f2: 1.227_42 },
         { energy: 4.664_58, f1: 15.410_5, f2: 1.192_78 },
         { energy: 4.740_03, f1: 15.412_3, f2: 1.159_06 },
         { energy: 4.816_69, f1: 15.413_5, f2: 1.126_21 },
         { energy: 4.894_6, f1: 15.414_2, f2: 1.094_23 },
         { energy: 4.973_77, f1: 15.414_4, f2: 1.063_06 },
         { energy: 5.054_21, f1: 15.414_1, f2: 1.032_74 },
         { energy: 5.135_96, f1: 15.413_4, f2: 1.003_23 },
         { energy: 5.219_03, f1: 15.412_3, f2: 0.974_505 },
         { energy: 5.303_44, f1: 15.410_8, f2: 0.946_528 },
         { energy: 5.389_22, f1: 15.409, f2: 0.919_31 },
         { energy: 5.476_39, f1: 15.406_8, f2: 0.892_828 },
         { energy: 5.564_97, f1: 15.404_3, f2: 0.867_047 },
         { energy: 5.654_98, f1: 15.401_6, f2: 0.841_986 },
         { energy: 5.746_44, f1: 15.398_5, f2: 0.817_583 },
         { energy: 5.839_39, f1: 15.395_3, f2: 0.793_881 },
         { energy: 5.933_83, f1: 15.391_8, f2: 0.770_795 },
         { energy: 6.029_81, f1: 15.388_2, f2: 0.748_323 },
         { energy: 6.127_33, f1: 15.384_3, f2: 0.726_532 },
         { energy: 6.226_44, f1: 15.380_3, f2: 0.705_292 },
         { energy: 6.327_15, f1: 15.376_1, f2: 0.684_67 },
         { energy: 6.429_48, f1: 15.371_8, f2: 0.664_605 },
         { energy: 6.533_48, f1: 15.367_4, f2: 0.645_071 },
         { energy: 6.639_15, f1: 15.362_8, f2: 0.626_122 },
         { energy: 6.746_54, f1: 15.358_2, f2: 0.607_68 },
         { energy: 6.855_65, f1: 15.353_4, f2: 0.589_768 },
         { energy: 6.966_54, f1: 15.348_6, f2: 0.572_384 },
         { energy: 7.079_22, f1: 15.343_7, f2: 0.555_427 },
         { energy: 7.193_72, f1: 15.338_8, f2: 0.539 },
         { energy: 7.310_07, f1: 15.333_8, f2: 0.523_022 },
         { energy: 7.428_31, f1: 15.328_8, f2: 0.507_494 },
         { energy: 7.548_45, f1: 15.323_7, f2: 0.492_406 },
         { energy: 7.670_54, f1: 15.318_6, f2: 0.477_75 },
         { energy: 7.794_61, f1: 15.313_5, f2: 0.463_515 },
         { energy: 7.920_68, f1: 15.308_4, f2: 0.449_684 },
         { energy: 8.048_79, f1: 15.303_3, f2: 0.436_244 },
         { energy: 8.178_98, f1: 15.298_1, f2: 0.423_194 },
         { energy: 8.311_26, f1: 15.293, f2: 0.410_515 },
         { energy: 8.445_69, f1: 15.287_9, f2: 0.398_208 },
         { energy: 8.582_29, f1: 15.282_8, f2: 0.386_248 },
         { energy: 8.721_11, f1: 15.277_7, f2: 0.374_638 },
         { energy: 8.862_16, f1: 15.272_7, f2: 0.363_359 },
         { energy: 9.005_5, f1: 15.267_6, f2: 0.352_411 },
         { energy: 9.151_16, f1: 15.262_6, f2: 0.341_78 },
         { energy: 9.299_17, f1: 15.257_7, f2: 0.331_457 },
         { energy: 9.449_58, f1: 15.252_7, f2: 0.321_431 },
         { energy: 9.602_42, f1: 15.247_8, f2: 0.311_7 },
         { energy: 9.757_73, f1: 15.243, f2: 0.302_254 },
         { energy: 9.915_55, f1: 15.238_2, f2: 0.293_089 },
         { energy: 10.075_9, f1: 15.233_4, f2: 0.284_185 },
         { energy: 10.238_9, f1: 15.228_7, f2: 0.275_543 },
         { energy: 10.404_5, f1: 15.224, f2: 0.267_153 },
         { energy: 10.572_8, f1: 15.219_4, f2: 0.259_01 },
         { energy: 10.743_8, f1: 15.214_8, f2: 0.251_106 },
         { energy: 10.917_6, f1: 15.210_3, f2: 0.243_435 },
         { energy: 11.094_2, f1: 15.205_9, f2: 0.235_989 },
         { energy: 11.273_6, f1: 15.201_5, f2: 0.228_764 },
         { energy: 11.455_9, f1: 15.197_1, f2: 0.221_751 },
         { energy: 11.641_2, f1: 15.192_8, f2: 0.214_946 },
         { energy: 11.829_5, f1: 15.188_6, f2: 0.208_342 },
         { energy: 12.020_8, f1: 15.184_4, f2: 0.201_934 },
         { energy: 12.215_3, f1: 15.180_3, f2: 0.195_715 },
         { energy: 12.412_8, f1: 15.176_3, f2: 0.189_681 },
         { energy: 12.613_6, f1: 15.172_3, f2: 0.183_827 },
         { energy: 12.817_6, f1: 15.168_4, f2: 0.178_146 },
         { energy: 13.025, f1: 15.164_5, f2: 0.172_634 },
         { energy: 13.235_6, f1: 15.160_7, f2: 0.167_287 },
         { energy: 13.449_7, f1: 15.156_9, f2: 0.162_099 },
         { energy: 13.667_2, f1: 15.153_2, f2: 0.157_065 },
         { energy: 13.888_3, f1: 15.149_6, f2: 0.152_182 },
         { energy: 14.112_9, f1: 15.146, f2: 0.147_445 },
         { energy: 14.341_2, f1: 15.142_5, f2: 0.142_849 },
         { energy: 14.573_1, f1: 15.139_1, f2: 0.138_391 },
         { energy: 14.808_9, f1: 15.135_7, f2: 0.134_067 },
         { energy: 15.048_4, f1: 15.132_4, f2: 0.129_871 },
         { energy: 15.291_8, f1: 15.129_1, f2: 0.125_802 },
         { energy: 15.539_1, f1: 15.125_9, f2: 0.121_855 },
         { energy: 15.790_4, f1: 15.122_7, f2: 0.118_027 },
         { energy: 16.045_8, f1: 15.119_6, f2: 0.114_313 },
         { energy: 16.305_4, f1: 15.116_6, f2: 0.110_711 },
         { energy: 16.569_1, f1: 15.113_6, f2: 0.107_218 },
         { energy: 16.837_1, f1: 15.110_6, f2: 0.103_829 },
         { energy: 17.109_4, f1: 15.107_8, f2: 0.100_543 },
         { energy: 17.386_1, f1: 15.104_9, f2: 0.097_355_9 },
         { energy: 17.667_4, f1: 15.102_2, f2: 0.094_264_7 },
         { energy: 17.953_1, f1: 15.099_4, f2: 0.091_266_8 },
         { energy: 18.243_5, f1: 15.096_8, f2: 0.088_359_4 },
         { energy: 18.538_6, f1: 15.094_2, f2: 0.085_539_9 },
         { energy: 18.838_4, f1: 15.091_6, f2: 0.082_805_5 },
         { energy: 19.143_1, f1: 15.089_1, f2: 0.080_153_8 },
         { energy: 19.452_7, f1: 15.086_6, f2: 0.077_582_4 },
         { energy: 19.767_4, f1: 15.084_2, f2: 0.075_088_6 },
         { energy: 20.087_1, f1: 15.081_8, f2: 0.072_680_2 },
         { energy: 20.412, f1: 15.079_5, f2: 0.070_336_6 },
         { energy: 20.742_1, f1: 15.077_2, f2: 0.068_066_5 },
         { energy: 21.077_6, f1: 15.075, f2: 0.065_867_3 },
         { energy: 21.418_5, f1: 15.072_8, f2: 0.063_737_1 },
         { energy: 21.765, f1: 15.070_6, f2: 0.061_673_6 },
         { energy: 22.117, f1: 15.068_5, f2: 0.059_675 },
         { energy: 22.474_7, f1: 15.066_5, f2: 0.057_739_2 },
         { energy: 22.838_2, f1: 15.064_5, f2: 0.055_864_3 },
         { energy: 23.207_6, f1: 15.062_5, f2: 0.054_048_4 },
         { energy: 23.583, f1: 15.060_6, f2: 0.052_289_7 },
         { energy: 23.964_4, f1: 15.058_7, f2: 0.050_586_5 },
         { energy: 24.352, f1: 15.056_8, f2: 0.048_937_1 },
         { energy: 24.745_9, f1: 15.055, f2: 0.047_339_8 },
         { energy: 25.146_2, f1: 15.053_2, f2: 0.045_793 },
         { energy: 25.552_9, f1: 15.051_5, f2: 0.044_295_3 },
         { energy: 25.966_2, f1: 15.049_8, f2: 0.042_845 },
         { energy: 26.386_1, f1: 15.048_2, f2: 0.041_440_7 },
         { energy: 26.812_9, f1: 15.046_5, f2: 0.040_081 },
         { energy: 27.246_6, f1: 15.045, f2: 0.038_764_5 },
         { energy: 27.687_3, f1: 15.043_4, f2: 0.037_489_9 },
         { energy: 28.135_1, f1: 15.041_9, f2: 0.036_255_8 },
         { energy: 28.590_2, f1: 15.040_4, f2: 0.035_061_2 },
         { energy: 29.052_6, f1: 15.039, f2: 0.033_904_6 },
         { energy: 29.522_5, f1: 15.037_7, f2: 0.032_784_9 },
         { energy: 30.0, f1: 15.035_9, f2: 0.031_701_1 },
    ],
    neutron_scattering: {
        b_c: { value: 5.13, uncertainty: 0.01},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 3.307, uncertainty: 0.013},
        bound_incoherent_scattering_xs: { value: 0.005, uncertainty: 0.010},
        total_bound_scattering_xs: { value: 3.312, uncertainty: 0.016},
        absorption_xs: { value: 0.172, uncertainty: 0.006},
    },
    isotopes: [
        { 
            mass_number: 24,
            mass: { value: 24.034_35, uncertainty: 0.000_54},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 25,
            mass: { value: 25.020_26, uncertainty: 0.000_21},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 26,
            mass: { value: 26.011_78, uncertainty: 0.000_21},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 27,
            mass: { value: 26.999_19, uncertainty: 0.000_40},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 28,
            mass: { value: 27.992_312, uncertainty: 0.000_004},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 29,
            mass: { value: 28.981_801_4, uncertainty: 0.000_000_8},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 30,
            mass: { value: 29.978_313_8, uncertainty: 0.000_000_4},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 31,
            mass: { value: 30.973_761_51, uncertainty: 0.000_000_20},
            abundance: { value: 100.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 32,
            mass: { value: 31.973_907_16, uncertainty: 0.000_000_20},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 33,
            mass: { value: 32.971_725_3, uncertainty: 0.000_001_2},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 34,
            mass: { value: 33.973_636, uncertainty: 0.000_005},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 35,
            mass: { value: 34.973_314_2, uncertainty: 0.000_002_0},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 36,
            mass: { value: 35.978_26, uncertainty: 0.000_14},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 37,
            mass: { value: 36.979_61, uncertainty: 0.000_40},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 38,
            mass: { value: 37.984_47, uncertainty: 0.000_15},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 39,
            mass: { value: 38.986_42, uncertainty: 0.000_16},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 40,
            mass: { value: 39.991_05, uncertainty: 0.000_21},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 41,
            mass: { value: 40.994_8, uncertainty: 0.005_0},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 42,
            mass: { value: 42.000_09, uncertainty: 0.000_54},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 43,
            mass: { value: 43.003_31, uncertainty: 0.000_54},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 44,
            mass: { value: 44.009_88, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 45,
            mass: { value: 45.015_14, uncertainty: 0.000_86},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 46,
            mass: { value: 46.023_83, uncertainty: 0.000_97},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {P};
