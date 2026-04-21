// tax-rates.js - Separate file for tax data (easy to update)
// --- MULTI-YEAR TAX SLABS DATA ---


// =====================================================================================================
// Tax Slabs For Salaried & Business Person For The Period Of TY 2021 To 2026 Plus TY 2027 As Dummy Data 
// =====================================================================================================

const ALL_SLABS = {
    TY2027: {
        salaried: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.01, base: 0, description: "1% on excess over 600,000" },
            { limit: 2200000, rate: 0.11, base: 6000, description: "6,000 + 11% on excess over 1,200,000" },
            { limit: 3200000, rate: 0.23, base: 116000, description: "116,000 + 23% on excess over 2,200,000" },
            { limit: 4100000, rate: 0.30, base: 346000, description: "346,000 + 30% on excess over 3,200,000" },
            { limit: Infinity, rate: 0.35, base: 616000, description: "616,000 + 35% on excess over 4,100,000" }
        ],
        business: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.05, base: 0, description: "5% on excess over 600,000" },
            { limit: 1600000, rate: 0.20, base: 30000, description: "30,000 + 20% on excess over 1,200,000" },
            { limit: 3200000, rate: 0.30, base: 110000, description: "110,000 + 30% on excess over 1,600,000" },
            { limit: 5600000, rate: 0.40, base: 590000, description: "590,000 + 40% on excess over 3,200,000" },
            { limit: Infinity, rate: 0.45, base: 1550000, description: "1,550,000 + 45% on excess over 5,600,000" }
        ]
    },

    TY2026: {
        salaried: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.01, base: 0, description: "1% on excess over 600,000" },
            { limit: 2200000, rate: 0.11, base: 6000, description: "6,000 + 11% on excess over 1,200,000" },
            { limit: 3200000, rate: 0.23, base: 116000, description: "116,000 + 23% on excess over 2,200,000" },
            { limit: 4100000, rate: 0.30, base: 346000, description: "346,000 + 30% on excess over 3,200,000" },
            { limit: Infinity, rate: 0.35, base: 616000, description: "616,000 + 35% on excess over 4,100,000" }
        ],
        business: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.15, base: 0, description: "15% on excess over 600,000" },
            { limit: 1600000, rate: 0.20, base: 90000, description: "90,000 + 20% on excess over 1,200,000" },
            { limit: 3200000, rate: 0.30, base: 170000, description: "170,000 + 30% on excess over 1,600,000" },
            { limit: 5600000, rate: 0.40, base: 650000, description: "650,000 + 40% on excess over 3,200,000" },
            { limit: Infinity, rate: 0.45, base: 1610000, description: "1,610,000 + 45% on excess over 5,600,000" }
        ]
    },

    TY2025: {
        salaried: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.05, base: 0, description: "5% on excess over 600,000" },
            { limit: 2200000, rate: 0.15, base: 30000, description: "30,000 + 15% on excess over 1,200,000" },
            { limit: 3200000, rate: 0.25, base: 180000, description: "180,000 + 25% on excess over 2,200,000" },
            { limit: 4100000, rate: 0.30, base: 430000, description: "430,000 + 30% on excess over 3,200,000" },
            { limit: Infinity, rate: 0.35, base: 700000, description: "700,000 + 35% on excess over 4,100,000" }
        ],
        business: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.15, base: 0, description: "15% on excess over 600,000" },
            { limit: 1600000, rate: 0.20, base: 90000, description: "90,000 + 20% on excess over 1,200,000" },
            { limit: 3200000, rate: 0.30, base: 170000, description: "170,000 + 30% on excess over 1,600,000" },
            { limit: 5600000, rate: 0.40, base: 650000, description: "650,000 + 40% on excess over 3,200,000" },
            { limit: Infinity, rate: 0.45, base: 1610000, description: "1,610,000 + 45% on excess over 5,600,000" }
        ]
    },

    TY2024: {
        salaried: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.025, base: 0, description: "2.5% on excess over 600,000" },
            { limit: 2400000, rate: 0.125, base: 15000, description: "15,000 + 12.5% on excess over 1,200,000" },
            { limit: 3600000, rate: 0.225, base: 165000, description: "165,000 + 22.5% on excess over 2,400,000" },
            { limit: 6000000, rate: 0.275, base: 435000, description: "435,000 + 27.5% on excess over 3,600,000" },
            { limit: Infinity, rate: 0.35, base: 1095000, description: "1,095,000 + 35% on excess over 6,000,000" }
        ],
        business: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 800000, rate: 0.075, base: 0, description: "7.5% on excess over 600,000" },
            { limit: 1200000, rate: 0.15, base: 15000, description: "15,000 + 15% on excess over 800,000" },
            { limit: 2400000, rate: 0.20, base: 75000, description: "75,000 + 20% on excess over 1,200,000" },
            { limit: 3000000, rate: 0.25, base: 315000, description: "315,000 + 25% on excess over 2,400,000" },
            { limit: 4000000, rate: 0.30, base: 465000, description: "465,000 + 30% on excess over 3,000,000" },
            { limit: Infinity, rate: 0.35, base: 765000, description: "765,000 + 35% on excess over 4,000,000" }
        ]
    },

    TY2023: {
        salaried: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.025, base: 0, description: "2.5% on excess over 600,000" },
            { limit: 2400000, rate: 0.125, base: 15000, description: "15,000 + 12.5% on excess over 1,200,000" },
            { limit: 3600000, rate: 0.20, base: 165000, description: "165,000 + 20% on excess over 2,400,000" },
            { limit: 6000000, rate: 0.25, base: 405000, description: "405,000 + 25% on excess over 3,600,000" },
            { limit: 12000000, rate: 0.325, base: 1005000, description: "1,005,000 + 32.5% on excess over 6,000,000" },
            { limit: Infinity, rate: 0.35, base: 2955000, description: "2,955,000 + 35% on excess over 12,000,000" }
        ],
        business: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 800000, rate: 0.05, base: 0, description: "5% on excess over 600,000" },
            { limit: 1200000, rate: 0.125, base: 10000, description: "10,000 + 12.5% on excess over 800,000" },
            { limit: 2400000, rate: 0.175, base: 60000, description: "60,000 + 17.5% on excess over 1,200,000" },
            { limit: 3000000, rate: 0.225, base: 270000, description: "270,000 + 22.5% on excess over 2,400,000" },
            { limit: 4000000, rate: 0.275, base: 405000, description: "405,000 + 27.5% on excess over 3,000,000" },
            { limit: 6000000, rate: 0.325, base: 680000, description: "680,000 + 32.5% on excess over 4,000,000" },
            { limit: Infinity, rate: 0.35, base: 1330000, description: "1,330,000 + 35% on excess over 6,000,000" }
        ]
    },

    TY2022: {
        salaried: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.05, base: 0, description: "5% on excess over 600,000" },
            { limit: 1800000, rate: 0.10, base: 30000, description: "30,000 + 10% on excess over 1,200,000" },
            { limit: 2500000, rate: 0.15, base: 90000, description: "90,000 + 15% on excess over 1,800,000" },
            { limit: 3500000, rate: 0.175, base: 195000, description: "195,000 + 17.5% on excess over 2,500,000" },
            { limit: 5000000, rate: 0.20, base: 370000, description: "370,000 + 20% on excess over 3,500,000" },
            { limit: 8000000, rate: 0.225, base: 670000, description: "670,000 + 22.5% on excess over 5,000,000" },
            { limit: 12000000, rate: 0.25, base: 1345000, description: "1,345,000 + 25% on excess over 8,000,000" },
            { limit: 30000000, rate: 0.275, base: 2345000, description: "2,345,000 + 27.5% on excess over 12,000,000" },
            { limit: 50000000, rate: 0.30, base: 7295000, description: "7,295,000 + 30% on excess over 30,000,000" },
            { limit: 75000000, rate: 0.325, base: 13295000, description: "13,295,000 + 32.5% on excess over 50,000,000" },
            { limit: Infinity, rate: 0.35, base: 21420000, description: "21,420,000 + 35% on excess over 75,000,000" }
        ],
        business: [
            { limit: 400000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 600000, rate: 0.05, base: 0, description: "5% on excess over 400,000" },
            { limit: 1200000, rate: 0.10, base: 10000, description: "10,000 + 10% on excess over 600,000" },
            { limit: 2400000, rate: 0.15, base: 70000, description: "70,000 + 15% on excess over 1,200,000" },
            { limit: 3000000, rate: 0.20, base: 250000, description: "250,000 + 20% on excess over 2,400,000" },
            { limit: 4000000, rate: 0.25, base: 370000, description: "370,000 + 25% on excess over 3,000,000" },
            { limit: 6000000, rate: 0.30, base: 620000, description: "620,000 + 30% on excess over 4,000,000" },
            { limit: Infinity, rate: 0.35, base: 1220000, description: "1,220,000 + 35% on excess over 6,000,000" }
        ]
    },

    TY2021: {
        salaried: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.05, base: 0, description: "5% on excess over 600,000" },
            { limit: 1800000, rate: 0.10, base: 30000, description: "30,000 + 10% on excess over 1,200,000" },
            { limit: 2500000, rate: 0.15, base: 90000, description: "90,000 + 15% on excess over 1,800,000" },
            { limit: 3500000, rate: 0.175, base: 195000, description: "195,000 + 17.5% on excess over 2,500,000" },
            { limit: 5000000, rate: 0.20, base: 370000, description: "370,000 + 20% on excess over 3,500,000" },
            { limit: 8000000, rate: 0.225, base: 670000, description: "670,000 + 22.5% on excess over 5,000,000" },
            { limit: 12000000, rate: 0.25, base: 1345000, description: "1,345,000 + 25% on excess over 8,000,000" },
            { limit: 30000000, rate: 0.275, base: 2345000, description: "2,345,000 + 27.5% on excess over 12,000,000" },
            { limit: 50000000, rate: 0.30, base: 7295000, description: "7,295,000 + 30% on excess over 30,000,000" },
            { limit: 75000000, rate: 0.325, base: 13295000, description: "13,295,000 + 32.5% on excess over 50,000,000" },
            { limit: Infinity, rate: 0.35, base: 21420000, description: "21,420,000 + 35% on excess over 75,000,000" }
        ],
        business: [
            { limit: 400000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 600000, rate: 0.05, base: 0, description: "5% on excess over 400,000" },
            { limit: 1200000, rate: 0.10, base: 10000, description: "10,000 + 10% on excess over 600,000" },
            { limit: 2400000, rate: 0.15, base: 70000, description: "70,000 + 15% on excess over 1,200,000" },
            { limit: 3000000, rate: 0.20, base: 250000, description: "250,000 + 20% on excess over 2,400,000" },
            { limit: 4000000, rate: 0.25, base: 370000, description: "370,000 + 25% on excess over 3,000,000" },
            { limit: 6000000, rate: 0.30, base: 620000, description: "620,000 + 30% on excess over 4,000,000" },
            { limit: Infinity, rate: 0.35, base: 1220000, description: "1,220,000 + 35% on excess over 6,000,000" }
        ]
    },

    TY2020: {
        salaried: [
            { limit: 600000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 1200000, rate: 0.05, base: 0, description: "5% on excess over 600,000" },
            { limit: 1800000, rate: 0.10, base: 30000, description: "30,000 + 10% on excess over 1,200,000" },
            { limit: 2500000, rate: 0.15, base: 90000, description: "90,000 + 15% on excess over 1,800,000" },
            { limit: 3500000, rate: 0.175, base: 195000, description: "195,000 + 17.5% on excess over 2,500,000" },
            { limit: 5000000, rate: 0.20, base: 370000, description: "370,000 + 20% on excess over 3,500,000" },
            { limit: 8000000, rate: 0.225, base: 670000, description: "670,000 + 22.5% on excess over 5,000,000" },
            { limit: 12000000, rate: 0.25, base: 1345000, description: "1,345,000 + 25% on excess over 8,000,000" },
            { limit: 30000000, rate: 0.275, base: 2345000, description: "2,345,000 + 27.5% on excess over 12,000,000" },
            { limit: 50000000, rate: 0.30, base: 7295000, description: "7,295,000 + 30% on excess over 30,000,000" },
            { limit: 75000000, rate: 0.325, base: 13295000, description: "13,295,000 + 32.5% on excess over 50,000,000" },
            { limit: Infinity, rate: 0.35, base: 21420000, description: "21,420,000 + 35% on excess over 75,000,000" }
        ],
        business: [
            { limit: 400000, rate: 0.00, base: 0, description: "Tax Exempt" },
            { limit: 600000, rate: 0.05, base: 0, description: "5% on excess over 400,000" },
            { limit: 1200000, rate: 0.10, base: 10000, description: "10,000 + 10% on excess over 600,000" },
            { limit: 2400000, rate: 0.15, base: 70000, description: "70,000 + 15% on excess over 1,200,000" },
            { limit: 3000000, rate: 0.20, base: 250000, description: "250,000 + 20% on excess over 2,400,000" },
            { limit: 4000000, rate: 0.25, base: 370000, description: "370,000 + 25% on excess over 3,000,000" },
            { limit: 6000000, rate: 0.30, base: 620000, description: "620,000 + 30% on excess over 4,000,000" },
            { limit: Infinity, rate: 0.35, base: 1220000, description: "1,220,000 + 35% on excess over 6,000,000" }
        ]
    },
};


