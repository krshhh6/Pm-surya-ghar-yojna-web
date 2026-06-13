export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  image: string;
}

export interface SolarModel {
  id: string;
  name: string;
  efficiency: number;
  cellType: 'Monocrystalline' | 'Bifacial' | 'Solar Shingles';
  roofCompat: string;
  warranty: number;
  pricePerKw: number;
  description: string;
}

export interface TenderCalculationResult {
  systemSizeKw: number;
  panelCount: number;
  estAnnualGenerationKwh: number;
  co2OffsetTons: number;
  estSavingsYearly: number;
  paybackYears: number;
}
