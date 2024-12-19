import { ApiResponse as VehicleMakeResponse } from '@/hooks/use-get-makers';
import { generateYears, getVehicleModels } from '@/lib/utils';

export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_NHTSA_API_BASE_URL;
    const format = process.env.NEXT_PUBLIC_API_FORMAT;

    const response = await fetch(
      `${baseUrl}/GetMakesForVehicleType/car?format=${format}`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch vehicle makes');
    }

    const data: VehicleMakeResponse = await response.json();
    const makeIds = data.Results.map(make => make.MakeId.toString());

    const years = generateYears();

    return makeIds.map(makeId => {
      const randomYear = years[Math.floor(Math.random() * years.length)];
      return {
        makeId,
        year: randomYear.toString(),
      };
    });
  } catch (error) {
    return [];
  }
}

type ResultPageProps = {
  params: {
    makeId: string;
    year: string;
  };
};

export default async function ResultPage({ params }: ResultPageProps) {
  const { makeId, year } = params;

  try {
    const data = await getVehicleModels(makeId, year);

    return (
      <div className="container h-svh mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Models for {year}</h1>

        {data.Count === 0 ? (
          <div className="flex h-full items-center justify-center">
            No models found for {year}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.Results.map(model => (
              <div
                key={model.Model_ID}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="font-semibold text-lg">{model.Model_Name}</h2>
                <p className="text-sm text-gray-600">
                  Manufacturer: {model.Make_Name}
                </p>
                <p className="text-sm text-gray-600">
                  Model ID: {model.Model_ID}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-red-500">An error occurred while loading data</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }
}
