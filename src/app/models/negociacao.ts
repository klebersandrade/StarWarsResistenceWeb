export interface Negociacao {
    id: number;
    alteracao_Dt: Date;
    criacao_Dt: Date;
    comprador_Id: number;
    vendedor_Id: number;
    comprador_Nome: string;
    vendedor_Nome: string;
}
