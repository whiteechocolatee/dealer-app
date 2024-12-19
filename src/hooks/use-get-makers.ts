import { useState, useEffect } from 'react';

export interface VehicleMake {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

interface ApiResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleMake[];
}

export function useVehicleMakes() {
  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchVehicleMakes() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_NHTSA_API_BASE_URL;
        const format = process.env.NEXT_PUBLIC_API_FORMAT;

        const response = await fetch(
          `${baseUrl}/GetMakesForVehicleType/car?format=${format}`,
        );

        if (!response.ok) {
          throw new Error('Failed to fetch vehicle makes');
        }

        const data: ApiResponse = await response.json();
        setVehicleMakes(data.Results);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchVehicleMakes();
  }, []);

  return { vehicleMakes, isLoading, error };
}
