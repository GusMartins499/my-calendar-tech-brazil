'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod/v4';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  CURRENT_MONTH,
  MONTH_LABEL_TO_NUMBER,
  MONTHS,
} from '@/utils/map-month-number';

const filtersSchema = z.object({
  month: z.enum(MONTH_LABEL_TO_NUMBER),
});

type FilterSchema = z.infer<typeof filtersSchema>;

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { control, handleSubmit, watch } = useForm<FilterSchema>({
    resolver: zodResolver(filtersSchema),
    defaultValues: {
      month: CURRENT_MONTH,
    },
  });

  const watchedMonth = watch('month');
  const onlyFutureMonths = MONTHS.filter(
    (month) => month.value >= Number(CURRENT_MONTH)
  );

  useEffect(() => {
    if (watchedMonth) {
      const params = new URLSearchParams(searchParams);
      params.set('month', watchedMonth);
      router.push(`/?${params.toString()}`);
    }
  }, [watchedMonth, router, searchParams]);

  const handleFilter = ({ month }: FilterSchema) => {
    const params = new URLSearchParams(searchParams);
    params.set('month', month);
    router.push(`/?${params.toString()}`);
  };

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="font-semibold text-sm">Filtros:</span>
      <Controller
        control={control}
        name="month"
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              disabled={disabled}
              name={name}
              onValueChange={onChange}
              value={value}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {onlyFutureMonths.map((month) => (
                  <SelectItem key={month.value} value={String(month.value)}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        }}
      />
    </form>
  );
}
