import validator from 'validator';

const ERROR_EMPTY = "Field can not be empty";

const ValidatorService = {
    _instance: null,
    getInstance(){
        if(!this._instance){
            this._instance = {
               isEmpty(val){
                    if(!val){
                       return ERROR_EMPTY
                    }
                    else if( validator.isEmpty(val, { ignore_whitespace: true})){
                        return ERROR_EMPTY;
                    }
                    return '';
               }
            }
        }

        return this._instance;

    }
}

export default ValidatorService;