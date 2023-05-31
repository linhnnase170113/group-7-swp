export const getCategoryListApi = async () => {
    const response = await fetch("http://localhost:8080/api/category")
    if (response.ok) {
        const categoryList : any =  await response.json()
    return categoryList;
    } 
    return null;
}