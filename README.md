# GARAGE EMPIRE browser demo

Free static car-management demo. Garage customization, NPC market, repairs and simulated drag races run entirely in the browser.

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

Three.js r128 and fonts load from external CDNs. If WebGL/Three.js is unavailable, catalog and game actions remain usable but the 3D preview will not render. The procedural geometry and UI additions are original. Manufacturer text is summarized as short factual fields; images and 3D assets are not copied.

## Specification sources

Checked 21 November 2026. Sources are historical manufacturer documents for the stated years, not claims about current sale availability. The linked document and regional scope apply, not every global version of a model. Ratings can depend on fuel, exhaust package or powertrain mode.

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

## Validation

Original 32 catalog rows compared exactly against the previous release. Every old car ID tested through save reload with paint, spoiler, upgrades, cash and wins preserved. New-car purchase/reload, repairs, tuning, race completion/duplicate-start locking, export/import, invalid-save rejection, all 65 previews, search/filter controls, and Arabic/English layouts at 320/390/820/1440 px tested. Desktop/mobile screenshots inspected.
