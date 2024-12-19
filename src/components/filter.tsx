'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import VehicleSelector from '@/components/vehicle-selector';
import YearSelector from '@/components/year-selector';

import Link from 'next/link';
import { useState } from 'react';

function Filter() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [vehicleMakeId, setVehicleMakeId] = useState<string | null>(null);

  const isDisabled = !selectedYear || !vehicleMakeId;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Car Dealer Filter</CardTitle>
        <CardDescription>
          Select the year and vehicle, and press the &quot;Next&quot; button for
          the results
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        <YearSelector handleYear={setSelectedYear} />
        <VehicleSelector handleVehicleMake={setVehicleMakeId} />
      </CardContent>
      <CardFooter>
        {isDisabled ? (
          <Button disabled className="w-full">
            Next
          </Button>
        ) : (
          <Button asChild className="w-full">
            <Link href={`result/${vehicleMakeId}/${selectedYear}`}>Next</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default Filter;
