import { getLoadingSpinnerClassName } from './variants';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Displays a loading spinner with configurable size and styling
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @props
 * @param {LoadingSpinnerProps} props - Component properties
 *
 * @styling
 * - Variants: small, medium, large
 * - Responsive: Adapts to container size
 *
 * @accessibility
 * - ARIA: role="status" with aria-label
 * - Screen Reader: Announces loading state
 */
export const LoadingSpinner = ({ size = 'medium', className }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div
        className={getLoadingSpinnerClassName({ size, className })}
        role="status"
        aria-label="Carregando"
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
};
