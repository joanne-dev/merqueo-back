export type Response = {
    status: number;
    data: any;
}
class ResponseMapper {
    mapResponseSuccessful(data: any): Response{
        return {
            status: 200,
            data
        }
    }
    mapResponseFailed(data: any){
        return {
            status: 500,
            data
        }
    }
}
const responseMapper = new ResponseMapper();
export default responseMapper;
