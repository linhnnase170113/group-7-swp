export const getProductListByNameApi = async (productName: any) => {
  const response = await fetch(
    `http://localhost:8080/api/product/searchByName?productName=${productName}`
  );
  if (response.ok && productName !== "") {
    const productList: any = await response.json();
    return productList;
  } else {
    return null;
  }
};
export const getProductListByCategoryApi = async (categoryId: any) => {
  console.log(
    `http://localhost:8080/api/product/filterByCategory?categoryId=${categoryId}`
  );
  const response = await fetch(
    `http://localhost:8080/api/product/filterByCategory?categoryId=${categoryId}`
  );
  if (response.ok) {
    const productList: any = await response.json();
    console.log(productList);
    return productList;
  } else {
    return null;
  }
};
export const getProductListApi = async () => {
  const response = await fetch(`http://localhost:8080/api/product/allProduct`);
  if (response.ok) {
    const productList: any = await response.json();
    return productList;
  } else {
    return [];
  }
};
export const getProductByProductIdApi = async (productId: any) => {
  const response = await fetch(
    `http://localhost:8080/api/product/getProductById?productId=${productId}`
  );
  if (response.ok) {
    const product: any = await response.json();
    return product;
  } else {
    return null;
  }
};
export const createProductApi = async (
  productName: any,
  categoryId: any,
  quantity: any,
  description: any,
  image: any,
  price: any
) => {
  const response = await fetch(
    "http://localhost:8080/api/product/createProduct",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        categoryId: categoryId,
        dateCreate: "",
        dateUpdate: "",
        description: description,
        image: image,
        price: price,
        productId: 0,
        productName: productName,
        quantity: quantity,
        status: "mới",
      }),
    }
  );
  if (response.ok) {
    return true;
  }
};
export const deleteProductApi = async (productIdList: any) => {
  const result = productIdList
    .map((productId: any) => `productIdList=${productId}&`)
    .join("");

  const response = await fetch(
    `http://localhost:8080/api/product/deleteProduct?${result}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (response.ok) {
    return true;
  }
};
