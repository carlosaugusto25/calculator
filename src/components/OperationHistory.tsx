import { Card } from "./Card";
import { Text } from "./Text";

export function OperationHistory() {
    return (
        <Card className="py-10 px-8 w-full">
            <Text variant="heading" className="mb-4 size-8 w-full">Histórico de oprações</Text>
            <ul className="flex flex-col gap-3">
                <li><Text>1 + 1 = 2</Text></li>
                <li><Text>2 + 3 + 1 = 2</Text></li>
                <li><Text>2 + 3 = 5</Text></li>
            </ul>
        </Card>
    )
}