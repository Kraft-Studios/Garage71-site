import q7Bay from "../assets/garage71/workshop/garage71-audi-q7-bay.jpg";
import bmwLift from "../assets/garage71/workshop/garage71-bmw-m3-lift.jpg";
import intake from "../assets/garage71/performance/garage71-audi-s3-intake.jpg";
import exhaustFab from "../assets/garage71/exhaust/garage71-exhaust-tip-fab-1.jpg";
import downpipe from "../assets/garage71/exhaust/garage71-downpipe-engine-bay.jpg";
import cayenneBay from "../assets/garage71/workshop/garage71-porsche-cayenne-bay.jpg";
import raptorCarport2 from "../assets/garage71/vehicles/garage71-raptor-carport-2.jpg";
import raptorTyres from "../assets/garage71/vehicles/garage71-ford-raptor-black-1.jpg";
import rangerLifted from "../assets/garage71/vehicles/garage71-ranger-lifted.jpg";

// Service list sourced directly from Garage71's own "Our Services" signage
// and marketing posters — not assumed or invented. Images are all genuine
// Garage71 photography (verified individually against the source files).
export const services = [
  {
    id: "service",
    name: "Service — Major & Minor",
    description:
      "Full major and minor servicing to keep your vehicle running reliably, from routine oil and filter changes to complete inspections.",
    image: q7Bay,
  },
  {
    id: "diagnostics",
    name: "Vehicle Diagnostics",
    description:
      "Advanced diagnostic equipment to trace warning lights and faults accurately, so repairs are targeted and effective.",
    image: bmwLift,
  },
  {
    id: "ecu-remapping",
    name: "ECU Remapping",
    description:
      "Precision ECU remapping to unlock more power and improve efficiency, tailored to your vehicle.",
    image: intake,
  },
  {
    id: "exhausts",
    name: "Exhausts",
    description:
      "Exhaust repairs, replacements and fully custom fabricated systems, built in-house for better flow and sound.",
    image: exhaustFab,
  },
  {
    id: "conversions",
    name: "Conversions & Custom Fabrication",
    description:
      "Vehicle conversions and custom fabrication work, from performance upgrades to off-road builds.",
    image: downpipe,
  },
  {
    id: "brakes",
    name: "Brake Service",
    description:
      "Brake inspections, pad and disc replacement, and fluid services to keep every stop confident and safe.",
    image: cayenneBay,
  },
  {
    id: "batteries",
    name: "Batteries",
    description: "Battery testing, fitment and replacement to keep your vehicle starting reliably.",
    image: raptorCarport2,
  },
  {
    id: "tyres",
    name: "Tyres",
    description: "Tyre fitment and service, keeping you safely in contact with the road.",
    image: raptorTyres,
  },
  {
    id: "accessories",
    name: "Accessories",
    description:
      "Bull bars, canopies, suspension upgrades, lighting and interior accessories fitted to suit your vehicle and lifestyle.",
    image: rangerLifted,
  },
];
