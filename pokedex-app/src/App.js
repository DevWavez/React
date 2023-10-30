import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// Funktion zur Übersetzung von deutschen Pokemon-Namen in Englisch
const translateGermanToEnglish = (germanName) => {
  // Hier können Sie eine Mapping-Tabelle für die Übersetzungen erstellen
  const translationTable = {
    Bisasam: "Bulbasaur",
    Bisaknosp: "Ivysaur",
    Bisaflor: "Venusaur",
    Glumanda: "Charmander",
    Glutexo: "Charmeleon",
    Glurak: "Charizard",
    Schiggy: "Squirtle",
    Schillok: "Wartortle",
    Turtok: "Blastoise",
    Raupy: "Caterpie",
    Safcon: "Metapod",
    Smettbo: "Butterfree",
    Hornliu: "Weedle",
    Kokuna: "Kakuna",
    Bibor: "Beedrill",
    Taubsi: "Pidgey",
    Tauboga: "Pidgeotto",
    Tauboss: "Pidgeot",
    Rattfratz: "Rattata",
    Rattikarl: "Raticate",
    Habitak: "Spearow",
    Ibitak: "Fearow",
    Rettan: "Ekans",
    Arbok: "Arbok",
    Pikachu: "Pikachu",
    Raichu: "Raichu",
    Sandan: "Sandshrew",
    Sandamer: "Sandslash",
    "Nidoran♀": "Nidoran♀",
    Nidorina: "Nidorina",
    Nidoqueen: "Nidoqueen",
    "Nidoran♂": "Nidoran♂",
    Nidorino: "Nidorino",
    Nidoking: "Nidoking",
    Piepi: "Clefairy",
    Pixi: "Clefable",
    Vulpix: "Vulpix",
    Vulnona: "Ninetales",
    Pummeluff: "Jigglypuff",
    Knuddeluff: "Wigglytuff",
    Zubat: "Zubat",
    Golbat: "Golbat",
    Myrapla: "Oddish",
    Duflor: "Gloom",
    Giflor: "Vileplume",
    Paras: "Paras",
    Parasek: "Parasect",
    Bluzuk: "Venonat",
    Omot: "Venomoth",
    Digda: "Dugtrio",
    Digdri: "Dugtrio",
    Mauzi: "Meowth",
    Snobilikat: "Persian",
    Enton: "Psyduck",
    Entoron: "Golduck",
    Menki: "Mankey",
    Rasaff: "Primeape",
    Fukano: "Growlithe",
    Arkani: "Arcanine",
    Quapsel: "Poliwag",
    Quaputzi: "Poliwhirl",
    Quappo: "Poliwrath",
    Abra: "Abra",
    Kadabra: "Kadabra",
    Simsala: "Alakazam",
    Machollo: "Machop",
    Maschock: "Machoke",
    Machomei: "Machamp",
    Knofensa: "Bellsprout",
    Ultrigaria: "Weepinbell",
    Sarzenia: "Victreebel",
    Tentacha: "Tentacool",
    Tentoxa: "Tentacruel",
    Kleinstein: "Geodude",
    Georok: "Graveler",
    Geowaz: "Golem",
    Ponita: "Ponyta",
    Gallopa: "Rapidash",
    Flegmon: "Slowpoke",
    Lahmus: "Slowbro",
    Magnetilo: "Magnemite",
    Magneton: "Magneton",
    Porenta: "Farfetch'd",
    Dodu: "Doduo",
    Dodri: "Dodrio",
    Jurob: "Seel",
    Jugong: "Dewgong",
    Sleima: "Grimer",
    Sleimok: "Muk",
    Muschas: "Shellder",
    Austos: "Cloyster",
    Nebulak: "Gastly",
    Alpollo: "Haunter",
    Gengar: "Gengar",
    Onix: "Onix",
    Traumato: "Drowzee",
    Hypno: "Hypno",
    Krabby: "Krabby",
    Kingler: "Kingler",
    Voltobal: "Voltorb",
    Lektrobal: "Electrode",
    Owei: "Exeggcute",
    Kokowei: "Exeggutor",
    Tragosso: "Cubone",
    Knogga: "Marowak",
    Kicklee: "Hitmonlee",
    Nockchan: "Hitmonchan",
    Schlurp: "Lickitung",
    Smogon: "Koffing",
    Smogmog: "Weezing",
    Rihorn: "Rhyhorn",
    Rizeros: "Rhydon",
    Chaneira: "Chansey",
    Tangela: "Tangela",
    Kangama: "Kangaskhan",
    Seeper: "Horsea",
    Seemon: "Seadra",
    Goldini: "Goldeen",
    Golking: "Seaking",
    Sterndu: "Staryu",
    Starmie: "Starmie",
    Pantimos: "Mr. Mime",
    Sichlor: "Scyther",
    Rossana: "Jynx",
    Elektek: "Electabuzz",
    Magmar: "Magmar",
    Pinsir: "Pinsir",
    Tauros: "Tauros",
    Karpador: "Magikarp",
    Garados: "Gyarados",
    Lapras: "Lapras",
    Ditto: "Ditto",
    Evoli: "Eevee",
    Aquana: "Vaporeon",
    Blitza: "Jolteon",
    Flamara: "Flareon",
    Porygon: "Porygon",
    Amonitas: "Omanyte",
    Amoroso: "Omastar",
    Kabuto: "Kabuto",
    Kabutops: "Kabutops",
    Aerodactyl: "Aerodactyl",
    Relaxo: "Snorlax",
    Arktos: "Articuno",
    Zapdos: "Zapdos",
    Lavados: "Moltres",
    Dratini: "Dratini",
    Dragonir: "Dragonair",
    Dragoran: "Dragonite",
    Mewtu: "Mewtwo",
    Mew: "Mew",
    // Fügen Sie hier weitere Übersetzungen hinzu
  };

  // Wenn die deutsche Übersetzung in der Tabelle vorhanden ist, geben Sie die englische Übersetzung zurück
  if (germanName in translationTable) {
    return translationTable[germanName];
  }
  // Andernfalls geben Sie den deutschen Namen selbst zurück (falls keine Übersetzung gefunden wurde)
  return germanName;
};

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  };

  const searchPokemon = async () => {
    const englishName = translateGermanToEnglish(pokemonName);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${englishName.toLowerCase()}`
      );

      const data = {
        name: response.data.name,
        stats: response.data.stats,
        types: response.data.types.map((type) => type.type.name),
      };

      setPokemonData(data);
    } catch (error) {
      console.error("Pokemon not found.", error);
      setPokemonData(null);
    }
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Enter Pokemon Name"
        value={pokemonName}
        onChange={handleInputChange}
      />
      <button onClick={searchPokemon}>Search</button>
      {pokemonData && (
        <div className="pokemon-card">
          <h2>Name: {pokemonData.name}</h2>
          <h3>Types: {pokemonData.types.join(", ")}</h3>
          <h3>Stats:</h3>
          <ul>
            {pokemonData.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