// =========================================================================================================
// Surcharge Tax For Salaried & Business Person For The Period Of TY 2021 To 2026 Plus TY 2027 As Dummy Data 
// =========================================================================================================

// --- SECTION 4AB (SURCHARGE) DATA ---
const SURCHARGE_RATES = {
    TY2027: { salaried: 0.09, business: 0.10, threshold: 10000000 },
    TY2026: { salaried: 0.09, business: 0.10, threshold: 10000000 },
    TY2025: { salaried: 0.10, business: 0.10, threshold: 10000000 },
   
    // This Section First Time Introduced In TY - 25 , So No Preiously Applied
};

// ===========================================================================================================
// Super Tax Slabs For Salaried & Business Person For The Period Of TY 2021 To 2026 Plus TY 2027 As Dummy Data 
// ===========================================================================================================

// --- SECTION 4C (SUPER TAX) DATA ---
const SUPER_TAX_SLABS = {
    TY2027: [
        { limit: 150000000, rate: 0.00, base: 0, description: "No Super Tax" },
        { limit: 200000000, rate: 0.01, base: 0, description: "1% on excess over 150M" },
        { limit: 250000000, rate: 0.015, base: 500000, description: "500,000 + 1.5% on excess over 200M" },
        { limit: 300000000, rate: 0.02, base: 1250000, description: "1,250,000 + 2% on excess over 250M" },
        { limit: 350000000, rate: 0.025, base: 2250000, description: "2,250,000 + 2.5% on excess over 300M" },
        { limit: 400000000, rate: 0.03, base: 3500000, description: "3,500,000 + 3% on excess over 350M" },
        { limit: 450000000, rate: 0.035, base: 5000000, description: "5,000,000 + 3.5% on excess over 400M" },
        { limit: 500000000, rate: 0.04, base: 6750000, description: "6,750,000 + 4% on excess over 450M" },
        { limit: Infinity, rate: 0.04, base: 8750000, description: "8,750,000 + 4% on excess over 500M" }
    ],
    TY2026: [
        { limit: 150000000, rate: 0.00, base: 0, description: "No Super Tax" },
        { limit: 200000000, rate: 0.01, base: 0, description: "1% on excess over 150M" },
        { limit: 250000000, rate: 0.015, base: 0, description: "0 + 1.5% on excess over 200M" },
        { limit: 300000000, rate: 0.025, base: 0, description: "0 + 2.5% on excess over 250M" },
        { limit: 350000000, rate: 0.035, base: 0, description: "0 + 3.5% on excess over 300M" },
        { limit: 400000000, rate: 0.055, base: 0, description: "0 + 5.5% on excess over 350M" },
        { limit: 500000000, rate: 0.075, base: 0, description: "0 + 7.5% on excess over 400M" },
        { limit: Infinity, rate: 0.1, base: 0, description: "0 + 10% on excess over 500M" }
    ],
    TY2025: [
        { limit: 150000000, rate: 0.00, base: 0, description: "No Super Tax" },
        { limit: 200000000, rate: 0.01, base: 0, description: "1% on excess over 150M" },
        { limit: 250000000, rate: 0.02, base: 0, description: "0 + 2% on excess over 200M" },
        { limit: 300000000, rate: 0.03, base: 0, description: "0 + 3% on excess over 250M" },
        { limit: 350000000, rate: 0.04, base: 0, description: "0 + 4% on excess over 300M" },
        { limit: 400000000, rate: 0.06, base: 0, description: "0 + 6% on excess over 350M" },
        { limit: 500000000, rate: 0.08, base: 0, description: "0 + 8% on excess over 400M" },
        { limit: Infinity, rate: 0.1, base: 0, description: "0 + 10% on excess over 500M" }
    ],
    TY2024: [
        { limit: 150000000, rate: 0.00, base: 0, description: "No Super Tax" },
        { limit: 200000000, rate: 0.01, base: 0, description: "1% on excess over 150M" },
        { limit: 250000000, rate: 0.02, base: 0, description: "0 + 2% on excess over 200M" },
        { limit: 300000000, rate: 0.03, base: 0, description: "0 + 3% on excess over 250M" },
        { limit: 350000000, rate: 0.04, base: 0, description: "0 + 4% on excess over 300M" },
        { limit: 400000000, rate: 0.06, base: 0, description: "0 + 6% on excess over 350M" },
        { limit: 500000000, rate: 0.08, base: 0, description: "0 + 8% on excess over 400M" },
        { limit: Infinity, rate: 0.1, base: 0, description: "0 + 10% on excess over 500M" }
    ],
    TY2023: [
        { limit: 150000000, rate: 0.00, base: 0, description: "No Super Tax" },
        { limit: 200000000, rate: 0.01, base: 0, description: "1% on excess over 150M" },
        { limit: 250000000, rate: 0.02, base: 0, description: "0 + 2% on excess over 200M" },
        { limit: 300000000, rate: 0.03, base: 0, description: "0 + 3% on excess over 250M" },
        { limit: 350000000, rate: 0.04, base: 0, description: "0 + 4% on excess over 300M" },
        { limit: 400000000, rate: 0.06, base: 0, description: "0 + 6% on excess over 350M" },
        { limit: 500000000, rate: 0.08, base: 0, description: "0 + 8% on excess over 400M" },
        { limit: Infinity, rate: 0.1, base: 0, description: "0 + 10% on excess over 500M" }
    ],
    TY2022: [
        { limit: 150000000, rate: 0.00, base: 0, description: "No Super Tax" },
        { limit: 200000000, rate: 0.01, base: 0, description: "1% on excess over 150M" },
        { limit: 250000000, rate: 0.02, base: 0, description: "0 + 2% on excess over 200M" },
        { limit: 300000000, rate: 0.03, base: 0, description: "0 + 3% on excess over 250M" },
        { limit: 350000000, rate: 0.04, base: 0, description: "0 + 4% on excess over 300M" },
        { limit: 400000000, rate: 0.04, base: 0, description: "0 + 4% on excess over 350M" },
        { limit: 500000000, rate: 0.04, base: 0, description: "0 + 4% on excess over 400M" },
        { limit: Infinity, rate: 0.04, base: 0, description: "0 + 4% on excess over 500M" }
    ],
    TY2021: []
};

