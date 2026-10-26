export interface FAQItem {
  question: string;
  answer: string;
}

// --------------------------------------------------------------------------
// 1. PRODUCT DETAIL FAQS (keyed by product slug, 5 FAQs each)
// --------------------------------------------------------------------------
export const PRODUCT_FAQS: Record<string, FAQItem[]> = {
  'pet-preform-mold': [
    {
      question: "What cavitation configurations are available for Patel Mould PET preform moulds?",
      answer: "We manufacture PET preform moulds ranging from 8-cavity pilot and specialized configurations up to 96-cavity ultra-high-output production systems, featuring balanced hot runner manifolds with individual pneumatic or hydraulic valve gates for zero gate vestige."
    },
    {
      question: "Which tool steel grades do you use for cores and cavities?",
      answer: "All core, cavity, and neck insert stacks are machined from vacuum heat-treated Swedish Uddeholm Stavax ESR or Assab 1.2083 stainless steel hardened to 50–52 HRC, delivering superior corrosion resistance against corrosive PET off-gassing and guaranteeing 5M+ shot lifespan."
    },
    {
      question: "How does your conformal cooling technology reduce PET cycle times?",
      answer: "Our conformal cooling circuits follow the preform geometry within sub-millimeter proximity. This ensures rapid, uniform thermal extraction around the preform thread, body, and gate, reducing total cooling cycle time by 15% to 22% while eliminating part warping."
    },
    {
      question: "Can your preform moulds run on my existing injection molding machine brand?",
      answer: "Yes. Our moulds are custom-engineered to interface seamlessly with global and domestic injection molding presses including Husky, Netstal, KraussMaffei, Haitian, Ferromatik Milacron, and Windsor with standardized clamping and manifold connections."
    },
    {
      question: "What dimensional tolerances are verified during pre-dispatch CMM inspection?",
      answer: "Every mould stack undergoes 100% 3D coordinate inspection in our Zeiss CMM metrology laboratory. We maintain wall thickness concentricity within ±0.005mm and neck finish thread geometry to within ±0.002mm of approved CAD drawings."
    }
  ],
  'pet-jar-mold': [
    {
      question: "What neck diameters can you manufacture for wide-mouth PET jars?",
      answer: "We engineer wide-mouth PET jar moulds across neck diameters from 45mm to 120mm+ for confectionery, spice, pickle, ghee, peanut butter, and bulk powder containers, with custom thread pitches and induction-seal foil land profiles."
    },
    {
      question: "How do you achieve uniform base thickness on wide-mouth jars?",
      answer: "We employ advanced Moldflow finite element simulation to optimize preform stretch ratios, gate vestige placement, and blowing pressure transitions, ensuring even resin distribution and high top-load crush strength without base sink marks."
    },
    {
      question: "Are interchangeable neck inserts available to change thread styles?",
      answer: "Yes, our modular bolster design allows rapid changeover of neck split inserts without removing the entire mould base from the machine, saving substantial downtime when switching between continuous thread and lug neck profiles."
    },
    {
      question: "What surface polish standard is delivered inside jar cavities?",
      answer: "All jar cavity stacks are diamond-polished by senior master bench toolmakers up to SPI-A1 optical mirror grade, ensuring high-clarity transparency and easy part ejection without drag marks."
    },
    {
      question: "What is the typical production lead time for a custom jar mould?",
      answer: "Lead time typically ranges from 4 to 6 weeks from 3D CAD approval and DFM sign-off, inclusive of complete CNC/EDM machining, mold assembly, bluing verification, and comprehensive T0/T1 factory trials."
    }
  ],
  'high-cavitation-preform-mold': [
    {
      question: "How is melt balance maintained across 48 to 96 cavities?",
      answer: "Our hot runner manifolds feature naturally balanced runner channels with identical flow lengths and diameters to every nozzle tip, ensuring simultaneous cavity fill, uniform preform weight, and minimal cavity-to-cavity weight variance (CV < 0.2%)."
    },
    {
      question: "What valve gate actuation mechanism do you implement for fast cycling?",
      answer: "We utilize synchronous pneumatic or hydraulic valve pin actuation bars with micro-adjustable pin stroke calibration, delivering clean gate cutoff without stringing or drool at cycle times as fast as 7.5 to 10 seconds."
    },
    {
      question: "How do you protect high-cavitation moulds during continuous 24/7 production?",
      answer: "Moulds feature interlocked taper alignment locks, Ampco bronze wear plates, guided ejection return sensors, and integrated multi-zone thermocouple sensors to protect against platen misalignment and thermal shocks."
    },
    {
      question: "What spare parts kit is provided with high-cavitation shipments?",
      answer: "Each mould includes an export maintenance pack with spare hot runner nozzle tips, heater bands, thermocouples, cavity O-rings, valve pins, and neck split springs to support zero-downtime preventative maintenance."
    },
    {
      question: "Is FAT (Factory Acceptance Test) video and sample verification included?",
      answer: "Yes, full FAT trial verification on our in-house test machines is recorded and shared alongside Zeiss 3D CMM dimensional reports and first-article preform samples before container dispatch."
    }
  ],
  'isbm-bottle-mold': [
    {
      question: "Which single-stage ISBM machine models do your moulds support?",
      answer: "Our single-stage ISBM bottle moulds are 100% compatible with Nissei ASB (such as ASB-70DPH, ASB-12M, ASB-150DP) and Aoki Technical machine platforms with precision rotary table index clamping."
    },
    {
      question: "How are the injection, conditioning, blow, and ejection stations synchronized?",
      answer: "Every ISBM mould set includes the complete 4-station or 3-station tooling architecture: injection cavity/core stacks, temperature conditioning station blocks, blow cavity molds with bottom push-up plugs, and automatic ejection stripper lip sets."
    },
    {
      question: "Can ISBM moulds produce oval or asymmetric bottle shapes?",
      answer: "Yes, we specialize in asymmetric and oval bottle designs for personal care and pharmaceutical liquids, incorporating custom differential stretch rod geometry and specialized cavity cooling to balance wall thickness across non-circular profiles."
    },
    {
      question: "What prevents flash along the bottle parting line in ISBM tooling?",
      answer: "We use sub-micron CNC jig grinding and optical bench bluing to achieve >90% precision contact along split parting lines, ensuring flash-free bottle seams and flawless cosmetic aesthetics."
    },
    {
      question: "What resin types can be processed in your ISBM moulds?",
      answer: "While primarily engineered for virgin and rPET (recycled PET), our tooling also processes Polypropylene (PP), PETG, and specialized barrier polymers with tailored cavity shrinkage compensation."
    }
  ],
  'isbm-container-mold': [
    {
      question: "What volume range can be manufactured with ISBM container moulds?",
      answer: "We engineer ISBM container moulds for packaging capacities ranging from miniature 10ml dropper vials and luxury cosmetic jars up to large 2.5-liter handleware containers."
    },
    {
      question: "How do you prevent vacuum side-wall collapse on hot-fill or syrup containers?",
      answer: "We incorporate engineered structural vacuum ribs and optimized hoop-strength profiles directly into the 3D cavity design, validated through Moldflow rheological simulation prior to tool steel cutting."
    },
    {
      question: "Can you incorporate custom brand logos and embossing into the mould?",
      answer: "Yes, our CNC micro-milling and mirror EDM spark erosion capabilities allow crisp brand logos, volumetric fill marks, and tactile grip patterns directly on cavity faces with micron sharpness."
    },
    {
      question: "What cooling medium and flow rate are recommended for optimal cycle times?",
      answer: "Chilled industrial water at 8°C–12°C with turbulent flow Reynolds numbers (>4000) is routed through conformal core/cavity cooling lines to guarantee ultra-fast stabilization and crystal-clear clarity."
    },
    {
      question: "Do you supply complete lip cavities and transfer plates with the mould set?",
      answer: "Yes, all our ISBM container moulds ship as turnkey tooling packages including lip cavity split blocks, core pins, stripper rings, transfer plates, and blow bottom push-up assemblies."
    }
  ],
  'multi-cavity-isbm-mold': [
    {
      question: "How do you achieve cavity-to-cavity weight uniformity across 8 to 32 cavities in ISBM?",
      answer: "We engineer thermally balanced hot runner manifold layouts with individually PID-controlled nozzle heating zones, ensuring identical melt temperature and rheological viscosity to each preform cavity (weight variance CV < 0.25%)."
    },
    {
      question: "What cycle time gains can be expected from high-density multi-cavity ISBM moulds?",
      answer: "With optimized high-velocity water circuits and copper alloy insert cooling in conditioning and blowing stations, multi-cavity moulds achieve fast cycle times between 8.5 and 14 seconds depending on bottle size and grammage."
    },
    {
      question: "Are interchangeable cavity and lip inserts supported for flexible bottle sizes?",
      answer: "Yes, our modular bolster plate design allows rapid insert changeover without removing the full mould base, enabling quick switches between different bottle heights, volumes, or neck finishes."
    },
    {
      question: "Which machine platforms support your high-cavitation ISBM mould packages?",
      answer: "Our tooling is engineered to interface seamlessly with Nissei ASB-70DPH, ASB-150DP, Aoki 250/350 series, and modern servo-electric single-stage ISBM platforms."
    },
    {
      question: "What quality assurance records accompany multi-cavity ISBM mould shipments?",
      answer: "Every mould package includes a comprehensive Zeiss CMM 3D dimensional report, full bluing contact check inspection, FAT trial video footage, and preform/bottle samples with spectrophotometer clarity verification."
    }
  ],
  'ebm-bottle-mold': [
    {
      question: "Which polymers can be molded using Patel Mould EBM bottle moulds?",
      answer: "Our extrusion blow moulds are custom-engineered for High-Density Polyethylene (HDPE), Polypropylene (PP), Low-Density Polyethylene (LDPE), and Post-Consumer Recycled (PCR) resins with shrinkage-compensated cavity geometry."
    },
    {
      question: "What pinch-off technology is implemented for leak-proof bottle bottoms?",
      answer: "We employ hardened beryllium copper (Ampco 25) or premium tool steel pinch-off blades with dual-angle relief edges. This produces rapid heat dissipation, immaculate weld lines, and easy, flash-free automated trimming."
    },
    {
      question: "How do your cooling channels prevent bottle warping on high-speed EBM lines?",
      answer: "We design multi-circuit baffled cooling channels positioned uniformly beneath the cavity surface, providing fast, balanced thermal extraction that prevents post-ejection ovality or bottle base distortion."
    },
    {
      question: "Can these moulds incorporate calibrated neck cutter rings for induction seal finishes?",
      answer: "Yes, all EBM bottle moulds feature replaceable hardened D2/H13 neck cutter sleeves and matching water-cooled blow pins to yield mirror-flat neck lands ideal for induction foil sealing."
    },
    {
      question: "What is the typical lifespan and maintenance cycle of your EBM bottle tooling?",
      answer: "Engineered with aircraft-grade aluminum alloy blocks or forged P20/1.2316 steel with hardened guide pins and wear strips, our moulds deliver over 3 million production shots with standard preventative maintenance."
    }
  ],
  'ebm-container-mold': [
    {
      question: "Which blow moulding machines are compatible with your EBM moulds?",
      answer: "Our Extrusion Blow Moulding (EBM) tooling works on single-station and shuttle-type continuous extrusion presses including Bekum, Uniloy, Techne, Jagmohan, Rana, and Fong Kee machines."
    },
    {
      question: "What pinch-off technology is used to ensure high weld strength on handles and bases?",
      answer: "We utilize certified Beryllium Copper (Ampco 25) inserts along the bottom pinch-off and container handle zones. Beryllium copper rapidly dissipates parison heat, creating a dense, flashless weld with exceptional drop-impact resistance."
    },
    {
      question: "Can your EBM moulds accommodate calibrated neck blowing pins?",
      answer: "Yes, we manufacture high-precision hardened neck cutter rings and matched water-cooled calibration blow pins to produce smooth, burr-free neck faces ideal for induction foil sealing."
    },
    {
      question: "What container sizes and cavitation options are supported in EBM?",
      answer: "We build single-cavity moulds for heavy-duty 5L to 25L chemical jerry cans, as well as multi-cavity (up to 8-cavity) moulds with automated in-mould flash deflashing for high-volume FMCG bottles."
    },
    {
      question: "What tool steel grades do you recommend for abrasive HDPE and PP resins?",
      answer: "We recommend pre-hardened DIN 1.2316 or P20+Ni tool steels, combined with hard chrome plating on cavity surfaces for high wear resistance against abrasive pigments and calcium carbonate additives."
    }
  ],
  'ebm-industrial-packaging-mold': [
    {
      question: "What container capacities do your industrial EBM packaging moulds support?",
      answer: "We engineer heavy-duty industrial blow moulds for 5-liter, 10-liter, 20-liter, and up to 50-liter Jerry cans, open-top drums, and chemical carboys with integrated handleware and stacking interlocks."
    },
    {
      question: "How do your moulds ensure containers pass stringent UN drop tests?",
      answer: "Our tooling incorporates finite element wall-thickness optimization, reinforced corner radiuses, and high-impact beryllium copper handle/base pinch inserts to achieve dense weld strength capable of withstanding 2.0-meter UN drop tests."
    },
    {
      question: "Can you accommodate view-stripe parison lines and multi-layer parisons in the mould?",
      answer: "Yes, our cavity designs support multi-layer parisons (including barrier EVOH layers) and translucent visual level-indicator stripes with dedicated parison pinch guides and zero flash distortion."
    },
    {
      question: "What mold base materials are used for large-format industrial tooling?",
      answer: "We use high-tensile forged steel bolster plates and pre-hardened alloy blocks with heavy-duty guide pillars and bronze wear plates to withstand the high clamp tonnages (up to 50 tons) of accumulator head machines."
    },
    {
      question: "Are in-mould deflashing mechanisms available for handle holes and neck flash?",
      answer: "Yes, we provide fully automated in-mould hydraulic/pneumatic punch deflashing assemblies that remove handle slug flash and bottom tail flash cleanly before container ejection."
    }
  ]
};

