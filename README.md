# GARAGE EMPIRE browser demo

Free static car-management demo. Garage customization, NPC market, repairs and simulated drag races run entirely in the browser.

## Visual coverage update, 23 November 2026

The deployed showroom has46 model-family community representations, thirty-seven original simplified bodies and nine explicitly labeled different-car visual substitutes. Coverage is92/100 catalog entries with77 distinct body definitions;8 entries remain procedural. The40 community body assets are shared across several entries. Original geometry, model-family representations and different-car substitutes are counted separately. Shared entries do not count as new bodies. Substitutes are not meshes of the named car. Earlier progress sections below are historical.

The older update notes below describe the game at each earlier stage. Catalog and save IDs are unchanged by the model updates.

## 100-car catalog update, 22 November 2026

- 100 catalog entries: the original 32 legacy entries plus 68 source-backed model/trim entries. Trim variants are counted separately, not as unique model families.
- 35 new additions span everyday street cars (Civic, Corolla, Camry, Mazda3), Japanese performance (Civic Type R, Lexus IS 500, WRX, BRZ, Land Cruiser, Ariya), European performance (Golf GTI/R, BMW M2 and i4 M50, Mercedes-AMG C 43 and C 63 S, Audi S3/RS 3/RS 6, Porsche 911 Carrera S/Turbo S/Taycan Turbo GT) and super/hypercars (Corvette Z06, Challenger SRT Hellcat, Model 3 Performance, EV6 GT, IONIQ 5 N, SF90 Stradale, Revuelto, 750S, Nevera).
- Every new entry carries manufacturer-sourced engine/motor and published power information, with drivetrain and transmission where the linked source supplies them. Missing fields are marked rather than guessed. Combined hybrid-system and metric (cv/PS) ratings are labeled; game outputs use the stated base or SAE-equivalent rating.
- Rivals, the used market, search and brand/body filters, 3D previews, parts, team and saves pick up the new entries automatically. The save allow-list now accepts catalog IDs 0-99. All previous saves remain valid; car IDs 0-64 are unchanged.
- No licensed assets were added: the 3D preview remains procedural body-family geometry, and no manufacturer logos or downloaded meshes are used.

## Showroom update, 21 November 2026

- 65 catalog entries: the original 32 plus 33 new real model/trim entries. Trim variants are counted separately, not as unique model families.
- Search by name/year and filter by manufacturer or body family. Preview any catalog entry without owning it. Buy a new car at its fictional full-condition game value, or hunt used-market deals.
- The 33 additions include manufacturer-sourced engine/motor and published power information. Drivetrain and transmission appear where the linked source supplies them. Missing fields are marked rather than guessed. Each entry identifies its year/launch scope and regional source.
- The original 32 entries retain exactly the same IDs, years and game values for compatibility. Their old values are explicitly legacy GAME DATA, not verified factory specifications. This includes the custom RX-7 Veilside entry and the old Lanos naming. Do not use those values as a vehicle reference.
- Every game price, rarity, weight, race result, condition multiplier, tuning gain and exchange rate is fictional or approximate game balancing. Published real power is separately labeled. SAE hp, European metric horsepower and kW are not interchangeable. Combined hybrid-system ratings are labeled.
- Original procedural 3D showroom with 12 body-family profiles, shaped body shells and wheel arches, open-top/targa variants, wheels/spokes/brakes, glass, lights and trim. These are stylized approximations with small original variations, NOT accurate licensed 3D replicas of individual models. No manufacturer logos, downloaded car meshes or paid assets are used.
- Drag to orbit, use zoom/reset/rotation buttons, or focus the preview and use arrow keys and +/- on a keyboard. Reduced-motion preferences disable automatic rotation initially. Rendering pauses when hidden and is limited to about 30 fps.
- Export and restore validated browser-save backups. Existing v1 saves keep their car IDs and local storage key. Keep a backup before clearing browser data.

## Street racing update, 21 November 2026

- Rivals are now real catalog cars with their own power, wear, ECU stage and spoiler, scouted per tier and shown before the race.
- Race outcome is decided by the matchup: car stats, condition, tuning and launch timing all affect the result. The old fixed-random rival multiplier is removed.
- Green-light reaction launch: lights count down, tapping before green is a false start, and reaction time is added to the total. Rivals react faster at higher tiers.
- Six progression tiers (one per three wins). Higher tiers scout rarer, stronger rivals with tuned builds and bigger prizes. The win counter and all v1 saves remain compatible; no save-format change.

## Crew, RPM and parts update, 21 November 2026

- Interactive gear shifting: an RPM gauge climbs through 4 gears during the run. Shift in the green zone for a perfect shift (-0.15s), early or limiter shifts cost time. Electric single-speed cars run without shifts. Space bar also shifts.
- Hireable team paid with in-game currency: Analyst (post-race report explaining the result from measured reaction, pace, shifts and condition), Mechanic (repair/factory-part discount, less wear), Agent (+15% prizes), Coach (wider perfect-shift zone).
- Parts market: factory (OEM) service kits restore engine/tire/brake wear; aftermarket parts add turbo (3 stages), sport/slick tires (2) and weight reduction (2) plus the existing ECU stages and spoiler. All part prices are in-game estimates inspired by real market prices, labeled as estimates, not actual quotes.
- Upgrade effects are part of the pace formula (power, weight, tire wear). Existing saves migrate automatically (new fields get defaults); no save-format break.

