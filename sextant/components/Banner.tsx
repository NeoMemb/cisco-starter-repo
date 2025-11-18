import { type BannerProps } from '../Types/components.tsx'

const Banner = ({ children, className }: BannerProps) => {
  return (
    <div className={`banner ${className}`}>
      {children}
    </div>
  )
}

export { Banner }