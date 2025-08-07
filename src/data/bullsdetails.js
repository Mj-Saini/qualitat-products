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
      { label: "Strength", value: "frail", score: -0.18 , opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: 0.19 , opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.96 , opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.68 , opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.14 , opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: -0.25 , opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: -0.05 , opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.00 , opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.17, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 0.79 , opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 1.73 , opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 2.08, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: -0.30 , opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: -0.47 , opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.91, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.91, opposite: "close" },
      { label: "Teat Length", value: "short", score: -0.88 , opposite: "long" }
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
      { label: "Strength", value: "frail", score: -1.10 , opposite: "strong" },
      { label: "Body Depth", value: "shallow", score: -1.17, opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 0.01 , opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 0.51, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: 0.14 , opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: -0.81 , opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: 0.26, opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 0.56 , opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.23, opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 1.49, opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 2.12 , opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 0.99 , opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 0.20 , opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 1.53, opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 0.48, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 0.42 , opposite: "close" },
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
      { label: "Body Depth", value: "shallow", score: 0.57 , opposite: "deep" },
      { label: "Dairy Form", value: "tight ribbed", score: 1.31, opposite: "open ribbed" },
      { label: "Rump Width", value: "narrow", score: 1.05, opposite: "wide" },
      { label: "Rump Angle", value: "high pins", score: -1.09, opposite: "sloped" },
      { label: "Rear Leg (side view)", value: "posty", score: 0.05, opposite: "sickled" },
      { label: "Rear Leg (rear view)", value: "hock-in", score: -0.24 , opposite: "straight" },
      { label: "Foot Angle", value: "low angle", score: 1.08 , opposite: "steep angle" },
      { label: "Feet & Leg Score", value: "low", score: 0.74 , opposite: "high" },
      { label: "Fore Udder", value: "loose", score: 3.59 , opposite: "strong" },
      { label: "Rear Udder Height", value: "low", score: 3.46, opposite: "high" },
      { label: "Rear Udder Width", value: "narrow", score: 2.87, opposite: "wide" },
      { label: "Udder Cleft", value: "weak", score: 1.46, opposite: "strong" },
      { label: "Udder Depth", value: "deep", score: 2.43 , opposite: "shallow" },
      { label: "Front Teat Placement", value: "wide", score: 1.73, opposite: "close" },
      { label: "Rear Teat Placement", value: "wide", score: 1.69 , opposite: "close" },
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
}

]
