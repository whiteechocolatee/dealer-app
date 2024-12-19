import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useVehicleMakes } from '@/hooks/use-get-makers';

type VehicleSelectorProps = {
  handleVehicleMake: (value: string) => void;
};

function VehicleSelector({ handleVehicleMake }: VehicleSelectorProps) {
  const { vehicleMakes, isLoading, error } = useVehicleMakes();

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md" />;
  }

  return (
    <Select onValueChange={handleVehicleMake}>
      <SelectTrigger>
        <SelectValue placeholder="Select a maker" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Makers</SelectLabel>
          {vehicleMakes.map(vehicleMake => (
            <SelectItem
              key={vehicleMake.MakeId}
              value={String(vehicleMake.MakeId)}
            >
              {vehicleMake.MakeName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default VehicleSelector;
