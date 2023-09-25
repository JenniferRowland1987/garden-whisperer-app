export interface GardenPlant {
    userId: number;
    scienificName: string;
    commonName: string;
    nickName: string;
    datePlanted: Date;
    notes: string;
    lastWater: Date;
    sun: string;
    lastFertilization: Date;
    isHealthy: boolean;
    perenualId: number;
  }