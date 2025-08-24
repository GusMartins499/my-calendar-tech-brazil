export type EventType = 'presencial' | 'online' | 'híbrido' | 'tba';

export type BrazilianState = 
  | 'AC' | 'AL' | 'AP' | 'AM' | 'BA' | 'CE' | 'DF' | 'ES' | 'GO' | 'MA'
  | 'MT' | 'MS' | 'MG' | 'PA' | 'PB' | 'PR' | 'PE' | 'PI' | 'RJ' | 'RN'
  | 'RS' | 'RO' | 'RR' | 'SC' | 'SP' | 'SE' | 'TO';

export type Month = 
  | 'janeiro' | 'fevereiro' | 'março' | 'abril' | 'maio' | 'junho'
  | 'julho' | 'agosto' | 'setembro' | 'outubro' | 'novembro' | 'dezembro';

export type ArchiveStatus = 'active' | 'archived';

export type TechEventsBrazilApiResponse = {
  eventos: YearlyEvent[]
  tba: TbaEvent[]
}

export type YearlyEvent = {
  ano: number
  arquivado: boolean
  meses: MonthlyEvent[]
}

export type MonthlyEvent = {
  mes: Month
  arquivado: boolean
  eventos: EventDetails[]
}

export type EventDetails = {
  nome: string
  data: string[]
  url: string
  cidade: string
  uf: BrazilianState
  tipo?: EventType
}

export type TbaEvent = {
  nome: string
  url: string
  cidade: string
  uf: BrazilianState
  tipo: EventType
}