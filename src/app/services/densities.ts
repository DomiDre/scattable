interface Material {
    symbol: string;
    name: string;
    density: number;
}
const densities: Map<string, Material[]> = new Map([
    [
        '(0.5Ca,Na)0.7(Al,Mg,Fe)4[(Si,Al)8O20](OH)4·nH2O', [
            { symbol: '(0.5Ca,Na)0.7(Al,Mg,Fe)4[(Si,Al)8O20](OH)4·nH2O', name: 'Montmorillonite', density: 2.5 },
        ]
    ],
    [
        '(Ag,Au)Te2', [
            { symbol: '(Ag,Au)Te2', name: 'Sylvanite', density: 8.16 },
        ]
    ],
    [
        '(Ag,Cu)16Sb2S11', [
            { symbol: '(Ag,Cu)16Sb2S11', name: 'Polybasite', density: 6.1 },
        ]
    ],
    [
        '(Al,Fe)(PO4)·2H2O', [
            { symbol: '(Al,Fe)(PO4)·2H2O', name: 'Variseite-Strengite', density: 2.72 },
        ]
    ],
    [
        '(BiO)2CO3', [
            { symbol: '(BiO)2CO3', name: 'Bismuth basic carbonate', density: 6.86 },
        ]
    ],
    [
        '(Ca,Mg,Fe,Ti,Al)2(Si,Al)2O6', [
            { symbol: '(Ca,Mg,Fe,Ti,Al)2(Si,Al)2O6', name: 'Augite', density: 3.38 },
        ]
    ],
    [
        '(Ca,Mn,Ce,La,Y,Th)2(Fe,Ti)(Al,Fe)  O·OH(Si2O7)(SiO4)', [
            { symbol: '(Ca,Mn,Ce,La,Y,Th)2(Fe,Ti)(Al,Fe)  O·OH(Si2O7)(SiO4)', name: 'Allanite', density: 3.8 },
        ]
    ],
    [
        '(Ca,Mn,Fe)3Al2BO3Si4O12(OH)', [
            { symbol: '(Ca,Mn,Fe)3Al2BO3Si4O12(OH)', name: 'Axinite', density: 3.31 },
        ]
    ],
    [
        '(Ca,Na)2(Mg,Fe,Al,Si)3O7', [
            { symbol: '(Ca,Na)2(Mg,Fe,Al,Si)3O7', name: 'Melilite', density: 3.0 },
        ]
    ],
    [
        '(Ca,Na2)Al2Si4O12·6H2O', [
            { symbol: '(Ca,Na2)Al2Si4O12·6H2O', name: 'Levyne', density: 2.1 },
        ]
    ],
    [
        '(Ca,Na2)[Al2Si4O12]·6H2O', [
            { symbol: '(Ca,Na2)[Al2Si4O12]·6H2O', name: 'Gmelinite', density: 2.1 },
        ]
    ],
    [
        '(Ca,Na2,K2)[Al2Si7O18]·6H2O', [
            { symbol: '(Ca,Na2,K2)[Al2Si7O18]·6H2O', name: 'Heulandite', density: 2.2 },
        ]
    ],
    [
        '(Ca,Pb)10(OH,Cl)2(Si2O7)3', [
            { symbol: '(Ca,Pb)10(OH,Cl)2(Si2O7)3', name: 'Ganomalite', density: 5.6 },
        ]
    ],
    [
        '(Ce,La,Na)FCO3·CaCO3', [
            { symbol: '(Ce,La,Na)FCO3·CaCO3', name: 'Parisite', density: 4.42 },
        ]
    ],
    [
        '(Ce,La,Th)PO4', [
            { symbol: '(Ce,La,Th)PO4', name: 'Monazite', density: 5.2 },
        ]
    ],
    [
        '(Co,Fe)As2', [
            { symbol: '(Co,Fe)As2', name: 'Safflorite', density: 7.3 },
        ]
    ],
    [
        '(Co,Ni)3(AsO4)2·8H2O', [
            { symbol: '(Co,Ni)3(AsO4)2·8H2O', name: 'Erythrite', density: 3.06 },
        ]
    ],
    [
        '(Co,Ni)As3', [
            { symbol: '(Co,Ni)As3', name: 'Co-Skutterudite', density: 6.8 },
        ]
    ],
    [
        '(Cu,Fe)12Sb4S13', [
            { symbol: '(Cu,Fe)12Sb4S13', name: 'Tetrahedrite', density: 4.9 },
        ]
    ],
    [
        '(Fe,Mg)Fe4(SO4)6(OH)2·20H2O', [
            { symbol: '(Fe,Mg)Fe4(SO4)6(OH)2·20H2O', name: 'Copiapite', density: 2.13 },
        ]
    ],
    [
        '(Fe,Mn)(Nb,Ta)2O6', [
            { symbol: '(Fe,Mn)(Nb,Ta)2O6', name: 'Columbite', density: 5.2 },
        ]
    ],
    [
        '(Fe,Mn)(Ta,Nb)2O6', [
            { symbol: '(Fe,Mn)(Ta,Nb)2O6', name: 'Tantalite', density: 7.95 },
        ]
    ],
    [
        '(K,Na,Ca)0.6(Fe,Mg)6Si8Al(O,OH)27·2H  2O', [
            { symbol: '(K,Na,Ca)0.6(Fe,Mg)6Si8Al(O,OH)27·2H  2O', name: 'Stilpnomelane', density: 2.8 },
        ]
    ],
    [
        '(K,Na,Ca)1.6(Fe,Al,Mg)4.0Si7.3Al0.7O20  (OH)4', [
            { symbol: '(K,Na,Ca)1.6(Fe,Al,Mg)4.0Si7.3Al0.7O20  (OH)4', name: 'Glauconite', density: 2.7 },
        ]
    ],
    [
        '(La,Ce)2(CO3)3·8H2O', [
            { symbol: '(La,Ce)2(CO3)3·8H2O', name: 'Lanthanite', density: 2.72 },
        ]
    ],
    [
        '(Li,Na)Al(PO4)(F,OH)', [
            { symbol: '(Li,Na)Al(PO4)(F,OH)', name: 'Amblygonite', density: 3.1 },
        ]
    ],
    [
        '(Mg,Al,Fe)12(Si,Al)8O20(OH)16', [
            { symbol: '(Mg,Al,Fe)12(Si,Al)8O20(OH)16', name: 'Chlorite', density: 3.0 },
        ]
    ],
    [
        '(Mg,Ca)0.7(Mg,Fe,Al)6[(Al,Si)8O20]  (OH)4·8H2O', [
            { symbol: '(Mg,Ca)0.7(Mg,Fe,Al)6[(Al,Si)8O20]  (OH)4·8H2O', name: 'Vermiculite', density: 2.3 },
        ]
    ],
    [
        '(Mg,Fe)Al2(PO4)2(OH)2', [
            { symbol: '(Mg,Fe)Al2(PO4)2(OH)2', name: 'Lazulite', density: 3.23 },
        ]
    ],
    [
        '(Mg,Fe)SiO3', [
            { symbol: '(Mg,Fe)SiO3', name: 'Orthopyroxene', density: 3.6 },
        ]
    ],
    [
        '(Mg,Fe)SiO4', [
            { symbol: '(Mg,Fe)SiO4', name: 'Olivine', density: 3.81 },
        ]
    ],
    [
        '(Mg,Fe,Ca)(Mg,Fe)Si2O6', [
            { symbol: '(Mg,Fe,Ca)(Mg,Fe)Si2O6', name: 'Pigeonite', density: 3.38 },
        ]
    ],
    [
        '(Mg,Fe,Mn)7(Si4O11)2(OH)2', [
            { symbol: '(Mg,Fe,Mn)7(Si4O11)2(OH)2', name: 'Cummingtonite', density: 3.4 },
        ]
    ],
    [
        '(Mn,Fe)2O3', [
            { symbol: '(Mn,Fe)2O3', name: 'Bixbyite', density: 4.95 },
        ]
    ],
    [
        '(Mn,Si)2O3', [
            { symbol: '(Mn,Si)2O3', name: 'Braunite', density: 4.78 },
        ]
    ],
    [
        '(NH4)10W12O41', [
            { symbol: '(NH4)10W12O41', name: 'Ammonium tungstate(VI)', density: 2.3 },
        ]
    ],
    [
        '(NH4)10W12O41·5H2O', [
            { symbol: '(NH4)10W12O41·5H2O', name: 'Ammonium tungstate(VI)  pentahydrate', density: 2.3 },
        ]
    ],
    [
        '(NH4)2C2O4', [
            { symbol: '(NH4)2C2O4', name: 'Ammonium oxalate', density: 1.5 },
        ]
    ],
    [
        '(NH4)2C2O4·H2O', [
            { symbol: '(NH4)2C2O4·H2O', name: 'Ammonium oxalate monohydrate', density: 1.5 },
        ]
    ],
    [
        '(NH4)2C4H4O6', [
            { symbol: '(NH4)2C4H4O6', name: 'Ammonium tartrate', density: 1.601 },
        ]
    ],
    [
        '(NH4)2Co(SO4)2·6H2O', [
            { symbol: '(NH4)2Co(SO4)2·6H2O', name: 'Ammonium cobalt(II) sulfate  hexahydrate', density: 1.9 },
        ]
    ],
    [
        '(NH4)2Cr2O7', [
            { symbol: '(NH4)2Cr2O7', name: 'Ammonium dichromate', density: 2.155 },
        ]
    ],
    [
        '(NH4)2CrO4', [
            { symbol: '(NH4)2CrO4', name: 'Ammonium chromate', density: 1.9 },
        ]
    ],
    [
        '(NH4)2Fe(SO4)2·6H2O', [
            { symbol: '(NH4)2Fe(SO4)2·6H2O', name: 'Ammonium iron(II) sulfate  hexahydrate', density: 1.86 },
        ]
    ],
    [
        '(NH4)2GeF6', [
            { symbol: '(NH4)2GeF6', name: 'Ammonium hexafluorogermanate', density: 2.564 },
        ]
    ],
    [
        '(NH4)2HAsO4', [
            { symbol: '(NH4)2HAsO4', name: 'Ammonium hydrogen arsenate', density: 1.99 },
        ]
    ],
    [
        '(NH4)2HC6H5O7', [
            { symbol: '(NH4)2HC6H5O7', name: 'Ammonium hydrogen citrate', density: 1.48 },
        ]
    ],
    [
        '(NH4)2HPO4', [
            { symbol: '(NH4)2HPO4', name: 'Ammonium hydrogen phosphate', density: 1.619 },
        ]
    ],
    [
        '(NH4)2IrCl6', [
            { symbol: '(NH4)2IrCl6', name: 'Ammonium hexachloroiridate(IV)', density: 2.856 },
        ]
    ],
    [
        '(NH4)2OsCl6', [
            { symbol: '(NH4)2OsCl6', name: 'Ammonium hexachloroosmate(IV)', density: 2.93 },
        ]
    ],
    [
        '(NH4)2PdCl6', [
            { symbol: '(NH4)2PdCl6', name: 'Ammonium  hexachloropalladate(IV)', density: 2.418 },
        ]
    ],
    [
        '(NH4)2PtCl4', [
            { symbol: '(NH4)2PtCl4', name: 'Ammonium tetrachloroplatinate(II)', density: 2.936 },
        ]
    ],
    [
        '(NH4)2PtCl6', [
            { symbol: '(NH4)2PtCl6', name: 'Ammonium  hexachloroplatinate(IV)', density: 3.065 },
        ]
    ],
    [
        '(NH4)2S2O3', [
            { symbol: '(NH4)2S2O3', name: 'Ammonium thiosulfate', density: 1.678 },
        ]
    ],
    [
        '(NH4)2S2O8', [
            { symbol: '(NH4)2S2O8', name: 'Ammonium peroxydisulfate', density: 1.982 },
        ]
    ],
    [
        '(NH4)2SO3·H2O', [
            { symbol: '(NH4)2SO3·H2O', name: 'Ammonium sulfite monohydrate', density: 1.41 },
        ]
    ],
    [
        '(NH4)2SO4', [
            { symbol: '(NH4)2SO4', name: 'Ammonium sulfate', density: 1.77 },
        ]
    ],
    [
        '(NH4)2SeO4', [
            { symbol: '(NH4)2SeO4', name: 'Ammonium selenate', density: 2.194 },
        ]
    ],
    [
        '(NH4)2SiF6', [
            { symbol: '(NH4)2SiF6', name: 'Ammonium hexafluorosilicate', density: 2.011 },
        ]
    ],
    [
        '(NH4)2TeO4', [
            { symbol: '(NH4)2TeO4', name: 'Ammonium tellurate', density: 3.024 },
        ]
    ],
    [
        '(NH4)2WS4', [
            { symbol: '(NH4)2WS4', name: 'Ammonium tetrathiotungstate', density: 2.71 },
        ]
    ],
    [
        '(NH4)2ZnCl4', [
            { symbol: '(NH4)2ZnCl4', name: 'Ammonium tetrachlorozincate', density: 1.879 },
        ]
    ],
    [
        '(NH4)2ZrF6', [
            { symbol: '(NH4)2ZrF6', name: 'Ammonium  hexafluorozirconate(IV)', density: 1.154 },
        ]
    ],
    [
        '(NH4)3AlF6', [
            { symbol: '(NH4)3AlF6', name: 'Ammonium hexafluoroaluminate', density: 1.78 },
        ]
    ],
    [
        '(NH4)3Fe(C2O4)3·3H2O', [
            { symbol: '(NH4)3Fe(C2O4)3·3H2O', name: 'Ammonium iron(III) oxalate  trihydrate', density: 1.78 },
        ]
    ],
    [
        '(NH4)3GaF6', [
            { symbol: '(NH4)3GaF6', name: 'Ammonium hexafluorogallate', density: 2.1 },
        ]
    ],
    [
        '(NH4)3ZnCl5', [
            { symbol: '(NH4)3ZnCl5', name: 'Ammonium pentachlorozincate', density: 1.81 },
        ]
    ],
    [
        '(NH4)6Mo7O24·4H2O', [
            { symbol: '(NH4)6Mo7O24·4H2O', name: 'Ammonium molybdate(VI)  tetrahydrate', density: 2.498 },
        ]
    ],
    [
        '(Na,Ca)4-8Al6Si6O24(SO4,S)1-2', [
            { symbol: '(Na,Ca)4-8Al6Si6O24(SO4,S)1-2', name: 'Haüyne', density: 2.47 },
        ]
    ],
    [
        '(Na,Ca)4Al3(Al,Si)3Si6O24(Cl,F,OH,CO3  ,SO4)', [
            { symbol: '(Na,Ca)4Al3(Al,Si)3Si6O24(Cl,F,OH,CO3  ,SO4)', name: 'Scapolite', density: 2.64 },
        ]
    ],
    [
        '(Na,Ca,Ce)5(Fe,Mn)(Zr,Ti)  (Si3O9)2(OH,Cl)', [
            { symbol: '(Na,Ca,Ce)5(Fe,Mn)(Zr,Ti)  (Si3O9)2(OH,Cl)', name: 'Eudialite', density: 3.0 },
        ]
    ],
    [
        '(Na,Ca,K)7[Al6Si6O24]  (CO3,SO4,Cl,OH)2·H2O', [
            { symbol: '(Na,Ca,K)7[Al6Si6O24]  (CO3,SO4,Cl,OH)2·H2O', name: 'Cancrinite', density: 2.42 },
        ]
    ],
    [
        '(Na,K)AlSi3O8', [
            { symbol: '(Na,K)AlSi3O8', name: 'Anorthoclase', density: 2.58 },
        ]
    ],
    [
        '(Na,K,Ca)[Al2Si10O24]·7H2O', [
            { symbol: '(Na,K,Ca)[Al2Si10O24]·7H2O', name: 'Mordenite', density: 2.13 },
        ]
    ],
    [
        '(Ni,Fe)S2', [
            { symbol: '(Ni,Fe)S2', name: 'Bravoite', density: 4.62 },
        ]
    ],
    [
        '(PNCl2)3', [
            { symbol: '(PNCl2)3', name: 'Phosphonitrilic chloride trimer', density: 1.98 },
        ]
    ],
    [
        '(Y,Ca,Ce,U,Th)(Nb,Ta,Ti)2O6', [
            { symbol: '(Y,Ca,Ce,U,Th)(Nb,Ta,Ti)2O6', name: 'Euxenite', density: 5.5 },
        ]
    ],
    [
        '(Y,Er,Ce,Fe)(Nb,Ta,Ti)O4', [
            { symbol: '(Y,Er,Ce,Fe)(Nb,Ta,Ti)O4', name: 'Fergussonite', density: 5.7 },
        ]
    ],
    [
        '(Y,Er,Ce,U,Ca,Fe,Pb,Th)  (Nb,Ta,Ti,Sn)2O6', [
            { symbol: '(Y,Er,Ce,U,Ca,Fe,Pb,Th)  (Nb,Ta,Ti,Sn)2O6', name: 'Samarskite', density: 5.69 },
        ]
    ],
    [
        '([NaSi]0.9-0.7[CaAl]0.1-0.3)AlSi2O8', [
            { symbol: '([NaSi]0.9-0.7[CaAl]0.1-0.3)AlSi2O8', name: 'Oligoclase', density: 2.64 },
        ]
    ],
    [
        '2Mg2SiO4·MgF2', [
            { symbol: '2Mg2SiO4·MgF2', name: 'Chondrodite', density: 3.21 },
        ]
    ],
    [
        '3Al2O3·2SiO2', [
            { symbol: '3Al2O3·2SiO2', name: 'Aluminum silicate', density: 3.17 },
        ]
    ],
    [
        '3MgCO3·Mg(OH)2·3H2O', [
            { symbol: '3MgCO3·Mg(OH)2·3H2O', name: 'Hydromagnesite', density: 2.24 },
        ]
    ],
    [
        '3MgO·4SiO2·H2O', [
            { symbol: '3MgO·4SiO2·H2O', name: 'Talc', density: 2.71 },
        ]
    ],
    [
        '3PbO·H2O', [
            { symbol: '3PbO·H2O', name: 'Lead(II) oxide hydrate', density: 7.41 },
        ]
    ],
    [
        '4Mg2SiO4·MgF2', [
            { symbol: '4Mg2SiO4·MgF2', name: 'Clinohumite', density: 3.21 },
        ]
    ],
    [
        '4MgCO3·Mg(OH)2·4H2O', [
            { symbol: '4MgCO3·Mg(OH)2·4H2O', name: 'Magnesium carbonate hydroxide  tetrahydrate', density: 2.3 },
        ]
    ],
    [
        'Ac', [
            { symbol: 'Ac', name: 'Actinium', density: 10.0 },
        ]
    ],
    [
        'Ac2O3', [
            { symbol: 'Ac2O3', name: 'Actinium oxide', density: 9.19 },
        ]
    ],
    [
        'AcBr3', [
            { symbol: 'AcBr3', name: 'Actinium bromide', density: 5.85 },
        ]
    ],
    [
        'AcCl3', [
            { symbol: 'AcCl3', name: 'Actinium chloride', density: 4.81 },
        ]
    ],
    [
        'AcF3', [
            { symbol: 'AcF3', name: 'Actinium fluoride', density: 7.88 },
        ]
    ],
    [
        'Ag', [
            { symbol: 'Ag', name: 'Silver', density: 10.5 },
        ]
    ],
    [
        'Ag2C2O4', [
            { symbol: 'Ag2C2O4', name: 'Silver(I)oxalate', density: 5.03 },
        ]
    ],
    [
        'Ag2CO3', [
            { symbol: 'Ag2CO3', name: 'Silver(I) carbonate', density: 6.077 },
        ]
    ],
    [
        'Ag2Cr2O7', [
            { symbol: 'Ag2Cr2O7', name: 'Silver(I) dichromate', density: 4.77 },
        ]
    ],
    [
        'Ag2CrO4', [
            { symbol: 'Ag2CrO4', name: 'Silver(I) chromate', density: 5.625 },
        ]
    ],
    [
        'Ag2F', [
            { symbol: 'Ag2F', name: 'Silver subfluoride', density: 8.6 },
        ]
    ],
    [
        'Ag2HgI4', [
            { symbol: 'Ag2HgI4', name: 'Silver(I)tetraiodomercurate(II)', density: 6.1 },
        ]
    ],
    [
        'Ag2MoO4', [
            { symbol: 'Ag2MoO4', name: 'Silver(I) molybdate', density: 6.18 },
        ]
    ],
    [
        'Ag2O', [
            { symbol: 'Ag2O', name: 'Silver(I)oxide', density: 7.2 },
        ]
    ],
    [
        'Ag2O2', [
            { symbol: 'Ag2O2', name: 'Silver[II] oxide [Ag2O2]', density: 7.44 },
        ]
    ],
    [
        'Ag2S', [
            { symbol: 'Ag2S', name: 'Acanthite', density: 7.2 },
            { symbol: 'Ag2S', name: 'Argentite', density: 7.2 },
        ]
    ],
    [
        'Ag2SO4', [
            { symbol: 'Ag2SO4', name: 'Silver(I) sulfate', density: 5.45 },
        ]
    ],
    [
        'Ag2Se', [
            { symbol: 'Ag2Se', name: 'Silver(I) selenide', density: 8.216 },
        ]
    ],
    [
        'Ag2SeO3', [
            { symbol: 'Ag2SeO3', name: 'Silver(I) selenite', density: 5.93 },
        ]
    ],
    [
        'Ag2SeO4', [
            { symbol: 'Ag2SeO4', name: 'Silver(I) selenate', density: 5.72 },
        ]
    ],
    [
        'Ag2Te', [
            { symbol: 'Ag2Te', name: 'Hessite', density: 8.4 },
        ]
    ],
    [
        'Ag3AsO4', [
            { symbol: 'Ag3AsO4', name: 'Silver(I) arsenate', density: 6.657 },
        ]
    ],
    [
        'Ag3AsS3', [
            { symbol: 'Ag3AsS3', name: 'Proustite', density: 5.57 },
        ]
    ],
    [
        'Ag3PO4', [
            { symbol: 'Ag3PO4', name: 'Silver(I) phosphate', density: 6.37 },
        ]
    ],
    [
        'Ag3Sb', [
            { symbol: 'Ag3Sb', name: 'Dyscrasite', density: 9.74 },
        ]
    ],
    [
        'Ag3SbS3', [
            { symbol: 'Ag3SbS3', name: 'Pyrargyrite', density: 5.85 },
        ]
    ],
    [
        'AgBr', [
            { symbol: 'AgBr', name: 'Bromyrite', density: 6.47 },
        ]
    ],
    [
        'AgBrO3', [
            { symbol: 'AgBrO3', name: 'Silver(I) bromate', density: 5.21 },
        ]
    ],
    [
        'AgC2H3O2', [
            { symbol: 'AgC2H3O2', name: 'Silver(I) acetate', density: 3.26 },
        ]
    ],
    [
        'AgCN', [
            { symbol: 'AgCN', name: 'Silver(I) cyanide', density: 3.95 },
        ]
    ],
    [
        'AgCl', [
            { symbol: 'AgCl', name: 'Silver(I) chloride', density: 5.56 },
        ]
    ],
    [
        'AgClO3', [
            { symbol: 'AgClO3', name: 'Silver(I) chlorate', density: 4.43 },
        ]
    ],
    [
        'AgClO4', [
            { symbol: 'AgClO4', name: 'Silver(I) perchlorate', density: 2.806 },
        ]
    ],
    [
        'AgCuSe', [
            { symbol: 'AgCuSe', name: 'Eucairite', density: 7.7 },
        ]
    ],
    [
        'AgF', [
            { symbol: 'AgF', name: 'Silver(I) fluoride', density: 5.852 },
        ]
    ],
    [
        'AgF2', [
            { symbol: 'AgF2', name: 'Silver(II) fluoride', density: 4.58 },
        ]
    ],
    [
        'AgI', [
            { symbol: 'AgI', name: 'Iodyrite', density: 5.68 },
            { symbol: 'AgI', name: 'Miersite', density: 5.68 },
        ]
    ],
    [
        'AgIO3', [
            { symbol: 'AgIO3', name: 'Silver(I) iodate', density: 5.53 },
        ]
    ],
    [
        'AgMnO4', [
            { symbol: 'AgMnO4', name: 'Silver(I) permanganate', density: 4.49 },
        ]
    ],
    [
        'AgN3', [
            { symbol: 'AgN3', name: 'Silver azide', density: 4.9 },
        ]
    ],
    [
        'AgNO2', [
            { symbol: 'AgNO2', name: 'Silver(I) nitrite', density: 4.453 },
        ]
    ],
    [
        'AgNO3', [
            { symbol: 'AgNO3', name: 'Silver(I) nitrate', density: 4.35 },
        ]
    ],
    [
        'AgO', [
            { symbol: 'AgO', name: 'Silver(II) oxide', density: 7.5 },
        ]
    ],
    [
        'AgPO3', [
            { symbol: 'AgPO3', name: 'Silver(I) metaphosphate', density: 6.37 },
        ]
    ],
    [
        'Al', [
            { symbol: 'Al', name: 'Aluminum', density: 2.7 },
        ]
    ],
    [
        'Al(C18H35O2)3', [
            { symbol: 'Al(C18H35O2)3', name: 'Aluminum stearate', density: 1.07 },
        ]
    ],
    [
        'Al(CH3COCHCOCH3)3', [
            { symbol: 'Al(CH3COCHCOCH3)3', name: 'Aluminum 2,4-pentanedioate', density: 1.27 },
        ]
    ],
    [
        'Al(ClO4)3·9H2O', [
            { symbol: 'Al(ClO4)3·9H2O', name: 'Aluminum perchlorate nonahydrate', density: 2.0 },
        ]
    ],
    [
        'Al(NO3)3·9H2O', [
            { symbol: 'Al(NO3)3·9H2O', name: 'Aluminum nitrate nonahydrate', density: 1.72 },
        ]
    ],
    [
        'Al(OH)2(C18H35O2)', [
            { symbol: 'Al(OH)2(C18H35O2)', name: 'Aluminum monostearate', density: 1.02 },
        ]
    ],
    [
        'Al(OH)3', [
            { symbol: 'Al(OH)3', name: 'Gibbsite', density: 2.42 },
        ]
    ],
    [
        'Al(PO3)3', [
            { symbol: 'Al(PO3)3', name: 'Aluminum metaphosphate', density: 2.78 },
        ]
    ],
    [
        'Al2(OH)3PO4', [
            { symbol: 'Al2(OH)3PO4', name: 'Aluminum phosphate trihydroxide', density: 2.7 },
        ]
    ],
    [
        'Al2(PO4)(OH)3', [
            { symbol: 'Al2(PO4)(OH)3', name: 'Augelite', density: 2.7 },
        ]
    ],
    [
        'Al2(SO4)(OH)4·7H2O', [
            { symbol: 'Al2(SO4)(OH)4·7H2O', name: 'Aluminite', density: 1.74 },
        ]
    ],
    [
        'Al2(SO4)3·18H2O', [
            { symbol: 'Al2(SO4)3·18H2O', name: 'Aluminum sulfate octadecahydrate', density: 1.69 },
        ]
    ],
    [
        'Al2(SiO4)(F,OH)2', [
            { symbol: 'Al2(SiO4)(F,OH)2', name: 'Topaz', density: 3.53 },
        ]
    ],
    [
        'Al2C12O12·18H2O', [
            { symbol: 'Al2C12O12·18H2O', name: 'Mellite', density: 1.64 },
        ]
    ],
    [
        'Al2O3', [
            { symbol: 'Al2O3', name: 'Aluminum oxide (α)', density: 3.99 },
            { symbol: 'Al2O3', name: 'Aluminum oxide (γ)', density: 3.97 },
            { symbol: 'Al2O3', name: 'Corundum', density: 3.97 },
        ]
    ],
    [
        'Al2O3·2SiO2·2H2O', [
            { symbol: 'Al2O3·2SiO2·2H2O', name: 'Aluminum silicate dihydrate', density: 2.59 },
        ]
    ],
    [
        'Al2OSiO4', [
            { symbol: 'Al2OSiO4', name: 'Andalusite', density: 3.15 },
            { symbol: 'Al2OSiO4', name: 'Kyanite', density: 3.59 },
            { symbol: 'Al2OSiO4', name: 'Sillimanite', density: 3.25 },
        ]
    ],
    [
        'Al2S3', [
            { symbol: 'Al2S3', name: 'Aluminum sulfide', density: 2.02 },
        ]
    ],
    [
        'Al2Se3', [
            { symbol: 'Al2Se3', name: 'Aluminum selenide', density: 3.437 },
        ]
    ],
    [
        'Al2Si2O5(OH)4', [
            { symbol: 'Al2Si2O5(OH)4', name: 'Kaolinite', density: 2.65 },
        ]
    ],
    [
        'Al2Si4O10(OH)2', [
            { symbol: 'Al2Si4O10(OH)2', name: 'Pyrophyllite', density: 2.78 },
        ]
    ],
    [
        'Al2SiO5', [
            { symbol: 'Al2SiO5', name: 'Aluminum silicate', density: 3.145 },
            { symbol: 'Al2SiO5', name: 'Aluminum silicate', density: 3.68 },
            { symbol: 'Al2SiO5', name: 'Aluminum silicate', density: 3.25 },
        ]
    ],
    [
        'Al2Te3', [
            { symbol: 'Al2Te3', name: 'Aluminum telluride', density: 4.5 },
        ]
    ],
    [
        'Al3(Mg,Fe)2Si5AlO18', [
            { symbol: 'Al3(Mg,Fe)2Si5AlO18', name: 'Cordierite', density: 2.66 },
        ]
    ],
    [
        'Al3(OH)3(PO4)2·5H2O', [
            { symbol: 'Al3(OH)3(PO4)2·5H2O', name: 'Wavellite', density: 2.36 },
        ]
    ],
    [
        'Al4C3', [
            { symbol: 'Al4C3', name: 'Aluminum carbide', density: 2.36 },
        ]
    ],
    [
        'AlAs', [
            { symbol: 'AlAs', name: 'Aluminum arsenide', density: 3.76 },
        ]
    ],
    [
        'AlB12', [
            { symbol: 'AlB12', name: 'Aluminum dodecaboride', density: 2.55 },
        ]
    ],
    [
        'AlB2', [
            { symbol: 'AlB2', name: 'Aluminum diboride', density: 3.19 },
        ]
    ],
    [
        'AlBr3', [
            { symbol: 'AlBr3', name: 'Aluminum bromide', density: 3.2 },
        ]
    ],
    [
        'AlBr3·6H2O', [
            { symbol: 'AlBr3·6H2O', name: 'Aluminum bromide hexahydrate', density: 2.54 },
        ]
    ],
    [
        'AlCl(C2H5)2', [
            { symbol: 'AlCl(C2H5)2', name: 'Chlorodiethylaluminum', density: 0.96 },
        ]
    ],
    [
        'AlCl(C4H9)2', [
            { symbol: 'AlCl(C4H9)2', name: 'Chlorodiisobutylaluminum', density: 0.95 },
        ]
    ],
    [
        'AlCl3', [
            { symbol: 'AlCl3', name: 'Aluminum chloride', density: 2.48 },
        ]
    ],
    [
        'AlCl3·6H2O', [
            { symbol: 'AlCl3·6H2O', name: 'Aluminum chloride hexahydrate', density: 2.398 },
        ]
    ],
    [
        'AlF3', [
            { symbol: 'AlF3', name: 'Aluminum fluoride', density: 3.1 },
        ]
    ],
    [
        'AlF3·3H2O', [
            { symbol: 'AlF3·3H2O', name: 'Aluminum fluoride trihydrate', density: 1.914 },
        ]
    ],
    [
        'AlF3·H2O', [
            { symbol: 'AlF3·H2O', name: 'Aluminum fluoride monohydrate', density: 2.17 },
        ]
    ],
    [
        'AlI3', [
            { symbol: 'AlI3', name: 'Aluminum iodide', density: 3.98 },
        ]
    ],
    [
        'AlN', [
            { symbol: 'AlN', name: 'Aluminum nitride', density: 3.255 },
        ]
    ],
    [
        'AlNH4(SO4)2·12H2O', [
            { symbol: 'AlNH4(SO4)2·12H2O', name: 'Aluminum ammonium sulfate  dodecahydrate', density: 1.65 },
        ]
    ],
    [
        'AlO(OH)', [
            { symbol: 'AlO(OH)', name: 'Aluminum oxyhydroxide', density: 3.07 },
            { symbol: 'AlO(OH)', name: 'Aluminum oxyhydroxide', density: 3.38 },
            { symbol: 'AlO(OH)', name: 'Boehmite', density: 3.44 },
            { symbol: 'AlO(OH)', name: 'Diaspore', density: 3.4 },
        ]
    ],
    [
        'AlP', [
            { symbol: 'AlP', name: 'Aluminum phosphide', density: 2.4 },
        ]
    ],
    [
        'AlPO4', [
            { symbol: 'AlPO4', name: 'Aluminum phosphate', density: 2.56 },
        ]
    ],
    [
        'AlPO4·2H2O', [
            { symbol: 'AlPO4·2H2O', name: 'Aluminum phosphate dihydrate', density: 2.54 },
        ]
    ],
    [
        'AlSb', [
            { symbol: 'AlSb', name: 'Aluminum antimonide', density: 4.26 },
        ]
    ],
    [
        'Am', [
            { symbol: 'Am', name: 'Americium', density: 12.0 },
        ]
    ],
    [
        'Am2O3', [
            { symbol: 'Am2O3', name: 'Americium(III) oxide', density: 11.77 },
        ]
    ],
    [
        'AmBr3', [
            { symbol: 'AmBr3', name: 'Americium(III) bromide', density: 6.85 },
        ]
    ],
    [
        'AmCl3', [
            { symbol: 'AmCl3', name: 'Americium(III) chloride', density: 5.87 },
        ]
    ],
    [
        'AmF3', [
            { symbol: 'AmF3', name: 'Americium(III) fluoride', density: 9.53 },
        ]
    ],
    [
        'AmF4', [
            { symbol: 'AmF4', name: 'Americium(IV) fluoride', density: 7.23 },
        ]
    ],
    [
        'AmI3', [
            { symbol: 'AmI3', name: 'Americium(III) iodide', density: 6.9 },
        ]
    ],
    [
        'AmO2', [
            { symbol: 'AmO2', name: 'Americium(IV) oxide', density: 11.68 },
        ]
    ],
    [
        'As', [
            { symbol: 'As', name: 'Arsenic (gray)', density: 5.75 },
            { symbol: 'As', name: 'Arsenic (black)', density: 4.9 },
        ]
    ],
    [
        'As(C2H5O)3', [
            { symbol: 'As(C2H5O)3', name: 'Arsenic(III) ethoxide', density: 1.21 },
        ]
    ],
    [
        'As2O3', [
            { symbol: 'As2O3', name: 'Arsenolite', density: 3.86 },
            { symbol: 'As2O3', name: 'Claudetite', density: 3.74 },
        ]
    ],
    [
        'As2O5', [
            { symbol: 'As2O5', name: 'Arsenic(V) oxide', density: 4.32 },
        ]
    ],
    [
        'As2S3', [
            { symbol: 'As2S3', name: 'Orpiment', density: 3.46 },
        ]
    ],
    [
        'As4S4', [
            { symbol: 'As4S4', name: 'Realgar', density: 3.5 },
        ]
    ],
    [
        'AsBr3', [
            { symbol: 'AsBr3', name: 'Arsenic(III) bromide', density: 3.4 },
        ]
    ],
    [
        'AsCl3', [
            { symbol: 'AsCl3', name: 'Arsenic(III) chloride', density: 2.15 },
        ]
    ],
    [
        'AsF3', [
            { symbol: 'AsF3', name: 'Arsenic(III) fluoride', density: 2.7 },
        ]
    ],
    [
        'AsI3', [
            { symbol: 'AsI3', name: 'Arsenic(III) iodide', density: 4.73 },
        ]
    ],
    [
        'Au', [
            { symbol: 'Au', name: 'Gold', density: 19.3 },
        ]
    ],
    [
        'Au2S', [
            { symbol: 'Au2S', name: 'Gold(I) sulfide', density: 11.0 },
        ]
    ],
    [
        'Au2Se3', [
            { symbol: 'Au2Se3', name: 'Gold(III) selenide', density: 4.65 },
        ]
    ],
    [
        'AuBr', [
            { symbol: 'AuBr', name: 'Gold(I) bromide', density: 8.2 },
        ]
    ],
    [
        'AuCN', [
            { symbol: 'AuCN', name: 'Gold(I) cyanide', density: 7.2 },
        ]
    ],
    [
        'AuCl', [
            { symbol: 'AuCl', name: 'Gold(I) chloride', density: 7.6 },
        ]
    ],
    [
        'AuCl3', [
            { symbol: 'AuCl3', name: 'Gold(III) chloride', density: 4.7 },
        ]
    ],
    [
        'AuF3', [
            { symbol: 'AuF3', name: 'Gold(III) fluoride', density: 6.75 },
        ]
    ],
    [
        'AuI', [
            { symbol: 'AuI', name: 'Gold(I) iodide', density: 8.25 },
        ]
    ],
    [
        'B', [
            { symbol: 'B', name: 'Boron', density: 2.34 },
        ]
    ],
    [
        'B10H14', [
            { symbol: 'B10H14', name: 'Decaborane(14)', density: 0.94 },
        ]
    ],
    [
        'B2O3', [
            { symbol: 'B2O3', name: 'Boron oxide', density: 2.55 },
        ]
    ],
    [
        'B2S3', [
            { symbol: 'B2S3', name: 'Boron sulfide', density: 1.7 },
        ]
    ],
    [
        'B3N3H6', [
            { symbol: 'B3N3H6', name: 'Borazine', density: 0.824 },
        ]
    ],
    [
        'B4C', [
            { symbol: 'B4C', name: 'Boron carbide', density: 2.5 },
        ]
    ],
    [
        'B5H9', [
            { symbol: 'B5H9', name: 'Pentaborane(9)', density: 0.6 },
        ]
    ],
    [
        'B6H10', [
            { symbol: 'B6H10', name: 'Hexaborane(10)', density: 0.67 },
        ]
    ],
    [
        'BAs', [
            { symbol: 'BAs', name: 'Boron arsenide', density: 5.22 },
        ]
    ],
    [
        'BBr3', [
            { symbol: 'BBr3', name: 'Boron tribromide', density: 2.6 },
        ]
    ],
    [
        'BF3(C2H5)2O', [
            { symbol: 'BF3(C2H5)2O', name: 'Boron trifluoride etherate', density: 1.125 },
        ]
    ],
    [
        'BI3', [
            { symbol: 'BI3', name: 'Boron triiodide', density: 3.35 },
        ]
    ],
    [
        'BN', [
            { symbol: 'BN', name: 'Boron nitride', density: 2.18 },
        ]
    ],
    [
        'Ba(C18H35O2)2', [
            { symbol: 'Ba(C18H35O2)2', name: 'Barium stearate', density: 1.145 },
        ]
    ],
    [
        'Ba(ClO4)2', [
            { symbol: 'Ba(ClO4)2', name: 'Barium perchlorate', density: 3.2 },
        ]
    ],
    [
        'Ba(ClO4)2·3H2O', [
            { symbol: 'Ba(ClO4)2·3H2O', name: 'Barium perchlorate trihydrate', density: 2.74 },
        ]
    ],
    [
        'Ba(MnO4)2', [
            { symbol: 'Ba(MnO4)2', name: 'Barium permanganate', density: 3.77 },
        ]
    ],
    [
        'Ba(NO2)2', [
            { symbol: 'Ba(NO2)2', name: 'Barium nitrite', density: 3.234 },
        ]
    ],
    [
        'Ba(NO2)2·H2O', [
            { symbol: 'Ba(NO2)2·H2O', name: 'Barium nitrite monohydrate', density: 3.18 },
        ]
    ],
    [
        'Ba(NO3)2', [
            { symbol: 'Ba(NO3)2', name: 'Barium nitrate', density: 3.24 },
        ]
    ],
    [
        'Ba(NbO3)2', [
            { symbol: 'Ba(NbO3)2', name: 'Barium niobate', density: 5.44 },
        ]
    ],
    [
        'Ba(SCN)2·3H2O', [
            { symbol: 'Ba(SCN)2·3H2O', name: 'Barium thiocyanate trihydrate', density: 2.286 },
        ]
    ],
    [
        'Ba2Na(NbO3)5', [
            { symbol: 'Ba2Na(NbO3)5', name: 'Barium sodium niobate', density: 5.4 },
        ]
    ],
    [
        'Ba2P2O7', [
            { symbol: 'Ba2P2O7', name: 'Barium pyrophosphate', density: 3.9 },
        ]
    ],
    [
        'Ba3(VO4)2', [
            { symbol: 'Ba3(VO4)2', name: 'Barium orthovanadate', density: 5.14 },
        ]
    ],
    [
        'Ba3N2', [
            { symbol: 'Ba3N2', name: 'Barium nitride', density: 4.78 },
        ]
    ],
    [
        'BaAl2Si2O8', [
            { symbol: 'BaAl2Si2O8', name: 'Celsian', density: 3.25 },
        ]
    ],
    [
        'BaAl2Si3O10·4H2O', [
            { symbol: 'BaAl2Si3O10·4H2O', name: 'Eddingtonite', density: 2.8 },
        ]
    ],
    [
        'BaC2O4', [
            { symbol: 'BaC2O4', name: 'Barium oxalate', density: 2.658 },
        ]
    ],
    [
        'BaC2O4·H2O', [
            { symbol: 'BaC2O4·H2O', name: 'Barium oxalate monohydrate', density: 2.66 },
        ]
    ],
    [
        'BaC4H4O6', [
            { symbol: 'BaC4H4O6', name: 'Barium tartrate', density: 2.98 },
        ]
    ],
    [
        'BaK2(CrO4)2', [
            { symbol: 'BaK2(CrO4)2', name: 'Barium potassium chromate', density: 3.63 },
        ]
    ],
    [
        'BaMn9O16(OH)4', [
            { symbol: 'BaMn9O16(OH)4', name: 'Psilomelane', density: 4.71 },
        ]
    ],
    [
        'BaMoO4', [
            { symbol: 'BaMoO4', name: 'Barium molybdate', density: 4.975 },
        ]
    ],
    [
        'BaO', [
            { symbol: 'BaO', name: 'Barium oxide', density: 5.72 },
        ]
    ],
    [
        'BaO2', [
            { symbol: 'BaO2', name: 'Barium peroxide', density: 4.96 },
        ]
    ],
    [
        'BaPt(CN)4·4H2O', [
            { symbol: 'BaPt(CN)4·4H2O', name: 'Barium tetracyanoplatinate(II) tetrahydrate', density: 2.076 },
        ]
    ],
    [
        'BaS', [
            { symbol: 'BaS', name: 'Barium sulfide', density: 4.3 },
        ]
    ],
    [
        'BaS2O3·H2O', [
            { symbol: 'BaS2O3·H2O', name: 'Barium thiosulfate monohydrate', density: 3.5 },
        ]
    ],
    [
        'BaSO3', [
            { symbol: 'BaSO3', name: 'Barium sulfite', density: 4.44 },
        ]
    ],
    [
        'BaSO4', [
            { symbol: 'BaSO4', name: 'Barite', density: 4.49 },
        ]
    ],
    [
        'BaSe', [
            { symbol: 'BaSe', name: 'Barium selenide', density: 5.02 },
        ]
    ],
    [
        'BaSeO4', [
            { symbol: 'BaSeO4', name: 'Barium selenate', density: 4.75 },
        ]
    ],
    [
        'BaSiO3', [
            { symbol: 'BaSiO3', name: 'Barium metasilicate', density: 4.4 },
        ]
    ],
    [
        'BaSnO3', [
            { symbol: 'BaSnO3', name: 'Barium stannate', density: 7.24 },
        ]
    ],
    [
        'BaTi(SiO3)3', [
            { symbol: 'BaTi(SiO3)3', name: 'Benitoite', density: 3.65 },
        ]
    ],
    [
        'BaTiO3', [
            { symbol: 'BaTiO3', name: 'Barium titanate [BaTiO3]', density: 6.02 },
        ]
    ],
    [
        'BaWO4', [
            { symbol: 'BaWO4', name: 'Barium tungstate', density: 5.04 },
        ]
    ],
    [
        'BaZrO3', [
            { symbol: 'BaZrO3', name: 'Barium zirconate', density: 5.52 },
        ]
    ],
    [
        'Ba[Al2Si6O16]·6H2O', [
            { symbol: 'Ba[Al2Si6O16]·6H2O', name: 'Harmotome', density: 2.44 },
        ]
    ],
    [
        'Be', [
            { symbol: 'Be', name: 'Beryllium', density: 1.85 },
        ]
    ],
    [
        'Be(CH3COCHCOCH3)2', [
            { symbol: 'Be(CH3COCHCOCH3)2', name: 'Beryllium 2,4-pentanedioate', density: 1.168 },
        ]
    ],
    [
        'Be(OH)2', [
            { symbol: 'Be(OH)2', name: 'Beryllium hydroxide (α)', density: 1.92 },
        ]
    ],
    [
        'Be2(OH,F)BO3', [
            { symbol: 'Be2(OH,F)BO3', name: 'Hambergite', density: 2.36 },
        ]
    ],
    [
        'Be2C', [
            { symbol: 'Be2C', name: 'Beryllium carbide', density: 1.9 },
        ]
    ],
    [
        'Be2SiO4', [
            { symbol: 'Be2SiO4', name: 'Phenakite', density: 2.98 },
        ]
    ],
    [
        'Be3Al2(SiO3)6', [
            { symbol: 'Be3Al2(SiO3)6', name: 'Beryl', density: 2.64 },
        ]
    ],
    [
        'Be3N2', [
            { symbol: 'Be3N2', name: 'Beryllium nitride', density: 2.71 },
        ]
    ],
    [
        'Be4O(C2H3O2)6', [
            { symbol: 'Be4O(C2H3O2)6', name: 'Beryllium basic acetate', density: 1.25 },
        ]
    ],
    [
        'Be4Si2O7(OH)2', [
            { symbol: 'Be4Si2O7(OH)2', name: 'Bertrandite', density: 2.6 },
        ]
    ],
    [
        'BeAl2O4', [
            { symbol: 'BeAl2O4', name: 'Beryllium aluminate', density: 3.65 },
        ]
    ],
    [
        'BeAlSiO4(OH)', [
            { symbol: 'BeAlSiO4(OH)', name: 'Euclasite', density: 3.1 },
        ]
    ],
    [
        'BeBr2', [
            { symbol: 'BeBr2', name: 'Beryllium bromide', density: 3.465 },
        ]
    ],
    [
        'BeCl2', [
            { symbol: 'BeCl2', name: 'Beryllium chloride', density: 1.9 },
        ]
    ],
    [
        'BeF2', [
            { symbol: 'BeF2', name: 'Beryllium fluoride', density: 2.1 },
        ]
    ],
    [
        'BeH2', [
            { symbol: 'BeH2', name: 'Beryllium hydride', density: 0.65 },
        ]
    ],
    [
        'BeI2', [
            { symbol: 'BeI2', name: 'Beryllium iodide', density: 4.32 },
        ]
    ],
    [
        'BeO', [
            { symbol: 'BeO', name: 'Beryllium oxide', density: 3.01 },
        ]
    ],
    [
        'BeS', [
            { symbol: 'BeS', name: 'Beryllium sulfide', density: 2.36 },
        ]
    ],
    [
        'BeSO4', [
            { symbol: 'BeSO4', name: 'Beryllium sulfate', density: 2.5 },
        ]
    ],
    [
        'BeSO4·4H2O', [
            { symbol: 'BeSO4·4H2O', name: 'Beryllium sulfate tetrahydrate', density: 1.71 },
        ]
    ],
    [
        'BeSeO4·4H2O', [
            { symbol: 'BeSeO4·4H2O', name: 'Beryllium selenate tetrahydrate', density: 2.03 },
        ]
    ],
    [
        'Bi', [
            { symbol: 'Bi', name: 'Bismuth', density: 9.79 },
        ]
    ],
    [
        'Bi(CH3)3', [
            { symbol: 'Bi(CH3)3', name: 'Bismuth trimethyl', density: 2.3 },
        ]
    ],
    [
        'Bi(NO3)3·5H2O', [
            { symbol: 'Bi(NO3)3·5H2O', name: 'Bismuth nitrate pentahydrate', density: 2.83 },
        ]
    ],
    [
        'Bi(OH)3', [
            { symbol: 'Bi(OH)3', name: 'Bismuth hydroxide', density: 4.962 },
        ]
    ],
    [
        'Bi2(MoO4)3', [
            { symbol: 'Bi2(MoO4)3', name: 'Bismuth molybdate', density: 5.95 },
        ]
    ],
    [
        'Bi2(SO4)3', [
            { symbol: 'Bi2(SO4)3', name: 'Bismuth sulfate', density: 5.08 },
        ]
    ],
    [
        'Bi2MoO6', [
            { symbol: 'Bi2MoO6', name: 'Bismuth molybdate', density: 9.32 },
        ]
    ],
    [
        'Bi2O3', [
            { symbol: 'Bi2O3', name: 'Bismuth oxide', density: 8.9 },
        ]
    ],
    [
        'Bi2O4', [
            { symbol: 'Bi2O4', name: 'Bismuth tetroxide', density: 5.6 },
        ]
    ],
    [
        'Bi2S3', [
            { symbol: 'Bi2S3', name: 'Bismuthinite', density: 6.78 },
        ]
    ],
    [
        'Bi2Se3', [
            { symbol: 'Bi2Se3', name: 'Bismuth selenide', density: 7.5 },
        ]
    ],
    [
        'Bi2Te3', [
            { symbol: 'Bi2Te3', name: 'Tellurobismuthite', density: 7.74 },
        ]
    ],
    [
        'Bi4(SiO4)3', [
            { symbol: 'Bi4(SiO4)3', name: 'Eulytite', density: 6.6 },
        ]
    ],
    [
        'Bi4(TiO4)3', [
            { symbol: 'Bi4(TiO4)3', name: 'Bismuth titanate', density: 7.85 },
        ]
    ],
    [
        'Bi5O(OH)9(NO3)4', [
            { symbol: 'Bi5O(OH)9(NO3)4', name: 'Bismuth subnitrate', density: 4.928 },
        ]
    ],
    [
        'BiAsO4', [
            { symbol: 'BiAsO4', name: 'Bismuth arsenate', density: 7.14 },
        ]
    ],
    [
        'BiBr3', [
            { symbol: 'BiBr3', name: 'Bismuth tribromide', density: 5.72 },
        ]
    ],
    [
        'BiC6H5O7', [
            { symbol: 'BiC6H5O7', name: 'Bismuth citrate', density: 3.458 },
        ]
    ],
    [
        'BiCl3', [
            { symbol: 'BiCl3', name: 'Bismuth trichloride', density: 4.75 },
        ]
    ],
    [
        'BiF3', [
            { symbol: 'BiF3', name: 'Bismuth trifluoride', density: 8.3 },
        ]
    ],
    [
        'BiF5', [
            { symbol: 'BiF5', name: 'Bismuth pentafluoride', density: 5.55 },
        ]
    ],
    [
        'BiI3', [
            { symbol: 'BiI3', name: 'Bismuth triiodide', density: 5.778 },
        ]
    ],
    [
        'BiOBr', [
            { symbol: 'BiOBr', name: 'Bismuth oxybromide', density: 8.08 },
        ]
    ],
    [
        'BiOCl', [
            { symbol: 'BiOCl', name: 'Bismuth oxychloride', density: 7.72 },
        ]
    ],
    [
        'BiOI', [
            { symbol: 'BiOI', name: 'Bismuth oxyiodide', density: 7.92 },
        ]
    ],
    [
        'BiONO3', [
            { symbol: 'BiONO3', name: 'Bismuth oxynitrate', density: 4.93 },
        ]
    ],
    [
        'BiPO4', [
            { symbol: 'BiPO4', name: 'Bismuth phosphate', density: 6.32 },
        ]
    ],
    [
        'BiVO4', [
            { symbol: 'BiVO4', name: 'Bismuth vanadate', density: 6.25 },
        ]
    ],
    [
        'Bk', [
            { symbol: 'Bk', name: 'Berkelium (α form)', density: 14.78 },
            { symbol: 'Bk', name: 'Berkelium (β form)', density: 13.25 },
        ]
    ],
    [
        'Br2', [
            { symbol: 'Br2', name: 'Bromine', density: 3.1028 },
        ]
    ],
    [
        'BrCN', [
            { symbol: 'BrCN', name: 'Cyanogen bromide', density: 2.015 },
        ]
    ],
    [
        'BrF3', [
            { symbol: 'BrF3', name: 'Bromine trifluoride', density: 2.803 },
        ]
    ],
    [
        'BrF5', [
            { symbol: 'BrF5', name: 'Bromine pentafluoride', density: 2.46 },
        ]
    ],
    [
        'C', [
            { symbol: 'C', name: 'Carbon (graphite)', density: 2.2 },
            { symbol: 'C', name: 'Carbon (diamond)', density: 3.513 },
        ]
    ],
    [
        'C3O2', [
            { symbol: 'C3O2', name: 'Carbon suboxide', density: 1.114 },
        ]
    ],
    [
        'C3S2', [
            { symbol: 'C3S2', name: 'Carbon subsulfide', density: 1.27 },
        ]
    ],
    [
        'COBr2', [
            { symbol: 'COBr2', name: 'Carbonyl bromide', density: 2.52 },
        ]
    ],
    [
        'CS2', [
            { symbol: 'CS2', name: 'Carbon disulfide', density: 1.2632 },
        ]
    ],
    [
        'CSSe', [
            { symbol: 'CSSe', name: 'Carbon sulfide selenide', density: 1.99 },
        ]
    ],
    [
        'CSe2', [
            { symbol: 'CSe2', name: 'Carbon diselenide', density: 2.6823 },
        ]
    ],
    [
        'Ca(ClO4)2', [
            { symbol: 'Ca(ClO4)2', name: 'Calcium perchlorate', density: 2.65 },
        ]
    ],
    [
        'Ca(Fe,Mg,Mn)(CO3)2', [
            { symbol: 'Ca(Fe,Mg,Mn)(CO3)2', name: 'Ankerite', density: 3.0 },
        ]
    ],
    [
        'Ca(IO3)2', [
            { symbol: 'Ca(IO3)2', name: 'Calcium iodate', density: 4.52 },
        ]
    ],
    [
        'Ca(MnO4)2', [
            { symbol: 'Ca(MnO4)2', name: 'Calcium permanganate', density: 2.4 },
        ]
    ],
    [
        'Ca(Mo,W)O4', [
            { symbol: 'Ca(Mo,W)O4', name: 'Powellite', density: 4.35 },
        ]
    ],
    [
        'Ca(NO2)2', [
            { symbol: 'Ca(NO2)2', name: 'Calcium nitrite', density: 2.23 },
        ]
    ],
    [
        'Ca(NO3)2', [
            { symbol: 'Ca(NO3)2', name: 'Calcium nitrate', density: 2.5 },
        ]
    ],
    [
        'Ca(NO3)2·4H2O', [
            { symbol: 'Ca(NO3)2·4H2O', name: 'Calcium nitrate tetrahydrate', density: 1.82 },
        ]
    ],
    [
        'Ca(OCl)2', [
            { symbol: 'Ca(OCl)2', name: 'Calcium hypochlorite', density: 2.35 },
        ]
    ],
    [
        'Ca(OH)2', [
            { symbol: 'Ca(OH)2', name: 'Calcium hydroxide', density: 2.2 },
        ]
    ],
    [
        'Ca(UO2)2(PO4)2·10H2O', [
            { symbol: 'Ca(UO2)2(PO4)2·10H2O', name: 'Autunite', density: 3.2 },
        ]
    ],
    [
        'Ca10(Mg,Fe)2Al4(Si2O7)2(SiO4)5(OH,F)4', [
            { symbol: 'Ca10(Mg,Fe)2Al4(Si2O7)2(SiO4)5(OH,F)4', name: 'Vesuvianite', density: 3.33 },
        ]
    ],
    [
        'Ca2(Mg,Fe)4Al(Si7AlO22)(OH)2', [
            { symbol: 'Ca2(Mg,Fe)4Al(Si7AlO22)(OH)2', name: 'Hornblende', density: 3.24 },
        ]
    ],
    [
        'Ca2(Mg,Fe)5Si8O22(OH,F)2', [
            { symbol: 'Ca2(Mg,Fe)5Si8O22(OH,F)2', name: 'Actinolite', density: 3.23 },
        ]
    ],
    [
        'Ca2Al1.5Mn1.5(SiO4)3OH', [
            { symbol: 'Ca2Al1.5Mn1.5(SiO4)3OH', name: 'Piemontite', density: 3.49 },
        ]
    ],
    [
        'Ca2Al2(Al,Fe,Mg)[Si2(O,OH)7](SiO4)  (OH,O)3', [
            { symbol: 'Ca2Al2(Al,Fe,Mg)[Si2(O,OH)7](SiO4)  (OH,O)3', name: 'Pumpellyite', density: 3.21 },
        ]
    ],
    [
        'Ca2Al2FeOH(SiO4)3', [
            { symbol: 'Ca2Al2FeOH(SiO4)3', name: 'Epidote', density: 3.44 },
        ]
    ],
    [
        'Ca2Al2Si3O10(OH)2', [
            { symbol: 'Ca2Al2Si3O10(OH)2', name: 'Prehnite', density: 2.93 },
        ]
    ],
    [
        'Ca2Al3(SiO4)3OH', [
            { symbol: 'Ca2Al3(SiO4)3OH', name: 'Clinozoisite', density: 3.3 },
            { symbol: 'Ca2Al3(SiO4)3OH', name: 'Zoisite', density: 3.26 },
        ]
    ],
    [
        'Ca2B6O11·5H2O', [
            { symbol: 'Ca2B6O11·5H2O', name: 'Colemanite', density: 2.42 },
        ]
    ],
    [
        'Ca2Mg5Si8O22(OH)2', [
            { symbol: 'Ca2Mg5Si8O22(OH)2', name: 'Tremolite', density: 3.0 },
        ]
    ],
    [
        'Ca2MgSi2O7', [
            { symbol: 'Ca2MgSi2O7', name: 'Akermanite', density: 2.94 },
        ]
    ],
    [
        'Ca2NaH(SiO3)3', [
            { symbol: 'Ca2NaH(SiO3)3', name: 'Pectolite', density: 2.88 },
        ]
    ],
    [
        'Ca2P2O7', [
            { symbol: 'Ca2P2O7', name: 'Calcium pyrophosphate', density: 3.09 },
        ]
    ],
    [
        'Ca2PbO4', [
            { symbol: 'Ca2PbO4', name: 'Calcium plumbate', density: 5.71 },
        ]
    ],
    [
        'Ca3(PO4)2', [
            { symbol: 'Ca3(PO4)2', name: 'Calcium phosphate', density: 3.14 },
        ]
    ],
    [
        'Ca3Al2(SiO4)3', [
            { symbol: 'Ca3Al2(SiO4)3', name: 'Grossularite', density: 3.59 },
        ]
    ],
    [
        'Ca3Al2Si2O8(SiO4)1-m(OH)4m', [
            { symbol: 'Ca3Al2Si2O8(SiO4)1-m(OH)4m', name: 'Hydrogrossularite', density: 3.4 },
        ]
    ],
    [
        'Ca3Cr2Si3O12', [
            { symbol: 'Ca3Cr2Si3O12', name: 'Uvarovite', density: 3.83 },
        ]
    ],
    [
        'Ca3Fe2Si3O12', [
            { symbol: 'Ca3Fe2Si3O12', name: 'Andradite', density: 3.86 },
        ]
    ],
    [
        'Ca3N2', [
            { symbol: 'Ca3N2', name: 'Calcium nitride', density: 2.67 },
        ]
    ],
    [
        'Ca3P2', [
            { symbol: 'Ca3P2', name: 'Calcium phosphide', density: 2.51 },
        ]
    ],
    [
        'Ca4Al6Si6O24CO3', [
            { symbol: 'Ca4Al6Si6O24CO3', name: 'Meionite', density: 2.78 },
        ]
    ],
    [
        'Ca4[Al8Si16O48]·16H2O', [
            { symbol: 'Ca4[Al8Si16O48]·16H2O', name: 'Laumontite', density: 2.3 },
        ]
    ],
    [
        'Ca5(OH)(PO4)3', [
            { symbol: 'Ca5(OH)(PO4)3', name: 'Calcium hydroxide phosphate', density: 3.155 },
        ]
    ],
    [
        'Ca5(PO4)3(OH,F,Cl)', [
            { symbol: 'Ca5(PO4)3(OH,F,Cl)', name: 'Apatite', density: 3.2 },
        ]
    ],
    [
        'CaAl2Si2O7(OH)2·H2O', [
            { symbol: 'CaAl2Si2O7(OH)2·H2O', name: 'Lawsonite', density: 3.08 },
        ]
    ],
    [
        'CaAl2Si2O8', [
            { symbol: 'CaAl2Si2O8', name: 'Anorthite', density: 2.76 },
        ]
    ],
    [
        'CaAl2Si3O10·3H2O', [
            { symbol: 'CaAl2Si3O10·3H2O', name: 'Scolecite', density: 2.27 },
        ]
    ],
    [
        'CaAl2Si4O12·6H2O', [
            { symbol: 'CaAl2Si4O12·6H2O', name: 'Chabazite', density: 2.08 },
        ]
    ],
    [
        'CaB2Si2O8', [
            { symbol: 'CaB2Si2O8', name: 'Danburite', density: 3.0 },
        ]
    ],
    [
        'CaBSiO4(OH)', [
            { symbol: 'CaBSiO4(OH)', name: 'Datolite', density: 2.98 },
        ]
    ],
    [
        'CaBe(PO4)(Fe,OH)', [
            { symbol: 'CaBe(PO4)(Fe,OH)', name: 'Herderite', density: 2.98 },
        ]
    ],
    [
        'CaC2O4', [
            { symbol: 'CaC2O4', name: 'Calcium oxalate', density: 2.2 },
        ]
    ],
    [
        'CaC2O4·H2O', [
            { symbol: 'CaC2O4·H2O', name: 'Calcium oxalate monohydrate', density: 2.2 },
        ]
    ],
    [
        'CaCO3', [
            { symbol: 'CaCO3', name: 'Aragonite', density: 2.83 },
            { symbol: 'CaCO3', name: 'Calcite', density: 2.71 },
            { symbol: 'CaCO3', name: 'Vaterite', density: 2.71 },
        ]
    ],
    [
        'CaF2', [
            { symbol: 'CaF2', name: 'Fluorite', density: 3.18 },
        ]
    ],
    [
        'CaFe(SiO3)2', [
            { symbol: 'CaFe(SiO3)2', name: 'Hedenbergite', density: 3.53 },
        ]
    ],
    [
        'CaH2(SO3)2', [
            { symbol: 'CaH2(SO3)2', name: 'Calcium hydrogen sulfite', density: 1.06 },
        ]
    ],
    [
        'CaHPO4', [
            { symbol: 'CaHPO4', name: 'Calcium hydrogen phosphate', density: 2.92 },
        ]
    ],
    [
        'CaHPO4·2H2O', [
            { symbol: 'CaHPO4·2H2O', name: 'Calcium hydrogen phosphate  dihydrate', density: 2.31 },
        ]
    ],
    [
        'CaI2', [
            { symbol: 'CaI2', name: 'Calcium iodide', density: 3.96 },
        ]
    ],
    [
        'CaI2·6H2O', [
            { symbol: 'CaI2·6H2O', name: 'Calcium iodide hexahydrate', density: 2.55 },
        ]
    ],
    [
        'CaMg(CO3)2', [
            { symbol: 'CaMg(CO3)2', name: 'Dolomite', density: 2.86 },
        ]
    ],
    [
        'CaMg(SiO3)2', [
            { symbol: 'CaMg(SiO3)2', name: 'Diopside', density: 3.3 },
        ]
    ],
    [
        'CaMgSiO4', [
            { symbol: 'CaMgSiO4', name: 'Monticellite', density: 3.18 },
        ]
    ],
    [
        'CaMoO4', [
            { symbol: 'CaMoO4', name: 'Calcium molybdate', density: 4.35 },
        ]
    ],
    [
        'CaO', [
            { symbol: 'CaO', name: 'Calcium oxide', density: 3.34 },
        ]
    ],
    [
        'CaO2', [
            { symbol: 'CaO2', name: 'Calcium peroxide', density: 2.9 },
        ]
    ],
    [
        'CaS', [
            { symbol: 'CaS', name: 'Oldhamite', density: 2.59 },
        ]
    ],
    [
        'CaS2O3·6H2O', [
            { symbol: 'CaS2O3·6H2O', name: 'Calcium thiosulfate hexahydrate', density: 1.87 },
        ]
    ],
    [
        'CaSO4', [
            { symbol: 'CaSO4', name: 'Anhydrite', density: 2.96 },
        ]
    ],
    [
        'CaSO4·2H2O', [
            { symbol: 'CaSO4·2H2O', name: 'Gypsum', density: 2.32 },
        ]
    ],
    [
        'CaSe', [
            { symbol: 'CaSe', name: 'Calcium selenide', density: 3.8 },
        ]
    ],
    [
        'CaSeO4·2H2O', [
            { symbol: 'CaSeO4·2H2O', name: 'Calcium selenate dihydrate', density: 2.75 },
        ]
    ],
    [
        'CaSi', [
            { symbol: 'CaSi', name: 'Calcium silicide (CaSi)', density: 2.39 },
        ]
    ],
    [
        'CaSi2', [
            { symbol: 'CaSi2', name: 'Calcium silicide [CaSi2]', density: 2.5 },
        ]
    ],
    [
        'CaSiO3', [
            { symbol: 'CaSiO3', name: 'Wollastonite', density: 2.92 },
        ]
    ],
    [
        'CaTe', [
            { symbol: 'CaTe', name: 'Calcium telluride', density: 4.87 },
        ]
    ],
    [
        'CaTiO3', [
            { symbol: 'CaTiO3', name: 'Calcium titanate', density: 3.98 },
        ]
    ],
    [
        'CaTiSiO5', [
            { symbol: 'CaTiSiO5', name: 'Sphene', density: 3.5 },
        ]
    ],
    [
        'CaWO4', [
            { symbol: 'CaWO4', name: 'Calcium tungstate', density: 6.06 },
        ]
    ],
    [
        'Cd', [
            { symbol: 'Cd', name: 'Cadmium', density: 8.69 },
        ]
    ],
    [
        'Cd(C2H3O2)2', [
            { symbol: 'Cd(C2H3O2)2', name: 'Cadmium acetate', density: 2.34 },
        ]
    ],
    [
        'Cd(C2H3O2)2·2H2O', [
            { symbol: 'Cd(C2H3O2)2·2H2O', name: 'Cadmium acetate dihydrate', density: 2.01 },
        ]
    ],
    [
        'Cd(CN)2', [
            { symbol: 'Cd(CN)2', name: 'Cadmium cyanide', density: 2.23 },
        ]
    ],
    [
        'Cd(ClO3)2·2H2O', [
            { symbol: 'Cd(ClO3)2·2H2O', name: 'Cadmium chlorate dihydrate', density: 2.28 },
        ]
    ],
    [
        'Cd(IO3)2', [
            { symbol: 'Cd(IO3)2', name: 'Cadmiumiodate', density: 6.48 },
        ]
    ],
    [
        'Cd(N3)2', [
            { symbol: 'Cd(N3)2', name: 'Cadmium azide', density: 3.24 },
        ]
    ],
    [
        'Cd(NO3)2', [
            { symbol: 'Cd(NO3)2', name: 'Cadmium nitrate', density: 3.6 },
        ]
    ],
    [
        'Cd(NO3)2·4H2O', [
            { symbol: 'Cd(NO3)2·4H2O', name: 'Cadmium nitrate tetrahydrate', density: 2.45 },
        ]
    ],
    [
        'Cd(OH)2', [
            { symbol: 'Cd(OH)2', name: 'Cadmium hydroxide', density: 4.79 },
        ]
    ],
    [
        'Cd2Nb2O7', [
            { symbol: 'Cd2Nb2O7', name: 'Cadmium niobate', density: 6.28 },
        ]
    ],
    [
        'Cd3As2', [
            { symbol: 'Cd3As2', name: 'Cadmium arsenide', density: 6.25 },
        ]
    ],
    [
        'CdBr2', [
            { symbol: 'CdBr2', name: 'Cadmium bromide', density: 5.19 },
        ]
    ],
    [
        'CdC2O4', [
            { symbol: 'CdC2O4', name: 'Cadmium oxalate', density: 3.32 },
        ]
    ],
    [
        'CdCO3', [
            { symbol: 'CdCO3', name: 'Cadmium carbonate', density: 5.026 },
        ]
    ],
    [
        'CdCl2', [
            { symbol: 'CdCl2', name: 'Cadmium chloride', density: 4.08 },
        ]
    ],
    [
        'CdCl2·2.5H2O', [
            { symbol: 'CdCl2·2.5H2O', name: 'Cadmium chloride hemipentahydrate', density: 3.327 },
        ]
    ],
    [
        'CdCrO4', [
            { symbol: 'CdCrO4', name: 'Cadmium chromate', density: 4.5 },
        ]
    ],
    [
        'CdF2', [
            { symbol: 'CdF2', name: 'Cadmium fluoride', density: 6.33 },
        ]
    ],
    [
        'CdI2', [
            { symbol: 'CdI2', name: 'Cadmiumiodide', density: 5.64 },
        ]
    ],
    [
        'CdMoO4', [
            { symbol: 'CdMoO4', name: 'Cadmium molybdate', density: 5.4 },
        ]
    ],
    [
        'CdO', [
            { symbol: 'CdO', name: 'Cadmium oxide', density: 8.15 },
        ]
    ],
    [
        'CdS', [
            { symbol: 'CdS', name: 'Greenockite', density: 4.8 },
        ]
    ],
    [
        'CdSb', [
            { symbol: 'CdSb', name: 'Cadmium antimonide', density: 6.92 },
        ]
    ],
    [
        'CdSiO3', [
            { symbol: 'CdSiO3', name: 'Cadmium metasilicate', density: 5.1 },
        ]
    ],
    [
        'Ce', [
            { symbol: 'Ce', name: 'Cerium', density: 6.77 },
        ]
    ],
    [
        'Ce(SO4)2·4H2O', [
            { symbol: 'Ce(SO4)2·4H2O', name: 'Cerium(IV) sulfate tetrahydrate', density: 3.91 },
        ]
    ],
    [
        'Ce2(SO4)3·8H2O', [
            { symbol: 'Ce2(SO4)3·8H2O', name: 'Cerium(III) sulfate octahydrate', density: 2.87 },
        ]
    ],
    [
        'Ce2(SeO4)3', [
            { symbol: 'Ce2(SeO4)3', name: 'Cerium(III) selenate', density: 4.46 },
        ]
    ],
    [
        'Ce2(WO4)3', [
            { symbol: 'Ce2(WO4)3', name: 'Cerium(III) tungstate', density: 6.77 },
        ]
    ],
    [
        'Ce2C3', [
            { symbol: 'Ce2C3', name: 'Cerium carbide', density: 6.9 },
        ]
    ],
    [
        'Ce2O3', [
            { symbol: 'Ce2O3', name: 'Cerium(III) oxide', density: 6.2 },
        ]
    ],
    [
        'Ce2S3', [
            { symbol: 'Ce2S3', name: 'Cerium(III) sulfide', density: 5.02 },
        ]
    ],
    [
        'CeB6', [
            { symbol: 'CeB6', name: 'Cerium boride', density: 4.87 },
        ]
    ],
    [
        'CeC2', [
            { symbol: 'CeC2', name: 'Cerium carbide', density: 5.47 },
        ]
    ],
    [
        'CeCl3', [
            { symbol: 'CeCl3', name: 'Cerium(III) chloride', density: 3.97 },
        ]
    ],
    [
        'CeF3', [
            { symbol: 'CeF3', name: 'Cerium(III) fluoride', density: 6.157 },
        ]
    ],
    [
        'CeF4', [
            { symbol: 'CeF4', name: 'Cerium(IV) fluoride', density: 4.77 },
        ]
    ],
    [
        'CeH2', [
            { symbol: 'CeH2', name: 'Cerium(II) hydride', density: 5.45 },
        ]
    ],
    [
        'CeN', [
            { symbol: 'CeN', name: 'Cerium nitride', density: 7.89 },
        ]
    ],
    [
        'CeO2', [
            { symbol: 'CeO2', name: 'Cerium(IV) oxide', density: 7.216 },
        ]
    ],
    [
        'CeS', [
            { symbol: 'CeS', name: 'Cerium(II) sulfide', density: 5.9 },
        ]
    ],
    [
        'CeSi2', [
            { symbol: 'CeSi2', name: 'Cerium silicide', density: 5.31 },
        ]
    ],
    [
        'Cf', [
            { symbol: 'Cf', name: 'Californium', density: 15.1 },
        ]
    ],
    [
        'Cl2O7', [
            { symbol: 'Cl2O7', name: 'Dichlorine heptoxide', density: 1.9 },
        ]
    ],
    [
        'ClCN', [
            { symbol: 'ClCN', name: 'Cyanogen chloride', density: 1.186 },
        ]
    ],
    [
        'ClOClO3', [
            { symbol: 'ClOClO3', name: 'Chlorine perchlorate', density: 1.81 },
        ]
    ],
    [
        'Cm', [
            { symbol: 'Cm', name: 'Curium', density: 13.51 },
        ]
    ],
    [
        'Co', [
            { symbol: 'Co', name: 'Cobalt', density: 8.86 },
        ]
    ],
    [
        'Co(C18H35O2)2', [
            { symbol: 'Co(C18H35O2)2', name: 'Cobalt(II) stearate', density: 1.13 },
        ]
    ],
    [
        'Co2P', [
            { symbol: 'Co2P', name: 'Cobalt phosphide', density: 6.4 },
        ]
    ],
    [
        'Co2S3', [
            { symbol: 'Co2S3', name: 'Cobalt(III) sulfide', density: 4.8 },
        ]
    ],
    [
        'Co2SnO4', [
            { symbol: 'Co2SnO4', name: 'Cobalt(II) stannate', density: 6.3 },
        ]
    ],
    [
        'Co2TiO4', [
            { symbol: 'Co2TiO4', name: 'Cobalt(III) titanate', density: 5.1 },
        ]
    ],
    [
        'Co3(PO4)2·8H2O', [
            { symbol: 'Co3(PO4)2·8H2O', name: 'Cobalt(II) phosphate octahydrate', density: 2.77 },
        ]
    ],
    [
        'CoAsS', [
            { symbol: 'CoAsS', name: 'Cobaltite', density: 6.1 },
        ]
    ],
    [
        'CoFe2O4', [
            { symbol: 'CoFe2O4', name: 'Cobalt Ferrite', density: 5.3 },
        ]
    ],
    [
        'CoK2(SO4)2·6H2O', [
            { symbol: 'CoK2(SO4)2·6H2O', name: 'Cobalt(II) potassium sulfate  hexahydrate', density: 2.22 },
        ]
    ],
    [
        'CoK3(NO2)6·1.5H2O', [
            { symbol: 'CoK3(NO2)6·1.5H2O', name: 'Cobalt(III) potassium nitrite  sesquihydrate', density: 2.6 },
        ]
    ],
    [
        'CoS', [
            { symbol: 'CoS', name: 'Cobalt(II) sulfide', density: 5.45 },
        ]
    ],
    [
        'CoSO4', [
            { symbol: 'CoSO4', name: 'Cobalt(II) sulfate', density: 3.71 },
        ]
    ],
    [
        'CoSO4·7H2O', [
            { symbol: 'CoSO4·7H2O', name: 'Cobalt(II) sulfate heptahydrate', density: 2.03 },
        ]
    ],
    [
        'CoSO4·H2O', [
            { symbol: 'CoSO4·H2O', name: 'Cobalt(II) sulfate monohydrate', density: 3.08 },
        ]
    ],
    [
        'CoSe', [
            { symbol: 'CoSe', name: 'Cobalt(II) selenide', density: 7.65 },
        ]
    ],
    [
        'CoSeO4·5H2O', [
            { symbol: 'CoSeO4·5H2O', name: 'Cobalt(II) selenate pentahydrate', density: 2.51 },
        ]
    ],
    [
        'CoSi2', [
            { symbol: 'CoSi2', name: 'Cobalt silicide', density: 4.9 },
        ]
    ],
    [
        'CoTe', [
            { symbol: 'CoTe', name: 'Cobalt(II) telluride', density: 8.8 },
        ]
    ],
    [
        'CoTiO3', [
            { symbol: 'CoTiO3', name: 'Cobalt(II) titanate', density: 5.0 },
        ]
    ],
    [
        'CoWO4', [
            { symbol: 'CoWO4', name: 'Cobalt(II) tungstate', density: 7.8 },
        ]
    ],
    [
        'Cr', [
            { symbol: 'Cr', name: 'Chromium', density: 7.15 },
        ]
    ],
    [
        'Cr(C2H3O2)2·H2O', [
            { symbol: 'Cr(C2H3O2)2·H2O', name: 'Chromium(II) acetate monohydrate', density: 1.79 },
        ]
    ],
    [
        'Cr(CH3COCHCOCH3)3', [
            { symbol: 'Cr(CH3COCHCOCH3)3', name: 'Chromium(III) 2,4-pentanedioate', density: 1.34 },
        ]
    ],
    [
        'Cr(CO)6', [
            { symbol: 'Cr(CO)6', name: 'Chromium carbonyl', density: 1.77 },
        ]
    ],
    [
        'Cr(NO3)3·9H2O', [
            { symbol: 'Cr(NO3)3·9H2O', name: 'Chromium(III) nitrate nonahydrate', density: 1.8 },
        ]
    ],
    [
        'Cr2(SO4)3', [
            { symbol: 'Cr2(SO4)3', name: 'Chromium(III) sulfate', density: 3.1 },
        ]
    ],
    [
        'Cr2(SO4)3·18H2O', [
            { symbol: 'Cr2(SO4)3·18H2O', name: 'Chromium(III) sulfate  octadecahydrate', density: 1.7 },
        ]
    ],
    [
        'Cr2As', [
            { symbol: 'Cr2As', name: 'Chromium arsenide', density: 7.04 },
        ]
    ],
    [
        'Cr2FeS4', [
            { symbol: 'Cr2FeS4', name: 'Daubreelite', density: 3.81 },
        ]
    ],
    [
        'Cr2N', [
            { symbol: 'Cr2N', name: 'Chromium nitride (Cr2N)', density: 6.8 },
        ]
    ],
    [
        'Cr2O3', [
            { symbol: 'Cr2O3', name: 'Chromium(III) oxide', density: 5.22 },
        ]
    ],
    [
        'Cr2S3', [
            { symbol: 'Cr2S3', name: 'Chromium(III) sulfide', density: 3.8 },
        ]
    ],
    [
        'Cr2Te3', [
            { symbol: 'Cr2Te3', name: 'Chromium(III) telluride', density: 7.0 },
        ]
    ],
    [
        'Cr3C2', [
            { symbol: 'Cr3C2', name: 'Chromium carbide', density: 6.68 },
        ]
    ],
    [
        'Cr3O4', [
            { symbol: 'Cr3O4', name: 'Chromium(II,III) oxide', density: 6.1 },
        ]
    ],
    [
        'Cr3Si', [
            { symbol: 'Cr3Si', name: 'Chromium silicide (Cr3Si)', density: 6.4 },
        ]
    ],
    [
        'Cr5B3', [
            { symbol: 'Cr5B3', name: 'Chromium boride [Cr5B3]', density: 6.1 },
        ]
    ],
    [
        'CrB', [
            { symbol: 'CrB', name: 'Chromium boride (CrB)', density: 6.1 },
        ]
    ],
    [
        'CrB2', [
            { symbol: 'CrB2', name: 'Chromium boride [CrB2]', density: 5.22 },
        ]
    ],
    [
        'CrBr2', [
            { symbol: 'CrBr2', name: 'Chromium(II) bromide', density: 4.236 },
        ]
    ],
    [
        'CrBr3', [
            { symbol: 'CrBr3', name: 'Chromium(III) bromide', density: 4.68 },
        ]
    ],
    [
        'CrC2O4·H2O', [
            { symbol: 'CrC2O4·H2O', name: 'Chromium(II) oxalate monohydrate', density: 2.468 },
        ]
    ],
    [
        'CrCl2', [
            { symbol: 'CrCl2', name: 'Chromium(II) chloride', density: 2.88 },
        ]
    ],
    [
        'CrCl3', [
            { symbol: 'CrCl3', name: 'Chromium(III) chloride', density: 2.76 },
        ]
    ],
    [
        'CrF2', [
            { symbol: 'CrF2', name: 'Chromium(II) fluoride', density: 3.79 },
        ]
    ],
    [
        'CrF3', [
            { symbol: 'CrF3', name: 'Chromium(III) fluoride', density: 3.8 },
        ]
    ],
    [
        'CrF3·3H2O', [
            { symbol: 'CrF3·3H2O', name: 'Chromium(III) fluoride trihydrate', density: 2.2 },
        ]
    ],
    [
        'CrF4', [
            { symbol: 'CrF4', name: 'Chromium(IV) fluoride', density: 2.89 },
        ]
    ],
    [
        'CrI2', [
            { symbol: 'CrI2', name: 'Chromium(II) iodide', density: 5.1 },
        ]
    ],
    [
        'CrI3', [
            { symbol: 'CrI3', name: 'Chromium(III) iodide', density: 5.32 },
        ]
    ],
    [
        'CrK(SO4)2·12H2O', [
            { symbol: 'CrK(SO4)2·12H2O', name: 'Chromium(III) potassium sulfate  dodecahydrate', density: 1.83 },
        ]
    ],
    [
        'CrN', [
            { symbol: 'CrN', name: 'Chromium nitride (CrN)', density: 5.9 },
        ]
    ],
    [
        'CrO2', [
            { symbol: 'CrO2', name: 'Chromium(IV) oxide', density: 4.89 },
        ]
    ],
    [
        'CrO2Cl2', [
            { symbol: 'CrO2Cl2', name: 'Chromium(VI) dichloride dioxide', density: 1.91 },
        ]
    ],
    [
        'CrO3', [
            { symbol: 'CrO3', name: 'Chromium(VI) oxide', density: 2.7 },
        ]
    ],
    [
        'CrP', [
            { symbol: 'CrP', name: 'Chromium phosphide', density: 5.25 },
        ]
    ],
    [
        'CrPO4', [
            { symbol: 'CrPO4', name: 'Chromium(III) phosphate', density: 4.6 },
        ]
    ],
    [
        'CrPO4·3.5H2O', [
            { symbol: 'CrPO4·3.5H2O', name: 'Chromium(III) phosphate  hemiheptahydrate', density: 2.15 },
        ]
    ],
    [
        'CrPO4·6H2O', [
            { symbol: 'CrPO4·6H2O', name: 'Chromium(III) phosphate  hexahydrate', density: 2.121 },
        ]
    ],
    [
        'CrSb', [
            { symbol: 'CrSb', name: 'Chromium antimonide', density: 7.11 },
        ]
    ],
    [
        'CrSe', [
            { symbol: 'CrSe', name: 'Chromium selenide', density: 6.1 },
        ]
    ],
    [
        'CrSi2', [
            { symbol: 'CrSi2', name: 'Chromium silicide [CrSi2]', density: 4.91 },
        ]
    ],
    [
        'Cs', [
            { symbol: 'Cs', name: 'Cesium', density: 1.873 },
        ]
    ],
    [
        'Cs2CO3', [
            { symbol: 'Cs2CO3', name: 'Cesium carbonate', density: 4.24 },
        ]
    ],
    [
        'Cs2GeF6', [
            { symbol: 'Cs2GeF6', name: 'Cesium hexafluorogermanate', density: 4.1 },
        ]
    ],
    [
        'Cs2O', [
            { symbol: 'Cs2O', name: 'Cesium oxide', density: 4.65 },
        ]
    ],
    [
        'Cs2O3', [
            { symbol: 'Cs2O3', name: 'Cesium trioxide', density: 4.25 },
        ]
    ],
    [
        'Cs2SO4', [
            { symbol: 'Cs2SO4', name: 'Cesium sulfate', density: 4.24 },
        ]
    ],
    [
        'Cs4CrO4', [
            { symbol: 'Cs4CrO4', name: 'Cesium chromate(IV)', density: 4.24 },
        ]
    ],
    [
        'CsAl(SO4)2·12H2O', [
            { symbol: 'CsAl(SO4)2·12H2O', name: 'Cesium aluminum sulfate  dodecahydrate', density: 1.97 },
        ]
    ],
    [
        'CsAlSi2O6', [
            { symbol: 'CsAlSi2O6', name: 'Pollucite', density: 2.9 },
        ]
    ],
    [
        'CsBF4', [
            { symbol: 'CsBF4', name: 'Cesium fluoroborate', density: 3.2 },
        ]
    ],
    [
        'CsBO2', [
            { symbol: 'CsBO2', name: 'Cesium metaborate', density: 3.7 },
        ]
    ],
    [
        'CsBr', [
            { symbol: 'CsBr', name: 'Cesium bromide', density: 4.43 },
        ]
    ],
    [
        'CsBrO3', [
            { symbol: 'CsBrO3', name: 'Cesium bromate', density: 4.11 },
        ]
    ],
    [
        'CsCHO2', [
            { symbol: 'CsCHO2', name: 'Cesium formate', density: 1.017 },
        ]
    ],
    [
        'CsCN', [
            { symbol: 'CsCN', name: 'Cesium cyanide', density: 3.34 },
        ]
    ],
    [
        'CsCl', [
            { symbol: 'CsCl', name: 'Cesium chloride', density: 3.988 },
        ]
    ],
    [
        'CsClO3', [
            { symbol: 'CsClO3', name: 'Cesium chlorate', density: 3.57 },
        ]
    ],
    [
        'CsClO4', [
            { symbol: 'CsClO4', name: 'Cesium perchlorate', density: 3.327 },
        ]
    ],
    [
        'CsF', [
            { symbol: 'CsF', name: 'Cesium fluoride', density: 4.64 },
        ]
    ],
    [
        'CsH', [
            { symbol: 'CsH', name: 'Cesium hydride', density: 3.42 },
        ]
    ],
    [
        'CsHF2', [
            { symbol: 'CsHF2', name: 'Cesium hydrogen fluoride', density: 3.86 },
        ]
    ],
    [
        'CsHSO4', [
            { symbol: 'CsHSO4', name: 'Cesium hydrogen sulfate', density: 3.352 },
        ]
    ],
    [
        'CsI', [
            { symbol: 'CsI', name: 'Cesium iodide', density: 4.51 },
        ]
    ],
    [
        'CsIO3', [
            { symbol: 'CsIO3', name: 'Cesium iodate', density: 4.85 },
        ]
    ],
    [
        'CsIO4', [
            { symbol: 'CsIO4', name: 'Cesium periodate', density: 4.26 },
        ]
    ],
    [
        'CsN3', [
            { symbol: 'CsN3', name: 'Cesium azide', density: 3.5 },
        ]
    ],
    [
        'CsNH2', [
            { symbol: 'CsNH2', name: 'Cesium amide', density: 3.7 },
        ]
    ],
    [
        'CsNO3', [
            { symbol: 'CsNO3', name: 'Cesium nitrate', density: 3.66 },
        ]
    ],
    [
        'CsO2', [
            { symbol: 'CsO2', name: 'Cesium superoxide', density: 3.77 },
        ]
    ],
    [
        'CsOH', [
            { symbol: 'CsOH', name: 'Cesium hydroxide', density: 3.68 },
        ]
    ],
    [
        'Cu', [
            { symbol: 'Cu', name: 'Copper', density: 8.96 },
        ]
    ],
    [
        'Cu(BO2)2', [
            { symbol: 'Cu(BO2)2', name: 'Copper(II) borate', density: 3.859 },
        ]
    ],
    [
        'Cu(C2H3O2)2·H2O', [
            { symbol: 'Cu(C2H3O2)2·H2O', name: 'Copper(II) acetate monohydrate', density: 1.88 },
        ]
    ],
    [
        'Cu(N3)2', [
            { symbol: 'Cu(N3)2', name: 'Copper(II) azide', density: 2.6 },
        ]
    ],
    [
        'Cu(UO2)2(PO4)2·8H2O', [
            { symbol: 'Cu(UO2)2(PO4)2·8H2O', name: 'Torbernite', density: 3.22 },
        ]
    ],
    [
        'Cu1.79S', [
            { symbol: 'Cu1.79S', name: 'Digenite', density: 5.55 },
        ]
    ],
    [
        'Cu19(SO4)Cl4(OH)32·3H2O', [
            { symbol: 'Cu19(SO4)Cl4(OH)32·3H2O', name: 'Connellite', density: 3.36 },
        ]
    ],
    [
        'Cu2(AsO4)(OH)', [
            { symbol: 'Cu2(AsO4)(OH)', name: 'Olivenite', density: 4.2 },
        ]
    ],
    [
        'Cu2(OH)2CO3', [
            { symbol: 'Cu2(OH)2CO3', name: 'Malachite', density: 4.05 },
        ]
    ],
    [
        'Cu2(OH)3Cl', [
            { symbol: 'Cu2(OH)3Cl', name: 'Atacamite', density: 3.76 },
        ]
    ],
    [
        'Cu2FeSn4', [
            { symbol: 'Cu2FeSn4', name: 'Stannite', density: 4.4 },
        ]
    ],
    [
        'Cu2O', [
            { symbol: 'Cu2O', name: 'Cuprite', density: 6.0 },
        ]
    ],
    [
        'Cu2Pb5(SO4)3(CO3)(OH)6', [
            { symbol: 'Cu2Pb5(SO4)3(CO3)(OH)6', name: 'Caledonite', density: 5.76 },
        ]
    ],
    [
        'Cu2S', [
            { symbol: 'Cu2S', name: 'Chalcocite', density: 5.6 },
        ]
    ],
    [
        'Cu3(OH)2(CO3)2', [
            { symbol: 'Cu3(OH)2(CO3)2', name: 'Azurite', density: 3.77 },
        ]
    ],
    [
        'Cu3AsS4', [
            { symbol: 'Cu3AsS4', name: 'Enargite', density: 4.5 },
        ]
    ],
    [
        'Cu4SO4(OH)6', [
            { symbol: 'Cu4SO4(OH)6', name: 'Brochantite', density: 3.79 },
        ]
    ],
    [
        'Cu5FeS4', [
            { symbol: 'Cu5FeS4', name: 'Bornite', density: 5.07 },
        ]
    ],
    [
        'CuAl6(PO4)4(OH)8·4H2O', [
            { symbol: 'CuAl6(PO4)4(OH)8·4H2O', name: 'Turquois', density: 2.9 },
        ]
    ],
    [
        'CuBiS2', [
            { symbol: 'CuBiS2', name: 'Emplectite', density: 6.38 },
        ]
    ],
    [
        'CuBr', [
            { symbol: 'CuBr', name: 'Copper(I) bromide', density: 4.98 },
        ]
    ],
    [
        'CuBr2', [
            { symbol: 'CuBr2', name: 'Copper(II) bromide', density: 4.71 },
        ]
    ],
    [
        'CuCN', [
            { symbol: 'CuCN', name: 'Copper(I) cyanide', density: 2.9 },
        ]
    ],
    [
        'CuCO3·Cu(OH)2', [
            { symbol: 'CuCO3·Cu(OH)2', name: 'Copper(II) carbonate hydroxide', density: 4.0 },
        ]
    ],
    [
        'CuCl', [
            { symbol: 'CuCl', name: 'Nantokite', density: 4.14 },
        ]
    ],
    [
        'CuCl2', [
            { symbol: 'CuCl2', name: 'Copper(II) chloride', density: 3.4 },
        ]
    ],
    [
        'CuCl2·2H2O', [
            { symbol: 'CuCl2·2H2O', name: 'Copper(II) chloride dihydrate', density: 2.51 },
        ]
    ],
    [
        'CuCl2·2NH4Cl·2H2O', [
            { symbol: 'CuCl2·2NH4Cl·2H2O', name: 'Ammonium copper(II) chloride  dihydrate', density: 1.993 },
        ]
    ],
    [
        'CuCr2O4', [
            { symbol: 'CuCr2O4', name: 'Copper(II) chromite', density: 5.4 },
        ]
    ],
    [
        'CuCr2O7·2H2O', [
            { symbol: 'CuCr2O7·2H2O', name: 'Copper(II) dichromate dihydrate', density: 2.286 },
        ]
    ],
    [
        'CuFe2S3', [
            { symbol: 'CuFe2S3', name: 'Cubanite', density: 4.11 },
        ]
    ],
    [
        'CuFeS2', [
            { symbol: 'CuFeS2', name: 'Chalcopyrite', density: 4.2 },
        ]
    ],
    [
        'CuI', [
            { symbol: 'CuI', name: 'Marshite', density: 5.67 },
        ]
    ],
    [
        'CuS', [
            { symbol: 'CuS', name: 'Covellite', density: 4.8 },
        ]
    ],
    [
        'CuSCN', [
            { symbol: 'CuSCN', name: 'Copper(I) thiocyanate', density: 2.85 },
        ]
    ],
    [
        'CuSiO2(OH)2', [
            { symbol: 'CuSiO2(OH)2', name: 'Dioptase', density: 3.5 },
        ]
    ],
    [
        'CuSiO3·2H2O', [
            { symbol: 'CuSiO3·2H2O', name: 'Chrysocolla', density: 2.4 },
        ]
    ],
    [
        'CuWO4', [
            { symbol: 'CuWO4', name: 'Copper(II) tungstate', density: 7.5 },
        ]
    ],
    [
        'D2O', [
            { symbol: 'D2O', name: 'Water-d2', density: 1.1044 },
        ]
    ],
    [
        'Fe', [
            { symbol: 'Fe', name: 'Iron', density: 7.87 },
        ]
    ],
    [
        'Fe(AlO2)2', [
            { symbol: 'Fe(AlO2)2', name: 'Iron(II) aluminate', density: 4.3 },
        ]
    ],
    [
        'Fe(AsO4)·2H2O', [
            { symbol: 'Fe(AsO4)·2H2O', name: 'Scorodite', density: 3.28 },
        ]
    ],
    [
        'Fe(CH3COCHCOCH3)3', [
            { symbol: 'Fe(CH3COCHCOCH3)3', name: 'Iron(III) 2,4-pentanedioate', density: 5.24 },
        ]
    ],
    [
        'Fe(CO)5', [
            { symbol: 'Fe(CO)5', name: 'Iron pentacarbonyl', density: 1.52 },
        ]
    ],
    [
        'Fe(NO3)3·9H2O', [
            { symbol: 'Fe(NO3)3·9H2O', name: 'Iron(III) nitrate nonahydrate', density: 1.68 },
        ]
    ],
    [
        'Fe(OH)2', [
            { symbol: 'Fe(OH)2', name: 'Iron(II) hydroxide', density: 3.4 },
        ]
    ],
    [
        'Fe(OH)3', [
            { symbol: 'Fe(OH)3', name: 'Iron(III) hydroxide', density: 3.12 },
        ]
    ],
    [
        'Fe(TaO3)2', [
            { symbol: 'Fe(TaO3)2', name: 'Iron(II) tantalate', density: 7.33 },
        ]
    ],
    [
        'Fe0.5Mn0.5WO4', [
            { symbol: 'Fe0.5Mn0.5WO4', name: 'Wolframite', density: 7.3 },
        ]
    ],
    [
        'Fe0.885S', [
            { symbol: 'Fe0.885S', name: 'Pyrrhotite', density: 4.62 },
        ]
    ],
    [
        'Fe2(CO)9', [
            { symbol: 'Fe2(CO)9', name: 'Iron nonacarbonyl', density: 2.85 },
        ]
    ],
    [
        'Fe2(SO4)3', [
            { symbol: 'Fe2(SO4)3', name: 'Iron(III) sulfate', density: 3.1 },
        ]
    ],
    [
        'Fe2(SO4)3·9H2O', [
            { symbol: 'Fe2(SO4)3·9H2O', name: 'Iron(III) sulfate nonahydrate', density: 2.1 },
        ]
    ],
    [
        'Fe2Al9Si4O22(OH)2', [
            { symbol: 'Fe2Al9Si4O22(OH)2', name: 'Staurolite', density: 3.79 },
        ]
    ],
    [
        'Fe2B', [
            { symbol: 'Fe2B', name: 'Iron boride (Fe2B)', density: 7.3 },
        ]
    ],
    [
        'Fe2O3', [
            { symbol: 'Fe2O3', name: 'Hematite', density: 5.25 },
            { symbol: 'Fe2O3', name: 'Maghemite', density: 4.88 },
        ]
    ],
    [
        'Fe2P', [
            { symbol: 'Fe2P', name: 'Iron phosphide (Fe2P)', density: 6.8 },
        ]
    ],
    [
        'Fe2SiO4', [
            { symbol: 'Fe2SiO4', name: 'Iron(II) orthosilicate', density: 4.3 },
        ]
    ],
    [
        'Fe2TiO5', [
            { symbol: 'Fe2TiO5', name: 'Pseudobrookite', density: 4.36 },
        ]
    ],
    [
        'Fe3(AsO4)2(OH)3·5H2O', [
            { symbol: 'Fe3(AsO4)2(OH)3·5H2O', name: 'Pharmacosiderite', density: 2.8 },
        ]
    ],
    [
        'Fe3(CO)12', [
            { symbol: 'Fe3(CO)12', name: 'Iron dodecacarbonyl', density: 2.0 },
        ]
    ],
    [
        'Fe3(PO4)2·8H2O', [
            { symbol: 'Fe3(PO4)2·8H2O', name: 'Iron(II) phosphate octahydrate', density: 2.58 },
        ]
    ],
    [
        'Fe3Al2Si3O12', [
            { symbol: 'Fe3Al2Si3O12', name: 'Almandine', density: 4.32 },
        ]
    ],
    [
        'Fe3C', [
            { symbol: 'Fe3C', name: 'Iron carbide', density: 7.694 },
        ]
    ],
    [
        'Fe3O4', [
            { symbol: 'Fe3O4', name: 'Magnetite', density: 5.17 },
        ]
    ],
    [
        'Fe3P', [
            { symbol: 'Fe3P', name: 'Iron phosphide (Fe3P)', density: 6.74 },
        ]
    ],
    [
        'Fe4(PO4)3(OH)3·12H2O', [
            { symbol: 'Fe4(PO4)3(OH)3·12H2O', name: 'Cacoxenite', density: 2.3 },
        ]
    ],
    [
        'Fe4.75Ni5.25S8', [
            { symbol: 'Fe4.75Ni5.25S8', name: 'Pentlandite', density: 4.8 },
        ]
    ],
    [
        'Fe4[Fe(CN)6]3', [
            { symbol: 'Fe4[Fe(CN)6]3', name: 'Iron(III) ferrocyanide', density: 1.8 },
        ]
    ],
    [
        'Fe6Ti6Sb2O23', [
            { symbol: 'Fe6Ti6Sb2O23', name: 'Derbylite', density: 4.53 },
        ]
    ],
    [
        'FeAl4O2(SiO4)2(OH)4', [
            { symbol: 'FeAl4O2(SiO4)2(OH)4', name: 'Chloritoid', density: 3.66 },
        ]
    ],
    [
        'FeAs', [
            { symbol: 'FeAs', name: 'Iron arsenide', density: 7.85 },
        ]
    ],
    [
        'FeAs2', [
            { symbol: 'FeAs2', name: 'Loellingite', density: 7.4 },
        ]
    ],
    [
        'FeAsO4·2H2O', [
            { symbol: 'FeAsO4·2H2O', name: 'Iron(III) arsenate dihydrate', density: 3.18 },
        ]
    ],
    [
        'FeAsS', [
            { symbol: 'FeAsS', name: 'Arsenopyrite', density: 6.1 },
        ]
    ],
    [
        'FeB', [
            { symbol: 'FeB', name: 'Iron boride (FeB)', density: 7.0 },
        ]
    ],
    [
        'FeBr2', [
            { symbol: 'FeBr2', name: 'Iron(II) bromide', density: 4.636 },
        ]
    ],
    [
        'FeBr2·6H2O', [
            { symbol: 'FeBr2·6H2O', name: 'Iron(II) bromide hexahydrate', density: 4.64 },
        ]
    ],
    [
        'FeBr3', [
            { symbol: 'FeBr3', name: 'Iron(III) bromide', density: 4.5 },
        ]
    ],
    [
        'FeC2O4·2H2O', [
            { symbol: 'FeC2O4·2H2O', name: 'Iron(II) oxalate dihydrate', density: 2.28 },
        ]
    ],
    [
        'FeCO3', [
            { symbol: 'FeCO3', name: 'Siderite', density: 3.9 },
        ]
    ],
    [
        'FeCl2', [
            { symbol: 'FeCl2', name: 'Iron(II) chloride', density: 3.16 },
        ]
    ],
    [
        'FeCl2·2H2O', [
            { symbol: 'FeCl2·2H2O', name: 'Iron(II) chloride dihydrate', density: 2.39 },
        ]
    ],
    [
        'FeCl2·4H2O', [
            { symbol: 'FeCl2·4H2O', name: 'Iron(II) chloride tetrahydrate', density: 1.93 },
        ]
    ],
    [
        'FeCl3', [
            { symbol: 'FeCl3', name: 'Iron(III) chloride', density: 2.9 },
        ]
    ],
    [
        'FeCl3·6H2O', [
            { symbol: 'FeCl3·6H2O', name: 'Iron(III) chloride hexahydrate', density: 1.82 },
        ]
    ],
    [
        'FeCr2O4', [
            { symbol: 'FeCr2O4', name: 'Chromite', density: 5.0 },
        ]
    ],
    [
        'FeF2', [
            { symbol: 'FeF2', name: 'Iron(II) fluoride', density: 4.09 },
        ]
    ],
    [
        'FeF2·4H2O', [
            { symbol: 'FeF2·4H2O', name: 'Iron(II) fluoride tetrahydrate', density: 2.2 },
        ]
    ],
    [
        'FeF3', [
            { symbol: 'FeF3', name: 'Iron(III) fluoride', density: 3.87 },
        ]
    ],
    [
        'FeF3·3H2O', [
            { symbol: 'FeF3·3H2O', name: 'Iron(III) fluoride trihydrate', density: 2.3 },
        ]
    ],
    [
        'FeI2', [
            { symbol: 'FeI2', name: 'Iron(II) iodide', density: 5.3 },
        ]
    ],
    [
        'FeI2·4H2O', [
            { symbol: 'FeI2·4H2O', name: 'Iron(II) iodide tetrahydrate', density: 2.87 },
        ]
    ],
    [
        'FeMoO4', [
            { symbol: 'FeMoO4', name: 'Iron(II) molybdate', density: 5.6 },
        ]
    ],
    [
        'FeNaP2O7', [
            { symbol: 'FeNaP2O7', name: 'Iron(III) sodium pyrophosphate', density: 1.5 },
        ]
    ],
    [
        'FeO', [
            { symbol: 'FeO', name: 'Iron(II) oxide', density: 6.0 },
        ]
    ],
    [
        'FeO(OH)', [
            { symbol: 'FeO(OH)', name: 'Goethite', density: 4.3 },
            { symbol: 'FeO(OH)', name: 'Lepidocrocite', density: 4.26 },
        ]
    ],
    [
        'FeP', [
            { symbol: 'FeP', name: 'Iron phosphide (FeP)', density: 6.07 },
        ]
    ],
    [
        'FePO4·2H2O', [
            { symbol: 'FePO4·2H2O', name: 'Iron(III) phosphate dihydrate', density: 2.87 },
        ]
    ],
    [
        'FeS', [
            { symbol: 'FeS', name: 'Troilite', density: 4.7 },
        ]
    ],
    [
        'FeS2', [
            { symbol: 'FeS2', name: 'Marcasite', density: 5.02 },
            { symbol: 'FeS2', name: 'Pyrite', density: 5.02 },
        ]
    ],
    [
        'FeSO4', [
            { symbol: 'FeSO4', name: 'Iron(II) sulfate', density: 3.65 },
        ]
    ],
    [
        'FeSO4·7H2O', [
            { symbol: 'FeSO4·7H2O', name: 'Iron(II) sulfate heptahydrate', density: 1.895 },
        ]
    ],
    [
        'FeSO4·H2O', [
            { symbol: 'FeSO4·H2O', name: 'Iron(II) sulfate monohydrate', density: 3.0 },
        ]
    ],
    [
        'FeSe', [
            { symbol: 'FeSe', name: 'Iron(II) selenide', density: 6.7 },
        ]
    ],
    [
        'FeSi', [
            { symbol: 'FeSi', name: 'Iron silicide', density: 6.1 },
        ]
    ],
    [
        'FeSi2', [
            { symbol: 'FeSi2', name: 'Iron disilicide', density: 4.74 },
        ]
    ],
    [
        'FeTa2O6', [
            { symbol: 'FeTa2O6', name: 'Tapiolite', density: 7.9 },
        ]
    ],
    [
        'FeTe', [
            { symbol: 'FeTe', name: 'Iron(II) telluride', density: 6.8 },
        ]
    ],
    [
        'FeTiO3', [
            { symbol: 'FeTiO3', name: 'Ilmenite', density: 4.72 },
        ]
    ],
    [
        'FeWO4', [
            { symbol: 'FeWO4', name: 'Ferberite', density: 7.51 },
        ]
    ],
    [
        'Ga', [
            { symbol: 'Ga', name: 'Gallium', density: 5.91 },
        ]
    ],
    [
        'Ga(CH3COCHCOCH3)3', [
            { symbol: 'Ga(CH3COCHCOCH3)3', name: 'Gallium(III) 2,4-pentanedioate', density: 1.42 },
        ]
    ],
    [
        'Ga2O', [
            { symbol: 'Ga2O', name: 'Gallium suboxide', density: 4.77 },
        ]
    ],
    [
        'Ga2O3', [
            { symbol: 'Ga2O3', name: 'Gallium(III) oxide', density: 6.0 },
        ]
    ],
    [
        'Ga2S3', [
            { symbol: 'Ga2S3', name: 'Gallium(III) sulfide', density: 3.7 },
        ]
    ],
    [
        'Ga2Se3', [
            { symbol: 'Ga2Se3', name: 'Gallium(III) selenide', density: 4.92 },
        ]
    ],
    [
        'Ga2Te3', [
            { symbol: 'Ga2Te3', name: 'Gallium(III) telluride', density: 5.57 },
        ]
    ],
    [
        'GaAs', [
            { symbol: 'GaAs', name: 'Gallium arsenide', density: 5.3176 },
        ]
    ],
    [
        'GaBr3', [
            { symbol: 'GaBr3', name: 'Gallium(III) bromide', density: 3.69 },
        ]
    ],
    [
        'GaCl2', [
            { symbol: 'GaCl2', name: 'Gallium(II) chloride', density: 2.74 },
        ]
    ],
    [
        'GaCl3', [
            { symbol: 'GaCl3', name: 'Gallium(III) chloride', density: 2.47 },
        ]
    ],
    [
        'GaF3', [
            { symbol: 'GaF3', name: 'Gallium(III) fluoride', density: 4.47 },
        ]
    ],
    [
        'GaI3', [
            { symbol: 'GaI3', name: 'Gallium(III) iodide', density: 4.5 },
        ]
    ],
    [
        'GaN', [
            { symbol: 'GaN', name: 'Gallium nitride', density: 6.1 },
        ]
    ],
    [
        'GaOOH', [
            { symbol: 'GaOOH', name: 'Gallium(III) oxide hydroxide', density: 5.23 },
        ]
    ],
    [
        'GaP', [
            { symbol: 'GaP', name: 'Gallium phosphide', density: 4.138 },
        ]
    ],
    [
        'GaS', [
            { symbol: 'GaS', name: 'Gallium(II) sulfide', density: 3.86 },
        ]
    ],
    [
        'GaSb', [
            { symbol: 'GaSb', name: 'Gallium antimonide', density: 5.6137 },
        ]
    ],
    [
        'GaSe', [
            { symbol: 'GaSe', name: 'Gallium(II) selenide', density: 5.03 },
        ]
    ],
    [
        'GaTe', [
            { symbol: 'GaTe', name: 'Gallium(II) telluride', density: 5.44 },
        ]
    ],
    [
        'Gd', [
            { symbol: 'Gd', name: 'Gadolinium', density: 7.9 },
        ]
    ],
    [
        'Gd(C2H3O2)2·4H2O', [
            { symbol: 'Gd(C2H3O2)2·4H2O', name: 'Gadolinium(III) acetate  tetrahydrate', density: 1.61 },
        ]
    ],
    [
        'Gd(NO3)3·5H2O', [
            { symbol: 'Gd(NO3)3·5H2O', name: 'Gadolinium(III) nitrate  pentahydrate', density: 2.41 },
        ]
    ],
    [
        'Gd(NO3)3·6H2O', [
            { symbol: 'Gd(NO3)3·6H2O', name: 'Gadolinium(III) nitrate hexahydrate', density: 2.33 },
        ]
    ],
    [
        'Gd2(SO4)3', [
            { symbol: 'Gd2(SO4)3', name: 'Gadolinium(III) sulfate', density: 4.1 },
        ]
    ],
    [
        'Gd2(SO4)3·8H2O', [
            { symbol: 'Gd2(SO4)3·8H2O', name: 'Gadolinium(III) sulfate octahydrate', density: 4.14 },
        ]
    ],
    [
        'Gd2O3', [
            { symbol: 'Gd2O3', name: 'Gadolinium(III) oxide', density: 7.41 },
        ]
    ],
    [
        'Gd2S3', [
            { symbol: 'Gd2S3', name: 'Gadolinium(III) sulfide', density: 6.1 },
        ]
    ],
    [
        'Gd2Te3', [
            { symbol: 'Gd2Te3', name: 'Gadolinium(III) telluride', density: 7.7 },
        ]
    ],
    [
        'GdB6', [
            { symbol: 'GdB6', name: 'Gadolinium boride', density: 5.31 },
        ]
    ],
    [
        'GdBr3', [
            { symbol: 'GdBr3', name: 'Gadolinium(III) bromide', density: 4.56 },
        ]
    ],
    [
        'GdCl3', [
            { symbol: 'GdCl3', name: 'Gadolinium(III) chloride', density: 4.52 },
        ]
    ],
    [
        'GdCl3·6H2O', [
            { symbol: 'GdCl3·6H2O', name: 'Gadolinium(III) chloride  hexahydrate', density: 2.424 },
        ]
    ],
    [
        'GdN', [
            { symbol: 'GdN', name: 'Gadolinium nitride', density: 9.1 },
        ]
    ],
    [
        'GdSe', [
            { symbol: 'GdSe', name: 'Gadolinium(II) selenide', density: 8.1 },
        ]
    ],
    [
        'GdSi2', [
            { symbol: 'GdSi2', name: 'Gadolinium silicide', density: 5.9 },
        ]
    ],
    [
        'Ge', [
            { symbol: 'Ge', name: 'Germanium', density: 5.3234 },
        ]
    ],
    [
        'Ge(CH3)2Cl2', [
            { symbol: 'Ge(CH3)2Cl2', name: 'Dichlorodimethylgermane', density: 1.49 },
        ]
    ],
    [
        'GeBr4', [
            { symbol: 'GeBr4', name: 'Germanium(IV) bromide', density: 3.132 },
        ]
    ],
    [
        'GeCl4', [
            { symbol: 'GeCl4', name: 'Germanium(IV) chloride', density: 1.88 },
        ]
    ],
    [
        'GeF2', [
            { symbol: 'GeF2', name: 'Germanium(II) fluoride', density: 3.64 },
        ]
    ],
    [
        'GeH2Br2', [
            { symbol: 'GeH2Br2', name: 'Dibromogermane', density: 2.8 },
        ]
    ],
    [
        'GeH2Cl2', [
            { symbol: 'GeH2Cl2', name: 'Dichlorogermane', density: 1.9 },
        ]
    ],
    [
        'GeH3Br', [
            { symbol: 'GeH3Br', name: 'Bromogermane', density: 2.34 },
        ]
    ],
    [
        'GeH3Cl', [
            { symbol: 'GeH3Cl', name: 'Chlorogermane', density: 1.75 },
        ]
    ],
    [
        'GeHCl3', [
            { symbol: 'GeHCl3', name: 'Trichlorogermane', density: 1.93 },
        ]
    ],
    [
        'GeI2', [
            { symbol: 'GeI2', name: 'Germanium(II) iodide', density: 5.4 },
        ]
    ],
    [
        'GeI4', [
            { symbol: 'GeI4', name: 'Germanium(IV) iodide', density: 4.322 },
        ]
    ],
    [
        'GeO2', [
            { symbol: 'GeO2', name: 'Germanium(IV) oxide', density: 4.25 },
        ]
    ],
    [
        'GeS', [
            { symbol: 'GeS', name: 'Germanium(II) sulfide', density: 4.1 },
        ]
    ],
    [
        'GeS2', [
            { symbol: 'GeS2', name: 'Germanium(IV) sulfide', density: 3.01 },
        ]
    ],
    [
        'GeSe', [
            { symbol: 'GeSe', name: 'Germanium(II) selenide', density: 5.6 },
        ]
    ],
    [
        'GeSe2', [
            { symbol: 'GeSe2', name: 'Germanium(IV) selenide', density: 4.56 },
        ]
    ],
    [
        'GeTe', [
            { symbol: 'GeTe', name: 'Germanium(II) telluride', density: 6.16 },
        ]
    ],
    [
        'H2MoO4·H2O', [
            { symbol: 'H2MoO4·H2O', name: 'Molybdenum(VI) acid monohydrate', density: 3.1 },
        ]
    ],
    [
        'H2NOH', [
            { symbol: 'H2NOH', name: 'Hydroxylamine', density: 1.21 },
        ]
    ],
    [
        'H2NOH·HBr', [
            { symbol: 'H2NOH·HBr', name: 'Hydroxylamine hydrobromide', density: 2.35 },
        ]
    ],
    [
        'H2NOH·HCl', [
            { symbol: 'H2NOH·HCl', name: 'Hydroxylamine hydrochloride', density: 1.68 },
        ]
    ],
    [
        'H2NSO3H', [
            { symbol: 'H2NSO3H', name: 'Sulfamic acid', density: 2.15 },
        ]
    ],
    [
        'H2O', [
            { symbol: 'H2O', name: 'Water', density: 0.997 },
        ]
    ],
    [
        'H2O2', [
            { symbol: 'H2O2', name: 'Hydrogen peroxide', density: 1.44 },
        ]
    ],
    [
        'H2PFO3', [
            { symbol: 'H2PFO3', name: 'Fluorophosphonic acid', density: 1.82 },
        ]
    ],
    [
        'H2PtCl6·6H2O', [
            { symbol: 'H2PtCl6·6H2O', name: 'Hexachloroplatinic acid  hexahydrate', density: 2.43 },
        ]
    ],
    [
        'H2S2', [
            { symbol: 'H2S2', name: 'Hydrogen disulfide', density: 1.334 },
        ]
    ],
    [
        'H2SO4', [
            { symbol: 'H2SO4', name: 'Sulfuric acid', density: 1.83052 },
        ]
    ],
    [
        'H2SeO3', [
            { symbol: 'H2SeO3', name: 'Selenous acid', density: 3.0 },
        ]
    ],
    [
        'H2SeO4', [
            { symbol: 'H2SeO4', name: 'Selenic acid', density: 2.95 },
        ]
    ],
    [
        'H2TeO3', [
            { symbol: 'H2TeO3', name: 'Tellurous acid', density: 3.0 },
        ]
    ],
    [
        'H2WO4', [
            { symbol: 'H2WO4', name: 'Tungstic acid', density: 5.5 },
        ]
    ],
    [
        'H3AsO4·0.5H2O', [
            { symbol: 'H3AsO4·0.5H2O', name: 'Arsenic acid hemihydrate', density: 2.5 },
        ]
    ],
    [
        'H3BO3', [
            { symbol: 'H3BO3', name: 'Boric acid', density: 1.5 },
        ]
    ],
    [
        'H3PO3', [
            { symbol: 'H3PO3', name: 'Phosphonic acid', density: 1.65 },
        ]
    ],
    [
        'H6TeO6', [
            { symbol: 'H6TeO6', name: 'Telluric(VI) acid', density: 3.07 },
        ]
    ],
    [
        'HAuCl4·4H2O', [
            { symbol: 'HAuCl4·4H2O', name: 'Chloroauric(III) acid tetrahydrate', density: 3.9 },
        ]
    ],
    [
        'HBF4', [
            { symbol: 'HBF4', name: 'Tetrafluoroboric acid', density: 1.8 },
        ]
    ],
    [
        'HBO2', [
            { symbol: 'HBO2', name: 'Metaboric acid (α form)', density: 1.784 },
            { symbol: 'HBO2', name: 'Metaboric acid (β form)', density: 2.045 },
            { symbol: 'HBO2', name: 'Metaboric acid (γ form)', density: 2.487 },
        ]
    ],
    [
        'HCN', [
            { symbol: 'HCN', name: 'Hydrogen cyanide', density: 0.68762 },
        ]
    ],
    [
        'HClO4', [
            { symbol: 'HClO4', name: 'Perchloric acid', density: 1.77 },
        ]
    ],
    [
        'HCl·2H2O', [
            { symbol: 'HCl·2H2O', name: 'Hydrogen chloride dihydrate', density: 1.46 },
        ]
    ],
    [
        'HIO3', [
            { symbol: 'HIO3', name: 'Iodic acid', density: 4.63 },
        ]
    ],
    [
        'HNO3', [
            { symbol: 'HNO3', name: 'Nitric acid', density: 1.5129 },
        ]
    ],
    [
        'HPH2O2', [
            { symbol: 'HPH2O2', name: 'Phosphinic acid', density: 1.49 },
        ]
    ],
    [
        'HPO2F2', [
            { symbol: 'HPO2F2', name: 'Difluorophosphoric acid', density: 1.583 },
        ]
    ],
    [
        'Hf', [
            { symbol: 'Hf', name: 'Hafnium', density: 13.3 },
        ]
    ],
    [
        'HfB2', [
            { symbol: 'HfB2', name: 'Hafnium boride', density: 10.5 },
        ]
    ],
    [
        'HfBr4', [
            { symbol: 'HfBr4', name: 'Hafnium(IV) bromide', density: 4.9 },
        ]
    ],
    [
        'HfC', [
            { symbol: 'HfC', name: 'Hafnium carbide', density: 12.2 },
        ]
    ],
    [
        'HfF4', [
            { symbol: 'HfF4', name: 'Hafnium(IV) fluoride', density: 7.1 },
        ]
    ],
    [
        'HfH2', [
            { symbol: 'HfH2', name: 'Hafnium hydride', density: 11.4 },
        ]
    ],
    [
        'HfI4', [
            { symbol: 'HfI4', name: 'Hafnium(IV) iodide', density: 5.6 },
        ]
    ],
    [
        'HfN', [
            { symbol: 'HfN', name: 'Hafnium nitride', density: 13.8 },
        ]
    ],
    [
        'HfO2', [
            { symbol: 'HfO2', name: 'Hafnium(IV) oxide', density: 9.68 },
        ]
    ],
    [
        'HfP', [
            { symbol: 'HfP', name: 'Hafnium phosphide', density: 9.78 },
        ]
    ],
    [
        'HfS2', [
            { symbol: 'HfS2', name: 'Hafnium(IV) sulfide', density: 6.03 },
        ]
    ],
    [
        'HfSe2', [
            { symbol: 'HfSe2', name: 'Hafnium(IV) selenide', density: 7.46 },
        ]
    ],
    [
        'HfSi2', [
            { symbol: 'HfSi2', name: 'Hafnium silicide', density: 7.6 },
        ]
    ],
    [
        'HfSiO4', [
            { symbol: 'HfSiO4', name: 'Hafnium(IV) silicate', density: 7.0 },
        ]
    ],
    [
        'Hg', [
            { symbol: 'Hg', name: 'Mercury', density: 13.5336 },
        ]
    ],
    [
        'Hg(C2H3O2)2', [
            { symbol: 'Hg(C2H3O2)2', name: 'Mercury(II) acetate', density: 3.28 },
        ]
    ],
    [
        'Hg(CH3)2', [
            { symbol: 'Hg(CH3)2', name: 'Dimethyl mercury', density: 3.1725 },
        ]
    ],
    [
        'Hg(CN)2', [
            { symbol: 'Hg(CN)2', name: 'Mercury(II) cyanide', density: 4.0 },
        ]
    ],
    [
        'Hg(CN)2·HgO', [
            { symbol: 'Hg(CN)2·HgO', name: 'Mercury(II) oxycyanide', density: 4.44 },
        ]
    ],
    [
        'Hg(CNO)2', [
            { symbol: 'Hg(CNO)2', name: 'Mercury(II) fulminate', density: 4.42 },
        ]
    ],
    [
        'Hg(ClO3)2', [
            { symbol: 'Hg(ClO3)2', name: 'Mercury(II) chlorate', density: 4.998 },
        ]
    ],
    [
        'Hg(NH2)Cl', [
            { symbol: 'Hg(NH2)Cl', name: 'Mercury(II) amide chloride', density: 5.38 },
        ]
    ],
    [
        'Hg(NO3)2', [
            { symbol: 'Hg(NO3)2', name: 'Mercury(II) nitrate', density: 4.3 },
        ]
    ],
    [
        'Hg(NO3)2·2H2O', [
            { symbol: 'Hg(NO3)2·2H2O', name: 'Mercury(II) nitrate dihydrate', density: 4.78 },
        ]
    ],
    [
        'Hg(NO3)2·H2O', [
            { symbol: 'Hg(NO3)2·H2O', name: 'Mercury(II) nitrate monohydrate', density: 4.3 },
        ]
    ],
    [
        'Hg(SCN)2', [
            { symbol: 'Hg(SCN)2', name: 'Mercury(II) thiocyanate', density: 3.71 },
        ]
    ],
    [
        'Hg2(ClO3)2', [
            { symbol: 'Hg2(ClO3)2', name: 'Mercury(I) chlorate', density: 6.409 },
        ]
    ],
    [
        'Hg2(NO2)2', [
            { symbol: 'Hg2(NO2)2', name: 'Mercury(I) nitrite', density: 7.3 },
        ]
    ],
    [
        'Hg2(NO3)2·2H2O', [
            { symbol: 'Hg2(NO3)2·2H2O', name: 'Mercury(I) nitrate dihydrate', density: 4.8 },
        ]
    ],
    [
        'Hg2Br2', [
            { symbol: 'Hg2Br2', name: 'Mercury(I) bromide', density: 7.307 },
        ]
    ],
    [
        'Hg2Cl2', [
            { symbol: 'Hg2Cl2', name: 'Calomel', density: 7.16 },
        ]
    ],
    [
        'Hg2F2', [
            { symbol: 'Hg2F2', name: 'Mercury(I) fluoride', density: 8.73 },
        ]
    ],
    [
        'Hg2I2', [
            { symbol: 'Hg2I2', name: 'Mercury(I) iodide', density: 7.7 },
        ]
    ],
    [
        'Hg2O', [
            { symbol: 'Hg2O', name: 'Mercury(I) oxide', density: 9.8 },
        ]
    ],
    [
        'Hg2OCl', [
            { symbol: 'Hg2OCl', name: 'Terlinguaite', density: 8.73 },
        ]
    ],
    [
        'Hg2SO4', [
            { symbol: 'Hg2SO4', name: 'Mercury(I) sulfate', density: 7.56 },
        ]
    ],
    [
        'Hg4OCl2', [
            { symbol: 'Hg4OCl2', name: 'Eglestonite', density: 8.4 },
        ]
    ],
    [
        'HgBr2', [
            { symbol: 'HgBr2', name: 'Mercury(II) bromide', density: 6.05 },
        ]
    ],
    [
        'HgCl2', [
            { symbol: 'HgCl2', name: 'Mercury(II) chloride', density: 5.6 },
        ]
    ],
    [
        'HgCrO4', [
            { symbol: 'HgCrO4', name: 'Mercury(II) chromate', density: 6.06 },
        ]
    ],
    [
        'HgF2', [
            { symbol: 'HgF2', name: 'Mercury(II) fluoride', density: 8.95 },
        ]
    ],
    [
        'HgI2', [
            { symbol: 'HgI2', name: 'Mercury(II) iodide (yellow)', density: 6.28 },
        ]
    ],
    [
        'HgO', [
            { symbol: 'HgO', name: 'Montroydite', density: 11.14 },
        ]
    ],
    [
        'HgS', [
            { symbol: 'HgS', name: 'Cinnabar', density: 8.17 },
            { symbol: 'HgS', name: 'Metacinnabar', density: 7.7 },
        ]
    ],
    [
        'HgSO4', [
            { symbol: 'HgSO4', name: 'Mercury(II) sulfate', density: 6.47 },
        ]
    ],
    [
        'HgSe', [
            { symbol: 'HgSe', name: 'Mercury(II) selenide', density: 8.21 },
        ]
    ],
    [
        'HgTe', [
            { symbol: 'HgTe', name: 'Mercury(II) telluride', density: 8.63 },
        ]
    ],
    [
        'Ho', [
            { symbol: 'Ho', name: 'Holmium', density: 8.8 },
        ]
    ],
    [
        'Ho2O3', [
            { symbol: 'Ho2O3', name: 'Holmium oxide', density: 8.41 },
        ]
    ],
    [
        'Ho2S3', [
            { symbol: 'Ho2S3', name: 'Holmium sulfide', density: 5.92 },
        ]
    ],
    [
        'HoCl3', [
            { symbol: 'HoCl3', name: 'Holmium chloride', density: 3.7 },
        ]
    ],
    [
        'HoF3', [
            { symbol: 'HoF3', name: 'Holmium fluoride', density: 7.664 },
        ]
    ],
    [
        'HoI3', [
            { symbol: 'HoI3', name: 'Holmium iodide', density: 5.4 },
        ]
    ],
    [
        'HoN', [
            { symbol: 'HoN', name: 'Holmium nitride', density: 10.6 },
        ]
    ],
    [
        'HoSi2', [
            { symbol: 'HoSi2', name: 'Holmium silicide', density: 7.1 },
        ]
    ],
    [
        'I2', [
            { symbol: 'I2', name: 'Iodine', density: 4.933 },
        ]
    ],
    [
        'I2O4', [
            { symbol: 'I2O4', name: 'Iodinetetroxide', density: 4.2 },
        ]
    ],
    [
        'I2O5', [
            { symbol: 'I2O5', name: 'Iodinepentoxide', density: 4.98 },
        ]
    ],
    [
        'IBr', [
            { symbol: 'IBr', name: 'Iodinebromide', density: 4.3 },
        ]
    ],
    [
        'ICN', [
            { symbol: 'ICN', name: 'Cyanogen iodide', density: 2.84 },
        ]
    ],
    [
        'ICl', [
            { symbol: 'ICl', name: 'Iodinechloride', density: 3.24 },
        ]
    ],
    [
        'ICl3', [
            { symbol: 'ICl3', name: 'Iodinetrichloride', density: 3.2 },
        ]
    ],
    [
        'IF5', [
            { symbol: 'IF5', name: 'Iodinepentafluoride', density: 3.19 },
        ]
    ],
    [
        'IF7', [
            { symbol: 'IF7', name: 'Iodineheptafluoride', density: 0.01062 },
        ]
    ],
    [
        'In', [
            { symbol: 'In', name: 'Indium', density: 7.31 },
        ]
    ],
    [
        'In(OH)3', [
            { symbol: 'In(OH)3', name: 'Indium(III) hydroxide', density: 4.4 },
        ]
    ],
    [
        'In2(SO4)3', [
            { symbol: 'In2(SO4)3', name: 'Indium(III) sulfate', density: 3.44 },
        ]
    ],
    [
        'In2O3', [
            { symbol: 'In2O3', name: 'Indium(III) oxide', density: 7.18 },
        ]
    ],
    [
        'In2S3', [
            { symbol: 'In2S3', name: 'Indium(III) sulfide', density: 4.45 },
        ]
    ],
    [
        'In2Se3', [
            { symbol: 'In2Se3', name: 'Indium(III) selenide', density: 5.8 },
        ]
    ],
    [
        'In2Te3', [
            { symbol: 'In2Te3', name: 'Indium(III) telluride', density: 5.75 },
        ]
    ],
    [
        'InAs', [
            { symbol: 'InAs', name: 'Indium arsenide', density: 5.67 },
        ]
    ],
    [
        'InBr', [
            { symbol: 'InBr', name: 'Indium(I) bromide', density: 4.96 },
        ]
    ],
    [
        'InBr2', [
            { symbol: 'InBr2', name: 'Indium(II) bromide', density: 4.22 },
        ]
    ],
    [
        'InBr3', [
            { symbol: 'InBr3', name: 'Indium(III) bromide', density: 4.74 },
        ]
    ],
    [
        'InCl', [
            { symbol: 'InCl', name: 'Indium(I) chloride', density: 4.19 },
        ]
    ],
    [
        'InCl2', [
            { symbol: 'InCl2', name: 'Indium(II) chloride', density: 3.64 },
        ]
    ],
    [
        'InCl3', [
            { symbol: 'InCl3', name: 'Indium(III) chloride', density: 4.0 },
        ]
    ],
    [
        'InF3', [
            { symbol: 'InF3', name: 'Indium(III) fluoride', density: 4.39 },
        ]
    ],
    [
        'InI', [
            { symbol: 'InI', name: 'Indium(I) iodide', density: 5.32 },
        ]
    ],
    [
        'InI3', [
            { symbol: 'InI3', name: 'Indium(III) iodide', density: 4.69 },
        ]
    ],
    [
        'InN', [
            { symbol: 'InN', name: 'Indium nitride', density: 6.88 },
        ]
    ],
    [
        'InP', [
            { symbol: 'InP', name: 'Indium phosphide', density: 4.81 },
        ]
    ],
    [
        'InPO4', [
            { symbol: 'InPO4', name: 'Indium(III) phosphate', density: 4.9 },
        ]
    ],
    [
        'InS', [
            { symbol: 'InS', name: 'Indium(II) sulfide', density: 5.2 },
        ]
    ],
    [
        'InSb', [
            { symbol: 'InSb', name: 'Indium antimonide', density: 5.7747 },
        ]
    ],
    [
        'Ir', [
            { symbol: 'Ir', name: 'Iridium', density: 22.562 },
        ]
    ],
    [
        'Ir2S3', [
            { symbol: 'Ir2S3', name: 'Iridium(III) sulfide', density: 10.2 },
        ]
    ],
    [
        'IrBr3', [
            { symbol: 'IrBr3', name: 'Iridium(III) bromide', density: 6.82 },
        ]
    ],
    [
        'IrCl3', [
            { symbol: 'IrCl3', name: 'Iridium(III) chloride', density: 5.3 },
        ]
    ],
    [
        'IrF3', [
            { symbol: 'IrF3', name: 'Iridium(III) fluoride', density: 8.0 },
        ]
    ],
    [
        'IrF6', [
            { symbol: 'IrF6', name: 'Iridium(VI) fluoride', density: 4.8 },
        ]
    ],
    [
        'IrI3', [
            { symbol: 'IrI3', name: 'Iridium(III) iodide', density: 7.4 },
        ]
    ],
    [
        'IrO2', [
            { symbol: 'IrO2', name: 'Iridium(IV) oxide', density: 11.7 },
        ]
    ],
    [
        'IrS2', [
            { symbol: 'IrS2', name: 'Iridium(IV) sulfide', density: 9.3 },
        ]
    ],
    [
        'K', [
            { symbol: 'K', name: 'Potassium', density: 0.89 },
        ]
    ],
    [
        'K(Ca0.5,Na)2[Al3Si5O16]·6H2O', [
            { symbol: 'K(Ca0.5,Na)2[Al3Si5O16]·6H2O', name: 'Phillipsite', density: 2.2 },
        ]
    ],
    [
        'K(Mg,Fe)3AlSi3O10(OH,F)2', [
            { symbol: 'K(Mg,Fe)3AlSi3O10(OH,F)2', name: 'Biotite', density: 3.0 },
        ]
    ],
    [
        'K2(SbC4H2O6)2·3H2O', [
            { symbol: 'K2(SbC4H2O6)2·3H2O', name: 'Antimony potassium tartrate  trihydrate', density: 2.6 },
        ]
    ],
    [
        'K2(UO2)(SO4)2·2H2O', [
            { symbol: 'K2(UO2)(SO4)2·2H2O', name: 'Potassium uranyl sulfate dihydrate', density: 3.36 },
        ]
    ],
    [
        'K2Al2O4·3H2O', [
            { symbol: 'K2Al2O4·3H2O', name: 'Potassium aluminate trihydrate', density: 2.13 },
        ]
    ],
    [
        'K2Al3Li2AlSi7O20(OH)4', [
            { symbol: 'K2Al3Li2AlSi7O20(OH)4', name: 'Lepidolite', density: 2.85 },
        ]
    ],
    [
        'K2C2O4·H2O', [
            { symbol: 'K2C2O4·H2O', name: 'Potassium oxalate monohydrate', density: 2.13 },
        ]
    ],
    [
        'K2CO3', [
            { symbol: 'K2CO3', name: 'Potassium carbonate', density: 2.29 },
        ]
    ],
    [
        'K2Cd(CN)4', [
            { symbol: 'K2Cd(CN)4', name: 'Potassium tetracyanocadmate', density: 1.85 },
        ]
    ],
    [
        'K2Co(SeO4)2·6H2O', [
            { symbol: 'K2Co(SeO4)2·6H2O', name: 'Potassium cobalt(II) selenate hexahydrate', density: 2.51 },
        ]
    ],
    [
        'K2Cr2O7', [
            { symbol: 'K2Cr2O7', name: 'Potassium dichromate', density: 2.68 },
        ]
    ],
    [
        'K2CrO4', [
            { symbol: 'K2CrO4', name: 'Potassium chromate', density: 2.73 },
        ]
    ],
    [
        'K2FeCl4·2H2O', [
            { symbol: 'K2FeCl4·2H2O', name: 'Douglasite', density: 2.16 },
        ]
    ],
    [
        'K2HgI4', [
            { symbol: 'K2HgI4', name: 'Potassium tetraiodomercurate(II)', density: 4.29 },
        ]
    ],
    [
        'K2MoO4', [
            { symbol: 'K2MoO4', name: 'Potassium molybdate', density: 2.3 },
        ]
    ],
    [
        'K2O', [
            { symbol: 'K2O', name: 'Potassium oxide', density: 2.35 },
        ]
    ],
    [
        'K2PtCl4', [
            { symbol: 'K2PtCl4', name: 'Potassium tetrachloroplatinate', density: 3.38 },
        ]
    ],
    [
        'K2PtCl6', [
            { symbol: 'K2PtCl6', name: 'Potassium hexachloroplatinate', density: 3.5 },
        ]
    ],
    [
        'K2S', [
            { symbol: 'K2S', name: 'Potassium sulfide', density: 1.74 },
        ]
    ],
    [
        'K2S2O5', [
            { symbol: 'K2S2O5', name: 'Potassium metabisulfite', density: 2.3 },
        ]
    ],
    [
        'K2S2O6', [
            { symbol: 'K2S2O6', name: 'Potassium dithionate', density: 2.27 },
        ]
    ],
    [
        'K2S2O7', [
            { symbol: 'K2S2O7', name: 'Potassium pyrosulfate', density: 2.28 },
        ]
    ],
    [
        'K2S2O8', [
            { symbol: 'K2S2O8', name: 'Potassium persulfate', density: 2.48 },
        ]
    ],
    [
        'K2SO4', [
            { symbol: 'K2SO4', name: 'Potassium sulfate', density: 2.66 },
        ]
    ],
    [
        'K2Se', [
            { symbol: 'K2Se', name: 'Potassium selenide', density: 2.29 },
        ]
    ],
    [
        'K2SeO4', [
            { symbol: 'K2SeO4', name: 'Potassium selenate', density: 3.07 },
        ]
    ],
    [
        'K2SiF6', [
            { symbol: 'K2SiF6', name: 'Potassium hexafluorosilicate', density: 2.27 },
        ]
    ],
    [
        'K2SnO3·3H2O', [
            { symbol: 'K2SnO3·3H2O', name: 'Potassium stannate trihydrate', density: 3.2 },
        ]
    ],
    [
        'K2TaF7', [
            { symbol: 'K2TaF7', name: 'Potassium fluorotantalate', density: 5.24 },
        ]
    ],
    [
        'K2TiO3', [
            { symbol: 'K2TiO3', name: 'Potassium titanate', density: 3.1 },
        ]
    ],
    [
        'K2U2O7', [
            { symbol: 'K2U2O7', name: 'Potassium uranate', density: 6.12 },
        ]
    ],
    [
        'K2WO4', [
            { symbol: 'K2WO4', name: 'Potassium tungstate', density: 3.12 },
        ]
    ],
    [
        'K2ZrF6', [
            { symbol: 'K2ZrF6', name: 'Potassium hexafluorozirconate(IV)', density: 3.48 },
        ]
    ],
    [
        'K3AsO4', [
            { symbol: 'K3AsO4', name: 'Potassium arsenate', density: 2.8 },
        ]
    ],
    [
        'K3C6H5O7·H2O', [
            { symbol: 'K3C6H5O7·H2O', name: 'Potassium citrate monohydrate', density: 1.98 },
        ]
    ],
    [
        'K3Co(CN)6', [
            { symbol: 'K3Co(CN)6', name: 'Potassium hexacyanocobaltate', density: 1.91 },
        ]
    ],
    [
        'K3Fe(C2O4)3·3H2O', [
            { symbol: 'K3Fe(C2O4)3·3H2O', name: 'Potassium iron(III) oxalate trihydrate', density: 2.133 },
        ]
    ],
    [
        'K3Fe(CN)6', [
            { symbol: 'K3Fe(CN)6', name: 'Potassium ferricyanide', density: 1.89 },
        ]
    ],
    [
        'K3PO4', [
            { symbol: 'K3PO4', name: 'Potassium phosphate', density: 2.564 },
        ]
    ],
    [
        'K4Fe(CN)6·3H2O', [
            { symbol: 'K4Fe(CN)6·3H2O', name: 'Potassium ferrocyanide trihydrate', density: 1.85 },
        ]
    ],
    [
        'K4P2O7·3H2O', [
            { symbol: 'K4P2O7·3H2O', name: 'Potassium pyrophosphate trihydrate', density: 2.33 },
        ]
    ],
    [
        'KAl(SO4)2·12H2O', [
            { symbol: 'KAl(SO4)2·12H2O', name: 'Potassium aluminum sulfate dodecahydrate', density: 1.72 },
        ]
    ],
    [
        'KAl2AlSi3O10(OH)2', [
            { symbol: 'KAl2AlSi3O10(OH)2', name: 'Muscovite', density: 2.83 },
        ]
    ],
    [
        'KAl3(SO4)2(OH)6', [
            { symbol: 'KAl3(SO4)2(OH)6', name: 'Alunite', density: 2.8 },
        ]
    ],
    [
        'KAl4[Si7AlO20](OH)4', [
            { symbol: 'KAl4[Si7AlO20](OH)4', name: 'Illite', density: 2.8 },
        ]
    ],
    [
        'KAlSi 2O6', [
            { symbol: 'KAlSi 2O6', name: 'Leucite', density: 2.49 },
        ]
    ],
    [
        'KAlSi 3O8', [
            { symbol: 'KAlSi 3O8', name: 'Microcline', density: 2.56 },
        ]
    ],
    [
        'KAlSi3O8', [
            { symbol: 'KAlSi3O8', name: 'Orthoclase', density: 2.56 },
        ]
    ],
    [
        'KAlSiO4', [
            { symbol: 'KAlSiO4', name: 'Kaliophilite', density: 2.61 },
        ]
    ],
    [
        'KAu(CN)2', [
            { symbol: 'KAu(CN)2', name: 'Potassium cyanoaurite', density: 3.45 },
        ]
    ],
    [
        'KBF4', [
            { symbol: 'KBF4', name: 'Potassium fluoroborate', density: 2.505 },
        ]
    ],
    [
        'KBH4', [
            { symbol: 'KBH4', name: 'Potassium borohydride', density: 1.11 },
        ]
    ],
    [
        'KBO2', [
            { symbol: 'KBO2', name: 'Potassium metaborate', density: 2.3 },
        ]
    ],
    [
        'KBr', [
            { symbol: 'KBr', name: 'Potassium bromide', density: 2.74 },
        ]
    ],
    [
        'KBrO3', [
            { symbol: 'KBrO3', name: 'Potassium bromate', density: 3.27 },
        ]
    ],
    [
        'KC2H3O2', [
            { symbol: 'KC2H3O2', name: 'Potassium acetate', density: 1.57 },
        ]
    ],
    [
        'KCHO2', [
            { symbol: 'KCHO2', name: 'Potassium formate', density: 1.91 },
        ]
    ],
    [
        'KCN', [
            { symbol: 'KCN', name: 'Potassium cyanide', density: 1.55 },
        ]
    ],
    [
        'KCNO', [
            { symbol: 'KCNO', name: 'Potassium cyanate', density: 2.05 },
        ]
    ],
    [
        'KCl', [
            { symbol: 'KCl', name: 'Sylvite', density: 1.99 },
        ]
    ],
    [
        'KClO3', [
            { symbol: 'KClO3', name: 'Potassium chlorate', density: 2.34 },
        ]
    ],
    [
        'KClO4', [
            { symbol: 'KClO4', name: 'Potassium perchlorate', density: 2.52 },
        ]
    ],
    [
        'KCrO3Cl', [
            { symbol: 'KCrO3Cl', name: 'Potassium chlorochromate', density: 2.5 },
        ]
    ],
    [
        'KF', [
            { symbol: 'KF', name: 'Potassium fluoride', density: 2.48 },
        ]
    ],
    [
        'KFCa4Si8O20·8H2O', [
            { symbol: 'KFCa4Si8O20·8H2O', name: 'Apophyllite', density: 2.35 },
        ]
    ],
    [
        'KFe3(SO4)2(OH)6', [
            { symbol: 'KFe3(SO4)2(OH)6', name: 'Jarosite', density: 3.09 },
        ]
    ],
    [
        'KF·2H2O', [
            { symbol: 'KF·2H2O', name: 'Potassium fluoride dihydrate', density: 2.5 },
        ]
    ],
    [
        'KH', [
            { symbol: 'KH', name: 'Potassium hydride', density: 1.43 },
        ]
    ],
    [
        'KH2AsO4', [
            { symbol: 'KH2AsO4', name: 'Potassium dihydrogen arsenate', density: 2.87 },
        ]
    ],
    [
        'KH2PO4', [
            { symbol: 'KH2PO4', name: 'Potassium dihydrogen phosphate', density: 2.34 },
        ]
    ],
    [
        'KHC2O4·0.5H2O', [
            { symbol: 'KHC2O4·0.5H2O', name: 'Potassium hydrogen oxalate hemihydrate', density: 2.09 },
        ]
    ],
    [
        'KHC4H4O6', [
            { symbol: 'KHC4H4O6', name: 'Potassium hydrogen tartrate', density: 1.98 },
        ]
    ],
    [
        'KHCO3', [
            { symbol: 'KHCO3', name: 'Potassium hydrogen carbonate', density: 2.17 },
        ]
    ],
    [
        'KHF2', [
            { symbol: 'KHF2', name: 'Potassium hydrogen fluoride', density: 2.37 },
        ]
    ],
    [
        'KHS', [
            { symbol: 'KHS', name: 'Potassium hydrogen sulfide', density: 1.69 },
        ]
    ],
    [
        'KHSO4', [
            { symbol: 'KHSO4', name: 'Potassium hydrogen sulfate', density: 2.32 },
        ]
    ],
    [
        'KHS·0.5H2O', [
            { symbol: 'KHS·0.5H2O', name: 'Potassium hydrogen sulfide hemihydrate', density: 1.7 },
        ]
    ],
    [
        'KI', [
            { symbol: 'KI', name: 'Potassium iodide', density: 3.12 },
        ]
    ],
    [
        'KI3·H2O', [
            { symbol: 'KI3·H2O', name: 'Potassium triiodide monohydrate', density: 3.5 },
        ]
    ],
    [
        'KIO3', [
            { symbol: 'KIO3', name: 'Potassium iodate', density: 3.89 },
        ]
    ],
    [
        'KIO4', [
            { symbol: 'KIO4', name: 'Potassium periodate', density: 3.618 },
        ]
    ],
    [
        'KMg(SO4)Cl·3H2O', [
            { symbol: 'KMg(SO4)Cl·3H2O', name: 'Kainite', density: 2.15 },
        ]
    ],
    [
        'KMg3AlSi3O10(OH)2', [
            { symbol: 'KMg3AlSi3O10(OH)2', name: 'Phlogopite', density: 2.83 },
        ]
    ],
    [
        'KMgCl3·6H2O', [
            { symbol: 'KMgCl3·6H2O', name: 'Carnalite', density: 1.6 },
        ]
    ],
    [
        'KMnO4', [
            { symbol: 'KMnO4', name: 'Potassium permanganate', density: 2.7 },
        ]
    ],
    [
        'KN3', [
            { symbol: 'KN3', name: 'Potassium azide', density: 2.04 },
        ]
    ],
    [
        'KNO2', [
            { symbol: 'KNO2', name: 'Potassium nitrite', density: 1.915 },
        ]
    ],
    [
        'KNO3', [
            { symbol: 'KNO3', name: 'Potassium nitrate', density: 2.105 },
        ]
    ],
    [
        'KNaC4H4O6·4H2O', [
            { symbol: 'KNaC4H4O6·4H2O', name: 'Potassium sodium tartrate tetrahydrate', density: 1.79 },
        ]
    ],
    [
        'KNbO3', [
            { symbol: 'KNbO3', name: 'Potassium niobate', density: 4.64 },
        ]
    ],
    [
        'KO2', [
            { symbol: 'KO2', name: 'Potassium superoxide', density: 2.16 },
        ]
    ],
    [
        'KOH', [
            { symbol: 'KOH', name: 'Potassium hydroxide', density: 2.044 },
        ]
    ],
    [
        'KSCN', [
            { symbol: 'KSCN', name: 'Potassium thiocyanate', density: 1.88 },
        ]
    ],
    [
        'KrF2', [
            { symbol: 'KrF2', name: 'Krypton difluoride', density: 3.24 },
        ]
    ],
    [
        'La', [
            { symbol: 'La', name: 'Lanthanum', density: 6.15 },
        ]
    ],
    [
        'La2(CO3)3·8H2O', [
            { symbol: 'La2(CO3)3·8H2O', name: 'Lanthanum carbonate octahydrate', density: 2.6 },
        ]
    ],
    [
        'La2(SO4)3·8H2O', [
            { symbol: 'La2(SO4)3·8H2O', name: 'Lanthanum sulfate octahydrate', density: 2.82 },
        ]
    ],
    [
        'La2(SO4)3·9H2O', [
            { symbol: 'La2(SO4)3·9H2O', name: 'Lanthanum sulfate nonahydrate', density: 2.82 },
        ]
    ],
    [
        'La2O3', [
            { symbol: 'La2O3', name: 'Lanthanum oxide', density: 6.51 },
        ]
    ],
    [
        'La2S3', [
            { symbol: 'La2S3', name: 'Lanthanum sulfide', density: 4.9 },
        ]
    ],
    [
        'LaB6', [
            { symbol: 'LaB6', name: 'Lanthanum boride', density: 4.76 },
        ]
    ],
    [
        'LaBr3', [
            { symbol: 'LaBr3', name: 'Lanthanum bromide', density: 5.1 },
        ]
    ],
    [
        'LaBrO3·9H2O', [
            { symbol: 'LaBrO3·9H2O', name: 'Lanthanum bromate nonahydrate', density: 5.06 },
        ]
    ],
    [
        'LaC2', [
            { symbol: 'LaC2', name: 'Lanthanum carbide', density: 5.29 },
        ]
    ],
    [
        'LaCl3', [
            { symbol: 'LaCl3', name: 'Lanthanum chloride', density: 3.84 },
        ]
    ],
    [
        'LaF3', [
            { symbol: 'LaF3', name: 'Lanthanum fluoride', density: 5.9 },
        ]
    ],
    [
        'LaH3', [
            { symbol: 'LaH3', name: 'Lanthanum hydride', density: 5.36 },
        ]
    ],
    [
        'LaI3', [
            { symbol: 'LaI3', name: 'Lanthanum iodide', density: 5.6 },
        ]
    ],
    [
        'LaN', [
            { symbol: 'LaN', name: 'Lanthanum nitride', density: 6.73 },
        ]
    ],
    [
        'LaS', [
            { symbol: 'LaS', name: 'Lanthanum monosulfide', density: 5.61 },
        ]
    ],
    [
        'LaSi2', [
            { symbol: 'LaSi2', name: 'Lanthanum silicide', density: 5.0 },
        ]
    ],
    [
        'Li', [
            { symbol: 'Li', name: 'Lithium', density: 0.534 },
        ]
    ],
    [
        'Li(CHO2)·H2O', [
            { symbol: 'Li(CHO2)·H2O', name: 'Lithium formate monohydrate', density: 1.46 },
        ]
    ],
    [
        'Li(Fe,Mn)PO4', [
            { symbol: 'Li(Fe,Mn)PO4', name: 'Triphyllite-  Lithiophyllite', density: 3.46 },
        ]
    ],
    [
        'Li2C2', [
            { symbol: 'Li2C2', name: 'Lithium carbide', density: 1.65 },
        ]
    ],
    [
        'Li2C2O4', [
            { symbol: 'Li2C2O4', name: 'Lithium oxalate', density: 2.121 },
        ]
    ],
    [
        'Li2CO3', [
            { symbol: 'Li2CO3', name: 'Lithium carbonate', density: 2.11 },
        ]
    ],
    [
        'Li2Cr2O7·2H2O', [
            { symbol: 'Li2Cr2O7·2H2O', name: 'Lithium dichromate dihydrate', density: 2.34 },
        ]
    ],
    [
        'Li2CrO4·2H2O', [
            { symbol: 'Li2CrO4·2H2O', name: 'Lithium chromate dihydrate', density: 2.15 },
        ]
    ],
    [
        'Li2MnO3', [
            { symbol: 'Li2MnO3', name: 'Lithium manganate', density: 3.9 },
        ]
    ],
    [
        'Li2MoO4', [
            { symbol: 'Li2MoO4', name: 'Lithium molybdate', density: 2.66 },
        ]
    ],
    [
        'Li2O', [
            { symbol: 'Li2O', name: 'Lithium oxide', density: 2.013 },
        ]
    ],
    [
        'Li2O2', [
            { symbol: 'Li2O2', name: 'Lithium peroxide', density: 2.31 },
        ]
    ],
    [
        'Li2S', [
            { symbol: 'Li2S', name: 'Lithium sulfide', density: 1.64 },
        ]
    ],
    [
        'Li2SO4', [
            { symbol: 'Li2SO4', name: 'Lithium sulfate', density: 2.21 },
        ]
    ],
    [
        'Li2SO4·H2O', [
            { symbol: 'Li2SO4·H2O', name: 'Lithium sulfate monohydrate', density: 2.06 },
        ]
    ],
    [
        'Li2SeO4·H2O', [
            { symbol: 'Li2SeO4·H2O', name: 'Lithium selenate monohydrate', density: 2.56 },
        ]
    ],
    [
        'Li2SiO3', [
            { symbol: 'Li2SiO3', name: 'Lithium metasilicate', density: 2.52 },
        ]
    ],
    [
        'Li2WO4', [
            { symbol: 'Li2WO4', name: 'Lithium tungstate', density: 3.71 },
        ]
    ],
    [
        'Li3AsO4', [
            { symbol: 'Li3AsO4', name: 'Lithium arsenate', density: 3.07 },
        ]
    ],
    [
        'Li3N', [
            { symbol: 'Li3N', name: 'Lithium nitride', density: 1.27 },
        ]
    ],
    [
        'Li3PO4', [
            { symbol: 'Li3PO4', name: 'Lithium phosphate', density: 2.46 },
        ]
    ],
    [
        'LiAl(SiO3)2', [
            { symbol: 'LiAl(SiO3)2', name: 'Spodumene', density: 3.13 },
        ]
    ],
    [
        'LiAlH4', [
            { symbol: 'LiAlH4', name: 'Lithium aluminum hydride', density: 0.917 },
        ]
    ],
    [
        'LiAlSi2O6', [
            { symbol: 'LiAlSi2O6', name: 'Lithium aluminum silicate', density: 3.188 },
        ]
    ],
    [
        'LiAlSi4O10', [
            { symbol: 'LiAlSi4O10', name: 'Petalite', density: 2.42 },
        ]
    ],
    [
        'LiBH4', [
            { symbol: 'LiBH4', name: 'Lithium borohydride', density: 0.66 },
        ]
    ],
    [
        'LiBO2', [
            { symbol: 'LiBO2', name: 'Lithium metaborate', density: 2.18 },
        ]
    ],
    [
        'LiBO2·2H2O', [
            { symbol: 'LiBO2·2H2O', name: 'Lithium metaborate dihydrate', density: 1.8 },
        ]
    ],
    [
        'LiBr', [
            { symbol: 'LiBr', name: 'Lithium bromide', density: 3.464 },
        ]
    ],
    [
        'LiBr·H2O', [
            { symbol: 'LiBr·H2O', name: 'Lithium bromide monohydrate', density: 3.46 },
        ]
    ],
    [
        'LiC2H3O2·2H2O', [
            { symbol: 'LiC2H3O2·2H2O', name: 'Lithium acetate dihydrate', density: 1.3 },
        ]
    ],
    [
        'LiCl', [
            { symbol: 'LiCl', name: 'Lithium chloride', density: 2.07 },
        ]
    ],
    [
        'LiClO3', [
            { symbol: 'LiClO3', name: 'Lithium chlorate', density: 1.119 },
        ]
    ],
    [
        'LiClO4', [
            { symbol: 'LiClO4', name: 'Lithium perchlorate', density: 2.428 },
        ]
    ],
    [
        'LiClO4·3H2O', [
            { symbol: 'LiClO4·3H2O', name: 'Lithium perchlorate trihydrate', density: 1.84 },
        ]
    ],
    [
        'LiCl·H2O', [
            { symbol: 'LiCl·H2O', name: 'Lithium chloride monohydrate', density: 1.78 },
        ]
    ],
    [
        'LiD', [
            { symbol: 'LiD', name: 'Lithium hydride-d', density: 0.82 },
        ]
    ],
    [
        'LiF', [
            { symbol: 'LiF', name: 'Lithium fluoride', density: 2.64 },
        ]
    ],
    [
        'LiH', [
            { symbol: 'LiH', name: 'Lithium hydride', density: 0.78 },
        ]
    ],
    [
        'LiH2PO4', [
            { symbol: 'LiH2PO4', name: 'Lithium dihydrogen phosphate', density: 2.461 },
        ]
    ],
    [
        'LiI', [
            { symbol: 'LiI', name: 'Lithium iodide', density: 4.06 },
        ]
    ],
    [
        'LiIO3', [
            { symbol: 'LiIO3', name: 'Lithium iodate', density: 4.502 },
        ]
    ],
    [
        'LiI·3H2O', [
            { symbol: 'LiI·3H2O', name: 'Lithium iodide trihydrate', density: 2.38 },
        ]
    ],
    [
        'LiN3', [
            { symbol: 'LiN3', name: 'Lithium azide', density: 1.83 },
        ]
    ],
    [
        'LiNH2', [
            { symbol: 'LiNH2', name: 'Lithium amide', density: 1.18 },
        ]
    ],
    [
        'LiNO2·H2O', [
            { symbol: 'LiNO2·H2O', name: 'Lithium nitrite monohydrate', density: 1.615 },
        ]
    ],
    [
        'LiNO3', [
            { symbol: 'LiNO3', name: 'Lithium nitrate', density: 2.38 },
        ]
    ],
    [
        'LiNbO3', [
            { symbol: 'LiNbO3', name: 'Lithium niobate', density: 4.3 },
        ]
    ],
    [
        'LiOH', [
            { symbol: 'LiOH', name: 'Lithium hydroxide', density: 1.45 },
        ]
    ],
    [
        'LiOH·H2O', [
            { symbol: 'LiOH·H2O', name: 'Lithium hydroxide monohydrate', density: 1.51 },
        ]
    ],
    [
        'LiPF6', [
            { symbol: 'LiPF6', name: 'Lithium hexafluorophosphate', density: 2.84 },
        ]
    ],
    [
        'LiPO3', [
            { symbol: 'LiPO3', name: 'Lithium metaphosphate', density: 1.8 },
        ]
    ],
    [
        'LiSiO4', [
            { symbol: 'LiSiO4', name: 'Lithium orthosilicate', density: 2.39 },
        ]
    ],
    [
        'Lu', [
            { symbol: 'Lu', name: 'Lutetium', density: 9.84 },
        ]
    ],
    [
        'Lu2O3', [
            { symbol: 'Lu2O3', name: 'Lutetium oxide', density: 9.41 },
        ]
    ],
    [
        'Lu2S3', [
            { symbol: 'Lu2S3', name: 'Lutetium sulfide', density: 6.26 },
        ]
    ],
    [
        'Lu2Te3', [
            { symbol: 'Lu2Te3', name: 'Lutetium telluride', density: 7.8 },
        ]
    ],
    [
        'LuB4', [
            { symbol: 'LuB4', name: 'Lutetium boride', density: 7.0 },
        ]
    ],
    [
        'LuCl3', [
            { symbol: 'LuCl3', name: 'Lutetium chloride', density: 3.98 },
        ]
    ],
    [
        'LuF3', [
            { symbol: 'LuF3', name: 'Lutetium fluoride', density: 8.3 },
        ]
    ],
    [
        'LuI3', [
            { symbol: 'LuI3', name: 'Lutetium iodide', density: 5.6 },
        ]
    ],
    [
        'LuN', [
            { symbol: 'LuN', name: 'Lutetium nitride', density: 11.6 },
        ]
    ],
    [
        'Mg', [
            { symbol: 'Mg', name: 'Magnesium', density: 1.74 },
        ]
    ],
    [
        'Mg(AlO2)2', [
            { symbol: 'Mg(AlO2)2', name: 'Magnesium aluminate', density: 3.55 },
        ]
    ],
    [
        'Mg(BrO3)2·6H2O', [
            { symbol: 'Mg(BrO3)2·6H2O', name: 'Magnesium bromate hexahydrate', density: 2.29 },
        ]
    ],
    [
        'Mg(C2H3O2)2', [
            { symbol: 'Mg(C2H3O2)2', name: 'Magnesium acetate', density: 1.5 },
        ]
    ],
    [
        'Mg(C2H3O2)2·4H2O', [
            { symbol: 'Mg(C2H3O2)2·4H2O', name: 'Magnesium acetate tetrahydrate', density: 1.45 },
        ]
    ],
    [
        'Mg(C2H3O2)2·H2O', [
            { symbol: 'Mg(C2H3O2)2·H2O', name: 'Magnesium acetate monohydrate', density: 1.55 },
        ]
    ],
    [
        'Mg(ClO3)2·6H2O', [
            { symbol: 'Mg(ClO3)2·6H2O', name: 'Magnesium chlorate hexahydrate', density: 1.8 },
        ]
    ],
    [
        'Mg(ClO4)2', [
            { symbol: 'Mg(ClO4)2', name: 'Magnesium perchlorate', density: 2.2 },
        ]
    ],
    [
        'Mg(ClO4)2·6H2O', [
            { symbol: 'Mg(ClO4)2·6H2O', name: 'Magnesium perchlorate hexahydrate', density: 1.98 },
        ]
    ],
    [
        'Mg(IO3)2·4H2O', [
            { symbol: 'Mg(IO3)2·4H2O', name: 'Magnesium iodate tetrahydrate', density: 3.3 },
        ]
    ],
    [
        'Mg(MnO4)2·6H2O', [
            { symbol: 'Mg(MnO4)2·6H2O', name: 'Magnesium permanganate hexahydrate', density: 2.18 },
        ]
    ],
    [
        'Mg(NH2)2', [
            { symbol: 'Mg(NH2)2', name: 'Magnesium amide', density: 1.39 },
        ]
    ],
    [
        'Mg(NH4)(PO4)·6H2O', [
            { symbol: 'Mg(NH4)(PO4)·6H2O', name: 'Struvite', density: 1.71 },
        ]
    ],
    [
        'Mg(NO3)2', [
            { symbol: 'Mg(NO3)2', name: 'Magnesium nitrate', density: 2.3 },
        ]
    ],
    [
        'Mg(NO3)2·2H2O', [
            { symbol: 'Mg(NO3)2·2H2O', name: 'Magnesium nitrate dihydrate', density: 1.45 },
        ]
    ],
    [
        'Mg(NO3)2·6H2O', [
            { symbol: 'Mg(NO3)2·6H2O', name: 'Magnesium nitrate hexahydrate', density: 1.46 },
        ]
    ],
    [
        'Mg(OH)2', [
            { symbol: 'Mg(OH)2', name: 'Brucite', density: 2.37 },
        ]
    ],
    [
        'Mg(OH,F)2·3Mg2SiO4', [
            { symbol: 'Mg(OH,F)2·3Mg2SiO4', name: 'Humite', density: 3.3 },
        ]
    ],
    [
        'Mg(OH,F)2·Mg2SiO4', [
            { symbol: 'Mg(OH,F)2·Mg2SiO4', name: 'Norbergite', density: 3.21 },
        ]
    ],
    [
        'Mg2(PO4)F', [
            { symbol: 'Mg2(PO4)F', name: 'Wagnerite', density: 3.15 },
        ]
    ],
    [
        'Mg2Al3(AlSi5O18)', [
            { symbol: 'Mg2Al3(AlSi5O18)', name: 'Magnesium aluminum silicate', density: 2.6 },
        ]
    ],
    [
        'Mg2Al4O6SiO4', [
            { symbol: 'Mg2Al4O6SiO4', name: 'Sapphirine', density: 3.49 },
        ]
    ],
    [
        'Mg2Ge', [
            { symbol: 'Mg2Ge', name: 'Magnesium germanide', density: 3.09 },
        ]
    ],
    [
        'Mg2P2O7', [
            { symbol: 'Mg2P2O7', name: 'Magnesium pyrophosphate', density: 2.56 },
        ]
    ],
    [
        'Mg2P2O7·3H2O', [
            { symbol: 'Mg2P2O7·3H2O', name: 'Magnesium pyrophosphate trihydrate', density: 2.56 },
        ]
    ],
    [
        'Mg2Si', [
            { symbol: 'Mg2Si', name: 'Magnesium silicide', density: 1.99 },
        ]
    ],
    [
        'Mg2SiO4', [
            { symbol: 'Mg2SiO4', name: 'Magnesium orthosilicate', density: 3.21 },
        ]
    ],
    [
        'Mg2Sn', [
            { symbol: 'Mg2Sn', name: 'Magnesium stannide', density: 3.6 },
        ]
    ],
    [
        'Mg2TiO4', [
            { symbol: 'Mg2TiO4', name: 'Magnesium orthotitanate', density: 3.53 },
        ]
    ],
    [
        'Mg2V2O7', [
            { symbol: 'Mg2V2O7', name: 'Magnesium vanadate', density: 3.1 },
        ]
    ],
    [
        'Mg3(PO4)2·8H2O', [
            { symbol: 'Mg3(PO4)2·8H2O', name: 'Magnesium phosphate octahydrate', density: 2.17 },
        ]
    ],
    [
        'Mg3Al2Si3O12', [
            { symbol: 'Mg3Al2Si3O12', name: 'Pyrope', density: 3.58 },
        ]
    ],
    [
        'Mg3As2', [
            { symbol: 'Mg3As2', name: 'Magnesium arsenide', density: 3.15 },
        ]
    ],
    [
        'Mg3B7O13Cl', [
            { symbol: 'Mg3B7O13Cl', name: 'Boracite', density: 2.94 },
        ]
    ],
    [
        'Mg3Ca(CO3)4', [
            { symbol: 'Mg3Ca(CO3)4', name: 'Huntite', density: 2.7 },
        ]
    ],
    [
        'Mg3N2', [
            { symbol: 'Mg3N2', name: 'Magnesium nitride', density: 2.71 },
        ]
    ],
    [
        'Mg3P2', [
            { symbol: 'Mg3P2', name: 'Magnesium phosphide', density: 2.06 },
        ]
    ],
    [
        'Mg3Sb2', [
            { symbol: 'Mg3Sb2', name: 'Magnesium antimonide', density: 3.99 },
        ]
    ],
    [
        'Mg3Si2O5(OH)4', [
            { symbol: 'Mg3Si2O5(OH)4', name: 'Serpentine', density: 2.55 },
        ]
    ],
    [
        'Mg7Si8O22(OH)2', [
            { symbol: 'Mg7Si8O22(OH)2', name: 'Anthophyllite', density: 3.21 },
        ]
    ],
    [
        'MgAl2O4', [
            { symbol: 'MgAl2O4', name: 'Spinel', density: 3.55 },
        ]
    ],
    [
        'MgB2', [
            { symbol: 'MgB2', name: 'Magnesium diboride', density: 2.57 },
        ]
    ],
    [
        'MgBr2', [
            { symbol: 'MgBr2', name: 'Magnesium bromide', density: 3.72 },
        ]
    ],
    [
        'MgBr2·6H2O', [
            { symbol: 'MgBr2·6H2O', name: 'Magnesium bromide hexahydrate', density: 2.0 },
        ]
    ],
    [
        'MgCO3', [
            { symbol: 'MgCO3', name: 'Magnesite', density: 3.05 },
        ]
    ],
    [
        'MgCO3·2H2O', [
            { symbol: 'MgCO3·2H2O', name: 'Magnesium carbonate dihydrate', density: 2.8 },
        ]
    ],
    [
        'MgCO3·3H2O', [
            { symbol: 'MgCO3·3H2O', name: 'Magnesium carbonate trihydrate', density: 1.8 },
        ]
    ],
    [
        'MgCO3·5H2O', [
            { symbol: 'MgCO3·5H2O', name: 'Magnesium carbonate  pentahydrate', density: 3.04 },
        ]
    ],
    [
        'MgCO3·Mg(OH)2·3H2O', [
            { symbol: 'MgCO3·Mg(OH)2·3H2O', name: 'Magnesium carbonate dihydroxide trihydrate', density: 2.04 },
        ]
    ],
    [
        'MgCl2', [
            { symbol: 'MgCl2', name: 'Magnesium chloride', density: 2.325 },
        ]
    ],
    [
        'MgCl2·6H2O', [
            { symbol: 'MgCl2·6H2O', name: 'Magnesium chloride hexahydrate', density: 1.56 },
        ]
    ],
    [
        'MgCr2O4', [
            { symbol: 'MgCr2O4', name: 'Magnesium chromite', density: 4.4 },
        ]
    ],
    [
        'MgCrO4·7H2O', [
            { symbol: 'MgCrO4·7H2O', name: 'Magnesium chromate heptahydrate', density: 1.695 },
        ]
    ],
    [
        'MgF2', [
            { symbol: 'MgF2', name: 'Sellaite', density: 3.15 },
        ]
    ],
    [
        'MgH2', [
            { symbol: 'MgH2', name: 'Magnesium hydride', density: 1.45 },
        ]
    ],
    [
        'MgHPO4·3H2O', [
            { symbol: 'MgHPO4·3H2O', name: 'Magnesium hydrogen phosphate trihydrate', density: 2.13 },
        ]
    ],
    [
        'MgI2', [
            { symbol: 'MgI2', name: 'Magnesium iodide', density: 4.43 },
        ]
    ],
    [
        'MgI2·6H2O', [
            { symbol: 'MgI2·6H2O', name: 'Magnesium iodide hexahydrate', density: 2.35 },
        ]
    ],
    [
        'MgI2·8H2O', [
            { symbol: 'MgI2·8H2O', name: 'Magnesium iodide octahydrate', density: 2.1 },
        ]
    ],
    [
        'MgMoO4', [
            { symbol: 'MgMoO4', name: 'Magnesium molybdate', density: 2.2 },
        ]
    ],
    [
        'MgNH4PO4·6H2O', [
            { symbol: 'MgNH4PO4·6H2O', name: 'Magnesium ammonium phosphate hexahydrate', density: 1.71 },
        ]
    ],
    [
        'MgO', [
            { symbol: 'MgO', name: 'Periclase', density: 3.6 },
        ]
    ],
    [
        'MgO2', [
            { symbol: 'MgO2', name: 'Magnesium peroxide', density: 3.0 },
        ]
    ],
    [
        'MgS', [
            { symbol: 'MgS', name: 'Magnesium sulfide', density: 2.68 },
        ]
    ],
    [
        'MgS2O3·6H2O', [
            { symbol: 'MgS2O3·6H2O', name: 'Magnesium thiosulfate hexahydrate', density: 1.82 },
        ]
    ],
    [
        'MgSO3·3H2O', [
            { symbol: 'MgSO3·3H2O', name: 'Magnesium sulfite trihydrate', density: 2.12 },
        ]
    ],
    [
        'MgSO3·6H2O', [
            { symbol: 'MgSO3·6H2O', name: 'Magnesium sulfite hexahydrate', density: 1.72 },
        ]
    ],
    [
        'MgSO4', [
            { symbol: 'MgSO4', name: 'Magnesium sulfate', density: 2.66 },
        ]
    ],
    [
        'MgSO4·7H2O', [
            { symbol: 'MgSO4·7H2O', name: 'Epsomite', density: 1.67 },
        ]
    ],
    [
        'MgSO4·H2O', [
            { symbol: 'MgSO4·H2O', name: 'Magnesium sulfate monohydrate', density: 2.57 },
        ]
    ],
    [
        'MgSe', [
            { symbol: 'MgSe', name: 'Magnesium selenide', density: 4.2 },
        ]
    ],
    [
        'MgSeO3·6H2O', [
            { symbol: 'MgSeO3·6H2O', name: 'Magnesium selenite hexahydrate', density: 2.09 },
        ]
    ],
    [
        'MgSeO4·6H2O', [
            { symbol: 'MgSeO4·6H2O', name: 'Magnesium selenate hexahydrate', density: 1.928 },
        ]
    ],
    [
        'MgSiF6·6H2O', [
            { symbol: 'MgSiF6·6H2O', name: 'Magnesium hexafluorosilicate  hexahydrate', density: 1.79 },
        ]
    ],
    [
        'MgSiO3', [
            { symbol: 'MgSiO3', name: 'Enstatite', density: 3.19 },
        ]
    ],
    [
        'MgTiO3', [
            { symbol: 'MgTiO3', name: 'Geikielite', density: 3.85 },
        ]
    ],
    [
        'MgWO4', [
            { symbol: 'MgWO4', name: 'Magnesium tungstate', density: 6.89 },
        ]
    ],
    [
        'MgZrO3', [
            { symbol: 'MgZrO3', name: 'Magnesium zirconate', density: 4.23 },
        ]
    ],
    [
        'Mn', [
            { symbol: 'Mn', name: 'Manganese', density: 7.3 },
        ]
    ],
    [
        'Mn(C2H3O2)2·4H2O', [
            { symbol: 'Mn(C2H3O2)2·4H2O', name: 'Manganese(II) acetate tetrahydrate', density: 1.59 },
        ]
    ],
    [
        'Mn(ClO4)2·6H2O', [
            { symbol: 'Mn(ClO4)2·6H2O', name: 'Manganese(II) perchlorate  hexahydrate', density: 2.1 },
        ]
    ],
    [
        'Mn(NO3)2', [
            { symbol: 'Mn(NO3)2', name: 'Manganese(II) nitrate', density: 2.2 },
        ]
    ],
    [
        'Mn(NO3)2·4H2O', [
            { symbol: 'Mn(NO3)2·4H2O', name: 'Manganese(II) nitrate tetrahydrate', density: 2.13 },
        ]
    ],
    [
        'Mn(NO3)2·6H2O', [
            { symbol: 'Mn(NO3)2·6H2O', name: 'Manganese(II) nitrate hexahydrate', density: 1.8 },
        ]
    ],
    [
        'Mn(OH)2', [
            { symbol: 'Mn(OH)2', name: 'Pyrochroite', density: 3.26 },
        ]
    ],
    [
        'Mn2(CO)10', [
            { symbol: 'Mn2(CO)10', name: 'Manganese carbonyl', density: 1.75 },
        ]
    ],
    [
        'Mn2B', [
            { symbol: 'Mn2B', name: 'Manganese boride (Mn2B)', density: 7.2 },
        ]
    ],
    [
        'Mn2O3', [
            { symbol: 'Mn2O3', name: 'Manganese(III) oxide', density: 5.0 },
        ]
    ],
    [
        'Mn2O7', [
            { symbol: 'Mn2O7', name: 'Manganese(VII) oxide', density: 2.4 },
        ]
    ],
    [
        'Mn2P', [
            { symbol: 'Mn2P', name: 'Manganese phosphide (Mn2P)', density: 6.0 },
        ]
    ],
    [
        'Mn2P2O7', [
            { symbol: 'Mn2P2O7', name: 'Manganese(II) pyrophosphate', density: 3.71 },
        ]
    ],
    [
        'Mn2Sb', [
            { symbol: 'Mn2Sb', name: 'Manganese antimonide (Mn2Sb)', density: 7.0 },
        ]
    ],
    [
        'Mn2SiO4', [
            { symbol: 'Mn2SiO4', name: 'Manganese(II) orthosilicate', density: 4.11 },
        ]
    ],
    [
        'Mn3Al2Si3O12', [
            { symbol: 'Mn3Al2Si3O12', name: 'Spessartite', density: 4.19 },
        ]
    ],
    [
        'Mn3C', [
            { symbol: 'Mn3C', name: 'Manganese carbide', density: 6.89 },
        ]
    ],
    [
        'Mn3O4', [
            { symbol: 'Mn3O4', name: 'Hausmannite', density: 4.84 },
        ]
    ],
    [
        'Mn4Be3Si3O12S', [
            { symbol: 'Mn4Be3Si3O12S', name: 'Helvite', density: 3.32 },
        ]
    ],
    [
        'MnAl2O4', [
            { symbol: 'MnAl2O4', name: 'Galaxite', density: 4.04 },
        ]
    ],
    [
        'MnB', [
            { symbol: 'MnB', name: 'Manganese boride (MnB)', density: 6.45 },
        ]
    ],
    [
        'MnB2', [
            { symbol: 'MnB2', name: 'Manganese boride [MnB2]', density: 5.3 },
        ]
    ],
    [
        'MnBr2', [
            { symbol: 'MnBr2', name: 'Manganese(II) bromide', density: 4.385 },
        ]
    ],
    [
        'MnC2O4·2H2O', [
            { symbol: 'MnC2O4·2H2O', name: 'Manganese(II) oxalate dihydrate', density: 2.45 },
        ]
    ],
    [
        'MnCO3', [
            { symbol: 'MnCO3', name: 'Manganese(II) carbonate', density: 3.7 },
        ]
    ],
    [
        'MnCl2', [
            { symbol: 'MnCl2', name: 'Manganese(II) chloride', density: 2.977 },
        ]
    ],
    [
        'MnCl2·4H2O', [
            { symbol: 'MnCl2·4H2O', name: 'Manganese(II) chloride tetrahydrate', density: 1.913 },
        ]
    ],
    [
        'MnF2', [
            { symbol: 'MnF2', name: 'Manganese(II) fluoride', density: 3.98 },
        ]
    ],
    [
        'MnF3', [
            { symbol: 'MnF3', name: 'Manganese(III) fluoride', density: 3.54 },
        ]
    ],
    [
        'MnFe2O4', [
            { symbol: 'MnFe2O4', name: 'Jacobsite', density: 4.87 },
        ]
    ],
    [
        'MnI2', [
            { symbol: 'MnI2', name: 'Manganese(II) iodide', density: 5.04 },
        ]
    ],
    [
        'MnMoO4', [
            { symbol: 'MnMoO4', name: 'Manganese(II) molybdate', density: 4.05 },
        ]
    ],
    [
        'MnO', [
            { symbol: 'MnO', name: 'Manganosite', density: 5.37 },
        ]
    ],
    [
        'MnO(OH)', [
            { symbol: 'MnO(OH)', name: 'Manganite', density: 4.3 },
        ]
    ],
    [
        'MnO2', [
            { symbol: 'MnO2', name: 'Pyrolusite', density: 5.08 },
        ]
    ],
    [
        'MnP', [
            { symbol: 'MnP', name: 'Manganese phosphide (MnP)', density: 5.49 },
        ]
    ],
    [
        'MnS', [
            { symbol: 'MnS', name: 'Manganese(II) sulfide (α form)', density: 4.0 },
            { symbol: 'MnS', name: 'Manganese(II) sulfide (β form)', density: 3.3 },
            { symbol: 'MnS', name: 'Manganese(II) sulfide (γ form)', density: 3.3 },
            { symbol: 'MnS', name: 'Alabandite', density: 4.0 },
        ]
    ],
    [
        'MnSO4', [
            { symbol: 'MnSO4', name: 'Manganese(II) sulfate', density: 3.25 },
        ]
    ],
    [
        'MnSO4·4H2O', [
            { symbol: 'MnSO4·4H2O', name: 'Manganese(II) sulfate tetrahydrate', density: 2.26 },
        ]
    ],
    [
        'MnSO4·H2O', [
            { symbol: 'MnSO4·H2O', name: 'Manganese(II) sulfate  monohydrate', density: 2.95 },
        ]
    ],
    [
        'MnSb', [
            { symbol: 'MnSb', name: 'Manganese antimonide (MnSb)', density: 6.9 },
        ]
    ],
    [
        'MnSe', [
            { symbol: 'MnSe', name: 'Manganese(II) selenide', density: 5.45 },
        ]
    ],
    [
        'MnSiO3', [
            { symbol: 'MnSiO3', name: 'Manganese(II) metasilicate', density: 3.48 },
        ]
    ],
    [
        'MnTe', [
            { symbol: 'MnTe', name: 'Manganese(II) telluride', density: 6.0 },
        ]
    ],
    [
        'MnTiO3', [
            { symbol: 'MnTiO3', name: 'Manganese(II) titanate', density: 4.55 },
        ]
    ],
    [
        'MnWO4', [
            { symbol: 'MnWO4', name: 'Huebnerite', density: 7.2 },
        ]
    ],
    [
        'Mo', [
            { symbol: 'Mo', name: 'Molybdenum', density: 10.2 },
        ]
    ],
    [
        'Mo(CO)6', [
            { symbol: 'Mo(CO)6', name: 'Molybdenum carbonyl', density: 1.96 },
        ]
    ],
    [
        'Mo(PO3)6', [
            { symbol: 'Mo(PO3)6', name: 'Molybdenum(VI) metaphosphate', density: 3.28 },
        ]
    ],
    [
        'Mo2B', [
            { symbol: 'Mo2B', name: 'Molybdenum boride (Mo2B)', density: 9.2 },
        ]
    ],
    [
        'Mo2B5', [
            { symbol: 'Mo2B5', name: 'Molybdenum boride [Mo2B5]', density: 7.2 },
        ]
    ],
    [
        'Mo2C', [
            { symbol: 'Mo2C', name: 'Molybdenum carbide (Mo2C)', density: 9.18 },
        ]
    ],
    [
        'Mo2N', [
            { symbol: 'Mo2N', name: 'Molybdenum nitride (Mo2N)', density: 9.46 },
        ]
    ],
    [
        'MoBr2', [
            { symbol: 'MoBr2', name: 'Molybdenum(II) bromide', density: 4.88 },
        ]
    ],
    [
        'MoBr3', [
            { symbol: 'MoBr3', name: 'Molybdenum(III) bromide', density: 4.89 },
        ]
    ],
    [
        'MoCl2', [
            { symbol: 'MoCl2', name: 'Molybdenum(II) chloride', density: 3.71 },
        ]
    ],
    [
        'MoCl3', [
            { symbol: 'MoCl3', name: 'Molybdenum(III) chloride', density: 3.74 },
        ]
    ],
    [
        'MoCl5', [
            { symbol: 'MoCl5', name: 'Molybdenum(V) chloride', density: 2.93 },
        ]
    ],
    [
        'MoF3', [
            { symbol: 'MoF3', name: 'Molybdenum(III) fluoride', density: 4.64 },
        ]
    ],
    [
        'MoF5', [
            { symbol: 'MoF5', name: 'Molybdenum(V) fluoride', density: 3.5 },
        ]
    ],
    [
        'MoF6', [
            { symbol: 'MoF6', name: 'Molybdenum(VI) fluoride', density: 2.54 },
        ]
    ],
    [
        'MoI2', [
            { symbol: 'MoI2', name: 'Molybdenum(II) iodide', density: 5.28 },
        ]
    ],
    [
        'MoN', [
            { symbol: 'MoN', name: 'Molybdenum nitride (MoN)', density: 9.2 },
        ]
    ],
    [
        'MoO2', [
            { symbol: 'MoO2', name: 'Molybdenum(IV) oxide', density: 6.47 },
        ]
    ],
    [
        'MoO2Cl2', [
            { symbol: 'MoO2Cl2', name: 'Molybdenum(VI) dioxydichloride', density: 3.31 },
        ]
    ],
    [
        'MoO2F2', [
            { symbol: 'MoO2F2', name: 'Molybdenum(VI) dioxydifluoride', density: 3.5 },
        ]
    ],
    [
        'MoO3', [
            { symbol: 'MoO3', name: 'Molybdenum(VI) oxide', density: 4.7 },
        ]
    ],
    [
        'MoP', [
            { symbol: 'MoP', name: 'Molybdenum phosphide', density: 7.34 },
        ]
    ],
    [
        'MoS2', [
            { symbol: 'MoS2', name: 'Molybdenite', density: 5.06 },
        ]
    ],
    [
        'MoSe2', [
            { symbol: 'MoSe2', name: 'Molybdenum(IV) selenide', density: 6.9 },
        ]
    ],
    [
        'MoSi2', [
            { symbol: 'MoSi2', name: 'Molybdenum silicide [MoSi2]', density: 6.2 },
        ]
    ],
    [
        'MoTe2', [
            { symbol: 'MoTe2', name: 'Molybdenum(IV) telluride', density: 7.7 },
        ]
    ],
    [
        'N2H4', [
            { symbol: 'N2H4', name: 'Hydrazine', density: 1.0036 },
        ]
    ],
    [
        'N2H4·2HCl', [
            { symbol: 'N2H4·2HCl', name: 'Hydrazine dihydrochloride', density: 1.42 },
        ]
    ],
    [
        'N2H4·H2O', [
            { symbol: 'N2H4·H2O', name: 'Hydrazine monohydrate', density: 1.03 },
        ]
    ],
    [
        'N2H4·H2SO4', [
            { symbol: 'N2H4·H2SO4', name: 'Hydrazine sulfate', density: 1.378 },
        ]
    ],
    [
        'N2H4·HBr', [
            { symbol: 'N2H4·HBr', name: 'Hydrazine hydrobromide', density: 2.3 },
        ]
    ],
    [
        'N2H4·HCl', [
            { symbol: 'N2H4·HCl', name: 'Hydrazine hydrochloride', density: 1.5 },
        ]
    ],
    [
        'N2H4·HClO4·0.5H2O', [
            { symbol: 'N2H4·HClO4·0.5H2O', name: 'Hydrazine perchlorate hemihydrate', density: 1.94 },
        ]
    ],
    [
        'N2O4', [
            { symbol: 'N2O4', name: 'Nitrogen tetroxide', density: 1.452 },
        ]
    ],
    [
        'N2O5', [
            { symbol: 'N2O5', name: 'Nitrogen pentoxide', density: 2.0 },
        ]
    ],
    [
        'N4Se4', [
            { symbol: 'N4Se4', name: 'Nitrogen selenide', density: 4.2 },
        ]
    ],
    [
        'NCl3', [
            { symbol: 'NCl3', name: 'Nitrogen trichloride', density: 1.653 },
        ]
    ],
    [
        'NH4BF4', [
            { symbol: 'NH4BF4', name: 'Ammonium tetrafluoroborate', density: 1.871 },
        ]
    ],
    [
        'NH4Br', [
            { symbol: 'NH4Br', name: 'Ammonium bromide', density: 2.429 },
        ]
    ],
    [
        'NH4C18H35O2', [
            { symbol: 'NH4C18H35O2', name: 'Ammonium stearate', density: 0.89 },
        ]
    ],
    [
        'NH4C2H3O2', [
            { symbol: 'NH4C2H3O2', name: 'Ammonium acetate', density: 1.073 },
        ]
    ],
    [
        'NH4C4H5O5', [
            { symbol: 'NH4C4H5O5', name: 'Ammonium hydrogen malate', density: 1.15 },
        ]
    ],
    [
        'NH4C6H2N3O7', [
            { symbol: 'NH4C6H2N3O7', name: 'Ammonium picrate', density: 1.72 },
        ]
    ],
    [
        'NH4C7H5O2', [
            { symbol: 'NH4C7H5O2', name: 'Ammonium benzoate', density: 1.26 },
        ]
    ],
    [
        'NH4CHO2', [
            { symbol: 'NH4CHO2', name: 'Ammonium formate', density: 1.27 },
        ]
    ],
    [
        'NH4CN', [
            { symbol: 'NH4CN', name: 'Ammonium cyanide', density: 1.1 },
        ]
    ],
    [
        'NH4Cl', [
            { symbol: 'NH4Cl', name: 'Ammonium chloride', density: 1.519 },
        ]
    ],
    [
        'NH4ClO3', [
            { symbol: 'NH4ClO3', name: 'Ammonium chlorate', density: 1.8 },
        ]
    ],
    [
        'NH4ClO4', [
            { symbol: 'NH4ClO4', name: 'Ammonium perchlorate', density: 1.95 },
        ]
    ],
    [
        'NH4Cr(SO4)2·12H2O', [
            { symbol: 'NH4Cr(SO4)2·12H2O', name: 'Ammonium chromic sulfate  dodecahydrate', density: 1.72 },
        ]
    ],
    [
        'NH4F', [
            { symbol: 'NH4F', name: 'Ammonium fluoride', density: 1.015 },
        ]
    ],
    [
        'NH4Fe(SO4)2·12H2O', [
            { symbol: 'NH4Fe(SO4)2·12H2O', name: 'Ammonium iron(III) sulfate  dodecahydrate', density: 1.71 },
        ]
    ],
    [
        'NH4H2AsO4', [
            { symbol: 'NH4H2AsO4', name: 'Ammonium dihydrogen arsenate', density: 2.311 },
        ]
    ],
    [
        'NH4H2PO4', [
            { symbol: 'NH4H2PO4', name: 'Ammonium dihydrogen phosphate', density: 1.8 },
        ]
    ],
    [
        'NH4HC2O4·H2O', [
            { symbol: 'NH4HC2O4·H2O', name: 'Ammonium hydrogen oxalate  monohydrate', density: 1.56 },
        ]
    ],
    [
        'NH4HC4H4O6', [
            { symbol: 'NH4HC4H4O6', name: 'Ammonium hydrogen tartrate', density: 1.68 },
        ]
    ],
    [
        'NH4HCO3', [
            { symbol: 'NH4HCO3', name: 'Ammonium hydrogen carbonate', density: 1.586 },
        ]
    ],
    [
        'NH4HF2', [
            { symbol: 'NH4HF2', name: 'Ammonium hydrogen fluoride', density: 1.5 },
        ]
    ],
    [
        'NH4HS', [
            { symbol: 'NH4HS', name: 'Ammonium hydrogen sulfide', density: 1.17 },
        ]
    ],
    [
        'NH4HSO3', [
            { symbol: 'NH4HSO3', name: 'Ammonium hydrogen sulfite', density: 2.03 },
        ]
    ],
    [
        'NH4HSO4', [
            { symbol: 'NH4HSO4', name: 'Ammonium hydrogen sulfate', density: 1.78 },
        ]
    ],
    [
        'NH4HSeO4', [
            { symbol: 'NH4HSeO4', name: 'Ammonium hydrogen selenate', density: 2.162 },
        ]
    ],
    [
        'NH4I', [
            { symbol: 'NH4I', name: 'Ammonium iodide', density: 2.514 },
        ]
    ],
    [
        'NH4IO3', [
            { symbol: 'NH4IO3', name: 'Ammonium iodate', density: 3.3 },
        ]
    ],
    [
        'NH4MgCl3·6H2O', [
            { symbol: 'NH4MgCl3·6H2O', name: 'Ammonium magnesium chloride  hexahydrate', density: 1.46 },
        ]
    ],
    [
        'NH4MnO4', [
            { symbol: 'NH4MnO4', name: 'Ammonium permanganate', density: 2.22 },
        ]
    ],
    [
        'NH4N3', [
            { symbol: 'NH4N3', name: 'Ammonium azide', density: 1.346 },
        ]
    ],
    [
        'NH4NH2CSS', [
            { symbol: 'NH4NH2CSS', name: 'Ammonium dithiocarbamate', density: 1.45 },
        ]
    ],
    [
        'NH4NO2', [
            { symbol: 'NH4NO2', name: 'Ammonium nitrite', density: 1.69 },
        ]
    ],
    [
        'NH4NO3', [
            { symbol: 'NH4NO3', name: 'Ammonium nitrate', density: 1.72 },
        ]
    ],
    [
        'NH4NiCl3·6H2O', [
            { symbol: 'NH4NiCl3·6H2O', name: 'Nickel(II) ammonium chloride hexahydrate', density: 1.65 },
        ]
    ],
    [
        'NH4PF6', [
            { symbol: 'NH4PF6', name: 'Ammonium hexafluorophosphate', density: 2.18 },
        ]
    ],
    [
        'NH4ReO4', [
            { symbol: 'NH4ReO4', name: 'Ammonium perrhenate', density: 3.97 },
        ]
    ],
    [
        'NH4SCN', [
            { symbol: 'NH4SCN', name: 'Ammonium thiocyanate', density: 1.3 },
        ]
    ],
    [
        'NH4VO3', [
            { symbol: 'NH4VO3', name: 'Ammonium metavanadate', density: 2.326 },
        ]
    ],
    [
        'Na', [
            { symbol: 'Na', name: 'Sodium', density: 0.97 },
        ]
    ],
    [
        'Na(Mg,Fe,Mn,Li,Al)3Al6Si6O18(BO3)3', [
            { symbol: 'Na(Mg,Fe,Mn,Li,Al)3Al6Si6O18(BO3)3', name: 'Tourmaline', density: 3.14 },
        ]
    ],
    [
        'Na(NH4)H(PO4)·4H2O', [
            { symbol: 'Na(NH4)H(PO4)·4H2O', name: 'Stercorite', density: 1.62 },
        ]
    ],
    [
        'Na22K(SO4)9(CO3)2Cl', [
            { symbol: 'Na22K(SO4)9(CO3)2Cl', name: 'Hanksite', density: 2.56 },
        ]
    ],
    [
        'Na2Al2Si3O10·2H2O', [
            { symbol: 'Na2Al2Si3O10·2H2O', name: 'Natrolite', density: 2.23 },
        ]
    ],
    [
        'Na2B4O7', [
            { symbol: 'Na2B4O7', name: 'Sodium tetraborate', density: 2.4 },
        ]
    ],
    [
        'Na2B4O7·10H2O', [
            { symbol: 'Na2B4O7·10H2O', name: 'Borax', density: 1.73 },
        ]
    ],
    [
        'Na2B4O7·4H2O', [
            { symbol: 'Na2B4O7·4H2O', name: 'Sodium tetraborate tetrahydrate', density: 1.95 },
        ]
    ],
    [
        'Na2B4O7·5H2O', [
            { symbol: 'Na2B4O7·5H2O', name: 'Sodium tetraborate pentahydrate', density: 1.88 },
        ]
    ],
    [
        'Na2BeF4', [
            { symbol: 'Na2BeF4', name: 'Sodium tetrafluoroberyllate', density: 2.47 },
        ]
    ],
    [
        'Na2C2O4', [
            { symbol: 'Na2C2O4', name: 'Sodium oxalate', density: 2.34 },
        ]
    ],
    [
        'Na2C4H4O6·2H2O', [
            { symbol: 'Na2C4H4O6·2H2O', name: 'Sodium tartrate dihydrate', density: 1.545 },
        ]
    ],
    [
        'Na2CO3', [
            { symbol: 'Na2CO3', name: 'Sodium carbonate', density: 2.54 },
        ]
    ],
    [
        'Na2CO3·10H2O', [
            { symbol: 'Na2CO3·10H2O', name: 'Sodium carbonate decahydrate', density: 1.46 },
        ]
    ],
    [
        'Na2CO3·H2O', [
            { symbol: 'Na2CO3·H2O', name: 'Sodium carbonate monohydrate', density: 2.25 },
        ]
    ],
    [
        'Na2Ca(CO3)2·5H2O', [
            { symbol: 'Na2Ca(CO3)2·5H2O', name: 'Gaylussite', density: 1.99 },
        ]
    ],
    [
        'Na2Ca(SO4)2', [
            { symbol: 'Na2Ca(SO4)2', name: 'Glauberite', density: 2.8 },
        ]
    ],
    [
        'Na2Ca2(Al2Si3O10)3·8H2O', [
            { symbol: 'Na2Ca2(Al2Si3O10)3·8H2O', name: 'Mesolite', density: 2.26 },
        ]
    ],
    [
        'Na2Cr2O7·2H2O', [
            { symbol: 'Na2Cr2O7·2H2O', name: 'Sodium dichromate dihydrate', density: 2.35 },
        ]
    ],
    [
        'Na2CrO4', [
            { symbol: 'Na2CrO4', name: 'Sodium chromate', density: 2.72 },
        ]
    ],
    [
        'Na2Fe5FSi8O22(OH)2', [
            { symbol: 'Na2Fe5FSi8O22(OH)2', name: 'Riebeckite', density: 3.3 },
        ]
    ],
    [
        'Na2GeO3', [
            { symbol: 'Na2GeO3', name: 'Sodiumgermanate', density: 3.31 },
        ]
    ],
    [
        'Na2H2P2O6·6H2O', [
            { symbol: 'Na2H2P2O6·6H2O', name: 'Sodium dihydrogen hypophosphate hexahydrate', density: 1.849 },
        ]
    ],
    [
        'Na2H2P2O7', [
            { symbol: 'Na2H2P2O7', name: 'Sodium dihydrogen pyrophosphate', density: 1.9 },
        ]
    ],
    [
        'Na2HAsO4·7H2O', [
            { symbol: 'Na2HAsO4·7H2O', name: 'Sodium hydrogen arsenate heptahydrate', density: 1.87 },
        ]
    ],
    [
        'Na2HPO4', [
            { symbol: 'Na2HPO4', name: 'Sodium hydrogen phosphate', density: 1.7 },
        ]
    ],
    [
        'Na2HPO4·12H2O', [
            { symbol: 'Na2HPO4·12H2O', name: 'Sodium hydrogen phosphate dodecahydrate', density: 1.5 },
        ]
    ],
    [
        'Na2HPO4·7H2O', [
            { symbol: 'Na2HPO4·7H2O', name: 'Sodium hydrogen phosphate heptahydrate', density: 1.7 },
        ]
    ],
    [
        'Na2Mg(SO4)2·4H2O', [
            { symbol: 'Na2Mg(SO4)2·4H2O', name: 'Bloedite', density: 2.25 },
        ]
    ],
    [
        'Na2Mg3Al2[Si8O22](OH)2', [
            { symbol: 'Na2Mg3Al2[Si8O22](OH)2', name: 'Glaucophane', density: 3.19 },
        ]
    ],
    [
        'Na2MoO4', [
            { symbol: 'Na2MoO4', name: 'Sodium molybdate', density: 3.5 },
        ]
    ],
    [
        'Na2MoO4·2H2O', [
            { symbol: 'Na2MoO4·2H2O', name: 'Sodium molybdate dihydrate', density: 3.5 },
        ]
    ],
    [
        'Na2O', [
            { symbol: 'Na2O', name: 'Sodium oxide', density: 2.27 },
        ]
    ],
    [
        'Na2O2', [
            { symbol: 'Na2O2', name: 'Sodium peroxide', density: 2.805 },
        ]
    ],
    [
        'Na2PtCl6·6H2O', [
            { symbol: 'Na2PtCl6·6H2O', name: 'Sodium hexachloroplatinate(IV) hexahydrate', density: 2.5 },
        ]
    ],
    [
        'Na2S', [
            { symbol: 'Na2S', name: 'Sodium sulfide', density: 1.856 },
        ]
    ],
    [
        'Na2S2O3', [
            { symbol: 'Na2S2O3', name: 'Sodium thiosulfate', density: 1.69 },
        ]
    ],
    [
        'Na2S2O3·5H2O', [
            { symbol: 'Na2S2O3·5H2O', name: 'Sodium thiosulfate pentahydrate', density: 1.69 },
        ]
    ],
    [
        'Na2S2O6·2H2O', [
            { symbol: 'Na2S2O6·2H2O', name: 'Sodium dithionate dihydrate', density: 2.19 },
        ]
    ],
    [
        'Na2SO3', [
            { symbol: 'Na2SO3', name: 'Sodium sulfite', density: 2.63 },
        ]
    ],
    [
        'Na2SO3·7H2O', [
            { symbol: 'Na2SO3·7H2O', name: 'Sodium sulfite heptahydrate', density: 1.56 },
        ]
    ],
    [
        'Na2SO4', [
            { symbol: 'Na2SO4', name: 'Sodium sulfate', density: 2.7 },
        ]
    ],
    [
        'Na2SO4·10H2O', [
            { symbol: 'Na2SO4·10H2O', name: 'Sodium sulfate decahydrate', density: 1.46 },
        ]
    ],
    [
        'Na2Se', [
            { symbol: 'Na2Se', name: 'Sodium selenide', density: 2.62 },
        ]
    ],
    [
        'Na2SeO4·10H2O', [
            { symbol: 'Na2SeO4·10H2O', name: 'Sodium selenate decahydrate', density: 1.61 },
        ]
    ],
    [
        'Na2SiF6', [
            { symbol: 'Na2SiF6', name: 'Sodium hexafluorosilicate', density: 2.7 },
        ]
    ],
    [
        'Na2SiO3', [
            { symbol: 'Na2SiO3', name: 'Sodium metasilicate', density: 2.61 },
        ]
    ],
    [
        'Na2S·5H2O', [
            { symbol: 'Na2S·5H2O', name: 'Sodium sulfide pentahydrate', density: 1.58 },
        ]
    ],
    [
        'Na2S·9H2O', [
            { symbol: 'Na2S·9H2O', name: 'Sodium sulfide nonahydrate', density: 1.43 },
        ]
    ],
    [
        'Na2WO4', [
            { symbol: 'Na2WO4', name: 'Sodium tungstate', density: 4.18 },
        ]
    ],
    [
        'Na2WO4·2H2O', [
            { symbol: 'Na2WO4·2H2O', name: 'Sodium tungstate dihydrate', density: 3.25 },
        ]
    ],
    [
        'Na2[Fe(CN)5NO]·2H2O', [
            { symbol: 'Na2[Fe(CN)5NO]·2H2O', name: 'Sodium nitroferricyanide dihydrate', density: 1.72 },
        ]
    ],
    [
        'Na3(PO3)3', [
            { symbol: 'Na3(PO3)3', name: 'Sodium trimetaphosphate', density: 2.49 },
        ]
    ],
    [
        'Na3(PO3)3·6H2O', [
            { symbol: 'Na3(PO3)3·6H2O', name: 'Sodium trimetaphosphate hexahydrate', density: 1.786 },
        ]
    ],
    [
        'Na3AlF6', [
            { symbol: 'Na3AlF6', name: 'Cryolite', density: 2.97 },
        ]
    ],
    [
        'Na3Au(S2O3)2·2H2O', [
            { symbol: 'Na3Au(S2O3)2·2H2O', name: 'Sodium gold thiosulfate dihydrate', density: 3.09 },
        ]
    ],
    [
        'Na3C6H5O7·5H2O', [
            { symbol: 'Na3C6H5O7·5H2O', name: 'Sodium citrate pentahydrate', density: 1.86 },
        ]
    ],
    [
        'Na3H(CO3)2·2H2O', [
            { symbol: 'Na3H(CO3)2·2H2O', name: 'Trona', density: 2.14 },
        ]
    ],
    [
        'Na3KAl4Si4O16', [
            { symbol: 'Na3KAl4Si4O16', name: 'Nepheline', density: 2.61 },
        ]
    ],
    [
        'Na3Li3Al2F12', [
            { symbol: 'Na3Li3Al2F12', name: 'Cryolithionite', density: 2.77 },
        ]
    ],
    [
        'Na3PO4', [
            { symbol: 'Na3PO4', name: 'Sodium phosphate', density: 2.54 },
        ]
    ],
    [
        'Na3PO4·12H2O', [
            { symbol: 'Na3PO4·12H2O', name: 'Sodium phosphate dodecahydrate', density: 1.62 },
        ]
    ],
    [
        'Na3PO4·12MoO3', [
            { symbol: 'Na3PO4·12MoO3', name: 'Sodium molybdophosphate', density: 2.83 },
        ]
    ],
    [
        'Na3SbS4·9H2O', [
            { symbol: 'Na3SbS4·9H2O', name: 'Sodium thioantimonate nonahydrate', density: 1.8 },
        ]
    ],
    [
        'Na4Al3Si9O24Cl', [
            { symbol: 'Na4Al3Si9O24Cl', name: 'Marialite', density: 2.56 },
        ]
    ],
    [
        'Na4Fe(CN)6·10H2O', [
            { symbol: 'Na4Fe(CN)6·10H2O', name: 'Sodium ferrocyanide decahydrate', density: 1.46 },
        ]
    ],
    [
        'Na4P2O7', [
            { symbol: 'Na4P2O7', name: 'Sodium pyrophosphate', density: 2.53 },
        ]
    ],
    [
        'Na4SSi3Al3O12', [
            { symbol: 'Na4SSi3Al3O12', name: 'Lazurite', density: 2.42 },
        ]
    ],
    [
        'Na5Al3F14', [
            { symbol: 'Na5Al3F14', name: 'Chiolite', density: 3.0 },
        ]
    ],
    [
        'Na8Al6Si6O24Cl2', [
            { symbol: 'Na8Al6Si6O24Cl2', name: 'Sodalite', density: 2.3 },
        ]
    ],
    [
        'Na8Al6Si6O24SO4', [
            { symbol: 'Na8Al6Si6O24SO4', name: 'Nosean', density: 2.35 },
        ]
    ],
    [
        'NaAl(SO4)2·12H2O', [
            { symbol: 'NaAl(SO4)2·12H2O', name: 'Sodium aluminum sulfate dodecahydrate', density: 1.61 },
        ]
    ],
    [
        'NaAl(SiO3)2', [
            { symbol: 'NaAl(SiO3)2', name: 'Jadeite', density: 3.34 },
        ]
    ],
    [
        'NaAl(SiO3)2·H2O', [
            { symbol: 'NaAl(SiO3)2·H2O', name: 'Analcite', density: 2.27 },
        ]
    ],
    [
        'NaAl2AlSi3O10(OH)2', [
            { symbol: 'NaAl2AlSi3O10(OH)2', name: 'Paragonite', density: 2.85 },
        ]
    ],
    [
        'NaAlCl4', [
            { symbol: 'NaAlCl4', name: 'Sodium tetrachloroaluminate', density: 2.01 },
        ]
    ],
    [
        'NaAlH4', [
            { symbol: 'NaAlH4', name: 'Sodium aluminum hydride', density: 1.24 },
        ]
    ],
    [
        'NaAlO2', [
            { symbol: 'NaAlO2', name: 'Sodium aluminate', density: 4.63 },
        ]
    ],
    [
        'NaAlSi3O8', [
            { symbol: 'NaAlSi3O8', name: 'Albite', density: 2.63 },
        ]
    ],
    [
        'NaAlSi3O8·CaAl2Si2O8', [
            { symbol: 'NaAlSi3O8·CaAl2Si2O8', name: 'Andesine', density: 2.67 },
        ]
    ],
    [
        'NaAsO2', [
            { symbol: 'NaAsO2', name: 'Sodium arsenite', density: 1.87 },
        ]
    ],
    [
        'NaBF4', [
            { symbol: 'NaBF4', name: 'Sodium tetrafluoroborate', density: 2.47 },
        ]
    ],
    [
        'NaBH3(CN)', [
            { symbol: 'NaBH3(CN)', name: 'Sodiumcyanoborohydride', density: 1.12 },
        ]
    ],
    [
        'NaBH4', [
            { symbol: 'NaBH4', name: 'Sodium borohydride', density: 1.07 },
        ]
    ],
    [
        'NaBO2', [
            { symbol: 'NaBO2', name: 'Sodium metaborate', density: 2.46 },
        ]
    ],
    [
        'NaBe(PO)4', [
            { symbol: 'NaBe(PO)4', name: 'Beryllonite', density: 2.81 },
        ]
    ],
    [
        'NaBr', [
            { symbol: 'NaBr', name: 'Sodium bromide', density: 3.2 },
        ]
    ],
    [
        'NaBrO3', [
            { symbol: 'NaBrO3', name: 'Sodium bromate', density: 3.34 },
        ]
    ],
    [
        'NaBr·2H2O', [
            { symbol: 'NaBr·2H2O', name: 'Sodium bromide dihydrate', density: 2.18 },
        ]
    ],
    [
        'NaC2H3O2', [
            { symbol: 'NaC2H3O2', name: 'Sodium acetate', density: 1.528 },
        ]
    ],
    [
        'NaC2H3O2·3H2O', [
            { symbol: 'NaC2H3O2·3H2O', name: 'Sodium acetate trihydrate', density: 1.45 },
        ]
    ],
    [
        'NaCHO2', [
            { symbol: 'NaCHO2', name: 'Sodiumformate', density: 1.92 },
        ]
    ],
    [
        'NaCN', [
            { symbol: 'NaCN', name: 'Sodiumcyanide', density: 1.6 },
        ]
    ],
    [
        'NaCNO', [
            { symbol: 'NaCNO', name: 'Sodium cyanate', density: 1.89 },
        ]
    ],
    [
        'NaCa2[Al5Si13O36]·14H2O', [
            { symbol: 'NaCa2[Al5Si13O36]·14H2O', name: 'Stilbite', density: 2.2 },
        ]
    ],
    [
        'NaCaAlF6·H2O', [
            { symbol: 'NaCaAlF6·H2O', name: 'Thomsenolite', density: 2.98 },
        ]
    ],
    [
        'NaCaNb2O6F', [
            { symbol: 'NaCaNb2O6F', name: 'Pyrochlore', density: 5.3 },
        ]
    ],
    [
        'NaCl', [
            { symbol: 'NaCl', name: 'Halite', density: 2.17 },
        ]
    ],
    [
        'NaClO3', [
            { symbol: 'NaClO3', name: 'Sodium chlorate', density: 2.5 },
        ]
    ],
    [
        'NaClO4', [
            { symbol: 'NaClO4', name: 'Sodium perchlorate', density: 2.52 },
        ]
    ],
    [
        'NaClO4·H2O', [
            { symbol: 'NaClO4·H2O', name: 'Sodium perchlorate monohydrate', density: 2.02 },
        ]
    ],
    [
        'NaF', [
            { symbol: 'NaF', name: 'Villiaumite', density: 2.78 },
        ]
    ],
    [
        'NaFe(SiO3)2', [
            { symbol: 'NaFe(SiO3)2', name: 'Aegirine', density: 3.58 },
        ]
    ],
    [
        'NaH', [
            { symbol: 'NaH', name: 'Sodium hydride', density: 1.39 },
        ]
    ],
    [
        'NaH2PO4·2H2O', [
            { symbol: 'NaH2PO4·2H2O', name: 'Sodium dihydrogen phosphate dihydrate', density: 1.91 },
        ]
    ],
    [
        'NaHCO3', [
            { symbol: 'NaHCO3', name: 'Sodium hydrogen carbonate', density: 2.2 },
        ]
    ],
    [
        'NaHF2', [
            { symbol: 'NaHF2', name: 'Sodium hydrogen fluoride', density: 2.08 },
        ]
    ],
    [
        'NaHS', [
            { symbol: 'NaHS', name: 'Sodium hydrogen sulfide', density: 1.79 },
        ]
    ],
    [
        'NaHSO3', [
            { symbol: 'NaHSO3', name: 'Sodium hydrogen sulfite', density: 1.48 },
        ]
    ],
    [
        'NaHSO4', [
            { symbol: 'NaHSO4', name: 'Sodium hydrogen sulfate', density: 2.43 },
        ]
    ],
    [
        'NaHSO4·H2O', [
            { symbol: 'NaHSO4·H2O', name: 'Sodium hydrogen sulfate monohydrate', density: 2.1 },
        ]
    ],
    [
        'NaI', [
            { symbol: 'NaI', name: 'Sodium iodide', density: 3.67 },
        ]
    ],
    [
        'NaIO3', [
            { symbol: 'NaIO3', name: 'Sodium iodate', density: 4.28 },
        ]
    ],
    [
        'NaIO4', [
            { symbol: 'NaIO4', name: 'Sodium periodate', density: 3.86 },
        ]
    ],
    [
        'NaIO4·3H2O', [
            { symbol: 'NaIO4·3H2O', name: 'Sodium periodate trihydrate', density: 3.22 },
        ]
    ],
    [
        'NaI·2H2O', [
            { symbol: 'NaI·2H2O', name: 'Sodium iodide dihydrate', density: 2.45 },
        ]
    ],
    [
        'NaMnO4·3H2O', [
            { symbol: 'NaMnO4·3H2O', name: 'Sodium permanganate trihydrate', density: 2.47 },
        ]
    ],
    [
        'NaN3', [
            { symbol: 'NaN3', name: 'Sodiumazide', density: 1.846 },
        ]
    ],
    [
        'NaNH2', [
            { symbol: 'NaNH2', name: 'Sodium amide', density: 1.39 },
        ]
    ],
    [
        'NaNH4HPO4·4H2O', [
            { symbol: 'NaNH4HPO4·4H2O', name: 'Sodium ammonium phosphate tetrahydrate', density: 1.54 },
        ]
    ],
    [
        'NaNO2', [
            { symbol: 'NaNO2', name: 'Sodium nitrite', density: 2.17 },
        ]
    ],
    [
        'NaNO3', [
            { symbol: 'NaNO3', name: 'Sodium nitrate', density: 2.261 },
        ]
    ],
    [
        'NaNbO3', [
            { symbol: 'NaNbO3', name: 'Sodium niobate', density: 4.55 },
        ]
    ],
    [
        'NaO2', [
            { symbol: 'NaO2', name: 'Sodium superoxide', density: 2.2 },
        ]
    ],
    [
        'NaOCl·5H2O', [
            { symbol: 'NaOCl·5H2O', name: 'Sodium hypochlorite pentahydrate', density: 1.6 },
        ]
    ],
    [
        'NaOH', [
            { symbol: 'NaOH', name: 'Sodium hydroxide', density: 2.13 },
        ]
    ],
    [
        'NaPF6·H2O', [
            { symbol: 'NaPF6·H2O', name: 'Sodium hexafluorophosphate monohydrate', density: 2.369 },
        ]
    ],
    [
        'NaReO4', [
            { symbol: 'NaReO4', name: 'Sodium perrhenate', density: 5.39 },
        ]
    ],
    [
        'NaSbF6', [
            { symbol: 'NaSbF6', name: 'Sodium hexafluoroantimonate', density: 3.375 },
        ]
    ],
    [
        'Nb', [
            { symbol: 'Nb', name: 'Niobium', density: 8.57 },
        ]
    ],
    [
        'Nb(OC2H5)5', [
            { symbol: 'Nb(OC2H5)5', name: 'Niobium(V) ethoxide', density: 1.258 },
        ]
    ],
    [
        'Nb2C', [
            { symbol: 'Nb2C', name: 'Niobium carbide (Nb2C)', density: 7.8 },
        ]
    ],
    [
        'Nb2O5', [
            { symbol: 'Nb2O5', name: 'Niobium(V) oxide', density: 4.47 },
        ]
    ],
    [
        'NbB', [
            { symbol: 'NbB', name: 'Niobium boride (NbB)', density: 7.5 },
        ]
    ],
    [
        'NbB2', [
            { symbol: 'NbB2', name: 'Niobium boride [NbB2]', density: 6.97 },
        ]
    ],
    [
        'NbBr4', [
            { symbol: 'NbBr4', name: 'Niobium(IV) bromide', density: 4.72 },
        ]
    ],
    [
        'NbBr5', [
            { symbol: 'NbBr5', name: 'Niobium(V) bromide', density: 4.36 },
        ]
    ],
    [
        'NbC', [
            { symbol: 'NbC', name: 'Niobium carbide (NbC)', density: 7.82 },
        ]
    ],
    [
        'NbCl4', [
            { symbol: 'NbCl4', name: 'Niobium(IV) chloride', density: 3.2 },
        ]
    ],
    [
        'NbCl5', [
            { symbol: 'NbCl5', name: 'Niobium(V) chloride', density: 2.78 },
        ]
    ],
    [
        'NbF3', [
            { symbol: 'NbF3', name: 'Niobium(III) fluoride', density: 4.2 },
        ]
    ],
    [
        'NbF4', [
            { symbol: 'NbF4', name: 'Niobium(IV) fluoride', density: 4.01 },
        ]
    ],
    [
        'NbF5', [
            { symbol: 'NbF5', name: 'Niobium(V) fluoride', density: 2.7 },
        ]
    ],
    [
        'NbI4', [
            { symbol: 'NbI4', name: 'Niobium(IV) iodide', density: 5.6 },
        ]
    ],
    [
        'NbI5', [
            { symbol: 'NbI5', name: 'Niobium(V) iodide', density: 5.32 },
        ]
    ],
    [
        'NbN', [
            { symbol: 'NbN', name: 'Niobium nitride', density: 8.47 },
        ]
    ],
    [
        'NbO', [
            { symbol: 'NbO', name: 'Niobium(II) oxide', density: 7.3 },
        ]
    ],
    [
        'NbO2', [
            { symbol: 'NbO2', name: 'Niobium(IV) oxide', density: 5.9 },
        ]
    ],
    [
        'NbO2F', [
            { symbol: 'NbO2F', name: 'Niobium(V) dioxyfluoride', density: 4.0 },
        ]
    ],
    [
        'NbOCl3', [
            { symbol: 'NbOCl3', name: 'Niobium(V) oxychloride', density: 3.72 },
        ]
    ],
    [
        'NbP', [
            { symbol: 'NbP', name: 'Niobium phosphide', density: 6.5 },
        ]
    ],
    [
        'NbS2', [
            { symbol: 'NbS2', name: 'Niobium(IV) sulfide', density: 4.4 },
        ]
    ],
    [
        'NbSe2', [
            { symbol: 'NbSe2', name: 'Niobium(IV) selenide', density: 6.3 },
        ]
    ],
    [
        'NbSi2', [
            { symbol: 'NbSi2', name: 'Niobium silicide', density: 5.7 },
        ]
    ],
    [
        'NbTe2', [
            { symbol: 'NbTe2', name: 'Niobium(IV) telluride', density: 7.6 },
        ]
    ],
    [
        'Nd', [
            { symbol: 'Nd', name: 'Neodymium', density: 7.01 },
        ]
    ],
    [
        'Nd2(SO4)3·8H2O', [
            { symbol: 'Nd2(SO4)3·8H2O', name: 'Neodymium(III) sulfate octahydrate', density: 2.85 },
        ]
    ],
    [
        'Nd2O3', [
            { symbol: 'Nd2O3', name: 'Neodymium(III) oxide', density: 7.24 },
        ]
    ],
    [
        'Nd2S3', [
            { symbol: 'Nd2S3', name: 'Neodymium(III) sulfide', density: 5.46 },
        ]
    ],
    [
        'Nd2Te3', [
            { symbol: 'Nd2Te3', name: 'Neodymium(III) telluride', density: 7.0 },
        ]
    ],
    [
        'NdB6', [
            { symbol: 'NdB6', name: 'Neodymium boride', density: 4.93 },
        ]
    ],
    [
        'NdBr3', [
            { symbol: 'NdBr3', name: 'Neodymium(III) bromide', density: 5.3 },
        ]
    ],
    [
        'NdCl3', [
            { symbol: 'NdCl3', name: 'Neodymium(III) chloride', density: 4.13 },
        ]
    ],
    [
        'NdCl3·6H2O', [
            { symbol: 'NdCl3·6H2O', name: 'Neodymium(III) chloride hexahydrate', density: 2.3 },
        ]
    ],
    [
        'NdF3', [
            { symbol: 'NdF3', name: 'Neodymium(III) fluoride', density: 6.51 },
        ]
    ],
    [
        'NdI3', [
            { symbol: 'NdI3', name: 'Neodymium(III) iodide', density: 5.85 },
        ]
    ],
    [
        'NdN', [
            { symbol: 'NdN', name: 'Neodymium nitride', density: 7.69 },
        ]
    ],
    [
        'Ni', [
            { symbol: 'Ni', name: 'Nickel', density: 8.9 },
        ]
    ],
    [
        'Ni(C2H3O2)2·4H2O', [
            { symbol: 'Ni(C2H3O2)2·4H2O', name: 'Nickel(II) acetate tetrahydrate', density: 1.74 },
        ]
    ],
    [
        'Ni(CO)4', [
            { symbol: 'Ni(CO)4', name: 'Nickel carbonyl [Ni(CO)4]', density: 1.31 },
        ]
    ],
    [
        'Ni(ClO3)2·6H2O', [
            { symbol: 'Ni(ClO3)2·6H2O', name: 'Nickel(II) chlorate hexahydrate', density: 2.07 },
        ]
    ],
    [
        'Ni(IO3)2', [
            { symbol: 'Ni(IO3)2', name: 'Nickel(II) iodate', density: 5.07 },
        ]
    ],
    [
        'Ni(IO3)2·4H2O', [
            { symbol: 'Ni(IO3)2·4H2O', name: 'Nickel(II) iodate tetrahydrate', density: 5.07 },
        ]
    ],
    [
        'Ni(NH4)2(SO4)2·6H2O', [
            { symbol: 'Ni(NH4)2(SO4)2·6H2O', name: 'Nickel(II) ammonium sulfate hexahydrate', density: 1.92 },
        ]
    ],
    [
        'Ni(NO3)2·6H2O', [
            { symbol: 'Ni(NO3)2·6H2O', name: 'Nickel(II) nitrate hexahydrate', density: 2.05 },
        ]
    ],
    [
        'Ni(OH)2', [
            { symbol: 'Ni(OH)2', name: 'Nickel(II) hydroxide', density: 4.1 },
        ]
    ],
    [
        'Ni2B', [
            { symbol: 'Ni2B', name: 'Nickel boride (Ni2B)', density: 7.9 },
        ]
    ],
    [
        'Ni2P', [
            { symbol: 'Ni2P', name: 'Nickel phosphide', density: 7.33 },
        ]
    ],
    [
        'Ni2Si', [
            { symbol: 'Ni2Si', name: 'Nickel silicide (Ni2Si)', density: 7.4 },
        ]
    ],
    [
        'Ni3(AsO4)2·8H2O', [
            { symbol: 'Ni3(AsO4)2·8H2O', name: 'Nickel(II) arsenate octahydrate', density: 4.98 },
        ]
    ],
    [
        'Ni3B', [
            { symbol: 'Ni3B', name: 'Nickel boride (Ni3B)', density: 8.17 },
        ]
    ],
    [
        'Ni3S2', [
            { symbol: 'Ni3S2', name: 'Nickel subsulfide', density: 5.87 },
        ]
    ],
    [
        'Ni3S4', [
            { symbol: 'Ni3S4', name: 'Nickel(II,III) sulfide', density: 4.77 },
        ]
    ],
    [
        'NiAs', [
            { symbol: 'NiAs', name: 'Nickel arsenide', density: 7.77 },
        ]
    ],
    [
        'NiAs2', [
            { symbol: 'NiAs2', name: 'Rammelsbergite', density: 7.1 },
        ]
    ],
    [
        'NiB', [
            { symbol: 'NiB', name: 'Nickel boride (NiB)', density: 7.13 },
        ]
    ],
    [
        'NiBr2', [
            { symbol: 'NiBr2', name: 'Nickel(II) bromide', density: 5.1 },
        ]
    ],
    [
        'NiCO3', [
            { symbol: 'NiCO3', name: 'Nickel(II) carbonate', density: 4.389 },
        ]
    ],
    [
        'NiCl2', [
            { symbol: 'NiCl2', name: 'Nickel(II) chloride', density: 3.51 },
        ]
    ],
    [
        'NiF2', [
            { symbol: 'NiF2', name: 'Nickel(II) fluoride', density: 4.7 },
        ]
    ],
    [
        'NiFe2O4', [
            { symbol: 'NiFe2O4', name: 'Trevorite', density: 5.33 },
        ]
    ],
    [
        'NiI2', [
            { symbol: 'NiI2', name: 'Nickel(II) iodide', density: 5.22 },
        ]
    ],
    [
        'NiO', [
            { symbol: 'NiO', name: 'Bunsenite', density: 6.72 },
        ]
    ],
    [
        'NiS', [
            { symbol: 'NiS', name: 'Millerite', density: 5.5 },
        ]
    ],
    [
        'NiSO4', [
            { symbol: 'NiSO4', name: 'Nickel(II) sulfate', density: 4.01 },
        ]
    ],
    [
        'NiSO4·6H2O', [
            { symbol: 'NiSO4·6H2O', name: 'Nickel(II) sulfate hexahydrate', density: 2.07 },
        ]
    ],
    [
        'NiSO4·7H2O', [
            { symbol: 'NiSO4·7H2O', name: 'Nickel(II) sulfate heptahydrate', density: 1.98 },
        ]
    ],
    [
        'NiSb', [
            { symbol: 'NiSb', name: 'Breithauptite', density: 8.7 },
        ]
    ],
    [
        'NiSbS', [
            { symbol: 'NiSbS', name: 'Ullmannite', density: 6.65 },
        ]
    ],
    [
        'NiSe', [
            { symbol: 'NiSe', name: 'Nickel(II) selenide', density: 7.2 },
        ]
    ],
    [
        'NiSeO4·6H2O', [
            { symbol: 'NiSeO4·6H2O', name: 'Nickel(II) selenate hexahydrate', density: 2.314 },
        ]
    ],
    [
        'NiSi2', [
            { symbol: 'NiSi2', name: 'Nickel silicide [NiSi2]', density: 4.83 },
        ]
    ],
    [
        'NiTiO3', [
            { symbol: 'NiTiO3', name: 'Nickel(II) titanate', density: 5.0 },
        ]
    ],
    [
        'Np', [
            { symbol: 'Np', name: 'Neptunium', density: 20.2 },
        ]
    ],
    [
        'NpO2', [
            { symbol: 'NpO2', name: 'Neptunium(IV) oxide', density: 11.1 },
        ]
    ],
    [
        'Os', [
            { symbol: 'Os', name: 'Osmium', density: 22.587 },
        ]
    ],
    [
        'Os3(CO)12', [
            { symbol: 'Os3(CO)12', name: 'Osmium carbonyl', density: 3.48 },
        ]
    ],
    [
        'OsCl4', [
            { symbol: 'OsCl4', name: 'Osmium(IV) chloride', density: 4.38 },
        ]
    ],
    [
        'OsF6', [
            { symbol: 'OsF6', name: 'Osmium(VI) fluoride', density: 4.1 },
        ]
    ],
    [
        'OsO2', [
            { symbol: 'OsO2', name: 'Osmium(IV) oxide', density: 11.4 },
        ]
    ],
    [
        'OsO4', [
            { symbol: 'OsO4', name: 'Osmium(VIII) oxide', density: 5.1 },
        ]
    ],
    [
        'P', [
            { symbol: 'P', name: 'Phosphorus (white)', density: 1.823 },
            { symbol: 'P', name: 'Phosphorus (red)', density: 2.16 },
            { symbol: 'P', name: 'Phosphorus (black)', density: 2.69 },
        ]
    ],
    [
        'P2I4', [
            { symbol: 'P2I4', name: 'Diphosphorus tetraiodide', density: 3.89 },
        ]
    ],
    [
        'P2O3', [
            { symbol: 'P2O3', name: 'Phosphorus(III) oxide', density: 2.13 },
        ]
    ],
    [
        'P2O5', [
            { symbol: 'P2O5', name: 'Phosphorus(V) oxide', density: 2.3 },
        ]
    ],
    [
        'P2S5', [
            { symbol: 'P2S5', name: 'Phosphorus(V) sulfide', density: 2.03 },
        ]
    ],
    [
        'P2Se3', [
            { symbol: 'P2Se3', name: 'Phosphorus(III) selenide', density: 1.31 },
        ]
    ],
    [
        'P4S3', [
            { symbol: 'P4S3', name: 'Phosphorus sesquisulfide', density: 2.03 },
        ]
    ],
    [
        'P4S7', [
            { symbol: 'P4S7', name: 'Phosphorus heptasulfide', density: 2.19 },
        ]
    ],
    [
        'PBr3', [
            { symbol: 'PBr3', name: 'Phosphorus(III) bromide', density: 2.8 },
        ]
    ],
    [
        'PBr5', [
            { symbol: 'PBr5', name: 'Phosphorus(V) bromide', density: 3.61 },
        ]
    ],
    [
        'PCl3', [
            { symbol: 'PCl3', name: 'Phosphorus(III) chloride', density: 1.574 },
        ]
    ],
    [
        'PCl5', [
            { symbol: 'PCl5', name: 'Phosphorus(V) chloride', density: 2.1 },
        ]
    ],
    [
        'PH4I', [
            { symbol: 'PH4I', name: 'Phosphonium iodide', density: 2.86 },
        ]
    ],
    [
        'PI3', [
            { symbol: 'PI3', name: 'Phosphorus(III) iodide', density: 4.18 },
        ]
    ],
    [
        'POBr3', [
            { symbol: 'POBr3', name: 'Phosphoryl bromide', density: 2.822 },
        ]
    ],
    [
        'POBrCl2', [
            { symbol: 'POBrCl2', name: 'Phosphoryl bromide dichloride', density: 2.104 },
        ]
    ],
    [
        'POCl3', [
            { symbol: 'POCl3', name: 'Phosphoryl chloride', density: 1.645 },
        ]
    ],
    [
        'PSBr3', [
            { symbol: 'PSBr3', name: 'Phosphorothioc tribromide', density: 2.85 },
        ]
    ],
    [
        'PSCl3', [
            { symbol: 'PSCl3', name: 'Phosphorothioc trichloride', density: 1.635 },
        ]
    ],
    [
        'Pa', [
            { symbol: 'Pa', name: 'Protactinium', density: 15.4 },
        ]
    ],
    [
        'PaCl5', [
            { symbol: 'PaCl5', name: 'Protactinium(V) chloride', density: 3.74 },
        ]
    ],
    [
        'Pb', [
            { symbol: 'Pb', name: 'Lead', density: 11.3 },
        ]
    ],
    [
        'Pb(AsO2)2', [
            { symbol: 'Pb(AsO2)2', name: 'Lead(II) arsenite', density: 5.85 },
        ]
    ],
    [
        'Pb(BO2)2·H2O', [
            { symbol: 'Pb(BO2)2·H2O', name: 'Lead(II) borate monohydrate', density: 5.6 },
        ]
    ],
    [
        'Pb(BrO3)2·H2O', [
            { symbol: 'Pb(BrO3)2·H2O', name: 'Lead(II) bromate monohydrate', density: 5.53 },
        ]
    ],
    [
        'Pb(C18H35O2)2', [
            { symbol: 'Pb(C18H35O2)2', name: 'Lead(II) stearate', density: 1.4 },
        ]
    ],
    [
        'Pb(C2H3O2)2', [
            { symbol: 'Pb(C2H3O2)2', name: 'Lead(II) acetate', density: 3.25 },
        ]
    ],
    [
        'Pb(C2H3O2)2·3H2O', [
            { symbol: 'Pb(C2H3O2)2·3H2O', name: 'Lead(II) acetate trihydrate', density: 2.55 },
        ]
    ],
    [
        'Pb(C2H3O2)4', [
            { symbol: 'Pb(C2H3O2)4', name: 'Lead(IV) acetate', density: 2.23 },
        ]
    ],
    [
        'Pb(C7H15CO2)2', [
            { symbol: 'Pb(C7H15CO2)2', name: 'Lead(II) 2-ethylhexanoate', density: 1.56 },
        ]
    ],
    [
        'Pb(CHO2)2', [
            { symbol: 'Pb(CHO2)2', name: 'Lead(II) formate', density: 4.63 },
        ]
    ],
    [
        'Pb(ClO3)2', [
            { symbol: 'Pb(ClO3)2', name: 'Lead(II) chlorate', density: 3.9 },
        ]
    ],
    [
        'Pb(ClO4)2·3H2O', [
            { symbol: 'Pb(ClO4)2·3H2O', name: 'Lead(II) perchlorate trihydrate', density: 2.6 },
        ]
    ],
    [
        'Pb(IO3)2', [
            { symbol: 'Pb(IO3)2', name: 'Lead(II) iodate', density: 6.5 },
        ]
    ],
    [
        'Pb(N3)2', [
            { symbol: 'Pb(N3)2', name: 'Lead(II) azide', density: 4.7 },
        ]
    ],
    [
        'Pb(NO3)2', [
            { symbol: 'Pb(NO3)2', name: 'Lead(II) nitrate', density: 4.53 },
        ]
    ],
    [
        'Pb(NbO3)2', [
            { symbol: 'Pb(NbO3)2', name: 'Lead(II) niobate', density: 6.6 },
        ]
    ],
    [
        'Pb(OH)2', [
            { symbol: 'Pb(OH)2', name: 'Lead(II) hydroxide', density: 5.69 },
        ]
    ],
    [
        'Pb(OH)2·2PbCO3', [
            { symbol: 'Pb(OH)2·2PbCO3', name: 'Lead(II) carbonate, basic', density: 6.5 },
        ]
    ],
    [
        'Pb(OH)Cl', [
            { symbol: 'Pb(OH)Cl', name: 'Laurionite', density: 6.24 },
        ]
    ],
    [
        'Pb(SCN)2', [
            { symbol: 'Pb(SCN)2', name: 'Lead(II) thiocyanate', density: 3.82 },
        ]
    ],
    [
        'Pb(TaO3)2', [
            { symbol: 'Pb(TaO3)2', name: 'Lead(II) tantalate', density: 7.9 },
        ]
    ],
    [
        'Pb2(CO3)Cl2', [
            { symbol: 'Pb2(CO3)Cl2', name: 'Phosgenite', density: 6.13 },
        ]
    ],
    [
        'Pb2(SO4)O', [
            { symbol: 'Pb2(SO4)O', name: 'Lanarkite', density: 6.92 },
        ]
    ],
    [
        'Pb2O3', [
            { symbol: 'Pb2O3', name: 'Lead(II,IV) oxide', density: 10.05 },
        ]
    ],
    [
        'Pb2SiO4', [
            { symbol: 'Pb2SiO4', name: 'Lead(II) orthosilicate', density: 7.6 },
        ]
    ],
    [
        'Pb3(AsO4)2', [
            { symbol: 'Pb3(AsO4)2', name: 'Lead(II) arsenate', density: 5.8 },
        ]
    ],
    [
        'Pb3(PO4)2', [
            { symbol: 'Pb3(PO4)2', name: 'Lead(II) phosphate', density: 7.01 },
        ]
    ],
    [
        'Pb3(SbO4)2', [
            { symbol: 'Pb3(SbO4)2', name: 'Lead(II) antimonate', density: 6.58 },
        ]
    ],
    [
        'Pb3O2Cl2', [
            { symbol: 'Pb3O2Cl2', name: 'Mendipite', density: 7.24 },
        ]
    ],
    [
        'Pb3O4', [
            { symbol: 'Pb3O4', name: 'Lead(II,II,IV) oxide', density: 8.92 },
        ]
    ],
    [
        'Pb4(SO4)(CO3)2(OH)2', [
            { symbol: 'Pb4(SO4)(CO3)2(OH)2', name: 'Leadhillite', density: 6.55 },
        ]
    ],
    [
        'Pb4Cl6(OH)2', [
            { symbol: 'Pb4Cl6(OH)2', name: 'Penfieldite', density: 6.6 },
        ]
    ],
    [
        'Pb4FeSb6S14', [
            { symbol: 'Pb4FeSb6S14', name: 'Jamesonite', density: 5.63 },
        ]
    ],
    [
        'Pb5(AsO4,PO4)3Cl', [
            { symbol: 'Pb5(AsO4,PO4)3Cl', name: 'Mimetite', density: 7.24 },
        ]
    ],
    [
        'Pb5(PO4,AsO4)3Cl', [
            { symbol: 'Pb5(PO4,AsO4)3Cl', name: 'Pyromorphite', density: 7.04 },
        ]
    ],
    [
        'Pb5(VO4)3Cl', [
            { symbol: 'Pb5(VO4)3Cl', name: 'Vanadinite', density: 6.8 },
        ]
    ],
    [
        'Pb5Sb4S11', [
            { symbol: 'Pb5Sb4S11', name: 'Boulangerite', density: 6.1 },
        ]
    ],
    [
        'PbAgSb3S6', [
            { symbol: 'PbAgSb3S6', name: 'Andorite', density: 2.67 },
        ]
    ],
    [
        'PbBi2S4', [
            { symbol: 'PbBi2S4', name: 'Galenabismuthite', density: 7.04 },
        ]
    ],
    [
        'PbBr2', [
            { symbol: 'PbBr2', name: 'Lead(II) bromide', density: 6.69 },
        ]
    ],
    [
        'PbC2O4', [
            { symbol: 'PbC2O4', name: 'Lead(II) oxalate', density: 5.28 },
        ]
    ],
    [
        'PbCO3', [
            { symbol: 'PbCO3', name: 'Lead(II) carbonate', density: 6.582 },
        ]
    ],
    [
        'PbCl2', [
            { symbol: 'PbCl2', name: 'Cotunnite', density: 5.98 },
        ]
    ],
    [
        'PbClF', [
            { symbol: 'PbClF', name: 'Matlockite', density: 7.05 },
        ]
    ],
    [
        'PbCrO4', [
            { symbol: 'PbCrO4', name: 'Crocoite', density: 6.12 },
        ]
    ],
    [
        'PbCuSbS3', [
            { symbol: 'PbCuSbS3', name: 'Bournonite', density: 5.83 },
        ]
    ],
    [
        'PbF2', [
            { symbol: 'PbF2', name: 'Lead(II) fluoride', density: 8.44 },
        ]
    ],
    [
        'PbF4', [
            { symbol: 'PbF4', name: 'Lead(IV) fluoride', density: 6.7 },
        ]
    ],
    [
        'PbHAsO4', [
            { symbol: 'PbHAsO4', name: 'Lead(II) hydrogen arsenate', density: 5.943 },
        ]
    ],
    [
        'PbHPO4', [
            { symbol: 'PbHPO4', name: 'Lead(II) hydrogen phosphate', density: 5.66 },
        ]
    ],
    [
        'PbI2', [
            { symbol: 'PbI2', name: 'Lead(II) iodide', density: 6.16 },
        ]
    ],
    [
        'PbMoO4', [
            { symbol: 'PbMoO4', name: 'Wulfenite', density: 6.7 },
        ]
    ],
    [
        'PbO', [
            { symbol: 'PbO', name: 'Lead(II) oxide (massicot)', density: 9.64 },
            { symbol: 'PbO', name: 'Litharge', density: 9.35 },
        ]
    ],
    [
        'PbO2', [
            { symbol: 'PbO2', name: 'Lead(IV) oxide', density: 9.64 },
        ]
    ],
    [
        'PbS', [
            { symbol: 'PbS', name: 'Galena', density: 7.6 },
        ]
    ],
    [
        'PbS2O3', [
            { symbol: 'PbS2O3', name: 'Lead(II) thiosulfate', density: 5.18 },
        ]
    ],
    [
        'PbSO4', [
            { symbol: 'PbSO4', name: 'Anglesite', density: 6.29 },
        ]
    ],
    [
        'PbSe', [
            { symbol: 'PbSe', name: 'Lead(II) selenide', density: 8.1 },
        ]
    ],
    [
        'PbSeO3', [
            { symbol: 'PbSeO3', name: 'Lead(II) selenite', density: 7.0 },
        ]
    ],
    [
        'PbSeO4', [
            { symbol: 'PbSeO4', name: 'Lead(II) selenate', density: 6.37 },
        ]
    ],
    [
        'PbSiO3', [
            { symbol: 'PbSiO3', name: 'Lead(II) metasilicate', density: 6.49 },
        ]
    ],
    [
        'PbTe', [
            { symbol: 'PbTe', name: 'Altaite', density: 8.16 },
        ]
    ],
    [
        'PbTiO3', [
            { symbol: 'PbTiO3', name: 'Lead(II) titanate', density: 7.9 },
        ]
    ],
    [
        'PbWO4', [
            { symbol: 'PbWO4', name: 'Lead(II) tungstate (raspite)', density: 8.46 },
            { symbol: 'PbWO4', name: 'Stolzite', density: 8.24 },
        ]
    ],
    [
        'PbZrO3', [
            { symbol: 'PbZrO3', name: 'Lead(II) zirconate', density: 8.0 },
        ]
    ],
    [
        'Pd', [
            { symbol: 'Pd', name: 'Palladium', density: 12.0 },
        ]
    ],
    [
        'Pd(NH3)2Cl2', [
            { symbol: 'Pd(NH3)2Cl2', name: 'trans-  Dichlorodiamminepalladium(II)', density: 2.5 },
        ]
    ],
    [
        'PdBr2', [
            { symbol: 'PdBr2', name: 'Palladium(II) bromide', density: 5.2 },
        ]
    ],
    [
        'PdCl2', [
            { symbol: 'PdCl2', name: 'Palladium(II) chloride', density: 4.0 },
        ]
    ],
    [
        'PdF2', [
            { symbol: 'PdF2', name: 'Palladium(II) fluoride', density: 5.76 },
        ]
    ],
    [
        'PdI2', [
            { symbol: 'PdI2', name: 'Palladium(II) iodide', density: 6.0 },
        ]
    ],
    [
        'PdO', [
            { symbol: 'PdO', name: 'Palladium(II) oxide', density: 8.3 },
        ]
    ],
    [
        'PdS', [
            { symbol: 'PdS', name: 'Palladium(II) sulfide', density: 6.7 },
        ]
    ],
    [
        'Pm', [
            { symbol: 'Pm', name: 'Promethium', density: 7.26 },
        ]
    ],
    [
        'Po', [
            { symbol: 'Po', name: 'Polonium', density: 9.2 },
        ]
    ],
    [
        'PoO2', [
            { symbol: 'PoO2', name: 'Polonium(IV) oxide', density: 8.9 },
        ]
    ],
    [
        'Pr', [
            { symbol: 'Pr', name: 'Praseodymium', density: 6.77 },
        ]
    ],
    [
        'Pr(OH)3', [
            { symbol: 'Pr(OH)3', name: 'Praseodymium(III) hydroxide', density: 3.7 },
        ]
    ],
    [
        'Pr2(SO4)3·8H2O', [
            { symbol: 'Pr2(SO4)3·8H2O', name: 'Praseodymium(III) sulfate octahydrate', density: 2.83 },
        ]
    ],
    [
        'Pr2O3', [
            { symbol: 'Pr2O3', name: 'Praseodymium(III) oxide', density: 6.9 },
        ]
    ],
    [
        'Pr2S3', [
            { symbol: 'Pr2S3', name: 'Praseodymium(III) sulfide', density: 5.1 },
        ]
    ],
    [
        'Pr2Te3', [
            { symbol: 'Pr2Te3', name: 'Praseodymium(III) telluride', density: 7.0 },
        ]
    ],
    [
        'PrB6', [
            { symbol: 'PrB6', name: 'Praseodymium boride', density: 4.84 },
        ]
    ],
    [
        'PrBr3', [
            { symbol: 'PrBr3', name: 'Praseodymium(III) bromide', density: 5.28 },
        ]
    ],
    [
        'PrCl3', [
            { symbol: 'PrCl3', name: 'Praseodymium(III) chloride', density: 4.0 },
        ]
    ],
    [
        'PrF3', [
            { symbol: 'PrF3', name: 'Praseodymium(III) fluoride', density: 6.3 },
        ]
    ],
    [
        'PrI3', [
            { symbol: 'PrI3', name: 'Praseodymium(III) iodide', density: 5.8 },
        ]
    ],
    [
        'PrN', [
            { symbol: 'PrN', name: 'Praseodymium nitride', density: 7.46 },
        ]
    ],
    [
        'PrSi2', [
            { symbol: 'PrSi2', name: 'Praseodymium silicide', density: 5.46 },
        ]
    ],
    [
        'Pt', [
            { symbol: 'Pt', name: 'Platinum', density: 21.5 },
        ]
    ],
    [
        'PtAs2', [
            { symbol: 'PtAs2', name: 'Sperrylite', density: 10.58 },
        ]
    ],
    [
        'PtBr2', [
            { symbol: 'PtBr2', name: 'Platinum(II) bromide', density: 6.65 },
        ]
    ],
    [
        'PtCl2', [
            { symbol: 'PtCl2', name: 'Platinum(II) chloride', density: 6.0 },
        ]
    ],
    [
        'PtCl3', [
            { symbol: 'PtCl3', name: 'Platinum(III) chloride', density: 5.26 },
        ]
    ],
    [
        'PtCl4', [
            { symbol: 'PtCl4', name: 'Platinum(IV) chloride', density: 4.3 },
        ]
    ],
    [
        'PtCl4·5H2O', [
            { symbol: 'PtCl4·5H2O', name: 'Platinum(IV) chloride pentahydrate', density: 2.43 },
        ]
    ],
    [
        'PtF6', [
            { symbol: 'PtF6', name: 'Platinum(VI) fluoride', density: 4.0 },
        ]
    ],
    [
        'PtI2', [
            { symbol: 'PtI2', name: 'Platinum(II) iodide', density: 6.4 },
        ]
    ],
    [
        'PtO', [
            { symbol: 'PtO', name: 'Platinum(II) oxide', density: 14.1 },
        ]
    ],
    [
        'PtO2', [
            { symbol: 'PtO2', name: 'Platinum(IV) oxide', density: 11.8 },
        ]
    ],
    [
        'PtS', [
            { symbol: 'PtS', name: 'Platinum(II) sulfide', density: 10.25 },
        ]
    ],
    [
        'PtS2', [
            { symbol: 'PtS2', name: 'Platinum(IV) sulfide', density: 7.85 },
        ]
    ],
    [
        'PtSi', [
            { symbol: 'PtSi', name: 'Platinum silicide', density: 12.4 },
        ]
    ],
    [
        'Pu', [
            { symbol: 'Pu', name: 'Plutonium', density: 19.7 },
        ]
    ],
    [
        'Pu2O3', [
            { symbol: 'Pu2O3', name: 'Plutonium(III) oxide', density: 10.5 },
        ]
    ],
    [
        'PuBr3', [
            { symbol: 'PuBr3', name: 'Plutonium(III)bromide', density: 6.75 },
        ]
    ],
    [
        'PuCl3', [
            { symbol: 'PuCl3', name: 'Plutonium(III)chloride', density: 5.71 },
        ]
    ],
    [
        'PuF3', [
            { symbol: 'PuF3', name: 'Plutonium(III)fluoride', density: 9.33 },
        ]
    ],
    [
        'PuF4', [
            { symbol: 'PuF4', name: 'Plutonium(IV)fluoride', density: 7.1 },
        ]
    ],
    [
        'PuF6', [
            { symbol: 'PuF6', name: 'Plutonium(VI) fluoride', density: 5.08 },
        ]
    ],
    [
        'PuI3', [
            { symbol: 'PuI3', name: 'Plutonium(III) iodide', density: 6.92 },
        ]
    ],
    [
        'PuN', [
            { symbol: 'PuN', name: 'Plutonium nitride', density: 14.4 },
        ]
    ],
    [
        'PuO', [
            { symbol: 'PuO', name: 'Plutonium(II) oxide', density: 14.0 },
        ]
    ],
    [
        'PuO2', [
            { symbol: 'PuO2', name: 'Plutonium(IV) oxide', density: 11.5 },
        ]
    ],
    [
        'Ra', [
            { symbol: 'Ra', name: 'Radium', density: 5.0 },
        ]
    ],
    [
        'RaBr2', [
            { symbol: 'RaBr2', name: 'Radium bromide', density: 5.79 },
        ]
    ],
    [
        'RaCl2', [
            { symbol: 'RaCl2', name: 'Radium chloride', density: 4.9 },
        ]
    ],
    [
        'RaF2', [
            { symbol: 'RaF2', name: 'Radium fluoride', density: 6.7 },
        ]
    ],
    [
        'Rb', [
            { symbol: 'Rb', name: 'Rubidium', density: 1.53 },
        ]
    ],
    [
        'Rb2Cr2O7', [
            { symbol: 'Rb2Cr2O7', name: 'Rubidium dichromate', density: 3.1 },
        ]
    ],
    [
        'Rb2CrO4', [
            { symbol: 'Rb2CrO4', name: 'Rubidium chromate', density: 3.518 },
        ]
    ],
    [
        'Rb2O', [
            { symbol: 'Rb2O', name: 'Rubidium oxide', density: 4.0 },
        ]
    ],
    [
        'Rb2O2', [
            { symbol: 'Rb2O2', name: 'Rubidium peroxide', density: 3.8 },
        ]
    ],
    [
        'Rb2S', [
            { symbol: 'Rb2S', name: 'Rubidium sulfide', density: 2.91 },
        ]
    ],
    [
        'Rb2SO4', [
            { symbol: 'Rb2SO4', name: 'Rubidium sulfate', density: 3.61 },
        ]
    ],
    [
        'Rb2Se', [
            { symbol: 'Rb2Se', name: 'Rubidium selenide', density: 3.22 },
        ]
    ],
    [
        'RbAl(SO4)2', [
            { symbol: 'RbAl(SO4)2', name: 'Rubidium aluminum sulfate', density: 3.1 },
        ]
    ],
    [
        'RbAl(SO4)2·12H2O', [
            { symbol: 'RbAl(SO4)2·12H2O', name: 'Rubidium aluminum sulfate dodecahydrate', density: 1.9 },
        ]
    ],
    [
        'RbBF4', [
            { symbol: 'RbBF4', name: 'Rubidium fluoroborate', density: 2.82 },
        ]
    ],
    [
        'RbBr', [
            { symbol: 'RbBr', name: 'Rubidium bromide', density: 3.35 },
        ]
    ],
    [
        'RbBrO3', [
            { symbol: 'RbBrO3', name: 'Rubidium bromate', density: 3.68 },
        ]
    ],
    [
        'RbCN', [
            { symbol: 'RbCN', name: 'Rubidium cyanide', density: 2.3 },
        ]
    ],
    [
        'RbCl', [
            { symbol: 'RbCl', name: 'Rubidium chloride', density: 2.76 },
        ]
    ],
    [
        'RbClO3', [
            { symbol: 'RbClO3', name: 'Rubidium chlorate', density: 3.19 },
        ]
    ],
    [
        'RbClO4', [
            { symbol: 'RbClO4', name: 'Rubidium perchlorate', density: 2.9 },
        ]
    ],
    [
        'RbF', [
            { symbol: 'RbF', name: 'Rubidium fluoride', density: 3.2 },
        ]
    ],
    [
        'RbH', [
            { symbol: 'RbH', name: 'Rubidium hydride', density: 2.6 },
        ]
    ],
    [
        'RbHF2', [
            { symbol: 'RbHF2', name: 'Rubidium hydrogen fluoride', density: 3.3 },
        ]
    ],
    [
        'RbHSO4', [
            { symbol: 'RbHSO4', name: 'Rubidium hydrogen sulfate', density: 2.9 },
        ]
    ],
    [
        'RbI', [
            { symbol: 'RbI', name: 'Rubidium iodide', density: 3.55 },
        ]
    ],
    [
        'RbIO3', [
            { symbol: 'RbIO3', name: 'Rubidium iodate', density: 4.33 },
        ]
    ],
    [
        'RbMnO4', [
            { symbol: 'RbMnO4', name: 'Rubidium permanganate', density: 3.24 },
        ]
    ],
    [
        'RbN3', [
            { symbol: 'RbN3', name: 'Rubidium azide', density: 2.79 },
        ]
    ],
    [
        'RbNO3', [
            { symbol: 'RbNO3', name: 'Rubidium nitrate', density: 3.11 },
        ]
    ],
    [
        'RbO2', [
            { symbol: 'RbO2', name: 'Rubidium superoxide', density: 3.0 },
        ]
    ],
    [
        'RbOH', [
            { symbol: 'RbOH', name: 'Rubidium hydroxide', density: 3.2 },
        ]
    ],
    [
        'Re', [
            { symbol: 'Re', name: 'Rhenium', density: 20.8 },
        ]
    ],
    [
        'Re2(CO)10', [
            { symbol: 'Re2(CO)10', name: 'Rhenium carbonyl', density: 2.87 },
        ]
    ],
    [
        'Re2O5', [
            { symbol: 'Re2O5', name: 'Rhenium(V) oxide', density: 7.0 },
        ]
    ],
    [
        'Re2O7', [
            { symbol: 'Re2O7', name: 'Rhenium(VII) oxide', density: 6.1 },
        ]
    ],
    [
        'Re2S7', [
            { symbol: 'Re2S7', name: 'Rhenium(VII) sulfide', density: 4.87 },
        ]
    ],
    [
        'ReBr3', [
            { symbol: 'ReBr3', name: 'Rhenium(III)bromide', density: 6.1 },
        ]
    ],
    [
        'ReCl3', [
            { symbol: 'ReCl3', name: 'Rhenium(III) chloride', density: 4.81 },
        ]
    ],
    [
        'ReCl4', [
            { symbol: 'ReCl4', name: 'Rhenium(IV) chloride', density: 4.9 },
        ]
    ],
    [
        'ReCl5', [
            { symbol: 'ReCl5', name: 'Rhenium(V) chloride', density: 4.9 },
        ]
    ],
    [
        'ReF4', [
            { symbol: 'ReF4', name: 'Rhenium(IV) fluoride', density: 7.49 },
        ]
    ],
    [
        'ReF6', [
            { symbol: 'ReF6', name: 'Rhenium(VI) fluoride', density: 4.06 },
        ]
    ],
    [
        'ReF7', [
            { symbol: 'ReF7', name: 'Rhenium(VII) fluoride', density: 4.32 },
        ]
    ],
    [
        'ReO2', [
            { symbol: 'ReO2', name: 'Rhenium(IV) oxide', density: 11.4 },
        ]
    ],
    [
        'ReO3', [
            { symbol: 'ReO3', name: 'Rhenium(VI) oxide', density: 6.9 },
        ]
    ],
    [
        'ReO3Cl', [
            { symbol: 'ReO3Cl', name: 'Rhenium(VII) trioxychloride', density: 3.87 },
        ]
    ],
    [
        'ReS2', [
            { symbol: 'ReS2', name: 'Rhenium(IV) sulfide', density: 7.6 },
        ]
    ],
    [
        'ReTe2', [
            { symbol: 'ReTe2', name: 'Rhenium(IV) telluride', density: 8.5 },
        ]
    ],
    [
        'Rh', [
            { symbol: 'Rh', name: 'Rhodium', density: 12.4 },
        ]
    ],
    [
        'Rh2O3', [
            { symbol: 'Rh2O3', name: 'Rhodium(III) oxide', density: 8.2 },
        ]
    ],
    [
        'Rh4(CO)12', [
            { symbol: 'Rh4(CO)12', name: 'Rhodium dodecacarbonyl', density: 2.52 },
        ]
    ],
    [
        'RhBr3', [
            { symbol: 'RhBr3', name: 'Rhodium(III) bromide', density: 5.56 },
        ]
    ],
    [
        'RhCl3', [
            { symbol: 'RhCl3', name: 'Rhodium(III) chloride', density: 5.38 },
        ]
    ],
    [
        'RhF3', [
            { symbol: 'RhF3', name: 'Rhodium(III) fluoride', density: 5.4 },
        ]
    ],
    [
        'RhF6', [
            { symbol: 'RhF6', name: 'Rhodium(VI) fluoride', density: 3.1 },
        ]
    ],
    [
        'RhI3', [
            { symbol: 'RhI3', name: 'Rhodium(III) iodide', density: 6.4 },
        ]
    ],
    [
        'RhO2', [
            { symbol: 'RhO2', name: 'Rhodium(IV) oxide', density: 7.2 },
        ]
    ],
    [
        'RhO2·2H2O', [
            { symbol: 'RhO2·2H2O', name: 'Rhodium(IV) oxide dihydrate', density: 8.2 },
        ]
    ],
    [
        'Ru', [
            { symbol: 'Ru', name: 'Ruthenium', density: 12.1 },
        ]
    ],
    [
        'RuBr3', [
            { symbol: 'RuBr3', name: 'Ruthenium(III) bromide', density: 5.3 },
        ]
    ],
    [
        'RuCl3', [
            { symbol: 'RuCl3', name: 'Ruthenium(III) chloride', density: 3.1 },
        ]
    ],
    [
        'RuF3', [
            { symbol: 'RuF3', name: 'Ruthenium(III) fluoride', density: 5.36 },
        ]
    ],
    [
        'RuF5', [
            { symbol: 'RuF5', name: 'Ruthenium(V) fluoride', density: 3.9 },
        ]
    ],
    [
        'RuF6', [
            { symbol: 'RuF6', name: 'Ruthenium(VI) fluoride', density: 3.54 },
        ]
    ],
    [
        'RuI3', [
            { symbol: 'RuI3', name: 'Ruthenium(III) iodide', density: 6.0 },
        ]
    ],
    [
        'RuO2', [
            { symbol: 'RuO2', name: 'Ruthenium(IV) oxide', density: 7.05 },
        ]
    ],
    [
        'RuO4', [
            { symbol: 'RuO4', name: 'Ruthenium(VIII) oxide', density: 3.29 },
        ]
    ],
    [
        'S', [
            { symbol: 'S', name: 'Sulfur (rhombic)', density: 2.07 },
            { symbol: 'S', name: 'Sulfur (monoclinic)', density: 2.0 },
        ]
    ],
    [
        'S2Br2', [
            { symbol: 'S2Br2', name: 'Sulfur bromide [SSBr2]', density: 2.63 },
        ]
    ],
    [
        'S2Cl2', [
            { symbol: 'S2Cl2', name: 'Sulfur chloride [SSCl2]', density: 1.69 },
        ]
    ],
    [
        'S2F10', [
            { symbol: 'S2F10', name: 'Sulfur decafluoride', density: 2.08 },
        ]
    ],
    [
        'S2O5Cl2', [
            { symbol: 'S2O5Cl2', name: 'Pyrosulfuryl chloride', density: 1.837 },
        ]
    ],
    [
        'S8', [
            { symbol: 'S8', name: 'Sulfur (orthorhombic)', density: 2.07 },
        ]
    ],
    [
        'SCl2', [
            { symbol: 'SCl2', name: 'Sulfur dichloride', density: 1.62 },
        ]
    ],
    [
        'SO2(OH)Cl', [
            { symbol: 'SO2(OH)Cl', name: 'Chlorosulfonic acid', density: 1.75 },
        ]
    ],
    [
        'SO2(OH)F', [
            { symbol: 'SO2(OH)F', name: 'Fluorosulfonic acid', density: 1.726 },
        ]
    ],
    [
        'SO2Cl2', [
            { symbol: 'SO2Cl2', name: 'Sulfuryl chloride', density: 1.68 },
        ]
    ],
    [
        'SO2ClF', [
            { symbol: 'SO2ClF', name: 'Sulfuryl chloride fluoride', density: 1.62 },
        ]
    ],
    [
        'SO3', [
            { symbol: 'SO3', name: 'Sulfur trioxide (γ-form)', density: 1.9 },
        ]
    ],
    [
        'SOCl2', [
            { symbol: 'SOCl2', name: 'Thionyl chloride', density: 1.631 },
        ]
    ],
    [
        'Sb', [
            { symbol: 'Sb', name: 'Antimony (gray)', density: 6.68 },
        ]
    ],
    [
        'Sb(CH3)3', [
            { symbol: 'Sb(CH3)3', name: 'Trimethylstibine', density: 1.523 },
        ]
    ],
    [
        'Sb(Ta,Nb)O4', [
            { symbol: 'Sb(Ta,Nb)O4', name: 'Stibiotantalite', density: 6.6 },
        ]
    ],
    [
        'Sb2(SO4)3', [
            { symbol: 'Sb2(SO4)3', name: 'Antimony(III) sulfate', density: 3.62 },
        ]
    ],
    [
        'Sb2O3', [
            { symbol: 'Sb2O3', name: 'Senarmontite', density: 5.58 },
            { symbol: 'Sb2O3', name: 'Valentinite', density: 5.7 },
        ]
    ],
    [
        'Sb2O4', [
            { symbol: 'Sb2O4', name: 'Antimony(III,V) oxide', density: 6.64 },
        ]
    ],
    [
        'Sb2O5', [
            { symbol: 'Sb2O5', name: 'Antimony(V) oxide', density: 3.78 },
        ]
    ],
    [
        'Sb2S3', [
            { symbol: 'Sb2S3', name: 'Stibnite', density: 4.56 },
        ]
    ],
    [
        'Sb2S5', [
            { symbol: 'Sb2S5', name: 'Antimony(V) sulfide', density: 4.12 },
        ]
    ],
    [
        'Sb2Se3', [
            { symbol: 'Sb2Se3', name: 'Antimony(III) selenide', density: 5.81 },
        ]
    ],
    [
        'Sb2Te3', [
            { symbol: 'Sb2Te3', name: 'Antimony(III) telluride', density: 6.5 },
        ]
    ],
    [
        'SbAs', [
            { symbol: 'SbAs', name: 'Allemontite', density: 6.0 },
        ]
    ],
    [
        'SbBr3', [
            { symbol: 'SbBr3', name: 'Antimony(III) bromide', density: 4.35 },
        ]
    ],
    [
        'SbCl3', [
            { symbol: 'SbCl3', name: 'Antimony(III) chloride', density: 3.14 },
        ]
    ],
    [
        'SbCl5', [
            { symbol: 'SbCl5', name: 'Antimony(V) chloride', density: 2.34 },
        ]
    ],
    [
        'SbF3', [
            { symbol: 'SbF3', name: 'Antimony(III) fluoride', density: 4.38 },
        ]
    ],
    [
        'SbF5', [
            { symbol: 'SbF5', name: 'Antimony(V) fluoride', density: 3.1 },
        ]
    ],
    [
        'SbI3', [
            { symbol: 'SbI3', name: 'Antimony(III) iodide', density: 4.92 },
        ]
    ],
    [
        'Sc', [
            { symbol: 'Sc', name: 'Scandium', density: 2.99 },
        ]
    ],
    [
        'Sc2O3', [
            { symbol: 'Sc2O3', name: 'Scandium oxide', density: 3.864 },
        ]
    ],
    [
        'Sc2S3', [
            { symbol: 'Sc2S3', name: 'Scandium sulfide', density: 2.91 },
        ]
    ],
    [
        'Sc2Te3', [
            { symbol: 'Sc2Te3', name: 'Scandium telluride', density: 5.29 },
        ]
    ],
    [
        'ScB2', [
            { symbol: 'ScB2', name: 'Scandium boride', density: 3.17 },
        ]
    ],
    [
        'ScBr3', [
            { symbol: 'ScBr3', name: 'Scandium bromide', density: 9.33 },
        ]
    ],
    [
        'ScCl3', [
            { symbol: 'ScCl3', name: 'Scandium chloride', density: 2.4 },
        ]
    ],
    [
        'Se', [
            { symbol: 'Se', name: 'Selenium (gray)', density: 4.809 },
            { symbol: 'Se', name: 'Selenium (α form)', density: 4.39 },
            { symbol: 'Se', name: 'Selenium (vitreous)', density: 4.28 },
        ]
    ],
    [
        'Se2Br2', [
            { symbol: 'Se2Br2', name: 'Selenium bromide', density: 3.6 },
        ]
    ],
    [
        'Se2Cl2', [
            { symbol: 'Se2Cl2', name: 'Selenium chloride', density: 2.774 },
        ]
    ],
    [
        'Se2S6', [
            { symbol: 'Se2S6', name: 'Selenium sulfide [Se2S6]', density: 2.44 },
        ]
    ],
    [
        'Se4S4', [
            { symbol: 'Se4S4', name: 'Selenium sulfide [Se4S4]', density: 3.29 },
        ]
    ],
    [
        'SeCl4', [
            { symbol: 'SeCl4', name: 'Selenium tetrachloride', density: 2.6 },
        ]
    ],
    [
        'SeF4', [
            { symbol: 'SeF4', name: 'Selenium tetrafluoride', density: 2.75 },
        ]
    ],
    [
        'SeO2', [
            { symbol: 'SeO2', name: 'Selenium dioxide', density: 3.95 },
        ]
    ],
    [
        'SeO3', [
            { symbol: 'SeO3', name: 'Selenium trioxide', density: 3.44 },
        ]
    ],
    [
        'SeOBr2', [
            { symbol: 'SeOBr2', name: 'Selenium oxybromide', density: 3.38 },
        ]
    ],
    [
        'SeOCl2', [
            { symbol: 'SeOCl2', name: 'Selenium oxychloride', density: 2.44 },
        ]
    ],
    [
        'SeOF2', [
            { symbol: 'SeOF2', name: 'Selenium oxyfluoride', density: 2.8 },
        ]
    ],
    [
        'Si', [
            { symbol: 'Si', name: 'Silicon', density: 2.3296 },
        ]
    ],
    [
        'Si3H8', [
            { symbol: 'Si3H8', name: 'Trisilane', density: 0.739 },
        ]
    ],
    [
        'Si3N4', [
            { symbol: 'Si3N4', name: 'Silicon nitride [Si3N4]', density: 3.17 },
        ]
    ],
    [
        'Si4H10', [
            { symbol: 'Si4H10', name: '2-Silyltrisilane', density: 0.792 },
            { symbol: 'Si4H10', name: 'Tetrasilane', density: 0.792 },
        ]
    ],
    [
        'Si5H10', [
            { symbol: 'Si5H10', name: 'Cyclopentasilane', density: 0.963 },
        ]
    ],
    [
        'Si5H12', [
            { symbol: 'Si5H12', name: 'Pentasilane', density: 0.827 },
            { symbol: 'Si5H12', name: '2-Silyltetrasilane', density: 0.82 },
        ]
    ],
    [
        'Si6H14', [
            { symbol: 'Si6H14', name: 'Hexasilane', density: 0.847 },
            { symbol: 'Si6H14', name: '2-Silylpentasilane', density: 0.84 },
            { symbol: 'Si6H14', name: '3-Silylpentasilane', density: 0.843 },
        ]
    ],
    [
        'Si7H16', [
            { symbol: 'Si7H16', name: 'Heptasilane', density: 0.859 },
        ]
    ],
    [
        'SiB4', [
            { symbol: 'SiB4', name: 'Silicon tetraboride', density: 2.4 },
        ]
    ],
    [
        'SiBr2Cl2', [
            { symbol: 'SiBr2Cl2', name: 'Dibromodichlorosilane', density: 2.172 },
        ]
    ],
    [
        'SiBr3Cl', [
            { symbol: 'SiBr3Cl', name: 'Tribromochlorosilane', density: 2.497 },
        ]
    ],
    [
        'SiBr4', [
            { symbol: 'SiBr4', name: 'Tetrabromosilane', density: 2.8 },
        ]
    ],
    [
        'SiBrCl3', [
            { symbol: 'SiBrCl3', name: 'Bromotrichlorosilane', density: 1.826 },
        ]
    ],
    [
        'SiC', [
            { symbol: 'SiC', name: 'Silicon carbide (hexagonal)', density: 3.16 },
        ]
    ],
    [
        'SiCl4', [
            { symbol: 'SiCl4', name: 'Tetrachlorosilane', density: 1.5 },
        ]
    ],
    [
        'SiHBr3', [
            { symbol: 'SiHBr3', name: 'Tribromosilane', density: 2.7 },
        ]
    ],
    [
        'SiHCl3', [
            { symbol: 'SiHCl3', name: 'Trichlorosilane', density: 1.331 },
        ]
    ],
    [
        'SiI4', [
            { symbol: 'SiI4', name: 'Tetraiodosilane', density: 4.1 },
        ]
    ],
    [
        'SiO', [
            { symbol: 'SiO', name: 'Silicon monoxide', density: 2.18 },
        ]
    ],
    [
        'SiO2', [
            { symbol: 'SiO2', name: 'Silicon dioxide (β-quartz)', density: 2.533 },
            { symbol: 'SiO2', name: 'Silicon dioxide (vitreous)', density: 2.196 },
            { symbol: 'SiO2', name: 'Cristobalite', density: 2.334 },
            { symbol: 'SiO2', name: 'Quartz (α)', density: 2.65 },
            { symbol: 'SiO2', name: 'Tridymite', density: 2.265 },
        ]
    ],
    [
        'SiO2·nH2O', [
            { symbol: 'SiO2·nH2O', name: 'Opal', density: 1.9 },
        ]
    ],
    [
        'SiS', [
            { symbol: 'SiS', name: 'Silicon monosulfide', density: 1.85 },
        ]
    ],
    [
        'SiS2', [
            { symbol: 'SiS2', name: 'Silicon disulfide', density: 2.04 },
        ]
    ],
    [
        'Sm', [
            { symbol: 'Sm', name: 'Samarium', density: 7.52 },
        ]
    ],
    [
        'Sm(C2H3O2)3·3H2O', [
            { symbol: 'Sm(C2H3O2)3·3H2O', name: 'Samarium(III) acetate trihydrate', density: 1.94 },
        ]
    ],
    [
        'Sm2(SO4)3·8H2O', [
            { symbol: 'Sm2(SO4)3·8H2O', name: 'Samarium(III) sulfate octahydrate', density: 2.93 },
        ]
    ],
    [
        'Sm2O3', [
            { symbol: 'Sm2O3', name: 'Samarium(III) oxide', density: 7.6 },
        ]
    ],
    [
        'Sm2S3', [
            { symbol: 'Sm2S3', name: 'Samarium(III) sulfide', density: 5.87 },
        ]
    ],
    [
        'Sm2Te3', [
            { symbol: 'Sm2Te3', name: 'Samarium(III) telluride', density: 7.31 },
        ]
    ],
    [
        'SmB6', [
            { symbol: 'SmB6', name: 'Samarium boride', density: 5.07 },
        ]
    ],
    [
        'SmCl2', [
            { symbol: 'SmCl2', name: 'Samarium(II) chloride', density: 3.69 },
        ]
    ],
    [
        'SmCl3', [
            { symbol: 'SmCl3', name: 'Samarium(III) chloride', density: 4.46 },
        ]
    ],
    [
        'SmCl3·6H2O', [
            { symbol: 'SmCl3·6H2O', name: 'Samarium(III) chloride hexahydrate', density: 2.38 },
        ]
    ],
    [
        'SmSi2', [
            { symbol: 'SmSi2', name: 'Samarium silicide', density: 5.14 },
        ]
    ],
    [
        'Sn', [
            { symbol: 'Sn', name: 'Tin (white)', density: 7.287 },
            { symbol: 'Sn', name: 'Tin (gray)', density: 5.769 },
        ]
    ],
    [
        'Sn(C2H3O2)2', [
            { symbol: 'Sn(C2H3O2)2', name: 'Tin(II) acetate', density: 2.31 },
        ]
    ],
    [
        'Sn(CH3)3N(CH3)2', [
            { symbol: 'Sn(CH3)3N(CH3)2', name: '(Dimethylamino)trimethystannane', density: 1.22 },
        ]
    ],
    [
        'Sn2P2O7', [
            { symbol: 'Sn2P2O7', name: 'Tin(II) pyrophosphate', density: 4.009 },
        ]
    ],
    [
        'Sn4P3', [
            { symbol: 'Sn4P3', name: 'Tin triphosphide', density: 5.2 },
        ]
    ],
    [
        'SnBr2', [
            { symbol: 'SnBr2', name: 'Tin(II) bromide', density: 5.12 },
        ]
    ],
    [
        'SnBr4', [
            { symbol: 'SnBr4', name: 'Tin(IV) bromide', density: 3.34 },
        ]
    ],
    [
        'SnC2O4', [
            { symbol: 'SnC2O4', name: 'Tin(II) oxalate', density: 3.56 },
        ]
    ],
    [
        'SnCl2', [
            { symbol: 'SnCl2', name: 'Tin(II) chloride', density: 3.9 },
        ]
    ],
    [
        'SnCl2·2H2O', [
            { symbol: 'SnCl2·2H2O', name: 'Tin(II) chloride dihydrate', density: 2.71 },
        ]
    ],
    [
        'SnCl4', [
            { symbol: 'SnCl4', name: 'Tin(IV) chloride', density: 2.234 },
        ]
    ],
    [
        'SnCl4·5H2O', [
            { symbol: 'SnCl4·5H2O', name: 'Tin(IV) chloride pentahydrate', density: 2.04 },
        ]
    ],
    [
        'SnF2', [
            { symbol: 'SnF2', name: 'Tin(II) fluoride', density: 4.57 },
        ]
    ],
    [
        'SnF4', [
            { symbol: 'SnF4', name: 'Tin(IV) fluoride', density: 4.78 },
        ]
    ],
    [
        'SnI2', [
            { symbol: 'SnI2', name: 'Tin(II) iodide', density: 5.28 },
        ]
    ],
    [
        'SnI4', [
            { symbol: 'SnI4', name: 'Tin(IV) iodide', density: 4.46 },
        ]
    ],
    [
        'SnO', [
            { symbol: 'SnO', name: 'Tin(II) oxide', density: 6.45 },
        ]
    ],
    [
        'SnO2', [
            { symbol: 'SnO2', name: 'Cassiterite', density: 6.85 },
        ]
    ],
    [
        'SnS', [
            { symbol: 'SnS', name: 'Tin(II) sulfide', density: 5.08 },
        ]
    ],
    [
        'SnS2', [
            { symbol: 'SnS2', name: 'Tin(IV) sulfide', density: 4.5 },
        ]
    ],
    [
        'SnSO4', [
            { symbol: 'SnSO4', name: 'Tin(II) sulfate', density: 4.15 },
        ]
    ],
    [
        'SnSe', [
            { symbol: 'SnSe', name: 'Tin(II) selenide', density: 6.18 },
        ]
    ],
    [
        'SnSe2', [
            { symbol: 'SnSe2', name: 'Tin(IV) selenide', density: 5.0 },
        ]
    ],
    [
        'SnTe', [
            { symbol: 'SnTe', name: 'Tin(II) telluride', density: 6.5 },
        ]
    ],
    [
        'SnZrF6', [
            { symbol: 'SnZrF6', name: 'Tin(II) hexafluorozirconate', density: 4.21 },
        ]
    ],
    [
        'Sr', [
            { symbol: 'Sr', name: 'Strontium', density: 2.64 },
        ]
    ],
    [
        'Sr(BrO3)2·H2O', [
            { symbol: 'Sr(BrO3)2·H2O', name: 'Strontium bromate monohydrate', density: 3.773 },
        ]
    ],
    [
        'Sr(C2H3O2)2', [
            { symbol: 'Sr(C2H3O2)2', name: 'Strontium acetate', density: 2.1 },
        ]
    ],
    [
        'Sr(CHO2)2', [
            { symbol: 'Sr(CHO2)2', name: 'Strontium formate', density: 2.693 },
        ]
    ],
    [
        'Sr(CHO2)2·2H2O', [
            { symbol: 'Sr(CHO2)2·2H2O', name: 'Strontium formate dihydrate', density: 2.25 },
        ]
    ],
    [
        'Sr(ClO3)2', [
            { symbol: 'Sr(ClO3)2', name: 'Strontium chlorate', density: 3.15 },
        ]
    ],
    [
        'Sr(IO3)2', [
            { symbol: 'Sr(IO3)2', name: 'Strontium iodate', density: 5.045 },
        ]
    ],
    [
        'Sr(MnO4)2·3H2O', [
            { symbol: 'Sr(MnO4)2·3H2O', name: 'Strontium permanganate trihydrate', density: 2.75 },
        ]
    ],
    [
        'Sr(NO2)2', [
            { symbol: 'Sr(NO2)2', name: 'Strontium nitrite', density: 2.8 },
        ]
    ],
    [
        'Sr(NO3)2', [
            { symbol: 'Sr(NO3)2', name: 'Strontium nitrate', density: 2.99 },
        ]
    ],
    [
        'Sr(OH)2', [
            { symbol: 'Sr(OH)2', name: 'Strontium hydroxide', density: 3.625 },
        ]
    ],
    [
        'Sr2SiO4', [
            { symbol: 'Sr2SiO4', name: 'Strontium orthosilicate', density: 4.5 },
        ]
    ],
    [
        'SrB6', [
            { symbol: 'SrB6', name: 'Strontium hexaboride', density: 3.39 },
        ]
    ],
    [
        'SrBr2', [
            { symbol: 'SrBr2', name: 'Strontium bromide', density: 4.216 },
        ]
    ],
    [
        'SrC2', [
            { symbol: 'SrC2', name: 'Strontium carbide', density: 3.19 },
        ]
    ],
    [
        'SrCO3', [
            { symbol: 'SrCO3', name: 'Strontium carbonate', density: 3.785 },
        ]
    ],
    [
        'SrCl2', [
            { symbol: 'SrCl2', name: 'Strontium chloride', density: 3.052 },
        ]
    ],
    [
        'SrCl2·6H2O', [
            { symbol: 'SrCl2·6H2O', name: 'Strontium chloride hexahydrate', density: 1.96 },
        ]
    ],
    [
        'SrCrO4', [
            { symbol: 'SrCrO4', name: 'Strontium chromate', density: 3.9 },
        ]
    ],
    [
        'SrF2', [
            { symbol: 'SrF2', name: 'Strontium fluoride', density: 4.24 },
        ]
    ],
    [
        'SrH2', [
            { symbol: 'SrH2', name: 'Strontium hydride', density: 3.26 },
        ]
    ],
    [
        'SrI2', [
            { symbol: 'SrI2', name: 'Strontium iodide', density: 4.55 },
        ]
    ],
    [
        'SrI2·6H2O', [
            { symbol: 'SrI2·6H2O', name: 'Strontium iodide hexahydrate', density: 4.4 },
        ]
    ],
    [
        'SrMoO4', [
            { symbol: 'SrMoO4', name: 'Strontium molybdate', density: 4.54 },
        ]
    ],
    [
        'SrNb2O6', [
            { symbol: 'SrNb2O6', name: 'Strontium niobate', density: 5.11 },
        ]
    ],
    [
        'SrO', [
            { symbol: 'SrO', name: 'Strontium oxide', density: 5.1 },
        ]
    ],
    [
        'SrO2', [
            { symbol: 'SrO2', name: 'Strontium peroxide', density: 4.78 },
        ]
    ],
    [
        'SrS', [
            { symbol: 'SrS', name: 'Strontium sulfide', density: 3.7 },
        ]
    ],
    [
        'SrS2O3·5H2O', [
            { symbol: 'SrS2O3·5H2O', name: 'Strontium thiosulfate pentahydrate', density: 2.17 },
        ]
    ],
    [
        'SrSO4', [
            { symbol: 'SrSO4', name: 'Strontium sulfate', density: 3.96 },
        ]
    ],
    [
        'SrSe', [
            { symbol: 'SrSe', name: 'Strontium selenide', density: 4.54 },
        ]
    ],
    [
        'SrSeO4', [
            { symbol: 'SrSeO4', name: 'Strontium selenate', density: 4.25 },
        ]
    ],
    [
        'SrSi2', [
            { symbol: 'SrSi2', name: 'Strontium silicide', density: 3.35 },
        ]
    ],
    [
        'SrTe', [
            { symbol: 'SrTe', name: 'Strontium telluride', density: 4.83 },
        ]
    ],
    [
        'SrTiO3', [
            { symbol: 'SrTiO3', name: 'Strontium titanate', density: 5.1 },
        ]
    ],
    [
        'SrWO4', [
            { symbol: 'SrWO4', name: 'Strontium tungstate', density: 6.187 },
        ]
    ],
    [
        'T2O', [
            { symbol: 'T2O', name: 'Water-t2', density: 1.2138 },
        ]
    ],
    [
        'Ta', [
            { symbol: 'Ta', name: 'Tantalum', density: 16.4 },
        ]
    ],
    [
        'Ta2C', [
            { symbol: 'Ta2C', name: 'Tantalum carbide (Ta2C)', density: 15.1 },
        ]
    ],
    [
        'Ta2O5', [
            { symbol: 'Ta2O5', name: 'Tantalum(V) oxide', density: 8.24 },
        ]
    ],
    [
        'TaAl3', [
            { symbol: 'TaAl3', name: 'Tantalumaluminide', density: 7.02 },
        ]
    ],
    [
        'TaB', [
            { symbol: 'TaB', name: 'Tantalum boride', density: 14.2 },
        ]
    ],
    [
        'TaB2', [
            { symbol: 'TaB2', name: 'Tantalum boride [TaB2]', density: 11.2 },
        ]
    ],
    [
        'TaBr4', [
            { symbol: 'TaBr4', name: 'Tantalum(IV) bromide', density: 5.77 },
        ]
    ],
    [
        'TaBr5', [
            { symbol: 'TaBr5', name: 'Tantalum(V) bromide', density: 4.67 },
        ]
    ],
    [
        'TaC', [
            { symbol: 'TaC', name: 'Tantalum carbide', density: 14.3 },
        ]
    ],
    [
        'TaCl4', [
            { symbol: 'TaCl4', name: 'Tantalum(IV) chloride', density: 4.35 },
        ]
    ],
    [
        'TaCl5', [
            { symbol: 'TaCl5', name: 'Tantalum(V) chloride', density: 3.68 },
        ]
    ],
    [
        'TaF5', [
            { symbol: 'TaF5', name: 'Tantalum(V) fluoride', density: 4.74 },
        ]
    ],
    [
        'TaH', [
            { symbol: 'TaH', name: 'Tantalum hydride', density: 15.1 },
        ]
    ],
    [
        'TaI5', [
            { symbol: 'TaI5', name: 'Tantalum(V) iodide', density: 5.8 },
        ]
    ],
    [
        'TaN', [
            { symbol: 'TaN', name: 'Tantalum nitride', density: 13.7 },
        ]
    ],
    [
        'TaO2', [
            { symbol: 'TaO2', name: 'Tantalum(IV) oxide', density: 10.0 },
        ]
    ],
    [
        'TaS2', [
            { symbol: 'TaS2', name: 'Tantalum(IV) sulfide', density: 6.86 },
        ]
    ],
    [
        'TaSe2', [
            { symbol: 'TaSe2', name: 'Tantalum(IV) selenide', density: 6.7 },
        ]
    ],
    [
        'TaSi2', [
            { symbol: 'TaSi2', name: 'Tantalum silicide', density: 9.14 },
        ]
    ],
    [
        'TaTe2', [
            { symbol: 'TaTe2', name: 'Tantalum(IV) telluride', density: 9.4 },
        ]
    ],
    [
        'Tb', [
            { symbol: 'Tb', name: 'Terbium', density: 8.23 },
        ]
    ],
    [
        'Tb2O3', [
            { symbol: 'Tb2O3', name: 'Terbium(III) oxide', density: 7.91 },
        ]
    ],
    [
        'Tb2S3', [
            { symbol: 'Tb2S3', name: 'Terbium(III) sulfide', density: 6.35 },
        ]
    ],
    [
        'TbCl3', [
            { symbol: 'TbCl3', name: 'Terbium(III) chloride', density: 4.35 },
        ]
    ],
    [
        'TbCl3·6H2O', [
            { symbol: 'TbCl3·6H2O', name: 'Terbium(III) chloride hexahydrate', density: 4.35 },
        ]
    ],
    [
        'TbI3', [
            { symbol: 'TbI3', name: 'Terbium(III) iodide', density: 5.2 },
        ]
    ],
    [
        'TbN', [
            { symbol: 'TbN', name: 'Terbium nitride', density: 9.55 },
        ]
    ],
    [
        'TbSi2', [
            { symbol: 'TbSi2', name: 'Terbium silicide', density: 6.66 },
        ]
    ],
    [
        'Tc', [
            { symbol: 'Tc', name: 'Technetium', density: 11.0 },
        ]
    ],
    [
        'TcF6', [
            { symbol: 'TcF6', name: 'Technetium(VI) fluoride', density: 3.0 },
        ]
    ],
    [
        'Te', [
            { symbol: 'Te', name: 'Tellurium', density: 6.232 },
        ]
    ],
    [
        'TeBr4', [
            { symbol: 'TeBr4', name: 'Tellurium tetrabromide', density: 4.3 },
        ]
    ],
    [
        'TeCl2', [
            { symbol: 'TeCl2', name: 'Tellurium dichloride', density: 6.9 },
        ]
    ],
    [
        'TeCl4', [
            { symbol: 'TeCl4', name: 'Tellurium tetrachloride', density: 3.0 },
        ]
    ],
    [
        'TeI4', [
            { symbol: 'TeI4', name: 'Tellurium tetraiodide', density: 5.05 },
        ]
    ],
    [
        'TeO2', [
            { symbol: 'TeO2', name: 'Tellurium dioxide', density: 5.9 },
        ]
    ],
    [
        'TeO3', [
            { symbol: 'TeO3', name: 'Tellurium trioxide', density: 5.07 },
        ]
    ],
    [
        'Th', [
            { symbol: 'Th', name: 'Thorium', density: 11.7 },
        ]
    ],
    [
        'Th(SO4)2·9H2O', [
            { symbol: 'Th(SO4)2·9H2O', name: 'Thorium(IV) sulfate nonahydrate', density: 2.8 },
        ]
    ],
    [
        'ThB6', [
            { symbol: 'ThB6', name: 'Thorium boride', density: 6.99 },
        ]
    ],
    [
        'ThC', [
            { symbol: 'ThC', name: 'Thorium carbide', density: 10.6 },
        ]
    ],
    [
        'ThC2', [
            { symbol: 'ThC2', name: 'Thorium dicarbide', density: 9.0 },
        ]
    ],
    [
        'ThCl4', [
            { symbol: 'ThCl4', name: 'Thorium(IV) chloride', density: 4.59 },
        ]
    ],
    [
        'ThF4', [
            { symbol: 'ThF4', name: 'Thorium(IV) fluoride', density: 6.1 },
        ]
    ],
    [
        'ThH2', [
            { symbol: 'ThH2', name: 'Thorium hydride', density: 9.5 },
        ]
    ],
    [
        'ThN', [
            { symbol: 'ThN', name: 'Thorium nitride', density: 11.6 },
        ]
    ],
    [
        'ThO2', [
            { symbol: 'ThO2', name: 'Thorianite', density: 10.0 },
        ]
    ],
    [
        'ThS2', [
            { symbol: 'ThS2', name: 'Thorium(IV) sulfide', density: 7.3 },
        ]
    ],
    [
        'ThSe2', [
            { symbol: 'ThSe2', name: 'Thorium(IV) selenide', density: 8.5 },
        ]
    ],
    [
        'ThSi2', [
            { symbol: 'ThSi2', name: 'Thorium silicide', density: 7.9 },
        ]
    ],
    [
        'ThSiO4', [
            { symbol: 'ThSiO4', name: 'Thorite', density: 6.7 },
        ]
    ],
    [
        'Ti', [
            { symbol: 'Ti', name: 'Titanium', density: 4.506 },
        ]
    ],
    [
        'Ti(C5H5)2Cl2', [
            { symbol: 'Ti(C5H5)2Cl2', name: 'Titanocene dichloride', density: 1.6 },
        ]
    ],
    [
        'Ti2O3', [
            { symbol: 'Ti2O3', name: 'Titanium(III) oxide', density: 4.486 },
        ]
    ],
    [
        'Ti2S3', [
            { symbol: 'Ti2S3', name: 'Titanium(III)sulfide', density: 3.56 },
        ]
    ],
    [
        'Ti3O5', [
            { symbol: 'Ti3O5', name: 'Titanium(III,IV) oxide', density: 4.24 },
        ]
    ],
    [
        'TiB2', [
            { symbol: 'TiB2', name: 'Titanium boride', density: 4.38 },
        ]
    ],
    [
        'TiBr2', [
            { symbol: 'TiBr2', name: 'Titanium(II) bromide', density: 4.0 },
        ]
    ],
    [
        'TiBr4', [
            { symbol: 'TiBr4', name: 'Titanium(IV) bromide', density: 3.37 },
        ]
    ],
    [
        'TiC', [
            { symbol: 'TiC', name: 'Titanium carbide', density: 4.93 },
        ]
    ],
    [
        'TiCl2', [
            { symbol: 'TiCl2', name: 'Titanium(II) chloride', density: 3.13 },
        ]
    ],
    [
        'TiCl3', [
            { symbol: 'TiCl3', name: 'Titanium(III)chloride', density: 2.64 },
        ]
    ],
    [
        'TiCl4', [
            { symbol: 'TiCl4', name: 'Titanium(IV)chloride', density: 1.73 },
        ]
    ],
    [
        'TiF3', [
            { symbol: 'TiF3', name: 'Titanium(III)fluoride', density: 2.98 },
        ]
    ],
    [
        'TiF4', [
            { symbol: 'TiF4', name: 'Titanium(IV)fluoride', density: 2.798 },
        ]
    ],
    [
        'TiH2', [
            { symbol: 'TiH2', name: 'Titanium hydride', density: 3.75 },
        ]
    ],
    [
        'TiI2', [
            { symbol: 'TiI2', name: 'Titanium(II) iodide', density: 5.02 },
        ]
    ],
    [
        'TiI4', [
            { symbol: 'TiI4', name: 'Titanium(IV) iodide', density: 4.3 },
        ]
    ],
    [
        'TiN', [
            { symbol: 'TiN', name: 'Titanium nitride', density: 5.21 },
        ]
    ],
    [
        'TiO', [
            { symbol: 'TiO', name: 'Titanium(II) oxide', density: 4.95 },
        ]
    ],
    [
        'TiO2', [
            { symbol: 'TiO2', name: 'Anatase', density: 3.9 },
            { symbol: 'TiO2', name: 'Brookite', density: 4.17 },
            { symbol: 'TiO2', name: 'Rutile', density: 4.23 },
        ]
    ],
    [
        'TiOSO4·H2O', [
            { symbol: 'TiOSO4·H2O', name: 'Titanium(IV) oxysulfate monohydrate', density: 2.71 },
        ]
    ],
    [
        'TiP', [
            { symbol: 'TiP', name: 'Titanium phosphide', density: 4.08 },
        ]
    ],
    [
        'TiS', [
            { symbol: 'TiS', name: 'Titanium(II) sulfide', density: 3.85 },
        ]
    ],
    [
        'TiS2', [
            { symbol: 'TiS2', name: 'Titanium(IV)sulfide', density: 3.37 },
        ]
    ],
    [
        'TiSi2', [
            { symbol: 'TiSi2', name: 'Titanium silicide', density: 4.0 },
        ]
    ],
    [
        'Tl', [
            { symbol: 'Tl', name: 'Thallium', density: 11.8 },
        ]
    ],
    [
        'Tl2C2O4', [
            { symbol: 'Tl2C2O4', name: 'Thallium(I) oxalate', density: 6.31 },
        ]
    ],
    [
        'Tl2CO3', [
            { symbol: 'Tl2CO3', name: 'Thallium(I) carbonate', density: 7.11 },
        ]
    ],
    [
        'Tl2O', [
            { symbol: 'Tl2O', name: 'Thallium(I) oxide', density: 9.52 },
        ]
    ],
    [
        'Tl2O3', [
            { symbol: 'Tl2O3', name: 'Thallium(III) oxide', density: 10.2 },
        ]
    ],
    [
        'Tl2S', [
            { symbol: 'Tl2S', name: 'Thallium(I) sulfide', density: 8.39 },
        ]
    ],
    [
        'Tl2SO4', [
            { symbol: 'Tl2SO4', name: 'Thallium(I) sulfate', density: 6.77 },
        ]
    ],
    [
        'Tl2SeO4', [
            { symbol: 'Tl2SeO4', name: 'Thallium(I) selenate', density: 6.875 },
        ]
    ],
    [
        'TlBr', [
            { symbol: 'TlBr', name: 'Thallium(I) bromide', density: 7.5 },
        ]
    ],
    [
        'TlBr3·4H2O', [
            { symbol: 'TlBr3·4H2O', name: 'Thallium(III) bromide tetrahydrate', density: 3.65 },
        ]
    ],
    [
        'TlC2H3O2', [
            { symbol: 'TlC2H3O2', name: 'Thallium(I) acetate', density: 3.68 },
        ]
    ],
    [
        'TlC2H5O', [
            { symbol: 'TlC2H5O', name: 'Thallium(I) ethanolate', density: 3.49 },
        ]
    ],
    [
        'TlCHO2', [
            { symbol: 'TlCHO2', name: 'Thallium(I) formate', density: 4.97 },
        ]
    ],
    [
        'TlCN', [
            { symbol: 'TlCN', name: 'Thallium(I) cyanide', density: 6.523 },
        ]
    ],
    [
        'TlCl', [
            { symbol: 'TlCl', name: 'Thallium(I) chloride', density: 7.0 },
        ]
    ],
    [
        'TlCl3', [
            { symbol: 'TlCl3', name: 'Thallium(III) chloride', density: 4.7 },
        ]
    ],
    [
        'TlCl3·4H2O', [
            { symbol: 'TlCl3·4H2O', name: 'Thallium(III) chloride tetrahydrate', density: 3.0 },
        ]
    ],
    [
        'TlClO3', [
            { symbol: 'TlClO3', name: 'Thallium(I) chlorate', density: 5.5 },
        ]
    ],
    [
        'TlClO4', [
            { symbol: 'TlClO4', name: 'Thallium(I) perchlorate', density: 4.89 },
        ]
    ],
    [
        'TlF', [
            { symbol: 'TlF', name: 'Thallium(I) fluoride', density: 8.36 },
        ]
    ],
    [
        'TlF3', [
            { symbol: 'TlF3', name: 'Thallium(III) fluoride', density: 8.65 },
        ]
    ],
    [
        'TlI', [
            { symbol: 'TlI', name: 'Thallium(I) iodide', density: 7.1 },
        ]
    ],
    [
        'TlNO2', [
            { symbol: 'TlNO2', name: 'Thallium(I) nitrite', density: 5.7 },
        ]
    ],
    [
        'TlNO3', [
            { symbol: 'TlNO3', name: 'Thallium(I) nitrate', density: 5.55 },
        ]
    ],
    [
        'TlOH', [
            { symbol: 'TlOH', name: 'Thallium(I) hydroxide', density: 7.44 },
        ]
    ],
    [
        'TlPF6', [
            { symbol: 'TlPF6', name: 'Thallium(I) hexafluorophosphate', density: 4.6 },
        ]
    ],
    [
        'Tm', [
            { symbol: 'Tm', name: 'Thulium', density: 9.32 },
        ]
    ],
    [
        'Tm2O3', [
            { symbol: 'Tm2O3', name: 'Thulium(III) oxide', density: 8.6 },
        ]
    ],
    [
        'U', [
            { symbol: 'U', name: 'Uranium', density: 19.1 },
        ]
    ],
    [
        'U2C3', [
            { symbol: 'U2C3', name: 'Uranium carbide [U2C3]', density: 12.7 },
        ]
    ],
    [
        'U2N3', [
            { symbol: 'U2N3', name: 'Uranium nitride [U2N3]', density: 11.3 },
        ]
    ],
    [
        'U3O8', [
            { symbol: 'U3O8', name: 'Uranium(V,VI) oxide', density: 8.38 },
        ]
    ],
    [
        'U4O9', [
            { symbol: 'U4O9', name: 'Uranium(IV,V) oxide', density: 11.2 },
        ]
    ],
    [
        'UB2', [
            { symbol: 'UB2', name: 'Uranium boride [UB2]', density: 12.7 },
        ]
    ],
    [
        'UB4', [
            { symbol: 'UB4', name: 'Uranium boride [UB4]', density: 9.32 },
        ]
    ],
    [
        'UC2', [
            { symbol: 'UC2', name: 'Uranium carbide [UC2]', density: 11.3 },
        ]
    ],
    [
        'UCl3', [
            { symbol: 'UCl3', name: 'Uranium(III) chloride', density: 5.51 },
        ]
    ],
    [
        'UCl4', [
            { symbol: 'UCl4', name: 'Uranium(IV) chloride', density: 4.72 },
        ]
    ],
    [
        'UCl6', [
            { symbol: 'UCl6', name: 'Uranium(VI) chloride', density: 3.6 },
        ]
    ],
    [
        'UF3', [
            { symbol: 'UF3', name: 'Uranium(III) fluoride', density: 8.9 },
        ]
    ],
    [
        'UF4', [
            { symbol: 'UF4', name: 'Uranium(IV) fluoride', density: 6.7 },
        ]
    ],
    [
        'UF5', [
            { symbol: 'UF5', name: 'Uranium(V) fluoride', density: 5.81 },
        ]
    ],
    [
        'UF6', [
            { symbol: 'UF6', name: 'Uranium(VI) fluoride', density: 5.09 },
        ]
    ],
    [
        'UH3', [
            { symbol: 'UH3', name: 'Uranium(III) hydride', density: 11.1 },
        ]
    ],
    [
        'UN', [
            { symbol: 'UN', name: 'Uranium nitride', density: 14.3 },
        ]
    ],
    [
        'UO2', [
            { symbol: 'UO2', name: 'Uraninite', density: 11.0 },
        ]
    ],
    [
        'UO2(C2H3O2)2·2H2O', [
            { symbol: 'UO2(C2H3O2)2·2H2O', name: 'Uranyl acetate dihydrate', density: 2.89 },
        ]
    ],
    [
        'UO2(NO3)2·6H2O', [
            { symbol: 'UO2(NO3)2·6H2O', name: 'Uranyl nitrate hexahydrate', density: 2.81 },
        ]
    ],
    [
        'UO2SO4·3H2O', [
            { symbol: 'UO2SO4·3H2O', name: 'Uranyl sulfate trihydrate', density: 3.28 },
        ]
    ],
    [
        'UO3', [
            { symbol: 'UO3', name: 'Uranium(VI) oxide', density: 7.3 },
        ]
    ],
    [
        'UO3·H2O', [
            { symbol: 'UO3·H2O', name: 'Uranium(VI) oxide monohydrate', density: 7.05 },
        ]
    ],
    [
        'V', [
            { symbol: 'V', name: 'Vanadium', density: 6.0 },
        ]
    ],
    [
        'V(CH3COCHCOCH3)3', [
            { symbol: 'V(CH3COCHCOCH3)3', name: 'Vanadium(III) 2,4-pentanedioate', density: 1.0 },
        ]
    ],
    [
        'V2O3', [
            { symbol: 'V2O3', name: 'Vanadium(III) oxide', density: 4.87 },
        ]
    ],
    [
        'V2O5', [
            { symbol: 'V2O5', name: 'Vanadium(V) oxide', density: 3.35 },
        ]
    ],
    [
        'V2S3', [
            { symbol: 'V2S3', name: 'Vanadium(III) sulfide', density: 4.7 },
        ]
    ],
    [
        'V2S5', [
            { symbol: 'V2S5', name: 'Vanadium(V) sulfide', density: 3.0 },
        ]
    ],
    [
        'V3Si', [
            { symbol: 'V3Si', name: 'Vanadium silicide (V3Si)', density: 5.7 },
        ]
    ],
    [
        'VBr2', [
            { symbol: 'VBr2', name: 'Vanadium(II) bromide', density: 4.58 },
        ]
    ],
    [
        'VBr3', [
            { symbol: 'VBr3', name: 'Vanadium(III) bromide', density: 4.0 },
        ]
    ],
    [
        'VC', [
            { symbol: 'VC', name: 'Vanadium carbide (VC)', density: 5.77 },
        ]
    ],
    [
        'VCl2', [
            { symbol: 'VCl2', name: 'Vanadium(II) chloride', density: 3.23 },
        ]
    ],
    [
        'VCl3', [
            { symbol: 'VCl3', name: 'Vanadium(III) chloride', density: 3.0 },
        ]
    ],
    [
        'VCl4', [
            { symbol: 'VCl4', name: 'Vanadium(IV) chloride', density: 1.816 },
        ]
    ],
    [
        'VF3', [
            { symbol: 'VF3', name: 'Vanadium(III) fluoride', density: 3.363 },
        ]
    ],
    [
        'VF4', [
            { symbol: 'VF4', name: 'Vanadium(IV) fluoride', density: 3.15 },
        ]
    ],
    [
        'VF5', [
            { symbol: 'VF5', name: 'Vanadium(V) fluoride', density: 2.5 },
        ]
    ],
    [
        'VI2', [
            { symbol: 'VI2', name: 'Vanadium(II) iodide', density: 5.44 },
        ]
    ],
    [
        'VI3', [
            { symbol: 'VI3', name: 'Vanadium(III) iodide', density: 5.21 },
        ]
    ],
    [
        'VN', [
            { symbol: 'VN', name: 'Vanadium nitride', density: 6.13 },
        ]
    ],
    [
        'VO', [
            { symbol: 'VO', name: 'Vanadium(II) oxide', density: 5.758 },
        ]
    ],
    [
        'VO2', [
            { symbol: 'VO2', name: 'Vanadium(IV) oxide', density: 4.339 },
        ]
    ],
    [
        'VOCl', [
            { symbol: 'VOCl', name: 'Vanadyl chloride', density: 1.72 },
        ]
    ],
    [
        'VOCl2', [
            { symbol: 'VOCl2', name: 'Vanadyl dichloride', density: 2.88 },
        ]
    ],
    [
        'VOCl3', [
            { symbol: 'VOCl3', name: 'Vanadyl trichloride', density: 1.829 },
        ]
    ],
    [
        'VOF3', [
            { symbol: 'VOF3', name: 'Vanadyl trifluoride', density: 2.459 },
        ]
    ],
    [
        'VOSeO3·H2O', [
            { symbol: 'VOSeO3·H2O', name: 'Vanadyl selenite hydrate', density: 3.506 },
        ]
    ],
    [
        'VSi2', [
            { symbol: 'VSi2', name: 'Vanadium silicide [VSi2]', density: 4.42 },
        ]
    ],
    [
        'W', [
            { symbol: 'W', name: 'Tungsten', density: 19.3 },
        ]
    ],
    [
        'W(CO)6', [
            { symbol: 'W(CO)6', name: 'Tungsten carbonyl', density: 2.65 },
        ]
    ],
    [
        'W2B', [
            { symbol: 'W2B', name: 'Tungsten boride (W2B)', density: 16.0 },
        ]
    ],
    [
        'W2B5', [
            { symbol: 'W2B5', name: 'Tungsten boride [W2B5]', density: 11.0 },
        ]
    ],
    [
        'W2C', [
            { symbol: 'W2C', name: 'Tungsten carbide (W2C)', density: 14.8 },
        ]
    ],
    [
        'W2N', [
            { symbol: 'W2N', name: 'Tungsten nitride (W2N)', density: 17.8 },
        ]
    ],
    [
        'W5Si3', [
            { symbol: 'W5Si3', name: 'Tungsten silicide [W5Si3]', density: 14.4 },
        ]
    ],
    [
        'WB', [
            { symbol: 'WB', name: 'Tungsten boride', density: 15.2 },
        ]
    ],
    [
        'WBr6', [
            { symbol: 'WBr6', name: 'Tungsten(VI) bromide', density: 6.9 },
        ]
    ],
    [
        'WC', [
            { symbol: 'WC', name: 'Tungsten carbide', density: 15.6 },
        ]
    ],
    [
        'WCl2', [
            { symbol: 'WCl2', name: 'Tungsten(II) chloride', density: 5.44 },
        ]
    ],
    [
        'WCl4', [
            { symbol: 'WCl4', name: 'Tungsten(IV) chloride', density: 4.62 },
        ]
    ],
    [
        'WCl5', [
            { symbol: 'WCl5', name: 'Tungsten(V) chloride', density: 3.88 },
        ]
    ],
    [
        'WCl6', [
            { symbol: 'WCl6', name: 'Tungsten(VI) chloride', density: 3.52 },
        ]
    ],
    [
        'WF6', [
            { symbol: 'WF6', name: 'Tungsten(VI) fluoride', density: 3.44 },
        ]
    ],
    [
        'WI2', [
            { symbol: 'WI2', name: 'Tungsten(II) iodide', density: 6.79 },
        ]
    ],
    [
        'WN2', [
            { symbol: 'WN2', name: 'Tungsten nitride [WN2]', density: 7.7 },
        ]
    ],
    [
        'WO2', [
            { symbol: 'WO2', name: 'Tungsten(IV) oxide', density: 10.8 },
        ]
    ],
    [
        'WO2Cl2', [
            { symbol: 'WO2Cl2', name: 'Tungsten(VI) dioxydichloride', density: 4.67 },
        ]
    ],
    [
        'WO2I2', [
            { symbol: 'WO2I2', name: 'Tungsten(VI) dioxydiiodide', density: 6.39 },
        ]
    ],
    [
        'WO3', [
            { symbol: 'WO3', name: 'Tungsten(VI) oxide', density: 7.2 },
        ]
    ],
    [
        'WOBr3', [
            { symbol: 'WOBr3', name: 'Tungsten(V) oxytribromide', density: 5.9 },
        ]
    ],
    [
        'WOBr4', [
            { symbol: 'WOBr4', name: 'Tungsten(VI) oxytetrabromide', density: 5.5 },
        ]
    ],
    [
        'WOCl3', [
            { symbol: 'WOCl3', name: 'Tungsten(V) oxytrichloride', density: 4.6 },
        ]
    ],
    [
        'WOCl4', [
            { symbol: 'WOCl4', name: 'Tungsten(VI) oxytetrachloride', density: 11.92 },
        ]
    ],
    [
        'WOF4', [
            { symbol: 'WOF4', name: 'Tungsten(VI) oxytetrafluoride', density: 5.07 },
        ]
    ],
    [
        'WS2', [
            { symbol: 'WS2', name: 'Tungsten(IV) sulfide', density: 7.6 },
        ]
    ],
    [
        'WSe2', [
            { symbol: 'WSe2', name: 'Tungsten(IV) selenide', density: 9.2 },
        ]
    ],
    [
        'WSi2', [
            { symbol: 'WSi2', name: 'Tungsten silicide [WSi2]', density: 9.3 },
        ]
    ],
    [
        'WTe2', [
            { symbol: 'WTe2', name: 'Tungsten(IV) telluride', density: 9.43 },
        ]
    ],
    [
        'Xe2F3AsF6', [
            { symbol: 'Xe2F3AsF6', name: 'Xenon fluoride hexafluoroarsenate', density: 3.62 },
        ]
    ],
    [
        'XeF2', [
            { symbol: 'XeF2', name: 'Xenon difluoride', density: 4.32 },
        ]
    ],
    [
        'XeF3Sb2F11', [
            { symbol: 'XeF3Sb2F11', name: 'Xenon trifluoride  undecafluoroantimonate', density: 3.98 },
        ]
    ],
    [
        'XeF3SbF6', [
            { symbol: 'XeF3SbF6', name: 'Xenon fluoride  hexafluoroantimonate', density: 3.92 },
        ]
    ],
    [
        'XeF4', [
            { symbol: 'XeF4', name: 'Xenon tetrafluoride', density: 4.04 },
        ]
    ],
    [
        'XeF5AsF6', [
            { symbol: 'XeF5AsF6', name: 'Xenon pentafluoride hexafluoroarsenate', density: 3.51 },
        ]
    ],
    [
        'XeF5RuF6', [
            { symbol: 'XeF5RuF6', name: 'Xenon pentafluoride hexafluororuthenate', density: 3.79 },
        ]
    ],
    [
        'XeF6', [
            { symbol: 'XeF6', name: 'Xenon hexafluoride', density: 3.56 },
        ]
    ],
    [
        'XeFRuF6', [
            { symbol: 'XeFRuF6', name: 'Xenon fluoride hexafluororuthenate', density: 3.78 },
        ]
    ],
    [
        'XeFSb2F11', [
            { symbol: 'XeFSb2F11', name: 'Xenon fluoride undecafluoroantimonate', density: 3.69 },
        ]
    ],
    [
        'XeO2F2', [
            { symbol: 'XeO2F2', name: 'Xenon dioxydifluoride', density: 4.1 },
        ]
    ],
    [
        'XeO3', [
            { symbol: 'XeO3', name: 'Xenon trioxide', density: 4.55 },
        ]
    ],
    [
        'XeOF4', [
            { symbol: 'XeOF4', name: 'Xenon oxytetrafluoride', density: 3.17 },
        ]
    ],
    [
        'YPO4', [
            { symbol: 'YPO4', name: 'Xenotime', density: 4.8 },
        ]
    ],
    [
        'Yb', [
            { symbol: 'Yb', name: 'Ytterbium', density: 6.9 },
        ]
    ],
    [
        'Yb(C2H3O2)3·4H2O', [
            { symbol: 'Yb(C2H3O2)3·4H2O', name: 'Ytterbium(III) acetate tetrahydrate', density: 2.09 },
        ]
    ],
    [
        'YbCl2', [
            { symbol: 'YbCl2', name: 'Ytterbium(II) chloride', density: 5.27 },
        ]
    ],
    [
        'YbCl3·6H2O', [
            { symbol: 'YbCl3·6H2O', name: 'Ytterbium(III) chloride hexahydrate', density: 2.57 },
        ]
    ],
    [
        'YbF3', [
            { symbol: 'YbF3', name: 'Ytterbium(III) fluoride', density: 8.2 },
        ]
    ],
    [
        'Zn(C18H35O2)2', [
            { symbol: 'Zn(C18H35O2)2', name: 'Zinc stearate', density: 1.095 },
        ]
    ],
    [
        'Zn(ClO4)2·6H2O', [
            { symbol: 'Zn(ClO4)2·6H2O', name: 'Zinc perchlorate hexahydrate', density: 2.2 },
        ]
    ],
    [
        'Zn(MnO4)2·6H2O', [
            { symbol: 'Zn(MnO4)2·6H2O', name: 'Zinc permanganate hexahydrate', density: 2.45 },
        ]
    ],
    [
        'Zn2P2O7', [
            { symbol: 'Zn2P2O7', name: 'Zinc pyrophosphate', density: 3.75 },
        ]
    ],
    [
        'Zn3(PO4)2', [
            { symbol: 'Zn3(PO4)2', name: 'Zinc phosphate', density: 4.0 },
        ]
    ],
    [
        'Zn3(PO4)2·4H2O', [
            { symbol: 'Zn3(PO4)2·4H2O', name: 'Zinc phosphate tetrahydrate', density: 3.04 },
        ]
    ],
    [
        'Zn3P2', [
            { symbol: 'Zn3P2', name: 'Zinc phosphide [Zn3P2]', density: 4.55 },
        ]
    ],
    [
        'Zn4(OH)2Si2O7·H2O', [
            { symbol: 'Zn4(OH)2Si2O7·H2O', name: 'Hemimorphite', density: 3.45 },
        ]
    ],
    [
        'ZnAl2O4', [
            { symbol: 'ZnAl2O4', name: 'Gahnite', density: 4.62 },
        ]
    ],
    [
        'ZnCO3', [
            { symbol: 'ZnCO3', name: 'Smithsonite', density: 4.4 },
        ]
    ],
    [
        'ZnFe2O4', [
            { symbol: 'ZnFe2O4', name: 'Franklinite', density: 5.21 },
        ]
    ],
    [
        'ZnO', [
            { symbol: 'ZnO', name: 'Zincite', density: 5.6 },
        ]
    ],
    [
        'ZnO2', [
            { symbol: 'ZnO2', name: 'Zinc peroxide', density: 1.57 },
        ]
    ],
    [
        'ZnS', [
            { symbol: 'ZnS', name: 'Sphalerite', density: 4.04 },
            { symbol: 'ZnS', name: 'Wurtzite', density: 4.09 },
        ]
    ],
    [
        'ZnSO4', [
            { symbol: 'ZnSO4', name: 'Zinc sulfate', density: 3.8 },
        ]
    ],
    [
        'ZnSO4·7H2O', [
            { symbol: 'ZnSO4·7H2O', name: 'Zinc sulfate heptahydrate', density: 1.97 },
        ]
    ],
    [
        'ZnSO4·H2O', [
            { symbol: 'ZnSO4·H2O', name: 'Zinc sulfate monohydrate', density: 3.2 },
        ]
    ],
    [
        'ZnSe', [
            { symbol: 'ZnSe', name: 'Zinc selenide', density: 5.65 },
        ]
    ],
    [
        'ZnSeO4·5H2O', [
            { symbol: 'ZnSeO4·5H2O', name: 'Zinc selenate pentahydrate', density: 2.59 },
        ]
    ],
    [
        'ZnTe', [
            { symbol: 'ZnTe', name: 'Zinc telluride', density: 5.9 },
        ]
    ],
    [
        'Zr', [
            { symbol: 'Zr', name: 'Zirconium', density: 6.52 },
        ]
    ],
    [
        'Zr(OH)4', [
            { symbol: 'Zr(OH)4', name: 'Zirconium(IV) hydroxide', density: 3.25 },
        ]
    ],
    [
        'Zr(SO4)2', [
            { symbol: 'Zr(SO4)2', name: 'Zirconium(IV) sulfate', density: 3.22 },
        ]
    ],
    [
        'Zr(SO4)2·4H2O', [
            { symbol: 'Zr(SO4)2·4H2O', name: 'Zirconium(IV) sulfate tetrahydrate', density: 2.8 },
        ]
    ],
    [
        'ZrB2', [
            { symbol: 'ZrB2', name: 'Zirconium boride', density: 6.17 },
        ]
    ],
    [
        'ZrBr4', [
            { symbol: 'ZrBr4', name: 'Zirconium(IV) bromide', density: 3.98 },
        ]
    ],
    [
        'ZrC', [
            { symbol: 'ZrC', name: 'Zirconium carbide', density: 6.73 },
        ]
    ],
    [
        'ZrCl2', [
            { symbol: 'ZrCl2', name: 'Zirconium(II) chloride', density: 3.16 },
        ]
    ],
    [
        'ZrCl3', [
            { symbol: 'ZrCl3', name: 'Zirconium(III) chloride', density: 3.05 },
        ]
    ],
    [
        'ZrCl4', [
            { symbol: 'ZrCl4', name: 'Zirconium(IV) chloride', density: 2.8 },
        ]
    ],
    [
        'ZrF3', [
            { symbol: 'ZrF3', name: 'Zirconium(III) fluoride', density: 4.26 },
        ]
    ],
    [
        'ZrF4', [
            { symbol: 'ZrF4', name: 'Zirconium(IV) fluoride', density: 4.43 },
        ]
    ],
    [
        'ZrH2', [
            { symbol: 'ZrH2', name: 'Zirconium(II) hydride', density: 5.6 },
        ]
    ],
    [
        'ZrI4', [
            { symbol: 'ZrI4', name: 'Zirconium(IV) iodide', density: 4.85 },
        ]
    ],
    [
        'ZrN', [
            { symbol: 'ZrN', name: 'Zirconium nitride', density: 7.09 },
        ]
    ],
    [
        'ZrO2', [
            { symbol: 'ZrO2', name: 'Baddeleyite', density: 5.7 },
        ]
    ],
    [
        'ZrOCl2·8H2O', [
            { symbol: 'ZrOCl2·8H2O', name: 'Zirconyl chloride octahydrate', density: 1.91 },
        ]
    ],
    [
        'ZrP2', [
            { symbol: 'ZrP2', name: 'Zirconium phosphide', density: 5.1 },
        ]
    ],
    [
        'ZrS2', [
            { symbol: 'ZrS2', name: 'Zirconium(IV) sulfide', density: 3.87 },
        ]
    ],
    [
        'ZrSi2', [
            { symbol: 'ZrSi2', name: 'Zirconium silicide', density: 4.88 },
        ]
    ],
    [
        'ZrSiO4', [
            { symbol: 'ZrSiO4', name: 'Zircon', density: 4.6 },
        ]
    ],
]);
export { Material, densities };
