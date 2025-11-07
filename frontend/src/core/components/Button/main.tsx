import { getButtonClassName } from './variants';
import type { ButtonProps } from './types';

/**
 * @component Button
 * @summary Reusable button component with multiple variants and sizes
 * @domain core
 * @type ui-component
 * @category form
 *
 * @props
 * @param {ButtonProps} props - Component properties
 *
 * @styling
 * - Variants: primary, secondary, danger, ghost
 * - Sizes: sm, md, lg
 * - Responsive: Full width option
 *
 * @accessibility
 * - Keyboard: Fully keyboard accessible
 * - ARIA: Proper button semantics
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getButtonClassName({ variant, size, fullWidth, className })}
    >
      {children}
    </button>
  );
};
