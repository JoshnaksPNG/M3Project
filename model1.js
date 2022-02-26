let pop = {
    "Mining, Logging and Construction": 109600,
    "Manufacturing": 142200,
    "Trade, Transportation and Utilities": 332600,
    "Information": 13900,
    "Financial Activities": 87600,
    "Professional and Buisness Services": 277500,
    "Education and Health Services": 223500,
    "Leisure and Hospitality": 13300,
    "Other Services": 59300,
    "Government": 206700
}
/*
let popWeights = {
    "Mining, Logging and Construction": { "Farming, Fishing, Forestry": 0.35, "Building and Grounds Cleaning": 0.2, "Construction and Extraction": 0.45 },
    "Manufacturing": { "Production": 0.7, "Architechture and Engineering": 0.3, },
    "Trade, Transportation and Utilities": { "Transportation and Material Moving": 0.6, "Personal Care and Service": 0.2, "Protective Services": 0.2 },
    "Information": { "Computer and Math": 0.6, "Buisness and Finance": 0.1, "Office and Admin": 0.3, },
    "Financial Activities": { "Buisness and Finance": 0.6, "Office and Admin": 0.15, "Sales and Related": 0.25 },
    "Professional and Buisness Services": { "Buisness and Finance": 0.5, "Legal": 0.1, "Office and Admin": 0.15, "Sales and Related": 0.15, "Production": 0.1 },
    "Education and Health Services": { "Education and Training": 0.34, "Healthcare Practitioners": 0.33, "Healthcare Support": 0.33 },
    "Leisure and Hospitality": { "Art and Design": 0.25, "Personal Care and Service": 0.4, "Community and Social Service": 0.35 },
    "Other Services": { "Life Physical and Social Science": 1 },
    "Government": { "Community and Social Service": 0.2, "Protective Services": 0.5, "Transportation and Material Moving": 0.3 }
}
*/
//for each sub catagory, label the percent




getEstimatedPopulation("Seattle, Washington");
UpdatePopulationList(30700, 33500, 94100, 9800, 44100, 71900, 79600, 47500, 18300, 65200);
getEstimatedPopulation("Omaha, Nebraska");
UpdatePopulationList(10300, 27200, 63900, 2500, 13000, 26100, 50500, 18200, 7700, 28300);
getEstimatedPopulation("Scranton, Pensylvanianaiania");
UpdatePopulationList(146240, 103120, 146100, 73120, 25592, 47528, 23900, 69700, 73120, 26560);
getEstimatedPopulation("Liverpool, UK");
UpdatePopulationList(4100, 5700, 1400, 4000, 3045, 5655, 9700, 9500, 2400, 9700);
getEstimatedPopulation("Barry, Wales");


function getEstimatedPopulation(name) {
    //TAKE EACH CATAGOY
    //MULTIPY WEIGHT * POPULATION * REMOTEREADY 
    //SUM THEM ALL FOR EACH CATAGORy
    //DIVIDE BY TOTAL CATAGOY COUNT
    //calculate percent that applies to each population catagory
    console.log("Estimated % of individuals who can work remotly for the city of " + name);

    let cTotal = 0;
    for (const [label, value] of Object.entries(pop))
    {
        cTotal += value;
    }
    console.log("Total workers: " + cTotal);

    let avTotal = 0;
    let avIterator = 0;
    for (const [majorCatagory, population] of Object.entries(pop)) {
        let weights = popWeights[majorCatagory];
        let accumulator = 0;
        for (const [weightCatagory, weight] of Object.entries(weights)) {
            accumulator += (weight * (population) * (data[weightCatagory]) );
        }
        console.log("\n");
        console.log(majorCatagory)
        out = (accumulator / cTotal) * 1000;
        console.log(out);

        avTotal = avTotal + out;
        avIterator++;
    }
    console.log("\n\n\n");
    console.log("Average");
    console.log(avTotal/avIterator);
    //apply the percentage to each catagory

}

function UpdatePopulationList(pMLC, pMAN, pTTU, pINF, pFIN, pPBS, pEHS, pLAH, pOTH, pGOV) {
    let data = {
        "Computer and Math": pMLC/pMLC,
        "Education and Training": 0.98,
        "Legal": 0.97,
        "Buisness and Finance": 0.88,
        "Management": 0.87,
        "Art and Design": 0.76,
        "Office and Admin": 0.65,
        "Architechture and Engineering": 0.61,
        "Life Physical and Social Science": 0.54,
        "Community and Social Service": 0.37,
        "Sales and Related": 0.28,
        "Personal Care and Service": 0.26,
        "Protective Services": 0.6,
        "Healthcare Practitioners": 0.5,
        "Transportation and Material Moving": 0.3,
        "Healthcare Support": 0.2,
        "Farming, Fishing, Forestry": 0.1,
        "Production": 0.1,
        "Installation and Maitenence": 0.1,
        "Construction and Extraction": 0.0,
        "Food Preperation": 0.0,
        "Building and Grounds Cleaning": 0.0
    }
    pop["Mining, Logging and Construction"] = pMLC;
    pop["Manufacturing"] = pMAN;
    pop["Trade, Transportation and Utilities"] = pTTU;
    pop["Information"] = pINF;
    pop["Financial Activities"] = pFIN;
    pop["Professional and Buisness Services"] = pPBS;
    pop["Education and Health Services"] = pEHS;
    pop["Leisure and Hospitality"] = pLAH;
    pop["Other Services"] = pOTH;
    pop["Government"] = pGOV;
}

function evaluateWorkersWhoCanOnline(popObj, )
{

}