// --------------------------------------------------------------------------
// 2. INDUSTRY DETAIL FAQS (keyed by industry slug, 5 FAQs each)
// --------------------------------------------------------------------------
export const INDUSTRY_FAQS: Record<string, FAQItem[]> = {
  'food-beverage': [
    {
      question: "How do your food & beverage moulds comply with food contact safety regulations?",
      answer: "We machine all contact components from certified corrosion-resistant stainless steel (AISI S136 / DIN 1.2083) and use food-grade anti-friction coatings. Our moulds ensure low Acetaldehyde (AA) generation to preserve the authentic taste and clarity of water, juices, and edible oils."
    },
    {
      question: "What preform neck finish standards do you support for beverage bottling?",
      answer: "We support all global beverage standards including PCO 1881, PCO 1810, 29/25 water finish, 38mm 3-start juice necks, 30/25 closures, and custom snap-on caps for dairy and hot-fill applications."
    },
    {
      question: "How do you achieve grammage lightweighting without losing bottle strength?",
      answer: "Our engineering division performs CAD DFM and Moldflow simulation to optimize stretch ratios and material distribution. We help customers reduce bottle weight by 10%–18% while maintaining top-load stacking and drop-impact resistance."
    },
    {
      question: "Can your moulds handle high-speed blow-fill-seal continuous lines?",
      answer: "Yes, our preform moulds are engineered for ultra-fast cycle speeds and micron-tight neck concentricity, preventing bottle cocking, cap jamming, or line stoppages on high-speed 36,000+ BPH automated filling lines."
    },
    {
      question: "What is your typical mould turnaround time for beverage season launches?",
      answer: "Standard preform moulds are delivered within 4 to 6 weeks, with expedited prototype and fast-track cavitation options available for seasonal beverage launches across India and overseas bottling hubs."
    }
  ],
  'pharmaceutical': [
    {
      question: "How do your moulds satisfy cGMP cleanroom manufacturing standards?",
      answer: "Moulds are machined with mirror-polished stainless steel cavities (Ra < 0.1 µm) without blind crevices, preventing particulate accumulation. Assembly and testing documentation follow strict cGMP validation standards."
    },
    {
      question: "What closure tolerances are maintained for child-resistant (CRC) medicine containers?",
      answer: "Thread dimensions, neck ovality, and tamper-evident ratchet bands are held to ±0.002mm tolerances, ensuring leak-free hermetic induction foil sealing and reliable CRC child-resistant torque compliance."
    },
    {
      question: "Do you supply moulds for amber and light-sensitive medicine bottles?",
      answer: "Yes, our single-stage ISBM and EBM moulds are optimized for processing Amber PET and pigmented HDPE polymers, ensuring consistent wall thickness to protect light-sensitive syrups and suspensions."
    },
    {
      question: "What metrology inspection certificates are provided with pharma moulds?",
      answer: "Every pharma mould dispatch includes full 3D CMM dimensional inspection logs, cavity-to-cavity volume verification certificates, steel mill metallurgical test reports, and first-article sampling reports."
    },
    {
      question: "Can you manufacture moulds for ophthalmic and nasal dropper squeeze bottles?",
      answer: "Yes, we produce high-precision moulds for 5ml to 30ml dropper containers with calibrated orifice plug fitment geometry to ensure accurate drop volume dispensing and zero leakage."
    }
  ],
  'personal-care': [
    {
      question: "What surface finish is achievable for high-end cosmetic bottles and jars?",
      answer: "We achieve SPI-A1 optical mirror finishes as well as specialized micro-etched textures, frosted matte finishes, and precision embossed branding for luxury cosmetics, perfume flasks, and skincare packaging."
    },
    {
      question: "How do you manage complex oval and ergonomic contoured bottle geometries?",
      answer: "We utilize multi-axis high-speed CNC milling and die-sinking EDM to spark intricate bottle curves, tapered shoulders, and thumb-grip contours while maintaining balanced parison stretch and uniform wall thickness."
    },
    {
      question: "Can your moulds produce dual-wall cosmetic jars?",
      answer: "Yes, we engineer precision inner-cup and outer-shell mould sets for dual-wall cosmetic cream tubs, ensuring seamless press-fit tolerances, airtight lid sealing, and a premium luxury hand feel."
    },
    {
      question: "What neck sizes are supported for lotion pumps and disc-top caps?",
      answer: "We support standard cosmetic neck finishes including 20/410, 24/410, 28/410, and custom snap-fit pump collars, guaranteeing consistent closure engagement torque and zero fluid weeping."
    },
    {
      question: "Are multi-cavity EBM moulds available for shampoo and body wash bottles?",
      answer: "Yes, we build multi-cavity EBM tooling with in-mould automated flash deflashing, engineered for high-speed automated filling and packaging of hair care and personal hygiene products."
    }
  ],
  'packaging': [
    {
      question: "What makes your commercial packaging moulds suitable for ultra-high-speed production?",
      answer: "We integrate balanced conformal cooling circuits, hardened 52 HRC European tool steels, and balanced hot runners that reduce cycle times by 15%–25%, enabling round-the-clock commercial packaging runs with minimal maintenance."
    },
    {
      question: "How do you prevent gate drool and stringing during continuous packaging runs?",
      answer: "We implement precision hot runner valve gate systems with individual thermal control and hardened titanium nozzle tips that shut off cleanly, eliminating gate defects and trimming costs."
    },
    {
      question: "Can you design stack moulds for thin-wall packaging containers?",
      answer: "Yes, our engineering team designs multi-level and stack mould configurations that effectively double production output on existing press clamping tonnage."
    },
    {
      question: "What warranty and shot life guarantee do you provide on packaging moulds?",
      answer: "All Patel Mould Class 101 production packaging moulds come with a guaranteed 5,000,000+ shot tool lifespan, backed by certified Uddeholm steel metallurgy and full tooling support."
    },
    {
      question: "Do you supply complete turnkey tooling packages including cold halves?",
      answer: "Yes, we supply complete turnkey mould packages, cold halves, hot runner manifold systems, and conversion kits for existing mould bases to minimize customer capital investment."
    }
  ],
  'plastic-containers': [
    {
      question: "What polymer resins are compatible with your container moulds?",
      answer: "Our tooling is engineered to process Polyethylene Terephthalate (PET), High-Density Polyethylene (HDPE), Polypropylene (PP), and Low-Density Polyethylene (LDPE) with resin-specific shrinkage compensation."
    },
    {
      question: "How do you ensure structural integrity on stackable storage containers?",
      answer: "We incorporate engineered stacking bottom interlocks, reinforcing side ribs, and optimized corner fillets that distribute downward load and prevent side-wall buckling during multi-tier warehouse pallet stacking."
    },
    {
      question: "Can modular inserts be used to change container height or neck finish?",
      answer: "Yes, our container moulds frequently incorporate modular core and cavity inserts, enabling converters to produce different container volumes and neck finishes using the same master mould bolster."
    },
    {
      question: "What surface textures can be applied to commercial utility containers?",
      answer: "We provide chemical photo-etching, EDM spark erosion stippling, and brushed textures to improve grip, conceal handling scratches, and enhance the visual quality of consumer plastic containers."
    },
    {
      question: "How do you test container mould performance prior to final delivery?",
      answer: "Every container mould undergoes dry cycling for mechanical smooth operation, followed by real-resin injection trials on our factory presses to verify cycle time, weight consistency, and part ejection."
    }
  ],
  'chemical-packaging': [
    {
      question: "How do your moulds ensure UN certified drop-test compliance for hazardous liquids?",
      answer: "We integrate Beryllium Copper pinch-off inserts with calibrated weld-pocket depths along the container base and handle. This creates high-density molecular bonding that withstands UN certification drop tests exceeding 1.8 meters."
    },
    {
      question: "What container sizes do your chemical jerry can moulds cover?",
      answer: "We design and manufacture heavy-duty EBM moulds for 1L agrochemical bottles up to 5L, 10L, 20L, and 25L industrial chemical Jerry cans with integrated ergonomic carrying handles."
    },
    {
      question: "How do you guarantee leak-proof seals on chemical container necks?",
      answer: "Our moulds feature water-cooled neck calibration rings and matched blow pins that produce a mirror-flat neck top face, ensuring complete hermetic induction foil heat-sealing for hazardous chemicals and oils."
    },
    {
      question: "What tool steels are selected for corrosive chemical packaging tooling?",
      answer: "We utilize vacuum-hardened DIN 1.2316 or AISI 420 stainless tool steel with optional hard-chrome cavity plating to resist abrasive pigments, chemical stress-cracking agents, and acidic formulations."
    },
    {
      question: "Can your chemical moulds incorporate view stripes for liquid level inspection?",
      answer: "Yes, our tooling supports multi-layer parison co-extrusion technology with integrated transparent view-stripe channels, enabling end users to visually inspect remaining liquid chemical levels."
    }
  ],
  'household-products': [
    {
      question: "What container formats are commonly produced for household cleaning products?",
      answer: "We manufacture moulds for trigger spray bottles, toilet cleaner angle-neck flasks, floor cleaner jerrycans, liquid detergent bottles with dosing caps, and wipe dispenser canisters."
    },
    {
      question: "How do you manage angle-neck bottle blow pin alignment?",
      answer: "Our tooling incorporates multi-axis blow pin entry angles and custom guided pneumatic cylinders to ensure precise neck calibrating without parison distortion on skewed-neck toilet cleaner containers."
    },
    {
      question: "Are in-mould handleware mechanisms supported for heavy detergent jugs?",
      answer: "Yes, our moulds feature precision handle pinch geometries that create comfortable, smooth, flash-free carry handles capable of supporting 5kg+ detergent loads without stretching or snapping."
    },
    {
      question: "Can your household moulds run on recycled rHDPE and rPP resins?",
      answer: "Yes, we calibrate cavity shrinkage and parison pinch-off depths specifically for post-consumer recycled (PCR) resin blends, maintaining container top-load strength despite resin melt-flow variability."
    },
    {
      question: "What cycle times are typical for multi-cavity household cleaner moulds?",
      answer: "Depending on container weight and wall thickness, our multi-cavity EBM household moulds typically cycle between 12 to 18 seconds with automated neck deflashing and bottom scrap ejection."
    }
  ],
  'other-industrial-applications': [
    {
      question: "What custom industrial tooling projects does Patel Mould undertake?",
      answer: "We engineer custom blow and stretch moulds for automotive washer fluid tanks, lubricant canisters, medical waste bins, textile bobbin cones, and specialized industrial storage solutions."
    },
    {
      question: "Can you reverse engineer tooling from a physical component sample?",
      answer: "Yes, our CAD engineering studio uses 3D laser coordinate scanning and optical metrology to reverse-engineer physical plastic samples, generate parametric 3D CAD models, and optimize tooling for modern production."
    },
    {
      question: "How do you support client trials and on-site tool commissioning?",
      answer: "We offer comprehensive on-site commissioning support. Our senior tooling technicians travel to client facilities across India and internationally to install, calibrate, and validate moulds on your production lines."
    },
    {
      question: "What documentation is provided for intellectual property and tool blueprints?",
      answer: "All tooling projects are protected under strict Non-Disclosure Agreements (NDAs). Upon final project handover, clients receive full 2D assembly blueprints, 3D CAD files, and recommended preventative maintenance schedules."
    },
    {
      question: "How does Patel Mould support tool servicing, maintenance, and refurbishments?",
      answer: "We provide comprehensive tool refurbishment, cavity re-polishing, neck insert replacements, and hot runner manifold servicing at our 15,000 m² Gujarat manufacturing campus to extend tool production life."
    }
  ]
};

