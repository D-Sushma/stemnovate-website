import CollectionRepository from"~/repositories/CollectionRepository";import ProductRepository from"~/repositories/ProductRepository";export async function getProductsByCollectionHelper(a,b=12){let c;if(a)c=await CollectionRepository.getProductsByCollectionSlug(a);else{c=await ProductRepository.getProducts({_limit:b})}return c?c:null}export async function getProducts(a){let b;if(a)b=await ProductRepository.getProducts(a);else{b=await ProductRepository.getProducts({_limit:12})}return b?b:null}export async function getProductsByCategoriesHelper(a,b=12){let c;if(a)c=await CollectionRepository.getProductsByCategorySlug(a);else{c=await ProductRepository.getProducts({_limit:b})}return c?c:null}