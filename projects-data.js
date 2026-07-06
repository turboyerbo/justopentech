// ============================================================
// PROJECTS DATA — justopen.tech
// ============================================================
// HOW TO ADD IMAGES:
//   1. Put compressed thumbnail in images/projects/thumbs/
//   2. Put full-size image in  images/projects/full/
//      (or use the same path if you only have one version)
//   3. Add an entry to the images array of the right project.
//
// FILE NAMING CONVENTION:
//   Use underscores for categories the image belongs to:
//   "Hospitality_Gaming_ballys_casino_01.jpg"
//   → shows up in both Hospitality and Gaming sections
// ============================================================

// Shorthand helpers
var T = 'images/projects/thumbs/';  // thumbnail folder
var F = 'images/projects/full/';    // full-size folder
var P = 'images/projects/';         // general (single file)

var SECTIONS = [

  // ── 01 HOSPITALITY ────────────────────────────────────────
  {
    id: 'hospitality', num: '01', title: 'Hospitality',
    projects: [
      {
        name: 'Autograph Collection Hotel Calgary',
        sub:  'on Stampede Park · NORR Architects & Engineers · 2025–Present',
        desc: '318-key, 17-storey full-service hotel. First year-round hospitality anchor in Calgary\'s emerging Culture + Entertainment District. Western gateway to Stampede Park integrated with the BMO Centre. $330M CAD · Truman Development / Marriott.',
        images: [
          { thumb: P+'01__Cover_Hospitality_Hero_16_9.png', full: P+'01__Cover_Hospitality_Hero_16_9.png', cap: 'Autograph Collection Hotel Calgary — exterior render' },
          // Upload: autograph_hotel_site_plan.jpg       → site operations plan (10-day Stampede)
          // Upload: autograph_hotel_floor_plan.jpg      → Level 01 + podium floor plan
          // Upload: autograph_hotel_elevation.jpg       → North elevation, porte-cochère
          // Upload: autograph_hotel_lobby_detail.jpg    → hit-and-miss brick screen + lighting detail
        ]
      },
      {
        name: "Bally's Baton Rouge — Hotel Renovation",
        sub:  'Belle of Baton Rouge · NORR Architects & Engineers · 2023–2025',
        desc: 'Complete interior and exterior renovation of an existing ten-storey, 242-key hotel, including guestrooms, back-of-house, MEP/FP upgrades. Concurrent with full casino redevelopment. 160,000 SF.',
        images: [
          { thumb: P+'02__Cover_Gaming_Hero_16_9.png', full: P+'02__Cover_Gaming_Hero_16_9.png', cap: "Bally's Baton Rouge — casino and hotel complex" },
          // Upload: ballys_hotel_exterior.jpg           → hotel building nighttime photo
          // Upload: ballys_casino_interior.jpg          → casino atrium interior photo
        ]
      }
    ]
  },

  // ── 02 GAMING ─────────────────────────────────────────────
  {
    id: 'gaming', num: '02', title: 'Gaming',
    projects: [
      {
        name: "Bally's — Belle of Baton Rouge",
        sub:  'Casino Adaptive Re-Use · NORR Architects & Engineers · 2023–2025',
        desc: 'Full conversion of a 50,000 SF enclosed atrium and four adjoining structures into a modern casino. DraftKings Sportsbook, Embers Smoking Lounge, bowling alley, and porte-cochère. Saw-cut 18" concrete slabs for gaming equipment installation. 232,000 SF total · $80M USD.',
        images: [
          { thumb: P+'02__Cover_Gaming_Hero_16_9.png', full: P+'02__Cover_Gaming_Hero_16_9.png', cap: "Bally's Baton Rouge — gaming complex exterior" },
          { thumb: P+'Gaming_Engineering_Research_Industrial.png', full: P+'Gaming_Engineering_Research_Industrial.png', cap: 'ShadeFX Retractable Canopy — detail isometric & sections' },
          // Upload: ballys_casino_floor_plan.jpg        → gaming floor plan with retractable canopy grid
          // Upload: ballys_canopy_sections.jpg          → retractable canopy sections + keyplan
          // Upload: ballys_east_canopy.jpg              → east entrance canopy elevation + sections
          // Upload: ballys_interior_photos.jpg          → built casino interior photos
        ]
      },
      {
        name: 'Queen Marquette Casino Renovation & Expansion',
        sub:  'NORR Architects & Engineers · 2023–2024 · Marquette, IA',
        desc: 'Phased renovation and expansion. Phase 1: PEMB back-of-house and gaming floor expansion. Phase 2: Two-storey steel-framed south addition with new lobby, extended gaming floor, and restaurant. 80,000 SF.',
        images: [
          // Upload: queen_marquette_gaming_plan.jpg
          // Upload: queen_marquette_exterior.jpg
        ]
      }
    ]
  },

  // ── 03 INDUSTRIAL ─────────────────────────────────────────
  {
    id: 'industrial', num: '03', title: 'Industrial',
    projects: [
      {
        name: 'Granite REIT — Telephone City Logistics Centre',
        sub:  'Building 1 · NORR Architects & Engineers · 2022 · Brantford, ON',
        desc: '420,339 SF warehouse and office on a 92-acre site. 12 master plan iterations → six optimized rectangular buildings. Barry Callebaut tenant: adapted for food-grade GMP production. 39,679 SF mezzanine. 2 Green Globe certificates.',
        images: [
          { thumb: P+'Industrial_.png', full: P+'Industrial_.png', cap: 'Granite REIT — QA Lab FF&E plan and 3D reference' },
          { thumb: P+'Gaming_Engineering_Research_Industrial.png', full: P+'Gaming_Engineering_Research_Industrial.png', cap: 'Granite REIT — technical details' },
          // Upload: granite_site_plan.jpg               → site plan 1:5000
          // Upload: granite_floor_plan.jpg              → ground floor plan 1:2000
          // Upload: granite_sections.jpg                → longitudinal + transverse sections
          // Upload: granite_wall_section.jpg            → wall section at office entrance
          // Upload: granite_stair_detail.jpg            → stair detail closed riser
          // Upload: granite_exterior.jpg                → exterior photo
        ]
      },
      {
        name: 'Cronos — Technical Lab Fit-Up & Compensatory Alternative Solution',
        sub:  'NORR Architects & Engineers · 2023 · Ontario, Canada · OBC F2',
        desc: 'Technical fit-up of a process area and laboratory corridor in an existing sprinklered industrial facility. Primary challenge: 1-hour FRR demising partition within an IMP building envelope (not addressed by prescriptive OBC). Solution: IMP as sprinkler-protected window system per ULC/ORD-C263.1 / CAN/ULC-S101. Full life safety plan produced for both F2 facilities.',
        images: [
          { thumb: P+'Gaming_Engineering_Research_Industrial.png', full: P+'Gaming_Engineering_Research_Industrial.png', cap: 'Cronos — fire safety plan and IMP alternative solution details' },
          // Upload: cronos_fire_safety_plan.jpg         → fire safety plan 1:300
          // Upload: cronos_imp_shaft_wall.jpg           → rated shaft wall over IMP 1:10
          // Upload: cronos_imp_details.jpg              → IMP connection details sheet
          // Upload: cronos_corridor_photo.jpg           → built corridor photo
        ]
      }
    ]
  },

  // ── 04 MIXED-USE ──────────────────────────────────────────
  {
    id: 'mixed', num: '04', title: 'Mixed-Use',
    projects: [
      {
        name: "St. Clair Phase 2 — Scoop Condos",
        sub:  'CMV Group Architects · 2016–2017 · Toronto, ON',
        desc: 'Phase 2 of Scoop Condos in Toronto\'s Carleton Village neighbourhood. 14-storey mixed-use tower replacing a former car dealership. Gestalt theory applied to façade — dark field makes balconies appear as a slim white profile. Ground floor retail. Deliverables: design concept, floor plans, MEP coordination, parking analysis, permit documentation.',
        images: [
          { thumb: P+'04_Cover_Mixed-use_hero_16_9.png', full: P+'04_Cover_Mixed-use_hero_16_9.png', cap: 'St. Clair Phase 2 — mixed-use residential' },
          { thumb: P+'Mixed-use_residential.png', full: P+'Mixed-use_residential.png', cap: 'St. Clair — floor plan, sightline diagrams, elevations' },
          // Upload: stclair_elevation_east.jpg          → mixed-use building east elevation
          // Upload: stclair_elevation_north.jpg         → mixed-use building north elevation
        ]
      },
      {
        name: 'Air Canada Express Lounge — Pearson Airport',
        sub:  'CMV Group Architects · 2016 · Mississauga, ON',
        desc: '$200K budget. Sliding oak panel entrance with concealed security doors, custom Air Canada display, Speedstile priority access gates, self-serve food counters, and full-service barista café including plumbing and electrical. Terminal 1 & 3 Pearson renovation also included Camino modular flooring, GTAA-compliant automated kiosks, and improved circulation.',
        images: [
          // Upload: aircanada_lounge_exterior_elevation.jpg
          // Upload: aircanada_lounge_interior.jpg
          // Upload: aircanada_lounge_plans.jpg
        ]
      }
    ]
  },

  // ── 05 RESIDENTIAL ────────────────────────────────────────
  {
    id: 'residential', num: '05', title: 'Residential',
    projects: [
      {
        name: "Artist's Alley — Diagrid Façade",
        sub:  'Hariri Pontarini Architects · 2018–2019 · Toronto, ON',
        desc: 'Transformative mixed-use tower in downtown Toronto. 918 residential units (340–950 SF). Led façade design and preliminary structural analysis for the diagrid system: cast-in plates 300×16×200 at each slab level, HSS 102×152 welded brackets, 4mm aluminum cladding on 22mm steel channels. Rooftop pool, terrace lounge, fitness centre.',
        images: [
          { thumb: P+'05__Cover_Residential__Hero_16_9.png', full: P+'05__Cover_Residential__Hero_16_9.png', cap: "Artist's Alley — diagrid façade detail + structural isometric" },
          // Upload: artists_alley_building_photo.jpg    → full building from street
          // Upload: artists_alley_diagrid_detail.jpg    → cast-in plates + HSS bracket detail
          // Upload: artists_alley_structural_iso.jpg    → 3D structural isometric
        ]
      },
      {
        name: 'M4 Tower & Mixed-Use High-Rise Developments',
        sub:  'CORE Architects · 2017–2018 · Mississauga & Toronto, ON',
        desc: 'M4 (Phase 3) of a multi-skyscraper complex in Mississauga alongside IBI-designed M3. 63-storey mixed-use tower. Structural coordination for complex shifting geometry, GCA/GFA calculations, rendered elevations and site plans for SPA pre-consultation. Also: 1001 Queensway, Etobikoke (CORE) — parametric structural design and graphic design.',
        images: [
          { thumb: P+'Mixed-use_residential.png', full: P+'Mixed-use_residential.png', cap: 'M4 Tower + residential development — isometric, masterplan, elevation' },
          // Upload: m4_rendered_elevation.jpg           → M4 tower marketing elevation
          // Upload: m4_masterplan.jpg                   → masterplan aerial
          // Upload: queensway_elevation.jpg             → 1001 Queensway west elevation
        ]
      }
    ]
  },

  // ── 06 RETAIL ─────────────────────────────────────────────
  {
    id: 'retail', num: '06', title: 'Retail',
    projects: [
      {
        name: 'Yellow Shoes & Cité Shoes — Store Design',
        sub:  'Rubin+Goldenberg Architects (RGA) · 2012 · Ottawa, Montréal, Rosemère',
        desc: 'Re-branding design for retail shoe stores. Cité Shoes (Place Rosemère, Nov 2012): custom arborite panels, precision aluminum mullions, bespoke furniture. Yellow Shoes storefronts: security door on hidden track, stainless steel frames, concealed lighting fixtures with removable access skirting. Full documentation package 1:5 to 1:50.',
        images: [
          { thumb: P+'06__Cover_Retail_Hero_16_9.png', full: P+'06__Cover_Retail_Hero_16_9.png', cap: 'Yellow Shoes storefront — Montréal' },
          { thumb: P+'Hospitality_Retail.png', full: P+'Hospitality_Retail.png', cap: 'Yellow Shoes — storefront details, sections, security door details' },
          // Upload: yellow_shoes_storefront_elevation.jpg
          // Upload: yellow_shoes_store_details.jpg
          // Upload: cite_shoes_interior.jpg
        ]
      }
    ]
  },

  // ── 07 ENGINEERING SYSTEMS ────────────────────────────────
  {
    id: 'engineering', num: '07', title: 'Engineering Systems',
    projects: [
      {
        name: 'Siemens Desigo CC — Building Automation Systems',
        sub:  'Siemens Digital Industries · 2019–2021 · Montreal & Oakville',
        desc: 'GUI development for Siemens Desigo CC BAS across Canada. Projects $8K–$1M+ CAD. Bilingual (FR/EN) interfaces for complex MEP and pressurized room controls. Key projects: Hôpital Maisonneuve-Rosemont Modulaire (Montréal), Bow Tower (Calgary), Canterra Towers (Edmonton). JavaScript + BACnet protocol integration.',
        images: [
          { thumb: P+'07__Cover_Engineering_Hero_16_9.png', full: P+'07__Cover_Engineering_Hero_16_9.png', cap: 'Siemens Desigo CC — Hôpital Maisonneuve-Rosemont BAS interface' },
          // Upload: siemens_bas_screen_uv.jpg            → UV air system control screen
          // Upload: siemens_bas_building_model.jpg       → 3D building model interface
        ]
      },
      {
        name: 'Hyatt Hotels — ADA Barrier-Free Compliance',
        sub:  'NORR Architects & Engineers · 2022–2024 · Various USA',
        desc: 'Led barrier-free evaluations for 17 Hyatt hotels across the USA. Site-specific architectural drawings for ADA compliance per local and state regulations. Budget <$1M per site. Documentation centred on ADA definitions for barrier-free design.',
        images: [
          { thumb: P+'Gaming_Engineering_Research_Industrial.png', full: P+'Gaming_Engineering_Research_Industrial.png', cap: 'Hyatt ADA — technical documentation package' },
          // Upload: hyatt_ada_drawings.jpg
        ]
      }
    ]
  },

  // ── 08 PUBLIC REALM ───────────────────────────────────────
  {
    id: 'public', num: '08', title: 'Public Realm',
    projects: [
      {
        name: "Bally's Baton Rouge — South Carpark & Public Realm",
        sub:  'NORR Architects & Engineers · 2023–2025 · Baton Rouge, LA',
        desc: 'Redevelopment of south carpark and public realm: guest arrival, valet, accessibility, lighting, emergency systems, wayfinding along South River Road. 150,000 SF site parking and roadways. East entrance canopy (900 SF, 48 ft span, PTFE membrane, steel). Five-storey parking garage restoration.',
        images: [
          { thumb: P+'02__Cover_Gaming_Hero_16_9.png', full: P+'02__Cover_Gaming_Hero_16_9.png', cap: "Bally's — east entrance canopy and public realm" },
          // Upload: ballys_east_canopy_elevation.jpg    → canopy elevation + section
          // Upload: ballys_public_realm_plan.jpg        → ground level plan
          // Upload: ballys_public_realm_photo.jpg       → built public realm photo
        ]
      }
    ]
  },

  // ── 09 SOFTWARE ───────────────────────────────────────────
  {
    id: 'software', num: '09', title: 'Software',
    projects: [
      {
        name: 'stAIrcode — AI Building Code Compliance App',
        sub:  'Just Open Technologies Inc. · 2026–Present · Toronto',
        desc: 'Mobile-first app using AI vision and AR-guided measurement to verify staircase compliance against local building codes. OBC, NBC, QBC, NYC Bbl, RCNYS, IBC. Auto-detected jurisdiction. PDF compliance reports. 7-day free trial. Built by an OAA-licensed architect.',
        images: [
          { thumb: P+'09__Cover_Software_Hero_16_9.png', full: P+'09__Cover_Software_Hero_16_9.png', cap: 'stAIrcode — AR-guided stair inspection' },
          // Upload: staircode_app_screens.jpg           → app screenshots / UI
          // Upload: staircode_compliance_report.jpg     → sample PDF report
        ]
      }
    ]
  },

  // ── 10 RESEARCH ───────────────────────────────────────────
  {
    id: 'research', num: '10', title: 'Research',
    projects: [
      {
        name: 'Structural Expressionism — Design Philosophy',
        sub:  'Jordan Yerbury · 2026',
        desc: 'Structural expressionism frames systems, forces, and technologies as clearly expressed aesthetic features. Rather than functioning as passive containers, buildings should operate as active participants in addressing environmental performance, public health, and resource efficiency. Published in "Barba: Life in a Fully Adaptable Environment" (nai010, 2015). Finalist Philips Innovation Award 2015.',
        images: [
          { thumb: P+'Gaming_Engineering_Research_Industrial.png', full: P+'Gaming_Engineering_Research_Industrial.png', cap: 'Technical research — ShadeFX retractable canopy system documentation' },
          // Upload: research_barba_publication.jpg      → Barba publication cover
          // Upload: research_delft_project.jpg          → Delft TU project
        ]
      }
    ]
  }

]; // end SECTIONS
