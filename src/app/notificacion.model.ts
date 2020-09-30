export class Notifi {

    titulo: string;
    creadaEn: Date;
    desc: string;

    constructor( titulo: string, desc: string ) {
        this.creadaEn = new Date();
        this.titulo = titulo;
        this.desc = desc;        
    }

}