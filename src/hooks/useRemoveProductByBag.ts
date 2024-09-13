const useRemoveProductByBag = async (idClient:string,idProduct:string[]|string) => {
    try {
        fetch(`http://localhost:3333/account/removeProductIntoBag/${idClient}`,{
            method:"PATCH",
            body:JSON.stringify({idProduct}),
            headers:{
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error)
    }


}

export default useRemoveProductByBag