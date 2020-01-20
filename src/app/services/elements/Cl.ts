const Cl = {
    atomic_number: 17,
    name: "Chlorine",
    symbol: "Cl",
    mass: 35.453,
    common_ions: [-1, 1, 3, 5, 7],
    uncommon_ions: [2, 4, 6],
    xray_scattering: {
        table: [
             { energy: 0.01, f1: undefined, f2: 1.469_38 },
             { energy: 0.010_161_7, f1: undefined, f2: 1.692_2 },
             { energy: 0.010_326_1, f1: undefined, f2: 1.948_8 },
             { energy: 0.010_493_1, f1: undefined, f2: 2.244_32 },
             { energy: 0.010_662_8, f1: undefined, f2: 2.513_03 },
             { energy: 0.010_835_3, f1: undefined, f2: 2.731_53 },
             { energy: 0.011_010_6, f1: undefined, f2: 2.955_49 },
             { energy: 0.011_188_6, f1: undefined, f2: 3.194_16 },
             { energy: 0.011_369_6, f1: undefined, f2: 3.488_81 },
             { energy: 0.011_553_5, f1: undefined, f2: 3.876_18 },
             { energy: 0.011_740_4, f1: undefined, f2: 4.144_16 },
             { energy: 0.011_930_3, f1: undefined, f2: 4.414_07 },
             { energy: 0.012_123_2, f1: undefined, f2: 4.701_56 },
             { energy: 0.012_319_3, f1: undefined, f2: 4.915_82 },
             { energy: 0.012_518_6, f1: undefined, f2: 5.130_87 },
             { energy: 0.012_721, f1: undefined, f2: 5.355_33 },
             { energy: 0.012_926_8, f1: undefined, f2: 5.572_04 },
             { energy: 0.013_135_9, f1: undefined, f2: 5.783_53 },
             { energy: 0.013_348_3, f1: undefined, f2: 6.003_04 },
             { energy: 0.013_564_2, f1: undefined, f2: 6.225_4 },
             { energy: 0.013_783_6, f1: undefined, f2: 6.425_63 },
             { energy: 0.014_006_6, f1: undefined, f2: 6.632_29 },
             { energy: 0.014_233_1, f1: undefined, f2: 6.845_61 },
             { energy: 0.014_463_3, f1: undefined, f2: 7.065_23 },
             { energy: 0.014_697_3, f1: undefined, f2: 7.252_68 },
             { energy: 0.014_935, f1: undefined, f2: 7.445_1 },
             { energy: 0.015_176_5, f1: undefined, f2: 7.642_64 },
             { energy: 0.015_422, f1: undefined, f2: 7.827_5 },
             { energy: 0.015_671_4, f1: undefined, f2: 7.962_38 },
             { energy: 0.015_924_9, f1: undefined, f2: 8.099_58 },
             { energy: 0.016_182_5, f1: undefined, f2: 8.239_14 },
             { energy: 0.016_444_2, f1: undefined, f2: 8.376_83 },
             { energy: 0.016_710_2, f1: undefined, f2: 8.514_61 },
             { energy: 0.016_980_5, f1: undefined, f2: 8.654_66 },
             { energy: 0.017_255_1, f1: undefined, f2: 8.797_01 },
             { energy: 0.017_534_2, f1: undefined, f2: 8.941_7 },
             { energy: 0.017_817_8, f1: undefined, f2: 9.088_77 },
             { energy: 0.018_106, f1: undefined, f2: 9.238_27 },
             { energy: 0.018_398_9, f1: undefined, f2: 9.390_23 },
             { energy: 0.018_696_4, f1: undefined, f2: 9.544_67 },
             { energy: 0.018_998_8, f1: undefined, f2: 9.701_67 },
             { energy: 0.019_306_1, f1: undefined, f2: 9.861_24 },
             { energy: 0.019_618_4, f1: undefined, f2: 9.924_21 },
             { energy: 0.019_935_7, f1: undefined, f2: 9.890_76 },
             { energy: 0.020_258_2, f1: undefined, f2: 9.857_42 },
             { energy: 0.020_585_8, f1: undefined, f2: 9.824_2 },
             { energy: 0.020_918_8, f1: undefined, f2: 9.791_08 },
             { energy: 0.021_257_1, f1: undefined, f2: 9.758_07 },
             { energy: 0.021_600_9, f1: undefined, f2: 9.725_18 },
             { energy: 0.021_950_3, f1: undefined, f2: 9.692_4 },
             { energy: 0.022_305_3, f1: undefined, f2: 9.659_73 },
             { energy: 0.022_666_1, f1: undefined, f2: 9.627_16 },
             { energy: 0.023_032_7, f1: undefined, f2: 9.576_23 },
             { energy: 0.023_405_3, f1: undefined, f2: 9.338_42 },
             { energy: 0.023_783_8, f1: undefined, f2: 9.106_53 },
             { energy: 0.024_168_5, f1: undefined, f2: 8.880_38 },
             { energy: 0.024_559_4, f1: undefined, f2: 8.659_86 },
             { energy: 0.024_956_6, f1: undefined, f2: 8.444_81 },
             { energy: 0.025_360_3, f1: undefined, f2: 8.131_78 },
             { energy: 0.025_770_5, f1: undefined, f2: 7.769_56 },
             { energy: 0.026_187_3, f1: undefined, f2: 7.423_45 },
             { energy: 0.026_610_9, f1: undefined, f2: 7.092_77 },
             { energy: 0.027_041_3, f1: undefined, f2: 6.776_82 },
             { energy: 0.027_478_6, f1: undefined, f2: 6.474_93 },
             { energy: 0.027_923_1, f1: undefined, f2: 6.186_5 },
             { energy: 0.028_374_7, f1: undefined, f2: 5.910_91 },
             { energy: 0.028_833_7, f1: undefined, f2: 5.581_56 },
             { energy: 0.029_3, f1: 9.944_11, f2: 5.205_22 },
             { energy: 0.029_773_9, f1: 9.992_65, f2: 4.854_25 },
             { energy: 0.030_255_5, f1: 10.017_8, f2: 4.526_94 },
             { energy: 0.030_744_9, f1: 10.032_8, f2: 4.221_71 },
             { energy: 0.031_242_1, f1: 10.054_4, f2: 3.937_05 },
             { energy: 0.031_747_5, f1: 10.125_3, f2: 3.660_07 },
             { energy: 0.032_260_9, f1: 10.143_8, f2: 3.220_12 },
             { energy: 0.032_782_7, f1: 10.058_7, f2: 2.833_05 },
             { energy: 0.033_313, f1: 9.924_98, f2: 2.492_51 },
             { energy: 0.033_851_8, f1: 9.767_83, f2: 2.192_9 },
             { energy: 0.034_399_3, f1: 9.596_54, f2: 1.929_3 },
             { energy: 0.034_955_7, f1: 9.416_75, f2: 1.700_61 },
             { energy: 0.035_521_1, f1: 9.238_39, f2: 1.501_2 },
             { energy: 0.036_095_6, f1: 9.062_24, f2: 1.325_17 },
             { energy: 0.036_679_4, f1: 8.890_42, f2: 1.169_79 },
             { energy: 0.037_272_7, f1: 8.729_73, f2: 1.032_62 },
             { energy: 0.037_875_5, f1: 8.582_77, f2: 0.882_572 },
             { energy: 0.038_488_2, f1: 8.405_1, f2: 0.739_6 },
             { energy: 0.039_110_7, f1: 8.213_96, f2: 0.619_793 },
             { energy: 0.039_743_2, f1: 8.016_58, f2: 0.530_227 },
             { energy: 0.040_386_1, f1: 7.828_91, f2: 0.460_211 },
             { energy: 0.041_039_3, f1: 7.632_32, f2: 0.406_707 },
             { energy: 0.041_703_1, f1: 7.457, f2: 0.403_132 },
             { energy: 0.042_377_6, f1: 7.308_42, f2: 0.399_59 },
             { energy: 0.043_063, f1: 7.173_79, f2: 0.394_518 },
             { energy: 0.043_759_5, f1: 7.040_43, f2: 0.388_766 },
             { energy: 0.044_467_3, f1: 6.913_7, f2: 0.403_715 },
             { energy: 0.045_186_5, f1: 6.801_25, f2: 0.419_899 },
             { energy: 0.045_917_4, f1: 6.697_54, f2: 0.436_731 },
             { energy: 0.046_66, f1: 6.597_6, f2: 0.456_765 },
             { energy: 0.047_414_7, f1: 6.506_35, f2: 0.482_148 },
             { energy: 0.048_181_6, f1: 6.422_37, f2: 0.508_941 },
             { energy: 0.048_960_9, f1: 6.344_52, f2: 0.537_223 },
             { energy: 0.049_752_8, f1: 6.272_32, f2: 0.567_077 },
             { energy: 0.050_557_6, f1: 6.205_86, f2: 0.598_591 },
             { energy: 0.051_375_3, f1: 6.146_66, f2: 0.630_882 },
             { energy: 0.052_206_2, f1: 6.090_73, f2: 0.659_237 },
             { energy: 0.053_050_6, f1: 6.036_67, f2: 0.688_866 },
             { energy: 0.053_908_7, f1: 5.985_2, f2: 0.719_826 },
             { energy: 0.054_780_6, f1: 5.936_69, f2: 0.752_177 },
             { energy: 0.055_666_7, f1: 5.891_26, f2: 0.785_984 },
             { energy: 0.056_567, f1: 5.849_09, f2: 0.821_309 },
             { energy: 0.057_482, f1: 5.810_41, f2: 0.858_222 },
             { energy: 0.058_411_7, f1: 5.775_76, f2: 0.896_794 },
             { energy: 0.059_356_4, f1: 5.746_38, f2: 0.937_099 },
             { energy: 0.060_316_5, f1: 5.724_92, f2: 0.974_146 },
             { energy: 0.061_292_1, f1: 5.702_06, f2: 1.007_51 },
             { energy: 0.062_283_4, f1: 5.680_14, f2: 1.042_02 },
             { energy: 0.063_290_8, f1: 5.660_26, f2: 1.077_71 },
             { energy: 0.064_314_5, f1: 5.643_07, f2: 1.114_63 },
             { energy: 0.065_354_7, f1: 5.629_2, f2: 1.152_81 },
             { energy: 0.066_411_8, f1: 5.619_57, f2: 1.192_29 },
             { energy: 0.067_485_9, f1: 5.616, f2: 1.233_13 },
             { energy: 0.068_577_5, f1: 5.624_69, f2: 1.275_37 },
             { energy: 0.069_686_7, f1: 5.635_61, f2: 1.293_88 },
             { energy: 0.070_813_8, f1: 5.640_02, f2: 1.312_61 },
             { energy: 0.071_959_1, f1: 5.641_57, f2: 1.331_6 },
             { energy: 0.073_123, f1: 5.642_79, f2: 1.350_88 },
             { energy: 0.074_305_7, f1: 5.644_51, f2: 1.370_42 },
             { energy: 0.075_507_6, f1: 5.647_6, f2: 1.390_26 },
             { energy: 0.076_728_9, f1: 5.653_7, f2: 1.410_38 },
             { energy: 0.077_969_9, f1: 5.667_15, f2: 1.424_54 },
             { energy: 0.079_231, f1: 5.673_95, f2: 1.430_88 },
             { energy: 0.080_512_5, f1: 5.677_39, f2: 1.437_26 },
             { energy: 0.081_814_7, f1: 5.679_07, f2: 1.443_66 },
             { energy: 0.083_138, f1: 5.679_61, f2: 1.450_09 },
             { energy: 0.084_482_7, f1: 5.679_39, f2: 1.456_55 },
             { energy: 0.085_849_1, f1: 5.678_83, f2: 1.463_04 },
             { energy: 0.087_237_7, f1: 5.678_84, f2: 1.469_56 },
             { energy: 0.088_648_7, f1: 5.679_18, f2: 1.473_11 },
             { energy: 0.090_082_5, f1: 5.676_85, f2: 1.475_25 },
             { energy: 0.091_539_5, f1: 5.672_83, f2: 1.477_39 },
             { energy: 0.093_020_1, f1: 5.667_56, f2: 1.479_53 },
             { energy: 0.094_524_6, f1: 5.661_22, f2: 1.481_68 },
             { energy: 0.096_053_5, f1: 5.653_93, f2: 1.483_83 },
             { energy: 0.097_607_1, f1: 5.645_79, f2: 1.485_98 },
             { energy: 0.099_185_8, f1: 5.636_92, f2: 1.488_14 },
             { energy: 0.100_79, f1: 5.627_52, f2: 1.490_3 },
             { energy: 0.102_42, f1: 5.617_96, f2: 1.492_46 },
             { energy: 0.104_077, f1: 5.609_76, f2: 1.494_62 },
             { energy: 0.105_76, f1: 5.602_69, f2: 1.490_39 },
             { energy: 0.107_471, f1: 5.590_1, f2: 1.483_28 },
             { energy: 0.109_209, f1: 5.573_21, f2: 1.476_2 },
             { energy: 0.110_975, f1: 5.553_4, f2: 1.469_15 },
             { energy: 0.112_77, f1: 5.530_84, f2: 1.462_14 },
             { energy: 0.114_594, f1: 5.505_58, f2: 1.455_16 },
             { energy: 0.116_448, f1: 5.477_6, f2: 1.448_21 },
             { energy: 0.118_331, f1: 5.446_86, f2: 1.441_3 },
             { energy: 0.120_245, f1: 5.413_27, f2: 1.434_42 },
             { energy: 0.122_19, f1: 5.376_71, f2: 1.427_58 },
             { energy: 0.124_166, f1: 5.337_06, f2: 1.420_76 },
             { energy: 0.126_175, f1: 5.294_16, f2: 1.413_98 },
             { energy: 0.128_215, f1: 5.247_87, f2: 1.407_23 },
             { energy: 0.130_289, f1: 5.198_15, f2: 1.400_51 },
             { energy: 0.132_397, f1: 5.145_86, f2: 1.392_96 },
             { energy: 0.134_538, f1: 5.087_87, f2: 1.383_7 },
             { energy: 0.136_714, f1: 5.024_06, f2: 1.374_49 },
             { energy: 0.138_925, f1: 4.954_59, f2: 1.365_35 },
             { energy: 0.141_172, f1: 4.879_07, f2: 1.356_26 },
             { energy: 0.143_456, f1: 4.797_04, f2: 1.347_24 },
             { energy: 0.145_776, f1: 4.707_92, f2: 1.338_27 },
             { energy: 0.148_134, f1: 4.611_05, f2: 1.329_37 },
             { energy: 0.150_53, f1: 4.505_69, f2: 1.320_53 },
             { energy: 0.152_964, f1: 4.391_08, f2: 1.311_74 },
             { energy: 0.155_439, f1: 4.267_71, f2: 1.303_01 },
             { energy: 0.157_953, f1: 4.131_22, f2: 1.289_21 },
             { energy: 0.160_507, f1: 3.977_86, f2: 1.275_2 },
             { energy: 0.163_103, f1: 3.806_6, f2: 1.261_34 },
             { energy: 0.165_742, f1: 3.615_06, f2: 1.247_63 },
             { energy: 0.168_422, f1: 3.399_89, f2: 1.234_07 },
             { energy: 0.171_146, f1: 3.156_62, f2: 1.220_66 },
             { energy: 0.173_915, f1: 2.879_29, f2: 1.207_41 },
             { energy: 0.176_727, f1: 2.559_71, f2: 1.194_29 },
             { energy: 0.179_586, f1: 2.186_24, f2: 1.181_32 },
             { energy: 0.182_491, f1: 1.741_65, f2: 1.168_49 },
             { energy: 0.185_442, f1: 1.198_75, f2: 1.155_8 },
             { energy: 0.188_442, f1: 0.510_952, f2: 1.143_25 },
             { energy: 0.191_489, f1: -0.412_386, f2: 1.130_83 },
             { energy: 0.194_587, f1: -1.789_02, f2: 1.118_55 },
             { energy: 0.197_734, f1: -4.445_67, f2: 1.106_4 },
             { energy: 0.199_9, f1: -13.845_2, f2: 1.098_22 },
             { energy: 0.200_1, f1: -13.868, f2: 10.468_2 },
             { energy: 0.200_932, f1: -7.264_44, f2: 10.520_9 },
             { energy: 0.204_182, f1: -2.861_07, f2: 10.727_3 },
             { energy: 0.207_485, f1: -1.117_39, f2: 10.937_8 },
             { energy: 0.210_84, f1: 0.054_250_4, f2: 11.152_4 },
             { energy: 0.214_251, f1: 1.010_05, f2: 11.371_2 },
             { energy: 0.217_716, f1: 1.914_54, f2: 11.495 },
             { energy: 0.221_237, f1: 2.651_92, f2: 11.517_9 },
             { energy: 0.224_816, f1: 3.263_08, f2: 11.540_9 },
             { energy: 0.228_452, f1: 3.807_92, f2: 11.563_9 },
             { energy: 0.232_147, f1: 4.303_91, f2: 11.586_8 },
             { energy: 0.235_902, f1: 4.763_34, f2: 11.609_9 },
             { energy: 0.239_717, f1: 5.194_89, f2: 11.633 },
             { energy: 0.243_595, f1: 5.605_02, f2: 11.656_3 },
             { energy: 0.247_535, f1: 5.998_86, f2: 11.679_5 },
             { energy: 0.251_538, f1: 6.380_69, f2: 11.702_7 },
             { energy: 0.255_607, f1: 6.754_33, f2: 11.726 },
             { energy: 0.259_741, f1: 7.123_75, f2: 11.749_4 },
             { energy: 0.263_942, f1: 7.493_51, f2: 11.772_8 },
             { energy: 0.268_211, f1: 7.869_61, f2: 11.796_2 },
             { energy: 0.272_549, f1: 8.271_33, f2: 11.819_7 },
             { energy: 0.276_957, f1: 8.716_65, f2: 11.792_5 },
             { energy: 0.281_437, f1: 9.128_86, f2: 11.701_5 },
             { energy: 0.285_989, f1: 9.502_59, f2: 11.571_2 },
             { energy: 0.290_615, f1: 9.834_86, f2: 11.436_7 },
             { energy: 0.295_315, f1: 10.141, f2: 11.303_8 },
             { energy: 0.300_092, f1: 10.427_8, f2: 11.172_6 },
             { energy: 0.304_945, f1: 10.698_9, f2: 11.042_8 },
             { energy: 0.309_878, f1: 10.956_6, f2: 10.914_5 },
             { energy: 0.314_89, f1: 11.202_9, f2: 10.787_7 },
             { energy: 0.319_983, f1: 11.439, f2: 10.662_4 },
             { energy: 0.325_158, f1: 11.666_4, f2: 10.538_5 },
             { energy: 0.330_418, f1: 11.886, f2: 10.416_2 },
             { energy: 0.335_762, f1: 12.098_9, f2: 10.295_2 },
             { energy: 0.341_192, f1: 12.305_8, f2: 10.175_6 },
             { energy: 0.346_711, f1: 12.507_6, f2: 10.057_4 },
             { energy: 0.352_319, f1: 12.705, f2: 9.940_51 },
             { energy: 0.358_017, f1: 12.899_3, f2: 9.825_14 },
             { energy: 0.363_808, f1: 13.091_7, f2: 9.711_02 },
             { energy: 0.369_692, f1: 13.283_6, f2: 9.598_16 },
             { energy: 0.375_672, f1: 13.477_1, f2: 9.486_52 },
             { energy: 0.381_748, f1: 13.676_7, f2: 9.376_32 },
             { energy: 0.387_922, f1: 13.915_8, f2: 9.243_52 },
             { energy: 0.394_197, f1: 14.118, f2: 9.060_27 },
             { energy: 0.400_573, f1: 14.282_9, f2: 8.888_51 },
             { energy: 0.407_052, f1: 14.438_2, f2: 8.723_06 },
             { energy: 0.413_635, f1: 14.589_6, f2: 8.560_7 },
             { energy: 0.420_326, f1: 14.733_2, f2: 8.393_99 },
             { energy: 0.427_124, f1: 14.869_8, f2: 8.227_47 },
             { energy: 0.434_032, f1: 14.995_3, f2: 8.058_22 },
             { energy: 0.441_052, f1: 15.110_5, f2: 7.892_34 },
             { energy: 0.448_186, f1: 15.218_9, f2: 7.729_48 },
             { energy: 0.455_435, f1: 15.320_4, f2: 7.568_38 },
             { energy: 0.462_802, f1: 15.415_5, f2: 7.410_07 },
             { energy: 0.470_287, f1: 15.505, f2: 7.254_79 },
             { energy: 0.477_894, f1: 15.590_7, f2: 7.102_71 },
             { energy: 0.485_623, f1: 15.672, f2: 6.950_11 },
             { energy: 0.493_478, f1: 15.747_1, f2: 6.799_4 },
             { energy: 0.501_459, f1: 15.817_1, f2: 6.651_93 },
             { energy: 0.509_57, f1: 15.882_8, f2: 6.506_56 },
             { energy: 0.517_812, f1: 15.944_6, f2: 6.363_57 },
             { energy: 0.526_187, f1: 16.001_9, f2: 6.222_7 },
             { energy: 0.534_698, f1: 16.055_3, f2: 6.084_51 },
             { energy: 0.543_346, f1: 16.105_6, f2: 5.948_89 },
             { energy: 0.552_134, f1: 16.151_8, f2: 5.814_81 },
             { energy: 0.561_065, f1: 16.194_3, f2: 5.683_84 },
             { energy: 0.570_139, f1: 16.234_4, f2: 5.555_69 },
             { energy: 0.579_361, f1: 16.271_3, f2: 5.429_2 },
             { energy: 0.588_732, f1: 16.305_1, f2: 5.305_62 },
             { energy: 0.598_254, f1: 16.336_6, f2: 5.184_74 },
             { energy: 0.607_93, f1: 16.365_4, f2: 5.065_83 },
             { energy: 0.617_763, f1: 16.391_9, f2: 4.949_54 },
             { energy: 0.627_755, f1: 16.416_5, f2: 4.835_76 },
             { energy: 0.637_908, f1: 16.439, f2: 4.723_73 },
             { energy: 0.648_226, f1: 16.459_2, f2: 4.614_12 },
             { energy: 0.658_711, f1: 16.477_9, f2: 4.506_88 },
             { energy: 0.669_365, f1: 16.494_6, f2: 4.401_15 },
             { energy: 0.680_191, f1: 16.509_3, f2: 4.297_8 },
             { energy: 0.691_193, f1: 16.522_7, f2: 4.196_67 },
             { energy: 0.702_372, f1: 16.534_3, f2: 4.096_94 },
             { energy: 0.713_733, f1: 16.543_9, f2: 3.999_51 },
             { energy: 0.725_277, f1: 16.552, f2: 3.904_35 },
             { energy: 0.737_008, f1: 16.558_9, f2: 3.811_39 },
             { energy: 0.748_928, f1: 16.564_7, f2: 3.720_21 },
             { energy: 0.761_042, f1: 16.569_2, f2: 3.630_85 },
             { energy: 0.773_351, f1: 16.572_4, f2: 3.543_15 },
             { energy: 0.785_859, f1: 16.574_2, f2: 3.457_48 },
             { energy: 0.798_57, f1: 16.575_1, f2: 3.373_78 },
             { energy: 0.811_486, f1: 16.574_9, f2: 3.291_72 },
             { energy: 0.824_611, f1: 16.573_8, f2: 3.211_32 },
             { energy: 0.837_949, f1: 16.571_2, f2: 3.132_55 },
             { energy: 0.851_502, f1: 16.567_8, f2: 3.056_28 },
             { energy: 0.865_274, f1: 16.564_1, f2: 2.981_54 },
             { energy: 0.879_269, f1: 16.559_8, f2: 2.908_33 },
             { energy: 0.893_491, f1: 16.554_3, f2: 2.836_1 },
             { energy: 0.907_943, f1: 16.547_8, f2: 2.765_91 },
             { energy: 0.922_628, f1: 16.541_4, f2: 2.697_71 },
             { energy: 0.937_551, f1: 16.534_2, f2: 2.629_78 },
             { energy: 0.952_715, f1: 16.525_7, f2: 2.563_47 },
             { energy: 0.968_124, f1: 16.516, f2: 2.498_76 },
             { energy: 0.983_783, f1: 16.506_1, f2: 2.436_63 },
             { energy: 0.999_695, f1: 16.496_2, f2: 2.375_44 },
             { energy: 1.015_86, f1: 16.485_3, f2: 2.315_18 },
             { energy: 1.032_29, f1: 16.473_8, f2: 2.256_57 },
             { energy: 1.048_99, f1: 16.461_8, f2: 2.199_41 },
             { energy: 1.065_96, f1: 16.449_3, f2: 2.143_67 },
             { energy: 1.083_2, f1: 16.436_5, f2: 2.089_37 },
             { energy: 1.100_72, f1: 16.423_4, f2: 2.036_24 },
             { energy: 1.118_52, f1: 16.409_8, f2: 1.984_18 },
             { energy: 1.136_61, f1: 16.395_8, f2: 1.933_25 },
             { energy: 1.155, f1: 16.381_2, f2: 1.883_64 },
             { energy: 1.173_68, f1: 16.366_2, f2: 1.835_32 },
             { energy: 1.192_66, f1: 16.351_1, f2: 1.788_17 },
             { energy: 1.211_95, f1: 16.335_7, f2: 1.742 },
             { energy: 1.231_55, f1: 16.319_7, f2: 1.696_7 },
             { energy: 1.251_47, f1: 16.303_2, f2: 1.652_59 },
             { energy: 1.271_72, f1: 16.286_3, f2: 1.609_64 },
             { energy: 1.292_29, f1: 16.269_2, f2: 1.567_81 },
             { energy: 1.313_19, f1: 16.251_6, f2: 1.526_83 },
             { energy: 1.334_43, f1: 16.233_6, f2: 1.486_9 },
             { energy: 1.356_01, f1: 16.215_2, f2: 1.448_02 },
             { energy: 1.377_94, f1: 16.196_4, f2: 1.410_17 },
             { energy: 1.400_23, f1: 16.177_4, f2: 1.373_24 },
             { energy: 1.422_88, f1: 16.157_8, f2: 1.337_16 },
             { energy: 1.445_89, f1: 16.137_8, f2: 1.302_07 },
             { energy: 1.469_28, f1: 16.117_3, f2: 1.267_89 },
             { energy: 1.493_04, f1: 16.096, f2: 1.234_58 },
             { energy: 1.517_19, f1: 16.074_3, f2: 1.202_98 },
             { energy: 1.541_73, f1: 16.052_6, f2: 1.172_34 },
             { energy: 1.566_67, f1: 16.030_7, f2: 1.142_55 },
             { energy: 1.592_01, f1: 16.008_6, f2: 1.113_52 },
             { energy: 1.617_76, f1: 15.986_2, f2: 1.085_22 },
             { energy: 1.643_92, f1: 15.963_3, f2: 1.057_65 },
             { energy: 1.670_51, f1: 15.940_1, f2: 1.030_77 },
             { energy: 1.697_53, f1: 15.916_3, f2: 1.004_58 },
             { energy: 1.724_99, f1: 15.892_2, f2: 0.979_056 },
             { energy: 1.752_89, f1: 15.867_5, f2: 0.953_791 },
             { energy: 1.781_24, f1: 15.842, f2: 0.929_05 },
             { energy: 1.810_05, f1: 15.815_6, f2: 0.904_856 },
             { energy: 1.839_32, f1: 15.788_3, f2: 0.881_295 },
             { energy: 1.869_07, f1: 15.76, f2: 0.858_348 },
             { energy: 1.899_3, f1: 15.730_7, f2: 0.836_001 },
             { energy: 1.930_02, f1: 15.700_4, f2: 0.814_232 },
             { energy: 1.961_24, f1: 15.668_8, f2: 0.793_03 },
             { energy: 1.992_96, f1: 15.64, f2: 0.772_376 },
             { energy: 2.025_2, f1: 15.604_5, f2: 0.742_744 },
             { energy: 2.057_95, f1: 15.563_1, f2: 0.722_827 },
             { energy: 2.091_24, f1: 15.521_5, f2: 0.703_634 },
             { energy: 2.125_06, f1: 15.478_4, f2: 0.684_894 },
             { energy: 2.159_43, f1: 15.432_9, f2: 0.666_586 },
             { energy: 2.194_36, f1: 15.384_5, f2: 0.648_702 },
             { energy: 2.229_85, f1: 15.332_6, f2: 0.631_215 },
             { energy: 2.265_92, f1: 15.276_6, f2: 0.614_141 },
             { energy: 2.302_57, f1: 15.215_7, f2: 0.597_456 },
             { energy: 2.339_81, f1: 15.149_1, f2: 0.581_146 },
             { energy: 2.377_66, f1: 15.075_6, f2: 0.565_2 },
             { energy: 2.416_11, f1: 14.993_6, f2: 0.549_622 },
             { energy: 2.455_19, f1: 14.901, f2: 0.534_411 },
             { energy: 2.494_9, f1: 14.795_2, f2: 0.519_541 },
             { energy: 2.535_26, f1: 14.671_9, f2: 0.505_004 },
             { energy: 2.576_26, f1: 14.525_3, f2: 0.490_797 },
             { energy: 2.617_93, f1: 14.345_5, f2: 0.476_902 },
             { energy: 2.660_27, f1: 14.115_6, f2: 0.463_341 },
             { energy: 2.703_3, f1: 13.802, f2: 0.450_062 },
             { energy: 2.747_03, f1: 13.321_9, f2: 0.437_092 },
             { energy: 2.791_46, f1: 12.348_4, f2: 0.424_409 },
             { energy: 2.822_3, f1: 5.681_02, f2: 0.415_937 },
             { energy: 2.822_5, f1: 5.682_36, f2: 4.115_07 },
             { energy: 2.836_61, f1: 11.549_9, f2: 4.085_46 },
             { energy: 2.882_49, f1: 13.328_6, f2: 3.991_6 },
             { energy: 2.929_11, f1: 14.062, f2: 3.899_01 },
             { energy: 2.976_48, f1: 14.538_7, f2: 3.807_95 },
             { energy: 3.024_63, f1: 14.894, f2: 3.718_42 },
             { energy: 3.073_55, f1: 15.177_2, f2: 3.630_08 },
             { energy: 3.123_26, f1: 15.411_9, f2: 3.543_27 },
             { energy: 3.173_78, f1: 15.611_7, f2: 3.457_9 },
             { energy: 3.225_11, f1: 15.784_9, f2: 3.374_05 },
             { energy: 3.277_27, f1: 15.937_1, f2: 3.291_65 },
             { energy: 3.330_28, f1: 16.072_2, f2: 3.210_65 },
             { energy: 3.384_15, f1: 16.193, f2: 3.131_24 },
             { energy: 3.438_88, f1: 16.301_8, f2: 3.053_37 },
             { energy: 3.494_5, f1: 16.400_2, f2: 2.977_01 },
             { energy: 3.551_02, f1: 16.489_6, f2: 2.902_15 },
             { energy: 3.608_46, f1: 16.571_1, f2: 2.828_72 },
             { energy: 3.666_82, f1: 16.645_4, f2: 2.756_78 },
             { energy: 3.726_13, f1: 16.713_5, f2: 2.686_34 },
             { energy: 3.786_4, f1: 16.776, f2: 2.617_35 },
             { energy: 3.847_64, f1: 16.833_3, f2: 2.549_81 },
             { energy: 3.909_87, f1: 16.885_9, f2: 2.483_72 },
             { energy: 3.973_11, f1: 16.934_3, f2: 2.419_07 },
             { energy: 4.037_38, f1: 16.978_9, f2: 2.355_8 },
             { energy: 4.102_68, f1: 17.019_9, f2: 2.293_96 },
             { energy: 4.169_03, f1: 17.057_5, f2: 2.233_48 },
             { energy: 4.236_46, f1: 17.092_2, f2: 2.174_4 },
             { energy: 4.304_98, f1: 17.124_1, f2: 2.116_64 },
             { energy: 4.374_62, f1: 17.153_4, f2: 2.060_2 },
             { energy: 4.445_37, f1: 17.180_2, f2: 2.005_08 },
             { energy: 4.517_27, f1: 17.204_8, f2: 1.951_25 },
             { energy: 4.590_33, f1: 17.227_4, f2: 1.898_71 },
             { energy: 4.664_58, f1: 17.248_1, f2: 1.847_38 },
             { energy: 4.740_03, f1: 17.266_9, f2: 1.797_29 },
             { energy: 4.816_69, f1: 17.284, f2: 1.748_4 },
             { energy: 4.894_6, f1: 17.299_6, f2: 1.700_74 },
             { energy: 4.973_77, f1: 17.313_7, f2: 1.654_19 },
             { energy: 5.054_21, f1: 17.326_4, f2: 1.608_81 },
             { energy: 5.135_96, f1: 17.337_8, f2: 1.564_55 },
             { energy: 5.219_03, f1: 17.348_1, f2: 1.521_42 },
             { energy: 5.303_44, f1: 17.357_2, f2: 1.479_31 },
             { energy: 5.389_22, f1: 17.365_3, f2: 1.438_31 },
             { energy: 5.476_39, f1: 17.372_4, f2: 1.398_32 },
             { energy: 5.564_97, f1: 17.378_6, f2: 1.359_36 },
             { energy: 5.654_98, f1: 17.383_9, f2: 1.321_39 },
             { energy: 5.746_44, f1: 17.388_4, f2: 1.284_42 },
             { energy: 5.839_39, f1: 17.392_2, f2: 1.248_35 },
             { energy: 5.933_83, f1: 17.395_3, f2: 1.213_26 },
             { energy: 6.029_81, f1: 17.397_7, f2: 1.179_05 },
             { energy: 6.127_33, f1: 17.399_5, f2: 1.145_78 },
             { energy: 6.226_44, f1: 17.400_7, f2: 1.113_33 },
             { energy: 6.327_15, f1: 17.401_4, f2: 1.081_77 },
             { energy: 6.429_48, f1: 17.401_6, f2: 1.051_04 },
             { energy: 6.533_48, f1: 17.401_4, f2: 1.021_14 },
             { energy: 6.639_15, f1: 17.400_7, f2: 0.991_99 },
             { energy: 6.746_54, f1: 17.399_6, f2: 0.963_658 },
             { energy: 6.855_65, f1: 17.398_1, f2: 0.936_072 },
             { energy: 6.966_54, f1: 17.396_3, f2: 0.909_242 },
             { energy: 7.079_22, f1: 17.394_2, f2: 0.883_124 },
             { energy: 7.193_72, f1: 17.391_7, f2: 0.857_693 },
             { energy: 7.310_07, f1: 17.389, f2: 0.832_967 },
             { energy: 7.428_31, f1: 17.386_1, f2: 0.808_936 },
             { energy: 7.548_45, f1: 17.382_9, f2: 0.785_542 },
             { energy: 7.670_54, f1: 17.379_5, f2: 0.762_805 },
             { energy: 7.794_61, f1: 17.375_9, f2: 0.740_674 },
             { energy: 7.920_68, f1: 17.372_1, f2: 0.719_133 },
             { energy: 8.048_79, f1: 17.368_2, f2: 0.698_207 },
             { energy: 8.178_98, f1: 17.364_1, f2: 0.677_863 },
             { energy: 8.311_26, f1: 17.359_8, f2: 0.658_099 },
             { energy: 8.445_69, f1: 17.355_5, f2: 0.638_867 },
             { energy: 8.582_29, f1: 17.351, f2: 0.620_175 },
             { energy: 8.721_11, f1: 17.346_5, f2: 0.601_998 },
             { energy: 8.862_16, f1: 17.341_9, f2: 0.584_334 },
             { energy: 9.005_5, f1: 17.337_1, f2: 0.567_166 },
             { energy: 9.151_16, f1: 17.332_4, f2: 0.550_47 },
             { energy: 9.299_17, f1: 17.327_5, f2: 0.534_254 },
             { energy: 9.449_58, f1: 17.322_6, f2: 0.518_495 },
             { energy: 9.602_42, f1: 17.317_7, f2: 0.503_175 },
             { energy: 9.757_73, f1: 17.312_8, f2: 0.488_293 },
             { energy: 9.915_55, f1: 17.307_8, f2: 0.473_831 },
             { energy: 10.075_9, f1: 17.302_8, f2: 0.459_779 },
             { energy: 10.238_9, f1: 17.297_8, f2: 0.446_128 },
             { energy: 10.404_5, f1: 17.292_8, f2: 0.432_865 },
             { energy: 10.572_8, f1: 17.287_7, f2: 0.419_979 },
             { energy: 10.743_8, f1: 17.282_7, f2: 0.407_462 },
             { energy: 10.917_6, f1: 17.277_7, f2: 0.395_303 },
             { energy: 11.094_2, f1: 17.272_7, f2: 0.383_492 },
             { energy: 11.273_6, f1: 17.267_8, f2: 0.372_02 },
             { energy: 11.455_9, f1: 17.262_8, f2: 0.360_877 },
             { energy: 11.641_2, f1: 17.257_9, f2: 0.350_055 },
             { energy: 11.829_5, f1: 17.253, f2: 0.339_544 },
             { energy: 12.020_8, f1: 17.248_1, f2: 0.329_336 },
             { energy: 12.215_3, f1: 17.243_3, f2: 0.319_422 },
             { energy: 12.412_8, f1: 17.238_5, f2: 0.309_795 },
             { energy: 12.613_6, f1: 17.233_8, f2: 0.300_447 },
             { energy: 12.817_6, f1: 17.229_1, f2: 0.291_369 },
             { energy: 13.025, f1: 17.224_4, f2: 0.282_554 },
             { energy: 13.235_6, f1: 17.219_8, f2: 0.273_995 },
             { energy: 13.449_7, f1: 17.215_2, f2: 0.265_684 },
             { energy: 13.667_2, f1: 17.210_7, f2: 0.257_615 },
             { energy: 13.888_3, f1: 17.206_2, f2: 0.249_78 },
             { energy: 14.112_9, f1: 17.201_8, f2: 0.242_174 },
             { energy: 14.341_2, f1: 17.197_5, f2: 0.234_79 },
             { energy: 14.573_1, f1: 17.193_2, f2: 0.227_62 },
             { energy: 14.808_9, f1: 17.188_9, f2: 0.220_66 },
             { energy: 15.048_4, f1: 17.184_7, f2: 0.213_904 },
             { energy: 15.291_8, f1: 17.180_6, f2: 0.207_345 },
             { energy: 15.539_1, f1: 17.176_5, f2: 0.200_977 },
             { energy: 15.790_4, f1: 17.172_4, f2: 0.194_796 },
             { energy: 16.045_8, f1: 17.168_5, f2: 0.188_797 },
             { energy: 16.305_4, f1: 17.164_6, f2: 0.182_973 },
             { energy: 16.569_1, f1: 17.160_7, f2: 0.177_32 },
             { energy: 16.837_1, f1: 17.156_9, f2: 0.171_833 },
             { energy: 17.109_4, f1: 17.153_2, f2: 0.166_507 },
             { energy: 17.386_1, f1: 17.149_5, f2: 0.161_337 },
             { energy: 17.667_4, f1: 17.145_8, f2: 0.156_32 },
             { energy: 17.953_1, f1: 17.142_3, f2: 0.151_45 },
             { energy: 18.243_5, f1: 17.138_8, f2: 0.146_723 },
             { energy: 18.538_6, f1: 17.135_3, f2: 0.142_136 },
             { energy: 18.838_4, f1: 17.131_9, f2: 0.137_683 },
             { energy: 19.143_1, f1: 17.128_6, f2: 0.133_362 },
             { energy: 19.452_7, f1: 17.125_3, f2: 0.129_168 },
             { energy: 19.767_4, f1: 17.122_1, f2: 0.125_098 },
             { energy: 20.087_1, f1: 17.118_9, f2: 0.121_156 },
             { energy: 20.412, f1: 17.115_7, f2: 0.117_324 },
             { energy: 20.742_1, f1: 17.112_7, f2: 0.113_609 },
             { energy: 21.077_6, f1: 17.109_7, f2: 0.110_007 },
             { energy: 21.418_5, f1: 17.106_7, f2: 0.106_515 },
             { energy: 21.765, f1: 17.103_8, f2: 0.103_129 },
             { energy: 22.117, f1: 17.100_9, f2: 0.099_846_6 },
             { energy: 22.474_7, f1: 17.098_1, f2: 0.096_664_9 },
             { energy: 22.838_2, f1: 17.095_3, f2: 0.093_580_5 },
             { energy: 23.207_6, f1: 17.092_6, f2: 0.090_590_9 },
             { energy: 23.583, f1: 17.09, f2: 0.087_693 },
             { energy: 23.964_4, f1: 17.087_4, f2: 0.084_884_5 },
             { energy: 24.352, f1: 17.084_8, f2: 0.082_162_4 },
             { energy: 24.745_9, f1: 17.082_3, f2: 0.079_524_4 },
             { energy: 25.146_2, f1: 17.079_9, f2: 0.076_967_9 },
             { energy: 25.552_9, f1: 17.077_5, f2: 0.074_490_5 },
             { energy: 25.966_2, f1: 17.075_1, f2: 0.072_09 },
             { energy: 26.386_1, f1: 17.072_8, f2: 0.069_763_8 },
             { energy: 26.812_9, f1: 17.070_5, f2: 0.067_51 },
             { energy: 27.246_6, f1: 17.068_3, f2: 0.065_326_2 },
             { energy: 27.687_3, f1: 17.066_1, f2: 0.063_210_6 },
             { energy: 28.135_1, f1: 17.064, f2: 0.061_160_8 },
             { energy: 28.590_2, f1: 17.061_9, f2: 0.059_175_1 },
             { energy: 29.052_6, f1: 17.059_9, f2: 0.057_251_6 },
             { energy: 29.522_5, f1: 17.057_9, f2: 0.055_388_2 },
             { energy: 30.0, f1: 17.055_9, f2: 0.053_583_3 },
        ]
    },
    neutron_scattering: {
        b_c: { value: 9.579_2, uncertainty: 0.000_8},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 11.528, uncertainty: 0.002},
        bound_incoherent_scattering_xs: { value: 5.3, uncertainty: 0.5},
        total_bound_scattering_xs: { value: 16.8, uncertainty: 0.5},
        absorption_xs: { value: 33.5, uncertainty: 0.3},
    },
    isotopes: [
        { 
            mass_number: 28,
            mass: { value: 28.028_51, uncertainty: 0.000_54},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 29,
            mass: { value: 29.014_11, uncertainty: 0.000_21},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 30,
            mass: { value: 30.004_77, uncertainty: 0.000_21},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 31,
            mass: { value: 30.992_42, uncertainty: 0.000_50},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 32,
            mass: { value: 31.985_689, uncertainty: 0.000_007},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 33,
            mass: { value: 32.977_451_8, uncertainty: 0.000_000_6},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 34,
            mass: { value: 33.973_761_97, uncertainty: 0.000_000_13},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 35,
            mass: { value: 34.968_852_71, uncertainty: 0.000_000_04},
            abundance: { value: 75.78, uncertainty: 0.04},
            neutron_scattering: {
                    b_c: { value: 11.7, uncertainty: 0.9},
                    b_p: { value: 16.3, uncertainty: 0.2},
                    b_m: { value: 4.0, uncertainty: 0.3},
                    bound_coherent_scattering_xs: { value: 17.06, uncertainty: 0.06},
                    bound_incoherent_scattering_xs: { value: 4.7, uncertainty: 0.6},
                    total_bound_scattering_xs: { value: 21.8, uncertainty: 0.6},
                    absorption_xs: { value: 44.1, uncertainty: 0.4},
                },
        },
        { 
            mass_number: 36,
            mass: { value: 35.968_306_95, uncertainty: 0.000_000_08},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 37,
            mass: { value: 36.965_902_6, uncertainty: 0.000_000_5},
            abundance: { value: 24.22, uncertainty: 0.04},
            neutron_scattering: {
                    b_c: { value: 3.08, uncertainty: 0.06},
                    b_p: { value: 3.1, uncertainty: 0.7},
                    b_m: { value: 3.05, uncertainty: 0.07},
                    bound_coherent_scattering_xs: { value: 1.19, uncertainty: 0.05},
                    bound_incoherent_scattering_xs: { value: 0.001, uncertainty: 0.003},
                    total_bound_scattering_xs: { value: 1.19, uncertainty: 0.05},
                    absorption_xs: { value: 0.433, uncertainty: 0.006},
                },
        },
        { 
            mass_number: 38,
            mass: { value: 37.968_010_55, uncertainty: 0.000_000_12},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 39,
            mass: { value: 38.968_007_7, uncertainty: 0.000_001_9},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 40,
            mass: { value: 39.970_42, uncertainty: 0.000_30},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 41,
            mass: { value: 40.970_65, uncertainty: 0.000_70},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 42,
            mass: { value: 41.973_17, uncertainty: 0.000_12},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 43,
            mass: { value: 42.974_2, uncertainty: 0.001_7},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 44,
            mass: { value: 43.978_54, uncertainty: 0.000_24},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 45,
            mass: { value: 44.979_7, uncertainty: 0.007_0},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 46,
            mass: { value: 45.984_12, uncertainty: 0.000_54},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 47,
            mass: { value: 46.987_95, uncertainty: 0.000_64},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 48,
            mass: { value: 47.994_85, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 49,
            mass: { value: 48.999_89, uncertainty: 0.000_86},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 50,
            mass: { value: 50.007_73, uncertainty: 0.000_97},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 51,
            mass: { value: 51.013_53, uncertainty: 0.001_07},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Cl};