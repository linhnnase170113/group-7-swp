export const getProductListByNameApi =async (productName: any) => {
    const response = await fetch(`http://localhost:8080/api/product/searchByName?productName=${productName}`)
    if (response.ok && productName !== "") {
        const productList : any = await response.json()
        return productList
    } else {
        return []
    }
}
export const getProductListByCategoryApi =async (categoryId: any) => {
    const response = await fetch(`http://localhost:8080/api/product/filterByCategory?categoryId=${categoryId}`)
    if (response.ok) {
        const productList : any = await response.json()
        console.log(productList)
        return productList
    } else {
        return []
    }
}
export const getProductListApi =async () => {
    const response = await fetch(`http://localhost:8080/api/product/allProduct`)
    if (response.ok) {
        const productList : any = await response.json()
        return 
    } else {
        return []
    }
}
export const getProductByProductIdApi =async (productId: any) => {
    const response = await fetch(`http://localhost:8080/api/product/allProduct`)
    if (response.ok) {
        const productList : any = await response.json()
        console.log(productList)
        return productList.find((item: any) => Number.parseInt(productId) === item.productId)
    } else {
        return null
    }
}