const Excel = require('exceljs');
const fs = require('fs');
const Math = require('math.js');

let workbook = new Excel.Workbook();

let pop = {
    "Mining, Logging and Construction" : 109600,
    "Manufacturing" : 142200,
    "Trade, Transportation and Utilities" : 332600,
    "Information" : 13900,
    "Financial Activies" : 87600,
    "Proffesional and Buisness Services" : 277500,
    "Education and Health Services" : 223500,
    "Leisure and Hospitality" : 13300,
    "Other Services" : 59300,
    "Government" : 206700
}

let popWeights = {
    "Mining, Logging and Construction": { "Farming, Fishing, Forestry": 0.35, "Building and Grounds Cleaning": 0.2, "Construction and Extraction": 0.45},
    "Manufacturing": { "Production": 0.7, "Architechture and Engineering": 0.3,},
    "Trade, Transportation and Utilities": { "Transportation and Material Moving": 0.6, "Personal Care and Service": 0.2, "Protective Services": 0.2},
    "Information": { "Computer and Math": 0.6, "Buisness and Finance": 0.1, "Office and Admin": 0.3,},
    "Financial Activies": { "Buisness and Finance": 0.6, "Office and Admin": 0.15, "Sales and Related": 0.25},
    "Professional and Buisness Services": { "Buisness and Finance": 0.5, "Legal": 0.1, "Office and Admin": 0.15, "Sales and Related": 0.15, "Production": 0.1},
    "Education and Health Services": { "Education and Training": 0.34, "Healthcare Practitioners": 0.33, "Healthcare Support": 0.33},
    "Leisure and Hospitality": { "Art and Design": 0.25, "Personal Care and Service": 0.4, "Community and Social Service": 0.35},
    "Other Services": { "Life Physical and Social Science": 1},
    "Government": { "Community and Social Service": 0.2, "Protective Services": 0.5, "Transportation and Material Moving": 0.3}
}

//for each sub catagory, label the percent
let data = {
    "Computer and Math" : 1,
    "Education and Training" : 0.98,
    "Legal" : 0.97,
    "Buisness and Finance" : 0.88,
    "Management" : 0.87,
    "Art and Design" : 0.76,
    "Office and Admin" : 0.65,
    "Architechture and Engineering" : 0.61,
    "Life Physical and Social Science" : 0.54,
    "Community and Social Service" : 0.37,
    "Sales and Related" : 0.28,
    "Personal Care and Service" : 0.26,
    "Protective Services" : 0.6,
    "Healthcare Practitioners" : 0.5,
    "Transportation and Material Moving" : 0.3,
    "Healthcare Support" : 0.2,
    "Farming, Fishing, Forestry" : 0.1,
    "Production" : 0.1,
    "Installation and Maitenence" : 0.1,
    "Construction and Extraction" : 0.0,
    "Food Preperation" : 0.0,
    "Building and Grounds Cleaning" : 0.0
}


getEstimatedPopulation();

function getEstimatedPopulation ()
{
    //TAKE EACH CATAGOY
    //MULTIPY WEIGHT * POPULATION * REMOTEREADY 
    //SUM THEM ALL FOR EACH CATAGORy
    //DIVIDE BY TOTAL CATAGOY COUNT
    //calculate percent that applies to each population catagory

    let total = 0;
    for (const [title, value] of Object.entries(data)) 
    {
        //get the weights dictionary for each thing
        let weightObj = weights[title];
        let accumulator = 0;
        let it = 0;
        for (const [wTitle, wValue] of Object.entries(weightObj))
        {
            accumulator += ((pop[wTitle]) * wValue * value);
            it++;
        }
        out = accumulator / it;
        total += out;
    }
    console.log(out);
    //apply the percentage to each catagory

}
