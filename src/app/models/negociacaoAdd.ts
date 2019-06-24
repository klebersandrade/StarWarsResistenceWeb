import { NegociacaoItemAdd } from './negociacaoItemAdd';

export interface NegociacaoAdd {
    comprador: number;
    vendedor: number;
    itensComprador: NegociacaoItemAdd[];
    itensVendedor: NegociacaoItemAdd[];
}
