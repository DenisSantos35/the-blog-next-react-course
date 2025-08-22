type ButtonProps = {} & React.ComponentProps<'button'>; //caso queira estendender componente seu ou de outra lib vc utilza typeof nome do componente

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