// =====================================================================================================
//  Sims Network Code Finder Data 
// =====================================================================================================

const NetworkData = {
    providers: [
        {
            min: 300, max: 310, name: "Jazz (Mobilink)", brand: "Mobilink", type: "GSM/4G", logo: "jazz", note: "Formerly Mobilink - includes Warid network", color: "#ff0000"
        },
        {
            min: 311, max: 319, name: "Zong 4G", brand: "China Mobile", type: "4G/LTE", logo: "zong", note: "China Mobile Pakistan", color: "#16FF00"
        },
        {
            min: 320, max: 329, name: "Warid", brand: "Mobilink", type: "GSM", logo: "warid", note: "Now operating as Jazz/Mobilink", color: "#9C27B0"
        },
        {
            min: 330, max: 339, name: "Ufone", brand: "PTCL", type: "GSM/4G", logo: "ufone", note: "PTCL subsidiary - nationwide", color: "#FFED00"
        },
        {
            min: 340, max: 349, name: "Telenor", brand: "Telenor", type: "GSM/4G", logo: "telenor", note: "Leading digital operator", color: "#007bff"
        },
        {
            min: 350, max: 359, name: "SCOM", brand: "Special Comm", type: "GSM", logo: "scom", note: "AJK & Gilgit-Baltistan", color: "#2E7D32"
        }
    ],

    logos: {
        jazz: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#E31837"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="25" font-weight="bold">J</text></svg>`,
        zong: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#8CC63F"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="25" font-weight="bold">Z</text></svg>`,
        warid: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#9C27B0"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="22" font-weight="bold">W</text></svg>`,
        ufone: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#F37021"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="22" font-weight="bold">U</text></svg>`,
        telenor: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#00AEEF"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="20" font-weight="bold">T</text></svg>`,
        scom: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#2E7D32"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="22" font-weight="bold">S</text></svg>`,
        default: `<svg viewBox="0 0 24 24" fill="#929292"><path d="M17,1H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V3A2,2,0,0,0,17,1ZM7,19V5H17V19Z"/></svg>`
    }
};


