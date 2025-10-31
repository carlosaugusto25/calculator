import { Button } from "./Button";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { Card } from "./Card";

export function Calculator() {
    return (
        <Card className={
            `flex flex-col gap-6.5 w-89 pt-14 px-8 pb-8`
        }>
            <CalculatorDisplay oparation='1 + 1' result='2' />
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <Button className="w-16 h-16">CE</Button>
                    <Button className="flex-1 h-16">C</Button>
                    <Button className="w-16 h-16" buttonVariant="primary">/</Button>
                </div>
                <div className="flex gap-3">
                    <Button className="w-16 h-16">7</Button>
                    <Button className="w-16 h-16">8</Button>
                    <Button className="w-16 h-16">9</Button>
                    <Button className="w-16 h-16" buttonVariant="primary">*</Button>
                </div>
                <div className="flex gap-3">
                    <Button className="w-16 h-16">4</Button>
                    <Button className="w-16 h-16">5</Button>
                    <Button className="w-16 h-16">6</Button>
                    <Button className="w-16 h-16" buttonVariant="primary">-</Button>
                </div>
                <div className="flex gap-3">
                    <Button className="w-16 h-16">1</Button>
                    <Button className="w-16 h-16">2</Button>
                    <Button className="w-16 h-16">3</Button>
                    <Button className="w-16 h-16" buttonVariant="primary">+</Button>
                </div>
                <div className="flex gap-3">
                    <Button className="flex-1 h-16">0</Button>
                    <Button className="w-16 h-16">,</Button>
                    <Button className="w-16 h-16" buttonVariant="primary">=</Button>
                </div>
            </div>
        </Card>
    )
}