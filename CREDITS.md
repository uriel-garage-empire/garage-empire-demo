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
