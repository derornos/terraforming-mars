let NAMES = ["TERRAFORMER", "MAYOR", "GARDENER", "BUILDER", "PLANNER",
"GENERALIST", "SPECIALIST", "ECOLOGIST", "TYCOON", "LEGEND",
"DIVERSIFIER", "TACTICIAN", "POLAR EXPLORER", "ENERGIZER", "RIM SETTLER",
"HOVERLORD",
"LANDLORD", "SCIENTIST", "BANKER", "THERMALIST", "MINER",
"CELEBRITY", "INDUSTRIALIST", "DESERT SETTLER", "ESTATE DEALER", "BENEFACTOR",
"CULTIVATOR", "MAGNATE", "SPACE BARON", "EXCENTRIC", "CONTRACTOR",
"VENUPHILE"];

let SYNERGIES = [
    [1000,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,  1,0,0,1,0,0,0,1,1,9,2,0,0,0,0,0],
    [0,1000,3,0,0,0,0,0,0,0,0,0,4,0,0,0,  6,0,0,0,0,0,0,4,4,0,6,0,0,0,0,0],
    [0,0,1000,0,0,0,0,1,0,0,0,0,4,0,0,0,  6,0,0,0,0,0,0,4,5,2,9,0,0,0,0,0],
    [0,0,0,1000,0,0,0,0,4,0,0,0,0,0,0,0,  0,0,0,0,1,0,1,0,0,0,0,5,0,0,9,0],
    [0,0,0,0,1000,0,0,0,0,0,0,0,0,0,0,0,  0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1000,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1000,0,0,0,0,0,0,4,0,0,  0,0,2,1,1,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1000,2,0,2,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,1,1,0,4,0,0],
    [0,0,0,0,0,0,0,0,1000,0,1,1,0,0,1,0,  0,2,0,0,0,0,0,0,0,0,0,5,1,3,2,2],
    [0,0,0,0,0,0,0,0,0,1000,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1000,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1000,0,0,0,0,  0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1000,0,0,0,  4,0,0,0,0,0,0,5,2,0,3,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1000,0,0,  0,0,0,3,0,0,6,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1000,0,  0,0,0,0,0,2,0,0,0,0,0,1,3,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1000,  0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5],

    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  1000,0,0,0,0,0,0,7,7,0,8,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,1000,0,0,0,0,0,0,0,0,0,2,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,1000,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,1000,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,1000,0,7,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,1000,0,0,0,0,0,1,3,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,1000,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,1000,5,1,7,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,1000,1,8,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,1000,3,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,1000,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,0,1000,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,0,0,1000,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,0,0,0,1000,0,2],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,1000,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1000]
];

function shuffleArray(arr: Array<number>) {
    arr = arr.slice()
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}

function getNumbersRange(start: number, end: number): Array<number> {
    return Array.from(Array(end + 1 - start).keys()).map(n => n + start)
}

export function getRandomMilestonesAndAwards(withVenusian: boolean = true, requiredQty: number = 5) {
    var synergy = 0;
    var limit = 30;
    let output: Array<number> = [];
    while(synergy == 0 || synergy > limit) {
        synergy = 0;
        let rows = shuffleArray(getNumbersRange(0, withVenusian ? 14: 15));
        let cols = shuffleArray(getNumbersRange(16, withVenusian ? 30: 31));

        output = [...rows.slice(0, requiredQty), ...cols.slice(0, requiredQty)].sort((a, b) => a - b);
        let bound = requiredQty * 2;
        for (let i=0; i<bound - 1; i++) {
            for (let j=i+1; j<bound; j++) {
                synergy += SYNERGIES[output[i]][output[j]];
            }
        }
    }
    let finalNames = output.map(n => NAMES[n]);
    return {
        "milestones": finalNames.slice(0, requiredQty),
        "awards": finalNames.slice(requiredQty),
    }
}
