import type { VariantProps } from 'class-variance-authority';
import type { badgeVariants } from '@/components/ui/badge';

export type EventType = 'presencial' | 'online' | 'híbrido' | 'tba';

export type BrazilianState =
  | 'AC'
  | 'AL'
  | 'AP'
  | 'AM'
  | 'BA'
  | 'CE'
  | 'DF'
  | 'ES'
  | 'GO'
  | 'MA'
  | 'MT'
  | 'MS'
  | 'MG'
  | 'PA'
  | 'PB'
  | 'PR'
  | 'PE'
  | 'PI'
  | 'RJ'
  | 'RN'
  | 'RS'
  | 'RO'
  | 'RR'
  | 'SC'
  | 'SP'
  | 'SE'
  | 'TO';

export type Month =
  | 'janeiro'
  | 'fevereiro'
  | 'março'
  | 'abril'
  | 'maio'
  | 'junho'
  | 'julho'
  | 'agosto'
  | 'setembro'
  | 'outubro'
  | 'novembro'
  | 'dezembro';

export type TechEventsBrazilApiResponse = {
  eventos: YearlyEvent[];
  tba: TbaEvent[];
};

export type YearlyEvent = {
  ano: number;
  arquivado: boolean;
  meses: MonthlyEvent[];
};

export type MonthlyEvent = {
  mes: Month;
  arquivado: boolean;
  eventos: EventDetails[];
};

export type EventDetails = {
  nome: string;
  data: string[];
  url: string;
  cidade: string;
  uf: BrazilianState;
  tipo?: EventType;
};

export type TbaEvent = {
  nome: string;
  url: string;
  cidade: string;
  uf: BrazilianState;
  tipo: EventType;
};

export type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>;

export type TechEvent = {
  name: string;
  city: string;
  uf: BrazilianState;
  url: string;
  eventDays: string;
  type: string;
  badge: BadgeVariant;
  month: string;
  monthNumber: string;
};

export type Filters = {
  month: string
}