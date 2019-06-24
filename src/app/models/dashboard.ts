import { Item } from './item';

export interface Dashboard {
    qtdCadastrado: number;
    qtdTraidores: number;
    qtdRebeldes: number;
    porcTraidores: number;
    porcRebeldes: number;
    pontosPerdidos: number;
    recursos: Item[];
}
