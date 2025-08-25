import clsx from 'clsx';

type ButtonsVariants = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonsVariants;
  size?: ButtonSizes;
} & React.ComponentProps<'button'>; //caso queira estendender componente seu ou de outra lib vc utilza typeof nome do componente

export function Button({
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  const buttonsVariants: Record<ButtonsVariants, string> = {
    default: clsx('bg-blue-600 text-blue-100'),
    ghost: clsx('bg-slate-200 text-slate-900'),
    danger: clsx('bg-red-600 text-red-100'),
  };
  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(''),
    md: clsx(''),
    lg: clsx(''),
  };

  const buttonClasses = clsx(buttonsVariants[variant], buttonSizes[size]);

  return <button className={buttonClasses} {...props}></button>;
}
