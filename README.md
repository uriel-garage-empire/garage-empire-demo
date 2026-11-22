# GARAGE EMPIRE browser demo

Free static car-management demo. Garage customization, NPC market, repairs and simulated drag races run entirely in the browser.

## Licensed model update, 22 November 2026

The deployed showroom currently uses twenty-three CC BY community car models: Nissan Skyline R34 GT-R, Chevrolet Camaro ZL1, Dodge Challenger SRT Hellcat, Toyota Supra A80, Mazda MX-5 NA, Nissan Silvia S15, Toyota MR2 SW20, BMW M3 E46, Nissan 350Z, Toyota Chaser JZX100, Ford Mustang GT (2005), Tesla Model S Plaid, BMW M3 Competition M xDrive (G80), Pagani Huayra, Honda NSX, Mazda RX-7 FD Veilside, Mazda MX-5 Miata Sport (ND), Lamborghini Aventador, Mitsubishi Lancer Evo IX, McLaren 720S, Ferrari 458 Italia, Chevrolet Corvette Stingray (C8) and BMW M4 (G82). Credits and source links are in CREDITS.md. These represent the listed model or generation, not an exact verified year/trim. Their original paint is retained. The other 77 catalog entries continue to use procedural bodies.

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

Twenty of the 100 existing catalog entries now have matching-model community GLBs. The other 77 keep the clearly labeled procedural preview. Latest additions are Mitsubishi Lancer Evo IX and McLaren 720S. See CREDITS.md for creators, free CC BY licenses, changes and year/trim limits. Fixed-paint models keep their material colors. All model routing uses the catalog name and year together, so the 2005 Mustang cannot replace the 2024 Mustang.

No catalog IDs, saved-car IDs, game rules or new cars were added by this visual update.
