class DomainError extends Error {
    protected error_name = "domain_error";
    protected success: boolean;
    protected data: { [key: string]: any};
    protected http_code = 400;

    constructor(
        success = false,
        error_name: "domain_error", 
        message: string,
        data: { [key: string]: any}
    ){
        super(message)
        this.success = success;
        this.data = data;
    }

    public getSuccess(){
        return this.success;
    }
    
    public getHttpCode(){
        return this.http_code;
    }
};

export default DomainError;
