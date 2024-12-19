import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePopulateYears } from '@/hooks/use-populate-years';
import React from 'react';

type YearSelectorProps = {
  handleYear: (value: string) => void;
};

function YearSelector({ handleYear }: YearSelectorProps) {
  const { years } = usePopulateYears();

  return (
    <Select onValueChange={handleYear}>
      <SelectTrigger>
        <SelectValue placeholder="Select a year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Years</SelectLabel>
          {years.map(year => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default YearSelector;
