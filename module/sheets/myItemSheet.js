export default class SistemaXItemSheet extends ItemSheet{
    get template(){
        return `systems/mySystem/templates/sheets/${this.item.data.type}-sheet.html`;

    }
}