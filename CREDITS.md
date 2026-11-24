# Credits

## Real-shape 3D car models

Some catalog cars show community-made models of the real car instead of the game's procedural body. Each is used under its Creative Commons Attribution license:

- **Nissan Skyline R34 GT-R (1999)** - "Nissan GTR" by David Sirera - https://poly.pizza/m/a_HKCtYAv2W - CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/) - models the R34 generation GT-R, matching the in-game car.
- **Chevrolet Camaro ZL1 (2018)** - "Camaro ZL1 2017" by Kris Tong - https://poly.pizza/m/7bF7UVAoYRG - CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/) - 2017 ZL1, same 6th generation as the in-game 2018 ZL1. The asset includes a race wing and hood customization; it is not verified as an exact replica of the 2018 factory trim.
- **Dodge Challenger SRT Hellcat (2023)** - "2015 Dodge Challenger" by Grzybek - https://poly.pizza/m/1jB8I4t5w4 - CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/) - 2015 base Challenger, same LC generation (2015-2023) as the in-game 2023 SRT Hellcat. Not an SRT Hellcat trim replica.
- **Toyota Supra A80 (1998)** - "Toyota Supra MK IV (1994)" by Martin Trafas (TinoD2) - https://sketchfab.com/3d-models/toyota-supra-mk-iv-1994-eb9bb1eb41db431cb078088ae1ce45f8 - CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/) - 1994 MK IV, same A80 generation (1993-2002) as the in-game 1998 car. Original artist portfolio work, not a game rip. Mesh simplified from 262k to ~56k triangles and textures downscaled to 512px to reduce the download size.

- low poly mazda mx-5 miata na (UPDATE) by SPDWKS (Speedy-Works) - https://sketchfab.com/3d-models/low-poly-mazda-mx-5-miata-na-update-819982eac6944241be32c62343c4d530 - CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Catalog Mazda MX-5 NA (1992). NA-generation representation with hardtop and customized pop-up headlights; not an exact year/trim replica. Distributed in GLB format, centered and rescaled by the game.
- Low Poly Nissan Silvia S15 by IVA (dxmhl) - https://sketchfab.com/3d-models/low-poly-nissan-silvia-s15-080d98fe47d54996a0a7d95526707d55 - CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Catalog Nissan Silvia S15 (2000). Low-poly S15-generation representation; not an exact year/trim replica. Distributed in GLB format, centered and rescaled by the game.
- 1996 Toyota MR2 W20 by _shobh19 (s0h1o9b) - https://sketchfab.com/3d-models/1996-toyota-mr2-w20-f66020ee62d741ebb0adc1ba351300db - CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Catalog Toyota MR2 SW20 (1993). Source is a customized 1996 SW20-generation car without interior; not an exact 1993 factory replica. Distributed in GLB format, centered and rescaled by the game.

These models keep their creators' authentic paint colors; the in-game paint control is disabled for them. They are same-generation representations, not exact year/trim replicas.

Cars without a mapped community or original model-specific body use the game's procedural body families. Car names and designs are trademarks of their respective manufacturers; this is a free fan project with no affiliation.

## Libraries

- three.js r128 (MIT) and its GLTFLoader example module.

Local integration changes for MR2 SW20: removed the creator scene's flat ground plane from the displayed asset so normalization frames the car rather than the surrounding plane. Material and car geometry retained. S15 and MR2 previews are rotated to show the front three-quarter view by default.

The Miata NA, S15 and MR2 assets are distributed as lossless base64 text parts for repository publication. The loader reassembles the same GLB bytes before parsing; encoding does not change their geometry or materials.

## Further existing-car models

- **BMW M3 E46 (2003)**: BMW M3 E46 by BRIKKER (daniklyz), https://sketchfab.com/3d-models/bmw-m3-e46-a0cc623fe4ec4b96bc0137b152279321, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Creator describes an original low-poly Blender model, with material colors and a simplified interior. Same E46 model/generation, not an exact verified 2003 trim replica.
- **Nissan 350Z (2003)**: Nissan 350Z by Blue3D (Blueberry12), https://sketchfab.com/3d-models/nissan-350z-0b6b898a28364c389b0ac82e9b476f1a, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Creator says built from blueprints and reference images. Z33-generation exterior, with custom wheels and rear wing, no interior. Not an exact 2003 factory replica.
- **Toyota Chaser JZX100 (1998)**: Toyota Chaser by Blue3D (Blueberry12), https://sketchfab.com/3d-models/toyota-chaser-7e856b85c32a40bea7a88b5852ded4a9, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Creator says built from blueprints and press images. Sixth-generation Chaser exterior, no interior, not an exact 1998 trim replica. Generation/body comparison checked against Toyota's lineage page: https://www.toyota-global.com/company/history_of_toyota/75years/vehicle_lineage/car/id60011062/index.html

Integration changes for these three: duplicate/unreferenced glTF data removed without reducing rendered triangle count; scene centered/rescaled at runtime. Lossless base64 text transport as above, original material paint retained.

## Lightweight Mustang and Tesla visuals

- **Ford Mustang GT (2005)**: 2005 Ford Mustang GT by ImperialBlue3D, https://sketchfab.com/3d-models/2005-ford-mustang-gt-a8e485f012284d21badb9886e2605bab, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). A deliberately low-poly, single-texture S197 GT representation. The creator's baked texture appearance and original red paint are retained. It is not a detailed factory replica.
- **Tesla Model S Plaid (2022)**: Tesla model S Plaid 2023 by slowpoly, https://sketchfab.com/3d-models/tesla-model-s-plaid-2023-aec912ed367b4aebacc8676922f42beb, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). A low-poly exterior of the refreshed Plaid body, uploaded as a 2023 model. Used as a same-generation representation of the catalog's 2022 Plaid, not an exact 2022 equipment/lighting replica. The 2022 lighting refresh is documented at https://www.teslarati.com/tesla-model-s-plaid-matrix-headlights-new-tail-lights-deliveries/. Original red paint and creator texture marks are retained.

Integration changes for these two: glTF deduplication and pruning only, with rendered triangle counts unchanged. Existing 512px Mustang and 1024px Tesla source textures retained, no mesh simplification. Lossless base64 text transport and runtime framing as above.

## G80 M3 and Huayra existing-car models

- **BMW M3 Competition M xDrive (2021 catalog entry)**: Low Poly BMW G80 M3 by SharkyStudios (sharkycat109), https://sketchfab.com/3d-models/low-poly-bmw-g80-m3-ea3e807ff69e40fe82c5577ee9f0a2f4, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Same G80 four-door M3 generation. Creator labels it 2020; this is a stylized G80 body representation, not a verified 2021 Competition xDrive equipment replica.
- **Pagani Huayra (2013 catalog entry)**: Low Poly Pagani Huayra by MrTjk, https://sketchfab.com/3d-models/low-poly-pagani-huayra-e321079605f24566817b4c8ffa05b97c, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Creator describes modeling in 3ds Max. Stylized original Huayra body, not a verified 2013 equipment replica.

Integration: original GLB geometry/materials retained, lossless base64 text transport, runtime centering/scaling, and Huayra showroom orientation adjusted. Authentic fixed material paint is retained. Catalog routing requires both catalog name and year; it does not certify the asset's exact year or trim.


## Pre-facelift NSX and Veilside RX-7

- **Honda NSX (1997 catalog entry)**: SPORTS CAR -1990 Honda NSX by Jasmin Daniel (jasmin.daniel), https://sketchfab.com/3d-models/sports-car-1990-honda-nsx-872845e37cc54bacbe707b1935ba7e89, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Low-poly pre-facelift first-generation NSX with pop-up headlight covers. The source is labeled 1990, so this is a same-body-generation representation, not a verified 1997 equipment replica. Generation comparison: Honda's 1997 release, https://global.honda/en/newsroom/news/1997/4970206.html. Original geometry, material colors and source texture retained; orientation and runtime framing adjusted.
- **Mazda RX-7 FD Veilside (1999 catalog entry)**: RX7 VeilSide model by giuffridamassimino, https://sketchfab.com/3d-models/fast-and-the-furious-tokyo-drift-rx7-veilside-de5e020cd32a4a0c9727d56db056d42e, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Represents the custom Veilside Fortune body, not a stock FD, and does not verify the catalog's fictional 1999 tuning specification. The source page gives no modeling-history description.

RX-7 integration changes: removed two line-overlay primitives that covered the body in white triangle edges, removed unused data, welded identical vertices, and quantized vertex positions/normals to 16 bits. All 99,488 rendered surface triangles and source material colors retained, with small numerical quantization error. No triangle decimation. The resulting GLB is about 1.93 MB. Both assets use base64 text transport, runtime centering/scaling, adjusted front-three-quarter orientation and fixed original paint. Desktop/mobile viewport renders checked; physical-phone performance has not been measured.


## Open-top ND Miata and Aventador

- **Mazda MX-5 Miata Sport (2024 catalog entry)**: Mazda Miata MX5 ND Cartoon Style by Mauro3D (maurogsw), https://sketchfab.com/3d-models/mazda-miata-mx5-nd-cartoon-style-217b3a2db58f42e699aff41a3596997f, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Stylized open-top ND-generation body in the creator's flat cartoon style, not a verified 2024 Sport equipment replica. This asset was uploaded in 2023, before the 2024 headlight, taillight and wheel changes described by Mazda: https://news.mazdausa.com/2024-01-25-24MY-2024-Mazda-MX-5-Miata-Pricing-and-Packaging. It is used only for the soft-top Sport entry, not the separate RF retractable-fastback entry.
- **Lamborghini Aventador (2017 catalog entry)**: Low poly Lamborghini Aventador by sebbelon, https://sketchfab.com/3d-models/low-poly-lamborghini-aventador-9b8a0882ab554976a7f70086fc0c9348, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Creator describes making the model in Blender for a Unity drift game. Early-body Aventador appearance; the source does not specify an exact model year or trim. Same Aventador model generation, not a verified 2017 S equipment or bumper replica.

