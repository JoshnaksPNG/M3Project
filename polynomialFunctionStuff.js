const Math = require('math.js');

class City
{
    //String name, int population, Industry industries
    constructor()
    {
        this.name;
        this.population;
        this.industries =
        {

        }
    }
}

class Industry
{
    //Pass in String name, and Some Sort of Math Function func
    constructor(name, func)
    {
        this.name = name;
        this.currentWorkers;
        this.workGrowth = func;
    }
}

class PolyFunction
{
    //Pass in int list or float list (Lowest Degree (0) to highest Degree)
    //Pass in displacements for each degree's x
    constructor(degList, dispList)
    {
        this.degList = degList;
        this.dispList = dispList;

        this.highestDeg;

        //Find the Highest Degree
        for(let i = this.degList.length - 1; i >= 0; --i)
        {
            if(this.degList[i] != 0)
            {
                this.highestDeg = i;
                break;
            }
        }
    }

    eval(x)
    {
        let sum = 0;

        //Add Together all degrees
        for(let i = 0; i < this.degList.length; ++i)
        {
            switch(i)
            {
                case 0:
                    sum += this.degList[i];
                    break;
                case 1:
                    sum += (this.degList[i] * (x - this.dispList[1]));
                    break;
                default:
                    sum += (this.degList[i] * Math.pow((x - this.dispList[i]),i));
                    break;
            }
        }

        return sum;
    }
}

class logFunction
{
    //C = multiplier, xDisp = x axis dipslacement, yDisp = y axis displacement
    constructor(base, c, xDisp, yDisp)
    {
        this.base = base;
        this.c = c;
        this.xDisp = xDisp;
        this.yDisp = yDisp;
    }

    eval(x)
    {
        return this.yDisp + (this.c * ((Math.log(x - this.xDisp)/Math.log(this.base))));
    }
}