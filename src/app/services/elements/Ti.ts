const Ti = {
    atomic_number: 22,
    name: 'Titanium',
    symbol: 'Ti',
    mass: 47.867,
    common_ions: [4],
    uncommon_ions: [-2, -1, 1, 2, 3],
    xray_scattering: [
         { energy: 0.01, f1: undefined, f2: 1.516_68 },
         { energy: 0.010_142_8, f1: undefined, f2: 1.542_46 },
         { energy: 0.010_306_8, f1: undefined, f2: 1.572_17 },
         { energy: 0.010_473_5, f1: undefined, f2: 1.602_45 },
         { energy: 0.010_642_9, f1: undefined, f2: 1.633_31 },
         { energy: 0.010_815_1, f1: undefined, f2: 1.664_77 },
         { energy: 0.010_99, f1: undefined, f2: 1.706_36 },
         { energy: 0.011_167_7, f1: undefined, f2: 1.752_57 },
         { energy: 0.011_348_4, f1: undefined, f2: 1.800_03 },
         { energy: 0.011_531_9, f1: undefined, f2: 1.848_78 },
         { energy: 0.011_718_4, f1: undefined, f2: 1.898_85 },
         { energy: 0.011_908, f1: undefined, f2: 1.950_27 },
         { energy: 0.012_100_6, f1: undefined, f2: 2.003_09 },
         { energy: 0.012_296_3, f1: undefined, f2: 2.057_33 },
         { energy: 0.012_495_2, f1: undefined, f2: 2.112_78 },
         { energy: 0.012_697_3, f1: undefined, f2: 2.161_86 },
         { energy: 0.012_902_6, f1: undefined, f2: 2.212_07 },
         { energy: 0.013_111_3, f1: undefined, f2: 2.263_45 },
         { energy: 0.013_323_4, f1: undefined, f2: 2.316_02 },
         { energy: 0.013_538_9, f1: undefined, f2: 2.369_81 },
         { energy: 0.013_757_9, f1: undefined, f2: 2.424_85 },
         { energy: 0.013_980_4, f1: undefined, f2: 2.467_58 },
         { energy: 0.014_206_5, f1: undefined, f2: 2.479_59 },
         { energy: 0.014_436_3, f1: undefined, f2: 2.491_66 },
         { energy: 0.014_669_8, f1: undefined, f2: 2.503_79 },
         { energy: 0.014_907_1, f1: undefined, f2: 2.515_98 },
         { energy: 0.015_148_2, f1: undefined, f2: 2.528_23 },
         { energy: 0.015_393_2, f1: undefined, f2: 2.540_54 },
         { energy: 0.015_642_2, f1: undefined, f2: 2.552_91 },
         { energy: 0.015_895_2, f1: undefined, f2: 2.565_34 },
         { energy: 0.016_152_3, f1: undefined, f2: 2.577_83 },
         { energy: 0.016_413_5, f1: undefined, f2: 2.590_38 },
         { energy: 0.016_679, f1: undefined, f2: 2.602_99 },
         { energy: 0.016_948_7, f1: undefined, f2: 2.595_44 },
         { energy: 0.017_222_9, f1: undefined, f2: 2.580_59 },
         { energy: 0.017_501_4, f1: undefined, f2: 2.565_82 },
         { energy: 0.017_784_5, f1: undefined, f2: 2.551_13 },
         { energy: 0.018_072_2, f1: undefined, f2: 2.536_53 },
         { energy: 0.018_364_5, f1: undefined, f2: 2.522_01 },
         { energy: 0.018_661_5, f1: undefined, f2: 2.507_58 },
         { energy: 0.018_963_3, f1: undefined, f2: 2.452_38 },
         { energy: 0.019_270_1, f1: 3.133_34, f2: 2.392_74 },
         { energy: 0.019_581_7, f1: 3.160_3, f2: 2.334_55 },
         { energy: 0.019_898_5, f1: 3.177_54, f2: 2.277_77 },
         { energy: 0.020_220_3, f1: 3.199_99, f2: 2.222_38 },
         { energy: 0.020_547_3, f1: 3.215_35, f2: 2.137_94 },
         { energy: 0.020_879_7, f1: 3.214_28, f2: 2.046_11 },
         { energy: 0.021_217_4, f1: 3.181_3, f2: 1.958_23 },
         { energy: 0.021_560_6, f1: 3.121_96, f2: 1.874_11 },
         { energy: 0.021_909_3, f1: 3.048_48, f2: 1.793_62 },
         { energy: 0.022_263_7, f1: 2.965_42, f2: 1.743_55 },
         { energy: 0.022_623_7, f1: 2.877_85, f2: 1.723_43 },
         { energy: 0.022_989_7, f1: 2.803_51, f2: 1.703_54 },
         { energy: 0.023_361_5, f1: 2.731_5, f2: 1.683_89 },
         { energy: 0.023_739_4, f1: 2.658_65, f2: 1.664_46 },
         { energy: 0.024_123_3, f1: 2.583_63, f2: 1.645_26 },
         { energy: 0.024_513_5, f1: 2.505_74, f2: 1.626_28 },
         { energy: 0.024_91, f1: 2.423_7, f2: 1.607_51 },
         { energy: 0.025_312_9, f1: 2.337_52, f2: 1.587_1 },
         { energy: 0.025_722_3, f1: 2.244_65, f2: 1.560_26 },
         { energy: 0.026_138_3, f1: 2.139_67, f2: 1.533_87 },
         { energy: 0.026_561_1, f1: 2.023_87, f2: 1.507_93 },
         { energy: 0.026_990_7, f1: 1.896_55, f2: 1.482_43 },
         { energy: 0.027_427_3, f1: 1.755_6, f2: 1.457_36 },
         { energy: 0.027_870_9, f1: 1.599_58, f2: 1.432_71 },
         { energy: 0.028_321_7, f1: 1.426_75, f2: 1.409 },
         { energy: 0.028_779_7, f1: 1.234_38, f2: 1.388_33 },
         { energy: 0.029_245_2, f1: 1.019_64, f2: 1.367_96 },
         { energy: 0.029_718_3, f1: 0.776_87, f2: 1.347_9 },
         { energy: 0.030_198_9, f1: 0.498_063, f2: 1.328_12 },
         { energy: 0.030_687_4, f1: 0.170_83, f2: 1.308_64 },
         { energy: 0.031_183_7, f1: -0.227_176, f2: 1.289_44 },
         { energy: 0.031_688_1, f1: -0.749_109, f2: 1.270_53 },
         { energy: 0.032_028_9, f1: -1.291_37, f2: 1.258_07 },
         { energy: 0.032_456_6, f1: -2.003_26, f2: 1.749_55 },
         { energy: 0.032_89, f1: -2.447_02, f2: 2.390_63 },
         { energy: 0.033_317_5, f1: -2.622_89, f2: 3.119_58 },
         { energy: 0.033_856_4, f1: -2.531_27, f2: 3.580_41 },
         { energy: 0.034_404, f1: -2.448_7, f2: 3.982_57 },
         { energy: 0.034_960_4, f1: -2.781_37, f2: 4.150_24 },
         { energy: 0.035_525_9, f1: -3.265_98, f2: 4.379_54 },
         { energy: 0.036_100_5, f1: -3.779_84, f2: 4.982_16 },
         { energy: 0.036_684_4, f1: -4.238_79, f2: 5.667_71 },
         { energy: 0.037_277_7, f1: -4.716_74, f2: 6.458_04 },
         { energy: 0.037_880_7, f1: -5.106_33, f2: 7.605_04 },
         { energy: 0.038_493_4, f1: -5.312_14, f2: 8.948_82 },
         { energy: 0.039_116, f1: -5.211_45, f2: 10.126_1 },
         { energy: 0.039_748_6, f1: -5.083_63, f2: 11.458_2 },
         { energy: 0.040_391_5, f1: -4.787_42, f2: 12.959_3 },
         { energy: 0.041_044_8, f1: -3.582_89, f2: 14.646_6 },
         { energy: 0.041_708_7, f1: -2.091_92, f2: 15.520_6 },
         { energy: 0.042_383_3, f1: -0.752_391, f2: 16.097 },
         { energy: 0.043_068_8, f1: 0.146_311, f2: 16.694_9 },
         { energy: 0.043_765_4, f1: 1.317_06, f2: 17.315 },
         { energy: 0.044_473_3, f1: 2.527_77, f2: 17.646_4 },
         { energy: 0.045_192_6, f1: 3.667_19, f2: 17.931_8 },
         { energy: 0.045_923_6, f1: 4.812_43, f2: 18.221_8 },
         { energy: 0.046_666_4, f1: 6.129_84, f2: 18.516_5 },
         { energy: 0.047_421_1, f1: 7.494_42, f2: 18.490_9 },
         { energy: 0.048_188_1, f1: 8.813_49, f2: 18.465_4 },
         { energy: 0.048_967_5, f1: 10.375_1, f2: 18.439_9 },
         { energy: 0.049_759_6, f1: 12.034_5, f2: 17.804_6 },
         { energy: 0.050_564_4, f1: 13.588_4, f2: 16.762_6 },
         { energy: 0.051_382_2, f1: 14.828_6, f2: 15.781_6 },
         { energy: 0.052_213_3, f1: 15.705_3, f2: 14.491_5 },
         { energy: 0.053_057_8, f1: 16.349_3, f2: 13.059_9 },
         { energy: 0.053_916, f1: 16.780_1, f2: 11.769_8 },
         { energy: 0.054_788, f1: 16.951_4, f2: 10.438_2 },
         { energy: 0.055_674_2, f1: 17.039, f2: 9.257_36 },
         { energy: 0.056_574_6, f1: 16.990_5, f2: 8.210_06 },
         { energy: 0.057_489_7, f1: 16.728_2, f2: 6.927_55 },
         { energy: 0.058_419_5, f1: 16.062, f2: 5.845_41 },
         { energy: 0.059_364_4, f1: 15.512_8, f2: 5.408_26 },
         { energy: 0.060_324_6, f1: 15.027_6, f2: 5.081_21 },
         { energy: 0.061_300_3, f1: 14.630_3, f2: 4.773_94 },
         { energy: 0.062_291_8, f1: 14.396_2, f2: 4.469_28 },
         { energy: 0.063_299_3, f1: 14.086_5, f2: 4.076_07 },
         { energy: 0.064_323_1, f1: 13.761_3, f2: 3.717_46 },
         { energy: 0.065_363_5, f1: 13.436_4, f2: 3.503_93 },
         { energy: 0.066_420_7, f1: 13.115_3, f2: 3.320_84 },
         { energy: 0.067_495, f1: 12.793_9, f2: 3.147_33 },
         { energy: 0.068_586_7, f1: 12.493_3, f2: 3.063_14 },
         { energy: 0.069_696, f1: 12.238_6, f2: 2.994_45 },
         { energy: 0.070_823_3, f1: 12.037_8, f2: 2.927_29 },
         { energy: 0.071_968_8, f1: 11.835_6, f2: 2.861_63 },
         { energy: 0.073_132_8, f1: 11.642_6, f2: 2.797_45 },
         { energy: 0.074_315_7, f1: 11.451_2, f2: 2.779_29 },
         { energy: 0.075_517_7, f1: 11.284_4, f2: 2.779_17 },
         { energy: 0.076_739_1, f1: 11.142_6, f2: 2.779_06 },
         { energy: 0.077_980_3, f1: 11.014_4, f2: 2.778_94 },
         { energy: 0.079_241_6, f1: 10.891_8, f2: 2.778_82 },
         { energy: 0.080_523_3, f1: 10.775_1, f2: 2.783_37 },
         { energy: 0.081_825_7, f1: 10.669_2, f2: 2.816_17 },
         { energy: 0.083_149_1, f1: 10.576_3, f2: 2.849_35 },
         { energy: 0.084_494, f1: 10.502_6, f2: 2.882_93 },
         { energy: 0.085_860_6, f1: 10.441_2, f2: 2.916_9 },
         { energy: 0.087_249_3, f1: 10.390_2, f2: 2.951_27 },
         { energy: 0.088_660_5, f1: 10.350_4, f2: 2.986_05 },
         { energy: 0.090_094_5, f1: 10.326_4, f2: 3.021_24 },
         { energy: 0.091_551_7, f1: 10.303_4, f2: 3.035_34 },
         { energy: 0.093_032_5, f1: 10.282_7, f2: 3.048_85 },
         { energy: 0.094_537_2, f1: 10.263_6, f2: 3.062_43 },
         { energy: 0.096_066_3, f1: 10.244_3, f2: 3.076_07 },
         { energy: 0.097_620_1, f1: 10.227_5, f2: 3.089_77 },
         { energy: 0.099_199, f1: 10.213_2, f2: 3.103_53 },
         { energy: 0.100_803, f1: 10.201_3, f2: 3.117_35 },
         { energy: 0.102_434, f1: 10.192, f2: 3.131_23 },
         { energy: 0.104_091, f1: 10.185_9, f2: 3.145_17 },
         { energy: 0.105_774, f1: 10.181_7, f2: 3.156_95 },
         { energy: 0.107_485, f1: 10.178_5, f2: 3.168_46 },
         { energy: 0.109_224, f1: 10.175_6, f2: 3.180_01 },
         { energy: 0.110_99, f1: 10.174_1, f2: 3.191_6 },
         { energy: 0.112_785, f1: 10.173_6, f2: 3.203_23 },
         { energy: 0.114_61, f1: 10.174, f2: 3.214_91 },
         { energy: 0.116_463, f1: 10.174_9, f2: 3.226_63 },
         { energy: 0.118_347, f1: 10.175_9, f2: 3.238_39 },
         { energy: 0.120_261, f1: 10.175_9, f2: 3.250_19 },
         { energy: 0.122_206, f1: 10.169_4, f2: 3.262_04 },
         { energy: 0.124_183, f1: 10.168_1, f2: 3.290_6 },
         { energy: 0.126_191, f1: 10.173_7, f2: 3.320_2 },
         { energy: 0.128_232, f1: 10.184_2, f2: 3.350_07 },
         { energy: 0.130_307, f1: 10.199_9, f2: 3.380_2 },
         { energy: 0.132_414, f1: 10.220_6, f2: 3.410_61 },
         { energy: 0.134_556, f1: 10.246_4, f2: 3.441_29 },
         { energy: 0.136_732, f1: 10.278_9, f2: 3.472_25 },
         { energy: 0.138_944, f1: 10.324, f2: 3.492_62 },
         { energy: 0.141_191, f1: 10.361_2, f2: 3.502_81 },
         { energy: 0.143_475, f1: 10.395_5, f2: 3.513_03 },
         { energy: 0.145_795, f1: 10.429, f2: 3.523_27 },
         { energy: 0.148_153, f1: 10.462_7, f2: 3.533_56 },
         { energy: 0.150_55, f1: 10.497, f2: 3.543_87 },
         { energy: 0.152_985, f1: 10.532_4, f2: 3.554_21 },
         { energy: 0.155_459, f1: 10.569, f2: 3.564_58 },
         { energy: 0.157_973, f1: 10.608_9, f2: 3.574_98 },
         { energy: 0.160_529, f1: 10.656_3, f2: 3.585_41 },
         { energy: 0.163_125, f1: 10.706_1, f2: 3.595_87 },
         { energy: 0.165_763, f1: 10.756_7, f2: 3.586_65 },
         { energy: 0.168_444, f1: 10.804_4, f2: 3.572_6 },
         { energy: 0.171_169, f1: 10.845_1, f2: 3.558_6 },
         { energy: 0.173_937, f1: 10.882_7, f2: 3.544_65 },
         { energy: 0.176_751, f1: 10.918_3, f2: 3.530_76 },
         { energy: 0.179_609, f1: 10.951_1, f2: 3.516_93 },
         { energy: 0.182_515, f1: 10.981_9, f2: 3.503_86 },
         { energy: 0.185_467, f1: 11.012_6, f2: 3.494_18 },
         { energy: 0.188_466, f1: 11.044_6, f2: 3.484_53 },
         { energy: 0.191_515, f1: 11.080_8, f2: 3.474_91 },
         { energy: 0.194_612, f1: 11.119_4, f2: 3.465_32 },
         { energy: 0.197_76, f1: 11.160_3, f2: 3.455_75 },
         { energy: 0.200_959, f1: 11.208_2, f2: 3.429_41 },
         { energy: 0.204_209, f1: 11.246_1, f2: 3.395_22 },
         { energy: 0.207_512, f1: 11.277_1, f2: 3.361_37 },
         { energy: 0.210_868, f1: 11.304_2, f2: 3.327_85 },
         { energy: 0.214_279, f1: 11.329_6, f2: 3.294_68 },
         { energy: 0.217_745, f1: 11.354_9, f2: 3.261_83 },
         { energy: 0.221_266, f1: 11.376_9, f2: 3.215_78 },
         { energy: 0.224_845, f1: 11.393_1, f2: 3.170_17 },
         { energy: 0.228_482, f1: 11.399_2, f2: 3.125_2 },
         { energy: 0.232_177, f1: 11.396_1, f2: 3.080_87 },
         { energy: 0.235_933, f1: 11.388_2, f2: 3.037_18 },
         { energy: 0.239_749, f1: 11.377_7, f2: 3.006_42 },
         { energy: 0.243_626, f1: 11.367_3, f2: 2.977_71 },
         { energy: 0.247_567, f1: 11.357_7, f2: 2.949_27 },
         { energy: 0.251_571, f1: 11.347_8, f2: 2.921_1 },
         { energy: 0.255_64, f1: 11.338_1, f2: 2.893_2 },
         { energy: 0.259_775, f1: 11.328_6, f2: 2.860_43 },
         { energy: 0.263_977, f1: 11.312_3, f2: 2.824_26 },
         { energy: 0.268_246, f1: 11.291_6, f2: 2.788_54 },
         { energy: 0.272_585, f1: 11.266_6, f2: 2.753_27 },
         { energy: 0.276_994, f1: 11.237_1, f2: 2.718_45 },
         { energy: 0.281_474, f1: 11.203_4, f2: 2.683_21 },
         { energy: 0.286_026, f1: 11.165_1, f2: 2.648_29 },
         { energy: 0.290_653, f1: 11.121_9, f2: 2.613_82 },
         { energy: 0.295_354, f1: 11.073_6, f2: 2.579_8 },
         { energy: 0.300_131, f1: 11.020_2, f2: 2.546_23 },
         { energy: 0.304_985, f1: 10.961_3, f2: 2.513_08 },
         { energy: 0.309_918, f1: 10.897, f2: 2.480_15 },
         { energy: 0.314_931, f1: 10.825_9, f2: 2.446_88 },
         { energy: 0.320_025, f1: 10.747_5, f2: 2.414_05 },
         { energy: 0.325_201, f1: 10.661_4, f2: 2.381_66 },
         { energy: 0.330_461, f1: 10.567_1, f2: 2.349_71 },
         { energy: 0.335_805, f1: 10.463_8, f2: 2.318_19 },
         { energy: 0.341_237, f1: 10.351, f2: 2.287_09 },
         { energy: 0.346_756, f1: 10.228_4, f2: 2.256_41 },
         { energy: 0.352_365, f1: 10.097_5, f2: 2.226_13 },
         { energy: 0.358_064, f1: 9.948_67, f2: 2.183_73 },
         { energy: 0.363_855, f1: 9.779_37, f2: 2.137_16 },
         { energy: 0.369_74, f1: 9.585_73, f2: 2.091_59 },
         { energy: 0.375_72, f1: 9.361_53, f2: 2.046_99 },
         { energy: 0.381_797, f1: 9.105_32, f2: 2.003_34 },
         { energy: 0.387_973, f1: 8.805_39, f2: 1.964_29 },
         { energy: 0.394_248, f1: 8.471_57, f2: 1.938_74 },
         { energy: 0.400_625, f1: 8.090_59, f2: 1.910_89 },
         { energy: 0.407_104, f1: 7.642_72, f2: 1.882_44 },
         { energy: 0.413_689, f1: 7.105_25, f2: 1.854_43 },
         { energy: 0.420_38, f1: 6.443_14, f2: 1.826_82 },
         { energy: 0.427_179, f1: 5.594_77, f2: 1.799_62 },
         { energy: 0.434_089, f1: 4.439_93, f2: 1.772_82 },
         { energy: 0.441_11, f1: 2.690_19, f2: 1.746_43 },
         { energy: 0.448_244, f1: -0.736_873, f2: 1.720_44 },
         { energy: 0.453_7, f1: -18.271_4, f2: 1.701_1 },
         { energy: 0.453_9, f1: -18.25, f2: 15.641_3 },
         { energy: 0.455_494, f1: -5.608_49, f2: 15.577_9 },
         { energy: 0.462_861, f1: 2.112_85, f2: 15.290_9 },
         { energy: 0.470_348, f1: 4.979_94, f2: 15.009_2 },
         { energy: 0.477_955, f1: 6.806_46, f2: 14.732_7 },
         { energy: 0.485_686, f1: 8.152_51, f2: 14.461_2 },
         { energy: 0.493_541, f1: 9.215_52, f2: 14.194_7 },
         { energy: 0.501_524, f1: 10.088_6, f2: 13.933_3 },
         { energy: 0.509_636, f1: 10.822_3, f2: 13.676_7 },
         { energy: 0.517_879, f1: 11.446_1, f2: 13.424_6 },
         { energy: 0.526_255, f1: 11.977, f2: 13.176_9 },
         { energy: 0.534_767, f1: 12.425_1, f2: 12.934_2 },
         { energy: 0.543_416, f1: 12.824_2, f2: 12.696_1 },
         { energy: 0.552_206, f1: 12.891_1, f2: 12.462_3 },
         { energy: 0.561_137, f1: 12.871_9, f2: 12.632_2 },
         { energy: 0.570_213, f1: 13.021_6, f2: 12.994_6 },
         { energy: 0.579_436, f1: 13.722, f2: 13.367_5 },
         { energy: 0.588_808, f1: 14.671_7, f2: 13.352_3 },
         { energy: 0.598_331, f1: 15.363_6, f2: 13.096_5 },
         { energy: 0.608_009, f1: 15.826_7, f2: 12.845_5 },
         { energy: 0.617_843, f1: 16.252_6, f2: 12.599_4 },
         { energy: 0.627_836, f1: 16.640_9, f2: 12.357_3 },
         { energy: 0.637_99, f1: 17.002_5, f2: 12.111_9 },
         { energy: 0.648_309, f1: 17.334_5, f2: 11.860_1 },
         { energy: 0.658_795, f1: 17.634_3, f2: 11.606_3 },
         { energy: 0.669_451, f1: 17.881_7, f2: 11.357_4 },
         { energy: 0.680_279, f1: 18.102_2, f2: 11.139 },
         { energy: 0.691_282, f1: 18.322_4, f2: 10.943_3 },
         { energy: 0.702_463, f1: 18.569_2, f2: 10.754 },
         { energy: 0.713_824, f1: 18.814_3, f2: 10.542 },
         { energy: 0.725_37, f1: 19.033_5, f2: 10.317 },
         { energy: 0.737_102, f1: 19.224, f2: 10.096_9 },
         { energy: 0.749_024, f1: 19.403_1, f2: 9.881_38 },
         { energy: 0.761_139, f1: 19.570_8, f2: 9.670_34 },
         { energy: 0.773_45, f1: 19.730_1, f2: 9.463_05 },
         { energy: 0.785_96, f1: 19.880_3, f2: 9.257_5 },
         { energy: 0.798_672, f1: 20.019_5, f2: 9.054_28 },
         { energy: 0.811_59, f1: 20.148_2, f2: 8.855_54 },
         { energy: 0.824_717, f1: 20.269_1, f2: 8.661_12 },
         { energy: 0.838_056, f1: 20.382_8, f2: 8.470_97 },
         { energy: 0.851_611, f1: 20.490_3, f2: 8.284_27 },
         { energy: 0.865_385, f1: 20.591_5, f2: 8.100_92 },
         { energy: 0.879_382, f1: 20.686_3, f2: 7.920_99 },
         { energy: 0.893_605, f1: 20.775_1, f2: 7.744_98 },
         { energy: 0.908_058, f1: 20.859_2, f2: 7.572_9 },
         { energy: 0.922_746, f1: 20.940_3, f2: 7.404_69 },
         { energy: 0.937_67, f1: 21.017_5, f2: 7.235_1 },
         { energy: 0.952_836, f1: 21.088_1, f2: 7.068_18 },
         { energy: 0.968_248, f1: 21.152_8, f2: 6.904_07 },
         { energy: 0.983_908, f1: 21.211_6, f2: 6.743_78 },
         { energy: 0.999_822, f1: 21.266, f2: 6.587_36 },
         { energy: 1.015_99, f1: 21.316, f2: 6.434_71 },
         { energy: 1.032_43, f1: 21.364_5, f2: 6.286_8 },
         { energy: 1.049_13, f1: 21.411_3, f2: 6.140_09 },
         { energy: 1.066_09, f1: 21.453_7, f2: 5.994_5 },
         { energy: 1.083_34, f1: 21.490_5, f2: 5.852_39 },
         { energy: 1.100_86, f1: 21.524_3, f2: 5.713_66 },
         { energy: 1.118_66, f1: 21.555_3, f2: 5.578_24 },
         { energy: 1.136_76, f1: 21.583_5, f2: 5.445_97 },
         { energy: 1.155_14, f1: 21.609_1, f2: 5.316_87 },
         { energy: 1.173_83, f1: 21.632_6, f2: 5.190_86 },
         { energy: 1.192_81, f1: 21.654, f2: 5.067_78 },
         { energy: 1.212_11, f1: 21.673_6, f2: 4.947_63 },
         { energy: 1.231_71, f1: 21.691_8, f2: 4.830_34 },
         { energy: 1.251_63, f1: 21.709_3, f2: 4.714_64 },
         { energy: 1.271_88, f1: 21.725_2, f2: 4.600_49 },
         { energy: 1.292_45, f1: 21.738_5, f2: 4.487_67 },
         { energy: 1.313_35, f1: 21.748_5, f2: 4.377_62 },
         { energy: 1.334_6, f1: 21.756_9, f2: 4.270_23 },
         { energy: 1.356_18, f1: 21.763_7, f2: 4.165_44 },
         { energy: 1.378_12, f1: 21.768_9, f2: 4.063_26 },
         { energy: 1.400_41, f1: 21.772_9, f2: 3.963_58 },
         { energy: 1.423_06, f1: 21.775_8, f2: 3.866_32 },
         { energy: 1.446_07, f1: 21.778, f2: 3.771_51 },
         { energy: 1.469_46, f1: 21.779_9, f2: 3.678_58 },
         { energy: 1.493_23, f1: 21.781_5, f2: 3.587_26 },
         { energy: 1.517_38, f1: 21.781_9, f2: 3.495_28 },
         { energy: 1.541_93, f1: 21.779_3, f2: 3.405_31 },
         { energy: 1.566_86, f1: 21.775, f2: 3.317_69 },
         { energy: 1.592_21, f1: 21.769_5, f2: 3.232_31 },
         { energy: 1.617_96, f1: 21.762_8, f2: 3.149_12 },
         { energy: 1.644_13, f1: 21.755_1, f2: 3.068_06 },
         { energy: 1.670_72, f1: 21.746_5, f2: 2.989_17 },
         { energy: 1.697_74, f1: 21.737_4, f2: 2.912_28 },
         { energy: 1.725_2, f1: 21.727_7, f2: 2.837_26 },
         { energy: 1.753_11, f1: 21.717_6, f2: 2.763_3 },
         { energy: 1.781_46, f1: 21.706_3, f2: 2.691 },
         { energy: 1.810_28, f1: 21.694, f2: 2.620_44 },
         { energy: 1.839_56, f1: 21.680_9, f2: 2.551_71 },
         { energy: 1.869_31, f1: 21.667_1, f2: 2.484_76 },
         { energy: 1.899_54, f1: 21.652_7, f2: 2.419_53 },
         { energy: 1.930_27, f1: 21.637_7, f2: 2.356_02 },
         { energy: 1.961_49, f1: 21.622_2, f2: 2.294_18 },
         { energy: 1.993_21, f1: 21.606_1, f2: 2.233_98 },
         { energy: 2.0, f1: 21.602_7, f2: 2.221_43 },
         { energy: 2.026, f1: 21.589_7, f2: 2.175_1 },
         { energy: 2.052, f1: 21.577, f2: 2.129_3 },
         { energy: 2.079, f1: 21.563_3, f2: 2.083_32 },
         { energy: 2.106, f1: 21.549_5, f2: 2.038_84 },
         { energy: 2.134, f1: 21.535_1, f2: 1.994_26 },
         { energy: 2.161, f1: 21.521_1, f2: 1.952_67 },
         { energy: 2.19, f1: 21.505_9, f2: 1.909_52 },
         { energy: 2.218, f1: 21.491_2, f2: 1.869_21 },
         { energy: 2.247, f1: 21.476, f2: 1.828_88 },
         { energy: 2.277, f1: 21.460_1, f2: 1.788_54 },
         { energy: 2.306, f1: 21.444_8, f2: 1.750_86 },
         { energy: 2.337, f1: 21.428_4, f2: 1.711_92 },
         { energy: 2.367, f1: 21.412_4, f2: 1.675_52 },
         { energy: 2.398, f1: 21.396, f2: 1.639_14 },
         { energy: 2.429, f1: 21.379_5, f2: 1.603_99 },
         { energy: 2.461, f1: 21.362_5, f2: 1.568_93 },
         { energy: 2.493, f1: 21.345_5, f2: 1.535_02 },
         { energy: 2.526, f1: 21.327_9, f2: 1.501_26 },
         { energy: 2.559, f1: 21.310_3, f2: 1.468_65 },
         { energy: 2.592, f1: 21.292_7, f2: 1.437_11 },
         { energy: 2.626, f1: 21.274_6, f2: 1.405_72 },
         { energy: 2.66, f1: 21.256_5, f2: 1.375_41 },
         { energy: 2.695, f1: 21.237_8, f2: 1.345_22 },
         { energy: 2.73, f1: 21.219, f2: 1.316_08 },
         { energy: 2.766, f1: 21.199_7, f2: 1.287_12 },
         { energy: 2.802, f1: 21.180_4, f2: 1.259_12 },
         { energy: 2.839, f1: 21.160_5, f2: 1.231_34 },
         { energy: 2.876, f1: 21.140_5, f2: 1.204_53 },
         { energy: 2.914, f1: 21.119_9, f2: 1.177_88 },
         { energy: 2.952, f1: 21.099_2, f2: 1.152_17 },
         { energy: 2.99, f1: 21.078_3, f2: 1.127_34 },
         { energy: 3.029, f1: 21.056_9, f2: 1.102_69 },
         { energy: 3.069, f1: 21.034_7, f2: 1.078_29 },
         { energy: 3.109, f1: 21.012_3, f2: 1.054_72 },
         { energy: 3.15, f1: 20.989_2, f2: 1.031_36 },
         { energy: 3.191, f1: 20.965_9, f2: 1.008_81 },
         { energy: 3.232, f1: 20.942_2, f2: 0.987_029 },
         { energy: 3.275, f1: 20.917_2, f2: 0.964_954 },
         { energy: 3.317, f1: 20.892_4, f2: 0.944_161 },
         { energy: 3.361, f1: 20.866, f2: 0.923_078 },
         { energy: 3.405, f1: 20.839_1, f2: 0.902_742 },
         { energy: 3.449, f1: 20.811_8, f2: 0.883_098 },
         { energy: 3.494, f1: 20.783_3, f2: 0.863_657 },
         { energy: 3.54, f1: 20.753_6, f2: 0.844_503 },
         { energy: 3.586, f1: 20.723_1, f2: 0.825_983 },
         { energy: 3.633, f1: 20.691_1, f2: 0.807_714 },
         { energy: 3.68, f1: 20.658_2, f2: 0.790_032 },
         { energy: 3.729, f1: 20.622_8, f2: 0.772_257 },
         { energy: 3.777, f1: 20.587, f2: 0.755_473 },
         { energy: 3.827, f1: 20.548_3, f2: 0.738_526 },
         { energy: 3.877, f1: 20.508, f2: 0.722_198 },
         { energy: 3.927, f1: 20.466, f2: 0.706_45 },
         { energy: 3.979, f1: 20.420_2, f2: 0.690_593 },
         { energy: 4.031, f1: 20.372, f2: 0.675_269 },
         { energy: 4.083, f1: 20.321, f2: 0.660_477 },
         { energy: 4.137, f1: 20.264_8, f2: 0.645_682 },
         { energy: 4.191, f1: 20.204_6, f2: 0.631_321 },
         { energy: 4.245, f1: 20.139_9, f2: 0.617_483 },
         { energy: 4.301, f1: 20.067_2, f2: 0.603_661 },
         { energy: 4.357, f1: 19.987_6, f2: 0.590_258 },
         { energy: 4.414, f1: 19.898_1, f2: 0.577_091 },
         { energy: 4.472, f1: 19.796, f2: 0.564_173 },
         { energy: 4.53, f1: 19.68, f2: 0.551_702 },
         { energy: 4.589, f1: 19.543_3, f2: 0.539_415 },
         { energy: 4.649, f1: 19.377_9, f2: 0.527_35 },
         { energy: 4.71, f1: 19.170_4, f2: 0.515_511 },
         { energy: 4.771, f1: 18.900_7, f2: 0.504_077 },
         { energy: 4.834, f1: 18.504_6, f2: 0.492_674 },
         { energy: 4.897, f1: 17.826, f2: 0.481_658 },
         { energy: 4.961, f1: 15.004_9, f2: 0.470_848 },
         { energy: 4.966_3, f1: 10.489_2, f2: 0.469_969 },
         { energy: 4.966_5, f1: 10.49, f2: 4.036_19 },
         { energy: 5.026, f1: 17.819, f2: 3.967_27 },
         { energy: 5.091, f1: 18.709_5, f2: 3.894_24 },
         { energy: 5.158, f1: 19.240_3, f2: 3.820_74 },
         { energy: 5.225, f1: 19.614_8, f2: 3.749 },
         { energy: 5.294, f1: 19.911_8, f2: 3.676_92 },
         { energy: 5.363, f1: 20.152_1, f2: 3.606_67 },
         { energy: 5.433, f1: 20.356, f2: 3.537_24 },
         { energy: 5.504, f1: 20.532_6, f2: 3.468_58 },
         { energy: 5.576, f1: 20.688_1, f2: 3.400_73 },
         { energy: 5.649, f1: 20.826_5, f2: 3.333_76 },
         { energy: 5.722, f1: 20.949_2, f2: 3.268_52 },
         { energy: 5.797, f1: 21.061_8, f2: 3.203_35 },
         { energy: 5.873, f1: 21.164_3, f2: 3.139_12 },
         { energy: 5.95, f1: 21.257_9, f2: 3.075_77 },
         { energy: 6.027, f1: 21.342_8, f2: 3.014_17 },
         { energy: 6.106, f1: 21.421_9, f2: 2.952_75 },
         { energy: 6.186, f1: 21.495, f2: 2.892_29 },
         { energy: 6.267, f1: 21.562_5, f2: 2.832_84 },
         { energy: 6.349, f1: 21.625_1, f2: 2.774_36 },
         { energy: 6.432, f1: 21.683_2, f2: 2.716_82 },
         { energy: 6.516, f1: 21.737_1, f2: 2.660_32 },
         { energy: 6.601, f1: 21.787_2, f2: 2.604_84 },
         { energy: 6.687, f1: 21.833_9, f2: 2.550_38 },
         { energy: 6.774, f1: 21.877_4, f2: 2.496_87 },
         { energy: 6.863, f1: 21.918_4, f2: 2.443_72 },
         { energy: 6.952, f1: 21.956_1, f2: 2.392_21 },
         { energy: 7.043, f1: 21.991_6, f2: 2.341_16 },
         { energy: 7.135, f1: 22.024_8, f2: 2.291_07 },
         { energy: 7.229, f1: 22.055_9, f2: 2.241_48 },
         { energy: 7.323, f1: 22.084_7, f2: 2.193_4 },
         { energy: 7.419, f1: 22.111_7, f2: 2.145_78 },
         { energy: 7.516, f1: 22.136_8, f2: 2.099_19 },
         { energy: 7.614, f1: 22.160_1, f2: 2.053_55 },
         { energy: 7.713, f1: 22.181_8, f2: 2.008_92 },
         { energy: 7.814, f1: 22.202_1, f2: 1.964_82 },
         { energy: 7.916, f1: 22.221, f2: 1.921_67 },
         { energy: 8.019, f1: 22.238_4, f2: 1.879_54 },
         { energy: 8.124, f1: 22.254_8, f2: 1.837_88 },
         { energy: 8.23, f1: 22.269_8, f2: 1.797_17 },
         { energy: 8.338, f1: 22.283_9, f2: 1.757_02 },
         { energy: 8.447, f1: 22.296_7, f2: 1.717_81 },
         { energy: 8.557, f1: 22.308_5, f2: 1.679_54 },
         { energy: 8.669, f1: 22.319_5, f2: 1.641_86 },
         { energy: 8.782, f1: 22.329_4, f2: 1.605_02 },
         { energy: 8.897, f1: 22.338_6, f2: 1.568_85 },
         { energy: 9.013, f1: 22.347, f2: 1.533_43 },
         { energy: 9.131, f1: 22.354_6, f2: 1.498_66 },
         { energy: 9.25, f1: 22.361_4, f2: 1.464_74 },
         { energy: 9.371, f1: 22.367_6, f2: 1.431_45 },
         { energy: 9.494, f1: 22.373_2, f2: 1.398_61 },
         { energy: 9.618, f1: 22.378_1, f2: 1.366_66 },
         { energy: 9.743, f1: 22.382_4, f2: 1.335_55 },
         { energy: 9.900_58, f1: 22.387, f2: 1.297_76 },
         { energy: 10.060_7, f1: 22.390_8, f2: 1.260_95 },
         { energy: 10.223_4, f1: 22.393_9, f2: 1.225_09 },
         { energy: 10.388_8, f1: 22.396_2, f2: 1.190_16 },
         { energy: 10.556_8, f1: 22.398, f2: 1.156_15 },
         { energy: 10.727_6, f1: 22.399_1, f2: 1.123_03 },
         { energy: 10.901_1, f1: 22.399_7, f2: 1.090_79 },
         { energy: 11.077_4, f1: 22.399_8, f2: 1.059_4 },
         { energy: 11.256_6, f1: 22.399_3, f2: 1.028_85 },
         { energy: 11.438_6, f1: 22.398_5, f2: 0.999_118 },
         { energy: 11.623_6, f1: 22.397_2, f2: 0.970_181 },
         { energy: 11.811_7, f1: 22.395_5, f2: 0.942_025 },
         { energy: 12.002_7, f1: 22.393_4, f2: 0.914_63 },
         { energy: 12.196_8, f1: 22.391_1, f2: 0.887_979 },
         { energy: 12.394_1, f1: 22.388_4, f2: 0.862_055 },
         { energy: 12.594_6, f1: 22.385_4, f2: 0.836_839 },
         { energy: 12.798_3, f1: 22.382_2, f2: 0.812_316 },
         { energy: 13.005_3, f1: 22.378_7, f2: 0.788_467 },
         { energy: 13.215_6, f1: 22.375, f2: 0.765_277 },
         { energy: 13.429_4, f1: 22.371_1, f2: 0.742_729 },
         { energy: 13.646_6, f1: 22.367, f2: 0.720_808 },
         { energy: 13.867_3, f1: 22.362_8, f2: 0.699_498 },
         { energy: 14.091_6, f1: 22.358_4, f2: 0.678_783 },
         { energy: 14.319_5, f1: 22.353_8, f2: 0.658_649 },
         { energy: 14.551_1, f1: 22.349_2, f2: 0.639_081 },
         { energy: 14.786_5, f1: 22.344_4, f2: 0.620_064 },
         { energy: 15.025_6, f1: 22.339_5, f2: 0.601_584 },
         { energy: 15.268_7, f1: 22.334_5, f2: 0.583_628 },
         { energy: 15.515_6, f1: 22.329_5, f2: 0.566_181 },
         { energy: 15.766_6, f1: 22.324_4, f2: 0.549_232 },
         { energy: 16.021_6, f1: 22.319_2, f2: 0.532_765 },
         { energy: 16.280_7, f1: 22.314, f2: 0.516_77 },
         { energy: 16.544_1, f1: 22.308_8, f2: 0.501_233 },
         { energy: 16.811_6, f1: 22.303_5, f2: 0.486_143 },
         { energy: 17.083_6, f1: 22.298_2, f2: 0.471_486 },
         { energy: 17.359_9, f1: 22.292_9, f2: 0.457_253 },
         { energy: 17.640_6, f1: 22.287_5, f2: 0.443_431 },
         { energy: 17.926, f1: 22.282_2, f2: 0.430_009 },
         { energy: 18.215_9, f1: 22.276_9, f2: 0.416_977 },
         { energy: 18.510_5, f1: 22.271_5, f2: 0.404_324 },
         { energy: 18.809_9, f1: 22.266_2, f2: 0.392_039 },
         { energy: 19.114_2, f1: 22.260_9, f2: 0.380_113 },
         { energy: 19.423_3, f1: 22.255_7, f2: 0.368_536 },
         { energy: 19.737_5, f1: 22.250_4, f2: 0.357_298 },
         { energy: 20.056_7, f1: 22.245_2, f2: 0.346_39 },
         { energy: 20.381_1, f1: 22.24, f2: 0.335_802 },
         { energy: 20.710_8, f1: 22.234_9, f2: 0.325_526 },
         { energy: 21.045_7, f1: 22.229_8, f2: 0.315_553 },
         { energy: 21.386_1, f1: 22.224_7, f2: 0.305_875 },
         { energy: 21.732, f1: 22.219_7, f2: 0.296_483 },
         { energy: 22.083_5, f1: 22.214_8, f2: 0.287_37 },
         { energy: 22.440_7, f1: 22.209_8, f2: 0.278_527 },
         { energy: 22.803_7, f1: 22.205, f2: 0.269_947 },
         { energy: 23.172_5, f1: 22.200_2, f2: 0.261_622 },
         { energy: 23.547_3, f1: 22.195_4, f2: 0.253_545 },
         { energy: 23.928_2, f1: 22.190_7, f2: 0.245_71 },
         { energy: 24.315_2, f1: 22.186, f2: 0.238_109 },
         { energy: 24.708_5, f1: 22.181_5, f2: 0.230_735 },
         { energy: 25.108_1, f1: 22.176_9, f2: 0.223_582 },
         { energy: 25.514_2, f1: 22.172_5, f2: 0.216_644 },
         { energy: 25.926_9, f1: 22.168_1, f2: 0.209_915 },
         { energy: 26.346_2, f1: 22.163_7, f2: 0.203_388 },
         { energy: 26.772_4, f1: 22.159_4, f2: 0.197_058 },
         { energy: 27.205_4, f1: 22.155_2, f2: 0.190_919 },
         { energy: 27.645_4, f1: 22.151, f2: 0.184_965 },
         { energy: 28.092_6, f1: 22.147, f2: 0.179_191 },
         { energy: 28.546_9, f1: 22.142_9, f2: 0.173_592 },
         { energy: 29.008_7, f1: 22.139, f2: 0.168_163 },
         { energy: 29.477_9, f1: 22.135_2, f2: 0.162_899 },
         { energy: 29.954_6, f1: 22.129_4, f2: 0.157_795 },
         { energy: 30.0, f1: 22.129_4, f2: 0.157_321 },
    ],
    neutron_scattering: {
        b_c: { value: -3.37, uncertainty: 0.13},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 1.485, uncertainty: 0.002},
        bound_incoherent_scattering_xs: { value: 2.87, uncertainty: 0.03},
        total_bound_scattering_xs: { value: 4.35, uncertainty: 0.03},
        absorption_xs: { value: 6.09, uncertainty: 0.13},
    },
    isotopes: [
        { 
            mass_number: 38,
            mass: { value: 38.009_77, uncertainty: 0.000_27},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 39,
            mass: { value: 39.001_32, uncertainty: 0.000_11},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 40,
            mass: { value: 39.990_5, uncertainty: 0.001_7},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 41,
            mass: { value: 40.983_13, uncertainty: 0.000_40},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 42,
            mass: { value: 41.973_032, uncertainty: 0.000_006},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 43,
            mass: { value: 42.968_523, uncertainty: 0.000_007},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 44,
            mass: { value: 43.959_690_2, uncertainty: 0.000_000_8},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 45,
            mass: { value: 44.958_124_3, uncertainty: 0.000_001_3},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 46,
            mass: { value: 45.952_629_5, uncertainty: 0.000_001_2},
            abundance: { value: 8.25, uncertainty: 0.03},
            neutron_scattering: {
                    b_c: { value: 4.72, uncertainty: 0.05},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 3.05, uncertainty: 0.07},
                    bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
                    total_bound_scattering_xs: { value: 3.05, uncertainty: 0.07},
                    absorption_xs: { value: 0.59, uncertainty: 0.18},
                },
        },
        { 
            mass_number: 47,
            mass: { value: 46.951_763_8, uncertainty: 0.000_001_0},
            abundance: { value: 7.44, uncertainty: 0.02},
            neutron_scattering: {
                    b_c: { value: 3.53, uncertainty: 0.07},
                    b_p: { value: 0.46, uncertainty: 0.23},
                    b_m: { value: 7.64, uncertainty: 0.13},
                    bound_coherent_scattering_xs: { value: 1.66, uncertainty: 0.11},
                    bound_incoherent_scattering_xs: { value: 1.5, uncertainty: 0.2},
                    total_bound_scattering_xs: { value: 3.2, uncertainty: 0.2},
                    absorption_xs: { value: 1.7, uncertainty: 0.2},
                },
        },
        { 
            mass_number: 48,
            mass: { value: 47.947_947_1, uncertainty: 0.000_001_0},
            abundance: { value: 73.72, uncertainty: 0.03},
            neutron_scattering: {
                    b_c: { value: -5.86, uncertainty: 0.02},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 4.65, uncertainty: 0.03},
                    bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
                    total_bound_scattering_xs: { value: 4.65, uncertainty: 0.03},
                    absorption_xs: { value: 7.84, uncertainty: 0.25},
                },
        },
        { 
            mass_number: 49,
            mass: { value: 48.947_870_8, uncertainty: 0.000_001_0},
            abundance: { value: 5.41, uncertainty: 0.02},
            neutron_scattering: {
                    b_c: { value: 0.98, uncertainty: 0.05},
                    b_p: { value: 2.6, uncertainty: 0.3},
                    b_m: { value: -1.2, uncertainty: 0.4},
                    bound_coherent_scattering_xs: { value: 0.14, uncertainty: 0.01},
                    bound_incoherent_scattering_xs: { value: 3.3, uncertainty: 0.3},
                    total_bound_scattering_xs: { value: 3.4, uncertainty: 0.3},
                    absorption_xs: { value: 2.2, uncertainty: 0.3},
                },
        },
        { 
            mass_number: 50,
            mass: { value: 49.944_792_1, uncertainty: 0.000_001_1},
            abundance: { value: 5.18, uncertainty: 0.02},
            neutron_scattering: {
                    b_c: { value: 5.88, uncertainty: 0.10},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 4.8, uncertainty: 0.12},
                    bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
                    total_bound_scattering_xs: { value: 4.8, uncertainty: 0.12},
                    absorption_xs: { value: 0.179, uncertainty: 0.003},
                },
        },
        { 
            mass_number: 51,
            mass: { value: 50.946_616, uncertainty: 0.000_014},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 52,
            mass: { value: 51.946_898, uncertainty: 0.000_008},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 53,
            mass: { value: 52.949_73, uncertainty: 0.000_11},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 54,
            mass: { value: 53.950_87, uncertainty: 0.000_25},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 55,
            mass: { value: 54.955_12, uncertainty: 0.000_26},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 56,
            mass: { value: 55.957_99, uncertainty: 0.000_30},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 57,
            mass: { value: 56.962_9, uncertainty: 0.010_0},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 58,
            mass: { value: 57.966_11, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 59,
            mass: { value: 58.971_96, uncertainty: 0.000_75},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 60,
            mass: { value: 59.975_64, uncertainty: 0.000_86},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 61,
            mass: { value: 60.982_02, uncertainty: 0.000_97},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Ti};
