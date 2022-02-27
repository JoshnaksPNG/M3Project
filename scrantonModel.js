
//Source: https://www.bls.gov/regions/mid-atlantic/news-release/occupationalemploymentandwages_scranton.htm#tablea.f.2
const JobBreakdown = 
{
    management: 0.036,
    buisiness: 0.037,
    computer: 0.015,
    engineering: 0.013,
    social: 0.06,
    community: 0.19,
    legal: 0.005,
    library: 0.053,
    arts: 0.009,
    practitioners: 0.07,
    support: 0.058,
    protective: 0.022,
    serving: 0.073,
    grounds: 0.028,
    personal: 0.017,
    sales: 0.086,
    office: 0.147,
    farming: 0.001,
    construction: 0.034,
    installation: 0.044,
    production: 0.083,
    transportation: 0.143
};

//Source https://www.bls.gov/regions/mid-atlantic/pa_scranton_msa.htm
const Employed = 263700;

//years past 2021
const years = 6;

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
    management: 0.040,
    buisiness: 0.014,
    computer: -0.029,
    engineering: -0.018,
    social: 0.05,
    community: .0,
    legal: .0,
    library: -.005,
    arts: 0.031,
    practitioners: .007,
    support: .142,
    protective: .012,
    serving: -.035,
    grounds: -.031,
    personal: -.121,
    sales: -.016,
    office: -0.036,
    farming: .0,
    construction: 0,
    installation: .032,
    production: -.003,
    transportation: .064
}

//For Each Field, Get number of people, then get number that can work from home for said field, and sum them together.
let sum = 0;
let newEmployed = 0;
for(const property in JobBreakdown)
{
    let fieldWorkers = JobBreakdown[property] * Employed;
    let atHome = (fieldWorkers + (fieldWorkers * JobEstimatedGrowth[property] * years)) * JobEstimatedFromHome[property];

    sum += atHome;
    newEmployed += (fieldWorkers + (fieldWorkers * JobEstimatedGrowth[property] * years));
}

console.log(sum);
console.log((sum/newEmployed)*100);