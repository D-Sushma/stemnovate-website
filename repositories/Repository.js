import axios from"axios";export const baseUrlBlog=process.env.NEXT_BASE_URL;export const baseUrlProduct=process.env.PRODUCT_BASE_URL;export const baseDomain=process.env.NEXT_BASE_URL;export const customHeaders={Accept:"application/json"};export const baseUrl=`${baseDomain}`;export default axios.create({baseUrl,headers:customHeaders});export const serializeQuery=a=>Object.keys(a).map(b=>`${encodeURIComponent(b)}=${encodeURIComponent(a[b])}`).join("&");