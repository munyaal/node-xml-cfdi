import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';
import { AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement } from '../types';

export class ComprobanteConceptoImpuestosTraslado {
    private _Base: string;
    private _Impuesto: ImpuestoEnum;
    private _TipoFactor: TipoFactorEnum;
    private _TasaOCuota?: string;
    private _Importe?: string;

    constructor(params: AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement) {
        this.Attributes = params
    }

    set Attributes(params: AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }

    get Attributes(): AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement {
        return {
            Base: this.Base,
            Impuesto: this.Impuesto,
            TipoFactor: this.TipoFactor,
            TasaOCuota: this.TasaOCuota,
            Importe: this.Importe
        }
    }


    get Importe(): string | undefined {
        return this._Importe;
    }

    set Importe(value: string | undefined) {
        this._Importe = value;
    }

    get TasaOCuota(): string | undefined {
        return this._TasaOCuota;
    }

    set TasaOCuota(value: string | undefined) {
        this._TasaOCuota = value;
    }

    get Impuesto(): ImpuestoEnum {
        return this._Impuesto;
    }

    set Impuesto(value: ImpuestoEnum) {
        this._Impuesto = value;
    }

    get TipoFactor(): TipoFactorEnum {
        return this._TipoFactor;
    }

    set TipoFactor(value: TipoFactorEnum) {
        this._TipoFactor = value;
    }

    get Base(): string {
        return this._Base;
    }

    set Base(value: string) {
        this._Base = value;
    }
}
