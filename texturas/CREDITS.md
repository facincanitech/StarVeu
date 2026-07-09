# Créditos das texturas

Todos os arquivos `2k_*` nesta pasta vêm do pacote gratuito de texturas de:

**Solar System Scope** — https://www.solarsystemscope.com/textures/
Licença: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

Os mesmos mapas também estão catalogados individualmente na Wikimedia Commons:
https://commons.wikimedia.org/wiki/Category:Solar_System_Scope (mesma licença CC-BY 4.0).

## Arquivos incluídos

| Arquivo | Corpo | Uso no código |
|---|---|---|
| `2k_sun.jpg` | Sol | superfície do Sol |
| `2k_mercury.jpg` | Mercúrio | superfície |
| `2k_venus_surface.jpg` | Vênus | superfície |
| `2k_venus_atmosphere.jpg` | Vênus | camada de nuvens (overlay transparente) |
| `2k_earth_daymap.jpg` | Terra | superfície (dia) |
| `2k_earth_nightmap.jpg` | Terra | luzes das cidades (emissive map) |
| `2k_earth_clouds.jpg` | Terra | camada de nuvens (overlay transparente) |
| `2k_earth_normal_map.tif` | Terra | **não usado** — TIFF não decodifica no navegador; converter pra PNG/JPG antes de plugar |
| `2k_earth_specular_map.tif` | Terra | **não usado** — mesmo motivo acima |
| `2k_moon.jpg` | Lua | superfície |
| `2k_mars.jpg` | Marte | superfície |
| `2k_jupiter.jpg` | Júpiter | superfície |
| `2k_saturn.jpg` | Saturno | superfície |
| `2k_saturn_ring_alpha.png` | Saturno | textura + alpha do anel |
| `2k_uranus.jpg` | Urano | superfície |
| `2k_neptune.jpg` | Netuno | superfície |
| `2k_ceres_fictional.jpg` | Ceres (planeta-anão) | **não usado ainda** — sem corpo correspondente no código (astronomy-engine não tem efeméride pra ele) |
| `2k_eris_fictional.jpg` | Éris (planeta-anão) | **não usado ainda** — idem |
| `2k_haumea_fictional.jpg` | Haumea (planeta-anão) | **não usado ainda** — idem |
| `2k_makemake_fictional.jpg` | Makemake (planeta-anão) | **não usado ainda** — idem |
| `2k_stars.jpg` | — | **não usado** — mantido caso troque o céu por uma esfera separada de estrelas |
| `2k_stars_milky_way.jpg` | — | panorama de fundo (skybox da Via Láctea) |

Observações:
- O pacote da Solar System Scope **não inclui Plutão** nem luas além da nossa (Titã, Europa, Fobos etc. não existem nesse pacote — só nas fontes alternativas que o Artur mencionou, tipo o *Planet Texture Maps Wiki*, que tem licenças variadas e precisa checar arquivo por arquivo).
- Texturas de exoplanetas (ex.: "Mintaka b" em Órion) são artísticas/fictícias — não existe imagem real desses planetas, só especulação.
