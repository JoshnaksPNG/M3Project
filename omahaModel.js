
//Source: https://www.bls.gov/regions/midwest/news-release/occupationalemploymentandwages_omaha.htm#tablea.f.2
const OmahaJobBreakdown = 
{
    management: 0.059,
    buisiness: 0.061,
    computer: 0.043,
    engineering: 0.012,
    social: 0.08,
    community: 0.13,
    legal: 0.006,
    library: 0.062,
    arts: 0.011,
    practitioners: 0.071,
    support: 0.036,
    protective: 0.016,
    serving: 0.082,
    grounds: 0.028,
    personal: 0.024,
    sales: 0.10,
    office: 0.138,
    farming: 0.001,
    construction: 0.052,
    installation: 0.039,
    production: 0.052,
    transportation: 0.086
};

//Source: https://www.bls.gov/regions/midwest/ne_omaha_msa.htm
const OmahaEmployed = 492400;

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

//For Each Field, Get number of people, then get number that can work from home for said field, and sum them together.
let sum = 0;
for(const property in OmahaJobBreakdown)
{
    let fieldWorkers = OmahaJobBreakdown[property] * OmahaEmployed;
    let atHome = fieldWorkers * JobEstimatedFromHome[property];

    sum += atHome;
}

console.log(sum);
console.log((sum/OmahaEmployed)*100);