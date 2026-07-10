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
| `2k_ceres_fictional.jpg` | Ceres (planeta-anão) — reaproveitada | **Tatooine** (camada ficção, homenagem Star Wars) — visual de deserto pálido |
| `2k_eris_fictional.jpg` | Éris (planeta-anão) — reaproveitada | **Nibiru / Planeta X** (camada teórica) — visual gelado/distante |
| `2k_haumea_fictional.jpg` | Haumea (planeta-anão) — reaproveitada | **Vulcano, o planeta hipotético** (camada teórica) — visual rochoso cinza |
| `2k_makemake_fictional.jpg` | Makemake (planeta-anão) — reaproveitada | **Vulcan** (camada ficção, homenagem Star Trek, orbitando a estrela real 40 Eridani) — visual avermelhado |
| `2k_stars.jpg` | — | **não usado** — mantido caso troque o céu por uma esfera separada de estrelas |
| `2k_stars_milky_way.jpg` | — | glow difuso e escurecido de fundo (não é mais nítido — ver observações) |
| `2k_bennu_asteroid_nasa.jpg` | Asteroide Bennu (real, fotografado) | Objetos interestelares (1I/2I/3I) + maiores asteroides do cinturão (Ceres/Vesta/Palas) na camada "Corpos menores" |

`2k_bennu_asteroid_nasa.jpg` é diferente do resto do pacote: vem do mosaico global do asteroide
**101955 Bennu**, fotografado de verdade pela sonda **OSIRIS-REx** (NASA), via
[NASA Scientific Visualization Studio](https://svs.gsfc.nasa.gov/5069) — conteúdo produzido pelo
governo dos EUA, domínio público (sem licença CC, nem precisa). Não existe imagem de superfície de
nenhum objeto interestelar (1I/'Oumuamua, 2I/Borisov, 3I/ATLAS nunca foram resolvidos por telescópio
nenhum, são pontos de luz mesmo nos maiores observatórios) nem dos asteroides do cinturão além de
Ceres/Vesta (que o Dawn fotografou, mas não estão nesse pacote) — por isso é usada como analogia
visual de "corpo rochoso real", mesma lógica já usada pras texturas de planeta-anão reaproveitadas
acima, só que essa é uma foto de verdade em vez de arte procedural.

Observações:
- O pacote da Solar System Scope **não inclui Plutão** nem luas além da nossa (Titã, Europa, Fobos etc. não existem nesse pacote — só nas fontes alternativas que o Artur mencionou, tipo o *Planet Texture Maps Wiki*, que tem licenças variadas e precisa checar arquivo por arquivo).
- Texturas de exoplanetas/mundos fictícios ou teóricos (Mintaka b, Vulcan, Tatooine, Vulcano hipotético, Nibiru) usam as texturas "fictícias" dos planetas-anões acima **por analogia visual** — não existe imagem real desses corpos, e essas texturas foram desenhadas pela Solar System Scope justamente como representação artística de mundos sem imagem real conhecida, o que combina bem com o caso de uso. Nenhuma textura oficial/licenciada de Star Trek ou Star Wars foi usada — evitado de propósito por risco de direito autoral.
- `2k_stars_milky_way.jpg` não tem constelações reais nela (é céu genérico/procedural) — por isso não foi usada como fundo nítido, só como brilho difuso muito escurecido (opacity baixa).
