interface Region {
    label: string;
    bounds: number[];
    colour: string;
}

interface World {
    regionKeys: string[],
    regions: Record<string, Region>
}

export const world: World = {
    regionKeys: [
        'africa', 'south_america'
    ],
    regions: {
        africa: {
            label: 'Africa',
            bounds: [469, 291, 725, 577],
            colour: 'rgba(158,4,4,1)'
        },
        south_america :{
            label: 'South America',
            bounds: [247, 388, 467, 676],
            colour: 'rgba(48,204,16,1)'
        },
    }
}