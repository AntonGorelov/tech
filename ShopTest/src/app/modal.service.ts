import { without, find } from 'lodash';

export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        let modalToRemove = find(this.modals, { id: id });
        this.modals = without(this.modals, modalToRemove);
    }

    open(id: string) {
        let modal: any = find(this.modals, { id: id });
        modal.open();
    }

    close(id: string) {
        let modal: any = find(this.modals, { id: id });
        modal.close();
    }
}