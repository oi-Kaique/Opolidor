type Props = React.ComponentProps<"button"> & {
  variant?: "base" 
} 

const variants = {
  button: {
    base: "py-[12px] px-[16px] rounded-md font-bold text-white bg-[#00DF82] cursor-pointer hover:bg-[#00DF82]/80",
  }
}

export function Button({
 variant = "base",
 className,
...rest}: Props){
  return (
    <button
      className={`${variants.button[variant]} ${className}`}
      {...rest}
    />
  )
}