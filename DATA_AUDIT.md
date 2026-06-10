# Data Audit — European Champions Draft

Last updated: 2026-06-10

## Tujuan
File ini buat ngunci kualitas data supaya pemain nggak nyasar club-season. Prinsipnya: **membership pemain harus benar dulu**, rating belakangan karena rating di game ini cuma balancing value, bukan rating resmi FIFA/FM/UEFA.

## Status Coverage
- Total club-season di game: **62**
- Total player card di game: **992**
- Season range aktif di era slider: otomatis ngikut data, sekarang sudah sampai **2025/26**.
- Current-squad pass: v5 sudah tambah banyak club 2025/26 tanpa List B besar-besaran; fokus core first-team / pemain yang relevan gameplay.

## Audit Rules
- **Verified** = player membership dicek dari halaman resmi UEFA/club atau sumber squad historis yang stabil.
- **Main-squad verified** = core first-team masuk; pemain List B/youth hanya sebagian bila relevan gameplay.
- **Needs secondary check** = sudah aman secara bola umum, tapi belum semua pemain dicek satu-satu ke sumber resmi di file ini.
- Posisi boleh multi-position kalau pemain memang commonly played di posisi itu; tetap harus masuk akal buat placement game.
- Rating tidak perlu diaudit sebagai fakta real-life; rating harus diaudit sebagai game balance.

## Club-season Inventory

| ID | Club | Season | Result/Type | Player cards | Audit status | Source note |
|---|---|---:|---|---:|---|---|
| `barca_2014_15` | Barcelona | 2014/15 | Winner | 14 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `real_2016_17` | Real Madrid | 2016/17 | Winner | 14 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `bayern_2012_13` | Bayern Munich | 2012/13 | Winner | 13 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `inter_2009_10` | Inter Milan | 2009/10 | Winner | 13 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `liverpool_2018_19` | Liverpool | 2018/19 | Winner | 13 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `chelsea_2011_12` | Chelsea | 2011/12 | Winner | 13 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `milan_2006_07` | AC Milan | 2006/07 | Winner | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `united_2007_08` | Manchester United | 2007/08 | Winner | 13 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `city_2022_23` | Manchester City | 2022/23 | Winner | 13 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `dortmund_2012_13` | Borussia Dortmund | 2012/13 | Finalist | 13 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `porto_2003_04` | Porto | 2003/04 | Winner | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `ajax_2018_19` | Ajax | 2018/19 | Semi-finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `juve_2016_17` | Juventus | 2016/17 | Finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `atleti_2015_16` | Atlético Madrid | 2015/16 | Finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `psg_2019_20` | PSG | 2019/20 | Finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `tottenham_2018_19` | Tottenham Hotspur | 2018/19 | Finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `monaco_2016_17` | Monaco | 2016/17 | Semi-finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `roma_2017_18` | Roma | 2017/18 | Semi-finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `lyon_2019_20` | Lyon | 2019/20 | Semi-finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `villarreal_2021_22` | Villarreal | 2021/22 | Semi-finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `napoli_2022_23` | Napoli | 2022/23 | Quarter-finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `arsenal_2005_06` | Arsenal | 2005/06 | Finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `valencia_2000_01` | Valencia | 2000/01 | Finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `leverkusen_2001_02` | Bayer Leverkusen | 2001/02 | Finalist | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `chelsea_2020_21` | Chelsea | 2020/21 | Winner | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `real_2021_22` | Real Madrid | 2021/22 | Winner | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `bayern_2019_20` | Bayern Munich | 2019/20 | Winner | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `real_2013_14` | Real Madrid | 2013/14 | Winner | 12 | Legacy batch — needs secondary check | TODO: add exact source URL / archived squad page |
| `real_2023_24` | Real Madrid | 2023/24 | Winner | 22 | Verified / source noted | Real Madrid official Champions League final squad: https://www.realmadrid.com/en-US/news/football/first-team/squad-call/convocatoria-del-real-madrid-para-la-final-de-la-champions-league-30-05-2024 |
| `dortmund_2023_24` | Borussia Dortmund | 2023/24 | Finalist | 21 | Needs secondary check | TODO: add exact source URL / archived squad page |
| `psg_2024_25` | Paris Saint-Germain | 2024/25 | Winner | 20 | Verified / source noted | UEFA final line-up/squad page + PSG season source; needs full official squad page backup |
| `inter_2024_25` | Inter Milan | 2024/25 | Finalist | 20 | Verified / source noted | UEFA final line-up/squad page + Inter season source; needs full official squad page backup |
| `barca_2024_25` | Barcelona | 2024/25 | Semi-finalist | 20 | Needs secondary check | TODO: add exact source URL / archived squad page |
| `arsenal_2024_25` | Arsenal | 2024/25 | Semi-finalist | 20 | Needs secondary check | TODO: add exact source URL / archived squad page |
| `psg_2025_26` | Paris Saint-Germain | 2025/26 | Current UCL squad | 22 | Main-squad verified | UEFA official squad page: https://www.uefa.com/uefachampionsleague/clubs/52747--paris/squad/ |
| `real_2025_26` | Real Madrid | 2025/26 | Current UCL squad | 24 | Main-squad verified | UEFA official squad page: https://www.uefa.com/uefachampionsleague/clubs/50051--real-madrid/squad/ |
| `barca_2025_26` | Barcelona | 2025/26 | Current UCL squad | 23 | Main-squad verified | UEFA official squad page: https://www.uefa.com/uefachampionsleague/clubs/50080--barcelona/squad/ |
| `bayern_2025_26` | Bayern Munich | 2025/26 | Current UCL squad | 22 | Main-squad verified | UEFA official squad page: https://www.uefa.com/uefachampionsleague/clubs/50037--bayern-munchen/squad/ |
| `city_2025_26` | Manchester City | 2025/26 | Current UCL squad | 24 | Main-squad verified | UEFA official squad page: https://www.uefa.com/uefachampionsleague/clubs/52919--man-city/squad/ |
| `liverpool_2025_26` | Liverpool | 2025/26 | Current UCL squad | 22 | Main-squad verified | UEFA official club page squad snapshot: https://www.uefa.com/uefachampionsleague/clubs/7889--liverpool/ |
| `chelsea_2025_26` | Chelsea | 2025/26 | Current UCL squad | 24 | Main-squad verified | UEFA official squad page: https://www.uefa.com/uefachampionsleague/clubs/52914--chelsea/squad/ |
| `leverkusen_2025_26` | Bayer Leverkusen | 2025/26 | Current UCL squad | 22 | Main-squad verified | UEFA official squad page: https://www.uefa.com/uefachampionsleague/clubs/50109--leverkusen/squad/ |

