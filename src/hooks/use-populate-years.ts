interface UseYearSelectorReturn {
  years: number[];
  currentYear: number;
}

export const usePopulateYears = (
  startYear: number = 2015,
): UseYearSelectorReturn => {
  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i,
  );

  return {
    years,
    currentYear,
  };
};
