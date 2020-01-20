const Pu = {
    atomic_number: 94,
    name: "Plutonium",
    symbol: "Pu",
    mass: 244.0,
    common_ions: [4],
    uncommon_ions: [2, 3, 5, 6, 7],
    xray_scattering: undefined,
    neutron_scattering: {
        b_c: { value: 7.7, uncertainty: 0.1},
        b_p: undefined,
        b_m: undefined,
        bound_coherent_scattering_xs: { value: 7.5, uncertainty: 0.2},
        bound_incoherent_scattering_xs: { value: 0.2, uncertainty: 0.6},
        total_bound_scattering_xs: { value: 7.7, uncertainty: 0.6},
        absorption_xs: { value: 1_017.3, uncertainty: 2.1},
    },
    isotopes: [
        { 
            mass_number: 228,
            mass: { value: 228.038_73, uncertainty: 0.000_30},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 229,
            mass: { value: 229.040_14, uncertainty: 0.000_80},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 230,
            mass: { value: 230.039_646, uncertainty: 0.000_026},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 231,
            mass: { value: 231.041_26, uncertainty: 0.000_11},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 232,
            mass: { value: 232.041_179, uncertainty: 0.000_020},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 233,
            mass: { value: 233.042_99, uncertainty: 0.000_50},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 234,
            mass: { value: 234.043_305, uncertainty: 0.000_008},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 235,
            mass: { value: 235.045_282, uncertainty: 0.000_022},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 236,
            mass: { value: 236.046_048_1, uncertainty: 0.000_002_9},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 237,
            mass: { value: 237.048_403_8, uncertainty: 0.000_002_5},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 238,
            mass: { value: 238.049_553_4, uncertainty: 0.000_002_1},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 239,
            mass: { value: 239.052_156_5, uncertainty: 0.000_002_1},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 240,
            mass: { value: 240.053_807_5, uncertainty: 0.000_002_1},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: {
                    b_c: { value: 3.5, uncertainty: 0.1},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 1.54, uncertainty: 0.09},
                    bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
                    total_bound_scattering_xs: { value: 1.54, uncertainty: 0.09},
                    absorption_xs: { value: 289.6, uncertainty: 1.4},
                },
        },
        { 
            mass_number: 241,
            mass: { value: 241.056_845_3, uncertainty: 0.000_002_1},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 242,
            mass: { value: 242.058_736_8, uncertainty: 0.000_002_1},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: {
                    b_c: { value: 8.1, uncertainty: 0.1},
                    b_p: undefined,
                    b_m: undefined,
                    bound_coherent_scattering_xs: { value: 8.2, uncertainty: 0.2},
                    bound_incoherent_scattering_xs: { value: 0.0, uncertainty: 0.0 },
                    total_bound_scattering_xs: { value: 8.2, uncertainty: 0.2},
                    absorption_xs: { value: 18.5, uncertainty: 0.5},
                },
        },
        { 
            mass_number: 243,
            mass: { value: 243.061_997, uncertainty: 0.000_003},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 244,
            mass: { value: 244.064_198, uncertainty: 0.000_005},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 245,
            mass: { value: 245.067_739, uncertainty: 0.000_015},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 246,
            mass: { value: 246.070_198, uncertainty: 0.000_016},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
        { 
            mass_number: 247,
            mass: { value: 247.074_07, uncertainty: 0.000_32},
            abundance: { value: 0.0, uncertainty: 0.0 },
            neutron_scattering: undefined
        },
    ]
};
export {Pu};