## Storage and limitations

Progress is stored only in this browser on this device. It does not sync between devices and may disappear if browser site data is cleared. There are no accounts, passwords, multiplayer trades or server APIs in this demo. The economy is client-authoritative and is not secure for competitive or real-money play.

The separate full Express/PostgreSQL project is not included and was not modified. No secrets, server code, real accounts or saved player data are included in this repository. The displayed brand/model names identify the game catalog; this demo is not affiliated with or endorsed by their manufacturers.

Three.js r128 and fonts load from external CDNs. If WebGL/Three.js is unavailable, catalog and game actions remain usable but the 3D preview will not render. The procedural geometry and UI additions are original. Manufacturer text is summarized as short factual fields. Downloaded community 3D assets are separately credited under their listed licenses in CREDITS.md.

## Specification sources

Checked 21-22 November 2026. Sources are historical manufacturer documents for the stated years, not claims about current sale availability. The linked document and regional scope apply, not every global version of a model. Ratings can depend on fuel, exhaust package or powertrain mode.

- [BMW Group: UK launch specification, July 2021](https://www.press.bmwgroup.com/united-kingdom/article/detail/T0330024EN_GB/bmw-m3-competition-saloon-m-xdrive-and-bmw-m4-competition-coup%C3%A9-m-xdrive-make-their-debut?language=en_GB)
  - Entries: BMW M3 Competition M xDrive; BMW M4 Competition M xDrive.
- [Toyota: US model year 2024](https://www.toyota.com/content/dam/toyota/brochures/pdf/2024/gr-corolla_ebrochure.pdf)
  - Entries: Toyota GR Corolla Core.
- [Toyota Canada: Canada model year 2024](https://media.toyota.ca/en/releases/2024/what-s-new--2024-toyota-gr86.html)
  - Entries: Toyota GR86.
- [Toyota USA: US model year 2024](https://pressroom.toyota.com/powerful-performance-striking-style-the-2024-toyota-gr-supra/)
  - Entries: Toyota GR Supra 2.0; Toyota GR Supra 3.0.
- [Ford: US model year 2024, premium fuel](https://media.lincoln.com/content/fordmedia/fna/us/en/news/2022/12/15/ho-ho-ho-horsepower--all-new-mustang-dark-horse-delivers-500-hor.html)
  - Entries: Ford Mustang EcoBoost; Ford Mustang GT; Ford Mustang Dark Horse.
- [Porsche: European launch specification, 2016](https://newsroom.porsche.com/en/products/porsche-cayman-model-series-718-sport-coupe-12475.html)
  - Entries: Porsche 718 Cayman; Porsche 718 Cayman S; Porsche 718 Boxster; Porsche 718 Boxster S.
- [Porsche USA: US launch specification, 2020](https://newsroom.porsche.com/en_US/products/2020-porsche-718-gts-4-0-boxster-cayman-19748.html)
  - Entries: Porsche 718 Cayman GTS 4.0; Porsche 718 Boxster GTS 4.0; Porsche 718 Cayman GT4; Porsche 718 Spyder.
- [Honda: US model year 2025](https://hondanews.com/en-US/honda-automobiles/releases/release-008e554add341b8444085beaa2074089-2025-honda-accord-specifications-features)
  - Entries: Honda Accord LX; Honda Accord Sport Hybrid.
- [Mazda USA: US model year 2024](https://news.mazdausa.com/2024-01-25-24MY-2024-Mazda-MX-5-Miata-Pricing-and-Packaging?asPDF=1)
  - Entries: Mazda MX-5 Miata Sport; Mazda MX-5 Miata RF Club.
- [Mazda USA: US model year 2024](https://news.mazdausa.com/vehicles-2024-cx-5)
  - Entries: Mazda CX-5 2.5 S; Mazda CX-5 2.5 Turbo.
- [Hyundai USA: US model year 2024, estimated output](https://www.hyundainews.com/view/models/hyundai-elantra-2024-elantra_n)
  - Entries: Hyundai Elantra N.
- [Hyundai USA: US model year 2024](https://www.hyundainews.com/assets/documents/original/56233-2024IONIQ5Specs062623.pdf)
  - Entries: Hyundai IONIQ 5 Standard Range; Hyundai IONIQ 5 Long Range RWD; Hyundai IONIQ 5 Long Range AWD.
- [Nissan USA: US model year 2024](https://usa.nissannews.com/en-US/releases/2024-nissan-z-nismo-specifications)
  - Entries: Nissan Z Performance; Nissan Z NISMO.
- [Nissan USA: US model year 2024](https://usa.nissannews.com/en-US/releases/2024-nissan-gt-r-press-kit?selectedTabId=release-db766f985c051a1ae399e10ae2018d07)
  - Entries: Nissan GT-R Premium; Nissan GT-R NISMO.
- [Chevrolet: US model year 2024](https://media.chevrolet.com/content/dam/Media/images/US/Vehicles/Chevrolet/Cars/Corvette/2024/2024-Chevrolet-Corvette-Stingray.pdf)
  - Entries: Chevrolet Corvette Stingray.
- [Chevrolet: US model year 2024](https://media.chevrolet.com/content/dam/Media/images/US/Vehicles/Chevrolet/Cars/Corvette_E-Ray/2024/2024-Chevrolet-Corvette-E-Ray-082323.pdf)
  - Entries: Chevrolet Corvette E-Ray.

- [Honda: US model year 2024](https://hondanews.com/en-US/honda-automobiles/releases/release-ce25b2bdc6167d48c9de61f4f90554fa-2024-honda-civic-type-r-specifications-features)
  - Entries: Honda Civic Type R.
- [Honda: US model year 2025](https://hondanews.com/en-US/honda-automobiles/releases/release-410d07897fdd63d8043cb7275002c6b3-2025-honda-civic-si-specifications-features)
  - Entries: Honda Civic Si.
- [Honda: US model year 2025](https://hondanews.com/en-US/honda-automobiles/releases/release-c28e8d1efb94e520fef21ff3f800cb30-2025-honda-civic-sedan-specifications-features)
  - Entries: Honda Civic Sedan LX; Honda Civic Sedan Sport Hybrid.
- [Toyota USA: US model year 2025](https://pressroom.toyota.com/toyota-camry-goes-exclusively-hybrid-plus-a-new-look-and-more-technology/)
  - Entries: Toyota Camry LE; Toyota Camry XSE AWD.
- [Toyota USA: US model year 2025](https://pressroom.toyota.com/let-the-good-times-keep-on-rolling-in-the-2025-toyota-corolla/)
  - Entries: Toyota Corolla LE.
- [Toyota USA: US model year 2024](https://pressroom.toyota.com/2024-toyota-land-cruiser-returns-to-its-origin/)
  - Entries: Toyota Land Cruiser.
- [Mazda USA: US model year 2024](https://news.mazdausa.com/2023-06-13-2024-Mazda3-Pricing-and-Packaging)
  - Entries: Mazda Mazda3 2.5 S; Mazda Mazda3 2.5 Turbo.
- [Subaru of America: US model year 2024](https://media.subaru.com/pressrelease/2230/1/2024-subaru-wrx-press-kit)
  - Entries: Subaru WRX.
- [Subaru of America: US model year 2024](https://media.subaru.com/pressrelease/2114/1/2024-subaru-brz-press-kit)
  - Entries: Subaru BRZ.
- [Nissan USA: US model year 2024](https://usa.nissannews.com/en-US/releases/2024-nissan-ariya-press-kit)
  - Entries: Nissan Ariya e-4ORCE.
- [Lexus USA: US model year 2024](https://pressroom.lexus.com/whats-new-2024-lexus-is-300-350-500/)
  - Entries: Lexus IS 500 F SPORT Performance.
- [Volkswagen USA: US model year 2024](https://media.vw.com/press-kits/2024-golf-gti-press-kit)
  - Entries: Volkswagen Golf GTI.
- [Volkswagen USA: US model year 2024](https://media.vw.com/assets/documents/original/17289-2024GolfRTechnicalSpecsFinal.pdf)
  - Entries: Volkswagen Golf R.
- [BMW Group: Irish launch specification, 2024](https://www.press.bmwgroup.com/ireland/article/detail/T0443123EN/the-new-bmw-m2?language=en)
  - Entries: BMW M2.
- [BMW USA: US launch specification, 2022](https://bmwusanews.com/newsrelease.do?id=3901&mid=1)
  - Entries: BMW i4 M50.
- [Mercedes-Benz USA: US model year 2024](https://media.mbusa.com/releases/release-1d2ba082ef32b72d00f8f4d0180028da-2024-mercedes-amg-c-63-s-e-performance-quick-reference-guide)
  - Entries: Mercedes-AMG C 63 S E PERFORMANCE.
- [Mercedes-Benz USA: US model year 2023](https://media.mbusa.com/news/the-new-mercedes-amg-c-43-sedan-more-power-greater-efficiency)
  - Entries: Mercedes-AMG C 43.
- [Audi USA: US model year 2025](https://media.audiusa.com/assets/applications/original/14705-my25-audi-a3-s3-rs-3-tech-specs-rev-051425.pdf)
  - Entries: Audi S3; Audi RS 3.
- [Audi USA: US launch specification, 2023](https://media.audiusa.com/releases/574)
  - Entries: Audi RS 6 Avant performance.
- [Porsche USA: US launch specification, 2020](https://newsroom.porsche.com/dam/jcr%3Ad5712d5c-b376-41d9-8201-09731162e143/2020_911_Carrera_S_and_911_Carrera_4S_US_specifications.pdf.PDF)
  - Entries: Porsche 911 Carrera S.
- [Porsche USA: US launch specification, 2021](https://newsroom.porsche.com/dam/jcr:887d7189-958d-4946-a189-e170e87b13e7/U.S.%20Technical%20Specifications%202021%20911%20Turbo%20S%20Coupe%20and%20Cabriolet.pdf)
  - Entries: Porsche 911 Turbo S.
- [Porsche USA: US market announcement, 2024](https://newsroom.porsche.com/en_US/2024/products/Taycan-Turbo-GT-Attack-Mode-fastest-electric-series-production-car-Weathertech-Raceway-Laguna-Seca-35474.html)
  - Entries: Porsche Taycan Turbo GT.
- [Chevrolet: US model year 2024](https://pressroom.chevrolet.com/content/dam/Media/images/US/Vehicles/Chevrolet/Cars/Corvette_Z06/2024/2024-Chevrolet-Corvette-Z06-082323.pdf)
  - Entries: Chevrolet Corvette Z06.
- [Tesla: current US specification, checked November 2026](https://www.tesla.com/model3)
  - Entries: Tesla Model 3 Performance.
- [Stellantis (Dodge): Canada model year 2023](https://media.stellantisnorthamerica.com/newsrelease.do?id=24117&mid=1)
  - Entries: Dodge Challenger SRT Hellcat.
- [Ferrari: global specification](https://www.ferrari.com/en-EN/auto/sf90-stradale)
  - Entries: Ferrari SF90 Stradale.
- [Lamborghini: global specification](https://www.lamborghini.com/en-en/models/revuelto-models/revuelto)
  - Entries: Lamborghini Revuelto.
- [McLaren: US market article](https://www.mclaren.com/cars/us_en/post/750s-five-key-facts)
  - Entries: McLaren 750S.
- [Kia USA: US model year 2024](https://www.kiamedia.com/us/en/models/ev6/2024/specifications)
  - Entries: Kia EV6 GT.
- [Hyundai USA: US model year 2025](https://www.hyundainews.com/assets/documents/original/59548-IONIQ5NSpecs040424.pdf)
  - Entries: Hyundai IONIQ 5 N.
- [Rimac: global specification](https://www.rimac-automobili.com/nevera/)
  - Entries: Rimac Nevera.

## Validation

Original 32 catalog rows compared exactly against the previous release; the 33 entries from 21 November carried over unchanged, with 35 new source-backed entries appended as IDs 65-99. Every old car ID tested through save reload with paint, spoiler, upgrades, cash and wins preserved. New-car purchase/reload, repairs, tuning, race completion/duplicate-start locking, export/import, invalid-save rejection, all 100 previews, search/filter controls, and Arabic/English layouts at 320/390/820/1440 px tested. Desktop/mobile screenshots inspected.


### Existing-car visual coverage, latest update

Twenty of the 100 existing catalog entries now have matching-model community GLBs. The other 73 keep the clearly labeled procedural preview. Latest additions are Mitsubishi Lancer Evo IX and McLaren 720S. See CREDITS.md for creators, free CC BY licenses, changes and year/trim limits. Fixed-paint models keep their material colors. All model routing uses the catalog name and year together, so the 2005 Mustang cannot replace the 2024 Mustang.

No catalog IDs, saved-car IDs, game rules or new cars were added by this visual update.


Previous model update: **27 of 100 catalog entries**, using **25 distinct community body assets**. The stock pre-refresh IONIQ 5 body is shared by its Standard Range, Long Range RWD and Long Range AWD entries. These are three catalog powertrain variants, not three different body models. The other 73 entries keep procedural visuals. The IONIQ 5 N and 2024 GT-R Premium/NISMO remain procedural. R35 uses an early 2008 body, explicitly labelled as not the 2017 facelift. Exact year/trim equipment is not certified. No physical-phone performance claim.


Previous model update: **30 of 100 catalog entries**, using **26 distinct community body assets**. Three 2025 Civic sedan entries (LX, Sport Hybrid and Si) share one early 2022 Civic sedan body. This is not the 2025 facelift or a trim-exact replica. The creator based it on limited reveal references, so details are approximate. Type R remains procedural. There are 70 procedural entries. Shared variants do not count as distinct body assets. Original catalog and save IDs remain unchanged.


Previous model update: **32 of 100 catalog entries**, using **28 distinct community body assets**; **68 remain procedural**. The Lanos uses a low-poly Daewoo sedan body rather than exact Chevrolet badging/year details. The S2000 is a yellow/orange pixel-textured Blockbench model, not a photorealistic or year/trim-exact replica. Both limitations are visible in Arabic and English. No catalog/save IDs or gameplay were changed. Shared Civic and IONIQ 5 variants still count as catalog entries, not distinct bodies.


Previous model coverage: **33 of 100 catalog entries**, using **29 distinct community body assets**; **67 remain procedural**. The new orange Revuelto represents the Revuelto model, not certified exact 2024 equipment. Original creator paint retained. No catalog/save IDs or gameplay changes. Shared Civic/IONIQ variants count as entries, not separate bodies.


Current model coverage: **35 of 100 catalog entries**, using **31 distinct community body assets**; **65 remain procedural**. Added a 2022-reference production Nevera community body to the 2024 entry, with a visible exact-equipment caveat, and a standard Chiron community body to the legacy 2019 entry, with an exact-year/trim caveat. Original creator paint retained. Catalog/save IDs and gameplay unchanged. Shared Civic/IONIQ variants count as entries, not separate body assets.


### Loading update

Coverage remains 35 catalog entries from 31 distinct body assets. Six existing bodies now use geometry compression without surface reduction, new quantization, or texture changes. A three-model resource cache avoids GPU reuploads on recent revisits; stale downloads are cancelled, failed downloads can be retried on a later selection, and a download/preparation caption replaces the blank unexplained wait. Catalog data and save schema are unchanged.

A controlled desktop-browser test with gzip responses, 4 Mbps download and 100 ms simulated latency measured first rendered Ferrari 458 at about 3.87s before / 2.04s after, and BMW M4 at about 3.28s before / 2.13s after. A recent Ferrari revisit performed no fetch, parse or GPU buffer upload after the change. These are controlled test results, not measurements on a physical phone or a promise for every network.


## Shared CX-5 body update, 22 November 2026

Current model coverage: **37 of 100 catalog entries**, using **32 distinct community body assets**; **63 remain procedural**. One shared pre-facelift 2020 CX-5 body represents the two existing 2024 CX-5 entries. It is not the 2022-on facelift and does not certify their wheels, trim or equipment. Arabic/English caveats and creator credit are visible. Existing bounded resource cache, cancellation, stale-completion guard, decoder and loading captions retained. Catalog/save IDs and gameplay unchanged. No physical-phone performance claim.


## Lightweight C8 RS6 body update, 22 November 2026

Current model coverage: **38 of 100 catalog entries**, using **33 distinct community body assets**; **62 remain procedural**. The existing Audi RS6 performance entry uses a 6,850-triangle C8 RS6 Avant body,536,560 GLB bytes. It is visibly marked as low-poly and not exact 2024 performance equipment. Full source/CC BY4/NoAI credit retained. Original materials and source paint retained, no geometry reduction. Catalog/save IDs and gameplay unchanged; loading cache/cancellation fixes retained.


## Lightweight Civic EK body update, 22 November 2026

Current coverage: **39 of100catalog entries**,**34distinct community bodies**,**61procedural**. Existing Civic EK uses a stylized EK9 hatch body with visible exact1999facelift/trim caveats,notTypeRperformance claims. Original catalog/saveIDs andgameplay unchanged,loading1 cache/cancellation/stalecompletionguards retained. Source487,484B/3,440triangles,allsourceimages/materials kept.


## Lightweight A90 body update,22November2026

Current coverage: **41of100catalog entries**,**35distinct community bodies**,**59procedural**. Existing GR Supra2.0/3.0 share one authored stylizedA90body with visible exact2024equipment/trim caveats. Original2,466,832B/20.7ktriangles/all3images retained. Catalog/saveIDs/gameplay andloading1cache/cancellation/stalecompletionguards unchanged.


## S650 GT body update, 22 November 2026

Current coverage: **42 of 100 catalog entries**, **36 distinct community bodies**, **58 procedural**. Adds only the 2024 Mustang GT with an authored lightweight stylized body and visible fine-detail caveat. The 2005 GT mapping remains separate and unchanged. EcoBoost/Dark Horse remain procedural. Catalog/save IDs, gameplay and loading1 behavior preserved.


## Dark Horse body update, 22 November 2026

Current coverage: **43 of 100 catalog entries**, **37 distinct community bodies**, **57 procedural**. Existing 2024 Dark Horse now has a small authored PS1-style photo-textured body with visible simplification/equipment caveat. The GT bodies are separate; EcoBoost stays procedural. Catalog/save IDs, gameplay and loading1 unchanged.

## Excel X2 body update
Current coverage:45of100catalog entries,39distinct bodies,55procedural. The legacy Hyundai Excel uses a1990-era X2sedan model with an explicit earlier-facelift and local-equipment caveat for the1997catalog entry. Egypt-market reports identify1991-1999Excel as X2, distinct from Australian AccentX3name reuse. Original source paint/images retained, exact Meshopt packing, no new gameplay or catalog/save changes.


## Lightweight 992 Turbo S body update, 22 November 2026

Current coverage: **46 of 100 catalog entries**, **40 distinct body assets**, **54 procedural**. The existing 2021 Turbo S now uses a 21k-triangle community 992 coupe with visible simplification and exact-equipment caveats. Original dark-green paint, black glass, materials, geometry and image retained. Original GLB is 1.76MB; ten lossless base64 transport parts. No gameplay, catalog/save or loading-behavior changes.


### Labeled visual substitutes (23 November 2026)
Nine entries reuse an existing body from another car and say so in the showroom title, an amber note beside the specifications and the 3D caption: BMW i4 M50 (BMW M3 G80 body), Corvette E-Ray and Z06 (Corvette C8 Stingray body), Nissan GT-R NISMO (R35 body), Hyundai IONIQ 5 N (IONIQ 5 body), McLaren 750S (720S body), Porsche 911 Carrera S (992 Turbo S body), Mazda MX-5 Miata RF Club (open-top ND roadster body) and Ford Mustang EcoBoost (S650 GT body). Catalog names, years, stats and save IDs are unchanged. Coverage is 46 existing model-family representations plus 9 different-car substitutes, 40 distinct meshes, 45 procedural fallbacks. No new asset payload. See CREDITS for sources and the differences stated for each car.


## Original GR Yaris visual, 23 November 2026

Added an original simplified2021GR Yaris body, not a downloaded model or a relabeled Golf/Yaris five-door. The three-door greenhouse, lowered black roof, wide rear quarters, large central grille, separate corner ducts and C-shaped rear lamps follow the early GR Yaris. Lamps, bumpers, mirrors and wheels remain coarse; exact equipment is not claimed. Fixed off-white paint.69,042triangles merged into8material groups. Community candidate origin was unresolved, so it was not imported.

Current coverage61/100 =46community-family+6original+9explicit different-car substitutes.46distinct body definitions,39procedural. Existing catalog/save IDs and gameplay unchanged.

Geometry reference: https://media.toyota.co.uk/the-new-toyota-gr-yaris/ . Actual front/rear reference photographs are listed inCREDITS.md, viewed as references only, not bundled or textured.


## Original simplified 2002 Impreza WRX sedan

Added an original early GD bugeye sedan body with round headlamps and fog lights, hood scoop, four-door greenhouse, trunk and low wing. Silver paint; simplified bumpers, lamps and generic five-spoke wheels. Not an exact equipment replica.61,292triangles merged into9material groups. Ready-made leads were rejected as wrong-generation coupe or rally specification. No imported asset or reference image payload.

Current coverage62/100 =46community-family+7original+9explicit different-car substitutes.47distinct body definitions,38procedural. Prior body builders, catalog/save IDs and gameplay are unchanged.


## Original simplified 1999 Viper GTS coupe

An original reference-led SR II coupe with long clamshell hood, rearward double-bubble cabin, broad rear haunches, side scallops, oval rear lights and central twin exhaust. Blue paint and twin white stripes are fixed. Bumpers, lamp construction, wheel design and fine trim are simplified, not an exact factory replica. No downloaded Viper mesh or photographic texture is included.

Current coverage: 63/100 = 46 community model-family representations + 8 original simplified bodies + 9 explicitly labeled different-car substitutes. These use 48 distinct body definitions; 37 catalog entries remain procedural. Earlier progress sections above are historical. Catalog/save IDs, previous body builders and gameplay are unchanged.


## Original simplified 1994 Mitsubishi 3000GT VR-4

Reference-led original Z16A-era liftback coupe, fixed twin-projector lamp layout, hood blisters, low rear wing, stacked side vents and quad pipes. Fixed red body, simplified bumpers, flat lamp lenses and generic wheels, not a factory-equipment replica. No downloaded 3000GT mesh or photographic texture.

Current coverage64/100 =46community model-family representations +9original simplified bodies +9explicit different-car substitutes.49distinct body definitions,36procedural entries. Catalog/save IDs, prior bodies and gameplay unchanged. No physical-phone FPS claim.


## Original simplified 2024 Toyota GR Corolla Core

Reference-led original five-door hatchback, widened quarters, front-fender extractors, hooked lamps, plain roof/hood, low spoiler and triple exhaust. Core proportions and equipment direction, not Circuit vented hood, carbon roof or high wing. Fixed red paint, simplified bumpers and flat lenses, generic wheels. No downloaded GR Corolla mesh or photographic texture.

Current coverage65/100 =46community model-family representations +10original simplified bodies +9explicit different-car substitutes.50distinct body definitions,35procedural entries. Catalog/save IDs, prior bodies and gameplay unchanged. No physical-phone FPS claim.


## Original simplified 2024 Honda Civic Type R FL5

Reference-led original five-door fastback hatchback, hood extractor, slim lamps, fender extractors, low wide two-support wing and center triple exhaust. Fixed off-white paint, simplified bumpers and flat lenses, generic wheels. No downloaded Civic Type R mesh or photographic texture.

Current coverage66/100 =46community model-family representations +11original simplified bodies +9explicit different-car substitutes.51distinct body definitions,34procedural entries. Catalog/save IDs, prior bodies and gameplay unchanged. No physical-phone FPS claim.


## Original simplified 2025 Honda Accord LX

Reference-led long four-door sedan, hexagonal grille, slim lamps and full-width split rear light panel. Fixed silver paint, simplified bumpers and flat lenses, generic wheels. No downloaded Accord LX mesh or photograph texture.

Current coverage67/100 =46community model-family representations +12original simplified bodies +9explicit different-car substitutes.52distinct body definitions,33procedural entries. Catalog/save IDs, prior bodies and gameplay unchanged. No physical-phone FPS claim.


## Original simplified 2025 Honda Accord Sport Hybrid

Separate trim-specific variant of the simplified eleventh-generation Accord body: larger 19-inch-style machined/black paired-spoke wheels, black mirror covers, moonroof and low black trunk spoiler. Fixed red paint, simplified bumper/side contours and flat lenses. These details distinguish it from the separately preserved LX body; neither is an exact equipment replica. No downloaded mesh or photograph texture.

Current coverage 68/100 = 46 community model-family representations + 13 original simplified bodies + 9 explicit different-car substitutes. 53 distinct body definitions, 32 procedural entries. Catalog/save IDs, prior bodies and gameplay unchanged. No physical-phone FPS claim.


## Original stylized 2024 Toyota GR86 ZN8

Reference-led original low coupe with swept lamps, large lower grille, fender vents, split rear lamps and twin exhaust. Fixed blue paint. The nose, cabin, fenders, lenses and generic wheels are simplified, not an exact replica. This is the simplified sample level reviewed and accepted by the owner. No downloaded GR86 mesh or photographic texture. 66,952 triangles merged into 10 material groups.

Coverage 69/100 = 46 community model-family + 14 original simplified + 9 labeled substitutes. 54 distinct body definitions; 31 procedural entries. Prior bodies, catalog/save IDs and gameplay unchanged. No physical-phone FPS claim.


## Original stylized 2024 Subaru BRZ ZD8

Reference-led original low coupe with swept lamps, rounded lower grille with horizontal bars, fender vents, split rear lamps and twin exhaust. Fixed silver paint. The nose, cabin, fenders, lenses and generic wheels are simplified, not an exact replica. The simplified visual level follows the owner-approved GR86 sample. No downloaded BRZ mesh or photographic texture. 65,980 triangles merged into 10 material groups.

Coverage 70/100 = 46 community model-family + 15 original simplified + 9 labeled substitutes. 55 distinct body definitions; 30 procedural entries. Prior bodies, catalog/save IDs and gameplay unchanged. No physical-phone FPS claim.


## Original stylized 2024 Subaru WRX VB

Reference-led original sedan with hood scoop, hex grille, angular black wheel-arch cladding, wrapped rear lamps and quad exhaust. Body surfaces, cabin, lenses and generic wheels are simplified, not an exact replica. No downloaded mesh or photographic texture. 95,783 triangles merged into 9 material groups. Fallback after ready-made-source screening, not a change to custom-only.

Coverage 71/100 = 46 community model-family + 16 original simplified + 9 labeled substitutes. 56 distinct body definitions; 29 procedural entries. Prior bodies, catalog/save IDs and gameplay unchanged. No physical-phone FPS claim.


## Original stylized 2025 BMW M2 G87

Reference-led original compact coupe with horizontal twin kidneys, three lower intakes, single projector lamps, angular rear lenses and widely paired quad exhaust. Body surfaces, cabin, lenses and generic wheels are simplified, not an exact replica. No downloaded mesh or photographic texture. 90,103 triangles merged into 8 material groups. Fallback after ready-made-source screening, not a change to custom-only.

Coverage 72/100 = 46 community model-family + 17 original simplified + 9 labeled substitutes. 57 distinct body definitions; 28 procedural entries. Prior bodies, catalog/save IDs and gameplay unchanged. No physical-phone FPS claim.


## Original stylized 2016 Porsche 718 Cayman

Reference-led mid-engine coupe with slanted four-point headlamps, three front openings, side ducts, angular rear lenses connected by dark trim and a single central exhaust. Body, cabin, lenses and generic wheels are simplified, not an exact replica. No downloaded mesh or photographic textures. Fallback after existing ready-made source screening. Only the base Cayman entry is added; other trims and open-top models remain separate unfinished work.

Coverage 73/100 =46 community model-family +18 original simplified +9 labeled substitutes. 58 distinct bodies;27 procedural. Catalog/save IDs, prior visuals and gameplay unchanged. No physical-phone FPS claim.


## Original stylized 2016 Porsche 718 Boxster

Reference-led open two-seat roadster with slanted four-point headlamps, three front openings, side ducts, angular rear lenses connected by dark trim and a single central exhaust. Body, cabin, lenses and generic wheels are simplified, not an exact replica. No downloaded mesh or photographic textures. Fallback after existing ready-made source screening. Only the base Boxster entry is added; other trims and open-top models remain separate unfinished work.

Coverage 74/100 =46 community model-family +19 original simplified +9 labeled substitutes. 59 distinct bodies;26 procedural. Catalog/save IDs, prior visuals and gameplay unchanged. No physical-phone FPS claim.


## Original stylized 718 S trims

Cayman S coupe and Boxster S open roadster use separately defined trim builders with five-spoke silver wheels, visible red calipers and paired central round tailpipes, rather than relabeling base geometry unchanged. Simplified, not exact replicas. Reference-led original fallback after ready-made source screening. No third-party meshes or photo textures. Coverage 76/100: 46 community, 21 original, 9 substitutes, 61 distinct body definitions, 24 procedural. Prior visuals, catalog/save IDs and gameplay preserved.


## Original stylized 2020 718 GTS 4.0 trims

Cayman coupe and Boxster open roadster use revised black front inlets/lip, dark ten-spoke wheels with red calipers, revised black rear apron and separated round exhausts. Simplified original fallback, not exact replicas. No third-party mesh or photographic texture. Coverage78/100:46community,23original,9substitutes,63distinct body definitions,22procedural. Prior visuals, catalog/save IDs and gameplay unchanged.


## Original stylized 2020 718 GT4 and Spyder

GT4 has a fixed wing with twin supports; Spyder has an open cockpit and double-bubble rear deck without the fixed wing. Both have revised GT intakes, radiator outlet, splitter and side blades, multi-spoke wheels and separated exhausts. Simplified original fallback, not exact replicas. No third-party meshes or photo textures. Coverage80/100:46community,25original,9substitutes,65distinct definitions,20procedural. Prior visuals/catalog/save IDs/gameplay unchanged.


## Original stylized 2024 Hyundai Elantra N facelift

Original simplified fallback with thin front lamps, angular N bumper accents, red side trim, connected rear lamps, twin exhausts and raised rear spoiler. Not an exact replica. 81/100 coverage,46community+26original+9substitutes,66distinct definitions,19procedural. Prior visuals/gameplay/catalog/save IDs preserved.


## Original stylized 2025 Toyota Corolla LE

Original simplified fallback, not exact: hooked front lamps, LE horizontal-slat grille, silver 16-inch-style wheel covers and plain bumper with tall rear reflectors. No sport spoiler/diffuser/wheels. 82/100 coverage,46community+27original+9substitutes,67distinct definitions,18procedural. Prior visuals/gameplay/catalog/save IDs preserved.


## Original stylized 2025 Toyota Camry LE and XSE AWD

Separate simplified fallback bodies, not exact replicas. LE has horizontal grille, silver smaller wheels and plain bumpers. XSE has color-matched mesh, larger dark wheels, black roof, sport rockers, lip spoiler and twin exhausts. 84/100coverage,46community+29original+9substitutes,69distinct definitions,16procedural. Prior visuals/catalog/save/gameplay preserved.


## Original stylized2024 Nissan Ariya e-4ORCE

Separate simplified crossover fallback, not an exact replica. Black V shield and bent running lights, black floating roof, full-width rear lamp and19inch-style aero wheels.85/100coverage,46community+30original+9substitutes,70distinct definitions,15procedural. Prior visuals/catalog/save/gameplay preserved.


## Original stylized2025 Audi S3 sedan

Separate simplified facelift S3 fallback, not an exact replica. L-pattern singleframe grille, thin segmented lamps, silver mirror caps, paired spokes, four round outlets and S rear apron.86/100coverage,46community+31original+9substitutes,71distinct definitions,14procedural. Prior visuals/catalog/save/gameplay preserved.


## Original stylized2025 Audi RS3 sedan

Separate simplified facelift RS3 fallback, not an exact replica. Wider fenders, rhombus singleframe, checkered lamps, black mirror caps, cross spokes, twin oval outlets and RS diffuser.87/100coverage,46community+32original+9substitutes,72distinct definitions,13procedural. Prior visuals/catalog/save/gameplay preserved.


## Original stylized2024 Tesla Model3 Performance

Separate simplified Highland Performance fallback, not an exact replica. Closed nose, slim lamps, glass roof, C-shaped rear lamps, Performance splitter, diffuser, wheels and lip spoiler.88/100coverage,46community+33original+9substitutes,73distinct definitions,12procedural. Prior visuals/catalog/save/gameplay preserved.


## Original stylized2024 Lexus IS500 F SPORT Performance

Separate simplified IS500 fallback, not an exact replica. Raised hood, spindle grille, L-shaped lamps, rear light bar, moonroof, split10-spoke-style wheels and diagonal-stacked quad exhausts.89/100coverage,46community+34original+9substitutes,74distinct definitions,11procedural. Prior visuals/catalog/save/gameplay preserved.


## Original stylized2024 Kia EV6 GT

Separate simplified EV6 GT fallback, not an exact replica. Swept lamps, sloping hatch, boomerang rear light blade, angular GT wheels and neon calipers.90/100coverage,46community+35original+9substitutes,75distinct definitions,10procedural. Prior visuals/catalog/save/gameplay preserved.


## Original stylized2023 Mercedes-AMG C 43

Separate simplified C43 fallback, not an exact replica. Vertical-strut grille, W206 sedan silhouette, wedge rear lamps, multi-spoke wheels and adjacent round quad tailpipes.91/100coverage,46community+36original+9substitutes,76distinct definitions,9procedural. Prior visuals/catalog/save/gameplay preserved.


## Original stylized2024 Mercedes-AMG C 63 S E PERFORMANCE

Separate simplified C63 S E PERFORMANCE fallback, not an exact replica. Wider W206 body, bonnet outlet, jet-wing apron, split-spoke wheels, charging flap and trapezoidal quad outlets.92/100coverage,46community+37original+9substitutes,77distinct definitions,8procedural. Prior visuals/catalog/save/gameplay preserved.
