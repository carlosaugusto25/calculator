import { Text } from "./Text"

interface CalculatorDisplayProps {
    oparation: string;
    result: string
}

export function CalculatorDisplay({ oparation, result }: CalculatorDisplayProps) {
    return (
        <div className={`
                flex flex-col ga-2 px-[1.375rem]
                cursor-default select-none
            `}>
            <div className="flex intems center justify-end">
                <Text variant="muted">{oparation}</Text>
            </div>
            <div className={`flex items-center justify-between`}>
                <Text variant="muted">=</Text>
                <Text variant="blast">{result}</Text>
            </div>
        </div>
    )
}