import { BehaviorSubject } from 'rxjs';

const SpinnerService = {
    _instance: null,   
    getInstance(){
        if(!this._instance){
            this._instance = {
                show: false,
                subject: new BehaviorSubject(),
                toggleShow(){
                    
                    this.show = !this.show;
                    this.subject.next(this.show);
                },
                isShowing(){
                    return this.show;
                }
            }

        }

        return this._instance;
    }
    
}

export default SpinnerService;

