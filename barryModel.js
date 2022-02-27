
//Source: https://liverpool.gov.uk/council/key-statistics-and-data/headline-indicators/labour-market/
const JobBreakdown = 
{
    management: 0.087,
    professional: 0.126,
    technical: 0.116,
    admin: 0.131,
    skilled: 0.12,
    caring: 0.126,
    sales: 0.114,
    process: 0.072,
    elementary: 0.108
};

//Source: https://www.nomisweb.co.uk/reports/lmp/lep/1925185554/report.aspx#tabempunemp
const Employed = 24594;

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

//For Each Field, Get number of people, then get number that can work from home for said field, and sum them together.
let sum = 0;
for(const property in JobBreakdown)
{
    let fieldWorkers = JobBreakdown[property] * Employed;
    let atHome = fieldWorkers * JobEstimatedFromHome[property];

    sum += atHome;
}

console.log(sum);
console.log((sum/Employed)*100);