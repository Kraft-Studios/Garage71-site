import bmwLift from "../assets/garage71/workshop/garage71-bmw-m3-lift.jpg";
import bmwX5 from "../assets/garage71/workshop/garage71-bmw-x5-bay.jpg";
import cayenneBay from "../assets/garage71/workshop/garage71-porsche-cayenne-bay.jpg";
import q7Bay from "../assets/garage71/workshop/garage71-audi-q7-bay.jpg";
import workshopBayCars from "../assets/garage71/workshop/garage71-workshop-bay-cars.jpg";

import z350 from "../assets/garage71/performance/garage71-350z-build.jpg";
import audiIntake from "../assets/garage71/performance/garage71-audi-intake-pipe.jpg";
import s3Intake from "../assets/garage71/performance/garage71-audi-s3-intake.jpg";

import flexpipe from "../assets/garage71/exhaust/garage71-exhaust-fab-flexpipe.jpg";
import underbody from "../assets/garage71/exhaust/garage71-underbody-exhaust.jpg";
import downpipeBay from "../assets/garage71/exhaust/garage71-downpipe-engine-bay.jpg";
import downpipeClose from "../assets/garage71/exhaust/garage71-downpipe-closeup.jpg";
import tipFab1 from "../assets/garage71/exhaust/garage71-exhaust-tip-fab-1.jpg";
import elbowFab from "../assets/garage71/exhaust/garage71-exhaust-elbow-fab.jpg";
import mufflerFab from "../assets/garage71/exhaust/garage71-muffler-fab.jpg";

import rangerBlue from "../assets/garage71/vehicles/garage71-ford-ranger-blue.jpg";
import rangerLifted from "../assets/garage71/vehicles/garage71-ranger-lifted.jpg";
import raptorBlack1 from "../assets/garage71/vehicles/garage71-ford-raptor-black-1.jpg";
import raptorBlack2 from "../assets/garage71/vehicles/garage71-ford-raptor-black-2.jpg";
import raptorCarport2 from "../assets/garage71/vehicles/garage71-raptor-carport-2.jpg";

import trackLineup1 from "../assets/garage71/gallery/garage71-trackday-lineup-1.jpg";
import trackLineup2 from "../assets/garage71/gallery/garage71-trackday-lineup-2.jpg";
import streetLineup from "../assets/garage71/gallery/garage71-street-lineup-drift.jpg";
import trackAerial from "../assets/garage71/gallery/garage71-trackday-aerial.jpg";
import ownerYellow from "../assets/garage71/gallery/garage71-owner-yellow-180sx.jpg";
import eventYellow from "../assets/garage71/gallery/garage71-event-yellow-180sx.jpg";

import storefrontDay from "../assets/garage71/hero/garage71-storefront-day.webp";
import storefrontDrift from "../assets/garage71/hero/garage71-storefront-yellow-drift.webp";
import storefrontCarsDay from "../assets/garage71/workshop/garage71-storefront-cars-day.webp";
import storefrontWideDay from "../assets/garage71/workshop/garage71-storefront-wide-day.webp";

// size controls the masonry span: "tall" | "wide" | "large" | undefined (default)
// Every entry here has been individually verified against its source photo —
// none are promotional poster graphics.
export const galleryItems = [
  { id: "g01", src: storefrontDay, alt: "Garage71 workshop building and forecourt in Kimberley", category: "workshop", size: "wide" },
  { id: "g02", src: bmwLift, alt: "BMW M3 raised on a four-post lift inside the Garage71 workshop", category: "workshop", size: "tall" },
  { id: "g03", src: z350, alt: "Nissan 350Z performance build with Garage71 windscreen branding", category: "performance" },
  { id: "g04", src: trackLineup1, alt: "Garage71 club cars lined up at a Kimberley race track event", category: "vehicles", size: "wide" },
  { id: "g05", src: tipFab1, alt: "Custom Garage71 exhaust tip being fabricated in-house", category: "performance" },
  { id: "g06", src: cayenneBay, alt: "Porsche Cayenne in for service at Garage71", category: "workshop" },
  { id: "g07", src: raptorBlack1, alt: "Lifted Ford Raptor with off-road accessories", category: "vehicles", size: "tall" },
  { id: "g08", src: s3Intake, alt: "Audi S3 engine bay with performance cold air intake", category: "performance" },
  { id: "g09", src: streetLineup, alt: "Garage71 drift and performance cars on a street meet", category: "vehicles", size: "large" },
  { id: "g11", src: mufflerFab, alt: "Stainless exhaust muffler stamped with the Garage71 name", category: "performance" },
  { id: "g12", src: q7Bay, alt: "Audi Q7 parked inside the Garage71 workshop bay", category: "workshop" },
  { id: "g13", src: raptorCarport2, alt: "Ford Ranger Raptor with off-road accessories under carport", category: "vehicles" },
  { id: "g14", src: underbody, alt: "Custom stainless exhaust system fabricated for a client vehicle", category: "performance", size: "tall" },
  { id: "g15", src: trackAerial, alt: "Aerial view of Garage71 club cars at a track day", category: "vehicles", size: "wide" },
  { id: "g17", src: elbowFab, alt: "Hand-formed stainless steel exhaust elbow, Garage71 fabrication", category: "performance" },
  { id: "g18", src: rangerLifted, alt: "Ford Ranger fitted with a lift kit and off-road wheels", category: "vehicles" },
  { id: "g20", src: storefrontDrift, alt: "Yellow drift-styled Nissan 240SX parked outside Garage71", category: "vehicles", size: "wide" },
  { id: "g21", src: downpipeClose, alt: "Garage71-branded turbo downpipe fabrication", category: "performance" },
  { id: "g22", src: bmwX5, alt: "BMW X5 with the bonnet open for diagnostics", category: "workshop" },
  { id: "g23", src: raptorBlack2, alt: "Ford Raptor front end with LED lighting and red Ford badge", category: "vehicles" },
  { id: "g24", src: audiIntake, alt: "Polished intake piping on an Audi performance engine bay", category: "performance", size: "tall" },
  { id: "g25", src: ownerYellow, alt: "Garage71 client with a 240SX drift project car", category: "vehicles" },
  { id: "g26", src: flexpipe, alt: "Stainless flex-pipe section during exhaust fabrication", category: "performance" },
  { id: "g27", src: rangerBlue, alt: "Blue Ford Ranger with Garage71 windscreen branding", category: "vehicles" },
  { id: "g28", src: workshopBayCars, alt: "Vehicles queued for service inside the Garage71 workshop bay", category: "workshop" },
  { id: "g29", src: eventYellow, alt: "Garage71 drift car at a community motoring event", category: "vehicles" },
  { id: "g30", src: downpipeBay, alt: "Garage71-branded downpipe installed in an engine bay", category: "performance" },
  { id: "g31", src: storefrontCarsDay, alt: "Client vehicles parked outside the Garage71 workshop", category: "workshop" },
  { id: "g33", src: storefrontWideDay, alt: "Wide daytime view of the Garage71 workshop premises", category: "workshop", size: "wide" },
  { id: "g34", src: trackLineup2, alt: "Garage71 club cars lined up at a Kimberley race track event", category: "vehicles" },
];

export const galleryCategories = ["All", "Workshop", "Vehicles", "Performance"];