Integration changes for these two: original source GLB surface geometry and material colors retained, lossless base64 text transport, front-three-quarter orientation and runtime centering/scaling. No mesh simplification or texture generation. Fixed paint preserves the creators' appearance. The Miata GLB is 483,728 bytes with 12,508 rendered triangles; Aventador is 338,644 bytes with 5,384. Desktop/mobile viewport renders checked, not physical-phone performance.


## Evo IX and McLaren 720S

- **Mitsubishi Lancer Evo IX (2006 catalog entry)**: Mitsubishi Lancer Evolution (IX), source page currently credits marksform, https://sketchfab.com/3d-models/mitsubishi-lancer-evolution-ix-ff50f6f7ac164e44a153c479d525b01e, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Downloaded GLB attribution also names madizon and https://sketchfab.com/madizon. Both source credits are retained here without asserting an identity relationship. Stylized Evo IX sedan with a simplified interior, not an exact verified 2006 market/trim replica. Original GLB: 627,944 bytes, 10,923 rendered surface triangles and two embedded images from the source 512px GLB download. The plain GLB export was rejected because its glass/plate materials were incomplete.
- **McLaren 720S (2017 catalog entry)**: 2017 Mclaren 720s, source page currently credits _shobh19 (s0h1o9b), https://sketchfab.com/3d-models/2017-mclaren-720s-f7bece69400f4640a4a3be746b44998b, CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Downloaded GLB attribution also names _Sheep19 and https://sketchfab.com/shobhit190401. Both source credits are retained here without asserting an identity relationship. Creator describes modeling in Blender and textures in Photoshop. Same model and source year as the catalog, not a certified factory-equipment replica. Original GLB: 1,390,584 bytes, 6,915 rendered surface triangles, five embedded images from the source's 512px GLB option.

Integration changes for these two: lossless base64 text transport, runtime centering/scaling and McLaren showroom orientation adjusted. All source geometry, material colors, embedded credits and both models' images retained. No triangle decimation or recoloring. Fixed source paint, not game paint controls. Desktop/mobile viewport renders checked, not physical-phone performance.


## Ferrari 458, Corvette C8 and BMW M4 G82

All three source pages and download dialogs were checked on 22 November 2026 and list CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/). Source credits are retained in the GLBs as well as here. Community representations of the catalog model/generation, not certified exact factory year/trim equipment. Original source paint is fixed in the showroom.

