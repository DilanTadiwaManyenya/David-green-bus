export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) {
  const baseStyles = 'font-bold rounded-lg transition transform hover:scale-105'
  
  const variants = {
    primary: 'bg-primary-green text-white hover:bg-dark-green',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    accent: 'bg-accent-yellow text-gray-900 hover:bg-yellow-400',
    outline: 'border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}