// --------------------------------------------------------------------------
// 3. BLOG DETAIL FAQS (keyed by blog slug, 5 FAQs each)
// --------------------------------------------------------------------------
export const BLOG_FAQS: Record<string, FAQItem[]> = {
  'optimizing-cycle-times-in-multi-cavity-pet-preform-moulds': [
    {
      question: "What is the single biggest factor in reducing PET preform cycle times?",
      answer: "Conformal cooling channel layout is the primary driver, accounting for up to 70% of total cycle duration. Aligning cooling passages within sub-millimeter proximity to preform core and cavity surfaces drastically accelerates thermal dissipation."
    },
    {
      question: "How does valve gate timing impact preform gate vestige and cycle time?",
      answer: "Properly calibrated valve pin actuation ensures instantaneous, clean mechanical gate shut-off right at freeze point. This prevents gate crystallization, eliminates stringing, and allows immediate mould opening without waiting for gate drool cooling."
    },
    {
      question: "What water temperature and flow rate are optimal for multi-cavity preform moulds?",
      answer: "Water supplied at 8°C–10°C with turbulent flow Reynolds numbers (>4,000) through balanced manifolds ensures equal cooling rates across every cavity stack, preventing warping and cycle-time disparities."
    },
    {
      question: "Can cavity venting improvements shorten overall injection cycle time?",
      answer: "Yes. Micro-precision parting line vents (0.015mm to 0.020mm depth) allow parison displaced air to exhaust instantaneously, permitting higher injection speeds without causing diesel burn marks or incomplete fill."
    },
    {
      question: "How do post-mold take-out cooling systems further reduce cycle time?",
      answer: "Multi-stage take-out robot cooling plates extract the preforms while still warm, transferring secondary cooling outside the mould clamping area and reducing dry cycle clamping lock-up by 2 to 4 seconds."
    }
  ],
  'mold-steel-selection-stavax-vs-2316-vs-p20': [
    {
      question: "When should Uddeholm STAVAX ESR be selected over DIN 1.2316 or P20 steel?",
      answer: "STAVAX ESR stainless steel is preferred when optical clarity, high polishability (SPI-A1 mirror finish), and resistance to corrosive off-gases (such as PET processing) are critical. P20 is suited for support bolster plates, while 1.2316 is ideal for PVC and extrusion blow cavities."
    },
    {
      question: "Why is DIN 1.2316 widely chosen for blow moulds and chemical containers?",
      answer: "DIN 1.2316 is a pre-hardened martensitic stainless steel with approximately 16% chromium and added molybdenum. It delivers exceptional chemical resistance against aggressive PVC and HDPE resins without requiring post-machining heat treatment."
    },
    {
      question: "What hardness (HRC) is recommended for PET preform core and cavity stacks?",
      answer: "Core and cavity stacks are typically vacuum heat-treated to 50–52 HRC with deep sub-zero cryogenic quenching. This achieves the ideal balance between hardness (wear resistance against millions of high-pressure injections) and core toughness (preventing brittle fracture)."
    },
    {
      question: "Does vacuum degassing and ESR (Electro-Slag Remelting) make a noticeable difference in mould life?",
      answer: "Yes. ESR remelting eliminates non-metallic slag inclusions and microporosity, ensuring flawless mirror polishability, uniform thermal conductivity, and structural resilience against thermal fatigue cracking."
    },
    {
      question: "How does tool steel grade affect the total cost of ownership of a mould?",
      answer: "While premium ESR stainless steels increase initial raw material investment by 15%–25%, they eliminate unscheduled downtime, reduce cavity re-polishing frequency, and extend tool production life from 1M to 5M+ shots."
    }
  ],
  'cleanroom-isbm-tooling-for-pharmaceutical-containers': [
    {
      question: "What cleanroom classifications apply to pharmaceutical packaging manufacturing?",
      answer: "Primary pharma container manufacturing typically operates under ISO Class 7 or Class 8 (Grade C or D) cleanroom standards, requiring air filtration, positive pressure differentials, and strict particle count monitoring."
    },
    {
      question: "How are moulds designed to prevent oil and grease contamination in cleanroom environments?",
      answer: "Cleanroom moulds feature DLC (Diamond-Like Carbon) coatings on sliding neck splits, solid graphite-impregnated bronze guide bushings, nickel-plated mould plates, and sealed cooling channels to eliminate oil mist and moisture leaks."
    },
    {
      question: "Why is neck dimensional consistency critical for child-resistant closures (CRC)?",
      answer: "Child-resistant safety closures rely on precise ratchet engagement and specific torque thresholds. Neck ovality exceeding ±0.005mm can result in closure cap slippage, failed child-resistance tests, or liquid medicine leakage."
    },
    {
      question: "What validation documentation is required for pharmaceutical tooling?",
      answer: "Pharma clients receive full DQ (Design Qualification), IQ (Installation Qualification), OQ (Operational Qualification), and FAT (Factory Acceptance Test) support, along with steel material certificates and Zeiss CMM 3D dimensional reports."
    },
    {
      question: "How do you achieve hermetic seal integrity for induction-sealed pill jars and syrup bottles?",
      answer: "We precision grind the top lip sealing land to within ±0.002mm of planarity (Ra < 0.1 µm), ensuring uniform 360-degree contact pressure when induction foil heat liners are bonded during automated bottling."
    }
  ],
  'scaling-from-16-to-72-cavities-pet-preform-tooling': [
    {
      question: "How do you prevent machine platen deflection under high tonnage in 72-cavity tooling?",
      answer: "At clamp forces exceeding 350 tons, machine platen deflection can cause central cavity short shots or parting line flash. We employ FEA-engineered pre-stressed EN31 support bolster pillars and thick alloy backplates to maintain sub-0.008mm central rigidity."
    },
    {
      question: "What manifold design ensures equal fill pressure across all 72 nozzles?",
      answer: "We implement naturally balanced 4-tier hot runner manifolds where flow path length, runner diameter, and shear history from sprue to nozzle #1 and nozzle #72 are identical, holding cavity fill variance under ±1.2%."
    },
    {
      question: "How do you mitigate Acetaldehyde (AA) generation in high-cavitation preform moulds?",
      answer: "By optimizing runner channel flow geometry, eliminating dead zones, and maintaining individual closed-loop PID thermocouple regulation at every nozzle tip, resin residence time is minimized to keep preform AA levels below 2.5 ppm."
    },
    {
      question: "What centering mechanism protects core stacks during rapid 2.5-second mold opening/closing?",
      answer: "We incorporate diamond-hardened interlocking taper guides on all four corners and centerlines, isolating thermal expansion differences between the 280°C hot runner and 8°C chilled cavity plates."
    },
    {
      question: "What chilled water flow rates are required to sustain a 72-cavity preform tool?",
      answer: "High-cavitation moulds require high-volume turbulent flow (Reynolds number > 4,500) at 8°C–10°C with dedicated in-line flowmeters for each zone to prevent localized thermal hot spots."
    }
  ],
  'ebm-extrusion-blow-mould-pinch-off-and-venting-design': [
    {
      question: "Why is pinch-off geometry critical for chemical Jerry can drop tests?",
      answer: "If the pinch-off blade is too sharp, it shears the molten plastic parison rather than forging opposing walls together. A double-angle pinch geometry (1.0mm–1.2mm flat land) delivers 95%+ parent material tensile weld strength capable of passing 2.0m UN drop tests."
    },
    {
      question: "Why are beryllium-copper inserts superior to tool steel along the bottom seam?",
      answer: "The bottom weld is the thickest part of the container. Beryllium-copper (Ampco / MoldMAX) conducts heat 4x faster than tool steel, freezing the weld bead rapidly, eliminating base rocker sag, and shortening cycle times by up to 18%."
    },
    {
      question: "How does micro-groove venting eliminate orange-peel imperfections on HDPE containers?",
      answer: "Perimeter EDM venting channels (0.025mm deep) paired with vapor-honed cavity textures allow pressurized parison air to exhaust instantly during 8–10 bar blow inflation, producing smooth walls and sharp Hazmat logo embossing."
    },
    {
      question: "What flash relief pocket depth is optimal for 5L to 20L Jerry can moulds?",
      answer: "A relief pocket depth between 2.2mm and 2.8mm with a 35° angle provides adequate space for excess parison resin to cushion without exerting high outward pressure against mould clamp platens."
    },
    {
      question: "Can these industrial EBM moulds integrate automated handle deflashing?",
      answer: "Yes, our tooling incorporates internal hydraulic or pneumatic punch mechanisms that cleanly punch out handle slug flash and bottom tail flash inside the mould before container ejection."
    }
  ]
};

