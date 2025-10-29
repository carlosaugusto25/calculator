interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={`${className || ''} bg-(--background) shadow-(--shadow) rounded-2xl`}>{children}</div>
    )
}