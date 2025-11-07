import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * @utility formatDate
 * @summary Formats date strings to Brazilian Portuguese format
 * @domain core
 * @type utility-function
 * @category formatting
 *
 * @param {string | Date} date - Date to format
 * @param {string} pattern - Format pattern (default: 'dd/MM/yyyy')
 * @returns {string} Formatted date string
 */
export const formatDate = (date: string | Date, pattern: string = 'dd/MM/yyyy'): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, pattern, { locale: ptBR });
  } catch (error: unknown) {
    console.error('Error formatting date:', error);
    return '';
  }
};