// --------------------------------------------------------------------------
// 4. INFRASTRUCTURE PAGE FAQS (5 comprehensive facility FAQs)
// --------------------------------------------------------------------------
export const INFRASTRUCTURE_FAQS: FAQItem[] = [
  {
    question: "What high-precision CNC machinery powers Patel Mould Industries' toolroom?",
    answer: "Our 15,000 m² climate-controlled facility operates 5-axis high-speed machining centers from Makino and Mazak with spindle speeds up to 24,000 RPM, achieving sub-micron contour accuracy on complex multi-cavity preform and bottle mold geometries."
  },
  {
    question: "What are your EDM (Electrical Discharge Machining) toolroom capabilities?",
    answer: "We operate Sodick and Makino mirror-spark CNC die-sinking EDM machines achieving mirror surface finishes (Ra < 0.1 µm) without manual polishing, paired with precision 4-axis wire EDM centers holding split-line tolerances to ±0.002mm."
  },
  {
    question: "How is quality metrology verified inside your inspection laboratory?",
    answer: "Our quality assurance division operates in a dedicated 20°C temperature-controlled metrology lab equipped with a German Zeiss 3D CNC Coordinate Measuring Machine (CMM), Mitutoyo optical profile projectors, and digital surface roughness testers."
  },
  {
    question: "What in-house mold trial and testing equipment do you maintain?",
    answer: "We maintain in-house KraussMaffei, Haitian, and Nissei ASB injection and stretch-blow machines ranging from 100T to 1,200T clamping force. Every mould undergoes exhaustive T0/T1 trials with customer resin before dispatch."
  },
  {
    question: "Where is Patel Mould Industries located and can international clients visit?",
    answer: "Our corporate campus and toolroom are located at Precision Mould Park, Phase-IV GIDC, Gujarat, India. We welcome domestic and international clients for facility audits, mold design workshops, and FAT trial inspections."
  }
];

