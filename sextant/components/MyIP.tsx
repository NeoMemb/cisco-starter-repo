import { type IpProps } from '../Types/components.tsx'

const Ip = ({ ipAddress, className }: IpProps) => {
    return (
        <div className={className}>Your IP address is {ipAddress}</div>
    )
}

export { Ip }