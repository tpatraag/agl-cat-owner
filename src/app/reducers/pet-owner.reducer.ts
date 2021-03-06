import { ReducerAction } from '../models/reducerAction.model';
import { ActionType } from '../actions/action-type.enum';
import { PetOwner } from '../models/pet-owner.model';
// import { Action } from 'redux';

const petOwnerReducer = (state: any[] = [], action: ReducerAction) => {
    switch (action.type) {
        case ActionType.PETOWNER_LOAD:
            // console.log('state: ' + JSON.stringify(state));
            // console.log('\ndata: ' + JSON.stringify(action.obj as PetOwner[]));
            return action.payload as PetOwner[];
        default:
            return state;
    }
};

export { petOwnerReducer as petOwners };
