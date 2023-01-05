const getYieldForPlant = function(plant, factors) {
    if (typeof factors === "undefined") {
        return plant.yield
    }
    else {
        switch (factors.sun) {
            case 'undified':
                return plant.yield
            case 'low':
                return plant.yield * 50 / 100
            case 'medium':
                return plant.yield * 100 / 100
            case 'high':
                return plant.yield * 150 / 100
        }
    }
}


const getYieldForCrop = (input, factors) => {
    if (typeof factors === "undefined") {
        return input.crop.yield * input.numCrops;
    }
    else {
        switch (factors.sun) {
            case 'undified':
                return input.crop.yield * input.numCrops
            case 'low':
                return (input.crop.yield * 50 / 100) * input.numCrops
            case 'medium':
                return (input.crop.yield * 100 / 100) * input.numCrops
            case 'high':
                return (input.crop.yield * 150 / 100) * input.numCrops
        }
    }
}

const calc = function (yields, factors) {
    if (typeof factors === "undefined") {
        return yields;
    }
    else {
        switch (factors.sun) {
            case 'undified':
                return yields
            case 'low':
                return yields * 50 / 100
            case 'medium':
                return (yields * 100 / 100)
            case 'high':
                return yields * 150 / 100
        }
    }
}
const getTotalYield = ({ crops }, factors) => {
    const a = crops.map(item => calc(item.crop.yield, factors) * item.numCrops)
    return a.reduce((elem1, elem2) => elem1 + elem2, 0)
}

const getCostsForCrop = (input) => {
    return input.crop.cost * input.numCrops;
}


const getRevenueForCrop = (input, factors) => {
    if (typeof factors === "undefined") {
        return input.crop.yield * input.crop.salePrice * input.numCrops
    }
    else {
        switch (factors.sun) {
            case 'undified':
                return input.crop.yield * input.crop.salePrice * input.numCrops
            case 'low':
                return (input.crop.yield * 50 / 100) * input.crop.salePrice * input.numCrops
            case 'medium':
                return (input.crop.yield * 100 / 100) * input.crop.salePrice * input.numCrops
            case 'high':
                return (input.crop.yield * 150 / 100) * input.crop.salePrice * input.numCrops
        }
    }
}

const getProfitForCrop = (input, factors) => {
    if (typeof factors === "undefined") {
        return ((input.crop.yield * input.crop.salePrice) * input.numCrops) - input.crop.cost * input.numCrops
    }
    else {
        switch (factors.sun) {
            case 'undified':
                return ((input.crop.yield * input.crop.salePrice) * input.numCrops) - input.crop.cost * input.numCrops
            case 'low':
                return ((input.crop.yield * 50 / 100) * input.crop.salePrice * input.numCrops) - input.crop.cost * input.numCrops
            case 'medium':
                return (((input.crop.yield * 100 / 100) * input.crop.salePrice) * input.numCrops) - input.crop.cost * input.numCrops
            case 'high':
                return (((input.crop.yield * 150 / 100) * input.crop.salePrice) * input.numCrops) - input.crop.cost * input.numCrops
        }
    }
}

const getTotalProfit = ({crops}, factors) => {
    const List = crops.map(item => {
        if (typeof factors === "undefined") {
            return ((item.crop.yield * item.crop.salePrice) * item.numCrops) - item.crop.cost * item.numCrops;
        }
        else {
            switch (factors.sun) {
                case 'undified':
                    return ((item.crop.yield * item.crop.salePrice) * item.numCrops) - item.crop.cost * item.numCrops
                case 'low':
                    return ((item.crop.yield * 50 / 100) * item.crop.salePrice * item.numCrops) - item.crop.cost * item.numCrops;
                case 'medium':
                    return (((item.crop.yield * 100 / 100) * item.crop.salePrice) * item.numCrops) - item.crop.cost * item.numCrops;
                case 'high':
                    return (((item.crop.yield * 150 / 100) * item.crop.salePrice) * item.numCrops) - item.crop.cost * item.numCrops;
            }
        }
    })
    return List.reduce((elem1, elem2) => elem1 + elem2, 0);
}
module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};