import type { TwColor } from './twColor'
import type { TwColorLevel } from './twColorLevel'
import type { MultiMerged } from 'types/utilities'

export type TwThemeColor = MultiMerged<TwColor, TwColorLevel, '-'>
