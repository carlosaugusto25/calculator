import { textVariants, buttonVariants } from "../../variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    textVariant?: keyof typeof textVariants
    buttonVariant?: keyof typeof buttonVariants
}

export function Button({ children, className, textVariant = 'default', buttonVariant = 'default' }: ButtonProps) {
    return (
        <button
            className={`
                ${className} 
                ${textVariants[textVariant]} 
                ${buttonVariants[buttonVariant]}
                text-(--text) 
                font-(--font-sans) 
                bg-linear-(--gradient)
                hover:bg-linear-(--gradient-rover)
                shadow-(--shadow)
            `}>
            {children}
        </button>
    )
}