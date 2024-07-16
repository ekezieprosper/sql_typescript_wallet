import DomainError from "./domain-error";

class BadRequest extends DomainError {
    // protected error_name = "bad_request";
    // protected http_code = 400;

    // constructor(message: string, data:any = null,error: Error| null, success = false){
    //     super(success,error_name, message, data, )
    // }
    // this.Error.capture
};

export default BadRequest;