// =====================================================================================================
// Tax On Cash Withdrawal For The Period Of TY 2021 To 2026 Plus TY 2027 As Dummy Data 
// =====================================================================================================

window.taxData = {
    taxYears: [
        { year: 2021, ratePercent: 0.6, threshold: 50000 },   //Previously Section Name Was 231A
       // { year: 2022, ratePercent: 0.4, threshold: 50000 },   Was Omitted
       // { year: 2023, ratePercent: 0.5, threshold: 50000 },   Was Omitted
        { year: 2024, ratePercent: 0.6, threshold: 50000 },
        { year: 2025, ratePercent: 0.6, threshold: 50000 },
        { year: 2026, ratePercent: 0.8, threshold: 50000 },   // Official rate for TY 2026
    //    { year: 2027, ratePercent: 0.9, threshold: 50000 }    // Estimated – change as needed
    ]
};



// =====================================================================================================
// Section 236: Telephone & Internet Users For The Period Of TY 2021 To 2026 Plus TY 2027 As Dummy Data 
// =====================================================================================================


const TaxCalculatorConfig = (function () {
    // Rates and thresholds for each tax year (2021-2027)
    const taxYears = {
        "2021": { landlineRate: 0.10, landlineThreshold: 1000, otherRate: 0.125 },
        "2022": { landlineRate: 0.10, landlineThreshold: 1000, otherRate: 0.10 },
        "2023": { landlineRate: 0.10, landlineThreshold: 1000, otherRate: 0.15 },
        "2024": { landlineRate: 0.10, landlineThreshold: 1000, otherRate: 0.15 },     // , nonFilerRate: 0.75 Not Exist From Now To Backwords
        "2025": { landlineRate: 0.10, landlineThreshold: 1000, otherRate: 0.15, nonFilerRate: 0.75 },
        "2026": { landlineRate: 0.10, landlineThreshold: 1000, otherRate: 0.15, nonFilerRate: 0.75 }, // Official rates
        "2027": { landlineRate: 0.10, landlineThreshold: 1000, otherRate: 0.15, nonFilerRate: 0.75 }  // Assumed (update when available)
    };

    // Category definitions – maps UI options to internal types and rate keys
    const categories = [
        { id: "landline", name: "🏠 Landline Telephone (bill > Rs. 1,000)", type: "landline", rateKey: "landlineRate", thresholdKey: "landlineThreshold" },
        { id: "mobile", name: "📱 Mobile Telephone (postpaid bill)", type: "other", rateKey: "otherRate" },
        { id: "internet", name: "🌐 Internet Subscriber (postpaid bill)", type: "other", rateKey: "otherRate" },
        { id: "prepaidTel", name: "📞 Prepaid Telephone Card", type: "other", rateKey: "otherRate" },
        { id: "prepaidNet", name: "📡 Prepaid Internet Card", type: "other", rateKey: "otherRate" },
        { id: "electronic", name: "💳 Electronic Units (top‑up, etc.)", type: "other", rateKey: "otherRate" }
    ];

    // Exemption categories as per Section 236(4)
    const exemptionCategories = [
        "Government",
        "Foreign diplomat",
        "Diplomatic mission",
        "Person with exemption certificate from Commissioner"
    ];

    // Public API
    return {
        taxYears: taxYears,
        categories: categories,
        exemptionCategories: exemptionCategories,
        defaultYear: "2026"
    };
})();




