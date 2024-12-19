import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateYears(startYear: number = 2015): number[] {
  const currentYear = new Date().getFullYear();
  return Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i,
  );
}

type VehicleStaticResponse = {
  Count: number;
  Results: {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
  }[];
};

export async function getVehicleModels(makeId: string, year: string) {
  const baseUrl = process.env.NEXT_PUBLIC_NHTSA_API_BASE_URL;
  const format = process.env.NEXT_PUBLIC_API_FORMAT;

  try {
    const response = await fetch(
      `${baseUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=${format}`,
    );

    if (!response.ok) {
      throw new Error('Error while loading data');
    }

    const data: VehicleStaticResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
