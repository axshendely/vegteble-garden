const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit} = require("./farm");

// describe("getYieldForPlant", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//     };

//     test("Get yield for plant without environment factors", () => {
//         expect(getYieldForPlant(corn)).toBe(30);
//     });
// });

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30, //standard
        factor: {
            sun: {
            low: -50, //standard - 50% = 15
            medium: 0, //standard - or + 0% = 30
            high: 50, //standard + 50% = 45
            },
        },
    };
    const environmentFactors = {
        sun: "low", // low = min 50%
    };
    test("Get yield for plant without environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

// describe("getYieldForCrop", () => {
//     const corn = {
//         name: "corn",
//         yield: 3,
//         factor: {
//             sun: {
//                 low: -50, //normal yield = 1,5
//                 medium: 0, //normal yield = 3,0
//                 high: 50, //normal yield = 4,5
//             },
//         },
//     };
//     const environmentFactors = {
//         sun: "low", // -15
//     };
//     const input = {
//         crop: corn, //normal yield - sun
//         numCrops: 10, //low sun x 10
//     };
//     test("Get Yield For Crop Without environment factors", () => {
//         expect(getYieldForCrop(input)).toBe(30);
//     })
// });

describe("getYieldForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factor: {
            sun: {
                low: -50, //normal yield = 1,5
                medium: 0, //normal yield = 3,0
                high: 50, //normal yield = 4,5
            },
        },
    };
    const environmentFactors = {
        sun: "low", // -15
    };
    const input = {
        crop: corn, //normal yield - sun
        numCrops: 10, //low sun x 10
    };
    test("Get Yield For Crop Without environment factors", () => {
        expect(getYieldForCrop(input)).toBe(30);
    })
    test("Get Yield For Crop With environment factors", () => {
        expect(getYieldForCrop(input, environmentFactors)).toBe(15);
    })
});

// describe("getTotalYield", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const pumpkin = {
//             name: "pumpkin",
//             yield: 4,
//         };
//         const crops = [
//             { crop: corn, numCrops: 5 },
//             { crop: pumpkin, numCrops: 2 },
//         ];
//         const environmentFactors = {
//             sun: "low", // -15
//         };
//         test("Get Total Yield Without environment factors", () => {
//             expect(getTotalYield({ crops })).toBe(23);
//         });
// });

describe("getTotalYield", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low", // -15
        };
        test("Get Total Yield Without environment factors", () => {
             expect(getTotalYield({ crops })).toBe(23);
         });
        test("Get Total Yield With environment factors", () => {
            expect(getTotalYield({ crops }, environmentFactors)).toBe(11.5);
        });
});

describe("getCostsForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3, //kg
        cost: 2,
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("Get Yield For Crop Without environment factors", () => {
        expect(getCostsForCrop(input)).toBe(20);
    });
});

// describe("getRevenueForCrop", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//         salePrice: 8,
//         factor: {
//             sun: {
//                 low: -50,
//                 medium: 0,
//                 high: 50,
//             },
//         }
//     }
//     const environmentFactors = {
//         sun: "high",
//     };
//     const input = {
//         crop: corn,
//         numCrops: 10,
//     };
//     test("Get Revenue For Crop Without environment factors", () => {
//          expect(getRevenueForCrop(input)).toBe(2400)
//      })
// })

describe("getRevenueForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        salePrice: 8,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    }
    const environmentFactors = {
        sun: "high",
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("Get Revenue For Crop Without environment factors", () => {
         expect(getRevenueForCrop(input)).toBe(2400)
     })
    test("Get Revenue For Crop With environment factors", () => {
        expect(getRevenueForCrop(input, environmentFactors)).toBe(3600)
    })
})

// describe("getProfitForCrop", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//         cost: 2,
//         salePrice: 5,
//         factor: {
//             sun: {
//                 low: -50,
//                 medium: 0,
//                 high: 50,
//             },
//         }
//     };
//     const environmentFactors = {
//         sun: "medium",
//     };
//     const input = {
//         crop: corn,
//         numCrops: 10,
//     };
//     test("Get Profit For Crop Without environment factors", () => {
//         expect(getProfitForCrop(input, environmentFactors)).toBe(1480);
//     });
// });

describe("getProfitForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 2,
        salePrice: 5,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    };
    const environmentFactors = {
        sun: "high",
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("Get Profit For Crop With environment factors", () => {
        expect(getProfitForCrop(input)).toBe(1480);
    });
    test("Get Profit For Crop With environment factors", () => {
        expect(getProfitForCrop(input, environmentFactors)).toBe(2230);
    });
});

// describe("getTotalProfit", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//         cost: 2,
//         salePrice: 5,
//         factor: {
//             sun: {
//                 low: -50,
//                 medium: 0,
//                 high: 50,
//             },
//         }
//     };
//     const pumpkin = {
//         name: "pumpkin",
//         yield: 4,
//         cost: 3,
//         salePrice: 6,
//         factor: {
//             sun: {
//                 low: -50,
//                 medium: 0,
//                 high: 50,
//             },
//         }
//     };
//     const environmentFactors = {
//         sun: "high",
//     };
//     const crops = [
//         { crop: corn, numCrops: 5 },
//         { crop: pumpkin, numCrops: 2 },
//     ];
//     test("Get Total without environment factors", () => {
//         expect(getTotalProfit({crops})).toBe(782);
//     });
//     test("Get Total With environment factors", () => {
//         expect(getTotalProfit({crops}, environmentFactors)).toBe(1181);
//     });
// });

describe("getTotalProfit", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 2,
        salePrice: 5,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    };
    const pumpkin = {
        name: "pumpkin",
        yield: 4,
        cost: 3,
        salePrice: 6,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    };
    const environmentFactors = {
        sun: "high",
    };
    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
    ];
    test("Get Total without environment factors", () => {
        expect(getTotalProfit({crops})).toBe(782);
    });
    test("Get Total With environment factors", () => {
        expect(getTotalProfit({crops}, environmentFactors)).toBe(1181);
    });
});