import request from '@/utils/request';
import { TableListParams } from '@/pages/Product/Supplier/data';

export async function query(params: TableListParams) {
  return request('/system/supplier/list', {
    params,
  });
}

export async function remove(ids: string[]) {
  return request('/system/supplier/delete', {
    method: 'delete',
    data: {
      ids,
    },
  });
}

export async function add(params: TableListParams) {
  return request('/system/supplier/create', {
    method: 'post',
    data: {
      ...params,
    },
  });
}

export async function get(id: string) {
  return request(`/system/supplier/get/${id}`, {});
}

export async function update(params: TableListParams) {
  return request('/system/supplier/update', {
    method: 'put',
    data: {
      ...params,
    },
  });
}

export async function exportList(params: TableListParams) {
  return request('/system/supplier/export', {
    params,
  });
}

export async function getProduct(data: { code: string }) {
  return request('/system/supplier/getProduct', {
    method: 'put',
    data: {
      ...data,
    },
  });
}
