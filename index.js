const Excel = require('exceljs');
const fs = require('fs');
const Math = require('math.js');

let workbook = new Excel.Workbook();

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
    "Community and Socail Service" : 0.37,
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

//assign each sub catagory to main catagories by weights
let weights = {
    "Computer and Math" : {"Information" : 0.90, "Financial Activities" : 0.1},
    "Education and Training" : {"Education and Health Services" : 1},
    "Legal" : {"Proffesional and Buisness Services" : 1},
    "Buisness and Finance" : {"Proffesional and Buisness Services" : 1},
    "Management" : {"Proffesional and Buisness Services" : 1},
    "Art and Design" : {"Leisure and Hospitality" : 1},
    "Office and Admin" : {"Proffesional and Buisness Services" : 1},
    "Architechture and Engineering" : {"Proffesional and Buisness Services" : 1},
    "Life Physical and Social Science" : {"Proffesional and Buisness Services" : 1},
    "Community and Socail Service" : {"Proffesional and Buisness Services" : 1},
    "Sales and Related" : {"Proffesional and Buisness Services" : 1},
    "Personal Care and Service" : {"Proffesional and Buisness Services" : 1},
    "Protective Services" : {"Proffesional and Buisness Services" : 1},
    "Healthcare Practitioners" : {"Proffesional and Buisness Services" : 1},
    "Transportation and Material Moving" : {"Proffesional and Buisness Services" : 1},
    "Healthcare Support" : {"Proffesional and Buisness Services" : 1},
    "Farming, Fishing, Forestry" : {"Proffesional and Buisness Services" : 1},
    "Production" : {"Proffesional and Buisness Services" : 1},
    "Installation and Maitenence" : {"Proffesional and Buisness Services" : 1},
    "Construction and Extraction" : {"Proffesional and Buisness Services" : 1},
    "Food Preperation" : {"Proffesional and Buisness Services" : 1},
    "Building and Grounds Cleaning" : {"Proffesional and Buisness Services" : 1}
}
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

function getEstimatedPopulation ()
{
    //TAKE EACH CATAGOY
    //MULTIPY WEIGHT * POPULATION * REMOTEREADY 
    //SUM THEM ALL FOR EACH CATAGORy
    //DIVIDE BY TOTAL CATAGOY COUNT
    //calculate percent that applies to each population catagory
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

        if (title == "Computer and Math")
        {
            console.log(out);
        } 
    }
    
    //apply the percentage to each catagory

}
