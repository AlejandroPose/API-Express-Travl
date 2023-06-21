import { appendFileSync } from "fs";

const fs = require('fs');
const readline = require('readline');

interface Country {
    country: string
    population: number
    area: number
    density: number
  }

const getIndex = (line: string) => {
    for (let i = 0; i < line.length; i++) {
        if (!Number.isNaN(parseInt(line[i]))) {
            return i;
        }
    }
};

const sortByDensity = (array: Country[]) => {
    return array.sort(function(a,b) {
        if (a.density < b.density) {
          return 1;
        }
        if (a.density > b.density) {
          return -1;
        }
        return 0;
      });
};

const getCSVRows = (array: Country[]) => {
    return array.map( ({ country, population, area, density }) => `${country},${population},${area},${density}\n` );
};

const createCSVFile = (array: string[]) => {
  appendFileSync("./paises.csv", "Country,Population,Area,density\n");
    array.forEach(element => {
        appendFileSync("./paises.csv", element); 
    });
};

async function processLineByLine() {
  const fileStream = fs.createReadStream('./countries.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const countries: Country[] = [];

  let counter = 0;

  for await (const line of rl) {
    if (counter === 0) {
        counter++;
    } else {
        let index = getIndex(line);
        const country = line.substring(0, index).trim();
        const numbers = line.substring(index).trim().split(" ");
        if (numbers.length === 2) {
            let population = numbers[0].replace(/,/g, "");
            population = parseInt(population);
            let area = numbers[1].replace(/,/g, "");
            area = parseInt(area);
            const density = population / area;
            const newCountry = {
                country,
                population,
                area,
                density,
            }
            countries.push(newCountry);
        }

    }
  }
  const sortedByDensity = sortByDensity(countries);
  //console.log(sortedByDensity);

  const csvRows = getCSVRows(sortedByDensity);
  createCSVFile(csvRows);

}

processLineByLine();