class Element {
    constructor(name, yearBuild) {
        this.name = name;
        this.yearBuild = yearBuild;
    }
};

class Park extends Element {

    constructor(name, yearBuild, area, numOfTrees) {
        super(name, yearBuild);
        this.numOfTrees = numOfTrees;
        this.area = area;
    }

    calcTreeDensity() {

        const density = this.numOfTrees / this.area;
        console.log(`${name} Park has a tree density of ${density} trees per square km.`)
        return density;

    }


};

class Street extends Element {

    constructor(name, yearBuild, streetLength, size =3) {
        super(name, yearBuild);
        this.streetLength = streetLength;
        this.size=size;
    };

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, built in ${this.yearBuild} is a ${classification.get(this.size)} street.`)
    };

}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
  const sum = arr.reduce((prev,cur,index) => prev + cur, 0)
    return [sum, sum/arr.length];
};

function reportParks(p) {
    console.log('------------------PARKS REPORT--------------------');
    //Density
    p.forEach(el => el.calcTreeDensity());

    //Average Age
    const ages = p.map(el => new Date().getFullYear() - el.yearBuild);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);


    //Which park has more than 1000 trees
    const i= p.map(el=>el.numOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreests(s){
    console.log('-----STREETS REPORT-----');
    const [totalLength ,avgLength] = calc(s.map(el =>el.streetLength))
    console.log(`our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km`)

    s.forEach(el => el.classifyStreet())

};

reportParks(allParks);
reportStreests(allStreets);