## Current 2025/26 Batch Notes

- **Paris Saint-Germain 2025/26**: core UEFA squad captured: Lucas Chevalier, Matvei Safonov, Achraf Hakimi, Marquinhos, Illia Zabarnyi, Lucas Hernández, Nuno Mendes, Willian Pacho, Fabián Ruiz, Vitinha, João Neves, Warren Zaïre-Emery, Khvicha Kvaratskhelia, Gonçalo Ramos, Ousmane Dembélé, Désiré Doué, Bradley Barcola, and selected List B/prospect cards.
- **Real Madrid 2025/26**: core UEFA squad captured: Courtois, Lunin, Carvajal, Militão, Alaba, Alexander-Arnold, Raúl Asencio, Álvaro Carreras, Rüdiger, Mendy, Huijsen, Bellingham, Camavinga, Valverde, Tchouaméni, Arda Güler, Vinícius, Mbappé, Rodrygo, Brahim, Mastantuono, and Gonzalo.
- **Barcelona 2025/26**: core UEFA squad captured: Joan García, Szczęsny, Cancelo, Balde, Araújo, Cubarsí, Christensen, Casadó, Koundé, Eric García, Gavi, Pedri, De Jong, Bernal, Ferran, Lewandowski, Yamal, Raphinha, Rashford, Fermín, Olmo, Bardghji.
- **Bayern 2025/26**: core UEFA squad captured: Neuer, Urbig, Upamecano, Kim, Tah, Ito, Guerreiro, Stanišić, Kimmich, Goretzka, Musiala, Olise, Davies, Bischof, Laimer, Pavlović, Gnabry, Kane, Jackson, Luis Díaz.
- **Man City 2025/26**: core UEFA squad captured: Trafford, Donnarumma, Rúben Dias, Stones, Aké, Guéhi, Aït-Nouri, Gvardiol, Khusanov, Rico Lewis, Reijnders, Kovačić, Cherki, Doku, Nico González, Rodri, Bernardo, Savinho, Matheus Nunes, Foden, Marmoush, Haaland, Semenyo.
- **Liverpool 2025/26**: core UEFA snapshot captured from UEFA club page: Alisson, Mamardashvili, Bradley, Frimpong, Gomez, Kerkez, Konaté, Mac Allister, Robertson, Salah, Szoboszlai, Van Dijk, Wirtz, Woodman, plus other core cards.
- **Chelsea 2025/26** and **Leverkusen 2025/26**: core first-team squad captured from UEFA squad pages; some List B players are intentionally skipped unless useful for gameplay.

