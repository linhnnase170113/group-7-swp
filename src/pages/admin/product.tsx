import React from 'react'
import ProductTable from '@/component/admin-component/ProductTable'
import AdminLayout from '@/layout/AdminLayout'
export default function Product() {
  return (
    <AdminLayout >
        <ProductTable productList={[]}/>
    </AdminLayout>
  )
}
