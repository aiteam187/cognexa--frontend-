export interface ANPRImage {
  src: string;
  alt: string;
}

export const anprImages: Record<"composite" | "cameraHW" | "inAction" | "illustration", ANPRImage> = {
  composite: {
    src: "/anpr-composite.webp",
    alt: "ANPR camera reading a vehicle's license plate at a parking barrier gate",
  },
  cameraHW: {
    src: "/anpr-camera-hw.webp",
    alt: "Illustration of an ANPR camera on a pole scanning a vehicle entering a parking lot through a barrier gate",
  },
  inAction: {
    src: "/anpr-inaction.webp",
    alt: "ANPR camera at a highway toll lane recognizing a vehicle's plate number in real time",
  },
  illustration: {
    src: "/anpr-illustration.webp",
    alt: "Illustration of an ANPR camera reading a vehicle's plate at a parking garage barrier",
  },
};
