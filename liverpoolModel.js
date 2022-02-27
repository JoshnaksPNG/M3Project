
//Source: https://liverpool.gov.uk/council/key-statistics-and-data/headline-indicators/labour-market/
const JobBreakdown = 
{
    management: 0.079,
    professional: 0.156,
    technical: 0.109,
    admin: 0.132,
    skilled: 0.101,
    caring: 0.109,
    sales: 0.103,
    process: 0.082,
    elementary: 0.129
};

//Source: https://www.nomisweb.co.uk/reports/lmp/lep/1925185554/report.aspx#tabempunemp
const Employed = 765200;

//years past 2021
const years = 6;

//Source: Simplified From Remote Work Data Sheet 3
const JobEstimatedFromHome =
{
    management: .87,
    professional: 0.97,
    technical: 0.98,
    admin: 0.54,
    skilled: 0.61,
    caring: 0.05,
    sales: .28,
    process: 0.01,
    elementary: .02
}

const JobEstimatedGrowth =
{
    management: .08,
    professional: 0.08,
    technical: 0.014,
    admin: -0.011,
    skilled: 0.003,
    caring: 0.001,
    sales: .037,
    process: 0.018,
    elementary: .003
}

//For Each Field, Get number of people, then get number that can work from home for said field, and sum them together.
let sum = 0;
for(const property in JobBreakdown)
{
    let fieldWorkers = JobBreakdown[property] * Employed;
    let atHome = (fieldWorkers + (fieldWorkers * JobEstimatedGrowth[property] * years)) * JobEstimatedFromHome[property];

    sum += atHome;
}

console.log(sum);
console.log((sum/Employed)*100);