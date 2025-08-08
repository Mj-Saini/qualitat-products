export const bullList = [
  {
    id: "7HO14326",
    registration_number: "HO840003141274941",
    name: "NEBULUS‑PP",
    full_name: "HOLYLAND NEBULUS‑PP",
    price: 0, // price not present in image
    category: "HF",
    pedigree: [
      "RI-VAL-RE POWER TOOL-P-ET",
      "HOLYLAND ERASER SUNDROP-ET VG-85",
      "KERNDTWAY ERASER P-ET",
      "POWER TOOL-P X ERASER P X RELIEF P"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2441 },
          { label: "NM$", value: 516 },
          { label: "CM$", value: 0 }, // not found
          { label: "Feed_Efficiency", value: 193 },
          { label: "Feed_Saved", value: 154 },
          { label: "HHP$", value: 529 },
          { label: "DWP$", value: 521 },
          { label: "WT$", value: 45 }, // assuming from production PTA Protein (lbs)
          { label: "CW$", value: -50 }
        ],
        fertilities: [
          { label: "Fertility Index", value: -1.1 },
          { label: "DPR", value: -1.6 },
          { label: "HCR", value: 0.7 },
          { label: "CCR", value: -1.4 },
          { label: "Reliability", value: 87 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 1.7 },
          { label: "DCE", value: 2.1 },
          { label: "Gestation Length", value: 1.0 },
          { label: "Early First Calving", value: 1.7 },
          { label: "SSB", value: 5.8 },
          { label: "DSB", value: 5.8 },
          { label: "Productive Life", value: 0.5 },
          { label: "Livability", value: -1.7 },
          { label: "Residual Feed Intake", value: -54 },
          { label: "SCS", value: 3.07 },
          { label: "Milking Speed", value: 103 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0 },
          { label: "DPR", value: 0 },
          { label: "HCR", value: 0 },
          { label: "CCR", value: 0 },
          { label: "Reliability", value: 78 },
          { label: "SCR", value: 2.0 },
          { label: "Reliability", value: 96 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1153 },
          { label: "PTA Protein (lbs)", value: 45 },
          { label: "PTA Protein (%)", value: 0.03 },
          { label: "PTA Fat (lbs)", value: 6 },
          { label: "PTA Fat (%)", value: 0.07 },
          { label: "Production Reliability", value: 96 },
          { label: "Type Reliability", value: 81 }
        ],
        fertilities: [] // no fertility metrics in this section
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 0.96, opposite: "tall" },
      { label: "Strength", value: "frail", score: -0.30, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.10, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 1.13, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.84, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 2.57, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.70, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: -1.43, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: -0.15, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: -0.30, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 0.65, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.27, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 0.83, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.03, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 0.73, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: -1.26, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: -0.14, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.77, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 94, rel: 53 },
        cdcb: { value: -0.8, rel: 77 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 94, rel: 53 },
        cdcb: { value: -0.5, rel: 72 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 101, rel: 51 },
        cdcb: { value: 0.5, rel: 71 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 103, rel: 43 },
        cdcb: { value: 0, rel: 61 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 106, rel: 45 },
        cdcb: { value: 1.4, rel: 70 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 102, rel: 43 },
        cdcb: { value: 0.1, rel: 76 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 103, rel: 49 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 96, rel: 44 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 100, rel: 37 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 97, rel: 50 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 97, rel: 24 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: {},
        cdcb: { value: -0.3, rel: 64 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 93, rel: 39 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 95, rel: 39 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 97, rel: 45 },
        cdcb: {}
      }
    ],

    genetics: [
      "birth_date : 2017-04-04",
      "beta_casein : A1A2",
      "kappa_casein : BE",
      "EFI: 9.2%",
      "aAa: 345"
    ]
  },
  {
    id: "7HO14694",
    registration_number: "HO840003132923887",
    name: "BANJO‑P",
    full_name: "ENGLAND‑AMMON BANJO‑P‑ET",
    price: 0,
    category: "HF",
    pedigree: [
      "S-S-I FERDINAND BIGHIT P-ET",
      "ENGLAND-AMMON BARB12735-ET EX-90",
      "OCD JABIRHEISENBERG-ET",
      "BIGHIT P X HEISENBERG X MASSEY"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2928 },
          { label: "NM$", value: 740 },
          { label: "CM$", value: 356 },
          { label: "Feed_Efficiency", value: 228 },
          { label: "Feed_Saved", value: 71 },
          { label: "HHP$", value: 971 },
          { label: "DWP$", value: 709 },
          { label: "WT$", value: 29 },
          { label: "CW$", value: 61 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 2.0 },
          { label: "DPR", value: 1.3 },
          { label: "HCR", value: 1.3 },
          { label: "CCR", value: 2.4 },
          { label: "Reliability", value: 90 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.3 },
          { label: "DCE", value: 2.0 },
          { label: "Gestation Length", value: 0.3 },
          { label: "Early First Calving", value: -0.3 },
          { label: "SSB", value: 6.3 },
          { label: "DSB", value: 4.8 },
          { label: "Productive Life", value: 4.6 },
          { label: "Livability", value: 1.5 },
          { label: "Residual Feed Intake", value: -93 },
          { label: "SCS", value: 2.85 },
          { label: "Milking Speed", value: 101 }
        ],
        fertilities: [
          { label: "SCR", value: 2.0 },
          { label: "Reliability", value: 96 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1362 },
          { label: "PTA Protein (lbs)", value: 67 },
          { label: "PTA Protein (%)", value: 0.09 },
          { label: "PTA Fat (lbs)", value: 84 },
          { label: "PTA Fat (%)", value: 0.12 },
          { label: "Production Reliability", value: 96 },
          { label: "Type Reliability", value: 95 }
        ],
        fertilities: []
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 0.74, opposite: "tall" },
      { label: "Strength", value: "frail", score: 1.41, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.48, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 1.82, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: -0.02, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 0.93, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.81, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 1.91, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 2.00, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 1.36, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 2.36, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.60, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 1.03, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.42, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.92, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: -0.51, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: -0.79, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.39, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 96, rel: 55 },
        cdcb: { value: 0, rel: 80 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 98, rel: 55 },
        cdcb: { value: -0.5, rel: 77 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 100, rel: 52 },
        cdcb: { value: 0.5, rel: 74 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 103, rel: 56 },
        cdcb: { value: 0.1, rel: 64 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 106, rel: 45 },
        cdcb: { value: 1.9, rel: 73 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 102, rel: 45 },
        cdcb: { value: 0.4, rel: 85 }
      }
    ],

    genetics: [
      "birth_date : 2018-01-26",
      "beta_casein : A2A2",
      "kappa_casein : BB",
      "EFI: 9.2%",
      "aAa: 243"
    ]
  },
  {
    id: "7HO14859",
    registration_number: "HO840003147223744",
    name: "MAXIMUS",
    full_name: "RMD-DOTTERER SSI MAXIMUS-ET",
    price: 0,
    category: "HF",
    pedigree: [
      "PROGENESIS MODEST ROLAN 512",
      "PINE-TREE SSI 9639 3412-ET GP-83",
      "SYRYCZUK SILVR BLOWTORCH-ET",
      "ROLAN X BLOWTORCH X YODER"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2793 },
          { label: "NM$", value: 905 },
          { label: "CM$", value: 925 },
          { label: "Feed_Efficiency", value: 265 },
          { label: "Feed_Saved", value: 107 },
          { label: "HHP$", value: 660 },
          { label: "DWP$", value: 875 },
          { label: "WT$", value: 40 },
          { label: "CW$", value: -34 }
        ],
        fertilities: [
          { label: "Fertility Index", value: -1.198 },
          { label: "DPR", value: -1.998 },
          { label: "HCR", value: 3.197 },
          { label: "CCR", value: -0.397 },
          { label: "Reliability", value: 97 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 1.9 },
          { label: "DCE", value: 1.7 },
          { label: "Gestation Length", value: -0.89 },
          { label: "Early First Calving", value: 4.5 },
          { label: "SSB", value: 5.3 },
          { label: "DSB", value: 3.8 },
          { label: "Productive Life", value: 3.5 },
          { label: "Livability", value: 0.9 },
          { label: "Residual Feed Intake", value: 24 },
          { label: "SCS", value: 3.00 },
          { label: "Milking Speed", value: 104 }
        ],
        fertilities: [
          { label: "SCR", value: 1.0 },
          { label: "Reliability", value: 96 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1383 },
          { label: "PTA Protein (lbs)", value: 55 },
          { label: "PTA Protein (%)", value: 0.04 },
          { label: "PTA Fat (lbs)", value: 80 },
          { label: "PTA Fat (%)", value: 0.04 },
          { label: "Production Reliability", value: 99 },
          { label: "Type Reliability", value: 98 }
        ],
        fertilities: []
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: -0.22, opposite: "tall" },
      { label: "Strength", value: "frail", score: -2.36, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: -1.41, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 2.05, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.00, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 1.16, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.74, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.00, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: -0.18, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: -0.15, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 1.04, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 3.36, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 2.36, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.10, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 0.10, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 1.23, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 1.30, opposite: "close" },
      { label: "Teat Length", value: "short", score: -0.24, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 95, rel: 92 },
        cdcb: { value: -3, rel: 95 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 93, rel: 93 },
        cdcb: { value: -0.1, rel: 96 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 92, rel: 93 },
        cdcb: { value: 2.3, rel: 96 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 99, rel: 90 },
        cdcb: { value: 0.2, rel: 87 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 100, rel: 90 },
        cdcb: { value: 1, rel: 93 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 101, rel: 86 },
        cdcb: { value: 1, rel: 97 }
      }
    ],

    genetics: [
      "birth_date : 2018-08-09",
      "beta_casein : A1A2",
      "kappa_casein : AE",
      "EFI: 10.4%",
      "aAa: 234"
    ]
  },
  {
    id: "7HO14951", // ID not visible in image
    registration_number: "HO840003150910853", // Registration number not visible in image
    name: "STANNIS",
    full_name: "LARS-ACRES S-S-I STANNIS-ET",
    price: 0, // price not present in image
    category: "HF",
    pedigree: [
      "S-S-I OUTSIDERS NUGENT-ET",
      "S-S-IIA 11399 2001-ET 52x90",
      "MELARRY JOSUPER FRAZZLED-ET",
      "NUGENT X FRAZZLED X MONTEREY"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2682 },
          { label: "NM$", value: 722 },
          { label: "CM$", value: 742 },
          { label: "Feed_Efficiency", value: 166 },
          { label: "Feed_Saved", value: 158 },
          { label: "HHP$", value: 833 },
          { label: "DWP$", value: 878 },
          { label: "WT$", value: 175 },
          { label: "CW$", value: 1 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0.8 },
          { label: "DPR", value: -1.0 },
          { label: "HCR", value: 2.7 },
          { label: "CCR", value: 1.1 },
          { label: "Reliability", value: 93 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 1.9 },
          { label: "DCE", value: 2.3 },
          { label: "Gestation Length", value: 0.9 },
          { label: "Early First Calving", value: 3.4 },
          { label: "SSB", value: 4.7 },
          { label: "DSB", value: 5.3 },
          { label: "Productive Life", value: 5.2 },
          { label: "Livability", value: 0.5 },
          { label: "Residual Feed Intake", value: -130 },
          { label: "SCS", value: 2.81 },
          { label: "Milking Speed", value: 100 }
        ],
        fertilities: [
          // SCR data not visible in image
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 652 },
          { label: "PTA Protein (lbs)", value: 47 },
          { label: "PTA Protein (%)", value: 0.10 },
          { label: "PTA Fat (lbs)", value: 43 },
          { label: "PTA Fat (%)", value: 0.07 },
          { label: "Production Reliability", value: 99 },
          { label: "Type Reliability", value: NaN } // Not visible in image
        ],
        fertilities: [] // no fertility metrics in this section
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: -0.60, opposite: "tall" },
      { label: "Strength", value: "frail", score: -0.34, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: -0.97, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: -0.63, opposite: "deep ribbed" },
      { label: "Rump Width", value: "narrow", score: -0.15, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.17, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.16, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.00, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.20, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.54, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 1.72, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.72, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 1.40, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.05, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.16, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.25, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.16, opposite: "close" },
      { label: "Teat Length", value: "short", score: -0.81, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 106, rel: 77 },
        cdcb: { value: 3.3, rel: 89 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 106, rel: 84 },
        cdcb: { value: 1.0, rel: 89 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 110, rel: 83 },
        cdcb: { value: 1.6, rel: 89 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 104, rel: 74 },
        cdcb: { value: 0, rel: 71 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 106, rel: 81 },
        cdcb: { value: 2.9, rel: 80 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 108, rel: 76 },
        cdcb: { value: 1, rel: 87 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 105, rel: 74 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 102, rel: 71 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 105, rel: 62 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 108, rel: 81 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 104, rel: 38 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 1.2, rel: 68 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 101, rel: 80 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 104, rel: 85 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 96, rel: 82 },
        cdcb: {}
      }
    ],

  },
  {
    id: "7HO15033",
    registration_number: "HO840003062052322",
    name: "BOLD",
    full_name: "S-S-I BASIC BOLD-ET",
    price: 0, // not shown
    category: "HF",
    pedigree: [
      "S-S-I ROCKETFIRE 5033 8223-ET",
      "BLUMENFELD FRAZZLD BASIC-ET",
      "S-S-I 1JOSDPR ROCKETFIRE-ET",
      "BASIC X ROCKETFIRE X DAMARIS"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "TPI", value: 2607 },
          { label: "NM$", value: 793 },
          { label: "CM$", value: 793 },
          { label: "Feed_Efficiency", value: 167 },
          { label: "Feed_Saved", value: 358 },
          { label: "HHP$", value: 803 },
          { label: "DWP$", value: 880 },
          { label: "WT$", value: 113 },
          { label: "CW$", value: 28 }
        ],
        fertilities: [
          { label: "Fertility Index", value: -2.4 },
          { label: "DPR", value: -3.1 },
          { label: "HCR", value: -1.4 },
          { label: "CCR", value: -3.2 },
          { label: "Reliability", value: NaN }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.1 },
          { label: "DCE", value: 2.3 },
          { label: "Gestation Length", value: 0.7 },
          { label: "Early First Calving", value: 4.8 },
          { label: "SSB", value: 4.0 },
          { label: "DSB", value: 4.0 },
          { label: "Productive Life", value: 6.9 },
          { label: "Livability", value: 2.4 },
          { label: "Residual Feed Intake", value: 201 },
          { label: "SCS", value: 2.59 },
          { label: "Milking Speed", value: 99 }
        ],
        fertilities: [
          { label: "SCR", value: NaN }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1396 },
          { label: "PTA Protein (lbs)", value: 6 },
          { label: "PTA Protein (%)", value: -0.05 },
          { label: "PTA Fat (lbs)", value: 47 },
          { label: "PTA Fat (%)", value: 0.02 },
          { label: "Production Reliability", value: 99 },
          { label: "Type Reliability", value: 95 }
        ],
        fertilities: []
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: -0.20, opposite: "tall" },
      { label: "Strength", value: "frail", score: -0.63, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: -0.89, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.55, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: -1.21, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.19, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.64, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: -0.15, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.33, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.49, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 1.36, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 2.75, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 2.08, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.64, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 0.86, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: -1.66, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: -1.09, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.12, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 97, rel: 88 },
        cdcb: { value: 4.9, rel: 89 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 101, rel: 90 },
        cdcb: { value: 0.3, rel: 90 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 98, rel: 91 },
        cdcb: { value: 1.0, rel: 90 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 101, rel: 91 },
        cdcb: { value: 0.0, rel: 89 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 103, rel: 83 },
        cdcb: { value: 3.5, rel: 84 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 107, rel: 83 },
        cdcb: { value: 1.1, rel: 86 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 103, rel: 83 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 103, rel: 83 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 100, rel: 85 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 105, rel: 80 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 102, rel: 89 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 1.4, rel: 74 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 103, rel: 89 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 101, rel: 89 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 96, rel: 88 },
        cdcb: {}
      }
    ]
  },
  {
    id: "7HO15099",
    registration_number: "HO840003203293228",
    name: "RELIANT",
    full_name: "T-SPRUCE HUEY RELIANT-ET",
    price: 0,
    category: "HF",
    pedigree: [
      "T-SPRUCE FRAZZLED HUEY-ET",
      "PINE-TREE 9882 ACH1 7591-ET",
      "ABS ACHIEVER-ET",
      "HUEY X ACHIEVER X SUPERSIRE"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "TPI", value: 2824 },
          { label: "NM$", value: 921 },
          { label: "CM$", value: 926 },
          { label: "Feed_Efficiency", value: 225 },
          { label: "Feed_Saved", value: 58 },
          { label: "HHP$", value: 997 },
          { label: "DWP$", value: 910 },
          { label: "WT$", value: -109 },
          { label: "CW$", value: -11 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0.5 },
          { label: "DPR", value: 2.7 },
          { label: "HCR", value: 4.4 },
          { label: "CCR", value: 3.9 },
          { label: "Reliability", value: NaN }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.0 },
          { label: "DCE", value: 2.6 },
          { label: "Gestation Length", value: -0.5 },
          { label: "Early First Calving", value: 5.5 },
          { label: "SSB", value: 4.3 },
          { label: "DSB", value: 4.3 },
          { label: "Productive Life", value: 4.0 },
          { label: "Livability", value: 4.3 },
          { label: "Residual Feed Intake", value: 66 },
          { label: "SCS", value: 3.08 },
          { label: "Milking Speed", value: 104 }
        ],
        fertilities: [
          { label: "SCR", value: NaN }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1632 },
          { label: "PTA Protein (lbs)", value: 62 },
          { label: "PTA Protein (%)", value: 0.04 },
          { label: "PTA Fat (lbs)", value: 110 },
          { label: "PTA Fat (%)", value: 0.17 },
          { label: "Production Reliability", value: 99 },
          { label: "Type Reliability", value: 96 }
        ],
        fertilities: []
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 0.42, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.12, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: -0.33, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.08, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.26, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 0.37, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.55, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.16, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.10, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: -0.01, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 0.87, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 0.75, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 0.29, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 1.15, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: -0.09, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.43, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.75, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.77, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 99, rel: 84 },
        cdcb: { value: 1.1, rel: 94 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 93, rel: 85 },
        cdcb: { value: 0.2, rel: 94 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 105, rel: 85 },
        cdcb: { value: 0.3, rel: 95 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 102, rel: 81 },
        cdcb: { value: NaN, rel: NaN }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 103, rel: 82 },
        cdcb: { value: 2.1, rel: 91 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 107, rel: 79 },
        cdcb: { value: 1.1, rel: 96 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 103, rel: 79 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 105, rel: 79 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 106, rel: 83 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 98, rel: 64 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 102, rel: 49 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 0.3, rel: 71 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 103, rel: 82 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 92, rel: 83 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 93, rel: 84 },
        cdcb: {}
      }
    ]
  },
  {
    id: "7HO15141",
    registration_number: "HO84000302551603",
    name: "AMARI",
    full_name: "S-S-I BG MOOLA AMARI-ET",
    price: 0,
    category: "HF",
    pedigree: [
      "MELLARRY FRAZZLED MOOLA-ET",
      "S-S-I DUKE 11026 11864-ET",
      "S-S-I MONTROSS DUKE-ET",
      "MOOLA X DUKE X YODER"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "TPI", value: 2757 },
          { label: "NM$", value: 705 },
          { label: "CM$", value: 767 },
          { label: "Feed_Efficiency", value: 224 },
          { label: "Feed_Saved", value: -246 },
          { label: "HHP$", value: 903 },
          { label: "DWP$", value: 905 },
          { label: "WT$", value: 107 },
          { label: "CW$", value: 54 }
        ],
        fertilities: [
          { label: "Fertility Index", value: -1.9 },
          { label: "DPR", value: -2.8 },
          { label: "HCR", value: 0.4 },
          { label: "CCR", value: -3.1 },
          { label: "Reliability", value: 82 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.1 },
          { label: "DCE", value: 2.4 },
          { label: "Gestation Length", value: -3.6 },
          { label: "Early First Calving", value: 4.0 },
          { label: "SSB", value: 5.7 },
          { label: "DSB", value: 4.9 },
          { label: "Productive Life", value: 2.9 },
          { label: "Livability", value: 0.8 },
          { label: "Residual Feed Intake", value: 25 },
          { label: "SCS", value: 2.72 },
          { label: "Milking Speed", value: 99 }
        ],
        fertilities: [
          { label: "SCR", value: NaN }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1039 },
          { label: "PTA Protein (lbs)", value: 46 },
          { label: "PTA Protein (%)", value: 0.05 },
          { label: "PTA Fat (lbs)", value: 110 },
          { label: "PTA Fat (%)", value: 0.26 },
          { label: "Production Reliability", value: 92 },
          { label: "Type Reliability", value: 83 }
        ],
        fertilities: []
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 0.52, opposite: "tall" },
      { label: "Strength", value: "frail", score: 1.03, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.16, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.78, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: -1.29, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.16, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.41, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.03, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.27, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.29, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 1.62, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.05, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 1.25, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.36, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: -1.42, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.45, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.64, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.51, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 102, rel: 64 },
        cdcb: { value: 1.9, rel: 75 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 92, rel: 65 },
        cdcb: { value: 0.5, rel: 73 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 100, rel: 63 },
        cdcb: { value: 0.7, rel: 72 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 102, rel: 56 },
        cdcb: { value: 0.1, rel: 62 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 99, rel: 59 },
        cdcb: { value: 2.3, rel: 72 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 100, rel: 58 },
        cdcb: { value: 0.7, rel: 76 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 104, rel: 61 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 97, rel: 54 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 93, rel: 49 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 103, rel: 62 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 103, rel: 41 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 0.8, rel: 65 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 105, rel: 77 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 105, rel: 70 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 102, rel: 67 },
        cdcb: {}
      }
    ]
  },
  {
    id: "7HO15204",
    registration_number: "HO840003150997179",
    name: "MELLENCAMP",
    full_name: "FLY-HIGHER MELLENCAMP-ET",
    price: 0,
    category: "HF",
    pedigree: [
      "S-S-I PR RENEGAD-ET",
      "FLY-HIGHER SAMURI MERIDA-ET",
      "OCD SPRING SAMURI-ET",
      "RENEGADE X SAMURI X SUPERSHOT"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "TPI", value: 2931 },
          { label: "NM$", value: 832 },
          { label: "CM$", value: 887 },
          { label: "Feed_Efficiency", value: 237 },
          { label: "Feed_Saved", value: 90 },
          { label: "HHP$", value: 977 },
          { label: "DWP$", value: 1005 },
          { label: "WT$", value: 58 },
          { label: "CW$", value: -68 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 1.5 },
          { label: "DPR", value: 0.3 },
          { label: "HCR", value: 2.4 },
          { label: "CCR", value: 1.7 },
          { label: "Reliability", value: 89 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.2 },
          { label: "DCE", value: 1.9 },
          { label: "Gestation Length", value: -2.1 },
          { label: "Early First Calving", value: 3.3 },
          { label: "SSB", value: 6.0 },
          { label: "DSB", value: 4.3 },
          { label: "Productive Life", value: 3.7 },
          { label: "Livability", value: -1.3 },
          { label: "Residual Feed Intake", value: 46 },
          { label: "SCS", value: 2.59 },
          { label: "Milking Speed", value: 100 }
        ],
        fertilities: [
          { label: "SCR", value: 0.9 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1453 },
          { label: "PTA Protein (lbs)", value: 72 },
          { label: "PTA Protein (%)", value: 0.10 },
          { label: "PTA Fat (lbs)", value: 72 },
          { label: "PTA Fat (%)", value: 0.06 },
          { label: "Production Reliability", value: 94 },
          { label: "Type Reliability", value: 94 }
        ],
        fertilities: []
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 1.06, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.61, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.61, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 1.17, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.67, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 1.24, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 1.28, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 1.41, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.45, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 1.06, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 2.00, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.46, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 1.28, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 1.11, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.67, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 1.24, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 1.47, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.18, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 94, rel: 63 },
        cdcb: { value: 1, rel: 76 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 101, rel: 63 },
        cdcb: { value: 0.1, rel: 74 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 98, rel: 61 },
        cdcb: { value: 0.1, rel: 73 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 106, rel: 56 },
        cdcb: { value: 0.1, rel: 63 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 109, rel: 55 },
        cdcb: { value: 2.3, rel: 72 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 95, rel: 54 },
        cdcb: { value: 0.6, rel: 76 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 99, rel: 60 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 96, rel: 55 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 90, rel: 50 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 100, rel: 60 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 102, rel: 41 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 0.4, rel: 69 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 87, rel: 54 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 102, rel: 52 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 98, rel: 56 },
        cdcb: {}
      }
    ]
  },
  {
    id: "7HO15323",
    registration_number: "HO840003150687388",
    name: "MILKY",
    full_name: "PINE-TREE LIONEL MILKY-ET",
    price: 0,
    category: "HF",
    pedigree: [
      "T-SPRUCE FRAZZ LIONEL-ET",
      "PINE-TREE 6586 ACHI 7589-ET",
      "ABS ACHIEVER-ET",
      "LIONEL X ACHIEVER X DAMARIS"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "TPI", value: 3110 },
          { label: "NM$", value: 1210 },
          { label: "CM$", value: 1223 },
          { label: "Feed_Efficiency", value: 381 },
          { label: "Feed_Saved", value: 298 },
          { label: "HHP$", value: 1160 },
          { label: "DWP$", value: 1355 },
          { label: "WT$", value: 10 },
          { label: "CW$", value: 10 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0.6 },
          { label: "DPR", value: 2.8 },
          { label: "HCR", value: 2.3 },
          { label: "CCR", value: 2.0 },
          { label: "Reliability", value: 86 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.3 },
          { label: "DCE", value: 2.8 },
          { label: "Gestation Length", value: -1.3 },
          { label: "Early First Calving", value: 2.0 },
          { label: "SSB", value: 5.2 },
          { label: "DSB", value: 5.4 },
          { label: "Productive Life", value: 4.1 },
          { label: "Livability", value: 1.5 },
          { label: "Residual Feed Intake", value: -75 },
          { label: "SCS", value: 2.96 },
          { label: "Milking Speed", value: 104 }
        ],
        fertilities: [
          { label: "SCR", value: 0.9 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1963 },
          { label: "PTA Protein (lbs)", value: 82 },
          { label: "PTA Protein (%)", value: 0.07 },
          { label: "PTA Fat (lbs)", value: 132 },
          { label: "PTA Fat (%)", value: 0.21 },
          { label: "Production Reliability", value: 93 },
          { label: "Type Reliability", value: 91 }
        ],
        fertilities: [
          { label: "PTA Type", value: 0.54 },
          { label: "Udder Composite", value: 1.21 },
          { label: "Feet & Leg Composite", value: 0.01 },
          { label: "Body Weight Composite", value: -1.47 },
          { label: "Dairy Composite", value: 0.33 }
        ]
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: -0.67, opposite: "tall" },
      { label: "Strength", value: "frail", score: -1.05, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: -1.20, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 1.14, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.43, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.13, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.05, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.16, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: -0.35, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: -0.03, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 1.08, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.78, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 2.07, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.59, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 0.18, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.33, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.31, opposite: "close" },
      { label: "Teat Length", value: "short", score: -1.32, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 98, rel: 61 },
        cdcb: { value: 0.6, rel: 76 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 99, rel: 64 },
        cdcb: { value: 0.1, rel: 73 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 100, rel: 62 },
        cdcb: { value: 1.1, rel: 72 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 101, rel: 53 },
        cdcb: { value: 0.3, rel: 65 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 100, rel: 58 },
        cdcb: { value: 0.7, rel: 73 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 103, rel: 55 },
        cdcb: { value: 0.5, rel: 76 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 100, rel: 57 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 101, rel: 53 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 96, rel: 47 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 106, rel: 61 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 106, rel: 33 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 0.6, rel: 65 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 97, rel: 70 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 103, rel: 81 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 97, rel: 64 },
        cdcb: {}
      }
    ]
  },
  {
    id: "7HO15314",
    registration_number: "HO840003150687438",
    name: "SAM-RED",
    full_name: "PINE-TREE MARK SAM-RED-ET",
    price: 0,
    category: "HF",
    pedigree: [
      "WILDER MARK-ET",
      "PARKHURST MODESTY SAMARIE",
      "BACON-HILL PETY MODESTY-ET",
      "MARK *RC X MODESTY X KINGBOY"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "TPI", value: 2619 },
          { label: "NM$", value: 651 },
          { label: "CM$", value: 695 },
          { label: "Feed_Efficiency", value: 178 },
          { label: "Feed_Saved", value: 52 },
          { label: "HHP$", value: 613 },
          { label: "DWP$", value: 588 },
          { label: "WT$", value: -71 },
          { label: "CW$", value: -37 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0.9 },
          { label: "DPR", value: 0.3 },
          { label: "HCR", value: 0.8 },
          { label: "CCR", value: 0.7 },
          { label: "Reliability", value: 77 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 1.4 },
          { label: "DCE", value: 1.4 },
          { label: "Gestation Length", value: -1.1 },
          { label: "Early First Calving", value: 3.0 },
          { label: "SSB", value: 4.0 },
          { label: "DSB", value: 4.0 },
          { label: "Productive Life", value: 3.1 },
          { label: "Livability", value: 0.2 },
          { label: "Residual Feed Intake", value: 4 },
          { label: "SCS", value: 2.99 },
          { label: "Milking Speed", value: 97 }
        ],
        fertilities: [
          { label: "SCR", value: 0.6 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1359 },
          { label: "PTA Protein (lbs)", value: 37 },
          { label: "PTA Protein (%)", value: 0.02 },
          { label: "PTA Fat (lbs)", value: 69 },
          { label: "PTA Fat (%)", value: 0.06 },
          { label: "Production Reliability", value: 82 },
          { label: "Type Reliability", value: 81 }
        ],
        fertilities: [
          { label: "PTA Type", value: 0.90 },
          { label: "Udder Composite", value: 0.64 },
          { label: "Feet & Leg Composite", value: 0.17 },
          { label: "Body Weight Composite", value: 0.36 },
          { label: "Dairy Composite", value: 0.57 }
        ]
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 0.43, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.15, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.45, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 1.16, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: -0.36, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 0.80, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 1.87, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.17, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.13, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.39, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 0.87, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.38, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 1.13, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: -0.12, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: -0.07, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.29, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.09, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.57, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 90, rel: 51 },
        cdcb: { value: -1.4, rel: 74 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 101, rel: 51 },
        cdcb: { value: 0.7, rel: 70 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 113, rel: 49 },
        cdcb: { value: 2.8, rel: 70 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 105, rel: 42 },
        cdcb: { value: 0.0, rel: 61 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 105, rel: 41 },
        cdcb: { value: 1.7, rel: 69 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 105, rel: 40 },
        cdcb: { value: 0.3, rel: 73 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 101, rel: 47 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 90, rel: 41 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 104, rel: 34 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 96, rel: 48 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 98, rel: 34 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: "N/A" },
        cdcb: { value: 0.3, rel: 64 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 99, rel: 37 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 103, rel: 42 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 91, rel: 46 },
        cdcb: {}
      }
    ]
  },
  {
    id: "7HO15337",
    registration_number: "HO840003148929351",
    name: "SUPERCHARGE",
    full_name: "SANDY-VALLEY SUPERCHARGE-ET",
    price: 0,
    category: "HF",
    pedigree: [
      "PINE-TREE CW LEGACY-ET",
      "SANDY-VALLEY ETERNITY-ET",
      "EDG RUBICON-ET",
      "LEGACY X RUBICON X MORGAN"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "TPI", value: 2568 },
          { label: "NM$", value: 878 },
          { label: "CM$", value: 905 },
          { label: "Feed_Efficiency", value: 221 },
          { label: "Feed_Saved", value: 72 },
          { label: "HHP$", value: 681 },
          { label: "DWP$", value: 714 },
          { label: "WT$", value: 53 },
          { label: "CW$", value: -2 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0.4 },
          { label: "DPR", value: 2.1 },
          { label: "HCR", value: 2.6 },
          { label: "CCR", value: 3.4 },
          { label: "Reliability", value: 75 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.0 },
          { label: "DCE", value: 1.9 },
          { label: "Gestation Length", value: -0.9 },
          { label: "Early First Calving", value: 3.1 },
          { label: "SSB", value: 5.7 },
          { label: "DSB", value: 4.1 },
          { label: "Productive Life", value: 5.4 },
          { label: "Livability", value: 2.5 },
          { label: "Residual Feed Intake", value: -194 },
          { label: "SCS", value: 2.66 },
          { label: "Milking Speed", value: 103 }
        ],
        fertilities: [
          { label: "SCR", value: 1.0 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1201 },
          { label: "PTA Protein (lbs)", value: 36 },
          { label: "PTA Protein (%)", value: -0.01 },
          { label: "PTA Fat (lbs)", value: 51 },
          { label: "PTA Fat (%)", value: 0.02 },
          { label: "Production Reliability", value: 96 },
          { label: "Type Reliability", value: 96 }
        ],
        fertilities: [
          { label: "PTA Type", value: 0.54 },
          { label: "Udder Composite", value: 1.74 },
          { label: "Feet & Leg Composite", value: -1.66 },
          { label: "Body Weight Composite", value: -3.41 },
          { label: "Dairy Composite", value: 2.50 }
        ]
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: -1.12, opposite: "tall" },
      { label: "Strength", value: "frail", score: -3.50, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: -3.41, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.33, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: -1.23, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.69, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: -2.98, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: -2.24, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: -0.74, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: -1.70, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 1.88, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.83, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 0.32, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.46, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: -2.81, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.55, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.27, opposite: "close" },
      { label: "Teat Length", value: "short", score: 2.26, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 93, rel: 72 },
        cdcb: { value: 0.4, rel: 87 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 95, rel: 80 },
        cdcb: { value: 0.55, rel: 85 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 103, rel: 74 },
        cdcb: { value: 0.7, rel: 86 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 95, rel: 76 },
        cdcb: { value: 0.23, rel: 73 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 95, rel: 70 },
        cdcb: { value: 0.15, rel: 83 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 102, rel: 66 },
        cdcb: { value: 0.8, rel: 89 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 96, rel: 68 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 102, rel: 64 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 103, rel: 58 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 100, rel: 78 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 101, rel: 46 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: "N/A" },
        cdcb: { value: 0.9, rel: 70 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 102, rel: 75 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 100, rel: 76 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 102, rel: 65 },
        cdcb: {}
      }
    ]
  },
  {
    id: "7HO15420",
    registration_number: "HO840003207538024",
    name: "PORTER",
    full_name: "AARDEMA LIONEL PORTER-ET",
    price: 0,
    category: "HF",
    pedigree: [
      "MR T-SPRUCE FRAZZLIONEL-ET",
      "AARDEMA DELTA 40645",
      "MR MOGUL DELTA 1427-ET",
      "LIONEL X DELTA X CASHFLOW"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2994 },
          { label: "NM$", value: 1067 },
          { label: "CM$", value: 1079 },
          { label: "Feed_Efficiency", value: 299 },
          { label: "Feed_Saved", value: 270 },
          { label: "HHP$", value: 975 },
          { label: "DWP$", value: 1125 },
          { label: "WT$", value: 33 },
          { label: "CW$", value: 24 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 1.6 },
          { label: "DPR", value: 0.3 },
          { label: "HCR", value: 3.3 },
          { label: "CCR", value: 2.9 },
          { label: "Reliability", value: 90 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 1.7 },
          { label: "DCE", value: 2.1 },
          { label: "Gestation Length", value: 0.9 },
          { label: "Early First Calving", value: 5.9 },
          { label: "SSB", value: 5.2 },
          { label: "DSB", value: 5.9 },
          { label: "Productive Life", value: 4.8 },
          { label: "Livability", value: 2.3 },
          { label: "Residual Feed Intake", value: -176 },
          { label: "SCS", value: 2.81 },
          { label: "Milking Speed", value: 103 }
        ],
        fertilities: [
          { label: "SCR", value: 0.5 },
          { label: "Reliability", value: 97 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1206 },
          { label: "PTA Protein (lbs)", value: 50 },
          { label: "PTA Protein (%)", value: 0.04 },
          { label: "PTA Fat (lbs)", value: 117 },
          { label: "PTA Fat (%)", value: 0.26 },
          { label: "Production Reliability", value: 97 },
          { label: "Type Reliability", value: 90 }
        ],
        fertilities: [] // no fertility metrics in this section
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: -0.61, opposite: "tall" },
      { label: "Strength", value: "frail", score: -0.18, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.19, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.96, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.68, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.14, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: -0.25, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: -0.05, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.00, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.17, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 0.79, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.73, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 2.08, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: -0.30, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: -0.47, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.91, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.91, opposite: "close" },
      { label: "Teat Length", value: "short", score: -0.88, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 98, rel: 60 },
        cdcb: { value: 0.1, rel: 78 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 99, rel: 61 },
        cdcb: { value: 0.1, rel: 77 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 106, rel: 59 },
        cdcb: { value: 1.5, rel: 76 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 101, rel: 53 },
        cdcb: { value: 0.7, rel: 65 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 102, rel: 54 },
        cdcb: { value: 0.7, rel: 75 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 105, rel: 51 },
        cdcb: { value: 1, rel: 80 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 100, rel: 57 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 100, rel: 52 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 96, rel: 46 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 95, rel: 58 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 105, rel: 32 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 0.8, rel: 65 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 103, rel: 86 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 106, rel: 65 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 99, rel: 88 },
        cdcb: {}
      }
    ],

    genetics: [
      "Daughter Average: 3-10 3X 305D 10,546 kgM 4.3% 451 kgF 3.5% 367 kgP",
      "Portile-Ridge Porter 778-Grade",
      "Portile-Ridge Porter 750-Grade"
    ],

    typeComposites: [
      { label: "PTA Type", value: 0.61 },
      { label: "Udder Composite", value: 1.11 },
      { label: "Feet & Leg Composite", value: 0.26 },
      { label: "Body Weight Composite", value: 0.62 },
      { label: "Dairy Composite", value: 0.10 }
    ]
  },
  {
    id: "7H015595",
    registration_number: "HO840003145445043",
    name: "REWIT",
    full_name: "HOUN S-S-I MAX REWIT-ET",
    price: 0, // price not present in image
    category: "HF",
    pedigree: [
      "RMD-DOTTERER SSI MAXIMUS-ET",
      "S-S-I HD 11881 245-ET",
      "MELARRY FRAZZLED MOOLA-ET",
      "MAXIMUS X MOOLA X BANDARES"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2801 },
          { label: "NM$", value: 845 },
          { label: "CM$", value: 862 },
          { label: "Feed_Efficiency", value: 205 },
          { label: "Feed_Saved", value: 45 },
          { label: "HHP$", value: 869 },
          { label: "DWP$", value: 969 },
          { label: "WT$", value: 139 },
          { label: "CW$", value: 15 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0.2 },
          { label: "DPR", value: -0.8 },
          { label: "HCR", value: 1.8 },
          { label: "CCR", value: -0.2 },
          { label: "Reliability", value: 80 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.6 },
          { label: "DCE", value: 2.2 },
          { label: "Gestation Length", value: -1.1 },
          { label: "Early First Calving", value: 3.4 },
          { label: "SSB", value: 5.8 },
          { label: "DSB", value: 4.6 },
          { label: "Productive Life", value: 4.9 },
          { label: "Livability", value: 3.4 },
          { label: "Residual Feed Intake", value: 68 },
          { label: "SCS", value: 2.62 },
          { label: "Milking Speed", value: 105 }
        ],
        fertilities: [
          // SCR data not visible in image
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 838 },
          { label: "PTA Protein (lbs)", value: 42 },
          { label: "PTA Protein (%)", value: 0.06 },
          { label: "PTA Fat (lbs)", value: 82 },
          { label: "PTA Fat (%)", value: 0.19 },
          { label: "Production Reliability", value: 93 },
          { label: "Type Reliability", value: NaN } // Not visible in image
        ],
        fertilities: [] // no fertility metrics in this section
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 0.25, opposite: "tall" },
      { label: "Strength", value: "frail", score: -1.10, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: -1.17, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.01, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.51, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 0.14, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: -0.81, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.26, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.56, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.23, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 1.49, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 2.12, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 0.99, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.20, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.53, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.48, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.42, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.25, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 106, rel: 65 },
        cdcb: { value: 1.1, rel: 75 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 98, rel: 65 },
        cdcb: { value: 0.1, rel: 73 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 104, rel: 62 },
        cdcb: { value: 2, rel: 71 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 99, rel: 57 },
        cdcb: { value: 0.1, rel: 63 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 102, rel: 57 },
        cdcb: { value: 1.8, rel: 71 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 102, rel: 55 },
        cdcb: { value: 0.9, rel: 74 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 98, rel: 61 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 101, rel: 56 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 102, rel: 49 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 95, rel: 61 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 99, rel: 38 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 0.4, rel: 64 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 104, rel: 53 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 104, rel: 54 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 98, rel: 57 },
        cdcb: {}
      }
    ],


  },
  {
    id: "7H015714",
    registration_number: "HO840003212245780",
    name: "HEDGEFUND",
    full_name: "AOT MEGA HEDGEFUND-ET",
    price: 0, // price not present in image
    category: "HF",
    pedigree: [], // Pedigree information not visible in image
    genetics: [
      "Born On: June 03, 2020",
      "Beta-casein: A1A2",
      "Kappa-casein: A1B",
      "ET: 10.4%",
      "aAa: 423",
      "TR TP TCTY TVTL TD TE HH1T HH2T HH3T HH4T HH5T HH6T" // Genetic markers from name
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2861 },
          { label: "NM$", value: 709 },
          { label: "CM$", value: 726 },
          { label: "Feed_Efficiency", value: 178 },
          { label: "Feed_Saved", value: -32 },
          { label: "HHP$", value: 805 },
          { label: "DWP$", value: 501 },
          { label: "WT$", value: -55 },
          { label: "CW$", value: 82 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 1.2 },
          { label: "DPR", value: 0.6 },
          { label: "HCR", value: 3.3 },
          { label: "CCR", value: 1.9 },
          { label: "Reliability", value: 79 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.5 },
          { label: "DCE", value: 2.5 },
          { label: "Gestation Length", value: 0.9 },
          { label: "Early First Calving", value: 0.9 },
          { label: "SSB", value: 6.1 },
          { label: "DSB", value: 5.1 },
          { label: "Productive Life", value: 3.4 },
          { label: "Livability", value: 0.5 },
          { label: "Residual Feed Intake", value: -7 },
          { label: "SCS", value: 2.72 },
          { label: "Milking Speed", value: 105 }
        ],
        fertilities: [
          // SCR data not visible in image
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 492 },
          { label: "PTA Protein (lbs)", value: 35 },
          { label: "PTA Protein (%)", value: 0.07 },
          { label: "PTA Fat (lbs)", value: 78 },
          { label: "PTA Fat (%)", value: 0.23 },
          { label: "Production Reliability", value: 82 }
        ],
        fertilities: [] // no fertility metrics in this section
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 1.25, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.50, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.57, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 1.31, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 1.05, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.09, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.05, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: -0.24, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 1.08, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.74, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 3.59, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 3.46, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 2.87, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 1.46, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 2.43, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 1.73, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 1.69, opposite: "close" },
      { label: "Teat Length", value: "short", score: -0.72, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 97, rel: 57 },
        cdcb: { value: 2, rel: 75 }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 98, rel: 57 },
        cdcb: { value: 0.2, rel: 72 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 94, rel: 54 },
        cdcb: { value: 1.2, rel: 71 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 101, rel: 49 },
        cdcb: { value: 0.1, rel: 61 }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 102, rel: 49 },
        cdcb: { value: 1.7, rel: 71 }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 101, rel: 48 },
        cdcb: { value: 0.1, rel: 74 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 101, rel: 53 },
        cdcb: {}
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 97, rel: 48 },
        cdcb: {}
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 93, rel: 43 },
        cdcb: {}
      },
      {
        trait: "Twinning",
        zoetis: { value: 104, rel: 54 },
        cdcb: {}
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 106, rel: 33 },
        cdcb: {}
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: NaN },
        cdcb: { value: 0.4, rel: 65 }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 94, rel: 47 },
        cdcb: {}
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 94, rel: 48 },
        cdcb: {}
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 88, rel: 51 },
        cdcb: {}
      }
    ]
  },
  {
    id: "7H015967",
    registration_number: "HO840003214324421",
    name: "HIGH OOHM",
    full_name: "LADYS-MANOR HIGH OOHM-ET",
    price: 0, // Not available
    category: "HF",
    pedigree: [
      "Sire: AOT HIGHJUMP-ET",
      "Dam: LADYS-MANOR GRNT OOHM-ET VG-85",
      "MGS: PROGENESIS GRANITE"
    ],
    genetics: [
      "Born On: November 27, 2020",
      "Beta-casein: A1A2",
      "Kappa-casein: BB",
      "FI: 10.3%",
      "TR TP TC TY TV TL TD TE HH1T HH2T HH3T HH4T HH5T HH6T"
    ],
    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2999 },
          { label: "NM$", value: 949 },
          { label: "CM$", value: 969 },
          { label: "Feed_Efficiency", value: 287 },
          { label: "Feed_Saved", value: 55 },
          { label: "HHP$", value: 1011 },
          { label: "DWP$", value: 870 },
          { label: "WT$", value: -39 },
          { label: "CW$", value: -49 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0.2 },
          { label: "DPR", value: 0.8 },
          { label: "HCR", value: 1.3 },
          { label: "CCR", value: 0.4 },
          { label: "Reliability", value: 72 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.5 },
          { label: "DCE", value: 2.5 },
          { label: "Gestation Length", value: -1.6 },
          { label: "Early First Calving", value: -2.4 },
          { label: "SSB", value: 6.2 },
          { label: "DSB", value: 5.0 },
          { label: "Productive Life", value: 3.3 },
          { label: "Livability", value: 0.8 },
          { label: "Residual Feed Intake", value: -63 },
          { label: "SCS", value: 2.81 },
          { label: "Milking Speed", value: 99 }
        ],
        fertilities: [
          { label: "SCR", value: 3.2 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1024 },
          { label: "PTA Protein (lbs)", value: 60 },
          { label: "PTA Protein (%)", value: 0.10 },
          { label: "PTA Fat (lbs)", value: 114 },
          { label: "PTA Fat (%)", value: 0.28 },
          { label: "Production Reliability", value: 83 }
        ],
        fertilities: [
          { label: "PTA Type", value: 1.54 },
          { label: "Udder Composite", value: 1.91 },
          { label: "Feet & Leg Composite", value: 0.44 },
          { label: "Body Weight Composite", value: 0.05 },
          { label: "Dairy Composite", value: 1.40 },
          { label: "Type Reliability", value: 81 }
        ]
      }
    ],
    typeTraits: [
      { label: "Stature", value: "short", score: 1.17, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.60, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 1.02, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 2.15, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 1.61, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 0.14, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.12, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.51, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.86, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.68, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 2.04, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 2.64, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 3.15, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.96, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.16, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.65, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.80, opposite: "close" },
      { label: "Teat Length", value: "short", score: -0.06, opposite: "long" }
    ],
    wellnessTraits: [
      { trait: "Mastitis", zoetis: { value: 98, rel: 58 }, cdcb: { value: 1.7, rel: 70 } },
      { trait: "Retained Placenta", zoetis: { value: 97, rel: 58 }, cdcb: { value: 0.7, rel: 72 } },
      { trait: "Metritis", zoetis: { value: 97, rel: 55 }, cdcb: { value: 0.2, rel: 69 } },
      { trait: "Hypocalcemia/Milk Fever", zoetis: { value: 100, rel: 47 }, cdcb: { value: 0.1, rel: 59 } },
      { trait: "Ketosis", zoetis: { value: 101, rel: 48 }, cdcb: { value: 1.4, rel: 69 } },
      { trait: "Displaced Abomasum", zoetis: { value: 102, rel: 46 }, cdcb: { value: 0.7, rel: 72 } },
      { trait: "Lameness", zoetis: { value: 101, rel: 53 }, cdcb: {} },
      { trait: "Cow Respiratory Disease", zoetis: { value: 91, rel: 47 }, cdcb: {} },
      { trait: "Cow Abortion", zoetis: { value: 95, rel: 40 }, cdcb: {} },
      { trait: "Twinning", zoetis: { value: 99, rel: 54 }, cdcb: {} },
      { trait: "Cystic Ovary", zoetis: { value: 97, rel: 29 }, cdcb: {} },
      { trait: "Heifer Livability", zoetis: { value: NaN, rel: NaN }, cdcb: { value: 0.2, rel: 62 } },
      { trait: "Calf Respiratory Disease", zoetis: { value: 93, rel: 47 }, cdcb: {} },
      { trait: "Calf Scours", zoetis: { value: 91, rel: 50 }, cdcb: {} },
      { trait: "Calf Livability", zoetis: { value: 93, rel: 53 }, cdcb: {} }
    ]
  },

  {
    id: "7HO15979",
    registration_number: "HO840003214541139",
    name: "ROCK PAUL",
    full_name: "WELCOME CONWY ROCK PAUL-ET",
    price: 0, // Not available
    category: "HF",
    pedigree: [
      "Sire: SANDY-VALLEY R CONWAY-ET",
      "Dam: WELCOME LEGACY ROSE-ET VG-87",
      "MGS: PINE-TREE CW LEGACY-ET"
    ],
    genetics: [
      "Born On: December 12, 2020",
      "Beta-casein: A2A2",
      "Kappa-casein: BB",
      "aAa: 264",
      "FI: 10.5%",
      "TR TP TC TY TV TL TD TE HH1T HH2T HH3T HH4T HH5T HH6T"
    ],
    allDetails: [
      {
        index: "indexes",
        fertility: "fertility",
        indexes: [
          { label: "TPI", value: 2963 },
          { label: "NM$", value: 948 },
          { label: "CM$", value: 970 },
          { label: "Feed_Efficiency", value: 262 },
          { label: "Feed_Saved", value: 70 },
          { label: "HHP$", value: 1059 },
          { label: "DWP$", value: 854 },
          { label: "WT$", value: -89 },
          { label: "CW$", value: 35 }
        ],
        fertilities: [
          { label: "Fertility Index", value: 0.1 },
          { label: "DPR", value: 0.9 },
          { label: "HCR", value: 0.4 },
          { label: "CCR", value: 0.4 },
          { label: "Reliability", value: 78 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "SCE", value: 2.6 },
          { label: "DCE", value: 1.9 },
          { label: "Gestation Length", value: -1.7 },
          { label: "Early First Calving", value: -3.0 },
          { label: "SSB", value: 6.6 },
          { label: "DSB", value: 4.0 },
          { label: "Productive Life", value: 4.2 },
          { label: "Livability", value: 1.3 },
          { label: "Residual Feed Intake", value: -113 },
          { label: "SCS", value: 2.78 },
          { label: "Milking Speed", value: 94 }
        ],
        fertilities: [
          { label: "SCR", value: 0.7 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 892 },
          { label: "PTA Protein (lbs)", value: 59 },
          { label: "PTA Protein (%)", value: 0.12 },
          { label: "PTA Fat (lbs)", value: 98 },
          { label: "PTA Fat (%)", value: 0.24 },
          { label: "Production Reliability", value: 82 }
        ],
        fertilities: [
          { label: "PTA Type", value: 1.53 },
          { label: "Udder Composite", value: 1.58 },
          { label: "Feet & Leg Composite", value: 0.36 },
          { label: "Body Weight Composite", value: 0.28 },
          { label: "Dairy Composite", value: 0.36 },
          { label: "Type Reliability", value: 81 }
        ]
      }
    ],
    typeTraits: [
      { label: "Stature", value: "short", score: 1.30, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.38, opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.38, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.87, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.44, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 0.09, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 1.26, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.86, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.30, opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.66, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 2.34, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 2.10, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 1.80, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.75, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.82, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.69, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.48, opposite: "close" },
      { label: "Teat Length", value: "short", score: 0.91, opposite: "long" }
    ],
    wellnessTraits: [
      { trait: "Mastitis", zoetis: { value: 95, rel: 61 }, cdcb: { value: 2.6, rel: 75 } },
      { trait: "Retained Placenta", zoetis: { value: 99, rel: 61 }, cdcb: { value: -0.1, rel: 72 } },
      { trait: "Metritis", zoetis: { value: 107, rel: 58 }, cdcb: { value: 2.2, rel: 71 } },
      { trait: "Hypocalcemia/Milk Fever", zoetis: { value: 98, rel: 54 }, cdcb: { value: 0.0, rel: 63 } },
      { trait: "Ketosis", zoetis: { value: 103, rel: 51 }, cdcb: { value: 1.8, rel: 71 } },
      { trait: "Displaced Abomasum", zoetis: { value: 102, rel: 50 }, cdcb: { value: 0.3, rel: 74 } },
      { trait: "Lameness", zoetis: { value: 97, rel: 52 }, cdcb: {} },
      { trait: "Cow Respiratory Disease", zoetis: { value: 96, rel: 46 }, cdcb: {} },
      { trait: "Cow Abortion", zoetis: { value: 107, rel: 54 }, cdcb: {} },
      { trait: "Twinning", zoetis: { value: 101, rel: 58 }, cdcb: {} },
      { trait: "Cystic Ovary", zoetis: { value: 105, rel: 35 }, cdcb: {} },
      { trait: "Heifer Livability", zoetis: { value: null, rel: null }, cdcb: { value: 1, rel: 65 } },
      { trait: "Calf Respiratory Disease", zoetis: { value: 101, rel: 54 }, cdcb: {} },
      { trait: "Calf Scours", zoetis: { value: 103, rel: 50 }, cdcb: {} },
      { trait: "Calf Livability", zoetis: { value: 107, rel: 54 }, cdcb: {} }
    ]
  },
  {
    id: "7JE01219",
    registration_number: "JEUSA000067184544",
    name: "OLIVER-P",
    full_name: "DUTCH HOLLOW OLIVER-P ET",
    price: 0,
    category: "JE", // Jersey
    pedigree: [
      "ALLLYNNS LOUIE VALENTINO-ET",   // sire (as shown)
      "DUTCH HOLLOW MIK OLIVER-P EX-93", // dam (as shown)
      "DUTCH HOLLOW Q MIK-P-ET",       // maternal grandsire (MGS)
      "VALENTINO X MIK-P X LEGION"     // short summary line visible on sheet
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "JPI", value: 8 },
          { label: "NM$", value: 122 },
          { label: "CM$", value: 117 },
          { label: "Feed Saved", value: null },   // label present but value not legible
          { label: "HHP$", value: -13 },
          { label: "DWP$", value: -35 },
          { label: "WT$", value: -92 },
          { label: "CW$", value: -78 }
        ],
        fertilities: [
          { label: "DPR", value: 2.3 },
          { label: "DPR Reliability", value: 99 },
          { label: "HCR", value: -1.7 },
          { label: "HCR Reliability", value: 98 },
          { label: "CCR", value: 2.5 },
          { label: "CCR Reliability", value: 99 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "Gestation Length", value: 2.5 },
          { label: "Gestation Reliability", value: 99 },
          { label: "Productive Life", value: 1.3 },
          { label: "Productive Life Reliability", value: 99 },
          { label: "Livability", value: 0.3 },
          { label: "Livability Reliability", value: 97 },
          { label: "Early First Calving", value: 2.5 },
          { label: "Early First Calving Reliability", value: 99 },
          { label: "SCS", value: 3.03 },
          { label: "SCS Reliability", value: 99 },
          { label: "Milking Speed", value: 102 },
          { label: "Milking Speed Reliability", value: 96 }
        ],
        fertilities: [
          { label: "SCR", value: null } // not provided/blank on sheet
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 362 },
          { label: "PTA Protein (lbs)", value: 3 },
          { label: "PTA Protein (%)", value: -0.05 },
          { label: "PTA Fat (lbs)", value: 16 },
          { label: "PTA Fat (%)", value: -0.01 },
          { label: "Production Reliability", value: 99 },
          { label: "Dtrs/Herds (Production)", value: "14262/1798" }
        ],
        fertilities: [
          { label: "PTA Type", value: 1.30 },
          { label: "Type Reliability", value: 99 },
          { label: "Dtrs/Herds (Type)", value: "5207/822" }
        ]
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 0.20, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.10, opposite: "strong" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.80, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.10, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 1.30, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.00, opposite: "sickled" },
      { label: "Foot Angle", value: "low angle", score: 0.60, opposite: "steep angle" },
      { label: "Fore Udder", value: "loose", score: 1.00, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 2.20, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 1.70, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.10, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.00, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.00, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.50, opposite: "close" },
      { label: "Rear Teat (side view)", value: "close/back", score: 0.20, opposite: "back" },
      { label: "Teat Length", value: "short", score: -0.20, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 93, rel: 96 },
        cdcb: { value: -1.6, rel: 98 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 104, rel: 94 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 82, rel: 94 },
        cdcb: { value: -0.2, rel: 94 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 97, rel: 94 },
        cdcb: { value: 0.4, rel: 95 }
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 97, rel: 78 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 107, rel: 82 },
        cdcb: { value: 0.2, rel: 96 }
      },
      {
        trait: "Twinning",
        zoetis: { value: 101, rel: 95 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: "N/A" },
        cdcb: { value: -0.5, rel: 94 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 66, rel: 93 },
        cdcb: { value: 0.2, rel: 87 }
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 100, rel: 56 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 108, rel: 94 },
        cdcb: { value: 0.4, rel: 93 }
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 103, rel: 63 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 95, rel: 96 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 101, rel: 97 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 83, rel: 97 },
        cdcb: { value: null, rel: null }
      }
    ],

    genetics: [
      "born_on: June 22, 2011",
      " beta_casein: A2A2",
      "kappa_casein: BB",
      "EFI: 9.3%",
      "aAa : 423651",]


  },
  {
    id: "7JE01822",
    registration_number: "JE840003151456032",
    name: "FRINGE",
    full_name: "VICTORY S-S-I MIAMI FRINGE-ET",
    price: 0,
    category: "JE", // Jersey
    pedigree: [
      "HILMAR VICEROY MIAMI",                 // sire
      "RVVF MACKENZIE 44800 VG-86",          // dam
      "MISSISKA MACKENZIE ET",               // MGS
      "MIAMI X MACKENZIE X DIVIDEND"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "JPI", value: 54 },
          { label: "NM$", value: 119 },
          { label: "CM$", value: 125 },
          { label: "Feed Saved", value: null },
          { label: "HHP$", value: 229 },
          { label: "DWP$", value: 286 },
          { label: "WT$", value: 119 },
          { label: "CW$", value: 33 }
        ],
        fertilities: [
          { label: "DPR", value: 1.5 },
          { label: "DPR Reliability", value: 94 },
          { label: "HCR", value: 0.5 },
          { label: "HCR Reliability", value: 95 },
          { label: "CCR", value: 1.7 },
          { label: "CCR Reliability", value: 94 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "Gestation Length", value: -0.3 },
          { label: "Gestation Reliability", value: 99 },
          { label: "Productive Life", value: 2.7 },
          { label: "Productive Life Reliability", value: 89 },
          { label: "Livability", value: 2.1 },
          { label: "Livability Reliability", value: 69 },
          { label: "Early First Calving", value: 1.7 },
          { label: "Early First Calving Reliability", value: 78 },
          { label: "SCS", value: 3.01 },
          { label: "SCS Reliability", value: 98 },
          { label: "Milking Speed", value: 99 },
          { label: "Milking Speed Reliability", value: 35 }
        ],
        fertilities: [
          { label: "SCR", value: null }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: -263 },
          { label: "PTA Protein (lbs)", value: 4 },
          { label: "PTA Protein (%)", value: 0.07 },
          { label: "PTA Fat (lbs)", value: -1 },
          { label: "PTA Fat (%)", value: 0.06 },
          { label: "Production Reliability", value: 99 },
          { label: "Dtrs/Herds (Production)", value: "2305/135" }
        ],
        fertilities: [
          { label: "PTA Type", value: 1.30 },
          { label: "JUI", value: 20.00 },
          { label: "Type Reliability", value: 97 },
          { label: "Dtrs/Herds (Type)", value: "450/57" }
        ]
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: -0.10, opposite: "tall" },
      { label: "Strength", value: "frail", score: 1.20, opposite: "strong" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.50, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 1.40, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.10, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.50, opposite: "sickled" },
      { label: "Foot Angle", value: "low angle", score: 0.50, opposite: "steep angle" },
      { label: "Fore Udder", value: "loose", score: 2.40, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.70, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: -0.10, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.10, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.80, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: -0.60, opposite: "close" },
      { label: "Rear Teat (rear view)", value: "wide", score: -0.80, opposite: "close" },
      { label: "Rear Teat (side view)", value: "close", score: 0.00, opposite: "back" },
      { label: "Teat Length", value: "short", score: 0.70, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 105, rel: 52 },
        cdcb: { value: -0.6, rel: 80 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 102, rel: 68 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 106, rel: 74 },
        cdcb: { value: -0.3, rel: 79 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 89, rel: 72 },
        cdcb: { value: -0.1, rel: 82 }
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 105, rel: 45 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 109, rel: 51 },
        cdcb: { value: 0.8, rel: 84 }
      },
      {
        trait: "Twinning",
        zoetis: { value: 92, rel: 77 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: "N/A" },
        cdcb: { value: -0.6, rel: 48 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 103, rel: 72 },
        cdcb: { value: 0.2, rel: 66 }
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 94, rel: 33 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 103, rel: 57 },
        cdcb: { value: 0, rel: 75 }
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 105, rel: 49 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 99, rel: 82 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 110, rel: 84 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 91, rel: 87 },
        cdcb: { value: null, rel: null }
      }
    ],

    genetics: [
      "  born_on: July 11, 2019",
      " beta_casein: A2A2",
      "  kappa_casein: BB",
      "EFI: 9.9%",
      "aAa : 651"

    ]

  },
  {
    id: "7JE01980",
    registration_number: "JE840003219480313",
    name: "KAMAKAZI",
    full_name: "BLACK LABEL THRASHING KAMAKAZI-ET",
    price: 0,
    category: "JE", // Jersey
    pedigree: [
      "JX ODF JLS PILGRIM THRASHER {6}-ET",       // sire
      "YOSEMITE VALENTINO KOKOMOO 25143-ET EX-95", // dam
      "ALL LYNNS LOUIE VALENTINO-ET",             // MGS
      "JX THRASHER {6} X VALENTINO X KOKOMOO"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "JPI", value: 123 },
          { label: "NM$", value: 404 },
          { label: "CM$", value: 409 },
          { label: "Feed Saved", value: null },
          { label: "HHP$", value: 548 },
          { label: "DWP$", value: 589 },
          { label: "WT$", value: 40 },
          { label: "CW$", value: 53 }
        ],
        fertilities: [
          { label: "DPR", value: 0.3 },
          { label: "DPR Reliability", value: 76 },
          { label: "HCR", value: 1.9 },
          { label: "HCR Reliability", value: 83 },
          { label: "CCR", value: 0.1 },
          { label: "CCR Reliability", value: 77 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "Gestation Length", value: 1.0 },
          { label: "Gestation Reliability", value: 74 },
          { label: "Productive Life", value: 4.3 },
          { label: "Productive Life Reliability", value: 77 },
          { label: "Livability", value: 2.2 },
          { label: "Livability Reliability", value: 67 },
          { label: "Early First Calving", value: 0.1 },
          { label: "Early First Calving Reliability", value: 65 },
          { label: "SCS", value: 2.79 },
          { label: "SCS Reliability", value: 80 },
          { label: "Milking Speed", value: 100 },
          { label: "Milking Speed Reliability", value: 31 }
        ],
        fertilities: [
          { label: "SCR", value: 1.8 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 936 },
          { label: "PTA Protein (lbs)", value: 28 },
          { label: "PTA Protein (%)", value: -0.03 },
          { label: "PTA Fat (lbs)", value: 38 },
          { label: "PTA Fat (%)", value: 0.04 },
          { label: "Production Reliability", value: 79 },
          { label: "Dtrs/Herds (Production)", value: null }
        ],
        fertilities: [
          { label: "PTA Type", value: 1.60 },
          { label: "JUI", value: 18.90 },
          { label: "Type Reliability", value: 81 },
          { label: "Dtrs/Herds (Type)", value: null }
        ]
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 2.10, opposite: "tall" },
      { label: "Strength", value: "frail", score: 1.60, opposite: "strong" },
      { label: "Dairy Form", value: "tight ribbed", score: 1.00, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 1.50, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -0.80, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.20, opposite: "sickled" },
      { label: "Foot Angle", value: "low angle", score: 0.40, opposite: "steep angle" },
      { label: "Fore Udder", value: "loose", score: 2.20, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.00, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 1.50, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.90, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.40, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 1.20, opposite: "close" },
      { label: "Rear Teat (rear view)", value: "wide", score: 0.90, opposite: "close" },
      { label: "Rear Teat (side view)", value: "close", score: 0.20, opposite: "back" },
      { label: "Teat Length", value: "short", score: 0.60, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 100, rel: 46 },
        cdcb: { value: 0.7, rel: 66 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 103, rel: 56 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 102, rel: 53 },
        cdcb: { value: 0, rel: 54 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 99, rel: 44 },
        cdcb: { value: 0.4, rel: 55 }
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 99, rel: 46 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 101, rel: 46 },
        cdcb: { value: 0.5, rel: 56 }
      },
      {
        trait: "Twinning",
        zoetis: { value: 107, rel: 54 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: "N/A" },
        cdcb: { value: 0.5, rel: 44 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 105, rel: 51 },
        cdcb: { value: 0.3, rel: 48 }
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 109, rel: 48 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 109, rel: 56 },
        cdcb: { value: 0.4, rel: 52 }
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 101, rel: 49 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 108, rel: 58 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 104, rel: 59 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 107, rel: 62 },
        cdcb: { value: null, rel: null }
      }
    ],

    additional_info: {
      born_on: "August 16, 2020",
      beta_casein: "A2A2",
      kappa_casein: "BB",
      EFI: "9.0%",
      aAa: "651",
      dam_record: "9-02 3X 274D 12,486 kgM 4.9% 616 kgF 4.0% 502 kgP",
      photos_caption: [
        "DAM Yosemite Valentino Kokomo 25143-ET",
        "DAM Yosemite Valentino Kokomo 25143-ET"
      ]
    }
  },
  {
    id: "7JE02023",
    registration_number: "JE840003221914142",
    name: "UNCOMMON",
    full_name: "VALSIGNA GISLEV UNCOMMON-ET",
    price: 0,
    category: "JE", // Jersey
    pedigree: [
      "VJ GISLEV",
      "VALSIGNA STEVE 30482 VG-86",
      "CDF IRWIN STEVE",
      "VJ GISLEV X STEVE X VOLTAGE"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "JPI", value: 139 },
          { label: "NM$", value: 469 },
          { label: "CM$", value: 477 },
          { label: "Feed Saved", value: null },
          { label: "HHP$", value: 617 },
          { label: "DWP$", value: 710 },
          { label: "WT$", value: 90 },
          { label: "CW$", value: 89 }
        ],
        fertilities: [
          { label: "DPR", value: 0.9 },
          { label: "DPR Reliability", value: 72 },
          { label: "HCR", value: 1.7 },
          { label: "HCR Reliability", value: 66 },
          { label: "CCR", value: 2.6 },
          { label: "CCR Reliability", value: 72 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "Gestation Length", value: 0.3 },
          { label: "Gestation Reliability", value: 72 },
          { label: "Productive Life", value: 3.1 },
          { label: "Productive Life Reliability", value: 74 },
          { label: "Livability", value: 1.9 },
          { label: "Livability Reliability", value: 63 },
          { label: "Early First Calving", value: null },
          { label: "Early First Calving Reliability", value: null },
          { label: "SCS", value: 2.90 },
          { label: "SCS Reliability", value: 77 },
          { label: "Milking Speed", value: 106 },
          { label: "Milking Speed Reliability", value: 41 }
        ],
        fertilities: [
          { label: "SCR", value: 2.7 }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 594 },
          { label: "PTA Protein (lbs)", value: 28 },
          { label: "PTA Protein (%)", value: 0.03 },
          { label: "PTA Fat (lbs)", value: 47 },
          { label: "PTA Fat (%)", value: 0.09 },
          { label: "Production Reliability", value: 78 },
          { label: "Dtrs/Herds (Production)", value: null }
        ],
        fertilities: [
          { label: "PTA Type", value: 0.50 },
          { label: "JUI", value: 16.30 },
          { label: "Type Reliability", value: 80 },
          { label: "Dtrs/Herds (Type)", value: null }
        ]
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: 0.60, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.60, opposite: "strong" },
      { label: "Dairy Form", value: "tight ribbed", score: -0.10, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.50, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -0.50, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: -0.90, opposite: "sickled" },
      { label: "Foot Angle", value: "low angle", score: 0.70, opposite: "steep angle" },
      { label: "Fore Udder", value: "loose", score: 1.50, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 0.70, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: -0.50, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.20, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.80, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.40, opposite: "close" },
      { label: "Rear Teat (rear view)", value: "wide", score: 0.40, opposite: "close" },
      { label: "Rear Teat (side view)", value: "close", score: 0.50, opposite: "back" },
      { label: "Teat Length", value: "short", score: -0.30, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 105, rel: 40 },
        cdcb: { value: 0.4, rel: 60 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 93, rel: 47 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 99, rel: 43 },
        cdcb: { value: 0.1, rel: 45 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 107, rel: 47 },
        cdcb: { value: 0.8, rel: 45 }
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 98, rel: 31 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 96, rel: 31 },
        cdcb: { value: 0.3, rel: 50 }
      },
      {
        trait: "Twinning",
        zoetis: { value: 95, rel: 45 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: NaN, rel: "N/A" },
        cdcb: { value: 0.9, rel: 34 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 87, rel: 41 },
        cdcb: { value: 0.2, rel: 36 }
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 104, rel: 26 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 101, rel: 41 },
        cdcb: { value: -1, rel: 45 }
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 100, rel: 33 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 113, rel: 70 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 102, rel: 83 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 106, rel: 76 },
        cdcb: { value: null, rel: null }
      }
    ],

    genetics: [
      " born_on: January 04, 2021",
      " beta_casein: A2A2",
      " kappa_casein: BB",
      "   EFI: 7.5%",
      " aAa: 642",
    ],
  },
  {
    id: "7JE05069",
    registration_number: "JE840003133234557",
    name: "CHEDDAR",
    full_name: "RIVER VALLEY CHARLEY CHEDDAR-ET",
    price: 0,
    category: "JE", // Jersey
    pedigree: [
      "IGL RISING TEMP-ET",
      "SHAN-MAR HILARIO CHARLEY-ET VG-87",
      "CAL-MART RENEGADE HILARIO-ET",
      "RISING TEMP X HILARIO X LEGAL"
    ],

    allDetails: [
      {
        index: "indexes",
        fertility: "DAUGHTER FERTILITY",
        indexes: [
          { label: "JPI", value: 78 },
          { label: "NM$", value: 512 },
          { label: "CM$", value: 508 },
          { label: "Feed Saved", value: null },
          { label: "HHP$", value: 240 },
          { label: "DWP$", value: 526 },
          { label: "WT$", value: -69 },
          { label: "CW$", value: -47 }
        ],
        fertilities: [
          { label: "DPR", value: -2.0 },
          { label: "DPR Reliability", value: 94 },
          { label: "HCR", value: 1.0 },
          { label: "HCR Reliability", value: 84 },
          { label: "CCR", value: -2.1 },
          { label: "CCR Reliability", value: 95 }
        ]
      },
      {
        index: "MANAGEMENT TRAITS",
        fertility: "SIRE FERTILITY",
        indexes: [
          { label: "Gestation Length", value: -0.4 },
          { label: "Gestation Reliability", value: 99 },
          { label: "Productive Life", value: 0.9 },
          { label: "Productive Life Reliability", value: 96 },
          { label: "Livability", value: -1.7 },
          { label: "Livability Reliability", value: 83 },
          { label: "Early First Calving", value: 8.4 },
          { label: "Early First Calving Reliability", value: 90 },
          { label: "SCS", value: 3.27 },
          { label: "SCS Reliability", value: 98 },
          { label: "Milking Speed", value: 105 },
          { label: "Milking Speed Reliability", value: 35 }
        ],
        fertilities: [
          { label: "SCR", value: null }
        ]
      },
      {
        index: "Production",
        fertility: "Type",
        indexes: [
          { label: "PTA Milk (lbs)", value: 1620 },
          { label: "PTA Protein (lbs)", value: 52 },
          { label: "PTA Protein (%)", value: 0.04 },
          { label: "PTA Fat (lbs)", value: 64 },
          { label: "PTA Fat (%)", value: 0.07 },
          { label: "Production Reliability", value: 99 },
          { label: "Dtrs/Herds (Production)", value: "781/98" }
        ],
        fertilities: [
          { label: "PTA Type", value: -0.20 },
          { label: "JUI", value: 5.40 },
          { label: "Type Reliability", value: 97 },
          { label: "Dtrs/Herds (Type)", value: "283/45" }
        ]
      }
    ],

    typeTraits: [
      { label: "Stature", value: "short", score: -0.60, opposite: "tall" },
      { label: "Strength", value: "frail", score: 0.20, opposite: "strong" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.90, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: -1.00, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 2.10, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.50, opposite: "sickled" },
      { label: "Foot Angle", value: "low angle", score: -1.10, opposite: "steep angle" },
      { label: "Fore Udder", value: "loose", score: -0.50, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 0.30, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 0.70, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: -0.70, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: -2.00, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: -0.10, opposite: "close" },
      { label: "Rear Teat (rear view)", value: "wide", score: -0.30, opposite: "close" },
      { label: "Rear Teat (side view)", value: "close", score: 0.00, opposite: "back" },
      { label: "Teat Length", value: "short", score: 0.00, opposite: "long" }
    ],

    wellnessTraits: [
      {
        trait: "Mastitis",
        zoetis: { value: 94, rel: 68 },
        cdcb: { value: -4.3, rel: 82 }
      },
      {
        trait: "Lameness",
        zoetis: { value: 104, rel: 84 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Retained Placenta",
        zoetis: { value: 100, rel: 82 },
        cdcb: { value: -0.2, rel: 66 }
      },
      {
        trait: "Metritis",
        zoetis: { value: 102, rel: 85 },
        cdcb: { value: -0.1, rel: 65 }
      },
      {
        trait: "Cow Abortion",
        zoetis: { value: 103, rel: 53 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Displaced Abomasum",
        zoetis: { value: 79, rel: 72 },
        cdcb: { value: -0.4, rel: 72 }
      },
      {
        trait: "Twinning",
        zoetis: { value: 100, rel: 82 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Heifer Livability",
        zoetis: { value: null, rel: "N/A" },
        cdcb: { value: -0.3, rel: 62 }
      },
      {
        trait: "Hypocalcemia/Milk Fever",
        zoetis: { value: 91, rel: 75 },
        cdcb: { value: -0.1, rel: 54 }
      },
      {
        trait: "Cystic Ovary",
        zoetis: { value: 99, rel: 31 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Ketosis",
        zoetis: { value: 58, rel: 83 },
        cdcb: { value: -0.1, rel: 64 }
      },
      {
        trait: "Cow Respiratory Disease",
        zoetis: { value: 99, rel: 69 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Respiratory Disease",
        zoetis: { value: 99, rel: 82 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Scours",
        zoetis: { value: 108, rel: 89 },
        cdcb: { value: null, rel: null }
      },
      {
        trait: "Calf Livability",
        zoetis: { value: 77, rel: 88 },
        cdcb: { value: null, rel: null }
      }
    ],

    genetics: [
      "born_on: April 04, 2016",
      "beta_casein: A2A2",
      "kappa_casein: AB",
      "EFI: 7.9%",
      "aAa: 423"
    ]
  },
  {
    "id": "14HO14220",
    "registration_number": "HO840003133120549",
    "name": "RIVETING",
    "full_name": "S-S-I BG FRZZLD RIVETING-ET",
    "price": 0,
    "category": "Red",
    "pedigree": [
      "MELLARY JOSUPER FRAZZLED-ET",
      "S-S-I PROFIT 10668 11643-ET VG-87",
      "S-S-I PARTYROCK PROFIT-ET",
      "FRAZZLED X PROFIT X RODGERS"
    ],

    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "TPI", "value": 2787 },
          { "label": "NM$", "value": 879 },
          { "label": "CM$", "value": 895 },
          { "label": "Feed Efficiency ($)", "value": 177 },
          { "label": "Feed Saved", "value": 224 },
          { "label": "HHP$", "value": 929 },
          { "label": "DWP$", "value": 938 },
          { "label": "WT$", "value": 128 },
          { "label": "CW$", "value": 9 }
        ],
        "fertilities": [
          { "label": "Fertility Index", "value": 1.5 },
          { "label": "DPR", "value": 0.3 },
          { "label": "HCR", "value": 4.3 },
          { "label": "CCR", "value": 1.0 }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "SCE", "value": 2.3 },
          { "label": "DCE", "value": 2.3 },
          { "label": "Gestation Length", "value": -1.7 },
          { "label": "Early First Calving", "value": -7.5 },
          { "label": "SCS", "value": 2.6 },
          { "label": "DSB", "value": 3.9 },
          { "label": "Productive Life", "value": 7.1 },
          { "label": "Livability", "value": 3.7 },
          { "label": "Residual Feed Intake", "value": -132 },
          { "label": "Milking Speed", "value": 100 }
        ],
        "fertilities": [
          { "label": "SCR", "value": 1.0 }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": 816 },
          { "label": "PTA Protein (lbs)", "value": 40 },
          { "label": "PTA Protein (%)", "value": 0.05 },
          { "label": "PTA Fat (lbs)", "value": 53 },
          { "label": "PTA Fat (%)", "value": 0.08 },
          { "label": "Production Reliability", "value": 99 },
          { "label": "Dtrs/Herds (Production)", "value": "5154/771" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 0.75 },
          { "label": "Udder Composite", "value": 1.42 },
          { "label": "Feet & Leg Composite", "value": 0.11 },
          { "label": "Body Weight Composite", "value": -0.61 },
          { "label": "Dairy Composite", "value": 0.69 },
          { "label": "Type Reliability", "value": 99 },
          { "label": "Dtrs/Herds (Type)", "value": "2677/427" }
        ]
      }
    ],

    "typeTraits": [
      { "label": "Stature", "value": "tall", "score": 0.23, "opposite": "short" },
      { "label": "Strength", "value": "strong", "score": 0.69, "opposite": "frail" },
      { "label": "Body Depth", "value": "shallow", "score": -1.07, "opposite": "deep" },
      { "label": "Dairy Form", "value": "tight ribbed", "score": 0.26, "opposite": "open ribbed" },
      { "label": "Rump Width", "value": "narrow", "score": 0.25, "opposite": "wide" },
      { "label": "Rump Angle", "value": "high pins", "score": 2.51, "opposite": "sloped" },
      { "label": "Rear Leg (side view)", "value": "posty", "score": 1.51, "opposite": "sickled" },
      { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.52, "opposite": "straight" },
      { "label": "Foot Angle", "value": "low angle", "score": 0.50, "opposite": "steep angle" },
      { "label": "Feet & Leg Score", "value": "low", "score": 0.14, "opposite": "high" },
      { "label": "Fore Udder", "value": "loose", "score": 1.54, "opposite": "strong" },
      { "label": "Rear Udder Height", "value": "high", "score": 2.26, "opposite": "low" },
      { "label": "Rear Udder Width", "value": "narrow", "score": 1.25, "opposite": "wide" },
      { "label": "Udder Cleft", "value": "weak", "score": 0.19, "opposite": "strong" },
      { "label": "Udder Depth", "value": "deep", "score": 1.84, "opposite": "shallow" },
      { "label": "Front Teat Placement", "value": "wide", "score": 0.17, "opposite": "close" },
      { "label": "Rear Teat Placement", "value": "wide", "score": 0.47, "opposite": "close" },
      { "label": "Teat Length", "value": "short", "score": -1.90, "opposite": "long" }
    ],

    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": 95, "rel": 102 }, "cdcb": { "value": 4.4, "rel": 97 } },
      { "trait": "Retained Placenta", "zoetis": { "value": 97, "rel": 93 }, "cdcb": { "value": 0.4, "rel": 96 } },
      { "trait": "Metritis", "zoetis": { "value": 96, "rel": 100 }, "cdcb": { "value": 1.7, "rel": 96 } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 96, "rel": 102 }, "cdcb": { "value": 0.8, "rel": 95 } },
      { "trait": "Ketosis", "zoetis": { "value": 96, "rel": 107 }, "cdcb": { "value": 2.6, "rel": 95 } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": 93, "rel": 108 }, "cdcb": { "value": 0.9, "rel": 98 } },
      { "trait": "Lameness", "zoetis": { "value": 94, "rel": 108 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Respiratory Disease", "zoetis": { "value": 92, "rel": 106 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Abortion", "zoetis": { "value": 91, "rel": 102 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Twinning", "zoetis": { "value": 96, "rel": 104 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cystic Ovary", "zoetis": { "value": 84, "rel": 102 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 1.1, "rel": 87 } },
      { "trait": "Calf Respiratory Disease", "zoetis": { "value": 97, "rel": 97 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Scours", "zoetis": { "value": 97, "rel": 99 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Livability", "zoetis": { "value": 97, "rel": 99 }, "cdcb": { "value": null, "rel": null } }
    ],

    "genetics": [
      "born_on: May 18, 2017",
      "beta_casein: A2A2",
      "kappa_casein: AA",
      "EFI: 10.5%",
      "aAa: 432"
    ]
  },
  {
    "id": "14HO14442",
    "registration_number": "HO840003143105079",
    "name": "DELPRO",
    "full_name": "WELCOME DELPRO 3565-ET",
    "price": 0,
    "category": "Red",
    "pedigree": [
      "OCB SPRING SAMURI-ET",
      "WELCOME SUPERSHOT DIAMOND-ET VG-85",
      "COGENT SUPERSHOT",
      "SAMURI X SUPERSHOT X JACKMAN"
    ],

    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "TPI", "value": 2756 },
          { "label": "NM$", "value": 744 },
          { "label": "CM$", "value": 756 },
          { "label": "Feed Efficiency ($)", "value": 161 },
          { "label": "Feed Saved", "value": 47 },
          { "label": "HHP$", "value": 804 },
          { "label": "DWP$", "value": 729 },
          { "label": "WT$", "value": 5 },
          { "label": "CW$", "value": -80 }
        ],
        "fertilities": [
          { "label": "Fertility Index", "value": 3.1 },
          { "label": "DPR", "value": 1.6 },
          { "label": "HCR", "value": 3.8 },
          { "label": "CCR", "value": 3.7 }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "SCE", "value": 1.4 },
          { "label": "DCE", "value": 1.7 },
          { "label": "Gestation Length", "value": -3.7 },
          { "label": "Early First Calving", "value": -6.8 },
          { "label": "SCS", "value": 2.8 },
          { "label": "DSB", "value": 3.9 },
          { "label": "Productive Life", "value": 4.5 },
          { "label": "Livability", "value": 3.5 },
          { "label": "Residual Feed Intake", "value": 38 },
          { "label": "Milking Speed", "value": 103 }
        ],
        "fertilities": [
          { "label": "SCR", "value": 1.9 }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": 1096 },
          { "label": "PTA Protein (lbs)", "value": 49 },
          { "label": "PTA Protein (%)", "value": 0.05 },
          { "label": "PTA Fat (lbs)", "value": 45 },
          { "label": "PTA Fat (%)", "value": 0.01 },
          { "label": "Production Reliability", "value": 99 },
          { "label": "Dtrs/Herds (Production)", "value": "1008/143" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 0.68 },
          { "label": "Udder Composite", "value": 0.67 },
          { "label": "Feet & Leg Composite", "value": 0.72 },
          { "label": "Body Weight Composite", "value": -0.06 },
          { "label": "Dairy Composite", "value": -1.00 },
          { "label": "Type Reliability", "value": 96 },
          { "label": "Dtrs/Herds (Type)", "value": "177/31" }
        ]
      }
    ],

    "typeTraits": [
      { "label": "Stature", "value": "short", "score": -0.08, "opposite": "tall" },
      { "label": "Strength", "value": "frail", "score": -0.35, "opposite": "strong" },
      { "label": "Body Depth", "value": "shallow", "score": -0.86, "opposite": "deep" },
      { "label": "Dairy Form", "value": "tight ribbed", "score": -0.33, "opposite": "open ribbed" },
      { "label": "Rump Width", "value": "narrow", "score": 0.73, "opposite": "wide" },
      { "label": "Rump Angle", "value": "high pins", "score": 0.83, "opposite": "sloped" },
      { "label": "Rear Leg (side view)", "value": "posty", "score": 1.28, "opposite": "sickled" },
      { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.56, "opposite": "straight" },
      { "label": "Foot Angle", "value": "low angle", "score": 0.22, "opposite": "steep angle" },
      { "label": "Feet & Leg Score", "value": "low", "score": 0.69, "opposite": "high" },
      { "label": "Fore Udder", "value": "loose", "score": 1.29, "opposite": "strong" },
      { "label": "Rear Udder Height", "value": "low", "score": 0.23, "opposite": "high" },
      { "label": "Rear Udder Width", "value": "narrow", "score": 0.29, "opposite": "wide" },
      { "label": "Udder Cleft", "value": "weak", "score": 1.01, "opposite": "strong" },
      { "label": "Udder Depth", "value": "deep", "score": 1.46, "opposite": "shallow" },
      { "label": "Front Teat Placement", "value": "wide", "score": 1.54, "opposite": "close" },
      { "label": "Rear Teat Placement", "value": "wide", "score": 1.51, "opposite": "close" },
      { "label": "Teat Length", "value": "short", "score": -2.04, "opposite": "long" }
    ],

    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": 96, "rel": 79 }, "cdcb": { "value": 1.7, "rel": 86 } },
      { "trait": "Retained Placenta", "zoetis": { "value": 99, "rel": 90 }, "cdcb": { "value": -0.3, "rel": 83 } },
      { "trait": "Metritis", "zoetis": { "value": 108, "rel": 96 }, "cdcb": { "value": 1.8, "rel": 83 } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 105, "rel": 80 }, "cdcb": { "value": 0.0, "rel": 74 } },
      { "trait": "Ketosis", "zoetis": { "value": 106, "rel": 85 }, "cdcb": { "value": 1.7, "rel": 84 } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": 106, "rel": 84 }, "cdcb": { "value": 0.7, "rel": 91 } },
      { "trait": "Lameness", "zoetis": { "value": 94, "rel": 73 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Respiratory Disease", "zoetis": { "value": 105, "rel": 73 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Abortion", "zoetis": { "value": 105, "rel": 60 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Twinning", "zoetis": { "value": 87, "rel": 55 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cystic Ovary", "zoetis": { "value": 51, "rel": 102 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 0.5, "rel": 72 } },
      { "trait": "Calf Respiratory Disease", "zoetis": { "value": 91, "rel": 87 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Scours", "zoetis": { "value": 94, "rel": 87 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Livability", "zoetis": { "value": 97, "rel": 87 }, "cdcb": { "value": null, "rel": null } }
    ],

    "genetics": [
      "born_on: June 19, 2017",
      "beta_casein: A2A2",
      "kappa_casein: BB",
      "EFI: 10.0%",
      "aAa: 432"
    ]
  },
  {
    "id": "14HO15154",
    "registration_number": "HO840003203292370",
    "name": "BIGSHOT",
    "full_name": "RENEGADE X FRAZZLED X AHEAD",
    "price": 0,
    "category": "Red",
    "pedigree": [
      "Sire: S-S-I PR RENEGADE-ET",
      "Dam: T-SPRUCE FRAZZLED 10663-ET GP-80",
      "5-06 3X 286D 18,965 kgM 3.8% 713 kgF 3.0% 575 kgP",
      "MGS: MELARRY JOSUPER FRAZZLED-ET"
    ],


  
    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "TPI", "value": 2969 },
          { "label": "NM$", "value": 981 },
          { "label": "CM$", "value": 992 },
          { "label": "Feed Efficiency ($)", "value": 266 },
          { "label": "Feed Saved", "value": 77 },
          { "label": "HHP$", "value": 1164 },
          { "label": "DWP$", "value": 1037 },
          { "label": "WT$", "value": 97 },
          { "label": "CW$", "value": -29 }
        ],
        "fertilities": [
          { "label": "Fertility Index", "value": 1.8 / 95 },
          { "label": "DPR", "value": 0.7 / 95 },
          { "label": "HCR", "value": 1.7 / 95 },
          { "label": "CCR", "value": 2.6 / 94 }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "SCE", "value": 2.4 / 99 },
          { "label": "DCE", "value": 2.6 / 93 },
          { "label": "Gestation Length", "value": 0.8 / 99 },
          { "label": "Early First Calving", "value": 3.3 / 86 },
          { "label": "SCS", "value": 5.9 / 96 },
          { "label": "DSB", "value": 4.4 / 93 },
          { "label": "Productive Life", "value": 5.3 / 90 },
          { "label": "Livability", "value": -0.9 / 77 },
          { "label": "Residual Feed Intake", "value": -2 / 28 },
          { "label": "SCS/Rel", "value": 2.76 / 98 },
          { "label": "Milking Speed", "value": 96 / 81 }
        ],
        "fertilities": [
          { "label": "SCR", "value": -1.4 / 97 }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": 1740 },
          { "label": "PTA Protein (lbs)", "value": 63 },
          { "label": "PTA Protein (%)", "value": 0.03 },
          { "label": "PTA Fat (lbs)", "value": 95 },
          { "label": "PTA Fat (%)", "value": 0.10 },
          { "label": "Production Reliability", "value": 99 },
          { "label": "Dtrs/Herds (Production)", "value": "2203/181" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 0.68 },
          { "label": "Udder Composite", "value": 0.65 },
          { "label": "Feet & Leg Composite", "value": 0.51 },
          { "label": "Body Weight Composite", "value": -0.50 },
          { "label": "Dairy Composite", "value": -1.25 },
          { "label": "Type Reliability", "value": 95 },
          { "label": "Dtrs/Herds (Type)", "value": "250/55" }
        ]
      }
    ],

    "typeTraits": [
      { "label": "Stature", "value": "short", "score": 0.40, "opposite": "tall" },
      { "label": "Strength", "value": "frail", "score": -0.46, "opposite": "strong" },
      { "label": "Body Depth", "value": "shallow", "score": -0.63, "opposite": "deep" },
      { "label": "Dairy Form", "value": "tight ribbed", "score": 0.60, "opposite": "open ribbed" },
      { "label": "Rump Width", "value": "narrow", "score": 0.41, "opposite": "wide" },
      { "label": "Rump Angle", "value": "high pins", "score": 0.58, "opposite": "sloped" },
      { "label": "Rear Leg (side view)", "value": "posty", "score": 1.25, "opposite": "sickled" },
      { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.69, "opposite": "straight" },
      { "label": "Foot Angle", "value": "low angle", "score": -0.17, "opposite": "steep angle" },
      { "label": "Feet & Leg Score", "value": "low", "score": 0.62, "opposite": "high" },
      { "label": "Fore Udder", "value": "loose", "score": 0.52, "opposite": "strong" },
      { "label": "Rear Udder Height", "value": "low", "score": 1.11, "opposite": "high" },
      { "label": "Rear Udder Width", "value": "narrow", "score": 0.62, "opposite": "wide" },
      { "label": "Udder Cleft", "value": "weak", "score": 0.22, "opposite": "strong" },
      { "label": "Udder Depth", "value": "deep", "score": 0.96, "opposite": "shallow" },
      { "label": "Front Teat Placement", "value": "wide", "score": -0.20, "opposite": "close" },
      { "label": "Rear Teat Placement", "value": "wide", "score": 0.11, "opposite": "close" },
      { "label": "Teat Length", "value": "short", "score": -0.48, "opposite": "long" }
    ],

    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": 101, "rel": 70 }, "cdcb": { "value": 4.3, "rel": 87 } },
      { "trait": "Retained Placenta", "zoetis": { "value": 95, "rel": 89 }, "cdcb": { "value": -0.7, "rel": 90 } },
      { "trait": "Metritis", "zoetis": { "value": 103, "rel": 88 }, "cdcb": { "value": 0.9, "rel": 90 } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 94, "rel": 69 }, "cdcb": { "value": 0.0, "rel": 74 } },
      { "trait": "Ketosis", "zoetis": { "value": 102, "rel": 84 }, "cdcb": { "value": 2.4, "rel": 83 } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": 105, "rel": 70 }, "cdcb": { "value": 1, "rel": 88 } },
      { "trait": "Lameness", "zoetis": { "value": 103, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Respiratory Disease", "zoetis": { "value": 99, "rel": 60 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Abortion", "zoetis": { "value": 96, "rel": 51 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Twinning", "zoetis": { "value": 95, "rel": 87 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cystic Ovary", "zoetis": { "value": 101, "rel": 39 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 0.5, "rel": 68 } },
      { "trait": "Calf Respiratory Disease", "zoetis": { "value": 92, "rel": 94 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Scours", "zoetis": { "value": 107, "rel": 95 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Livability", "zoetis": { "value": 90, "rel": 95 }, "cdcb": { "value": null, "rel": null } }
    ],

    "genetics": [
      " Born On: March 31, 2019",
      "Beta-casein: A1A2",
      "Kappa-casein: AB",
      "EFI: 9.8%",
      "aAa: 234"
    ]


 





  },
  {
    "id": "14HO15779",
    "registration_number": "HO840003223871570",
    "name": "GIBSON ",
    "full_name": "MOONSHINER X RENEGADE X FRAZZLED",
    "price": 0,
    "category": "Red",
    "pedigree": [
      "Sire: FLY-HIGHER MOONSHINER-ET",
      "Dam: S-S-I RENEGADE ASH 10276-ET GP-82",
      "3-10 3X 301D 14,674 kgM 4.5% 658 kgF 3.1% 459 kgP",
      "MGS: S-S-I PR RENEGADE-ET"
    ],





  
    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "TPI", "value": 2936 },
          { "label": "NM$", "value": 954 },
          { "label": "CM$", "value": 967 },
          { "label": "Feed Efficiency ($)", "value": 233 },
          { "label": "Feed Saved", "value": 232 },
          { "label": "HHP$", "value": 1020 },
          { "label": "DWP$", "value": 985 },
          { "label": "WT$", "value": 106 },
          { "label": "CW$", "value": 17 }
        ],
        "fertilities": [
          { "label": "Fertility Index", "value": 1.3 / 78 },
          { "label": "DPR", "value": 0.2 / 77 },
          { "label": "HCR", "value": 1.7 / 82 },
          { "label": "CCR", "value": 1.6 / 78 }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "SCE", "value": 1.9 / 97 },
          { "label": "DCE", "value": 1.5 / 70 },
          { "label": "Gestation Length", "value": -1.9 / 76 },
          { "label": "Early First Calving", "value": 3.6 / 74 },
          { "label": "SCS", "value": 6.5 / 93 },
          { "label": "DSB", "value": 4.0 / 64 },
          { "label": "Productive Life", "value": 6.0 / 77 },
          { "label": "Livability", "value": -0.1 / 73 },
          { "label": "Residual Feed Intake", "value": -2 / 28 },
          { "label": "SCS/Rel", "value": 2.68 / 79 },
          { "label": "Milking Speed", "value": 97 / 78 }
        ],
        "fertilities": [
          { "label": "SCR", "value": 0.1 / 95 }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": 1622 },
          { "label": "PTA Protein (lbs)", "value": 60 },
          { "label": "PTA Protein (%)", "value": 0.03 },
          { "label": "PTA Fat (lbs)", "value": 66 },
          { "label": "PTA Fat (%)", "value": 0.01 },
          { "label": "Production Reliability", "value": 86 },
          { "label": "Dtrs/Herds (Production)", "value": "2203/181" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 1.00 },
          { "label": "Udder Composite", "value": 1.78 },
          { "label": "Feet & Leg Composite", "value": 0.86 },
          { "label": "Body Weight Composite", "value": -1.52 },
          { "label": "Dairy Composite", "value": -1.22 },
          { "label": "Type Reliability", "value": 81 },
          { "label": "Dtrs/Herds (Type)", "value": "" }
        ]
      }
    ],

    "typeTraits": [
      { "label": "Stature", "value": "short", "score": -0.69, "opposite": "tall" },
      { "label": "Strength", "value": "frail", "score": -1.41, "opposite": "strong" },
      { "label": "Body Depth", "value": "shallow", "score": -1.44, "opposite": "deep" },
      { "label": "Dairy Form", "value": "tight ribbed", "score": 0.29, "opposite": "open ribbed" },
      { "label": "Rump Width", "value": "narrow", "score": -0.56, "opposite": "wide" },
      { "label": "Rump Angle", "value": "high pins", "score": -0.58, "opposite": "sloped" },
      { "label": "Rear Leg (side view)", "value": "posty", "score": 0.67, "opposite": "sickled" },
      { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.31, "opposite": "straight" },
      { "label": "Foot Angle", "value": "low angle", "score": 0.52, "opposite": "steep angle" },
      { "label": "Feet & Leg Score", "value": "low", "score": 0.78, "opposite": "high" },
      { "label": "Fore Udder", "value": "loose", "score": 1.82, "opposite": "strong" },
      { "label": "Rear Udder Height", "value": "low", "score": 1.93, "opposite": "high" },
      { "label": "Rear Udder Width", "value": "narrow", "score": 1.22, "opposite": "wide" },
      { "label": "Udder Cleft", "value": "weak", "score": 0.87, "opposite": "strong" },
      { "label": "Udder Depth", "value": "deep", "score": 1.64, "opposite": "shallow" },
      { "label": "Front Teat Placement", "value": "wide", "score": 0.73, "opposite": "close" },
      { "label": "Rear Teat Placement", "value": "wide", "score": 1.34, "opposite": "close" },
      { "label": "Teat Length", "value": "short", "score": -0.72, "opposite": "long" }
    ],

    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": 100, "rel": 55 }, "cdcb": { "value": 2.5, "rel": 73 } },
      { "trait": "Retained Placenta", "zoetis": { "value": 102, "rel": 56 }, "cdcb": { "value": 0.5, "rel": 71 } },
      { "trait": "Metritis", "zoetis": { "value": 107, "rel": 53 }, "cdcb": { "value": 2.9, "rel": 70 } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 94, "rel": 44 }, "cdcb": { "value": 0.0, "rel": 61 } },
      { "trait": "Ketosis", "zoetis": { "value": 103, "rel": 45 }, "cdcb": { "value": 2.5, "rel": 70 } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": 101, "rel": 44 }, "cdcb": { "value": 0.9, "rel": 73 } },
      { "trait": "Lameness", "zoetis": { "value": 103, "rel": 51 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Respiratory Disease", "zoetis": { "value": 101, "rel": 45 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Abortion", "zoetis": { "value": 94, "rel": 38 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Twinning", "zoetis": { "value": 94, "rel": 52 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cystic Ovary", "zoetis": { "value": 96, "rel": 26 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 0.8, "rel": 62 } },
      { "trait": "Calf Respiratory Disease", "zoetis": { "value": 102, "rel": 75 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Scours", "zoetis": { "value": 103, "rel": 89 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Livability", "zoetis": { "value": 101, "rel": 79 }, "cdcb": { "value": null, "rel": null } }
    ],

    "genetics": [
      " Born On: November 26, 2020",
      "Beta-casein: A1A2",
      "Kappa-casein: AB",
      "EFI: 10.5%",
      "aAa: 243"
    ]






 




  },
   
  {
    "id": "14HO16395",
    "registration_number": "HO840003217141058",
    "name": "GAMEPLAN",
    "full_name": "GAMEDAY X LEGACY X ROLAN",
    "price": 0,
    "category": "Red",
    "pedigree": [
      "Sire: RMD-DOTTERER SSI GAMEDAY-ET",
      "Dam: CHERRYPENCOL LEE-ET",
      "3-01 2X 305D 10,891 kgM 5.1% 553 kgF 4.0% 435 kgP",
      "MGS: PINE-TREE CW LEGACY-ET"
    ],
    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "TPI", "value": 3124 },
          { "label": "NM$", "value": 1149 },
          { "label": "CM$", "value": 1183 },
          { "label": "Feed Efficiency ($)", "value": 269 },
          { "label": "Feed Saved", "value": 177 },
          { "label": "HHP$", "value": 1249 },
          { "label": "DWP$", "value": 1150 },
          { "label": "WT$", "value": 4 },
          { "label": "CW$", "value": 8 }
        ],
        "fertilities": [
          { "label": "Fertility Index", "value": "1.7/78" },
          { "label": "DPR", "value": "0.4/78" },
          { "label": "HCR", "value": "2.7/76" },
          { "label": "CCR", "value": "2.0/78" }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "SCE", "value": "2.3/75" },
          { "label": "DCE", "value": "2.9/70" },
          { "label": "Gestation Length", "value": "-0.3/70" },
          { "label": "Early First Calving", "value": "0.7/70" },
          { "label": "SSB", "value": "6.4/65" },
          { "label": "DSB", "value": "3.6/64" },
          { "label": "Productive Life", "value": "7.4/78" },
          { "label": "Livability", "value": "2.6/73" },
          { "label": "Residual Feed Intake", "value": "-1.20/27" },
          { "label": "SCS", "value": "2.49/79" },
          { "label": "Milking Speed", "value": "103/78" }
        ],
        "fertilities": [
          { "label": "SCR", "value": "1.3/76" }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": 178 },
          { "label": "PTA Protein (lbs)", "value": 48 },
          { "label": "PTA Protein (%)", "value": 0.16 },
          { "label": "PTA Fat (lbs)", "value": 107 },
          { "label": "PTA Fat (%)", "value": 0.39 },
          { "label": "Production Reliability", "value": 82 },
          { "label": "Dtrs/Herds (Production)", "value": "" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 1.37 },
          { "label": "Udder Composite", "value": 2.18 },
          { "label": "Feet & Leg Composite", "value": 0.34 },
          { "label": "Body Weight Composite", "value": -0.37 },
          { "label": "Dairy Composite", "value": -0.02 },
          { "label": "Type Reliability", "value": 81 },
          { "label": "Dtrs/Herds (Type)", "value": "" }
        ]
      }
    ],
    "typeTraits": [
      { "label": "Stature", "value": "short", "score": 0.59, "opposite": "tall" },
      { "label": "Strength", "value": "frail", "score": 0.34, "opposite": "strong" },
      { "label": "Body Depth", "value": "shallow", "score": 0.42, "opposite": "deep" },
      { "label": "Dairy Form", "value": "tight ribbed", "score": 0.94, "opposite": "open ribbed" },
      { "label": "Rump Width", "value": "narrow", "score": 1.66, "opposite": "wide" },
      { "label": "Rump Angle", "value": "high pins", "score": 0.81, "opposite": "sloped" },
      { "label": "Rear Leg (side view)", "value": "posty", "score": 0.12, "opposite": "sickled" },
      { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.94, "opposite": "straight" },
      { "label": "Foot Angle", "value": "low angle", "score": 0.52, "opposite": "steep angle" },
      { "label": "Feet & Leg Score", "value": "low", "score": 0.05, "opposite": "high" },
      { "label": "Fore Udder", "value": "low", "score": 2.87, "opposite": "strong" },
      { "label": "Rear Udder Height", "value": "low", "score": 2.62, "opposite": "high" },
      { "label": "Rear Udder Width", "value": "narrow", "score": 2.29, "opposite": "wide" },
      { "label": "Udder Cleft", "value": "weak", "score": 0.68, "opposite": "strong" },
      { "label": "Udder Depth", "value": "deep", "score": 2.19, "opposite": "shallow" },
      { "label": "Front Teat Placement", "value": "wide", "score": 1.33, "opposite": "close" },
      { "label": "Rear Teat Placement", "value": "wide", "score": 1.51, "opposite": "close" },
      { "label": "Teat Length", "value": "short", "score": -1.51, "opposite": "long" }
    ],
    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": 98, "rel": 58 }, "cdcb": { "value": 4.4, "rel": 74 } },
      { "trait": "Retained Placenta", "zoetis": { "value": 105, "rel": 60 }, "cdcb": { "value": 0.1, "rel": 76 } },
      { "trait": "Metritis", "zoetis": { "value": 108, "rel": 57 }, "cdcb": { "value": 2.1, "rel": 71 } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 95, "rel": 52 }, "cdcb": { "value": 0.4, "rel": 72 } },
      { "trait": "Ketosis", "zoetis": { "value": 104, "rel": 51 }, "cdcb": { "value": 1.8, "rel": 70 } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": 101, "rel": 49 }, "cdcb": { "value": 1.3, "rel": 74 } },
      { "trait": "Lameness", "zoetis": { "value": 99, "rel": 45 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Respiratory Disease", "zoetis": { "value": 101, "rel": 41 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Abortion", "zoetis": { "value": 91, "rel": 45 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Twinning", "zoetis": { "value": 101, "rel": 39 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cystic Ovary", "zoetis": { "value": 100, "rel": 30 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 1.2, "rel": 63 } },
      { "trait": "Calf Respiratory Disease", "zoetis": { "value": 98, "rel": 54 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Scours", "zoetis": { "value": 100, "rel": 52 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Livability", "zoetis": { "value": 98, "rel": 52 }, "cdcb": { "value": null, "rel": null } }
    ],
    "genetics": [
      "Born On: August 31, 2021",
      "Beta-casein: A2A2",
      "Kappa-casein: AB",
      "EFI: 10.9%",
      "aAa: 324"
    ]
  }
  ,
  {
    "id": "14JE00560",
    "registration_number": "JEUSA000117192245",
    "name": "DANDEE",
    "full_name": "WINDHAVENS LOTTO DANDEE\nLOTTO X WINDHAVENS HANDIMAN X PARAMOUNT",
    "price": 0,
    "category": "JE",
    "pedigree": [
      "Sire: MVP JEVON LOTTO-ET",
      "Dam: WINDHAVENS HANDIMAN DAISY",
      "MGS: WINDHAVENS HANDIMAN"
    ],
  
    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "PI", "value": 61 },
          { "label": "NM$", "value": 246 },
          { "label": "CM$", "value": 246 },
          { "label": "Feed Saved", "value": null },
          { "label": "HHP$", "value": 309 },
          { "label": "DWP$", "value": null },
          { "label": "WT$", "value": null },
          { "label": "CW$", "value": null }
        ],
        "fertilities": [
          { "label": "DR/Rel. %", "value": "2.1/84" },
          { "label": "HCR/Rel. %", "value": "2.2/70" },
          { "label": "CCR/Rel. %", "value": "1.9/85" }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "Gestation Length/Rel. %", "value": "-1,097" },
          { "label": "Productive Life/Rel. %", "value": "0.8/88" },
          { "label": "Livability/Rel. %", "value": "0.1/74" },
          { "label": "Early First Calving/Rel. %", "value": "4.6/75" },
          { "label": "SCS/Rel. %", "value": "2.92/91" },
          { "label": "Milking Speed/Rel. %", "value": "104/34" }
        ],
        "fertilities": [
          { "label": "SCR/Rel. %", "value": null }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": 570 },
          { "label": "PTA Protein (lbs)", "value": 13 },
          { "label": "PTA Protein (%)", "value": 0.04 },
          { "label": "PTA Fat (lbs)", "value": 22 },
          { "label": "PTA Fat (%)", "value": 0.03 },
          { "label": "Production Reliability %", "value": 94 },
          { "label": "Dtrs/Herds", "value": "106/43" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 0.30 },
          { "label": "Type Reliability %", "value": 89 },
          { "label": "Dtrs/Herds (Type)", "value": "42/19" }
        ]
      }
    ],

    "typeTraits": [
      { "label": "Stature", "value": "short" },
      { "label": "Strength", "value": "frail" },
      { "label": "Dairy Form", "value": "tight ribbed" },
      { "label": "Rump Width", "value": "narrow" },
      { "label": "Rump Angle", "value": "high pins" },
      { "label": "Rear Leg (side view)", "value": "posty" },
      { "label": "Foot Angle", "value": "low angle" },
      { "label": "Fore Udder", "value": "loose" },
      { "label": "Rear Udder Height", "value": "low" },
      { "label": "Rear Udder Width", "value": "narrow" },
      { "label": "Udder Cleft", "value": "weak" },
      { "label": "Udder Depth", "value": "deep" },
      { "label": "Front Teat Placement", "value": "wide" },
      { "label": "Rear Teat (rear view)", "value": "wide" },
      { "label": "Rear Teat (side view)", "value": "close" },
      { "label": "Teat Length", "value": "short" }
    ],

    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Lameness", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Retained Placenta", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Metritis", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Cow Abortion", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Twinning", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Heifer Livability", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Cystic Ovary", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Ketosis", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Cow Respiratory Disease", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Calf Respiratory Disease", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Calf Scours", "zoetis": { "value": "N/A", "rel": "N/A" } },
      { "trait": "Calf Livability", "zoetis": { "value": "N/A", "rel": "N/A" } }
    ],

    "genetics": [
      "Born On: May 02, 2010",
      "Beta-casein: A1A2",
      "Kappa-casein: BB",
      "EFI: 7.5%",
      "aAa: 246"
    ],

  },
  {
    "id": "14JE00759",
    "registration_number": "JEUSA000067460157",
    "name": "KEYSTONE",
    "full_name": "LEMONHEAD X HILARIO X LEGAL",
    "price": 0,
    "category": "JE",
    "pedigree": [
      "Sire: STEINHAUERS SAMSON LEMONHEAD",
      "Dam: SHAN-MAR HILARIO CHARLENE-ET EX-90",
      "6-00 3X  318D  2,599 kgM  5.3%  137 kgF  3.8%  99 kgP",
      "MGS: CAL-MART RENEGADE HILARIO-ET"
    ],
    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "JPI", "value": 63 },
          { "label": "NM$", "value": 223 },
          { "label": "CM$", "value": 232 },
          { "label": "Feed Saved", "value": null },
          { "label": "HHP$", "value": 259 },
          { "label": "DWP$", "value": 447 },
          { "label": "WT$", "value": 148 },
          { "label": "CW$", "value": 60 }
        ],
        "fertilities": [
          { "label": "DPR", "value": "0.7/89" },
          { "label": "HCR", "value": "0.4/79" },
          { "label": "CCR", "value": "0.9/89" }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "Gestation Length", "value": "0.2/98" },
          { "label": "Productive Life", "value": "2.2/91" },
          { "label": "Livability", "value": "1.3/78" },
          { "label": "SCS", "value": "2.81/92" },
          { "label": "Milking Speed", "value": "103/51" }
        ],
        "fertilities": [
          { "label": "SCR", "value": null }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": -317 },
          { "label": "PTA Protein (lbs)", "value": 11 },
          { "label": "PTA Protein (%)", "value": 0.12 },
          { "label": "PTA Fat (lbs)", "value": 20 },
          { "label": "PTA Fat (%)", "value": 0.19 },
          { "label": "Production Reliability", "value": 98 },
          { "label": "Dtrs/Herds (Production)", "value": "278/32" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 0.50 },
          { "label": "JUI", "value": 16.20 },
          { "label": "Type Reliability", "value": 95 },
          { "label": "Dtrs/Herds (Type)", "value": "132/14" }
        ]
      }
    ],
    "typeTraits": [
      { "label": "Stature", "value": "short", "score": -1.50, "opposite": "tall" },
      { "label": "Strength", "value": "frail", "score": -0.70, "opposite": "strong" },
      { "label": "Dairy Form", "value": "tight ribbed", "score": 0.10, "opposite": "open ribbed" },
      { "label": "Rump Width", "value": "narrow", "score": 0.40, "opposite": "wide" },
      { "label": "Rump Angle", "value": "high pins", "score": 0.60, "opposite": "sloped" },
      { "label": "Rear Leg (side view)", "value": "posty", "score": 0.20, "opposite": "sickled" },
      { "label": "Foot Angle", "value": "low angle", "score": -0.40, "opposite": "steep angle" },
      { "label": "Fore Udder", "value": "loose", "score": 1.70, "opposite": "strong" },
      { "label": "Rear Udder Height", "value": "low", "score": -0.20, "opposite": "high" },
      { "label": "Rear Udder Width", "value": "narrow", "score": -0.80, "opposite": "wide" },
      { "label": "Udder Cleft", "value": "weak", "score": 0.20, "opposite": "strong" },
      { "label": "Udder Depth", "value": "deep", "score": 2.40, "opposite": "shallow" },
      { "label": "Front Teat Placement", "value": "wide", "score": -0.10, "opposite": "close" },
      { "label": "Rear Teat Placement", "value": "wide", "score": -0.40, "opposite": "close" },
      { "label": "Rear Teat (side view)", "value": "wide", "score": -0.80, "opposite": "close" },
      { "label": "Teat Length", "value": "short", "score": -1.50, "opposite": "long" }
    ],
    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": 108, "rel": 63 }, "cdcb": { "value": -0.3, "rel": 73 } },
      { "trait": "Lameness", "zoetis": { "value": 94, "rel": 74 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Retained Placenta", "zoetis": { "value": 102, "rel": 73 }, "cdcb": { "value": 0.3, "rel": 65 } },
      { "trait": "Metritis", "zoetis": { "value": 102, "rel": 77 }, "cdcb": { "value": 0.6, "rel": 61 } },
      { "trait": "Cow Abortion", "zoetis": { "value": 100, "rel": 50 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": 107, "rel": 55 }, "cdcb": { "value": 0.0, "rel": 66 } },
      { "trait": "Twinning", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Heifer Livability", "zoetis": { "value": 98, "rel": 69 }, "cdcb": { "value": -0.3, "rel": 59 } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 99, "rel": 64 }, "cdcb": { "value": 0.1, "rel": 56 } },
      { "trait": "Cystic Ovary", "zoetis": { "value": 98, "rel": 41 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Ketosis", "zoetis": { "value": 96, "rel": 76 }, "cdcb": { "value": -1, "rel": 58 } }
    ],
    "genetics": [
      "Born On: October 13, 2015",
      "Beta-casein: A2A2",
      "Kappa-casein: BB",
      "CSI: 91.1%",
      "aAa: 243"
    ]
  },
  {
    "id": "141E00769",
    "registration_number": "JE840003011730374",
    "name": "STONEY",
    "full_name": "JX SPRING CREEK MARLO STONEY (3)-ET JNS-TF N1-F JPFF\nJX MARLO (2) X ALLSTAR X Q IMPULS",
    "price": 0,
    "category": "JE",
    "pedigree": [
      "Sire: JX FARIA BROTHERS MARLO (2)-ET",
      "Dam: SPRING-CREEK ALLSTAR SPIRT EX-90",
      "8-04 3X 106D 2,018 kgM 4.7% 96 kgF 3.5% 70 kgP",
      "MGS: SUNSET CANYON ANTHEMS ALLSTAR-ET"
    ],
  
    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "JPI", "value": 140 },
          { "label": "NM$", "value": 562 },
          { "label": "CM$", "value": 574 },
          { "label": "Feed Saved", "value": null },
          { "label": "HHP$", "value": 639 },
          { "label": "DWP$", "value": 652 },
          { "label": "WT$", "value": 118 },
          { "label": "CW$", "value": 46 }
        ],
        "fertilities": [
          { "label": "DR/Rel. %", "value": "0.299" },
          { "label": "HCR/Rel. %", "value": "3.797" },
          { "label": "CCR/Rel. %", "value": "1.099" }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "Gestation Length/Rel. %", "value": "1.499" },
          { "label": "Productive Life/Rel. %", "value": "6.299" },
          { "label": "Livability/Rel. %", "value": "3.193" },
          { "label": "Early First Calving/Rel. %", "value": "8.097" },
          { "label": "SCS/Rel. %", "value": "2.9099" },
          { "label": "Milking Speed/Rel. %", "value": "100/29" }
        ],
        "fertilities": [
          { "label": "SCR/Rel. %", "value": null }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": -204 },
          { "label": "PTA Protein (lbs)", "value": 12 },
          { "label": "PTA Protein (%)", "value": 0.10 },
          { "label": "PTA Fat (lbs)", "value": 57 },
          { "label": "PTA Fat (%)", "value": 0.35 },
          { "label": "Production Reliability %", "value": 99 },
          { "label": "Dtrs/Herds", "value": "7846/165" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 1.40 },
          { "label": "Type Reliability %", "value": 99 },
          { "label": "Dtrs/Herds (Type)", "value": "2107/84" }
        ]
      }
    ],

    "typeTraits": [
      { "label": "Stature", "value": "short" },
      { "label": "Strength", "value": "frail" },
      { "label": "Dairy Form", "value": "tight ribbed" },
      { "label": "Rump Width", "value": "narrow" },
      { "label": "Rump Angle", "value": "high pins" },
      { "label": "Rear Leg (side view)", "value": "easy" },
      { "label": "Foot Angle", "value": "low angle" },
      { "label": "Fore Udder", "value": "loose" },
      { "label": "Rear Udder Height", "value": "low" },
      { "label": "Rear Udder Width", "value": "narrow" },
      { "label": "Udder Cleft", "value": "weak" },
      { "label": "Udder Depth", "value": "deep" },
      { "label": "Front Teat Placement", "value": "wide" },
      { "label": "Rear Teat (rear view)", "value": "wide" },
      { "label": "Rear Teat (side view)", "value": "close" },
      { "label": "Teat Length", "value": "short" }
    ],

    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": 103, "rel": 95 } },
      { "trait": "Lameness", "zoetis": { "value": 107, "rel": 97 } },
      { "trait": "Retained Placenta", "zoetis": { "value": 102, "rel": 97 } },
      { "trait": "Metritis", "zoetis": { "value": 107, "rel": 98 } },
      { "trait": "Cow Abortion", "zoetis": { "value": 103, "rel": 90 } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": 111, "rel": 95 } },
      { "trait": "Twinning", "zoetis": { "value": 99, "rel": 97 } },
      { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": 94 } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 98, "rel": 93 } },
      { "trait": "Cystic Ovary", "zoetis": { "value": 91, "rel": 96 } },
      { "trait": "Ketosis", "zoetis": { "value": 105, "rel": 97 } },
      { "trait": "Cow Respiratory Disease", "zoetis": { "value": 115, "rel": 97 } },
      { "trait": "Calf Respiratory Disease", "zoetis": { "value": 96, "rel": 98 } },
      { "trait": "Calf Scours", "zoetis": { "value": 85, "rel": 98 } },
      { "trait": "Calf Livability", "zoetis": { "value": null, "rel": null } }
    ],

    "cdcbValues": [
      { "trait": "Mastitis", "value": 0.6, "rel": 98 },
      { "trait": "Retained Placenta", "value": 0.2, "rel": 97 },
      { "trait": "Metritis", "value": 1.2, "rel": 97 },
      { "trait": "Displaced Abomasum", "value": 0.9, "rel": 99 },
      { "trait": "Ketosis", "value": -0.9, "rel": 79 },
      { "trait": "Hypocalcemia/Milk Fever", "value": 0.4, "rel": 92 },
      { "trait": "Twinning", "value": 0.4, "rel": 95 }
    ],

    "genetics": [
      "born On: July 04, 2016",
      "Beta-casein: A2A2",
      "Kappa-casein: AB",
      "EFI: 8.4%",
      "aAa: 462",
    ],
  },
  {
    "id": "250HO15026",
    "registration_number": "HO840003205703487",
    "name": "ROADSTER",
    "full_name": "RIVETING X HIPHOP X RUBICON",
    "price": 0,
    "category": "Red",
    "pedigree": [
      "Sire: S-S-I BG FRZZLD RIVETING-ET",
      "Dam: S-S-I 1BR 11596 3147-ET",
      "MGS: AOT HIPHOP-ET"
    ],
    "allDetails": [
      {
        "index": "indexes",
        "fertility": "DAUGHTER FERTILITY",
        "indexes": [
          { "label": "TPI", "value": 2902 },
          { "label": "NM$", "value": 865 },
          { "label": "CM$", "value": 880 },
          { "label": "Feed Efficiency ($)", "value": 212 },
          { "label": "Feed Saved", "value": 22 },
          { "label": "HHP$", "value": 971 },
          { "label": "DWP$", "value": 937 },
          { "label": "WT$", "value": 143 },
          { "label": "CW$", "value": -36 }
        ],
        "fertilities": [
          { "label": "Fertility Index/Rel.%", "value": "1.4/90" },
          { "label": "DPR/Rel.%", "value": "0.1/90" },
          { "label": "HCR/Rel.%", "value": "3.6/90" },
          { "label": "CCR/Rel.%", "value": "1.3/89" }
        ]
      },
      {
        "index": "MANAGEMENT TRAITS",
        "fertility": "SIRE FERTILITY",
        "indexes": [
          { "label": "SCE/Rel.%", "value": "1.9/99" },
          { "label": "DCE/Rel.%", "value": "1.5/85" },
          { "label": "Gestation Length/Rel.%", "value": "2.4/99" },
          { "label": "DSB/Rel.%", "value": "3.2/86" },
          { "label": "Productive Life/Rel.%", "value": "4.7/88" },
          { "label": "Livability/Rel.%", "value": "2.1/75" },
          { "label": "SCS/Rel.%", "value": "2.79/95" },
          { "label": "Milking Speed/Rel.%", "value": "97/80" }
        ],
        "fertilities": [
          { "label": "SCR/Rel.%", "value": null }
        ]
      },
      {
        "index": "Production",
        "fertility": "Type",
        "indexes": [
          { "label": "PTA Milk (lbs)", "value": 810 },
          { "label": "PTA Protein (lbs)", "value": 43 },
          { "label": "PTA Protein (%)", "value": 0.07 },
          { "label": "PTA Fat (lbs)", "value": 87 },
          { "label": "PTA Fat (%)", "value": 0.21 },
          { "label": "Body Weight Composite", "value": 0.87 },
          { "label": "Production Reliability %", "value": 97 },
          { "label": "Dtrs/Herds (Production)", "value": "550/123" }
        ],
        "fertilities": [
          { "label": "PTA Type", "value": 1.70 },
          { "label": "Udder Composite", "value": 1.61 },
          { "label": "Feet & Leg Composite", "value": -0.10 },
          { "label": "Dairy Composite", "value": 1.04 },
          { "label": "Type Reliability %", "value": 92 },
          { "label": "Dtrs/Herds (Type)", "value": "97/48" }
        ]
      }
    ],
    "typeTraits": [
      { "label": "Stature", "value": "short", "score": 1.59, "opposite": "tall" },
      { "label": "Strength", "value": "frail", "score": 0.99, "opposite": "strong" },
      { "label": "Body Depth", "value": "shallow", "score": 1.05, "opposite": "deep" },
      { "label": "Dairy Form", "value": "tight ribbed", "score": 1.17, "opposite": "open ribbed" },
      { "label": "Rump Width", "value": "narrow", "score": 1.49, "opposite": "wide" },
      { "label": "Rump Angle", "value": "high pins", "score": 1.76, "opposite": "sloped" },
      { "label": "Rear Leg (side view)", "value": "posty", "score": 1.26, "opposite": "sickled" },
      { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.32, "opposite": "straight" },
      { "label": "Foot Angle", "value": "low angle", "score": 0.06, "opposite": "steep angle" },
      { "label": "Feet & Leg Score", "value": null, "score": 0.28, "opposite": null },
      { "label": "Fore Udder", "value": "loose", "score": 1.66, "opposite": "strong" },
      { "label": "Rear Udder Height", "value": "low", "score": 2.29, "opposite": "high" },
      { "label": "Rear Udder Width", "value": "narrow", "score": 2.21, "opposite": "wide" },
      { "label": "Udder Cleft", "value": "weak", "score": 1.26, "opposite": "strong" },
      { "label": "Udder Depth", "value": "deep", "score": 1.65, "opposite": "shallow" },
      { "label": "Front Teat Placement", "value": "wide", "score": 1.22, "opposite": "close" },
      { "label": "Rear Teat Placement", "value": "wide", "score": 1.74, "opposite": "close" },
      { "label": "Teat Length", "value": "short", "score": 0.58, "opposite": "long" }
    ],
    "wellnessTraits": [
      { "trait": "Mastitis", "zoetis": { "value": 105, "rel": 59 }, "cdcb": { "value": 3.1, "rel": 76 } },
      { "trait": "Retained Placenta", "zoetis": { "value": 96, "rel": 59 }, "cdcb": { "value": 0.3, "rel": 71 } },
      { "trait": "Metritis", "zoetis": { "value": 105, "rel": 57 }, "cdcb": { "value": 1.6, "rel": 74 } },
      { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 98, "rel": 67 }, "cdcb": { "value": 0.1, "rel": 64 } },
      { "trait": "Ketosis", "zoetis": { "value": 96, "rel": 52 }, "cdcb": { "value": 1.7, "rel": 65 } },
      { "trait": "Displaced Abomasum", "zoetis": { "value": 106, "rel": 50 }, "cdcb": { "value": 0.5, "rel": 81 } },
      { "trait": "Lameness", "zoetis": { "value": null, "rel": null }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Respiratory Disease", "zoetis": { "value": 97, "rel": 45 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cow Abortion", "zoetis": { "value": 100, "rel": 57 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Twinning", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Cystic Ovary", "zoetis": { "value": 102, "rel": 37 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": null }, "cdcb": { "value": 0.7, "rel": 65 } },
      { "trait": "Calf Respiratory Disease", "zoetis": { "value": 98, "rel": 49 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Scours", "zoetis": { "value": 99, "rel": 46 }, "cdcb": { "value": null, "rel": null } },
      { "trait": "Calf Livability", "zoetis": { "value": 96, "rel": 62 }, "cdcb": { "value": null, "rel": null } }
    ],
    "genetics": [
      "Born On: February 21, 2019",
      "Beta-casein: A1A2",
      "Kappa-casein: AE",
      "Efi: 10.9%",
      "aAa: 351"
    ]
  },
{
  "id": "14HO15779",
  "registration_number": "HO840003223871570",
  "name": "IMPROBABLE",
  "full_name": "S-S-I RENGADE IMPROBABLE-ET\nRENEGADE X TOOK X JEDI",
  "price": 0,
  "category": "Red", 
  "pedigree": [
    "Sire: S-S-I PR RENEGADE-ET",
    "Dam: S-S-I TOOK 7261 8495-ET",
    "MGS: T-SPRUCE PROFIT TOOK-ET"
  ],
  
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 2792 },
        { "label": "NM$", "value": 647 },
        { "label": "CM$", "value": 666 },
        { "label": "Feed Efficiency ($)", "value": 175 },
        { "label": "Feed Saved", "value": -104 },
        { "label": "HHP$", "value": 888 },
        { "label": "DWP$", "value": 718 },
        { "label": "WT$", "value": 55 },
        { "label": "CW$", "value": -31 }
      ],
      "fertilities": [
        { "label": "Fertility Index/Rel. %", "value": "0.8/88" },
        { "label": "DPR/Rel. %", "value": "0.3/88" },
        { "label": "HCR/Rel. %", "value": "0.0/87" },
        { "label": "CCK/Rel. %", "value": "1.4/87" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE/Rel. %", "value": "2.4/83" },
        { "label": "DCE/Rel. %", "value": "1.8/83" },
        { "label": "Gestation Length/Rel. %", "value": "0.9/77" },
        { "label": "Early First Calving/Rel. %", "value": "1.4/57" },
        { "label": "SSB/Rel. %", "value": "7.0/57" },
        { "label": "DSB/Rel. %", "value": "4.8/74" },
        { "label": "Productive Life/Rel. %", "value": "3.1/89" },
        { "label": "Livability/Rel. %", "value": "-1.8/85" },
        { "label": "Residual Feed Intake/Rel. %", "value": "3/27" },
        { "label": "SCS/Rel. %", "value": "2.80/92" },
        { "label": "Milking Speed/Rel. %", "value": "101/95" }
      ],
      "fertilities": [
        { "label": "SCR/Rel. %", "value": null }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 732 },
        { "label": "PTA Protein (lbs)", "value": 50 },
        { "label": "PTA Protein (%)", "value": 0.10 },
        { "label": "PTA Fat (lbs)", "value": 64 },
        { "label": "PTA Fat (%)", "value": 0.14 },
        { "label": "Production Reliability %", "value": 92 },
        { "label": "Dtrs/Herds", "value": "1379/498" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 1.64 },
        { "label": "Udder Composite", "value": 2.09 },
        { "label": "Feet & Leg Composite", "value": 0.84 },
        { "label": "Body Weight Composite", "value": 0.67 },
        { "label": "Dairy Composite", "value": 0.08 },
        { "label": "Type Reliability %", "value": 89 },
        { "label": "Dtrs/Herds (Type)", "value": "769/334" }
      ]
    }
  ],

  "typeTraits": [
    { "label": "Stature", "value": "short", "score": 1.79, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": 0.50, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": -0.33, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": 0.11, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": -0.16, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": 0.68, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": -1.02, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 1.78, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": 1.39, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": 0.99, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": 2.87, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 2.66, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 2.00, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 0.64, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 3.30, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 0.11, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": 0.01, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": -0.18, "opposite": "long" }
  ],

  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 97, "rel": 62 }, "cdcb": { "value": 2, "rel": 79 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 98, "rel": 62 }, "cdcb": { "value": -0.2, "rel": 71 } },
    { "trait": "Metritis", "zoetis": { "value": 107, "rel": 60 }, "cdcb": { "value": 1.2, "rel": 71 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 102, "rel": 55 }, "cdcb": { "value": 0.1, "rel": 62 } },
    { "trait": "Ketosis", "zoetis": { "value": 103, "rel": 54 }, "cdcb": { "value": 2.4, "rel": 70 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 103, "rel": 53 }, "cdcb": { "value": 0.8, "rel": 74 } },
    { "trait": "Lameness", "zoetis": { "value": 104, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 98, "rel": 54 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 107, "rel": 48 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 103, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 105, "rel": 40 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": -0.2, "rel": 64 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 96, "rel": 51 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 104, "rel": 51 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 90, "rel": 55 }, "cdcb": { "value": null, "rel": null } }
  ],

  "genetics": [
    "Born On: November 26, 2020",
    "Beta-casein: A1A2",
    "Kappa-casein: AB",
    "EFI: 10.5%",
    "aAa: 243"
  ]
},

  {
  "id": "250HO15152",
  "registration_number": "HO840003206144957",
  "name": "AHEAD",
  "full_name": "RENEGADE X MYLES X YODER",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: S-S-I PR RENEGADE-ET",
    "Dam: BLUMENFELD MYLES 5797-ET GP-82 3-03 3X 300D 15,327 KG M 4.2% 651 KG F 3.2% 497 KG P",
    "MGS: WET RODGERS MYLES"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 2910 },
        { "label": "NM$", "value": 834 },
        { "label": "CM$", "value": 836 },
        { "label": "Feed Efficiency ($)", "value": 200 },
        { "label": "Feed Saved", "value": -275 },
        { "label": "HHP$", "value": 1050 },
        { "label": "DWP$", "value": 1045 },
        { "label": "WT$", "value": 4 },
        { "label": "CW$", "value": -11 }
      ],
      "fertilities": [
        { "label": "Fertility Index/Rel.%", "value": "2.49/95" },
        { "label": "DPR/Rel.%", "value": "1.6/96" },
        { "label": "HCR/Rel.%", "value": "0.2/94" },
        { "label": "CCR/Rel.%", "value": "4.9/95" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE/Rel.%", "value": "2.49/97" },
        { "label": "DCE/Rel.%", "value": "1.6/94" },
        { "label": "Gestation Length/Rel.%", "value": "0.5/92" },
        { "label": "DSB/Rel.%", "value": "4.3/93" },
        { "label": "Productive Life/Rel.%", "value": "4.8/94" },
        { "label": "Livability/Rel.%", "value": "0.4/86" },
        { "label": "SCS/Rel.%", "value": "2.71/99" },
        { "label": "Milking Speed/Rel.%", "value": "98/80" }
      ],
      "fertilities": [
        { "label": "SCR/Rel.%", "value": null }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 44 },
        { "label": "PTA Protein (lbs)", "value": 39 },
        { "label": "PTA Protein (%)", "value": 0.16 },
        { "label": "PTA Fat (lbs)", "value": 105 },
        { "label": "PTA Fat (%)", "value": 0.42 },
        { "label": "Body Weight Composite", "value": 1.46 },
        { "label": "Production Reliability %", "value": 99 },
        { "label": "Dtrs/Herds (Production)", "value": "2266/166" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 1.01 },
        { "label": "Udder Composite", "value": 0.86 },
        { "label": "Feet & Leg Composite", "value": 0.36 },
        { "label": "Dairy Composite", "value": 1.28 },
        { "label": "Type Reliability %", "value": 98 },
        { "label": "Dtrs/Herds (Type)", "value": "599/85" }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": 1.66, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": 0.93, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": 0.34, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": -0.33, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": 1.31, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": 0.96, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": 0.78, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.76, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": 0.66, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": null, "score": 0.28, "opposite": null },
    { "label": "Fore Udder", "value": "loose", "score": 1.97, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 0.99, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 0.65, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 0.69, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 1.91, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 0.13, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": 0.51, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": -1.10, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 105, "rel": 91 }, "cdcb": { "value": 3.2, "rel": 88 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 92, "rel": 92 }, "cdcb": { "value": -0.8, "rel": 88 } },
    { "trait": "Metritis", "zoetis": { "value": 103, "rel": 93 }, "cdcb": { "value": 1.3, "rel": 88 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 101, "rel": 83 }, "cdcb": { "value": 0.1, "rel": 73 } },
    { "trait": "Ketosis", "zoetis": { "value": 99, "rel": 87 }, "cdcb": { "value": 1.8, "rel": 85 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 105, "rel": 88 }, "cdcb": { "value": 0.5, "rel": 91 } },
    { "trait": "Lameness", "zoetis": { "value": 92, "rel": 88 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 107, "rel": 82 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 108, "rel": 87 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 105, "rel": 92 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 97, "rel": 64 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": null }, "cdcb": { "value": 0.6, "rel": 79 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 98, "rel": 86 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 100, "rel": 96 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 108, "rel": 96 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    "Born On: March 29, 2019",
    "Beta-casein: A1A2",
    "Kappa-casein: BB",
    "Efi: 8.9%",
    "aAa: 342"
  ]
  },
  {
  "id": "250H015208",
  "registration_number": "HO840003200122612",
  "name": "LOGISTICS",
  "full_name": "COOKIECUTTER LOGISTICS-ET TRIP IM TC TY TV TL TD TE HHLT HH2T HH3T HH4T HH5T HH6T",
  "price": 0,
  "category": "Red", 
  "pedigree": [
    "Sire: S-S-T PR RENEGADE-ET",
    "Dam: QUIET-BROOK-D HELX LADIX-ET",
    "2-02 3X 365D 13,726 kgM 4.1% 565 kgF 3.2% 441 kgP",
    "MGS: AOT SILVER HELLX-ET",
    "41th DAM Quiet-Brook-D Babybook-ET",
    "51th DAM Quiet-Brook-D 5th Babyliebe"
  ],
  
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 2781 },
        { "label": "NM$", "value": 579 },
        { "label": "CM$", "value": 595 },
        { "label": "Feed Efficiency ($)", "value": 193 },
        { "label": "Feed Saved", "value": -29 },
        { "label": "HHP$", "value": 790 },
        { "label": "DWP$", "value": 422 },
        { "label": "WT$", "value": -155 },
        { "label": "CW$", "value": -6 }
      ],
      "fertilities": [
        { "label": "Fertility Index/Rel. %", "value": "1.3/94" },
        { "label": "DPR/Rel. %", "value": "0.6/94" },
        { "label": "HCR/Rel. %", "value": "2.6/94" },
        { "label": "CCR/Rel. %", "value": "1.9/95" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE/Rel. %", "value": "3.2/99" },
        { "label": "DCE/Rel. %", "value": "2.8/92" },
        { "label": "Gestation Length/Rel. %", "value": "1.1/99" },
        { "label": "Early First Calving/Rel. %", "value": "1.7/97" },
        { "label": "SSB/Rel. %", "value": "7.6/97" },
        { "label": "DSB/Rel. %", "value": "5.5/92" },
        { "label": "Productive Life/Rel. %", "value": "1.0/91" },
        { "label": "Livability/Rel. %", "value": "4.3/77" },
        { "label": "Residual Feed Intake/Rel. %", "value": "-74/32" },
        { "label": "SCS/Rel. %", "value": "2.94/97" },
        { "label": "Milking Speed/Rel. %", "value": "106/92" }
      ],
      "fertilities": [
        { "label": "SCR/Rel. %", "value": null }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 117 },
        { "label": "PTA Protein (lbs)", "value": 29 },
        { "label": "PTA Protein (%)", "value": 0.10 },
        { "label": "PTA Fat (lbs)", "value": 94 },
        { "label": "PTA Fat (%)", "value": 0.35 },
        { "label": "Production Reliability %", "value": 99 },
        { "label": "Dtrs/Herds", "value": "2170/487" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 1.89 },
        { "label": "Udder Composite", "value": 1.72 },
        { "label": "Feet & Leg Composite", "value": 2.13 },
        { "label": "Body Weight Composite", "value": 0.68 },
        { "label": "Dairy Composite", "value": 0.08 },
        { "label": "Type Reliability %", "value": 97 },
        { "label": "Dtrs/Herds (Type)", "value": "654/265" }
      ]
    }
  ],

  "typeTraits": [
    { "label": "Stature", "value": "short", "score": 1.03, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": 0.68, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": 0.24, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": 0.12, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": 0.05, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": 0.99, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": 0.39, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 2.96, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": 2.77, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": 1.93, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": 2.57, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 2.65, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 1.55, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 0.12, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 2.02, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 0.33, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": 0.27, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": 0.23, "opposite": "long" }
  ],

  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 91, "rel": 67 }, "cdcb": { "value": 1.3, "rel": 85 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 97, "rel": 70 }, "cdcb": { "value": 0.1, "rel": 86 } },
    { "trait": "Metritis", "zoetis": { "value": 102, "rel": 68 }, "cdcb": { "value": 0.7, "rel": 87 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 101, "rel": 55 }, "cdcb": { "value": 0.2, "rel": 72 } },
    { "trait": "Ketosis", "zoetis": { "value": 104, "rel": 64 }, "cdcb": { "value": 1.9, "rel": 79 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 101, "rel": 61 }, "cdcb": { "value": 0.7, "rel": 86 } },
    { "trait": "Lameness", "zoetis": { "value": 98, "rel": 60 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 98, "rel": 58 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 94, "rel": 50 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 101, "rel": 66 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 103, "rel": 38 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": -0.3, "rel": 67 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 98, "rel": 64 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 105, "rel": 68 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 95, "rel": 68 }, "cdcb": { "value": null, "rel": null } }
  ],

  "genetics": [
    "Born On: February 27, 2019",
    "Beta-casein: A1A2",
    "Kappa-casein: AB",
    "EFI: 10.2%",
    "aAa: 423"
  ],
  
  },
  {
  "id": "250HO16110",
  "registration_number": "HO840003218470965",
  "name": "LETCHWORTH",
  "full_name": "CONWAY X RAPID X FRAZZLED",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: SANDY-VALLEY CONWAY-ET",
    "Dam: AURORA RAPID 21849-ET VG-85 1-10 3X 365D 15,129 KG M 4.0% 607 KG F 3.4% 516 KG P",
    "MGS: ST GEN R-HAZE RAPID-ET"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 3177 },
        { "label": "NM$", "value": 1172 },
        { "label": "CM$", "value": 1176 },
        { "label": "Feed Efficiency ($)", "value": 317 },
        { "label": "Feed Saved", "value": 188 },
        { "label": "HHP$", "value": 1281 },
        { "label": "DWP$", "value": 1202 },
        { "label": "WT$", "value": 16 }
      ],
      "fertilities": [
        { "label": "Fertility Index/Rel.%", "value": "2.27/78" },
        { "label": "DPR/Rel.%", "value": "1.0/78" },
        { "label": "HCR/Rel.%", "value": "2.3/78" },
        { "label": "CCR/Rel.%", "value": "3.4/78" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE/Rel.%", "value": "2.79/88" },
        { "label": "DCE/Rel.%", "value": "1.9/70" },
        { "label": "Gestation Length/Rel.%", "value": "-1.52/25" },
        { "label": "DSB/Rel.%", "value": "3.4/64" },
        { "label": "Productive Life/Rel.%", "value": "5.1/78" },
        { "label": "Livability/Rel.%", "value": "1.6/74" },
        { "label": "SCS/Rel.%", "value": "2.76/80" },
        { "label": "Milking Speed/Rel.%", "value": "98/79" }
      ],
      "fertilities": [
        { "label": "SCR/Rel.%", "value": "0.9/95" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 1022 },
        { "label": "PTA Protein (lbs)", "value": 66 },
        { "label": "PTA Protein (%)", "value": 0.13 },
        { "label": "PTA Fat (lbs)", "value": 117 },
        { "label": "PTA Fat (%)", "value": 0.29 },
        { "label": "Production Reliability %", "value": 83 }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 1.44 },
        { "label": "Udder Composite", "value": 1.30 },
        { "label": "Feet & Leg Composite", "value": 0.10 },
        { "label": "Body Weight Composite", "value": -0.24 },
        { "label": "Dairy Composite", "value": 0.53 },
        { "label": "Type Reliability %", "value": 82 }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": 0.93, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": 0.06, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": 0.21, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": 1.33, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": 0.65, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": 1.06, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": 2.31, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.29, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": -0.27, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": null, "score": 0.45, "opposite": null },
    { "label": "Fore Udder", "value": "loose", "score": 1.69, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 2.11, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 1.61, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 0.15, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 1.37, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 0.40, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": 0.32, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": -1.26, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 99, "rel": 62 }, "cdcb": { "value": 3.4, "rel": 74 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 91, "rel": 63 }, "cdcb": { "value": -0.6, "rel": 71 } },
    { "trait": "Metritis", "zoetis": { "value": 104, "rel": 60 }, "cdcb": { "value": 1.5, "rel": 70 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 98, "rel": 55 }, "cdcb": { "value": 0.2, "rel": 61 } },
    { "trait": "Ketosis", "zoetis": { "value": 100, "rel": 54 }, "cdcb": { "value": 2.0, "rel": 70 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 98, "rel": 53 }, "cdcb": { "value": 0.3, "rel": 74 } },
    { "trait": "Lameness", "zoetis": { "value": 101, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 100, "rel": 54 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 96, "rel": 47 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 99, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 101, "rel": 36 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": null }, "cdcb": { "value": 0.5, "rel": 64 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 109, "rel": 86 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 99, "rel": 82 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 109, "rel": 76 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    "Born On: March 12, 2021",
    "Beta-casein: A2A2",
    "Kappa-casein: AB",
    "Efi: 10.3%",
    "aAa: 423"
  ]
  },
  {
  "id": "507JE01838",
  "registration_number": "JEUSA000075812139",
  "name": "BARLEY",
  "full_name": "PINE-TREE CHROME BARLEY 2139-ET\nNRS-TF\nJHIF JHPF\nCHROME X DISCO X DIMENSION",
  "price": 0,
  "category": "JE", 
  "pedigree": [
    "Sire: RIVER VALLEY CECE CHROME-ET",
    "Dam: PINE-TREE DISCO BITTY 1702",
    "MGS: OAKLANE DAZZLER DISCO 2127-ET"
  ],
  
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "PI", "value": 49 },
        { "label": "NM$", "value": 194 },
        { "label": "CM$", "value": 199 },
        { "label": "Feed Saved", "value": null },
        { "label": "HHP$", "value": 190 },
        { "label": "DWP$", "value": 264 },
        { "label": "WT$", "value": 57 },
        { "label": "CW$", "value": 30 }
      ],
      "fertilities": [
        { "label": "DPR/Rel. %", "value": "1.1/78" },
        { "label": "HCR/Rel. %", "value": "2.1/70" },
        { "label": "CCR/Rel. %", "value": "1.2/78" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "Gestation Length/Rel. %", "value": "2.3/95" },
        { "label": "Productive Life/Rel. %", "value": "2.0/80" },
        { "label": "Livability/Rel. %", "value": "0.1/72" },
        { "label": "Early First Calving/Rel. %", "value": "0.8/98" },
        { "label": "SCS/Rel. %", "value": "2.3/97" },
        { "label": "Milking Speed/Rel. %", "value": "101/48" }
      ],
      "fertilities": [
        { "label": "SCR/Rel. %", "value": null }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 277 },
        { "label": "PTA Protein (lbs)", "value": 15 },
        { "label": "PTA Protein (%)", "value": 0.02 },
        { "label": "PTA Fat (lbs)", "value": 4 },
        { "label": "PTA Fat (%)", "value": 0.05 },
        { "label": "Production Reliability %", "value": 90 },
        { "label": "Dtrs/Herds", "value": "44/13" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 1.10 },
        { "label": "Type Reliability %", "value": 84 },
        { "label": "Dtrs/Herds (Type)", "value": "12/7" }
      ]
    }
  ],

  "typeTraits": [
    { "label": "Stature", "value": "short" },
    { "label": "Strength", "value": "frail" },
    { "label": "Dairy Form", "value": "tight ribbed" },
    { "label": "Rump Width", "value": "narrow" },
    { "label": "Rump Angle", "value": "high pins" },
    { "label": "Rear Leg (side view)", "value": "posty" },
    { "label": "Foot Angle", "value": "low angle" },
    { "label": "Fore Udder", "value": "loose" },
    { "label": "Rear Udder Height", "value": "low" },
    { "label": "Rear Udder Width", "value": "narrow" },
    { "label": "Udder Cleft", "value": "weak" },
    { "label": "Udder Depth", "value": "deep" },
    { "label": "Front Teat Placement", "value": "wide" },
    { "label": "Rear Teat (rear view)", "value": "wide" },
    { "label": "Rear Teat (side view)", "value": "close" },
    { "label": "Teat Length", "value": "short" }
  ],

  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 100, "rel": 46 }, "cdcb": { "value": -1.5, "rel": 66 } },
    { "trait": "Lameness", "zoetis": { "value": 107, "rel": 50 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Retained Placenta", "zoetis": { "value": 86, "rel": 46 }, "cdcb": { "value": 0.1, "rel": 53 } },
    { "trait": "Metritis", "zoetis": { "value": 100, "rel": 52 }, "cdcb": { "value": 0.4, "rel": 54 } },
    { "trait": "Cow Abortion", "zoetis": { "value": 98, "rel": 38 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 103, "rel": 40 }, "cdcb": { "value": 0.2, "rel": 57 } },
    { "trait": "Twinning", "zoetis": { "value": 97, "rel": 51 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 0.7, "rel": 46 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 99, "rel": 47 }, "cdcb": { "value": 0.1, "rel": 48 } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 102, "rel": 33 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Ketosis", "zoetis": { "value": 99, "rel": 59 }, "cdcb": { "value": 0.4, "rel": 53 } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 101, "rel": 39 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 104, "rel": 61 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 97, "rel": 60 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 106, "rel": 67 }, "cdcb": { "value": null, "rel": null } }
  ],

  "genetics": [
    "Born On: July 27, 2019",
    "Beta-casein: A2A2",
    "Kappa-casein: BB",
    "EFI: 9.4%"
  ],
  
  },
  
  {
  "id": "507JE01874",
  "registration_number": "E840003211412088",
  "name": "MCCOMB",
  "full_name": "ROWLEYS 80 URLACHER MCCOMB-ET NIS-TF NHF JHPF\nJX URLACHER (6) X CHROME X VALSON",
  "price": 0,
  "category": "JE", 
  "pedigree": [
    "Sire: JX FARIA BROTHERS URLACHER (6)-ET",
    "Dam: PRO-HART CHROME LORETTA (6) EX-90",
    "5-02 3X 305D 8,342 kgM 4.6% 380 kgF 3.6% 302 kgP",
    "MGS: RIVER VALLEY CECE CHROME-ET",
    "DAM Pro-Hart Chrome Loretta(6)"
  ],
  
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "JPI", "value": 119 },
        { "label": "NM$", "value": 285 },
        { "label": "CM$", "value": 296 },
        { "label": "Feed Saved", "value": null },
        { "label": "HHP$", "value": 532 },
        { "label": "DWP$", "value": 724 },
        { "label": "WT$", "value": 172 },
        { "label": "CW$", "value": 111 }
      ],
      "fertilities": [
        { "label": "DR/Rel. %", "value": "0.2/85" },
        { "label": "HCR/Rel. %", "value": "2.8/90" },
        { "label": "CCR/Rel. %", "value": "1.0/85" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "Gestation Length/Rel. %", "value": "2.2/88" },
        { "label": "Productive Life/Rel. %", "value": "2.8/86" },
        { "label": "Livability/Rel. %", "value": "2.0/76" },
        { "label": "Early First Calving/Rel. %", "value": "3.0/96" },
        { "label": "SCS/Rel. %", "value": "2.00/94" },
        { "label": "Milking Speed/Rel. %", "value": "103/30" }
      ],
      "fertilities": [
        { "label": "SCR/Rel. %", "value": null }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 495 },
        { "label": "PTA Protein (lbs)", "value": 30 },
        { "label": "PTA Protein (%)", "value": 0.06 },
        { "label": "PTA Fat (lbs)", "value": 27 },
        { "label": "PTA Fat (%)", "value": 0.01 },
        { "label": "Production Reliability %", "value": 98 },
        { "label": "Dtrs/Herds", "value": "486/64" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 1.30 },
        { "label": "Type Reliability %", "value": 94 },
        { "label": "Dtrs/Herds (Type)", "value": "127/25" }
      ]
    }
  ],

  "typeTraits": [
    { "label": "Stature", "value": "short", "score": 3.10, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": 1.10, "opposite": "strong" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": 0.60, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": 1.10, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": 1.50, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": 0.50, "opposite": "sickled" },
    { "label": "Foot Angle", "value": "low angle", "score": 0.60, "opposite": "steep angle" },
    { "label": "Fore Udder", "value": "loose", "score": 3.00, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 0.90, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 0.20, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 0.20, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 2.80, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 0.40, "opposite": "close" },
    { "label": "Rear Teat (rear view)", "value": "wide", "score": 0.60, "opposite": "close" },
    { "label": "Rear Teat (side view)", "value": "close", "score": 0.40, "opposite": "back" },
    { "label": "Teat Length", "value": "short", "score": 0.90, "opposite": "long" }
  ],

  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 108, "rel": 46 }, "cdcb": { "value": 0.1, "rel": 65 } },
    { "trait": "Lameness", "zoetis": { "value": 98, "rel": 54 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Retained Placenta", "zoetis": { "value": 104, "rel": 68 }, "cdcb": { "value": 0.2, "rel": 54 } },
    { "trait": "Metritis", "zoetis": { "value": 104, "rel": 69 }, "cdcb": { "value": 0.3, "rel": 54 } },
    { "trait": "Cow Abortion", "zoetis": { "value": 111, "rel": 41 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 95, "rel": 44 }, "cdcb": { "value": 0.2, "rel": 63 } },
    { "trait": "Twinning", "zoetis": { "value": 101, "rel": 70 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 0.5, "rel": 39 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 97, "rel": 68 }, "cdcb": { "value": 0, "rel": 46 } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 104, "rel": 31 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Ketosis", "zoetis": { "value": 100, "rel": 55 }, "cdcb": { "value": 0.2, "rel": 59 } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 104, "rel": 43 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 108, "rel": 84 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 108, "rel": 84 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 105, "rel": 88 }, "cdcb": { "value": null, "rel": null } }
  ],

  "genetics": [
    "Born On: January 14, 2020",
    "Beta-casein: A2A2",
    "Kappa-casein: BB",
    "EFI: 9.8%"
  ],
  },
  {
  "id": "614H014885",
  "registration_number": "HO840003200059586",
  "name": "TED",
  "full_name": "WILRA S-S-I NUGENT TED-ET TRIP ICH YU LTD TE HNIT HNZT HNST HNST HNST\nNUGENT X MODESTY X JOSUPER",
  "price": 0,
  "category": "Red", 
  "pedigree": [
    "Sire: S-S-I OUTSIDERS NUGENT-ET",
    "Dam: WILRA MODESTY 1263",
    "5-09 3X 305D 14,383 kgM 3.5% 499 kgF 2.9% 412 kgP",
    "MGS: BACON-HILL PETY MODESTY-E"
  ],
  
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 2756 },
        { "label": "NM$", "value": 791 },
        { "label": "CM$", "value": 793 },
        { "label": "Feed Efficiency ($)", "value": 188 },
        { "label": "Feed Saved", "value": 198 },
        { "label": "HHP$", "value": 874 },
        { "label": "DWP$", "value": 792 },
        { "label": "WT$", "value": 87 },
        { "label": "CW$", "value": -79 }
      ],
      "fertilities": [
        { "label": "Fertility Index/Rel. %", "value": "1.2/93" },
        { "label": "DPR/Rel. %", "value": "-0.4/94" },
        { "label": "HCR/Rel. %", "value": "3.1/90" },
        { "label": "CCK/Rel. %", "value": "1.0/94" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE/Rel. %", "value": "2.0/97" },
        { "label": "DCE/Rel. %", "value": "1.9/88" },
        { "label": "Gestation Length/Rel. %", "value": "-0.8/97" },
        { "label": "Early First Calving/Rel. %", "value": "3.9/90" },
        { "label": "SSB/Rel. %", "value": "4.7/94" },
        { "label": "DSB/Rel. %", "value": "4.5/89" },
        { "label": "Productive Life/Rel. %", "value": "5.1/93" },
        { "label": "Livability/Rel. %", "value": "0.9/81" },
        { "label": "Residual Feed Intake/Rel. %", "value": "-103/31" },
        { "label": "SCS/Rel. %", "value": "2.93/98" },
        { "label": "Milking Speed/Rel. %", "value": "102/77" }
      ],
      "fertilities": [
        { "label": "SCR/Rel. %", "value": null }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 1285 },
        { "label": "PTA Protein (lbs)", "value": 40 },
        { "label": "PTA Protein (%)", "value": 0.00 },
        { "label": "PTA Fat (lbs)", "value": 62 },
        { "label": "PTA Fat (%)", "value": 0.05 },
        { "label": "Production Reliability", "value": 99 },
        { "label": "Dtrs/Herds", "value": "1109/92" }
      ],
      "fertilities": []
    }
  ],

  "typeTraits": [
    { "label": "Stature", "value": "short" },
    { "label": "Strength", "value": "frail" },
    { "label": "Body Depth", "value": "shallow" },
    { "label": "Dairy Form", "value": "tight ribbed" },
    { "label": "Rump Width", "value": "narrow" },
    { "label": "Rump Angle", "value": "high pins" },
    { "label": "Rear Leg (side view)", "value": "posty" },
    { "label": "Rear Leg (rear view)", "value": "hock-in" },
    { "label": "Foot Angle", "value": "low angle" },
    { "label": "Feet & Leg Score", "value": "low" },
    { "label": "Fore Udder", "value": "loose" },
    { "label": "Rear Udder Height", "value": "low" },
    { "label": "Rear Udder Width", "value": "narrow" },
    { "label": "Udder Cleft", "value": "weak" },
    { "label": "Udder Depth", "value": "deep" },
    { "label": "Front Teat Placement", "value": "wide" },
    { "label": "Rear Teat Placement", "value": "wide" },
    { "label": "Teat Length", "value": "short" }
  ],

  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 99, "rel": 67 }, "cdcb": { "value": 2.4, "rel": 87 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 108, "rel": 68 }, "cdcb": { "value": 0.9, "rel": 86 } },
    { "trait": "Metritis", "zoetis": { "value": 110, "rel": 65 }, "cdcb": { "value": 3.1, "rel": 86 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 104, "rel": 53 }, "cdcb": { "value": 0.1, "rel": 69 } },
    { "trait": "Ketosis", "zoetis": { "value": 109, "rel": 61 }, "cdcb": { "value": 2.3, "rel": 81 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 108, "rel": 52 }, "cdcb": { "value": 0.9, "rel": 91 } },
    { "trait": "Lameness", "zoetis": { "value": 98, "rel": 64 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 103, "rel": 60 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 105, "rel": 51 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 107, "rel": 64 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 106, "rel": 36 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 0, "rel": 73 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 95, "rel": 84 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 95, "rel": 86 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 87, "rel": 87 }, "cdcb": { "value": null, "rel": null } }
  ],

  "genetics": []
  },
  {
  "id": "614JE00758",
  "registration_number": "JEUSA000067460152",
  "name": "KNOCK-OUT",
  "full_name": "SHAN-MAR ARCHER KNOCK-OUT-ET\nARCHER X HILARIO X LEGAL",
  "price": 0,
  "category": "JE", 
  "pedigree": [
    "Sire: GABYS ARCHER-ET",
    "Dam: SHAN-MAR HILARIO CHARLENE-ET EX-90",
    "6-01 3X 8ID 2,599 kgM 5.3% 137 kgF 3.8% 99 kgP",
    "MGS: CAL-MART RENEGADEHILARIO-ET"
  ],
  
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "PI", "value": 51 },
        { "label": "NM$", "value": 164 },
        { "label": "CM$", "value": 166 },
        { "label": "Feed Saved", "value": null },
        { "label": "HHP$", "value": 200 },
        { "label": "DWP$", "value": 425 },
        { "label": "WT$", "value": 120 },
        { "label": "CW$", "value": 116 }
      ],
      "fertilities": [
        { "label": "DR/Rel. %", "value": "1.3/98" },
        { "label": "HCR/Rel. %", "value": "0.1/95" },
        { "label": "CCR/Rel. %", "value": "1.3/98" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "Gestation Length/Rel. %", "value": "1.3/99" },
        { "label": "Productive Life/Rel. %", "value": "0.4/98" },
        { "label": "Livability/Rel. %", "value": "-1.5/91" },
        { "label": "Early First Calving/Rel. %", "value": "1.9/99" },
        { "label": "DCs/Rel. %", "value": "3.10/97" },
        { "label": "Milking Speed/Rel. %", "value": "106/77" }
      ],
      "fertilities": [
        { "label": "SCR/Rel. %", "value": "1.3/99" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 82 },
        { "label": "PTA Protein (lbs)", "value": 12 },
        { "label": "PTA Protein (%)", "value": 0.05 },
        { "label": "PTA Fat (lbs)", "value": 21 },
        { "label": "PTA Fat (%)", "value": 0.09 },
        { "label": "Production Reliability %", "value": 99 },
        { "label": "Dtrs/Herds", "value": "4412/381" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 0.60 },
        { "label": "Type Reliability %", "value": 99 },
        { "label": "Dtrs/Herds (Type)", "value": "1195/167" }
      ]
    }
  ],

  "typeTraits": [
    { "label": "Stature", "value": "short" },
    { "label": "Strength", "value": "frail" },
    { "label": "Dairy Form", "value": "tight ribbed" },
    { "label": "Rump Width", "value": "narrow" },
    { "label": "Rump Angle", "value": "high pins" },
    { "label": "Rear Leg (side view)", "value": "posty" },
    { "label": "Foot Angle", "value": "low angle" },
    { "label": "Fore Udder", "value": "loose" },
    { "label": "Rear Udder Height", "value": "low" },
    { "label": "Rear Udder Width", "value": "narrow" },
    { "label": "Udder Cleft", "value": "weak" },
    { "label": "Udder Depth", "value": "deep" },
    { "label": "Front Teat Placement", "value": "wide" },
    { "label": "Rear Teat (rear view)", "value": "wide" },
    { "label": "Rear Teat (side view)", "value": "close" },
    { "label": "Teat Length", "value": "short" }
  ],

  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 105, "rel": 55 }, "cdcb": { "value": -1.5, "rel": 91 } },
    { "trait": "Lameness", "zoetis": { "value": 100, "rel": 74 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Retained Placenta", "zoetis": { "value": 106, "rel": 73 }, "cdcb": { "value": 0.2, "rel": 85 } },
    { "trait": "Metritis", "zoetis": { "value": 103, "rel": 74 }, "cdcb": { "value": 0.5, "rel": 86 } },
    { "trait": "Cow Abortion", "zoetis": { "value": 95, "rel": 50 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 91, "rel": 64 }, "cdcb": { "value": 0.5, "rel": 88 } },
    { "trait": "Twinning", "zoetis": { "value": 107, "rel": 75 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": -0.3, "rel": 82 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 97, "rel": 70 }, "cdcb": { "value": -0.1, "rel": 72 } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 97, "rel": 39 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Ketosis", "zoetis": { "value": 98, "rel": 73 }, "cdcb": { "value": 0.4, "rel": 79 } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 101, "rel": 60 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 112, "rel": 82 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 107, "rel": 88 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 105, "rel": 87 }, "cdcb": { "value": null, "rel": null } }
  ],

  "genetics": [
    "Born On: September 11, 2015",
    "Beta-casein: A2A2",
    "Kappa-casein: AE",
    "EFI: 9.2%",
    "aAa: 435"
  ],

  },
  {
  "id": "614JE00758",
  "registration_number": "JEUSA000067460152",
  "name": "KNOCK-OUT",
  "full_name": "SHAN-MAR ARCHER KNOCK-OUT-ET\nARCHER X HILARIO X LEGAL",
  "price": 0,
  "category": "JE", 
  "pedigree": [
    "Sire: GABYS ARCHER-ET",
    "Dam: SHAN-MAR HILARIO CHARLENE-ET EX-90",
    "6-01 3X 8ID 2,599 kgM 5.3% 137 kgF 3.8% 99 kgP",
    "MGS: CAL-MART RENEGADEHILARIO-ET"
  ],
  
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "PI", "value": 51 },
        { "label": "NM$", "value": 164 },
        { "label": "CM$", "value": 166 },
        { "label": "Feed Saved", "value": null },
        { "label": "HHP$", "value": 200 },
        { "label": "DWP$", "value": 425 },
        { "label": "WT$", "value": 120 },
        { "label": "CW$", "value": 116 }
      ],
      "fertilities": [
        { "label": "DR/Rel. %", "value": "1.3/98" },
        { "label": "HCR/Rel. %", "value": "0.1/95" },
        { "label": "CCR/Rel. %", "value": "1.3/98" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "Gestation Length/Rel. %", "value": "1.3/99" },
        { "label": "Productive Life/Rel. %", "value": "0.4/98" },
        { "label": "Livability/Rel. %", "value": "-1.5/91" },
        { "label": "Early First Calving/Rel. %", "value": "1.9/99" },
        { "label": "DCs/Rel. %", "value": "3.10/97" },
        { "label": "Milking Speed/Rel. %", "value": "106/77" }
      ],
      "fertilities": [
        { "label": "SCR/Rel. %", "value": "1.3/99" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 82 },
        { "label": "PTA Protein (lbs)", "value": 12 },
        { "label": "PTA Protein (%)", "value": 0.05 },
        { "label": "PTA Fat (lbs)", "value": 21 },
        { "label": "PTA Fat (%)", "value": 0.09 },
        { "label": "Production Reliability %", "value": 99 },
        { "label": "Dtrs/Herds", "value": "4412/381" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 0.60 },
        { "label": "Type Reliability %", "value": 99 },
        { "label": "Dtrs/Herds (Type)", "value": "1195/167" }
      ]
    }
  ],

  "typeTraits": [
    { "label": "Stature", "value": "short" },
    { "label": "Strength", "value": "frail" },
    { "label": "Dairy Form", "value": "tight ribbed" },
    { "label": "Rump Width", "value": "narrow" },
    { "label": "Rump Angle", "value": "high pins" },
    { "label": "Rear Leg (side view)", "value": "posty" },
    { "label": "Foot Angle", "value": "low angle" },
    { "label": "Fore Udder", "value": "loose" },
    { "label": "Rear Udder Height", "value": "low" },
    { "label": "Rear Udder Width", "value": "narrow" },
    { "label": "Udder Cleft", "value": "weak" },
    { "label": "Udder Depth", "value": "deep" },
    { "label": "Front Teat Placement", "value": "wide" },
    { "label": "Rear Teat (rear view)", "value": "wide" },
    { "label": "Rear Teat (side view)", "value": "close" },
    { "label": "Teat Length", "value": "short" }
  ],

  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 105, "rel": 55 }, "cdcb": { "value": -1.5, "rel": 91 } },
    { "trait": "Lameness", "zoetis": { "value": 100, "rel": 74 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Retained Placenta", "zoetis": { "value": 106, "rel": 73 }, "cdcb": { "value": 0.2, "rel": 85 } },
    { "trait": "Metritis", "zoetis": { "value": 103, "rel": 74 }, "cdcb": { "value": 0.5, "rel": 86 } },
    { "trait": "Cow Abortion", "zoetis": { "value": 95, "rel": 50 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 91, "rel": 64 }, "cdcb": { "value": 0.5, "rel": 88 } },
    { "trait": "Twinning", "zoetis": { "value": 107, "rel": 75 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": -0.3, "rel": 82 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 97, "rel": 70 }, "cdcb": { "value": -0.1, "rel": 72 } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 97, "rel": 39 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Ketosis", "zoetis": { "value": 98, "rel": 73 }, "cdcb": { "value": 0.4, "rel": 79 } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 101, "rel": 60 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 112, "rel": 82 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 107, "rel": 88 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 105, "rel": 87 }, "cdcb": { "value": null, "rel": null } }
  ],

  "genetics": [
    "Born On: September 11, 2015",
    "Beta-casein: A2A2",
    "Kappa-casein: AE",
    "EFI: 9.2%",
    "aAa: 435"
  ],
  

  },
  {
  "id": "7H015839",
  "registration_number": "H0840003216574976",
  "name": "MAGNUM",
  "full_name": "OCD ALPHABET MAGNUM-ET TR TP TM TC TY TV TL TD TE HHTT HHZT HHST HHST HHST\nALPHABET X JARED X BURLEY",
  "price": 0,
  "category": "Red", 
  "pedigree": [
    "Sire: OCD HELIX ALPHABET-ET",
    "Dam: OCD JARED MENNA 52294-ET EX-90",
    "4-04 3X 305D 16,769 kgM 4.7% 790 kgF 3.3% 553 kgP",
    "MGS: CLEAR-ECHO JED JARED 745-ET",
    "MGGD OCD Delta Menna 34187-ET"
  ],
  
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 2998 },
        { "label": "NM$", "value": 971 },
        { "label": "CM$", "value": 972 },
        { "label": "Feed Efficiency ($)", "value": 289 },
        { "label": "Feed Saved", "value": 22 },
        { "label": "HHP$", "value": 973 },
        { "label": "DWP$", "value": 873 },
        { "label": "WT$", "value": -156 },
        { "label": "CW$", "value": 6 }
      ],
      "fertilities": [
        { "label": "Fertility Index/Rel. %", "value": "0.6/82" },
        { "label": "DPR/Rel. %", "value": "-0.7/80" },
        { "label": "HCR/Rel. %", "value": "1.0/90" },
        { "label": "CCR/Rel. %", "value": "0.7/80" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE/Rel. %", "value": "1.8/99" },
        { "label": "DCE/Rel. %", "value": "2.0/77" },
        { "label": "Gestation Length/Rel. %", "value": "-2.9/77" },
        { "label": "Early First Calving/Rel. %", "value": "3.4/70" },
        { "label": "SSB/Rel. %", "value": "5.2/96" },
        { "label": "DSB/Rel. %", "value": "3.5/73" },
        { "label": "Productive Life/Rel. %", "value": "3.6/81" },
        { "label": "Livability/Rel. %", "value": "-1.3/76" },
        { "label": "Residual Feed Intake/Rel. %", "value": "80/33" },
        { "label": "SCS/Rel. %", "value": "2.99/80" },
        { "label": "Milking Speed/Rel. %", "value": "102/79" }
      ],
      "fertilities": [
        { "label": "SCR/Rel. %", "value": "0.5/97" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 2234 },
        { "label": "PTA Protein (lbs)", "value": 70 },
        { "label": "PTA Protein (%)", "value": 0.00 },
        { "label": "PTA Fat (lbs)", "value": 109 },
        { "label": "PTA Fat (%)", "value": 0.08 },
        { "label": "Production Reliability %", "value": 83 },
        { "label": "Dtrs/Herds", "value": "" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 1.25 },
        { "label": "Udder Composite", "value": 1.57 },
        { "label": "Feet & Leg Composite", "value": 0.09 },
        { "label": "Body Weight Composite", "value": -0.38 },
        { "label": "Dairy Composite", "value": -0.06 },
        { "label": "Type Reliability %", "value": 82 },
        { "label": "Dtrs/Herds (Type)", "value": "" }
      ]
    }
  ],

  "typeTraits": [
    { "label": "Stature", "value": "short", "score": 0.91, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": 0.29, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": 0.29, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": 0.84, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": 0.23, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": 0.26, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": -1.24, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.26, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": 1.64, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": 0.38, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": 1.92, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 2.42, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 1.63, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 0.21, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 1.69, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 0.43, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": 0.50, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": 0.73, "opposite": "long" }
  ],

  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 93, "rel": 61 }, "cdcb": { "value": -0.8, "rel": 75 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 96, "rel": 61 }, "cdcb": { "value": 0.1, "rel": 72 } },
    { "trait": "Metritis", "zoetis": { "value": 105, "rel": 58 }, "cdcb": { "value": 1.5, "rel": 72 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 103, "rel": 54 }, "cdcb": { "value": 0.2, "rel": 63 } },
    { "trait": "Ketosis", "zoetis": { "value": 97, "rel": 53 }, "cdcb": { "value": 0.3, "rel": 71 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 100, "rel": 52 }, "cdcb": { "value": 0.4, "rel": 75 } },
    { "trait": "Lameness", "zoetis": { "value": 94, "rel": 57 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 101, "rel": 52 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 97, "rel": 47 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 100, "rel": 58 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 106, "rel": 38 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 1.4, "rel": 65 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 101, "rel": 71 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 100, "rel": 74 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 102, "rel": 76 }, "cdcb": { "value": null, "rel": null } }
  ],

  "genetics": [
    "Born On: October 20, 2020",
    "Beta-casein: A2A2",
    "Kappa-casein: AA",
    "EFI: 10.8%",
    "aAa: 231"
  ]
  },
  {
  "id": "71012678",
  "registration_number": "HO840003125982611",
  "name": "HOUSTON",
  "full_name": "HONEYBEE X KRUNCH X DORCY",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: DE-SU SS HONEYBEE 11569-ET",
    "Dam: OCD KRUNCH MASON-ET GP-83",
    "2-04 3X 3050 12,524 kgM 3.2% 405 kgF 3.0% 379 kgP",
    "MGS: HAMMER-CREEK FRED KRUNCH-ET"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 2304 },
        { "label": "NM$", "value": 314 },
        { "label": "CM$", "value": 318 },
        { "label": "GM$", "value": 285 },
        { "label": "Feed Efficiency (S)", "value": 29 },
        { "label": "Feed Saved", "value": -15 },
        { "label": "HHP$", "value": 298 },
        { "label": "DWP$", "value": 300 },
        { "label": "WT$", "value": 125 },
        { "label": "CW$", "value": -99 }
      ],
      "fertilities": [
        { "label": "Fertility Index", "value": "1.5/88" },
        { "label": "DTYK", "value": "1.0/89" },
        { "label": "TICK", "value": "1.3/91" },
        { "label": "CCR", "value": "1.5/89" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE", "value": "1.7/90" },
        { "label": "DCE", "value": "1.1/17" },
        { "label": "Gestation Length", "value": "-2.1/98" },
        { "label": "Early First Calving", "value": "3.7/83" },
        { "label": "SSB", "value": "5.3/81" },
        { "label": "DSB", "value": "4.8/76" },
        { "label": "Productive Life", "value": "3.4/91" },
        { "label": "Livability", "value": "3.6/82" },
        { "label": "Residual Feed Intake", "value": "-9/31" },
        { "label": "SCS/Rel", "value": "2.84/93" },
        { "label": "Milking Speed", "value": "103/81" }
      ],
      "fertilities": [
        { "label": "SCR", "value": "" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": -81 },
        { "label": "PTA Protein (lbs)", "value": -2 },
        { "label": "PTA Protein (%)", "value": 0.00 },
        { "label": "PTA Fat (lbs)", "value": 22 },
        { "label": "PTA Fat (%)", "value": 0.10 },
        { "label": "Production Reliability", "value": 96 },
        { "label": "Dtrs/Herds (Production)", "value": "164/69" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 0.60 },
        { "label": "Udder Composite", "value": 1.07 },
        { "label": "Feet & Leg Composite", "value": 0.52 },
        { "label": "Body Weight Composite", "value": 0.16 },
        { "label": "Dairy Composite", "value": -0.30 },
        { "label": "Type Reliability", "value": 91 },
        { "label": "Dtrs/Herds (Type)", "value": "79/36" }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": -0.14, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": 0.14, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": -0.03, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": -0.04, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": 0.42, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": -0.36, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": -0.69, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.64, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": 0.61, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": 0.40, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": 0.95, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 0.97, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 0.71, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 1.29, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 0.98, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 1.21, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": 1.65, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": -0.15, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 101, "rel": 94 }, "cdcb": { "value": 1.4, "rel": 83 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 97, "rel": 95 }, "cdcb": { "value": -0.6, "rel": 78 } },
    { "trait": "Metritis", "zoetis": { "value": 101, "rel": 95 }, "cdcb": { "value": 0.3, "rel": 77 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 103, "rel": 64 }, "cdcb": { "value": 0, "rel": 67 } },
    { "trait": "Ketosis", "zoetis": { "value": 100, "rel": 94 }, "cdcb": { "value": 1.6, "rel": 78 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 103, "rel": 94 }, "cdcb": { "value": 0.4, "rel": 84 } },
    { "trait": "Lameness", "zoetis": { "value": 107, "rel": 94 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 98, "rel": 94 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 107, "rel": 92 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 101, "rel": 94 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 102, "rel": 56 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "NA" }, "cdcb": { "value": 0.4, "rel": 69 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 87, "rel": 88 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 101, "rel": 67 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 80, "rel": 90 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    "Born On: August 29, 2014",
    "Kappa-casein: BB",
    "Kappa-casein: BB",
    "EFI: 10.1%",
  ]
  },
  {
  "id": "7H015335",
  "registration_number": "HO840003206963799",
  "name": "HANSEN",
  "full_name": "LEGACY X SAMURI X MONTEREY",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: PINE-TREE CW LEGACY-ET",
    "Dam: WELCOME SAMURI HELMA-ET VG-86",
    "5-06 3X 365D 18,806 kgM 4.5% 851 kgF 3.3% 627 kgP",
    "MGS: OCD SPRING SAMURI-ET"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": null }, // Not provided in image
        { "label": "NM$", "value": null }, // Not provided in image
        { "label": "CM$", "value": null }, // Not provided in image
        { "label": "GM$", "value": null }, // Not provided in image
        { "label": "Feed Efficiency ($)", "value": null }, // Not provided in image
        { "label": "Feed Saved", "value": null }, // Not provided in image
        { "label": "HHP$", "value": null }, // Not provided in image
        { "label": "DWP$", "value": null }, // Not provided in image
        { "label": "WT$", "value": null }, // Not provided in image
        { "label": "CW$", "value": null } // Not provided in image
      ],
      "fertilities": [
        { "label": "Fertility Index", "value": "0.9/82" },
        { "label": "DPR", "value": "0.4/83" },
        { "label": "HCR", "value": "1.5/79" },
        { "label": "CCR", "value": "0.5/83" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE", "value": "2.3/83" },
        { "label": "DCE", "value": "2.8/72" },
        { "label": "Gestation Length", "value": "-1.1/97" },
        { "label": "Early First Calving", "value": "3.6/79" },
        { "label": "SSB", "value": "5.6/75" },
        { "label": "DSB", "value": "4.9/67" },
        { "label": "Productive Life", "value": "2.6/84" },
        { "label": "Livability", "value": "1.5/77" },
        { "label": "Residual Feed Intake", "value": "31/37" },
        { "label": "SCS/Rel", "value": "2.90/87" },
        { "label": "Milking Speed", "value": "100/80" }
      ],
      "fertilities": [
        { "label": "SCR", "value": "1.0/99" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 34 },
        { "label": "PTA Protein (lbs)", "value": 14 },
        { "label": "PTA Protein (%)", "value": 0.05 },
        { "label": "PTA Fat (lbs)", "value": 44 },
        { "label": "PTA Fat (%)", "value": 0.16 },
        { "label": "Production Reliability", "value": 92 },
        { "label": "Dtrs/Herds (Production)", "value": "67/36" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 0.59 },
        { "label": "Udder Composite", "value": 0.61 },
        { "label": "Feet & Leg Composite", "value": -0.06 },
        { "label": "Body Weight Composite", "value": -0.27 },
        { "label": "Dairy Composite", "value": -0.14 },
        { "label": "Type Reliability", "value": 88 },
        { "label": "Dtrs/Herds (Type)", "value": "34/19" }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": null, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": -0.04, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": -0.16, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": -0.20, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": 0.51, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": 0.63, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": -1.55, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": 0.54, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": -0.32, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": -0.33, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": 0.04, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 0.99, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 0.65, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 0.48, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 0.16, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 0.72, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": 0.46, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": 0.25, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 99, "rel": 68 }, "cdcb": { "value": 0.6, "rel": 76 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 98, "rel": 68 }, "cdcb": { "value": -0.4, "rel": 74 } },
    { "trait": "Metritis", "zoetis": { "value": 92, "rel": 61 }, "cdcb": { "value": -1.1, "rel": 73 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 98, "rel": 56 }, "cdcb": { "value": 0, "rel": 66 } },
    { "trait": "Ketosis", "zoetis": { "value": 99, "rel": 59 }, "cdcb": { "value": -0.9, "rel": 72 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 103, "rel": 58 }, "cdcb": { "value": 0.1, "rel": 77 } },
    { "trait": "Lameness", "zoetis": { "value": 103, "rel": 65 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 104, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 107, "rel": 52 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 103, "rel": 64 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 103, "rel": 46 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 1.1, "rel": 69 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 99, "rel": 56 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 101, "rel": 56 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 104, "rel": 60 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    "Born On: May 20, 2019",
    "Beta-casein: A2A2",
    "Kappa-casein: AB",
    "EFI: 11.3%",
    "aAa: 342",
    "Daughter Average: 11,957 kgM 518 kgF 4.30%F 390 kgP 3.30%P",
    "MGGD: Cookiecutter Ssire Has-ET"
  ]
  },
  

  {
  "id": '7HO15954', // Not provided in image
  "registration_number": 'HO840003220234236', // Not provided in image
  "name": "TOPAZ",
  "full_name": "AHEAD X NUGENT X FRAZZLED",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: BLUMENFELD RENEGAD AHEAD-ET",
    "Dam: T-SPRUCE NUGENT 12660-ET VG-85",
    "4-09 3X 302D 12,778 kgM 4.4% 567 kgF 3.4% 434 kgP",
    "MGS: S-S-I OUTSIDERS NUGENT-ET"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 3035 },
        { "label": "NM$", "value": 500 },
        { "label": "CM$", "value": 536 },
        { "label": "GM$", "value": 483 },
        { "label": "Feed Efficiency ($)", "value": 152 },
        { "label": "Feed Saved", "value": -231 },
        { "label": "HHP$", "value": 678 },
        { "label": "DWP$", "value": 565 },
        { "label": "WT$", "value": 70 },
        { "label": "CW$", "value": -26 }
      ],
      "fertilities": [
        { "label": "Fertility Index", "value": "1.2779" },
        { "label": "DPR", "value": "0.2788" },
        { "label": "HCR", "value": "0.8181" },
        { "label": "CCR", "value": "2.1787" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE", "value": "2.8888" },
        { "label": "DCE", "value": "2.3770" },
        { "label": "Gestation Length", "value": "1.0765" },
        { "label": "Early First Calving", "value": "1.5775" },
        { "label": "SSB", "value": "5.9180" },
        { "label": "DSB", "value": "4.9165" },
        { "label": "Productive Life", "value": "2.6788" },
        { "label": "Livability", "value": "-0.7767" },
        { "label": "Residual Feed Intake", "value": "100/30" },
        { "label": "SCS/Rel", "value": "2.7779" },
        { "label": "Milking Speed", "value": "97775" }
      ],
      "fertilities": [
        { "label": "SCR", "value": "" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 256 },
        { "label": "PTA Protein (lbs)", "value": 30 },
        { "label": "PTA Protein (%)", "value": 0.08 },
        { "label": "PTA Fat (lbs)", "value": 70 },
        { "label": "PTA Fat (%)", "value": 0.22 },
        { "label": "Production Reliability", "value": 84 },
        { "label": "Dtrs/Herds (Production)", "value": "" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 0.40 },
        { "label": "Udder Composite", "value": 0.15 },
        { "label": "Feet & Leg Composite", "value": 0.09 },
        { "label": "Body Weight Composite", "value": 0.81 },
        { "label": "Dairy Composite", "value": -0.08 },
        { "label": "Type Reliability", "value": 81 },
        { "label": "Dtrs/Herds (Type)", "value": "" }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": null, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": null, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": null, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": null, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": null, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": null, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": null, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": null, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": null, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": null, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": null, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": null, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": null, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": null, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": null, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": null, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": null, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": null, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 104, "rel": 68 }, "cdcb": { "value": 2.2, "rel": 75 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 98, "rel": 69 }, "cdcb": { "value": -0.6, "rel": 72 } },
    { "trait": "Metritis", "zoetis": { "value": 97, "rel": 62 }, "cdcb": { "value": 1.1, "rel": 72 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 99, "rel": 54 }, "cdcb": { "value": 0, "rel": 63 } },
    { "trait": "Ketosis", "zoetis": { "value": 96, "rel": 60 }, "cdcb": { "value": 0.3, "rel": 71 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 101, "rel": 59 }, "cdcb": { "value": -0.1, "rel": 75 } },
    { "trait": "Lameness", "zoetis": { "value": 101, "rel": 65 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 98, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 101, "rel": 53 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 103, "rel": 65 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 97, "rel": 40 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": -0.2, "rel": 65 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 90, "rel": 80 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 98, "rel": 76 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 100, "rel": 83 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    "Born On: January 24, 2021",
    "Beta-casein: A2A2",
    "Kappa-casein: BB",
    "EFI: 10.4%",
    "6th DAM OCD Planet Danica-ET"
  ]
  },
 

  {
  "id": ' 7HO15770', // Not provided in image
  "registration_number": 'HO840003218764734', // Not provided in image
  "name": "ULYSSES",
  "full_name": "TAOS X LEGACY X FRAZZLED",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: LEANINGHOUSE TAOS-ET",
    "Dam: MELARRY S-S-I 2948 12427-ET G-78",
    "4-08 3X 3460 18,783 kgM 4.0% 757 kgF 3.4% 635 kgP",
    "MGS: PINE-TREE CW LEGACY-ET",
    "4th DAM Melarry Mogul Freck-ET"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 3134 },
        { "label": "NM$", "value": 594 },
        { "label": "CM$", "value": 635 },
        { "label": "GM$", "value": 557 },
        { "label": "Feed Efficiency ($)", "value": 177 },
        { "label": "Feed Saved", "value": -243 },
        { "label": "HHP$", "value": 712 },
        { "label": "DWP$", "value": 520 },
        { "label": "WT$", "value": -130 },
        { "label": "CW$", "value": 14 }
      ],
      "fertilities": [
        { "label": "Fertility Index", "value": "0.678" },
        { "label": "DPR", "value": "0.278" },
        { "label": "HCR", "value": "-1.476" },
        { "label": "CCR", "value": "1.578" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE", "value": "2.271" },
        { "label": "DCE", "value": "2.070" },
        { "label": "Gestation Length", "value": "0.077" },
        { "label": "Early First Calving", "value": "0.676" },
        { "label": "SSB", "value": "6.064" },
        { "label": "DSB", "value": "4.846" },
        { "label": "Productive Life", "value": "3.679" },
        { "label": "Livability", "value": "-0.875" },
        { "label": "Residual Feed Intake", "value": "143/31" },
        { "label": "SCS/Rel", "value": "2.798" },
        { "label": "Milking Speed", "value": "100/80" }
      ],
      "fertilities": [
        { "label": "SCR", "value": "" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 423 },
        { "label": "PTA Protein (lbs)", "value": 39 },
        { "label": "PTA Protein (%)", "value": 0.09 },
        { "label": "PTA Fat (lbs)", "value": 76 },
        { "label": "PTA Fat (%)", "value": 0.22 },
        { "label": "Production Reliability", "value": 83 },
        { "label": "Dtrs/Herds (Production)", "value": "" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": null }, // Not provided
        { "label": "Udder Composite", "value": null }, // Not provided
        { "label": "Feet & Leg Composite", "value": null }, // Not provided
        { "label": "Body Weight Composite", "value": null }, // Not provided
        { "label": "Dairy Composite", "value": null }, // Not provided
        { "label": "Type Reliability", "value": null }, // Not provided
        { "label": "Dtrs/Herds (Type)", "value": "" }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": null, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": 0.55, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": 0.38, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": -0.24, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": -0.32, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": 0.50, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": -0.17, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": -0.36, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": 0.52, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": 0.67, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": 0.51, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": 1.05, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": 0.65, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": 0.77, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": 0.36, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": 0.74, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": -0.02, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": 0.00, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 105, "rel": 67 }, "cdcb": { "value": 0.6, "rel": 75 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 105, "rel": 67 }, "cdcb": { "value": 0.4, "rel": 73 } },
    { "trait": "Metritis", "zoetis": { "value": 90, "rel": 52 }, "cdcb": { "value": 0.5, "rel": 72 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 101, "rel": 58 }, "cdcb": { "value": 0.1, "rel": 64 } },
    { "trait": "Ketosis", "zoetis": { "value": 97, "rel": 56 }, "cdcb": { "value": 0.2, "rel": 71 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 92, "rel": 63 }, "cdcb": { "value": 0.4, "rel": 75 } },
    { "trait": "Lameness", "zoetis": { "value": 100, "rel": 57 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 104, "rel": 49 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 103, "rel": 63 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 100, "rel": 37 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 97, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 0.6, "rel": 65 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 100, "rel": 54 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 105, "rel": 56 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 97, "rel": 59 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    // Not provided in image (birth date and genetic markers not visible)
    "4th DAM Melarry Mogul Freck-ET"
  ]
  },
  {
  "id": "7H015457",
  "registration_number": "HO840003206350171",
  "name": "TALON",
  "full_name": "HOTJOB X PINNACLE X DENVER",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: PEAK ALTAHOTJOB-ET",
    "Dam: OCD PINNACL TABORA 45016-ET GP-83",
    "2-02 3X 319D 11,281 kgM 4.2% 476 kgF 3.3% 375 kgP",
    "MGS: S-S-I MODESTY PINNACLE-ET"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": null }, // Not provided in image
        { "label": "NM$", "value": null }, // Not provided in image
        { "label": "CM$", "value": null }, // Not provided in image
        { "label": "GM$", "value": null }, // Not provided in image
        { "label": "Feed Efficiency ($)", "value": null }, // Not provided in image
        { "label": "Feed Saved", "value": null }, // Not provided in image
        { "label": "HHP$", "value": null }, // Not provided in image
        { "label": "DWP$", "value": null }, // Not provided in image
        { "label": "WT$", "value": null }, // Not provided in image
        { "label": "CW$", "value": null } // Not provided in image
      ],
      "fertilities": [
        { "label": "Fertility Index", "value": null }, // Not provided
        { "label": "DPR", "value": null }, // Not provided
        { "label": "HCR", "value": null }, // Not provided
        { "label": "CCR", "value": null } // Not provided
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE", "value": null }, // Not provided
        { "label": "DCE", "value": null }, // Not provided
        { "label": "Gestation Length", "value": null }, // Not provided
        { "label": "Early First Calving", "value": null }, // Not provided
        { "label": "SSB", "value": null }, // Not provided
        { "label": "DSB", "value": null }, // Not provided
        { "label": "Productive Life", "value": null }, // Not provided
        { "label": "Livability", "value": null }, // Not provided
        { "label": "Residual Feed Intake", "value": null }, // Not provided
        { "label": "SCS/Rel", "value": null }, // Not provided
        { "label": "Milking Speed", "value": null } // Not provided
      ],
      "fertilities": [
        { "label": "SCR", "value": null } // Not provided
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": -104 },
        { "label": "PTA Protein (lbs)", "value": 22 },
        { "label": "PTA Protein (%)", "value": 0.10 },
        { "label": "PTA Fat (lbs)", "value": 34 },
        { "label": "PTA Fat (%)", "value": 0.15 },
        { "label": "Production Reliability", "value": 99 },
        { "label": "Dtrs/Herds (Production)", "value": "3867/410" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": null }, // Not provided
        { "label": "Udder Composite", "value": null }, // Not provided
        { "label": "Feet & Leg Composite", "value": null }, // Not provided
        { "label": "Body Weight Composite", "value": null }, // Not provided
        { "label": "Dairy Composite", "value": null }, // Not provided
        { "label": "Type Reliability", "value": null }, // Not provided
        { "label": "Dtrs/Herds (Type)", "value": "" }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": null, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": null, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": null, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": null, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": null, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": null, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": null, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": null, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": null, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": null, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": null, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": null, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": null, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": null, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": null, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": null, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": null, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": null, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 103, "rel": 70 }, "cdcb": { "value": 0.9, "rel": 85 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 96, "rel": 83 }, "cdcb": { "value": -0.7, "rel": 90 } },
    { "trait": "Metritis", "zoetis": { "value": 97, "rel": 75 }, "cdcb": { "value": 0.3, "rel": 89 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 100, "rel": 71 }, "cdcb": { "value": -0.2, "rel": 74 } },
    { "trait": "Ketosis", "zoetis": { "value": 110, "rel": 75 }, "cdcb": { "value": 1.2, "rel": 81 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 102, "rel": 70 }, "cdcb": { "value": 0.4, "rel": 91 } },
    { "trait": "Lameness", "zoetis": { "value": 94, "rel": 64 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 102, "rel": 60 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 105, "rel": 48 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 96, "rel": 80 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 102, "rel": 36 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": 0, "rel": 73 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 108, "rel": 73 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 98, "rel": 72 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 96, "rel": 84 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    'Born On: October 15, 2019',
    'Beta-casein: A2A2',
    'Kappa-casein: AA',
    'EFI: 10.5%',
'aAa: 423',

  ]
  




  },
  {
  "id": "7H015420",
  "registration_number": "HO840003207538024",
  "name": "PORTER",
  "full_name": "LIONEL X DELTA X CASHFLOW",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: MR T-SPRUCE FRAZZ LIONEL-ET",
    "Dam: AARDEMA DELTA 40645",
    "5/3 2x 305D 10,510 kgM 4.7% 498 kgF 3.4% 35.1 kgP",
    "MGS: MR MOGUL DELTA 1427-ET"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 3082 },
        { "label": "NM$", "value": 748 },
        { "label": "CM$", "value": 755 },
        { "label": "GM$", "value": 765 },
        { "label": "Feed Efficiency ($)", "value": 212 },
        { "label": "Feed Saved", "value": 197 },
        { "label": "HHP$", "value": 684 },
        { "label": "DWP$", "value": 683 },
        { "label": "WT$", "value": 3 },
        { "label": "CW$", "value": 7 }
      ],
      "fertilities": [
        { "label": "Fertility Index", "value": "1.992" },
        { "label": "DPR", "value": "0.592" },
        { "label": "HCR", "value": "2.295" },
        { "label": "CCR", "value": "3.091" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE", "value": "1.799" },
        { "label": "DCE", "value": "2.591" },
        { "label": "Gestation Length", "value": "1.399" },
        { "label": "Early First Calving", "value": "3.285" },
        { "label": "SSB", "value": "5.196" },
        { "label": "DSB", "value": "5.490" },
        { "label": "Productive Life", "value": "3.090" },
        { "label": "Livability", "value": "1.979" },
        { "label": "Residual Feed Intake", "value": "-129/32" },
        { "label": "SCS/Rel", "value": "2.859/97" },
        { "label": "Milking Speed", "value": "103/79" }
      ],
      "fertilities": [
        { "label": "SCR", "value": "" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": 536 },
        { "label": "PTA Protein (lbs)", "value": 19 },
        { "label": "PTA Protein (%)", "value": 0.01 },
        { "label": "PTA Fat (lbs)", "value": 83 },
        { "label": "PTA Fat (%)", "value": 0.23 },
        { "label": "Production Reliability", "value": 99 },
        { "label": "Dtrs/Herds (Production)", "value": "1325/133" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 0.07 },
        { "label": "Udder Composite", "value": 0.18 },
        { "label": "Feet & Leg Composite", "value": 0.02 },
        { "label": "Body Weight Composite", "value": -0.41 },
        { "label": "Dairy Composite", "value": -0.29 },
        { "label": "Type Reliability", "value": 91 },
        { "label": "Dtrs/Herds (Type)", "value": "89/28" }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": -0.76, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": -0.11, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": -0.15, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": -0.47, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": -0.43, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": -0.98, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": -0.36, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": -0.24, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": -0.24, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": -0.10, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": -0.29, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": -0.49, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": -1.12, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": -0.70, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": -1.17, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": -0.46, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": -0.46, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": -0.50, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 100, "rel": 67 }, "cdcb": { "value": -0.2, "rel": 80 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 96, "rel": 82 }, "cdcb": { "value": -0.3, "rel": 89 } },
    { "trait": "Metritis", "zoetis": { "value": 101, "rel": 60 }, "cdcb": { "value": -0.6, "rel": 84 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 101, "rel": 66 }, "cdcb": { "value": -0.8, "rel": 72 } },
    { "trait": "Ketosis", "zoetis": { "value": 98, "rel": 75 }, "cdcb": { "value": -1.2, "rel": 83 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 103, "rel": 58 }, "cdcb": { "value": -0.8, "rel": 87 } },
    { "trait": "Lameness", "zoetis": { "value": 100, "rel": 63 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 98, "rel": 58 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 99, "rel": 50 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 94, "rel": 75 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 104, "rel": 41 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": -0.9, "rel": 69 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 104, "rel": 93 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 95, "rel": 88 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 101, "rel": 94 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    "Born On: September 03, 2019",
    "Beta-casein: A2A2",
    "Kappa-casein: AA",
    "EFI: 11.2%",
    "aAa: 423",
    
  ]
  },
 

  {
  "id": ' 14HO14963', // Not provided in image
  "registration_number": 'HO840003200059941', // Not provided in image
  "name": "FORD",
  "full_name": "RENEGADE X FRAZZLED X BALISTO",
  "price": 0,
  "category": "Red",
  "pedigree": [
    "Sire: 5-5-1 PR RENEGADE-ET",
    "Dam: MELARRY FRAZZLED FANDANGO-ET",
    "2-04 2X 305D 14,145 kgM 3.7% 523 kgF 3.3% 463 kgP",
    "MGS: MELARRY JOSUPER FRAZZLED-ET"
  ],
  "allDetails": [
    {
      "index": "indexes",
      "fertility": "DAUGHTER FERTILITY",
      "indexes": [
        { "label": "TPI", "value": 2864 },
        { "label": "NM$", "value": 284 },
        { "label": "CM$", "value": 329 },
        { "label": "GM$", "value": 275 },
        { "label": "Feed Efficiency ($)", "value": 74 },
        { "label": "Feed Saved", "value": -221 },
        { "label": "HHP$", "value": 448 },
        { "label": "DWP$", "value": 358 },
        { "label": "WT$", "value": 93 },
        { "label": "CW$", "value": -11 }
      ],
      "fertilities": [
        { "label": "Fertility Index", "value": "1.3/90" },
        { "label": "DPR", "value": "0.1/91" },
        { "label": "HCR", "value": "3.7/86" },
        { "label": "CCR", "value": "1.2/91" }
      ]
    },
    {
      "index": "MANAGEMENT TRAITS",
      "fertility": "SIRE FERTILITY",
      "indexes": [
        { "label": "SCE", "value": "2.4/95" },
        { "label": "DCE", "value": "2.7/83" },
        { "label": "Gestation Length", "value": "0.4/99" },
        { "label": "Early First Calving", "value": "3.8/87" },
        { "label": "SSB", "value": "6.3/90" },
        { "label": "DSB", "value": "4.6/82" },
        { "label": "Productive Life", "value": "1.8/91" },
        { "label": "Livability", "value": "-1.3/81" },
        { "label": "Residual Feed Intake", "value": "176/38" },
        { "label": "SCS/Rel", "value": "2.75/96" },
        { "label": "Milking Speed", "value": "100/83" }
      ],
      "fertilities": [
        { "label": "SCR", "value": "" }
      ]
    },
    {
      "index": "Production",
      "fertility": "Type",
      "indexes": [
        { "label": "PTA Milk (lbs)", "value": -632 },
        { "label": "PTA Protein (lbs)", "value": 9 },
        { "label": "PTA Protein (%)", "value": 0.12 },
        { "label": "PTA Fat (lbs)", "value": 46 },
        { "label": "PTA Fat (%)", "value": 0.28 },
        { "label": "Production Reliability", "value": 98 },
        { "label": "Dtrs/Herds (Production)", "value": "557/79" }
      ],
      "fertilities": [
        { "label": "PTA Type", "value": 0.23 },
        { "label": "Udder Composite", "value": 0.56 },
        { "label": "Feet & Leg Composite", "value": 0.89 },
        { "label": "Body Weight Composite", "value": 0.28 },
        { "label": "Dairy Composite", "value": -1.59 },
        { "label": "Type Reliability", "value": 95 },
        { "label": "Dtrs/Herds (Type)", "value": "148/21" }
      ]
    }
  ],
  "typeTraits": [
    { "label": "Stature", "value": "short", "score": null, "opposite": "tall" },
    { "label": "Strength", "value": "frail", "score": null, "opposite": "strong" },
    { "label": "Body Depth", "value": "shallow", "score": null, "opposite": "deep" },
    { "label": "Dairy Form", "value": "tight ribbed", "score": null, "opposite": "open ribbed" },
    { "label": "Rump Width", "value": "narrow", "score": null, "opposite": "wide" },
    { "label": "Rump Angle", "value": "high pins", "score": null, "opposite": "sloped" },
    { "label": "Rear Leg (side view)", "value": "posty", "score": null, "opposite": "sickled" },
    { "label": "Rear Leg (rear view)", "value": "hock-in", "score": null, "opposite": "straight" },
    { "label": "Foot Angle", "value": "low angle", "score": null, "opposite": "steep angle" },
    { "label": "Feet & Leg Score", "value": "low", "score": null, "opposite": "high" },
    { "label": "Fore Udder", "value": "loose", "score": null, "opposite": "strong" },
    { "label": "Rear Udder Height", "value": "low", "score": null, "opposite": "high" },
    { "label": "Rear Udder Width", "value": "narrow", "score": null, "opposite": "wide" },
    { "label": "Udder Cleft", "value": "weak", "score": null, "opposite": "strong" },
    { "label": "Udder Depth", "value": "deep", "score": null, "opposite": "shallow" },
    { "label": "Front Teat Placement", "value": "wide", "score": null, "opposite": "close" },
    { "label": "Rear Teat Placement", "value": "wide", "score": null, "opposite": "close" },
    { "label": "Teat Length", "value": "short", "score": null, "opposite": "long" }
  ],
  "wellnessTraits": [
    { "trait": "Mastitis", "zoetis": { "value": 105, "rel": 74 }, "cdcb": { "value": 3.2, "rel": 83 } },
    { "trait": "Retained Placenta", "zoetis": { "value": 101, "rel": 81 }, "cdcb": { "value": -0.3, "rel": 81 } },
    { "trait": "Metritis", "zoetis": { "value": 95, "rel": 74 }, "cdcb": { "value": 0.3, "rel": 82 } },
    { "trait": "Hypocalcemia/Milk Fever", "zoetis": { "value": 102, "rel": 65 }, "cdcb": { "value": 0.3, "rel": 70 } },
    { "trait": "Ketosis", "zoetis": { "value": 105, "rel": 77 }, "cdcb": { "value": 1.4, "rel": 81 } },
    { "trait": "Displaced Abomasum", "zoetis": { "value": 107, "rel": 73 }, "cdcb": { "value": 0.9, "rel": 86 } },
    { "trait": "Lameness", "zoetis": { "value": 99, "rel": 71 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Respiratory Disease", "zoetis": { "value": 103, "rel": 67 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cow Abortion", "zoetis": { "value": 102, "rel": 59 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Twinning", "zoetis": { "value": 106, "rel": 78 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Cystic Ovary", "zoetis": { "value": 97, "rel": 46 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Heifer Livability", "zoetis": { "value": null, "rel": "N/A" }, "cdcb": { "value": -0.1, "rel": 72 } },
    { "trait": "Calf Respiratory Disease", "zoetis": { "value": 89, "rel": 87 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Scours", "zoetis": { "value": 112, "rel": 89 }, "cdcb": { "value": null, "rel": null } },
    { "trait": "Calf Livability", "zoetis": { "value": 92, "rel": 89 }, "cdcb": { "value": null, "rel": null } }
  ],
  "genetics": [
    "Born On: January 03, 2019",
    "Beta-casein: A1A2",
    "Kappa-casein: BB",
    "EFI: 10.2%",
    "aAa: 453",
    "Daughter Average: 11,582 kgM 514 kgF 4.40%F 393 kgP 3.40%P",
    "MGGD: Melarry Mogul Freck-ET"
  ]
}
  
  




]
