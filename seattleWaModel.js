
//Source: https://www.bls.gov/regions/west/news-release/occupationalemploymentandwages_seattle.htm#tablea.f.2
//Management infered by summing natinoal percentage occupations (99.6%) and subtracting Seattle-sans-management sum (94%)

const SeattleJobBreakdown = 
{
    management: 0.056,
    buisiness: 0.089,
    computer: 0.089,
    engineering: 0.026,
    social: 0.12,
    community: 0.16,
    legal: 0.008,
    library: 0.048,
    arts: 0.018,
    practitioners: 0.052,
    support: 0.038,
    protective: 0.018,
    serving: 0.074,
    grounds: 0.023,
    personal: 0.02,
    sales: 0.09,
    office: 0.112,
    farming: 0.001,
    construction: 0.047,
    installation: 0.036,
    production: 0.05,
    transportation: 0.073
};

const SeattleEmployed = 1763000;

//years past 2021
const years = 3;

//Source: Remote Work Data Sheet 3
const JobEstimatedFromHome =
{
    management: .87,
    buisiness: .88,
    computer: 1,
    engineering: .61,
    social: .54,
    community: .37,
    legal: .97,
    library: .98,
    arts: .76,
    practitioners: .05,
    support: .02,
    protective: .06,
    serving: 0,
    grounds: 0,
    personal: .26,
    sales: .28,
    office: .65,
    farming: .01,
    construction: 0,
    installation: .01,
    production: .01,
    transportation: .03
}

const JobEstimatedGrowth =
{
    management: 0.009,
    buisiness: 0.031,
    computer: 0.031,
    engineering: -.039,
    social: .0,
    community: .038,
    legal: .0,
    library: -.009,
    arts: .0,
    practitioners: -.022,
    support: .121,
    protective: .010,
    serving: -.013,
    grounds: -0.007,
    personal: -.056,
    sales: -.021,
    office: -0.031,
    farming: .0,
    construction: 0.34,
    installation: .021,
    production: -.032,
    transportation: .023
}

//For Each Field, Get number of people, then get number that can work from home for said field, and sum them together.
let sum = 0;
let newEmployed = 0;
for(const property in SeattleJobBreakdown)
{
    let fieldWorkers = SeattleJobBreakdown[property] * SeattleEmployed;
    let atHome = (fieldWorkers + (fieldWorkers * JobEstimatedGrowth[property] * years)) * JobEstimatedFromHome[property];

    sum += atHome;
    newEmployed += (fieldWorkers + (fieldWorkers * JobEstimatedGrowth[property] * years));
}

console.log(sum);
console.log((sum/newEmployed)*100);