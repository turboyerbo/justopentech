// ============================================================
// PROJECTS DATA — justopen.tech
// ============================================================
// HOW TO ADD A NEW IMAGE TO A PROJECT:
//   1. Copy the image into /images/projects/
//   2. Name it using underscores for categories it belongs to:
//      e.g. "Gaming_Engineering_01.jpg" → appears in Gaming AND Engineering
//   3. Find the right category below and add a slide block:
//      { img: 'images/projects/YourFile.jpg', title: '...', text: '...', stats: [...] }
//
// HOW TO ADD A WHOLE NEW CATEGORY:
//   Copy one of the 10 objects below, change id/num/title/cover/slides.
// ============================================================

var PROJECTS = [

  // ── 01 HOSPITALITY ─────────────────────────────────────────
  {
    id: 'hospitality',
    num: '01',
    title: 'Hospitality',
    cover: 'images/projects/01__Cover_Hospitality_Hero_16_9.png',
    slides: [
      {
        img:    'images/projects/01__Cover_Hospitality_Hero_16_9.png',
        title:  'Autograph Collection Hotel Calgary',
        sub:    'on Stampede Park',
        role:   'Architect Technical',
        firm:   'NORR Architects & Engineers',
        loc:    'Calgary, AB, Canada',
        period: 'June 2025 – Present',
        text:   '318-key, 17-storey full-service hotel positioned as the first year-round hospitality anchor within Calgary\'s emerging Culture + Entertainment District. Situated as the western gateway to Stampede Park and integrated with the expanded BMO Centre. Design draws on Western heritage — leather, wood, denim — through a contemporary lens. Connected to Calgary\'s district energy system.',
        stats:  [
          { label: 'Size',       value: '320,388 SF'   },
          { label: 'Value',      value: '$330M CAD'    },
          { label: 'Client',     value: 'Truman / Marriott' },
          { label: 'Keys',       value: '318 / 17 Storeys' },
          { label: 'Completion', value: '2028'         }
        ]
      },
      {
        img:    'images/projects/02__Cover_Gaming_Hero_16_9.png',
        title:  "Bally's — Belle of Baton Rouge",
        sub:    'Casino, Hotel & Public Realm',
        role:   'Technical Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Baton Rouge, LA, USA',
        period: '2022 – 2024',
        text:   'Multi-phase redevelopment of a former dockside casino into a cohesive mixed-use destination. Scope included public realm and south carpark redevelopment, casino exterior redesign including porte-cochère and east entrance canopy, conversion of an enclosed mall atrium to a modern casino gaming floor, and comprehensive renovation of a 10-storey, 249-room hotel. Fast-track GMP delivery.',
        stats:  [
          { label: 'Public Realm', value: '120,000 SF'  },
          { label: 'Hotel',        value: '160,000 SF'  },
          { label: 'Value',        value: '$80M USD'    },
          { label: 'Hotel Rooms',  value: '249 / 10 Storeys' },
          { label: 'Delivery',     value: 'GMP Fast-Track' }
        ]
      },
      {
        img:    'images/projects/Hospitality_Retail.png',
        title:  'Hospitality Interiors & Retail',
        sub:    'Technical Details',
        role:   'Architectural Designer',
        firm:   'Various',
        loc:    'Canada / USA',
        period: '2012 – Present',
        text:   'Interior architectural documentation across hospitality and retail projects. Custom millwork details, security door systems, coffee bar sections, and commercial storefront assemblies.',
        stats:  []
      }
      // ── ADD MORE HOSPITALITY SLIDES HERE ──
    ]
  },

  // ── 02 GAMING ──────────────────────────────────────────────
  {
    id: 'gaming',
    num: '02',
    title: 'Gaming',
    cover: 'images/projects/02__Cover_Gaming_Hero_16_9.png',
    slides: [
      {
        img:    'images/projects/02__Cover_Gaming_Hero_16_9.png',
        title:  "Bally's Baton Rouge — Casino Adaptive Re-Use",
        sub:    'Gaming Floor & Public Realm',
        role:   'Technical Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Baton Rouge, LA, USA',
        period: '2022 – 2024',
        text:   'Conversion of a former enclosed mall atrium into a modern casino featuring gaming areas, food service venues, administration spaces, and support functions. Redesign of the casino exterior including porte-cochère and east entrance canopy, transforming the former dockside casino into a cohesive pedestrian- and vehicle-oriented destination. Extensive coordination under a fast-track GMP delivery model.',
        stats:  [
          { label: 'Size',    value: '120,000 SF'   },
          { label: 'Value',   value: '$80M USD'     },
          { label: 'Client',  value: "Bally's Corp" },
          { label: 'Delivery', value: 'GMP Fast-Track' }
        ]
      },
      {
        img:    'images/projects/Gaming_Engineering_Research_Industrial.png',
        title:  'ShadeFX Retractable Canopy System',
        sub:    "Bally's Baton Rouge",
        role:   'Technical Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Baton Rouge, LA, USA',
        period: '2022 – 2024',
        text:   'Retractable roof designed in coordination with ShadeFX (Toronto). An elegant solution suspending a massive dropped ceiling from existing steel columns, with a retractable roof for views to the night sky through the existing atrium glass roof. 15 bays across 5 canopy types.',
        stats:  [
          { label: 'System',   value: 'ShadeFX Retractable' },
          { label: 'Bays',     value: '15'                  },
          { label: 'Canopy Types', value: '6'               }
        ]
      },
      {
        img:    'images/projects/Gaming_Engineering_Research_Industrial.png',
        title:  'Queen Marquette Casino Renovation & Expansion',
        sub:    '',
        role:   'Technical Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Marquette, IA, USA',
        period: '2023 – 2024',
        text:   'Phased renovation and expansion transforming the legacy Queen Marquette into a modern land-based destination. Phase 1: Pre-engineered metal building (PEMB) for back-of-house and gaming expansion. Phase 2: Two-storey steel-framed south addition with new lobby, extended gaming floor, and restaurant facilities.',
        stats:  [
          { label: 'Size',   value: '80,000 SF'  },
          { label: 'Phases', value: '2'           },
          { label: 'Structure', value: 'PEMB + Steel' }
        ]
      }
      // ── ADD MORE GAMING SLIDES HERE ──
    ]
  },

  // ── 03 INDUSTRIAL ──────────────────────────────────────────
  {
    id: 'industrial',
    num: '03',
    title: 'Industrial',
    cover: 'images/projects/Industrial_.png',
    slides: [
      {
        img:    'images/projects/Industrial_.png',
        title:  'Granite REIT — Telephone City Logistics Centre',
        sub:    'Building 1, Brantford ON',
        role:   'Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Brantford, ON, Canada',
        period: '2022',
        text:   'Master planning and multidisciplinary design for a 420,000+ SF industrial warehouse on a non-rectangular 92-acre site. Developed 12 site iterations resulting in six optimized rectangular buildings. Barry Callebaut was the first major tenant — adaptation of speculative industrial shell for food-grade production including GMP compliance, ventilation, life safety, and sanitation. A 39,679 SF mezzanine maximizes vertical space. 2 Green Globe certificates.',
        stats:  [
          { label: 'Size',          value: '420,339 SF'    },
          { label: 'Site',          value: '92 Acres'      },
          { label: 'Client',        value: 'Granite REIT'  },
          { label: 'Tenant',        value: 'Barry Callebaut' },
          { label: 'Certification', value: '2× Green Globe' }
        ]
      },
      {
        img:    'images/projects/Gaming_Engineering_Research_Industrial.png',
        title:  'Cronos — Process Area & Demising Wall',
        sub:    'Alternative Solution & IMP Details',
        role:   'Technical Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Ontario, Canada',
        period: '2023',
        text:   'Compensatory alternative solution for a 1-hour fire-rated demising partition with smoke seal in an existing sprinklered building using insulated metal panel (IMP) as a sprinkler-protected window system. Full IMP detail package: ceiling connections, hanger rods, thermally broken window frames, corner conditions, and fire safety plans per OBC.',
        stats:  [
          { label: 'System', value: '1-Hr FRR / IMP' },
          { label: 'Code',   value: 'OBC / ULC'      },
          { label: 'Scope',  value: 'Alternative Solution' }
        ]
      }
      // ── ADD MORE INDUSTRIAL SLIDES HERE ──
    ]
  },

  // ── 04 MIXED-USE ───────────────────────────────────────────
  {
    id: 'mixed',
    num: '04',
    title: 'Mixed-Use',
    cover: 'images/projects/04_Cover_Mixed-use_hero_16_9.png',
    slides: [
      {
        img:    'images/projects/04_Cover_Mixed-use_hero_16_9.png',
        title:  'Mixed-Use Residential Development',
        sub:    '1779 St. Clair Avenue West, Toronto',
        role:   'Architectural Designer',
        firm:   'CMV Architects',
        loc:    'Toronto, ON, Canada',
        period: '2017',
        text:   'Horizontal mid-rise mixed-use development replacing a former car dealership. Concept referenced Gestalt theory — a dark background colour recedes visually, giving the impression of a slim profile of white balconies at street level. Ground floor retail with residential above.',
        stats:  [
          { label: 'Type',   value: 'Mixed-Use Mid-Rise' },
          { label: 'GF Use', value: 'Retail + Residential' }
        ]
      },
      {
        img:    'images/projects/Mixed-use_residential.png',
        title:  'Mixed-Use Residential Studies',
        sub:    'Toronto & Mississauga',
        role:   'Architectural Designer',
        firm:   'CORE Architects / CMV Architects',
        loc:    'Toronto, ON, Canada',
        period: '2017 – 2018',
        text:   'Design development studies for mixed-use residential projects across the Greater Toronto Area. Work included ground floor plan development, sightline analysis, massing studies, elevations, and coordination with structural engineers for high-density residential projects.',
        stats:  []
      }
      // ── ADD MORE MIXED-USE SLIDES HERE ──
    ]
  },

  // ── 05 RESIDENTIAL ─────────────────────────────────────────
  {
    id: 'residential',
    num: '05',
    title: 'Residential',
    cover: 'images/projects/05__Cover_Residential__Hero_16_9.png',
    slides: [
      {
        img:    'images/projects/05__Cover_Residential__Hero_16_9.png',
        title:  "Artist's Alley — Diagrid Façade",
        sub:    'Downtown Toronto',
        role:   'Façade Designer & Preliminary Structural Analysis',
        firm:   'Hariri Pontarini Architects',
        loc:    'Toronto, ON, Canada',
        period: '2019',
        text:   'Transformative mixed-use development in downtown Toronto with 918 residential units ranging 340–950 SF. Façade design and preliminary structural analysis for the diagrid system: cast-in plates 300×16×200 at each slab level of diagrid location, HSS 102×152 welded brackets, 4mm aluminum plate cladding on 22mm steel channels. Coordination with structural engineers for connection details. Amenities include rooftop pool, terrace lounge, fitness centre, and outdoor lounge with fire pits.',
        stats:  [
          { label: 'Units',  value: '918'              },
          { label: 'Suite Size', value: '340–950 SF'  },
          { label: 'System', value: 'Diagrid Façade'  }
        ]
      },
      {
        img:    'images/projects/Mixed-use_residential.png',
        title:  'M4 & Residential Design Development',
        sub:    'Mississauga & Toronto',
        role:   'Architectural Designer',
        firm:   'CORE Architects',
        loc:    'Mississauga, ON, Canada',
        period: '2018',
        text:   'Design updates for M4 (Phase 3 of a multi-skyscraper development in Mississauga, alongside IBI-designed M3). Complex 3D modelling, rendered site plans, elevations, and schematic design perspectives for SPA pre-consultations.',
        stats:  []
      }
      // ── ADD MORE RESIDENTIAL SLIDES HERE ──
    ]
  },

  // ── 06 RETAIL ──────────────────────────────────────────────
  {
    id: 'retail',
    num: '06',
    title: 'Retail',
    cover: 'images/projects/06__Cover_Retail_Hero_16_9.png',
    slides: [
      {
        img:    'images/projects/06__Cover_Retail_Hero_16_9.png',
        title:  'Yellow Shoes & Cité Shoes',
        sub:    'Store Design — Re-Brand',
        role:   'Architectural Designer',
        firm:   'Rubin+Goldenberg Architects (RGA)',
        loc:    'Ottawa, Montréal, Rosemère — QC & ON',
        period: '2012',
        text:   'Re-branding design for a series of retail shoe stores across Ontario and Quebec. Cité Shoes (Place Rosemère, Nov 2012): custom arborite panels, precision aluminum mullions, bespoke furniture. Yellow Shoes storefronts: security door systems on hidden tracks, custom stainless steel frames, concealed lighting fixtures. Clean commercial quality delivered efficiently.',
        stats:  [
          { label: 'Locations', value: 'Multiple'      },
          { label: 'Type',      value: 'Retail Re-Brand' }
        ]
      },
      {
        img:    'images/projects/Hospitality_Retail.png',
        title:  'Retail Interior Documentation',
        sub:    'Store Front & Detail Drawings',
        role:   'Architectural Designer',
        firm:   'Rubin+Goldenberg Architects (RGA)',
        loc:    'Québec & Ontario, Canada',
        period: '2012',
        text:   'Complete documentation package including storefront elevations, floor plans, reflected ceiling plans, wall sections, and 1:5 scale details. Custom security door structure on hidden track, arborite panel isometric views, and lighting fixture coordination.',
        stats:  []
      }
      // ── ADD MORE RETAIL SLIDES HERE ──
    ]
  },

  // ── 07 ENGINEERING SYSTEMS ─────────────────────────────────
  {
    id: 'engineering',
    num: '07',
    title: 'Engineering Systems',
    cover: 'images/projects/07__Cover_Engineering_Hero_16_9.png',
    slides: [
      {
        img:    'images/projects/07__Cover_Engineering_Hero_16_9.png',
        title:  'Siemens Desigo CC — Building Automation Systems',
        sub:    'Hôpital Maisonneuve-Rosemont & Others',
        role:   'UI Developer / Software Developer',
        firm:   'Siemens Digital Industries',
        loc:    'Montréal & Various, Canada',
        period: '2019 – 2021',
        text:   'UI development for Siemens Desigo CC building automation systems across Canada. Projects ranged from $8K to $1M+ CAD. Coordinated closely with engineering teams and architects on over a dozen facilities including hospitals, universities, theatres, and high-rise buildings. Delivered bilingual (FR/EN) control interfaces for specialized mechanical systems including MEP and pressurized rooms.',
        stats:  [
          { label: 'Projects',  value: '12+'         },
          { label: 'Language',  value: 'FR / EN'     },
          { label: 'Platform',  value: 'Siemens Desigo CC' }
        ]
      },
      {
        img:    'images/projects/Gaming_Engineering_Research_Industrial.png',
        title:  'ShadeFX Retractable Canopy — Engineering Detail',
        sub:    "Bally's Baton Rouge",
        role:   'Technical Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Baton Rouge, LA, USA',
        period: '2022 – 2024',
        text:   'Engineering coordination for a ShadeFX motorized retractable canopy system. Structural tie rod design, G-channel layout, motorized stack clearance analysis, and Arktura suspended ceiling component integration. 6 canopy types across 15 bays.',
        stats:  [
          { label: 'System',   value: 'ShadeFX Motorized' },
          { label: 'Bays',     value: '15'               },
          { label: 'Standard', value: 'ULC/ORD-C263.1'  }
        ]
      },
      {
        img:    'images/projects/07__Cover_Engineering_Hero_16_9.png',
        title:  'Hyatt Hotels — ADA Barrier-Free Compliance',
        sub:    '17-Hotel National Program',
        role:   'Project Lead',
        firm:   'NORR Architects & Engineers',
        loc:    'Various Locations, USA',
        period: '2022 – 2024',
        text:   'Led barrier-free design evaluations for seventeen Hyatt hotels across the United States. Site-specific architectural drawings for each location meeting ADA requirements. Unique exterior and interior conditions addressed on a per-site, per-jurisdiction basis. Documents for construction centered on ADA definitions for barrier-free design.',
        stats:  [
          { label: 'Sites',     value: '17 Hotels'     },
          { label: 'Standard',  value: 'ADA / Barrier-Free' },
          { label: 'Budget',    value: '<$1M / Site'   }
        ]
      }
      // ── ADD MORE ENGINEERING SLIDES HERE ──
    ]
  },

  // ── 08 PUBLIC REALM ────────────────────────────────────────
  {
    id: 'public',
    num: '08',
    title: 'Public Realm',
    cover: 'images/projects/02__Cover_Gaming_Hero_16_9.png',
    slides: [
      {
        img:    'images/projects/02__Cover_Gaming_Hero_16_9.png',
        title:  "Bally's Baton Rouge — South Carpark & Public Realm",
        sub:    'Site Redevelopment',
        role:   'Technical Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Baton Rouge, LA, USA',
        period: '2022 – 2024',
        text:   'Redevelopment of the south carpark and public realm to enhance guest arrival, valet operations, accessibility, safety, lighting, emergency systems, and wayfinding along South River Road. Transformation of the former dockside casino site into a cohesive pedestrian- and vehicle-oriented destination.',
        stats:  [
          { label: 'Size',  value: '120,000 SF' },
          { label: 'Value', value: '$80M USD'   }
        ]
      }
      // ── ADD MORE PUBLIC REALM SLIDES HERE ──
      // PLACEHOLDER: Upload public realm images and add slides here
    ]
  },

  // ── 09 SOFTWARE ────────────────────────────────────────────
  {
    id: 'software',
    num: '09',
    title: 'Software',
    cover: 'images/projects/09__Cover_Software_Hero_16_9.png',
    slides: [
      {
        img:    'images/projects/09__Cover_Software_Hero_16_9.png',
        title:  'stAIrcode — AI Building Code Compliance',
        sub:    'AR-Guided Stair Inspection App',
        role:   'Founder & Developer',
        firm:   'Just Open Technologies Inc.',
        loc:    'Toronto, ON / Global',
        period: '2026 – Present',
        text:   'Mobile-first app using AI vision and AR-guided measurement to check staircase compliance against local building codes. Supports OBC, NBC, QBC, New York Building Code (Bbl / RCNYS), and international jurisdictions. Built for architects, contractors, building inspectors, and homeowners. Features include camera-based stair scanning, auto-detected jurisdiction, and PDF compliance reports.',
        stats:  [
          { label: 'Platform', value: 'iOS / Android / Web' },
          { label: 'Codes',    value: 'OBC · NBC · QBC · NYC · IBC' },
          { label: 'Link',     value: 'staircode.app' }
        ]
      }
      // ── ADD MORE SOFTWARE SLIDES HERE ──
    ]
  },

  // ── 10 RESEARCH ────────────────────────────────────────────
  {
    id: 'research',
    num: '10',
    title: 'Research',
    cover: 'images/projects/Gaming_Engineering_Research_Industrial.png',
    slides: [
      {
        img:    'images/projects/Gaming_Engineering_Research_Industrial.png',
        title:  'Technical Research — Retractable Canopy Systems',
        sub:    'ShadeFX / Bally\'s Baton Rouge',
        role:   'Technical Designer',
        firm:   'NORR Architects & Engineers',
        loc:    'Baton Rouge, LA / Toronto, ON',
        period: '2022 – 2024',
        text:   'Technical research and documentation for a motorized retractable ceiling system integrating structural tie rods, G-channel tracks, and Arktura suspended ceiling components. Research into canopy stack clearances, vibration control, and seismic bracing requirements. System tested per ULC/ORD-C263.1 standards.',
        stats:  [
          { label: 'Standard', value: 'ULC/ORD-C263.1' },
          { label: 'System',   value: 'ShadeFX + Arktura' }
        ]
      }
      // ── ADD MORE RESEARCH SLIDES HERE ──
      // PLACEHOLDER: Upload research images and add slides here
    ]
  }

]; // end PROJECTS
