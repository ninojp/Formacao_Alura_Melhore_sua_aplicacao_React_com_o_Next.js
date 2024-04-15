import { Text } from "@alura/design-system/components/Text";
import { sum } from '@alura/utils/math/sum';

export default function HomeScreen() {
    return (
        <main>
            <Text tag='h1'>Home do Projeto</Text>
            <Text tag='p'>Importando Modulo Local: @alura/utils/math/sum sum(2,2):  {sum(2,2)}</Text>
        </main>
    );
}