## Known Gaps / Next Data Pass
- Full 36-team 2025/26 Champions League roster belum dimasukin semuanya. Yang sudah masuk adalah batch high-impact buat gameplay.
- Untuk batch historis 2000–2023, perlu pass kedua buat naruh source URL per club-season, terutama squad yang bukan winner/finalist.
- Untuk “complete squad” beneran, next pass idealnya generate dari UEFA squad page per club: include first team + List B, lalu tag `listB: true` biar bisa difilter di game.
- Tambahin `sourceUrls` field langsung di `seasons.js`, bukan cuma di markdown, supaya audit bisa tampil di admin/dev view.

## Data Quality Checklist
- [x] No duplicate player IDs
- [x] Era slider reaches 2025/26
- [x] Current 2025/26 selected squads added
- [x] Player cards include multi-position where useful
- [ ] Add source URL into every season object
- [ ] Add every UEFA 2025/26 club, not just selected high-impact teams
- [ ] Add automated script to fail build if a player references missing `seasonId`

## v5 Added Club-season Batch

| `arsenal_2025_26` | Arsenal | 2025/26 | Current UCL squad | 20 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/52280--arsenal/ |
| `tottenham_2025_26` | Tottenham Hotspur | 2025/26 | Current UCL squad | 20 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/1652--tottenham/ |
| `newcastle_2025_26` | Newcastle United | 2025/26 | Current UCL squad | 18 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/59324--newcastle/squad/ |
| `napoli_2025_26` | Napoli | 2025/26 | Current UCL squad | 19 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50136--napoli/ |
| `inter_2025_26` | Inter Milan | 2025/26 | Current UCL squad | 18 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50138--inter/ |
| `juventus_2025_26` | Juventus | 2025/26 | Current UCL squad | 18 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50139--juventus/squad/ |
| `benfica_2025_26` | Benfica | 2025/26 | Current UCL squad | 20 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50147--benfica/ |
| `monaco_2025_26` | Monaco | 2025/26 | Current UCL squad | 18 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50023--monaco/ |
| `sporting_2025_26` | Sporting CP | 2025/26 | Current UCL squad | 16 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50149--sporting-cp/ |
| `villarreal_2025_26` | Villarreal | 2025/26 | Current UCL squad | 17 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/70691--villarreal/ |
| `psv_2025_26` | PSV Eindhoven | 2025/26 | Current UCL squad | 16 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50062--psv/ |
| `frankfurt_2025_26` | Eintracht Frankfurt | 2025/26 | Current UCL squad | 16 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50072--frankfurt/ |
| `athletic_2025_26` | Athletic Club | 2025/26 | Current UCL squad | 16 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/50125--athletic-club/ |
| `copenhagen_2025_26` | FC Copenhagen | 2025/26 | Current UCL squad | 14 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/52709--copenhagen/ |
| `qarabag_2025_26` | Qarabağ | 2025/26 | Current UCL squad | 14 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/60609--qarabag/ |
| `kairat_2025_26` | Kairat Almaty | 2025/26 | Current UCL squad | 15 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/79970--kairat-almaty/ |
| `atalanta_2025_26` | Atalanta | 2025/26 | Current UCL squad | 16 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/52816--atalanta/squad/ |
| `galatasaray_2025_26` | Galatasaray | 2025/26 | Current UCL squad | 16 | Core squad — needs secondary check | UEFA Teams page confirms Galatasaray in 2025/26 Round of 16; player list needs fuller squad source pass |
| `bodo_glimt_2025_26` | Bodø/Glimt | 2025/26 | Current UCL squad | 15 | Main-squad verified | https://www.uefa.com/uefachampionsleague/clubs/59333--bodo-glimt/ |
| `marseille_2025_26` | Marseille | 2025/26 | Current UCL squad | 17 | Core squad — needs secondary check | UEFA Teams page confirms Marseille in 2025/26 League phase; player list needs fuller squad source pass |


## v6 Gameplay Format Audit

Status: implemented as an arcade-friendly version of the modern Champions League style format.

Implemented:
- 36-team single league table simulation.
- User receives 8 league phase fixtures.
- Draw uses 4 pots and assigns 2 opponents from each pot.
- Fixture list keeps 4 home and 4 away matches.
- League ranking zones are implemented: rank 1-8 direct Round of 16, rank 9-24 knockout play-off, rank 25-36 eliminated.
- Knockout play-off is generated only when the user finishes rank 9-24.
- Final result includes league rank, league points, qualification zone, full 36-team table, knockout path, awards, and player stats.

Known simplifications:
- Opponent country protection and exact UEFA draw constraints are not fully enforced.
- Non-user league table fixtures are quick-simmed to make every team reach 8 matches, not a full official fixture matrix.
- Pot strength is game-balanced, not official coefficient data.
