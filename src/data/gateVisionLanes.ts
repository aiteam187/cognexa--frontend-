export interface GateVisionImage {
  src: string;
  alt: string;
}

export const gateVisionImages: Record<"composite" | "cameraHW" | "inAction" | "illustration", GateVisionImage> = {
  composite: {
    src: "/gatevision-composite.webp",
    alt: "GateVision camera reading a vehicle's license plate at a parking barrier gate",
  },
  cameraHW: {
    src: "/gatevision-camera-hw.webp",
    alt: "Illustration of a GateVision camera on a pole scanning a vehicle entering a parking lot through a barrier gate",
  },
  inAction: {
    src: "/gatevision-inaction.webp",
    alt: "GateVision camera at a highway toll lane recognizing a vehicle's plate number in real time",
  },
  illustration: {
    src: "/gatevision-illustration.webp",
    alt: "Illustration of a GateVision camera reading a vehicle's plate at a parking garage barrier",
  },
};