// --------------------------------------------------------------------------
// 5. ABOUT US PAGE FAQS (5 company history, capabilities, and trust FAQs)
// --------------------------------------------------------------------------
export const ABOUT_FAQS: FAQItem[] = [
  {
    question: "How long has Patel Mould Industries been manufacturing precision plastic moulds?",
    answer: "Established in 1994 in Gujarat, India, Patel Mould Industries has completed over 30 years of engineering mastery, delivering more than 1,500 high-precision moulds to converters, beverage bottlers, pharmaceutical firms, and FMCG brands globally."
  },
  {
    question: "What is your core manufacturing specialization?",
    answer: "We specialize in high-cavitation PET preform moulds (up to 96 cavities), single-stage ISBM bottle moulds for ASB and Aoki platforms, Extrusion Blow Molds (EBM) with beryllium copper pinch-offs, and custom wide-mouth jar tooling."
  },
  {
    question: "What certifications and quality management systems are in place?",
    answer: "Patel Mould Industries operates under strict ISO 9001:2015 certified quality management systems. All incoming tool steels carry certified European mill test certificates, and every dispatched tool is accompanied by a full 3D CMM inspection report."
  },
  {
    question: "Which global markets do you export moulds to?",
    answer: "In addition to serving premier packaging converters across all major industrial states in India, we regularly export high-precision tooling to clients in the Middle East, Africa, Southeast Asia, Europe, and North America with seaworthy VCI export packaging."
  },
  {
    question: "How does Patel Mould protect proprietary client container designs and CAD data?",
    answer: "We execute formal Non-Disclosure Agreements (NDAs) prior to receiving customer drawings. All 2D/3D CAD models, preform drawings, and proprietary tooling blueprints are stored in encrypted, access-restricted secure engineering servers."
  }
];
