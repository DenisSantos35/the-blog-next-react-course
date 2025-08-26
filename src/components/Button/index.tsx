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
    default: clsx('bg-blue-600 hover:bg-blue-700 text-blue-100'),
    ghost: clsx('bg-slate-300 hover:bg-slate-400 text-slate-900'),
    danger: clsx('bg-red-600 hover:bg-red-700 text-red-100'),
  };
  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(
      'text-xs/tight',
      'py-1',
      'px-2',
      'rounded-sm',
      '[&_svg]:w-3 [&_svg]:h-3 gap-1',
    ),
    md: clsx(
      'text-base/tight',
      'py-2',
      'px-4',
      'rounded-md',
      '[&_svg]:w-4 [&_svg]:h-4 gap-2',
    ),
    lg: clsx(
      'text-lg/tight',
      'py-4',
      'px-6',
      'rounded-lg',
      '[&_svg]:w-5 [&_svg]:h-5 gap-3',
    ),
  };

  const buttonClasses = clsx(
    buttonsVariants[variant],
    buttonSizes[size],
    'flex items-center justify-center cursor-pointer',
    'transition',
    'disabled:bg-slate-200',
    'disabled:text-slate-400',
    'disabled:cursor-not-allowed',
    props.className,
  );

  return <button {...props} className={buttonClasses}></button>;
}
