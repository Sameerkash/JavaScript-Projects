import { join } from "https://deno.land/std/path/mod.ts";
import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

interface Planet {
  [key: string]: string;
}

async function loadPlanetsData() {
  const path = join("..", "planets_2020.07.09_02.09.31.csv");

  const file = await Deno.open(path);
  const bufreader = new BufReader(file);
  const result = await parse(bufreader, { header: true, comment: "#" });
  console.log(result);
  Deno.close(file.rid);

  const planets = (result as Array<Planet>).filter((planet) => {
    return planet["pl_hostname"] === "CoRoTID 223977153";
  });

  return planets;
}

await loadPlanetsData();
