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

All other cars use the game's original procedural bodies. Car names and designs are trademarks of their respective manufacturers; this is a free fan project with no affiliation.

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
