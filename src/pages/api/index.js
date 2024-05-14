export default function dpapi(request,response) {
    console.log(request.body)
    response.send("Passed")
}
