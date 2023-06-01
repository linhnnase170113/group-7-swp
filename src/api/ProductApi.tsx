export const getProductListByNameApi =async (productName: any) => {
    const response = await fetch(`http://localhost:8080/api/product/searchByName?productName=${productName}`)
    if (response.ok) {
        const product : any = await response.json()
        return product
    } else {
        return null
    }
}
export const getProductListByCategoryApi =async (categoryId: any) => {
    const response = await fetch(`http://localhost:8080/api/product/filterByCategory?categoryId=${categoryId}`)
    if (response.ok) {
        const productList : any = await response.json()
        console.log(productList)
        return productList
    } else {
        return null
    }
}