// =====================================================================================================
// Section 147A: Advance Tax On Sales Tax Registerded Persons For The Period Of TY 2021 To 2026 Plus TY 2027 As Dummy Data 
// =====================================================================================================


      // ---------- CENTRAL TAX RATES (easy update) ----------
        const TaxData = (function() {
            const rates = {
                2021:0.03,
                2022:0.03,
                2023:0.03,
                2024:0.03,
                2025:0.03,
                2026:0.03,
                2027:0.03}
                ;

            return { getRate: (year) => rates[year] || 0.03 };
        })();




// =====================================================================================================
// Section 236C & 236K: Property Tax For The Period Of 2026  
// =====================================================================================================


        // Using the exact variable name requested: Property_Tax
        const Property_Tax = (function() {
            // Slab thresholds (PKR)
            const SLAB_LIMIT_1 = 50_000_000;
            const SLAB_LIMIT_2 = 100_000_000;

            // Helper to determine slab category
            function getSlabCategory(value) {
                if (value > SLAB_LIMIT_2) return 'slab3';
                if (value > SLAB_LIMIT_1) return 'slab2';
                return 'slab1';
            }

            // Rates based on Income Tax Ordinance 2001 (Section 236C, 236K, Tenth Schedule)
            const rateTable = {
                // BUY (Section 236K)
                BUY: {
                    FILER: { slab1: 1.5, slab2: 2.0, slab3: 2.5 },      // Division XVIII
                    LATE: { slab1: 4.5, slab2: 5.5, slab3: 6.5 },       // Rule 1A (late filer)
                    NON:  { slab1: 10.5, slab2: 14.5, slab3: 18.5 }      // Tenth Schedule for non-filer
                },
                // SELL (Section 236C)
                SELL: {
                    FILER: { slab1: 4.5, slab2: 5.0, slab3: 5.5 },       // Division X
                    LATE: { slab1: 7.5, slab2: 8.5, slab3: 9.5 },        // Rule 1A (late filer)
                    NON:  { flat: 11.5 }                                 // Tenth Schedule: 11.5% flat for non-filer
                }
            };

            return {
                activeYear: 2026,
                getRate: function(transactionType, status, propertyValue) {
                    const val = Math.max(0, Number(propertyValue) || 0);
                    const trans = transactionType === 'BUY' ? 'BUY' : 'SELL';
                    const stat = (status === 'FILER' || status === 'LATE' || status === 'NON') ? status : 'FILER';
                    
                    const ratesForType = rateTable[trans];
                    if (!ratesForType) return 0;
                    
                    const rateGroup = ratesForType[stat];
                    if (!rateGroup) return 0;
                    
                    // handle non-filer SELL (flat rate)
                    if (trans === 'SELL' && stat === 'NON' && rateGroup.flat !== undefined) {
                        return rateGroup.flat;
                    }
                    
                    const slab = getSlabCategory(val);
                    return rateGroup[slab] || 0;
                }
            };
        })();
    




// =====================================================================================================
// Sales Tax ( FBR , PRA , KPRA , SRB , BRB , AJK ) For The Period Of TY 2020 To 2026 
// =====================================================================================================


// taxData.js - Centralized Tax Rates
window.SalesTaxRatesDB = {    // FBR Rates Are Verified By MySelf From Act

    2020: { FBR:17, PRA:16, SRB:13, KPRA:15, BRB:15, AJK:16 },
    2021: { FBR:17, PRA:16, SRB:13, KPRA:15, BRB:15, AJK:16 },
    2022: { FBR:17, PRA:16, SRB:13, KPRA:15, BRB:15, AJK:16 },
    2023: { FBR:18, PRA:16, SRB:13, KPRA:15, BRB:15, AJK:16 },  // Here In TY 23 FBR Rate Was Changed In Feb-23 From 17% To 18%
    2024: { FBR:18, PRA:16, SRB:13, KPRA:15, BRB:15, AJK:16 },
    2025: { FBR:18, PRA:16, SRB:15, KPRA:15, BRB:15, AJK:16 },
    2026: { FBR:18, PRA:16, SRB:15, KPRA:15, BRB:15, AJK:16 }
};
















    
