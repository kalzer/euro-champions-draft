import { WORLD_CUP_NATIONS } from './worldCup';

// Expanded World Cup fantasy pool separated from the UCL club-season dataset.
// This is a fan-made gameplay dataset, not an official FIFA final roster.
// World Cup Mode supports era filtering by tournament year: 2002, 2006, 2010, 2014, 2018, 2022, 2026, plus a few adjacent fantasy years for non-WC qualifier teams.
const META_BY_COUNTRY = Object.fromEntries(WORLD_CUP_NATIONS.map((nation) => [nation.country, nation]));
const REST_META = META_BY_COUNTRY['Rest of World'];

const RAW_WORLD_CUP_PLAYERS = [
  {
    "id": "wc_argentina_2026_emiliano_martinez",
    "name": "Emiliano Martínez",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 90,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_franco_armani",
    "name": "Franco Armani",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 78,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_argentina_2026_nahuel_molina",
    "name": "Nahuel Molina",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 84,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_cristian_romero",
    "name": "Cristian Romero",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Aggressive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_lisandro_martinez",
    "name": "Lisandro Martínez",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 86,
    "traits": [
      "Warrior"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_nicolas_otamendi",
    "name": "Nicolás Otamendi",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_argentina_2026_nicolas_tagliafico",
    "name": "Nicolás Tagliafico",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 82,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_argentina_2026_marcos_acuna",
    "name": "Marcos Acuña",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB",
      "LM"
    ],
    "rating": 81,
    "traits": [
      "Intensity"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_argentina_2026_enzo_fernandez",
    "name": "Enzo Fernández",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 88,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_rodrigo_de_paul",
    "name": "Rodrigo De Paul",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CM",
      "RM"
    ],
    "rating": 86,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_alexis_mac_allister",
    "name": "Alexis Mac Allister",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "rating": 87,
    "traits": [
      "Press Resistant"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_leandro_paredes",
    "name": "Leandro Paredes",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_argentina_2026_giovani_lo_celso",
    "name": "Giovani Lo Celso",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 83,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_argentina_2026_lionel_messi",
    "name": "Lionel Messi",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM",
      "ST"
    ],
    "rating": 95,
    "traits": [
      "GOAT",
      "Creator"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_argentina_2026_angel_di_maria",
    "name": "Ángel Di María",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 85,
    "traits": [
      "Clutch"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_argentina_2026_lautaro_martinez",
    "name": "Lautaro Martínez",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_julian_alvarez",
    "name": "Julián Álvarez",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "ST",
      "RW",
      "LW"
    ],
    "rating": 88,
    "traits": [
      "Pressing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2026_paulo_dybala",
    "name": "Paulo Dybala",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW",
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Flair"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_argentina_2026_alejandro_garnacho",
    "name": "Alejandro Garnacho",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 83,
    "traits": [
      "Explosive"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_argentina_2026_nicolas_gonzalez",
    "name": "Nicolás González",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "LW",
      "LM"
    ],
    "rating": 81,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_argentina_2026_gonzalo_montiel",
    "name": "Gonzalo Montiel",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 79,
    "traits": [
      "Penalty Aura"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_argentina_2026_german_pezzella",
    "name": "Germán Pezzella",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2026 National Team",
    "seasonId": "wc_argentina_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 79,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_brazil_2026_alisson_becker",
    "name": "Alisson Becker",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 91,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_ederson",
    "name": "Ederson",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 90,
    "traits": [
      "Sweeper Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_bento",
    "name": "Bento",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_brazil_2026_danilo",
    "name": "Danilo",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CB",
      "LB"
    ],
    "rating": 83,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_vanderson",
    "name": "Vanderson",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 81,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_brazil_2026_eder_militao",
    "name": "Éder Militão",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CB",
      "RB"
    ],
    "rating": 88,
    "traits": [
      "Recovery Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_marquinhos",
    "name": "Marquinhos",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 87,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_gabriel_magalhaes",
    "name": "Gabriel Magalhães",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 87,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_bremer",
    "name": "Bremer",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_brazil_2026_guilherme_arana",
    "name": "Guilherme Arana",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 80,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_brazil_2026_bruno_guimaraes",
    "name": "Bruno Guimarães",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 87,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_casemiro",
    "name": "Casemiro",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 85,
    "traits": [
      "Ball Winner"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_brazil_2026_joao_gomes",
    "name": "João Gomes",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_brazil_2026_lucas_paqueta",
    "name": "Lucas Paquetá",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 85,
    "traits": [
      "Flair"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_rodrygo",
    "name": "Rodrygo",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW",
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Big Game"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_vinicius_junior",
    "name": "Vinícius Júnior",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 92,
    "traits": [
      "Explosive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_raphinha",
    "name": "Raphinha",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 87,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2026_neymar",
    "name": "Neymar",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 89,
    "traits": [
      "Creator"
    ],
    "role": "Star"
  },
  {
    "id": "wc_brazil_2026_endrick",
    "name": "Endrick",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Wonderkid"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_brazil_2026_gabriel_martinelli",
    "name": "Gabriel Martinelli",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Direct"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_brazil_2026_gabriel_jesus",
    "name": "Gabriel Jesus",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Pressing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_brazil_2026_savinho",
    "name": "Savinho",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 83,
    "traits": [
      "Dribbler"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_brazil_2026_andreas_pereira",
    "name": "Andreas Pereira",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2026 National Team",
    "seasonId": "wc_brazil_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 81,
    "traits": [
      "Set Pieces"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_france_2026_mike_maignan",
    "name": "Mike Maignan",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 90,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_brice_samba",
    "name": "Brice Samba",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_france_2026_jules_kounde",
    "name": "Jules Koundé",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CB"
    ],
    "rating": 87,
    "traits": [
      "Lockdown"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_william_saliba",
    "name": "William Saliba",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 90,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_dayot_upamecano",
    "name": "Dayot Upamecano",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_ibrahima_konate",
    "name": "Ibrahima Konaté",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_france_2026_lucas_hernandez",
    "name": "Lucas Hernández",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 85,
    "traits": [
      "Warrior"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_france_2026_theo_hernandez",
    "name": "Theo Hernández",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 89,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_eduardo_camavinga",
    "name": "Eduardo Camavinga",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM",
      "LB"
    ],
    "rating": 88,
    "traits": [
      "Press Resistant"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_aurelien_tchouameni",
    "name": "Aurélien Tchouaméni",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 88,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_adrien_rabiot",
    "name": "Adrien Rabiot",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CM",
      "LM"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_france_2026_ngolo_kante",
    "name": "N’Golo Kanté",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 85,
    "traits": [
      "Interceptor"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_france_2026_warren_zaire_emery",
    "name": "Warren Zaïre-Emery",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Wonderkid"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_france_2026_antoine_griezmann",
    "name": "Antoine Griezmann",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "ST",
      "RW"
    ],
    "rating": 89,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_kylian_mbappe",
    "name": "Kylian Mbappé",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 94,
    "traits": [
      "Explosive",
      "Big Game"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_france_2026_ousmane_dembele",
    "name": "Ousmane Dembélé",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 88,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_marcus_thuram",
    "name": "Marcus Thuram",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 84,
    "traits": [
      "Power"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_france_2026_randal_kolo_muani",
    "name": "Randal Kolo Muani",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 83,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_france_2026_bradley_barcola",
    "name": "Bradley Barcola",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Explosive"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_france_2026_michael_olise",
    "name": "Michael Olise",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 86,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2026_christopher_nkunku",
    "name": "Christopher Nkunku",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_france_2026_kingsley_coman",
    "name": "Kingsley Coman",
    "nation": "France",
    "club": "France",
    "season": "2026 National Team",
    "seasonId": "wc_france_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_spain_2026_unai_simon",
    "name": "Unai Simón",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_david_raya",
    "name": "David Raya",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Distribution"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_pedro_porro",
    "name": "Pedro Porro",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 84,
    "traits": [
      "Crossing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_spain_2026_dani_carvajal",
    "name": "Dani Carvajal",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 87,
    "traits": [
      "Big Game"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_spain_2026_robin_le_normand",
    "name": "Robin Le Normand",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_pau_cubarsi",
    "name": "Pau Cubarsí",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Wonderkid"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_spain_2026_aymeric_laporte",
    "name": "Aymeric Laporte",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_spain_2026_alejandro_grimaldo",
    "name": "Alejandro Grimaldo",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 86,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_marc_cucurella",
    "name": "Marc Cucurella",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_spain_2026_rodri",
    "name": "Rodri",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 94,
    "traits": [
      "Ballon d’Or",
      "Control"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_spain_2026_martin_zubimendi",
    "name": "Martín Zubimendi",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 85,
    "traits": [
      "Tempo"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_spain_2026_pedri",
    "name": "Pedri",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 89,
    "traits": [
      "Press Resistant"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_fabian_ruiz",
    "name": "Fabián Ruiz",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 86,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_dani_olmo",
    "name": "Dani Olmo",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 86,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_gavi",
    "name": "Gavi",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CM",
      "LM"
    ],
    "rating": 86,
    "traits": [
      "Intensity"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_mikel_merino",
    "name": "Mikel Merino",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_spain_2026_lamine_yamal",
    "name": "Lamine Yamal",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 89,
    "traits": [
      "Wonderkid",
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_nico_williams",
    "name": "Nico Williams",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Explosive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_alvaro_morata",
    "name": "Álvaro Morata",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2026_ferran_torres",
    "name": "Ferran Torres",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW",
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_spain_2026_mikel_oyarzabal",
    "name": "Mikel Oyarzabal",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Clutch"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_spain_2026_joselu",
    "name": "Joselu",
    "nation": "Spain",
    "club": "Spain",
    "season": "2026 National Team",
    "seasonId": "wc_spain_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Target Man"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_marc_andre_ter_stegen",
    "name": "Marc-André ter Stegen",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 89,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2026_oliver_baumann",
    "name": "Oliver Baumann",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_joshua_kimmich",
    "name": "Joshua Kimmich",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CDM",
      "CM"
    ],
    "rating": 88,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2026_antonio_rudiger",
    "name": "Antonio Rüdiger",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Aggressive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2026_jonathan_tah",
    "name": "Jonathan Tah",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2026_nico_schlotterbeck",
    "name": "Nico Schlotterbeck",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_david_raum",
    "name": "David Raum",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 83,
    "traits": [
      "Crossing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_maximilian_mittelstadt",
    "name": "Maximilian Mittelstädt",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_robert_andrich",
    "name": "Robert Andrich",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Ball Winner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_leon_goretzka",
    "name": "Leon Goretzka",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Power"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_aleksandar_pavlovic",
    "name": "Aleksandar Pavlović",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 82,
    "traits": [
      "Composed"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_germany_2026_florian_wirtz",
    "name": "Florian Wirtz",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 90,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2026_jamal_musiala",
    "name": "Jamal Musiala",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 90,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2026_leroy_sane",
    "name": "Leroy Sané",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 86,
    "traits": [
      "Explosive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2026_kai_havertz",
    "name": "Kai Havertz",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 85,
    "traits": [
      "Movement"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2026_serge_gnabry",
    "name": "Serge Gnabry",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW",
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_niclas_fullkrug",
    "name": "Niclas Füllkrug",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Target Man"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_maximilian_beier",
    "name": "Maximilian Beier",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Runner"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_germany_2026_karim_adeyemi",
    "name": "Karim Adeyemi",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW",
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_germany_2026_pascal_gro",
    "name": "Pascal Groß",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CM",
      "RB"
    ],
    "rating": 83,
    "traits": [
      "Set Pieces"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_emre_can",
    "name": "Emre Can",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Physical"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_germany_2026_benjamin_henrichs",
    "name": "Benjamin Henrichs",
    "nation": "Germany",
    "club": "Germany",
    "season": "2026 National Team",
    "seasonId": "wc_germany_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 81,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_gianluigi_donnarumma",
    "name": "Gianluigi Donnarumma",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 89,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_italy_2026_guglielmo_vicario",
    "name": "Guglielmo Vicario",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_alex_meret",
    "name": "Alex Meret",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Composed"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_giovanni_di_lorenzo",
    "name": "Giovanni Di Lorenzo",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_alessandro_bastoni",
    "name": "Alessandro Bastoni",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Passing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_riccardo_calafiori",
    "name": "Riccardo Calafiori",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 86,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_federico_dimarco",
    "name": "Federico Dimarco",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB",
      "LM"
    ],
    "rating": 87,
    "traits": [
      "Crossing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_andrea_cambiaso",
    "name": "Andrea Cambiaso",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "LB",
      "RB",
      "LWB"
    ],
    "rating": 82,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_giorgio_scalvini",
    "name": "Giorgio Scalvini",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "CB",
      "CDM"
    ],
    "rating": 83,
    "traits": [
      "Wonderkid"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_italy_2026_davide_frattesi",
    "name": "Davide Frattesi",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Box Crasher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_nicolo_barella",
    "name": "Nicolò Barella",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 88,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_sandro_tonali",
    "name": "Sandro Tonali",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 86,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_manuel_locatelli",
    "name": "Manuel Locatelli",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_lorenzo_pellegrini",
    "name": "Lorenzo Pellegrini",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_federico_chiesa",
    "name": "Federico Chiesa",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 85,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_giacomo_raspadori",
    "name": "Giacomo Raspadori",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_mateo_retegui",
    "name": "Mateo Retegui",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2026_moise_kean",
    "name": "Moise Kean",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Power"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_mattia_zaccagni",
    "name": "Mattia Zaccagni",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Dribbler"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_italy_2026_riccardo_orsolini",
    "name": "Riccardo Orsolini",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Set Pieces"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_italy_2026_wilfried_gnonto",
    "name": "Wilfried Gnonto",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Explosive"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_italy_2026_raoul_bellanova",
    "name": "Raoul Bellanova",
    "nation": "Italy",
    "club": "Italy",
    "season": "2026 National Team",
    "seasonId": "wc_italy_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 81,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_jordan_pickford",
    "name": "Jordan Pickford",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 85,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_aaron_ramsdale",
    "name": "Aaron Ramsdale",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Distribution"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_kyle_walker",
    "name": "Kyle Walker",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Recovery Pace"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_england_2026_trent_alexander_arnold",
    "name": "Trent Alexander-Arnold",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CM"
    ],
    "rating": 87,
    "traits": [
      "Passing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_john_stones",
    "name": "John Stones",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CB",
      "CDM"
    ],
    "rating": 87,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_marc_guehi",
    "name": "Marc Guéhi",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_levi_colwill",
    "name": "Levi Colwill",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Composed"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_ezri_konsa",
    "name": "Ezri Konsa",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CB",
      "RB"
    ],
    "rating": 83,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_luke_shaw",
    "name": "Luke Shaw",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 84,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_declan_rice",
    "name": "Declan Rice",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 89,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_jude_bellingham",
    "name": "Jude Bellingham",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 92,
    "traits": [
      "Big Game"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_phil_foden",
    "name": "Phil Foden",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "rating": 89,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_cole_palmer",
    "name": "Cole Palmer",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 88,
    "traits": [
      "Clutch"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_bukayo_saka",
    "name": "Bukayo Saka",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 89,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_harry_kane",
    "name": "Harry Kane",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 91,
    "traits": [
      "Finisher",
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2026_ollie_watkins",
    "name": "Ollie Watkins",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_anthony_gordon",
    "name": "Anthony Gordon",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_marcus_rashford",
    "name": "Marcus Rashford",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Direct"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_eberechi_eze",
    "name": "Eberechi Eze",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 84,
    "traits": [
      "Dribbler"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_england_2026_kobbie_mainoo",
    "name": "Kobbie Mainoo",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 83,
    "traits": [
      "Composed"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_england_2026_conor_gallagher",
    "name": "Conor Gallagher",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_england_2026_jarrod_bowen",
    "name": "Jarrod Bowen",
    "nation": "England",
    "club": "England",
    "season": "2026 National Team",
    "seasonId": "wc_england_2026",
    "year": 2026,
    "positions": [
      "RW",
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_diogo_costa",
    "name": "Diogo Costa",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 87,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_jose_sa",
    "name": "José Sá",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 81,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_joao_cancelo",
    "name": "João Cancelo",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 87,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_nuno_mendes",
    "name": "Nuno Mendes",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 88,
    "traits": [
      "Explosive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_ruben_dias",
    "name": "Rúben Dias",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 90,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_goncalo_inacio",
    "name": "Gonçalo Inácio",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Passing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_antonio_silva",
    "name": "António Silva",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Composed"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_diogo_dalot",
    "name": "Diogo Dalot",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 84,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_joao_palhinha",
    "name": "João Palhinha",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 86,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_vitinha",
    "name": "Vitinha",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 88,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_bruno_fernandes",
    "name": "Bruno Fernandes",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 89,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_bernardo_silva",
    "name": "Bernardo Silva",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM",
      "CM"
    ],
    "rating": 89,
    "traits": [
      "Control"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_ruben_neves",
    "name": "Rúben Neves",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_matheus_nunes",
    "name": "Matheus Nunes",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Carrier"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_rafael_leao",
    "name": "Rafael Leão",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 87,
    "traits": [
      "Explosive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2026_cristiano_ronaldo",
    "name": "Cristiano Ronaldo",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Finisher",
      "Big Game"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_portugal_2026_diogo_jota",
    "name": "Diogo Jota",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 85,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_goncalo_ramos",
    "name": "Gonçalo Ramos",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_pedro_neto",
    "name": "Pedro Neto",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 84,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_portugal_2026_francisco_conceicao",
    "name": "Francisco Conceição",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Dribbler"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_portugal_2026_joao_felix",
    "name": "João Félix",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW",
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Flair"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_portugal_2026_trincao",
    "name": "Trincão",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2026 National Team",
    "seasonId": "wc_portugal_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_bart_verbruggen",
    "name": "Bart Verbruggen",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Reflexes"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_mark_flekken",
    "name": "Mark Flekken",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Distribution"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_denzel_dumfries",
    "name": "Denzel Dumfries",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 85,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_jeremie_frimpong",
    "name": "Jeremie Frimpong",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "RWB",
      "RW",
      "RB"
    ],
    "rating": 86,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_virgil_van_dijk",
    "name": "Virgil van Dijk",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 90,
    "traits": [
      "Leader"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_netherlands_2026_matthijs_de_ligt",
    "name": "Matthijs de Ligt",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_micky_van_de_ven",
    "name": "Micky van de Ven",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 85,
    "traits": [
      "Recovery Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_nathan_ake",
    "name": "Nathan Aké",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 85,
    "traits": [
      "Composed"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_jurrien_timber",
    "name": "Jurrien Timber",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CB",
      "RB",
      "LB"
    ],
    "rating": 84,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_frenkie_de_jong",
    "name": "Frenkie de Jong",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 89,
    "traits": [
      "Press Resistant"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_tijjani_reijnders",
    "name": "Tijjani Reijnders",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 86,
    "traits": [
      "Carrier"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_ryan_gravenberch",
    "name": "Ryan Gravenberch",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 85,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_xavi_simons",
    "name": "Xavi Simons",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_teun_koopmeiners",
    "name": "Teun Koopmeiners",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Set Pieces"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_cody_gakpo",
    "name": "Cody Gakpo",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2026_memphis_depay",
    "name": "Memphis Depay",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 84,
    "traits": [
      "Flair"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_donyell_malen",
    "name": "Donyell Malen",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "RW",
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_noa_lang",
    "name": "Noa Lang",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Dribbler"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_netherlands_2026_brian_brobbey",
    "name": "Brian Brobbey",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Power"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_netherlands_2026_wout_weghorst",
    "name": "Wout Weghorst",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Chaos Header"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_joey_veerman",
    "name": "Joey Veerman",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_netherlands_2026_quinten_timber",
    "name": "Quinten Timber",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2026 National Team",
    "seasonId": "wc_netherlands_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 81,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_belgium_2026_thibaut_courtois",
    "name": "Thibaut Courtois",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 90,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_koen_casteels",
    "name": "Koen Casteels",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 83,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_belgium_2026_thomas_meunier",
    "name": "Thomas Meunier",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 79,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_belgium_2026_timothy_castagne",
    "name": "Timothy Castagne",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_wout_faes",
    "name": "Wout Faes",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_arthur_theate",
    "name": "Arthur Theate",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 83,
    "traits": [
      "Physical"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_zeno_debast",
    "name": "Zeno Debast",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 81,
    "traits": [
      "Composed"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_belgium_2026_jan_vertonghen",
    "name": "Jan Vertonghen",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_belgium_2026_amadou_onana",
    "name": "Amadou Onana",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 85,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_youri_tielemans",
    "name": "Youri Tielemans",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Passing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_kevin_de_bruyne",
    "name": "Kevin De Bruyne",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 91,
    "traits": [
      "Creator",
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_belgium_2026_charles_de_ketelaere",
    "name": "Charles De Ketelaere",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_belgium_2026_romeo_lavia",
    "name": "Roméo Lavia",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Ball Winner"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_belgium_2026_leandro_trossard",
    "name": "Leandro Trossard",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "LW",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_jeremy_doku",
    "name": "Jérémy Doku",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_romelu_lukaku",
    "name": "Romelu Lukaku",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2026_lois_openda",
    "name": "Loïs Openda",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_belgium_2026_dodi_lukebakio",
    "name": "Dodi Lukébakio",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Direct"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_belgium_2026_johan_bakayoko",
    "name": "Johan Bakayoko",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Explosive"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_belgium_2026_michy_batshuayi",
    "name": "Michy Batshuayi",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2026 National Team",
    "seasonId": "wc_belgium_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Poacher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_dominik_livakovic",
    "name": "Dominik Livaković",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2026_dominik_kotarski",
    "name": "Dominik Kotarski",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_josip_juranovic",
    "name": "Josip Juranović",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 81,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_josip_stanisic",
    "name": "Josip Stanišić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CB",
      "LB"
    ],
    "rating": 83,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2026_josko_gvardiol",
    "name": "Joško Gvardiol",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 88,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2026_marin_pongracic",
    "name": "Marin Pongračić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_duje_caleta_car",
    "name": "Duje Ćaleta-Car",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_borna_sosa",
    "name": "Borna Sosa",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 81,
    "traits": [
      "Crossing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_luka_modric",
    "name": "Luka Modrić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 86,
    "traits": [
      "Tempo",
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_croatia_2026_mateo_kovacic",
    "name": "Mateo Kovačić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 86,
    "traits": [
      "Press Resistant"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2026_marcelo_brozovic",
    "name": "Marcelo Brozović",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Control"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_croatia_2026_mario_pasalic",
    "name": "Mario Pašalić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Box Crasher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_lovro_majer",
    "name": "Lovro Majer",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_luka_sucic",
    "name": "Luka Sučić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_croatia_2026_martin_baturina",
    "name": "Martin Baturina",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "CAM"
    ],
    "rating": 81,
    "traits": [
      "Creator"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_croatia_2026_ivan_perisic",
    "name": "Ivan Perišić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "LW",
      "LWB"
    ],
    "rating": 82,
    "traits": [
      "Big Game"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_croatia_2026_andrej_kramaric",
    "name": "Andrej Kramarić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 83,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2026_ante_budimir",
    "name": "Ante Budimir",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Target Man"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_mislav_orsic",
    "name": "Mislav Oršić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Direct"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_croatia_2026_marco_pasalic",
    "name": "Marco Pašalić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2026 National Team",
    "seasonId": "wc_croatia_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 79,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_sergio_rochet",
    "name": "Sergio Rochet",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2026_franco_israel",
    "name": "Franco Israel",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 79,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_ronald_araujo",
    "name": "Ronald Araújo",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "CB",
      "RB"
    ],
    "rating": 89,
    "traits": [
      "Recovery Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2026_jose_maria_gimenez",
    "name": "José María Giménez",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Warrior"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2026_sebastian_caceres",
    "name": "Sebastián Cáceres",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 81,
    "traits": [
      "Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_mathias_olivera",
    "name": "Mathías Olivera",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "LB",
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Aggressive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2026_nahitan_nandez",
    "name": "Nahitan Nández",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CM"
    ],
    "rating": 81,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_guillermo_varela",
    "name": "Guillermo Varela",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 79,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_federico_valverde",
    "name": "Federico Valverde",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "CM",
      "RW"
    ],
    "rating": 91,
    "traits": [
      "Engine",
      "Big Game"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_uruguay_2026_manuel_ugarte",
    "name": "Manuel Ugarte",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 86,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2026_rodrigo_bentancur",
    "name": "Rodrigo Bentancur",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 85,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2026_giorgian_de_arrascaeta",
    "name": "Giorgian De Arrascaeta",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_nicolas_de_la_cruz",
    "name": "Nicolás De La Cruz",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_facundo_pellistri",
    "name": "Facundo Pellistri",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_uruguay_2026_darwin_nunez",
    "name": "Darwin Núñez",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 86,
    "traits": [
      "Chaos Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2026_luis_suarez",
    "name": "Luis Suárez",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Clutch"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_uruguay_2026_maximiliano_araujo",
    "name": "Maximiliano Araújo",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "LW",
      "LWB"
    ],
    "rating": 82,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2026_cristian_olivera",
    "name": "Cristian Olivera",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_brian_rodriguez",
    "name": "Brian Rodríguez",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 79,
    "traits": [
      "Dribbler"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_uruguay_2026_matias_vina",
    "name": "Matías Viña",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2026 National Team",
    "seasonId": "wc_uruguay_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 80,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_morocco_2026_yassine_bounou",
    "name": "Yassine Bounou",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2026_munir_mohamedi",
    "name": "Munir Mohamedi",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 78,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_morocco_2026_achraf_hakimi",
    "name": "Achraf Hakimi",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 89,
    "traits": [
      "Overlap"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_morocco_2026_noussair_mazraoui",
    "name": "Noussair Mazraoui",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "LB",
      "RB"
    ],
    "rating": 85,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2026_nayef_aguerd",
    "name": "Nayef Aguerd",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2026_romain_saiss",
    "name": "Romain Saïss",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_morocco_2026_chadi_riad",
    "name": "Chadi Riad",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Composed"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_morocco_2026_yahia_attiat_allah",
    "name": "Yahia Attiat-Allah",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 79,
    "traits": [
      "Crossing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_morocco_2026_sofyan_amrabat",
    "name": "Sofyan Amrabat",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2026_azzedine_ounahi",
    "name": "Azzedine Ounahi",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 83,
    "traits": [
      "Carrier"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2026_bilal_el_khannouss",
    "name": "Bilal El Khannouss",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_morocco_2026_amir_richardson",
    "name": "Amir Richardson",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 80,
    "traits": [
      "Power"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_morocco_2026_ismael_saibari",
    "name": "Ismael Saibari",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_morocco_2026_hakim_ziyech",
    "name": "Hakim Ziyech",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Set Pieces"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2026_brahim_diaz",
    "name": "Brahim Díaz",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Flair"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2026_sofiane_boufal",
    "name": "Sofiane Boufal",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 81,
    "traits": [
      "Dribbler"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_morocco_2026_youssef_en_nesyri",
    "name": "Youssef En-Nesyri",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2026_ayoub_el_kaabi",
    "name": "Ayoub El Kaabi",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_morocco_2026_abde_ezzalzouli",
    "name": "Abde Ezzalzouli",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Explosive"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_morocco_2026_ilias_akhomach",
    "name": "Ilias Akhomach",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2026 National Team",
    "seasonId": "wc_morocco_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 79,
    "traits": [
      "Dribbler"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_senegal_2026_edouard_mendy",
    "name": "Édouard Mendy",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2026_mory_diaw",
    "name": "Mory Diaw",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 78,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_senegal_2026_kalidou_koulibaly",
    "name": "Kalidou Koulibaly",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Leader"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_senegal_2026_moussa_niakhate",
    "name": "Moussa Niakhaté",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2026_abdou_diallo",
    "name": "Abdou Diallo",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 81,
    "traits": [
      "Composed"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_senegal_2026_ismail_jakobs",
    "name": "Ismail Jakobs",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 81,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2026_youssouf_sabaly",
    "name": "Youssouf Sabaly",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 80,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_senegal_2026_pape_matar_sarr",
    "name": "Pape Matar Sarr",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2026_idrissa_gueye",
    "name": "Idrissa Gueye",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 81,
    "traits": [
      "Ball Winner"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_senegal_2026_nampalys_mendy",
    "name": "Nampalys Mendy",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 79,
    "traits": [
      "Control"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_senegal_2026_lamine_camara",
    "name": "Lamine Camara",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 81,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_senegal_2026_pape_gueye",
    "name": "Pape Gueye",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 80,
    "traits": [
      "Physical"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_senegal_2026_sadio_mane",
    "name": "Sadio Mané",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Big Game"
    ],
    "role": "Star"
  },
  {
    "id": "wc_senegal_2026_ismaila_sarr",
    "name": "Ismaïla Sarr",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2026_nicolas_jackson",
    "name": "Nicolas Jackson",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 83,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2026_boulaye_dia",
    "name": "Boulaye Dia",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_senegal_2026_habib_diallo",
    "name": "Habib Diallo",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_senegal_2026_krepin_diatta",
    "name": "Krépin Diatta",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "RW",
      "RWB"
    ],
    "rating": 80,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_senegal_2026_iliman_ndiaye",
    "name": "Iliman Ndiaye",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Creator"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_senegal_2026_cheikhou_kouyate",
    "name": "Cheikhou Kouyaté",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2026 National Team",
    "seasonId": "wc_senegal_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_japan_2026_zion_suzuki",
    "name": "Zion Suzuki",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Reflexes"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_daiya_maekawa",
    "name": "Daiya Maekawa",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 76,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_japan_2026_takehiro_tomiyasu",
    "name": "Takehiro Tomiyasu",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CB",
      "RB",
      "LB"
    ],
    "rating": 86,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_ko_itakura",
    "name": "Ko Itakura",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CB",
      "CDM"
    ],
    "rating": 83,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_hiroki_ito",
    "name": "Hiroki Ito",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Passing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_yukinari_sugawara",
    "name": "Yukinari Sugawara",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 81,
    "traits": [
      "Crossing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_ritsu_doan",
    "name": "Ritsu Doan",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_wataru_endo",
    "name": "Wataru Endo",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Leader"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_japan_2026_hidemasa_morita",
    "name": "Hidemasa Morita",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 82,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_ao_tanaka",
    "name": "Ao Tanaka",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 80,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_japan_2026_daichi_kamada",
    "name": "Daichi Kamada",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_japan_2026_takefusa_kubo",
    "name": "Takefusa Kubo",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 85,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_kaoru_mitoma",
    "name": "Kaoru Mitoma",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 86,
    "traits": [
      "Explosive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_takumi_minamino",
    "name": "Takumi Minamino",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_japan_2026_daizen_maeda",
    "name": "Daizen Maeda",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Pressing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_japan_2026_ayase_ueda",
    "name": "Ayase Ueda",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2026_kyogo_furuhashi",
    "name": "Kyogo Furuhashi",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Poacher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_japan_2026_junya_ito",
    "name": "Junya Ito",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_japan_2026_keito_nakamura",
    "name": "Keito Nakamura",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 80,
    "traits": [
      "Direct"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_japan_2026_reo_hatate",
    "name": "Reo Hatate",
    "nation": "Japan",
    "club": "Japan",
    "season": "2026 National Team",
    "seasonId": "wc_japan_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 79,
    "traits": [
      "Carrier"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_kim_seung_gyu",
    "name": "Kim Seung-gyu",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2026_jo_hyeon_woo",
    "name": "Jo Hyeon-woo",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 79,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_kim_min_jae",
    "name": "Kim Min-jae",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Stopper"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_south_korea_2026_kim_young_gwon",
    "name": "Kim Young-gwon",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_seol_young_woo",
    "name": "Seol Young-woo",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 78,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_lee_ki_je",
    "name": "Lee Ki-je",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 77,
    "traits": [
      "Crossing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_hwang_in_beom",
    "name": "Hwang In-beom",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 82,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2026_lee_jae_sung",
    "name": "Lee Jae-sung",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 81,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2026_hong_hyun_seok",
    "name": "Hong Hyun-seok",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 79,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_paik_seung_ho",
    "name": "Paik Seung-ho",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 78,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_son_heung_min",
    "name": "Son Heung-min",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Finisher",
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_south_korea_2026_lee_kang_in",
    "name": "Lee Kang-in",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2026_hwang_hee_chan",
    "name": "Hwang Hee-chan",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2026_cho_gue_sung",
    "name": "Cho Gue-sung",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Target Man"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_oh_hyeon_gyu",
    "name": "Oh Hyeon-gyu",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 78,
    "traits": [
      "Power"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_jeong_woo_yeong",
    "name": "Jeong Woo-yeong",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 78,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_yang_hyun_jun",
    "name": "Yang Hyun-jun",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 77,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_south_korea_2026_bae_jun_ho",
    "name": "Bae Jun-ho",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_south_korea_2026_kwon_hyeok_kyu",
    "name": "Kwon Hyeok-kyu",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 76,
    "traits": [
      "Ball Winner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_south_korea_2026_lee_han_beom",
    "name": "Lee Han-beom",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2026 National Team",
    "seasonId": "wc_south_korea_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 76,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_kasper_schmeichel",
    "name": "Kasper Schmeichel",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_denmark_2026_mads_hermansen",
    "name": "Mads Hermansen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Distribution"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_joachim_andersen",
    "name": "Joachim Andersen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Passing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2026_andreas_christensen",
    "name": "Andreas Christensen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CB",
      "CDM"
    ],
    "rating": 85,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2026_jannik_vestergaard",
    "name": "Jannik Vestergaard",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_victor_nelsson",
    "name": "Victor Nelsson",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 79,
    "traits": [
      "Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_joakim_mhle",
    "name": "Joakim Mæhle",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "LB",
      "RB",
      "LWB"
    ],
    "rating": 82,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2026_rasmus_kristensen",
    "name": "Rasmus Kristensen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 80,
    "traits": [
      "Physical"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_pierre_emile_hjbjerg",
    "name": "Pierre-Emile Højbjerg",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 83,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2026_christian_eriksen",
    "name": "Christian Eriksen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 83,
    "traits": [
      "Creator"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_denmark_2026_morten_hjulmand",
    "name": "Morten Hjulmand",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2026_thomas_delaney",
    "name": "Thomas Delaney",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 79,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_mathias_jensen",
    "name": "Mathias Jensen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 80,
    "traits": [
      "Set Pieces"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_andreas_skov_olsen",
    "name": "Andreas Skov Olsen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 81,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2026_mikkel_damsgaard",
    "name": "Mikkel Damsgaard",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "LW",
      "CAM"
    ],
    "rating": 80,
    "traits": [
      "Dribbler"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_rasmus_hjlund",
    "name": "Rasmus Højlund",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2026_jonas_wind",
    "name": "Jonas Wind",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 81,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_kasper_dolberg",
    "name": "Kasper Dolberg",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_denmark_2026_jesper_lindstrm",
    "name": "Jesper Lindstrøm",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 79,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_denmark_2026_gustav_isaksen",
    "name": "Gustav Isaksen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2026 National Team",
    "seasonId": "wc_denmark_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 79,
    "traits": [
      "Runner"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_poland_2026_wojciech_szczesny",
    "name": "Wojciech Szczęsny",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 85,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_poland_2026_ukasz_skorupski",
    "name": "Łukasz Skorupski",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 81,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_poland_2026_jan_bednarek",
    "name": "Jan Bednarek",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2026_jakub_kiwior",
    "name": "Jakub Kiwior",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 81,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2026_pawe_dawidowicz",
    "name": "Paweł Dawidowicz",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_poland_2026_matty_cash",
    "name": "Matty Cash",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 80,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2026_nicola_zalewski",
    "name": "Nicola Zalewski",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "LWB",
      "LW",
      "LB"
    ],
    "rating": 81,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2026_piotr_zielinski",
    "name": "Piotr Zieliński",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Creator"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_poland_2026_jakub_moder",
    "name": "Jakub Moder",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 79,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_poland_2026_bartosz_slisz",
    "name": "Bartosz Slisz",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 78,
    "traits": [
      "Ball Winner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_poland_2026_sebastian_szymanski",
    "name": "Sebastian Szymański",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Set Pieces"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2026_przemysaw_frankowski",
    "name": "Przemysław Frankowski",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "RM",
      "RWB"
    ],
    "rating": 80,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2026_kamil_grosicki",
    "name": "Kamil Grosicki",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 78,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_poland_2026_robert_lewandowski",
    "name": "Robert Lewandowski",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 88,
    "traits": [
      "Finisher",
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_poland_2026_arkadiusz_milik",
    "name": "Arkadiusz Milik",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Poacher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_poland_2026_karol_swiderski",
    "name": "Karol Świderski",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 79,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_poland_2026_adam_buksa",
    "name": "Adam Buksa",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 78,
    "traits": [
      "Target Man"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_poland_2026_jakub_kaminski",
    "name": "Jakub Kamiński",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 79,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_poland_2026_kacper_urbanski",
    "name": "Kacper Urbański",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 78,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_poland_2026_micha_skoras",
    "name": "Michał Skóraś",
    "nation": "Poland",
    "club": "Poland",
    "season": "2026 National Team",
    "seasonId": "wc_poland_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 77,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_rjan_nyland",
    "name": "Ørjan Nyland",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 78,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2026_egil_selvik",
    "name": "Egil Selvik",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 76,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_julian_ryerson",
    "name": "Julian Ryerson",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2026_leo_stigard",
    "name": "Leo Østigård",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2026_kristoffer_ajer",
    "name": "Kristoffer Ajer",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "CB",
      "RB"
    ],
    "rating": 80,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2026_david_mller_wolfe",
    "name": "David Møller Wolfe",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 78,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_fredrik_bjrkan",
    "name": "Fredrik Bjørkan",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 78,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_sander_berge",
    "name": "Sander Berge",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2026_martin_degaard",
    "name": "Martin Ødegaard",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 90,
    "traits": [
      "Creator",
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_norway_2026_patrick_berg",
    "name": "Patrick Berg",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 79,
    "traits": [
      "Tempo"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_morten_thorsby",
    "name": "Morten Thorsby",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 78,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_kristian_thorstvedt",
    "name": "Kristian Thorstvedt",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 78,
    "traits": [
      "Box Crasher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_oscar_bobb",
    "name": "Oscar Bobb",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 81,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_norway_2026_antonio_nusa",
    "name": "Antonio Nusa",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Dribbler"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_norway_2026_erling_haaland",
    "name": "Erling Haaland",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 93,
    "traits": [
      "Finisher",
      "Power"
    ],
    "role": "Star"
  },
  {
    "id": "wc_norway_2026_alexander_srloth",
    "name": "Alexander Sørloth",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Target Man"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2026_jrgen_strand_larsen",
    "name": "Jørgen Strand Larsen",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_aron_dnnum",
    "name": "Aron Dønnum",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 77,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_hugo_vetlesen",
    "name": "Hugo Vetlesen",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 77,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2026_ola_solbakken",
    "name": "Ola Solbakken",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 77,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_egypt_2026_mohamed_el_shenawy",
    "name": "Mohamed El Shenawy",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_mohamed_awad",
    "name": "Mohamed Awad",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 76,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_egypt_2026_omar_kamal",
    "name": "Omar Kamal",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RM"
    ],
    "rating": 78,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_mohamed_abdelmonem",
    "name": "Mohamed Abdelmonem",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 81,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_ahmed_hegazi",
    "name": "Ahmed Hegazi",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 79,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_egypt_2026_mahmoud_hamdy",
    "name": "Mahmoud Hamdy",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 77,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_egypt_2026_ahmed_fatouh",
    "name": "Ahmed Fatouh",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 78,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_hamdi_fathi",
    "name": "Hamdi Fathi",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 78,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_mohamed_elneny",
    "name": "Mohamed Elneny",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 79,
    "traits": [
      "Tempo"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_egypt_2026_emam_ashour",
    "name": "Emam Ashour",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 79,
    "traits": [
      "Carrier"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_trezeguet",
    "name": "Trezeguet",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_omar_marmoush",
    "name": "Omar Marmoush",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 85,
    "traits": [
      "Explosive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_mohamed_salah",
    "name": "Mohamed Salah",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "RW",
      "ST"
    ],
    "rating": 90,
    "traits": [
      "Finisher",
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_egypt_2026_mostafa_mohamed",
    "name": "Mostafa Mohamed",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Target Man"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2026_zizo",
    "name": "Zizo",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 79,
    "traits": [
      "Set Pieces"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_egypt_2026_ramadan_sobhi",
    "name": "Ramadan Sobhi",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 77,
    "traits": [
      "Dribbler"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_egypt_2026_ibrahim_adel",
    "name": "Ibrahim Adel",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 78,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_egypt_2026_marwan_attia",
    "name": "Marwan Attia",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 77,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_egypt_2026_nabil_emad_donga",
    "name": "Nabil Emad Donga",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 76,
    "traits": [
      "Ball Winner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_egypt_2026_akram_tawfik",
    "name": "Akram Tawfik",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2026 National Team",
    "seasonId": "wc_egypt_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CDM"
    ],
    "rating": 77,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_matt_turner",
    "name": "Matt Turner",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_ethan_horvath",
    "name": "Ethan Horvath",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 77,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_antonee_robinson",
    "name": "Antonee Robinson",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 84,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_sergino_dest",
    "name": "Sergiño Dest",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_chris_richards",
    "name": "Chris Richards",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 81,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_tim_ream",
    "name": "Tim Ream",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_united_states_2026_cameron_carter_vickers",
    "name": "Cameron Carter-Vickers",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 79,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_joe_scally",
    "name": "Joe Scally",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 79,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_tyler_adams",
    "name": "Tyler Adams",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 82,
    "traits": [
      "Ball Winner"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_united_states_2026_weston_mckennie",
    "name": "Weston McKennie",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_yunus_musah",
    "name": "Yunus Musah",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CM",
      "RM"
    ],
    "rating": 82,
    "traits": [
      "Carrier"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_gio_reyna",
    "name": "Gio Reyna",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_malik_tillman",
    "name": "Malik Tillman",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 81,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_united_states_2026_christian_pulisic",
    "name": "Christian Pulisic",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Direct"
    ],
    "role": "Star"
  },
  {
    "id": "wc_united_states_2026_timothy_weah",
    "name": "Timothy Weah",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "RW",
      "RWB"
    ],
    "rating": 81,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_folarin_balogun",
    "name": "Folarin Balogun",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_ricardo_pepi",
    "name": "Ricardo Pepi",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Poacher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_josh_sargent",
    "name": "Josh Sargent",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_brenden_aaronson",
    "name": "Brenden Aaronson",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 78,
    "traits": [
      "Pressing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_haji_wright",
    "name": "Haji Wright",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Power"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_united_states_2026_johnny_cardoso",
    "name": "Johnny Cardoso",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 80,
    "traits": [
      "Tempo"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_united_states_2026_luca_de_la_torre",
    "name": "Luca de la Torre",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 78,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_guillermo_ochoa",
    "name": "Guillermo Ochoa",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Big Game"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_mexico_2026_luis_malagon",
    "name": "Luis Malagón",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 78,
    "traits": [
      "Reflexes"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2026_jorge_sanchez",
    "name": "Jorge Sánchez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 78,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_kevin_alvarez",
    "name": "Kevin Álvarez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 77,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_cesar_montes",
    "name": "César Montes",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 81,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2026_johan_vasquez",
    "name": "Johan Vásquez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2026_jesus_gallardo",
    "name": "Jesús Gallardo",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 78,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_gerardo_arteaga",
    "name": "Gerardo Arteaga",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 78,
    "traits": [
      "Crossing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2026_edson_alvarez",
    "name": "Edson Álvarez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Ball Winner"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_mexico_2026_luis_chavez",
    "name": "Luis Chávez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 80,
    "traits": [
      "Set Pieces"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2026_erick_sanchez",
    "name": "Erick Sánchez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 79,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_orbelin_pineda",
    "name": "Orbelín Pineda",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 79,
    "traits": [
      "Creator"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_roberto_alvarado",
    "name": "Roberto Alvarado",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2026_hirving_lozano",
    "name": "Hirving Lozano",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2026_uriel_antuna",
    "name": "Uriel Antuna",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 78,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_santiago_gimenez",
    "name": "Santiago Giménez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2026_raul_jimenez",
    "name": "Raúl Jiménez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Target Man"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_mexico_2026_henry_martin",
    "name": "Henry Martín",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Poacher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_alexis_vega",
    "name": "Alexis Vega",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 78,
    "traits": [
      "Flair"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_mexico_2026_julian_quinones",
    "name": "Julián Quiñones",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2026 National Team",
    "seasonId": "wc_mexico_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Power"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_ghana_2026_lawrence_ati_zigi",
    "name": "Lawrence Ati-Zigi",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 78,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2026_joseph_wollacott",
    "name": "Joseph Wollacott",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 76,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_ghana_2026_alidu_seidu",
    "name": "Alidu Seidu",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "RB",
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Physical"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2026_alexander_djiku",
    "name": "Alexander Djiku",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2026_mohammed_salisu",
    "name": "Mohammed Salisu",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 81,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2026_gideon_mensah",
    "name": "Gideon Mensah",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 78,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2026_tariq_lamptey",
    "name": "Tariq Lamptey",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 79,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_ghana_2026_thomas_partey",
    "name": "Thomas Partey",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Ball Winner"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_ghana_2026_mohammed_kudus",
    "name": "Mohammed Kudus",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Dribbler"
    ],
    "role": "Star"
  },
  {
    "id": "wc_ghana_2026_salis_abdul_samed",
    "name": "Salis Abdul Samed",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 78,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_ghana_2026_majeed_ashimeru",
    "name": "Majeed Ashimeru",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 77,
    "traits": [
      "Carrier"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_ghana_2026_elisha_owusu",
    "name": "Elisha Owusu",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 77,
    "traits": [
      "Physical"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_ghana_2026_jordan_ayew",
    "name": "Jordan Ayew",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "RW",
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_ghana_2026_andre_ayew",
    "name": "André Ayew",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "ST"
    ],
    "rating": 77,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_ghana_2026_inaki_williams",
    "name": "Iñaki Williams",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2026_antoine_semenyo",
    "name": "Antoine Semenyo",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2026_ernest_nuamah",
    "name": "Ernest Nuamah",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 80,
    "traits": [
      "Explosive"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_ghana_2026_kamaldeen_sulemana",
    "name": "Kamaldeen Sulemana",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_ghana_2026_osman_bukari",
    "name": "Osman Bukari",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 78,
    "traits": [
      "Direct"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_ghana_2026_daniel_amartey",
    "name": "Daniel Amartey",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2026 National Team",
    "seasonId": "wc_ghana_2026",
    "year": 2026,
    "positions": [
      "CB",
      "CDM"
    ],
    "rating": 77,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_yann_sommer",
    "name": "Yann Sommer",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_switzerland_2026_gregor_kobel",
    "name": "Gregor Kobel",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 87,
    "traits": [
      "Reflexes"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2026_manuel_akanji",
    "name": "Manuel Akanji",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2026_nico_elvedi",
    "name": "Nico Elvedi",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_fabian_schar",
    "name": "Fabian Schär",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_ricardo_rodriguez",
    "name": "Ricardo Rodríguez",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "LB",
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_silvan_widmer",
    "name": "Silvan Widmer",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 79,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_dan_ndoye",
    "name": "Dan Ndoye",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "RW",
      "RWB"
    ],
    "rating": 81,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2026_granit_xhaka",
    "name": "Granit Xhaka",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 87,
    "traits": [
      "Leader"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_switzerland_2026_remo_freuler",
    "name": "Remo Freuler",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2026_denis_zakaria",
    "name": "Denis Zakaria",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 81,
    "traits": [
      "Power"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_michel_aebischer",
    "name": "Michel Aebischer",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CM",
      "LM"
    ],
    "rating": 80,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_djibril_sow",
    "name": "Djibril Sow",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 80,
    "traits": [
      "Carrier"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_xherdan_shaqiri",
    "name": "Xherdan Shaqiri",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Big Game"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_switzerland_2026_ruben_vargas",
    "name": "Ruben Vargas",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2026_breel_embolo",
    "name": "Breel Embolo",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2026_zeki_amdouni",
    "name": "Zeki Amdouni",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 80,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_noah_okafor",
    "name": "Noah Okafor",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_switzerland_2026_murat_yakin_jr",
    "name": "Murat Yakin Jr",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 74,
    "traits": [
      "Wildcard"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_switzerland_2026_kwadwo_duah",
    "name": "Kwadwo Duah",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2026 National Team",
    "seasonId": "wc_switzerland_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 78,
    "traits": [
      "Poacher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_ugurcan_cakr",
    "name": "Uğurcan Çakır",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_altay_bayndr",
    "name": "Altay Bayındır",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 79,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_mert_gunok",
    "name": "Mert Günok",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 78,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_zeki_celik",
    "name": "Zeki Çelik",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 80,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_ferdi_kadoglu",
    "name": "Ferdi Kadıoğlu",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "LB",
      "RB",
      "LM"
    ],
    "rating": 84,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_abdulkerim_bardakc",
    "name": "Abdülkerim Bardakcı",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_caglar_soyuncu",
    "name": "Çağlar Söyüncü",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Aggressive"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_samet_akaydin",
    "name": "Samet Akaydin",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_hakan_calhanoglu",
    "name": "Hakan Çalhanoğlu",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM",
      "CAM"
    ],
    "rating": 87,
    "traits": [
      "Set Pieces",
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_turkey_2026_ismail_yuksek",
    "name": "İsmail Yüksek",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 81,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_orkun_kokcu",
    "name": "Orkun Kökçü",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_salih_ozcan",
    "name": "Salih Özcan",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 79,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_arda_guler",
    "name": "Arda Güler",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Wonderkid",
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_kenan_yldz",
    "name": "Kenan Yıldız",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Talent"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_kerem_akturkoglu",
    "name": "Kerem Aktürkoğlu",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_bars_alper_ylmaz",
    "name": "Barış Alper Yılmaz",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "RW",
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2026_cengiz_under",
    "name": "Cengiz Ünder",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Set Pieces"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_yunus_akgun",
    "name": "Yunus Akgün",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Dribbler"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_turkey_2026_enes_unal",
    "name": "Enes Ünal",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_turkey_2026_semih_klcsoy",
    "name": "Semih Kılıçsoy",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2026 National Team",
    "seasonId": "wc_turkey_2026",
    "year": 2026,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 80,
    "traits": [
      "Wonderkid"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_serbia_2026_vanja_milinkovic_savic",
    "name": "Vanja Milinković-Savić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2026_predrag_rajkovic",
    "name": "Predrag Rajković",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_serbia_2026_nikola_milenkovic",
    "name": "Nikola Milenković",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Aerial"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2026_strahinja_pavlovic",
    "name": "Strahinja Pavlović",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Aggressive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2026_milos_veljkovic",
    "name": "Miloš Veljković",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 79,
    "traits": [
      "Composed"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_serbia_2026_sran_babic",
    "name": "Srđan Babić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Stopper"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_serbia_2026_filip_mladenovic",
    "name": "Filip Mladenović",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "LWB",
      "LB"
    ],
    "rating": 78,
    "traits": [
      "Crossing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_serbia_2026_andrija_zivkovic",
    "name": "Andrija Živković",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "RWB",
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2026_nemanja_gudelj",
    "name": "Nemanja Gudelj",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Versatile"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_serbia_2026_sasa_lukic",
    "name": "Saša Lukić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 80,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2026_sergej_milinkovic_savic",
    "name": "Sergej Milinković-Savić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 86,
    "traits": [
      "Power"
    ],
    "role": "Star"
  },
  {
    "id": "wc_serbia_2026_ivan_ilic",
    "name": "Ivan Ilić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 81,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_serbia_2026_dusan_tadic",
    "name": "Dušan Tadić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 83,
    "traits": [
      "Creator"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_serbia_2026_filip_kostic",
    "name": "Filip Kostić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "LM",
      "LWB",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Crossing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2026_lazar_samardzic",
    "name": "Lazar Samardžić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 81,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_serbia_2026_dusan_vlahovic",
    "name": "Dušan Vlahović",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2026_aleksandar_mitrovic",
    "name": "Aleksandar Mitrović",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Target Man"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_serbia_2026_luka_jovic",
    "name": "Luka Jović",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Poacher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_serbia_2026_veljko_birmancevic",
    "name": "Veljko Birmančević",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 79,
    "traits": [
      "Direct"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_serbia_2026_nemanja_radonjic",
    "name": "Nemanja Radonjić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2026 National Team",
    "seasonId": "wc_serbia_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 78,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2026_camilo_vargas",
    "name": "Camilo Vargas",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 81,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2026_david_ospina",
    "name": "David Ospina",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 79,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2026_daniel_munoz",
    "name": "Daniel Muñoz",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 83,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2026_davinson_sanchez",
    "name": "Davinson Sánchez",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2026_jhon_lucumi",
    "name": "Jhon Lucumí",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Composed"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2026_yerry_mina",
    "name": "Yerry Mina",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2026_johan_mojica",
    "name": "Johan Mojica",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 80,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2026_jefferson_lerma",
    "name": "Jefferson Lerma",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2026_richard_rios",
    "name": "Richard Ríos",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Carrier"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2026_mateus_uribe",
    "name": "Mateus Uribe",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 79,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2026_james_rodriguez",
    "name": "James Rodríguez",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Creator",
      "Set Pieces"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_colombia_2026_juan_quintero",
    "name": "Juan Quintero",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CAM"
    ],
    "rating": 80,
    "traits": [
      "Flair"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2026_jhon_arias",
    "name": "Jhon Arias",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2026_luis_diaz",
    "name": "Luis Díaz",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 88,
    "traits": [
      "Explosive"
    ],
    "role": "Star"
  },
  {
    "id": "wc_colombia_2026_luis_sinisterra",
    "name": "Luis Sinisterra",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Direct"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2026_jhon_duran",
    "name": "Jhon Durán",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Power"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_colombia_2026_rafael_santos_borre",
    "name": "Rafael Santos Borré",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Movement"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2026_miguel_borja",
    "name": "Miguel Borja",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2026_yaser_asprilla",
    "name": "Yaser Asprilla",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_colombia_2026_kevin_castano",
    "name": "Kevin Castaño",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2026 National Team",
    "seasonId": "wc_colombia_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 79,
    "traits": [
      "Ball Winner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_costa_rica_2026_keylor_navas",
    "name": "Keylor Navas",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Big Game"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_costa_rica_2026_patrick_sequeira",
    "name": "Patrick Sequeira",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 77,
    "traits": [
      "Reflexes"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2026_juan_pablo_vargas",
    "name": "Juan Pablo Vargas",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2026_francisco_calvo",
    "name": "Francisco Calvo",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 78,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2026_oscar_duarte",
    "name": "Óscar Duarte",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 76,
    "traits": [
      "Aerial"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_costa_rica_2026_julio_cascante",
    "name": "Julio Cascante",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 76,
    "traits": [
      "Physical"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_costa_rica_2026_haxzel_quiros",
    "name": "Haxzel Quirós",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 75,
    "traits": [
      "Overlap"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_costa_rica_2026_ariel_lassiter",
    "name": "Ariel Lassiter",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LW"
    ],
    "rating": 76,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_costa_rica_2026_orlando_galo",
    "name": "Orlando Galo",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 76,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2026_celso_borges",
    "name": "Celso Borges",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 76,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_costa_rica_2026_brandon_aguilera",
    "name": "Brandon Aguilera",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 77,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_costa_rica_2026_jefferson_brenes",
    "name": "Jefferson Brenes",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 75,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_costa_rica_2026_joel_campbell",
    "name": "Joel Campbell",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "RW",
      "ST"
    ],
    "rating": 78,
    "traits": [
      "Flair"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_costa_rica_2026_manfred_ugalde",
    "name": "Manfred Ugalde",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2026_anthony_contreras",
    "name": "Anthony Contreras",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 76,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_costa_rica_2026_alvaro_zamora",
    "name": "Álvaro Zamora",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 76,
    "traits": [
      "Dribbler"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_costa_rica_2026_warren_madrigal",
    "name": "Warren Madrigal",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 75,
    "traits": [
      "Talent"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_costa_rica_2026_josimar_alcocer",
    "name": "Josimar Alcócer",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "LW"
    ],
    "rating": 75,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_costa_rica_2026_kenneth_vargas",
    "name": "Kenneth Vargas",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 76,
    "traits": [
      "Direct"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_costa_rica_2026_roan_wilson",
    "name": "Roan Wilson",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2026 National Team",
    "seasonId": "wc_costa_rica_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 74,
    "traits": [
      "Physical"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_giorgi_mamardashvili",
    "name": "Giorgi Mamardashvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2026_giorgi_loria",
    "name": "Giorgi Loria",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 75,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_guram_kashia",
    "name": "Guram Kashia",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 77,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_georgia_2026_solomon_kvirkvelia",
    "name": "Solomon Kvirkvelia",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 76,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_lasha_dvali",
    "name": "Lasha Dvali",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 76,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2026_otar_kakabadze",
    "name": "Otar Kakabadze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 76,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2026_levan_shengelia",
    "name": "Levan Shengelia",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LW"
    ],
    "rating": 75,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_giorgi_kochorashvili",
    "name": "Giorgi Kochorashvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 78,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2026_nika_kvekveskiri",
    "name": "Nika Kvekveskiri",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 75,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_otar_kiteishvili",
    "name": "Otar Kiteishvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 79,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2026_zuriko_davitashvili",
    "name": "Zuriko Davitashvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2026_giorgi_chakvetadze",
    "name": "Giorgi Chakvetadze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 79,
    "traits": [
      "Flair"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_khvicha_kvaratskhelia",
    "name": "Khvicha Kvaratskhelia",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 89,
    "traits": [
      "Dribbler",
      "Star"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_georgia_2026_georges_mikautadze",
    "name": "Georges Mikautadze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2026_budu_zivzivadze",
    "name": "Budu Zivzivadze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 77,
    "traits": [
      "Target Man"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_saba_lobzhanidze",
    "name": "Saba Lobzhanidze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 76,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_giorgi_tsitaishvili",
    "name": "Giorgi Tsitaishvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 76,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_georgia_2026_anzor_mekvabishvili",
    "name": "Anzor Mekvabishvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 75,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_giorgi_gocholeishvili",
    "name": "Giorgi Gocholeishvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "RB"
    ],
    "rating": 76,
    "traits": [
      "Engine"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_georgia_2026_jaba_kankava",
    "name": "Jaba Kankava",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2026 National Team",
    "seasonId": "wc_georgia_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 74,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_stanley_nwabali",
    "name": "Stanley Nwabali",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2026_maduka_okoye",
    "name": "Maduka Okoye",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 79,
    "traits": [
      "Reflexes"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_ola_aina",
    "name": "Ola Aina",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2026_calvin_bassey",
    "name": "Calvin Bassey",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Physical"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2026_william_troost_ekong",
    "name": "William Troost-Ekong",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_nigeria_2026_semi_ajayi",
    "name": "Semi Ajayi",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_zaidu_sanusi",
    "name": "Zaidu Sanusi",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "LB"
    ],
    "rating": 79,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_wilfred_ndidi",
    "name": "Wilfred Ndidi",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2026_alex_iwobi",
    "name": "Alex Iwobi",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2026_frank_onyeka",
    "name": "Frank Onyeka",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 79,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_joe_aribo",
    "name": "Joe Aribo",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 78,
    "traits": [
      "Carrier"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_samuel_chukwueze",
    "name": "Samuel Chukwueze",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2026_ademola_lookman",
    "name": "Ademola Lookman",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Direct"
    ],
    "role": "Star"
  },
  {
    "id": "wc_nigeria_2026_victor_osimhen",
    "name": "Victor Osimhen",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 90,
    "traits": [
      "Finisher",
      "Power"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_nigeria_2026_victor_boniface",
    "name": "Victor Boniface",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Power"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_taiwo_awoniyi",
    "name": "Taiwo Awoniyi",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Target Man"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_moses_simon",
    "name": "Moses Simon",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_kelechi_iheanacho",
    "name": "Kelechi Iheanacho",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 79,
    "traits": [
      "Poacher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_terem_moffi",
    "name": "Terem Moffi",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 80,
    "traits": [
      "Runner"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_nigeria_2026_nathan_tella",
    "name": "Nathan Tella",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2026 National Team",
    "seasonId": "wc_nigeria_2026",
    "year": 2026,
    "positions": [
      "RW",
      "RWB"
    ],
    "rating": 78,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_scotland_2026_angus_gunn",
    "name": "Angus Gunn",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2026_craig_gordon",
    "name": "Craig Gordon",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "GK"
    ],
    "rating": 77,
    "traits": [
      "Veteran"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_andy_robertson",
    "name": "Andy Robertson",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 86,
    "traits": [
      "Captain",
      "Overlap"
    ],
    "role": "Star"
  },
  {
    "id": "wc_scotland_2026_kieran_tierney",
    "name": "Kieran Tierney",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 83,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2026_scott_mckenna",
    "name": "Scott McKenna",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Aerial"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_jack_hendry",
    "name": "Jack Hendry",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2026_ryan_porteous",
    "name": "Ryan Porteous",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CB"
    ],
    "rating": 78,
    "traits": [
      "Aggressive"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_aaron_hickey",
    "name": "Aaron Hickey",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "RB",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Versatile"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2026_billy_gilmour",
    "name": "Billy Gilmour",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 81,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2026_scott_mctominay",
    "name": "Scott McTominay",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Box Crasher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2026_john_mcginn",
    "name": "John McGinn",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2026_callum_mcgregor",
    "name": "Callum McGregor",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 81,
    "traits": [
      "Leader"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_kenny_mclean",
    "name": "Kenny McLean",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 78,
    "traits": [
      "Passing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_ryan_christie",
    "name": "Ryan Christie",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Pressing"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_ryan_fraser",
    "name": "Ryan Fraser",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 77,
    "traits": [
      "Pace"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_che_adams",
    "name": "Che Adams",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 79,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2026_lyndon_dykes",
    "name": "Lyndon Dykes",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 78,
    "traits": [
      "Target Man"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_lawrence_shankland",
    "name": "Lawrence Shankland",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "ST"
    ],
    "rating": 78,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_scotland_2026_ben_doak",
    "name": "Ben Doak",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "RW"
    ],
    "rating": 78,
    "traits": [
      "Wonderkid"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_scotland_2026_lewis_ferguson",
    "name": "Lewis Ferguson",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2026 National Team",
    "seasonId": "wc_scotland_2026",
    "year": 2026,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Engine"
    ],
    "role": "Impact"
  }
];

const HISTORICAL_WORLD_CUP_PLAYERS = [
  {
    "id": "wc_argentina_2002_gabriel_batistuta",
    "name": "Gabriel Batistuta",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2002 National Team",
    "seasonId": "wc_argentina_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 90,
    "traits": [
      "Finisher"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_argentina_2002_juan_sebastian_veron",
    "name": "Juan Sebastián Verón",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2002 National Team",
    "seasonId": "wc_argentina_2002",
    "year": 2002,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 88,
    "traits": [
      "Playmaker"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_argentina_2002_javier_zanetti",
    "name": "Javier Zanetti",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2002 National Team",
    "seasonId": "wc_argentina_2002",
    "year": 2002,
    "positions": [
      "RB",
      "RM"
    ],
    "rating": 89,
    "traits": [
      "Captain"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_argentina_2002_roberto_ayala",
    "name": "Roberto Ayala",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2002 National Team",
    "seasonId": "wc_argentina_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 87,
    "traits": [
      "Leader"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_argentina_2002_hernan_crespo",
    "name": "Hernán Crespo",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2002 National Team",
    "seasonId": "wc_argentina_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 88,
    "traits": [
      "Poacher"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_argentina_2002_ariel_ortega",
    "name": "Ariel Ortega",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2002 National Team",
    "seasonId": "wc_argentina_2002",
    "year": 2002,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Flair"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_argentina_2010_lionel_messi",
    "name": "Lionel Messi",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2010 National Team",
    "seasonId": "wc_argentina_2010",
    "year": 2010,
    "positions": [
      "RW",
      "CAM",
      "ST"
    ],
    "rating": 94,
    "traits": [
      "Ballon d’Or"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_argentina_2010_carlos_tevez",
    "name": "Carlos Tévez",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2010 National Team",
    "seasonId": "wc_argentina_2010",
    "year": 2010,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 88,
    "traits": [
      "Bulldog"
    ],
    "role": "Star"
  },
  {
    "id": "wc_argentina_2010_gonzalo_higuain",
    "name": "Gonzalo Higuaín",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2010 National Team",
    "seasonId": "wc_argentina_2010",
    "year": 2010,
    "positions": [
      "ST"
    ],
    "rating": 87,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2010_javier_mascherano",
    "name": "Javier Mascherano",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2010 National Team",
    "seasonId": "wc_argentina_2010",
    "year": 2010,
    "positions": [
      "CDM",
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Destroyer"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2010_angel_di_maria",
    "name": "Ángel Di María",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2010 National Team",
    "seasonId": "wc_argentina_2010",
    "year": 2010,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 87,
    "traits": [
      "Clutch"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2014_sergio_aguero",
    "name": "Sergio Agüero",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2014 National Team",
    "seasonId": "wc_argentina_2014",
    "year": 2014,
    "positions": [
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_argentina_2014_ezequiel_garay",
    "name": "Ezequiel Garay",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2014 National Team",
    "seasonId": "wc_argentina_2014",
    "year": 2014,
    "positions": [
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2014_sergio_romero",
    "name": "Sergio Romero",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2014 National Team",
    "seasonId": "wc_argentina_2014",
    "year": 2014,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2014_pablo_zabaleta",
    "name": "Pablo Zabaleta",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2014 National Team",
    "seasonId": "wc_argentina_2014",
    "year": 2014,
    "positions": [
      "RB"
    ],
    "rating": 84,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2022_emiliano_martinez",
    "name": "Emiliano Martínez",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2022 National Team",
    "seasonId": "wc_argentina_2022",
    "year": 2022,
    "positions": [
      "GK"
    ],
    "rating": 90,
    "traits": [
      "Penalty Demon"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2022_cristian_romero",
    "name": "Cristian Romero",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2022 National Team",
    "seasonId": "wc_argentina_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Aggressive"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2022_enzo_fernandez",
    "name": "Enzo Fernández",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2022 National Team",
    "seasonId": "wc_argentina_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 87,
    "traits": [
      "Breakout"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2022_alexis_mac_allister",
    "name": "Alexis Mac Allister",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2022 National Team",
    "seasonId": "wc_argentina_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 86,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_argentina_2022_julian_alvarez",
    "name": "Julián Álvarez",
    "nation": "Argentina",
    "club": "Argentina",
    "season": "2022 National Team",
    "seasonId": "wc_argentina_2022",
    "year": 2022,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 87,
    "traits": [
      "Pressing"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2002_ronaldo_nazario",
    "name": "Ronaldo Nazário",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2002 National Team",
    "seasonId": "wc_brazil_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 97,
    "traits": [
      "Phenomenon"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_brazil_2002_rivaldo",
    "name": "Rivaldo",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2002 National Team",
    "seasonId": "wc_brazil_2002",
    "year": 2002,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 94,
    "traits": [
      "Flair"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_brazil_2002_ronaldinho",
    "name": "Ronaldinho",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2002 National Team",
    "seasonId": "wc_brazil_2002",
    "year": 2002,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 93,
    "traits": [
      "Magic"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_brazil_2002_cafu",
    "name": "Cafu",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2002 National Team",
    "seasonId": "wc_brazil_2002",
    "year": 2002,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 91,
    "traits": [
      "Captain"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_brazil_2002_roberto_carlos",
    "name": "Roberto Carlos",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2002 National Team",
    "seasonId": "wc_brazil_2002",
    "year": 2002,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 91,
    "traits": [
      "Free Kick"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_brazil_2002_lucio",
    "name": "Lúcio",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2002 National Team",
    "seasonId": "wc_brazil_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Leader"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_brazil_2002_gilberto_silva",
    "name": "Gilberto Silva",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2002 National Team",
    "seasonId": "wc_brazil_2002",
    "year": 2002,
    "positions": [
      "CDM"
    ],
    "rating": 86,
    "traits": [
      "Anchor"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_brazil_2006_kaka",
    "name": "Kaká",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2006 National Team",
    "seasonId": "wc_brazil_2006",
    "year": 2006,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 92,
    "traits": [
      "Ballon d’Or"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_brazil_2006_adriano",
    "name": "Adriano",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2006 National Team",
    "seasonId": "wc_brazil_2006",
    "year": 2006,
    "positions": [
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Power Shot"
    ],
    "role": "Star"
  },
  {
    "id": "wc_brazil_2006_dida",
    "name": "Dida",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2006 National Team",
    "seasonId": "wc_brazil_2006",
    "year": 2006,
    "positions": [
      "GK"
    ],
    "rating": 87,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2014_neymar",
    "name": "Neymar",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2014 National Team",
    "seasonId": "wc_brazil_2014",
    "year": 2014,
    "positions": [
      "LW",
      "CAM"
    ],
    "rating": 92,
    "traits": [
      "Flair"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_brazil_2014_thiago_silva",
    "name": "Thiago Silva",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2014 National Team",
    "seasonId": "wc_brazil_2014",
    "year": 2014,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2014_oscar",
    "name": "Oscar",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2014 National Team",
    "seasonId": "wc_brazil_2014",
    "year": 2014,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 85,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2014_david_luiz",
    "name": "David Luiz",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2014 National Team",
    "seasonId": "wc_brazil_2014",
    "year": 2014,
    "positions": [
      "CB",
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Chaos"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2022_vinicius_junior",
    "name": "Vinícius Júnior",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2022 National Team",
    "seasonId": "wc_brazil_2022",
    "year": 2022,
    "positions": [
      "LW"
    ],
    "rating": 91,
    "traits": [
      "Dribbler"
    ],
    "role": "Star"
  },
  {
    "id": "wc_brazil_2022_casemiro",
    "name": "Casemiro",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2022 National Team",
    "seasonId": "wc_brazil_2022",
    "year": 2022,
    "positions": [
      "CDM"
    ],
    "rating": 88,
    "traits": [
      "Anchor"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2022_alisson_becker",
    "name": "Alisson Becker",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2022 National Team",
    "seasonId": "wc_brazil_2022",
    "year": 2022,
    "positions": [
      "GK"
    ],
    "rating": 90,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_brazil_2022_marquinhos",
    "name": "Marquinhos",
    "nation": "Brazil",
    "club": "Brazil",
    "season": "2022 National Team",
    "seasonId": "wc_brazil_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 87,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2006_zinedine_zidane",
    "name": "Zinedine Zidane",
    "nation": "France",
    "club": "France",
    "season": "2006 National Team",
    "seasonId": "wc_france_2006",
    "year": 2006,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 96,
    "traits": [
      "Maestro"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_france_2006_thierry_henry",
    "name": "Thierry Henry",
    "nation": "France",
    "club": "France",
    "season": "2006 National Team",
    "seasonId": "wc_france_2006",
    "year": 2006,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 93,
    "traits": [
      "Finisher"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_france_2006_patrick_vieira",
    "name": "Patrick Vieira",
    "nation": "France",
    "club": "France",
    "season": "2006 National Team",
    "seasonId": "wc_france_2006",
    "year": 2006,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 91,
    "traits": [
      "Engine"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_france_2006_claude_makelele",
    "name": "Claude Makélélé",
    "nation": "France",
    "club": "France",
    "season": "2006 National Team",
    "seasonId": "wc_france_2006",
    "year": 2006,
    "positions": [
      "CDM"
    ],
    "rating": 89,
    "traits": [
      "Anchor"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_france_2006_lilian_thuram",
    "name": "Lilian Thuram",
    "nation": "France",
    "club": "France",
    "season": "2006 National Team",
    "seasonId": "wc_france_2006",
    "year": 2006,
    "positions": [
      "CB",
      "RB"
    ],
    "rating": 89,
    "traits": [
      "Defender"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_france_2006_franck_ribery",
    "name": "Franck Ribéry",
    "nation": "France",
    "club": "France",
    "season": "2006 National Team",
    "seasonId": "wc_france_2006",
    "year": 2006,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 87,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2006_fabien_barthez",
    "name": "Fabien Barthez",
    "nation": "France",
    "club": "France",
    "season": "2006 National Team",
    "seasonId": "wc_france_2006",
    "year": 2006,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2018_hugo_lloris",
    "name": "Hugo Lloris",
    "nation": "France",
    "club": "France",
    "season": "2018 National Team",
    "seasonId": "wc_france_2018",
    "year": 2018,
    "positions": [
      "GK"
    ],
    "rating": 88,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2018_raphael_varane",
    "name": "Raphaël Varane",
    "nation": "France",
    "club": "France",
    "season": "2018 National Team",
    "seasonId": "wc_france_2018",
    "year": 2018,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2018_paul_pogba",
    "name": "Paul Pogba",
    "nation": "France",
    "club": "France",
    "season": "2018 National Team",
    "seasonId": "wc_france_2018",
    "year": 2018,
    "positions": [
      "CM"
    ],
    "rating": 88,
    "traits": [
      "Big Game"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2018_antoine_griezmann",
    "name": "Antoine Griezmann",
    "nation": "France",
    "club": "France",
    "season": "2018 National Team",
    "seasonId": "wc_france_2018",
    "year": 2018,
    "positions": [
      "CAM",
      "ST"
    ],
    "rating": 90,
    "traits": [
      "Clutch"
    ],
    "role": "Star"
  },
  {
    "id": "wc_france_2018_kylian_mbappe",
    "name": "Kylian Mbappé",
    "nation": "France",
    "club": "France",
    "season": "2018 National Team",
    "seasonId": "wc_france_2018",
    "year": 2018,
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "rating": 93,
    "traits": [
      "Pace"
    ],
    "role": "Star"
  },
  {
    "id": "wc_france_2018_ngolo_kante",
    "name": "N’Golo Kanté",
    "nation": "France",
    "club": "France",
    "season": "2018 National Team",
    "seasonId": "wc_france_2018",
    "year": 2018,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 90,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2022_aurelien_tchouameni",
    "name": "Aurélien Tchouaméni",
    "nation": "France",
    "club": "France",
    "season": "2022 National Team",
    "seasonId": "wc_france_2022",
    "year": 2022,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 87,
    "traits": [
      "Anchor"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_france_2022_olivier_giroud",
    "name": "Olivier Giroud",
    "nation": "France",
    "club": "France",
    "season": "2022 National Team",
    "seasonId": "wc_france_2022",
    "year": 2022,
    "positions": [
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Target Man"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_france_2022_theo_hernandez",
    "name": "Theo Hernández",
    "nation": "France",
    "club": "France",
    "season": "2022 National Team",
    "seasonId": "wc_france_2022",
    "year": 2022,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 88,
    "traits": [
      "Overlap"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2002_raul",
    "name": "Raúl",
    "nation": "Spain",
    "club": "Spain",
    "season": "2002 National Team",
    "seasonId": "wc_spain_2002",
    "year": 2002,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 91,
    "traits": [
      "Finisher"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_spain_2002_fernando_hierro",
    "name": "Fernando Hierro",
    "nation": "Spain",
    "club": "Spain",
    "season": "2002 National Team",
    "seasonId": "wc_spain_2002",
    "year": 2002,
    "positions": [
      "CB",
      "CDM"
    ],
    "rating": 88,
    "traits": [
      "Leader"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_spain_2002_gaizka_mendieta",
    "name": "Gaizka Mendieta",
    "nation": "Spain",
    "club": "Spain",
    "season": "2002 National Team",
    "seasonId": "wc_spain_2002",
    "year": 2002,
    "positions": [
      "CM",
      "RM"
    ],
    "rating": 87,
    "traits": [
      "Engine"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_spain_2002_fernando_morientes",
    "name": "Fernando Morientes",
    "nation": "Spain",
    "club": "Spain",
    "season": "2002 National Team",
    "seasonId": "wc_spain_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Target Man"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_spain_2010_iker_casillas",
    "name": "Iker Casillas",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "GK"
    ],
    "rating": 91,
    "traits": [
      "Captain"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_spain_2010_carles_puyol",
    "name": "Carles Puyol",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "CB"
    ],
    "rating": 90,
    "traits": [
      "Warrior"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_spain_2010_sergio_ramos",
    "name": "Sergio Ramos",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "CB",
      "RB"
    ],
    "rating": 90,
    "traits": [
      "Big Game"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_spain_2010_gerard_pique",
    "name": "Gerard Piqué",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2010_xavi",
    "name": "Xavi",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "CM"
    ],
    "rating": 94,
    "traits": [
      "Maestro"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_spain_2010_andres_iniesta",
    "name": "Andrés Iniesta",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "CM",
      "CAM",
      "LW"
    ],
    "rating": 94,
    "traits": [
      "Clutch"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_spain_2010_sergio_busquets",
    "name": "Sergio Busquets",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "CDM"
    ],
    "rating": 90,
    "traits": [
      "Anchor"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2010_david_villa",
    "name": "David Villa",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 90,
    "traits": [
      "Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_spain_2010_xabi_alonso",
    "name": "Xabi Alonso",
    "nation": "Spain",
    "club": "Spain",
    "season": "2010 National Team",
    "seasonId": "wc_spain_2010",
    "year": 2010,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 89,
    "traits": [
      "Long Pass"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2022_pedri",
    "name": "Pedri",
    "nation": "Spain",
    "club": "Spain",
    "season": "2022 National Team",
    "seasonId": "wc_spain_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 88,
    "traits": [
      "Tempo"
    ],
    "role": "Star"
  },
  {
    "id": "wc_spain_2022_gavi",
    "name": "Gavi",
    "nation": "Spain",
    "club": "Spain",
    "season": "2022 National Team",
    "seasonId": "wc_spain_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 86,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_spain_2022_rodri",
    "name": "Rodri",
    "nation": "Spain",
    "club": "Spain",
    "season": "2022 National Team",
    "seasonId": "wc_spain_2022",
    "year": 2022,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 93,
    "traits": [
      "Anchor"
    ],
    "role": "Star"
  },
  {
    "id": "wc_germany_2002_oliver_kahn",
    "name": "Oliver Kahn",
    "nation": "Germany",
    "club": "Germany",
    "season": "2002 National Team",
    "seasonId": "wc_germany_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 93,
    "traits": [
      "Titan"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_germany_2002_michael_ballack",
    "name": "Michael Ballack",
    "nation": "Germany",
    "club": "Germany",
    "season": "2002 National Team",
    "seasonId": "wc_germany_2002",
    "year": 2002,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 91,
    "traits": [
      "Leader"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_germany_2002_miroslav_klose",
    "name": "Miroslav Klose",
    "nation": "Germany",
    "club": "Germany",
    "season": "2002 National Team",
    "seasonId": "wc_germany_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Header"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_germany_2002_bernd_schneider",
    "name": "Bernd Schneider",
    "nation": "Germany",
    "club": "Germany",
    "season": "2002 National Team",
    "seasonId": "wc_germany_2002",
    "year": 2002,
    "positions": [
      "RM",
      "CM"
    ],
    "rating": 85,
    "traits": [
      "Technician"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_germany_2014_manuel_neuer",
    "name": "Manuel Neuer",
    "nation": "Germany",
    "club": "Germany",
    "season": "2014 National Team",
    "seasonId": "wc_germany_2014",
    "year": 2014,
    "positions": [
      "GK"
    ],
    "rating": 93,
    "traits": [
      "Sweeper Keeper"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_germany_2014_philipp_lahm",
    "name": "Philipp Lahm",
    "nation": "Germany",
    "club": "Germany",
    "season": "2014 National Team",
    "seasonId": "wc_germany_2014",
    "year": 2014,
    "positions": [
      "RB",
      "CDM"
    ],
    "rating": 91,
    "traits": [
      "Captain"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_germany_2014_bastian_schweinsteiger",
    "name": "Bastian Schweinsteiger",
    "nation": "Germany",
    "club": "Germany",
    "season": "2014 National Team",
    "seasonId": "wc_germany_2014",
    "year": 2014,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 90,
    "traits": [
      "Warrior"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_germany_2014_thomas_muller",
    "name": "Thomas Müller",
    "nation": "Germany",
    "club": "Germany",
    "season": "2014 National Team",
    "seasonId": "wc_germany_2014",
    "year": 2014,
    "positions": [
      "ST",
      "RW",
      "CAM"
    ],
    "rating": 90,
    "traits": [
      "Raumdeuter"
    ],
    "role": "Star"
  },
  {
    "id": "wc_germany_2014_mesut_ozil",
    "name": "Mesut Özil",
    "nation": "Germany",
    "club": "Germany",
    "season": "2014 National Team",
    "seasonId": "wc_germany_2014",
    "year": 2014,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 88,
    "traits": [
      "Playmaker"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2014_toni_kroos",
    "name": "Toni Kroos",
    "nation": "Germany",
    "club": "Germany",
    "season": "2014 National Team",
    "seasonId": "wc_germany_2014",
    "year": 2014,
    "positions": [
      "CM"
    ],
    "rating": 90,
    "traits": [
      "Pass Master"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2014_mats_hummels",
    "name": "Mats Hummels",
    "nation": "Germany",
    "club": "Germany",
    "season": "2014 National Team",
    "seasonId": "wc_germany_2014",
    "year": 2014,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2014_jerome_boateng",
    "name": "Jérôme Boateng",
    "nation": "Germany",
    "club": "Germany",
    "season": "2014 National Team",
    "seasonId": "wc_germany_2014",
    "year": 2014,
    "positions": [
      "CB",
      "RB"
    ],
    "rating": 88,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_germany_2022_jamal_musiala",
    "name": "Jamal Musiala",
    "nation": "Germany",
    "club": "Germany",
    "season": "2022 National Team",
    "seasonId": "wc_germany_2022",
    "year": 2022,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 89,
    "traits": [
      "Dribbler"
    ],
    "role": "Star"
  },
  {
    "id": "wc_germany_2022_joshua_kimmich",
    "name": "Joshua Kimmich",
    "nation": "Germany",
    "club": "Germany",
    "season": "2022 National Team",
    "seasonId": "wc_germany_2022",
    "year": 2022,
    "positions": [
      "CDM",
      "RB"
    ],
    "rating": 88,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2002_paolo_maldini",
    "name": "Paolo Maldini",
    "nation": "Italy",
    "club": "Italy",
    "season": "2002 National Team",
    "seasonId": "wc_italy_2002",
    "year": 2002,
    "positions": [
      "LB",
      "CB"
    ],
    "rating": 92,
    "traits": [
      "Legend"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_italy_2002_francesco_totti",
    "name": "Francesco Totti",
    "nation": "Italy",
    "club": "Italy",
    "season": "2002 National Team",
    "seasonId": "wc_italy_2002",
    "year": 2002,
    "positions": [
      "CAM",
      "ST"
    ],
    "rating": 91,
    "traits": [
      "Flair"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_italy_2002_christian_vieri",
    "name": "Christian Vieri",
    "nation": "Italy",
    "club": "Italy",
    "season": "2002 National Team",
    "seasonId": "wc_italy_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 90,
    "traits": [
      "Power"
    ],
    "role": "Star"
  },
  {
    "id": "wc_italy_2002_alessandro_nesta",
    "name": "Alessandro Nesta",
    "nation": "Italy",
    "club": "Italy",
    "season": "2002 National Team",
    "seasonId": "wc_italy_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 90,
    "traits": [
      "Defender"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_italy_2006_gianluigi_buffon",
    "name": "Gianluigi Buffon",
    "nation": "Italy",
    "club": "Italy",
    "season": "2006 National Team",
    "seasonId": "wc_italy_2006",
    "year": 2006,
    "positions": [
      "GK"
    ],
    "rating": 93,
    "traits": [
      "Wall"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_italy_2006_fabio_cannavaro",
    "name": "Fabio Cannavaro",
    "nation": "Italy",
    "club": "Italy",
    "season": "2006 National Team",
    "seasonId": "wc_italy_2006",
    "year": 2006,
    "positions": [
      "CB"
    ],
    "rating": 92,
    "traits": [
      "Ballon d’Or"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_italy_2006_andrea_pirlo",
    "name": "Andrea Pirlo",
    "nation": "Italy",
    "club": "Italy",
    "season": "2006 National Team",
    "seasonId": "wc_italy_2006",
    "year": 2006,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 92,
    "traits": [
      "Maestro"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_italy_2006_gennaro_gattuso",
    "name": "Gennaro Gattuso",
    "nation": "Italy",
    "club": "Italy",
    "season": "2006 National Team",
    "seasonId": "wc_italy_2006",
    "year": 2006,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 88,
    "traits": [
      "Destroyer"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2006_alessandro_del_piero",
    "name": "Alessandro Del Piero",
    "nation": "Italy",
    "club": "Italy",
    "season": "2006 National Team",
    "seasonId": "wc_italy_2006",
    "year": 2006,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 89,
    "traits": [
      "Clutch"
    ],
    "role": "Star"
  },
  {
    "id": "wc_italy_2006_fabio_grosso",
    "name": "Fabio Grosso",
    "nation": "Italy",
    "club": "Italy",
    "season": "2006 National Team",
    "seasonId": "wc_italy_2006",
    "year": 2006,
    "positions": [
      "LB"
    ],
    "rating": 85,
    "traits": [
      "Clutch"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2006_luca_toni",
    "name": "Luca Toni",
    "nation": "Italy",
    "club": "Italy",
    "season": "2006 National Team",
    "seasonId": "wc_italy_2006",
    "year": 2006,
    "positions": [
      "ST"
    ],
    "rating": 87,
    "traits": [
      "Target Man"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_italy_2020_giorgio_chiellini",
    "name": "Giorgio Chiellini",
    "nation": "Italy",
    "club": "Italy",
    "season": "2020 National Team",
    "seasonId": "wc_italy_2020",
    "year": 2020,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Warrior"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_italy_2020_leonardo_bonucci",
    "name": "Leonardo Bonucci",
    "nation": "Italy",
    "club": "Italy",
    "season": "2020 National Team",
    "seasonId": "wc_italy_2020",
    "year": 2020,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Long Pass"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_italy_2020_federico_chiesa",
    "name": "Federico Chiesa",
    "nation": "Italy",
    "club": "Italy",
    "season": "2020 National Team",
    "seasonId": "wc_italy_2020",
    "year": 2020,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Direct"
    ],
    "role": "Star"
  },
  {
    "id": "wc_england_2002_michael_owen",
    "name": "Michael Owen",
    "nation": "England",
    "club": "England",
    "season": "2002 National Team",
    "seasonId": "wc_england_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Pace"
    ],
    "role": "Star"
  },
  {
    "id": "wc_england_2002_david_seaman",
    "name": "David Seaman",
    "nation": "England",
    "club": "England",
    "season": "2002 National Team",
    "seasonId": "wc_england_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 85,
    "traits": [
      "Keeper"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_england_2002_rio_ferdinand",
    "name": "Rio Ferdinand",
    "nation": "England",
    "club": "England",
    "season": "2002 National Team",
    "seasonId": "wc_england_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2002_sol_campbell",
    "name": "Sol Campbell",
    "nation": "England",
    "club": "England",
    "season": "2002 National Team",
    "seasonId": "wc_england_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 87,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2006_david_beckham",
    "name": "David Beckham",
    "nation": "England",
    "club": "England",
    "season": "2006 National Team",
    "seasonId": "wc_england_2006",
    "year": 2006,
    "positions": [
      "RM",
      "CM"
    ],
    "rating": 90,
    "traits": [
      "Free Kick"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_england_2006_steven_gerrard",
    "name": "Steven Gerrard",
    "nation": "England",
    "club": "England",
    "season": "2006 National Team",
    "seasonId": "wc_england_2006",
    "year": 2006,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 91,
    "traits": [
      "Captain"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_england_2006_frank_lampard",
    "name": "Frank Lampard",
    "nation": "England",
    "club": "England",
    "season": "2006 National Team",
    "seasonId": "wc_england_2006",
    "year": 2006,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 90,
    "traits": [
      "Late Runs"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_england_2006_john_terry",
    "name": "John Terry",
    "nation": "England",
    "club": "England",
    "season": "2006 National Team",
    "seasonId": "wc_england_2006",
    "year": 2006,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2006_wayne_rooney",
    "name": "Wayne Rooney",
    "nation": "England",
    "club": "England",
    "season": "2006 National Team",
    "seasonId": "wc_england_2006",
    "year": 2006,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 91,
    "traits": [
      "Power"
    ],
    "role": "Star"
  },
  {
    "id": "wc_england_2006_ashley_cole",
    "name": "Ashley Cole",
    "nation": "England",
    "club": "England",
    "season": "2006 National Team",
    "seasonId": "wc_england_2006",
    "year": 2006,
    "positions": [
      "LB"
    ],
    "rating": 89,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_england_2022_harry_kane",
    "name": "Harry Kane",
    "nation": "England",
    "club": "England",
    "season": "2022 National Team",
    "seasonId": "wc_england_2022",
    "year": 2022,
    "positions": [
      "ST"
    ],
    "rating": 91,
    "traits": [
      "Finisher"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_england_2022_jude_bellingham",
    "name": "Jude Bellingham",
    "nation": "England",
    "club": "England",
    "season": "2022 National Team",
    "seasonId": "wc_england_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 91,
    "traits": [
      "Complete Midfielder"
    ],
    "role": "Star"
  },
  {
    "id": "wc_england_2022_bukayo_saka",
    "name": "Bukayo Saka",
    "nation": "England",
    "club": "England",
    "season": "2022 National Team",
    "seasonId": "wc_england_2022",
    "year": 2022,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 88,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2002_luis_figo",
    "name": "Luís Figo",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2002 National Team",
    "seasonId": "wc_portugal_2002",
    "year": 2002,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 92,
    "traits": [
      "Ballon d’Or"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_portugal_2002_rui_costa",
    "name": "Rui Costa",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2002 National Team",
    "seasonId": "wc_portugal_2002",
    "year": 2002,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 89,
    "traits": [
      "Playmaker"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_portugal_2002_fernando_couto",
    "name": "Fernando Couto",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2002 National Team",
    "seasonId": "wc_portugal_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Defender"
    ],
    "role": "Classic"
  },
  {
    "id": "wc_portugal_2006_cristiano_ronaldo",
    "name": "Cristiano Ronaldo",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2006 National Team",
    "seasonId": "wc_portugal_2006",
    "year": 2006,
    "positions": [
      "LW",
      "RW",
      "ST"
    ],
    "rating": 91,
    "traits": [
      "Ballon d’Or"
    ],
    "role": "Star"
  },
  {
    "id": "wc_portugal_2006_deco",
    "name": "Deco",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2006 National Team",
    "seasonId": "wc_portugal_2006",
    "year": 2006,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 89,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2006_ricardo_carvalho",
    "name": "Ricardo Carvalho",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2006 National Team",
    "seasonId": "wc_portugal_2006",
    "year": 2006,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2006_maniche",
    "name": "Maniche",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2006 National Team",
    "seasonId": "wc_portugal_2006",
    "year": 2006,
    "positions": [
      "CM"
    ],
    "rating": 86,
    "traits": [
      "Long Shot"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2016_pepe",
    "name": "Pepe",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2016 National Team",
    "seasonId": "wc_portugal_2016",
    "year": 2016,
    "positions": [
      "CB"
    ],
    "rating": 89,
    "traits": [
      "Warrior"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_portugal_2016_joao_moutinho",
    "name": "João Moutinho",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2016 National Team",
    "seasonId": "wc_portugal_2016",
    "year": 2016,
    "positions": [
      "CM"
    ],
    "rating": 86,
    "traits": [
      "Tempo"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2016_nani",
    "name": "Nani",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2016 National Team",
    "seasonId": "wc_portugal_2016",
    "year": 2016,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Flair"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2016_rui_patricio",
    "name": "Rui Patrício",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2016 National Team",
    "seasonId": "wc_portugal_2016",
    "year": 2016,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2022_bruno_fernandes",
    "name": "Bruno Fernandes",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2022 National Team",
    "seasonId": "wc_portugal_2022",
    "year": 2022,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 89,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_portugal_2022_bernardo_silva",
    "name": "Bernardo Silva",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2022 National Team",
    "seasonId": "wc_portugal_2022",
    "year": 2022,
    "positions": [
      "RW",
      "CM"
    ],
    "rating": 89,
    "traits": [
      "Technician"
    ],
    "role": "Star"
  },
  {
    "id": "wc_portugal_2022_ruben_dias",
    "name": "Rúben Dias",
    "nation": "Portugal",
    "club": "Portugal",
    "season": "2022 National Team",
    "seasonId": "wc_portugal_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 90,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2010_wesley_sneijder",
    "name": "Wesley Sneijder",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2010 National Team",
    "seasonId": "wc_netherlands_2010",
    "year": 2010,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 91,
    "traits": [
      "Big Game"
    ],
    "role": "Star"
  },
  {
    "id": "wc_netherlands_2010_arjen_robben",
    "name": "Arjen Robben",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2010 National Team",
    "seasonId": "wc_netherlands_2010",
    "year": 2010,
    "positions": [
      "RW",
      "LW"
    ],
    "rating": 91,
    "traits": [
      "Cut Inside"
    ],
    "role": "Star"
  },
  {
    "id": "wc_netherlands_2010_robin_van_persie",
    "name": "Robin van Persie",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2010 National Team",
    "seasonId": "wc_netherlands_2010",
    "year": 2010,
    "positions": [
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2010_rafael_van_der_vaart",
    "name": "Rafael van der Vaart",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2010 National Team",
    "seasonId": "wc_netherlands_2010",
    "year": 2010,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 87,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2010_mark_van_bommel",
    "name": "Mark van Bommel",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2010 National Team",
    "seasonId": "wc_netherlands_2010",
    "year": 2010,
    "positions": [
      "CDM"
    ],
    "rating": 86,
    "traits": [
      "Destroyer"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2010_giovanni_van_bronckhorst",
    "name": "Giovanni van Bronckhorst",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2010 National Team",
    "seasonId": "wc_netherlands_2010",
    "year": 2010,
    "positions": [
      "LB",
      "CM"
    ],
    "rating": 86,
    "traits": [
      "Captain"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_netherlands_2014_memphis_depay",
    "name": "Memphis Depay",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2014 National Team",
    "seasonId": "wc_netherlands_2014",
    "year": 2014,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Flair"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2014_daley_blind",
    "name": "Daley Blind",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2014 National Team",
    "seasonId": "wc_netherlands_2014",
    "year": 2014,
    "positions": [
      "LB",
      "CB",
      "CDM"
    ],
    "rating": 85,
    "traits": [
      "Utility"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2014_stefan_de_vrij",
    "name": "Stefan de Vrij",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2014 National Team",
    "seasonId": "wc_netherlands_2014",
    "year": 2014,
    "positions": [
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_netherlands_2022_virgil_van_dijk",
    "name": "Virgil van Dijk",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2022 National Team",
    "seasonId": "wc_netherlands_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 91,
    "traits": [
      "Leader"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_netherlands_2022_frenkie_de_jong",
    "name": "Frenkie de Jong",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2022 National Team",
    "seasonId": "wc_netherlands_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 89,
    "traits": [
      "Press Resistant"
    ],
    "role": "Star"
  },
  {
    "id": "wc_netherlands_2022_cody_gakpo",
    "name": "Cody Gakpo",
    "nation": "Netherlands",
    "club": "Netherlands",
    "season": "2022 National Team",
    "seasonId": "wc_netherlands_2022",
    "year": 2022,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Direct"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2018_eden_hazard",
    "name": "Eden Hazard",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2018 National Team",
    "seasonId": "wc_belgium_2018",
    "year": 2018,
    "positions": [
      "LW",
      "CAM"
    ],
    "rating": 92,
    "traits": [
      "Dribbler"
    ],
    "role": "Star"
  },
  {
    "id": "wc_belgium_2018_kevin_de_bruyne",
    "name": "Kevin De Bruyne",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2018 National Team",
    "seasonId": "wc_belgium_2018",
    "year": 2018,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 92,
    "traits": [
      "Playmaker"
    ],
    "role": "Star"
  },
  {
    "id": "wc_belgium_2018_romelu_lukaku",
    "name": "Romelu Lukaku",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2018 National Team",
    "seasonId": "wc_belgium_2018",
    "year": 2018,
    "positions": [
      "ST"
    ],
    "rating": 88,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2018_thibaut_courtois",
    "name": "Thibaut Courtois",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2018 National Team",
    "seasonId": "wc_belgium_2018",
    "year": 2018,
    "positions": [
      "GK"
    ],
    "rating": 91,
    "traits": [
      "Wall"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2018_vincent_kompany",
    "name": "Vincent Kompany",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2018 National Team",
    "seasonId": "wc_belgium_2018",
    "year": 2018,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_belgium_2018_jan_vertonghen",
    "name": "Jan Vertonghen",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2018 National Team",
    "seasonId": "wc_belgium_2018",
    "year": 2018,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 87,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2018_toby_alderweireld",
    "name": "Toby Alderweireld",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2018 National Team",
    "seasonId": "wc_belgium_2018",
    "year": 2018,
    "positions": [
      "CB"
    ],
    "rating": 87,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2022_yannick_carrasco",
    "name": "Yannick Carrasco",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2022 National Team",
    "seasonId": "wc_belgium_2022",
    "year": 2022,
    "positions": [
      "LWB",
      "LW"
    ],
    "rating": 84,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_belgium_2022_youri_tielemans",
    "name": "Youri Tielemans",
    "nation": "Belgium",
    "club": "Belgium",
    "season": "2022 National Team",
    "seasonId": "wc_belgium_2022",
    "year": 2022,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Long Shot"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2018_luka_modric",
    "name": "Luka Modrić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2018 National Team",
    "seasonId": "wc_croatia_2018",
    "year": 2018,
    "positions": [
      "CM"
    ],
    "rating": 92,
    "traits": [
      "Ballon d’Or"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_croatia_2018_ivan_rakitic",
    "name": "Ivan Rakitić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2018 National Team",
    "seasonId": "wc_croatia_2018",
    "year": 2018,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 88,
    "traits": [
      "Technician"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2018_mario_mandzukic",
    "name": "Mario Mandžukić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2018 National Team",
    "seasonId": "wc_croatia_2018",
    "year": 2018,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 87,
    "traits": [
      "Warrior"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2018_ivan_perisic",
    "name": "Ivan Perišić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2018 National Team",
    "seasonId": "wc_croatia_2018",
    "year": 2018,
    "positions": [
      "LW",
      "LWB"
    ],
    "rating": 87,
    "traits": [
      "Big Game"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2018_marcelo_brozovic",
    "name": "Marcelo Brozović",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2018 National Team",
    "seasonId": "wc_croatia_2018",
    "year": 2018,
    "positions": [
      "CDM"
    ],
    "rating": 86,
    "traits": [
      "Anchor"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2018_dejan_lovren",
    "name": "Dejan Lovren",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2018 National Team",
    "seasonId": "wc_croatia_2018",
    "year": 2018,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2018_danijel_subasic",
    "name": "Danijel Subašić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2018 National Team",
    "seasonId": "wc_croatia_2018",
    "year": 2018,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Penalty Save"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_croatia_2022_josko_gvardiol",
    "name": "Joško Gvardiol",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2022 National Team",
    "seasonId": "wc_croatia_2022",
    "year": 2022,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 87,
    "traits": [
      "Defender"
    ],
    "role": "Star"
  },
  {
    "id": "wc_croatia_2022_mateo_kovacic",
    "name": "Mateo Kovačić",
    "nation": "Croatia",
    "club": "Croatia",
    "season": "2022 National Team",
    "seasonId": "wc_croatia_2022",
    "year": 2022,
    "positions": [
      "CM"
    ],
    "rating": 86,
    "traits": [
      "Press Resistant"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2010_diego_forlan",
    "name": "Diego Forlán",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2010 National Team",
    "seasonId": "wc_uruguay_2010",
    "year": 2010,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 91,
    "traits": [
      "Golden Ball"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_uruguay_2010_luis_suarez",
    "name": "Luis Suárez",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2010 National Team",
    "seasonId": "wc_uruguay_2010",
    "year": 2010,
    "positions": [
      "ST"
    ],
    "rating": 90,
    "traits": [
      "Chaos Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_uruguay_2010_edinson_cavani",
    "name": "Edinson Cavani",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2010 National Team",
    "seasonId": "wc_uruguay_2010",
    "year": 2010,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 88,
    "traits": [
      "Workrate"
    ],
    "role": "Star"
  },
  {
    "id": "wc_uruguay_2010_diego_godin",
    "name": "Diego Godín",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2010 National Team",
    "seasonId": "wc_uruguay_2010",
    "year": 2010,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2010_fernando_muslera",
    "name": "Fernando Muslera",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2010 National Team",
    "seasonId": "wc_uruguay_2010",
    "year": 2010,
    "positions": [
      "GK"
    ],
    "rating": 85,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2010_diego_lugano",
    "name": "Diego Lugano",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2010 National Team",
    "seasonId": "wc_uruguay_2010",
    "year": 2010,
    "positions": [
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2018_jose_maria_gimenez",
    "name": "José María Giménez",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2018 National Team",
    "seasonId": "wc_uruguay_2018",
    "year": 2018,
    "positions": [
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2018_rodrigo_bentancur",
    "name": "Rodrigo Bentancur",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2018 National Team",
    "seasonId": "wc_uruguay_2018",
    "year": 2018,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Carrier"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_uruguay_2022_federico_valverde",
    "name": "Federico Valverde",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2022 National Team",
    "seasonId": "wc_uruguay_2022",
    "year": 2022,
    "positions": [
      "CM",
      "RW"
    ],
    "rating": 89,
    "traits": [
      "Engine"
    ],
    "role": "Star"
  },
  {
    "id": "wc_uruguay_2022_ronald_araujo",
    "name": "Ronald Araújo",
    "nation": "Uruguay",
    "club": "Uruguay",
    "season": "2022 National Team",
    "seasonId": "wc_uruguay_2022",
    "year": 2022,
    "positions": [
      "CB",
      "RB"
    ],
    "rating": 88,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2018_medhi_benatia",
    "name": "Medhi Benatia",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2018 National Team",
    "seasonId": "wc_morocco_2018",
    "year": 2018,
    "positions": [
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2018_nordin_amrabat",
    "name": "Nordin Amrabat",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2018 National Team",
    "seasonId": "wc_morocco_2018",
    "year": 2018,
    "positions": [
      "RW"
    ],
    "rating": 80,
    "traits": [
      "Workrate"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_morocco_2022_yassine_bounou",
    "name": "Yassine Bounou",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2022 National Team",
    "seasonId": "wc_morocco_2022",
    "year": 2022,
    "positions": [
      "GK"
    ],
    "rating": 87,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2022_achraf_hakimi",
    "name": "Achraf Hakimi",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2022 National Team",
    "seasonId": "wc_morocco_2022",
    "year": 2022,
    "positions": [
      "RB",
      "RWB"
    ],
    "rating": 89,
    "traits": [
      "Overlap"
    ],
    "role": "Star"
  },
  {
    "id": "wc_morocco_2022_romain_saiss",
    "name": "Romain Saïss",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2022 National Team",
    "seasonId": "wc_morocco_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2022_nayef_aguerd",
    "name": "Nayef Aguerd",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2022 National Team",
    "seasonId": "wc_morocco_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2022_sofyan_amrabat",
    "name": "Sofyan Amrabat",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2022 National Team",
    "seasonId": "wc_morocco_2022",
    "year": 2022,
    "positions": [
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Destroyer"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2022_azzedine_ounahi",
    "name": "Azzedine Ounahi",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2022 National Team",
    "seasonId": "wc_morocco_2022",
    "year": 2022,
    "positions": [
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Breakout"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2022_hakim_ziyech",
    "name": "Hakim Ziyech",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2022 National Team",
    "seasonId": "wc_morocco_2022",
    "year": 2022,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 85,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_morocco_2022_youssef_en_nesyri",
    "name": "Youssef En-Nesyri",
    "nation": "Morocco",
    "club": "Morocco",
    "season": "2022 National Team",
    "seasonId": "wc_morocco_2022",
    "year": 2022,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Header"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2002_el_hadji_diouf",
    "name": "El Hadji Diouf",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2002 National Team",
    "seasonId": "wc_senegal_2002",
    "year": 2002,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Chaos"
    ],
    "role": "Star"
  },
  {
    "id": "wc_senegal_2002_khalilou_fadiga",
    "name": "Khalilou Fadiga",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2002 National Team",
    "seasonId": "wc_senegal_2002",
    "year": 2002,
    "positions": [
      "LM",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2002_papa_bouba_diop",
    "name": "Papa Bouba Diop",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2002 National Team",
    "seasonId": "wc_senegal_2002",
    "year": 2002,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2002_henri_camara",
    "name": "Henri Camara",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2002 National Team",
    "seasonId": "wc_senegal_2002",
    "year": 2002,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 82,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2002_ferdinand_coly",
    "name": "Ferdinand Coly",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2002 National Team",
    "seasonId": "wc_senegal_2002",
    "year": 2002,
    "positions": [
      "RB"
    ],
    "rating": 80,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2022_sadio_mane",
    "name": "Sadio Mané",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2022 National Team",
    "seasonId": "wc_senegal_2022",
    "year": 2022,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 90,
    "traits": [
      "Clutch"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_senegal_2022_kalidou_koulibaly",
    "name": "Kalidou Koulibaly",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2022 National Team",
    "seasonId": "wc_senegal_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2022_edouard_mendy",
    "name": "Édouard Mendy",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2022 National Team",
    "seasonId": "wc_senegal_2022",
    "year": 2022,
    "positions": [
      "GK"
    ],
    "rating": 85,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_senegal_2022_idrissa_gueye",
    "name": "Idrissa Gueye",
    "nation": "Senegal",
    "club": "Senegal",
    "season": "2022 National Team",
    "seasonId": "wc_senegal_2022",
    "year": 2022,
    "positions": [
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2002_hidetoshi_nakata",
    "name": "Hidetoshi Nakata",
    "nation": "Japan",
    "club": "Japan",
    "season": "2002 National Team",
    "seasonId": "wc_japan_2002",
    "year": 2002,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 87,
    "traits": [
      "Icon"
    ],
    "role": "Star"
  },
  {
    "id": "wc_japan_2002_junichi_inamoto",
    "name": "Junichi Inamoto",
    "nation": "Japan",
    "club": "Japan",
    "season": "2002 National Team",
    "seasonId": "wc_japan_2002",
    "year": 2002,
    "positions": [
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2002_shinji_ono",
    "name": "Shinji Ono",
    "nation": "Japan",
    "club": "Japan",
    "season": "2002 National Team",
    "seasonId": "wc_japan_2002",
    "year": 2002,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Technician"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2002_yoshikatsu_kawaguchi",
    "name": "Yoshikatsu Kawaguchi",
    "nation": "Japan",
    "club": "Japan",
    "season": "2002 National Team",
    "seasonId": "wc_japan_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 81,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2010_keisuke_honda",
    "name": "Keisuke Honda",
    "nation": "Japan",
    "club": "Japan",
    "season": "2010 National Team",
    "seasonId": "wc_japan_2010",
    "year": 2010,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 85,
    "traits": [
      "Free Kick"
    ],
    "role": "Star"
  },
  {
    "id": "wc_japan_2010_yasuhito_endo",
    "name": "Yasuhito Endo",
    "nation": "Japan",
    "club": "Japan",
    "season": "2010 National Team",
    "seasonId": "wc_japan_2010",
    "year": 2010,
    "positions": [
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Pass Master"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2010_makoto_hasebe",
    "name": "Makoto Hasebe",
    "nation": "Japan",
    "club": "Japan",
    "season": "2010 National Team",
    "seasonId": "wc_japan_2010",
    "year": 2010,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2022_kaoru_mitoma",
    "name": "Kaoru Mitoma",
    "nation": "Japan",
    "club": "Japan",
    "season": "2022 National Team",
    "seasonId": "wc_japan_2022",
    "year": 2022,
    "positions": [
      "LW"
    ],
    "rating": 86,
    "traits": [
      "Dribbler"
    ],
    "role": "Star"
  },
  {
    "id": "wc_japan_2022_takefusa_kubo",
    "name": "Takefusa Kubo",
    "nation": "Japan",
    "club": "Japan",
    "season": "2022 National Team",
    "seasonId": "wc_japan_2022",
    "year": 2022,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 85,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2022_wataru_endo",
    "name": "Wataru Endo",
    "nation": "Japan",
    "club": "Japan",
    "season": "2022 National Team",
    "seasonId": "wc_japan_2022",
    "year": 2022,
    "positions": [
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_japan_2022_ritsu_doan",
    "name": "Ritsu Doan",
    "nation": "Japan",
    "club": "Japan",
    "season": "2022 National Team",
    "seasonId": "wc_japan_2022",
    "year": 2022,
    "positions": [
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Clutch"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2002_hong_myung_bo",
    "name": "Hong Myung-bo",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2002 National Team",
    "seasonId": "wc_south_korea_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Sweeper"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_south_korea_2002_park_ji_sung",
    "name": "Park Ji-sung",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2002 National Team",
    "seasonId": "wc_south_korea_2002",
    "year": 2002,
    "positions": [
      "CM",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Engine"
    ],
    "role": "Star"
  },
  {
    "id": "wc_south_korea_2002_ahn_jung_hwan",
    "name": "Ahn Jung-hwan",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2002 National Team",
    "seasonId": "wc_south_korea_2002",
    "year": 2002,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Clutch"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2002_lee_woon_jae",
    "name": "Lee Woon-jae",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2002 National Team",
    "seasonId": "wc_south_korea_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2010_lee_chung_yong",
    "name": "Lee Chung-yong",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2010 National Team",
    "seasonId": "wc_south_korea_2010",
    "year": 2010,
    "positions": [
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2010_ki_sung_yueng",
    "name": "Ki Sung-yueng",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2010 National Team",
    "seasonId": "wc_south_korea_2010",
    "year": 2010,
    "positions": [
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Passer"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2022_son_heung_min",
    "name": "Son Heung-min",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2022 National Team",
    "seasonId": "wc_south_korea_2022",
    "year": 2022,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 90,
    "traits": [
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_south_korea_2022_kim_min_jae",
    "name": "Kim Min-jae",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2022 National Team",
    "seasonId": "wc_south_korea_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 88,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_south_korea_2022_lee_kang_in",
    "name": "Lee Kang-in",
    "nation": "South Korea",
    "club": "South Korea",
    "season": "2022 National Team",
    "seasonId": "wc_south_korea_2022",
    "year": 2022,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2002_jon_dahl_tomasson",
    "name": "Jon Dahl Tomasson",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2002 National Team",
    "seasonId": "wc_denmark_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_denmark_2002_thomas_srensen",
    "name": "Thomas Sørensen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2002 National Team",
    "seasonId": "wc_denmark_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2002_dennis_rommedahl",
    "name": "Dennis Rommedahl",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2002 National Team",
    "seasonId": "wc_denmark_2002",
    "year": 2002,
    "positions": [
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2002_jesper_grnkjr",
    "name": "Jesper Grønkjær",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2002 National Team",
    "seasonId": "wc_denmark_2002",
    "year": 2002,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2018_christian_eriksen",
    "name": "Christian Eriksen",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2018 National Team",
    "seasonId": "wc_denmark_2018",
    "year": 2018,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 88,
    "traits": [
      "Playmaker"
    ],
    "role": "Star"
  },
  {
    "id": "wc_denmark_2018_kasper_schmeichel",
    "name": "Kasper Schmeichel",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2018 National Team",
    "seasonId": "wc_denmark_2018",
    "year": 2018,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2018_simon_kjr",
    "name": "Simon Kjær",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2018 National Team",
    "seasonId": "wc_denmark_2018",
    "year": 2018,
    "positions": [
      "CB"
    ],
    "rating": 85,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2018_thomas_delaney",
    "name": "Thomas Delaney",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2018 National Team",
    "seasonId": "wc_denmark_2018",
    "year": 2018,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 83,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2022_pierre_emile_hjbjerg",
    "name": "Pierre-Emile Højbjerg",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2022 National Team",
    "seasonId": "wc_denmark_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_denmark_2022_joakim_mhle",
    "name": "Joakim Mæhle",
    "nation": "Denmark",
    "club": "Denmark",
    "season": "2022 National Team",
    "seasonId": "wc_denmark_2022",
    "year": 2022,
    "positions": [
      "LWB",
      "RB"
    ],
    "rating": 83,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2002_jerzy_dudek",
    "name": "Jerzy Dudek",
    "nation": "Poland",
    "club": "Poland",
    "season": "2002 National Team",
    "seasonId": "wc_poland_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Keeper"
    ],
    "role": "Star"
  },
  {
    "id": "wc_poland_2002_emmanuel_olisadebe",
    "name": "Emmanuel Olisadebe",
    "nation": "Poland",
    "club": "Poland",
    "season": "2002 National Team",
    "seasonId": "wc_poland_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2002_tomasz_hajto",
    "name": "Tomasz Hajto",
    "nation": "Poland",
    "club": "Poland",
    "season": "2002 National Team",
    "seasonId": "wc_poland_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2016_robert_lewandowski",
    "name": "Robert Lewandowski",
    "nation": "Poland",
    "club": "Poland",
    "season": "2016 National Team",
    "seasonId": "wc_poland_2016",
    "year": 2016,
    "positions": [
      "ST"
    ],
    "rating": 92,
    "traits": [
      "Finisher"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_poland_2016_jakub_baszczykowski",
    "name": "Jakub Błaszczykowski",
    "nation": "Poland",
    "club": "Poland",
    "season": "2016 National Team",
    "seasonId": "wc_poland_2016",
    "year": 2016,
    "positions": [
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Workrate"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2016_kamil_glik",
    "name": "Kamil Glik",
    "nation": "Poland",
    "club": "Poland",
    "season": "2016 National Team",
    "seasonId": "wc_poland_2016",
    "year": 2016,
    "positions": [
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2022_wojciech_szczesny",
    "name": "Wojciech Szczęsny",
    "nation": "Poland",
    "club": "Poland",
    "season": "2022 National Team",
    "seasonId": "wc_poland_2022",
    "year": 2022,
    "positions": [
      "GK"
    ],
    "rating": 87,
    "traits": [
      "Penalty Save"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2022_piotr_zielinski",
    "name": "Piotr Zieliński",
    "nation": "Poland",
    "club": "Poland",
    "season": "2022 National Team",
    "seasonId": "wc_poland_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 85,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_poland_2022_arkadiusz_milik",
    "name": "Arkadiusz Milik",
    "nation": "Poland",
    "club": "Poland",
    "season": "2022 National Team",
    "seasonId": "wc_poland_2022",
    "year": 2022,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_norway_2002_ole_gunnar_solskjr",
    "name": "Ole Gunnar Solskjær",
    "nation": "Norway",
    "club": "Norway",
    "season": "2002 National Team",
    "seasonId": "wc_norway_2002",
    "year": 2002,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Clutch"
    ],
    "role": "Star"
  },
  {
    "id": "wc_norway_2002_john_arne_riise",
    "name": "John Arne Riise",
    "nation": "Norway",
    "club": "Norway",
    "season": "2002 National Team",
    "seasonId": "wc_norway_2002",
    "year": 2002,
    "positions": [
      "LB",
      "LM"
    ],
    "rating": 84,
    "traits": [
      "Long Shot"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2002_john_carew",
    "name": "John Carew",
    "nation": "Norway",
    "club": "Norway",
    "season": "2002 National Team",
    "seasonId": "wc_norway_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Target Man"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2002_tore_andre_flo",
    "name": "Tore André Flo",
    "nation": "Norway",
    "club": "Norway",
    "season": "2002 National Team",
    "seasonId": "wc_norway_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Classic"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2022_erling_haaland",
    "name": "Erling Haaland",
    "nation": "Norway",
    "club": "Norway",
    "season": "2022 National Team",
    "seasonId": "wc_norway_2022",
    "year": 2022,
    "positions": [
      "ST"
    ],
    "rating": 94,
    "traits": [
      "Robot Striker"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_norway_2022_martin_degaard",
    "name": "Martin Ødegaard",
    "nation": "Norway",
    "club": "Norway",
    "season": "2022 National Team",
    "seasonId": "wc_norway_2022",
    "year": 2022,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 90,
    "traits": [
      "Playmaker"
    ],
    "role": "Star"
  },
  {
    "id": "wc_norway_2022_alexander_srloth",
    "name": "Alexander Sørloth",
    "nation": "Norway",
    "club": "Norway",
    "season": "2022 National Team",
    "seasonId": "wc_norway_2022",
    "year": 2022,
    "positions": [
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Target Man"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_norway_2026_oscar_bobb",
    "name": "Oscar Bobb",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 82,
    "traits": [
      "Wonderkid"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_norway_2026_antonio_nusa",
    "name": "Antonio Nusa",
    "nation": "Norway",
    "club": "Norway",
    "season": "2026 National Team",
    "seasonId": "wc_norway_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 81,
    "traits": [
      "Pace"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_egypt_2010_mohamed_aboutrika",
    "name": "Mohamed Aboutrika",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2010 National Team",
    "seasonId": "wc_egypt_2010",
    "year": 2010,
    "positions": [
      "CAM"
    ],
    "rating": 86,
    "traits": [
      "Icon"
    ],
    "role": "Star"
  },
  {
    "id": "wc_egypt_2010_mohamed_zidan",
    "name": "Mohamed Zidan",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2010 National Team",
    "seasonId": "wc_egypt_2010",
    "year": 2010,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 83,
    "traits": [
      "Flair"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2010_ahmed_hassan",
    "name": "Ahmed Hassan",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2010 National Team",
    "seasonId": "wc_egypt_2010",
    "year": 2010,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2010_essam_el_hadary",
    "name": "Essam El-Hadary",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2010 National Team",
    "seasonId": "wc_egypt_2010",
    "year": 2010,
    "positions": [
      "GK"
    ],
    "rating": 83,
    "traits": [
      "Legend"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_egypt_2018_mohamed_salah",
    "name": "Mohamed Salah",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2018 National Team",
    "seasonId": "wc_egypt_2018",
    "year": 2018,
    "positions": [
      "RW",
      "ST"
    ],
    "rating": 91,
    "traits": [
      "Left Foot"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_egypt_2018_mohamed_elneny",
    "name": "Mohamed Elneny",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2018 National Team",
    "seasonId": "wc_egypt_2018",
    "year": 2018,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 82,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2018_trezeguet",
    "name": "Trézéguet",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2018 National Team",
    "seasonId": "wc_egypt_2018",
    "year": 2018,
    "positions": [
      "LW"
    ],
    "rating": 81,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_egypt_2018_ahmed_hegazi",
    "name": "Ahmed Hegazi",
    "nation": "Egypt",
    "club": "Egypt",
    "season": "2018 National Team",
    "seasonId": "wc_egypt_2018",
    "year": 2018,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2002_landon_donovan",
    "name": "Landon Donovan",
    "nation": "United States",
    "club": "United States",
    "season": "2002 National Team",
    "seasonId": "wc_united_states_2002",
    "year": 2002,
    "positions": [
      "CAM",
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Pace"
    ],
    "role": "Star"
  },
  {
    "id": "wc_united_states_2002_brian_mcbride",
    "name": "Brian McBride",
    "nation": "United States",
    "club": "United States",
    "season": "2002 National Team",
    "seasonId": "wc_united_states_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Target Man"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2002_brad_friedel",
    "name": "Brad Friedel",
    "nation": "United States",
    "club": "United States",
    "season": "2002 National Team",
    "seasonId": "wc_united_states_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 85,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2002_claudio_reyna",
    "name": "Claudio Reyna",
    "nation": "United States",
    "club": "United States",
    "season": "2002 National Team",
    "seasonId": "wc_united_states_2002",
    "year": 2002,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2002_damarcus_beasley",
    "name": "DaMarcus Beasley",
    "nation": "United States",
    "club": "United States",
    "season": "2002 National Team",
    "seasonId": "wc_united_states_2002",
    "year": 2002,
    "positions": [
      "LW",
      "LB"
    ],
    "rating": 82,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2010_clint_dempsey",
    "name": "Clint Dempsey",
    "nation": "United States",
    "club": "United States",
    "season": "2010 National Team",
    "seasonId": "wc_united_states_2010",
    "year": 2010,
    "positions": [
      "CAM",
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Clutch"
    ],
    "role": "Star"
  },
  {
    "id": "wc_united_states_2010_tim_howard",
    "name": "Tim Howard",
    "nation": "United States",
    "club": "United States",
    "season": "2010 National Team",
    "seasonId": "wc_united_states_2010",
    "year": 2010,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Shot Stopper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2010_michael_bradley",
    "name": "Michael Bradley",
    "nation": "United States",
    "club": "United States",
    "season": "2010 National Team",
    "seasonId": "wc_united_states_2010",
    "year": 2010,
    "positions": [
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_christian_pulisic",
    "name": "Christian Pulisic",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_united_states_2026_weston_mckennie",
    "name": "Weston McKennie",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_united_states_2026_tyler_adams",
    "name": "Tyler Adams",
    "nation": "United States",
    "club": "United States",
    "season": "2026 National Team",
    "seasonId": "wc_united_states_2026",
    "year": 2026,
    "positions": [
      "CDM"
    ],
    "rating": 83,
    "traits": [
      "Ball Winner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2006_rafael_marquez",
    "name": "Rafael Márquez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2006 National Team",
    "seasonId": "wc_mexico_2006",
    "year": 2006,
    "positions": [
      "CB",
      "CDM"
    ],
    "rating": 88,
    "traits": [
      "Leader"
    ],
    "role": "Star"
  },
  {
    "id": "wc_mexico_2006_oswaldo_sanchez",
    "name": "Oswaldo Sánchez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2006 National Team",
    "seasonId": "wc_mexico_2006",
    "year": 2006,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2006_jared_borgetti",
    "name": "Jared Borgetti",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2006 National Team",
    "seasonId": "wc_mexico_2006",
    "year": 2006,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Header"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2014_guillermo_ochoa",
    "name": "Guillermo Ochoa",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2014 National Team",
    "seasonId": "wc_mexico_2014",
    "year": 2014,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "World Cup Mode"
    ],
    "role": "Star"
  },
  {
    "id": "wc_mexico_2014_andres_guardado",
    "name": "Andrés Guardado",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2014 National Team",
    "seasonId": "wc_mexico_2014",
    "year": 2014,
    "positions": [
      "CM",
      "LM"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2014_giovani_dos_santos",
    "name": "Giovani dos Santos",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2014 National Team",
    "seasonId": "wc_mexico_2014",
    "year": 2014,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 83,
    "traits": [
      "Flair"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2014_javier_hernandez",
    "name": "Javier Hernández",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2014 National Team",
    "seasonId": "wc_mexico_2014",
    "year": 2014,
    "positions": [
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Poacher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2022_hirving_lozano",
    "name": "Hirving Lozano",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2022 National Team",
    "seasonId": "wc_mexico_2022",
    "year": 2022,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_mexico_2022_edson_alvarez",
    "name": "Edson Álvarez",
    "nation": "Mexico",
    "club": "Mexico",
    "season": "2022 National Team",
    "seasonId": "wc_mexico_2022",
    "year": 2022,
    "positions": [
      "CDM",
      "CB"
    ],
    "rating": 84,
    "traits": [
      "Anchor"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2006_stephen_appiah",
    "name": "Stephen Appiah",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2006 National Team",
    "seasonId": "wc_ghana_2006",
    "year": 2006,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2006_michael_essien",
    "name": "Michael Essien",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2006 National Team",
    "seasonId": "wc_ghana_2006",
    "year": 2006,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 90,
    "traits": [
      "Engine"
    ],
    "role": "Star"
  },
  {
    "id": "wc_ghana_2006_asamoah_gyan",
    "name": "Asamoah Gyan",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2006 National Team",
    "seasonId": "wc_ghana_2006",
    "year": 2006,
    "positions": [
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2006_sulley_muntari",
    "name": "Sulley Muntari",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2006 National Team",
    "seasonId": "wc_ghana_2006",
    "year": 2006,
    "positions": [
      "CM",
      "LM"
    ],
    "rating": 84,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2010_kevin_prince_boateng",
    "name": "Kevin-Prince Boateng",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2010 National Team",
    "seasonId": "wc_ghana_2010",
    "year": 2010,
    "positions": [
      "CAM",
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2010_richard_kingson",
    "name": "Richard Kingson",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2010 National Team",
    "seasonId": "wc_ghana_2010",
    "year": 2010,
    "positions": [
      "GK"
    ],
    "rating": 80,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_ghana_2022_mohammed_kudus",
    "name": "Mohammed Kudus",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2022 National Team",
    "seasonId": "wc_ghana_2022",
    "year": 2022,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 86,
    "traits": [
      "Flair"
    ],
    "role": "Star"
  },
  {
    "id": "wc_ghana_2022_thomas_partey",
    "name": "Thomas Partey",
    "nation": "Ghana",
    "club": "Ghana",
    "season": "2022 National Team",
    "seasonId": "wc_ghana_2022",
    "year": 2022,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 85,
    "traits": [
      "Anchor"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2006_alexander_frei",
    "name": "Alexander Frei",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2006 National Team",
    "seasonId": "wc_switzerland_2006",
    "year": 2006,
    "positions": [
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_switzerland_2006_philippe_senderos",
    "name": "Philippe Senderos",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2006 National Team",
    "seasonId": "wc_switzerland_2006",
    "year": 2006,
    "positions": [
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2006_tranquillo_barnetta",
    "name": "Tranquillo Barnetta",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2006 National Team",
    "seasonId": "wc_switzerland_2006",
    "year": 2006,
    "positions": [
      "LM",
      "CM"
    ],
    "rating": 82,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2006_valon_behrami",
    "name": "Valon Behrami",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2006 National Team",
    "seasonId": "wc_switzerland_2006",
    "year": 2006,
    "positions": [
      "CM",
      "RB"
    ],
    "rating": 81,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2018_xherdan_shaqiri",
    "name": "Xherdan Shaqiri",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2018 National Team",
    "seasonId": "wc_switzerland_2018",
    "year": 2018,
    "positions": [
      "RW",
      "CAM"
    ],
    "rating": 85,
    "traits": [
      "Big Game"
    ],
    "role": "Star"
  },
  {
    "id": "wc_switzerland_2018_granit_xhaka",
    "name": "Granit Xhaka",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2018 National Team",
    "seasonId": "wc_switzerland_2018",
    "year": 2018,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 85,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2018_yann_sommer",
    "name": "Yann Sommer",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2018 National Team",
    "seasonId": "wc_switzerland_2018",
    "year": 2018,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_switzerland_2018_ricardo_rodriguez",
    "name": "Ricardo Rodríguez",
    "nation": "Switzerland",
    "club": "Switzerland",
    "season": "2018 National Team",
    "seasonId": "wc_switzerland_2018",
    "year": 2018,
    "positions": [
      "LB"
    ],
    "rating": 83,
    "traits": [
      "Left Foot"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2002_rustu_recber",
    "name": "Rüştü Reçber",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2002 National Team",
    "seasonId": "wc_turkey_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Icon"
    ],
    "role": "Star"
  },
  {
    "id": "wc_turkey_2002_hakan_sukur",
    "name": "Hakan Şükür",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2002 National Team",
    "seasonId": "wc_turkey_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 86,
    "traits": [
      "Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_turkey_2002_hasan_sas",
    "name": "Hasan Şaş",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2002 National Team",
    "seasonId": "wc_turkey_2002",
    "year": 2002,
    "positions": [
      "LW",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Flair"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2002_emre_belozoglu",
    "name": "Emre Belözoğlu",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2002 National Team",
    "seasonId": "wc_turkey_2002",
    "year": 2002,
    "positions": [
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Playmaker"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2002_yldray_basturk",
    "name": "Yıldıray Baştürk",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2002 National Team",
    "seasonId": "wc_turkey_2002",
    "year": 2002,
    "positions": [
      "CAM"
    ],
    "rating": 83,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_turkey_2024_hakan_calhanoglu",
    "name": "Hakan Çalhanoğlu",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2024 National Team",
    "seasonId": "wc_turkey_2024",
    "year": 2024,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 87,
    "traits": [
      "Pass Master"
    ],
    "role": "Star"
  },
  {
    "id": "wc_turkey_2024_arda_guler",
    "name": "Arda Güler",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2024 National Team",
    "seasonId": "wc_turkey_2024",
    "year": 2024,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 85,
    "traits": [
      "Wonderkid"
    ],
    "role": "Star"
  },
  {
    "id": "wc_turkey_2024_kenan_yldz",
    "name": "Kenan Yıldız",
    "nation": "Turkey",
    "club": "Turkey",
    "season": "2024 National Team",
    "seasonId": "wc_turkey_2024",
    "year": 2024,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Impact"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_serbia_2010_nemanja_vidic",
    "name": "Nemanja Vidić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2010 National Team",
    "seasonId": "wc_serbia_2010",
    "year": 2010,
    "positions": [
      "CB"
    ],
    "rating": 91,
    "traits": [
      "Wall"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_serbia_2010_dejan_stankovic",
    "name": "Dejan Stanković",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2010 National Team",
    "seasonId": "wc_serbia_2010",
    "year": 2010,
    "positions": [
      "CM"
    ],
    "rating": 86,
    "traits": [
      "Leader"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2010_branislav_ivanovic",
    "name": "Branislav Ivanović",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2010 National Team",
    "seasonId": "wc_serbia_2010",
    "year": 2010,
    "positions": [
      "RB",
      "CB"
    ],
    "rating": 86,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2010_nikola_zigic",
    "name": "Nikola Žigić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2010 National Team",
    "seasonId": "wc_serbia_2010",
    "year": 2010,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Target Man"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2010_aleksandar_kolarov",
    "name": "Aleksandar Kolarov",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2010 National Team",
    "seasonId": "wc_serbia_2010",
    "year": 2010,
    "positions": [
      "LB"
    ],
    "rating": 84,
    "traits": [
      "Left Foot"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2022_dusan_tadic",
    "name": "Dušan Tadić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2022 National Team",
    "seasonId": "wc_serbia_2022",
    "year": 2022,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 85,
    "traits": [
      "Creator"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_serbia_2022_dusan_vlahovic",
    "name": "Dušan Vlahović",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2022 National Team",
    "seasonId": "wc_serbia_2022",
    "year": 2022,
    "positions": [
      "ST"
    ],
    "rating": 85,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_serbia_2022_sergej_milinkovic_savic",
    "name": "Sergej Milinković-Savić",
    "nation": "Serbia",
    "club": "Serbia",
    "season": "2022 National Team",
    "seasonId": "wc_serbia_2022",
    "year": 2022,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 86,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2014_james_rodriguez",
    "name": "James Rodríguez",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2014 National Team",
    "seasonId": "wc_colombia_2014",
    "year": 2014,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 90,
    "traits": [
      "Golden Boot"
    ],
    "role": "Star"
  },
  {
    "id": "wc_colombia_2014_radamel_falcao",
    "name": "Radamel Falcao",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2014 National Team",
    "seasonId": "wc_colombia_2014",
    "year": 2014,
    "positions": [
      "ST"
    ],
    "rating": 88,
    "traits": [
      "Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_colombia_2014_juan_cuadrado",
    "name": "Juan Cuadrado",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2014 National Team",
    "seasonId": "wc_colombia_2014",
    "year": 2014,
    "positions": [
      "RW",
      "RWB"
    ],
    "rating": 86,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2014_david_ospina",
    "name": "David Ospina",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2014 National Team",
    "seasonId": "wc_colombia_2014",
    "year": 2014,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_colombia_2014_mario_yepes",
    "name": "Mario Yepes",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2014 National Team",
    "seasonId": "wc_colombia_2014",
    "year": 2014,
    "positions": [
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Leader"
    ],
    "role": "Veteran"
  },
  {
    "id": "wc_colombia_2014_carlos_bacca",
    "name": "Carlos Bacca",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2014 National Team",
    "seasonId": "wc_colombia_2014",
    "year": 2014,
    "positions": [
      "ST"
    ],
    "rating": 83,
    "traits": [
      "Finisher"
    ],
    "role": "Squad"
  },
  {
    "id": "wc_colombia_2022_luis_diaz",
    "name": "Luis Díaz",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2022 National Team",
    "seasonId": "wc_colombia_2022",
    "year": 2022,
    "positions": [
      "LW"
    ],
    "rating": 87,
    "traits": [
      "Direct"
    ],
    "role": "Star"
  },
  {
    "id": "wc_colombia_2022_davinson_sanchez",
    "name": "Davinson Sánchez",
    "nation": "Colombia",
    "club": "Colombia",
    "season": "2022 National Team",
    "seasonId": "wc_colombia_2022",
    "year": 2022,
    "positions": [
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2014_keylor_navas",
    "name": "Keylor Navas",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2014 National Team",
    "seasonId": "wc_costa_rica_2014",
    "year": 2014,
    "positions": [
      "GK"
    ],
    "rating": 89,
    "traits": [
      "Hero Mode"
    ],
    "role": "Star"
  },
  {
    "id": "wc_costa_rica_2014_bryan_ruiz",
    "name": "Bryan Ruiz",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2014 National Team",
    "seasonId": "wc_costa_rica_2014",
    "year": 2014,
    "positions": [
      "CAM",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2014_joel_campbell",
    "name": "Joel Campbell",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2014 National Team",
    "seasonId": "wc_costa_rica_2014",
    "year": 2014,
    "positions": [
      "ST",
      "RW"
    ],
    "rating": 82,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2014_celso_borges",
    "name": "Celso Borges",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2014 National Team",
    "seasonId": "wc_costa_rica_2014",
    "year": 2014,
    "positions": [
      "CM"
    ],
    "rating": 81,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2014_oscar_duarte",
    "name": "Óscar Duarte",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2014 National Team",
    "seasonId": "wc_costa_rica_2014",
    "year": 2014,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2014_giancarlo_gonzalez",
    "name": "Giancarlo González",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2014 National Team",
    "seasonId": "wc_costa_rica_2014",
    "year": 2014,
    "positions": [
      "CB"
    ],
    "rating": 80,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2022_francisco_calvo",
    "name": "Francisco Calvo",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2022 National Team",
    "seasonId": "wc_costa_rica_2022",
    "year": 2022,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 78,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_costa_rica_2022_jewison_bennette",
    "name": "Jewison Bennette",
    "nation": "Costa Rica",
    "club": "Costa Rica",
    "season": "2022 National Team",
    "seasonId": "wc_costa_rica_2022",
    "year": 2022,
    "positions": [
      "LW"
    ],
    "rating": 76,
    "traits": [
      "Impact"
    ],
    "role": "Impact"
  },
  {
    "id": "wc_georgia_2002_kakhaber_kaladze",
    "name": "Kakhaber Kaladze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2002 National Team",
    "seasonId": "wc_georgia_2002",
    "year": 2002,
    "positions": [
      "CB",
      "LB"
    ],
    "rating": 86,
    "traits": [
      "Defender"
    ],
    "role": "Star"
  },
  {
    "id": "wc_georgia_2002_shota_arveladze",
    "name": "Shota Arveladze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2002 National Team",
    "seasonId": "wc_georgia_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_georgia_2002_levan_kobiashvili",
    "name": "Levan Kobiashvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2002 National Team",
    "seasonId": "wc_georgia_2002",
    "year": 2002,
    "positions": [
      "LB",
      "LM"
    ],
    "rating": 82,
    "traits": [
      "Left Side"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2002_temuri_ketsbaia",
    "name": "Temuri Ketsbaia",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2002 National Team",
    "seasonId": "wc_georgia_2002",
    "year": 2002,
    "positions": [
      "CAM"
    ],
    "rating": 81,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2024_khvicha_kvaratskhelia",
    "name": "Khvicha Kvaratskhelia",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2024 National Team",
    "seasonId": "wc_georgia_2024",
    "year": 2024,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 89,
    "traits": [
      "Dribbler"
    ],
    "role": "Captain"
  },
  {
    "id": "wc_georgia_2024_giorgi_mamardashvili",
    "name": "Giorgi Mamardashvili",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2024 National Team",
    "seasonId": "wc_georgia_2024",
    "year": 2024,
    "positions": [
      "GK"
    ],
    "rating": 86,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2024_georges_mikautadze",
    "name": "Georges Mikautadze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2024 National Team",
    "seasonId": "wc_georgia_2024",
    "year": 2024,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Finisher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_georgia_2024_giorgi_chakvetadze",
    "name": "Giorgi Chakvetadze",
    "nation": "Georgia",
    "club": "Georgia",
    "season": "2024 National Team",
    "seasonId": "wc_georgia_2024",
    "year": 2024,
    "positions": [
      "CAM",
      "LW"
    ],
    "rating": 79,
    "traits": [
      "Creator"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2002_jay_jay_okocha",
    "name": "Jay-Jay Okocha",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2002 National Team",
    "seasonId": "wc_nigeria_2002",
    "year": 2002,
    "positions": [
      "CAM"
    ],
    "rating": 90,
    "traits": [
      "Flair"
    ],
    "role": "Legend"
  },
  {
    "id": "wc_nigeria_2002_nwankwo_kanu",
    "name": "Nwankwo Kanu",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2002 National Team",
    "seasonId": "wc_nigeria_2002",
    "year": 2002,
    "positions": [
      "ST",
      "CAM"
    ],
    "rating": 87,
    "traits": [
      "Silky"
    ],
    "role": "Star"
  },
  {
    "id": "wc_nigeria_2002_joseph_yobo",
    "name": "Joseph Yobo",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2002 National Team",
    "seasonId": "wc_nigeria_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2002_vincent_enyeama",
    "name": "Vincent Enyeama",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2002 National Team",
    "seasonId": "wc_nigeria_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 84,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2002_taribo_west",
    "name": "Taribo West",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2002 National Team",
    "seasonId": "wc_nigeria_2002",
    "year": 2002,
    "positions": [
      "CB"
    ],
    "rating": 82,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2014_ahmed_musa",
    "name": "Ahmed Musa",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2014 National Team",
    "seasonId": "wc_nigeria_2014",
    "year": 2014,
    "positions": [
      "LW",
      "ST"
    ],
    "rating": 84,
    "traits": [
      "Pace"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2014_john_obi_mikel",
    "name": "John Obi Mikel",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2014 National Team",
    "seasonId": "wc_nigeria_2014",
    "year": 2014,
    "positions": [
      "CDM",
      "CM"
    ],
    "rating": 84,
    "traits": [
      "Anchor"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2014_emmanuel_emenike",
    "name": "Emmanuel Emenike",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2014 National Team",
    "seasonId": "wc_nigeria_2014",
    "year": 2014,
    "positions": [
      "ST"
    ],
    "rating": 82,
    "traits": [
      "Power"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_nigeria_2022_victor_osimhen",
    "name": "Victor Osimhen",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2022 National Team",
    "seasonId": "wc_nigeria_2022",
    "year": 2022,
    "positions": [
      "ST"
    ],
    "rating": 89,
    "traits": [
      "Finisher"
    ],
    "role": "Star"
  },
  {
    "id": "wc_nigeria_2022_ademola_lookman",
    "name": "Ademola Lookman",
    "nation": "Nigeria",
    "club": "Nigeria",
    "season": "2022 National Team",
    "seasonId": "wc_nigeria_2022",
    "year": 2022,
    "positions": [
      "LW",
      "RW"
    ],
    "rating": 84,
    "traits": [
      "Dribbler"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2002_barry_ferguson",
    "name": "Barry Ferguson",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2002 National Team",
    "seasonId": "wc_scotland_2002",
    "year": 2002,
    "positions": [
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Captain"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2002_darren_fletcher",
    "name": "Darren Fletcher",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2002 National Team",
    "seasonId": "wc_scotland_2002",
    "year": 2002,
    "positions": [
      "CM",
      "CDM"
    ],
    "rating": 84,
    "traits": [
      "Engine"
    ],
    "role": "Star"
  },
  {
    "id": "wc_scotland_2002_kenny_miller",
    "name": "Kenny Miller",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2002 National Team",
    "seasonId": "wc_scotland_2002",
    "year": 2002,
    "positions": [
      "ST"
    ],
    "rating": 81,
    "traits": [
      "Runner"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2002_craig_gordon",
    "name": "Craig Gordon",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2002 National Team",
    "seasonId": "wc_scotland_2002",
    "year": 2002,
    "positions": [
      "GK"
    ],
    "rating": 82,
    "traits": [
      "Keeper"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2002_james_mcfadden",
    "name": "James McFadden",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2002 National Team",
    "seasonId": "wc_scotland_2002",
    "year": 2002,
    "positions": [
      "ST",
      "LW"
    ],
    "rating": 81,
    "traits": [
      "Flair"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2024_andrew_robertson",
    "name": "Andrew Robertson",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2024 National Team",
    "seasonId": "wc_scotland_2024",
    "year": 2024,
    "positions": [
      "LB",
      "LWB"
    ],
    "rating": 87,
    "traits": [
      "Captain"
    ],
    "role": "Star"
  },
  {
    "id": "wc_scotland_2024_scott_mctominay",
    "name": "Scott McTominay",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2024 National Team",
    "seasonId": "wc_scotland_2024",
    "year": 2024,
    "positions": [
      "CM",
      "CAM"
    ],
    "rating": 84,
    "traits": [
      "Box Crasher"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2024_john_mcginn",
    "name": "John McGinn",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2024 National Team",
    "seasonId": "wc_scotland_2024",
    "year": 2024,
    "positions": [
      "CM"
    ],
    "rating": 83,
    "traits": [
      "Engine"
    ],
    "role": "Starter"
  },
  {
    "id": "wc_scotland_2024_kieran_tierney",
    "name": "Kieran Tierney",
    "nation": "Scotland",
    "club": "Scotland",
    "season": "2024 National Team",
    "seasonId": "wc_scotland_2024",
    "year": 2024,
    "positions": [
      "LB",
      "CB"
    ],
    "rating": 83,
    "traits": [
      "Defender"
    ],
    "role": "Starter"
  }
];


const SPECIAL_ERA_YEARS = {
  'Lionel Messi': [2006, 2010, 2014, 2018, 2022, 2026],
  'Cristiano Ronaldo': [2006, 2010, 2014, 2018, 2022, 2026],
  'Neymar': [2014, 2018, 2022, 2026],
  'Kylian Mbappé': [2018, 2022, 2026],
  'Luka Modrić': [2014, 2018, 2022, 2026],
  'Robert Lewandowski': [2018, 2022, 2026],
  'Harry Kane': [2018, 2022, 2026],
  'Kevin De Bruyne': [2018, 2022, 2026],
  'Eden Hazard': [2014, 2018, 2022],
  'Son Heung-min': [2014, 2018, 2022, 2026],
  'Mohamed Salah': [2018, 2022, 2026],
  'Sadio Mané': [2018, 2022, 2026],
  'Luis Suárez': [2010, 2014, 2018, 2022],
  'Edinson Cavani': [2010, 2014, 2018, 2022],
  'Sergio Ramos': [2006, 2010, 2014, 2018],
  'Manuel Neuer': [2010, 2014, 2018, 2022],
  'Toni Kroos': [2010, 2014, 2018],
  'Thomas Müller': [2010, 2014, 2018, 2022],
  'Karim Benzema': [2014, 2022],
  'Andrés Iniesta': [2006, 2010, 2014, 2018],
  'Xavi': [2006, 2010, 2014],
  'Gianluigi Buffon': [2002, 2006, 2010, 2014, 2018],
  'Andrea Pirlo': [2002, 2006, 2010, 2014],
  'Wayne Rooney': [2006, 2010, 2014],
  'Zlatan Ibrahimović': [2002, 2006, 2018],
  'Keylor Navas': [2014, 2018, 2022],
  'Guillermo Ochoa': [2006, 2010, 2014, 2018, 2022],
  'Andrés Guardado': [2006, 2010, 2014, 2018, 2022],
  'Christian Pulisic': [2018, 2022, 2026],
  'Erling Haaland': [2022, 2026],
  'Martin Ødegaard': [2022, 2026],
  'Khvicha Kvaratskhelia': [2024, 2026],
};

function slugify(text=''){
  return String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase() || 'player';
}

function eraYearsForCurrentPlayer(player){
  if (SPECIAL_ERA_YEARS[player.name]) return SPECIAL_ERA_YEARS[player.name];
  if (player.year && player.year !== 2026) return [player.year];
  const traits = player.traits || [];
  if (traits.includes('Wonderkid') || player.role === 'Impact') return [2026];
  if (player.role === 'Veteran') return [2018, 2022, 2026];
  if (player.role === 'Captain' || player.role === 'Star' || player.rating >= 89) return [2022, 2026];
  if (player.role === 'Starter' || player.rating >= 84) return [2026];
  return [2026];
}

function withYear(player, year, index=0){
  const meta = META_BY_COUNTRY[player.nation] || REST_META;
  const ratingShift = year === 2026 ? 0 : year === 2022 ? -1 : year === 2018 ? -2 : year === 2014 ? -3 : year === 2010 ? -4 : -5;
  const rating = Math.max(70, Math.min(97, Number(player.rating || 78) + ratingShift));
  return {
    ...player,
    id: `wc_${slugify(player.nation)}_${year}_${slugify(player.name)}_${index}`,
    club: player.nation,
    season: `${year} National Team`,
    seasonId: `wc_${slugify(player.nation)}_${year}`,
    year,
    rating,
    nationId: meta.id,
    nationCode: meta.code,
    confed: meta.confed,
    nationTheme: meta.theme,
  };
}

function uniquePlayers(players=[]){
  const map = new Map();
  players.forEach((player) => {
    const key = `${player.name}__${player.nation}__${player.year}`;
    if (!map.has(key) || (player.rating || 0) > (map.get(key).rating || 0)) map.set(key, player);
  });
  return [...map.values()];
}

const CURRENT_POOL_WITH_ERAS = RAW_WORLD_CUP_PLAYERS.flatMap((player) =>
  eraYearsForCurrentPlayer(player).map((year, index) => withYear(player, year, index))
);

const HISTORICAL_POOL = HISTORICAL_WORLD_CUP_PLAYERS.map((player, index) => withYear(player, player.year || 2026, index));

export const worldCupPlayers = uniquePlayers([...CURRENT_POOL_WITH_ERAS, ...HISTORICAL_POOL]);
