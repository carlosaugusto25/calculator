import { textVariants } from '../../variants';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: keyof typeof textVariants
    children: React.ReactNode
    className?: string
}

export function Text({ variant = 'default', children, className }: TextProps) {
    return <p className={`text-(--text) font-(--font-sans) ${textVariants[variant]} ${className || ''} `}>{children}</p>
}