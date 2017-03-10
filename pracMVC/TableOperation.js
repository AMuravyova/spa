/**
 * Created by amurav on 09.03.2017.
 */
import TableServiceEntity from './TableServiceEntity'
import Entity from './Entity'
export default class TableOperation extends TableServiceEntity{

    addEntity(Entity) {
       this.appendChild(Entity);
    }

    removeEntity(Entity) {
        this.parentNode.removeChild(Entity);
    }

    updateEntity(Entity) {
        var entId = Entity.id;
        var oldEntity = document.getElementById(entId);
        if(oldEntity){
            this.parentNode.removeChild(oldEntity);
            this.parentNode.appendChild(Entity);
        }
        else{
            this.parentNode.appendChild(Entity);
        }
    }

}