- **Ferrari 458 Italia (2010 catalog entry)**: Low Poly Ferrari 458 Italia 2010 by giosassets (https://sketchfab.com/giosassets), https://sketchfab.com/3d-models/low-poly-ferrari-458-italia-2010-6cdac367a3a746eeaa824aab99046338. Creator labels the model exterior only, with unrigged doors and tires. Stylized pink source paint and black opaque windows, no interior or image textures. Source 4,788,116 bytes, integrated 2,400,176 bytes, all 144,066 rendered surface triangles retained. Front-facing showroom orientation adjusted.
- **Chevrolet Corvette Stingray C8 (2024 catalog entry)**: VEHICLE - Chrevolet Corvette C8 Stingray by Thcyrax (https://sketchfab.com/thcyrax), https://sketchfab.com/3d-models/vehicle-chrevolet-corvette-c8-stingray-a3240484fa9d481abb2c5b6690c2595b. Creator describes the vehicle as part of a set they made. Flat shaded orange/white cartoon source styling, including white windows and simplified wheels. Same C8 Stingray body family, not a 2024 equipment replica. Original 278,052-byte GLB from the 512px source option, one embedded image, 5,732 rendered surface triangles. Mapped only to Stingray, not E-Ray or Z06.
- **BMW M4 G82 (2021 Competition M xDrive catalog entry)**: BMW M4 G82, source page currently credits Rosemarin (https://sketchfab.com/rosemarinch), https://sketchfab.com/3d-models/bmw-m4-g82-5a9007d569a846548dbf352877550c4e. Downloaded GLB attribution names Rosemary at the same profile URL. Both credit labels are preserved. Creator describes a subdivision-ready G82 model with only visible interior parts. Same coupe body/generation, not verified 2021 Competition xDrive equipment. Source 5,149,976 bytes, integrated 2,325,548 bytes, all 104,176 rendered surface triangles retained. No image textures. Front-facing showroom orientation adjusted.

Ferrari and M4 integration: welded equivalent vertices, removed unreferenced vertex attributes, and quantized position/normal/texture-coordinate attributes to 16 bits with glTF Transform 4.5.1. Quantization reduces numerical precision, not the triangle count. Material colors retained, no surface decimation. Corvette integration retains its original binary. All three use lossless base64 text transport and runtime centering/scaling. Actual desktop/mobile viewport renders inspected, not a physical-phone performance test.


## Nissan GT-R R35 and Hyundai IONIQ 5

Source pages, current public metadata and actual download dialogs checked on 22 November 2026. Both list Creative Commons Attribution 4.0, http://creativecommons.org/licenses/by/4.0/. Embedded source attribution is retained. No manufacturer endorsement or exact year/trim certification is implied.

- **Nissan GT-R R35 (2017 legacy catalog entry)**: 2008 Nissan R35 GTR by Ricy, https://sketchfab.com/ngon_3d, https://sketchfab.com/3d-models/2008-nissan-r35-gtr-02528b275a2d4bcaabe6937cf7c902b1. Creator describes their mid-poly model created in 2019. Early 2008 R35 body, not the 2017 facelift, stated visibly in Arabic and English. Not mapped to the 2024 Premium or NISMO. Blue original paint, three embedded 1k-option source images, visible interior simplified by the source. Original 5,005,608-byte GLB, integrated 2,738,420-byte GLB, all 60,632 rendered surface triangles retained. Welded equivalent vertices, pruned unused attributes and applied 16-bit vertex quantization with glTF Transform 4.5.1, no surface decimation or image/color changes. UV attributes outside the quantizer's supported range remained unchanged. Quantization reduces numerical precision. Lossless base64 text transport, runtime centering/scaling.
- **Hyundai IONIQ 5 Standard Range, Long Range RWD and Long Range AWD (2024 catalog entries)**: Hyundai Ioniq 5 - Lowpoly by andikapratamaw, https://sketchfab.com/andikapratamaw, https://sketchfab.com/3d-models/hyundai-ioniq-5-lowpoly-675e78311e8440d88714bd212cb7a8fb. Creator identifies their original as a low-poly 2022 IONIQ 5. Same pre-refresh body/generation for the three 2024 stock powertrain variants, not exact trim, wheel or equipment replicas. One shared body asset, not three different models. Not mapped to the IONIQ 5 N. Original 3,737,856-byte GLB unchanged, 12,413 rendered surface triangles, three embedded images from the 1k download option. Lossless base64 text transport, runtime centering/scaling only. Original warm-gray paint and dark glass retained.

Both body assets inspected in actual desktop and 390px mobile viewport renders. This does not establish physical-phone FPS.


## Honda Civic sedan, shared early 2022 body

Honda Civic 2022 by Ricy (https://sketchfab.com/ngon_3d), https://sketchfab.com/3d-models/honda-civic-2022-free-download-d5ca29a5d2f341b691118ffb5560b19b. Current source page, public metadata and actual download dialog checked on 22 November 2026. Free Creative Commons Attribution 4.0: http://creativecommons.org/licenses/by/4.0/. Creator describes an original model based on limited reveal references. Approximate early 2022 eleventh-generation sedan body, shared by the 2025 Civic Sedan LX, Sport Hybrid and Si catalog entries. Not the 2025 facelift, not exact trim/wheels/equipment, not Type R. This limitation appears in Arabic and English captions. One shared asset, not three distinct bodies. Manufacturer confirms the 2025 Civic refresh continues the eleventh generation: https://hondanews.com/en-US/honda-automobiles/releases/new-2025-honda-civic-pricing-and-fuel-economy-ratings-confirmed-begins-arriving-at-dealers-today.

Original 3,744,864-byte GLB, integrated 1,231,568-byte GLB. All 63,329 rendered surface triangles retained. Equivalent-vertex welding, unused-attribute pruning and 16-bit vertex quantization with glTF Transform 4.5.1, no surface decimation. Quantization reduces numerical precision. Embedded image bytes retained; original source material colors retained. Lossless base64 text transport, runtime centering/scaling. No exact-year/trim certification, manufacturer endorsement or physical-phone FPS claim.


## Lanos sedan and Honda S2000

Current source pages, metadata and free download dialogs checked on 22 November 2026. Both list Creative Commons Attribution 4.0, http://creativecommons.org/licenses/by/4.0/. No manufacturer endorsement or exact year/trim certification is implied.

- **Chevrolet Lanos (2000 legacy entry)**: low-poly Daewoo Lanos by D_U (https://sketchfab.com/DU1701), https://sketchfab.com/3d-models/low-poly-daewoo-lanos-537cf27c1f354cd79c4d990759d2da4c. Blue low-poly four-door Lanos sedan with simplified interior, steel wheels and Daewoo-style grille/badging. It represents the Lanos sedan body, not exact Chevrolet badging or 2000 equipment. The source identifies the shared Daewoo/ZAZ/Chevrolet Lanos model. Visible Arabic/English caveat retained. Original 1,830,692-byte GLB, integrated 929,260-byte GLB; all 26,333 rendered surface triangles retained. Equivalent-vertex welding, unused-attribute pruning and 16-bit vertex quantization with glTF Transform 4.5.1, no surface decimation, original material base colors retained. No embedded images. Quantization reduces numerical precision. Lossless base64 transport, runtime centering/scaling and front-facing orientation.
- **Honda S2000 (2000 legacy entry)**: Honda S2000 (Low-Poly) by 9Green (https://sketchfab.com/9Green), https://sketchfab.com/3d-models/honda-s2000-low-poly-3c424b5875004f5cab46a0a845816643. Creator's reference-based Blockbench S2000 recreation, stylized yellow/orange pixel textures and closed soft top. Same S2000 roadster model family, not an exact year/trim replica, with a visible Arabic/English caveat. Original 384,404-byte GLB unchanged; 4,178 rendered surface triangles, four embedded images. Original default static pose retained; source animation is not played and no gameplay/animation feature was added. Lossless base64 transport, runtime centering/scaling and front-facing orientation.

Both models inspected in actual desktop and 390px mobile renders. This does not establish physical-phone FPS. Lanos reference: https://www.rac.co.uk/drive/car-reviews/daewoo/lanos/lanos-1997-2003/. S2000 body reference: https://hondanews.com/en-US/honda-automobiles/releases/release-4bedfb5cb00b34a841f9f6004c34c870-honda-s2000-body.


## Lamborghini Revuelto

- **Lamborghini Revuelto (2024 catalog entry)**: Free Lamborghini Revuelto by ALIEEEN (https://sketchfab.com/ALIEEEN), https://sketchfab.com/3d-models/free-lamborghini-revuelto-cf52245eb68f48daa909c7ad2a8deaa3. Current model page and free download dialog checked on 22 November 2026, Creative Commons Attribution 4.0, http://creativecommons.org/licenses/by/4.0/. Creator also allows personal/commercial projects in the description, while asking that the model not be sold on its own or in a pack. This is a free game project, not a standalone asset sale. Attribution is retained regardless of the description's optional-credit wording.
- Orange Revuelto with visible interior, engine and Y-shaped front lights. Same model representation, not certification of exact year/trim equipment, as stated visibly in Arabic and English. No manufacturer endorsement is implied.
- Source GLB 5,679,708 bytes (1k download option), integrated GLB 3,870,164 bytes. All 91,561 rendered surface triangles and all nine embedded image byte sequences retained. Original material base colors retained. Equivalent-vertex welding, unused-attribute pruning and 16-bit vertex quantization with glTF Transform 4.5.1, no surface decimation. Out-of-range UVs stay floating point. Quantization reduces numerical precision. Lossless base64 transport and runtime centering/scaling only; default static source pose, no added animation/gameplay.
- Actual desktop and 390px mobile renders inspected. This does not establish physical-phone FPS. Body reference: Lamborghini's 2024 brochure, https://www.lamborghini.com/original/DAM/lamborghini/facelift_2019/model_detail/revuelto/2024/brochure/REVUELTO_DIGITAL_BROCHURE_EN_2024.pdf.


## Rimac Nevera and Bugatti Chiron

- **Rimac Nevera (2024 catalog entry)**: Rimac Nevera by 3dblender_1, https://sketchfab.com/3dblender_1, https://sketchfab.com/3d-models/rimac-nevera-a56cbbb94174426c8011031ca6ca24ac. Current source page and free 1k GLB download dialog checked on 22 November 2026, Creative Commons Attribution 4.0, http://creativecommons.org/licenses/by/4.0/.
- The Nevera contains a brake component credited by its creator to **Vladi**, https://sketchfab.com/vladivpg: Brake Disk and Caliper, https://sketchfab.com/3d-models/brake-disk-and-caliper-5feda9dbf20a49cf9fd29d550e55e4b9 (creator's short link https://skfb.ly/6Xy8o). Its original source page and free download dialog were independently checked on 22 November 2026, Creative Commons Attribution 4.0, http://creativecommons.org/licenses/by/4.0/. The visible Nevera caption credits both 3dblender_1 and Vladi. No separate component binary was downloaded.
- The Nevera source calls its reference 2022 and also uses the former C_Two name. The actual community body was visually compared with Rimac's production Nevera image, including its bonnet vent, necktie side intake and gold wheel design, rather than treating concept and production bodies as interchangeable. This is a production Nevera representation, not certified exact 2024 equipment. This limitation is visible in Arabic and English. References: https://www.rimac-newsroom.com/press-releases/rimac-automobili/rimac-nevera-takes-the-hypercar-market-by-storm and https://www.rimac-automobili.com/nevera/design/.
- **Bugatti Chiron (2019 legacy catalog entry)**: Free Bugatti Chiron by ALIEEEN, https://sketchfab.com/ALIEEEN, https://sketchfab.com/3d-models/free-bugatti-chiron-374890e62c5a44e9a739ca638b6e0a18. Current source page and free 1k GLB download dialog checked on 22 November 2026, Creative Commons Attribution 4.0, http://creativecommons.org/licenses/by/4.0/. Creator supplies a modeling-timelapse link and permits personal/commercial projects, while requesting no standalone asset or pack sale. This game is not an asset sale. Attribution is retained regardless of optional-credit language in the description.
- The Chiron is a standard blue two-tone Chiron representation, with horseshoe grille, four-square headlamps and C-line. Exact 2019 trim/equipment is not certified, as stated visibly in Arabic and English. Body references: https://www.bugatti.com/en/models/chiron and https://newsroom.bugatti.com/en/press-releases/the-design-dna-of-the-bugatti-hyper-sports-cars. No manufacturer endorsement is implied for either model.
- Nevera: source GLB 1,726,428 bytes, integrated GLB 789,064 bytes. All 29,180 rendered surface triangles and all 4 embedded image byte sequences retained, with used material base colors unchanged. Equivalent-vertex welding, unused-attribute pruning and 16-bit vertex quantization using glTF Transform 4.5.1, no surface decimation. Out-of-range UVs remain floating point. Quantization reduces numerical precision. Lossless base64 transport and runtime centering/scaling only. Creator paint and static source pose retained.
- Chiron: source GLB 6,008,984 bytes, integrated GLB 4,237,032 bytes. All 97,485 rendered surface triangles and all 11 embedded image byte sequences retained, with used material base colors unchanged. Equivalent-vertex welding, unused-attribute pruning and 16-bit vertex quantization using glTF Transform 4.5.1, no surface decimation. Out-of-range UVs remain floating point. Quantization reduces numerical precision. Lossless base64 transport and runtime centering/scaling only. Creator paint and static source pose retained.
- Actual desktop and 390px mobile renders inspected. This does not establish physical-phone FPS. No catalog/save IDs or gameplay features changed.


## Loading update, 22 November 2026

Six existing body assets (Civic sedan, BMW M4 G82, Ferrari 458, RX-7 Veilside, Lanos and Nevera) use Meshopt geometry packing. No surface decimation or additional vertex quantization was applied in this update. Vertex attribute values, node transforms, embedded image bytes and original material JSON are retained. Triangle index encoding may cyclically rotate the three indices within a triangle, preserving its winding and surface. Original attribution and year/trim caveats above continue to apply. Lossless base64 text transport remains in use. Older asset files remain as release history but are no longer selected for these six bodies.

The unmodified meshoptimizer 1.2.0 decoder is included as MeshoptDecoder.js. Source: https://github.com/zeux/meshoptimizer. MIT license and copyright notice are included in MESHOPT-LICENSE.md.

The loader now keeps the three most recently used model resources resident, releases older resources, cancels superseded downloads, permits retries after a failed download and rejects stale render completions. Progress text distinguishes downloading from model preparation. Catalog/save IDs, model coverage and gameplay are unchanged.


## Shared Mazda CX-5 body

- **Mazda CX-5 2.5 S and 2.5 Turbo (2024 catalog entries)**: Mazda CX-5 2020 by ItsDiyor, https://sketchfab.com/ItsDiyor, https://sketchfab.com/3d-models/mazda-cx-5-2020-ea176c6ebe814be3b06641bf038f8642. Current primary metadata, model/creator pages and actual free download dialog checked 22 November 2026. Creative Commons Attribution 4.0, http://creativecommons.org/licenses/by/4.0/. Embedded source attribution retained.
- One shared second-generation pre-facelift 2020 body, not two distinct body models. It is not the 2022-on facelift, and is not an exact 2024 trim, lighting, wheel or equipment replica. This limitation is stated in Arabic and English captions. Generation and facelift comparison: https://news.mazdausa.com/2021-09-14-2022-Mazda-CX-5-Receives-Elegant-Enhancements and https://www.seacoastmazda.com/2024-mazda-cx-5-trims-packages. No manufacturer endorsement is implied. The source description gives no modeling-history account.
- Source 1k-option GLB: 14,922,332 bytes, integrated GLB: 4,629,328 bytes. All 178,364 rendered surface triangles and all eight source embedded image byte sequences retained. Equivalent-vertex welding, unused-attribute pruning, material deduplication, 16-bit vertex quantization and Meshopt storage packing. Quantization reduces numerical precision, not the triangle count. No surface decimation or texture generation. Original source paint retained, lossless binary publication, runtime centering/scaling only. Actual desktop and 390px mobile viewport renders inspected; physical-phone performance not measured.


## Audi RS 6 Avant performance body

- Low Poly Audi RS 6 Avant by yokatann, https://sketchfab.com/yokatann, https://sketchfab.com/3d-models/low-poly-audi-rs-6-avant-7278278dc3664c42a640c316781f98e7. Free Creative Commons Attribution 4.0, http://creativecommons.org/licenses/by/4.0/, confirmed in actual download dialog, primary metadata and embedded source credits on 22 November 2026. Source also carries a NoAI label, retained here: not for generative-AI datasets, development or input. This use is a rendered game asset, not generative-model training or generation.
- One low-poly C8 RS6 Avant body represents the existing 2024 performance entry, not an exact year/trim, wheels or equipment replica. Original red paint retained and fixed-paint controls explained. Performance-specific exterior differences: https://media.audiusa.com/models/rs-6-avant/ and https://www.audi.com/en/the-audi-rs-6-avant-and-the-new-audi-rs-6-avant-performance-12345/exterior-design-12350 . Visible Arabic/English caveats.
- Source links this Blender modeling-process video: https://www.youtube.com/watch?v=agkJ3B8kmiI. This is provenance support from the creator, not independent authorship certification.
- Original 536,560-byte GLB unchanged, 6,850 triangles,20 meshes,10 materials,no embedded images. Lossless base64 transport only; runtime centering/scaling and half-turn orientation. No decimation, material recolor or texture generation. Desktop and 390px mobile viewport inspected, not a physical-phone benchmark.


## Honda Civic EK body

- Honda Civic Type R (EK9) - Low Poly & Stylized by marksform, https://sketchfab.com/marksform, https://sketchfab.com/3d-models/honda-civic-type-r-ek9-low-poly-stylized-599b4155e11d41ee9ea9d8306b4b5cff. Free CC BY4, http://creativecommons.org/licenses/by/4.0/, actual dialog and primary metadata checked 22 November 2026. Original embedded attribution retained: madizon (https://sketchfab.com/madizon), with the same asset source URL/title/license. The historical profile URL no longer resolves; a rename is not independently established, so both names are credited rather than dropping the embedded name. Creator description states made in Blender 3.0; current portfolio describes original low-poly modeling: https://marksform.com/3d-modeling/.
- Source NoAI label retained: not for generative-AI datasets, development or input. This is a rendered game asset, not generative-model training or generation.
- Stylized sixth-generation EK9 Type R hatch body represents the existing general Civic EK entry, not a claim of Type R engine/performance, exact1999 facelift, trim or factory paint. Catalog figures remain original game data. Visible Arabic/English caveats. Generation/body reference https://global.honda/en/newsroom/worldnews/1997/4970822b.html ; facelift details https://supercarnostalgia.com/blog/honda-civic-ek9-type-r .
- 487,484-byte original2kGLB unchanged,3,440triangles,7meshes,4materials,3embeddedimages. Lossless base64transport only, runtimecentering/scaling. Original yellowpaint retained with fixed-paintcontrol explanation. No decimation/materialrecolor/texturegeneration. Actual desktop and390pxmobileviewport inspected,notphysicalphoneperformancebenchmark.


## Toyota GR Supra fifth-generation A90 body

- Toyota GR Supra Low Poly_Texture Update by BedoyaCamilo: https://sketchfab.com/3d-models/toyota-gr-supra-low-poly-texture-update-2acd2a185dd44ad4b9f31c53ecba3bfc , https://sketchfab.com/BedoyaCamilo . Free CC BY4 http://creativecommons.org/licenses/by/4.0/ actual download dialog and embedded source/author/license checked22November2026. Original upload describes making the model: https://sketchfab.com/3d-models/toyota-gr-supra-low-poly-dde99250ad09409499862d4436523fcf . Later upload describes updating its textures.
- Existing GR Supra2.0 and3.0 catalog entries share this same-generation A90body,not exact2024equipment/wheels/brake/trim replicas. Visible Arabic/English caveat; fixed sourcepaint controls explained. Factory reference https://pressroom.toyota.com/powerful-performance-striking-style-the-2024-toyota-gr-supra/ confirms fifthgeneration and different equipment/performance acrossgrades. No factoryspecs changed.
- Original2,466,832-byteGLB unchanged,20,660triangles,1mesh,1material,3embeddedimages. Lossless14-part base64transport. No decimation,texturegeneration/reduction,materialrecolor or invented geometry. Source redpaint retained. Actual desktop/mobileviewport renders inspected,not a physicalphoneperformancebenchmark.


## 2024 Ford Mustang GT, seventh generation S650

- 2024 Ford Mustang GT (Low Poly), Legendeniuss: https://sketchfab.com/3d-models/2024-ford-mustang-gt-low-poly-1592c80ca5cc4027a2a72a6fad784e1b . Author: https://sketchfab.com/Legendeniuss . CC BY 4.0 http://creativecommons.org/licenses/by/4.0/ . Current free download dialog and embedded GLB source/author/license checked 22 November 2026. Creator describes building it with a low-resolution blueprint; their portfolio contains other low-poly cars.
- Original 286,548-byte GLB, 6,088 triangles, 13 meshes, 7 materials, no images. No geometry/material/color changes. Two-part lossless base64 transport. Original blue-grey paint retained; paint control disabled and explained. Blueprint-built stylized S650 GT, fine equipment detail simplified, not a factory-exact replica. Caveat shown in Arabic and English.
- Only the existing 2024 GT entry uses this body. The 2005 GT retains its old separate model. EcoBoost remains procedural because its front end differs. Dark Horse uses its separate model below. Factory body/design reference: https://www.fromtheroad.ford.com/eur/en/articles/2024/new-ford-mustang-is-an-icon-reborn . No factory specs changed.


## 2024 Ford Mustang Dark Horse, S650

- Ps1 Low-poly 2024 Ford Mustang Dark Horse by LolAndPop!: https://sketchfab.com/3d-models/ps1-low-poly-2024-ford-mustang-dark-horse-d15e5daca29a4b7384b5743f1ec53bd1 , creator https://sketchfab.com/LolAndPop . CC BY 4.0 http://creativecommons.org/licenses/by/4.0/ . Actual free download dialog and embedded source/author/license checked 22 November 2026. Creator describes making it in Blender with photo textures; portfolio contains similarly authored PS1-style cars. PS1 describes the art style, not an extracted game asset.
- Original 361,792-byte GLB, 1,876 triangles and one embedded image unchanged. Lossless three-part base64 transport. No decimation, recolor, invented details or texture replacement. Original blue/black paint and photo texture retained. A visible Arabic/English caption explains the intentionally simplified PS1/photo-textured style and equipment differences.
- Only the existing 2024 Dark Horse entry is mapped. The 2024 GT and 2005 GT keep their separate bodies; EcoBoost remains procedural. Factory design reference describes the Dark Horse grille, dark headlamp surround, fixed rear wing and other body details: https://www.fromtheroad.ford.com/eur/en/articles/2024/new-ford-mustang-is-an-icon-reborn . No catalog/spec/save/gameplay changes.


## Nissan GT-R Premium, R35 body

- LowPoly Car Pack (Free) by Eihab_3D, embedded author ehabjundi5: https://sketchfab.com/3d-models/lowpoly-car-pack-free-f431bdea263d4481b52336a68ebd7671 , https://sketchfab.com/ehabjundi5 . Actual free download dialog and original embedded attribution checked 22 November 2026: CC BY 4.0, http://creativecommons.org/licenses/by/4.0/ . Creator has a portfolio of similarly styled cars; this does not independently certify authorship. No explicit game-extraction provenance found.
- Selected only the orange R35 from the four-car pack. The stylized body resembles the 2017-era front, not the revised 2024 fascias, grille or rear wing. Existing 2024 Premium entry receives a same-generation representation with this distinction visible in Arabic and English. It is not a claim of exact Premium equipment. NISMO remains procedural; the existing 2017 legacy entry keeps its own model. References: https://usa.nissannews.com/en-US/releases/us-2017-nissan-gt-r-press-kit and https://usa.nissannews.com/en-US/releases/2024-nissan-gt-r-receives-updated-aerodynamics-t-spec-special-edition-and-heritage-paint-options .
- Original pack 2,504,768 bytes. Selected R35 15 meshes, 9,724 triangles, no textures. Unused pack nodes/meshes/materials/buffer data removed. Selected geometry, materials and transforms retained. Meshopt storage packing produces a 318,640-byte GLB; decoded accessor values, triangles and transforms checked equal, no surface decimation or new vertex quantization. Two lossless base64 parts. Fixed original orange paint; controls disabled and explained. Actual desktop/390px viewport renders inspected, not a physical-phone benchmark. Catalog, save IDs and gameplay unchanged.

## Hyundai Excel X2 body

- 1990 Hyundai Excel by m3ika (https://sketchfab.com/m3ika3D), https://sketchfab.com/3d-models/1990-hyundai-excel-eaa8b99f11c54df58d00cd3873895e02, Creative Commons Attribution4.0 (http://creativecommons.org/licenses/by/4.0/). Current source page and actual free download dialog checked22November2026. Source and embedded creator/license match.
- 1990-era X2 four-door sedan representation for the legacy1997HyundaiExcel entry, not exact1997local facelift, equipment or factory specification. Arabic and English captions state this. Egyptian-market generation basis: https://www.aldawlanews.com/991482 identifies1991-1999EgyptianExcel as X2and notes the1991facelift; https://hatgebk.com/en/catalog/hyundai/excel/1997 independently labels1997Excel X2sedan. This is not a claim that all countries used Excel for the same generation; some used the name for AccentX3.
- Source GLB3915208bytes, packed2648412bytes. Exact decoded accessors, winding-preserving triangle indices, embedded image bytes and node transforms verified before/after Meshopt packing. No decimation,newquantization,image generation or paint change. Runtime centering/scaling only.15base64parts.


## Porsche 911 Turbo S, 992 body

- Community low-poly 992 Turbo S by S.K., https://sketchfab.com/Streetsraker , source https://sketchfab.com/3d-models/porsche-911-turbo-s-992-b364d1710bc24c76ac0c613fbbaea8f0 . CC BY 4.0 http://creativecommons.org/licenses/by/4.0/ . Current source page, actual free download dialog and embedded attribution checked 22 November 2026. Creator portfolio contains similarly styled low-poly cars. No explicit game-extraction provenance found; this is not independent certification of authorship.
- Original 1,757,520-byte GLB, 21,304 triangles, 100 meshes, 17 materials and one embedded image retained. No geometry reduction, paint recolor, generated texture or material edits. Ten lossless base64 transport parts. A packing experiment did not pass exactness checks, so its output was not used. Original dark-green paint and black glass retained.
- Only the existing 2021 Porsche 911 Turbo S entry receives this 992 body. Exact year/equipment are not certified; visible Arabic and English captions state its simplified community-model status. Other 911 entries remain unchanged. Catalog/save IDs, gameplay, bounded model cache, cancellation and stale-completion guards unchanged. Desktop and 390px viewport renders inspected, not a physical-phone benchmark.


## Explicit different-car visual substitute for i4 only

The 2022 BMW i4 M50 catalog entry uses the existing CC BY 4.0 SharkyStudios low-poly BMW M3 G80 body as an explicitly labeled VISUAL SUBSTITUTE, not an i4 mesh. User requested the closest-looking available alternative for this target on November23 2026 after exact free candidates failed qualification. Tall paired grille, four doors and slim lamps make it a closer qualified alternative than the available two-door M4; the sedan roof/trunk, open grille, wider M3 body and petrol-specific rear are visibly different. The actual M3 source and its original attribution remain unchanged: https://sketchfab.com/3d-models/low-poly-bmw-g80-m3-ea3e807ff69e40fe82c5577ee9f0a2f4 .

Factory i4 reference: https://newsroom.bmwgroup.com/americas/the-new-2022-bmw-i4-edrive40-and-i4-m50/ . The reference describes the four-door Gran Coupe roof, large tailgate, largely blocked kidney grille and exhaust-free rear. This substitution does not alter i4 name, year, statistics, save ID or gameplay. No new mesh or body download is added, and source green paint is retained. This is one different-car approximation in addition to the existing46model-family visual entries, not47matching i4/model-family replicas. Distinct bodies remain40. This scope applies only to i4, not unmatched catalog entries generally.

## Explicit different-car visual substitutes (23 November 2026)

Eight catalog entries, in addition to the i4 above, reuse an existing CC BY body from another car as an explicitly labeled VISUAL SUBSTITUTE. The user reviewed and approved these eight in numbered images on 23 November 2026. No new mesh, texture or download is added; each source body keeps its original attribution, license and paint (see the entries above). Catalog name, year, statistics, save ID and gameplay are unchanged. These are not counted as matching model-family representations. Distinct body files remain 40. This scope covers only the eight cars below, not other catalog entries.

- Chevrolet Corvette E-Ray (2024) uses the Corvette C8 Stingray body. The E-Ray is 3.6 in wider with Z06-style widebody and a different front fascia ( https://news.gm.com/home.detail.html/Pages/news/us/en/2023/jan/0117-eray.html , https://www.corvsport.com/breaking-gm-reveals-2024-e-ray/ ).
- Chevrolet Corvette Z06 (2024) uses the same C8 body. The Z06 has wide front and rear fascias and a centre-exit exhaust ( https://pressroom.chevrolet.com/content/dam/Media/images/US/Vehicles/Chevrolet/Cars/Corvette_Z06/2024/2024-Chevrolet-Corvette-Z06-082323.pdf , https://www.autotrader.com/comparisons/2024-chevrolet-corvette-choosing-the-right-trim ).
- Nissan GT-R NISMO (2024) uses the 2017-era R35 body used for GT-R Premium. NISMO has its own carbon fascias, trunk lid and swan-neck rear spoiler, and 2024 fascias were redesigned ( https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf , https://usa.nissannews.com/en-US/releases/2024-nissan-gt-r-press-kit ).
- Hyundai IONIQ 5 N (2025) uses the standard IONIQ 5 body. The N is about 50 mm wider, 20 mm lower and 80 mm longer, with a larger rear spoiler and its own front fascia ( https://www.hyundai.news/uk/articles/press-releases/ioniq-5-n-range-pricing-specification-and-technical-information.html , https://www.prnewswire.com/news-releases/hyundai-releases-pricing-for-ioniq-5-n--the-new-benchmark-for-high-performance-all-electric-driver-engagement-302086766.html ).
- McLaren 750S (2024) uses the 720S body. The 750S has a lower nose with a longer splitter, narrower headlight intakes, new side intakes and a larger rear wing ( https://www.topgear.com/car-news/supercars/new-mclaren-750s-a-720s-turned-a-notch , https://www.autocar.co.uk/car-review/mclaren/750s ).
- Porsche 911 Carrera S (2020) uses the 992 Turbo S body. The Turbo S is wider at the rear with side air intakes and its own front and rear aprons ( https://www.porsche.com/international/models/911/911-turbo-models/911-turbo-s/ ).
- Mazda MX-5 Miata RF Club (2024) uses the open-top ND roadster body. The RF has a three-piece power-retractable fastback hardtop that this body does not show ( https://mazdamediapacks.com/en/archive-mazda-mx-5-rf-2024/details/styling.html ).
- Ford Mustang EcoBoost (2024) uses the S650 GT body. The EcoBoost has a calmer front fascia, a flat hood without vents and dual exhaust tips; the GT adds hood vents, a splitter and quad tips ( https://www.topspeed.com/2024-ford-mustang-gt-vs-dark-horse-vs-ecoboost/ , https://www.edmunds.com/ford/mustang/2024/trims/ ).

The listed differences describe the real cars from the cited sources. They are not a claim about every detail of the community meshes.


## Original simplified bodies, 23 November 2026

The first two original model-specific studies were accepted at their shown simplified quality. They are not community downloads, different-car substitutes or exact factory replicas. No reference photographs are bundled or used as textures.

- Toyota Land Cruiser 2024: original J250-inspired body, round 1958-style lamps, angular roof, simplified bumper/lamp/wheel details. 27,572 triangles, 11 material groups, 1,822,812 bytes. Catalog hybrid specifications remain separate from the simplified trim appearance.
- Nissan Z Performance 2024: original simplified RZ34 Performance body, angular fascia and lamps, generic wheels. Not NISMO. 46,652 triangles, 8 material groups, 1,874,240 bytes.

The reference-photo license credits for the private comparisons do not label these original models as downloaded CC BY assets. The screenshots and photographs are not included in the demo.

Coverage: 46 community model-family representations, 5 original simplified model-specific representations, 9 explicitly labeled different-car substitutes, 40 procedural. 45 distinct body definitions, including 40 community and 5 original. No catalog or save ID changes.

Original bodies are delivered as compact model-specific geometry builders in preview.js and merged by material at runtime. The GLB byte sizes above describe the verified study exports, not added network downloads. The builders retain the same construction geometry, materials and triangle counts.


### Nissan Z NISMO original variant

The Z NISMO is a separate original variant of the simplified Z shell, not an unchanged Performance substitute. Extended nose, trapezoid grille opening and fine mesh treatment, corner canards, dark roofline, black wheel treatment, red lower sills and corner accents, reshaped rear aero and a three-piece deck spoiler are separately modeled. 53,708 triangles, 8 merged material groups. Lamps, wheels and aero surfaces remain deliberately angular and simplified, not exact factory detail.

Primary reference: https://usa.nissannews.com/en-US/releases/2024-nissan-z-nismo-press-kit

Photographic shape references inspected, not bundled or used as textures:
- Kazyakuruma, CC0, MY2024 Japanese display car: https://commons.wikimedia.org/wiki/File:Nissan_Z_NISMO%2C_2023%2C_front.jpg
- Pangalau, Australian MY2024 car, side and rear: https://commons.wikimedia.org/wiki/File:2024_Nissan_Z_NISMO_-_03.jpg and https://commons.wikimedia.org/wiki/File:2024_Nissan_Z_NISMO_-_04.jpg

This body is original geometry and has no downloaded game-extracted mesh.


### Volkswagen Golf GTI Mk8 original body

Original simplified five-door Mk8 GTI geometry, not a downloaded mesh or Golf R substitute. Measured envelope follows the 2024 US press kit, with four-door glazing, Golf C-pillar, wide honeycomb lower opening, red upper grille line, simplified five-unit fog-light treatment, roof spoiler, split rear lamps and twin outboard tailpipes. Angular bumpers, coarse lamps and generic broad-blade wheels are intentional limitations, visible in Arabic and English captions. 50,378 triangles, 8 merged material groups. Geometry is merged by material and carried as a small JavaScript builder, not a new GLB download. No catalog/save IDs or gameplay changes.

Manufacturer reference: https://media.vw.com/press-kits/2024-golf-gti-press-kit . Same-generation 2022 front/rear photographs were visually checked, not proof of every 2024 trim detail: https://commons.wikimedia.org/wiki/File:2022_Volkswagen_Golf_GTI_in_Oryx_White_Pearl,_Front_Left,_04-24-2022.jpg and https://commons.wikimedia.org/wiki/File:2022_Volkswagen_Golf_GTI_in_Oryx_White_Pearl,_Rear_Left,_04-24-2022.jpg . Photos by Elise240SX, CC BY-SA 4.0, are references only, not bundled or used as textures.

Ready-made qualification: the CC BY 4.0 Car2022 Mk8 GTI listing (https://sketchfab.com/3d-models/volkswagen-golf-8-gti-a8-e87d7c0f8937481db236529beb5ecab7) did not establish an original-source chain; held, not downloaded or integrated. Other targeted results were very heavy with restrictive editing text, or an aftermarket widebody with unknown origin. A license badge alone was not treated as source proof.


### Volkswagen Golf R Mk8 original variant

Separate simplified pre-facelift Mk8 Golf R variant based on the original GTI hatch shell, not an unchanged GTI substitute. Twin outer intakes with horizontal louvers and lower body-color wings, blue/white upper grille line, silver mirror caps, deeper sills, extended two-piece roof spoiler, diffuser, quad exhaust tips, split-spoke wheels and blue calipers are separately modeled. Angular lamps, flat bumpers and coarse wheel/aero detail remain, disclosed in Arabic and English. 51,144 triangles, 8 merged material groups, compact JavaScript construction with no new asset download. No catalog/save IDs or gameplay changes.

Manufacturer reference: https://media.vw.com/press-kits/2024-golf-r-press-kit . This is the US2024 pre-facelift, not the European2024 facelift. Same-generation2022 photographs visually inspected: https://commons.wikimedia.org/wiki/File:2022_Volkswagen_Golf_R_in_Pure_White%2C_front_left%2C_2025-04-24.jpg and https://commons.wikimedia.org/wiki/File:2022_Volkswagen_Golf_R_in_Pure_White%2C_rear_left%2C_2025-04-24.jpg . Photos by Elise240SX, CC BY-SA4.0, https://creativecommons.org/licenses/by-sa/4.0/ . References only, not bundled or used as textures, not proof of every2024 equipment detail.

Ready-made checks first: PYV2022R listing states game extraction, excluded; the DR1KING Sketchfab candidate has1.6million triangles and a333PS facelift description, unsuitable; Blendkit actual download requires Full Plan, not free. No candidate downloaded or promoted.


## Original simplified GR Yaris2021

Original geometry written for this project, not copied from a ready-made model. Three-door GR Yaris representation with angular lamps/bumpers and generic wheels, not exact factory equipment. Existing approved assets untouched. No reference images or manufacturer textures are bundled.

Reference facts: Toyota UK launch description, https://media.toyota.co.uk/the-new-toyota-gr-yaris/ .
Reference photographs, viewed only:
-2021Toyota GR Yaris1.6GXPA16R, https://commons.wikimedia.org/wiki/File:2021_Toyota_GR_Yaris_1.6_GXPA16R_(20220317).jpg ,CCBY-SA4.0.
-Rear photo by M93, https://commons.wikimedia.org/wiki/File:Toyota_GR_Yaris_(XP21)_%E2%80%93_h_03052021.jpg ,CCBY-SA3.0Germany.

No Sketchfab GR Yaris candidate was imported. The free26.4k-triangle listing did not establish original authorship; the other2021listing explicitly cites CSR2.


## Original simplified Impreza WRX2002 sedan

Original geometry written for this project. Early GD bugeye four-door sedan with round headlamps/fogs, hood scoop and low trunk wing. Simplified lamps, bumper contours and generic wheels, not exact factory equipment. No downloaded model, photograph, texture or manufacturer logo artwork is included.

Reference-only sources:
-Subaru2002brochure archive, https://www.subaru.de/hubfs/Service%20und%20Zubeh%C3%B6r/Prospektarchiv/Impreza/Impreza_Mj2002_PTA.pdf?hsLang=de .
-US sedan front photographs, https://commons.wikimedia.org/wiki/File:2002-2003_Subaru_Impreza_WRX_sedan_--_03-16-2012_1.JPG and https://commons.wikimedia.org/wiki/File:2002-2003_Subaru_Impreza_WRX_sedan_--_03-16-2012_2.JPG .
-EarlyGDJapaneseNBsedan rear photograph, https://commons.wikimedia.org/wiki/File:Subaru_IMPREZA_NB_(TA-GDA)_rear.jpg , rear shape reference only, not US trim certification.

No Sketchfab WRX candidate was imported. The357k-triangle listing showed an earlierGCcoupe; the small2002STiExtreme listing described aWRC2rally car. Neither matched this street sedan.


## Original simplified Dodge Viper GTS 1999

Original geometry and color materials made for this demo. Reference-led SR II coupe, not a scan or exact factory replica. Long hood, rearward double-bubble roof, broad rear fenders, side recesses, oval rear lamps and central twin pipes. Simplified fascia contours, lamp units, generic wheels, fixed blue/white paint. No photograph or third-party Viper mesh is redistributed.

Shape references inspected:
- 1999 front photo: https://commons.wikimedia.org/wiki/File:1999_Dodge_Viper_GTS,_Front_Right,_06-15-2021.jpg
- 1999 front photo: https://commons.wikimedia.org/wiki/File:1999_Dodge_Viper_GTS_2.jpg
- SR II GTS rear photo: https://commons.wikimedia.org/wiki/File:The_rearview_of_Chrysler_Viper_GTS.jpg
- 1999 dimensions: https://www.edmunds.com/dodge/viper/1999/st-13602/features-specs/

Ready-made review did not establish a suitable free redistributable matching mesh. One GTS listing was deleted. The small 1997 GTS used a Standard license rather than an open redistribution license, and the 1999 ACR page had no usable download or displayed license. A later-generation 2013 model was not used. No downloaded Viper asset was imported.


## Original simplified Mitsubishi 3000GT VR-4 1994

Original reference-led geometry and color materials for this demo. Wide Z16A-era liftback coupe with fixed twin-projector lamp layout, hood blisters, stacked side vents, low wing and quad pipes. Flat simplified lenses, bumper contours and generic five-spoke wheels. Not an exact equipment replica. No photograph, third-party mesh or manufacturer logo artwork is included.

Reference-only sources inspected:
- 1994 brochure pages: https://importarchive.com/brochure/mitsubishi3000gt1994_01
- 1994 front, side and rear photographs: https://www.mad4wheels.com/mitsubishi/3000gt-1994
- 1994 dimensions: https://www.edmunds.com/mitsubishi/3000gt/1994/st-2709/features-specs/

No Sketchfab candidate was imported. The small 1995 listing used CC BY-NC and the uploader's profile described collecting commercial-game meshes, which did not establish suitable source rights. The 1991 low-poly listing was an earlier pop-up-lamp body under a Standard license. A later 1999 listing was incomplete.


## Original simplified Toyota GR Corolla Core 2024

Original reference-led geometry and color materials for this demo. Five doors, wide quarters, fender extractors, hooked lamps, low roof spoiler and triple exhaust. Plain hood and roof distinguish Core from Circuit equipment. Simplified bumper curves, flat lenses and generic split-spoke wheels. Not an exact equipment replica. No photograph, third-party mesh or manufacturer logo artwork is included.

Reference-only sources inspected:
- Official2024Core photographs, front/side/rear: https://pressroom.toyota.com/image/my24_gr-corolla_core_01/
- Official trim distinctions: https://pressroom.toyota.com/hot-hatch-up-toyota-gr-corolla-adds-premium-grade-to-the-menu/
- Core dimensions: https://www.edmunds.com/toyota/gr-corolla/2024/st-402011754/features-specs/

No candidate mesh was imported. Slowpoly's lightweight listing offered no free download/license and its matching store model used Royalty Free terms. A downloadable482.5k listing had a CC BY badge but no authoring-origin evidence. Other listings were paid/Standard licensed, custom restricted or explicitly game-extracted.


## Original simplified Honda Civic Type R FL5 2024

Original reference-led geometry and color materials. Five-door fastback hatchback, hood extractor, slim three-element lamps, fender extractors, black sill, two-support wing and center triple exhaust. Simplified bumper curves, flat lenses and generic wheels, not an exact equipment replica. No photograph or third-party mesh included.

Reference-only sources inspected:
- Same-generation2023stock FL5 front/side/rear photos: https://www.mad4wheels.com/honda/civic-type-r-2023
- Official2024USdimensions/features: https://hondanews.com/en-US/releases/2024-honda-civic-type-r-specifications-features

No candidate imported. Custom FL5kit listing used BY-NC-ND and stated an obtained base model. A141.8k downloadable CC BY listing had no established authoring-origin evidence. Other leads were paid scans, restricted store models, wrong-generation bodies or explicitly game-extracted meshes.


## Original simplified Honda Accord LX 2025

Original reference-led geometry/color materials. Long four-door sedan, single hexagonal grille, slim lamps, split full-width rear light panel, no spoiler or moonroof, body-color mirrors and simplified silver17-inch-style wheels. Simplified bumper contours and flat lenses, not an exact equipment replica. No third-party mesh or photograph included.

Reference-only sources inspected:
- Same-generation2023USfront/rear photographs: https://www.mad4wheels.com/honda/accord-usa-version-2023
- Official2025USdimensions and LX equipment: https://hondanews.com/en-US/honda-automobiles/releases/release-008e554add341b8444085beaa2074089-2025-honda-accord-specifications-features

Ready-made research: 3DStarving874k and Davidson256.9k same-generation Sketchfab listings had no download option; Davidson offered the full model for sale. Remeshy anonymous generated mesh had no qualified license/origin evidence. Another mirror's CC0 attribution conflicted with the counterpart listing's author/license. CarDesi IzmoCars archive had no specified license. No candidate imported.


## Original simplified Honda Accord Sport Hybrid 2025

Original trim-specific geometry variant of the existing simplified Accord. Fixed red body, moonroof, black mirror covers, low trunk lip and simplified paired-spoke machined/black 19-inch-style wheels. Sport, not Sport-L. Simplified bumper/side contours and flat lenses; not an exact equipment replica. No third-party mesh or photo texture included.

Reference-only sources inspected:
- Official 2025 US trim specification: https://hondanews.com/en-US/honda-automobiles/releases/release-008e554add341b8444085beaa2074089-2025-honda-accord-specifications-features
- Official 2025 wheel guide and Sport wheel image: https://www.hondainfocenter.com/2025/accord/feature-guide/exterior-features/wheels-and-tires/
- Same-generation exterior references: https://www.mad4wheels.com/honda/accord-usa-version-2023

Accord ready-made screening found paid/non-downloadable models, unclear origin/license and conflicting attribution. No qualified free lightweight redistributable matching mesh was established. No candidate imported.


## Original stylized Toyota GR86 ZN8 2024

Original reference-led geometry and color materials, fixed blue paint. Low coupe, swept lamps, lower grille, fender vents, split rear lamps and twin exhaust. Simplified nose, cabin, fenders, lenses and generic wheels, not an exact replica. No third-party mesh or photographic texture included.

Reference-only sources inspected:
- GR86 body photographs: https://www.mad4wheels.com/toyota/gr-86-2022
- Toyota Canada model information: https://media.toyota.ca/en/releases/2024/what-s-new--2024-toyota-gr86.html

Ready-made candidates found were wrong-generation, restricted, uncertain-origin or below the accepted visual level, and were not imported.


## Original stylized Subaru BRZ ZD8 2024

Original reference-led geometry and color materials, fixed silver paint. Original variant of the GR86 study, sharing the core shell but with a BRZ front bumper, rounded horizontal-bar grille, reshaped corner ducts, narrower fender vents, body-color mirrors and a small deck kick. Low coupe, swept lamps, lower grille, fender vents, split rear lamps and twin exhaust. Simplified nose, cabin, fenders, lenses and generic wheels, not an exact replica. No third-party mesh or photographic texture included.

Reference-only sources inspected:
- BRZ body photographs: https://www.mad4wheels.com/subaru/brz-2022
- Subaru 2024 model information: https://media.subaru.com/pressrelease/2089/1/subaru-announces-pricing-2024-brz-sports-car

Ready-made candidates found were wrong-generation, restricted, uncertain-origin or below the accepted visual level, and were not imported.


## Original stylized Subaru WRX VB 2024

Original reference-led geometry and color materials. Hood scoop, hex grille, angular black fender cladding, wrapped rear lamps and quad exhaust. Simplified body surfaces, cabin, lenses and generic wheels, not an exact replica. No third-party mesh or photographic texture included.

Reference-only photographs inspected: https://www.mad4wheels.com/subaru/wrx-2022

Ready-made source screening found no qualified matching import. The identified PrintYourVehicle mesh was explicitly game-extracted and was excluded.


## Original stylized BMW M2 G87 2025

Original reference-led geometry and color materials. Horizontal twin kidneys, three lower intakes, single projector lamps, angular rear lenses and widely paired quad exhaust. Simplified body surfaces, cabin, lenses and generic wheels, not an exact replica. No third-party mesh or photographic texture included.

Reference-only photographs inspected: https://www.mad4wheels.com/bmw/m2-g87--2025

Ready-made source screening found no qualified matching import. Candidates were game-extracted, uncertain-origin or had redistribution restrictions and were excluded.


## Original simplified Porsche 718 Cayman 2016

Original reference-led geometry with color materials, no third-party mesh or photographic texture. Simplified body, cabin, lamps and generic wheels, not an exact replica. Base coupe only, no relabeling across the remaining trims. Previously screened ready-made candidates had wrong-generation geometry, game origins or unresolved provenance and were excluded.

Reference-only photographs: https://www.mad4wheels.com/porsche/cayman-718--2018 . Dimensions: https://www.porsche.com/international/models/718/718-models/718-cayman/ .


## Original simplified Porsche 718 Boxster 2016

Original reference-led geometry with color materials, no third-party mesh or photographic texture. Simplified body, cabin, lamps and generic wheels, not an exact replica. Base roadster only, no relabeling across the remaining trims. Previously screened ready-made candidates had wrong-generation geometry, game origins or unresolved provenance and were excluded.

Reference-only photographs: https://www.mad4wheels.com/porsche/718-boxster-2016 . Dimensions: https://www.porsche.com/international/models/718/718-models/718-boxster/ .


## Original simplified 2016 Porsche 718 Cayman S and Boxster S

Original reference-led geometry with color materials. Distinct S trim wheels, red calipers and paired round tailpipes. No third-party mesh or photo texture. Simplified bodies and wheels, not exact replicas. Ready-made-first screening remains in force.

References only: https://www.mad4wheels.com/porsche/cayman-718-s-2018 and https://www.mad4wheels.com/porsche/718-boxster-s-2016 . Trim detail source: https://autocatalogarchive.com/wp-content/uploads/2022/03/Porsche-718-Boxster-718-Cayman-2019-INT.pdf (same 982 generation brochure, 19-inch-style S wheels, red calipers and twin tailpipes).


## Original simplified 2020 718 Cayman and Boxster GTS 4.0

Original reference-led fallback geometry with dark ten-spoke wheels, red calipers, revised black front intake/lip and rear apron with separated exhausts. No downloaded mesh or photo texture. Simplified, not exact replicas. Reference-only photographs and trim details: https://newsroom.porsche.com/en/2020/products/porsche-718-gts-4-0-models-boxster-cayman-19733.html .


## Original simplified 2020 718 Cayman GT4 and Spyder

Original reference-led fallback geometry. GT4 fixed wing and Spyder double-bubble open rear deck are separately defined. No downloaded mesh or photo textures. Simplified, not exact replicas. References: https://newsroom.porsche.com/en/2019/products/porsche-718-spyder-cayman-gt4-naturally-aspired-engine-mid-engine.html and https://newsroom.porsche.com/en/press-kits/718-spyder-cayman-gt4/aerodynamik.html .


## Original simplified 2024 Hyundai Elantra N

Original reference-led fallback geometry. No third-party mesh or photo texture. Matching ready-made game-derived asset excluded, older 2021 own-creation listing wrong facelift and insufficient recognition. Reference photographs viewed, not redistributed: https://www.mad4wheels.com/hyundai/elantra-n-usa-version-2024 . Simplified, not exact.


## Original simplified 2025 Toyota Corolla LE

Original reference-led fallback geometry, not exact. No third-party mesh or photo texture. No suitable matching free licensed ready-made source established in existing source screen. References viewed, not redistributed: https://pressroom.toyota.com/let-the-good-times-keep-on-rolling-in-the-2025-toyota-corolla/ , https://www.toyota.com/content/dam/toyota/brochures/pdf/2025/corolla_ebrochure.pdf , https://www.smarttoyota.com/static/dealer-14501/corolla/23/sedan/corolla_brochure.pdf , https://commons.wikimedia.org/wiki/File:2024_Toyota_Corolla_LE.jpg and https://www.toyotaofcorvallis.com/inventory/certified-used-2025-toyota-corolla-le-fwd-4d-sedan-5yfb4mde9sp257628/ .


## Original simplified 2025 Toyota Camry LE / XSE AWD

Original reference-led fallback, not exact. No third-party mesh/photo textures. Matching ready-made candidates remain excluded as game-derived, uncertain origin, paid or unfinished/wrong generation. References viewed, not redistributed: https://pressroom.toyota.com/toyota-camry-goes-exclusively-hybrid-plus-a-new-look-and-more-technology/ , https://www.mad4wheels.com/toyota/camry-xse-awd-2025 , https://commons.wikimedia.org/wiki/File:2025_Toyota_Camry_LE%2C_front_left.jpg and https://commons.wikimedia.org/wiki/File:2025_Toyota_Camry_LE%2C_rear_left.jpg .


## Original simplified2024 Nissan Ariya e-4ORCE

Original reference-led geometry, no third-party mesh/photo textures. Matching ready-made source found was paid; free copies did not establish provenance, another original listing unavailable. References viewed, not redistributed: https://usa.nissannews.com/en-US/releases/2024-nissan-ariya-press-kit and https://www.mad4wheels.com/nissan/ariya-2023 . Official2024front photo and dimensions/e-4ORCE wheels checked against stock body photo set, no NISMO body substitution.


## Original simplified2025 Audi S3 sedan

Original reference-led geometry, no third-party mesh/photo textures. Matching free ready-made searches did not establish a stock2025S3; inspected own-creation2021A3 was wrong trim/year and weak quality, not relabeled. References viewed, not redistributed: https://media.audiusa.com/releases/617 , https://www.mad4wheels.com/audi/s3-sedan-usa-version-2025/car-wallpaper-829800 , https://www.audi.com/en/media-releases/high-performance-agile-expressive-the-new-audi-s3-15980 , https://media.audiusa.com/assets/applications/original/14705-my25-audi-a3-s3-rs-3-tech-specs-rev-051425.pdf .


## Original simplified2025 Audi RS3 sedan

Original reference-led geometry, no third-party mesh/photo textures. Matching free ready-made searches did not establish a stock2025RS3; inspected own-creation2021A3 was wrong trim/year and weak quality, not relabeled. References viewed, not redistributed: https://media.audiusa.com/releases/630 , https://www.mad4wheels.com/audi/rs-3-sedan-2025/car-wallpaper-772058 , https://media.audiusa.com/assets/applications/original/14705-my25-audi-a3-s3-rs-3-tech-specs-rev-051425.pdf .


## Original simplified2024 Tesla Model3 Performance

Original reference-led geometry, no third-party mesh or photo texture. Prior free ready-made screening did not establish a suitable matching licensed model: weak low-poly candidate and unclear-origin copies excluded. References viewed, not redistributed: https://www.tesla.com/blog/introducing-new-model-3-performance , https://www.caranddriver.com/news/a60583488/2024-tesla-model-3-performance-details/ , https://ev-database.org/car/2188/Tesla-Model-3-Performance .


## Original simplified2024 Lexus IS500 F SPORT Performance

Original reference-led geometry, no third-party mesh or photo texture. Prior free ready-made screening did not establish a suitable matching licensed model: Polycam capture without verified usable car geometry/license, print signage and unsuitable sources excluded. References viewed, not redistributed: https://pressroom.lexus.com/whats-new-2024-lexus-is-300-350-500/ , https://www.lexus.com/content/dam/lexus/documents/brochures/models/2024/MY24-Lexus-IS-Brochure.pdf , https://www.edmunds.com/lexus/is/2024/500-f-sport/features-specs/ .


## Original simplified2024 Kia EV6 GT

Original reference-led geometry, no third-party mesh or photo texture. Prior free ready-made screening did not establish a suitable matching licensed model: paid slowpoly source and matching mirrors, unresolved SketchUp conversion and editorial raw-redistribution gap excluded. References viewed, not redistributed: https://www.kiamedia.com/us/en/models/ev6/2024 , https://www.kiamedia.com/us/en/models/ev6/2024/specifications , https://www.kia.com/us/content/dam/kia/us/brochures/KIA24_Full-Line_Brochure.pdf , https://www.mad4wheels.com/kia/ev6-gt-usa-version-2023 .


## Original simplified2023 Mercedes-AMG C43

Original reference-led geometry, no imported third-party mesh or photo texture. Ready-made screening found no qualified matching asset: C43 sedan candidate has unresolved original provenance and high geometry cost, while estate/coupe and old-generation C63 are not the target body. Not an exact replica. Reference sources viewed, not redistributed: https://mercedes-benz-media.co.uk/assets/documents/original/40551-PIMercedesAMGC43eng.pdf , https://www.mercedes-benz.co.nz/passengercars/services/manuals.html/c-class-sedan-2024-09-w206-mbux/vehicle-data/vehicle-dimensions-mercedes-amg-vehicles , https://media.mbusa.com/releases/release-0cbff62111a361ef6df50814ca002af4-mercedes-benz-usa-announces-pricing-and-packaging-structures-for-2023-amg-c-43-sedan , https://www.caranddriver.com/mercedes-amg/c43-2024 , https://www.mad4wheels.com/mercedes-amg/c-43-2023 .


## Original simplified2024 Mercedes-AMG C63 S E PERFORMANCE

Original reference-led geometry. No imported third-party mesh or photo texture. Wider and longer W206 body, hood outlet, jet-wing apron, split-spoke wheels and trapezoidal outlets differ from C43. Not an exact replica. Free ready-made candidates checked: W204 sedan/Black Series and W205 C-Class are wrong generation; CGTrader W206 is base trim with raw-redistribution restrictions; matching Zifir creator model is paid (structured/live price41.30USD, fetched summary misleadingly displays0/59). References viewed, not redistributed: https://media.mbusa.com/news/2024-mercedes-amg-c-63-s-e-performance-quick-reference-guide , https://media.mercedes-benz.com/en/article/aa649bf6-cc4a-4e76-ae9b-d930ede5a6f8 , https://www.mercedes-benz.com.eg/en/passengercars/services/manuals.html/c-class-saloon-2024-02-w206-mbux/vehicle-data/vehicle-dimensions-mercedes-amg-vehicles , https://www.mad4wheels.com/mercedes-amg/c-63-s-e-performance-usa-version-2024 .


## Original simplified2024 launch Porsche Taycan Turbo GT

Original reference-led geometry, no imported mesh or photo texture. StandardGT adaptive spoiler, not Weissach fixed wing. Not an exact replica. Free ready-made-first check: ArchHive free listing creator license explicitly bars repository redistribution; Blendkit requires FullPlan;3M-triangle dannzjs CC-BY listing lacks model-specific creation evidence and is older pre-facelift appearance; Manthey racing is wrong custom variant with unresolved origin. References viewed, not redistributed: https://newsroom.porsche.com/en/2024/products/porsche-the-new-taycan-turbo-gt-35479.html , https://newsroom.porsche.com/dam/jcr:db7be217-7b2a-44a6-b2b3-3493b5baf1c1/pag-taycan-turbo-gt-td-en.pdf , https://www.mad4wheels.com/porsche/taycan-turbo-gt-2025 , https://www.carmagazine.co.uk/car-reviews/porsche/taycan-turbo-gt/ . Official2024launch dimensions4968/1998/1378mm,2900wheelbase.


## Original simplified2024 Mazda3 Turbo hatchback

Original reference-led geometry, not an exact replica. No imported mesh/photo texture. Free-ready-made-first: Gerda explicitly BeamNGmod-ripped; Cults Panczel personal-use print license; genericCC0 hatch not Mazda, prior RacingMaster/game sources excluded. Official5door4459/1797/1440mm,2726wheelbase. References viewed, not redistributed: https://news.mazdausa.com/2023-06-13-2024-Mazda3-Pricing-and-Packaging , https://www.mazdausa.com/static/manuals/2024/mazda3/contents/70070600.html , https://www.motor1.com/reviews/734191/2024-mazda3-turbo-review/ . Turbo hatchback body with glossblack grille/wheels/roofspoiler; does not change held base2.5S catalog issue.


## Original simplified2018 Porsche911GT3 991.2

Original reference-led geometry, not an exact replica. No imported mesh/photo texture. Free-ready-made-first: MakerWorld exact-name listing actually describes winglessTouring and shows0printfiles; Outlaw actual image is newer992 withfullwidthrearbar; GT3RS/custom sources not stockGT3 and origin unresolved; Get3DModels mirror lacks verified origin. Official4562/1852/1271mm,2457wheelbase. References viewed, not redistributed: https://newsroom.porsche.com/en/products/porsche-911-gt3-world-premiere-geneva-motor-show-gims-2017-13466.html , https://newsroom.porsche.com/dam/jcr:789582f9-2ea1-4feb-94b3-40f4419d8ba6/PAG_Factsheet_911GT3_10_EN.pdf , https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent=&attachmentid=1292499 , https://www.mad4wheels.com/porsche/911-991-type-ii-gt3-2018 .


## Original simplified winged Jesko

Original reference-led geometry, no imported mesh/photo texture. Launch-era2019-22 design, not exact2022 replica. Ready-made-first: Ddiaz explicit RealRacing3; JUSTGAME/kevin/JustAGuy originunresolved; BlendSwap unspecified SketchUporigin; BACKSLASH printkit actualwinglessAbsolut; SRTmirror lacksrecoverableauthorlicense, CGTrader listingRoyaltyFreecannotredistributesource. References viewed, not redistributed: https://www.koenigsegg.com/model/jesko-attack , https://www.koenigsegg.com/technical-specifications-jesko-attack , https://www.mad4wheels.com/koenigsegg/jesko-2019 , https://www.drive.com.au/news/2022-koenigsegg-jesko-production-car-revealed/ .


## Original simplified2021 FerrariSF90Stradale

Original reference-led geometry, no imported mesh/photo texture. Ready-made-first: promising originalSheep19 CCmodel actualSketchfabModelDeleted/API404 Nov24; DdiazexplicitCSR2; otherCCuploads lackorigin, Spiderwrongbody, printables2Dlogo, Freecreat252MBorigin/licenseunresolved. References viewed, not redistributed: https://www.ferrari.com/en-EN/auto/sf90-stradale , https://www.ferrarisiliconvalley.com/ferrari-sf90-stradale.html , https://www.mad4wheels.com/ferrari/sf90-stradale-2019 .4710/1972/1186mm2650wheelbase. Sourceunavailable: https://sketchfab.com/3d-models/2020-ferrari-sf90-stradale-b5bd45c9ebd54d25b990a38de04d72e2 .


## Original simplified2012 Kia Cerato TD sedan

Original reference-led geometry, no imported mesh/photo texture. Ready-made-first: exact2012 CarDesi archive license unspecified;2010TD3Dcadbrowser redistribution prohibited and account/payment requirements; SketchfabCCForte is newer generation;2010Koup is explicitForza4 derivative and wrong body. No suitable free redistributable ready-made source established. Reference images viewed only, not redistributed: https://www.kiamedia.com/us/en/models/forte/2012 , https://xr793.com/wp-content/uploads/2023/04/2012-Kia-Cerato-Specs-AUS.pdf , https://xr793.com/wp-content/uploads/2023/04/2012-Kia-Cerato-LTD-Edition-AUS.pdf , https://commons.wikimedia.org/wiki/Category:Kia_Cerato_(TD) . Dimensions4530/1775/1460mm,wheelbase2650mm.
